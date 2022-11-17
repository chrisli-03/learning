#### Amazon athena

serverless query service to analyze data stored in amazon s3

uses standard sql language to query the files (built on presto)

supports csv, json, orc, avro, parquet

pricing: $5 per tb of data scanned

commonly used with amazon quicksight for reporting/dashboards

use cases: business intelligence/analytics/reporting, analyze & query vpc flow logs, elb logs, cloudtrail trails, etc.

exam tip: analyze data in s3 using serverless sql, use athena

#### Amazon athena - performance improvement

use columnar data for cost-savings (less scan)

- apache parquet or orc is recommended

- huge performance improvement

- use glue to convert your data to parquet or orc

compress data for smaller retrievals (bzip2, gzip, lz4, snappy, zlip, zstd, ...)

partition datasets in s3 for easy querying on virtual columns

use larger files (> 128 mb) to minimize overhead

#### Amazon athena - federated query

allows you to run sql queries accross data stored in relational, non-relational, object, and custom data sources (aws or on-premises)

uses data source connectors that run on aws lambda to run fedrated queries (eg. cloudwatch logs, dynamodb, rds, ...)

store the results back to s3

#### Redshift overview

redshift is based on postgresql, but its not used for oltp

its olap - online analytical processing (analytics and data warehousing)

10x better performance than other data warehouses, scale to pbs of data

columnar storage of data (instead of row based) & parallel query engine

pay as you go based on the instances provisioned

has a sql interface for performing the queries

bi tools such as amazon quicksight or tableau integrate with it

vs athena: faster queries/joins/aggregations thanks to indexes

#### Redshift cluster

leader node: for query planning, results aggregation

compute node: for performing the queries, send results to leader

you provision the node size in advance

you can use reserved instances for cost savings

#### Redshift snapshots & dr

redshift has no multi-az mode

snapshots are point-in-time backups of a cluster, stored internally in s3

snapshots are incremental (only what has changed is saved)

you can restore a snapshot into a new cluster

automated: every 8 hours, every 5 gb, or on a schedule. set retention

manual: snapshot is retained until you delete it

you can configure amazon redshift to automatically copy snapshots (automated or manual) of a cluster to another aws region

#### Loading data into redshift: larger inserts are much better

amazon kinesis data firehose

s3 using copy command (internet, without enhanced vpc routing or through vpc, with enhanced vpc routing)

ec2 instance, jdbc driver

#### Redshift spectrum

query data that is already in s3 without loading it

must have a redshift cluster available to start the query

the query is then submitted to thousands of redshift spectrum nodes

#### Amazon opensearch service

amazon opensearch is successor to amazon elasticsearch

in dynamodb, queries only exist by primary key or indexes

with opensearch, you can search any field, event partially matches

its common to use opensearch as a complement to another database

opensearch requires a cluster of instances (not serverless)

does not support sql (it has its own query language)

ingestion from kinesis data firehose, aws iot, and cloudwatch logs

security through cognito & iam, kms encryption, tls

comes with opensearch dashboard (virtualization)

#### OpenSearch patterns dynamodb

crud into dynamodb table, triggers dynamodb stream, calls lambda function, insert to amazon opensearch

application can make api to search in amazon opensearch to get item id, then get full item from dynamodb using item id

#### OpenSearch patterns cloudwatch logs

cloudwatch logs sends to subscription filter, to lambda function, insert to amazon opensearch, or kinesis data firehose to opensearch

#### OpenSearch patterns kinesis data streams & kinesis data firehose

kinesis data streams to kinesis data firehose to amazon opensearch

kinesis data streams to lambda function to amazon opensearch

#### Amazon emr

emr stands for elastic mapreduce

emr helps create hadoop clusters (big data) to analyze and process vast amount of data

the clusters can be made of hundreds of ec2 instances

emr comes bundled with apache spark, hbase, presto, flink

emr takes care of all the provisioning and configuration

auto-scaling and integrated with spot instances

use cases: data processing, machine learning, web indexing, big data, ...

#### Amazon emr - node tpyes & purchasing

master node: manage the cluster, coordinate, manage health - long running

core node: run tasks and store data - long running

task node (optional): just to run tasks - usually spot

purchasing options:

- on-demand: reliable, predictable, wont be terminated

- resesrved (min 1 year): cost savings (emr will automatically use if available)

- spot instance: cheaper, can be terminated, less reliable

can have long-running cluster, op transient (temporary) cluster

#### Amazon quicksight

serverless machine learning-powered business intelligence service to create interactive dashboards

fast, automatically scalable, embeddable, with per-session pricing

use cases:

- business analytics

- building visualization

- perform ad-hoc analysis

- get business insights using data

integrated with rds, aurora, athena, redshift, s3, ...

in-memory computation using spice engine if data is imported into quicksight

enterprise edition: possiblity to setup column-level security

#### QuickSight integrations

can integrate with many aws data sources and databases, 3rd party data sources (salesforce, jira), 3rd party databases (jdbc, etc.), imported data sources (xlsx, csv, json, etc.)

#### QuickSight - dashboard & analysis

define users (standard versions) and groups (enterprise version)

- these users & groups only exist within quicksight, not iam

