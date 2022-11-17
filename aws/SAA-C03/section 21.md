#### Mobile application: my todolist

We want to create a mobile application with the following requirements

expose as rest api with https

serverless architecture

users should be able to directly interact with their own folder in s3

users should authenticate through a managed serverless service

users can write and read to-dos but they mostly read them

database should scale and have some high read throughput

#### Mobile app: rest api layer

use amazon api gateway to invoke aws lambda

aws lambda query amazon dynamodb

authenticate with amazon cognito and api gateway will verify authentication

#### Mobile app: giving users access to s3

client authenticate with amazon cognito

amazon cognito creates temp credentials with aws sts

client can use temp credentials to store/retrieve files in amazon s3

#### Mobile app: high read throughput, static data

use DAX caching layer

or caching response at api gateway level

#### Mobile app

serverless rest api: https, api gateway, lambda, dynamodb

using cognito to generate temporary credentials with sts to access s3 bucket with restricted policy. app users can directly access aws resources this way. pattern can be applied to dynamodb, lambda

caching the reads on dynamodb using dax

caching the rest requests at the api gateway level

security for authentication and authorization with cognito, sts

#### Serverless hosted website: myblog.com

this website should scale globally

blogs are rarely written, but often read

some of the website is purely static files, the rest is a dynamic rest api

caching must be implement where possible

any new users that subscribes should receive a welcome email

any photo uploaded to the blog should have a thumbnail generated

#### myblog.com: serving static content globally

amazon cloudfront global distribution interaction with edge locations to server amazon s3

#### myblog.com: serving static content globally, securely

use oai (origin access identity) to s3, bucket policy only authorize from oai to read

#### myblog.com: adding apublic serverless rest api

use amazon api gateway to invoke aws lambda

lambda query dynamodb, since its global use dynamodb global table

use DAX caching layer to cache data

#### myblog.com: user welcome email flow

use dynamodb stream to catch changes then invoke a lambda function to send email using amazon simple email service (SES)

#### myblog.com: thumbnail generation flow

client upload photos to amazon cloudfront global distribution directly or via transfer acceleration

amazon cloudfront stores photo to s3

s3 bucket invokes lambda function to store photo to s3, optional sqs or sns

#### myblog.com

we seen static conente being distributed using cloudfront with s3

the rest api was serverless, didnt need cognito because public

we leveraged a global dynamodb table to serve the data globally

we could have used aurora global database

we enabled dynamodb streams to trigger a lambda function

the lambda function had an iam role which could use ses

ses was used to send emails in a serverless way

s3 can trigger sqs/sns/lambda to notify of events

#### Micro services architecture

we want to switch to a micro service architecture

many services interact with each other directly using a rest api

each architecture for each micro service may vary in form and shape

we want a micro-service architecture so we can have a leaner development lifecycle for each service

#### Micro services environment

user make https request to elastic load balancing, which calls ecs, ecs calls dynamodb

user also makes dns query to amazon route 53

user also makes https request to amazon api gateway, amazon api gateway calls aws lambda, aws lambda calls elasticcache

aws lambda can also call ealstic load balancer

user can also call another elastic load balancing which calls amazon ec2 auto scaling then amazon rds

#### Discussion on micro services

you are free to design each micro-service the way you want

synchronous patterns: api gateway, load balancers

asynchronous patterns: sqs, kinesis, sns, lambda triggers (s3)

challenges wiht micro-services:

- repeated overhead for creating each new microservice

- issue with optimizing server density/utilization

- complexity of running multiple versions of multiple microservices simultaneously

- proliferation of client-side code requirements to integrate with many separate services

some of the challenges are solved by serverless patterns

- api gateway, lambda scale automatically and you pay per usage

- you can easily clone api, reproduce environments

- generated client sdk through swagger integration for the api gateway

#### Software update offloading

we have an application running on ec2 that distributes software updates once in a while

when a new software update is out, we get a lot of request and the content is distributed in mass over the network, it is very costly

we dont want to change our application, but want to optimize your cost and cpu, how can we do it?

#### Our application current state

az 1 to 3, 3 auto scaling groups using amazon elastic file system

add cloudfront in front as easy fix

- no changes to architecture

- will cache software update files at the edge

- software update files are not dynamic, they are static (never changing)

- our ec2 instances arent serverless but cloudfront is, and will scale for us

- our asg will not scale as much and well save tremendously in ec2

- well also save in availability, netowkr bandwidth cost, ect

- easy way to make an existing application more scalable and cheaper






