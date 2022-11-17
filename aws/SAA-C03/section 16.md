#### Aws cloudfront

content delivery network (cdn)

improves read performance, content is cached at the edge

216 point of presence globally (edge locations)

ddos protection, integration with shield, aws web application firewall

expose external https and talk to internal https backends

#### Cloudfront origins

s3 bucket

- for distributing files and caching them at the edge

- enhanced security with cloudfront origin access identity (oai)

- cloudfront can be used as an ingress (to upload files to s3)

custom origin (http)

- application load balancer

- ec2 instance

- s3 website (must first enable the bucket as a static s3 website)

- any http backend you want

#### Cloudfront - alb or ec2 as an origin

ec2

ec2 instances must be public

security group must allow ip of edge location of cloudfront to access

alb

ec2 instance  can be private

ec2 instances security group must allow security group of load balancer

application load balancer must be public

load balancer security group must allow ip of edge location of cloudfront to access

#### Cloudfront geo restriction

you can restrict who can access your distribution

- whitelist: allow list of countries to access your content

- blacklist: prevent list of countries to access your content

the country is determined using a 3rd party geo-ip database

use case: copyright laws to control access to content

#### Cloudfront vs s3 cross region replication

cloudfront

- global edge network

- files are cached for a ttl (maybe a day)

- great for static content that must be available everywhere

s3 cross region replication

- must be setup for each region you want replication to happen

- files are updated in near real-time

- read only

- great for dynamic content that needs to be available at low-latency in few regions

#### Cloudfront - pricing

cloudfront edge locations are all around the world

the cost of data out per edge location varies

#### Cloudfront - price classes

you can reduce the number of edge locations for cost reduction

three price classes:

- price class all: all regions - best performance

- price class 200: most regions, but exclude the most expensive regions

- price class 100: only the least expensive regions

#### Cloudfront - cache invalidations

in case you update the backend origin, cloudfront doesnt know about it and will only get refreshed content after the ttl has expired

however, you can force an entire or partial cache refresh by performing a cloudfront invalidation

you can invalidate all files (*) or a special path (/images/*)

#### Global users for our applications

you have deployed an application and have global users who want to access it directly

they go over the public internet, which can add a lot of latency due to many hops

we wish to go as fast as possible through aws network to minimize latency

#### Unicast ip vs anycast ip

unicase ip: one server holds one ip address

anycast ip: all servers hold the same ip address and the client is routed to the nearest one

#### AWS global accelerator

leverage the aws internal network to route to your application

2 anycast ip are created for your application

the anycast ip send traffic directly to edge locations

the edge locations send the traffic to your application

works with elastic ip, ec2 instances, alb, nlb, public or private

consistent performance

- intelligent routing to lowest latency and fast regional failover

- no issue with client cache (because ip doesnt change)

- internal aws network

health checks

- global accelerator performs a health cehck of your applicaionts

- helps make your application global (failover less than 1minute for unhealthy)

- great for disaster recovery (thanks to the health checks)

security

- only 2 external ip need to be whitelisted

- ddos protection thanks to aws shield

#### AWS global accelerator vs cloudfront

they both use the aws global network and its edge locations around the world

both services integrate with aws shield for ddos protection

cloudfront

- improve performance for both chaceable content (such as video and image)

- dynamic content (such as api accleeration and dynamic site delivery)

- content is served at the edge

global accelerator

- improves performance for a wide range of applications over tcp or udp

- proxying packets at the edge to applications running in one or more aws regions

- good fit for non-http use cases, such as gaming (udp), iot (mqtt), or voice over ip

- good for http use cases that require static ip addresses

- good for http use cases that required deterministic, fast regional failover


