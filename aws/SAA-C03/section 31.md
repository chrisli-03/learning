#### what is cloudformation

cloudformation is a declarative way of outlining your aws infrastructure, for any resources (most of them are supported)

for example, within a cloudformation template, you say

- i want a security group

- i want two ec2 instances using this security group

- i want an s3 bucket

- i want a load balancer (elb) in front of these machines

then cloudformation creates those for you, in the right order, with the exact configuration that you specify

#### benefits of aws cloudformation

infrastructure as code

- no resouces are manually created, which is excellent for control

- changes to the infrastructure are reviewed through code

cost

- each resources within the stack is tagged with an identifier so you can easily see how much a stack costs you

- you can estimate the costs of your resources using the cloudformation template

- savings strategy: in dev, you could automation deletion of templates a t 5pm and recreate at 8 am, safely

productivity

- ability to destroy and re-create an infrastructure on the cloud on the fly

- automated generation of diagram for your templates

- declarative programming (no need to figure out ordering and orchestration)

dont reinvent the wheel

- leverage existing tempaltes on the web

- leverage the documentation

supports (almost) all aws resources

- everything we will see in this course is supported

- you can use "custom resources" for resources that are not supported

#### cloudformation stack designer

example: wordpress cloudformation stack

we can see all the resources

we can see the relations between the components

#### amazon simple email service (amazon ese)

fully managed service to send emails securely, globally and at scale

allows inbound/outbound emails

reputation dashbaord, peformance insights, anti-spam feedback

provides statistics such as email deliveries, bounces, feedback loop results, email open

supports domainkeys identified mail (dkim) and sender policy framework (spf)

flexible ip deployment: shared, dedicated, and customer-owned ips

send emails using your application using aws console, apis, or smtp

use cases: transactional, marketing and bulk email communications

#### amazon pinpoint

scalable 2-way (outbound/inbound) marketing communications service

supports email, sms, push, voice, and in-app messaging

ability to segment and personalize messages with the right content to customers

possibility to receive replies

scales to billions of messages per day

use cases: run campaigns by sending marketing, bulk, transactional sms messages

vs amazon sns or amazon ses

- in sns & ses you managed each message's audience, content, and delivery schedule

- in amazon pinpoint, you create message tempaltes, delivery schedules, highly-targeted segments, and full campaigns

#### systems manager - ssm session manager

allows you to start a secure shell on your ec2 and on-premises servers

no ssh access, bastion hosts, or ssh keys needed

no port 22 needed (better security)

supports linux, macos, and windows

send session log data to s3 or cloudwatch logs

#### systems manager - run command

execute a document (= script) or just run a command

run command across multiple instances (using resource groups)

no need for ssh

command output can be shown in the aws console, sent to s3 bucket or cloudwatch logs

send notifications to sns about command status (in progress, success, failed, ...)

integrated with iam & cloudtrail

can be invoked using event bridge

#### system manager - patch manager

automates the process of patching managed instances

os updates, applications updates, security updates

supports ec2 instances and on-premises servers

supports linux, macos, and windows

patch on-demand or on a schedule using maintenance windows

scan instances and generate patch compliance report (missing patches)

#### system manager - maintenance windows

defines a schedule for when to perform actions on your instances

example: os patching, updating drivers, installing software, ...

maintenance window contains

- schedule

- duration

- set of registered instances

- set of registered tasks

#### system manager - automation

simplifies common maintenance and deployment tasks of ec2 instances and other aws resources

examples: restart instances, create an ami, ebs snapshot

automation runbook - ssm documents to define actions performed on your ec2 instances or aws resources (pre-defined or custom)

can be triggered using

- manually using aws console, aws cli or sdk

- amazon event bridge

- on a schedule using maintenance windows

- by aws config for rules remediations

#### cost explorer

visualize, understand, and manage your aws costs and usage over time

create custom reports that analyze cost and usage data

analyze your data at a high level: total costs and usage across all accounts

or monthly, hourly, resource level granularity

choose an optimal savings plan (to lower prices on your bill)

forecast usage up to 12 months based on previous usage

#### amazon elastic transcoder

elastic transcoder is used to convert media files stored in s3 into media files in the formats required by consumer playback devices (phones, etc...)

benefits:

- easy to use

- highly scalable - can handle large volumes of media files and large file sizes

- cost effective - duration-based pricing model

- fully managed & secure, pay for what you use

#### aws batch

fully managed batch processing at any scale

efficiently run 100000s of computing batch jobs on aws

a batch job is a job with a start and an end (opposed to continuous)

batch will dynamically launch ec2 instances or spot instances

aws batch provisions the right amount of compute/memory

you submit or schedule batch jobs and aws batch does the rest

batch jobs are defined as docker images and run on ecs

helpful for cost optimizations and focusing less on the infrastructure

#### batch vs lambda

lambda

- time limit

- limited runtimes

- limited temporary disk space

- serverless

batch

- no time limit

- any runtime as long as its packaged as a docker image

- rely on ebs / instance store for disk space

- relies on ec2 (can be managed by aws)

#### amazon appflow

fully managed integration service that enables you to securely transfer data between software as a service applications and aws

source: salesforce, sap, zendesk, slack, and service now

destinations: aws services like amazon s3, amazon redshift, or non-aws such as snowflake and salesforce

frequency: on a schedule, in response to events, or on demand

data transformation capabilities like filtering and validation

encrypted over the public internet or privately over aws private link

dont spend time writing the integrations and leverage apis immediately


