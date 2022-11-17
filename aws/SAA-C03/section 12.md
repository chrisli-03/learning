#### Amazon S3 use cases

Backup and storage

Disaster recovery

Archive

Hybrid cloud storage

Application hosting

Media hosting

Data lakes & big data analytics

Software delivery

Static website

#### Amazon S3 - buckets

Allows store objects (files) in "buckets" (directories)

Buckets must have a globally unique name (across all regions all accounts)

Buckets are defined at the region level

S3 looks like a global service but buckets are created in a region

#### Amazon S3 - objects

Objects have a key

the key is the FULL path

- s3://my-bucket/my_file.txt

- s3://my-bucket/my_folder/another_folder/my_file.txt

The key is composed of prefix + object name

- s3://my-bucket/my_folder1/another_folder/my_file.txt

There's no concept of "directories" within buckets (although the UI will trick you to think otherwise)

Just keys with very long names that contain slashes

Object values are the content of the body:

- Max. object size is 5TB

- Object larger than 5TB must use "multi-part upload"

Metadata (list of text key/vlue pairs - system or user metadata)

Tags (unicode key/value pair - up to 10) - useful for security/lifecycle

Version ID (if versioning is enabled)

#### Amazon S3 - security

User-based

- IAM policies - which API calls should be allowed for a specific user from IAM

Resource-based

- Bucket policies - bucket wide rules from the S3 console - allows cross account

- Object access control list (ACL) - finer grain

- Bucket access control list (ACL) - less common

Note: an IAM principal can access an S3 object is

- The user IAM permissions ALLOW it OR the resource policy ALLOWS it

- AND there's no explicit DENY

Encryption: encrypt objects in Amazon S3 using encryption keys

#### S3 bucket policies

JSON based policies

- Resouces: buckets and objects

- Effect: Allow/Deny

- Actions: set of API to Allow or Deny

- Principal: the account or user to apply the policy to

Use S3 bucket for policy to

- Grant public access to the bucket

- Force objects to be encrypted at upload

- Grant access to another account (Cross Account)

#### Bucket settings for block public access

These settings were created to prevent company data leaks

If you know your bucket should never be public, leave these on

Can be set at the account level

#### Amazon S3 - static website hosting

S3 can host static websites and have them accessible on the Internet

The website URL will be http://bucket-name.s3-website(-/.)aws-region.amazonaws.com

If you get 403 Forbidden error, make sure the bucket policy allows public read

#### Amazon S3 - versioning

You can version your files in Amazon S3

Enabled at bucket level

Same key overwrite will change the version

Best practice to version your buckets

- protect against unintended deletes (ability to restore a version)

- Easy roll back to previous version

Notes:

- Any file that is not versioned prior to enabling versioning will have version null

- Suspending versioning does not delete the previous versions

#### Amazon S3 - replication (CRR & SRR)

Must enable versioning in source and estination buckets

Cross-region replication (CRR)

Same-region replication (SRR)

Buckets can be in different AWS accounts

Copying is asynchronous

Must give proper IAM permissions to S3

Use cases:

- CRR - compliance, lower latency access, replication across accounts

- SRR - log aggregation, live replication between production and test accounts

After you enable replication, only new objects are replicated

Optionally, you can replicate existing objects using S3 batch replication

- replicates existing objects and objects that failed replication

For DELETE operations

- Can replicate delte markers from source to target (optional setting)

- Deletions with a version ID are not replicated (to avoid malicious deletes)

There is no "chaining" of repplication

- If bucket 1 has replication into bucket 2, which has replication into bucket 3

- Then objects created in bucket 1 are not replicated to bucket3

#### S3 durability and availability

Durability:

- High durability of objects across multiple AZ

- If you store 1000000 objects with Amazon S3, you can expect a loss of one object per 10000 years

- Same for all storage classes

Availability:

- Measures how readily available a service is

- Varies depending on storage class

#### S3 standard - general purpose

99.99% availability

Used for frequently accessed data

Low latency and high throughput

Sustain 2 concurrent facility failures

Use cases: big data analytics, mobile & gaming applications, content distribution

#### S3 storage class - infrequent Access

For data less frequently accessed but requires rapid access when needed

Lower cost than S3 standard

Amazon S3 standard-infrequent access

- 99.9% Availability

- Use cases: Disaster recovery, backups

Amazon S3 one zone-infrequent access

- High durability in a single AZ, data loss when AZ is destroyed

- 99.5% availability

- Use cases: storing secondary backup copies of on-premise data, or data you can recreate

#### Amazon S3 glacier storage classes

Low-cost object storage meant for archiving/backup

Price: price for storage + object retrival cost

Amazon S3 glacier instant retrieval

- Millisecond retrieval, greate for data accessed once a quarter

- Minimum storage duration of  90 days

Amazon S3 glacier flexible retrieval

- Expedited (1-5 minutes), standard (3-5 hours), bulk (5-12 hours) retrieval time

- Minimum storage duration of 90 days

Amazon S3 glacier deep archive

- Standard (12 hours), bulk (48 hours) retrieval time

- Minimum storage duration of 180 days

#### S3 intelligent-tiering

Small monthly monitoring and auto-tiering fee

Moves objects automatically between Access Tiers based on usage

There are no retrieval charges in S3 intelli-gent-tiering



Frequent Access tier (automatic): default tier

Infrequent Access tier (automatic): objects not accessed for 30 days

Archive Instant Access tier (automatic): objects not accessed for 90 days

Archive Access tier (optional): configurable from 90 to 700+ days

Deep Archive Access tier (optional): configurable from 180 days to 700+ days


