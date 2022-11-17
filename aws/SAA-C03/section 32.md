#### section overview

well architected framework whitepaper

well architected tool

aws trusted advisor

reference architectures resources (for real world)

disaster recovery on aws whitepaper

#### well architected framework general guiding principles

stop guessing your capacity needs

test systems at production scale

automate to make architectural experimentation easier

allow for evolutionary architectures

- design based on changing requirements

drive architectures using data

improve through game days

- simulate applications for flash sale days

#### well architected framework 6 pillars

operational excellence

security

reliability

performance efficiency

cost optimization

sustainability

they are not something to balance, or trade-offs, they are a synergy

#### aws well architected tool

free tool to review your architectures against the 6 pillars well architected framework and adopt architectural best practices

how does it work?

- select your workload and answer questions

- review your answers against the 6 pillars

- obtain advice: get videos and documentations, generate a report, see the results in a dashboard

https://console.aws.amazon.com/wellarchitected

#### trusted advisor

no need to install anything - high level aws account assessment

analyze your aws accounts and provides recommendation

- cost optimization

- performance

- security

- fault tolerance

- service limits

cost checks and recommendations - all customers

can enable weekly email notification from the console

full trusted advisor - available for business & enterprise support plans

- ability to set cloudwatch alamrs when reaching limits

- programmatic access using aws support api

#### trusted advisor checks example

cost optimization:

- low utilization ec2 instances, idle load balancers, under-utilized ebs volumes ...

- reserved instasnces & savings plans optimizations

performance:

- high utilization ec2 instances, cloudfront cdn optimizations

- ec2 to ebs throughput optimizations, alias records recommendations

security:

- mfa enabled on root account, iam key rotation, exposed access keys

- s3 bucket permissions for public access, security groups with unrestricted ports

fault tolerance

- ebs snapshots age, availability zone balance

- asg multi-az, rds multi-az, elb configuration ...

service limits

#### more architecture examples

we have explored the most important architectural patterns

- classic: ec2, elb, rds, elasticache, etc...

- serverless: s3, lambda, dynamodb, cloudfront, api gateway, etc...

if you want to see more aws architectures:

https://aws.amazon.com/solutions/

https://aws.amazon.com/architectures/


