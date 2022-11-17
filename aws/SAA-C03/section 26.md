#### AWS organizations

global service

allows to manage multiple aws accounts

the mainh account is the management account

other accounts are memeber accounts

member accounhts can only be part of one organization

consolidated billing across all accounts - single payment method

pricing benefits from aggregated usage

share reserve instances and savings plans discounts across accounts

api is available to automate aws account creation

#### Organization units (ou) - example

management account can have sales ou, retail ou, finance ou

management account can have prod ou, dev ou, test ou

management account can have project 1 ou, project 2 ou, project 3 ou

#### AWS organizations

advantages

- multi account vs one account multi vpc

- use tagging standards for billing purposes

- enable cloudtrail on all accounts, send logs to central s3 account

- send cloudwatch logs to central logging account

- establish cross account roles for admin purpose

security: service control policies (scp)

- iam policies applied to ou or accounts to restrict users and roles

- they do no apply to the management account (full admin power)

- must have an explicit allow (does not allow anything by default - like iam)

#### IAM conditions

aws:sourceip, restrict the client ip from which the api calls are being made

aws:requestregion, restrict the regions the api calls are made to

ec2:resourcetag, restrict based on tags

aws:multifactorauthpresent, to force mfa

#### IAM for s3

s3:listbucket permission applies to arc:aws:s3:::test => bucket level permission

s3:getobject, s3:putobject, s3:deleteobject applies to arn:aws:s3:::test/* => object level

#### Resource policies & aws:principalorgid

aws:principalorgid can be used in any resouce policies to restrict access to accounts that are member of an aws organization

#### IAM roles vs resource based policies

cross account:

- attaching a resource-based policy to a resource (example: s3 bucket policy)

- or using a role as a proxy

when you assume a role (user, application, or service), you give up your original permissions and take the permissions assigned to the role

when using a resource-based policy, the principal doesnt have to give up his permissions

example: user in account A needs to scan a dynamodb table in account a and dump it in an s3 bucket in account b

supported by: amazon s3 buckets, sns topics, sqs queues, etc.

#### Amazon eventbridge - security

when a rule runs, it needs permissions on the target

resource-based policy: lambda, sns, sqs, cloudwatch logs, api gateway...

iam role: kinesis stream, systems manager run command, ecs task...

#### IAM permission boundaries

iam permission boundaries are supported for users and roles (not groups)

advanced feature to use a managed policy to set the maximum permissions an iam entity can get

can be used in combinations of aws organizations scp

use cases: 

- delegate responsibilities to non administrators within their permission boundaries for example create new iam users

- allow developers to self-assign policies and manage their own permissions while making sure they cant escalate their previleges

- useful to restrict one specific user (instead of a whole account using organizations & scp)

#### Amazon cognito

give users an identity to interact with our web or mobile application

cognito user pools

- sign in functionality for app users

- integrate with api gateway & application load balancer

cognito identity pools (federated identity)

- provide aws credentials to users so they can access aws resources directly

- integrate with cognito user pools as an identity provider

cognito vs iam: "hundreds of users", 'mobile users', "authenticate with saml"

#### Cognito user pools (cup) - user features

create a serverless database of user for your web & mobile apps

simple login: username (or email) / password combination

password reset

email & phone number verification

multi-factor authentication (mfa)

federated identities: users from facebook, google, saml, ...

#### cognito user pools (cup) - integrations

cup integrates with api gateway and application load balancer

#### cognito identity pools (federated identities)

get identites for "users" so they obtain temporary aws credentials

users source can be cognito user pools, 3rd party logins, etc...

users can then access aws services directly or through api gateway

they iam policies applied to the credentials are defined in cognito

they can be customized based on the user_id for fine grained control

default iam roles for authenticated and guest users

#### AWS iam identity center (successor to aws single sign-on)

one login (single sign-on) for all your 

- aws accounts in aws organizations

- business cloud applications (eg. salesforce, box, microsoft 365, ...)

- saml2.0-enabled applications

- ec2 windows instances

identity providers

- built-in identity store in iam identity center

- 3rd part: active directory (ad), onelogin, okta, ....

browser interface login connects to aws iam identity center, which store/retrieve user identities to active directory or iam identity center, then sso to aws cloud, business cloud apps, custom saml2.0-enabled apps

#### AWS iam identity center fine-grained permissions and assignments

multi-account permissions

- manage access across aws accounts in your aws organization

- permission sets - a collection of one or more iam policies assigned to users and groups to define aws access

application assignments

- sso access to many saml 2.0 business applications (saleforece, box, microsoft 365, ...)

- provide required urls, certificates, and metadata

attribute-based access control (abac)

- fine-grained permissions based on users' attributes stored in iam identity center identity store

- example: cost center, title, locale

- use case: define permissions once, then modify aws access by changing the attributes

#### What is microsoft active directory (AD)?

found on any windows server with ad domain services

database of objects :user accounts, computers, printers, file shares, security groups

centralized securrity management, create account, assign permissions

objects are organized in trees

a group of trees is a forest

#### AWS directory services

aws managed microsoft ad

- create your own ad in aws, manage users locally, supports mfa

- establish "trust" connections with your on-premise ad

ad connector

- directory gateway (proxy) to redirect to on-premise ad, supports mfa

- users are managed on the on-premises ad

simple ad

- ad-compatible managed directory on aws

- cannot be joined with on-premise ad

#### IAM identity center - active directory setup

connect to an aws manmaged microsoft ad (directory service)

- integration is out of the box

connect to a self-managed directory

- create two-way trust relationship using aws managed microsoft ad

- create an ad connector

#### AWS control tower

easy way to setup and govern a secure and compliant multi-account aws environment based on best practices

aws control tower uses aws organizations to create accounts

benefits:

- automate the setup of your environement in a few clicks

- automate ongoing policy management using guardrails

- detect policy violations and remediate them

- monitor compliance through an interactive dashboard

#### AWS control tower - guardrails

provides ongoing governance for your control tower environment (aws accounts)

preventive guardrail - using scps (eg. restrict regions across all your accounts)

detective guardrail - using aws config (eg. identify untagged resources)

guardrail can trigger sns


