#### Private vs public IP (IPv4)

IPv4: eg. 1.160.10.240

IPv6: eg. 3ffe:1900:4545:3:200:f8ff:fe21:67cf

Web servers can connect with each other using public ip

Devices inside a private network can connect with each other with private ip

Public IP:

- Public IP means the machine can be identified on the internet

- Must be unique across the who web

- Can be go-located

Private IP:

- Private Ip can only be identified on a private network

- Only unique within private network

#### Elastic IPs

When you stop and then start an EC2 instance, it can change its public IP, if you need to have a fixed public iP for your instance, you need an Elastic IP

An Elasitc Ip is a public IPv4 IP you own

Can be attached to one instance at a time

Overall avoid Elastic IP:

- poor architectural decision

- use random public IP and register a DNS name to it

#### Placement groups

Control over the EC2 Instance placement strategy

That strategy can be defined using placement groups

When create a placement group, specify one of the following strategies

- cluster, clusters low-latency group in a single Availability Zone

- spread, spreads across underlying hardware (critical applications)

- partition, spreads across many different partitions within an AZ, scales to 100s of EC2 instances per group

#### Placement groups cluster

Pros:

- Great network

Cons:

- If the rack fails, all instances fails at the same time

Use case:

- big data job that needs to complete fast

- application that needs extremely low latency and high network throughput

#### Placement groups spread

Pros:

- Can span across AZ

- Reduce risk of simultaneous failure

- EC2 instancs are on different physical hardware

Cons:

- Limited to 7 instances per AZ per placement group

Use case:

- Application that needs to maximize high availability

- Critical Applications where each instance must be isolated from failure from each other

#### Placement groups partition

Up to 7 partitions per AZ

Can span across multiple AZs in the same region

Up to 100s of EC2 instances

The instances in a partition do not share racks with the instances in the other partitions

A partition failure can affect many EC2 but wont affect other partitions

EC2 instances get access to the partition information as metadata

Use cases:

- HDFS, HBase, Cassandra, Kafka

#### Elastic network interfaces (ENI)

Logical component in a VPC that represents a virtual network card

ENI can have the following attributes:

- primary private IPv4, one or more secondary IPv4

- one Elastic IP (IPv4) per private IPv4

- one Public IPv4

- one or more security groups

- a MAC address

You can create ENI independently and attach them on the fle on EC2 instances for failover

Bound to a specific AZ

#### EC2 hibernate

When stop, terminate instances

- stop: the data on dist (EBS) is kept intact in the next start

- terminate: any EBS volumes (root) also setup to be destroyed is lost

On start, the following happens:

- first start: the OS boots & the EC2 User Data script is run

- following starts: the OS boots up

- then your application starts, caches get warmed up, and that can take time

When you hibernate

- the in-memory (RAM) state is preserved

- the instance boot is much faster

- under the hood: the RAM state is written to a file in the root EBS volumne

- the root EBS volume must be encrypted

Use cases:

- long-running processes

- saving the ram state

- services that take time to initialize


