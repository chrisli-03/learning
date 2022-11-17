#### AWS snow family

highly secure ,portable devices to collect and process data at the edge and migrate data into and out of aws

data migration:

- snowcone

- snowball edge

- snowmobile

edge computing

- snowcone

- snowball edge

#### Data migrations with aws snow family

challenges

- limited connectivity

- limited bandwidth

- high network cost

- shared bandwidth (cant maximize the line)

- connection stability

aws snow family: offline devices to perform data migrations

if it takes more than a week to transfer over network, use snow family

client receive aws snowball device via post service, load data onto device, then ship it back

#### Snowball edge (for data transfers)

physical data transport solution move TBs or PBs of data in or out of aws

alternative to moving data over the network

pay per data transfer job

provide block storage and amazon s3 compatible object storage

snowball edge storage optimized

- 80 tb of hdd capacity

snowball edge compute optimized

- 42 tb of hdd capacity

use case: large data cloud migrations, dc decommission, disaster recovery

cluster up to 15 devices

#### AWS snowcone

small, portable computing, anywhere, rugged & secure, withstands harsh environments

light (4.5 pounds)

device used for edge computing, storage, and data transfer

8 tbs of usable storage

use snowcone where snowball does not fit (space-constrained environment)

must provide your own battery/cables

can be sent back to aws offline, or connect it to internet and use aws datasync to send data

#### AWS snowmobile

transfer exabytes of data (1000 pbs, 1000000 tbs)

each snowmobile has 100 pb of capacity (use multiple in parallel)

high security

better than snowball if you transfer more than 10 pb

#### Snow family usage process

1. request snowball devices from aws console for delivery

2. install the snowball client / aws opshub on your servers

3. connect the snowball to your servers and copy files using the client

4. ship back the device when youre done (goes to the right aws facility)

5. data will be loaded into an s3 bucket

6. snowball is completely wiped

#### What is edge computing

process data while its being created on an edge location

edge location = location with limited internet access or computing power

- truck on the road, ship on the sea, mining station, underground

we setup a snowball edge/snowcone device to do edge computing

use cases of edge computing

- preprocess data

- machine learning at the edge

- transcoding media streams

#### Snow family - edge computing

snowcone (smaller)

- 2 cpus, 4gb of memory, wired or wireless access

- usb-c power using a cord or the optional battery

snowball edge - compute optimized

- 52 vcpus, 208 gib of ram

- optional gpu

- 42 tb usable storage

snowball edge - storage optimized

- up to 40 vcpus, 80gib of ram

- object storage clustering available

all can run ec2 instances & aws lambda functions (using aws iot greengrass)

long-term deployment options 1 and 3 years discounted pricing

#### AWS OpsHub

historically to use snow family devices you need a cli

today you can use aws opshub to manage your snow family device

#### Solution architecture: snowball into glacier

snowball cannot import to glacier directly

use amazon s3 first, in combination with an s3 lifecycle policy

#### Amazon fsx - overview

launch 3rd party high-performance file systems on aws

fully managed service

eg. fsx for luster, windows file server, netapp ontap, openzfs

#### Amazon fsx for windows (file server)

fsx for windows is a fully managed windows file system share drive

supports smb protocol and windows ntfs

microsoft active directory integration, acls, user quotas

can be mounted on linux ec2 instances

supports microsoft's distributed file system (dfs) namespace

scale up to 10s of gb/s, millions of iops, 100s pb of data

storage options:

- ssd

- hdd

can be accessed from your on-premises infrastructure (vpn or direct connect)

can be configured to be multi-az

data is daily backed up to s3

#### Amazon fsx for lustre

lustre is a type of parallel distributed file system for large-scale computing

machine learning, high performance computing

video processing, financial modeling, electronic design automation

scales up to 100s gb/s millions of iops, sub-ms latencies

storage options

- ssd

- hdd

seamless integration with s3

- can read s34 as a file system

- can write the output back to s3

#### FSx file system deployment options

scratch file system

- temporary storage

- data is not replicated (doesnt persist if file server fails)

- high burst (6x faster, 200mbps per tib)

- usage: short-term processing, optimize costs

persistent file system

- long-term storage

- data is replicated within same az

- replace failed files within minutes

- usage: long-term processing, sensitive data

#### Amazon fsx for netapp ontap

managed netapp ontap on aws

file system compatible with nfs, smb, iscsi protocol

move workloads running on ontap or nas to aws

works with many operating systems

storage shrinks or grows automatically

snapshots, replication, low-cost, compression and data de-duplication

point-in-time instantaneous cloning (helpful for testing new workloads)

#### Amazon fsx for openzfs

managed openzfs file system on aws

file system compatible with nfs

move workloads running on zfs to aws

works with many operating systems

up to 1000000 iops with < 0.5ms latency

snapshots, compression and low-cost

point-in-time instantaneous cloning (helpful for testing new workloads)

#### Hybrid cloud for storage

aws is pusing for hybrid cloud

