#### Instantiating applications quickly

EC2 instances

- Use a Golden AMI: install your applications, OS dependencies etc., beforehand and launch your EC2 instance from the Golden AMI

- Bootstrap using user data: for dynamic configuration, use user data scripts

- Hybrid: mix Golden AMI and User Data (Elastic Beanstalk)

RDS databases:

- Restore from a snapshot: the database will have schemas and data ready

EBS volumes:

- Restore from a snapshot: the disk will already be formatted and have data

#### Elastic beanstalk

A devleoper centric view of deploying an application on AWS

Uses all the component's we've seen before: EC2, ASG, ELB, RDS, ...

Managed service

- Automatically handles everything

- Just the application code is responsibility of the developer

We still have full control over the configuration

Free but pay for the used services

#### Elastic Beanstalk - components

Application: collection of Elastic beanstalk components (environments, versions, configurations, ...)

Application version: an iteration of your application code

Environment

- Collection of AWS resources running an application version

- Tiers: web server environment tier & work environment tier

- You can create multiple environments

#### Web server tier vs worker tier

In worker environment EC2 instances are not accessed publically instead they pull messages from a SQS Queue to process

Worker environment scale based on number of SQS messages


