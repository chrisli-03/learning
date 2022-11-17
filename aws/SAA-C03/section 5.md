#### Amazon EC2

EC2 is one of the most popular of AWS' offering

EC2 = Elastic compute cloud = Infrastructure as a service

Capabilitites

- Renting virtual machines (EC2)

- Storing data on virtual drives (EBS)

- Distributing load across machines (ELB)

- Scaling the services using an auto-scaling group (ASG)

#### EC2 sizing & configuration options

OS: Linux, Windows, MacOS

CPU

RAM

Storage space

- Network-attached (EBS & EFS)

- Hardware (EC2 instance store)

Network card

Firewall rules

Bootstrap script

#### EC2 user data

it is possible to bootstrap our instances using an EC2 User data script

bootstrapping means lauching cammands when a machine starts

That script is only run once at the instance first start

EC2 user data is used to automate boot tasks such as

- installing updates

- installing software

- downloading common files

EC2 user data script runs with root user

#### Example user data script

```
#!/bin/bash
# Use this for your user data (script from top to bottom)
# install httpd (Linux 2 version)
yum update -y
yum install -y httpd
systemctl start httpd
systemctl enable httpd
echo "<h1>Hello World from $(hostname -f)</h1>" > /var/www/html/index.html
```

#### EC2 instance types

General purpose - Good balance

Compute optimized - Great for compute-intensive tasks that require high performance

- batch processing workloads

- media transcoding

- hight performance servers

- scientific modeling & machine learning

Memory optimized - Fast performance for workloads that process large data sets in memory

- high performance, relational/non-relational databases

- distributed web scale cache stores

- in-memory databases optimized for BI

Accelerated computing

Storage optimized - Great for storage-intensive tasks that require high,sequential read and write access to large data sets on local storage

- high frequency online transaction processing systems

- relational & nosql databases

- cache for in-memory databases

- data warehosing applications

- distributed file systems

Instance features

Measuring instance performance

naming convention: `m5.2xlarge`

m: instance class

5: generation

2xlarge: size within the instance class

#### Security groups

Fundamental of network secuirty in AWS

Control how traffic is allowed into/out of EC2 instances

Security groups only contain allow rules

Security groups rules can reference by IP or by security group

Regulates:

- Access to ports

- Authorised IP ranges - ipv4 and ipv6

- Control of inbound/outbound network

Security groups are locked down to region, change region requires creating new security group

#### Security groups by reference

If instance A has security group authorizing security group A in inbound rule, then another instance B has security group A attached can reach instance A, while another instance C with security group B attached will fail to reach instance A.

#### Classic ports to know

22 = SSH (secuire shell) - log into a Linux instance

21 = FTP (file transfer protocol) - upload files into a file share

22 = SFTP (secure file transfer protocol) - upload files using SSH

80 = HTTP - access unsecured websites

443 = HTTPS - access secured websites

3389 = RDP (remote desktop protocol) log into a windows instance

#### SSH summary

Mac, Linux, Windows >= 10 can use SSH

Any Windows can use Putty

Any OS can use EC2 instance connect

#### EC2 instances purchasing options

- On-demand instances - short workload, predictable pricing, pay by second

- Reserved (1 & 3 years)
  
  - reserved instances - long workloads
  
  - convertible reserved instances - long workloads with flexible instances

- Saving plans (1 & 3 years) - commitment to an amount of usage, long workload

- Spot instances - short workloads cheap, can lose instances (less reliable)

- Dedicated hosts - book an entire physical server, control instance placement

- Dedicated Instances - no other customers will share your hardware

- Capacity reservations - reserve capacity in a specific AZ for any duration


