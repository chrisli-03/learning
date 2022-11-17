#### disaster recovery overview

any event that has a negative impact on a companys business continuity or finances in a disaster

disaster recovery is about preparing for and recovering from a disaster

what kind of disaster recovery?

- on-premise => on-premise: traditional dr, and very expensive

- on-premise => aws cloud: hybrid recovery

- aws cloud region a => aws cloud region b

need to define two terms:

- rpo: recovery point objective

- rto: recovery time objective

#### rpo and rto

time between rpo and disaster is data loss

time between rto and disaster is downtime

#### disaster recovery strategies

backup and restore

pilot light

warm standby

hot site/multi site approach

#### backup and restore (high rpo)

corporate data center

aws storage gateway to s3 to glacier, or aws snowball to glacier, maybe a week dataloss

aws cloud

ebs, redshift, rds scheduled regular snapshots, maybe a day dataloss

cheap

#### disaster recovery - pilot light

a small version of the app is always running in the cloud

useful for the critical core (pilot light)

very similar to backup and restore

faster than backup and restore as critical systems are already up

#### warm standby

full system is up and running, but at minimum size

upon disaster, we can scale to production load

#### multi site/hot site approach

very low rto (minutes or seconds) - very expensive

full production scale is running aws and on premise

#### all aws multi region

aurora global master data replication to another aurora global slave

#### disaster recovery tips

backup

- ebs snapshots, rds automated backups/snapshots, etc...

- regular pushes to s3/s3 ia/galcier, lifecycle policy, cross region replication

- from on-premise: snowball or storage gateway

high availability

- use route53 to migrate dns over from region to region

- rds multi-az, elasticache multi-az, efs, s3

- site to site vpn as a recovery from direct connect

replication

- rds replication (corss region), aws aurora + global databses

- database replication from on-premise to rds

- storage gateway

automation

- cloudformation/elastic beanstalk to re-create a whole new environment

- recovery/reboot ec2 instances with cloudwatch if alarm fail

- aws lambda functions for customized automations

chaos

- netflex has a "simian-army" randomly terminating ec2

#### dms - database migration service

quicly and securely migrate databases to aws, resilient, self healing

the source database remains available during the migration

supports:

- homogeneous migrations: ex oracle to oracle

- heterogeneous migrations: ex microsoft sql server to aurora

- continuous data replication usein cdc

- you must create a ec2 instance to perform the replication tasks

#### dms sources and targets

source:

- on-premis and ec2 instances databases: oracle, ms sql server, mysql, mariadb, postgresql, mongodb, sap, db2

- azure: azure sql database

- amazon rds, all including aurora

- amazon s3

targets:

- on-premise and ec2 instances databases: oracle, ms sql server, mysql, mariadb, postgresql, sap

- amazon rds

- amazon redshift

- amazon dynamodb

- amazon s3

- elasticsearch service

- kinesis data streams

- documentdb

#### aws schema conversion tool (sct)

convert your databases schema from one engine to another

example oltp: (sql server or oracle) to mysql, postgresql, aurora

example olap: (teradata or oracle) to amazon redshift

you do not need to use sct if you are migrating the same db engine

ex: on-premise postgresql => rds postgresql, the db engine is still postgresql

#### rds & aurora mysql migrations

rds mysql to aurora mysql

- option 1: db snapshots from rds mysql restored as mysql aurora db

- option 2: create an aurora read replica from your rds mysql, and when the replication lag is 0, promote it as its own db cluster (can take time and cost money)

external mysql to aurora mysql

- option 1: use percona xtrabackup to create a file backup in amazon s3, create an aurora mysql db from amazon s3

- option 2: create an aurora mysql db, use the mysqldump utility to migrate mysql into aurora (slower than s3)

use dms if both databases are up and running

#### rds & aurora postgresql migrations

rds postgresql to aurora postgresql

(similar with mysql)

external postgresql to aurora postgresql

- create a backup and put it in amazon s3

- import it using the aws_s3 aurora extension

use dms if both databses are up and running

#### on-premise strategy with aws

ability to download amazon linux 2 ami as a vm (.iso format)

- vmware, kvm, virtualbox (oracle vm), microsoft hyper-v

vm import/export

- migrate existing applications into ec2

- create a dr repository strategy for your on-premise vms

- can export back the vms from ec2 to on-premise

aws application discovery service

- gather information about your on-premise servers to plan a migration

- server utilization and dependency mappings

- track with aws migration hub

aws database migration service (dms)

- replicate on-premise => aws, aws => aws, aws => on-premise

- works with various databse technologies (oracle, mysql, dynamodb, etc...)

aws server migration service (sms)

- incremental relication of on-premise live servers to aws

#### aws backup

fully managed service

centrally manage and automate backups across aws services

no need to create custom scripts and manual processes

supported services

- amazon ec2/amazon ebs

- amazon s3

- amazon rds (all dbs engines) / amazon aurora / amazon dynamodb

- amazon documentdb / amazon neptune

- amazon efs / amazon fsx (lustre & windows file server)

- aws storage gateway (volume gateway)

supports cross-region backups

supports cross-account backups

supports pitr for supported services

on-demand and scheduled backups

tag-based backup policies

you create backup policies known as backup plans

- backup frequency (every 12 hours, daily, weekly, monthly, cron expression)

- backup window

- transition to cold storage (never, days, weeks, months, years)

- retention period (always, days, weeks, months, years)

#### aws backup vault lock

enforce a worm (write once read many) state for all the backups that you store in your aws backup vault

additional layer of defense to protect your backup against

- inadvertent or malicious delete operations

- updates that shorten or alter retention periods

even root user cannot delete backup when enabled

#### aws application discovery service

plan migration projects by gathering information about on-premises data centers

server utilization data and dependency mapping are important for migrations

agentless discovery (aws agentless discovery connector)

- vm inventory, configuration, and performance history such as cpu, memory, and disk usage

agent-based discovery (aws application discovery agent)

- system configuration, system performance, running processes, and details of the network connections between systems

resulting data can be viewed within aws migration hub

#### aws application migration service (mgn)

the aws evolution of cloudendure migration, replacing aws server migration service

lift-and-shift (rehost) solution which simplify migrating applications to aws

converts your physical, virtual, and cloud-based servers to natively on aws

supports wide range of platforms, operating systems and databses

minimal downtime, reduced costs

#### transferring large amount of data into aws

example: transfer 200tb of data in the cloud. we have a 100mbps internet connection

over the internet / site-to-site vpn:

- immediate to setup

- will take 185 days

over direct connect 1gbps

- long for the one-time setup (over a month)

- will take 18.5 days

over snowball

- will take 2 to 3 snowballs in parallel

- takes about 1 week for the end-to-end transfer

- can be combined with dms

for on-going replication/transfers: site-to-site vpn or dx with dms or datasync

#### vmware cloud on aws

some customers use vmware cloud to manage their on-premises data center

they want to extend the data center capacity to aws, but keep using vmware cloud software

use cases

- migrate your vmware vsphere-based workloads to aws

- run your production workloads across vmware vsphere-based private, public, and hybrid cloud environments

- have a disaster recovery strategy


