#### What is serverless?

serverless is a new paradigm in which the developers dont have to manage servers anymore

they just deploy code

they just deploy ... functions

initially serverless == faas

server less was pioneered by aws lambda but noew also includes anything tahts managed "databases, messaging, storage, etc."

serverless does not mean there are no servers, it means you just dont manage/provision/see them

#### Serverless in aws

users get static contents from s3 buckets, login with cognito, calls api to api gateway, which uses lambda to retrieve or write to dynamodb

aws lambda

dynamodb

aws cognito

aws api gateway

amazon s3

aws sns & sqs

aws kinesis data firehose

aurora serverless

fargate

#### Why aws lambda

amazon ec2 is a virtual server in the cloud, limited by ram and cpu, they run continuously, scaling means intervention to add/remove servers

amazon lambdas are virtual functions, so no servers to manage, limited by time (short executions), and they run on-demand, scaling is automated

#### Benefits of aws lambda

easy pricing

- pay per request and compute time

- free tier of 1million aws lambda requests and 400000 gbs of compute time

integrated with the whole aws suite of services

integrated with many programming languages

easy monitoring through aws cloudwatch

easy to get more resources per function (up to 10gb of ram)

increasing ram will also improve cpu and network

#### AWS lambda language support

node.js

python

java

c# (.net core)

golang

c#/powershell

ruby

custom runtime api (community supported, eg. rust)

lambda container image

- the container image must implement the lambda runtime api

- ecs/fargate is preferred for running arbitrary docker images

#### AWS lambda integrations main ones

api gateway

kinesis

dynamodb

s3

cloudfront

cloudwatch events event bridge

cloudwatch logs

sns

sqs

cognito

#### Example: serverless thumbnail creation

new image in s3 trigger aws lambda function creates a thumbnail

thumbnail pushed to s3 or push metadata to dynamodb

#### Example: serverless cron job

create a cloudwatch events rule that triggers every 1 hour that a lambda function to do some task

#### AWS lambda pricing

pay per call

- first 1 million requests free

- $0.2 per 1 million requests thereafter

pay per duration

- 400000 gb-seconds of compute time per month free

- == 400000 seconds if function is 1gb ram

- == 3200000 seconds if function is 128mb ram

- after that $1 for 600000gb-seconds

its usually very cheap to run aws lambda so its very popular

#### AWS lambda limits to know - per region

execution

- memory allocation: 128mb - 10gb (1mb increments)

- maximum execution time: 900 seconds (15 mins)

- environment variables (4kb)

- disk capacity in the function container (in /tmp): 512mb to 10gb

- concurrency executions: 1000 (can be increased)

deployment

- lambda function deployment size (compressed .zip): 50mb

- size of uncompressed deployment (code + dependencies): 250mb

- can use the /tmp directory to load other files at startup

- size of environment variables: 4kb

#### Customization at the edge

many modern applications execute some form of the logic at the edge

edge function:

- a code that you write and attach to cloudfront distributions

- runs close to your users to minimize latency

cloudfront provides two types: cloudfront functions & lambda@Edge

you dont have to manage any servers, deployed globally

use case: customize the cdn content

pay only for what you use

fully serverless

#### Cloudfront functions & lambda@Edge use cases

website security and privacy

dynamic web application at the edge

search engine optimzation

intelligently route across origins and data centers

bot mitigation at the edge

a/b testing

user authentication and authorization

user prioritization

user tracking and analytics

#### Cloudfront functions

lightweight functions written in javascript

for high-scale, latency-sensitive cdn  customizations

sub-ms startup times, millions of request/second

used to change viewer requests and responses

- viewer request : after cloudfront receives a request from a viewer

- viewer response: before cloudfront forwards the response to the viewer

native feature of cloudfront (manage code entirely within cloudfront)

#### Lambda@Edge

lambda functions written in nodejs or python

scales to 1000s of requests/second

used to change cloudfront requests and responses

- viewer request: after cloudfront receives a request from a viewer

- origin request: before cloudfront forwards the request to the origin

- origin response: after cloudfront receives the response from the origin

- viewer response: before cloudfront forwards the response to the viewer

author your functions in one aws region (us-east-1), then cloudfront replicates to its locations

#### Cloudfront functions vs lambda@Edge use cases

cloudfront functions

- cache key normalization
  
  - transform request attributes (headers, cookies, query strings, url) to create an optimal cache key

- header manipulation
  
  - insert/modify/delete http headers in the request or response

- url rewrites or redirects

- request authentication & authorization
  
  - create and validate user-generated tokens (eg. jwt) to allow/deny requests

lambda@edge

- longer execution time

- adjustable cpu or memory

- your code depends on a 3rd libraries (eg. aws sdk to access other aws services)

- network access to use external services for processing

- file system access or access to the body of http requests

#### lambda by default

by default, your lambda functions is launched outside your own vpc (in an aws owned vpc)

therefore it cannot access resources in your vpc (rds, elasticache, internal elb, ...)

#### lambda in vpc

you must define the vpc id, the subnets and the security groups

lambda will create an eni in your subnets

#### Lambda with rds proxy

if lambda functions directly access your database, they may open too many connections under high load

rds proxy

- improve scalability by pooling and sharing db connections

- improve availability by reducing by 66% the failover time and preserving connections

- improve security by enforcing iam authentication and storing credentials in secrets manager

the lambda function must be deployed in your vpc, because rds proxy is never publicly accessible

#### Amazon dynamodb

fully managed, highly available with replication across multiple azs

nosql database - not a relational database - with transaction support

