#### 

#### Why encryption? encryption in flight (ssl)

data is encrypted before sending and decrypted after receiving

ssl certificates help with encryption (https)

encryption in flight ensures no mitm (man in the middle attact) can happen

#### server side encryption at rest

data is encrypted after being received by the server

data is decrypted before being sent

it is stored in an encrypted form thanks to a key (usually a data key)

the encryption / decryption keys must be managed somewhere and the server must have access to it

#### client side encryption

data is encrypted by the client and nevery decrypted by the server

data will be decrypted by a receiving client

the server should not be able to decrypt the data

could leverage envelope encryption

#### aws kms (key management service)

anytime you hear encryption for an aws service, its most likely kms

aws manages encryption keys for us

fully integrated with iam for authorization

easy way to control access to your data

able to audit kms key usage using cloudtrail

seamlessly integrate into most aws services (ebs, s3, rds, ssm...)

never ever store your secrets in plaintext, especially in your code

- kms key encryption also available through api calls (sdk, cli)

- encrypted secrets can be stored in the code/evironment variables

#### kms keys types

kms keys is the new name of kms customer master key

symmetric (aes-256 keys)

- single encryption key that is used to encrypt and decrypt

- aws services that are integrated with kms use symmetric cmks

- you never get access to the kms key unecrypted (must call kms api to use)

asymmetric (rsa & ecc key pairs)

- public (encrypt) and private key (decrypt) pair

- used for encrypt/decrypt, or sign/verify operations

- the public key is downloadable, but you cant access the private key unencrypted

- use case: encryption outside of aws by users who cant call the kms api

#### aws kms (key management service)

three types of kms keys:

- aws managed key: free (aws/service-name, example: aws/rrds or aws/ebs)

- customer managed keys (cmk) created in kms: $1/month

- customer managed imported (must be 256-bit symmetric key):$1/month
+ pay for api call to kms

automatic key rotation:

- aws-managed kms key: automatic every 1 year

- customer-managed kms key: (must be enabled) automatic every 1 year

- imported kms key: only manual rotation possible using alias

#### copying snapshots across region

1. take snapshot of ebs volume encrypted with kms

2. copy snapshot reencrypted with another kms key

3. restore ebs volume

#### kms key policies

control access to kms keys, 'similar' to s3 bucket policies

difference: you cannot control access without them

default kms key policy:

- created if ytou dont provide a specific kms key policy

- completed access to the key to the root user = entire aws account

custom kms key policy:

- define users, roles that can access the kms key

- define who can administer the key

- useful for cross-account access of you kms key

#### copying snapshots across accounts

1. create snapshot, encrypted with your own kms key (customer managed key)

2. attach a kms key policy to authorize cross-account access

3. share the encrypted snapsho

4. (in target) create a copy of the snapshot, encrypt it with a cmk in your account

5. create a volume from snapshot

#### kms multi-region keys

primary key in one region, that key is replicated in other regions

identical kms keys in different aws regions that can be used interchangeably

multi-region keys have the same key id, key material, automatic rotation, etc.

encrypt in one region and decrypt in other regions

no need to reencrypt or making cross region api calls

kms multi-region are not global (primary + replicas)

each multi-region key is managed independently

use case: global client side encryption, encryption on global dynamodb, global aurora

#### dynamodb global tables and kms multi region keys client side encryption

we can encrypt specific attributes client side in our dynamodb table using the amazon dynamodb encryption client

combined with global tables the client side encrypted data is replicated to other regions

if we use a multi region key, replicated in the same region as the dynamodb global table, then clients in thse regions can use low latency api calls to kms in their region to decrypt the data client side

using client side encryption we can protect specific fields and guarantee only decryption if the client has access to an api call

#### global aurora and kms multi region keys client side encrpytion

we can ecrypt specific attributes client side in our aurora table using the aws encryption sdk

combined with aurora global tables the client side encrypted data is replicated to other regions

if we use a multiregion key, replicated in the same region as the global aurora db, then clients in these regions can use low latency api calls to kms in their region to decrypt the data client side

using client side encryption we can protect specific fields and guarantee only decryption if the client has access to an api key, we can protect specific fields even from database admins

#### s3 replication encryption considerations

unencrypted objects and objects encrypted with sse-s3 are replicated by default

objects encrypted with sse-c (customer provided key) are never replicated

for objects encrypted with sse-kms, you need to enable the option

- specify which kms key to encrypt the objects within the target bucket

- adapt the kms key policy for the target key

- an iam role with kms:decrypt for the source kms key and kms:encrypt for the target kms key

- you might get kms throttling errors, in which case you can ask for a service quotas increase

you can use multi-region aws kms keys, but they are currently treated as independent keys by amazon s3 (the object will still be decrypted and then encrypted)

#### ami sharing process encrypted via kms

ami in source account is encrypted with kms key from source account

must modify the image attribute to add a luanch permission which corresponds to the specified target aws account