a dashboard

- is a read-only snapshot of an analysis that you can share

- preserves the configuration of the analysis (filtering, parameters, controls, sort)

you can share the analysis or the dashboard with users or groups

to share a dashboard, you must first publish it

users who see the dashboard can also see the underlying data

#### AWS glue

managed extract, transform, and load (ETL) service

useful to prepare and transform data for analytics

fully serverless service

#### AWS glue - convert data into parquet format

insert csv into s3 bucket, import csv to glue etl, convert to parquet, store in s3 bucket, analyze with amazon athena

event notification on first s3 bucket to trigger glue job

#### Glue data catalog: catalog of datasets

aws glue data crawler to crawl from amazon s3/rds/dynamodb/jdbc and writes metadata to aws glue data catalog

leverage to glue jobs

amazon athena, redshift spectrum, emr load from glue data catalog

#### Glue - things to know at a high-level

glue job bookmarks: prevent re-processing old data

glue elastic views

- combine and replicate data across multiple data stores using sql

- no custom code, glue monitors for changes in the source data, serverless

- leverages a virutal table (materialized view)

glue databrew: clean and normalize data using pre-built transformation

glue studio: new gui to create, run and monitor etl jobs in glue

glue streaming etl (built on apache spark structured streaming):

compatible with kinesis data streaming, kafka, msk (managed kafka)

#### AWS lake formation

data lake = central place to have all your data for analytics purpose

fully manged service that makes it easy to setup a data lake in days

discover, cleanse, transform, and ingest data into your data lake

it automates many complex manual steps (collecting, cleansing, moving, cataloging data , ...) and de-duplicate (using ml transforms)

combine structured and unstructured data in the data lake

out-of-the-box source blueprints: s3, rds, relational & nosql db

fine-grained access control for your applications (row and column-level)

built on top of aws glue

#### AWS lake formation

create a data lake stored in s3

ingest data from s3/rds/aurora/on-premise database

athena, redshift, emr, spark can use data in lake formation

#### AWS lake formation centralized permissions example

using athena and quicksight, user need permissions

data sources include amazon s3, rds, aurora

instead of setting up security in athena or quicksight or datasource, use column-level security access control instead to manage all access control

any service using lake formation can only see what its allowed to see

#### Kinesis data analytics for sql applications

kinesis data analytics for sql applications can read from kinesis data streams or kinesis data firehose, then write sql statems to read from it and also reference data in s3

can create kinesis data streams or send directly to kinesis data firehose

#### Kinesis data analytics (sql applications)

real-time analytics on kinesis data streams & firehose using sql

add reference data from amazon s3 to enrich streaming data

fully managed, no servers to provision

automatic scaling

pay for actual consumption rate

output

- kinesis data streams: create streams out of hte real-time analytics queries

- kinesis data firehose: send analytics query results to destinations

use cases:

time-series analytics

real-time dashboards

real-time metrics

#### Kinesis data analytics for apache flink

use flink (java, scala, sql) to process and analyze streaming data

can read from kinesis data streams and amazon msk

run any apache flink application on a managed cluster on aws

- provisioning compute resources, parallel computation, automatic scaling

- application backups (implmented as checkpoints and snapshots)

- use any apache flink programming features

- flink does not read from firehose (use kinesis analytics for sql instead)

#### Amazon managed streaming for apache kafka (amazon msk)

kafka is alternative to amazon kinesis

fully managed apache kafka on aws

- allow you to create, update, delete clusters

- msk creates & manages kafka brokers nodes & zookeeper nodes for you

- deploy the msk cluster in your vpc, multi-az (up to 3 for ha)

- automatic recovery from common apache kafka failures

- data is stored on ebs volumes for as long as you want

msk serverless

- run apache kafka on msk without managing the capacity

- msk automatically provisions resources and scales compute & storage

#### Apache kafka at a high level

a way for you to stream data

producers (your code) read from kinesis/iot/rds/etc.

custer will write to topic

consumers (your code) poll from topic

#### Amazon msk consumers

kinesis data analytics for apache flink

aws glue streaming etl jobs powered by apache spark streaming

lambda

application running on ec2, ecs, eks

#### Big data ingestion pipeline

we want the ingestion pipeline to be fully serverless

we want to collect data in real time

we want to transform the data

we want to query the transformed data using sql

the reports created using the queries should be in s3

we want to load that data into a warehouse and create dashboards

#### Big data ingestion pipeline

iot devices send data in real-time to iot core, sends to amazon kinesis data streams, sends to kinesis data firehose, offload to s3 bucket

could trigger amazon simple queue service which triggers aws lambda which triggers amazon athena, athena pull data from s3 bucket and write report to another s3 bucket, then use amazon quicksight or redshift for analyze

#### Big data ingestion pipeline discussion

iot core allow you to harvest data from iot devices

kinesis is great for real-time data collection

firehose helps with data delivery to s3 in near real-time

lambda can help firehose with data transformations

amazon s3 can trigger notifications to sqs

lambda can subscribe to sqs

athena is a serverless sql service and results are stored in s3

the reporting bucket contains analyzed data and can be used by reporting tool such as aws quicksight, redshift, etc.