scales to massive workloads, distributed database

millions of requests per seconds, trillions of row, 100s of tb of storage

fast and consistent in performance (single-digit milliseconds)

integrated with iam for security, authorization and administration

low cost and auto-scaling capabilities

no maintenance or patching, always available

standard & infrequent access table class

#### Dynamodb - basics

dynamodb is made of tables

each table has a primary key (must be decided at creation time)

each table can have an infinite number of items (rows)

each item has attributes (can be added over time - can  be null)

maximum size of an item is 400kb

data types supported are

- scalar types - string, number, binary, boolean, null

- document types - list, map

- set types - string set, number set, binary set

therefore in dynamodb you can rapidly evolve schemas

#### dynamodb - read/write capacity modes

control how you manage your tables capacity (read/write throughput)

provisioned mode (default)

- you specify the number of reads/writes per second

- you need to plan capacity beforehand

- pay for provisioned read capacity units & write capacity units

- possiblility to add auto-scaling mode for RCU & WCU

on-demand mode

- read/writes automatically scale up/down with your workloads

- no capacity planning needed

- pay for what you use, more expensive

- great for unpredictable workloads, steep sudden spikes

#### DynamoDB accelerator (DAX)

fully managed, highly available, seamless in-memory cache for dynamodb

help solve read congestion by caching

microseconds latency for cached data

doesnt require application logic modification (compatible with existing dynamodb apis)

5 minutes ttl for cache (default)

#### DynamoDB accelerator vs elasticache

DAX

- individual object cache

- query & scan cache

amazon elasticcache

- store aggregation result

#### DynamoDB - stream processing

ordered stream of item-level modifications (create/update/delete) in a table

use cases

- react to changes in real-time (welcome email to users)

- real-time usage analytics

- insert into derivative tables

- implement cross-region replication

- invoke aws lambda on changes to your dynamodb table

dynamodb streams

- 24 hour retention

- limited # of consumers

- process using aws lambda triggers, or dynamodb stream kinesis adapter

kinesis data streams (newer)

- 1 year retention

- high # of consumers

- process using aws lambda, kinesis data analytics, kinesis data firehose, aws glue streaming etl...

#### DynamoDB global tables

make a dynamodb talbe accessible with low latency in multiple-regions

active-active replication

applications can read and write to the table in any region

must enable dynamodb streams as a pre-requisite

#### DynamoDB - time to live (TTL)

automatically delete items after an expiry timestamp

use cases: reduce stored data by keeping only current items, adhere to regulatory obligations, web session handling...

#### DynamoDB - backups for disaster recovery

continuous backups using point-in-time recovery (PITR)

- optionally enabled for the last 35 days

- point-in-time recovery to any time within the backup window

- the recovery process creates a new table

on-demand backups

- fulll backups for long-term retention, until explicitely deleted

- doesnt affect performance or latency

- can be configured and managed in aws backup (enables cross-region copy)

- the recovery process creates a new table

#### DynamoDB - integration with amazon s3

export to s3 ( must enable pitr)

- works for any point of time in the last 35 days

- doesnt affect the read capacity of your table 

- perform data analysis on top of dynamodb

- etl on top of s3 data before importing back into dynamodb

- export in dynamodb json or ion format

import to s3

- import csv, dynamodb json or ion format

- doesnt consume any write capacity

- creates a new table

- imports errors are logged in cloudwatch logs

#### Example: building a serverless api

lambda can make crud action to dynamodb

client can invoke lambda directly with iam authentication

or client can call rest api from api gateway, and api gateway proxy the request to lambda

#### AWS api gateway

aws lambda + api gateway: no infrastructure to manage

support for the websocket protocol

handle api versioning (v1, v2...)

handle different environments (dev, test, prod, ...)

handle security (authentication and authorization)

create api keys, handle request throttling

swagger/open api import to quickly define apis

generate sdk and api specifications

cache api responses

#### API gateway - integrations high level

lambda function

- invoke lambda function

- easy way to expose rest api backed by aws lambda

http

- expose http endpoints in the backend

- example: internal http api on premise, application load balancer

- why? add rate limiting, caching, user authentications, api keys, etc...

aws service

- expose any aws api through the api gateway?

- example: start an aws step function workflow, post a message to sqs

- why? add authentication, deploy publicly, rate control...

#### API gateway - aws service integration kinesis data streams example

client send request to api gateway

api gateway send request to kinesis data streams

kinesis data streams records using kinesis data firehose

kinesis data firehouse stores to amazon s3

#### API gateway - endpoint types

edge-optimized (default): for global clients

- requests are routed through the cloudfront edge locations (improves latency)

- the api gateway still lives in only one region

regional:

- for clients within the same region

- could manually combine with cloudfront (more control over the caching strategies and the distribution)

private

- can only be accessed from your vpc using interface vpc endpoint (eni)

- use a resource policy to define access

#### API gateway - security

user authentication through

- iam roles (useful for internal applications)

- cognito (identify for external users - example mobile users)

- custom authorizer (your own logic)

custom domain name https security through integration with aws certificate manager (ACM)

- if using edge-optimized endpoint then the certificate must be in us-east-1

- if using regional endpoint, the certificate must be in the api gateway region

- must setup cnam or A-alias record in route 53

#### AWS step function

build serverless visual workflow to orchestrate your lambda functions

features: sequence, parallel, conditions, timeouts, error handling

can integrate with ec2, ecs, on-premises servers, api gateway, sqs queues, etc...

possibility of implementing human approval feature

use cases: order fulfillment, data processing, web applications, any workflow