must share the kms keys used to encrypted the snapshot the ami references with the target account / iam role

the iam role/user in the target account must have the permissions to describekey, reencrypted, creategrant, decrypt

when launching an ec2 instance from the ami, optionally the target account can specify a new kms key in tis own account to reencrypt the volumes

#### ssm parameter store

secure storage for configuration and secrets

optional seamless encryption using kms

serverless, scalable, durable, easy sdk

version tracking of configurations/secrets

configuration management using path & iam

notifications with cloudwatch events

integration with cloudformation

#### ssm parameter store hierarchy

- my-department
  
  - my-app
    
    - dev
      
      - db-url
      
      - db-password
    
    - prod
      
      - db-url
      
      - db-password
  
  - other-app

- other-department

- /aws/reference/secretsmanager/secret_id_in_secrets_manager

- /aws/service/ami-amazon-linux-latest/amzn2-ami-hvm-x86_64-gp2

#### parameters policies (for advanced parameters)

allow to assign a ttl to a parameter (expiration date) to force updating or deleting sensitive data such as passwords

can assign multiple policies at a time

#### aws secrets manager

newer service, meant for storing secrets

capability to force rotation of secrets every x days

automate generation of secrets on rotation (uses lambda)

integration with amazon rds (mysql, postgresql, aurora)

mostly meant for red integration

#### aws secrets manager - multi-region secrets

replicate secrets across multiple aws regions

secrets manager keeps read replicas in sync with the primary secret

ability to promote a read replica secret to a standalone secret

use cases: multiple-region apps, disaster recovery strategies, multi-region db...

#### aws certificate manager (acm)

easily provision, manage, and deploy tls certificates

provide inflight encryption for websites (https)

supports both public and private tls certificates

free of charge for public tls certificates

automkatic tls certificate renewal

intergrations with (load tls certificates on)

- elastic load balancers

- cloudfront distributions

- apis on api gateway

cannot use acm with ec2 (cant be extracted)

#### acm - requesting public certificates

1. list domain names to be included in the certificate
   
   - fully qualified domain name (fqdn): corp.example.com
   
   - wildcard domain: *.example.com

2- select validation method: dns validation or email validation
   
   - dns validation is preferred for automation purposes
   
   - email validation will send emails to contact address in the whois database
   
   - dns validation will leverage a cname record to dns config (ex. route 53)

3- it will take a few hours to get verified

4- the public certificate will be enrolled for automatic renewal
   
   - acm automatically renews acm-generated certificates 60 days before expiry

#### acm - importing public certificates

option to generate the certificate outside of acm and then import it

no automatic renewal, must import a new certificate before expiry

acm sends daily expiration events starting 45 days prior to expiration

- the # of days can be configured

- events are appearing in eventbridge

aws config has a managed rule named acm-certificate-expiration-check to check for expiring certificates (configurable number of days)

#### api gateway - endpoint types

edge-optimized (default): for global clients

- requests are routed through the cloudfront edge locations (improves latency)

- the api gateway still lives in only one region

regional

- for clients within the same region

- could manually combine with cloudfront (more control over the caching strategies and the distribution)

private

- can only be accessed from your vpc using an interface vpc endpoint (eni)

- use a resource policy to define access

#### acm - integration with api gatway

create a custom domain name in api gateway

edge-optimized (default): for global clients

- requests are routed through the cloudfront edge locations

- the api gateway still lives in only one region

- the tls certificate must be in the same region as cloudfront

regional

- for clients within the same region

- the tls certificate must be imported on api gateway, in the same region as the api stage

- then setup cname or (better) a-alias record in route53

#### aws waf - web application firewall

protects your web applications from common web exploits (layer 7)

layer 7 is http (vs layer 4 is tcp/udp)

deploy on

- application load balancer

- api gateway

- cloudfront

- apisync graphql api

- cognito user poll

define web acl (web access control list) rules:

- ip set: up to 10000 ip addresses - use multiple rules for more ips

- http headers, http body, or uri strings protects from common attack - sql injection and cross-site script (xss)

- size constraints, geo-match (block countries)

- rate-based rules (to count occurrences of events) - for ddos protection

web acl are regional except for cloudfront

a rule group is a reusable set of rules that you can add to a web acl

#### waf - fixed ip while using waf with a load balancer

waf does not support the network load balancer (layer 4)

we can use global accelerator for fixed ip and waf on the alb

#### aws shield: protect from ddos attack

ddos: distributed denial of service - many requests at the same time

aws shield standard:

- free service that is activated for every aws customer

- provides protection from attacks such as syn/udp floods, reflection attacks and other layer 3/layer 4 attacks

aws shield advanced:

- optional ddos mitigation service ($3000 per month per organization)

- protect against more sophisticated attack on amazon ec2, elastic load balancer, amazon cloudfront, aws global accelerator, and route 53

