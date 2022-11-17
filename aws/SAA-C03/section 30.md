#### lambda, sns & sqs

sqs + lambda, events into sqs, lambda poll from sqs, possible infinite loop

sqs fifo + lambda, could be blocking

sns + lambda, lambda request asynchronously from sns, lambda fail 5 times use dlq to sqs

#### fan out pattern: deliver to multiple sqs

sdk put 1, 2, 3 to different sqs, not very reliable

fan out: sqs subscribe to sns, when sdk put to sns, sns will fan out message to sqs

#### s3 event notifications

s3:objectcreated, s3:objectremoved, s3:objectrestore, s3:replication, ...

object name filtering possible (.jpg)

use case: generate thumbnails of images uploaded to s3

can create as many s3 events as desired

s3 event notifications typically deliver events in seconds but can sometimes take a minute or longer

#### s3 event notifications with amazon eventbridge

events to amazon s3 bucket, all events to amazon eventbridge, rule over 18 aws services as destinations

advanced filtering options with json rules (metadata, object size, name, ...)

multiple destinations - ex step functions, kinesis streams / firehose

eventbridge capabilities - archive, replay events, reliable delivery

#### amazon eventbridge - intercept api calls

example user deleting table from dynamodb via api call, cloudtrail will log api call, amazon eventbridge can use that event

#### api gateway - aws service integration kinesis data streams

client requests api gateway, send to kinesis data streams, records in kinesis data firehose, saves in amazon s3

#### caching strategies

client -> cloudfront -> api gateway -> app logic ec2 / lambda -> redis memcached dax & database

client -> cloudfront (edge) -> s3

#### blocking an ip address

vpc level - nacl (has deny rule)

instance level - security group (no deny rule, only allow rule)

optional filrewall software in ec2

#### blocking an ip address - with an alb

alb is between client and ec2 instance

alb can do a connection termination

ec2 instance security group need to allow security group of alb

security group of alb need to allow client

defense at nacl level

#### blocking an ip address - with a nlb

no security group for nlb

traffic can go through even if ec2 instance is private

only defense is nacl

#### blocking an ip address - alb + waf

waf is a service installed on alb, can do ip address filtering

#### blocking an ip address - alb, cloudfront waf

waf can be installed on cloudfront to do ip address filtering

cloudfront can enable geo restriction

nacl is not useful because it sees cloudfront public ip

#### high performance computing (hpc)

the cloud is the perfect place to perform hpc

you can create a very high number of resources in no time

you can speed up time to results by adding more resources

you can pay only for the systems you have used

perform genomics, computational chemistry, financial risk modeling, weather prediction, machine learning, deep learning, autonomous driving

#### data management & transfer

aws direct connect

- move gb/s of data to the cloud, over a private secure network

snowball & snowmobile

- move pb of data to the cloud

aws datasync

- move large amount of data between on-premise and s3, efs, fsx for windows

#### compute and networking

ec2 instances:

- cpu optimized, gpu optimized

- spot instances / spot fleets for cost saving + auto scaling

ec2 placement groups: cluster for good network performance

#### compute and networking

ec2 enhanced networking (sr-iov)

- higher bandwidth, higher pps (packet per second), lower latency

- option 1: elastic network adapter (ena) up to 100 gbps

- option 2: intel 82599 vf up to 10gbps - legacy

elastic fabric adapter (efa)

- improved ena for hpc, only works for linux

- great for inter-node communications, tightly coupled workloads

- leverages message passing interface (mpi) standard

- bypasses the underlying linux os to provide low-latency, reliable transport

#### storage

instance-attached storage

- ebs: scale up to 256000 iops with io2 block express

- instance store: scale to millions of iops, linked to ec2 instance, low latency

network storage

- amazon s3: large blob, not a file system

- amazon efs: scale iops based on total size, or use provisioned iops

- amazon fsx for lustre
  
  - hpc optimized distributed file system, millions of iops
  
  - backed by s3

#### automation and orchestration

aws batch

- aws batch supports multi-node parallel jobs, which enables you to run single jobs that span multiple ec2 instances

- easily schedule jobs and launch ec2 instances accordingly

aws parallelcluster

- open-source cluster management tool to deploy hpc on aws

- configure with text files

- automate creation of vpc, subnet, cluster type and instance types

- ability to enable efa on the cluster (improves network performance)

#### creating a highly available ec2 instance

have a standby ec2 instance as a failover

cloudwatch event to monitor ec2 instance (eg monitor cpu) that triggers a lambda function

lambda function can start the standby ec2 instance, and attach the elastic ip

#### creating a highly available ec2 instance with an autoscaling group

asg settings, 1 min, 1 max, 1 desired, >= 2 az

ec2 user data attachment based on tag

when ec2 instance fails, asg will create another instance in another az

ec2 instance role to allow api calls to attach the elastic ip

#### creating a highly available ec2 instance with asg + ebs

same asg as before

have ebs volume attached to ec2 instance

when ec2 instance terminates, asg can use lifecycle hook to create an ebs snapshot and add tag to it

after asg launch a new ec2 instance, use lifecycle hook to create a ebs volume from snapshot and attach it to new ec2 instance
