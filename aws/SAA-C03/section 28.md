#### understanding cidr - ipv4

classless interdomain routing - a method for allocating ip addresses

used in security groups rules and aws networking in general

they help to define an ip address range

- ww.xx.yy.zz/32 => one ip

- 0.0.0.0./0 => all ip

- 192.168.0.0/26 => 192.168.0.0 - 192.168.0.63 (64 ip addresses)

a cidr consists of two components

base ip

- represents an ip contained in the range (xx.xx.xx.xx)

- example: 10.0.0.0, 192.168.0.0, ...

subnet mask

- defines how many bits can change in the ip

- example: /0, /24, /32

- can take two forms:

#### understanding cidr - subnet mjask

the subnet mask basically allows part of the undrelying ip to get additional next values from the base ip

192.168.0.0/32 => allows for 1 ip (2^0) -> 192.168.0.0

192.168.0.0/31 => allows for 2 ip (2^1) -> 192.168.0.0->192.168.0.1

...

192.168.0.0/16 => allows for 65536 ip (2^16) -> 192.168.0.0->192.168.255.255

...

192.168.0.0/0 => allows all ips

quick memo

octets

1st.2nd.3rd.4th

/32 - no octet can change

/24 - last octet can change

/16 - last 2 octets can change

/8 - last 3 octets can change

/0 - all octets can change

#### public vs private ip (ipv4)

the internet assigned numbers authority (iana) established certain blocks of ipv4 addresses for the use of private (lan) and public (internet) addresses

private ip can only allow certain values:

- 10.0.0.0 - 10.255.255.255 (10.0.0.0/8)

- 172.16.0.0 - 172.31.255.255 (172.16.0.0/12) aws default vpc

- 192.168.0.0 - 192.168.255.255 (192.168.0.0/16)

all the rest of the ip addresses on the internet are public

#### default vpc walkthrough

all new aws accounts have a default vpc

new ec2 instances are launched into the default vpc if no subnet is specified

default vpc has internet connectivity and all ec2 instances inside it have public ipv4 addresses

we also get a public and a private ipv4 dns names

#### vpc in aws - ipv4

vpc = virtual private cloud

you can have multiple vpcs in an aws region (max 5 per region - soft limit)

max cidr per vpc is 5 for each cider:

- min size is /28

- max size is /16

because vpc is private, only the private ipv4 ranges are allowed

your vpc cidr should not overlap with your other networks

#### vpc - subnet (ipv4)

aws reserves 5 ip addresses (first 4 & last 1) in each subnet

these 5 ip addresses are not available for use and cant be assigned to an ec2 instance

example: if cidr block 10.0.0.0/24 then reserved ip addresses are

- 10.0.0.0 - network address

- 10.0.0.1 - reserved by aws for vpc router

- 10.0.0.2 - reserved by aws for mapping to amazon provided dns

- 10.0.0.3 - reserved by aws for future use

- 10.0.0.225 - network broadcast address. aws does not support broadcast in a vpc, therefore the address is reserved

exam tip, if you need 29 ip addresses for ec2 instance:

- you cant choose a subnet of size /27 (32 ip addresses, 32 - 5 = 27 < 29)

- need to choose a subnet of size /26

#### internet gateway (igw)

allows resources (eg ec2 instances) in a vpc connect to the internet

it scales horizontally and is highly available and redundant

must be created separately from a vpc

one vpc can only be attached to one igw and vise versa

internet gateways on their own do not allow internet access, route tables must also be edited

#### bastion host

we can use bastion host to ssh into our private ec2 instances

the bastion is in the public subnet which is then connected to all other private subnets

bastion host security group must allow inbound from the internet on port 22 from restricted cidr, for example the public cidr of your corporation

security group of the ec2 instances must allow the security group of the bastion host, or the private ip of the bastion host

#### nat instance (outdated, but still at the exam)

nat = network address translation

allows ec2 instances in private subnets to connect to the internet

must be launched in a public subnet

must disable ec2 setting: source/destination check

must have elastic ip attached to it

route tables must be configured to route traffic from private subnets to the nat instance

#### nat instance - comments

pre-configured amazon linux ami is available

- reached the end of standard support on dec 31 2020

not highly available/resilient setup out of the box

- you need to create an asg in multi-az + resilient user-data script

internet traffic bandwidth depends on ec2 instance type

you must manage security groups & rules:

- inbound
  
  - allow http/https trraffic coming from private subnets
  
  - allow ssh from your home network (access is provided through internet gateway)

- outbound
  
  - allow http/https traffic to the internet

#### nat gateway

aws-managed nat, higher bandwidth, high availability, no administration

pay per hour for usage and bandwidth

