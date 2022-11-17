#### Amazon S3 - object encryption

you can encrypt objects in s3 buckets using one of 4 methods

server-side encryption (sse)

- server-side encryption with amazon s3-managed keys (sse-s3)
  
  - encrypt s3 objects using keys handled, managed, and owned by aws

- server-side encryption with kms keys stored in aws kms (sse-kms)
  
  - leverage aws key management service (aws kms) to manage encryption keys

- server-side encryption with customer-provided keys (sse-c)
  
  - when you want to manage your own encryption keys

client-side encryption

#### Amazon s3 encryption - sse-s3

Encryption using keys handled, managed, and owned by aws

object is encrypted server-side

encryption type is aes-256

must set herder "x-amz-server-side-encryption": "aes256"

#### Amazon s3 encryption - sse-kms

encryption using keys handled and managed by aws kms

kms advantages: user control + audit key usage using cloudtrail

object is encrypted on server side

must set header "x-amz-server-side-encryption": "aws:kms"

#### SSE-KMS limitaions

if you use sse-kms, you may be impacted by the kms limits

when you upload,it calls the generatedatakey kms api

when you download, it calls the decrypt kms api

count towards the kms quota per second

you can request a quota increase using the service quota service

#### Amazon s3 encryption - sse-c

server-side encryption using keys fully managed by the customer outside of aws

amazon s3 does not store the encryption key you provide

https must be used

encryption key must provided in http headers for every http request made

#### Amazon s3 encryption - client-side encryption

use client libraries such as amazon s3 client-side encryption library

clients must encrypt data themselves before sending to amazon s3

clients must decrypt data themselves when retrieving from amazon s3

customer fully manages the keys and encryption cycle

#### Amazon s3 - encryption in transit (ssl/tls)

encryption in flight is also called ssl/tls

amazon s3 exposes two endpoints:

- http endpoint - non ecrypted

- https endpoint - encryption in flight

https is recommended

https is mandatory for sse-c

most clients would use the https endpoint by default

#### Amazon s3 -default encryption vs bucket policies

one way to foce encryption is to use a bucket policy and refuse any api call to put an s3 object without encryption headers

another way is to use the "default encryption" option in s3

note: bucket policies are evaluated before default encryption

#### Cors

cross-origin resource sharing

origin = scheme (protocol) + host (domain) + port

web browser based mechanism to allow requests to other origins while visiting the main origin

same origin: http://example/app1, http://example.com/app2

different origins: http://www.example.com, http://other.example.com

the request wont be fulfilled unless the other origin allows for the request, using CORS header (eg. access-control-allow-origin)

#### Amazon s3 - cors

if a client makes a cross-origin request on our s3 bucket, we need to enable the correct cors header

its a popular exam question

you can allow for a specific origin or for * (all regions)

#### Amazon s3 - mfa delete

mfa (multi-factor authentication) - force users to generate a code on a device before doing important operations on s3

mfa will be required to

- permanently delete an object version

- suspendversioning on the bucket

mfa wont be required to

- enable versioning

- list deleted versions

to use mfa delete, versioning must be enabled on the bucket

only the bucket owner can enable/disable mfa delete

#### S3 access logs

for audit purpose, you may want to log all access to s3 buckets

any request made to s3, from any account, authorized or denied, will be logged into another s3 bucket

that data can be analyzed using data analysis tools

the target logging bucket must be in the same aws region

#### S3 access logs warning

do not set your logging bucket to be the monitored bucket

it will create a logging loop, and your bucket will grow exponentially

#### Amazon s3 - pre-signed urls

generate pre-signed urls using the s3 console, aws cli or sdk

url expiration

- s3 console - 1 min up to 720 mins

- aws cli - configure expiration with -expires-in parameter in seconds
  
  - default 3600 secs, max. 604800 secs

users given a pre-signed url inherit the permissions of the user that generated the url for get/put

Examples:

- allow only logged-in users to download a premium video from your s3 bucket

- allow an ever-changing list of users to download files by generating urls dynamically

- allow temporarily a user to upload a file to a precise location in your s3 bucket

#### S3 glacier vault lock

adopt a WORM (write once read many) model

create a vault lock policy

lock the policy for future edits (can no longer be changed or deleted)

helpful for compliance and data retention

#### S3 object lock (versioning must be enabled)

adopt a WORM (write once read many) model

block an object version deletion for a specifed amount of time

retention mode - compliance:

- object versions cannot be overwritten or deleted by any user including root

- objects retention modes cant be changed, and retention periods cant be shortened

retention mode - governance:

- most users cant overwrite or delete an object version or alter its lock settings

- some users have special permissions to change the retention or delete the object

retention period: protect the object for a fixed period, it can be extended

legal hold:

- protect the object indefinitely, independent from retention period

- can be freely placed and removed using the s3:putobjectlegalhold iam permission

#### S3 - access points

each access point gets its own dns and policy to limit who can access it

- a specific iam user/group

- one policy per access point => easier to manage than complex bucket policies

#### S3 object lambda

use aws lambda functions to change the object before it is retrieved by the caller application

only one s3 bucket is needed, on top of which we create s3 access point and s3 object lambda access point

use cases:

- redacting personally identifiable information for analytics or non-production environments

- converting across data formats, such as converting xml to json

- resizing and watermarking images on the fly using caller-specifc details, such as the user who requested the object


