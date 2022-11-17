#### What is an EBS volumne

A network drive you can attach to your instances while they run

Allows instances to persist data, even after their termination

Can be mounted to one instance at a time (at the CCP level)

Bound to a specifc availability zone

#### EBS volume

Uses the network to communicate the instance, which means there meight be a bit of latency

Can be detached from an EC2 instance and attached to another one quickly

Locked to an Availability Zone

Have a provisioned capacity (size in GBs, and IOPS)

Can be deleted on termination

#### EBS snapshots

A backup of EBS volume at a point in time

Not necessary to detach volumne to do snapshot, but recommended

Can copy snapshots across AZ or Region

#### EBS snapshots features

EBS Snapshot Archive

- Move a snapshot to an "archive tier" that is 75% cheaper

- Takes within 24 to 72 hours for restoring the archive

Recycle Bin for EBS Snapshot

- Setup rules to retain deleted snapshots

- Specify retention (1 day to 1 year)

Fast Snapshot Restore (FSR)

- Force full initialization of snapshot to have no latency on the first use

#### AMI overview

AMI = Amazon Machine Image

AMI are a customization of an EC2 instance

- Add your own software, configuration, operating system, monitoring...

- Faster boot/configuration time because all your software is pre-packed

AMI are built for a specifc region (and copied across regions)

You can launch EC2 instance from:

- A public AMI (provided by AWS)

- Your own AMI (created yourself)

- An AWS marketplace AMI (sold by someone else)

#### EC2 instance store

EBS volumes are network drives with good but "limited" performance

EC2 instance store is a high-performance hardware disk

Better I/O performance

EC2 instance store lose their storage if they're stopped (ephemeral)

Good for buffer/cache/scratch data/temporary content

Risk of data loss if hardware fails

Backups and replication are your responsibility

#### EBS volume types

EBS volumes come in 6 types

- gp2/gp3 (ssd): general purpose ssd volume, balance price and performance

- io1/io2 (ssd): highest-performance ssd volumne for mission-critical low-latency or high-throughput workloads

- st1 (hdd): low cost hdd volume designed for frequently accessed, throughput-intensive workloads

- sc1 (hdd): lowest cost hdd volume designed for less frequently accessed workload

EBS volumes are characterized in Size, Throughput, IOPS (I/O Ops Per Sec)

When in doubt always consult the AWS documentation

Only gp2/gp3 and io1/io2 can be used as boot volumes

#### General Purpose SSD

Cost effective storage, low-latency

System boot volumes, virtual desktops, development and test environments

1GiB - 16 TiB

gp3 allows you to setup IOPS and volume independently and in gp2 they are linked

#### Provisioned IOPS (PIOPS) SSD

Critical business applications with sustained IOPS performance

Or applications that need more than 16000 IOPS

Greate for databases workloads (sensitive to storage perf and consistency

io1/io2 (4 GiB - 16 TiB):

- Max PIOPS: 64000 for Nitro EC2 instances & 32000 for other

- Can increase PIOPS independently from storage size

- io2 have more durability and more IOPS per GiB (at same price as io1)

io2 Block Express (4 GiB - 64 TiB):

- Sub-millisecond latency

- Max PIOPS: 256000 with an IOPS:GiB ratio of 1000:1

Supports EBS Multi-attach

#### Hard Disk Drives (HDD)

Cannot be boot volume

125MiB to 16TiB

Throughput Optimized HDD (st1)

- Big Data, Data warehouse, log processing

- Max throughput 500 MiB/s - max IOPS 500

Cold HDD (sc1):

- For data that is infrequently accessed

- Scenarios where lowest cost is important

- Max throughput 250 MiB/s - max IOPS 250

#### EBS multi-attach - io1/io2

Attach the same EBS volume to multiple EC2 instances in the same AZ

Each instance has full read & write permissions

Use case:

- Archieve higher application availability in clusered Linux applications (ex: Teradata)

- Applications must manage concurrent write operations

Up to 16 EC2 instances at a time

Must use a file system that is custer-aware (not XFS, EX4, etc.)

#### EBS encryption

WHen you create an encrypted EBS volume, you get the following:

- data at rest is encrypted inside the volume

- all the data in floght moving between the instance and the volume is encrypted

- all snapshots are encrypted

- all volumes created from the snapshot

Encryption and decryption are handled transparently

Encryption has a minimal impact on latency

EBS Encryption leverages key from KMS (AES-256)

Copying an unencrypted snapsho allows encryption

Snapshots of encrypted volumes are encrypted

#### Encrypt an unencrypted EBS volume

Create an EBS snapshot of the volume

Encrypt the EBS snapshot (using copy)

Create new EBS volume from the snapshot

Attach the encrypted volume to the original instance

#### Amazon EFS - Elastic File System

Managed NFS (network file system) that can be mounted on many EC2

EFS works with EC2 instances in multi-AZ

Highly available, scalable, expensive (3x gp2), pay per use

Use cases:

- content management

- web serving

- data sharing

- wordpress

Use NFSv4.1 protocol

Use security group to control access to EFS

Compatible with Linux based AMI (not Windows)

Encryption at rest using KMS

POSIX file system (~Linux) that has a standard file API

File system scales automatically , pay-per-use, no capacity planning

#### EFS - performance

EFS Scale

- 1000s of concurrent NFS clients, 10GB+ /s throughput

- Grow to Petabyte-scale network file system, automatically

Performance mode (set at EFS creation time)

- general purpose (defualt): latency-sensitive use casees (web server ,CMS, etc...)

- Max I/O - higher latency, throughput , highly parallel (big data, media processing)

Throughput mode

- Bursting (1TB = 50MiB/s + burst of up to 100MiB/s)

- Provisioned: set your throughtput regardless of storage size, ex: 1 GiB/s for 1 TB storage

#### EFS - storage classes

Storage Tiers (lifecycle management feature - move file after N days)

- standard: for frequently accessed files

- infrequent access (EFS-IA): cost to retrieve files, lower price to store. Enable EFS-IA with a Lifecycle Policy

Availability and durability

- Standard: multi-AZ, great for prod

- One Zone: One AZ, great for dev, backup enabled by default, compatible with IA (EFS One Zone-IA)

Over 90% in cost savings

#### EBS vs EFS

EBS

- Only attach to one instance at a time

- locked at the AZ level

- gp2: IO increases if the disk size increases

- io1: can increase IO independently

To migrate an EBS volume across AZ

- Take a snapshot

- Restore the snapshot to another AZ

- EBS backups us IO and you shouldn't run them while your application is handling alot of traffic

Root EBS volumes of instances get terminated by default if the EC2 instance get terminated

EFS

Mounting 100s of instances across AZ

EFS share website files

Only for Liniux instances

EFS has a higher price

Can leverage EFS-IA for cost savings


