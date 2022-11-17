#### Amazon cloudwatch metrics

cloudwatch provides metrics for every services in aws

metric is a variable to monitor (cpuutilization, network, ..)

metrics belong to namespaces

dimension is an attribute of a metric (instance id, environment, etc.)

up to 10 dimensions per metric

metrics have timestamps

can create cloudwatch dashboards of metrics

can create cloudwatch custom metrics (for the ram for example)

#### CLoudwatch metric streams

continually stream cloudwatch metrics to a destination of your choice with near real time delivery and low latency

- amazon kinesis data firehose (and then its destinations)

- 3rd party service provider: datadog, dynatrace, new relic, splunk, sumo logic, etc.

option to filter metrics to only stream s subset of them

#### Cloudwatch logs

log groups: arbitrary name, usually representing an application

log streams: instances within application/log files/ containers

can define log expiration policies (never expire, 30 days, etc.)

cloudwatch logs can send logs to

- amazon s3

- kinesis data streams

- kinesis data firehose

- aws lambda

- elasticsearch

#### Cloudwatch logs - sources

sdk, cloudwatch logs agent, cloudwatch unified agent

elastic beanstalk: collection of logs from application

ecs: collection from containers

aws lambda: collection from fucntion logs

vpc flow logs: vpc specific logs

api gateway

cloudtrail based on filter

route53 log dns queries

#### Cloudwatch logs metric filter & insights

cloudwatch logs can use filter expressions

- for example, find a specific ip inside of a log

- or count occurrences of error in your logs

metric filters can be used to trigger cloudwatch alarms

cloudwatch logs insights can be used to query logs and add queries to cloudwatch dashboards

#### Cloudwatch logs - s3 export

log data can take up to 12 hours to become available for export

the api call is createexporttask

not near real time or realtime, use logs subscriptions instead

#### Cloudwatch logs aggregation multi-account & multi region

centralize cloudwatch log from mulitple regions into kinesis data stream

#### Cloudwatch logs for ec2

by default no logs from your ec2 machine will go to cloudwatch

you need to run a cloudwatch agent on ec2 to push to log files you want

make sure iam permissions are correct

the cloudwatch log agent can be setup on premises too

#### Cloudwatch logs agent & unified agent

for virtual servers (ec2 instances, on premise servers)

cloudwatch logs agent

- old version

- can only send to cloudwatch logs

cloudwatch unified agent

- collect additional system-level metrics such as ram, processes, etc.

- collect logs to send to cloudwatch logs

- centralized configuration using ssm parameter store

#### Cloudwatch unified agent - metrics

collected directly on your linux server/ec2 instance

cpu (active, guest, idel, system, user, steal)

disk metrics (free, used, total), disk io (write, read, bytes, iops)

ram (free, inactive, used, total, cached)

netstat (number of tcp/udp connections, net packets, bytes)

proccesses (total, dead, bloqued, idel, running, sleep)

swap space (free, used, used %)

reminder: out-of-the box metrics for ec2 - disk, cpu, network (high level)

#### Cloudwatch alarms

alarms are used to trigger notifications for any metrics

various options (sampling, %, max, min, etc)

alarm states:

- ok

- insufficient_data

- alarm

period:

- length of time in seconds to evaluate the metric

- high resolution custom metrics: 10sec, 30sec, or multiples of 60 sec

#### Cloudwatch alarm targets

stop, terminate, reboot, or recover an ec2 instance

trigger auto scaling action

send notification to sns

#### Cloudwatch alarms - composite alarms

cloudwatch alarms are on a single metric

composite alarms are monitoring the states of multiple other alarms

and and or conditions

helpful to reduce alarm noise by creating complex composite alarms

eg. 1 alarm for cpu and another alarm for iops, composite alarm will send alarm if both are triggering alarm

#### Ec2 instance recovery

status check

- instance status = check the ec2 vm

- system status = check the underlying hardware

recovery: same privet, public, elastic ip, metatdata, placement group

#### Cloudwatch alarm: good to know

alarms can be created based on cloudwatch logs metrics filters

to test alarms and notifications, set the alarm state to alarm using cli `aws cloudwatch set-alarm-state --alarm-name "myalarm" --state-value ALARM --state-reason "test"`

#### Amazon eventbridge (formerly cloudwatch events)

schedule: cron jobs (schedule scripts)

- eg every hour trigger a lambda function

event pattern: event rules to react to a service doing something

- iam root user sign in event send sns topic with email notification

#### Amazon eventbridge rules

ec2 instance (start/stop), codebuild (faile), s3 event, trusted advisor, cloudtrail, etc. can send event to eventbridge

evenbridge will generate a json object with details of that event

you can launch lambda, aws batch, ecs task, or integrate with sqs, sns, kinesis data streams, or step functions, codepipeline, codebuild, ssm, ec2 actions, etc.

#### Amazon eventbridge

default event bus accept events from other aws services

partner event bus access events from 3rd party services

custom event bus allows you to create custom event handlers from custom applicatiosn

event buses can be accessed by other aws accounts using resource-based policies

you can archive events sent to an event bus

ability to replay archived events

#### Amazon eventbridge - schema registry

eventbridge can analyze the events in your bus and infer the schema

the schema registrty allows you to generate code for your application, that weill know in advance how data is structured in the event bus

schema can be versioned

#### Amazon event bridge - resource-based policy

manage permissions for a specific event bus

example: allow/deny events from another aws account or aws region

use case: aggregate all events from your aws organization in a single aws account or aws region

#### Cloudwatch container insights

collect, aggregate, summarize metrics and logs from containers

available for containers on 

- amazon elastic container service (amazon ecs)

- amazon elasitc kubernetes service (amazon eks)

