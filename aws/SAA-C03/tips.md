delete and recreate instead using current

never keep aws credentials (encrypted or plaintext) on ec2 instance

A, B

B/C

A/C

C/A

C, E/C, D

A

C

B,C/B, E

C

C

##### analyze real-time data via rest api

leverage amazon api gateway with kinesis data analytics

##### storage cannot be used as boot volumes

cold hdd, throughput optimized hdd

##### 24*7 production and up to 8 hours dev

reserved ec2 for production, on-demand instance for dev

##### on premise smb file shares to aws

amazon fsx file gateway, then accessed by amazon fsx

##### customers in europe with high application load time

aurora replicas in eu-west-1, enable latency routing policy in route 53

##### network file system on linux, frequently then infrequently, most cost effective

efs ia

##### confidential data in amazon s3, logged for auditing purpose, rotated every year, encrypted at rest

server side encryption with aws kms (sse-kms) customer master keys with automatic key rotation

##### decouple user authentication process for server behind application load balancer and fronted by cloudfront

use cognito authentication via cognito user pools for application load balancer

##### check if third party ssl/tls certificates expire within 30 days

leverage aws config managed rule to check if any third-party ssl/tls certificates imported into acm are marked for expiration within 30 days. configure the rule to trigger an sns notification ot the security team if any certificate expires within 30 days

##### failover environment on aws

setup a route 53 fail record. run application servers on ec2 instances hehind an application load balancer in an auto scaling group. setup aws storage gateway with stored volumes to back up data to s3

##### replicate newly created on-premises video files to efs file system

configure an aws datasync agent on the on-premises server that has access to the nfs file system. transfer data over the direct connect connection to an aws privatelink interface vpc endpoint for amazon efs by using a private vif. setup a datasync scheduled task to send the video files to the efs file system every 24 hours

##### offload data storeage and encryption process to amazon s3 but continue using existing encryption key

server side encryption with customer provided keys

##### prevent adding administratoraccess managed policy

for each developer, define an iam permission boundary that will restrict the managed policies they can attach to themselves

##### maximum downtime 10 minutes recovery

configure an amazon cloudwatch alarm that triggers the recovery of the ec2 instance, in case the instance fails. the instance, however, should only be configured with an ebs volume

##### in-flight request for unhealthy ec2 instances dropped

connection draining

##### permissions describing SCp

if a user or role has an iam permission policy that grants access on to an action not allowed or denied by scp, the user or role cant perform that action

scp affect all users and roles in attached account, including the root user

scp do no affect service-linked role

##### windows compatility aws storage that provide highly reliable file storage accessible over SMB protocol

file gateway configuration of aws storage gateway

amazon fsx for windows file server

##### aws organization consistent resource provisioning process across departments so that each resource follows pre-defined configurations such as using a specific type of ec2 instances, specific iam role for lambda functions, etc.

use aws cloudformation stacksets to deploy the same template across aws accounts and regions

##### ecs container instance behind application load balancer scale out

configure aws auto scaling to scale out the ecs cluster when the ecs service cpu utilization rises above a threshold

##### global application upload and download of video files maximum 10gb

use amazon s3 for hosting the web application and use s3 transfer acceleration to reduce the latency that geographically dispersed users might face

##### improve performance rarely changed data can be outdated for 24 hours

enable api gateway caching

##### saas to third party communication

use amazon eventbridge to decouple the system architecture

##### decouple real time product recommendation

leverage amazon kinesis data streams to capture the data from the website and feed it into amazon kinesis data analytics which can query the data in real tim. lastly the analyzed feed is output into kinesis data firehose to persist the data on amazon s3

##### increase security at authentication level by leveraging short-lived credentials

use iam authentication from lambda to rds postgresql

attach an aws identity and access management role to aws lambda

##### maximum possible availability for database

migrate the data to amazon rds for sql server database in multi-az deployment

##### dynamodb encryption details not in cloudtrail

by default, all dynamodb tables are encrypted under an aws owned customer master key, which do not write to cloudtrail logs

##### automatic failover across aws regions

setup aws global accelerator and add endpoints to cater to users in different geographic locations

##### data on aws to be encrypted but continue using their existing encryption key generation mechanism

sse-c

##### geospatial data support relational database caching

use amazon elsticache for redis
