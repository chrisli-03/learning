#### Database types

rdbms (= sql/oltp): rds, aurora - great for joins

nosql database - no joins, no sql: dynamodb (~json), elasticache (key/value pairs), neptune (graphs), documentdb (for mongodb), keyspaces (for apache cassandra)

object store: s3 (for big objects) / glacier (for backups/archives)

data warehouse (= sql analytics / bi): redshift (olap), athena, emr

search: opensearch (json) - free text, unstructured searches

graphs: amazon neptune - dispalyas relationships between data

ledger: amazon quantum ledger database

time series: amazon timestream

#### Amazon rds - summary

managed posgresql/mysql/oracle/sql server/mariadb/custom

provisioned rds instance size and ebs volume type & size

auto-scaling capability for storage

support for read replicas and multi az

security through iam, security groups, kms, ssl in transit

automated backup with point in time restore feature (up to 35 days)

manual db snapshot for longer-term recovery

managed and schedule maintenance (with downtime)

support for iam authentication, integration with secrets manager

rds custom for access to and customize the underlying instance (oracle & sql server)

use cases: store relational datasets (rdbms/oltp), perform sql queries, transactions

#### Amazon aurora - summary

compatible api for postgressql/mysql, separation of storage and compute

storage: data is stored in 6 replicas, across 3 az - highly available, self-healing, auto-scaling

compute: cluster of db instance across multiple az, auto-scaling of read replicas

cluster: custom endpoints for writer and reader db instances

same security/monitoring/maintenance features as rds

know the backup & restore options for aurora

aurora serverless - for unpredictable/intermittent workloads, no capacity planning

aurora multi-master - for continuous writes failover (high write availability)

aurora global: up to 16 db read instances in each region, < 1 second storage replication

aurora machine learning: perform ml using sagemaker & comprehend on aurora

aurora database cloning: new cluster from existing one, faster than restoring a snapshot

use cases: same as rds, but less maintenance/more flexibility/more performance/more features

#### Amazon elasticache - summary

managed redis/memcached (similar offering as rds, but for cahces)

in-memory data store, sub-milisecond latency

must provision an ec2 instance type

support for clustering (redis) and multi az, read replicas (sharding)

security through iam, security groups, kms, redis auth

backup/snapshot/point in time restore feature

managed and scheduled maintenance

requires some application code changes to be leveraged

use case: key/value store, frequent reads, less writes, cache results for db queries, store session data for websites, cannot use sql

#### Amazon dynamodb - summary

aws proprietary technology, managed serverless nosql database, millisecond latency

capacity modes: provisioned capacity with optional auto-scaling or on-demand capacity

can replace elasticcashe as a key-value store (storing session data for example, using ttl feature)

highly available, multi az by default, read and writes are decoupled, transaction capability

dax cluster for read cache, microsecond read latency

security, authentication and authorization is done through iam

event processing: dynamodb streams to integrate with aws lambda, or kinesis data streams

global table feature: active-active setup

automated backups up to 35 days with pitr (restore to new table), or on-demand backups

export to s3 without using rcu within the pitr window, import from s3 without using wcu

great to rapidly evolve schemas

use case: serverless applications development (small docuemtns 100s kb), distributed serverless cache, doesnt have sql query language support

#### Amazon s3 - summary

s3 is a key/value store for objects

great for bigger objects, not so great for small objects

serverless, scales infinitely, max object size is 5 tb, versioning capability

tiers: s3 standard, s3 infrequent access, s3 intelligent, s3 glacier + lifecycle policy

features: versioning, encrtyption, replciation, mfa-delete, access logs,...

security: iam, bucket policies, acl, access points, object lambda, cors, object/vault lock

encryption: sse-s3, sse-kms, sse-c, client-side, tls in transit, default encryption

batch operations on objects using s3 batch, listing files using s3 inventory

performance: multipart upload, s3 transfer acceleration, s3 select

automation: s3 event notifications (sns, sqs, lambda, eventbridge)

use case: static files, key value store for big files, website hosting

#### DocumentDB

aurora is an aws-implementation of postgressql and mysql

documentdb is the same for mongodb (which is a nosql database)

mongodb is used to store, query, and index json data

similar deployment concepts as aurora

fully managed, highly available with replication across 3 az

documentdb storage automatically grows in increments of 10 gb up to 64 tb

automatically scales to workloads with millions of requests per second

#### Amazon neptune

fully managed graph database

a popular graph dataset would be a social network

- users have friends

- posts have comments

- comments have likes from users

- users share and like posts

hightly availability across 3 az, with up to 15 read replicas

build and run applications working with highly connected datasets - optimized for these complex and hard queries

can store up to billions of relations and query the graph with milliseconds latency

highly available with replications across multiple azs

great for knowledge graphs (wikipedia), fraud detection, recommendation  engines, social networking

#### Amazon keyspaces (for apache cassandra)

apache cassandra is an open-source nosql distributed database

a managed apache cassandra-compatible database service

serverless, scalable, highly available, fully managed by aws

automatically scale talbes up/down based on the application's traffic

tables are replicated 3 times across multiple az

using the cassandra query language (cql)

single-digit millisecond latencyt at any scale, 1000s of requests per second

capacity: on-demand mode or provisioned mode with auto-scaling

encryption, backup, point-in-time recovery (pitr) up to 35 days

use cases: store iot devices info, time-serires data, ...

#### Amazon qldb

qldb stands for quantum ledger database

a ledger is a bood recording financial transactions

fully managed, serverless, high available, replications across 3 az

used to review history of all the changes made to your application data over time

immutable system: no entry can be removed or modified, cryptographically verifiable

2-3x better performance than common ledger blockchain frameworks, manipulate data using sql

difference wiht amazon managed blockchain: no decentralization component, in accordance with financial regulation rules

#### Amazon timestream

fully managed, fast, scalable, serverless time series database

automatically scales up/down to adjust capacity

store and analyze trillions of events per day

1000s times faster & 1/10th the cost of relational databases

scheduled queries, multi-measure records, sql compatibility

data storage tiering: recent data kept in memory and historical data kept in a cost-optimized storage

built-in time series analytics functions (helps you identify patterns in your data in near real-time)

encryption in transit and at rest

use cases: iot apps, operational applications, real-time analytics, ...

#### Amazon timestream - architecture

can receive from aws iot, kinesis data streams via lambda, prometheus, telegraf, kinesis data streams/amazon msk vie kinesis data analytics for apache flink

can post to amazon quicksight, amazon sagemaker, grafana, any jdbc connection
