#### Amazon RDS overview

RDS is relational database service

Managed DB service for DB use SQL as a query language

Pros:

- managed service
  
  - automated provisioning, OS patching
  
  - continuous backups and restore
  
  - monitoring dashboard
  
  - read replicas for improved performance
  
  - multi AZ setup for DR
  
  - maintenance windows for upgrade
  
  - scaling capability

Cons:

- cant ssh into your instances

#### RDS storage auto scaling

helps you increase storage on your RDS DB instance dynamically

RDS automatically scales when you run out of storage

Avoid manually scaling

Have to set Maximum Storage Threshold

Automatically modify storage if

- free storage is less than 10% of allocated storage

- low-storage lasts at least 5 minutes

- 6 hours have passed since last modification

Useful for applications with unpredictable workloads

#### RDS read replicas for read scalability

Up to 5 read replicas

Within AZ, cross AZ, or cross region

Replication is async, so reads are eventually consistent

Replicas can be promoted to their own DB

Application must update connection string to leverage read replicas

Use cases:

- Run reporting application to run some analytics on a database

#### RDS read replicas - network cost

In AWS there is a network cost when data goes from one AZ to another

For RDS read replicas within the same region, you dont pay that fee

Cross region replicas cost a fee

#### RDS multi AZ (disaster recovery)

SYNC replication to a standby replica

One DNS name, automatic app failover to standby

Increase availability

Failover incase of loss of AZ, loss of network, instance or storage failure

No manual intervention in apps

Not used for scaling

Note: the red replicas be setup as multi AZ for disaster recovery

#### RDS - single-AZ to multi-AZ

Zero downtime operation

Click on "modify" and enable multi-AZ

The following happens internally:

- A snapshot is taken

- A new DB is restored from the snapshot in a new AZ

- Synchronization is established between the two databases

#### RDS custom

Managed Oracle and Microsoft SQL server database with OS and database customization

RDS: automates setup, operation and scaling of database in AWS

Custom: access to the underlying database and OS so you can

- configure settings

- install patches

- enable native features

Access the underlying EC2 instance using SSH or SSM session manager

De-activate Automation Mode to perform your customization, better to take a DB snapshot before

#### Amazon Aurora

Proprietary technology from AWS (not open sourced)

Postgres and MySQL are both supported as Aurora DB (your drivers will work as if Aurora was a Postgres or MySQL db)

Aurora is "AWS cloud optimized" and claims 5x performance improvement over MySQL on RDS, over 3x the performance of Postgres on RDS

Aurora storage automatically grows in increments of 10GB up to 128 TB

Aurora can have 15 replicas while MySQL has 5, and replication process is faster

Failover is instantaneous

Aurora costs more than RDS but more efficient

#### Aurora high availability and read scaling

6 copies of your data across 3 AZs:

- 4 copies out of 6 needed for writes

- 3 copies out of 6 neeeded for reads

- self healing with peer-to-peer replication

- storage is striped across 100s of volumes

One Aurora instance takes writes (master)

Automated failover for master in less than 30 seconds

Master + up to 15 Aurora read replicas serve reads

#### Aurora DB cluster

Writer endpoint always pointing to the master

Reader endpoint automatically connects to read replicas and load blancing

#### Autora replicas - auto scaling

When the number of request is large, Aurora automatically adds more replicas

#### Aurora - custom endpoints

Define a subset of Aurora instances as a custom endpoint

Example: run analytical queries on specific replicas

The reder endpoint is generally not used after defining custom endpoints

#### Aurora serverless

Automated database instantiation and auto-scaling based on actual usage

Good for infrequent, intermittent or unpredictable workloads

No capacity palnning needed

Pay per second, can be more cost-effective

#### Aurora multi-master

In case you want immediate failover for write node (HA)

Every node does R/W - vs promoting a RR as the new master

#### Global Aurora

Aurora cross region read replicas:

- useful for disaster recovery

- simple to put in place

Aurora global database (recommended):

- 1 primary region (read/write)

- up to 5 secondary (read) regions, replication lag is less tha n1 second

- up to 16 read replicas per secondary region

- helps decrease latency

- promoting another region (for disaster recovery) has an RTO of < 1 minute

- typical cross-region replication takes less than 1 second

#### Aurora machine learning

Enables you to ass ML-based predictions to your applications via SQL

Simple, optimized and secure integration between Aurora and AWS ML services

Supported services

