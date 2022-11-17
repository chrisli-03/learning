#### What id DNS

Translates human friendly hostnames into machine IP address

#### DNS terminologies

Domain registrar: Amazon Route 53, GoDaddy, ...

DNS records: A, AAAA, CNAME, NS, ...

Zone file: contains DNS records

Name server: resolves DNS queries

Top level domain (TLD): .com, .us, .in, ...

Second level domain (SLD): amazon.com, google.com

#### Amazon route 53

Highly available, scalable, fully managed and Authoritative DNS

- Authoritative: the customer (you) can update the DNS records

Route 53 is also a Domain Registrar

Ability to check the health of your resources

The only AWS service which provides 100% availability SLA

#### Route 53 - records

How you want to route traffic for a domain

Each record contains 

- Domain/subdomain name - eg. example.com

- Record Type - eg. A or AAAA

- Value - eg. 12.34.56.78

- Routing Policy - how route 53 responds to queries

- TTL - amount of time the record cached at DNS resolvers

Route 53 supports the following DNS record types

- (must know) A/AAAA/CNAME/NS

- (advanced) CAA/DS/MX/NAPTR/PPTR/SOA/TXT/SPF/SRV

#### Route 53 - record types

A - maps a hostname to ipv4

AAAA - maps a hostname to ipv6

CNAME - maps a hostname to another hostname

- Cant create a CNAME record for the top node of a DNS namespace

- eg. cant create for example.com but can for www.example.com

NS - name server for the Hosted Zone

- control how traffic is routed for a domain

Used for subdomains

#### Route 53 - hosted zones

A container for records that define how to route traffic to a domain and its subdomains

Public Hosted Zones - contains records that specify how to route traffic on the internet

Private Hosted Zones - contains records that specify how you route traffic within one or more VPCs

$0.50/month per hosted zone

#### Route 53 - public vs private hosted zones

public hosted zone allow access from outside where private hosted zone only allows from inside the VPC

#### Route 53 - records TTL

Tell client to use the cache before TTL expire instead of making a new request

TTL is mandatory except for Alias records

#### CNAME vs Alias

AWS resources expose an AWS hostname

- xxx.elb.amazonaws.com and you want myapp.mydomain.com

CNAME:

- points a hostname to any other hostname (app.mydomain.com => xxx.anything.com)

- only for non root domain

Alias:

- points a host name to an AWS resource (app.mydomain.com => xxx.amazonaws.com)

- for both root and non root domain

- free of charge

#### Alias records

Maps a hostname to an AWS resource

An extension to DNS functionality

Automatically recognizes changes in the resource IP address

Unlike CNAME, it can be used for the top node of a DNS namespace

Alias record is always of type A/AAAA for AWS resources

You cant set the TTL

#### Alias records target

Elastic load balancers

CloudFront distributions

API gateway

Elastic beanstalk environments

S3 websites

VPC interface endpoints

Global accelerator accelerator

Route 53 record in the same hosted zone

#### Route 53 - routing policies

Define how Route 53 responds to DNS queries

Tells the client how to make request instead of making the actual request

Routing policies

- Simple

- Wieghted

- Failover

- Latency based

- Geolocation

- Multi-value answer

- Geoproximity

#### Routing policy - simple

Typically route traffic to a single resource

Can specify multiple values in the same record

If multiple values are returned, a random one is chosen by the client

When Alias enabled, specify only one AWS resource

Cant be associated with Health Check

#### Routing policy - weighted

Control the % of requests that go to each specific resource

Assign each record a relative weight

traffic (%) = weight for specific record/sum of weight of all records

DNS records must have the same name and type

Can be associtated with Health Checks

Use cases: load balancing between regions, testing new application versions

Assign weight 0 to stop sending traffic to resource

if all records are weight 0 then they are returned equally

#### Routing policy - latency-based

Redirect to the resource that has the least latency close to us

Super helpful when latency for users is a priority

Latency is based on traffic between users and AWS regions

Germany users may be directed to the US (if lower latency)

Can be associated with Health Checks

#### Route 53 - health checks

HTTP health checks are only for public resources

Health check => automated DNS failover:

1. Health checks that monitor an endpoint

2. Health checks that monitor other health checks

3. Health checks that monitor CloudWatch Alarms (full control)

Health checks are integrated with CW metrics

#### Health checks - monitor an endpoint

About 15 global health checkers will check the endpoint health

- Healthy/Unhealthy threshold - 3 (default)

- Interval - 30 sec

- Supported protocol: HTTP, HTTPS, TCP

- If > 18% of health checkers report the endpoint is healthy, Route 53 considers it Healthy, otherwise unhealthy

- Ability to choose which locations you want Route 53 to use

#### Route 53 - calculated health checks

Combine the results of multiple health checks into a single health check

You can use OR, AND, NOT

Can monitor up to 256 child health checks

Specify how many of the health checks need to pass to make the parent pass

Usage: perform maintenance to your website without causing all health checks to fail

#### Health checks - private hosted zones

Route 53 health checkers are outside of VPC

They cannot access private endpoints

You can create a CloudWatch Metric and associate a CloudWatch Alarm then create a Health Check that checks the alarm itself

#### Routing policies - failover

Use secondary EC2 instance if health check for primary EC2 instance fails

#### Routing policies - geolocation

Based on user location

Specify location by Continent, Country, or by US State

Should create a Default record

Use cases: website localization, restrict content distribution, load balancing, ...

Can be associated with health checks

#### Routing policies - geoproximity

Route traffic to your resources based on the geographic location of users and resources

Ability to shift more traffic to resources based on the defined bias

To change the size of geographic region, specify bias values

Resources can be

- AWS resources (specify AWS region)

- Non-AWS resources (specify Latitude and Longitude)

You must use Route 53 Traffic Flow (advanced) to use this feature

#### Routing policies - multi-value

Use when routing traffic to multiple resources

Route 53 return multiple values/resources

Can be associtaed with Health checks

Up to 8 healthy records are returned for each Multi-value query

Multi-value is not a substitute for having an ELB

#### Domain registar vs DNS service

You buy or register your domain name with a Domain Registrar typically by paying annual charges

The domain registrar usually provides you with a DNS service to manage your DNS records

But you can use another DNS service to manage your DNS records

1. Create a hosted zone in route 53

2. Update NS records on 3rd party website to use Route 53 Name Server