- 24/7 access to aws ddos response team (drp)

- protect against higher fees during usage spikes due to ddos

- shield advanced automatic application layer ddos mitigation automatically creates evaluates and deploys aws waf rules to mitigate layer 7 attacks

#### aws firewall manager

manage rules in all accounts of an aws organization

security policy: common set of security rules

- waf rules (application load balancer, api gateways, cloudfront)

- aws shield advanced (alb, clb, nlb, elasitc ip, cloudfront)

- security groups for ec2, application load balancer and eni resources in vpc

- aws network firewall (vpc level)

- amazon route 53 resolver dns firewall

- policies are created at the region level

rules are pplied to new resources as they are created (good for compliance) accross all and future accounts in your organization

#### waf vs firewall manager vs shield

waf, shield and firewall manager are used together for comprehensive protection

define your web acl rules in waf

for granular protection of you resources, waf alone is the correct choice

if you want to use aws waf across accounts, accelerate waf configuration, automate the protection of new resources, use firewall manager with aws waf

shield advbanced adds additional features on top of aws waf, such as dedicated support from the shield response team (srt) and advanced reporting

if you are prone to frequent ddos attacks, consider purchasing shield advanced

#### aws best practices for ddos resiliency edge location mitigation (bp1, bp3)

bp1 - cloudfront

- web application delivery at the edge

- protect from ddos common attacks (syn floods, udp reflection,...)

bp1 - global accelerator

- access your application from the edge

- integration with shield for ddos protection

- helpful if your backend is not compatible with cloudfront

bp3 - route 53

- domain name resolution at the edge

- ddos protection mechanism

infrastructure layer defense (bp1, bp3, bp6)

- protect amazon ec2 against high traffic

- that includes using global accelerator, route 53, cloudfront, elastic load balancing

amazon ec2 with auto scaling (bp7)

- helps scale in case of sudden traffic surges including a flash crowd or a ddos attack

elastic load balancing (bp6)

- elastic load balancing scales with the traffic increases and will distributre the traffic to many ec2 instances

detect and filter malicious web requests (bp1, bp2)

- cloudfrront cache static content and serve it from edge locations, protecting your backend

- aws waf is used on top of cloudfront and application load balancer to filter and block requests based on request signatures

- waf rate based rules can automatically block the ips of bad actors

- use managed rules on waf to block attacks based on ip reputation or block anonymous lps

- cloudfront can block specific geographies

shield advanced (bp1, bp2, bp6)

- shield advancedautomatic application layer ddos mitigation automatically creates, evaluates and deploys aws waf rules to mitigate layer 7 attacks

#### aws best practices for ddos resiliency attack surface reduction

obfuscating aws resources (bp1, bp4, bp6)

- using cloudfront, api gateway, elastic load balancing to hide your backend resources (lambda functions, ec2 instances)

security groups and network acls (bp5)

- use security groups and nacls to filter traffic based on specific ip at the subnet or eni-level

- elastic ip are protected by aws shield advanced

protecting api endpoints (bp4)

- hide ec2, lambda, elsewhere

- edge-optimized mode, or cloudfront + regional mode (more control for ddos)

- waf + api gateway: burst limits headers filtering, use api keys

#### amazon guard duty

intelligent threat discovery to protect aws account

uses machine learning algorithms, anomaly detection, 3rd party data

one click to enable (30 days trial), no need to install software

input data includes:

- cloudtrail events logs - unusual api calls, unauthorized deployments
  
  - cloudtrail managed events - create vpc subnet, create trail, ...
  
  - cloudtrail s3 data events - get object, list objects, delete object, ...

- vpc flow logs - unusually internal traffic, unusually ip address

- dns logs - compromised ec2 instances sending encoded data within dns queries

- kubernetes audit logs - suspicious activities and potential eks cluster compromises

can setup cloudwatch event rules to be notified in case of findings

cloudwatch events rules can target aws lambda or sns

can protect against cryptocurrency attacks (has a dedicated "finding" for it)

#### amazon guardduty

vpc flow logs, cloudtrail logs, dns logs, eks audit logs all go to guardduty, then cloudwatch event, then sns/lambda

#### amazon inspector

automated security assessment

for ec2 instances

- leveraging the aws system manager agent

- analyze against unintended network accessibility

- analyze the running os against known vulnerabilities

for containers push to amazon ecr

- assessment of containers as they are pushed

reporting & integration with aws security hub

send findings to amazon event bridge

#### what does aws inspector evaluate

remember: only for ec2 instances and container infrastructure

continuous scanning of the infrastructure, only when needed

package vulnerabilities (ec2 & ecr) - data base of cve

network reachability (ec2)

a risk score is associated with all vulnerabilities for prioritization

#### amazon macie

a fully managed data security and data privacy service that uses machine learning and pattern matching to discover and protect your sensitive data in aws

macie helps identify and alert you to sensitive data, such as personally identifiable information


