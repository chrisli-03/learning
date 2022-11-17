#### Section introduction

multiple applications will inevitably need to communicate with one another

two patterns of communication

1. synchronous communications (application to application)

2. asynchronous/event based (application to queue to application)

synchronous between applications can be problematic if there are sudden spikes of traffic

what if you need to suddenly encode 1000 videos but usually its 10?

in that case its better to decouple your applications

- using sqs: queue model

- using sns: pub/sub model

- using kinesis: real time streaming model

these services can scale indenpendently from application

#### Amazon sqs whats a queue?

producer: send messages to sqs queue

consumer: poll messages from sqs queue

#### Amazon sqs - standard queue

oldest offering (over 10 years old)

fully managed service, used to decouple applications

atrributes:

- unlimited throughput, unlimited number of messages in queue

- default retention of messages: 4 days, maximum of 14 days

- low latency (<10 ms on publish and receive)

- limitation of 256kb per message sent

can have duplicate messages (at least once delivery, occasionally)

can have out of order messages (best effort ordering)

#### SQS - producing messages

produced to sqs using the sdk (SendMessage api)

the message is persisted in sqs until a consumer deletes it

message retention: default 4 days, up to 14 days

example: send an order to be processed

- order id

- customer id

- any attributes you want

sqs standard: unlimited throughput

#### SQS - consuming messages

consumers (running on ec2 instances, servers, or aws lambda, etc...)

poll sqs for messages (receive up to 10 messages at a time)

process the messages (example: intert the message into an rds database)

delete the messages using DeleteMessage api

#### SQS - multiple ec2 instances consumers

consumers receive and process messages in parallel

at least once delivery (different consumers might receive same message)

best effort message ordering

consumers delete messages after processing them

we can scale consumers horizontally to improve throughput of processing

#### SQS with auto scaling group (asg)

consumers are ec2 instances inside a auto scaling group

cloudwatch metric has queue length property, send cloudwatch alarm when number of message is high/low (ApproximateNumberOfMessages)

auto scaling group reads the alarm and scales the number of consumers

#### SQS to decouple between application tiers

video processing web app

instead of processing video on frontend, send message to sqs queue

backend processing application poll message from sqs queue

and insert to storage when done

frontend and backend can scale independently

#### Amazon sqs - security

encryption

- in-flight encryption using https api

- at-rest encryption using kms keys

- client-side encryption if the client wants to perform encryption/decryption itself

access controls: iam policies to regulate acess to the sqs api

sqs access policies (similar to s3 bucket policies)

- useful for cross-account access to sqs queues

- useful for allowing other services (sns, s3, ...) to write to an sqs queue

#### SQS - message visibility timeout

after a message is polled by a consumer, it becomes invisible to other consumers

by default the message visibility timeout is 30 seconds

that means the message has 30 seconds to be processed

after the message visibility timeout is over, the message is visible in sqs again

if a message is not processed within the visibility timeout, it will be processed twice

a consumer could call the ChangeMessage Visibility api to get more time

if visibility timeout is high and consumer crashes, re-procesing will take time

if visibility timeout is low, we may get duplicates

#### Amazon sqs - long polling

when a consumer requests messages from the queue, it can optinally wait for messages to arrive if there are none in the queue

this is called long polling

long polling decreases the number of api calls made to sqs while increasing the efficiency and latency

the wait time can between 1 to 20 sec

long polling is preferable to short polling

long polling can be enabled at the queue level or at the api level using WaitTimeSeconds

#### Amazon sqs - fifo queue

fifo = first in first out (ordering of messages in queue)

limited throughput: 300 msg/s without batching, 3000 msg/s with

exactly-once send capability (by removing duplicates)

messages are processed in order by consumer

#### SQS as a buffer to database write

request goes to application

application send message to sqs queue

then another auto scaling group of application receives messages from sqs queue and insert into database

only works if client doesnt need confirmation the write is completed

#### Amazon sns

what if you want to send one message to many receivers

eg. buying service to email notification, fraud service, shipping service, etc.

