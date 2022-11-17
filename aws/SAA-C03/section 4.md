#### IAM: Users & Groups

IAM = Identity and Access Management, Global service

**Root** account created by default, shouldnt be used or shared

**Users** are people within your organization and can be grouped

**Groups** only contain users, not other groups

Users dont have to belong to a group, and user can belong to multiple groups

#### IAM: Permission

**User or Groups** can be assigned JSON documents called policies, this describes what users  or users in a group is allowed to do

These policies define the permissions of the users

In Aws you apply the **least privilege principle**: dont give more permissions than a user needs

#### How to create user

Why create user? IAM use root account by default, which is very dangerouse since root account has all permission.

In IAM dashboard, on left side click user -> create user.

First form setup password etc.

Second form add groups

Third form add tags, eg department:engineer

Finally click create

Download csv with credentials

#### Login to created user

On aws login page, choose IAM user instead of root

#### IAM policies structure

Consists of

- Verison: policy language version, always include "2012-10-17"

- Id: and identifier for the policy (optional)

- Statement: one or more individual statements (required)

Statements consists of

- Sid: and identifier for the statement (optional)

- Effect: whether the statement allows or denies access (Allow, Deny)

- Principal: account/user/role to which this policy applied to

- Action: list of actions this policy allows or denies

- Condition: conditions for when this policy is in effect (optional)

#### IAM - password policy

Aws has different password policies

- Set a minimum password length

- Require specific character types
  
  - including uppercase/lowercase letters
  
  - numbers
  
  - non-alphanumeric

- Allow users to change their own password

- Password expiration

- Prevent password re-use

#### Multi factor authentication - MFA

MFA = password you know + security device you own

Main benefit of MFA - even if password is stolen, account is not compromised

MFA device options in AWS

- virtual MFA device (google authenticator, Authy)

- Universal 2nd factor (U2F) security key (eg YubiKey)

- Hardware key fod MFA device

- Hardware key fob MFA device for AWS GovCloud

#### Options to access AWS

- AWS management console (protected by password + MFA)

- AWS command line interface (protected by access keys)

- AWS software developer kit (pprotected by access keys)

Access keys are generated through the AWS console

User manage their own access keys

Access keys are secret, do not share them

Access key ID ~= username

Secret access key ~= password

#### What is AWS CLI

A tool that enables you to interact with AWS services using commands in your command-line shell

Direct access to the public APIs of AWS services

You can develop scripts to manage your resources

Alternative to AWS dashboard

#### What is AWS SDK

Language-specific APIs (set of libraries)

Enables you to access and manage AWS services programmatically

Enbedded within your application

#### How to user AWS CLI

- Create access key on AWS dashboard, download csv

- In your terminal type `aws config`

- Fill in the access key id and secret

#### AWS CloudShell

It is like AWS CLI but on the web instead of your terminal

#### IAM roles for services

Some AWS service will need to perform actions on your behalf

To do so, we will assign permissions to AWS services with IAM Roles

Common roles:

- EC2 Instance Rolles

- Lambda Function Roles

- Roles for CloudFormation

#### IAM security tools

IAM credentials report (account-level)

- a report that lists all your account's users and the status of their various credentials

IAM access advisor (user-level)

- Access advisor shows the service permissions granted to a user and when those services were last accessed

- You can use this information to revise your policies

#### IAM guidlines & best practices

Dont user root account except for AWS account setup

One physical user = one aws user

Assign users to groups and assign permissions to groups

Create strong password policy

Use and enforce the use of MFA

Create and use Roles for giving permissions to AWS services

Use access keys for programmatic access

Audit permissions of your account with the IAM credentials report

Never share IAM users & access keys