- kubernetes platforms on ec2

- fargate (both ecs and eks)

in amazon eks and kubernetes, cloudwatch insights is using a containerized version of the cloudwatch agent to discover containers

#### Cloudwatch lambda insights

monitoring and troubleshooting solution for serverless applications running on aws lambda

collects aggregates, and summarizes system-level metrics including cpu time, memory, disk, and network

collects, aggregates, and summarizes diagnostic information such as cold starts and labmda worker shutdowns

lambda insights is provided as a lambda layer

#### Cloudwatch contributor insights

analyze log data and create time series that display contributor data

- see metrics about the top-n contributors

- the total number of unique contirbutors and their usage

this helps you find top talkers and understand who or what is impacting system performance

works for any aws generated logs (vpc, dns, etc)

for example, you can find bad hosts, identify the heaviest network users, or find the urls that generate the most errors

you can build your rules from scratch or you can also use sample rules that aws has created - leverages your cloudwatch logs

cloudwatch also provides built-in rules that you can use to analyze metrics from ther aws services

#### Cloudwatch application insights

provides automated dashboards that show potential problems with monitored applications to help isolate ongoing issues

your applications run on amazon ec2 instances with select technologies only

and you can use other aws recourses such as amazon ebs, rds, elb, asg, labmda, sqs, dynamodb, s3, ecs, eks, sns, api gateway

powered by sagemaker

enhanced visibility into your application health to reduce the time it will take you to troubleshoot and repair your applications

findings and alerts are sent to amazone eventbridge and ssm

#### Cloudwatch insights and operational visibility

cloudwatch container insights

- ecs, eks, kubernetes on ec2, fargate, needs agent for kubernetes

- metrics and logs

cloudwatch lambda insights

- detailed metrics to troubleshoot serverless applications

cloudwatch contributors insights

- find top-n contributors through cloudwatch logs

cloudwatch application insights

- automatic dashboard to troubleshoot your application and realted aws services

#### AWS cloudtrail

provides governance, compliance and audit for your aws account

cloudtrail is enabled by default

get an history of events/api calls made within your aws account by 

- console

- sdk

- cli

- aws services

can put logs from cloudtrail into cloudwatch logs or s3

a trail can be applied to all regions (default) or a single region

if a resource is deleted in aws, investigate cloudtrail first

#### Cloudtrail events

management events

- operations that are performed on resources in your aws account

- examples
  
  - configuring security (iam attachrolepolicy)
  
  - configuring rules for routing data (amazon ec2 createsubnet)
  
  - setting up logging (aws cloudtrail creattrail)

- by default, trails are configured to log management events

- can separate read events from write events

data events

- by default data events are not logged (because high volume operations)

- amazon s3 object-level activity (ex: getboject, delete object, putobject): can separate read and write events

- aws lambda function execution activity (the invoke api)

cloudtrail insights

#### Cloudtrail insights

enable cloudtrail insgihts to detect unusual activity in your account

- inaccurate resource provisioning

- hitting service limits

- bursts of aws iam actions

- gaps in periodic maintenance activity

cloudtrail insights analyzes normal management events to create a baseline

and the ncontinuously analyzes write events to detect unusual patterns

- anomales appear in the cloudtrail console

- event is sent to amazon s3

- an eventbridge event is generated (for automation needs)

#### cloudtrail events retentions

events are stored for 90 days in cloudtrail

to keep events beyond this period, log them to s3 and use athena to analyze

#### Amazon eventbridge - intercept api calls

user use deletetable api call to delete a table in dynamodb, call will be logged in cloudtrail, which sends an event to amazon eventbridge, and alert in sns

#### AWS config

helps with auditing and recording compliance of your aws resource

helps record confiurations and chagnes over time 

questions that can be solved by aws config:

- is there unrestericted ssh access to my security groups?

- do my buckets have any public access?

- how has my alb configuration changed overtime?

you can receive alerts (sns) for any changes

aws config is a per region service

can be aggregated across regions and accounts

possibility of storing the configuration data into s3 (analyzed by athena)

#### Config rules

can use aws managed config rules

\can make custom config rules (must be defined in aws lambda)

- ex evaluate if each ebs disk is of type gp2

- ex evaluate if each ec2 instance is t2.micro

rules can be evaluated / triggered:

- for each config change

- and / or: at regular time intervals

aws config rules does not prevent actions from happening (no deny)

pricing: no free tier, 0.003 per configuration

#### Aws configu resource

view compliance of a resource over time

view configuration of a resource over time

view cloudtrail api calls of a resource over time

#### Config rules - remediations

automate remediation of non-compliant resources using ssm automation documents

use aws-managed automation docuemnts or create custom automation documents

- tip: you can create custom automation documents that invokes lambda function

you can set remediation retries if the resource is still non-compliant after auto-remediation

#### Config rules - notifications

use event bridge to trigger notifications when aws resources are non-compliant

ability to send configuration changes and compliance state notifications to sns (all events - use sns filtering or filter at client-side)

#### Cloudwatch vs cloudtrail vs config

cloudwatch

- performance monitoring (metrics, cpu, network, etc...) & dashboards

- events & alerting

- log aggregation & analysis

cloudtrail

- record api calls made within your account by everyone

- can define trails for specific resources

- global service

config

- record configuration changes

- evaluate resources against compliance rules

- get timeline of changes and compliance

#### For an elastic load balancer

cloudwatch

- monitoring incoming connections metric

- visualize error codes as a % over time

- make a dashboard to get an idea of your load balancer performance

config

- track security group rules for the load balancer

- track configuration changes for the load balancer

- ensure an ssl certificate is always assigned to the load balancer (compliance)

cloudtrail

- track who made any changes to the load balancer with api calls