natgw is created in a specific availability zone, uses an elastic ip

cant be used by ec2 instance in the same subnet (only from other subnets)

requires an igw (private subnet => natgw => igw)

5gbps of bandwidth with automatic scaling up to 45gbps

no security groups to manage/required

#### nat gateway with high availability

nat gateway is resilient within a single availability zone

must create multiple nat gateways in multiple azs for fault-tolerance

there is no cross-az failover needed because if an az goes down it doesnt need nat

#### security groups & nacl

nacl is stateless

meaning same request goes out/in needs to be checked again returning

#### network access control list (nacl)

nacl are like a firewall which control traffic from and to subnets

one nacl per subnet, new subnets are assigned the default nacl

you define nacl rules:

- rules have a number (1-32766), higher precedence with a lower number

- first rule match will drive the decision

- example: if you define #100 allow 10.0.0.10/32 and #200 deny 10.0.0.10/32, the ip address will be allowed because 100 has a higher precedence over 200

- the last rule is an asterisk (*) and denies a request in case of no rule match

- aws recommends adding rules by increment of 100

newly created nacl will deny everything

nacl are a great way of blocking a specific ip address at the subnet level

#### default nacl

accepts everything inbound/outbound with the subnets its associated with

do not modify the default nacl, instead create custom nacl

#### ephemeral ports

for any two endpoints to establish a connection, they must use ports

clients connect to a defined port, and expect a response on an ephemeral port

different operating system use different port ranges, example:

- iana & ms windows 10 -> 49152 - 65535

- many linux kernels -> 32768 - 60999

#### nacl with ephemeral ports

if a web subnet makes request to db subnet, the web subnet nacl needs to allow outbound tcp on port 3306 to db subnet cidr, and db subnet needs to allow inbound tcp on port 3306 from web subnet cidr

and db subnet nacl need to allow outbound tcp on port 1024-65535 to web subnet cidr and web subnet nacl need to allow inbound tcp on port 1024-65535 from db subnet cidr because web subnet client has an ephemeral port

#### vpc peering

privately connect two vpcs using aws network

make them behave as if they were in the same network

must not have overlapping cidr

vpc peering connection is not transitive (must be established for each vpc that need to communicate with one another)

a-b connect and b-c connect doesnt mean a-c connect

you must update route tables in each vpc subnets to ensure ec2 instances can communicate with each other

#### vpc peering - good to know

you can create vpc peering connection between vpc in different aws accounts/regions

you can reference a security group in a peered vpc (works cross accounts - same region)

#### vpc endpoints (aws privatelink)

every aws service is publicly exposed

vpc endpoints allows you to connect to aws services using a private network instead of using the public internet

they are redundant and scale horizontally

they remove the need of igw, natgw, to access aws services

incase of issues

- check dns setting resolution in your vpc

- check route tables

#### types of endpoints

interface endpoints (powered by privatelink)

- provisions an eni (private ip address) as an entry point (must attach a security group)

- supports most aws services

- $ per hour + per gb of data processed

gateway endpoints

- priovisions a gateway and must be used as a target in a route table (does not use security groups)

- supports both s3 and dynamodb

- free

#### gateway or interface endpoint for s3?

gateway is most likely going to be preferred all the time at the exam

cost free for gateway

interface endpoint is preferred access is required from on-premises (site to site vpn or direct connect), a different vpc or a different region

#### vpc flow logs

capture information about ip traffic going into your interfaces

- vpc flow logs

- subnet flow logs

- elastic network interface (eni) flow logs

helps to monitor & trroubleshoot connectivity issues

flow logs data can go to s3/cloudwatch logs

captures network information from aws managed interfaces too: elb, rds, elasticache, redshift, workspaces, natgw, transit gateway ...

#### vpc flow logs syntax

srcaddr & dstaddr - help identify problematic ip

srcport & dstport - help identify problematic port

action - success or failure of the request due to security group / nacl

can be used for analytics on usage patterns or malicious behaviour

query vpc flow logs using athena on s3 or cloudwatch logs insights

#### vpc flow logs - troubleshoot sg & nacl issues

look at the "action" field

incoming request

- inbound reject => nacl or sg

- inbound accept, outbound reject => nacl

outgoing request

- outbound reject => nacl or sg

- outbound accept, inbound reject => nacl

#### vpc flow logs - architectures

vpc flow logs -> cloudwatch logs -> cloudwatch contributor insights -> top 10 ip addresses

vpc flow logs -> cloudwatch logs -> cw alarm -> amazon sns

vpc flow logs -> s3 bucket -> amazon athena -> amazon quicksight

#### aws site-to-site vpn

virtual private gateway (vgw)