the event producer only sends message to one sns topic

as many event receivers (subscribers) as we want to listen to the sns topic notifications

each subscriber to the topic will get all the messages

#### SNS integrates with a lot of aws services

many aws services can send data directly to sns for notifications

#### AWS sns - how to publish

topic publish (using sdk)

- create a topic

- create a subscription (or many)

- publish to the topic

direct publish (mobile apps sdk)

- create a platform application

- create a platform endpoint

- publish to the platform endpoint

- works with google gcm, apple apns, amazon adm

#### Amazon sns - security

same as sqs

encryption

- in-flight encryption using https api

- at-rest encryption using kms keys

- client-side encryption if the client wants to perform encryption/decryption itself

access controls: iam policies to regulate acess to the sqs api

sns access policies (similar to s3 bucket policies)

- useful for cross-account access to sqs queues

- useful for allowing other services (sns, s3, ...) to write to an sqs queue

#### SNS + SQS: fan out

push once in sns, receive in all sqs queues that are subscribers

fully decoupled, no data loss

sqs allows for: data persistent, delayed processing and retries of work

ability to add more sqs subscribers over time

make sure your sqs queue access policy allows for sns to write

#### Application: s3 events to multiple queues

for the same combination of: event type and prefix you can only have one s3 event rule

if you want to send the same s3 event to many sqs queues, use fan-out

#### Application: sns to amazon s3 through kinesis data firehose

sns can send to kinesis and therefore we can have the following solutions architecture

#### Amazon sns - fifo topic

subscribers need to be sqs fifo as well

similar features as sqs fifo

limited throughput (same as sqs fifo)

#### SNS FIFO + SQS FIFO: fan out

in canse you need fan out + ordering + deduplication

#### SNS - message filtering

json policy used to filter messages sent to sns topic subscriptions

if a subscription doesnt have a filter policy, it receives every message

#### Kinesis overview

makes it easy to collect, process, and analyze streaming data in real-time

ingest real-time data such as application logs, metrics, website clickstreams, iot telemetry data, ...

kinesis data streams: capture, process, and store data streams

kinesis data firehose: load data streams into aws data stores

kinesis data analytics: analyze data streams with sql or apache flink

kinesis video streams: capture, process, and store video streams

#### Kinesis data streams

made of multiple shards, can scale # of shards

stream will be divided between shards

producers send data to kinesis, producer can be applications, client, sdk, kpl, kinesis agent, etc.

producer creates a record

record consists of

- partition key: which shard the record goes to

- data blob

1 mb/s or 1000 msg/s per shard

consumer can be apps (kcl, sdk), lambda, kinesis data firehose, kinesis data analytics

when consumer receives a record

it contains

- partition key: which shard the record is at

- sequence no.: where the data is in the record

- data blob

2 mb/s per shard

retention between 1 to 365 days

ability to reprocess (replay) data

once data is inserted in kinesis, it cant be deleted (immutability)

producers: aws sdk, kinesis producer library (kpl, kinesis agent)

consumers:

- write your own: kinesis client library (kcl), aws sdk

- managed: aws lambda, kinesis data firehose, kinesis data analytics

#### Kinesis data streams - capacity modes

provisioned mode:

- you chosses the number of shards provisioned, scale manually or using api

- each shard gets 1mb/s in (or 1000 records/s)

- each shard gets 2mb/s out (classic or enhanced fan-out consumer)

- you pay per shard provisioned per hour

on-demand mode

- no need to provision or manage the capacity

- default capacity provisioned (4 mb/s in or 4000 records/s)

- scales automatically based on observed throughput peak during the last 30 days

- pay per stream per hour & data in/out per gb

#### Kinesis data streams security

control access/authorization using iam policies

encryption in flight using https endpoints

encryption at reast using kms

you can implement encryption/decryption of data on client side

vpc endpoints available for kinesis to access within vpc

monitor api calls using cloudtrail

#### Kinesis data firehose

producers can be many types

record up to 1mb

