#### What is docker

docker is a software development platform to deploy apps

apps are packaged in containers that can be run on any os

apps run the same, regardless of where they are run

use cases: microservice architecture, lift-and-shift apps

#### Where are docker images stored

docker images are stored in docker repositories

docker hub

- public repository

- find base images for many technologies or os

amazon ecr

- private respository

- public repository

#### Docker vs virtual machines

docker is sort of a virtualization technology, but not exactly

resources are shared with the host => many containers on  one server

#### Getting started with docker

start with a dockerfile

build into a docker image

push to docker repository

pull from docker repository

run on docker containers

#### Docker containers management on aws

amazon elastic container service (amazon ecs)

amazon elastic kubernetes service (amazon eks)

aws fargate

- amazons own serverless container platform

- works with ecs and eks

amazon ecr

- store container images

#### Amazon ecs - ec2 launch type

ecs = elastic container service

launch docker containers on aws = launch ecs tasks on ecs clusters

ec2 launch type: you must provision & maintain the infrastructure (the ec2 instances)

each ec2 instance must run the ecs agent to register in the ecs cluster

aws takes care of starting/stopping containers

#### Amazon ecs - fargate launch type

launch docker containers on aws

you do not provision the infrastructure (no ec2 instances to manage)

its all serverless

you just create task definitions

aws just runs ecs tasks for you based on the cpu/ram you need

to scale, just increase the number of tasks

#### Amazon ecs - iam roles for ecs

ec2 instance profile (ec2 launch type only):

- used by the ecs agent

- makes api calls to ecs service

- send container logs to cloudwatch logs

- pull docker image from ecr

- reference sensitive data in secrets manager or ssm parameter store

ecs task role

- allows each task to have a specific role

- use different roles for the different ecs services you run

- task role is defined in the task definition

#### Amazon ecs - load balancer integrations

application load balancer is supported and works for most use cases

network load balancer recommended only for high throughtput/high performance use cases, or to pair it with aws private link

elastic load balancer supported but not recommended (no advanced features - no fargate)

#### Amazon ecs - data volumes (efs)

mount efs file systems onto ecs tasks

works for both ec2 and fargate launch types

tasks running in any az will share the same data in the efs file system

fargate + efs = serverless

use cases: persistent multi-az shared storage for your containers

note: amazon s3 cannot be mounted as a files system

#### ECS service auto scaling

automatically increase/decrease the desired number of ecs tasks

amazon ecs auto scaling uses aws application auto scaling

- ecs service average cpu utilization

- ecs service average memory utilization - scale on ram

- alb request count per target - metric coming from the alb

target tracking - scale based on target value for a specific cloudwatch metric

step scaling - scale based on a specified cloudwatch alarm

scheduled scaling - scaled based on a specified date/time (predictable changes)

ecs service auto scaling (task level) != ec2 auto scaling (ec2 instance level)

fatgate auto scaling is much easier to setup (because serverless)

#### EC2 launch type - auto scaling ec2 instances

accommodate ecs service scaling by adding underlying ec2 instances

auto scaling group scaling

- scale your asg based on cpu utilization

- add ec2 instances over time

ecs cluster capacity provider

- used to automatically provision and sclae the infrastructure for your ecs tasks

- capacity provider paired with an auto scaling group

- add ec2 instances when youre missing capacity (cpu, ram)

#### ECS tasks invoked by event bridge

amazon ecs cluster backed by aws fargate and s3 bucket

client upload object to s3 bucket

s3 bucket send event to amazon eventbridge

amazon eventbridge has rule to run ecs task

aws fargate creates a task to get object from s3 bucket then process and save result to amazon dynamodb

#### ECS tasks invoked by event bridge schedule

amazon eventbridge send rule: run ecs task every hour

aws fargate do some batch process on s3 bucket

#### ECS - sqs queue example

messages sent to sqs queue

ecs services poll for messages from sqs queue

ecs services can auto scale

#### Amazon ecr

ecr = elastic container registry

store and manage docker images on aws

private and public repository (amazon ecr public gallery)

fully integrated with ecs, backed by amazon s3

access is controlled through iam (permission errors => policy)

supports image vulnerability scanning, versioning, image tags, image lifcycle, ...

storing docker images = ecr

#### Amazon eks overview

amazon eks = amazon elastic kubernetes service

its a way to launch managed kubernetes clusters on aws

kubernetes is an open-source system for automatic deployment, scaling and managemenet of containerized (usually docker) application

its an alternative to ecs, similar goal but different api

eks supports ec2 if you want to deploy worker nodes or fargate to deploy serverless containers

use case: company already using kubernetes on-premises or in another cloud and wants to migrate to aws using kubernetes

kubernetes is cloud-agnostic (can be used in any cloud - azure, gcp, ...)

#### Amazon eks - node types

managed node groups

- creates and manages node (ec2 instances) for you

- nodes are part of an asg managed by eks

- supports on-demand or spot instances

self-managed nodes

- nodes created by you and registered to the eks cluster and managed by an asg

- you can use prebuilt ami - amazon eks optimized ami

- supports on-demand or sport instances

aws fargate

- no maintenance required, no nodes managed

#### Amazon eks - data volumes

need to specify storageclass manifest on your eks cluster

leverages a container storage interface (csi) complaint driver

supports for

- amazon ebs

- amazon efs

- amazon fsx for luster & netapp ontap

#### AWS app runner

fully managed service that meks it easy to deploy web applications and apis at scale

no infrastructure experience required

start with your srouce code or container image

automatically builds and deploy the web app

automatic scaling, highly available, load balancer, encryption

vpc access support

connect to database, cache, and message queue services

use cases: web apps, apis, microservices, rapid production deployments