- vpn concentrator on the aws side of the vpn connection

- vgw is created and attached to the vpc from which you want to create the site-to-site vpn connection

- possibility to customize the asn (autonomous system number)

customer gateway (cgw)

- software application or physical device on customer side of the vpn connection

#### site-to-site vpn connections

customer gateway device (on-premises)

- what ip address to use?
  
  - public internet routable ip address for your customer gateway device
  
  - if its behind a nat device thats enabled for nat traversal (nat-t), use the public ip address of the nat device

important step: enable route propagation for the virtual private gateway in the route table that is associated with your subnets

if you need to ping your ec2 instances from on-premises, make sure you add the icmp protocol on the inbound of your security groups

#### aws vpn cloudhub

provide secure communication between multiple sites, if you have multiple vpn connections

low-cost hub-and-spoke model for primary or secondary network connectivity between different locations (vpn only)

its a vpn connection so it goes over the public internet

to set it up, connect multiple vpn connections on the same vgw, setup dynamic routing and configure route tables

#### direct connect (dx)

provides a dedicated private connection from a remote network to your pc

dedicated connection must be setup between your dc and aws direct connect locations

you need to setup a virtual private gateway on your vpc

access public resources (s3) and private (ec2) on same connection

use cases:

- increase bandwidth throughput - working with large data sets - lower cost

- more consistent network experience - applications using real-time data feeds

- hybrid environments (on prem + cloud)

#### direct connect gateway

if you want to setup a direct connect to one or more vpc in many different regions (same account), you must use a direct connect gateway

#### direct connect - connection types

dedicated connections: 1gbps, 10gbps, and 100gbps capacity

- physical ethernet port dedicated to a customer

- request made to aws first, then completed by aws direct connect partners

hosted connections: 50mbps, 500mbps, to 10gbps

- connection requests are made via aws direct connect partners

- capacity can be added or removed on demand

- 1, 2, 5, 10gbps are available at select aws direct connect partners

lead times are often longer than 1 month to establish a new connection

#### direct connect - encrytion

data in transit is not encrypted but is private

aws direct connect + vpn provides an ipsec-encrypted private connection

good for an extra level of security, but slightly more complex to put in place

#### direct connect - resiliency

high resiliency for critical workloads

- one connection at multiple locations

maximum resiliency for critical workloads

- maximum resilience is achieved by separate connections terminating on separate devices in more than one location

#### site-to-site vpn connection as a backup

in case direct connect failes, you can setup a backup direct connect connection (expensive), or a site-to-site vpn connection

#### transit gateway

for having transitive peering between thousands of vpc and on-premises, hub-and-spoke (star) connection

regional resource, can work cross-region

share cross-account using resource access manager (ram)

you can peer transit gateways across regions

route tables: limit which vpc can talk with other vpc

works with direct connect gateway, vpn connections

supports ip multicast (not supported by any other aws service)

#### transit gateway: site-to-site vpn ecmp

ecmp = equal cost multi path routing

routing strategy to allow to forward a packet over multiple best path

use case: create multiple site-to-site vpn connections to increase the bandwidth of your connection to aws

#### vpc - traffic mirroring

allows you to capture and inspect network traffic in your vpc

route the traffic to security appliances that you manage

capture the traffic

- from (source) - eni

- to (targets) - an eni or network load balancer

capture all packets or capture the packets of your interest (optionally, truncate packets)

#### what is ipv6