can do data transformation using lambda function

batch writes to

- amazon s3

- amazon redshift (copy through s3)

- amazon elasticsearch

- 3rd-party partner destinations (datadot, splunk, new relic, mongodb, etc.)

- custom destination (http endpoint)

can send all or failed data to s3 backup bucket

fully managed service, no administration, automatic scaling, serverless

- aws: redshift, amazon s3, elastic search

- 3rd party partner: splunk, mongodb, datadog, newrelic, ...

- custom: any http endpoint

pay for data going through firehose

near realtime

- 60 seconds latency minimum for non full batches

- or minimum 1mb of data at a time

supports many data formats, conversions, transformations using aws lambda

can send failed or all data to a backup s3 bucket

#### Kinesis data streams vs firehose

kinesis data streams

- streaming service for ingest at scale

- write custom code (producer/consumer)

- real-time (~200ms)

- manage scaling (shard splitting/merging)

- data storage for 1 to 365 days

- supports replay capability

kinesis data firehose

- load streaming data into s3, redshift, es, 3rd part, custom http

- fully managed

- near real-time (buffer time min. 60s)

- automatic scaling

- no data storage

- doesnt support replay capability

#### Ordering data into kinesis

imagine you have 100 trucks on the road sending their gps positions regularly into aws

you want to consume the data in order for each truck so that you can track their movement accurately

how should you send that data into kinesis

answer: send using a partition key value of truck_id

the same key will always go to the same shard

eg. truck 1 has partition key truck_1 and it goes to shard 1, truck 2 has partition key truck_2 and it goes to shard 2, truck 3 has partition key truck_3 and it goes to shard 3, etc.

#### Ordering data into sqs

for sqs standard, there is no ordering

for sqs fifo, if you dont use a group id, messages are consumed in the order they are sent, with only one consumer

you want to scale the number of consumers, but you want messages to be grouped, when they are related to each other

then you use a group id (similar to partition key in kinesis)

#### Kinesis vs sqs ordering

lets assume 100 trucks, 5 minesis shards, 1 sqs fifo

kinesis data stream:

- on average you'll have 20 trucks per shard

- trucks will have their data ordered within each shard

- the maximum amount of consumers in parallel we can have is 5

- can receive up to 5 mb/s of data

sqs fifo

- you only have one sqs fifo queue

- you will have 100 group id

- you can have up to 100 consumers (due to the 100 group id)

- you have up to 300 messages per second (or 3000 if using batching)

#### SQS vs SNS vs Kinesis

sqs

- consumer pull data

- data is deleted after being consumed

- can have as many workers as we want

- no need to provision throughput

- ordering guarantees only on fifo queues

- individual message delay capability

sns

- push data to many subscribers

- up to 12500000 subscribers

- data is not persisted (lost if not delivered)

- pub/sub

- up to 100000 topics

- no need to provision throughput

- integrates with sqs for fan-out architecture pattern

- fifo capability for sqs fifo

kinesis

- standard: pull data
  
  - 2 mb per shard

- enhanced-fan out: push data
  
  - 2 mb per shard per consumer

- possibility to replay data

- meant for real-time big data, analytics and etl

- ordering at the shard level

- data expires after x days

- provisioned mode or on-demand capacity mode

#### Amazon mq

sqs, sns are cloud-nativ services: proprietary protocols from aws

traditional applications running from on-premises may use open protocols such as: mqtt, amqp, stomp, openwire, wss

when migrating to the cloud, instead of re-engineering the application to use sqs and sns, we can use amazon mq

amazon mq is a manged message broker service for rabbitmq and activemq

amazon mq doesnt scale as much as sqs/sns

amazon mq runs on servers, can run in multi-az fith failover

amazon mq has both queue feature (~sqs) and topic feature(~sns)

#### Amazon mq - high availability

in a region, have 1 active availability zone and 1 standby availability zone, both have amazon mq broker and connected to amazon efs storage

client can talk to amazon mq broker in active az, and in failover it will talk to amazon mq broker in standby az