- part of your infrastructure is on the cloud

- part of your infrastructure is on-premises

this can be due to 

- long cloud migrations

- security requirements

- compliance requirements

- it strategy

s3 is a proprietary storage technology (unlike efs/nfs), so how do you expose the s3 data on-premises? aws storage gateway

#### Aws storage cloud native options

block (amazon ebs, ec2 instance store)

file (amazon efs, amazon fsx)

object (amazon s3, amazon glacier)

#### AWS storage gateway

bridge between on-premises data and cloud data

use cases:

- disaster recovery

- backup & restore

- tiered storage

- on-premises cache & low-latency files access

types of storage gateway

- s3 file gateway

- fsx file gateway

- volume gateway

- tape gateway

#### Amazon s3 file gateway

configured s3 buckets are accessible using the nfs and smb protocol

most recently used data is cached in the file gateway

supports s3 standard, s3 standard ia, s3 one zone ia, s3 intelligent tiering

transition to s3 glacier using a lifecycle policy

bucket access using iam roles for each file gateway

smb protocol as integration with active directory for user authentication

#### Amazon fsx file gateway

native access to amazon fsx for windows file server

local cache for frequently accessed data (main reason for use)

windows native compatibility

useful for group file shares and home directories

#### Volume gateway

block storage using iscsi protocol backed by s3

backed by ebs snapshots which can help restore on-premises volumes

cached volumes: low latency access to most recent data

stored volumes: entire dataset is on premise, scheduled backups to s3

#### Tape gateway

some companies have backup processes using physical tapes

with tape gateway, companies use the same processes but, in the cloud

virtual tape library backed by amazon s3 and glacier

back up data using existing tape-based processes

works with leading backup software vendors

#### Storage gateway - hardware appliance

using storage gateway means you need on-premises virtualization

otherwise you can use a storage gateway hardware applicance

you can buy it on amazon.com

works with file gateway, volume gateway, tape gateway

has the required cpu, memory, network, ssd cache resources

helpful for daily nfs backups in small data centers

#### AWS storage gateway

aws s3 file gateway

- user/group file shares connect to local file gateway using nfs/smb

- encryption in transit, internet or direct connect to storage gateway

- storage gateway redirects to amazon s3 excluding glacier

- then store to any s3 including glacier via lifecycle

aws fsx file gateway

- user/group file shares connect to local file gateway using nfs/smb

- encryption in transit, internet or direct connect to storage gateway

- storage gateway redirects to a aws fsx for windows file server

- automated backup to amazon s3

volume gateway

- application server connect to volume gateway using iscsi

- encryption in transit, internet or direct connect to storage gateway

- storage gateway redirects to amazon s3

- amazon s3 stores it in aws ebs

tape gateway

- backup application connects to tape gateway using iscsi vtl

- encryption in transit, internet or direct connect to storage gateway

- storage gateway redirects to a amazon s3 tape library

- ejects from backup application into tape archive (glacier or glacier deep archive)

#### AWS transfer family

a fully managed service for file transfers into and out of amazon s3 or amazon efs using the ftp protocol

supported protocols

- aws transfer for ftp (file transfer protocol)

- aws transfer for ftps (file transfer protocol over ssl)

- aws transfer for sftp (secure file transfer protocol)

managed infrastructure, scalable, reliable, hightly available

pay per provisioned endpoint per hour + data transfers in gb

store and manage users credentials within the service

integrated with existing authentication systems

usage: sharing files, public datasets, crm, erp, ...

#### AWS datasync

move large amount of data to and from places

- on-premises/other cloud to aws - needs agent

- aws to aws (different storage services) - no agent needed

can synchronize to:

- amazon s3

- amazon efs

- amazon fsx

replication tasks can be scheduled hourly, daily, weekly

file permissions and metadata are preserved (nfs posix, smb, ...)

one agent task can use 10gbps, can setup a bandwidth limit

#### AWS datasync nfs/smb to aws

install aws datasync agent on premise

connect agent to your server via nfs/smb

point agent to aws datasync

aws datasync can point to any storage resource

(can also sync from aws to on premises)

#### AWS datasync transfer between aws storage services

aws datasync will copy data and metadata between aws storage services

scheduled task, not continuous

#### Storage comparison

s3: object storage

s3 glacier: object archival

ebs volumes: network storage for one ec2 instance at a time

instance storage: physical storage for your ec2 instance (high iops)

efs: network file system for linux instances, posix filesystem

fsx for windows: network file system for windows servers

fsx for lustre: high performance computing linux file system

fsx for netapp ontap: high os compatibility

fsx for openzfs: managed zfs file system

storage gateway: s3 & fsx file gateway, volume gateway (cache & stored), tape gateway

transfer family: ftp, ftps, sftp interface on top of amazon s3 or amazon efs

datasync: schedule data sync from on-premises to aws or aws to aws

snowcone/snowball/snowmobile: to move large amount of data to cloud physically

database: for specific workloads, usually with indexing and querying


