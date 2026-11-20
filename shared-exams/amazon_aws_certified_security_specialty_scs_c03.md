# Exam Topics Questions

@thatonecodes

## Exam AWS Certified Security - Specialty SCS-C03 topic 1 question 1 discussion



A security engineer is troubleshooting an AWS Lambda function that is named MyLambdaFunction. The function is encountering an error when the function attempts to read the objects in an Amazon S3 bucket that is named DOC-EXAMPLE-BUCKET. The S3 bucket has the following bucket policy:



Which change should the security engineer make to the policy to ensure that the Lambda function can read the bucket objects?

A. Remove the Condition element. Change the Principal element to the following:

B. Change the Action element to the following:

C. Change the Resource element to "arn:aws:s3:::DOC-EXAMPLE- BUCKET/*''.

D. Change the Resource element to "arn:aws:lambda:::function:MyLambdaFunction". Change the Principal element to the following: Forgot my password

**Answer: **

**Timestamp: **

[View on ExamTopics](https://www.examtopics.com/discussions/amazon/view/382889-exam-aws-certified-security-specialty-scs-c03-topic-1-question-1-discussion/)

Comments: Nitttt Most Recent 23 days ago Selected Answer: C Should we study for scs-c02 as well? upvoted 1 time Submit     Cancel ... dakarihick 1 month, 4 days ago Selected Answer: C I’d choose C too based on the discussion. I’ve also been using examspilot for some extra AWS Security Specialty practice. upvoted 2 times Submit     Cancel ... CanekSystems 4 months, 14 days ago Selected Answer: C C is correct. The principal is ok because is following the principle of the least privilege by scoping in the condition only the Lambda's ARN. upvoted 2 times Submit     Cancel ... datngxtiens 5 months, 11 days ago Selected Answer: C Answer C is correct but is not enough. I don't think allowing the principal of Lambda service can grant the Lambda function access to S3 bucket. The principal should be the role ARN of the Lambda function, I think. upvoted 1 time Submit     Cancel ... gonzales 7 months, 19 days ago Selected Answer: C s3:GetObject → requires bucket/* upvoted 1 time Submit     Cancel ... bigdata2ml 8 months, 10 days ago Selected Answer: C Need permission to read the objects in the policy /* upvoted 2 times Submit     Cancel ... Liongeek 8 months, 24 days ago Selected Answer: C It's C upvoted 1 time Submit     Cancel ... maxzhangzhihua 9 months, 5 days ago Selected Answer: C obviuse upvoted 1 time Submit     Cancel ...

----------------------------------------

## Exam AWS Certified Security - Specialty SCS-C03 topic 1 question 3 discussion



An AWS account administrator created an IAM group and applied the following managed policy to require that each individual user authenticate using multi-factor authentication:



After implementing the policy, the administrator receives reports that users are unable to perform Amazon EC2 commands using the AWS CLI.

What should the administrator do to resolve this problem while still enforcing multi-factor authentication?

A. Change the value of aws:MultiFactorAuthPresent to true.

B. Instruct users to run the aws sts get-session-token CLI command and pass the multi-factor authentication --serial-number and -token-code parameters. Use these resulting values to make API/CLI calls.

C. Implement federated API/CLI access using SAML 2.0, then configure the identity provider to enforce multi-factor authentication.

D. Create a role and enforce multi-factor authentication in the role trust policy. Instruct users to run the sts assume-role CLI command and pass --serial-number and --token-code parameters. Store the resulting values in environment variables. Add sts:AssumeRole to NotAction in the policy. Forgot my password

**Answer: **

**Timestamp: **

[View on ExamTopics](https://www.examtopics.com/discussions/amazon/view/382901-exam-aws-certified-security-specialty-scs-c03-topic-1-question-3-discussion/)

Comments: 7f6aef3 Most Recent 2 months, 23 days ago Selected Answer: B aws sts get-session-token con los parámetros --serial-number (ARN del dispositivo MFA) y --token-code (código del dispositivo) genera credenciales temporales de sesión que incluyen el contexto de MFA. Al usar esas credenciales temporales para las llamadas al CLI/API, la clave aws:MultiFactorAuthPresent será true, y el Deny ya no se aplica. Esto resuelve el problema manteniendo el requisito de MFA. upvoted 1 time Submit     Cancel ... giancesarini2023 5 months, 20 days ago Selected Answer: B B because the sts get-session-token command generates temporary MFA-authenticated credentials, allowing AWS CLI requests to satisfy the aws:MultiFactorAuthPresent condition. upvoted 1 time Submit     Cancel ... gonzales 7 months, 27 days ago Selected Answer: B MFA for CLI = temporary credentials (STS), not long-term access keys upvoted 1 time Submit     Cancel ... bigdata2ml 8 months, 10 days ago Selected Answer: B https://docs.aws.amazon.com/STS/latest/APIReference/API_GetSessionToken.html upvoted 2 times Submit     Cancel ... Liongeek 8 months, 24 days ago Selected Answer: B The right answer is B aws sts get-session-token \ --serial-number arn:aws:iam::123456789012:mfa/username \ --token-code 123456 upvoted 1 time Submit     Cancel ...

----------------------------------------

## Exam AWS Certified Security - Specialty SCS-C03 topic 1 question 6 discussion



What is the effect of the following AWS Key Management Service (AWS KMS} key policy that is attached to a customer managed key?

A. Amazon WorkMail and Amazon Simple Email Service (Amazon SES) have delegated KMS encrypt and decrypt permissions to the ExampleRole principal in the 111122223333 account.

B. The ExampleRole principal can transparently encrypt and decrypt email exchanges specifically between ExampleRole and AWS.

C. The customer managed key can be used for encrypting and decrypting only when the principal is ExampleRole and when the request comes from Amazon WorkMail or Amazon Simple Email Service (Amazon SES) in the specified AWS Region.

D. The key policy allows Amazon WorkMail or Amazon Simple Email Service (Amazon SES) to encrypt or decrypt on behalf of the ExampleRole for any customer managed key in the account. Forgot my password

**Answer: **

**Timestamp: **

[View on ExamTopics](https://www.examtopics.com/discussions/amazon/view/382949-exam-aws-certified-security-specialty-scs-c03-topic-1-question-6-discussion/)

Comments: bigdata2ml Most Recent 8 months, 10 days ago Selected Answer: C Via Service means - The service that is calling the operation upvoted 1 time Submit     Cancel ... Jonfernz 9 months, 1 days ago Selected Answer: C This accurately states that the key can be used for encrypting/decrypting only when (1) the principal is ExampleRole AND (2) the request comes from WorkMail or SES in us-west-2. This is exactly what the kms:ViaService condition enforces. upvoted 1 time Submit     Cancel ...

----------------------------------------

## Exam AWS Certified Security - Specialty SCS-C03 topic 1 question 9 discussion



A company needs a solution to protect critical data from being permanently deleted. The data is stored in Amazon S3 buckets.

The company needs to replicate the S3 objects from the company's primary AWS Region to a secondary Region to meet disaster recovery requirements. The company must also ensure that users who have administrator access cannot permanently delete the data in the secondary Region.

Which solution will meet these requirements?

A. Configure AWS Backup to perform cross-Region S3 backups. Select a backup vault in the secondary Region. Enable AWS Backup Vault Lock in governance mode for the backups in the secondary Region.

B. Implement S3 Object Lock in compliance mode in the primary Region. Configure S3 replication to replicate the objects to an S3 bucket in the secondary Region.

C. Configure S3 replication to replicate the objects to an S3 bucket in the secondary Region. Create an S3 bucket policy to deny the s3:ReplicateDelete action on the S3 bucket in the secondary Region.

D. Configure S3 replication to replicate the objects to an S3 bucket in the secondary Region. Configure S3 object versioning on the S3 bucket in the secondary Region. Forgot my password

**Answer: **

**Timestamp: **

[View on ExamTopics](https://www.examtopics.com/discussions/amazon/view/382895-exam-aws-certified-security-specialty-scs-c03-topic-1-question-9-discussion/)

Comments: gonzales Most Recent 8 months, 3 days ago Selected Answer: B • S3 Object Lock in compliance mode prevents objects from being deleted or overwritten until retention expires • Cross-Region Replication (CRR) copies the objects to a bucket in the secondary Region • with Object Lock, the protected state is preserved for replicated objects when configured correctly upvoted 1 time Submit     Cancel ... bigdata2ml 8 months, 10 days ago Selected Answer: B Vaults locked in governance mode can have the lock removed by users with sufficient IAM permissions. Vaults locked in compliance mode cannot be deleted once the cooling-off period (&quot;grace time&quot;) expires if any recovery points are in the vault. During grace time, you can still remove the vault lock and change the lock configuration. upvoted 2 times Submit     Cancel ... Liongeek 8 months, 13 days ago Selected Answer: A Even administrators cannot delete data when compliance mode is activated. upvoted 1 time Submit     Cancel ... 18641c6 9 months, 1 days ago Selected Answer: B compliance mode locks the object even for administrators, the object lock information gets replicated, so B should be the solution upvoted 1 time Submit     Cancel ...

----------------------------------------

## Exam AWS Certified Security - Specialty SCS-C03 topic 1 question 10 discussion



A security engineer is responding to an incident that is affecting an AWS account. The ID of the account is 1234156789012. The attack created workloads that are distributed across multiple AWS Regions.

The security engineer contains the attack. The security engineer removes all compute and storage resources from all affected Regions. However, the attacker also created an AWS KMS key. The key policy on the KMS key explicitly allows IAM principal kms:* permissions.

The key was scheduled to be deleted the previous day. However, the key is still enabled and usable. The key has an ARN of arn:aws;kms:us-east-2:123456789012:key/mrk-0bb0212cd9864fdea0dcamzo26efb5670. The security engineer must delete the key as quickly as possible.

Which solution will meet this requirement?

A. Log in to the account by using the account root user credentials. Re-issue the deletion request for the KMS key with a waiting period of 7 days.

B. Identify the other Regions where the KMS key ID is present and schedule the key for deletion in 7 days.

C. Update the IAM principal lo allow kms:* permissions on the KMS key ARN. Re-issue the deletion request for the KMS key with a waiting period of 7 days.

D. Disable the KMS key. Re-issue the deletion request for the KMS key in 30 days. Forgot my password

**Answer: **

**Timestamp: **

[View on ExamTopics](https://www.examtopics.com/discussions/amazon/view/382890-exam-aws-certified-security-specialty-scs-c03-topic-1-question-10-discussion/)

Comments: giancesarini2023 5 months, 14 days ago Selected Answer: C The KMS key policy delegates permissions to IAM principals. To delete the key, you must first have kms:* permissions on the key, then reissue the deletion request using the minimum allowed waiting period (7 days). upvoted 1 time Submit     Cancel ... giancesarini2023 Most Recent 5 months, 14 days ago Reviewed: Correct answer is B. The key ARN contains the mrk- prefix, indicating a Multi-Region KMS Key (MRK). AWS requires all replica keys in other Regions to be scheduled for deletion before the primary key can be deleted. Therefore, the fastest path is to identify the replica keys and schedule their deletion using the minimum waiting period of 7 days. upvoted 2 times Submit     Cancel ... gonzales 8 months, 3 days ago Selected Answer: B • find the other Regions that have the same mrk-... key ID • schedule those keys for deletion • use the minimum waiting period of 7 days Deleting just one regional instance does not necessarily remove the whole key setup upvoted 1 time Submit     Cancel ... bigdata2ml 8 months, 10 days ago Selected Answer: B The clue is - the ARN has MRK- (multi region key), you need to explicitly delete the key in all region, before you delete the master key, immediate delete is not allowed, the lowest is 7 days. upvoted 1 time Submit     Cancel ... Liongeek 8 months, 23 days ago Selected Answer: B Opt B cause mrk- means multi region key. That means deleting the key in that region ins't enough. upvoted 1 time Submit     Cancel ... AshLum 9 months, 0 days ago Selected Answer: B Option D is not necessary as when KMS key is set pending for deletion, the key cannot be used for any cryptographic operations. Moreover, option D does not solve the issue whereby the key was scheduled for deletion on the previous day but it does not happen because it is created as a multi-region key (identified by the id &quot;mrk&quot;) For a primary key, the deletion pending period only starts after all of its replica keys are deleted. So option B should be the correct answer. upvoted 2 times Submit     Cancel ... 18641c6 9 months, 1 days ago Selected Answer: B The point here is that it is a multi-region key ( key/mrk... ). You may want to double-check: https://docs.aws.amazon.com/kms/latest/developerguide/deleting-keys.html#:~:text=Deleting%20multi%2DRegion%20keys,replica%20keys%20to%20be%20deleted. upvoted 1 time Submit     Cancel ... martin2099 9 months, 8 days ago Selected Answer: D DISABLE the KMS key upvoted 1 time Submit     Cancel ... AshLum 9 months, 0 days ago not necessary as when KMS key is set pending for deletion, the key cannot be used for any cryptographic operations. And option D does not solve the issue whereby the key was scheduled for deletion on the previous day but it does not happen because it is created as a multi-region key (identified by the id &quot;mrk&quot;) For a primary key, the deletion pending period only starts after all of its replica keys are deleted. So option B should be the correct answer. upvoted 1 time Submit     Cancel ...

----------------------------------------

## Exam AWS Certified Security - Specialty SCS-C03 topic 1 question 11 discussion



A company has installed a third-party application that is distributed on several Amazon EC2 instances and on-premises servers. Occasionally, the company's IT team needs to use SSH to connect to each machine to perform software maintenance tasks. Outside these time slots, the machines must be completely isolated from the rest of the network. The company does not want to maintain any SSH keys. Additionally, the company wants to pay only for machine hours when there is an SSH connection.

Which solution will meet these requirements?

A. Create a bastion host with port forwarding to connect to the machines.

B. Set up AWS Systems Manager Session Manager to allow temporary connections.

C. Use AWS CloudShell to create serverless connections.

D. Set up an interface VPC endpoint for each machine for private connection. Forgot my password

**Answer: **

**Timestamp: **

[View on ExamTopics](https://www.examtopics.com/discussions/amazon/view/382918-exam-aws-certified-security-specialty-scs-c03-topic-1-question-11-discussion/)

Comments: J-Babe Most Recent 1 month, 6 days ago Selected Answer: B The answer is B cuz they don’t want to manage SSH keys and system manager doesn’t require SSH keys which meets the customer requirements. upvoted 1 time Submit     Cancel ... 7f6aef3 2 months, 23 days ago Selected Answer: B Cumple los tres requisitos: sin llaves SSH, aislamiento cuando no hay sesión activa, funciona tanto en EC2 como on-premises, y sin infraestructura permanente que mantener. upvoted 1 time Submit     Cancel ... d3717d5 7 months, 19 days ago Selected Answer: B it is a standard now to use SSM instead of SSH. upvoted 1 time Submit     Cancel ... bigdata2ml 8 months, 10 days ago Selected Answer: B Session Manager is a fully managed AWS Systems Manager tool. With Session Manager, you can manage your Amazon Elastic Compute Cloud (Amazon EC2) instances, edge devices, on-premises servers, and virtual machines (VMs). You can use either an interactive one-click browser-based shell or the AWS Command Line Interface (AWS CLI). Session Manager provides secure node management without the need to open inbound ports, maintain bastion hosts, or manage SSH keys. upvoted 2 times Submit     Cancel ...

----------------------------------------

## Exam AWS Certified Security - Specialty SCS-C03 topic 1 question 12 discussion



A company runs several applications on Amazon Elastic Kubernetes Service (Amazon EKS). The company needs a solution to detect any Kubernetes security risks by monitoring Amazon EKS audit logs in addition to operating system, networking, and file events. The solution must send email alerts for any identified risks to a mailing list that is associated with a security team.

Which solution will meet these requirements?

A. Deploy AWS Security Hub and enable security standards that contain EKS controls. Create an Amazon Simple Notification Service (Amazon SNS) topic and set the security team's mailiing list as a subscriber. Use an Amazon EventBridge rule to send relevant Security Hub events to the SNS topic.

B. Enable Amazon Inspector container image scanning. Configure Amazon Detective to analyze EKS security logs. Create Amazon CloudWatch log groups for EKS audit logs. Use an AWS Lambda function to process the logs and to send email alerts to the security team.

C. Enable Amazon GuardDuty Enable EKS Protection and Runtime Monitoring for Amazon EKS in GuardDuty. Create an Amazon Simple Notification Service (Amazon SNS) topic and set the security team's mailing list as a subscriber. Use an Amazon EventBridge rule to send relevant GuardDuty events to the SNS topic.

D. Install the AWS Systems Manager Agent (SSM Agent) on all EKS nodes. Configure Amazon CloudWatch Logs lo collect EKS audit logs. Create an Amazon Simple Notification Service (Amazon SNS) topic and set the security team's mailing list as a subscriber. Configure a CloudWatch alarm to publish a message to the SNS topic when now audit logs are generated. Forgot my password

**Answer: **

**Timestamp: **

[View on ExamTopics](https://www.examtopics.com/discussions/amazon/view/382891-exam-aws-certified-security-specialty-scs-c03-topic-1-question-12-discussion/)

Comments: 7f6aef3 Most Recent 2 months, 23 days ago Selected Answer: C Detecta riesgos de Kubernetes vía EKS Protection (audit logs) y eventos de SO/red/archivos vía Runtime Monitoring. Envía las alertas por email mediante EventBridge → SNS → mailing list. upvoted 1 time Submit     Cancel ... bigdata2ml 8 months, 10 days ago Selected Answer: C EKS Runtime Monitoring provides runtime threat detection coverage for Amazon Elastic Kubernetes Service (Amazon EKS) nodes and containers within your AWS environment. EKS Runtime Monitoring uses a GuardDuty security agent that adds runtime visibility into individual EKS workloads, for example, file access, process execution, and network connections. The GuardDuty security agent helps GuardDuty identify specific containers within your EKS clusters that are potentially compromised. It can also detect attempts to escalate privileges from an individual container to the underlying EC2 host, and the broader AWS environment. upvoted 1 time Submit     Cancel ...

----------------------------------------

## Exam AWS Certified Security - Specialty SCS-C03 topic 1 question 13 discussion



A company allows users to download its mobile app onto their phones. The app is MQTT based and connects to AWS IoT Core lo subscribe la specific client-related topics.

Recently, the company discovered that some malicious attackers have been trying to get a Trojan horse onto legitimate mobile phones. The Trojan horse poses as the authentic application and uses a client ID with injected special characters to gain access to topics outside the client's privilege scope.

Which combination of actions should the company take to prevent this threat? (Choose two.)

A. In the application, use an IoT thing name as the client ID to conned the device to AWS IoT Core.

B. In the application, add a client ID check. Disconnect from the server if any special character is detected.

C. Apply an AWS IoT Core policy that allows "AWSIoTWirelessDataAccess" with the principal set to "client/${iot:Connection.Thing.ThingName}"

D. Apply an AWS IoT Core policy to the device to allow "iot:Connect" with the resource set to "client/${iot:ClientId}".

E. Apply an AWS IoT Core policy to the device to allow "iot:Connect" with the resource set to "client/${iot:Connection.Thing.ThingName)". Forgot my password

**Answer: **

**Timestamp: **

[View on ExamTopics](https://www.examtopics.com/discussions/amazon/view/382892-exam-aws-certified-security-specialty-scs-c03-topic-1-question-13-discussion/)

Comments: d3717d5 Most Recent 7 months, 19 days ago Selected Answer: AE a word &quot;Thing&quot; sounds unprofessional and may mislead you. upvoted 2 times Submit     Cancel ... gonzales 8 months, 3 days ago Selected Answer: AE Bind the client identity strictly to the device identity. Use an IoT thing name as the client ID. Allow: iot:Connect Resource: client/${iot:Connection.Thing.ThingName} A device can connect only if the ClientID equals its ThingName. upvoted 1 time Submit     Cancel ...

----------------------------------------

## Exam AWS Certified Security - Specialty SCS-C03 topic 1 question 14 discussion



A security engineer wants to evaluate configuration changes to a specific AWS resource to ensure that the resource meets compliance standards. However, the security engineer is concerned about a situation in which several configuration changes are made to the resource in quick succession. The security engineer wants to record only the latest configuration of that resource to indicate the cumulative impact of the set of changes.

Which solution will meet this requirement in the MOST operationally efficient way?

A. Use AWS CloudTrail to detect the configuration changes by filtering API calls to monitor the changes. Use the most recent API call to indicate the cumulative impact of multiple calls.

B. Use AWS Config to detect the configuration changes and to record the latest configuration in case of multiple configuration changes.

C. Use Amazon CloudWatch to detect the configuration changes by filtering API calls to monitor the changes. Use the most recent API call to indicate the cumulative impact of multiple calls.

D. Use AWS Cloud Map to detect the configuration changes. Generate a report of configuration changes from AWS Cloud Map to track the latest state by using a sliding time window. Forgot my password

**Answer: **

**Timestamp: **

[View on ExamTopics](https://www.examtopics.com/discussions/amazon/view/382894-exam-aws-certified-security-specialty-scs-c03-topic-1-question-14-discussion/)

Comments: d3717d5 Most Recent 7 months, 19 days ago Selected Answer: B AWS Config is a good choice. upvoted 1 time Submit     Cancel ... gonzales 8 months, 3 days ago Selected Answer: B AWS Config is specifically designed for: • tracking resource configuration changes • storing configuration snapshots • evaluating compliance Most importantly, AWS Config records the current configuration state, not just individual API events. upvoted 1 time Submit     Cancel ...

----------------------------------------

## Exam AWS Certified Security - Specialty SCS-C03 topic 1 question 15 discussion



A security engineer needs to implement a solution to create and control the keys that a company uses for cryptographic operations. The security engineer must create symmetric keys in which the key material is generated and used within a custom key store that is backed by an AWS CloudHSM cluster.

The security engineer will use symmetric and asymmetric data key pairs for local use within applications. The security engineer also must audit the use of the keys.

How can the security engineer meet these requirements?

A. To create the keys, use AWS Key Management Service (AWS KMS) and the custom key stores with the CloudHSM cluster. For auditing, use Amazon Athena.

B. To create the keys, use Amazon S3 and the custom key stores with the CloudHSM cluster. For auditing, use AWS CloudTrail.

C. To create the keys, use AWS Key Management Service (AWS KMS) and the custom key stores with the CloudHSM cluster. For auditing, use Amazon GuardDuty.

D. To create the keys, use AWS Key Management Service (AWS KMS) and the custom key stores with the CloudHSM cluster. For auditing, use AWS CloudTrail. Forgot my password

**Answer: **

**Timestamp: **

[View on ExamTopics](https://www.examtopics.com/discussions/amazon/view/382929-exam-aws-certified-security-specialty-scs-c03-topic-1-question-15-discussion/)

Comments: 7f6aef3 Most Recent 2 months, 22 days ago Selected Answer: D KMS + custom key store con CloudHSM para crear/controlar las claves (simétricas, y data key pairs simétricos/asimétricos para uso local). CloudTrail para auditar el uso de las claves. upvoted 1 time Submit     Cancel ... gonzales 8 months, 3 days ago Selected Answer: D AWS KMS supports custom key stores backed by CloudHSM clusters where: • key material is generated inside the HSM • the keys remain HSM-protected So the key creation must be done with AWS KMS using a custom key store. AWS KMS supports: GenerateDataKey GenerateDataKeyPair GenerateDataKeyPairWithoutPlaintext So applications can locally use: • symmetric data keys • asymmetric key pairs generated by KMS. CloudTrail logs operations such as: Encrypt Decrypt GenerateDataKey GenerateDataKeyPair Sign Verify upvoted 1 time Submit     Cancel ... bigdata2ml 8 months, 10 days ago Selected Answer: D Key Creation - KMS Store - CloudHSM Audit - Cloudtrail upvoted 1 time Submit     Cancel ...

----------------------------------------

## Exam AWS Certified Security - Specialty SCS-C03 topic 1 question 16 discussion



A company is running an application on Amazon EC2 instances in an Auto Scaling group. The application stores logs locally. A security engineer noticed that logs were lost after a scale-in event. The security engineer needs to recommend a solution to ensure the durability and availability of log data. All logs must be kept for a minimum of 1 year for auditing purposes.

What should the security engineer recommend?

A. Within the Auto Scaling lifecycle, add a hook to create and attach an Amazon Elastic Block Store (Amazon EBS) log volume each time an EC2 instance is created. When the instance is terminated, the EBS volume can be reattached to another instance for log review.

B. Create an Amazon Elastic File System (Amazon EFS) file system and add a command in the user data section of the Auto Scaling launch template to mount the EFS file system during EC2 instance creation. Configure a process on the instance to copy the logs once a day from an instance Amazon Elastic Block Store (Amazon EBS) volume to a directory in the EFS file system.

C. Add an Amazon CloudWatch agent into the AMI used in the Auto Scaling group. Configure the CloudWatch agent to send the logs to Amazon CloudWatch Logs for review.

D. Within the Auto Scaling lifecycle, add a lifecycle hook at the terminating state transition and alert the engineering team by using a lifecycle notification to Amazon Simple Notification Service (Amazon SNS). Configure the hook to remain in the Terminating:Wait state for 1 hour to allow manual review of the security logs prior to instance termination. Forgot my password

**Answer: **

**Timestamp: **

[View on ExamTopics](https://www.examtopics.com/discussions/amazon/view/382948-exam-aws-certified-security-specialty-scs-c03-topic-1-question-16-discussion/)

Comments: 7f6aef3 Most Recent 2 months, 22 days ago Selected Answer: C Resuelve la causa raíz: los logs se envían continuamente fuera de la instancia a un almacenamiento durable (CloudWatch Logs), sobreviviendo a los eventos de scale-in, y con retención configurable a 1 año. upvoted 1 time Submit     Cancel ... gonzales 8 months, 2 days ago Selected Answer: C Push logs continuously off-instance • Fully managed, durable storage Retention policies (≥ 1 year) (!) Auto Scaling safe upvoted 1 time Submit     Cancel ... bigdata2ml 8 months, 10 days ago Selected Answer: C By default, log data is stored in CloudWatch Logs indefinitely. However, you can configure how long to store log data in a log group. Any data older than the current retention setting is deleted. You can change the log retention for each log group at any time. upvoted 1 time Submit     Cancel ...

----------------------------------------

## Exam AWS Certified Security - Specialty SCS-C03 topic 1 question 17 discussion



A company is using AWS to run a long-running analysis process on data that is stored in Amazon S3 buckets. The process runs on a fleet of Amazon EC2 instances that are in an Auto Scaling group. The EC2 instances are deployed in a private subnet of a VPC that does not have internet access. The EC2 instances and the S3 buckets are in the same AWS account.

The EC2 instances access the S3 buckets through an S3 gateway endpoint that has the default access policy. Each EC2 instance is associated with an instance profile role that has a policy that explicitly allows the s3:GetObject action and the s3:PutObject action for only the required S3 buckets.

The company learns that one or more of the EC2 instances are compromised and are exfiltrating data to an S3 bucket that is outside the company's organization in AWS Organizations. A security engineer must implement a solution to stop this exfiltration of data and to keep the EC2 processing job functional.

Which solution will meet these requirements?

A. Update the policy on the S3 gateway endpoint to allow the S3 actions only if the values of the aws:ResourceOrgID and aws:PrincipalOrgID condition keys match the company's values.

B. Update the policy on the instance profile role to allow the S3 actions only if the value of the aws:ResourceOrgID condition key matches the company's value.

C. Add a network ACL rule to the subnet of the EC2 instances to block outgoing connections on port 443.

D. Apply an SCP on the AWS account to allow the S3 actions only if the values of the aws:ResourceOrgID and aws:PrincipalOrgID condition keys match the company's values. Forgot my password

**Answer: **

**Timestamp: **

[View on ExamTopics](https://www.examtopics.com/discussions/amazon/view/382893-exam-aws-certified-security-specialty-scs-c03-topic-1-question-17-discussion/)

Comments: Stpn2me Most Recent 4 months, 9 days ago Selected Answer: A If you guys know how AWS questions actually work, it specifically mentioned there was no internet access and data was moved via the S3 gateway. You can Data loss prevention by stopping data from leaving the VPC through the gateway. upvoted 1 time Submit     Cancel ... gonzales 8 months, 2 days ago Selected Answer: A Allows access only to S3 buckets within your AWS Organization, Blocks access to external S3 buckets. Not B -&gt; IAM role is already compromised upvoted 1 time Submit     Cancel ... bigdata2ml 8 months, 10 days ago Selected Answer: B question is &quot;exfiltrating data to an S3 bucket that is outside the company's organization in AWS Organizations&quot; how to stop it ? https://aws.amazon.com/blogs/security/how-to-control-access-to-aws-resources-based-on-aws-account-ou-or-organization/ upvoted 1 time Submit     Cancel ... Joan971 8 months, 11 days ago Selected Answer: A S3 Gateway Endpoint policies control what S3 actions are allowed through that endpoint aws:ResourceOrgID ensures the S3 bucket belongs to the company's organization aws:PrincipalOrgID ensures the requester belongs to the company's organization Both conditions ensure data stays within the org upvoted 1 time Submit     Cancel ... 1162f55 8 months, 14 days ago Selected Answer: B The EC2 instances use an instance profile IAM role to access S3. You modify that role so it can only access S3 buckets. upvoted 1 time Submit     Cancel ... Liongeek 7 months, 30 days ago Question doesn't say so. If instance were using credentials then opt B won't work upvoted 1 time Submit     Cancel ... Liongeek 8 months, 19 days ago Selected Answer: A You may deny s3 api calls to external s3 buckets but if the instance isn't using its profile but credentials, then won't work. So It has to be controlled on the Gateway upvoted 1 time Submit     Cancel ... koffeebrown 8 months, 23 days ago Selected Answer: D Use an SCP to prevent the account from accessing S3 resources outside your AWS Organization while still allowing access to in-org buckets needed for processing. https://docs.aws.amazon.com/organizations/latest/userguide/orgs_manage_policies_scps.html upvoted 2 times Submit     Cancel ... himawari123 9 months, 8 days ago Selected Answer: A A no?? upvoted 1 time Submit     Cancel ... Liongeek 8 months, 11 days ago IT's A upvoted 1 time Submit     Cancel ...

----------------------------------------

## Exam AWS Certified Security - Specialty SCS-C03 topic 1 question 18 discussion



A company recently experienced a malicious attack on its cloud-based environment. The company successfully contained and eradicated the attack A security engineer is performing incident response work. The security engineer needs to recover an Amazon RDS database cluster to the last known good version. The database cluster is configured to generate automated backups with a retention period of 14 days. The initial attack occurred 5 days ago at exactly 3:15 PM

Which solution will meet this requirement?

A. Identify the Regional duster ARN for the database. Use the ARN to restore the Regional cluster by using the Restore to point in time feature. Set a target time 5 days ago at 3:14 PM.

B. Identify the Regional cluster ARN for the database. List snapshots that have been taken of the cluster. Restore the database by using the snapshot that has a creation time that is closest to 5 days ago at 3:14 PM.

C. List all snapshots that have been taken of all the company's RDS databases. Identify the snapshot that was taken closest to 5 days ago at 3:14 PM and restore it.

D. Identify the Regional cluster ARN for the database. Use the ARN to restore the Regional cluster by using the Restore to point in time feature. Set a target time 14 days ago. Forgot my password

**Answer: **

**Timestamp: **

[View on ExamTopics](https://www.examtopics.com/discussions/amazon/view/382907-exam-aws-certified-security-specialty-scs-c03-topic-1-question-18-discussion/)

Comments: 7f6aef3 Most Recent 2 months, 22 days ago Selected Answer: A Usa PITR (que permite precisión de segundos dentro de la retención) y fija el momento justo antes del ataque (3:14 PM de hace 5 días), recuperando el último estado bueno con la mínima pérdida de datos. upvoted 1 time Submit     Cancel ... gonzales 8 months, 2 days ago Selected Answer: A The database has automated backups with 14-day retention, so the right recovery method is point-in-time restore (PITR), not snapshot. B is wrong, uses snapshots closest to the time. That is less precise than PITR. upvoted 1 time Submit     Cancel ... bigdata2ml 8 months, 10 days ago Selected Answer: A https://docs.aws.amazon.com/AmazonRDS/latest/APIReference/API_RestoreDBClusterToPointInTime.html upvoted 1 time Submit     Cancel ...

----------------------------------------

## Exam AWS Certified Security - Specialty SCS-C03 topic 1 question 19 discussion



A security engineer for a company needs to design an incident response plan that addresses compromised IAM user account credentials. The company uses an organization in AWS Organizations and AWS IAM Identify Center to manage user access. The company uses a delegated administrator account to implement AWS Security Hub. The delegated administrator account contains an organizational trail in AWS CloudTrail that logs all events to an Amazon S3 bucket. The company has also configured an organizational event data store that captures all events from the trail.

The incident response plan must provide steps that the security engineer can take to immediately disable any compromised IAM user when the security engineer receives a notification of a security incident.

The plan must prevent the IAM user from being used in any AWS account. The plan must also collect all AWS actions that the compromised IAM user performed across all accounts in the previous 7 days.

Which solution will meet these requirements?

A. Disable the compromised IAM user in the organization management account. Use Amazon Athena to query the organizational CloudTrail logs in the S3 bucket for actions that the IAM user performed in the previous 7 days.

B. Remove all IAM policies that are attached to the IAM user in the organization management account. Use Security Hub to query the CloudTrail logs for actions that the IAM user performed in the previous 7 days.

C. Remove any permission sets that arc assigned to the IAM user in IAM Identity Center. Use Amazon CloudWatch Logs Insights to directly query the organizational CloudTrail logs in the S3 bucket for actions that the IAM user performed m the previous 7 days.

D. Disable the IAM user's access in IAM Identity Center. Use CloudTrail to query the organizational event data store for actions that the IAM user performed in the previous 7 days. Forgot my password

**Answer: **

**Timestamp: **

[View on ExamTopics](https://www.examtopics.com/discussions/amazon/view/382926-exam-aws-certified-security-specialty-scs-c03-topic-1-question-19-discussion/)

Comments: J-Babe Most Recent 1 month, 6 days ago Selected Answer: A Athena is used for querying logs from S3. upvoted 1 time Submit     Cancel ... Stpn2me 4 months, 9 days ago Selected Answer: D Isnt Athena used to query things in S3? I said D but I was leaning toward A.. upvoted 2 times Submit     Cancel ... gonzales 8 months, 2 days ago Selected Answer: D The company uses AWS IAM Identity Center to manage user access, and AWS says disabling a user in IAM Identity Center immediately prevents that user from signing in to the AWS access portal and from accessing assigned AWS accounts and applications. CloudTrail supports querying event data stores and Lake queries directly, which is the right way to collect the user’s actions across accounts for the last 7 days. upvoted 1 time Submit     Cancel ...

----------------------------------------

## Exam AWS Certified Security - Specialty SCS-C03 topic 1 question 20 discussion



A security engineer is designing security controls for a fleet of Amazon EC2 instances that run sensitive workloads in a VPC. The security engineer needs to implement a solution to detect and mitigate software vulnerabilities on the EC2 instances.

Which solution will meet this requirement?

A. Scan the EC2 instances by using Amazon Inspector. Apply security patches and updates by using AWS Systems Manager Patch Manager.

B. Install host-based firewall and antivirus software on each EC2 instance. Use AWS Systems Manager Run Command to update the firewall and antivirus software.

C. Install the Amazon CloudWatch agent on the EC2 instances. Enable detailed logging. Use Amazon EventBridge to review the software logs for anomalies.

D. Scan the EC2 instances by using Amazon GuardDuty Malware Protection. Apply security patches and updates by using AWS Systems Manager Patch Manager. Forgot my password

**Answer: **

**Timestamp: **

[View on ExamTopics](https://www.examtopics.com/discussions/amazon/view/382924-exam-aws-certified-security-specialty-scs-c03-topic-1-question-20-discussion/)

Comments: gonzales Most Recent 8 months, 2 days ago Selected Answer: A Use Amazon Inspector + SSM Patch Manager GuardDuty detects threats and malware activity NOT vulnerability scanning upvoted 1 time Submit     Cancel ... bigdata2ml 8 months, 10 days ago Selected Answer: A Inspector - Vulnerability management tool Patch manager - patch the identified vulnerability package upvoted 1 time Submit     Cancel ...

----------------------------------------

## Exam AWS Certified Security - Specialty SCS-C03 topic 1 question 21 discussion



A security engineer uses Amazon Macie to scan a company’s Amazon S3 buckets for sensitive data. The company has many S3 buckets and many objects stored in the S3 buckets. The security engineer must identify S3 buckets that contain sensitive data and must perform additional scanning on those S3 buckets.

Which solution will meet these requirements with the LEAST administrative overhead?

A. Configure S3 Cross-Region Replication (CRR) on the S3 buckets to replicate the objects to a second AWS Region. Configure Macie in the second Region to scan the replicated objects daily.

B. Create an AWS Lambda function as an S3 event destination for the S3 buckets. Configure the Lambda function to start a Macie scan of an object when the object is uploaded to an S3 bucket.

C. Configure Macie automated discovery to continuously sample data from the S3 buckets. Perform full scans of the S3 buckets where Macie discovers sensitive data.

D. Configure Macie scans to run on the S3 buckets. Aggregate the results of the scans in an Amazon DynamoDB table. Use the DynamoDB table for queries. Forgot my password

**Answer: **

**Timestamp: **

[View on ExamTopics](https://www.examtopics.com/discussions/amazon/view/382921-exam-aws-certified-security-specialty-scs-c03-topic-1-question-21-discussion/)

Comments: 7f6aef3 Most Recent 2 months, 22 days ago Selected Answer: C Es el enfoque nativo de Macie de menor sobrecarga: el automated discovery identifica automáticamente los buckets con datos sensibles mediante muestreo continuo, y luego se hace el escaneo completo solo donde hace falta. upvoted 1 time Submit     Cancel ... giancesarini2023 5 months, 13 days ago Selected Answer: C Macie = identifies and protects sensitive data in Amazon S3. upvoted 1 time Submit     Cancel ... gonzales 7 months, 22 days ago Selected Answer: C • Macie automated discovery is built exactly for this use case: • Continuously scans S3 buckets • Uses intelligent sampling (not full scans everywhere) • Automatically identifies buckets with sensitive data • Then you can: • Run targeted full scans only where needed upvoted 1 time Submit     Cancel ... gonzales 8 months, 2 days ago Selected Answer: C https://docs.aws.amazon.com/macie/latest/user/discovery-asdd.html upvoted 1 time Submit     Cancel ...

----------------------------------------

## Exam AWS Certified Security - Specialty SCS-C03 topic 1 question 22 discussion



A company sands Amazon RDS snapshots to two accounts as part of its disaster recovery (DR) plan. The snapshots must be encrypted. However, each account needs to be able to decrypt the snapshots in case of a DR event.

Which solution will meet these requirements?

A. Use the default AWS Key Management Sen/ice (AWS KMS) key to generate the snapshots. Create an AWS Lambda function that copies the KMS encryption key to the two accounts.

B. Use an AWS Key Management Service (AWS KMS) customer managed key to generate the snapshots. Create an AWS Lambda function that imports the KMS key in the two accounts.

C. Use the default AWS Key Management Service (AWS KMS) key to generate the snapshots. Share the KMS key with the two accounts by using an IAM principal that has the proper KMS permissions in each account.

D. Use an AWS Key Management Service (AWS KMS) customer managed key to generate the snapshots. Share the KMS key with the two accounts by using an IAM principal that has the proper KMS permissions in each account. Forgot my password

**Answer: **

**Timestamp: **

[View on ExamTopics](https://www.examtopics.com/discussions/amazon/view/382922-exam-aws-certified-security-specialty-scs-c03-topic-1-question-22-discussion/)

Comments: gonzales Most Recent 7 months, 22 days ago Selected Answer: D Default AWS-managed KMS keys cannot be shared cross-account. Uses customer-managed KMS key Can be shared via key policy Other accounts can decrypt Standard AWS DR pattern upvoted 2 times Submit     Cancel ... bigdata2ml 8 months, 10 days ago Selected Answer: D AWS Backup can perform cross-account backup for Amazon RDS encrypted with AWS KMS-CMK (Customer managed keys) because the AWS KMS-CMK can be shared across accounts. However, for Amazon RDS encrypted with KMS AWS managed key such as the default encryption key for RDS (aws/rds), the backups cannot be copied across accounts as the default encryption key for RDS cannot be shared across accounts. https://aws.amazon.com/blogs/storage/create-and-share-encrypted-backups-across-accounts-and-regions-using-aws-backup/ upvoted 1 time Submit     Cancel ...

----------------------------------------

## Exam AWS Certified Security - Specialty SCS-C03 topic 1 question 23 discussion



A company has a compliance requirement to encrypt all data in transit. The company recently discovered an Amazon Aurora cluster that does not meet this requirement.

How can the company enforce encryption for all connections to the Aurora cluster?

A. In the Aurora cluster configuration, set the require_secure_transport DB cluster parameter to ON.

B. Use AWS Directory Service for Microsoft Active Directory to create a user directory and to enforce Kerberos authentication with Aurora.

C. Configure the Aurora cluster to use AWS Certificate Manager (ACM) to provide encryption certificates.

D. Create an Amazon RDS proxy. Connect the proxy to the Aurora cluster to enable encryption. Forgot my password

**Answer: **

**Timestamp: **

[View on ExamTopics](https://www.examtopics.com/discussions/amazon/view/382914-exam-aws-certified-security-specialty-scs-c03-topic-1-question-23-discussion/)

Comments: Nel07 Most Recent 7 months, 7 days ago Selected Answer: A https://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/AuroraMySQL.Security.html#AuroraMySQL.Security.SSL upvoted 1 time Submit     Cancel ... gonzales 8 months, 2 days ago Selected Answer: A require_secure_transport = ON - all clients must use SSL/TLS - non-encrypted connections are rejected upvoted 2 times Submit     Cancel ... bigdata2ml 8 months, 10 days ago Selected Answer: A https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/mysql-ssl-connections.require-ssl.html upvoted 2 times Submit     Cancel ...

----------------------------------------

## Exam AWS Certified Security - Specialty SCS-C03 topic 1 question 24 discussion



A company's public website consists of an Application Load Balancer (ALB), a set of Amazon EC2 instances that run a stateless application behind the ALB, and an Amazon DynamoDB table from which the application reads data. The company is concerned about malicious scanning and DDoS attacks. The company wants to impose a restriction in which each client IP address can read the data only 3 times in any 5-minute period.

Which solution will meet this requirement with the LEAST effort?

A. Set up AWS WAF in front of the ALB. Create a rule that blocks requests that exceed the limit of 3 requests in any 5-minute period for each IP address.

B. Create an AWS Lambda function based on an Amazon CloudWatch request. Configure the Lambda function to count the requests for each IP address in rolling 5-minute intervals and to provide notification if the count exceeds 3.

C. Modify the EC2 application to count the source IP address of requests and calculate a rolling 5-minute sum. Return an error message if the count sum is greater than 3.

D. Add source IP address and request time to the DynamoDB table. Add a 5-minute TTL setting based on request time. Change the read capacity of the DynamoDB table throughput to 3. Forgot my password

**Answer: **

**Timestamp: **

[View on ExamTopics](https://www.examtopics.com/discussions/amazon/view/382941-exam-aws-certified-security-specialty-scs-c03-topic-1-question-24-discussion/)

Comments: goodlucks Most Recent 3 months, 25 days ago Selected Answer: A According to Claude, the correct answer is A. - Using the default features of a managed service requires the 'least effort.' AWS WAF's rate-based rules are designed specifically for this requirement. upvoted 1 time Submit     Cancel ... gonzales 7 months, 22 days ago Selected Answer: A Oeps, it is indeed A: AWS WAF can do this natively with the least effort: • attach to the ALB • create a rate-based rule • track requests by source IP • block clients that exceed the threshold upvoted 2 times Submit     Cancel ... gonzales 8 months, 2 days ago Selected Answer: C https://docs.aws.amazon.com/waf/latest/developerguide/waf-rule-statement-type-rate-based-high-level-settings.html • You need: 3 requests • WAF minimum: 10 requests upvoted 4 times Submit     Cancel ... bigdata2ml 8 months, 10 days ago Selected Answer: A https://docs.aws.amazon.com/waf/latest/developerguide/waf-rule-statement-type-rate-based-request-limiting.html upvoted 1 time Submit     Cancel ...

----------------------------------------

## Exam AWS Certified Security - Specialty SCS-C03 topic 1 question 25 discussion



A public subnet contains two Amazon EC2 instances. The subnet has a custom network ACL. A security engineer is designing a solution to improve the subnet security.

The solution must allow outbound traffic to an internet service that uses TLS through port 443. The solution also must deny inbound traffic that is destined for MySQL port 3306.

Which network ACL rule set meets these requirements?

A. Use inbound rule 100 to allow traffic on TCP port 443. Use inbound rule 200 to deny traffic on TCP port 3306. Use outbound rule 100 to allow traffic on TCP port 443.

B. Use inbound rule 100 to deny traffic on TCP port 3306. Use inbound rule 200 to allow traffic on TCP port range 1024-65535. Use outbound rule 100 to allow traffic on TCP port 443.

C. Use inbound rule 100 to allow traffic on TCP port range 1024-65535. Use inbound rule 200 to deny traffic on TCP port 3306. Use outbound rule 100 to allow traffic on TCP port 443.

D. Use inbound rule 100 to deny traffic on TCP port 3306. Use inbound rule 200 to allow traffic on TCP port 443. Use outbound rule 100 to allow traffic on TCP port 443. Forgot my password

**Answer: **

**Timestamp: **

[View on ExamTopics](https://www.examtopics.com/discussions/amazon/view/382932-exam-aws-certified-security-specialty-scs-c03-topic-1-question-25-discussion/)

Comments: 7f6aef3 Most Recent 2 months, 22 days ago Selected Answer: B Inbound 100: deny 3306 → se evalúa primero, bloquea MySQL entrante. ✔ Inbound 200: allow 1024-65535 → permite el tráfico de retorno del TLS saliente (excepto 3306, ya bloqueado por la regla 100). ✔ Outbound 100: allow 443 → permite la conexión TLS saliente. ✔ upvoted 1 time Submit     Cancel ... gonzales 8 months, 2 days ago Selected Answer: B Outbound must allow destination TCP 443, Inbound must allow the return traffic on the client’s ephemeral port range, typically TCP 1024–65535. Explicit deny to appear before broader allows (C is wrong) upvoted 1 time Submit     Cancel ...

----------------------------------------

## Exam AWS Certified Security - Specialty SCS-C03 topic 1 question 26 discussion



A company is using Amazon Elastic Container Service (Amazon ECS) to deploy an application that deals with sensitive data. During a recent security audit, the company identified a security issue in which Amazon RDS credentials wore stored with the application code in the company's source code repository.

A security engineer needs to develop a solution to ensure that database credentials are stored securely and rotated periodically. The credentials should be accessible to the application only. The engineer also needs to prevent database administrators from sharing database credentials as plaintext with other teammates. The solution must also minimize administrative overhead.

Which solution meets these requirements?

A. Use the AWS Systems Manager Parameter Store to generate database credentials. Use an IAM profile for ECS tasks to restrict access to database credentials to specific containers only.

B. Use AWS Secrets Manager to store database credentials. Use an IAM inline policy for ECS tasks to restrict access to database credentials to specific containers only.

C. Use the AWS Systems Manager Parameter Store to store database credentials. Use IAM roles for ECS tasks to restrict access to database credentials to specific containers only.

D. Use AWS Secrets Manager to store database credentials. Use IAM roles for ECS tasks to restrict access to database credentials to specific containers only. Forgot my password

**Answer: **

**Timestamp: **

[View on ExamTopics](https://www.examtopics.com/discussions/amazon/view/382910-exam-aws-certified-security-specialty-scs-c03-topic-1-question-26-discussion/)

Comments: gonzales Most Recent 7 months, 22 days ago Selected Answer: D 1. Secure storage of credentials → AWS Secrets Manager (purpose-built for secrets) 2. Automatic rotation → Secrets Manager supports native rotation (RDS integration) 3. Accessible only to the application → Use IAM roles for ECS tasks 4. Prevent plaintext sharing by admins → Secrets Manager enforces: • access via IAM • no need to expose credentials manually 5. Minimal administrative overhead → Fully managed rotation + integration upvoted 4 times Submit     Cancel ...

----------------------------------------

## Exam AWS Certified Security - Specialty SCS-C03 topic 1 question 27 discussion



A corporate cloud security policy slates that communications between the company's VPC and KMS must travel entirely within the AWS network and not use public service endpoints.

Which combination of the following actions MOST satisfies this requirement? (Choose two.)

A. Add the aws:sourceVpce condition to the AWS KMS key policy referencing the company’s VPC endpoint ID.

B. Remove the VPC internet gateway from the VPC and add a virtual private gateway to the VPC to prevent direct, public internet connectivity.

C. Create a VPC endpoint for AWS KMS with private DNS enabled.

D. Use the KMS Import Key feature to securely transfer the AWS KMS key over a VPN.

E. Add the following condition to the AWS KMS key policy: "aws:SourceIp": "10.0.0.0/16". Forgot my password

**Answer: **

**Timestamp: **

[View on ExamTopics](https://www.examtopics.com/discussions/amazon/view/382920-exam-aws-certified-security-specialty-scs-c03-topic-1-question-27-discussion/)

Comments: gonzales Most Recent 7 months, 22 days ago Selected Answer: AC Create a VPC endpoint for AWS KMS with private DNS enabled • This is the core requirement • Ensures traffic goes via: • AWS PrivateLink • stays inside AWS network • No public endpoint usage Add aws:sourceVpce condition to KMS key policy • Restricts KMS usage to: • only requests coming from your VPC endpoint • Enforces that: • even if someone tries public access → denied Enforces policy at security level upvoted 2 times Submit     Cancel ... Liongeek 8 months, 18 days ago Selected Answer: AC A,C The aws:sourceVpce condition works fine for KMS Endpoint. The aws:SourceIP could only see the endpoint's IP. upvoted 1 time Submit     Cancel ...

----------------------------------------

## Exam AWS Certified Security - Specialty SCS-C03 topic 1 question 28 discussion



A security engineer received an Amazon GuardDuty alert indicating a finding involving the Amazon EC2 instance that hosts the company’s primary website. The GuardDuty finding received read:

UnauthorizedAccess:IAMUser/InstanceCredentialExfiltration.

The security engineer confirmed that a malicious actor used API access keys intended for the EC2 instance from a country where the company does not operate. The security engineer needs to deny access to the malicious actor.

What is the first step the security engineer should take?

A. Open the EC2 console and remove any security groups that allow inbound traffic from 0.0.0.0/0.

B. Install the AWS Systems Manager Agent on the EC2 instance and run an inventory report.

C. Install the Amazon Inspector agent on the host and run an assessment with the CVE rules package.

D. Open the IAM console and revoke all IAM sessions that are associated with the instance profile. Forgot my password

**Answer: **

**Timestamp: **

[View on ExamTopics](https://www.examtopics.com/discussions/amazon/view/382904-exam-aws-certified-security-specialty-scs-c03-topic-1-question-28-discussion/)

Comments: gonzales Most Recent 7 months, 22 days ago Selected Answer: D This is a credential compromise / exfiltration incident: • GuardDuty finding: UnauthorizedAccess:IAMUser/InstanceCredentialExfiltration • Means: • EC2 instance role credentials (temporary creds) were stolen • They are being used outside AWS / from another country upvoted 1 time Submit     Cancel ...

----------------------------------------

## Exam AWS Certified Security - Specialty SCS-C03 topic 1 question 29 discussion



A company wants to store all objects that contain sensitive data in an Amazon S3 bucket. The company will use server-side encryption to encrypt the S3 bucket. The company’s operations team manages access to the company’s S3 buckets. The company’s security team manages access to encryption keys.

The company wants to separate the duties of the two teams to ensure that configuration errors by only one of these teams will not compromise the data by granting unauthorized access to plaintext data.

Which solution will meet this requirement?

A. Ensure that the operations team configures default bucket encryption on the S3 bucket to use server-side encryption with Amazon S3 managed encryption keys (SSE-S3). Ensure that the security team creates an IAM policy that controls access to use the encryption keys.

B. Ensure that the operations team creates a bucket policy that requires requests to use server-side encryption with AWS KMS keys (SSE-KMS) that are customer managed. Ensure that the security team creates a key policy that controls access to the encryption keys.

C. Ensure that the operations team creates a bucket policy that requires requests to use server-side encryption with Amazon S3 managed keys (SSE-S3). Ensure that the security team creates an IAM policy that controls access to the encryption keys.

D. Ensure that the operations team creates a bucket policy that requires requests to use server-side encryption with customer-provided encryption keys (SSE-C). Ensure that the security team stores the customer-provided keys in AWS Key Management Service (AWS KMS). Ensure that the security team creates a key policy that controls access to the encryption keys. Forgot my password

**Answer: **

**Timestamp: **

[View on ExamTopics](https://www.examtopics.com/discussions/amazon/view/382944-exam-aws-certified-security-specialty-scs-c03-topic-1-question-29-discussion/)

Comments: gonzales Most Recent 7 months, 22 days ago Selected Answer: B The requirement is separation of duties: • Operations team manages access to the S3 bucket • Security team manages access to the encryption keys • A mistake by only one team should not expose plaintext data With SSE-KMS using customer-managed KMS keys: • The ops team can require encryption at the bucket level with a bucket policy • The security team controls who can use the KMS key via the key policy • To read plaintext data, a principal needs: 1. access to the S3 object, and 2. permission to use the KMS key So a misconfiguration by just one team is not enough. upvoted 1 time Submit     Cancel ...

----------------------------------------

## Exam AWS Certified Security - Specialty SCS-C03 topic 1 question 30 discussion



A company is running its application on AWS. The company has a multi-environment setup, and each environment is isolated in a separate AWS account. The company has an organization in AWS Organizations to manage the accounts. There is a single dedicated security account for the organization.

The company must create an inventory of all sensitive data that is stored in Amazon S3 buckets across the organization’s accounts. The findings must be visible from a single location.

Which solution will meet these requirements?

A. Set the security account as the delegated administrator for Amazon Macie and AWS Security Hub. Enable and configure Macie to publish sensitive data findings to Security Hub.

B. Set the security account as the delegated administrator for AWS Security Hub. In each account, configure Amazon Inspector to scan the S3 buckets for sensitive data. Publish sensitive data findings to Security Hub.

C. In each account, configure Amazon Inspector to scan the S3 buckets for sensitive data. Enable Amazon Inspector integration with AWS Trusted Advisor. Publish sensitive data findings to Trusted Advisor.

D. In each account, enable and configure Amazon Macie to detect sensitive data. Enable Macie integration with AWS Trusted Advisor. Publish sensitive data findings to Trusted Advisor. Forgot my password

**Answer: **

**Timestamp: **

[View on ExamTopics](https://www.examtopics.com/discussions/amazon/view/382923-exam-aws-certified-security-specialty-scs-c03-topic-1-question-30-discussion/)

Comments: giancesarini2023 Most Recent 5 months, 5 days ago Selected Answer: A Amazon Macie identifies sensitive data in S3 buckets. By setting the security account as the delegated administrator for both Macie and Security Hub, the findings are centralized in a single location upvoted 1 time Submit     Cancel ... gonzales 7 months, 22 days ago Selected Answer: A Excusses, for this question i go for A, my first answer related to another question 1. Scan S3 for sensitive data → That’s exactly what Amazon Macie does 2. Across multiple AWS accounts (Organizations) → Use delegated administrator (central security account) 3. Single place to view findings → Use AWS Security Hub aggregation upvoted 1 time Submit     Cancel ... gonzales 7 months, 22 days ago Selected Answer: B The requirement is separation of duties: • Operations team manages access to the S3 bucket • Security team manages access to the encryption keys • A mistake by only one team should not expose plaintext data With SSE-KMS using customer-managed KMS keys: • The ops team can require encryption at the bucket level with a bucket policy • The security team controls who can use the KMS key via the key policy • To read plaintext data, a principal needs: 1. access to the S3 object, and 2. permission to use the KMS key So a misconfiguration by just one team is not enough. upvoted 1 time Submit     Cancel ... bigdata2ml 8 months, 10 days ago Selected Answer: A https://docs.aws.amazon.com/macie/latest/user/accounts-mgmt-ao-integrate.html upvoted 1 time Submit     Cancel ...

----------------------------------------

## Exam AWS Certified Security - Specialty SCS-C03 topic 1 question 31 discussion



A company has hundreds of AWS accounts in an organization in AWS Organizations. The company operates out of a single AWS Region. The company has a dedicated security tooling AWS account in the organization. The security tooling account is configured as the organization's delegated administrator for Amazon GuardDuty and AWS Security Hub. The company has configured the environment to automatically enable GuardDuty and Security Hub for existing AWS accounts and new AWS accounts.

The company is performing control tests on specific GuardDuty findings to make sure that the company's security team can detect and respond to security events. The security team launched an Amazon EC2 instance and attempted to run DNS requests against a test domain, example.com, to generate a DNS finding. However, the GuardDuty finding was never created in the Security Hub delegated administrator account.

Why was the finding was not created in the Security Hub delegated administrator account?

A. VPC flow logs were not turned on for the VPC where the EC2 instance was launched.

B. The VPC where the EC2 instance was launched had the DHCP option configured for a custom OpenDNS resolver.

C. The GuardDuty integration with Security Hub was never activated in the AWS account where the finding was generated.

D. Cross-Region aggregation in Security Hub was not configured. Forgot my password

**Answer: **

**Timestamp: **

[View on ExamTopics](https://www.examtopics.com/discussions/amazon/view/382897-exam-aws-certified-security-specialty-scs-c03-topic-1-question-31-discussion/)

Comments: gonzales Most Recent 7 months, 22 days ago Selected Answer: B DNS-based GuardDuty findings require the workload to use the VPC’s Route 53 Resolver, not a custom DNS server. upvoted 2 times Submit     Cancel ...

----------------------------------------

## Exam AWS Certified Security - Specialty SCS-C03 topic 1 question 32 discussion



A security engineer discovers that a company’s user passwords have no required minimum length. The company is using the following two identity providers (IdPs):

AWS Identity and Access Management (IAM) federated with on-premises Active Directory

Amazon Cognito user pools that contain the user database for an AWS Cloud application that the company developed

Which combination of actions should the security engineer take to implement a required minimum length for the passwords? (Choose two.)

A. Update the password length policy in the IAM configuration.

B. Update the password length policy in the Cognito configuration.

C. Update the password length policy in the on-premises Active Directory configuration

D. Create an SCP in AWS Organizations. Configure the SCP to enforce a minimum password length for IAM and Cognito.

E. Create an IAM policy that includes a condition for minimum password length. Enforce the policy for IAM and Cognito. Forgot my password

**Answer: **

**Timestamp: **

[View on ExamTopics](https://www.examtopics.com/discussions/amazon/view/382896-exam-aws-certified-security-specialty-scs-c03-topic-1-question-32-discussion/)

Comments: gonzales Most Recent 7 months, 22 days ago Selected Answer: BC You have two identity sources: 1. IAM federated with on-prem AD Passwords are NOT managed in IAM • IAM is just trusting AD • Authentication happens in Active Directory So: IAM password policy does NOTHING here You must update Active Directory upvoted 1 time Submit     Cancel ... bigdata2ml 8 months, 10 days ago Selected Answer: BC For Cognito Pool Users (CUP) - update in Cognito, for federated identities - Update it in AD upvoted 1 time Submit     Cancel ...

----------------------------------------

## Exam AWS Certified Security - Specialty SCS-C03 topic 1 question 33 discussion



A company has a web-based application that runs behind an Application Load Balancer (ALB). The application is experiencing a credential stuffing attack that is producing many failed login attempts. The attack is coming from many IP addresses. The login attempts are using a user agent string of a known mobile device emulator.

A security engineer needs to implement a solution to mitigate the credential stuffing attack. The solution must still allow legitimate logins to the application.

Which solution will meet these requirements?

A. Create an Amazon CloudWatch alarm that reacts to login attempts that contain the specified user agent string Add an Amazon Simple Notification Service (Amazon SNS) topic to the alarm.

B. Modify the inbound security group on the ALB to deny traffic from the IP addresses that are involved in the attack.

C. Create an AWS WAF web ACL for the ALB Create a custom rule that blocks requests that contain the user agent string of the device emulator.

D. Create an AWS WAF web ACL for the ALB. Create a custom rule that allows requests from legitimate user agent strings. Forgot my password

**Answer: **

**Timestamp: **

[View on ExamTopics](https://www.examtopics.com/discussions/amazon/view/382925-exam-aws-certified-security-specialty-scs-c03-topic-1-question-33-discussion/)

Comments: gonzales Most Recent 7 months, 22 days ago Selected Answer: C The attack: • is coming from many IP addresses • uses a known user-agent string • must still allow legitimate logins So the best mitigation is to block based on the known request characteristic at the ALB edge using AWS WAF. upvoted 1 time Submit     Cancel ...

----------------------------------------

## Exam AWS Certified Security - Specialty SCS-C03 topic 1 question 34 discussion



A company is operating an open-source software platform that is internet facing. The legacy software platform no longer receives security updates. The software platform operates using Amazon Route 53 weighted load balancing to send traffic to two Amazon EC2 instances that connect to an Amazon RDS cluster. A recent report suggests this software platform is vulnerable to SQL injection attacks, with samples of attacks provided. The company’s security engineer must secure this system against SQL injection attacks within 24 hours. The security engineer’s solution must involve the least amount of effort and maintain normal operations during implementation.

What should the security engineer do to meet these requirements?

A. Create an Application Load Balancer with the existing EC2 instances as a target group. Create an AWS WAF web ACL containing rules that protect the application from this attack, then apply it to the ALB. Test to ensure the vulnerability has been mitigated, then redirect the Route 53 records to point to the ALB. Update security groups on the EC2 instances to prevent direct access from the internet.

B. Create an Amazon CloudFront distribution specifying one EC2 instance as an origin. Create an AWS WAF web ACL containing rules that protect the application from this attack, then apply it to the distribution. Test to ensure the vulnerability has been mitigated, then redirect the Route 53 records to point to CloudFront.

C. Obtain the latest source code for the platform and make the necessary updates. Test the updated code to ensure that the vulnerability has been mitigated, then deploy the patched version of the platform to the EC2 instances.

D. Update the security group that is attached to the EC2 instances, removing access from the internet to the TCP port used by the SQL database. Create an AWS WAF web ACL containing rules that protect the application from this attack, then apply it to the EC2 instances. Test to ensure the vulnerability has been mitigated, then restore the security group to the original setting. Forgot my password

**Answer: **

**Timestamp: **

[View on ExamTopics](https://www.examtopics.com/discussions/amazon/view/382902-exam-aws-certified-security-specialty-scs-c03-topic-1-question-34-discussion/)

Comments: gonzales Most Recent 7 months, 22 days ago Selected Answer: A The requirements are: • protect against SQL injection quickly • do it within 24 hours • use the least effort • maintain normal operations during implementation Option A does exactly that: • puts an Application Load Balancer in front of the existing EC2 instances • attaches AWS WAF to the ALB • uses WAF managed/custom rules to block SQL injection patterns • lets you test first • then switch Route 53 to the ALB with minimal disruption • finally lock down the EC2 instances so they are not directly internet-accessible This is the safest, fastest, least-invasive fix. upvoted 2 times Submit     Cancel ...

----------------------------------------

## Exam AWS Certified Security - Specialty SCS-C03 topic 1 question 35 discussion



A security engineer recently rotated the host keys for an Amazon EC2 instance. The security engineer is trying to access the EC2 instance by using the EC2 Instance Connect feature. However, the security engineer receives an error for failed host key validation. Before the rotation of the host keys, EC2 Instance Connect worked correctly with this EC2 instance.

What should the security engineer do lo resolve this error?

A. Import the key material into AWS Key Management Service (AWS KMS).

B. Manually upload the new host key to the AWS trusted host keys database

C. Ensure that the AmazonSSMManagedInstanceCore policy is attached to the EC2 instance profile.

D. Create a new SSH key pair for the EC2 instance. Forgot my password

**Answer: **

**Timestamp: **

[View on ExamTopics](https://www.examtopics.com/discussions/amazon/view/382946-exam-aws-certified-security-specialty-scs-c03-topic-1-question-35-discussion/)

Comments: gonzales Most Recent 7 months, 22 days ago Selected Answer: B You need to: Update the trusted host key store with the new key So AWS / your client: • trusts the new identity • allows connection again upvoted 2 times Submit     Cancel ...

----------------------------------------

## Exam AWS Certified Security - Specialty SCS-C03 topic 1 question 36 discussion



A security engineer needs to implement a solution to identify any sensitive data that is stored in an Amazon S3 bucket. The solution must report on sensitive data in the S3 bucket by using an existing Amazon Simple Notification Service (Amazon SNS) topic.

Which solution will meet these requirements with the LEAST implementation effort?

A. Enable AWS Config. Configure AWS Config to monitor for sensitive data in the S3 bucket and to send notifications to the SNS topic.

B. Create an AWS Lambda function to scan the S3 bucket for sensitive data that matches a pattern. Program the Lambda function to send notifications to the SNS topic.

C. Configure Amazon Macie to use managed data identifiers to identify and categorize sensitive data. Create an Amazon EventBridge rule to send notifications to the SNS topic.

D. Enable Amazon GuardDuty. Configure AWS CloudTrail S3 data events. Create an Amazon CloudWatch alarm that reacts to GuardDuty findings and sends notifications to the SNS topic. Forgot my password

**Answer: **

**Timestamp: **

[View on ExamTopics](https://www.examtopics.com/discussions/amazon/view/382930-exam-aws-certified-security-specialty-scs-c03-topic-1-question-36-discussion/)

Comments: gonzales Most Recent 8 months, 0 days ago Selected Answer: C Macie: • automatically scans S3 • detects sensitive data (PII, credentials, etc.) • uses managed data identifiers (no coding) • produces findings out of the box upvoted 1 time Submit     Cancel ...

----------------------------------------

## Exam AWS Certified Security - Specialty SCS-C03 topic 1 question 37 discussion



A company has a platform that is divided into 12 AWS accounts under the same organization in AWS Organizations. Many of these accounts use Amazon API Gateway to expose APIs to the company's frontend applications. The company needs to protect the ousting APIs and any resources that will be deployed in the future against common SQL injection and bot attacks.

Which solution will meet these requirements with the LEAST operational overhead?

A. Create an AWS WAF web ACL for each API. Include managed rules to block SQL injection and bot attacks. Use AWS Config to detect new resources that do not have a web ACL. Configure a remediation action to provision a web ACL for these resources.

B. Use AWS Firewall Manager to create an AWS WAF policy. Configure the policy to include the AWS Bot Control and SQL database managed rule groups. Set the policy scope to include the API Gateway stage as the resource type.

C. Create an AWS Service Catalog product for an AWS WAF web ACL that includes rules to block SQL injection and bot attacks. Use AWS Config to detect new resources that do not have this product applied. Configure a remediation action to provision a web ACL for these resources.

D. Use AWS Security Hub to detect unprotected resources and to send the findings as custom action events to Amazon EventBridge. Create an AWS Lambda function for these events to provision an AWS WAF web ACL for the unprotected resources. Include managed rules to block SQL injection and bot attacks. Forgot my password

**Answer: **

**Timestamp: **

[View on ExamTopics](https://www.examtopics.com/discussions/amazon/view/382909-exam-aws-certified-security-specialty-scs-c03-topic-1-question-37-discussion/)

Comments: gonzales Most Recent 8 months, 0 days ago Selected Answer: B AWS Firewall Manager: • centrally manages WAF across accounts (via AWS Organizations) • automatically applies policies to: • existing resources • newly created resources upvoted 1 time Submit     Cancel ... bigdata2ml 8 months, 10 days ago Selected Answer: B AWS Firewall Manager - applies the changes to the entire org and automatically applies to future APIs upvoted 1 time Submit     Cancel ...

----------------------------------------

## Exam AWS Certified Security - Specialty SCS-C03 topic 1 question 38 discussion



A company is implementing a new application in a new AWS account. A VPC and subnets have been created for the application. The application has been peered to an existing VPC in another account in the same AWS Region for database access Amazon EC2 instances will regularly be created and terminated in the application VPC, but only some of them will need access to the databases in the peered VPC over TCP port 1521. A security engineer must ensure that only the EC2 instances that need access to the databases can access them through the network.

How can the security engineer implement this solution?

A. Create a new security group in the database VPC and create an inbound rule that allows all traffic from the IP address range of the application VPC. Add a new network ACL rule on the database subnets. Configure the rule to TCP port 1521 from the IP address range of the application VPC. Attach the new security group to the database instances that the application instances need to access.

B. Create a new security group in the application VPC with an inbound rule that allows the IP address range of the database VPC over TCP port 1521. Create a new security group in the database VPC with an inbound rule that allows the IP address range of the application VPC over port 1521. Attach the new security group to the database instances and the application instances that need database access.

C. Create a new security group in the application VPC with no inbound rules. Create a new security group in the database VPC with an inbound rule that allows TCP port 1521 from the new application security group in the application VPAttach the application security group to the application instances that need database access and attach the database security group to the database instances.

D. Create a new security group in the application VPC with an inbound rule that allows the IP address range of the database VPC over TCP port 1521. Add a new network ACL rule on the database subnets. Configure the rule to allow all traffic from the IP address range of the application VPC. Attach the new security group to the application instances that need database access. Forgot my password

**Answer: **

**Timestamp: **

[View on ExamTopics](https://www.examtopics.com/discussions/amazon/view/382942-exam-aws-certified-security-specialty-scs-c03-topic-1-question-38-discussion/)

Comments: CanekSystems Most Recent 4 months, 12 days ago Selected Answer: C C follows the principle of the least privilege and zero trust: *Network Connectivity: The VPCs in both accounts must be connected via an active VPC Peering Connection, an AWS Transit Gateway configuration, or a Cloud WAN Core Network setup. * Same Region: Cross-account security group referencing only works if both VPCs reside within the same AWS Region. It fails across different regions. Correct Format on SG referencing: You must reference the group by prefixing it with the external owner's 12-digit AWS account ID (e.g., 123456789012/sg-0123456789abcdef0) upvoted 1 time Submit     Cancel ... gonzales 8 months, 0 days ago Selected Answer: C You need to allow only specific EC2 instances in the application VPC to reach the databases in the peered VPC on TCP 1521. The cleanest way is: • create a dedicated security group in the application VPC • attach it only to the EC2 instances that need DB access • create a security group on the database side • allow TCP 1521 from that application security group • attach that DB security group to the database instances This gives you instance-level control without relying on broad CIDR ranges, which is ideal when instances are created and terminated regularly. upvoted 1 time Submit     Cancel ... Ryan1002 8 months, 7 days ago Selected Answer: C I will go for option C. upvoted 1 time Submit     Cancel ... Joan971 8 months, 11 days ago Selected Answer: C Security Group Referencing: References the application security group ID in the database security group inbound rule. This works across VPC peering in the same Region and is more secure than IP ranges. Selective Access: Only EC2 instances with the application security group attached can access databases. You control this at instance launch/termination time. Dynamic Scaling: As instances come and go, you simply attach the security group to only those needing database access. No IP range management needed. Stateful Security Groups: The application security group needs no inbound rules (returns traffic is allowed automatically). The database security group only allows port 1521 from specifically authorized instances. Principle of Least Privilege: Unlike options using CIDR blocks that allow the entire VPC, this allows only explicitly tagged instances. upvoted 1 time Submit     Cancel ... koffeebrown 8 months, 23 days ago Selected Answer: A AWS explanation: With VPC peering, you typically control DB access using security groups and (if required) network ACLs based on CIDR ranges (because security group referencing across peering is not generally available). Allow the database port (TCP 1521) from the application VPC CIDR range at the DB side, and ensure the subnet NACLs allow the required traffic. https://docs.aws.amazon.com/vpc/latest/userguide/vpc-network-acls.html https://docs.aws.amazon.com/vpc/latest/peering/what-is-vpc-peering.html https://docs.aws.amazon.com/vpc/latest/userguide/security-groups.html upvoted 1 time Submit     Cancel ...

----------------------------------------

## Exam AWS Certified Security - Specialty SCS-C03 topic 1 question 39 discussion



A company has multiple accounts in the AWS Cloud. Users in the developer account need to have access to specific resources in the production account.

What is the MOST secure way to provide this access?

A. Create one IAM user in the production account Grant the appropriate permissions to the resources that are needed. Share the password only with the users that need access.

B. Create cross-account access with an IAM role in the developer account. Grant the appropriate permissions to this role. Allow users in the developer account to assume this role to access the production resources.

C. Create cross-account access with an IAM user account in the production account. Grant the appropriate permissions to this user account. Allow users in the developer account to use this user account to access the production resources.

D. Create cross-account access with an IAM role in the production account. Grant the appropriate permissions to this rote Allow users in the developer account to assume this role to access the production resources. Forgot my password

**Answer: **

**Timestamp: **

[View on ExamTopics](https://www.examtopics.com/discussions/amazon/view/382916-exam-aws-certified-security-specialty-scs-c03-topic-1-question-39-discussion/)

Comments: gonzales Most Recent 8 months, 0 days ago Selected Answer: D Production account controls: • who can access • what they can do upvoted 2 times Submit     Cancel ...

----------------------------------------

## Exam AWS Certified Security - Specialty SCS-C03 topic 1 question 40 discussion



A healthcare company stares mare than 1 million patient records in an Amazon S3 bucket. The patient records include personally identifiable information (Pit). The S3 bucket contains hundreds of terabytes of data.

A security engineer receives an alert that was triggered by an Amazon GuardDuty Exfiltration:S3/AnomalousBehavior finding. The security engineer confirms that an attacker is using temporary credentials that were obtained from a compromised Amazon EC2 instance that has s3:GetObject permissions for the S3 bucket. The attacker has begun downloading the contents of the bucket. The security engineer contacts a development team. The development team will require 4 hours to implement and deploy a fix.

The security engineer must take immediate action to prevent the attacker from downloading more data from the S3 bucket.

Which solution will moot this requirement?

A. Revoke the temporary session that is associated with the instance profile that is attached to the EC2 instance.

B. Quarantine the EC2 instance by replacing the existing security group with a new security group that has no rules applied.

C. Enable Amazon Made on the S3 bucket. Configure the managed data identifiers for personally identifiable information (PII). Enable S3 Object Lock on objects that Macie flags.

D. Apply an S3 bucket policy temporarily. Configure the policy to deny read access for all principals to block downloads while the development team address the vulnerability. Forgot my password

**Answer: **

**Timestamp: **

[View on ExamTopics](https://www.examtopics.com/discussions/amazon/view/382947-exam-aws-certified-security-specialty-scs-c03-topic-1-question-40-discussion/)

Comments: giancesarini2023 Most Recent 5 months, 5 days ago Selected Answer: D To immediately stop further downloads, apply a temporary S3 bucket policy with Deny for read access (s3:GetObject) to all principals. This blocks the attacker while the development team fixes the vulnerability. upvoted 1 time Submit     Cancel ... 1e22522 6 months, 5 days ago Selected Answer: D DCorrect answer: D. Apply an S3 bucket policy temporarily. Configure the policy to deny read access for all principals to block downloads while the development team addresses the vulnerability. upvoted 1 time Submit     Cancel ... d3717d5 6 months, 20 days ago Selected Answer: D it is a security breach - one must all downloads from S3. Open that bucket's policy and deny all gets. Can probably run aws cli script real quick and in seconds it is done, until other guys take 4 hours to fix it permanently, once fixed you remove your deny all gets. upvoted 2 times Submit     Cancel ... gonzales 8 months, 0 days ago Selected Answer: D NO ONE can download data (including attacker). not A: • Not instant / reliable • attacker might: • already have cached creds • re-assume role upvoted 2 times Submit     Cancel ... Ryan1002 8 months, 7 days ago Selected Answer: A Revoke the temporary session that is associated with the instance profile should work. upvoted 2 times Submit     Cancel ... Joan971 8 months, 11 days ago Selected Answer: B Replaces the instance's security group with one that has no inbound or outbound rules Immediately cuts all network connectivity from the compromised instance Attacker cannot reach S3 API endpoints to continue downloads Takes effect in seconds upvoted 1 time Submit     Cancel ... Liongeek 8 months, 11 days ago Selected Answer: A It's A. https://docs.aws.amazon.com/IAM/latest/UserGuide/id_roles_use_revoke-sessions.html Option D works but it would block all, not just the role upvoted 4 times Submit     Cancel ... 18641c6 9 months, 0 days ago Selected Answer: D I doubt that A is correct, because there is a thing called &quot;default credential provider chain&quot;. According to the documentation: https://docs.aws.amazon.com/boto3/latest/guide/credentials.html the instance role has the &quot;lowest priority&quot; for credential lookup. So, if there are access keys on the EC2 instance, they take precedence. That's why I would pick answer D. It's more secure upvoted 3 times Submit     Cancel ...

----------------------------------------

## Exam AWS Certified Security - Specialty SCS-C03 topic 1 question 41 discussion



A company is investigating an increase in its AWS monthly bill. The company discovers that bad actors compromised some Amazon EC2 instances and served webpages for a large email phishing campaign.

A security engineer must implement a solution to monitor for cost increases in the future to help detect malicious activity.

Which solution will offer the company the EARLIEST detection of cost increases?

A. Create an Amazon EventBridge rule that invokes an AWS Lambda function hourly. Program the Lambda function to download an AWS usage report from AWS Data Exports about usage of all services. Program the Lambda function to analyze the report and to send a notification when anomalies are detected.

B. Create a cost monitor in AWS Cost Anomaly Detection. Configure an individual alert to notify an Amazon Simple Notification Service (Amazon SNS) topic when the percentage above the expected cost exceeds a threshold.

C. Review AWS Cost Explorer daily to detect anomalies in cost from prior months. Review the usage of any services that experience a significant cost increase from prior months.

D. Capture VPC flow logs from the VPC where the EC2 instances run. Use a third-party network analysis tool to analyze the flow logs and to detect anomalies in network traffic that might increase cost. Forgot my password

**Answer: **

**Timestamp: **

[View on ExamTopics](https://www.examtopics.com/discussions/amazon/view/382931-exam-aws-certified-security-specialty-scs-c03-topic-1-question-41-discussion/)

Comments: gonzales Most Recent 8 months, 0 days ago Selected Answer: B AWS Cost Anomaly Detection: • uses ML models • monitors cost continuously (near real-time trends) • detects unexpected spikes early • sends alerts via SNS upvoted 1 time Submit     Cancel ...

----------------------------------------

## Exam AWS Certified Security - Specialty SCS-C03 topic 1 question 42 discussion



A company uses Amazon API Gateway to present REST APIs to users. An API developer wants to analyze API access patterns without the need to parse the log files.

Which combination of steps will meet these requirements with the LEAST effort? (Choose two.)

A. Configure access logging for the required API stage.

B. Configure an AWS CloudTrail trail destination for API Gateway events. Configure filters on the userIdentity, userAgent, and sourceIPAddress fields.

C. Configure an Amazon S3 destination for API Gateway logs. Run Amazon Athena queries to analyze API access information.

D. Use Amazon CloudWatch Logs Insights to analyze API access information.

E. Select the Enable Detailed CloudWatch Metrics option on the required API stage. Forgot my password

**Answer: **

**Timestamp: **

[View on ExamTopics](https://www.examtopics.com/discussions/amazon/view/382898-exam-aws-certified-security-specialty-scs-c03-topic-1-question-42-discussion/)

Comments: gonzales Most Recent 8 months, 0 days ago Selected Answer: AD API Gateway → CloudWatch Logs CloudWatch Logs Insights: Query logs directly NO manual parsing NO external tools e.g. fields @timestamp, @message | filter status = 200 | stats count() by sourceIp upvoted 2 times Submit     Cancel ... bigdata2ml 8 months, 10 days ago Selected Answer: AD To analyze API access information using Amazon CloudWatch Logs Insights, you must first ensure that API logging is enabled and configured to send logs to a CloudWatch log group. Once logs are available, you can use the powerful, purpose-built Logs Insights query language in the CloudWatch console to filter, aggregate, and visualize the data upvoted 1 time Submit     Cancel ...

----------------------------------------

## Exam AWS Certified Security - Specialty SCS-C03 topic 1 question 43 discussion



A startup company is using a single AWS account that has resources in a single AWS Region. A security engineer configures an AWS CloudTrail trail in the same Region to deliver log files to an Amazon S3 bucket by using the AWS CLI.

Because of expansion, the company adds resources in multiple Regions. The security engineer notices that the logs from the new Regions are not reaching the S3 bucket.

What should the security engineer do to fix this issue with the LEAST amount of operational overhead?

A. Create a new CloudTrail trail. Select the new Regions where the company added resources.

B. Change the S3 bucket to receive notifications to track all actions from all Regions.

C. Create a new CloudTrail trail that applies to all Regions.

D. Change the existing CloudTrail trail so that it applies to all Regions. Forgot my password

**Answer: **

**Timestamp: **

[View on ExamTopics](https://www.examtopics.com/discussions/amazon/view/382915-exam-aws-certified-security-specialty-scs-c03-topic-1-question-43-discussion/)

Comments: gonzales Most Recent 8 months, 0 days ago Selected Answer: D Modify existing trail → enable &quot;All Regions&quot; • no duplication • no new resources • minimal effort • consistent logging upvoted 1 time Submit     Cancel ... bigdata2ml 8 months, 10 days ago Selected Answer: D To change an existing CloudTrail to all-region coverage, use the AWS CLI command aws cloudtrail update-trail --name &lt;trail_name&gt; --is-multi-region-trail. This updates the configuration, creating &quot;shadow&quot; trails in other regions to ensure all-region logging. Alternatively, in the console, edit the trail, set &quot;Apply to all regions&quot; to Yes, and save upvoted 1 time Submit     Cancel ...

----------------------------------------

## Exam AWS Certified Security - Specialty SCS-C03 topic 1 question 44 discussion



A security team manages a company's AWS Key Management Service (AWS KMS) customer managed keys. Only members of the security learn can administer the KMS keys. The company’s application team has a software process that needs temporary access to the keys occasionally. The security team needs to provide the application team's software process with access to the keys.

Which solution will meet these requirements with the LEAST operational overhead?

A. Export the KMS key material to an on-premises hardware security module (HSM). Give the application team access to the key material.

B. Edit the key policy that grants the security team access to the KMS keys by adding the application team as principals. Revert this change when the application team no longer needs access

C. Create a key grant to allow the application team to use the KMS keys. Revoke the grant when the application team no longer needs access.

D. Create a new KMS key by generating key material on promises. Import the key material to AWS KMS whenever the application team needs access. Grant the application team permissions to use the key. Forgot my password

**Answer: **

**Timestamp: **

[View on ExamTopics](https://www.examtopics.com/discussions/amazon/view/382900-exam-aws-certified-security-specialty-scs-c03-topic-1-question-44-discussion/)

Comments: gonzales Most Recent 8 months, 0 days ago Selected Answer: C KMS grants are specifically built for: - Temporary access - Fine-grained permissions - Easy revoke - No policy changes needed upvoted 1 time Submit     Cancel ... bigdata2ml 8 months, 10 days ago Selected Answer: C A KMS grant is a policy instrument that provides temporary, granular permissions for an IAM principal (such as an application team's role) to use a specific KMS key for operations like Encrypt, Decrypt, or GenerateDataKey without altering the key policy. It is best used for delegating access to services or temporary, programmatic access. upvoted 1 time Submit     Cancel ...

----------------------------------------

## Exam AWS Certified Security - Specialty SCS-C03 topic 1 question 45 discussion



A company is running a new workload across accounts that are in an organization in AWS Organizations. All running resources must have a tag of CostCenter, and the tag must have one of three approved values. The company must enforce this policy and must prevent any changes of the CostCenter tag to a non-approved value.

Which solution will meet these requirements?

A. Create an AWS Config Custom Policy rule by using AWS CloudFormatlon Guard. Include the tag key of CostCenter and the approved values. Create an SCP that denies the creation of resources when the value of the aws:RequestTagCostCenter condition key is not one of the three approved values.

B. Create an AWS CloudTrail trail. Create an Amazon EventBridge rule that includes a rule statement that matches the creation of new resources. Configure the EventBridge rule to invoke an AWS Lambda function that checks for the CostCenter tag. Program the Lambda function to block creation in case of a noncompliant value.

C. Enable tag policies for the organization. Create a tag policy that specifies a tag key of CostCenter and the approved values. Configure the policy to enforce noncompliant operations. Create an SCP that denies the creation of resources when the aws:RequestTag.CostCenter condition key has a null value.

D. Enable tag policies for the organization. Create a tag policy that specifies a tag key of CostCenter and the approved values. Create an Amazon EventBridge rule that invokes an AWS Lambda function when a noncompliant tag is created. Program the Lambda function to block changes to the tag. Forgot my password

**Answer: **

**Timestamp: **

[View on ExamTopics](https://www.examtopics.com/discussions/amazon/view/382935-exam-aws-certified-security-specialty-scs-c03-topic-1-question-45-discussion/)

Comments: CanekSystems Most Recent 4 months, 8 days ago Selected Answer: C CloudFormation Guard is for policy as code service, in this case it is true it can be integrated along with AWS Config. But that's why we have Tag Policies at AWS organizations level, we can define the 3 allowed values and even the null, on &quot;on going basis&quot;, along with SCP of course. upvoted 1 time Submit     Cancel ... 9039a43 4 months, 9 days ago Selected Answer: A A is correct. C is incorrect because tag policies cannot enforce tag values. upvoted 1 time Submit     Cancel ... giancesarini2023 5 months, 5 days ago Selected Answer: C Use AWS Organizations Tag Policies to define the approved CostCenter tag values and enforce compliant tagging operations. Use an SCP to deny resource creation when the CostCenter tag is missing. upvoted 1 time Submit     Cancel ... gonzales 8 months, 0 days ago Selected Answer: C must prevent so: SCP → tag MUST exist Tag Policy → tag value MUST be valid upvoted 1 time Submit     Cancel ... bigdata2ml 8 months, 10 days ago Selected Answer: C AWS Tag Policies (in conjunction with AWS Organizations) can enforce both tag keys and specific, allowed values to ensure consistency across your accounts. When in enforcement mode, they prevent users from creating or updating resources with non-compliant tags. SCP detects resources without tag (tag value = NULL) and remove the resource upvoted 1 time Submit     Cancel ... Joan971 8 months, 11 days ago Selected Answer: C Tag Policies: AWS Organizations feature specifically designed for this use case Can specify allowed tag keys and values &quot;Enforce noncompliant operations&quot; = prevents creation of resources that don't comply Works at the organization level across all accounts SCP with null value check: Ensures CostCenter tag cannot be missing (null check) Combined with tag policy enforcement, covers both presence and valid values upvoted 1 time Submit     Cancel ... Liongeek 8 months, 18 days ago Selected Answer: C Opt C: Tag must exist, tag must be one of the allowed values. upvoted 1 time Submit     Cancel ... 18641c6 8 months, 30 days ago Selected Answer: A A makes sense, since the question states &quot;non-approved value&quot;, while C says null, which is slightly different. upvoted 1 time Submit     Cancel ... himawari123 9 months, 16 days ago Selected Answer: C null no??? upvoted 1 time Submit     Cancel ...

----------------------------------------

## Exam AWS Certified Security - Specialty SCS-C03 topic 1 question 46 discussion



A company uses AWS Organizations. The company has learns that use an AWS CloudHSM hardware security module (HSM) that is hosted in a central AWS account. One of the teams creates its own new dedicated AWS account and wants to use the HSM that is hosted in the central account.

How should a security engineer share the HSM that is hosted in the central account with the new dedicated account?

A. Use AWS Resource Access Manager (AWS RAM) to share the VPC subnet ID of the HSM that is hosted in the central account with the new dedicated account. Configure the CloudHSM security group to accept inbound traffic from the private IP addresses of client instances in the new dedicated account.

B. Use AWS Identity and Access Management (IAM) to create a cross-account role to access the CloudHSM cluster that is in the central account. Create a new IAM user in the new dedicated account. Assign the cross-account role to the new IAM user.

C. Use AWS IAM Identity Center to create an AWS Security Token Service (AWS STS) token to authenticate from the new dedicated account to the central account. Use the cross-account permissions that are assigned to the STS token to invoke an operation on the HSM in the central account.

D. Use AWS Resource Access Manager (AWS RAM) to share the ID of the HSM that is hosted in the central account with the new dedicated account. Configure the CloudHSM security group to accept inbound traffic from the private IP addresses of client instances in the now dedicated account. Forgot my password

**Answer: **

**Timestamp: **

[View on ExamTopics](https://www.examtopics.com/discussions/amazon/view/382939-exam-aws-certified-security-specialty-scs-c03-topic-1-question-46-discussion/)

Comments: gonzales Most Recent 7 months, 29 days ago Selected Answer: A CloudHSM cross-account use is done through network-level sharing, not by assuming an IAM role to operate the HSM remotely. The HSM cluster lives in a VPC in the central account, and client instances need network access to the HSM ENIs. AWS RAM can share the subnets with another account inside the organization, and the central account’s CloudHSM security group must allow inbound traffic from the client instances that will connect. upvoted 1 time Submit     Cancel ... bigdata2ml 8 months, 10 days ago Selected Answer: A Only Subnet can be shared using RAM with new account in same Org To share an AWS CloudHSM cluster with a new AWS account, use AWS Resource Access Manager (AWS RAM) to share the HSM-enabled subnet or use backups to restore a new cluster. You must enable sharing within your AWS Organization in the RAM console, then share the specific subnet or cluster resources with the target account. Steps to Share CloudHSM with Another Account Enable Sharing: In the source account (where the HSM exists), open the AWS RAM console, go to Settings, and enable sharing within your AWS Organization upvoted 1 time Submit     Cancel ... Liongeek 8 months, 18 days ago Selected Answer: A You cannot share CloudHSM using RAM, but you can share the subnet that hosts the CloudHSM upvoted 1 time Submit     Cancel ... 18641c6 8 months, 30 days ago Selected Answer: A This article explains the steps: https://repost.aws/knowledge-center/cloudhsm-share-clusters upvoted 1 time Submit     Cancel ...

----------------------------------------

## Exam AWS Certified Security - Specialty SCS-C03 topic 1 question 47 discussion



A company uses AWS Config rules to identify Amazon S3 buckets that are not compliant with the company’s data protection policy. The S3 buckets are hosted in several AWS Regions and several AWS accounts. The accounts are in an organization in AWS Organizations.

The company needs a solution to remediate the organization’s existing noncompliant S3 buckets and any noncompliant S3 buckets that are created in the future.

Which solution will meet these requirements?

A. Deploy an AWS Config aggregator with organization-wide resource data aggregation. Create an AWS Lambda function that responds to AWS Config findings of noncompliant S3 buckets by deleting or reconfiguring the S3 buckets.

B. Deploy an AWS Config aggregator with organization-wide resource data aggregation. Create an SCP that contains a Deny statement that prevents the creation of new noncompliant S3 buckets. Apply the SCP to all OUs in the organization.

C. Deploy an AWS Config aggregator that scopes only the accounts and Regions that the company currently uses. Create an AWS Lambda function that responds to AWS Config findings of noncompliant S3 buckets by deleting or reconfiguring the S3 buckets.

D. Deploy an AWS Config aggregator that scopes only the accounts and Regions that the company currently uses. Create an SCP that contains a Deny statement that prevents the creation of new noncompliant S3 buckets. Apply the SCP to all OUs in the organization. Forgot my password

**Answer: **

**Timestamp: **

[View on ExamTopics](https://www.examtopics.com/discussions/amazon/view/382903-exam-aws-certified-security-specialty-scs-c03-topic-1-question-47-discussion/)

Comments: gonzales Most Recent 7 months, 29 days ago Selected Answer: A The requirement has two parts: - Fix existing noncompliant S3 buckets - Automatically remediate future ones Remediate is the keyword. upvoted 1 time Submit     Cancel ... bigdata2ml 8 months, 10 days ago Selected Answer: A organization-wide resource data aggregation and remediate existing buckets using Lambda upvoted 1 time Submit     Cancel ...

----------------------------------------

## Exam AWS Certified Security - Specialty SCS-C03 topic 1 question 48 discussion



A company has contracted with a third party to audit several AWS accounts. To enable the audit, cross-account IAM roles have been created in each account targeted for audit. The auditor is having trouble accessing some of the accounts.

Which of the following may be causing this problem? (Choose three.)

A. The external ID used by the auditor is missing or incorrect.

B. The auditor is using the incorrect password.

C. The auditor has not been granted sts:AssumeRole for the role in the destination account.

D. The Amazon EC2 role used by the auditor must be set to the destination account role.

E. The secret key used by the auditor is missing or incorrect.

F. The role ARN used by the auditor is missing or incorrect. Forgot my password

**Answer: **

**Timestamp: **

[View on ExamTopics](https://www.examtopics.com/discussions/amazon/view/382937-exam-aws-certified-security-specialty-scs-c03-topic-1-question-48-discussion/)

Comments: gonzales Most Recent 7 months, 29 days ago Selected Answer: ACF Cross-account access requires: 1. Correct role ARN 2. Trust policy allows caller 3. Caller has sts:AssumeRole 4. External ID matches (if used) upvoted 2 times Submit     Cancel ...

----------------------------------------

## Exam AWS Certified Security - Specialty SCS-C03 topic 1 question 49 discussion



A company uses AWS Organizations to manage its AWS accounts. The company has a development account and a production account. An auditor has requested evidence that the production account workloads are resilient to disruption. The company needs a solution that improves the resilience of each production account workload.

Which solution will meet these requirements?

A. Use AWS Audit Manager to create a new assessment based on AWS Operational Best Practices in the production account. After the assessments are finished, provide the auditor with direct access to the reports.

B. Review the architecture by using the AWS Well-Architected Tool. Use the Well-Architected Framework and focus on the Operational Excellence, Security, and Reliability pillars. Document and implement mitigations for the identified risks. Provide the documentation to the auditor.

C. Use Amazon Inspector with a multi-account environment to assess the production account workloads for vulnerabilities. Create a CIS scan in Amazon Inspector. Configure the CIS scan as a one time scan with Benchmark Level 2. After the scan is finished, download the PDF report and provide the report to the auditor.

D. Use the AWS Fault Injection Service to create experiments in the development account for each workload. Adjust the configuration and architecture of the workloads to improve resilience. Run the experiments again. Download the PDF reports and provide the reports to the auditor. Forgot my password

**Answer: **

**Timestamp: **

[View on ExamTopics](https://www.examtopics.com/discussions/amazon/view/382934-exam-aws-certified-security-specialty-scs-c03-topic-1-question-49-discussion/)

Comments: giancesarini2023 Most Recent 5 months, 5 days ago Selected Answer: B AWS Well-Architected Tool reviews production workloads, identifies resilience risks, and provides evidence for the auditor. upvoted 1 time Submit     Cancel ... gonzales 7 months, 29 days ago Selected Answer: B AWS Well-Architected Tool - Reviewing architecture - Identifying risks - Improving resilience upvoted 2 times Submit     Cancel ... bigdata2ml 8 months, 10 days ago Selected Answer: A To create a new assessment in AWS Audit Manager using the AWS Operational Best Practices framework in a production account, navigate to the console, choose &quot;Create assessment,&quot; name it, select the &quot;AWS Operational Best Practices&quot; framework, and designate an S3 bucket for reports. Audit Manager then automatically collects evidence. B - did n't talk about resiliency upvoted 1 time Submit     Cancel ...

----------------------------------------

## Exam AWS Certified Security - Specialty SCS-C03 topic 1 question 50 discussion



A company is migrating one of its legacy systems from an on-premises data center to AWS. The application server will run on AWS, but the database must remain in the on-premises data center for compliance reasons. The database is sensitive to network latency. Additionally, the data that travels between the on-premises data center and AWS must have IPsec encryption.

Which combination of AWS solutions will meet these requirements? (Choose two.)

A. AWS Site-to-Site VPN

B. AWS Direct Connect

C. AWS VPN CloudHub

D. VPC peering

E. NAT gateway Forgot my password

**Answer: **

**Timestamp: **

[View on ExamTopics](https://www.examtopics.com/discussions/amazon/view/382943-exam-aws-certified-security-specialty-scs-c03-topic-1-question-50-discussion/)

Comments: gonzales Most Recent 7 months, 29 days ago Selected Answer: AB Database is sensitive to latency - &gt; Direct Connect Must use IPsec encryption -&gt; Site-to-Site VPN upvoted 1 time Submit     Cancel ...

----------------------------------------

## Exam AWS Certified Security - Specialty SCS-C03 topic 1 question 51 discussion



A company has enabled AWS Config for its organization in AWS Organizations. The company has deployed hundreds of Amazon S3 buckets across the organization.

A security engineer needs to identify any S3 buckets that are not encrypted with AWS Key Management Service (AWS KMS). The security engineer also must prevent objects that are not encrypted with AWS KMS from being uploaded to the S3 buckets.

Which solution will meet these requirements?

A. Use the s3-default-encryplion-kms AWS. Config managed rule to identity unencrypted S3 buckets. Create an SCP to allow the s3:PutObject action only when the object is encrypted with AWS KMS.

B. Use the s3-default-encryption-kms AWS. Config managed rule to identify unencrypted S3 buckets. Create bucket policies for each S3 bucket to deny the s3:PutObject action only when the object has server-since encryption with S3 managed keys (SSE-S3).

C. Use the s3-bucket-ssl-requests-only AWS Config managed rule to identify unencrypted S3 buckets. Create an SCP to allow the s3:PutObject action only when the object is encrypted with AWS KMS.

D. Use the s3-bucket-ssl-requests-only AWS Config managed rule to identify unencrypted S3 buckets. Create bucket policies for each S3 bucket to allow the s3:PutObject action only when the object is encrypted with AWS KMS. Forgot my password

**Answer: **

**Timestamp: **

[View on ExamTopics](https://www.examtopics.com/discussions/amazon/view/382933-exam-aws-certified-security-specialty-scs-c03-topic-1-question-51-discussion/)

Comments: OCHT Most Recent 5 months, 29 days ago Selected Answer: A Why Option B is incorrect: Although it uses the correct Config rule, the bucket policy description is wrong. It says to “deny … only when the object has SSE-S3”, which would actually allow unencrypted uploads and KMS uploads — the opposite of what is required. Creating individual bucket policies for hundreds of buckets is also not practical. Why Options C and D are incorrect: Both use the wrong Config rule (s3-bucket-ssl-requests-only). Option D also uses an ineffective “allow only” logic in bucket policies (which does not enforce denial of non-compliant uploads). upvoted 1 time Submit     Cancel ... gonzales 7 months, 29 days ago Selected Answer: A - Identify buckets not using KMS encryption - Prevent uploads of objects unless they use AWS KMS encryption. The AWS Config managed rule s3-default-encryption-kms checks whether an S3 bucket has default encryption configured with AWS KMS, so it fits the detection requirement. Prevent non-KMS uploads. upvoted 1 time Submit     Cancel ...

----------------------------------------

## Exam AWS Certified Security - Specialty SCS-C03 topic 1 question 52 discussion



A company runs an application on a fleet of Amazon EC2 instances. The company can remove instances from the fleet without risk to the application. All EC2 instances use the same security group named ProdFleet. Amazon GuardDuty and AWS Config are active in the company's AWS account.

A security engineer needs to provide a solution that will prevent an EC2 instance from sending outbound traffic if GuardDuty generates a cryptocurrency finding event. The security engineer creates a new security group named isolate that contains no outbound rules. The security engineer configures an AWS Lambda function to remove an EC2 instance from the ProdFleet security group and add it to the isolate security group.

Which additional step will meet this requirement?

A. Configure GuardDuty to directly invoke the Lambda function if GuardDuty generates a CryptoCurrency:EC2/* finding event.

B. Configure an AWS Config rule that invokes the Lambda function if a CryptoCurroncy:EC2/* configuration change event occurs for an EC2 instance.

C. Configure an Amazon EventBridge rule that invokes the Lambda function if GuardDuty generates a CryptoCurrency:EC2/* finding event.

D. Configure an Amazon EventBridge rule that invokes the Lambda function if AWS Config detects a CryptoCurrency:ЕС2/* configuration change event for an EC2 instance. Forgot my password

**Answer: **

**Timestamp: **

[View on ExamTopics](https://www.examtopics.com/discussions/amazon/view/382940-exam-aws-certified-security-specialty-scs-c03-topic-1-question-52-discussion/)

Comments: gonzales Most Recent 7 months, 29 days ago Selected Answer: C GuardDuty finding (CryptoCurrency:EC2/*) ↓ EventBridge rule matches finding ↓ Lambda runs ↓ Instance moved to isolate security group ↓ No outbound traffic upvoted 1 time Submit     Cancel ...

----------------------------------------

## Exam AWS Certified Security - Specialty SCS-C03 topic 1 question 53 discussion



A company uses Amazon EC2 instances to host frontend services behind an Application Load Balancer. Amazon Elastic Block Store (Amazon EBS) volumes are attached to the EC2 instances. The company uses Amazon S3 buckets to store large files for images and music.

The company has implemented a security architecture on AWS to prevent, identify, and isolate potential ransomware attacks. The company now wants to further reduce risk.

A security engineer must develop a disaster recovery solution that can recover to normal operations if an attacker bypasses preventive and detective controls. The solution must meet an RPO of 1 hour.

Which solution will meet these requirements?

A. Use AWS Backup to create backups of the EC2 instances and S3 buckets every hour. Create AWS CloudFormation templates that replicate existing architecture components. Use AWS CodeCommit to store the CloudFormation templates alongside application configuration code.

B. Use AWS Backup to create backups of the EBS volumes and S3 objects every day. Use Amazon Security Lake to create a centralized data lake for AWS CloudTrail logs and VPC flow logs. Use the logs for automated response.

C. Use Amazon Security Lake to create a centralized data lake for AWS CloudTrail logs and VPC flow logs. Use the logs for automated response. Enable AWS Security Hub to establish a single location for recovery procedures. Create AWS CloudFormation templates that replicate existing architecture components. Use AWS CodeCommit to store the CloudFormation templates alongside application configuration code.

D. Create EBS snapshots every 4 hours. Enable Amazon GuardDuty Malware Protection. Create automation to immediately restore the most recent snapshot for any EC2 instances that produce an Execution:EC2/MaliciousFile finding in GuardDuty. Forgot my password

**Answer: **

**Timestamp: **

[View on ExamTopics](https://www.examtopics.com/discussions/amazon/view/382905-exam-aws-certified-security-specialty-scs-c03-topic-1-question-53-discussion/)

Comments: gonzales Most Recent 7 months, 29 days ago Selected Answer: A The requirement is a disaster recovery solution with an RPO of 1 hour for both the EC2/EBS-backed frontend tier and the S3-stored image/music data. AWS Backup supports protecting both Amazon EBS/EC2-related backups and Amazon S3, and backup plans can run as frequently as hourly, which matches the 1-hour RPO requirement. Use CloudFormation templates to recreate the architecture, which is appropriate for disaster recovery and recovery-to-normal-operations after a ransomware event. Using source control for those templates and app configuration supports repeatable rebuilds upvoted 1 time Submit     Cancel ...

----------------------------------------

## Exam AWS Certified Security - Specialty SCS-C03 topic 1 question 54 discussion



A company uses AWS IAM Identity Center to manage access to its AWS accounts. The accounts are in an organization in AWS Organizations.

A security engineer needs to set up delegated administration of IAM Identity Center in the organization's management account.

Which combination of steps should the security engineer perform in IAM Identity Center before configuring delegated administration? (Choose three.)

A. Grant least privilege access to the organization's management account.

B. Create a new IAM Identity Center directory in the organization's management account.

C. Set up a second AWS Region in the organization's management account.

D. Create permission sets for use only in the organization's management account.

E. Create IAM users for use only in the organization's management account.

F. Create user assignments only in the organization’s management account. Forgot my password

**Answer: **

**Timestamp: **

[View on ExamTopics](https://www.examtopics.com/discussions/amazon/view/382928-exam-aws-certified-security-specialty-scs-c03-topic-1-question-54-discussion/)

Comments: giancesarini2023 Most Recent 5 months, 5 days ago Selected Answer: ADF Before delegating IAM Identity Center administration, configure access for the management account separately: least privilege, dedicated permission sets, and assignments only for the management account. The delegated account should not manage access to the management account. upvoted 1 time Submit     Cancel ... gonzales 7 months, 29 days ago Selected Answer: ABC Grant least privilege access -&gt; Best practice ALWAYS required Create IAM Identity Center directory -&gt; An identity source (directory) Set up a second AWS Region -&gt; for resilience + proper org setup -&gt; enable an additional region upvoted 2 times Submit     Cancel ... Ryan1002 8 months, 5 days ago Selected Answer: ADF A — Grant least privilege access to the management account. D — Create dedicated permission sets for use only in the management account. F — Create user assignments only in the management account upvoted 1 time Submit     Cancel ... bigdata2ml 8 months, 10 days ago Selected Answer: ADF https://docs.aws.amazon.com/singlesignon/latest/userguide/delegated-admin.html#delegated-admin-prereqs Here are some best practices to consider before you configure delegated administration: Grant least privilege to the management account – Knowing that the management account is a highly privileged account and to adhere to the principal of least privilege, we highly recommend that you restrict access to the management account to as few people as possible. The delegated administrator feature is intended to minimize the number of people who require access to the management account. upvoted 3 times Submit     Cancel ...

----------------------------------------

## Exam AWS Certified Security - Specialty SCS-C03 topic 1 question 55 discussion



A company finds that one of its Amazon EC2 instances suddenly has a high CPU usage. The company does not know whether the EC2 instance is compromised or whether the operating system is performing background cleanup.

Which combination of steps should a security engineer take before investigating the issue? (Choose three.)

A. Disable termination protection for the EC2 instance if termination protection has not been disabled.

B. Enable termination protection for the EC2 instance if termination protection has not been enabled.

C. Take snapshots of the Amazon Elastic Block Store (Amazon EBS) data volumes that are attached to the EC2 instance.

D. Remove all snapshots of the Amazon Elastic Block Store (Amazon EBS) data volumes that are attached to the EC2 instance.

E. Capture the EC2 instance metadata, and then tag the EC2 instance as under quarantine.

F. Immediately remove any entries in the EC2 instance metadata that contain sensitive information. Forgot my password

**Answer: **

**Timestamp: **

[View on ExamTopics](https://www.examtopics.com/discussions/amazon/view/382908-exam-aws-certified-security-specialty-scs-c03-topic-1-question-55-discussion/)

Comments: gonzales Most Recent 7 months, 29 days ago Selected Answer: BCE Before investigating, preserve evidence and prevent accidental loss upvoted 1 time Submit     Cancel ...

----------------------------------------

## Exam AWS Certified Security - Specialty SCS-C03 topic 1 question 56 discussion



A company's security engineer is designing an isolation procedure for Amazon EC2 instances as part of an incident response plan. The security engineer needs to isolate a target instance to block any traffic to and from the target instance, except for traffic from the company's forensics team. Each of the company's EC2 instances has its own dedicated security group. The EC2 instances are deployed in subnets of a VPC. A subnet can contain multiple instances.

The security engineer is testing the procedure for EC2 isolation and opens an SSH session to the target instance. The procedure starts to simulate access to the target instance by an attacker. The security engineer removes the existing security group rules and adds security group rules to give the forensics team access to the target instance on port 22.

After these changes, the security engineer notices that the SSH connection is still active and usable. When the security engineer runs a ping command to the public IP address of the target instance, the ping command is blocked.

What should the security engineer do to isolate the target instance?

A. Add an inbound rule to the security group to allow traffic from 0.0.0.0/0 for all ports. Add an outbound rule to the security group to allow traffic to 0.0.0.0/0 for all ports. Then immediately delete these rules.

B. Remove the port 22 security group rule. Attach an instance role policy that allows AWS Systems Manager Session Manager connections so that the forensics team can access the target instance.

C. Create a network ACL that is associated with the target instance's subnet. Add a rule at the top of the inbound rule set to deny all traffic from 0.0.0.0/0. Add a rule at the top of the outbound rule set to deny all traffic to 0.0.0.0/0.

D. Create an AWS Systems Manager document that adds a host-level firewall rule to block all inbound traffic and outbound traffic. Run the document on the target instance. Forgot my password

**Answer: **

**Timestamp: **

[View on ExamTopics](https://www.examtopics.com/discussions/amazon/view/382927-exam-aws-certified-security-specialty-scs-c03-topic-1-question-56-discussion/)

Comments: goodlucks Most Recent 3 months, 25 days ago Selected Answer: C According to Claude, the correct answer is C. upvoted 1 time Submit     Cancel ... HarryNZ1982 4 months, 1 days ago Selected Answer: C Option C is incomplete. It should say &quot; Block all traffic from 0.0.0.0/0 with a NACL in a higher numbered rule such as 200 or so and also at the same time allow traffic from the Forensics Team with a lower numbered rule such as 100 or so to allow the Forensics Team to access the EC2 Instance&quot;. upvoted 1 time Submit     Cancel ... HarryNZ1982 4 months, 1 days ago So it should look more like the below Inbound NACL rules (ordered by rule number, lowest evaluated first): Rule # Type Source IP Port Action 100 SSH (22) Forensics IP range 22 ALLOW Ephemeral ports Forensics IP range *1024-65535* ALLOW 200 ALL Traffic 0.0.0.0/0 ALL DENY Outbound NACL rules (stateless, so explicit return rules needed): Rule # Type Destination IP Port Action 100 Custom TCP Forensics IP range 22 (outbound response) ALLOW 200 ALL Traffic 0.0.0.0/0 ALL DENY upvoted 1 time Submit     Cancel ... SZU 4 months, 15 days ago Selected Answer: D A - the rule makes no sense B - Security Groups are statefull and removing don't drop existing connection C - NACL is connected to subnet and in this example block access to other EC2 D - most likely. And that's probably what AWS is talking about. However, the answer itself isn't written very well. upvoted 1 time Submit     Cancel ... OCHT 4 months, 30 days ago Selected Answer: C Why Option B is Wrong Option B says: &quot;Remove the port 22 security group rule. Attach an instance role policy for Session Manager.&quot; Problem: Removing the port 22 rule does NOT terminate the existing SSH connection. The attacker's SSH session would continue working. Security groups are stateful — they don't break established connections. Why Option C is Correct Option C says: &quot;Create a NACL with deny all rules at the top.&quot; Why this works: NACLs are stateless Deny rule applies to ALL traffic including existing connections SSH connection is immediately terminated Attacker is locked out upvoted 1 time Submit     Cancel ... giancesarini2023 5 months, 5 days ago Selected Answer: A Security Groups are stateful and can keep already established SSH connections active. Temporarily adding “allow all” rules and then removing them forces the connection to be treated as untracked, immediately terminating the active session. upvoted 3 times Submit     Cancel ... XXXXXlNN 6 months, 13 days ago Selected Answer: A Because with the question. My understanding is it’s asking to isolates a specific EC2 instance even with existing connections. Each subnet contains multiple instances so change ACL may not be a good idea. Thus, add security group with allowing all and then remove it again will kill existing sessions upvoted 3 times Submit     Cancel ... gonzales 7 months, 21 days ago Selected Answer: B Correction: Security groups are stateful and use connection tracking, so an already-established SSH session can remain active even after you remove the security group rule that originally allowed it. That is why the SSH session stayed usable, while a new ping was blocked. ￼ To fully isolate the instance, the engineer should: • remove the port 22 security group rule, so no new SSH access is allowed, and • use AWS Systems Manager Session Manager for the forensics team, because Session Manager provides access without opening inbound ports. D blocks all host traffic and does not preserve the requirement to allow the forensics team access. upvoted 1 time Submit     Cancel ... gonzales 7 months, 28 days ago Selected Answer: D goal: Isolate the instance completely (block ALL traffic) Use SSM to apply host-level firewall rules: • Kills existing connections • Blocks all inbound + outbound • Works immediately This is the ONLY option that breaks active SSH sessions. C will block all instances in the subnet not just the target instance (NACL is applied at subnet level) upvoted 1 time Submit     Cancel ... baliuxas07 6 months, 7 days ago , except for traffic from the company's forensics team upvoted 1 time Submit     Cancel ... Krisada 8 months, 9 days ago Selected Answer: C Remove the connection upvoted 2 times Submit     Cancel ... bigdata2ml 8 months, 10 days ago Selected Answer: B Remove SSH access via port 22 and allow AWS Systems Manager Session Manager without Port 22 and SSH using SSM Agent upvoted 2 times Submit     Cancel ...

----------------------------------------

## Exam AWS Certified Security - Specialty SCS-C03 topic 1 question 57 discussion



A company that uses AWS Organizations is using AWS IAM Identity Center (AWS Single Sign-On) to administer access to AWS accounts. A security engineer is creating a custom permission set in IAM Identity Center. The company will use the permission set across multiple accounts. An AWS managed policy and a customer managed policy are attached to the permission set. The security engineer has full administrative permissions and is operating in the management account.

When the security engineer attempts to assign the permission set to an IAM Identity Center user who has access to multiple accounts, the assignment fails.

What should the security engineer do to resolve this failure?

A. Create the customer managed policy in every account where the permission set is assigned. Give the customer managed policy the same name and same permissions in each account.

B. Remove either the AWS managed policy or the customer managed policy from the permission set. Create a second permission set that includes the removed policy. Apply the permission sets separately to the user.

C. Evaluate the logic of the AWS managed policy and the customer managed policy. Resolve any policy conflicts in the permission set before deployment.

D. Do not add the new permission set to the user. Instead, edit the user's existing permission set to include the AWS managed policy and the customer managed policy. Forgot my password

**Answer: **

**Timestamp: **

[View on ExamTopics](https://www.examtopics.com/discussions/amazon/view/382913-exam-aws-certified-security-specialty-scs-c03-topic-1-question-57-discussion/)

Comments: gonzales Most Recent 7 months, 28 days ago Selected Answer: A When a permission set includes a customer managed policy, IAM Identity Center does not copy that policy into target accounts. The policy must already exist in each target account, and it must match the same name and path used by the permission set. If it’s missing, the assignment fails. upvoted 1 time Submit     Cancel ... bigdata2ml 8 months, 10 days ago Selected Answer: A Customer managed policies (CMPs) can have the same name and permissions across multiple AWS accounts, enabling consistent permission sets in AWS IAM Identity Center. You must manually or via automation (e.g., CloudFormation StackSets) create the identical policy in each target account. The policy name and path must match exactly upvoted 1 time Submit     Cancel ...

----------------------------------------

## Exam AWS Certified Security - Specialty SCS-C03 topic 1 question 58 discussion



An IAM user receives an Access Denied message when the user attempts to access objects in an Amazon S3 bucket. The user and the S3 bucket are in the same AWS account. The S3 bucket is configured to use server-side encryption with AWS KMS keys (SSE-KMS) to encrypt all of its objects at rest by using a customer managed key from the same AWS account. The S3 bucket has no bucket policy defined. The IAM user has been granted permissions through an IAM policy that allows the kms:Decrypt permission to the customer managed key. The IAM policy also allows the s3:List* and s3:Get* permissions for the S3 bucket and its objects.

Which of the following is a possible reason that the IAM user cannot access the objects in the S3 bucket?

A. The IAM policy needs to allow the kms:DescribeKey permission.

B. The S3 bucket has been changed to use the AWS managed key to encrypt objects at rest.

C. An S3 bucket policy needs to be added to allow the IAM user to access the objects.

D. The KMS key policy has been edited to remove the ability for the AWS account to have full access to the key. Forgot my password

**Answer: **

**Timestamp: **

[View on ExamTopics](https://www.examtopics.com/discussions/amazon/view/382938-exam-aws-certified-security-specialty-scs-c03-topic-1-question-58-discussion/)

Comments: gonzales Most Recent 7 months, 28 days ago Selected Answer: D For SSE-KMS access to S3 objects, permissions must allow both: • S3 access (s3:GetObject, s3:ListBucket, etc.) • KMS key use (kms:Decrypt) and the KMS key policy must permit it Even if the IAM user’s IAM policy allows kms:Decrypt, access can still fail if the KMS key policy no longer allows the account to use or delegate use of the key. If the key policy was edited to remove the account’s full access/enable-IAM-permissions behavior, the IAM policy alone may not be enough. upvoted 2 times Submit     Cancel ... bigdata2ml 8 months, 10 days ago Selected Answer: D Could be Key policy error too, should not remove kms:* from key policy to AWS account upvoted 2 times Submit     Cancel ... bigdata2ml 8 months, 10 days ago Selected Answer: A Context: kms:DescribeKey is frequently required alongside kms:Encrypt, kms:Decrypt, or kms:GenerateDataKey to enable applications to use the key upvoted 1 time Submit     Cancel ...

----------------------------------------

## Exam AWS Certified Security - Specialty SCS-C03 topic 1 question 59 discussion



A company runs workloads in the us-east-1 Region. The company has never deployed resources to other AWS Regions and does not have any multi-Region resources. The company needs to replicate its workloads and infrastructure to the us-west-1 Region.

A security engineer must implement a solution that uses AWS Secrets Manager to store secrets in both Regions. The solution must use AWS Key Management Service (AWS KMS) to encrypt the secrets. The solution must minimize latency and must be able to work if only one Region is available.

The security engineer uses Secrets Manager to create the secrets in us-east-1.

What should the security engineer do next to meet the requirements?

A. Encrypt the secrets in us-east-1 by using an AWS managed KMS key. Replicate the secrets to us-west-1. Encrypt the secrets in us-west-1 by using a new AWS managed KMS key in us-west-1.

B. Encrypt the secrets in us-east-1 by using an AWS managed KMS key. Configure resources in us-west-1 to call the Secrets Manager endpoint in us-east-1.

C. Encrypt the secrets in us-east-1 by using a customer managed KMS key. Configure resources in us-west-1 to call the Secrets Manager endpoint in us-east-1.

D. Encrypt the secrets in us-east-1 by using a customer managed KMS key. Replicate the secrets to us-west-1. Encrypt the secrets in us-west-1 by using the customer managed KMS key from us-east-1. Forgot my password

**Answer: **

**Timestamp: **

[View on ExamTopics](https://www.examtopics.com/discussions/amazon/view/382917-exam-aws-certified-security-specialty-scs-c03-topic-1-question-59-discussion/)

Comments: Strong23 Most Recent 2 months, 3 days ago Selected Answer: D What about the multi region KMS customer managed keys, setting the KMS key to be multi regional and replicating the secret should be enough. upvoted 1 time Submit     Cancel ... HarryNZ1982 4 months, 1 days ago Selected Answer: A Option A is correct with one caveat that in a real security conscious world, it is better to use customer managed keys instead of AWS Managed Keys to get better control over Key Policy, enables cross-account access if needed and provides granular auditing upvoted 1 time Submit     Cancel ... Stpn2me 4 months, 7 days ago Selected Answer: A So there will be two different KMS encryptions in us-east and us-west. That’s the key here. upvoted 1 time Submit     Cancel ... gonzales 7 months, 28 days ago Selected Answer: A Secrets Manager supports replicating secrets to another Region specifically to support low-latency, regional access and to improve resilience if one Region is unavailable. AWS documents that you can replicate a secret to other Regions, and that calling a single Region’s Secrets Manager endpoint from another Region is an alternative only when you don’t need the resilience benefit. upvoted 1 time Submit     Cancel ... bigdata2ml 8 months, 10 days ago Selected Answer: A https://www.youtube.com/watch?v=H--RsFNrJ7Q upvoted 1 time Submit     Cancel ...

----------------------------------------

## Exam AWS Certified Security - Specialty SCS-C03 topic 1 question 60 discussion



A company runs workloads in an AWS account. A security engineer observes some unusual findings in Amazon GuardDuty. The security engineer wants to investigate a specific IAM role and generate an investigation report. The report must contain details about anomalous behavior and any indicators of compromise.

Which solution will meet these requirements?

A. Use Amazon Detective to perform an investigation on the IAM role.

B. Use AWS Audit Manager to create an assessment. Specify the IAM role Run an assessment report.

C. Use Amazon Inspector to create an assessment. Specify the IAM role. Run an assessment report.

D. Use Amazon Inspector to run an on-demand scan of the IAM role. Forgot my password

**Answer: **

**Timestamp: **

[View on ExamTopics](https://www.examtopics.com/discussions/amazon/view/382919-exam-aws-certified-security-specialty-scs-c03-topic-1-question-60-discussion/)

Comments: gonzales Most Recent 7 months, 28 days ago Selected Answer: A Amazon Detective is specifically built for: • Investigating GuardDuty findings • Analyzing IAM entities (users/roles) • Correlating data (CloudTrail, VPC Flow Logs, GuardDuty) • Providing visual timelines, behavior graphs, and indicators of compromise upvoted 1 time Submit     Cancel ... bigdata2ml 8 months, 10 days ago Selected Answer: A Detective is meant to investigate a specific IAM role and generate an investigation report upvoted 1 time Submit     Cancel ...

----------------------------------------

## Exam AWS Certified Security - Specialty SCS-C03 topic 1 question 61 discussion



A company recently set up Amazon GuardDuty and is receiving a high number of findings from IP addresses within the company. A security engineer has verified that these IP addresses are trusted and allowed.

Which combination of steps should the security engineer take to configure GuardDuty so that it does not produce findings for these IP addresses? (Choose two.)

A. Create a plaintext configuration file that contains the trusted IP addresses.

B. Create a JSON configuration file that contains the trusted IP addresses.

C. Upload the configuration file directly to GuardDuty.

D. Upload the configuration file to Amazon S3. Add a new trusted IP list to GuardDuty that points to the file.

E. Manually copy and paste the configuration file data into the trusted IP list in GuardDuty. Forgot my password

**Answer: **

**Timestamp: **

[View on ExamTopics](https://www.examtopics.com/discussions/amazon/view/382945-exam-aws-certified-security-specialty-scs-c03-topic-1-question-61-discussion/)

Comments: gonzales Most Recent 7 months, 28 days ago Selected Answer: AD GuardDuty uses threat lists / trusted lists These lists must: • Be in plaintext format (TXT) • Be stored in S3 • Be referenced by GuardDuty upvoted 1 time Submit     Cancel ... bigdata2ml 8 months, 10 days ago Selected Answer: AD To upload a configuration file to Amazon S3 and create a GuardDuty trusted IP list that references it, use the AWS CLI to first upload the file to your S3 bucket and then create the IP set in GuardDuty. upvoted 1 time Submit     Cancel ...

----------------------------------------

## Exam AWS Certified Security - Specialty SCS-C03 topic 1 question 62 discussion



A development team is creating an open source toolset to manage a company's software as a service (SaaS) application. The company stores the code in a public repository so that anyone can view and download the toolset's code.

The company discovers that the code contains an IAM access key and secret key that provide access to internal resources in the company’s AWS environment

A security engineer must implement a solution to identify whether unauthorized usage of the exposed credentials has occurred. The solution also must prevent any additional usage of the exposed credentials.

Which combination of steps will meet these requirements? (Choose two.)

A. Use AWS Identity and Access Management Access Analyzer to determine which resources the exposed credentials accessed and who used them.

B. Deactivate the exposed IAM access key from the user’s IAM account.

C. Create a rule in Amazon GuardDuty to block the access key in the source code from being used.

D. Create a new IAM access key and secret key for the user whose credentials were exposed.

E. Generate an IAM credential report. Check the report to determine when the user that owns the access key last logged in. Forgot my password

**Answer: **

**Timestamp: **

[View on ExamTopics](https://www.examtopics.com/discussions/amazon/view/382906-exam-aws-certified-security-specialty-scs-c03-topic-1-question-62-discussion/)

Comments: Man_Kind Most Recent 2 months, 18 days ago Selected Answer: BE A does NOT tell you who did what and when the cred was last used B - D upvoted 1 time Submit     Cancel ... 7f6aef3 2 months, 18 days ago Selected Answer: BE B — Desactivar la key expuesta → previene uso adicional E — Credential report con &quot;last used&quot; → identifica si/cuándo se usó la credencial expuesta. A: Access Analyzer identifica recursos con acceso externo, no &quot;qué recursos accedió una credencial y quién la usó&quot; (eso lo da CloudTrail). upvoted 1 time Submit     Cancel ... giancesarini2023 5 months, 5 days ago Selected Answer: AB Use IAM Access Analyzer to investigate the use of the exposed credentials and immediately disable the compromised access key to prevent any further use. upvoted 1 time Submit     Cancel ... libz 5 months, 26 days ago Selected Answer: AB Credential report shows last login activity but doesn’t provide detailed resource access analysis upvoted 2 times Submit     Cancel ... gonzales 7 months, 28 days ago Selected Answer: BE Credentail report When the key was last used Whether it has been used recently Analyser: • Used for: • External access to resources (e.g., public S3 buckets) • NOT for: • Tracking credential usage upvoted 1 time Submit     Cancel ... bigdata2ml 8 months, 10 days ago Selected Answer: BE Questions is : to identify whether unauthorized usage of the exposed credentials has occurred. The solution also must prevent any additional usage of the exposed credentials. This blog explains that it can be achieved with credential report https://aws.amazon.com/blogs/security/new-in-iam-quickly-identify-when-an-access-key-was-last-used/ upvoted 1 time Submit     Cancel ... bigdata2ml 8 months, 10 days ago Selected Answer: BE https://aws.amazon.com/blogs/security/new-in-iam-quickly-identify-when-an-access-key-was-last-used/#:~:text=From%20the%20IAM%20console%2C%20you,When%20you%20click%20an%20individual upvoted 1 time Submit     Cancel ... Liongeek 8 months, 18 days ago Selected Answer: AB AB Credential Report says when he logged, not which API calls he made. Question asks for USAGE upvoted 1 time Submit     Cancel ...

----------------------------------------

## Exam AWS Certified Security - Specialty SCS-C03 topic 1 question 63 discussion



A company runs an application on an Amazon EC2 instance. The application generates invoices and stores them in an Amazon S3 bucket. The instance profile that is attached to the instance has appropriate access to the S3 bucket.



The company needs to share each invoice with multiple clients that do not have AWS credentials. Each client must be able to download only the client's own invoices. Clients must download their invoices within 1 hour of invoice creation. Clients must use only temporary credentials to access the company’s AWS resources.



A security engineer creates a script that runs on the EC2 instance. The script uses the instance profile to generate an S3 presigned URL for the clients. Each presigned URL expires after 1 hour.



Which additional step will meet these requirements?

A. Update the S3 bucket policy to ensure that clients that use presigned URLs have the S3:Get* permission and the S3:List* permission to access S3 objects in the bucket.

B. Add a StringEquals condition to the IAM role policy for the EC2 instance profile. Configure the policy condition to restrict access based on the s3:ResourceTag/ClientId tag of each invoice. Tag each generated invoice with the ID of its corresponding client.

C. Update the script to use AWS Security Token Service (AWS STS) to obtain new credentials each time the script runs by assuming a new role that has S3 GetObject permissions. Use the credentials to generate the presigned URLs.

D. Generate an access key and a secret key for an IAM user that has S3:GetObject permissions on the S3 bucket. Embed the keys into the script. Use the keys to generate the presigned URLs. Forgot my password

**Answer: **

**Timestamp: **

[View on ExamTopics](https://www.examtopics.com/discussions/amazon/view/404534-exam-aws-certified-security-specialty-scs-c03-topic-1-question-63-discussion/)

Comments: d3717d5 Most Recent 6 months, 14 days ago Selected Answer: C with sts assume you can create presigned urls that expire between 5 minutes and 24 hours. In this case generated presigned url can be shared with the client by the script that generated the invoice and did sts assume role and obtained url and can spit it out back to client. upvoted 1 time Submit     Cancel ...

----------------------------------------

## Exam AWS Certified Security - Specialty SCS-C03 topic 1 question 64 discussion



A company is using Amazon Made, AWS Firewall Manager. Amazon Inspector, and AWS Shield Advanced in its AWS account. The company wants to receive alerts if a DDoS attack occurs against the account.



Which solution will meet this requirement?

A. Use Macie to detect an active DDoS event. Create Amazon CloudWatch alarms that respond to Macie findings.

B. Use Amazon Inspector to review resources and to invoke Amazon CloudWatch alarms for any resources that are vulnerable to DDoS attacks.

C. Create an Amazon CloudWatch alarm that monitors Firewall Manager metrics for an active DDoS event.

D. Create an Amazon CloudWatch alarm that monitors Shield Advanced metrics for an active DDoS event. Forgot my password

**Answer: **

**Timestamp: **

[View on ExamTopics](https://www.examtopics.com/discussions/amazon/view/404535-exam-aws-certified-security-specialty-scs-c03-topic-1-question-64-discussion/)

Comments: coolstuff88 Most Recent 5 months, 4 days ago Selected Answer: D Why this option is correct:AWS Shield Advanced is specifically designed to protect AWS resources against Distributed Denial of Service (DDoS) attacks.It automatically publishes specific operational metrics to Amazon CloudWatch, such as DDoSDetected and AttackVolume.Creating a CloudWatch alarm based on these Shield Advanced metrics is the standard AWS architecture for triggering real-time alerts (via Amazon SNS) during an active attack. upvoted 1 time Submit     Cancel ...

----------------------------------------

## Exam AWS Certified Security - Specialty SCS-C03 topic 1 question 65 discussion



A company runs critical workloads in an on-premises data center. The company wants to implement an AWS based disaster recovery (DR) solution that will achieve an RTO of less than 1 hour. The company needs to continuously replicate physical and virtual servers. The company must optimize costs for data storage and bandwidth usage. The DR solution must be automated.



Which solution will meet these requirements?

A. Use AWS Backup to directly replicate the on-premises servers to AWS. Enable cross-Region backup copying and data vaulting. Configure recovery points to match the defined RTO. Use AWS Step Functions to automate recovery steps.

B. Configure an AWS Storage Gateway Volume Gateway to use Amazon Elastic Block Store (Amazon EBS) snapshots for recovery. Configure AWS Backup to manage the snapshots. Create automated recovery procedures.

C. Enable AWS Elastic Disaster Recovery. Configure replication agents to continuously replicate each on-premises server. Enable the default staging area subnet configuration.

D. Create an AWS Direct Connect connection between the on-premises data center and AWS. Configure Amazon EventBridge to monitor for failures and to invoke AWS Lambda functions that launch preconfigured Amazon EC2 instances from AMIs in the event of an incident. Forgot my password

**Answer: **

**Timestamp: **

[View on ExamTopics](https://www.examtopics.com/discussions/amazon/view/404536-exam-aws-certified-security-specialty-scs-c03-topic-1-question-65-discussion/)

Comments: coolstuff88 Most Recent 5 months, 4 days ago Selected Answer: C AWS Elastic Disaster Recovery (DRS) is the recommended native AWS service specifically built for automated, cost-effective disaster recovery of physical and virtual servers from on-premises environments to AWS. It satisfies the requirement for an RTO of less than 1 hour (typically delivering recovery times in minutes) by executing highly automated recovery orchestration and automated server conversions. It features an architecture that utilizes a low-cost, lightweight staging area subnet configuration. Instead of maintaining fully deployed duplicate environments, it continuously syncs data at a block level using minimal storage and bandwidth resources, optimizing total operational costs until a real failover is triggered upvoted 1 time Submit     Cancel ...

----------------------------------------

## Exam AWS Certified Security - Specialty SCS-C03 topic 1 question 66 discussion



A company in France uses Amazon Cognito with the Cognito Hosted UI as an identity broker for sign-in and sign-up processes. The company is marketing an application and expects that all the application's users will come from France.



When the company launches the application, the company’s security team observes fraudulent sign-ups for the application. Most of the fraudulent registrations are from users outside of France.



The security team needs a solution to perform custom validation at sign-up. Based on the results of the validation, the solution must accept or deny the registration request.



Which combination of steps will meet these requirements? (Choose two.)

A. Create a pre sign-up AWS Lambda trigger. Associate the Amazon Cognito function with the Amazon Cognito user pool.

B. Use a geographic match rule statement to configure an AWS WAF web ACL. Associate the web ACL with the Amazon Cognito user pool.

C. Configure an app client for the application’s Amazon Cognito user pool. Use the app client ID to validate the requests in the hosted UI.

D. Update the application’s Amazon Cognito user pool to configure a geographic restriction setting.

E. Use Amazon Cognito to configure a social identity provider (IdP) to validate the requests on the hosted UI. Forgot my password

**Answer: **

**Timestamp: **

[View on ExamTopics](https://www.examtopics.com/discussions/amazon/view/404537-exam-aws-certified-security-specialty-scs-c03-topic-1-question-66-discussion/)

Comments: emupsx1 Most Recent 4 months, 30 days ago Selected Answer: AB Why A &amp; B are correct: B (AWS WAF): Directly associates with the Cognito User Pool to block non-French traffic using geo-match rules before it reaches the UI. A (Pre Sign-up Lambda): Executes custom backend validation right before user creation to accept or deny registrations. Why C, D &amp; E are incorrect: C: App Client ID is for app identification/OAuth, not for verifying user locations or requests. D: Cognito User Pools do not have a built-in geographic restriction setting. E: Social IdPs (Google/Facebook) handle authentication, not custom geo-fencing or registration validation. upvoted 1 time Submit     Cancel ...

----------------------------------------

## Exam AWS Certified Security - Specialty SCS-C03 topic 1 question 67 discussion



A company uses an organization in AWS Organizations to manage multiple AWS accounts. The company wants to centrally give users the ability to access Amazon Q Developer.



Which solution will meet this requirement?

A. Enable AWS IAM Identity Center and set up Amazon Q Developer as an AWS managed application.

B. Enable Amazon Cognito and create a new identity pool for Amazon Q Developer.

C. Enable Amazon Cognito and set up Amazon Q Developer as an AWS managed application

D. Enable AWS IAM Identity Center and create a new identity pool for Amazon Q Developer. Forgot my password

**Answer: **

**Timestamp: **

[View on ExamTopics](https://www.examtopics.com/discussions/amazon/view/404538-exam-aws-certified-security-specialty-scs-c03-topic-1-question-67-discussion/)

Comments: emupsx1 Most Recent 4 months, 30 days ago Selected Answer: A To centrally manage and assign Amazon Q Developer subscriptions/access across AWS Organizations, you must use AWS IAM Identity Center and configure Amazon Q Developer as an AWS managed application. upvoted 1 time Submit     Cancel ...

----------------------------------------

## Exam AWS Certified Security - Specialty SCS-C03 topic 1 question 68 discussion



An ecommerce website was down for 1 hour following a DDoS attack. Users were unable to connect to the website during the attack period. The ecommerce company's security team is worried about future potential attacks and wants to prepare for such events. The company needs to minimize downtime in its response to similar attacks in the future.



Which steps would help achieve this? (Choose two.)

A. Enable Amazon GuardDuty to automatically monitor for malicious activity and block unauthorized access.

B. Subscribe to AWS Shield Advanced and reach out to AWS Support in the event of an attack.

C. Use VPC Flow Logs to monitor network traffic and an AWS Lambda function to automatically block an attacker's IP using security groups.

D. Set up an Amazon EventBridge rule to monitor the AWS CloudTrail events in real time, use AWS Config rules to audit the configuration, and use AWS Systems Manager for remediation.

E. Use AWS WAF to create rules to respond to such attacks. Forgot my password

**Answer: **

**Timestamp: **

[View on ExamTopics](https://www.examtopics.com/discussions/amazon/view/404539-exam-aws-certified-security-specialty-scs-c03-topic-1-question-68-discussion/)

Comments: d3717d5 Most Recent 6 months, 14 days ago Selected Answer: BE It is about real-time mitigation of DDoS B. Subscribe to AWS Shield Advanced,* Purpose-built for DDoS protection * Provides: * automatic mitigation * access to AWS DDoS Response Team (DRT) * advanced protections beyond basic Shield Standard E. Use AWS WAF * Filters malicious traffic before it hits your app * Can block: * bad IPs * patterns (rate-based rules) * bots Works in real time, which is key upvoted 1 time Submit     Cancel ...

----------------------------------------

## Exam AWS Certified Security - Specialty SCS-C03 topic 1 question 70 discussion



A security engineer needs to build a solution to turn AWS CloudTrail back on in multiple AWS Regions in case it is ever turned off.



What is the MOST efficient way to implement this solution?

A. Use AWS Config with a managed rule to initiate the AWS-EnableCloudTrail remediation.

B. Create an Amazon EventBridge event with a cloudtrail.amazonaws.com event source and a StartLogging event name to invoke an AWS Lambda function to call the StartLogging API.

C. Create an Amazon CloudWatch alarm with a cloudtrail.amazonaws.com event source and a StopLogging event name to invoke an AWS Lambda function to call the StartLogging API.

D. Monitor AWS Trusted Advisor to ensure CloudTrail logging is enabled. Forgot my password

**Answer: **

**Timestamp: **

[View on ExamTopics](https://www.examtopics.com/discussions/amazon/view/404541-exam-aws-certified-security-specialty-scs-c03-topic-1-question-70-discussion/)

Comments: d3717d5 Most Recent 6 months, 14 days ago Selected Answer: A What the question is really asking “Turn CloudTrail back on if it is ever turned off” “MOST efficient way” “multiple Regions” This is continuous compliance + auto-remediation, not just event reaction So you get: * detection ✅ * automatic correction ✅ * multi-region coverage ✅ * no custom code ✅ upvoted 1 time Submit     Cancel ...

----------------------------------------

## Exam AWS Certified Security - Specialty SCS-C03 topic 1 question 71 discussion



A company maintains both on-premises legacy systems and resources in AWS. The AWS resources include an Amazon DynamoDB table and an Amazon S3 bucket. The on-premises legacy systems need to connect to DynamoDB and Amazon S3 on a regular basis.



The company currently uses a bastion host in a public subnet in a VPC. The company connects to the bastion host by using an SSH private key that the company stores on-premises. The instance profile that is assigned to the bastion host has full access to Amazon S3 and DynamoDB.



A security team issues a new internal policy that requires all bastion hosts to be removed. The policy requires all systems to authenticate by using certificate-based authentication.



Which solution will meet these requirements?

A. Set up an AWS Direct Connect connection and create a VPN connection to a VPC that has access to VPC endpoints for the required services.

B. Set up the on-premises systems to use AWS IAM Roles Anywhere to authenticate.

C. Use AWS Private Certificate Authority to issue SSL certificates to give on-premises systems access to resources on AWS.

D. Create an IAM user that has permission to temporarily assume an IAM role and to use temporarily assumed role credentials to access the required resources. Forgot my password

**Answer: **

**Timestamp: **

[View on ExamTopics](https://www.examtopics.com/discussions/amazon/view/404542-exam-aws-certified-security-specialty-scs-c03-topic-1-question-71-discussion/)

Comments: d3717d5 Most Recent 6 months, 1 days ago Selected Answer: B ## Rule To Remember If on-prem workloads need AWS access using X.509 certificates → IAM Roles Anywhere. Private CA can issue certs, but IAM Roles Anywhere turns cert auth into temporary AWS credentials. IAM Roles Anywhere is designed exactly for this: On-prem server/app + X.509 certificate → IAM Roles Anywhere → temporary AWS credentials → access S3 and DynamoDB using IAM role permissions upvoted 1 time Submit     Cancel ...

----------------------------------------

## Exam AWS Certified Security - Specialty SCS-C03 topic 1 question 72 discussion



A company uses an organization in AWS Organizations to manage multiple AWS accounts. Users access AWS accounts by using IAM users and secret access keys. A security team requires all access to accounts to use temporary security credentials that expire after 60 minutes. Users must use a SAML-based identity provider (IdP) to access the accounts.



Which solution will meet these requirements?

A. Enable access to the AWS Security Token Service (AWS STS). Ensure that users run the get-session-token AWS CLI command with an appropriate duration. Require users to use STS temporary credentials to access AWS accounts.

B. Set up AWS IAM Identity Center and configure an external IdP. Configure permission sets that allow the access that the users require. Configure a session duration limit. Require the users to retrieve SSO credentials by using the AWS CLI. Remove the IAM users from the AWS accounts.

C. Set up AWS Secrets Manager and Amazon Cognito in each AWS account. Configure a Cognito identity pool to use an external IdP and connect to Secrets Manager. Enable managed secret rotation in Secrets Manager. Ensure that the users run the get-secret-value AWS CLI command to access the AWS accounts.

D. Enable AWS IAM Roles Anywhere in the organization management account. Ensure that users install the credential helper tool. Configure IAM roles within the management account with an appropriate session duration. Ensure that the users retrieve temporary credentials from the credential helper tool to access the AWS accounts. Forgot my password

**Answer: **

**Timestamp: **

[View on ExamTopics](https://www.examtopics.com/discussions/amazon/view/404543-exam-aws-certified-security-specialty-scs-c03-topic-1-question-72-discussion/)

Comments: d3717d5 Most Recent 6 months, 1 days ago Selected Answer: B Multi-account AWS + SAML + temporary credentials → IAM Identity Center + external IdP + STS temporary sessions. upvoted 1 time Submit     Cancel ...

----------------------------------------

## Exam AWS Certified Security - Specialty SCS-C03 topic 1 question 74 discussion



A company begins to use AWS WAF after experiencing an increase in traffic to the company's public web applications. A security engineer needs to determine if the increase in traffic is because of application-layer attacks. The security engineer needs a solution to analyze AWS WAF traffic.



Which solution will meet this requirement?

A. Configure AWS WAF to send logs to a trail in AWS CloudTrail. Create an Amazon Data Firehose delivery stream to send the logs to Amazon OpenSearch Service. Use OpenSearch Dashboards and an Amazon Athena connector to query the logs.

B. Configure AWS WAF to send logs to an Amazon S3 bucket Configure an OpenSearch table with a partition projection of the S3 bucket. Use OpenSearch to query the data in the S3 bucket

C. Configure AWS WAF to send logs to an Amazon S3 bucket. Configure an Amazon Athena table with a partition projection of the S3 bucket. Use Athena to query the data in the S3 bucket.

D. Configure AWS WAF to send logs to a trail in AWS CloudTrail. Create an Amazon Data Firehose delivery stream to send the logs to an Amazon S3 bucket. Use Amazon Athena to query the data in the S3 bucket. Forgot my password

**Answer: **

**Timestamp: **

[View on ExamTopics](https://www.examtopics.com/discussions/amazon/view/404545-exam-aws-certified-security-specialty-scs-c03-topic-1-question-74-discussion/)

Comments: emupsx1 Most Recent 4 months, 30 days ago Selected Answer: C Why C is correct: Native Integration: AWS WAF can directly log traffic details to an Amazon S3 bucket. Analysis Tool: Amazon Athena is the standard serverless interactive query service to analyze these log files in S3 using SQL. Performance Optimization: Partition projection speeds up Athena queries and reduces costs by automating partition management based on date/time structures of WAF logs. upvoted 1 time Submit     Cancel ...

----------------------------------------

## Exam AWS Certified Security - Specialty SCS-C03 topic 1 question 75 discussion



A company with 50 AWS accounts managed through AWS Organizations needs to set up a centralized threat detection solution. The solution must identify suspicious and potentially malicious activity across all accounts in the organization.



The company uses AWS Control Tower and wants to centralize security findings into an audit account. A security team must receive email alerts within 5 minutes of any new security findings.



Which solution will meet these requirements?

A. Configure Amazon GuardDuty with a delegated administrator in the audit account. Enable GuardDuty across all member accounts through the delegated administrator account. Create an Amazon EventBridge rule to send GuardDuty findings to an Amazon SNS topic that delivers email notifications to the security team.

B. Set up Amazon GuardDuty in each member account, and create IAM roles to allow cross-account access from the audit account. Configure Amazon CloudWatch alarms in each account to monitor for security findings and to send notifications to an Amazon Simple Notification Service (Amazon SNS) topic in the audit account.

C. Enable AWS Config in the audit account and create custom rules to detect security issues across the organization. Use AWS Systems Manager to collect security findings from all member accounts and to store the findings in a centralized Amazon S3 bucket. Create an AWS Lambda function to monitor the S3 bucket and to send email notifications to the security team when new findings are detected.

D. Deploy Amazon Inspector agents across all Amazon EC2 instances in the organization. Configure the Amazon Inspector agents to report to a central Amazon Inspector console in the audit account. Create Amazon EventBridge rules in each member account to forward findings to an Amazon Simple Notification Service (Amazon SNS) topic in the audit account. Forgot my password

**Answer: **

**Timestamp: **

[View on ExamTopics](https://www.examtopics.com/discussions/amazon/view/404546-exam-aws-certified-security-specialty-scs-c03-topic-1-question-75-discussion/)

Comments: emupsx1 Most Recent 4 months, 30 days ago Selected Answer: A Why B, C &amp; D are incorrect: B: Managing GuardDuty individually across 50 accounts manually ignores the central management capabilities of AWS Organizations. C: AWS Config is for configuration history and compliance, not an active threat detection solution. D: Amazon Inspector focuses on host vulnerability scanning (CVEs) and network reachability, not organization-wide malicious activity detection. upvoted 1 time Submit     Cancel ...

----------------------------------------

## Exam AWS Certified Security - Specialty SCS-C03 topic 1 question 76 discussion



A security engineer needs to protect a public web application that runs in a VPC. The VPC hosts the origin for an Amazon CloudFront distribution. The application has experienced multiple layer 7 DDoS attacks. An AWS WAF web ACL is associated with the CloudFront distribution. The web ACL contains one AWS managed rule to protect against known IP addresses that have bad reputations.



The security engineer must configure an automated solution that detects and mitigates layer 7 DDoS attacks in real time with no manual effort.



Which solution will meet these requirements?

A. Enable AWS Shield Advanced on the CloudFront distribution. Configure alerts in Amazon CloudWatch for DDoS indicators.

B. Enable AWS Shield Advanced and configure proactive engagement with the AWS DDoS Response Team.

C. Deploy AWS Network Firewall in the VPCreate security policies that detect DDoS indicators. Create an AWS Lambda function to automatically update the web ACL rules during an attack.

D. Add a rate-based rule to the web ACL. Enable AWS Shield Advanced. Enable automatic application layer DDoS mitigation on the CloudFront distribution. Forgot my password

**Answer: **

**Timestamp: **

[View on ExamTopics](https://www.examtopics.com/discussions/amazon/view/404547-exam-aws-certified-security-specialty-scs-c03-topic-1-question-76-discussion/)

Comments: cristina22 Most Recent 3 months, 26 days ago Selected Answer: B Shield Advanced automatic application layer DDoS mitigation automatically creates, evaluates and deploys AWS WAF rules to mitigate layer 7 attacks upvoted 1 time Submit     Cancel ... d3717d5 6 months, 1 days ago Selected Answer: D Whan you see: CloudFront Layer 7 DDoS automatic mitigation no manual effort think of : AWS WAF + Shield Advanced Rule to remember:Layer 7 DDoS on CloudFront: Use AWS WAF rate-based rules + Shield Advanced automatic mitigation. Avoid custom Lambda-based mitigation systems. upvoted 1 time Submit     Cancel ...

----------------------------------------

## Exam AWS Certified Security - Specialty SCS-C03 topic 1 question 77 discussion



A company uses AWS Organizations with all features enabled. The company has enabled AWS Security Hub in all member accounts and in all AWS Regions. The company has created a VPC in the eu-central-1 Region in a member AWS account.



A security engineer has verified that no security group rules in the VPC allow inbound traffic from all IP addresses on TCP port 22. The security engineer needs an automated system. The system must prevent the creation of security group rules in the VPC that allow traffic from all IP addresses on TCP port 22.



Which solution will meet these requirements?

A. Enable an AWS CloudTrail organization trail that logs to an Amazon CloudWatch Logs log group. Create a CloudWatch alarm based on a log group metric filter. Configure the alarm to publish to an Amazon Simple Notification Service (Amazon SNS) topic when a security group rule is added that allows inbound traffic from all IP addresses. Subscribe the security engineer's email address to the SNS topic.

B. Create an Amazon EventBridge rule that filters for Security Hub findings about security group rules that allow inbound traffic from all IP addresses on TCP port 22. Configure the EventBridge rule to target an AWS Lambda function that removes the unwanted security group rule.

C. Create an SCP that prevents the creation or modification of security group rules that allow inbound traffic from all IP addresses on TCP port 22.

D. Deploy AWS Network Firewall with a rule that inspects all inbound traffic and prevents incoming traffic on TCP port 22. Forgot my password

**Answer: **

**Timestamp: **

[View on ExamTopics](https://www.examtopics.com/discussions/amazon/view/404548-exam-aws-certified-security-specialty-scs-c03-topic-1-question-77-discussion/)

Comments: Awraith Most Recent 4 months, 30 days ago Selected Answer: B Scp won't work here, can't block granularly. Auto-remediation needed. upvoted 1 time Submit     Cancel ... emupsx1 4 months, 30 days ago Selected Answer: B Option C fails because SCPs lack the capability to inspect request parameters like specific ports or IP CIDRs (0.0.0.0/0). They only block full API actions. B is the correct choice. upvoted 1 time Submit     Cancel ...

----------------------------------------

## Exam AWS Certified Security - Specialty SCS-C03 topic 1 question 78 discussion



A company runs an application on a fleet of Amazon EC2 instances. The application is accessible to users around the world. The company associates an AWS WAF web ACL with an Application Load Balancer (ALB) that routes traffic to the EC2 instances.



A security engineer is investigating a sudden increase in traffic to the application. The security engineer discovers a significant amount of potentially malicious requests coming from hundreds of IP addresses in two countries. The security engineer wants to quickly limit the potentially malicious requests. The security engineer does not want to prevent legitimate users from accessing the application.



Which solution will meet these requirements?

A. Use AWS WAF to implement a rate-based rule for all incoming requests.

B. Use AWS WAF to implement a geographical match rule to block all incoming traffic from the two countries.

C. Edit the ALB security group to include a geographical match rule to block all incoming traffic from the two countries

D. Add deny rules to the ALB security group that prohibit incoming requests from the IP addresses. Forgot my password

**Answer: **

**Timestamp: **

[View on ExamTopics](https://www.examtopics.com/discussions/amazon/view/409750-exam-aws-certified-security-specialty-scs-c03-topic-1-question-78-discussion/)

Comments: Stpn2me Most Recent 4 months, 7 days ago Selected Answer: A Update: It's A. An AWS WAF rate-based rule tracks the volume of incoming requests from specific web clients and automatically triggers a mitigation action—such as blocking, counting, or challenging traffic—when that volume exceeds a defined threshold within a specific timeframe. upvoted 1 time Submit     Cancel ...

----------------------------------------

## Exam AWS Certified Security - Specialty SCS-C03 topic 1 question 80 discussion



A company uses AWS Organizations to manage an organization that consists of three workload OUs: Production. Development, and Testing. The company uses AWS CloudFormation templates to define and deploy workload infrastructure in AWS accounts that are associated with the OUs. Different SCPs are attached to each workload OU.



The company successfully deployed a CloudFormation stack update to workloads in the Development OU and the Testing OU. When the company uses the same CloudFormation template to deploy the stack update in an account in the Production OU, the update fails. The error message reports insufficient IAM permissions.



What is the FIRST step that a security engineer should take to troubleshoot this issue?

A. Review the AWS CloudTrail logs in the account in the Production OU. Search for any failed API calls from CloudFormation during the deployment attempt.

B. Remove all the SCPs that are attached to the Production OU. Rerun the CloudFormation stack update to determine if the SCPs were preventing the CloudFormation API calls

C. Confirm that the role used by CloudFormation has sufficient permissions to create, update, and delete the resources that are referenced in the CloudFormation template

D. Make all the SCPs that are attached to the Production OU the same as the SCPs that are attached to the Testing OU. Forgot my password

**Answer: **

**Timestamp: **

[View on ExamTopics](https://www.examtopics.com/discussions/amazon/view/408956-exam-aws-certified-security-specialty-scs-c03-topic-1-question-80-discussion/)

Comments: d3717d5 Most Recent 6 months, 0 days ago Selected Answer: A Real world instinct is to look into scps, but when you see: FIRST troubleshooting step deployment failed permissions issue think: CloudTrail logs because CloudTrail is AWS’s authoritative API activity source. ## Rule To Remember FIRST troubleshooting step for AWS permission/deployment failures: Review CloudTrail for failed API calls before modifying IAM/SCPs. upvoted 1 time Submit     Cancel ... OCHT 6 months, 7 days ago Selected Answer: A CloudTrail records every API call, including the exact service actions attempted by CloudFormation (e.g., ec2:CreateVpc, iam:CreateRole, etc.). It explicitly shows Access Denied events and indicates whether the denial came from an IAM policy, SCP, or permission boundary. Since the same CloudFormation template succeeds in Development and Testing OUs but fails in Production, the most likely cause is a more restrictive Service Control Policy (SCP) attached to the Production OU. CloudTrail will quickly confirm this without making any changes. upvoted 1 time Submit     Cancel ...

----------------------------------------

## Exam AWS Certified Security - Specialty SCS-C03 topic 1 question 83 discussion



A security engineer needs to implement a logging solution that captures detailed information about objects in an Amazon S3 bucket. The solution must include details such as the IAM identity that makes the request and the time the object was accessed. The data must be structured and available in near real time.



Which solution meets these requirements?

A. Enable Amazon S3 server access logging on the S3 bucket. Create a new S3 bucket to store the logs. Analyze the logs from the logging S3 bucket.

B. Enable AWS CloudTrail data event logging. Create a new S3 bucket to store the logs. Analyze the logs from the logging S3 bucket.

C. Configure AWS Config rules to log access to the objects stored in the S3 bucket.

D. Enable Amazon Macie to log access to the objects stored in the S3 bucket. Forgot my password

**Answer: **

**Timestamp: **

[View on ExamTopics](https://www.examtopics.com/discussions/amazon/view/409753-exam-aws-certified-security-specialty-scs-c03-topic-1-question-83-discussion/)

Comments: d3717d5 Most Recent 6 months, 0 days ago Selected Answer: B ## Rule To Remember CloudTrail Management Events → control plane activity → bucket creation, IAM changes, API configuration actions CloudTrail Data Events → data plane activity → S3 object-level access (GetObject, PutObject, DeleteObject) upvoted 1 time Submit     Cancel ...

----------------------------------------

## Exam AWS Certified Security - Specialty SCS-C03 topic 1 question 84 discussion



A company needs to develop a code-signing application that will use a certificate authority (CA) to sign a code-signing certificate. The solution must use an AWS Key Management Service (AWS KMS) asymmetric key. The solution needs to collect and store immutable evidence about the creation, origin, and use of the KMS key for compliance purposes. This information must be made available to internal auditors.



Which solution meets these requirements?

A. Create an Amazon S3 bucket with S3 Object Lock enabled. Create an AWS CloudTrail trail with an event selector and log file validation enabled for all kms.amazonaws.com CreateKey events. Configure the event selector to send the CreateKey events to the S3 bucket. Create the KMS key. Update the event selector to filter for API calls that reference the KMS key ARN. Provide the auditors with access to the S3 bucket.

B. Implement logging for application operations that reference the KMS key. Ensure that the logs contain all associated metadata. Store the logs in an Amazon CloudWatch Logs log group. Configure an automated export of the log group Send the export to the auditors.

C. Create an Amazon DynamoDB table that the auditors can access. Create an AWS Lambda function that an Amazon EventBridge rule invokes. Configure the EventBridge rule to monitor KMS API calls. Configure the EventBridge rule to filter for all API calls that reference the KMS key ARN. Configure the Lambda function to store the contents of the API calls in the DynamoDB table.

D. Set up Amazon CloudWatch Logs Insights with a custom metric to track KMS key usage. Visualize the metrics by using a CloudWatch dashboard with real-time monitoring. Configure CloudWatch alarms. Use a subscription filter to replicate the data to a separate account for the auditors to review. Forgot my password

**Answer: **

**Timestamp: **

[View on ExamTopics](https://www.examtopics.com/discussions/amazon/view/409754-exam-aws-certified-security-specialty-scs-c03-topic-1-question-84-discussion/)

Comments: OCHT Most Recent 5 months, 26 days ago Selected Answer: A Why other options are wrong: Option Why Wrong B CloudWatch Logs is not immutable. Logs can be deleted or modified. No tamper-proof mechanism. Also requires manual export to auditors. C DynamoDB is mutable. Data can be updated or deleted. The Lambda→DynamoDB approach reinvents CloudTrail but without its compliance features (log file validation, integrity verification). D CloudWatch metrics track usage patterns, not the full API call details (who, what, when). Metrics are not immutable audit evidence. Dashboards are for monitoring, not compliance. upvoted 1 time Submit     Cancel ... d3717d5 6 months, 0 days ago Selected Answer: A ## Rule To Remember Compliance-grade audit evidence → CloudTrail logs + S3 Object Lock + log file validation S3 Object Lock → immutable WORM storage for auditors and compliance Operational monitoring → CloudWatch Configuration compliance → AWS Config API audit trail → CloudTrail Immutable audit evidence → CloudTrail + S3 Object Lock upvoted 2 times Submit     Cancel ...

----------------------------------------

## Exam AWS Certified Security - Specialty SCS-C03 topic 1 question 85 discussion



A company is planning to deploy a new log analysis environment. The company needs to implement a solution to analyze logs from multiple AWS services in near real time. The solution must provide the ability to search the logs. The solution also must send alerts to an existing Amazon Simple Notification Service (Amazon SNS) topic when specific logs match detection rules.



Which solution will meet these requirements?

A. Analyze the logs by using Amazon OpenSearch Service. Search the logs from the OpenSearch API. Use OpenSearch Service Security Analytics to match logs with detection rules and to send alerts to the SNS topic.

B. Analyze the logs by using AWS Security Hub. Search the logs from the Findings page in Security Hub. Create custom actions to match logs with detection rules and to send alerts to the SNS topic.

C. Analyze the logs by using Amazon CloudWatch Logs. Use a subscription filter to match logs with detection rules and to send alerts to the SNS topic. Search the logs manually by using CloudWatch Logs Insights.

D. Analyze the logs by using Amazon QuickSight. Search the logs by listing the query results in a dashboard. Run queries to match logs with detection rules and to send alerts to the SNS topic Forgot my password

**Answer: **

**Timestamp: **

[View on ExamTopics](https://www.examtopics.com/discussions/amazon/view/409755-exam-aws-certified-security-specialty-scs-c03-topic-1-question-85-discussion/)

Comments: OCHT Most Recent 6 months, 1 days ago Selected Answer: A Amazon OpenSearch Service (formerly Amazon Elasticsearch Service) is purpose-built for exactly this use case: It can ingest logs from virtually all AWS services (CloudWatch Logs, CloudTrail, VPC Flow Logs, Application Load Balancer logs, etc.) in near real time. It offers powerful, full-text search capabilities via the OpenSearch API. OpenSearch Security Analytics allows you to create detection rules (including anomaly detection, threat detection, and custom correlation rules) and automatically trigger actions such as sending notifications to an Amazon SNS topic. This combination satisfies all three requirements with a single, well-integrated service. upvoted 1 time Submit     Cancel ...

----------------------------------------

## Exam AWS Certified Security - Specialty SCS-C03 topic 1 question 90 discussion



A security engineer writes an AWS CloudFormation template for a company. The template deploys a secured Amazon S3 bucket. The company wants to use the S3 bucket as a standardized template for all other S3 buckets. The template needs to be available to all the AWS accounts that are part of a single organization in AWS Organizations. Then, all end users can use the template to deploy new S3 buckets.



Which solution will meet these requirements?

A. Use AWS Service Catalog to create a portfolio. Within the portfolio, create a new product by uploading the CloudFormation template for the secure S3 configuration. Grant access to end users by allowing access to the portfolio.

B. Use AWS Resource Access Manager (AWS RAM) to create a new resource share for the template. Select customer managed permissions and specify which IAM principals are allowed to access the shared resource.

C. Use AWS Resource Access Manager (AWS RAM) to create a new resource share for the template. Select AWS managed permissions for Amazon S3. Grant access to all AWS accounts in the organization.

D. Deploy the S3 bucket by using the template in an AWS account owned by the security engineer. Use AWS Resource Access Manager (AWS RAM) to share the bucket with all the other accounts within the organization for end users to use. Forgot my password

**Answer: **

**Timestamp: **

[View on ExamTopics](https://www.examtopics.com/discussions/amazon/view/429584-exam-aws-certified-security-specialty-scs-c03-topic-1-question-90-discussion/)

Comments: Amantux Most Recent 1 month, 26 days ago Selected Answer: A AWS Service Catalog es el servicio ideal para este escenario porque: Permite crear y administrar catálogos de productos aprobados (como plantillas CloudFormation). Los usuarios finales pueden lanzar productos desde la cartera sin modificar la plantilla. Se puede compartir la cartera con todas las cuentas de la organización de AWS Organizations. Garantiza consistencia, seguridad y control sobre las configuraciones desplegadas. AWS Resource Access Manager (RAM) sirve para compartir recursos existentes, no para distribuir plantillas CloudFormation. upvoted 1 time Submit     Cancel ...

----------------------------------------

## Exam AWS Certified Security - Specialty SCS-C03 topic 1 question 91 discussion



A company uses AWS KMS. During an attempt to attach an encrypted Amazon EBS volume to an Amazon EC2 instance, the attachment fails. The company discovers that a customer managed key has become unusable because the key material for the key was deleted. The company needs the data that is on the EBS volume.



A security engineer must recommend a solution to decrypt the EBS volume's encrypted data key. The solution must also attach the volume to the EC2 instance.



Which solution will meet these requirements?

A. Import new key material into the key. Attach the EBS volume.

B. Restore the EBS volume from a snapshot that was taken before the deletion of the key material.

C. Reimport the same key material that originally was imported into the key. Attach the EBS volume.

D. Create a new key. Import new key material. Attach the EBS volume. Forgot my password

**Answer: **

**Timestamp: **

[View on ExamTopics](https://www.examtopics.com/discussions/amazon/view/429604-exam-aws-certified-security-specialty-scs-c03-topic-1-question-91-discussion/)

Comments: Amantux Most Recent 1 month, 26 days ago Selected Answer: C Cuando una clave administrada por el cliente (CMK) en AWS KMS pierde su material clave importado, cualquier volumen cifrado con esa clave se vuelve inaccesible. Sin embargo, si el cliente reimporta exactamente el mismo material clave, la clave vuelve a ser funcional y los datos cifrados con ella pueden descifrarse nuevamente. Por tanto, la solución correcta es reimportar el mismo material clave que se usó originalmente para cifrar el volumen de EBS. Una vez restaurado el material, el volumen puede adjuntarse a la instancia EC2 y accederse normalmente. upvoted 1 time Submit     Cancel ...

----------------------------------------

## Exam AWS Certified Security - Specialty SCS-C03 topic 1 question 103 discussion



A security analyst is reviewing a workload on AWS. The workload includes Amazon EC2 instances, Amazon RDS DB instances, and Amazon S3 buckets. The workload processes personally identifiable information (PII) data.



The security analyst needs to evaluate whether the workload architecture aligns with AWS security best practices and to identify potential security risks.



Which solution will meet these requirements?

A. Use AWS Trusted Advisor to run all security checks across the workload components. Review the security recommendations. Export the findings to a CSV file for analysis.

B. Enable Amazon Macie across all S3 buckets and RDS DB instances to discover and classify PII data. Generate privacy compliance reports and an improvement plan to compare to AWS best practices.

C. Use the AWS Well-Architected Tool and define a workload. Complete the security pillar questionnaire. Generate an improvement plan based on the results of the questionnaire.

D. Enable Amazon Inspector. Configure Amazon Inspector to use hybrid scanning mode. Evaluate the findings from Amazon Inspector against the AWS Well-Architected Framework security pillar. Forgot my password

**Answer: **

**Timestamp: **

[View on ExamTopics](https://www.examtopics.com/discussions/amazon/view/429558-exam-aws-certified-security-specialty-scs-c03-topic-1-question-103-discussion/)

Comments: c99a31b Most Recent 9 days ago Selected Answer: C A tricky question-- most time when the question is about PII or sensitive data, Macie will be part of the answer. But the requirement does not mention PII or sensitive data! So B is out and C is the answer upvoted 1 time Submit     Cancel ...