ipv4 designed to provide 4.3 billion addresses (they'll be exhausted soon)

ipv6 is the successor of ipv4

ipv6 is designed to provide 3.4*10^38 unique ip addresses

every ipv6 address is public and internet-routable (no private range)

format x.x.x.x.x.x.x.x (x is hexadecimal, range can be from 0000 to ffff)

#### ipv6 in vpc

ipv4 cannot be disabled for your vpc and subnets

you can enable ipv6 (they are public ip addresses) to operate in dual-stack mode

your ec2 instances will get at least a private internal ipv4 and a public ipv6

they can communicate using either ipv4 or ipv6 top the internet through an internet gateway

#### ipv6 troubleshooting

ipv4 cannot be disabled for your vpc and subnets

so if you cannot launch an ec2 instance in your subnet

- its not because it cannot acquire an ipv6 (the space is very large)

- its because there are no available ipv4 in your subnet

solution: create a new ipv4 cidr in your subnet

#### egress-only internet gateway

used for ipv6 only

similar to a nat gateway but for ipv6

allows instances in your vpc outbound connections over ipv6 while preventing the internet to initiate an ipv6 connection to your instances

you must update the route tables

#### vpc section summary (1/3)

cidr - ip range

vpc - virtual private cloud => we define a list of ipv4 & ipv6 cidr

subnets - tied to an az, we define a cidr

internet gateway - at thye vpc level, provide ipv4 & ipv6 internet access

route table - must be edited to add routes from subnets to the igw, vpc peering connections, vpc endpoints, ...

bastion host - public ec2 instance to ssh into, that has ssh connectivity to ec2 instances in private subnets

nat instances - give s internet access to ec2 instances in private subnets. old, must be setup in a public subnet, disable source/destination check flag

nat gateway - managed by aws, provides scalable internet access to private ec2 instances, ipv4 only

private dns + route 53 - enable dns resolution + dns hostnames (vpc)

#### vpc section summary (2/3)

nacl - stateless, subnet rules for inbound and outbound, dont forget ephemeral ports

security groups - stateful, operate at the ec2 instance level

reachability analyzer - perform network connectivity testing between aws resources

vpc peering - connect two vpc with non overlapping cidr, non-transitive

vpc endpoints - provide private access to aws services (s3, dynamodb, cloudformation, ssm) within a vpc

vpc flow logs - can be setup at the vpc/subnet/eni level, for accept and reject traffic, helps identifying attacks, analyze using thena or cloudwatch logs insights

site-to-site vpn - setup a customer gateway on dc, a virtual private gateway on vpc site-to-site vpn over public internet

aws vpn cloudhub - hub and spoke vpn model to connect your sites

#### vpc section summary (3/3)

dirrect connect - setup a virtual private gateway on vpc, and establish a direct private connection to an aws direct connect location

direct connect gateway - setup a direct connect to many vpc in different aws regions

aws privatelink / vpc endpoint services:

- connect services privately from your service vpc to customers vpc

- doesnt need vpc peering, public internet, nat gateway, route tables

- must be used with network load balancer & eni

classiclink - connect 2c2-classic ec2 isntances privately to your vpc

transit gateway - transitive peering connections for vpc, vpn & dx

traffic mirroring - copy network traffic from enis for further analysis

egress-only internet gateway - like a nat gateway, but for ipv6

#### networking cost in aws per gb - simplified

traffic into az is free

traffic between instances in same az using private ip is free

traffic between instances in different az using public ip/elastic ip is 0.02, or 0.01 if using private ip

traffic between instances in different regions is 0.02

use private ip instead of public ip for good savings and better network performance

use same az for maximum savings (at the cost of high availability)

#### minimizing egress traffic network cost

egress traffic: outbound traffic (from aws to outside)

ingress traffic: inbound traffic (from outside to aws) (typically free)

try to keep as much internet traffic within aws to minimize cost

direct connect location that are colocated in the same aws region result in lower cost for egress network

#### s3 data transfer pricing - analysis for usa

s3 ingress: free

s3 to internet: 0.09 per gb

s3 transfer acceleration

- faster transfer times

- additional cost on top of data transfer pricing +0.04 to 0.08 per gb

s3 to cloudfront: free

cloudfront to internet: 0.085 per gb

- caching capability (lower latency)

- reduce costs associated with s3 requests pricing (7x cheaper with cloudfront)

s3 cross region replication: 0.02 per gb

#### pricing: nat gateway vs gateway vpc endpoint

nat gateway

0.045 nat gateway/hour

0.045 nat gateway data processed/gb

0.09 data transfer out to s3 (cross-region)

0.00 data transfer out to s3 (same-region)

vpc gateway

0.01 data transfer in/out (same-region)

#### network protection on aws

to protect network on aws, we have seen

- network access control lists (nacl)

- amazon vpc security groups

- aws waf (protect against malicious requests)

- aws shield & aws shield advanced

- aws firewall manager (to manage them across accounts)

but what if we want to protect in a sophisticated way our entire vpc?

#### aws network firewall

protect your entire amazon vpc

from layer 3 to layer 7 protection

any direction, you can inspect

- vpc to vpc traffic

- outbound to internet

- inbound from internet

- to/from direct connect & site-to-site vpn

internally the aws network firewall uses the aws gateway load balancer

rules can be centrally managed cross acount by aws firewall manager to apply to many vpcs

#### network firewall - fine grained controls

supports 1000s of rules

- ip & port - example: 10000s of ip filtering

- protocol - example: block the smb protocol for outbound communications

- stateful domain list rule groups: only allow outbound traffic to *.mycorp.com or third-party software repo

- general pattern matching using regex

traffic filtering: allow, drop, or alert for the traffic that matches the rules

active flow inspection to protect against network threats with intrusion  prevention capabilities (like gateway load balancer, but all managed by aws)

send logs of rule matches to amazon s3, cloudwatch logs, kinesis data firehose