- Amazon SageMaker (use with any ML model)

- Amazon Comprehend (for sentiment analysis)

Dont need ML experience

Use cases: fraud detection, ads targeting, sentiment anaylsis, product recommendations

#### RDS backups

Automated backups

- daily full backup of the database (during the maintenance window)

- transaction logs are backed-up by RDS every 5 minues

- ability to restore to any point in time (from oldest backup to 5 minutes ago)

- 1 to 35 days of retention, set to 0 for disable

Manual DB snapshot

- manually triggered by user

- retention of backup for as long as you want

Trick: stopped RDS database still cost money, instead take snapshot and delete RDS database

#### Aurora backups

Automated backups

- 1 to 35 days (cannot be disabled)

- point-in-time recovery in that timeframe

Manual DB snapshots

- manually triggered by user

- retention of backup for as long as you want

#### RDS & Aurora restore options

Restoring a backup or snapshot creates a new database

Restoring MySQL RDS database from S3

- create a backup fo your on-premises database

- store it on Amazon S3 (object storage)

- restore the backup file onto a new RDS instance running MySQL

Restoring MySql Aurora cluster from S3

- create a backup of you on-premises database using Percona XtraBackup

- store the backup file on Amazon S3

- restore the backup file onto a new Aurora cluster running MySql

#### Aurora database cloning

Create a new Aurora DB cluster from an existing one

Faster than snapshot & restore

Thew DB cluster uses the same volume and data as the original

Fast and cost-effective

Useful to create a "staging" database from "production" database without impacting the production database

#### RDS & Aurora security

At-rest encryption:

- database master & replicas encryption using AWS KMS (defined as launch time)

- if the master is not encrypted, the read replicas cannot be encrypted

- to encrypt, go though a DB snapshot & restore as encrypted

In-flight encryption: TLS-ready be default, use the AWS TLS root certificates client -side

IAM authentication: IAM roles to connect to your databse

Security groups: control netowkr access to your RDS/Aurora DB

No SSH available except on RDS custom

Audit logs can be enabled and sent to CloudWatch logs for longer retention

#### Amazon RDS proxy

Fully managed database proxy for RDS

Allows apps to pool and share DB connections established with the database

Improving database efficiency by reducing the stress on database resources and minimize open connections

Serverless, autoscaling, high available (multi-AZ)

Reduced RDS & Aurora failover time by up 66%

No code changes required for most apps

RDS proxy is never publicly accessible

Helpful with Lambda functions

#### Amazon ElastiCache overview

The same way RDS is to get managed relational databases

ElastiCache is to get managed Redis or Memcached

Caches are in-memory databases with really high performance, low latency

Helps reduce load off of databases for read intensive workloads

Helps make your application stateless

AWS takes care of OS maintenance/patching/optimization/setup/configuration/monitoring/failure recovery/backups

Using ElastiCache involves heavy application code changes

#### ElastiCache solution architecture - DB Cache

Applications queries ElastiCache, if not available, get from RDS and store in ElastiCache

Helps relieve load in RDS

Cache must have an invalidation strategy to make sure only the most current data is used in there

#### ElastiCache solution architecture - User Session Store

User logs into any of the application

The application writes the session data into ElastiCache

The user hits another instance of our application

The instance retrieves the data and the user is already logged in

#### ElastiCache - redis vs memcached

Redis

- Multi AZ with auto-failover

- Read replicas to scale reads and have high availability

- Data durability using AOF persistence

- Backup and restore features

Memcached

- Multi-node for partitioning of data (sharding)

- No high availability

- Non persistent

- No backup and restore

- Multi-threaded architecture

#### ElastiCache - cache security

All cahces in ElastiCache

- Do not support IAM authentication

- IAM policies on ElastiCache are only used for AWS API-level security

Redis Auth

- you can set a password/token you create a Redis cluster

- this is an extra level of security for your cache (on top of security groups)

- support SSL in flight encryption

Memcached

- supports SASL-based authentication (advanced)

#### Patterns for ElastiCache

Lazy loading: all the read data is cached, data can become stale in cache

Write through: adds or updates data in the cache when written to a DB (no stale data)

Session store: store temporary session data in a cache (using TTL features)

#### ElastiCache - redis use case

Gaming leaderboards are computationally complex

Redis sorted sets guarentee both uniqueness and element ordering

Each time a new element added, it's ranked in real time, then added in correct order


