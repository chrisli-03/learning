#### Amazon S3 - moving between storage classes

you can transition objects between storage classes

for infrequently accessed object, move them to standard ia

for archive objects that you dont need fast access to , move them to glacier or glacier deep archive

moving objects can be automated using a lifecycle rule

#### Amazon S3 - lifecycle rules

transition actions - configure objects to transition to another storage class

- move objects to standard ia class 60 days after creation 

- move to glacier for archiving after 6 months

Expiration actions - configure objects to expire (delete) after some time

- access log files can be set to delete after a 365 days

- can be used to delete old versions of file

- can be used to delete incomplete multi-part uploads

rules can be created for a certain prefix or certain objects tags

#### Amazon S3 analytics - storage class analysis

help you decide when to transition objects to the right storage class

recommendations for standard and standard ia

- does not work for on-zone ia or glacier

report is updated daily

24 to 48 hours to start seeing data analysis

#### S3 - requester pays

in general buckets owners pay for all amazon s3 storage and data transfer costs associated with their bucket

with requester pays buckets, the requester instead of the bucket owner pays the cost of the request and the data download from the bucket

helpful when you want to share large datasets with other accounts

the requester must be authenticated in aws (cannot be anonymous)

#### S3 event notifications

eg: S3:objectCreated, S3:ObjectRemoved, S3ObjectRestore, ...

object name filtering possible (eg. *.jpg)

use case: generate thumbnails of images uploaded to s3

can create as many s3 events ad desired

s3 event notifiactions typically deliver events in seconds but can sometimes take a minute or longer

#### S3 event notifications with amazon event bridge

all event goes to amazon event bridge, then you can setup rules to send events to over 18 aws services as destinations

advanced filtering options with json rules (metadata, object size, name)

multiple destinations

eventbridge capabilities - archive, replay events, reliable delivery

#### S3 - baseline performance

amazon s3 automatically scales to high request rates, latency 100-200ms

can archive at least 3500 pu/copy/post/delete and 5500 get/head requests per second per prefix in a bucket

there are no limits to the number of prefixes in a bucket

example (object paht => prefix)

- bucket/folder1/sub1/file => /folder1/sub1/

- bucket/folder1/sub2/file => /folder1/sub2/

- bucket/1/file => /1/

- bucket/2/file => /2/

if you spread reads across all four prefixes evenly, you can achieve 22000 requests per second for get and head

#### S3 performance

multi-part upload:

- recommended for files > 100mb, must for files > 5gb

- can help parallelize uploads (speed up transfers)

s3 transfer acceleration

- increase transfer speed by transferring file to an aws edge location which will forward the data to the s3 bucket in the target region

- compatible with multi-part upload

#### S3 performance - s3 byte-range fetches

parallelize gets by requesting specifc byte ranges

better resilience in case of failures

can be used to speed up downloads

can be used to retrieve only partial data (eg. head of a file)

#### S3 select & glacier select

retrieve less data using sql by performing server-side filtering

can filter by rows & columns (simple sql statements)

less network transfer, less cpu cost client-side

#### S3 batch operations

perform bulk operations on existing s3 objects with a single request

- modify object metadata & properties

- copy objects between s3 buckets

- encrypt un-encrypted objects

- modify acls, tags

- restore objects from s3 glacier

- invoke lambda function to perform custom action on each object

a jub consists of a list of objects the action to perform and optional parameters

s3 batch operations manages retries, tracks progress, sends completion notifications, generate reports...

you can use s3 inventory to get object list and use s3 select to filter your objects


