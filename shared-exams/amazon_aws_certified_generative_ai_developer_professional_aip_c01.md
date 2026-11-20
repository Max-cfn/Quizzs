# Exam Topics Questions

@thatonecodes

## Exam AWS Certified Generative AI Developer - Professional AIP-C01 topic 1 question 1 discussion



A retail company has a generative AI (GenAI) product recommendation application that uses Amazon Bedrock. The application suggests products to customers based on browsing history and demographics. The company needs to implement fairness evaluation across multiple demographic groups to detect and measure bias in recommendations between two prompt approaches. The company wants to collect and monitor fairness metrics in real time. The company must receive an alert if the fairness metrics show a discrepancy of more than 15% between demographic groups. The company must receive weekly reports that compare the performance of the two prompt approaches.

Which solution will meet these requirements with the LEAST custom development effort?

A. Configure an Amazon CloudWatch dashboard to display default metrics from Amazon Bedrock API calls. Create custom metrics based on model outputs. Set up Amazon EventBridge rules to invoke AWS lambda functions that perform post-processing analysis on model responses and publish custom fairness metrics.

B. Create the two prompt variants in Amazon Bedrock Prompt Management. Use Amazon Bedrock Flows to deploy the prompt variants with defined traffic allocation. Configure Amazon Bedrock guardrails that have content filters to monitor demographic fairness. Set up Amazon CloudWatch alarms on the GuardrailContentSource dimension that use InvocationsIntervened metrics to detect recommendation discrepancy threshold violations.

C. Set up Amazon SageMaker Clarify to analyze model outputs. Publish fairness metrics to Amazon CloudWatch. Create CloudWatch composite alarms that combine SageMaker Clarify bias metrics with Amazon Bedrock latency metrics to provide a comprehensive fairness evaluation dashboard.

D. Create an Amazon Bedrock model evaluation job to compare fairness between the two prompt variants. Enable model invocation logging in Amazon CloudWatch. Set up CloudWatch alarms for InvocationsIntervened metrics with a dimension for each demographic group. Forgot my password

**Answer: **

**Timestamp: **

[View on ExamTopics](https://www.examtopics.com/discussions/amazon/view/384112-exam-aws-certified-generative-ai-developer-professional-aip-c01-topic-1-question-1-discussion/)

Comments: Yeyodothi Most Recent 26 days ago Selected Answer: C SageMaker Clarify and SageMaker Monitor are two services that can be used to monitor for bias drift, in this case, the solution with SageMaker Clarify makes more sense because on of the things it monitors is whether the groupss that were represented in the training phase are still represented in the live scenarios upvoted 2 times Submit     Cancel ... JahnaviSrilekha 26 days ago Selected Answer: A For Bedrock deployed application using sagemaker is not valid. A looks better answer to me. upvoted 1 time Submit     Cancel ... blieskies 2 months, 26 days ago Selected Answer: C I guessed B but see now why it's wrong. Guardrails can't score outputs on bias but this is what Sagemaker Clarify specifically does - therefore it's C upvoted 1 time Submit     Cancel ... SSSam26 3 months, 5 days ago Selected Answer: D Why D is Correct ? - Compare two prompt approaches : Bedrock Model Evaluation job natively supports comparing prompt variants - Fairness metrics across demographics : Model evaluation provides bias/fairness assessment built-in - Monitoring : Model invocation logging → CloudWatch - Weekly reports : Bedrock evaluation jobs can be scheduled; CloudWatch dashboards provide reporting https://docs.aws.amazon.com/bedrock/latest/userguide/evaluation.html upvoted 1 time Submit     Cancel ... QuinnGT 3 months, 10 days ago Selected Answer: D Without a doubt, D is the correct answer. It's the least amount of custom development and follows their best practice guides. Also, SageMaker Clarify was announced to be shut down 3 months ago, why would they include it in the exam as a recommended choice? upvoted 1 time Submit     Cancel ... Sun01921 3 months, 25 days ago Selected Answer: A C seems like a reasonable choice, however it is not an &quot;least custom development&quot; path upvoted 1 time Submit     Cancel ... Chibuzo1 5 months, 6 days ago Selected Answer: D D wins because it uses Bedrock's native evaluation jobs (prompt comparison), native invocation logging (real-time monitoring), and native CloudWatch alarms (threshold alerting) — all configured features, not built ones. upvoted 1 time Submit     Cancel ... Chibuzo1 5 months, 6 days ago Selected Answer: D D wins because it uses Bedrock's native evaluation jobs (prompt comparison), native invocation logging (real-time monitoring), and native CloudWatch alarms (threshold alerting) — all configured features, not built ones. upvoted 1 time Submit     Cancel ... HarryNZ1982 5 months, 16 days ago Selected Answer: C Okay gave my AWS Certified Generative AI Developer - Professional AIP-C01 and obtained the certification. Thank you for the assistance. upvoted 2 times Submit     Cancel ... Gaparod 6 months, 0 days ago Selected Answer: C D. Bedrock Model Evaluation Jobs Model evaluation jobs are useful for offline comparisons, but: They are not designed for continuous real-time monitoring InvocationsIntervened metrics are tied to Guardrails, not fairness They do not provide operational bias alerts by demographic group cleared my exam, and the updated questions on CertsTopic helped me feel more confident. upvoted 1 time Submit     Cancel ... AWSCer1937 6 months, 10 days ago Selected Answer: C D. Bedrock Model Evaluation Jobs Model evaluation jobs are useful for offline comparisons, but: They are not designed for continuous real-time monitoring InvocationsIntervened metrics are tied to Guardrails, not fairness They do not provide operational bias alerts by demographic group upvoted 1 time Submit     Cancel ... teashoppe 6 months, 24 days ago Selected Answer: A Clarify doesn't do real-time nor integrate with Bedrock. Hard to choose, since A is valid but is a do it yourself solution and they want the least customer development. upvoted 1 time Submit     Cancel ... awstaro 6 months, 29 days ago Selected Answer: C Has anyone taken this exam recently? How much of the material was covered? upvoted 1 time Submit     Cancel ... AmyJoy 7 months, 12 days ago Selected Answer: C Real-time monitoring is a hard requirement that Bedrock evaluation jobs don't fully address Production monitoring vs. evaluation jobs are different use cases The maturity and specialization of SageMaker Clarify for this exact scenario upvoted 1 time Submit     Cancel ... jainparag1 8 months, 4 days ago Selected Answer: C C is correct. upvoted 1 time Submit     Cancel ... Thirukj 8 months, 10 days ago Selected Answer: C Use Amazon SageMaker Clarify to evaluate fairness across demographic groups and publish metrics to CloudWatch for monitoring and alarms. upvoted 3 times Submit     Cancel ... eesa 8 months, 10 days ago Selected Answer: C Clarify puede generar análisis y reportes exportables, lo que encaja mejor con la comparación periódica entre dos enfoques de prompt. La parte de “latency” en la opción C no es estrictamente necesaria para fairness, pero sigue siendo la alternativa que más se alinea con el requerimiento general y con menos desarrollo a medida upvoted 1 time Submit     Cancel ... hedykim 8 months, 10 days ago Selected Answer: C Bedrock Guardrails is a tool for the 'safety' of content, not for measuring 'statistical fairness'. upvoted 1 time Submit     Cancel ... xyztest 8 months, 11 days ago Selected Answer: D Correct answer upvoted 1 time Submit     Cancel ... eCosinus 8 months, 12 days ago Selected Answer: C Clarify computes fairness metrics automatically Metrics can be published to CloudWatch CloudWatch alarms can trigger alerts when metrics exceed thresholds (like &gt;15% discrepancy) upvoted 1 time Submit     Cancel ... Piddi 8 months, 12 days ago Selected Answer: A Option C sounds appealing because SageMaker Clarify is actually built for bias detection. However, combining Clarify bias metrics with Bedrock latency metrics in a &quot;composite alarm&quot; doesn't make logical sense — latency has nothing to do with fairness. Also, SageMaker Clarify is typically used for traditional ML model bias (pre/post-training), and integrating it with Bedrock GenAI outputs in real time would require significant custom work, which goes against the &quot;least custom development effort&quot; requirement. upvoted 1 time Submit     Cancel ... Piddi 8 months, 12 days ago Selected Answer: A Option D can be eliminated first. Bedrock model evaluation jobs are designed to compare models, not prompt variants for ongoing fairness monitoring. They're also batch jobs, not real-time monitoring solutions. The InvocationsIntervened metric is related to guardrails, not model evaluation jobs. Option B has issues too. Bedrock guardrails with content filters are designed to block harmful/toxic content, not to measure statistical fairness discrepancies across demographic groups. The InvocationsIntervened metric tells you how often a guardrail intervened, not whether recommendations are biased across demographics. This doesn't genuinely measure fairness in the way the question requires. upvoted 1 time Submit     Cancel ... Piddi 8 months, 12 days ago Selected Answer: A Option A is the most practical answer. Here's why: CloudWatch dashboards provide real-time monitoring EventBridge rules with Lambda functions can perform post-processing analysis on Bedrock responses as they happen, extracting fairness metrics per demographic group Custom CloudWatch metrics can capture the specific fairness discrepancies (the 15% threshold can be set as a CloudWatch alarm) Weekly reports can be generated from CloudWatch data While it does involve Lambda functions for post-processing, this is a well-established, relatively lightweight pattern using managed AWS services. The other options either misuse services (B, D) or propose illogical combinations (C). upvoted 1 time Submit     Cancel ... Piddi 8 months, 15 days ago Selected Answer: B Option B leverages native Amazon Bedrock capabilities end-to-end. Bedrock Prompt Management handles the two prompt variants, Bedrock Flows manages traffic allocation between them (enabling A/B comparison), and Bedrock Guardrails with content filters can be configured to monitor outputs for demographic fairness issues. CloudWatch alarms on the guardrail metrics (InvocationsIntervened with the GuardrailContentSource dimension) provide the real-time alerting when discrepancies exceed the threshold. Weekly reports can be generated from CloudWatch dashboards comparing the two variants. This approach uses managed services with minimal custom code. upvoted 2 times Submit     Cancel ... apcertification 8 months, 16 days ago Selected Answer: D D is the right answer upvoted 1 time Submit     Cancel ... GiorgioGss Highly Voted 8 months, 16 days ago Selected Answer: C A - Too Much Custom Development B - Guardrails Are Not Fairness Evaluation Tools D - Model Evaluation Jobs Are Not Continuous Monitoring https://docs.aws.amazon.com/sagemaker/latest/dg/clarify-measure-data-bias.html upvoted 8 times Submit     Cancel ... nylon66 8 months, 22 days ago Selected Answer: D D is collect. upvoted 1 time Submit     Cancel ... Kennai 8 months, 23 days ago Selected Answer: A no idea upvoted 1 time Submit     Cancel ...

----------------------------------------

## Exam AWS Certified Generative AI Developer - Professional AIP-C01 topic 1 question 2 discussion



A finance company is developing an AI assistant to help clients plan investments and manage their portfolios. The company identifies several high-risk conversation patterns such as requests for specific stock recommendations or guaranteed returns. High-risk conversation patterns could lead to regulatory violations if the company cannot implement appropriate controls.

The company must ensure that the AI assistant does not provide inappropriate financial advice, generate content about competitors, or make claims that are not factually grounded in the company's approved financial guidance. The company wants to use Amazon Bedrock Guardrails to implement a solution.

Which combination of steps will meet these requirements? (Choose three.)

A. Add the high-risk conversation patterns to a denied topics guardrail.

B. Configure a content filter guardrail to filter prompts that contain the high-risk conversation patterns.

C. Configure a content filter guardrail to filter prompts that contain competitor names.

D. Add the names of competitors as custom word filters. Set the input and output actions to block.

E. Set a low grounding score threshold.

F. Set a high grounding score threshold. Forgot my password

**Answer: **

**Timestamp: **

[View on ExamTopics](https://www.examtopics.com/discussions/amazon/view/384102-exam-aws-certified-generative-ai-developer-professional-aip-c01-topic-1-question-2-discussion/)

Comments: Yeyodothi Most Recent 26 days ago Selected Answer: ADF (A) With denied topics, you can set a topic and a description of what you don't want the AI to talk about --- (D) With word filters you can use a custom word filter via regex (for competitor names) --- (F) high contextual grounding score would make sense here, but that's just a guess. upvoted 2 times Submit     Cancel ... wei_w1233 1 month, 25 days ago Selected Answer: ADF High grounding score means bedrock guardrails is resticter about requiring ai's answer with evidence / reference upvoted 1 time Submit     Cancel ... Chibuzo1 6 months, 18 days ago Selected Answer: ADF The answers are A, D, and F because they use the three distinct and correctly matched guardrail mechanisms: denied topics for semantic blocking of high-risk financial conversation patterns, custom word filters for precise competitor name blocking in both directions, and a high grounding score threshold to enforce factual accuracy against the company's approved financial guidance. upvoted 3 times Submit     Cancel ... czzhyt 8 months, 9 days ago Selected Answer: ADF Anwser is ADF upvoted 1 time Submit     Cancel ... eCosinus 8 months, 12 days ago Selected Answer: ADF A, D, F upvoted 1 time Submit     Cancel ... Feanorich 8 months, 15 days ago Selected Answer: ADF A, D, F upvoted 2 times Submit     Cancel ... GiorgioGss 8 months, 16 days ago Selected Answer: ADF BC - out from the start E - out because low grounding makes it easier for content to pass upvoted 1 time Submit     Cancel ... eclipse_hunter 8 months, 23 days ago Selected Answer: ADF A. High-risk conversations (e.g., stock recommendations, guaranteed returns) are among the most important regulatory prohibitions. Reject Topic Guardrails are ideal for blocking these &quot;absolutely unacceptable&quot; responses. D. To prevent content creation related to competitors, a custom word filter that detects specific words and blocks their input and output is the most direct and reliable method. It offers more granular control than a content filter and is well-suited for handling company-specific prohibited words. F. AI-provided financial guidance must be strictly checked for factual accuracy. A higher threshold can more effectively suppress unfounded claims and delusional responses. upvoted 3 times Submit     Cancel ... eclipse_hunter 8 months, 23 days ago Selected Answer: ADF A, D, and F. upvoted 2 times Submit     Cancel ...

----------------------------------------

## Exam AWS Certified Generative AI Developer - Professional AIP-C01 topic 1 question 3 discussion



A company has deployed an AI assistant as a React application that uses AWS Amplify, an AWS AppSync GraphQL API, and Amazon Bedrock Knowledge Bases. The application uses the GraphQL API to call the Amazon Bedrock RetrieveAndGenerate API for knowledge base interactions. The company configures an AWS Lambda resolver to use the RequestResponse invocation type.

Application users report frequent timeouts and slow response times. Users report these problems more frequently for complex questions that require longer processing.

The company needs a solution to fix these performance issues and enhance the user experience.

Which solution will meet these requirements?

A. Use AWS Amplify AI Kit to implement streaming responses from the GraphQL API and to optimize client-side rendering.

B. Increase the timeout value of the Lambda resolver. Implement retry logic with exponential backoff.

C. Update the application to send an API request to an Amazon SQS queue. Update the AWS AppSync resolver to poll and process the queue.

D. Change the RetrieveAndGenerate API to the InvokeModelWithResponseStream API. Update the application to use an Amazon API Gateway WebSocket API to support the streaming response. Forgot my password

**Answer: **

**Timestamp: **

[View on ExamTopics](https://www.examtopics.com/discussions/amazon/view/384113-exam-aws-certified-generative-ai-developer-professional-aip-c01-topic-1-question-3-discussion/)

Comments: Gaurav955 Most Recent 2 months, 23 days ago Selected Answer: D Architectural fix (streaming) upvoted 1 time Submit     Cancel ... dbcert87 4 months, 24 days ago Selected Answer: D It did not mention least development effort or use existing. The solution is streaming response which is D. A solved FE integration but backend solve Bedrock streaming. upvoted 1 time Submit     Cancel ... Gordon2023 4 months, 27 days ago Selected Answer: A D is incorrect. You can replace RetrieveAndGenerate with Retrieve + InvokeModelWithResponseStream , not InvokeModelWithResponseStream alone. upvoted 1 time Submit     Cancel ... Chibuzo1 6 months, 18 days ago Selected Answer: A The answer is A because AWS Amplify AI Kit is specifically designed to add streaming response capability to the exact technology stack the company already uses — React, Amplify, AppSync GraphQL, and Amazon Bedrock — resolving both timeout and slow response issues by delivering progressive token streaming to the client without replacing any existing architectural components, while optimizing client-side rendering for the best possible user experience with the least implementation effort. upvoted 2 times Submit     Cancel ... vsi00 7 months, 8 days ago Selected Answer: A AWS Amplify AI Kit is designed for this exact pattern: a React app using AppSync and Bedrock, where long-running model responses hurt user experience. Its streaming model sends incremental updates to the browser over an AWS AppSync WebSocket subscription instead of making the frontend wait for one large synchronous response. AWS documents that Amplify AI Kit streaming works by having Lambda call Bedrock with a streaming API request, then forward chunks through AppSync to the client. That directly addresses the “timeouts and slow response times,” especially for longer answers, by improving time-to-first-response and perceived responsiveness. upvoted 3 times Submit     Cancel ... Andorkien 8 months, 2 days ago Selected Answer: D It’s D upvoted 1 time Submit     Cancel ... ArunRav 8 months, 3 days ago Selected Answer: D Streaming delivers the tokens as they are generated and there by reduce the latency. Rest of the options doesnt fit the use case. upvoted 1 time Submit     Cancel ... czzhyt 8 months, 9 days ago Selected Answer: A anwser is A upvoted 2 times Submit     Cancel ... Tanle 8 months, 9 days ago Selected Answer: A AWS Amplify AI Kit is specifically designed to solve this exact problem — it replaces the synchronous  RequestResponse  Lambda resolver pattern with a streaming architecture over AppSync WebSocket subscriptions, eliminating timeout issues for long-running Knowledge Base queries. upvoted 3 times Submit     Cancel ... GiorgioGss 8 months, 16 days ago Selected Answer: D https://builder.aws.com/content/2h2bFxVed2TfqVB3symJaJVZ5fk/streaming-a-response-from-bedrock-knowledge-base upvoted 1 time Submit     Cancel ...

----------------------------------------

## Exam AWS Certified Generative AI Developer - Professional AIP-C01 topic 1 question 4 discussion



An ecommerce company operates a global product recommendation system that needs to switch between multiple foundation models (FM) in Amazon Bedrock based on regulations, cost optimization, and performance requirements. The company must apply custom controls based on proprietary business logic, including dynamic cost thresholds, AWS Region-specific compliance rules, and real-time A/B testing across multiple FMs. The system must be able to switch between FMs without deploying new code. The system must route user requests based on complex rules including user tier, transaction value, regulatory zone, and real-time cost metrics that change hourly and require immediate propagation across thousands of concurrent requests.

Which solution will meet these requirements?

A. Deploy an AWS Lambda function that uses environment variables to store routing rules and Amazon Bedrock FM IDs. Use the Lambda console to update the environment variables when business requirements change. Configure an Amazon API Gateway REST API to read request parameters to make routing decisions.

B. Deploy Amazon API Gateway REST API request transformation templates to implement routing logic based on request attributes. Store Amazon Bedrock FM endpoints as REST API stage variables. Update the variables when the system switches between models.

C. Configure an AWS Lambda function to fetch routing configurations from the AWS AppConfig Agent for each user request. Run business logic in the Lambda function to select the appropriate FM for each request. Expose the FM through a single Amazon API Gateway REST API endpoint.

D. Use AWS Lambda authorizers for an Amazon API Gateway REST API to evaluate routing rules that are stored in AWS AppConfig. Return authorization contexts based on business logic. Route requests to model-specific Lambda functions for each Amazon Bedrock FM. Forgot my password

**Answer: **

**Timestamp: **

[View on ExamTopics](https://www.examtopics.com/discussions/amazon/view/384114-exam-aws-certified-generative-ai-developer-professional-aip-c01-topic-1-question-4-discussion/)

Comments: Chibuzo1 Most Recent 5 months, 6 days ago Selected Answer: C AppConfig acts as the real-time control plane — operators update routing rules (cost thresholds, A/B weights, regional compliance mappings) in AppConfig, and within seconds all Lambda instances pick up the new configuration via the AppConfig Agent sidecar, with no redeployment required. upvoted 3 times Submit     Cancel ... Andorkien 8 months, 2 days ago Selected Answer: C Answer is C upvoted 2 times Submit     Cancel ... ArunRav 8 months, 3 days ago Selected Answer: C Running the logic for selecting the FM in lambda and swtiching based on that as the other options are not fit for the purpose. upvoted 1 time Submit     Cancel ... GiorgioGss 8 months, 16 days ago Selected Answer: C &quot;without deploying new code.&quot; - Appconfig basic definition -https://docs.aws.amazon.com/appconfig/latest/userguide/what-is-appconfig.html upvoted 1 time Submit     Cancel ...

----------------------------------------

## Exam AWS Certified Generative AI Developer - Professional AIP-C01 topic 1 question 5 discussion



A company is developing an internal generative AI (GenAI) assistant that uses Amazon Bedrock to summarize corporate documents for multiple business units. The GenAI assistant must generate responses in a consistent format that includes a document summary, classification of business risks, and terms that are flagged for review. The GenAI assistant must adapt the tone of responses for each user's business unit, such as legal, human resources, or finance. The GenAI assistant must block hate speech, inappropriate topics, and sensitive information such as personal health information.

The company needs a solution to centrally manage prompt variants across business units and teams. The company wants to minimize ongoing orchestration efforts and maintenance for post-processing logic. The company also wants to have the ability to adjust content moderation criteria for the GenAI assistant over time.

Which solution will meet these requirements with the LEAST maintenance overhead?

A. Use Amazon Bedrock Prompt Management to configure reusable templates and business unit-specific prompt variants. Apply Amazon Bedrock guardrails that have category filters and sensitive term lists to block prohibited content.

B. Use Amazon Bedrock Prompt Management to define base templates. Enforce business unit-specific tone by using system prompt variables. Configure Amazon Bedrock guardrails to apply audience-based threshold tuning. Manage the guardrails by using an internal administration API.

C. Use Amazon Bedrock with business unit-based instruction injection in API calls. Store response formatting rules in Amazon DynamoDB. Use AWS Step functions to validate responses. Use Amazon Comprehend to apply content filters after the GenAI assistant generates responses.

D. Use Amazon Bedrock with custom prompt templates that are stored in Amazon DynamoDB. Create one AWS Lambda function to select business unit-specific prompts. Create a second Lambda function to call Amazon Comprehend to filter prohibited content from responses. Forgot my password

**Answer: **

**Timestamp: **

[View on ExamTopics](https://www.examtopics.com/discussions/amazon/view/384107-exam-aws-certified-generative-ai-developer-professional-aip-c01-topic-1-question-5-discussion/)

Comments: SSSam26 Most Recent 3 months, 5 days ago Selected Answer: A Why A is Correct Consistent format (summary, risks, flagged terms) : Prompt templates enforce output structure Tone per business unit : Business unit-specific prompt variants (legal tone, HR tone, finance tone) Block hate speech + inappropriate topics : Guardrails category filters (hate, misconduct, sexual, violence) upvoted 2 times Submit     Cancel ... thanhpolimi 5 months, 4 days ago Selected Answer: A Got the same answer from &quot;brain-gym&quot; site **Answer** The correct choice is **A**. **Short Reason:** Amazon Bedrock Prompt Management natively centralizes and manages reusable prompt templates and their variants. Amazon Bedrock Guardrails provide built-in capabilities to block hate speech, inappropriate topics, and sensitive information like PHI without requiring any custom post-processing logic, fulfilling the requirement for the least maintenance overhead. upvoted 3 times Submit     Cancel ... Chibuzo1 6 months, 17 days ago Selected Answer: A The answer is A because Bedrock Prompt Management with variants handles business-unit-specific tone through managed configuration, Bedrock Guardrails handles content moderation adjustably without code changes, and together they eliminate all custom orchestration infrastructure — delivering the required capabilities with the least maintenance overhead. upvoted 1 time Submit     Cancel ... ArunRav 8 months, 1 days ago Selected Answer: A A to be used as it has reusable templates as an option and bedrock guardrails which can be set to avoid the maintenance overhead compared to the other options upvoted 1 time Submit     Cancel ... Andorkien 8 months, 2 days ago Selected Answer: A Answer is A upvoted 1 time Submit     Cancel ... GiorgioGss 8 months, 16 days ago Selected Answer: A guardrails are meant to block - so A CD out - comprehend is not suited here B out - audience based tuning cannot be made with guardrails upvoted 1 time Submit     Cancel ...

----------------------------------------

## Exam AWS Certified Generative AI Developer - Professional AIP-C01 topic 1 question 6 discussion



A financial services company is building a customer support application that retrieves relevant financial regulation documents from a database based on semantic similarities to user queries. The application must integrate with Amazon Bedrock to generate responses. The application must be able to search documents that are in English, Spanish, and Portuguese. The application must filter documents by metadata such as publication date, regulatory agency, and document type.

The database stores approximately 10 million document embeddings. To minimize operational overhead, the company wants a solution that minimizes management and maintenance effort. The application must provide low-latency responses for real-time customer interactions.

Which solution will meet these requirements?

A. Use Amazon OpenSearch Serverless to provide vector search capabilities and metadata filtering. Connect to Amazon Bedrock Knowledge Bases to enable Retrieval Augmented Generation (RAG) capabilities that use an Anthropic Claude foundation model (FM).

B. Deploy an Amazon Aurora PostgreSQL database with the pgvector extension. Define tables to store embeddings and metadata. Use SQL queries to perform similarity searches. Send retrieved documents to Amazon Bedrock to generate responses.

C. Use Amazon S3 Vectors to configure a vector index and non-filterable metadata fields. Integrate S3 Vectors with Amazon Bedrock to enable Retrieval Augmented Generation (RAG) capabilities.

D. Set up an Amazon Neptune Analytics graph database. Configure a vector index that has appropriate dimensionality to store document embeddings. Use Amazon Bedrock to perform graph-based retrieval and to generate responses. Forgot my password

**Answer: **

**Timestamp: **

[View on ExamTopics](https://www.examtopics.com/discussions/amazon/view/384108-exam-aws-certified-generative-ai-developer-professional-aip-c01-topic-1-question-6-discussion/)

Comments: Chibuzo1 Most Recent 6 months, 17 days ago Selected Answer: A The answer is A because OpenSearch Serverless with Amazon Bedrock Knowledge Bases is the purpose-built, fully managed stack for exactly this scenario — multilingual semantic search at 10 million vector scale, metadata filtering, RAG with a Claude FM, and minimal operational overhead with no cluster management, no capacity planning, and no custom integration code. upvoted 2 times Submit     Cancel ... ArunRav 8 months, 1 days ago Selected Answer: A Opensearch serverless for low latency and low maintenance upvoted 2 times Submit     Cancel ... Andorkien 8 months, 2 days ago Selected Answer: A Answer is A upvoted 1 time Submit     Cancel ... GiorgioGss 8 months, 16 days ago Selected Answer: A &quot;semantic search&quot; = opensearch upvoted 2 times Submit     Cancel ...

----------------------------------------

## Exam AWS Certified Generative AI Developer - Professional AIP-C01 topic 1 question 7 discussion



A medical company is building a generative AI (GenAI) application that uses RAG to provide evidence-based medical information. The application uses Amazon OpenSearch Service to retrieve vector embeddings. Users report that searches frequently miss results that contain exact medical terms and acronyms and return too many semantically similar but irrelevant documents. The company needs to improve retrieval quality and maintain low end user latency, even as the document collection grows to millions of documents.

Which solution will meet these requirements with the LEAST operational overhead?

A. Configure hybrid search by combining vector similarity with keyword matching to improve semantic understanding and exact term and acronym matching.

B. Increase the dimensions of the vector embeddings from 384 to 1536. Use a post-processing AWS Lambda function to filter out irrelevant results after retrieval.

C. Replace OpenSearch Service with Amazon Kendra. Use query expansion to handle medical acronyms and terminology variants during pre-processing.

D. Implement a two-stage retrieval architecture in which initial vector search results are re-ranked by an ML model that is hosted on Amazon SageMaker AI. Forgot my password

**Answer: **

**Timestamp: **

[View on ExamTopics](https://www.examtopics.com/discussions/amazon/view/384109-exam-aws-certified-generative-ai-developer-professional-aip-c01-topic-1-question-7-discussion/)

Comments: Yeyodothi Most Recent 26 days ago Selected Answer: A OpenSearch supports hybrid search i.e. combining dense vector similary search with sparse keyword search, i've seen this with trying to retrieve an employee with associated correct employee ID, it ranked the results via employee name on vector search only and returned with the correct data once search type was changed to hybrid upvoted 2 times Submit     Cancel ... Chibuzo1 5 months, 5 days ago Selected Answer: A Hybrid search is a configuration-level change within the existing OpenSearch Service deployment. It directly solves both reported problems (exact term recall and semantic precision) without new services, migrations, or post-processing pipelines. upvoted 2 times Submit     Cancel ... ArunRav 8 months, 1 days ago Selected Answer: A Using hybrid search in opensearch can help to solve this.Option C was an option if the operational overhead was not a criteria. upvoted 1 time Submit     Cancel ... GiorgioGss 8 months, 16 days ago Selected Answer: A &quot; Using hybrid search, you get best-of-all-worlds retrieval.&quot; - https://aws.amazon.com/blogs/big-data/supercharge-your-rag-applications-with-amazon-opensearch-service-and-aryn-docparse/ upvoted 1 time Submit     Cancel ...

----------------------------------------

## Exam AWS Certified Generative AI Developer - Professional AIP-C01 topic 1 question 8 discussion



A company runs a generative AI (GenAI)-powered summarization application in an application AWS account that uses Amazon Bedrock. The application architecture includes an Amazon API Gateway REST API that forwards requests to AWS Lambda functions that are attached to private VPC subnets. The application summarizes sensitive customer records that the company stores in a governed data lake in a centralized data storage account. The company has enabled Amazon S3, Amazon Athena, and AWS Glue in the data storage account.

The company must ensure that calls that the application makes to Amazon Bedrock use only private connectivity between the company's application VPC and Amazon Bedrock. The company's data lake must provide fine-grained column-level access across the company's AWS accounts.

Which solution will meet these requirements?

A. In the application account, create interface VPC endpoints for Amazon Bedrock runtimes. Run Lambda functions in private subnets. Use IAM conditions on inference and data-plane policies to allow calls only to approved endpoints and roles. In the data storage account, use AWS Lake Formation LF-tag-based access control to create table and column-level cross-account grants.

B. Run Lambda functions in private subnets. Configure a NAT gateway to provide access to Amazon Bedrock and the data lake. Use S3 bucket policies and ACLs to manage permissions. Export AWS CloudTrail logs to Amazon S3 to perform weekly reviews.

C. Create a gateway endpoint only for Amazon S3 in the application account. Invoke Amazon Bedrock through public endpoints. Use database-level grants in AWS Lake Formation to manage data access. Stream AWS CloudTrail logs to Amazon CloudWatch Logs. Do not set up metric filters or alarms.

D. Use VPC endpoints to provide access to Amazon Bedrock and Amazon S3 in the application account. Use only IAM path-based policies to manage data lake access. Send AWS CloudTrail logs to Amazon CloudWatch Logs. Periodically create dashboards and allow public fallback for cross-Region reads to reduce setup time. Forgot my password

**Answer: **

**Timestamp: **

[View on ExamTopics](https://www.examtopics.com/discussions/amazon/view/384110-exam-aws-certified-generative-ai-developer-professional-aip-c01-topic-1-question-8-discussion/)

Comments: Chibuzo1 Most Recent 6 months, 17 days ago Selected Answer: A The answer is A because interface VPC endpoints with IAM source VPC conditions are the only mechanism that enforces exclusively private connectivity to Amazon Bedrock, while Lake Formation LF-tag-based cross-account column grants are the only mechanism among the options that delivers fine-grained, column-level data lake access control across the application and data storage accounts — both requirements are satisfied with purpose-built AWS services and no public network fallback. upvoted 3 times Submit     Cancel ... ArunRav 8 months, 1 days ago Selected Answer: A A is the only place where connectivity is not publice.B and C using public connectivity. D is is lacking the column level access with lake formation provide. upvoted 1 time Submit     Cancel ... GiorgioGss 8 months, 16 days ago Selected Answer: A besides the fact BCD are going public there is also this key: &quot;must provide fine-grained column-level access&quot; - only possible with LakeFormation. upvoted 1 time Submit     Cancel ... duo_duo 8 months, 23 days ago Selected Answer: A a is right upvoted 3 times Submit     Cancel ...

----------------------------------------

## Exam AWS Certified Generative AI Developer - Professional AIP-C01 topic 1 question 9 discussion



A media company must use Amazon Bedrock to implement a robust governance process for AI-generated content. The company needs to manage hundreds of prompt templates. Multiple teams use the templates across multiple AWS Regions to generate content. The solution must provide version control with approval workflows that include notifications for pending reviews. The solution must also provide detailed audit trails that document prompt activities and consistent prompt parameterization to enforce quality standards.

Which solution will meet these requirements?

A. Configure Amazon Bedrock Studio prompt templates. Use Amazon CloudWatch to create dashboards that display prompt usage metrics. Store the approval status of content in Amazon DynamoDB. Use AWS Lambda functions to enforce approvals.

B. Use Amazon Bedrock Prompt Management to implement version control. Configure AWS CloudTrail for audit logging. Use IAM policies to control approval permissions. Create parameterized prompt templates by specifying variables.

C. Use AWS Step Functions to create an approval workflow. Store prompts as documents in Amazon S3. Use tags to implement version control. Use Amazon EventBridge to send notifications.

D. Deploy Amazon SageMaker Canvas with prompt templates that are stored in Amazon S3. Use AWS CloudFormation to implement version control. Use AWS Config to enforce approval policies. Forgot my password

**Answer: **

**Timestamp: **

[View on ExamTopics](https://www.examtopics.com/discussions/amazon/view/384105-exam-aws-certified-generative-ai-developer-professional-aip-c01-topic-1-question-9-discussion/)

Comments: Chibuzo1 Most Recent 6 months, 16 days ago Selected Answer: B The answer is B because Amazon Bedrock Prompt Management is the only purpose-built, managed service for prompt template governance — providing native versioning, IAM-controlled approval gates, parameterized templates for quality enforcement, and full CloudTrail audit coverage — without requiring any custom infrastructure, custom code, or workarounds for what the service delivers out of the box. upvoted 1 time Submit     Cancel ... 2d5eb96 7 months, 19 days ago Selected Answer: B Prompt management for version control, audit cloudtrail and permission management IAM upvoted 1 time Submit     Cancel ... ArunRav 8 months, 1 days ago Selected Answer: B Option B gives you the right version control option which is there.Option D gives CF as a version control option which is not the correct option. upvoted 1 time Submit     Cancel ... Anvith 8 months, 11 days ago Selected Answer: B Prompt Management gives versioning and parameterized templates; CloudTrail provides audit trails; IAM controls approvals. Fits “hundreds of templates, multi Region, approvals, audit”. upvoted 1 time Submit     Cancel ... GiorgioGss 8 months, 16 days ago Selected Answer: B Leaving aside that only B has the cloudtrail in it to satisfy the &quot;audit trails&quot;. With BPM (bedrock prompt management) you can version your prompts native. https://docs.aws.amazon.com/bedrock/latest/userguide/prompt-management.html upvoted 1 time Submit     Cancel ... duo_duo 8 months, 23 days ago Selected Answer: B b is right upvoted 3 times Submit     Cancel ...

----------------------------------------

## Exam AWS Certified Generative AI Developer - Professional AIP-C01 topic 1 question 10 discussion



A company is developing a customer support application that uses Amazon Bedrock foundation models (FMs) to provide real-time AI assistance to the company's employees. The application must display AI-generated responses character by character as the responses are generated. The application needs to support thousands of concurrent users with minimal latency. The responses typically take 15 to 45 seconds to finish.

Which solution will meet these requirements?

A. Configure an Amazon API Gateway WebSocket API with an AWS Lambda integration. Configure the WebSocket API to invoke the Amazon Bedrock InvokeModelWithResponseStream API and stream partial responses through WebSocket connections.

B. Configure an Amazon API Gateway REST API with an AWS Lambda integration. Configure the REST API to invoke the Amazon Bedrock standard InvokeModel API and implement frontend client-side polling every 100 ms for complete response chunks.

C. Implement direct frontend client connections to Amazon Bedrock by using IAM user credentials and the InvokeModelWithResponseStream API without any intermediate gateway or proxy layer.

D. Configure an Amazon API Gateway HTTP API with an AWS Lambda integration. Configure the HTTP API to cache complete responses in an Amazon DynamoDB table and serve the responses through multiple paginated GET requests to frontend clients. Forgot my password

**Answer: **

**Timestamp: **

[View on ExamTopics](https://www.examtopics.com/discussions/amazon/view/384104-exam-aws-certified-generative-ai-developer-professional-aip-c01-topic-1-question-10-discussion/)

Comments: Chibuzo1 Most Recent 6 months, 16 days ago Selected Answer: A The answer is A because WebSocket connections with InvokeModelWithResponseStream is the purpose-built architecture for real-time AI response streaming — tokens flow from Bedrock through Lambda to the WebSocket connection to the client as they are generated, API Gateway handles massive concurrent connection scaling automatically, and the persistent connection model is well-suited for the 15-45 second response durations without timeout or polling overhead upvoted 3 times Submit     Cancel ... GiorgioGss 8 months, 16 days ago Selected Answer: A https://docs.aws.amazon.com/bedrock/latest/APIReference/API_runtime_InvokeModelWithResponseStream.html C - &quot;The application needs to support thousands of concurrent users&quot; D - caching defeats real-time streaming B is the most obvious why is wrong. upvoted 3 times Submit     Cancel ... duo_duo 8 months, 23 days ago Selected Answer: A a is right upvoted 5 times Submit     Cancel ...

----------------------------------------

## Exam AWS Certified Generative AI Developer - Professional AIP-C01 topic 1 question 11 discussion



A company is using Amazon Bedrock to design an application to help researchers apply for grants. The application is based on an Amazon Nova Pro foundation model (FM). The application contains four required inputs and must provide responses in a consistent text format. The company wants to receive a notification in Amazon Bedrock if a response contains bullying language. However, the company does not want to block all flagged responses.

The company creates an Amazon Bedrock flow that takes an input prompt and sends it to the Amazon Nova Pro FM. The Amazon Nova Pro FM provides a response.

Which additional steps must the company take to meet these requirements? (Choose two.)

A. Use Amazon Bedrock Prompt Management to specify the required inputs as variables. Select an Amazon Nova Pro FM. Specify the output format for the response. Add the prompt to the prompts node of the flow.

B. Create an Amazon Bedrock guardrail that applies the hate content filter. Set the filter response to block. Add the guardrail to the prompts node of the flow.

C. Create an Amazon Bedrock prompt router. Specify an Amazon Nova Pro FM. Add the required inputs as variables to the input node of the flow. Add the prompt router to the prompts node. Add the output format to the output node.

D. Create an Amazon Bedrock guardrail that applies the insults content filter. Set the filter response to detect. Add the guardrail to the prompts node of the flow.

E. Create an Amazon Bedrock application inference profile that specifies an Amazon Nova Pro FM. Specify the output format for the response in the description. Include a tag for each of the input variables. Add the profile to the prompts node of the flow. Forgot my password

**Answer: **

**Timestamp: **

[View on ExamTopics](https://www.examtopics.com/discussions/amazon/view/384106-exam-aws-certified-generative-ai-developer-professional-aip-c01-topic-1-question-11-discussion/)

Comments: rosnl Most Recent 2 months, 16 days ago Selected Answer: AD A and D. Provides both requirement. D is kind of given in the way it says detect only, not block, as per the question. upvoted 1 time Submit     Cancel ... Chibuzo1 5 months, 5 days ago Selected Answer: AD Why A is correct: Bedrock Prompt Management is exactly the right tool for structured, consistent prompting with required inputs. It lets you define variables (the four required inputs), lock in an FM (Nova Pro), Why D is correct: The guardrail requirement has two precise constraints: detect bullying language without blocking responses. &quot;Bullying&quot; falls under the insults content filter category in Bedrock Guardrails (not &quot;hate,&quot; which covers discrimination based on identity). upvoted 2 times Submit     Cancel ... shuvo_123 5 months, 14 days ago Selected Answer: AD Requirement 1 The application contains four required inputs and must provide responses in a consistent text format. This is exactly what Amazon Bedrock Prompt Management is designed for: Define prompt templates. Define required input variables. Enforce a consistent output structure. Reuse prompts within Bedrock Flows. Hence - Option A Requirement 2 Receive a notification if a response contains bullying language, but do not block all flagged responses. In Bedrock Guardrails: Bullying language falls under the Insults content category. To flag content without blocking it, use Detect rather than Block. Hence Option D Finally A,D upvoted 1 time Submit     Cancel ... Bansel 8 months, 12 days ago Selected Answer: AD We need: Prompt variables → enforce required inputs Output formatting → consistent structure Guardrails with detection only → notification without blocking. A. Use Amazon Bedrock Prompt Management D. Create a Bedrock Guardrail with insult detection upvoted 1 time Submit     Cancel ... GiorgioGss 8 months, 16 days ago Selected Answer: AD B - guardrail will block and we need it to pass C - used for routing between multiple models E - mainly for model selection and metadata upvoted 1 time Submit     Cancel ...

----------------------------------------

## Exam AWS Certified Generative AI Developer - Professional AIP-C01 topic 1 question 12 discussion



A healthcare company is using Amazon Bedrock to build a Retrieval Augmented Generation (RAG) application that helps practitioners make clinical decisions. The application must achieve high accuracy for patient information retrievals, identify hallucinations in generated content, and reduce human review costs.

Which solution will meet these requirements?

A. Use Amazon Comprehend to analyze and classify RAG responses and to extract medical entities and relationships. Use AWS Step Functions to orchestrate automated evaluations. Configure Amazon CloudWatch metrics to track entity recognition confidence scores. Configure CloudWatch to send an alert when accuracy falls below specified thresholds.

B. Implement automated large language model (LLM)-based evaluations that use a specialized model that is fine-tuned for medical content to assess all responses. Deploy AWS Lambda functions to parallelize evaluations. Publish results to Amazon CloudWatch metrics that track relevance and factual accuracy.

C. Configure Amazon CloudWatch Synthetics to generate test queries that have known answers on a regular schedule, and track model success rates. Set up dashboards that compare synthetic test results against expected outcomes.

D. Deploy a hybrid evaluation system that uses an automated LLM-as-a-judge evaluation to initially screen responses and targeted human reviews for edge cases. Use Amazon SageMaker Feature Store to maintain evaluation datasets. Use a built-in Amazon Bedrock evaluation to track retrieval precision and hallucination rates. Forgot my password

**Answer: **

**Timestamp: **

[View on ExamTopics](https://www.examtopics.com/discussions/amazon/view/384103-exam-aws-certified-generative-ai-developer-professional-aip-c01-topic-1-question-12-discussion/)

Comments: awsguruji Most Recent 7 months, 26 days ago Selected Answer: D D is the correct answer. &quot;Human&quot; is involved to gain high accuracy. upvoted 1 time Submit     Cancel ... GiorgioGss 8 months, 16 days ago Selected Answer: D A - Comprehend excels at NER but misses hallucination detection and RAG-specific metrics B - High risk for false negatives in critical healthcare scenarios C - CloudWatch Synthetics tests endpoints, not LLM output quality D - https://docs.aws.amazon.com/bedrock/latest/userguide/evaluation-judge.html upvoted 4 times Submit     Cancel ... duo_duo 8 months, 23 days ago Selected Answer: D d is the correct answer. upvoted 1 time Submit     Cancel ...

----------------------------------------

## Exam AWS Certified Generative AI Developer - Professional AIP-C01 topic 1 question 13 discussion



Company configures a landing zone in AWS Control Tower. The company handles sensitive data that must remain within the European Union. The company must use only the eu-central-1 Region. The company uses SCPs to enforce data residency policies. GenAI developers at the company are assigned IAM roles that have full permissions for Amazon Bedrock.

The company must ensure that GenAI developers can use the Amazon Nova Pro model through Amazon Bedrock only by using cross-Region inference (CRI) and only in eu-central-1. The company enables model access for the GenAI developer IAM roles in Amazon Bedrock. However, when a GenAI developer attempts to invoke the model through the Amazon Bedrock Chat/Text playground, the GenAI developer receives the following error.

User: arn:aws:sts::123456789012:assumed-role/AssumedDevRole/DevUserName

Action: bedrock:InvokeModelWithResponseStream

On resource(s): arn:aws:bedrock:eu-west-3::foundation-model/amazon.nova-pro-v1:0

Context: a service control policy explicitly denies the action

The company needs a solution to resolve the error. The solution must retain the company's existing governance controls and must provide precise access control. The solution must comply with the company's existing data residency policies.

Which combination of solutions will meet these requirements? (Choose two.)

A. Add an AdministratorAccess policy to the GenAI developer IAM role.

B. Extend the existing SCPs to enable CRI for the eu.amazon.nova-pro-v1:0 inference profile.

C. Enable Amazon Bedrock model access for Amazon Nova Pro in the eu-west-3 Region.

D. Validate that the GenAI developer IAM roles have permissions to invoke Amazon Nova Pro through the eu.amazon.nova-pro.v1:0 inference profile on all European Union AWS Regions that can serve the model.

E. Extend the existing SCP to enable CRI for the eu.* inference profile. Forgot my password

**Answer: **

**Timestamp: **

[View on ExamTopics](https://www.examtopics.com/discussions/amazon/view/384239-exam-aws-certified-generative-ai-developer-professional-aip-c01-topic-1-question-13-discussion/)

Comments: SSSam26 Most Recent 3 months, 5 days ago Selected Answer: BD Why B is Correct ? - Resolve SCP block : SCP updated to allow CRI inference profile resource ARN - Retain governance : SCP still restricts — just adds specific CRI allowance - Data residency: eu.* inference profile ensures traffic stays within EU Regions only Why D is Correct too ? CRI needs multi-region access : CRI routes requests across EU regions — IAM must allow all EU regions that serve the model The error occurred in eu-west-3 : IAM role needs permission for the EU inference profile (which routes to eu-west-3, eu-west-1, etc.) upvoted 2 times Submit     Cancel ... de1612d 7 months, 6 days ago Selected Answer: BD Answer is B&amp;D upvoted 1 time Submit     Cancel ... a9fb7b2 7 months, 21 days ago Selected Answer: BD The error shows the request is being routed to eu-west-3 and is being blocked by an SCP. With Amazon Bedrock cross-Region inference, if any destination Region in the selected inference profile is blocked by SCPs, the request fails. AWS says you must allow the Bedrock invoke actions in all destination Regions that belong to the chosen inference profile. Also, for geographic cross-Region inference in the EU, the IAM role needs permission for: 1. the EU inference profile, 2. the foundation model in the source Region, and 3. the foundation model in all destination Regions in that EU profile. AWS also recommends using the specific inference profile ARN for granular control. upvoted 2 times Submit     Cancel ... 67bdb19 8 months, 22 days ago Selected Answer: B This feels like a 50/50 between two options. I'll go with B. upvoted 1 time Submit     Cancel ...

----------------------------------------

## Exam AWS Certified Generative AI Developer - Professional AIP-C01 topic 1 question 14 discussion



A financial services company is developing a customer service AI assistant by using Amazon Bedrock. The AI assistant must not discuss investment advice with users. The AI assistant must block harmful content, mask personally identifiable information (PII), and maintain audit trails for compliance reporting. The AI assistant must apply content filtering to both user inputs and model responses based on content sensitivity.

The company requires an Amazon Bedrock guardrail configuration that will effectively enforce policies with minimal false positives. The solution must provide multiple handling strategies for multiple types of sensitive content.

Which solution will meet these requirements?

A. Configure a single guardrail and set content filters to high for all categories. Set up denied topics for investment advice and include sample phrases to block. Set up sensitive information filters that apply the block action for all PII entities. Apply the guardrail to all model inference calls.

B. Configure multiple guardrails by using tiered policies. Create one guardrail and set content filters to high. Configure the guardrail to block PII for public interactions. Configure a second guardrail and set content filters to medium. Configure the second guardrail to mask PII for internal use. Configure multiple topic-specific guardrails to block investment advice and set up contextual grounding checks.

C. Configure a guardrail and set content filters to medium for harmful content. Set up denied topics for investment advice and include clear definitions and sample phrases to block. Configure sensitive information filters to mask PII in responses and to block financial information in inputs. Enable both input and output evaluations that use custom blocked messages for audits.

D. Create a separate guardrail for each use case. Create one guardrail that applies a harmful content filter. Create a guardrail to apply topic filters for investment advice. Create a guardrail to apply sensitive information filters to block PII. Use AWS Step Functions to chain the guardrails together sequentially. Use conditional logic based on content classification. Forgot my password

**Answer: **

**Timestamp: **

[View on ExamTopics](https://www.examtopics.com/discussions/amazon/view/384243-exam-aws-certified-generative-ai-developer-professional-aip-c01-topic-1-question-14-discussion/)

Comments: Chibuzo1 Most Recent 5 months, 5 days ago Selected Answer: C The key architectural insight in C is that it uses one well-configured guardrail with differentiated actions — mask vs. block, input vs. output — rather than blunt uniform settings. upvoted 1 time Submit     Cancel ... de1612d 7 months, 11 days ago Selected Answer: C Answer is C upvoted 1 time Submit     Cancel ... 67bdb19 8 months, 22 days ago Selected Answer: C I'd bet my certification on C. It's the only logical solution presented. upvoted 1 time Submit     Cancel ...

----------------------------------------

## Exam AWS Certified Generative AI Developer - Professional AIP-C01 topic 1 question 15 discussion



An ecommerce company is developing a generative AI (GenAI) solution that uses Amazon Bedrock with Anthropic Claude to recommend products to customers. Customers report that some of the recommended products are not available for sale on the website or are not relevant to the customer. Customers also report that the solutions takes a long time to generate some recommendations.

The company investigates the issues and finds that most interactions between customers and the product recommendation solution are unique. The company confirms that the solutions recommends products that are not in the company's product catalog. The company must resolve these issues.

Which solution will meet this requirement?

A. Increase grounding within Amazon Bedrock Guardrails. Enable Automated Reasoning checks. Set up provisioned throughput.

B. Use prompt engineering to restrict the model responses to relevant products. Use streaming techniques such as the InvokeModelWithResponseStream action to reduce perceived latency for the customers.

C. Create an Amazon Bedrock knowledge base. Implement Retrieval Augmented Generation (RAG). Set the PerformanceConfigLatency parameter to optimized.

D. Store product catalog data in Amazon OpenSearch Service. Validate the model's product recommendations against the product catalog. Use Amazon DynamoDB to implement response caching. Forgot my password

**Answer: **

**Timestamp: **

[View on ExamTopics](https://www.examtopics.com/discussions/amazon/view/384230-exam-aws-certified-generative-ai-developer-professional-aip-c01-topic-1-question-15-discussion/)

Comments: vedratna Most Recent 27 days ago Selected Answer: B By using explicit prompt engineering strategies (such as system prompts with strict constraints: &quot;You must only recommend products from the provided text list. Do not invent products or recommend anything outside this catalog. If no matching item exists, state that cleanly&quot;), you force Anthropic Claude to ground its logic strictly within your rules. 1. The prompt notes that generating the full text blocks takes a long time. By switching to the streaming API, text fragments are delivered to the customer's browser character-by-character as they are computed. This drastically reduces the perceived latency, making the user experience feel immediate and interactive. upvoted 1 time Submit     Cancel ... 2d5eb96 7 months, 17 days ago Selected Answer: C RAG will solve the issue around recommending product that are only available, the Option C also adress the time to generate recommendations (RAG are fast and PerformanceConfigLatency) upvoted 2 times Submit     Cancel ... 67bdb19 8 months, 22 days ago Selected Answer: C I'm arriving at C by process of elimination. upvoted 2 times Submit     Cancel ...

----------------------------------------

## Exam AWS Certified Generative AI Developer - Professional AIP-C01 topic 1 question 16 discussion



A company is using AWS Lambda and REST APIs to build a reasoning agent to automate support workflows. The system must preserve memory across interactions, share the relevant agent state, and support event-driven invocation and synchronous invocation. The system must also enforce access control and session-based permissions.

Which combination of steps provides the MOST scalable solution? (Choose two.)

A. Use Amazon Bedrock AgentCore to manage memory and session-aware reasoning. Deploy the agent with built-in identity support, event handling, and observability.

B. Register the Lambda functions and the REST APIs as actions by using Amazon API Gateway and Amazon EventBridge. Enable Amazon Bedrock AgentCore to invoke the Lambda functions and the REST APIs without custom orchestration code.

C. Use Amazon Bedrock Agents for reasoning and conversation management. Use AWS Step Functions and Amazon SQS queues for orchestration. Store the agent state in Amazon DynamoDB to maintain memory between steps.

D. Deploy the reasoning logic as a container on Amazon ECS behind Amazon API Gateway. Use Amazon Aurora to store memory data and identity data.

E. Build a custom RAG pipeline by using Amazon Kendra and Amazon Bedrock. Use AWS Lambda to orchestrate tool invocations. Store the agent state in Amazon S3. Forgot my password

**Answer: **

**Timestamp: **

[View on ExamTopics](https://www.examtopics.com/discussions/amazon/view/384244-exam-aws-certified-generative-ai-developer-professional-aip-c01-topic-1-question-16-discussion/)

Comments: Chibuzo1 Most Recent 5 months, 5 days ago Selected Answer: A Why A is correct Amazon Bedrock AgentCore is purpose-built for exactly this use case Why B is correct: This completes the integration layer. By registering Lambda functions and REST APIs as actions through API Gateway and EventBridge within AgentCore: upvoted 1 time Submit     Cancel ... de1612d 7 months, 11 days ago Selected Answer: AB I think A and B are the correct answers. upvoted 1 time Submit     Cancel ... 2d5eb96 7 months, 17 days ago Selected Answer: AB Option A and B, because the solution needs to be scalable and Agent core allow to have persistance &amp; scalability and monitoring. Option C doesn't meet the goal because steps function &amp; sqs doesn't provide right level or orchestration as some event may be missed. upvoted 3 times Submit     Cancel ... GiorgioGss 8 months, 15 days ago Selected Answer: AB A because AgentCore is just the right tool here B because CDE are just wrong upvoted 2 times Submit     Cancel ... 67bdb19 8 months, 22 days ago Selected Answer: A Going with A, but I'm open to being convinced otherwise. upvoted 1 time Submit     Cancel ...

----------------------------------------

## Exam AWS Certified Generative AI Developer - Professional AIP-C01 topic 1 question 17 discussion



A financial services company is developing a Retrieval Augmented Generation (RAG) application to help investment analysts query complex financial relationships across multiple investment vehicles, market sectors, and regulatory environments. The dataset contains highly interconnected entities that have multi-hop relationships. The analysts must be able to examine the relationships holistically to provide accurate investment guidance. The application must deliver comprehensive answers that capture indirect relationships between financial entities. The application must produce responses in less than 3 seconds.

Which solution will meet these requirements with the LEAST operational overhead?

A. Use Amazon Bedrock Knowledge Bases with Graph RAG and Amazon Neptune Analytics to store the financial data. Analyze the multi-hop relationships between entities and automatically identify related information across documents.

B. Use Amazon Bedrock Knowledge Bases and an Amazon OpenSearch Service vector store to implement custom relationship identification logic that uses AWS Lambda functions to query multiple vector embeddings in sequence.

C. Use an Amazon OpenSearch Serverless vector database with k-nearest neighbor (k-NN) searches. Implement manual relationship mapping in an application layer that runs in an Amazon EC2 Auto Scaling group.

D. Use Amazon DynamoDB to store financial data in a custom indexing system. Use an AWS Lambda function to query relevant records based on input questions. Use Amazon SageMaker AI to generate responses. Forgot my password

**Answer: **

**Timestamp: **

[View on ExamTopics](https://www.examtopics.com/discussions/amazon/view/384221-exam-aws-certified-generative-ai-developer-professional-aip-c01-topic-1-question-17-discussion/)

Comments: Chibuzo1 Most Recent 5 months, 5 days ago Selected Answer: A The core challenge is multi-hop relationship traversal across interconnected financial entities — exactly what graph databases are designed for. Neptune Analytics is purpose-built for fast graph queries, and Bedrock Knowledge Bases with Graph RAG handles the orchestration automatically, meaning the team writes no custom traversal logic. The &quot;least operational overhead&quot; constraint rules out anything requiring manual infrastructure management, custom logic layers, or bespoke indexing systems. upvoted 2 times Submit     Cancel ... de1612d 7 months, 11 days ago Selected Answer: A Since graph-based inference is required, I think the answer is A. upvoted 1 time Submit     Cancel ... GiorgioGss 8 months, 15 days ago Selected Answer: A LEAST operational overhead. upvoted 1 time Submit     Cancel ... 67bdb19 8 months, 22 days ago Selected Answer: A Feels like A is the intended answer here. The wording is tricky. upvoted 1 time Submit     Cancel ...

----------------------------------------

## Exam AWS Certified Generative AI Developer - Professional AIP-C01 topic 1 question 18 discussion



A healthcare company uses Amazon Bedrock to deploy an application that generates summaries of clinical documents. The application experiences inconsistent response quality with occasional factual hallucinations. Monthly costs exceed the company's projections by 40%. A GenAI developer must implement a near real-time monitoring solution to detect hallucinations, identify abnormal token consumption, and provide early warnings of cost anomalies. The solution must require minimal custom development work and maintenance overhead.

Which solution will meet these requirements?

A. Configure Amazon CloudWatch alarms to monitor InputTokenCount and OutputTokenCount metrics to detect anomalies. Store model invocation logs in an Amazon S3 bucket. Use AWS Glue and Amazon Athena to identify potential hallucinations.

B. Run Amazon Bedrock evaluation jobs that use LLM-based judgments to detect hallucinations. Configure Amazon CloudWatch to track token usage. Create an AWS Lambda function to process CloudWatch metrics. Configure the Lambda function to send usage pattern notifications.

C. Configure Amazon Bedrock to store model invocation logs in an Amazon S3 bucket. Enable text output logging. Configure Amazon Bedrock guardrails to run contextual grounding checks to detect hallucinations. Create Amazon CloudWatch anomaly detection alarms for token usage metrics.

D. Use AWS CloudTrail to log all Amazon Bedrock API calls. Create a custom dashboard in Amazon QuickSight to visualize token usage patterns. Use Amazon SageMaker Model Monitor to detect quality drift in generated summaries. Forgot my password

**Answer: **

**Timestamp: **

[View on ExamTopics](https://www.examtopics.com/discussions/amazon/view/384241-exam-aws-certified-generative-ai-developer-professional-aip-c01-topic-1-question-18-discussion/)

Comments: Chibuzo1 Most Recent 4 months, 20 days ago Selected Answer: C Hallucination detection Amazon Bedrock Guardrails includes a contextual grounding check feature specifically designed to detect hallucinations by verifying that model outputs are grounded in the provided source content. This is a built-in, managed capability — no custom ML or logic required. Abnormal token consumption Bedrock automatically publishes InputTokenCount and OutputTokenCount metrics to CloudWatch. Enabling CloudWatch Anomaly Detection on these metrics uses ML-based statistical modeling to establish baselines and flag deviations — no manual threshold-setting needed. upvoted 1 time Submit     Cancel ... de1612d 7 months, 11 days ago Selected Answer: C The answer is C, as it is a design focused on minimum operational observability. upvoted 1 time Submit     Cancel ... 2d5eb96 7 months, 17 days ago Selected Answer: C &quot;require minimal custom development work&quot; option B require more operations. upvoted 1 time Submit     Cancel ... a9fb7b2 7 months, 21 days ago Selected Answer: C C is correct . B uses Bedrock evaluation jobs plus a custom Lambda notification pipeline, which adds more development and is less suited to near real-time monitoring. upvoted 2 times Submit     Cancel ... GiorgioGss 8 months, 15 days ago Selected Answer: C &quot; minimal custom development work and maintenance overhead&quot; - Only C fits here. upvoted 3 times Submit     Cancel ... 67bdb19 8 months, 22 days ago Selected Answer: B Locked in on B. The other choices are clearly distractors. upvoted 1 time Submit     Cancel ...

----------------------------------------

## Exam AWS Certified Generative AI Developer - Professional AIP-C01 topic 1 question 19 discussion



A company is building a generative AI (GenAI) application that produces content based on a variety of internal and external data sources. The company wants to ensure that the generated output is fully traceable. The application must support data source registration and enable metadata tagging to attribute content to its original source. The application must also maintain audit logs of data access and usage throughout the pipeline.

Which solution will meet these requirements?

A. Use AWS Lake Formation to catalog data sources and control access. Apply metadata tags directly in Amazon S3. Use AWS CloudTrail to monitor API activity.

B. Use AWS Glue Data Catalog to register and tag data sources. Use Amazon CloudWatch Logs to monitor access patterns and application behavior.

C. Store data in Amazon S3 and use object tagging for attribution. Use AWS Glue Data Catalog to manage schema information. Use AWS CloudTrail to log access to S3 buckets.

D. Use AWS Glue Data Catalog to register all data sources. Apply metadata tags to attribute data sources. Use AWS CloudTrail to log access and activity across services. Forgot my password

**Answer: **

**Timestamp: **

[View on ExamTopics](https://www.examtopics.com/discussions/amazon/view/384228-exam-aws-certified-generative-ai-developer-professional-aip-c01-topic-1-question-19-discussion/)

Comments: de1612d Most Recent 7 months, 11 days ago Selected Answer: D Answer is D upvoted 1 time Submit     Cancel ... a9fb7b2 7 months, 21 days ago Selected Answer: D D is correct. C uses S3 object tags, which can help with individual objects, but it does not address registering all data sources as comprehensively as the Glue Data Catalog. upvoted 2 times Submit     Cancel ... GiorgioGss 8 months, 15 days ago Selected Answer: D A - Lake Formation excels at access control, not GenAI data source registration/metadata attribution B - Cw Logs track application behavior, not data lineage or source attribution C - S3 tagging works for objects, fails for structured/relational sources D - Complete coverage: registration + metadata + audit trails. upvoted 4 times Submit     Cancel ... 67bdb19 8 months, 22 days ago Selected Answer: C C is the textbook answer for this situation. upvoted 1 time Submit     Cancel ...

----------------------------------------

## Exam AWS Certified Generative AI Developer - Professional AIP-C01 topic 1 question 20 discussion



A financial services company needs to build a document analysis system that uses Amazon Bedrock to process quarterly reports. The system must analyze financial data, perform sentiment analysis, and validate compliance across batches of reports. Each batch contains 5 reports. Each report requires multiple foundation model (FM) calls. The solution must finish the analysis within 10 seconds for each batch. Current sequential processing takes 45 seconds for each batch.

Which solution will meet these requirements?

A. Use AWS Lambda functions with provisioned concurrency to process each analysis type sequentially. Configure the Lambda function timeouts to 10 seconds. Configure automatic retries with exponential backoff.

B. Use AWS Step Functions with a Parallel state to invoke separate AWS Lambda functions for each analysis type simultaneously. Configure Amazon Bedrock client timeouts. Use Amazon CloudWatch metrics to track execution time and model inference latency.

C. Create an Amazon SQS queue to buffer analysis requests. Deploy multiple AWS Lambda functions with reserved concurrency. Configure each Lambda function to process different aspects of each report sequentially and then combine the results.

D. Deploy an Amazon ECS cluster that runs containers that process each report sequentially. Use a load balancer to distribute batch workloads. Configure an auto-scaling policy based on CPU utilization to handle demand fluctuations. Forgot my password

**Answer: **

**Timestamp: **

[View on ExamTopics](https://www.examtopics.com/discussions/amazon/view/384237-exam-aws-certified-generative-ai-developer-professional-aip-c01-topic-1-question-20-discussion/)

Comments: tumi98 Most Recent 2 months, 7 days ago Selected Answer: B Independent analysis tasks execute concurrently, reducing total batch processing time. Bedrock timeouts and CloudWatch provide appropriate operational controls. upvoted 1 time Submit     Cancel ... blieskies 2 months, 22 days ago Selected Answer: B I accept it's B because this processing required parallelisation but I wish they'd suggested MAP instead of PARALLEL because it we assume that each step for a report takes the same amount of time then it'd still take 45/3 seconds = 15 seconds .. whereas parallel would have given us a tidy 45/5 = 9 seconds (under the SLA) requirement upvoted 1 time Submit     Cancel ... Chibuzo1 5 months, 4 days ago Selected Answer: B The core problem is a 45-second sequential process that must finish in 10 seconds — a 4.5x speedup requirement. The only way to achieve this without faster hardware is parallelization. Option B directly addresses this with Step Functions' Parallel state, which fans out multiple Lambda invocations simultaneously across analysis types (financial data, sentiment, compliance). Since these three workloads are independent of each other, running them concurrently collapses wall-clock time dramatically. CloudWatch integration for latency tracking is a practical operational addition, not overhead. upvoted 1 time Submit     Cancel ... de1612d 7 months, 11 days ago Selected Answer: B I want to parallelize batch processing, so the answer is B. upvoted 1 time Submit     Cancel ... a9fb7b2 7 months, 21 days ago Selected Answer: B Step Functions workflow can invoke separate Lambda functions in parallel for different analysis tasks, which is exactly what this batch pattern needs. Can also monitor execution time and Bedrock/model latency with CloudWatch metrics, which helps verify the system stays under the 10-second target. Amazon Bedrock exposes monitoring through CloudWatch, and CloudWatch generative AI observability includes latency views for model invocations. upvoted 2 times Submit     Cancel ... eesa 8 months, 7 days ago Selected Answer: B AWS Step Functions con Parallel state (Opción B) - MEJOR SOLUCIÓN: ✅ Paralelización efectiva: Procesa múltiples análisis (financiero, sentimiento, compliance) simultáneamente en lugar de secuencialmente ✅ Reduce tiempo drásticamente: De 45s a ~10s al ejecutar tareas en paralelo ✅ Orquestación robusta: Step Functions maneja la coordinación de múltiples Lambda functions ✅ Monitoreo integrado: CloudWatch metrics para tracking de latencia y tiempos ✅ Manejo de errores: Retry logic y error handling nativos ✅ Escalabilidad: Cada tipo de análisis escala independientemente upvoted 2 times Submit     Cancel ... Neos03 8 months, 8 days ago Selected Answer: A A is correct upvoted 1 time Submit     Cancel ... GiorgioGss 8 months, 15 days ago Selected Answer: B ACD fail because it ads latency. upvoted 2 times Submit     Cancel ... 67bdb19 8 months, 22 days ago Selected Answer: C Feels like C is the one. Does anyone disagree? upvoted 1 time Submit     Cancel ...

----------------------------------------

## Exam AWS Certified Generative AI Developer - Professional AIP-C01 topic 1 question 21 discussion



A company is using Amazon Bedrock to build a customer-facing AI assistant to handle sensitive customer inquiries. The company must use defense-in-depth safety controls to block sophisticated prompt injection attacks. The company must keep audit logs of all safety interventions. The AI assistant must have cross-Region failover capabilities.

Which solution will meet these requirements?

A. Configure Amazon Bedrock guardrails to use content filters to protect against prompt injection attacks. Set the content filters to high. Use a guardrail profile to implement cross-Region guardrail inference. Use Amazon CloudWatch Logs with custom metrics to capture detailed guardrail intervention events.

B. Configure Amazon Bedrock guardrails to use content filters to protect against prompt injection attacks. Set the content filters to high. Use AWS WAF to block suspicious inputs. Use AWS CloudTrail to log API calls for audits.

C. Deploy Amazon Comprehend custom classification to detect prompt injection attacks. Use Amazon API Gateway to validate requests. Use Amazon CloudWatch Logs with custom metrics to capture detailed intervention events.

D. Configure Amazon Bedrock guardrails to use custom content filters to protect against harmful content. Set the content filters to high. Use word filters to protect against known attack patterns. Configure cross-Region guardrail replication to provide failover capabilities. Store logs in AWS CloudTrail for compliance auditing. Forgot my password

**Answer: **

**Timestamp: **

[View on ExamTopics](https://www.examtopics.com/discussions/amazon/view/384231-exam-aws-certified-generative-ai-developer-professional-aip-c01-topic-1-question-21-discussion/)

Comments: Yeyodothi Most Recent 26 days ago Selected Answer: D A - Is using CloudWatch instead of CloudTrail for audit logs B - WAF inspects HTTP headers and web parameters, whereas prompt attacks reside within a valid payload C - Is using Comprehend wrong, it's for detecting and redacting PII (amongst other things) but never for protection against prompt attacks D - Only because they said the word filters are using against &quot;known attack patterns&quot; so I'm guessing you can just add all the custom words that are commonly used in &quot;known attack patterns&quot; upvoted 1 time Submit     Cancel ... SSSam26 3 months, 5 days ago Selected Answer: D Why D is Correct ? ** Audit logs : CloudTrail logs all guardrail interventions for compliance * Defense-in-depth : Two layers: Content filters (ML-based) + Word filters (rule-based) = different detection mechanisms *Block prompt injection: Content filters at HIGH catch ML-detected attacks + Word filters block known injection patterns *Cross-Region failover : Cross-Region guardrail replication ensures protection in any failover region Why A is Wrong ? - CloudWatch Logs ≠ compliance audit -No word filters/additional layer : Missing the rule-based protection that provides the second defense layer - Only ONE layer (content filters) upvoted 2 times Submit     Cancel ... Chibuzo1 6 months, 8 days ago Selected Answer: A The correct answer is A. Analysis The question has four distinct requirements to satisfy: Defense-in-depth safety controls against prompt injection Audit logs of all safety interventions Cross-Region failover capabilities Uses Amazon Bedrock as the core platform upvoted 1 time Submit     Cancel ... minime 7 months, 1 days ago Selected Answer: D D. Guardrails + word filters + cross-Region + CloudTrail upvoted 1 time Submit     Cancel ... de1612d 7 months, 11 days ago Selected Answer: A Answer is A upvoted 1 time Submit     Cancel ... ArunRav 8 months, 1 days ago Selected Answer: A Guardrail and Cloudwatch is the choice. WAF and comprehend cant be used here. upvoted 2 times Submit     Cancel ... AM_aws 8 months, 2 days ago Selected Answer: A https://aws.amazon.com/about-aws/whats-new/2025/05/amazon-bedrock-guardrails-cross-region-inference/ https://aws.amazon.com/blogs/security/protect-your-generative-ai-applications-against-encoding-based-attacks-with-amazon-bedrock-guardrails/ upvoted 2 times Submit     Cancel ... ryo1998 8 months, 2 days ago Selected Answer: 回 its correct upvoted 1 time Submit     Cancel ... Tanle 8 months, 10 days ago Selected Answer: A Choose A upvoted 2 times Submit     Cancel ... xyztest 8 months, 11 days ago Selected Answer: A Correct Answer upvoted 2 times Submit     Cancel ... GiorgioGss 8 months, 15 days ago Selected Answer: A B - WAF operates at the HTTP layer and doesn't understand semantic prompt C - Comprehend is for different purpose D - only with word filters you cannot protect against &quot;sophisticated&quot; attacks. upvoted 2 times Submit     Cancel ... 67bdb19 8 months, 22 days ago Selected Answer: B Could be wrong, but I’m backing B. It just clicks. upvoted 1 time Submit     Cancel ...

----------------------------------------

## Exam AWS Certified Generative AI Developer - Professional AIP-C01 topic 1 question 22 discussion



A company is designing a canary deployment strategy for a payment processing API. The system must support automated gradual traffic shifting between multiple Amazon Bedrock models based on real-time inference metrics, historical traffic patterns, and service health. The solution must be able to gradually increase traffic to new model versions. The system must increase traffic if metrics remain healthy and decrease traffic if the performance degrades below acceptable thresholds.

The company needs to comprehensively monitor inference latency and error rates during the deployment phase. The company must also be able to halt deployments and revert to a previous model version without any manual intervention.

Which solution will meet these requirements?

A. Use Amazon Bedrock with provisioned throughput to host the versions of the model. Configure an Amazon EventBridge rule to invoke an AWS Step Functions workflow when a new model version is released. Configure the workflow to shift traffic in stages, wait for a specified time period, and invoke an AWS Lambda function to check Amazon CloudWatch performance metrics. Configure the workflow to increase traffic if the metrics meet thresholds and to trigger a traffic rollback if performance metrics fall below thresholds.

B. Use AWS Lambda functions to invoke various Amazon Bedrock model versions. Use an Amazon API Gateway HTTP API with stage variables and weighted routing to shift traffic gradually to new model versions. Use Amazon CloudWatch to monitor performance metrics. Use external logic to adjust traffic between model versions and to roll back if performance falls below thresholds.

C. Use Amazon SageMaker AI endpoint variants to represent multiple Amazon Bedrock model versions. Use variant weights to shift traffic. Use Amazon CloudWatch to monitor performance metrics. Use SageMaker Model Monitor to trigger AWS Lambda functions to roll back a model deployment if performance drops below a specified threshold. Configure an Amazon EventBridge rule to roll back model deployments if an anomaly is detected.

D. Use Amazon OpenSearch Service to track inference logs. Configure OpenSearch Service to invoke an AWS Systems Manager Automation runbook to update Amazon Bedrock model endpoints to shift traffic based on the inference logs. Forgot my password

**Answer: **

**Timestamp: **

[View on ExamTopics](https://www.examtopics.com/discussions/amazon/view/384229-exam-aws-certified-generative-ai-developer-professional-aip-c01-topic-1-question-22-discussion/)

Comments: vedratna Most Recent 18 days ago Selected Answer: B Option A is incorrect: Bedrock Provisioned Throughput does not have a &quot;weighted routing&quot; parameter. There is no configuration setting on a Bedrock Provisioned Model where you can say &quot;Send 90% of requests to Model Version 1 and 10% to Model Version 2.&quot; Option B recognizes that because Amazon Bedrock cannot natively split traffic between different version ARNs, the traffic splitting must be offloaded to the API Layer (Amazon API Gateway). • API Gateway HTTP APIs natively feature a parameter called Route Weights / Weighted Routing. • Step Functions or external operational logic can easily call the API Gateway API to say: &quot;Change the route weight of Stage Variable $v1 to 90% and Stage Variable $v2 to 10%.&quot; • API Gateway then distributes the live incoming customer calls accordingly, passing them down to the respective AWS Lambda functions, which then invoke the correct underlying Bedrock models. upvoted 1 time Submit     Cancel ... Chibuzo1 5 months, 4 days ago Selected Answer: A Option A is the only solution that combines Bedrock-native compatibility, fully automated decision logic, real-time metric evaluation, and zero-touch rollback in a cohesive, serverless architecture. upvoted 1 time Submit     Cancel ... de1612d 7 months, 11 days ago Selected Answer: A Answer is A upvoted 1 time Submit     Cancel ... ArunRav 8 months, 1 days ago Selected Answer: A Step function will help stepwise shifting. upvoted 2 times Submit     Cancel ... AM_aws 8 months, 2 days ago Selected Answer: A https://docs.aws.amazon.com/decision-guides/latest/bedrock-or-sagemaker/bedrock-or-sagemaker.html - why C is not correct upvoted 3 times Submit     Cancel ... GiorgioGss 8 months, 15 days ago Selected Answer: A B is to complex and only with A you can &quot;gradually increase traffic&quot;. upvoted 2 times Submit     Cancel ... 67bdb19 8 months, 22 days ago Selected Answer: C Leaning toward C, but I'd be interested to hear arguments for the others. upvoted 1 time Submit     Cancel ...

----------------------------------------

## Exam AWS Certified Generative AI Developer - Professional AIP-C01 topic 1 question 23 discussion



A financial services company uses an AI application to process financial documents by using Amazon Bedrock. During business hours, the application handles approximately 10,000 requests each hour, which requires consistent throughput.

The company uses the CreateProvisionedModelThroughput API to purchase provisioned throughput. Amazon CloudWatch metrics show that the provisioned capacity is unused while on-demand requests are being throttled. The company finds the following code in the application:

python response = bedrock_runtime.invoke_model(modelId="anthropic.claude-v2", body=json.dumps(payload))

The company needs the application to use the provisioned throughput and to resolve the throttling issues.

Which solution will meet these requirements?

A. Increase the number of model units (MUs) in the provisioned throughput configuration.

B. Replace the model ID parameter with the ARN of the provisioned model that the CreateProvisionedModelThroughput API returns.

C. Add exponential backoff retry logic to handle throttling exceptions during peak hours.

D. Modify the application to use the InvokeModelWithResponseStream API instead of the InvokeModel API. Forgot my password

**Answer: **

**Timestamp: **

[View on ExamTopics](https://www.examtopics.com/discussions/amazon/view/384223-exam-aws-certified-generative-ai-developer-professional-aip-c01-topic-1-question-23-discussion/)

Comments: vedratna Most Recent 18 days ago Selected Answer: B throughput gets provisioned at Model level and to utilise provisioned throughput; need to use provisioned Model ARN instead of direct Model ID. upvoted 1 time Submit     Cancel ... Chibuzo1 5 months, 4 days ago Selected Answer: B The application is using a generic model ID, which routes all requests through the on-demand endpoint — completely bypassing the provisioned throughput that was already purchased. The fix is to replace that model ID with the Provisioned Model ARN returned by CreateProvisionedModelThroughput: upvoted 2 times Submit     Cancel ... Chibuzo1 6 months, 8 days ago Selected Answer: B The application purchased provisioned throughput but is still routing every request to the on-demand endpoint by using the base model ID string. Provisioned capacity sits idle while on-demand requests pile up and get throttled — exactly what CloudWatch confirms. The application purchased provisioned throughput but is still routing every request to the on-demand endpoint by using the base model ID string. Provisioned capacity sits idle while on-demand requests pile up and get throttled — exactly what CloudWatch confirms. upvoted 1 time Submit     Cancel ... ArunRav 8 months, 1 days ago Selected Answer: B Option B as that will help to use the provisioned capacity upvoted 2 times Submit     Cancel ... eesa 8 months, 7 days ago Selected Answer: B Opción B - SOLUCIÓN CORRECTA: ✅ Resuelve el problema raíz: La capacidad provisionada está sin usar porque el código usa el model ID base en lugar del ARN del modelo provisionado ✅ Uso correcto de throughput provisionado: Para usar capacidad provisionada, debes especificar el ARN del modelo provisionado, no el model ID base ✅ Elimina throttling: Al usar el ARN correcto, las requests usarán la capacidad provisionada en lugar de on-demand upvoted 2 times Submit     Cancel ... GiorgioGss 8 months, 15 days ago Selected Answer: B When you use a standard model ID like &quot;anthropic.claude-v2&quot;, Bedrock routes the request to the OnDemand endpoint. Ondemand throughput is shared across all AWS customers. upvoted 3 times Submit     Cancel ... 67bdb19 8 months, 22 days ago Selected Answer: C I'd bet my certification on C. It's the only logical solution presented. upvoted 1 time Submit     Cancel ...

----------------------------------------

## Exam AWS Certified Generative AI Developer - Professional AIP-C01 topic 1 question 24 discussion



A company is building an AI advisory application by using Amazon Bedrock. The application will provide recommendations to customers. The company needs the application to explain its reasoning process and cite specific sources for data. The application must retrieve information from company data sources and show step-by-step reasoning for recommendations. The application must also link data claims to source documents and maintain response latency under 3 seconds.

Which solution will meet these requirements with the LEAST operational overhead?

A. Use Amazon Bedrock Knowledge Bases with source attribution enabled. Use the Anthropic Claude Messages API with RAG to set high-relevance thresholds for source documents. Store reasoning and citations in Amazon S3 for auditing purposes.

B. Use Amazon Bedrock with Anthropic Claude models and extended thinking. Configure a 4,000-token thinking budget. Store reasoning traces and citations in Amazon DynamoDB for auditing purposes.

C. Configure Amazon SageMaker AI with a custom Anthropic Claude model. Use the model's reasoning parameter and AWS Lambda to process responses. Add source citations from a separate Amazon RDS database.

D. Use Amazon Bedrock with Anthropic Claude models and chain-of-thought reasoning. Configure custom retrieval tracking with the Amazon Bedrock Knowledge Bases API. Use Amazon CloudWatch to monitor response latency metrics. Forgot my password

**Answer: **

**Timestamp: **

[View on ExamTopics](https://www.examtopics.com/discussions/amazon/view/384236-exam-aws-certified-generative-ai-developer-professional-aip-c01-topic-1-question-24-discussion/)

Comments: vedratna Most Recent 18 days ago Selected Answer: B Option B is CORRECT • Utilizes the native, built-in feature (&quot;Extended Thinking&quot;) designed exactly for step-by-step reasoning visibility. • Achieves the operational overhead goal by configuring simple API properties rather than coding multi-layered data orchestration steps. Latency Maintenance: While generating thinking tokens does add compute time, limiting it via a structured token budget ensures the system finishes its execution loop safely within the required low-latency performance thresholds. Storing these raw, lightweight trace outputs into Amazon DynamoDB provides high-throughput, millisecond-level writing for audit tracking. Option A is INCORRECT • High Operational Overhead &amp; Latency Risk: Setting extremely rigid manual relevance thresholds inside RAG pipelines often leads to poor data recall or requires extensive tuning. More importantly, Bedrock Knowledge Bases out-of-the-box source attribution gives you the document snippet, but it does not automatically generate an advanced step-by-step explanation of the internal reasoning logic unless paired with a reasoning model framework. Option C is INCORRECT • Massive Operational Overhead: Provisioning, managing, and maintaining a custom Claude model inside a dedicated Amazon SageMaker AI cluster completely defeats the purpose of serverless AI. Furthermore, manually pulling metadata out of a relational Amazon RDS database via custom Lambda loops to piece together citations creates a highly complex, brittle system architecture. Option D is INCORRECT • Requires More Custom Engineering: Standard text prompt engineering for &quot;chain-of-thought&quot; forces the model to print its entire internal logic out loud to the user. To prevent this, you would have to write custom regex or code strings to catch, strip, and split the text before displaying it. Option D also suggests building &quot;custom retrieval tracking&quot; on top of the Knowledge Base API, which significantly increases development effort compared to Option B's native parameters. upvoted 1 time Submit     Cancel ... SSSam26 3 months, 5 days ago Selected Answer: B Why A is Wrong ? - No explicit reasoning mechanism : KB + source attribution provides CITATIONS but not step-by-step REASONING traces - Claude Messages API ≠ reasoning traces Why B is Correct ? - Explain reasoning process - Step-by-step reasoning - Audit trail : Reasoning traces + citations stored in DynamoDB (fast read/write) ** Extended thinking is the ONLY Bedrock feature that produces auditable, step-by-step reasoning traces. No other approach gives you the model's actual reasoning process as a first-class output. upvoted 1 time Submit     Cancel ... Chibuzo1 5 months, 4 days ago Selected Answer: B RequirementHow Option B Addresses ItStep-by-step reasoningExtended thinking provides explicit, visible reasoning traces nativelyCite specific sourcesClaude models with extended thinking naturally attribute claims to sourcesRetrieve from company dataBedrock Knowledge Bases integration handles RAG retrievalResponse latency &lt; 3 seconds4,000-token thinking budget is appropriately scoped — large budgets (e.g. 16K tokens) would risk breaching the 3s SLAAudit trailDynamoDB stores reasoning traces and citations with low-latency writesLeast operational overhead upvoted 2 times Submit     Cancel ... Chibuzo1 4 months, 20 days ago Correct answer is A Option A leverages Amazon Bedrock Knowledge Bases as a fully managed vector store with built-in source attribution—eliminating the need to architect custom retrieval, citation, or reasoning pipelines. This is purpose-built for RAG scenarios and minimizes operational complexity while meeting all stated requirements. upvoted 3 times Submit     Cancel ... bonds 5 months, 27 days ago Selected Answer: D I'd go with either B or D. A is not the correct answer. D could be it because CoT B is likely because of extended thinking which is something Claude models do. upvoted 4 times Submit     Cancel ... potters7 7 months, 12 days ago Selected Answer: A I dont think any answer is perfect. Without least operational overhead I'd go with D as A lacks &quot;explain its reasoning process&quot;. upvoted 1 time Submit     Cancel ... potters7 7 months, 18 days ago Selected Answer: A I believe A addresses the most req. I did think B but with 4k token thinking + response that might not address the response times. upvoted 2 times Submit     Cancel ... ArunRav 8 months, 1 days ago Selected Answer: A Amazon Bedrock Knowledge Bases is a fully managed capability hence we can use it for this use case as it need minimal operational overhead. upvoted 2 times Submit     Cancel ... eesa 8 months, 7 days ago Selected Answer: A Opción A - MEJOR SOLUCIÓN: ✅ Source attribution nativa: Knowledge Bases proporciona citaciones automáticas a documentos fuente ✅ RAG integrado: Recupera información de fuentes de datos de la empresa automáticamente ✅ Baja latencia: Optimizado para respuestas rápidas (&lt;3s) ✅ Mínimo overhead operacional: Servicio completamente administrado ✅ Razonamiento con Claude: El modelo explica su proceso de pensamiento naturalmente ✅ Auditoría simple: S3 para almacenamiento de logs es straightforward upvoted 2 times Submit     Cancel ... GiorgioGss 8 months, 15 days ago Selected Answer: A &quot;link data claims to source documents&quot; - RAG aka Knowledge base upvoted 2 times Submit     Cancel ... 67bdb19 8 months, 22 days ago Selected Answer: B If I had to guess, I’d pick B based on the wording of the question. upvoted 1 time Submit     Cancel ...

----------------------------------------

## Exam AWS Certified Generative AI Developer - Professional AIP-C01 topic 1 question 25 discussion



A financial services company uses multiple foundation models (FMs) through Amazon Bedrock for its generative AI (GenAI) applications. To comply with a new regulation for GenAI use with sensitive financial data, the company needs a token management solution.

The token management solution must proactively alert when applications approach model-specific token limits. The solution must also process more than 5,000 requests each minute and maintain token usage metrics to allocate costs across business units.

Which solution will meet these requirements?

A. Develop model-specific tokenizers in an AWS Lambda function. Configure the Lambda function to estimate token usage before sending requests to Amazon Bedrock. Configure the Lambda function to publish metrics to Amazon CloudWatch and trigger alarms when requests approach thresholds. Store detailed token usage in Amazon DynamoDB to report costs.

B. Implement Amazon Bedrock Guardrails with token quota policies. Capture metrics on rejected requests. Configure Amazon EventBridge rules to trigger notifications based on Amazon Bedrock Guardrails metrics. Use Amazon CloudWatch dashboards to visualize token usage trends across models.

C. Deploy an Amazon SQS dead-letter queue for failed requests. Configure an AWS Lambda function to analyze token-related failures. Use Amazon CloudWatch Logs Insights to generate reports on token usage patterns based on error logs from Amazon Bedrock API responses.

D. Use Amazon API Gateway to create a proxy for all Amazon Bedrock API calls. Configure request throttling based on custom usage plans with predefined token quotas. Configure API Gateway to reject requests that will exceed token limits. Forgot my password

**Answer: **

**Timestamp: **

[View on ExamTopics](https://www.examtopics.com/discussions/amazon/view/384224-exam-aws-certified-generative-ai-developer-professional-aip-c01-topic-1-question-25-discussion/)

Comments: Chibuzo1 Most Recent 4 months, 20 days ago Selected Answer: A Option A is the only solution that provides truly proactive token management by estimating tokens before requests are sent to Bedrock. It handles all model-specific limits, supports high throughput, and maintains detailed metrics for cost allocation. Options B and D are reactive (rejecting requests), and Option C relies on failure analysis—none meet the &quot;approach limits&quot; requirement. upvoted 1 time Submit     Cancel ... ArunRav 8 months, 1 days ago Selected Answer: A B doesnt monitor token usage,C-only track failed reqeusts,D- amazon API Gateway cant track the token usage upvoted 2 times Submit     Cancel ... GiorgioGss 8 months, 15 days ago Selected Answer: A B - guardrails do not have token quota policies. C - sqs is reactive. after something is failing. D - throttling is based on request count, not token count upvoted 2 times Submit     Cancel ... 67bdb19 8 months, 22 days ago Selected Answer: D D. Final answer. upvoted 1 time Submit     Cancel ...

----------------------------------------

## Exam AWS Certified Generative AI Developer - Professional AIP-C01 topic 1 question 26 discussion



A retail company is developing a customer service application that must process 10,000 daily queries about products, orders, and warranties. The application must be able to respond to queries about 50,000 product documents that are updated every day. The application must integrate with an order management API to check the status of orders and to help process returns. The application must maintain context throughout multi-turn interactions with customers. The company must collect complete audit trails for application responses.

Which solution will meet these requirements with the LEAST operational overhead?

A. Deploy a fine-tuned Amazon Bedrock Anthropic Claude model for each product category. Create AWS Lambda functions to connect each model to the order management API. Store conversation history in Amazon DynamoDB.

B. Create a custom model that uses continued pre-training on Amazon Bedrock to handle all product documentation. Set up an Amazon API Gateway REST API that uses AWS Lambda functions to connect the model to the order management API.

C. Use Amazon SageMaker AI with containers to deploy models. Use Amazon Kendra to search product documents. Use AWS Step Functions to orchestrate calls to the order management API.

D. Use an Amazon Bedrock agent with action groups to integrate with the order management API. Associate an Amazon Bedrock knowledge base with the agent to search product documentation by using Retrieval Augmentation Generation (RAG). Enable trace events to capture audit trails. Forgot my password

**Answer: **

**Timestamp: **

[View on ExamTopics](https://www.examtopics.com/discussions/amazon/view/384225-exam-aws-certified-generative-ai-developer-professional-aip-c01-topic-1-question-26-discussion/)

Comments: Chibuzo1 Most Recent 5 months, 4 days ago Selected Answer: D Bedrock Agents handles invocation scaling automatically Knowledge Base with RAG retrieves from a live data source — no retraining needed Trace events capture every reasoning step, tool call, and retrieval natively upvoted 1 time Submit     Cancel ... ArunRav 8 months, 1 days ago Selected Answer: D The option is suited for the least operational over head.Every other options has some customer development/Operational over head. upvoted 2 times Submit     Cancel ... GiorgioGss 8 months, 15 days ago Selected Answer: D multi-turn context + API integration + searching documents = Amazon Bedrock Agents with Knowledge Bases upvoted 2 times Submit     Cancel ... 67bdb19 8 months, 22 days ago Selected Answer: A Pretty sure it's A. This pattern is very common. upvoted 1 time Submit     Cancel ...

----------------------------------------

## Exam AWS Certified Generative AI Developer - Professional AIP-C01 topic 1 question 27 discussion



An ecommerce company is using Amazon Bedrock to build a generative AI (GenAI) application. The application uses AWS Step Functions to orchestrate a multi-agent workflow to produce detailed product descriptions. The workflow consists of three sequential states: a description generator, a technical specifications validator, and a brand voice consistency checker. Each state produces intermediate reasoning traces and outputs that are passed to the next state. The application uses an Amazon S3 bucket for process storage and to store outputs.

During testing, the company discovers that outputs between Step Functions states frequently exceed the 256 KB quota and cause workflow failures.

A GenAI Developer needs to revise the application architecture to efficiently handle the Step Functions 256 KB quota and maintain workflow observability. The revised architecture must preserve the existing multi-agent reasoning and acting (ReAct) pattern.

Which solution will meet these requirements with the LEAST operational overhead?

A. Store intermediate outputs in Amazon DynamoDB. Pass only references between states. Create a Map state that retrieves the complete data from DynamoDB when required for each agent's processing step.

B. Configure an Amazon Bedrock integration to use the S3 bucket URI in the input parameter for large outputs. Use the ResultPath field and the ResultSelector field to route S3 references between the agent steps while maintaining the sequential validation workflow.

C. Use AWS Lambda functions to compress outputs to less than 256 KB before each agent state. Configure each agent task to decompress the outputs before processing and to compress results before passing them to the next state.

D. Configure a separate Step Functions state machine to handle each agent's processing. Use Amazon EventBridge to coordinate the execution flow between state machines. Use S3 references for the outputs as event data. Forgot my password

**Answer: **

**Timestamp: **

[View on ExamTopics](https://www.examtopics.com/discussions/amazon/view/384238-exam-aws-certified-generative-ai-developer-professional-aip-c01-topic-1-question-27-discussion/)

Comments: Chibuzo1 Most Recent 5 months, 4 days ago Selected Answer: B Option B solves the 256 KB payload limit by leveraging the already-present S3 bucket and native Step Functions field selectors — requiring zero new infrastructure and zero custom code: upvoted 2 times Submit     Cancel ... ArunRav 8 months, 1 days ago Selected Answer: B A need additional development,C needs development work by lambda,D also need additional work for development. upvoted 2 times Submit     Cancel ... eesa 8 months, 7 days ago Selected Answer: B Opción B - MEJOR SOLUCIÓN: ✅ Integración nativa: Bedrock soporta S3 URIs directamente en parámetros de entrada/salida ✅ Mínimo overhead: No requiere Lambda, DynamoDB adicional, ni múltiples state machines ✅ Mantiene workflow secuencial: Preserva el patrón ReAct existente ✅ Observabilidad: ResultPath y ResultSelector permiten tracking del flujo ✅ Manejo elegante de datos grandes: Pasa referencias S3 en lugar de datos completos ✅ Ya usa S3: Aprovecha la infraestructura existente upvoted 2 times Submit     Cancel ... GiorgioGss 8 months, 15 days ago Selected Answer: B LEAST operational overhead upvoted 1 time Submit     Cancel ... 67bdb19 8 months, 22 days ago Selected Answer: A I’m leaning heavily toward A on this one. upvoted 1 time Submit     Cancel ...

----------------------------------------

## Exam AWS Certified Generative AI Developer - Professional AIP-C01 topic 1 question 28 discussion



A company provides a service that helps users from around the world discover new restaurants. The service has 50 million monthly active users. The company wants to implement a semantic search solution across a database that contains 20 million restaurants and 200 million reviews. The company currently stores the data in a PostgresQL database.

The solution must support complex natural language queries and return results for at least 95% of queries within 500 ms. The solution must maintain data freshness for restaurant details that update hourly. The solution must also scale cost-effectively during peak usage periods.

Which solution will meet these requirements with the LEAST development effort?

A. Migrate the restaurant data to Amazon OpenSearch Service. Implement keyword-based search rules that use custom analyzers and relevance tuning to find restaurants based on attributes such as cuisine type, feature, and location. Create Amazon API Gateway HTTP API endpoints to transform user queries into structured search parameters.

B. Migrate the restaurant data to Amazon OpenSearch Service. Use a foundation model (FM) in Amazon Bedrock to generate vector embeddings from restaurant descriptions, reviews, and menu items. When users submit natural language queries, convert the queries to embeddings by using the same FM. Perform k-nearest neighbors (k-NN) searches to find semantically similar results.

C. Keep the restaurant data in PostgresQL and implement a pgvector extension. Use a foundation model (FM) in Amazon Bedrock to generate vector embeddings from restaurant data. Store the vector embeddings directly in PostgreSQL. Create an AWS Lambda function to convert natural language queries to vector representations by using the same FM. Configure the Lambda function to perform similarity searches within the database.

D. Migrate restaurant data to an Amazon Bedrock knowledge base by using a custom ingestion pipeline. Configure the knowledge base to automatically generate embeddings from restaurant information. Use the Amazon Bedrock Retrieve API with built-in vector search capabilities to query the knowledge base directly by using natural language input. Forgot my password

**Answer: **

**Timestamp: **

[View on ExamTopics](https://www.examtopics.com/discussions/amazon/view/384226-exam-aws-certified-generative-ai-developer-professional-aip-c01-topic-1-question-28-discussion/)

Comments: Chibuzo1 Most Recent 5 months, 4 days ago Selected Answer: D Option D is the only solution where AWS manages the entire vector search stack — from embedding generation through retrieval — leaving the development team to focus exclusively on application logic rather than infrastructure. upvoted 1 time Submit     Cancel ... biryani14 5 months, 20 days ago Selected Answer: B D cant hant handle the scale in real life scenario upvoted 1 time Submit     Cancel ... eCosinus 7 months, 23 days ago Selected Answer: D least development effort + meets requirements upvoted 1 time Submit     Cancel ... ArunRav 8 months, 1 days ago Selected Answer: B Option B considering the latency and semantic search requirement. A says about keyword search which is not the requirement, C cant handle the load and latency requirement. D is not the correct fit for the high scale semantic search upvoted 4 times Submit     Cancel ... GiorgioGss 8 months, 15 days ago Selected Answer: B semantic search = Opensearch and between A and B the Least effort is B upvoted 2 times Submit     Cancel ... 67bdb19 8 months, 22 days ago Selected Answer: A Leaning toward A, but I'd be interested to hear arguments for the others. upvoted 1 time Submit     Cancel ...

----------------------------------------

## Exam AWS Certified Generative AI Developer - Professional AIP-C01 topic 1 question 29 discussion



A medical company uses Amazon Bedrock to power a clinical documentation summarization system. The system produces inconsistent summaries when handling complex clinical documents. The system performed well on simple clinical documents.

The company needs a solution that diagnoses inconsistencies, compares prompt performance against established metrics, and maintains historical records of prompt versions.

Which solution will meet these requirements?

A. Create multiple prompt variants by using Prompt management in Amazon Bedrock. Manually test the prompts with simple clinical documents. Deploy the highest performing version by using the Amazon Bedrock console.

B. Implement version control for prompts in a code repository with a test suite that contains complex clinical documents and quantifiable evaluation metrics. Use an automated testing framework to compare prompt versions and document performance patterns.

C. Deploy each new prompt version to separate Amazon Bedrock API endpoints. Split production traffic between the endpoints. Configure Amazon CloudWatch to capture response metrics and user feedback for automatic version selection.

D. Create a custom prompt evaluation flow in Amazon Bedrock Flows that applies the same clinical document inputs to different prompt variants. Use Amazon Comprehend Medical to analyze and score the factual accuracy of each version. Forgot my password

**Answer: **

**Timestamp: **

[View on ExamTopics](https://www.examtopics.com/discussions/amazon/view/384240-exam-aws-certified-generative-ai-developer-professional-aip-c01-topic-1-question-29-discussion/)

Comments: ArunRav Most Recent 8 months, 1 days ago Selected Answer: D D seems to be correct - upvoted 3 times Submit     Cancel ... AM_aws 8 months, 2 days ago Selected Answer: B version control, metrics like BLEU, ROGUE, automation upvoted 3 times Submit     Cancel ... eesa 8 months, 7 days ago Selected Answer: B Opción B - MEJOR SOLUCIÓN: ✅ Diagnóstico de inconsistencias: Test suite con documentos complejos identifica problemas específicos ✅ Métricas establecidas: Framework de evaluación con métricas cuantificables ✅ Historial completo: Version control mantiene registro de todas las versiones de prompts ✅ Comparación sistemática: Automated testing compara rendimiento entre versiones ✅ Reproducibilidad: Mismos tests aplicados consistentemente ✅ CI/CD ready: Se integra con pipelines de desarrollo ✅ Documentación de patrones: Registra qué funciona y qué no upvoted 3 times Submit     Cancel ... xyztest 8 months, 11 days ago Selected Answer: D Correct Answer upvoted 2 times Submit     Cancel ... GiorgioGss 8 months, 15 days ago Selected Answer: B Code repository version control maintains full audit trail of every prompt iteration upvoted 2 times Submit     Cancel ... 67bdb19 8 months, 22 days ago Selected Answer: A I'm thinking A. Can anyone confirm this? upvoted 2 times Submit     Cancel ...

----------------------------------------

## Exam AWS Certified Generative AI Developer - Professional AIP-C01 topic 1 question 30 discussion



A company uses Amazon Bedrock to generate technical content for customers. The company has recently experienced a surge in hallucination outputs when the company's model generates summaries of long technical documents. The model outputs include inaccurate or fabricated details. The company's current solution uses a large foundation model (FM) with a basic one-shot prompt that includes the full document in a single input.

The company needs a solution that will reduce hallucinations and meet factual accuracy goals. The solution must process more than 1,000 documents each hour and deliver summaries within 3 seconds for each document.

Which combination of solutions will meet these requirements? (Choose two.)

A. Implement zero-shot chain-of-thought (CoT) instructions that require step-by-step reasoning with explicit fact verification before the model generates each summary.

B. Use Retrieval Augmented Generation (RAG) with an Amazon Bedrock knowledge base. Apply semantic chunking and tuned embeddings to ground summaries in source content.

C. Configure Amazon Bedrock guardrails to block any generated output that matches patterns that are associated with hallucinated content.

D. Increase the temperature parameter in Amazon Bedrock.

E. Prompt the Amazon Bedrock model to summarize each full document in one pass. Forgot my password

**Answer: **

**Timestamp: **

[View on ExamTopics](https://www.examtopics.com/discussions/amazon/view/384227-exam-aws-certified-generative-ai-developer-professional-aip-c01-topic-1-question-30-discussion/)

Comments: Chibuzo1 Most Recent 5 months, 3 days ago Selected Answer: AB The combination of CoT (reasoning discipline) + RAG with chunking (grounding in source) attacks hallucinations from two complementary angles — how the model thinks and what content it works from — without sacrificing the throughput or latency requirements. upvoted 1 time Submit     Cancel ... ssnei 6 months, 29 days ago Selected Answer: AB Hallucinations in long-document summarization are best solved by: RAG (grounding) + Structured reasoning (verification) upvoted 1 time Submit     Cancel ... ArunRav 8 months, 1 days ago Selected Answer: AB A and B seems to be the correct answer upvoted 3 times Submit     Cancel ... eesa 8 months, 7 days ago Selected Answer: AB ✅ Reduce alucinaciones: Razonamiento paso a paso mejora precisión factual ✅ Verificación explícita: El modelo verifica hechos antes de generar ✅ Cumple latencia: Zero-shot CoT añade tokens pero mantiene &lt;3s ✅ Escalable: Procesa 1,000+ docs/hora sin infraestructura adicional ✅ Grounding en fuente: Ancla respuestas en contenido real del documento ✅ Semantic chunking: Maneja documentos largos eficientemente ✅ Reduce alucinaciones: RAG proporciona contexto verificable ✅ Cumple latencia: Knowledge Bases optimizado para respuestas rápidas upvoted 2 times Submit     Cancel ... Tanle 8 months, 10 days ago Selected Answer: AB Agree choose A, B upvoted 2 times Submit     Cancel ... xyztest 8 months, 11 days ago Selected Answer: AB Correct Answer upvoted 2 times Submit     Cancel ... anttan 8 months, 14 days ago Selected Answer: AB The correct answers are A and B. A is correct because zero-shot chain-of-thought (CoT) instructions force the model to reason step-by-step and verify facts before generating the final summary. This reduces hallucinations by guiding the model to check each piece of information against the input content. B is correct because Retrieval Augmented Generation (RAG) with an Amazon Bedrock knowledge base allows the model to generate summaries grounded in source content. Semantic chunking and tuned embeddings ensure the model references accurate portions of the document, improving factual accuracy while enabling processing of long documents efficiently. upvoted 3 times Submit     Cancel ... GiorgioGss 8 months, 15 days ago Selected Answer: BC A - most probably will add more time and exceed 3 seconds D - increasing temperature will increase hallucination E - this is the current issue they try to solve upvoted 1 time Submit     Cancel ... 67bdb19 8 months, 22 days ago Selected Answer: C The answer is C. upvoted 1 time Submit     Cancel ...

----------------------------------------

## Exam AWS Certified Generative AI Developer - Professional AIP-C01 topic 1 question 31 discussion



A company has a recommendation system. The system's applications run on Amazon EC2 instances. The applications make API calls to Amazon Bedrock foundation models (FMs) to analyze customer behavior and generate personalized product recommendations.

The system is experiencing intermittent issues. Some recommendations do not match customer preferences. The company needs an observability solution to monitor operational metrics and detect patterns of operational performance degradation compared to established baselines. The solution must also generate alerts with correlation data within 10 minutes when FM behavior deviates from expected patterns.

Which solution will meet these requirements?

A. Configure Amazon CloudWatch Container Insights for the application infrastructure. Set up CloudWatch alarms for latency thresholds. Add custom metrics for token counts by using the CloudWatch embedded metric format. Create CloudWatch dashboards to visualize the data.

B. Implement AWS X-Ray to trace requests through the application components. Enable CloudWatch Logs Insights for error pattern detection. Set up AWS CloudTrail to monitor all API calls to Amazon Bedrock. Create custom dashboards in Amazon QuickSight.

C. Enable Amazon CloudWatch Application Insights for the application resources. Create custom metrics for recommendation quality, token usage, and response latency by using the CloudWatch embedded metric format with dimensions for request types and user segments. Configure CloudWatch anomaly detection on the model metrics. Establish log pattern analysis by using CloudWatch Logs Insights.

D. Use Amazon OpenSearch Service with the Observability plugin. Ingest model metrics and logs by using Amazon Kinesis. Create custom Piped Processing Language (PPL) queries to analyze model behavior patterns. Establish operational dashboards to visualize anomalies in real time. Forgot my password

**Answer: **

**Timestamp: **

[View on ExamTopics](https://www.examtopics.com/discussions/amazon/view/384233-exam-aws-certified-generative-ai-developer-professional-aip-c01-topic-1-question-31-discussion/)

Comments: ArunRav Most Recent 8 months, 1 days ago Selected Answer: C CloudWatch anomaly detection uses machine learning to detect performance deviations https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/CloudWatch_Anomaly_Detection.html upvoted 3 times Submit     Cancel ... GiorgioGss 8 months, 15 days ago Selected Answer: C A - container insights is wrong for EC2 B - xray is for different purpose D - opensearch is the most obvious wrong answer upvoted 4 times Submit     Cancel ... 67bdb19 8 months, 22 days ago Selected Answer: B Could be wrong, but I’m backing B. It just clicks. upvoted 1 time Submit     Cancel ...

----------------------------------------

## Exam AWS Certified Generative AI Developer - Professional AIP-C01 topic 1 question 32 discussion



An enterprise application uses an Amazon Bedrock foundation model (FM) to process and analyze 50 to 200 pages of technical documents. Users are experiencing inconsistent responses and receiving truncated outputs when processing documents that exceed the FM's context window limits.

Which solution will resolve this problem?

A. Configure fixed-size chunking at 4,000 tokens for each chunk with 20% overlap. Use application-level logic to link multiple chunks sequentially until the FM's maximum context window of 200,000 tokens is reached before making inference calls.

B. Use hierarchical chunking with parent chunks of 8,000 tokens and child chunks of 2,000 tokens. Use Amazon Bedrock Knowledge Bases built-in retrieval to automatically select relevant parent chunks based on query context. Configure overlap tokens to maintain semantic continuity.

C. Use semantic chunking with a breakpoint percentile threshold of 95% and a buffer size of 3 sentences. Use the Amazon Bedrock RetrieveAndGenerate API call to dynamically select the most relevant chunks based on embedding similarity scores.

D. Create a pre-processing AWS Lambda function that analyzes document token count by using the FM's tokenizer. Configure the lambda function to split documents into equal segments that fit within 80% of the context window. Configure the Lambda function to process each segment independently before aggregating the results. Forgot my password

**Answer: **

**Timestamp: **

[View on ExamTopics](https://www.examtopics.com/discussions/amazon/view/384242-exam-aws-certified-generative-ai-developer-professional-aip-c01-topic-1-question-32-discussion/)

Comments: dexterryu Most Recent 2 months, 26 days ago Selected Answer: B Why B is correct: Hierarchical chunking in Amazon Bedrock Knowledge Bases creates nested parent/child chunks. Retrieval first finds precise child chunks, then automatically replaces them with the broader parent chunks. This supplies the model with comprehensive, continuous context from long technical documents while staying within the foundation model’s context window—directly solving truncation and inconsistency without stuffing the entire 50–200-page document into a single prompt. upvoted 4 times Submit     Cancel ... AWSCer1937 6 months, 0 days ago Selected Answer: B Option B provides: Managed chunking Managed retrieval Parent-child contextual expansion Minimal operational overhead This is the most robust and AWS-native approach. upvoted 2 times Submit     Cancel ... a9fb7b2 7 months, 21 days ago Selected Answer: C Amazon Bedrock Knowledge Bases supports semantic chunking, which splits text based on meaning rather than fixed size. That helps improve retrieval quality when users ask about specific parts of technical documents. Then RetrieveAndGenerate retrieves only the most relevant chunks for the query instead of trying to fit large sections into the model context window, which helps avoid truncation and inconsistent upvoted 3 times Submit     Cancel ... Kraftzman 7 months, 24 days ago Selected Answer: C Semantic Chunking uses an embedding model to &quot;look&quot; at the meaning of sentences. It only creates a &quot;breakpoint&quot; when the semantic meaning changes significantly (controlled by the percentile threshold). The buffer size ensures that surrounding sentences are kept together, preserving the technical context necessary for an accurate summary. upvoted 2 times Submit     Cancel ... ArunRav 8 months, 1 days ago Selected Answer: B Child chunks ensure fine‑grained relevance where as Parent chunks ensure the model receives sufficient context without exceeding limits. https://docs.aws.amazon.com/bedrock/latest/userguide/kb-chunking.html upvoted 1 time Submit     Cancel ... ArunRav 7 months, 25 days ago Changing to C. upvoted 1 time Submit     Cancel ... GiorgioGss 8 months, 15 days ago Selected Answer: C C should be upvoted 3 times Submit     Cancel ... 67bdb19 8 months, 22 days ago Selected Answer: D I'm thinking D. Can anyone confirm this? upvoted 1 time Submit     Cancel ...

----------------------------------------

## Exam AWS Certified Generative AI Developer - Professional AIP-C01 topic 1 question 33 discussion



A company is developing a generative AI (GenAI) application that analyzes customer service calls in real-time and generates suggested responses for human customer service agents. The application must process 500,000 concurrent calls during peak hours with less than 200 ms end-to-end latency for each suggestion. The company uses existing architecture to transcribe customer call audio streams. The application must not exceed a pre-defined monthly compute budget and must maintain auto scaling capabilities.

Which solution will meet these requirements?

A. Deploy a large, complex reasoning model on Amazon Bedrock. Purchase provisioned throughput and optimize for batch processing.

B. Deploy a low-latency, real-time optimized model on Amazon Bedrock. Purchase provisioned throughput and set up automatic scaling policies.

C. Deploy a large language model (LLM) on an Amazon SageMaker AI real-time endpoint that uses dedicated GPU instances.

D. Deploy a mid-sized language model on an Amazon SageMaker AI serverless endpoint that is optimized for batch processing. Forgot my password

**Answer: **

**Timestamp: **

[View on ExamTopics](https://www.examtopics.com/discussions/amazon/view/384232-exam-aws-certified-generative-ai-developer-professional-aip-c01-topic-1-question-33-discussion/)

Comments: Gagg Most Recent 6 months, 18 days ago Selected Answer: C Bad question. B) Bedrock is serverless and does not have automatic scaling policies The correct answer should be A or C, but both have issues: - Option A: Complex reasoning models are not optimized for &lt;200ms latency - Option C: SageMaker real-time endpoints can provide auto-scaling but may exceed budget Most likely correct answer: C - SageMaker real-time endpoints with auto-scaling provide the best result. upvoted 2 times Submit     Cancel ... ArunRav 8 months, 1 days ago Selected Answer: B low-latency, real-time optimized model on Amazon Bedrock along with provisioned throughput will be the right fit as it meets all the requirement. upvoted 2 times Submit     Cancel ... GiorgioGss 8 months, 15 days ago Selected Answer: B B is built for this constraint upvoted 2 times Submit     Cancel ... 67bdb19 8 months, 22 days ago Selected Answer: B Looks like B fits best. upvoted 2 times Submit     Cancel ...

----------------------------------------

## Exam AWS Certified Generative AI Developer - Professional AIP-C01 topic 1 question 34 discussion



An ecommerce company is building an internal platform to develop generative AI applications by using Amazon Bedrock foundation models (FMs). Developers need to select models based on evaluations that are aligned to ecommerce use cases. The platform must display accuracy metrics for text generation and summarization in dashboards. The company has custom ecommerce datasets to use as standardized evaluation inputs.

Which combination of steps will meet these requirements with the LEAST operational overhead? (Choose two.)

A. Import the datasets to an Amazon S3 bucket. Provide appropriate IAM permissions and cross-origin resource sharing (CORS) permissions to give the evaluation jobs access to the datasets.

B. Import the datasets to an Amazon S3 bucket. Provide appropriate IAM permissions and a VPC endpoint configuration to give the evaluation jobs access to the datasets.

C. Configure an AWS Lambda function to create model evaluation jobs on a schedule in the Amazon Bedrock console. Provide the URI of the S3 bucket that contains the datasets as an input. Configure the evaluation jobs to measure the real world knowledge (RWK) score for text generation and BERT Score for summarization. Configure a second Lambda function to check the status of the jobs and publish custom logs to Amazon CloudWatch. Create a custom Amazon CloudWatch Logs Insights dashboard.

D. Use Amazon SageMaker Clarify on a schedule to create model evaluation jobs. Use open source frameworks to create and run standardized evaluations. Publish results to Amazon CloudWatch namespaces. Use the word error rate score for text generation and toxicity for summarization as metrics for accuracy. Configure an AWS Lambda function to check the status of the jobs and publish custom logs to CloudWatch. Create a custom Amazon CloudWatch Logs Insights dashboard.

E. Run an Amazon SageMaker AI notebook job on a schedule by using the fmevals or ragas framework to run evaluations that use the datasets in the S3 bucket. Write Python code in the notebook that makes direct InvokeModel API calls to the FMs and processes their responses for evaluation. Publish job status and results to Amazon CloudWatch Logs to measure the real world knowledge (RWK) score for text generation and toxicity for summarization as metrics for accuracy. Create a custom CloudWatch Logs Insights dashboard. Forgot my password

**Answer: **

**Timestamp: **

[View on ExamTopics](https://www.examtopics.com/discussions/amazon/view/384245-exam-aws-certified-generative-ai-developer-professional-aip-c01-topic-1-question-34-discussion/)

Comments: Kraftzman Most Recent 7 months, 24 days ago Selected Answer: AC answer is A &amp; C upvoted 3 times Submit     Cancel ... ArunRav 8 months, 1 days ago Selected Answer: AC https://docs.aws.amazon.com/bedrock/latest/userguide/model-evaluation-security-cors.html upvoted 3 times Submit     Cancel ... taka5094 8 months, 6 days ago Selected Answer: AC https://docs.aws.amazon.com/bedrock/latest/userguide/model-evaluation-security-cors.html &gt; All console-based model evaluation jobs require Cross Origin Resource Sharing (CORS) permissions to be enabled on any Amazon S3 buckets specified in the model evaluation job. upvoted 4 times Submit     Cancel ... eesa 8 months, 7 days ago Selected Answer: AC Opción A (S3 + IAM + CORS) - CORRECTA: ✅ Mínimo overhead: S3 es el almacenamiento estándar para datasets ✅ IAM permissions: Control de acceso nativo de AWS ✅ CORS: Necesario para que Bedrock console acceda a los datasets ✅ Simple y directo: No requiere configuración compleja ✅ Compatible con Bedrock evaluations: Formato esperado por el servicio Opción C (Lambda + Bedrock evaluations nativas) - CORRECTA: ✅ Usa capacidades nativas de Bedrock: Model evaluation jobs integrados ✅ Métricas apropiadas: RWK (Real World Knowledge) para text generation ✅ BERT Score para summarization ✅ ✅ Mínimo overhead: Usa servicios managed (Lambda + Bedrock) upvoted 2 times Submit     Cancel ... xyztest 8 months, 11 days ago Selected Answer: BC Correct Answer upvoted 2 times Submit     Cancel ... GiorgioGss 8 months, 15 days ago Selected Answer: BC B because &quot;internal platform&quot; C because native metrics upvoted 1 time Submit     Cancel ... 67bdb19 8 months, 22 days ago Selected Answer: C I’d roll with C — seems like the most solid choice. upvoted 1 time Submit     Cancel ...

----------------------------------------

## Exam AWS Certified Generative AI Developer - Professional AIP-C01 topic 1 question 35 discussion



An elevator service company has developed an AI assistant application by using Amazon Bedrock. The application generates elevator maintenance recommendations to support the company's elevator technicians. The company uses Amazon Kinesis Data Streams to collect the elevator sensor data.

New regulatory rules require that a human technician must review all AI-generated recommendations. The company needs to establish human oversight workflows to review and approve AI recommendations. The company must store all human technician review decisions for audit purposes.

Which solution will meet these requirements?

A. Create a custom approval workflow by using AWS Lambda functions and Amazon SQS queues for human review of AI recommendations. Store all review decisions in Amazon DynamoDB for audit purposes.

B. Create an AWS Step Functions workflow that has a human approval step that uses the waitForTaskToken API to pause execution. After a human technician completes a review, use an AWS Lambda function to call the SendTaskSuccess API that has the approval decision. Store all review decisions in Amazon DynamoDB.

C. Create an AWS Glue workflow that has a human approval step. After the human technician review, integrate the application with an AWS Lambda function that calls the SendTaskSuccess API. Store all human technician review decisions in Amazon DynamoDB.

D. Configure Amazon EventBridge rules with custom event patterns to route AI recommendations to human technicians for review. Create AWS Glue jobs to process human technician approval queues. Use Amazon ElastiCache to cache all human technician review decisions. Forgot my password

**Answer: **

**Timestamp: **

[View on ExamTopics](https://www.examtopics.com/discussions/amazon/view/384222-exam-aws-certified-generative-ai-developer-professional-aip-c01-topic-1-question-35-discussion/)

Comments: ArunRav Most Recent 8 months, 1 days ago Selected Answer: B Option B https://docs.aws.amazon.com/step-functions/latest/dg/tutorial-human-approval.html upvoted 3 times Submit     Cancel ... eesa 8 months, 7 days ago Selected Answer: B ✅ Human-in-the-loop nativo: Step Functions diseñado específicamente para workflows con aprobación humana ✅ waitForTaskToken: Pausa la ejecución hasta que el humano complete la revisión ✅ SendTaskSuccess API: Reanuda el workflow con la decisión de aprobación ✅ Auditoría completa: DynamoDB almacena todas las decisiones para compliance ✅ Trazabilidad: Step Functions mantiene historial completo de ejecuciones ✅ Manejo de timeouts: Puede configurar límites de tiempo para revisiones ✅ Escalable y managed: Sin infraestructura que mantener upvoted 2 times Submit     Cancel ... GiorgioGss 8 months, 15 days ago Selected Answer: B B - stepfunction is the key upvoted 2 times Submit     Cancel ... 67bdb19 8 months, 22 days ago Selected Answer: A Not super confident, but I’ll go with A. upvoted 1 time Submit     Cancel ...

----------------------------------------

## Exam AWS Certified Generative AI Developer - Professional AIP-C01 topic 1 question 36 discussion



A bank is building a generative AI (GenAI) application that uses Amazon Bedrock to assess loan applications by using scanned financial documents. The application must extract structured data from the documents. The application must redact personally identifiable information (PII) before inference. The application must use foundation models (FMs) to generate approvals. The application must route low-confidence document extraction results to human reviewers who are within the same AWS Region as the loan applicant.

The company must ensure that the application complies with strict Regional data residency and auditability requirements. The application must be able to scale to handle 25,000 applications each day and provide 99.9% availability.

Which combination of solutions will meet these requirements? (Choose three.)

A. Deploy Amazon Textract and Amazon Augmented AI (Amazon A2I) within the same Region to extract relevant data from the scanned documents. Route low-confidence pages to human reviewers.

B. Use AWS Lambda functions to detect and redact PII from submitted documents before inference. Apply Amazon Bedrock guardrails to prevent inappropriate or unauthorized content in model outputs. Configure Region-specific IAM roles to enforce data residency requirements and to control access to the extracted data.

C. Use Amazon Kendra and Amazon OpenSearch Service to extract field level values semantically from the uploaded documents before inference.

D. Store uploaded documents in Amazon S3 and apply object metadata. Configure IAM policies to store original documents within the same Region as each applicant. Enable object tagging for future audits.

E. Use AWS Glue Data Quality to validate the structured document data. Use AWS Step Functions to orchestrate a review workflow that includes a prompt engineering step that transforms validated data into optimized prompts before invoking Amazon Bedrock to assess loan applications.

F. Use Amazon SageMaker Clarify to generate fairness and bias reports based on model scoring decisions that Amazon Bedrock makes. Forgot my password

**Answer: **

**Timestamp: **

[View on ExamTopics](https://www.examtopics.com/discussions/amazon/view/384234-exam-aws-certified-generative-ai-developer-professional-aip-c01-topic-1-question-36-discussion/)

Comments: ansh0692 1 month, 20 days ago Selected Answer: ABD AWS Glue Data Quality is designed for batch data lake transformations, not low-latency transactional document validation. Additionally, this option completely lacks a mechanism for routing low-confidence OCR extractions to human reviewers in-region. Hence, ABD upvoted 1 time Submit     Cancel ... Gaurav955 Most Recent 2 months, 18 days ago Selected Answer: ABD ABD is final answer upvoted 2 times Submit     Cancel ... QuinnGT 3 months, 7 days ago Selected Answer: ABE A:supplies managed document extraction and routes low-confidence Textract results to people for review. B:performs PII redaction before the model call and adds output controls and Region-scoped authorization. E:validates the extracted structure and gives the multi-stage process a durable orchestration and execution history before invoking Bedrock. D is tempting because it mentions same-Region S3 and tags, but tags alone are not an audit trail, and B/E more directly fulfill mandatory processing requirements. upvoted 1 time Submit     Cancel ... AndreyShne24 6 months, 21 days ago Selected Answer: ABE Although D is a good answer as well to be ADE but only B is handling the PII requirement, so my vote goes to ABE upvoted 2 times Submit     Cancel ... jakie22332 6 months, 27 days ago Selected Answer: ABE this is the correct answer upvoted 2 times Submit     Cancel ... SankarKumar 7 months, 1 days ago Selected Answer: ADE Scalable orchestration High availability (99.9%) Clean input → better FM output upvoted 1 time Submit     Cancel ... de1612d 7 months, 10 days ago Selected Answer: ADE A: Use Amazon Textract with Amazon Augmented AI to extract structured data from scanned documents and route low-confidence results to human reviewers. D: Store documents in Amazon S3 with region-specific controls and object tagging to ensure data residency compliance and auditability. E: Use AWS Step Functions and AWS Glue Data Quality to orchestrate the workflow, validate extracted data, and invoke Amazon Bedrock for loan upvoted 1 time Submit     Cancel ... GiorgioGss 8 months, 15 days ago Selected Answer: ABD C - Kendra/OpenSearch for semantic search, not structured field extraction E - Glue Data Quality validates data schemas, not loan decision workflows F - SageMaker Clarify for ML bias (not Bedrock FM outputs) upvoted 1 time Submit     Cancel ... 67bdb19 8 months, 22 days ago Selected Answer: B This is a tough one. My best educated guess is B. upvoted 1 time Submit     Cancel ...

----------------------------------------

## Exam AWS Certified Generative AI Developer - Professional AIP-C01 topic 1 question 37 discussion



A software company is using Amazon Q Business to build an AI assistant that allows employees to access company information and personal information by using natural language prompts. The company stores this information in an Amazon S3 bucket.

Each department in the company has a dedicated prefix in the S3 bucket. Each object name includes the S3 prefix of the department that it belongs to. Each department can belong to only a single group in AWS IAM Identity Center. Each employee belongs to a single department.

The company configures Amazon Q Business to access data stored in an S3 bucket as a data source. The company needs to ensure that the AI assistant respects access controls based on the user's IAM Identity Center group membership.

Which solution will meet this requirement with the LEAST operational overhead?

A. Create a JSON file named acl.json in each department folder. In each file, create access control entries that specify the IAM Identity Center group that should have access to that department's data. Indicate the location of the JSON file in the Access Control section of the data source settings.

B. Create a single JSON file named acl.json at the top level of the S3 bucket. Add access control entries that map each department's S3 prefix to its corresponding IAM Identity Center group. Indicate the location of the JSON file in the Access Control section of the data source settings.

C. For each IAM Identity Center group, create a separate permissions set that denies access to all prefixes in the S3 bucket. Add a StringNotEquals condition key to the permissions set for each group that specifies the department each group is associated with. Attach the permissions sets to the Identity Center groups.

D. Create a metadata file named metadata.json at the top level of the S3 bucket. Add an AccessControlList object to the file that specifies the S3 path of each department's prefix. Specify the IAM Identity Center group that should have access to each department's prefix. Reference the file location in the data source metadata settings. Forgot my password

**Answer: **

**Timestamp: **

[View on ExamTopics](https://www.examtopics.com/discussions/amazon/view/384235-exam-aws-certified-generative-ai-developer-professional-aip-c01-topic-1-question-37-discussion/)

Comments: eesa Most Recent 8 months, 7 days ago Selected Answer: B ✅ Mínimo overhead operacional: Un solo archivo ACL centralizado ✅ Fácil mantenimiento: Todas las reglas de acceso en un lugar ✅ Integración nativa: Amazon Q Business soporta ACL files en data source settings ✅ Mapeo directo: Prefijos S3 → IAM Identity Center groups ✅ Escalable: Agregar nuevos departamentos solo requiere editar un archivo ✅ Gestión centralizada: Administradores pueden ver/modificar todos los permisos fácilmente upvoted 1 time Submit     Cancel ... GiorgioGss 8 months, 15 days ago Selected Answer: B https://docs.aws.amazon.com/amazonq/latest/qbusiness-ug/s3-user-management.html upvoted 1 time Submit     Cancel ... 67bdb19 8 months, 22 days ago Selected Answer: B This is a core concept for this certification. The answer has to be B. upvoted 1 time Submit     Cancel ...

----------------------------------------

## Exam AWS Certified Generative AI Developer - Professional AIP-C01 topic 1 question 38 discussion



A healthcare company is using Amazon Bedrock to build a system to help practitioners make clinical decisions. The system must provide treatment recommendations to physicians based only on approved medical documentation and must cite specific sources. The system must not hallucinate or produce factually incorrect information.

Which solution will meet these requirements with the LEAST operational overhead?

A. Integrate Amazon Bedrock with Amazon Kendra to retrieve approved documents. Implement custom post-processing to compare generated responses against source documents and to include citations.

B. Deploy an Amazon Bedrock knowledge base and connect it to approved clinical source documents. Use the Amazon Bedrock RetrieveAndGenerate API to return citations from the knowledge base.

C. Use Amazon Bedrock and Amazon Comprehend Medical to extract medical entities. Implement verification logic against a medical terminology database.

D. Use an Amazon Bedrock knowledge base with Retrieve API calls and InvokeModel API calls to retrieve approved clinical source documents. Implement verification logic to compare against retrieved sources and to cite sources. Forgot my password

**Answer: **

**Timestamp: **

[View on ExamTopics](https://www.examtopics.com/discussions/amazon/view/384246-exam-aws-certified-generative-ai-developer-professional-aip-c01-topic-1-question-38-discussion/)

Comments: Chibuzo1 Most Recent 6 months, 1 days ago Selected Answer: B Why B is correct The RetrieveAndGenerate API is a fully managed, single API call that handles the entire RAG pipeline automatically: Retrieves relevant chunks from the knowledge base Grounds the response in those retrieved documents only Returns citations natively — no custom code needed Reduces hallucination by anchoring answers to approved source documents upvoted 1 time Submit     Cancel ... GiorgioGss 8 months, 15 days ago Selected Answer: B The most 'safe' from hallucination is B. upvoted 4 times Submit     Cancel ... 67bdb19 8 months, 22 days ago Selected Answer: C My best guess is C right now, but I need to study this area more. upvoted 1 time Submit     Cancel ...

----------------------------------------

## Exam AWS Certified Generative AI Developer - Professional AIP-C01 topic 1 question 39 discussion



A financial services company is developing a real-time generative AI (GenAI) assistant to support human call center agents. The GenAI assistant must transcribe live customer speech, analyze context, and provide incremental suggestions to call center agents while a customer is still speaking. To preserve responsiveness, the GenAI assistant must maintain end-to-end latency under 1 second from speech to initial response display. The architecture must use only managed AWS services and must support bidirectional streaming to ensure that call center agents receive updates in real time.

Which solution will meet these requirements?

A. Use the Amazon Transcribe streaming API to transcribe calls. Pass the text to Amazon Comprehend to perform sentiment analysis. Feed the results to Anthropic Claude on Amazon Bedrock by using the InvokeModel API. Store results in Amazon DynamoDB. Use a WebSocket API to display the results.

B. Use Amazon Transcribe streaming with partial results enabled to deliver fragments of transcribed text before customers finish speaking. Forward text fragments to Amazon Bedrock by using the InvokeModelWithResponseStream API. Stream responses to call center agents through an Amazon API Gateway WebSocket API.

C. Use Amazon Transcribe batch processing to convert calls to text. Pass complete transcripts to Anthropic Claude on Amazon Bedrock by using the ConverseStream API. Return responses through an Amazon Lex chatbot interface that call center agents can access from their work computers.

D. Use the Amazon Transcribe streaming API with an AWS Lambda function to transcribe each audio segment. Configure the Lambda function to call the Amazon Titan Embeddings model on Amazon Bedrock by using the InvokeModel API. Configure the Lambda function to publish results to an Amazon SNS topic. Subscribe the call center agents to the SNS topic. Forgot my password

**Answer: **

**Timestamp: **

[View on ExamTopics](https://www.examtopics.com/discussions/amazon/view/384260-exam-aws-certified-generative-ai-developer-professional-aip-c01-topic-1-question-39-discussion/)

Comments: Chibuzo1 Most Recent 6 months, 1 days ago Selected Answer: B Show more 11:34 PM Answer: B Amazon Transcribe Streaming (partial results) + InvokeModelWithResponseStream + API Gateway WebSocket is the correct answer. upvoted 1 time Submit     Cancel ... eesa 8 months, 7 days ago Selected Answer: B ✅ Latencia ultra-baja (&lt;1s): Streaming end-to-end sin esperar a que termine el habla ✅ Partial results: Transcribe entrega fragmentos mientras el cliente habla ✅ Bidirectional streaming: WebSocket API permite comunicación bidireccional en tiempo real ✅ InvokeModelWithResponseStream: Bedrock streaming para respuestas incrementales ✅ Real-time updates: Agentes reciben sugerencias mientras el cliente habla ✅ Solo servicios managed: Transcribe + Bedrock + API Gateway ✅ Arquitectura optimizada: Cada componente diseñado para streaming upvoted 2 times Submit     Cancel ... GiorgioGss 8 months, 15 days ago Selected Answer: B B - &quot;provide incremental suggestions to call center agents while a customer is still speaking&quot; upvoted 2 times Submit     Cancel ...

----------------------------------------

## Exam AWS Certified Generative AI Developer - Professional AIP-C01 topic 1 question 40 discussion



A media company is launching a platform that allows thousands of users every hour to upload images and text content. The platform uses Amazon Bedrock to process the uploaded content to generate creative compositions.

The company needs a solution to ensure that the platform does not process or produce inappropriate content. The platform must not expose personally identifiable information (PII) in the compositions. The solution must integrate with the company's existing Amazon S3 storage workflow.

Which solution will meet these requirements with the LEAST infrastructure management overhead?

A. Enable the Enhanced Monitoring tool. Use an Amazon CloudWatch alarm to filter traffic to the platform. Use Amazon Comprehend PII detection to pre-process the data. Create a CloudWatch alarm to monitor for Amazon Comprehend PII detection events. Create an AWS Step Functions workflow that includes an Amazon Rekognition image moderation step.

B. Use an Amazon API Gateway HTTP API with request validation templates to screen content before storing the uploaded content in Amazon S3. Use Amazon SageMaker AI to build custom content moderation models that process content before sending the processed content to Amazon Bedrock.

C. Create an Amazon Cognito user pool that uses pre-authentication AWS Lambda functions to run content moderation checks. Use Amazon Textract to filter text content and Amazon Rekognition to filter image content before allowing users to upload content to the platform.

D. Create an AWS Step Functions workflow that uses built-in Amazon Bedrock guardrails to filter content. Use Amazon Comprehend PII detection to pre-process the content. Use Amazon Rekognition image moderation. Forgot my password

**Answer: **

**Timestamp: **

[View on ExamTopics](https://www.examtopics.com/discussions/amazon/view/384259-exam-aws-certified-generative-ai-developer-professional-aip-c01-topic-1-question-40-discussion/)

Comments: Chibuzo1 Most Recent 6 months, 1 days ago Selected Answer: D Show more 11:40 PM Answer: D Step Functions + Bedrock Guardrails + Comprehend PII detection + Rekognition image moderation is the correct answer. upvoted 1 time Submit     Cancel ... eesa 8 months, 7 days ago Selected Answer: D ✅ Mínimo overhead de infraestructura: Servicios completamente managed ✅ Bedrock guardrails nativos: Filtrado de contenido inapropiado en inputs/outputs ✅ Amazon Comprehend: Detección y redacción de PII en texto ✅ Amazon Rekognition: Moderación de imágenes (contenido inapropiado) ✅ Step Functions: Orquestación managed del workflow completo ✅ Integración con S3: Se integra naturalmente con el workflow existente ✅ Escalable: Maneja miles de usuarios/hora sin gestión de infraestructura upvoted 2 times Submit     Cancel ... GiorgioGss 8 months, 15 days ago Selected Answer: D D is the only one with guardrails. upvoted 2 times Submit     Cancel ...

----------------------------------------

## Exam AWS Certified Generative AI Developer - Professional AIP-C01 topic 1 question 41 discussion



A company has set up Amazon Q Developer Pro licenses for all developers at the company. The company maintains a list of approved resources that developers must use when developing applications. The approved resources include internal libraries, proprietary algorithmic techniques, and sample code with approved styling.

A new team of developers is using Amazon Q Developer to develop a new Java-based application. The company must ensure that the new developer team uses the company's approved resources. The company does not want to make project-level modifications.

Which solution will meet these requirements?

A. Create a Git repository that contains all of the approved internal libraries, algorithms, and code samples. Include this Git repository in the application project locally as part of the workspace. Ensure that the developers use the @workspace context to retrieve suggestions from the Git repository.

B. In the project root folder, create a folder named .amazonq/rules. Add the approved internal libraries, algorithms, and code samples to the folder.

C. Create a folder in the application project named rules. Store the guidelines and code in the folder for Amazon Q Developer to reference product code suggestions.

D. Create an Amazon Q Developer customization that includes the approved data sources. Ensure that the developers use the customization to develop the application. Forgot my password

**Answer: **

**Timestamp: **

[View on ExamTopics](https://www.examtopics.com/discussions/amazon/view/384292-exam-aws-certified-generative-ai-developer-professional-aip-c01-topic-1-question-41-discussion/)

Comments: Chibuzo1 Most Recent 5 months, 1 days ago Selected Answer: D Amazon Q Developer Pro supports customizations — administrator-configured profiles that connect Q Developer to internal codebases, libraries, and style guides via approved data sources (such as CodeWhisperer customizations backed by S3 or CodeCommit). Once a customization is published, all developers on the team can select it in their IDE, and Q Developer's suggestions will draw from those approved resources automatically. upvoted 2 times Submit     Cancel ... eesa 8 months, 7 days ago Selected Answer: D ✅ Amazon Q Developer Customizations: Característica nativa diseñada específicamente para este caso de uso ✅ Sin modificaciones de proyecto: La customization es a nivel de organización/cuenta, no requiere cambios en cada proyecto ✅ Centralizado: Una sola customization para todos los desarrolladores ✅ Approved data sources: Puede incluir repositorios internos, documentación, código de ejemplo ✅ Consistencia: Todos los desarrolladores obtienen sugerencias basadas en los mismos recursos aprobados ✅ Gestión simplificada: Administradores controlan qué recursos están aprobados ✅ Escalable: Funciona para múltiples equipos y proyectos upvoted 2 times Submit     Cancel ... GiorgioGss 8 months, 15 days ago Selected Answer: D https://aws.amazon.com/blogs/devops/managing-amazon-q-developer-profiles-and-customizations-in-large-organizations/ upvoted 1 time Submit     Cancel ...

----------------------------------------

## Exam AWS Certified Generative AI Developer - Professional AIP-C01 topic 1 question 42 discussion



An ecommerce company is using Amazon Bedrock to build a customer service AI assistant. The AI assistant needs to process over 50,000 customer inquiries every day. The AI assistant occasionally experiences traffic spikes of up to 150,000 inquiries every day during promotional events. Analysis shows that 40% of inquiries follow similar patterns that share the same context.

A GenAI developer must design a solution that will ensure low latency and consistent performance for the AI assistant during traffic spikes.

Which solution will meet these requirements MOST cost-effectively?

A. Configure latency-optimized inference by setting the latency parameter to optimized in the performance configuration of the request to Amazon Bedrock. Use prompt caching to handle the repetitive inquiries.

B. Purchase provisioned throughput and model units (MUs) that are sized to handle peak traffic loads. Use Amazon ElastiCache (Redis OSS) to cache repetitive inquiries.

C. Use Amazon Bedrock Agents and custom knowledge bases to pre-process customer inquiries. Configure cross-Region inference to distribute traffic.

D. Use AWS Lambda functions to pre-process requests by using a custom prompt routing mechanism. Use Amazon DynamoDB as a caching layer to handle frequently asked questions. Forgot my password

**Answer: **

**Timestamp: **

[View on ExamTopics](https://www.examtopics.com/discussions/amazon/view/384249-exam-aws-certified-generative-ai-developer-professional-aip-c01-topic-1-question-42-discussion/)

Comments: Chibuzo1 Most Recent 5 months, 1 days ago Selected Answer: A Latency-optimized inference :A built-in Bedrock performance configuration that routes requests to optimized infrastructure for faster response times — no extra architecture needed. upvoted 1 time Submit     Cancel ... de1612d 7 months, 10 days ago Selected Answer: A Answer is A upvoted 1 time Submit     Cancel ... eesa 8 months, 7 days ago Selected Answer: A ✅ Prompt caching: Reduce costos hasta 90% para el 40% de consultas repetitivas ✅ Latency-optimized inference: Mejora rendimiento sin provisionar capacidad ✅ Pay-per-use: Solo pagas por lo que usas, no por capacidad ociosa ✅ Maneja spikes: Escala automáticamente sin sobre-provisionar ✅ Bajo overhead: Configuración simple sin infraestructura adicional upvoted 2 times Submit     Cancel ... GiorgioGss 8 months, 15 days ago Selected Answer: A cost-effective = cache upvoted 2 times Submit     Cancel ... 67bdb19 8 months, 22 days ago Selected Answer: B I'm voting for B. upvoted 1 time Submit     Cancel ...

----------------------------------------

## Exam AWS Certified Generative AI Developer - Professional AIP-C01 topic 1 question 43 discussion



A legal research company has a Retrieval Augmented Generation (RAG) application that uses Amazon Bedrock and Amazon OpenSearch Service. The application stores 768-dimensional vector embeddings for 15 million legal documents, including statutes, court rulings, and case summaries.

The company's current chunking strategy segments text into fixed-length blocks of 500 tokens. The current chunking strategy often splits contextually linked information such as legal arguments, court opinions, or statute references across separate chunks. Researchers report that generated outputs frequently omit key context or cite outdated legal information.

Recent application logs show a 40% increase in response times. The p95 latency metric exceeds 2 seconds. The company expects storage needs for the application to grow from 90 GB to 360 GB within a year.

The company needs a solution to improve retrieval relevance and system performance at scale.

Which solution will meet these requirements?

A. Increase the embedding vector dimensionality from 768 to 4,096 without changing the existing chunking or pre-processing strategy.

B. Replace dynamic retrieval with static, pre-written summaries that are stored in Amazon S3. Use Amazon CloudFront to serve the summaries to reduce compute demand and improve predictability.

C. Update the chunking strategy to use semantic boundaries such as complete legal arguments, clauses, or sections rather than fixed token limits. Regenerate vector embeddings to align with the new chunk structure.

D. Migrate from OpenSearch Service to Amazon DynamoDB. Implement keyword-based indexes to enable faster lookups for legal concepts. Forgot my password

**Answer: **

**Timestamp: **

[View on ExamTopics](https://www.examtopics.com/discussions/amazon/view/384269-exam-aws-certified-generative-ai-developer-professional-aip-c01-topic-1-question-43-discussion/)

Comments: 7554604 Most Recent 5 months, 19 days ago Selected Answer: C Is C because the fixed-length chunking is the root cause of every problem. Why the others fail: A — Increasing dimensionality from 768 to 4,096 does not fix split context. It also multiplies storage and computation costs (4,096/768 ≈ 5.3× larger vectors), worsening latency and the storage growth problem simultaneously. B — Static pre-written summaries in S3/CloudFront eliminate dynamic retrieval entirely — directly contradicting the requirement for up-to-date legal information and undermining the entire RAG architecture. D — DynamoDB is a key-value/document store with no native vector similarity capability. Keyword indexes find exact matches, not semantic relevance. Migrating to keyword search would regress retrieval quality, not improve it. upvoted 1 time Submit     Cancel ... GiorgioGss 8 months, 15 days ago Selected Answer: C A - Higher dimensionality (4,096) increases compute/storage costs 5x without fixing poor chunking; latency worsens due to larger vectors. B - Static S3 summaries eliminate RAG capabilities entirely D - DynamoDB lacks native vector search upvoted 2 times Submit     Cancel ...

----------------------------------------

## Exam AWS Certified Generative AI Developer - Professional AIP-C01 topic 1 question 44 discussion



A company is developing a generative AI (GenAI)-powered customer support application that uses Amazon Bedrock foundation models (FMs). The application must maintain conversational context across multiple interactions with the same user. The application must run clarification workflows to handle ambiguous user queries. The company must store encrypted records of each user conversation to use for personalization. The application must be able to handle thousands of concurrent users while responding to each user quickly.

Which solution will meet these requirements?

A. Use an AWS Step Functions Express workflow to orchestrate conversation flow. Invoke AWS Lambda functions to run clarification logic. Store conversation history in Amazon RDS and use session IDs as the primary key.

B. Use an AWS Step Functions Standard workflow to orchestrate clarification workflows. Include Wait for a Callback patterns to manage the workflows. Store conversation history in Amazon DynamoDPurchase on-demand capacity and configure server-side encryption.

C. Deploy the application by using an Amazon API Gateway REST API to route user requests to an AWS Lambda function to update and retrieve conversation context. Store conversation history in Amazon S3 and configure server-side encryption. Save each interaction as a separate JSON file.

D. Use AWS Lambda functions to call Amazon Bedrock inference APIs. Use Amazon SQS queues to orchestrate clarification steps. Store conversation history in an Amazon ElastiCache (Redis OSS) cluster. Configure encryption at rest. Forgot my password

**Answer: **

**Timestamp: **

[View on ExamTopics](https://www.examtopics.com/discussions/amazon/view/384248-exam-aws-certified-generative-ai-developer-professional-aip-c01-topic-1-question-44-discussion/)

Comments: QuinnGT Most Recent 3 months, 7 days ago Selected Answer: B B: Step Functions Standard workflows support durable callback patterns for clarification that can wait for a user's next action. DynamoDB on-demand capacity scales with variable concurrent traffic, and server-side encryption protects stored conversation records. Express workflows do not support &quot;.waitForTaskToken&quot; callback integrations, so A cannot implement the described asynchronous clarification pattern in the same way. upvoted 1 time Submit     Cancel ... nebulane 6 months, 1 days ago Selected Answer: A B isn't correct since Higher latency Not suited for real-time chat upvoted 1 time Submit     Cancel ... nebulane 5 months, 17 days ago actual answer is B since step function express can't wait for callbacks upvoted 2 times Submit     Cancel ... de1612d 7 months, 6 days ago Selected Answer: B Gemini answer is B upvoted 1 time Submit     Cancel ... Kraftzman 7 months, 23 days ago Selected Answer: A . Express vs. Standard Workflows The requirement to handle thousands of concurrent users and respond quickly is the deciding factor between Step Functions types. Express Workflows: Designed for high-volume, short-duration (up to 5 minutes) events. They can handle over 100,000 events per second, making them ideal for a busy customer support API. Standard Workflows (Option B): These are intended for long-running, auditable processes (up to a year). They have much lower throughput limits and higher costs per execution, which would struggle with the &quot;thousands of concurrent users&quot; and &quot;responding quickly&quot; requirements. upvoted 2 times Submit     Cancel ... GiorgioGss 8 months, 15 days ago Selected Answer: B standard workflow fits the purpose upvoted 4 times Submit     Cancel ... 67bdb19 8 months, 22 days ago Selected Answer: D Well, [Option A] and [Option C] are definitely wrong. Between the other two, D is the better fit. upvoted 1 time Submit     Cancel ...

----------------------------------------

## Exam AWS Certified Generative AI Developer - Professional AIP-C01 topic 1 question 45 discussion



A financial services company needs to pre-process unstructured data such as customer transcripts, financial reports, and documentation. The company stores the unstructured data in Amazon S3 to support an Amazon Bedrock application.

The company must validate data quality, create auditable metadata, monitor data metrics, and customize text chunking to optimize foundation model (FM) performance.

Which solution will meet these requirements with the LEAST development effort?

A. Use Amazon SageMaker Data Wrangler to create a data flow. Configure Amazon CloudWatch metrics and alarms to monitor data quality. Use a custom AWS Lambda function to pre-process the data. Load processed data into Amazon Bedrock.

B. Set up an AWS Glue crawler to catalog data sources. Create AWS Glue ETL jobs to run custom transformation scripts. Use AWS Glue Data Quality to validate and monitor data quality. Load processed data into Amazon Bedrock.

C. Use Amazon Comprehend to extract entities. Create an AWS Lambda function to chunk text. Run Amazon Athena to query and validate data quality. Load processed data into Amazon Bedrock.

D. Create an AWS Step Functions workflow to orchestrate data pre-processing tasks. Run custom code on Amazon EC2 instances to process the data. Use Amazon SageMaker Model Monitor to monitor data quality. Load processed data into Amazon Bedrock. Forgot my password

**Answer: **

**Timestamp: **

[View on ExamTopics](https://www.examtopics.com/discussions/amazon/view/384278-exam-aws-certified-generative-ai-developer-professional-aip-c01-topic-1-question-45-discussion/)

Comments: de1612d Most Recent 7 months, 10 days ago Selected Answer: B Answer is B upvoted 1 time Submit     Cancel ... GiorgioGss 8 months, 15 days ago Selected Answer: B The only valid option - &quot;AWS Glue Data Quality&quot; upvoted 2 times Submit     Cancel ...

----------------------------------------

## Exam AWS Certified Generative AI Developer - Professional AIP-C01 topic 1 question 46 discussion



A company uses Amazon Bedrock to build a Retrieval Augmented Generation (RAG) system. The RAG system uses an Amazon Bedrock knowledge base that is based on an Amazon S3 bucket as the data source for emergency news video content. The system retrieves transcripts, archived reports, and related documents from the S3 bucket.

The RAG system uses state-of-the-art embedding models and a high-performing retrieval setup. However, users report slow responses and irrelevant results, which cause decreased user satisfaction. The company notices that vector searches are evaluating too many documents across too many content types and over long periods of time.

The company determines that the underlying models will not benefit from additional fine tuning. The company must improve retrieval accuracy by applying smarter constraints. The company wants a solution that requires minimal changes to the existing architecture.

Which solution will meet these requirements?

A. Enhance embeddings by using a domain-adapted model that is specifically trained on emergency news content for improved vector similarity.

B. Migrate to Amazon OpenSearch Service. Use vector fields and metadata filters to define the scope of results retrieval.

C. Enable metadata-aware filtering within the Amazon Bedrock knowledge base by indexing S3 object metadata.

D. Migrate to an Amazon Q Business index to perform structured metadata filtering and document categorization during retrieval. Forgot my password

**Answer: **

**Timestamp: **

[View on ExamTopics](https://www.examtopics.com/discussions/amazon/view/384252-exam-aws-certified-generative-ai-developer-professional-aip-c01-topic-1-question-46-discussion/)

Comments: Chibuzo1 Most Recent 5 months, 0 days ago Selected Answer: C The problem is explicitly stated: vector searches are evaluating too many documents, across too many content types, over long periods of time. The company already has a well-performing embedding model and retrieval setup — the issue is lack of constraints, not model quality. The company also wants minimal architectural change upvoted 3 times Submit     Cancel ... Naaser 5 months, 29 days ago Selected Answer: C &quot;minimal changes&quot; upvoted 2 times Submit     Cancel ... de1612d 7 months, 6 days ago Selected Answer: C Answer is C upvoted 1 time Submit     Cancel ... GiorgioGss 8 months, 15 days ago Selected Answer: C &quot;minimal changes&quot; upvoted 3 times Submit     Cancel ... 67bdb19 8 months, 22 days ago Selected Answer: B I’m going with B. The other options seem overly complicated or don't fit the requirements. upvoted 1 time Submit     Cancel ... a9fb7b2 7 months, 21 days ago Do a little bit of research before answering. It will make others confused. upvoted 3 times Submit     Cancel ...

----------------------------------------

## Exam AWS Certified Generative AI Developer - Professional AIP-C01 topic 1 question 47 discussion



A financial services company is creating a Retrieval Augmented Generation (RAG) application that uses Amazon Bedrock to generate summaries of market activities. The application relies on a vector database that stores a small proprietary dataset that has a low index count. The application must perform similarity searches. The Amazon Bedrock model's responses must maximize accuracy and maintain high performance.

The company needs to configure the vector database and integrate it with the application.

Which solution will meet these requirements?

A. Launch an Amazon MemoryDB cluster and configure the index by using the Flat algorithm. Configure a horizontal scaling policy based on performance metrics.

B. Launch an Amazon MemoryDB cluster and configure the index by using the Hierarchical Navigable Small World (HNSW) algorithm. Configure a vertical policy based on performance metrics.

C. Launch an Amazon Aurora PostgresSQL cluster and configure the index by using the Inverted File with Flat Compression (IVFFlat) algorithm. Configure the instance class to scale to a larger size when the load increases.

D. Launch an Amazon DocumentDB cluster that has an Inverted File with Flat Compression (IVFFlat) index and a high probe value. Configure connections to the cluster as a replica set Distribute reads to replica instances. Forgot my password

**Answer: **

**Timestamp: **

[View on ExamTopics](https://www.examtopics.com/discussions/amazon/view/384281-exam-aws-certified-generative-ai-developer-professional-aip-c01-topic-1-question-47-discussion/)

Comments: Auaii Most Recent 4 months, 29 days ago Selected Answer: A first time i select B but I rethink it A because question have small propriestary dataset keyword that match keyword of flat algrotihm than HNSW - flat algorithm -&gt; small dataset + acc - HNSW -&gt; large dataset + speed + scale upvoted 2 times Submit     Cancel ... arushown 4 months, 30 days ago Selected Answer: B Vector search for MemoryDB is currently limited to a single shard and horizontal scaling is not supported. Vector search supports vertical and replica scaling. upvoted 2 times Submit     Cancel ... Naaser 5 months, 29 days ago Selected Answer: A Flat Algorithm for Small Datasets: For a small proprietary dataset and a low index count, using the Flat (brute-force) algorithm is highly effective. Because the dataset is small, the performance penalty is negligible, and the Flat algorithm guarantees 100% recall accuracy for exact nearest-neighbor searches. High Performance: Amazon MemoryDB operates entirely in-memory. This provides incredibly fast read and write operations, minimizing latency and ensuring high performance and accuracy for RAG applications. Horizontal Scaling: MemoryDB allows you to scale horizontally by adding or removing shards based on performance and traffic metrics. upvoted 2 times Submit     Cancel ... de1612d 7 months, 6 days ago Selected Answer: A Answer the A upvoted 1 time Submit     Cancel ... eCosinus 7 months, 20 days ago Selected Answer: B HNSW = best accuracy + latency tradeoff upvoted 2 times Submit     Cancel ... GiorgioGss 8 months, 15 days ago Selected Answer: A Flat algorithm performs exact similarity search — 100% recall, no approximation upvoted 3 times Submit     Cancel ...

----------------------------------------

## Exam AWS Certified Generative AI Developer - Professional AIP-C01 topic 1 question 48 discussion



A GenAI developer is building a Retrieval Augmented Generation (RAG)-based customer support application that uses Amazon Bedrock foundation models (FMs). The application needs to process 50 GB of historical customer conversations that are stored in an Amazon S3 bucket as JSON files. The application must use the processed data as its retrieval corpus. The application's data processing workflow must extract relevant data from customer support documents, remove customer personally identifiable information (PII), and generate embeddings for vector storage. The processing workflow must be cost-effective and must finish within 4 hours.

Which solution will meet these requirements with the LEAST operational overhead?

A. Use AWS Lambda and Amazon Comprehend to process files in parallel, remove PII, and call Amazon Bedrock APIs to generate vectors. Configure Lambda concurrency limits and memory settings to optimize throughput.

B. Create an AWS Glue ETL job to run PII detection scripts on the data. Use Amazon SageMaker Processing to run the HuggingFaceProcessor to generate embeddings by using a pre-trained model. Store the embeddings in Amazon OpenSearch Service.

C. Deploy an Amazon EMR cluster that runs Apache Spark with user-defined functions (UDFs) that call Amazon Comprehend to detect PII. Use Amazon Bedrock APIs to generate vectors. Store outputs in Amazon Aurora PostgreSQL with the pgvector extension.

D. Implement a data processing pipeline that uses AWS Step Functions to orchestrate a workload that uses Amazon Comprehend to detect PII and Amazon Bedrock to generate embeddings. Directly integrate the workflow with Amazon OpenSearch Serverless to store vectors and provide similarity search capabilities. Forgot my password

**Answer: **

**Timestamp: **

[View on ExamTopics](https://www.examtopics.com/discussions/amazon/view/384290-exam-aws-certified-generative-ai-developer-professional-aip-c01-topic-1-question-48-discussion/)

Comments: de1612d Most Recent 7 months, 6 days ago Selected Answer: D Answer is D upvoted 1 time Submit     Cancel ... eCosinus 7 months, 20 days ago Selected Answer: B ChatGTP goes for B but I like D I do not know what is the good answer upvoted 2 times Submit     Cancel ... AM_aws 8 months, 1 days ago Selected Answer: D A has much more overhead upvoted 3 times Submit     Cancel ... taka5094 8 months, 6 days ago Selected Answer: D Step Functions' Distributed Map state allows to automatically scan millions of objects in an S3 bucket and run up to 10,000 parallel workflows. This makes it easy to process 50 GB of data within a 4-hour time limit. ## Why Other Options Are Inappropriate A (Lambda Only): Managing 50 GB of data with a single or simple parallel Lambda execution would require you to code all the timeout (15 minutes) handling and API rate limiting yourself, resulting in significant operational overhead. upvoted 3 times Submit     Cancel ... xyztest 8 months, 11 days ago Selected Answer: A Correct Answer upvoted 1 time Submit     Cancel ... GiorgioGss 8 months, 15 days ago Selected Answer: D least effort and within 4 hours = D upvoted 4 times Submit     Cancel ...

----------------------------------------

## Exam AWS Certified Generative AI Developer - Professional AIP-C01 topic 1 question 49 discussion



A financial services company is developing a generative AI (GenAI) application that serves both premium customers and standard customers. The application uses AWS Lambda functions behind an Amazon API Gateway REST API to process requests. The company needs to dynamically switch between AI models based on which customer tier each user belongs to. The company also wants to perform A/B testing for new features without redeploying code. The company needs to validate model parameters like temperature and maximum token limits before applying changes.

Which solution will meet these requirements with the LEAST operational overhead?

A. Create an AWS Systems Manager Parameter Store parameters for each configuration. Use Lambda functions to poll for parameter updates. Use Amazon EventBridge events to trigger redeployments when configurations change.

B. Store model configurations in Amazon DynamoDB tables. Optimize access patterns to retrieve configurations according to customer tier. Configure Lambda functions to query DynamoDB at the beginning of each request to determine which model to use.

C. Use AWS AppConfig to manage model configurations. Use feature flags to perform A/B testing. Define JSON schema validation rules for model parameters. Configure Lambda functions to retrieve configurations by using the AWS AppConfig Agent.

D. Create an Amazon ElastiCache (Redis OSS) cluster to store model configurations. Set short TTL values. Run custom validation logic in Lambda functions. Use Amazon CloudWatch metrics to monitor configuration usage. Forgot my password

**Answer: **

**Timestamp: **

[View on ExamTopics](https://www.examtopics.com/discussions/amazon/view/384273-exam-aws-certified-generative-ai-developer-professional-aip-c01-topic-1-question-49-discussion/)

Comments: de1612d Most Recent 7 months, 6 days ago Selected Answer: C Answer is C upvoted 1 time Submit     Cancel ... GiorgioGss 8 months, 15 days ago Selected Answer: C &quot;without redeploying code&quot; = appconfig upvoted 2 times Submit     Cancel ...

----------------------------------------

## Exam AWS Certified Generative AI Developer - Professional AIP-C01 topic 1 question 50 discussion



A company is using Amazon Bedrock and Anthropic Claude 3 Haiku to develop an AI assistant. The AI assistant normally processes 10,000 requests each hour but experiences surges of up 30,000 requests each hour during peak usage periods. The AI assistant must respond within 2 seconds while operating across multiple AWS Regions.

The company observes that during peak usage periods, the AI assistant experiences throughput bottlenecks that cause increased latency and occasional request timeouts. The company must resolve the performance issues.

Which solution will meet this requirement?

A. Purchase provisioned throughput and sufficient model units (MUs) in a single Region. Configure the application to retry failed requests with exponential backoff.

B. Implement token batching to reduce API overhead. Use cross-Region inference profiles to automatically distribute traffic across available Regions.

C. Set up auto scaling AWS Lambda functions in each Region. Implement client-side round-robin request distribution. Purchase one model unit (MU) of provisioned throughput as a backup.

D. Implement batch inference for all requests by using Amazon S3 buckets across multiple Regions. Use Amazon SQS to set up an asynchronous retrieval process. Forgot my password

**Answer: **

**Timestamp: **

[View on ExamTopics](https://www.examtopics.com/discussions/amazon/view/384250-exam-aws-certified-generative-ai-developer-professional-aip-c01-topic-1-question-50-discussion/)

Comments: de1612d Most Recent 7 months, 6 days ago Selected Answer: B Answer is B upvoted 1 time Submit     Cancel ... GiorgioGss 8 months, 15 days ago Selected Answer: B Cross-Region Inference (CRI) is specifically designed to handle traffic spikes and high-throughput requirements by intelligently routing requests across multiple AWS Regions. upvoted 1 time Submit     Cancel ... 67bdb19 8 months, 22 days ago Selected Answer: B My answer: B. upvoted 1 time Submit     Cancel ...

----------------------------------------

## Exam AWS Certified Generative AI Developer - Professional AIP-C01 topic 1 question 51 discussion



A company uses Amazon Bedrock to develop an AI assistant to provide customer support. Analysis shows that 40% of customer queries use varied phrasing or wording to ask the same questions.

The company wants a solution to reduce redundant model calls. The solution must ensure that semantically equivalent questions receive consistent answers. The solution must ensure low latency.

Which solution will meet these requirements?

A. Deploy an Amazon DynamoDB Accelerator (DAX) cluster as an in-memory cache. Specify the query text as the partition key and the model response text as the sort key. Query the cache by using a filter expression with the LIKE operator.

B. Use Amazon Bedrock to generate embeddings from customer queries. Use Amazon MemoryDB for Valkey to store hash sets of vector embeddings and model responses. Use a RANGE query to find similar queries and their responses.

C. Deploy Amazon OpenSearch Service that has k-nearest neighbor (k-NN) capabilities to store query-response text pairs. Use an approximate k-NN technique to find similar queries and their responses.

D. Create a caching solution by using Amazon DynamoDB to create a global secondary index on the normalized query text. Apply stemming to incoming queries. Query the index of cached customer queries. Forgot my password

**Answer: **

**Timestamp: **

[View on ExamTopics](https://www.examtopics.com/discussions/amazon/view/384263-exam-aws-certified-generative-ai-developer-professional-aip-c01-topic-1-question-51-discussion/)

Comments: Sarvesh911 Most Recent 7 days ago Selected Answer: B Amazon Bedrock generates embeddings that represent the meaning of customer questions. Amazon MemoryDB supports vector indexes over hash data. MemoryDB supports VECTOR_RANGE searches that retrieve vectors within a defined similarity distance. Because MemoryDB is an in-memory database, it offers single-digit millisecond vector-search latency, making it particularly suitable for caching. upvoted 1 time Submit     Cancel ... nicsaravanan 18 days ago Selected Answer: B https://docs.aws.amazon.com/memorydb/latest/devguide/vector-search-overview.html upvoted 1 time Submit     Cancel ... NelsonRojasDiaz 19 days ago Selected Answer: B Clear mention of &quot;generate embeddings&quot; + RANGE query (similarity threshold) + in-memory low latency → semantic cache. upvoted 1 time Submit     Cancel ... de1612d 7 months, 6 days ago Selected Answer: C Answer is C upvoted 1 time Submit     Cancel ... Aninina 7 months, 10 days ago Selected Answer: C The problem is about semantically equivalent questions with different wording. Vector similarity search is built for that. You can generate embeddings for incoming queries and retrieve the most similar cached past query/response, which helps return consistent answers for equivalent questions. Approximate k-NN is designed for low-latency nearest-neighbor retrieval at scale upvoted 1 time Submit     Cancel ...

----------------------------------------

## Exam AWS Certified Generative AI Developer - Professional AIP-C01 topic 1 question 52 discussion



A company uses AWS Lambda functions to build an AI agent solution. A GenAI developer must set up a Model Context Protocol (MCP) server that accesses user information. The GenAI developer must also configure the AI agent to use the new MCP server. The GenAI developer must ensure that only authorized users can access the MCP server.

Which solution will meet these requirements?

A. Use a Lambda function to host the MCP server. Grant the AI agent Lambda functions permission to invoke the Lambda function that hosts the MCP server. Configure the AI agent's MCP client to invoke the MCP server asynchronously.

B. Use a Lambda function to host the MCP server. Grant the AI agent Lambda functions permission to invoke the Lambda function that hosts the MCP server. Configure the AI agent to use the STDIO transport with the MCP server.

C. Use a Lambda function to host the MCP server. Create an Amazon API Gateway HTTP API that proxies requests to the Lambda function. Configure the AI agent solution to use the Streamable HTTP transport to make requests through the HTTP API. Use Amazon Cognito to enforce OAuth 2.1.

D. Use a Lambda layer to host the MCP server. Add the Lambda layer to the AI agent Lambda functions. Configure the agentic AI solution to use the STDIO transport to send requests to the MCP server. In the AI agent's MCP configuration, specify the Lambda layer ARN as the command. Specify the user credentials as environment variables. Forgot my password

**Answer: **

**Timestamp: **

[View on ExamTopics](https://www.examtopics.com/discussions/amazon/view/384285-exam-aws-certified-generative-ai-developer-professional-aip-c01-topic-1-question-52-discussion/)

Comments: Aninina Most Recent 7 months, 10 days ago Selected Answer: C Amazon API Gateway HTTP API can be invoked over Streamable HTTP, which is the right transport for a remote MCP server. Putting API Gateway in front of Lambda also gives you a clean place to enforce authentication and authorization. Amazon Cognito can provide the OAuth-based access control so only authorized users can access the MCP server. upvoted 1 time Submit     Cancel ... awsguruji 7 months, 24 days ago Selected Answer: C Question is about grant access to authorized users only &quot;only authorized users can access the MCP server&quot; Cogneto is the best solution. (C) D will not work -- do not want to save creds. upvoted 2 times Submit     Cancel ...

----------------------------------------

## Exam AWS Certified Generative AI Developer - Professional AIP-C01 topic 1 question 53 discussion



A company wants to create an annual rewards program for its customers. The rewards that customers earn vary based on different parameters such as the categories of the items ordered and the customers' purchase history.

The company needs a generative AI (GenAI) solution that uses three Amazon Bedrock agents to help customers during online catalog browsing. The agents must use knowledge bases and action groups to handle the search, recommendation, and order modules. The modules must operate sequentially. An AWS Lambda function must calculate estimated rewards for each recommended item. The solution must provide graceful degradation during service disruptions.

Which solution will meet these requirements with the MOST operational efficiency?

A. Define an Amazon API Gateway REST API behind each agent. Create a second Lambda function to orchestrate the calls to the agents and the rewards Lambda function. Configure the second Lambda function with a retry/fallback mechanism.

B. Create an AWS Step Functions state machine with four tasks that run the agents and the rewards Lambda function. Set up retry and catch branches for each of the task steps.

C. Configure each agent with a separate retry/fallback mechanism. Create a second Lambda function to orchestrate the calls to the agents and the rewards Lambda function. Define an Amazon API Gateway REST API behind the second Lambda function.

D. Create a second Lambda function to orchestrate the calls to the agents and the rewards Lambda function. Create an AWS Step Functions state machine with one task that runs the second Lambda function. Set up retry and catch branches for the task step. Forgot my password

**Answer: **

**Timestamp: **

[View on ExamTopics](https://www.examtopics.com/discussions/amazon/view/384270-exam-aws-certified-generative-ai-developer-professional-aip-c01-topic-1-question-53-discussion/)

Comments: de1612d Most Recent 7 months, 6 days ago Selected Answer: B Answer is B upvoted 1 time Submit     Cancel ... Kraftzman 7 months, 23 days ago Selected Answer: B AWS Step Functions is the native AWS orchestrator designed exactly for this. It allows you to define a declarative workflow (ASL) where the output of one agent (e.g., Search) becomes the input for the next (e.g., Recommendation). Using Step Functions is more operationally efficient than writing a &quot;Manager&quot; Lambda function (Options A, C, and D). In a &quot;Lambda-lith&quot; orchestrator, you have to write custom code for state management, error handling, and parallel waiting, all while paying for the Lambda's idle time while it waits for Bedrock agents to respond. upvoted 3 times Submit     Cancel ... GiorgioGss 8 months, 14 days ago Selected Answer: C &quot;The modules must operate sequentially.&quot; upvoted 1 time Submit     Cancel ...

----------------------------------------

## Exam AWS Certified Generative AI Developer - Professional AIP-C01 topic 1 question 54 discussion



A company is creating a workflow to review customer-facing communications before the company sends the communications. The company uses a pre-defined message template to generate the communications and stores the communications in an Amazon S3 bucket. The workflow needs to capture a specific portion from the template and send it to an Amazon Bedrock model. The workflow must store model responses back to the original S3 bucket.

Which solution will meet these requirements?

A. Create a flow in Amazon Bedrock Flows. Configure S3 action nodes at the beginning and end of the flow to retrieve and store the communications and the model responses. In the middle of the flow, configure an expression to parse each communication. Configure an agent step to send the parsed input to the model for review.

B. Create an AWS Step Functions Express workflow state machine. Use an Amazon S3 integration GetObject step to retrieve the original communications. Use an intrinsic function Pass step to parse the communications and to pass the results to an Amazon Bedrock InvokeModel step. Configure an Amazon S3 integration PutObject step to store the model responses back to the S3 bucket.

C. Create an Amazon Bedrock agent that has an action group. Configure instructions to define how the agent should parse the communications. Configure the action group to retrieve the communications from the S3 bucket, invoke the Amazon Bedrock model, and store the model responses back to the S3 bucket.

D. Create an Amazon Bedrock agent that has a single action group. Configure three AWS Lambda functions in the action group. Configure the functions to retrieve the communications from the S3 bucket, parse the communications and invoke the Amazon Bedrock model, and store the model responses back to the S3 bucket. Forgot my password

**Answer: **

**Timestamp: **

[View on ExamTopics](https://www.examtopics.com/discussions/amazon/view/384282-exam-aws-certified-generative-ai-developer-professional-aip-c01-topic-1-question-54-discussion/)

Comments: dungbk42 Most Recent 19 days ago Selected Answer: A Đây là một workflow có cấu trúc cố định cho tác vụ GenAI: đọc từ S3 → trích một phần cụ thể → gửi vào Bedrock model → ghi response về lại S3. Bedrock Flows được thiết kế đúng cho kiểu orchestration low-code này upvoted 1 time Submit     Cancel ... Naaser 5 months, 29 days ago Selected Answer: B Correct solution is B upvoted 1 time Submit     Cancel ... jakie22332 6 months, 27 days ago Selected Answer: B Amazon Bedrock Flows does not have S3 action nodes for reading/writing objects. Bedrock Flows supports prompt nodes, condition nodes, and other flow-specific nodes, but it's not designed for direct S3 object upvoted 1 time Submit     Cancel ... hustler0395 2 months, 4 days ago You are Wrong , AWS documentation for Bedrock Flows explicitly lists both node types in question. An S3 retrieval node lets you retrieve data from an Amazon S3 location to introduce to the flow. In the configuration, you specify the S3 bucket from which to retrieve data. The input into the node is the object key. The node returns the content in the S3 location as the output . upvoted 1 time Submit     Cancel ... AWS_SkillBuilder 7 months, 5 days ago Selected Answer: A While AWS Step Functions can orchestrate AWS services, &quot;intrinsic functions&quot; in a Pass state are very limited. They are designed for basic JSON manipulation, not for parsing complex message templates. To do this effectively in Step Functions, you would usually need an AWS Lambda function, which increases complexity. upvoted 3 times Submit     Cancel ... de1612d 7 months, 6 days ago Selected Answer: A Gemini answer is A upvoted 1 time Submit     Cancel ... eesa 8 months, 7 days ago Selected Answer: B ✅ Step Functions: Orquestación nativa para workflows secuenciales ✅ 4 tasks separados: Search agent → Recommendation agent → Order agent → Rewards Lambda ✅ Retry/catch por task: Graceful degradation granular en cada paso ✅ Visual workflow: Fácil de monitorear y debuggear ✅ Managed service: Sin código de orquestación custom ✅ Error handling nativo: Retry, catch, fallback integrados ✅ Máxima eficiencia operacional: Configuración declarativa vs. código custom upvoted 3 times Submit     Cancel ... xyztest 8 months, 13 days ago Selected Answer: A correct answer upvoted 3 times Submit     Cancel ... GiorgioGss 8 months, 14 days ago Selected Answer: B Fully meets requirements with minimal components. upvoted 2 times Submit     Cancel ...

----------------------------------------

## Exam AWS Certified Generative AI Developer - Professional AIP-C01 topic 1 question 55 discussion



A financial technology company is using Amazon Bedrock to build an assessment system for the company's customer service AI assistant. The AI assistant must provide financial recommendations that are factually accurate, compliant with financial regulations, and conversationally appropriate. The company needs to combine automated quality evaluations at scale with targeted human reviews of critical interactions.

What solution will meet these requirements?

A. Configure a pipeline in which financial experts manually score all responses for accuracy, compliance, and conversational quality. Use Amazon SageMaker notebooks to analyze results to identify improvement areas.

B. Configure Amazon Bedrock evaluations that use Anthropic Claude Sonnet as a judge model to assess response accuracy and appropriateness. Configure custom Amazon Bedrock guardrails to check responses for compliance with financial policies. Add Amazon Augmented AI (Amazon A2I) human reviews for flagged critical interactions.

C. Create an Amazon Lex bot to manage the customer service interactions. Configure AWS Lambda functions to check responses against a static compliance database. Configure intents in the bot that call the Lambda functions to check the responses. Add an additional intent to collect end-user reviews.

D. Configure Amazon CloudWatch to monitor response patterns from the AI assistant. Configure CloudWatch alerts for potential compliance violations. Establish a team of human evaluators to review flagged interactions. Forgot my password

**Answer: **

**Timestamp: **

[View on ExamTopics](https://www.examtopics.com/discussions/amazon/view/384267-exam-aws-certified-generative-ai-developer-professional-aip-c01-topic-1-question-55-discussion/)

Comments: awsguruji Most Recent 7 months, 23 days ago Selected Answer: B &quot;D&quot; has Human in loop but Bedrock is not used. Hence, B is right choice upvoted 1 time Submit     Cancel ... eesa 8 months, 7 days ago Selected Answer: B ✅ Bedrock evaluations con judge model: Evaluación automatizada a escala de accuracy y appropriateness ✅ Claude Sonnet como judge: Modelo avanzado para evaluar calidad de respuestas ✅ Bedrock guardrails custom: Compliance con políticas financieras (automático) ✅ Amazon A2I: Human-in-the-loop para interacciones críticas flagged ✅ Escalable: Automatización + revisión humana targeted ✅ Compliance integrado: Guardrails validan regulaciones financieras ✅ Combinación óptima: Automated at scale + human reviews críticos upvoted 3 times Submit     Cancel ...

----------------------------------------

## Exam AWS Certified Generative AI Developer - Professional AIP-C01 topic 1 question 56 discussion



A healthcare company is using Amazon Bedrock to develop a real-time patient care AI assistant to respond to queries for separate departments that handle clinical inquiries, insurance verification, appointment scheduling, and insurance claims. The company wants to use a multi-agent architecture.

The company must ensure that the AI assistant is scalable and can onboard new features for patients. The AI assistant must be able to handle thousands of parallel patient interactions. The company must ensure that patients receive appropriate domain-specific responses to queries.

Which solution will meet these requirements?

A. Isolate data for each agent by using separate knowledge bases. Use IAM filtering to control access to each knowledge base. Deploy a supervisor agent to perform natural language intent classification on patient inquiries. Configure the supervisor agent to route queries to specialized collaborator agents to respond to department-specific queries. Configure each specialized collaborator agent to use Retrieval Augmented Generation (RAG) with the agent's department-specific knowledge base.

B. Create a separate supervisor agent for each department. Configure individual collaborator agents to perform natural language intent classification for each specialty domain within each department. Integrate each collaborator agent with department-specific knowledge bases only. Implement manual handoff processes between the supervisor agents.

C. Isolate data for each department in separate knowledge bases. Use IAM filtering to control access to each knowledge base. Deploy a single general-purpose agent. Configure multiple action groups within the general-purpose agent to perform specific department functions. Implement rule-based routing logic within the general-purpose agent instructions.

D. Implement multiple independent supervisor agents that run in parallel to respond to patient inquiries for each department. Configure multiple collaborator agents for each supervisor agent. Integrate all agents with the same knowledge base. Use external routing logic to merge responses from multiple supervisor agents. Forgot my password

**Answer: **

**Timestamp: **

[View on ExamTopics](https://www.examtopics.com/discussions/amazon/view/384286-exam-aws-certified-generative-ai-developer-professional-aip-c01-topic-1-question-56-discussion/)

Comments: awsguruji Most Recent 7 months, 23 days ago Selected Answer: A RAG is the main dominance here. upvoted 1 time Submit     Cancel ... eesa 8 months, 7 days ago Selected Answer: A ✅ Multi-agent architecture: Supervisor + specialized collaborators ✅ Separate knowledge bases: Aislamiento de datos por departamento ✅ IAM filtering: Control de acceso seguro ✅ NL intent classification: Supervisor enruta inteligentemente ✅ Domain-specific responses: Cada collaborator especializado en su dominio ✅ RAG por agent: Respuestas basadas en knowledge base específico ✅ Escalable: Fácil agregar nuevos departamentos/features ✅ Parallel interactions: Bedrock agents escalan automáticamente upvoted 2 times Submit     Cancel ...

----------------------------------------

## Exam AWS Certified Generative AI Developer - Professional AIP-C01 topic 1 question 57 discussion



A company uses an AI assistant application to summarize the company's website content and provide information to customers. The company plans to use Amazon Bedrock to give the application access to a foundation model (FM).

The company needs to deploy the AI assistant application to a development environment and a production environment. The solution must integrate the environments with the FM. The company wants to test the effectiveness of various FMs in each environment. The solution must provide product owners with the ability to easily switch between FMs for testing purposes in each environment.

Which solution will meet these requirements?

A. Create one AWS CDK application. Create multiple pipelines in AWS CodePipeline. Configure each pipeline to have its own settings for each FM. Configure the application to invoke the Amazon Bedrock FMs by using the aws_bedrock.ProvisionedModel.fromProvisionedModelArn() method.

B. Create a separate AWS CDK application for each environment. Configure the applications to invoke the Amazon Bedrock FMs by using the aws_bedrock.FoundationModel.fromFoundationModelId() method. Create a separate pipeline in AWS CodePipeline for each environment.

C. Create one AWS CDK application. Configure the application to invoke the Amazon Bedrock FMs by using the aws_bedrock.FoundationModel.fromFoundationModelId() method. Create a pipeline in AWS CodePipeline pipeline that has a deployment stage for each environment that uses AWS CodeBuild deploy actions.

D. Create one AWS CDK application for the production environment. Configure the application to invoke the Amazon Bedrock FMs by using the aws_bedrock.ProvisionedModel.fromProvisionedModelArn() method. Create a pipeline in AWS CodePipeline. Configure the pipeline to deploy to the production environment by using an AWS CodeBuild deploy action. For the development environment, manually recreate the resources by referring to the production application code. Forgot my password

**Answer: **

**Timestamp: **

[View on ExamTopics](https://www.examtopics.com/discussions/amazon/view/384291-exam-aws-certified-generative-ai-developer-professional-aip-c01-topic-1-question-57-discussion/)

Comments: Naaser Most Recent 5 months, 29 days ago Selected Answer: C Correct answer is C upvoted 1 time Submit     Cancel ... eesa 8 months, 7 days ago Selected Answer: C ✅ Un CDK application: DRY principle, código reutilizable ✅ fromFoundationModelId(): Permite cambiar FMs fácilmente por ID ✅ Un pipeline con múltiples stages: Dev y Prod en mismo pipeline ✅ CodeBuild deploy actions: Flexibilidad para configurar FMs por environment ✅ Fácil switching: Cambiar model ID en configuración por environment ✅ No provisioned models: Usa on-demand FMs (más flexible para testing) ✅ Product owners: Pueden cambiar FMs sin modificar código upvoted 2 times Submit     Cancel ...

----------------------------------------

## Exam AWS Certified Generative AI Developer - Professional AIP-C01 topic 1 question 58 discussion



A hotel company wants to enhance a legacy Java-based property management system (PMS) by adding AI capabilities. The company wants to use Amazon Bedrock Knowledge Bases to provide staff with room availability information and hotel-specific details. The solution must maintain separate access controls for each hotel that the company manages. The solution must provide room availability information in near real time and must maintain consistent performance during peak usage periods.

Which solution will meet these requirements?

A. Deploy a single Amazon Bedrock knowledge base that contains combined data for all hotels. Configure AWS Lambda functions to synchronize data from each hotel's PMS database through direct API connections. Implement AWS CloudTrail logging with hotel-specific filters to audit access logs for each hotel's data.

B. Create an Amazon EventBridge rule for each hotel that is invoked by changes to the PMS database for each hotel. Configure the rule to send updates to a centralized Amazon Bedrock knowledge base in a management AWS account. Configure resource-based policies to enforce hotel-specific access controls for hotel staff.

C. Implement one Amazon Bedrock knowledge base for each hotel in a multi-account structure. Use direct data ingestion to provide real-time room availability information. Schedule regular synchronization for less critical information.

D. Build a centralized Amazon Bedrock agent that uses multiple knowledge bases. Implement AWS IAM Identity Center with hotel-specific permission sets to control hotel staff data access. Forgot my password

**Answer: **

**Timestamp: **

[View on ExamTopics](https://www.examtopics.com/discussions/amazon/view/384277-exam-aws-certified-generative-ai-developer-professional-aip-c01-topic-1-question-58-discussion/)

Comments: de1612d Most Recent 7 months, 6 days ago Selected Answer: C Answer is C upvoted 1 time Submit     Cancel ... Kraftzman 7 months, 23 days ago Selected Answer: C When designing for multi-tenancy in Amazon Bedrock, remember the &quot;100 KB per account&quot; quota. If the company manages more than 100 hotels, a multi-account strategy isn't just a security choice—it's an architectural necessity to stay within service limits upvoted 2 times Submit     Cancel ...

----------------------------------------

## Exam AWS Certified Generative AI Developer - Professional AIP-C01 topic 1 question 59 discussion



A company is implementing a serverless inference API by using AWS Lambda. The API will dynamically invoke multiple AI models hosted on Amazon Bedrock. The company needs to design a solution that can switch between model providers without modifying or redeploying Lambda code in real time. The design must include safe rollout of configuration changes and validation and rollback capabilities.

Which solution will meet these requirements?

A. Store the active model provider in AWS Systems Manager Parameter Store. Configure a Lambda function to read the parameter at runtime to determine which model to invoke.

B. Store the active model provider in AWS AppConfig. Configure a Lambda function to read the configuration at runtime to determine which model to invoke.

C. Configure an Amazon API Gateway REST API to route requests to separate Lambda functions. Hardcode each Lambda function to a specific model provider. Switch the integration target manually.

D. Store the active model provider in a JSON file hosted on Amazon S3. Use AWS AppConfig to reference the S3 file as a hosted configuration source. Configure a Lambda function to read the file through AppConfig at runtime to determine which model to invoke. Forgot my password

**Answer: **

**Timestamp: **

[View on ExamTopics](https://www.examtopics.com/discussions/amazon/view/384264-exam-aws-certified-generative-ai-developer-professional-aip-c01-topic-1-question-59-discussion/)

Comments: Chibuzo1 Most Recent 4 months, 29 days ago Selected Answer: B AWS AppConfig is purpose-built for exactly this use case. It provides: Runtime configuration fetching — Lambda reads the active model provider at invocation time without any code change or redeployment Safe rollout (deployment strategies) — AppConfig supports linear, exponential, and all-at-once rollout strategies, letting you gradually shift traffic to a new model provider Built-in validation — You can attach JSON Schema validators or Lambda validators that check configuration before it goes live upvoted 1 time Submit     Cancel ... devilman222 6 months, 30 days ago Selected Answer: B First, I read this and thought appconfig. 2 answers with app config. Which one? B works. D Works, but having the s3 is really unnecessary, thats what app config does for you. So its B upvoted 2 times Submit     Cancel ... de1612d 7 months, 10 days ago Selected Answer: D chatgpt says the answer is d, but what do you think? upvoted 1 time Submit     Cancel ... de1612d 7 months, 6 days ago Jemini answer is B…. upvoted 1 time Submit     Cancel ... eesa 8 months, 7 days ago Selected Answer: B AWS AppConfig está diseñado específicamente para: Safe rollout: Deployment gradual (ej: 10% → 25% → 50% → 100%) Validation: Validators integrados (JSON schema, Lambda validators) Rollback automático: Si detecta errores, revierte cambios automáticamente Real-time switching: Cambios sin redeploy de Lambda Caching: AppConfig Agent cachea configs para baja latencia upvoted 2 times Submit     Cancel ...

----------------------------------------

## Exam AWS Certified Generative AI Developer - Professional AIP-C01 topic 1 question 60 discussion



A company is building a generative AI (GenAI) application that uses Amazon Bedrock APIs to process complex customer inquiries. During peak usage periods, the application experiences intermittent API timeouts that cause issues such as broken response chunks and delayed data delivery. The application struggles to ensure that prompts remain within token limits when handling complex customer inquiries of varying lengths. Users have reported truncated inputs and incomplete responses. The company has also observed foundation model (FM) invocation failures.

The company needs a retry strategy that automatically handles transient service errors and prevents overwhelming Amazon Bedrock during peak usage periods. The strategy must also adapt to changing service availability and support response streaming and token-aware request handling.

Which solution will meet these requirements?

A. Implement a standard retry strategy that uses a 1-second fixed delay between attempts and a 3-retry maximum for all errors. Handle streaming response timeouts by restarting streams. Cap token usage for each session.

B. Implement an adaptive retry strategy that uses exponential backoff with jitter and a circuit breaker pattern that temporarily disables retries when error rates exceed a predefined threshold. Implement a streaming response handler that monitors for chunk delivery timeouts. Configure the handler to buffer successfully received chunks and intelligently resume streaming from the last received chunk when connections are re-established.

C. Use the AWS SDK to configure a retry strategy in standard mode. Wrap Amazon Bedrock API calls in try-catch blocks that handle timeout exceptions. Return cached completions for failed streaming requests. Enforce a global token limit for all users. Add jitter-based retry logic and lightweight token trimming for each request. Resume broken streams by requesting only the missing chunks from the point of failure. Maintain a small in-memory buffer of the most recent chunks to minimize redundant data transfer.

D. Set Amazon Bedrock client request timeouts to 30 seconds. Implement client-side load shedding. Buffer partial results and stop new requests when the application performance begins to degrade. Set static token usage caps for all requests. Configure exponential backoff retries, dynamic chunk sizing, and context-aware token limits. Forgot my password

**Answer: **

**Timestamp: **

[View on ExamTopics](https://www.examtopics.com/discussions/amazon/view/384279-exam-aws-certified-generative-ai-developer-professional-aip-c01-topic-1-question-60-discussion/)

Comments: jaraiz91 1 month, 22 days ago Selected Answer: C it option C (I confirmed it with AI) optio B does not address token limit issue upvoted 1 time Submit     Cancel ... AbishekVVN Most Recent 18 days ago Did this question appear in the exam ? upvoted 1 time Submit     Cancel ... nocinfra 5 months, 27 days ago Selected Answer: B Exponential backoff with jitter — handles transient errors without thundering herd, adapts to service conditions Circuit breaker — prevents overwhelming Bedrock during peak by pausing retries when error rates spike Chunk-level streaming resume — buffers received chunks and resumes from last successful chunk, avoiding wasted tokens and broken responses upvoted 3 times Submit     Cancel ... Naaser 5 months, 29 days ago Selected Answer: C SDK Native Support: The AWS SDK’s standard mode retry strategy is built specifically to handle transient service errors and throttling.Token-Aware Handling: Implementing lightweight token trimming addresses the &quot;varying length&quot; and &quot;truncated input&quot; issues by ensuring prompts fit within FM limits before the API call is even made. upvoted 1 time Submit     Cancel ... Chibuzo1 6 months, 21 days ago Selected Answer: B The answer is B because it combines the three pillars of resilient distributed systems design: adaptive retry (exponential backoff + jitter) to handle transient errors gracefully, a circuit breaker to prevent cascading failures during sustained issues, and intelligent stream resumption to handle the streaming-specific challenges — all of which adapt dynamically rather than relying on static thresholds. upvoted 4 times Submit     Cancel ... de1612d 7 months, 6 days ago Selected Answer: C Gemini answer is C upvoted 1 time Submit     Cancel ...

----------------------------------------

## Exam AWS Certified Generative AI Developer - Professional AIP-C01 topic 1 question 61 discussion



A bank is developing a generative AI (GenAI)-powered AI assistant that uses Amazon Bedrock to assist the bank's website users with account inquiries and financial guidance. The bank must ensure that the AI assistant does not reveal any personally identifiable information (PII) in customer interactions.

The AI assistant must not send PII in prompts to the GenAI model. The AI assistant must not respond to customer requests to provide investment advice. The bank must collect audit logs of all customer interactions, including any images or documents that are transmitted during customer interactions.

Which solution will meet these requirements with the LEAST operational effort?

A. Use Amazon Macie to detect and redact PII in user inputs and in the model responses. Apply prompt engineering techniques to force the model to avoid investment advice topics. Use AWS CloudTrail to capture conversation logs.

B. Use an AWS Lambda function and Amazon Comprehend to detect and redact PII. Use Amazon Comprehend topic modeling to prevent the AI assistant from discussing investment advice topics. Set up custom metrics in Amazon CloudWatch to capture customer conversations.

C. Configure Amazon Bedrock guardrails to apply a sensitive information policy to detect and filter PII. Set up a topic policy to ensure that the AI assistant avoids investment advice topics. Use the Converse API to log model invocations. Enable delivery and image logging to Amazon S3.

D. Use regex controls to match patterns for PII. Apply prompt engineering techniques to avoid returning PII or investment advice topics to customers. Enable model invocation logging, delivery logging, and image logging to Amazon S3. Forgot my password

**Answer: **

**Timestamp: **

[View on ExamTopics](https://www.examtopics.com/discussions/amazon/view/384289-exam-aws-certified-generative-ai-developer-professional-aip-c01-topic-1-question-61-discussion/)

Comments: Chibuzo1 Most Recent 6 months, 21 days ago Selected Answer: C Amazon Bedrock Guardrails is the purpose-built, fully managed solution for exactly this use case — PII filtering, topic denial, and comprehensive audit logging including multimedia content — all configured declaratively within the Bedrock console with zero custom code and zero additional services to operate. upvoted 1 time Submit     Cancel ... minime 6 months, 25 days ago Selected Answer: C This is exactly what Bedrock Guardrails + native logging are designed for: - PII protection - Policy enforcement - Audit logging upvoted 1 time Submit     Cancel ...

----------------------------------------

## Exam AWS Certified Generative AI Developer - Professional AIP-C01 topic 1 question 62 discussion



A financial services company is developing a customer service AI assistant application that uses a foundation model (FM) in Amazon Bedrock. The application must provide transparent responses by documenting reasoning and by citing sources that are used for Retrieval Augmented Generation (RAG). The application must capture comprehensive audit trails for all responses to users. The application must be able to serve up to 10,000 concurrent users and must respond to each customer inquiry within 2 seconds.

Which solution will meet these requirements with the LEAST operational overhead?

A. Enable tracing for Amazon Bedrock agents. Configure structured prompts that direct the FM to provide evidence presentations. Integrate Amazon Bedrock knowledge bases with data sources to enable RAG. Configure the application to reference and cite authoritative content. Deploy the application in a Multi-AZ architecture. Use Amazon API Gateway and AWS Lambda functions to scale the application. Use Amazon CloudFront to provide low-latency delivery.

B. Enable tracing for Amazon Bedrock agents. Integrate a custom RAG pipeline with Amazon OpenSearch Service to retrieve and cite sources. Configure structured prompts to present retrieved evidence. Deploy the application behind an Amazon API Gateway REST API. Use AWS Lambda functions and Amazon CloudFront to scale the application and to provide low latency. Store logs in Amazon S3 and use AWS CloudTrail to capture audit trails.

C. Use Amazon CloudWatch to monitor latency and error rates. Embed model prompts directly in the application backend to cite sources. Store application interactions with users in Amazon RDS for audits.

D. Store generated responses and supporting evidence in an Amazon S3 bucket. Enable versioning on the bucket for audits. Use AWS Glue to catalog retrieved documents. Process the retrieved documents in Amazon Athena to generate periodic compliance reports. Forgot my password

**Answer: **

**Timestamp: **

[View on ExamTopics](https://www.examtopics.com/discussions/amazon/view/384261-exam-aws-certified-generative-ai-developer-professional-aip-c01-topic-1-question-62-discussion/)

Comments: Chibuzo1 Most Recent 6 months, 21 days ago Selected Answer: A because it leverages the full Bedrock-native stack — Knowledge Bases for managed RAG with automatic citations, agent tracing for comprehensive audit trails, and the standard serverless scaling pattern (API Gateway + Lambda + CloudFront + Multi-AZ) for performance — all with minimal operational overhead since every component is a managed service requiring configuration rather than custom engineering. upvoted 1 time Submit     Cancel ... de1612d 7 months, 5 days ago Selected Answer: A Gemini Answer is A upvoted 1 time Submit     Cancel ... 2d5eb96 7 months, 6 days ago Selected Answer: A B is clearly bringing operational overhead upvoted 2 times Submit     Cancel ...

----------------------------------------

## Exam AWS Certified Generative AI Developer - Professional AIP-C01 topic 1 question 63 discussion



A healthcare company is developing a document management system that stores medical research papers in an Amazon S3 bucket. The company needs to build a comprehensive metadata framework that will improve search precision for a generative AI (GenAI) application that analyzes the research papers. The metadata framework must include document timestamps, author information, and research domain classifications.

The solution must maintain a consistent metadata structure across all uploaded documents. The solution must give foundation models (FMs) the ability to understand document context without accessing the full content.

Which solution will meet these requirements?

A. Store document timestamps in Amazon S3 system metadata. Use S3 object tags to implement domain classification. Implement custom user-defined metadata to store author information.

B. Set up S3 Object Lock with legal holds to track document timestamps. Use S3 object tags to store author information. Implement S3 access points for domain classification.

C. Use S3 Inventory reports to track document timestamps. Create S3 access points to implement domain classification. Store author information in S3 Storage Lens dashboards.

D. Use custom user-defined metadata to store author information. Use S3 Object Lock retention periods to track document timestamps. Use S3 Event Notifications to implement domain classification. Forgot my password

**Answer: **

**Timestamp: **

[View on ExamTopics](https://www.examtopics.com/discussions/amazon/view/384268-exam-aws-certified-generative-ai-developer-professional-aip-c01-topic-1-question-63-discussion/)

Comments: Chibuzo1 Most Recent 6 months, 21 days ago Selected Answer: A Because it correctly maps each metadata requirement to the appropriate S3 metadata mechanism: system metadata for automatic timestamps, object tags for categorical classification, and user-defined metadata for descriptive attributes — all of which are native, consistent, and directly accessible to FMs without requiring full document access. upvoted 1 time Submit     Cancel ... de1612d 7 months, 10 days ago Selected Answer: A Answer is A upvoted 1 time Submit     Cancel ...

----------------------------------------

## Exam AWS Certified Generative AI Developer - Professional AIP-C01 topic 1 question 64 discussion



Example Corp provides a personalized video generation service that millions of enterprise customers use. Customers generate marketing videos by submitting prompts to the company's proprietary generative AI (GenAI) model. To improve output relevance and personalization, Example Corp wants to enhance the prompts by using customer-specific context such as product preferences, customer attributes, and business history.

The customers have strict data governance requirements. The customers must retain full ownership and control over their own data. The customers do not require real-time access. However, semantic accuracy must be high and retrieval latency must remain low to support customer experience use cases.

Example Corp wants to minimize architectural complexity in its integration pattern. Example Corp does not want to deploy and manage services in each customer's environment unless necessary.

Which solution will meet these requirements?

A. Ensure that each customer sets up an Amazon Q Business index that includes the customer's internal data. Ensure that each customer designates Example Corp as a data accessor to allow Example Corp to retrieve relevant content by using a secure API to enrich prompts at runtime.

B. Use federated search with Model Context Protocol (MCP) by deploying real-time MCP servers for each customer. Retrieve data in real time during prompt generation.

C. Ensure that each customer configures an Amazon Bedrock knowledge base. Allow cross-account querying so Example Corp can retrieve structured data for prompt augmentation.

D. Configure Amazon Kendra to crawl customer data sources. Share the resulting indexes across accounts so Example Corp can query each customer's Amazon Kendra index to retrieve augmentation data. Forgot my password

**Answer: **

**Timestamp: **

[View on ExamTopics](https://www.examtopics.com/discussions/amazon/view/384272-exam-aws-certified-generative-ai-developer-professional-aip-c01-topic-1-question-64-discussion/)

Comments: Naaser Most Recent 5 months, 29 days ago Selected Answer: C Lowest Architectural Complexity: Amazon Bedrock Knowledge Bases provide a fully managed RAG (Retrieval-Augmented Generation) workflow. Example Corp doesn't need to manage vector databases or complex indexing logic. upvoted 1 time Submit     Cancel ... Chibuzo1 6 months, 21 days ago Selected Answer: C Amazon Bedrock Knowledge Bases are the purpose-built managed service for RAG with high semantic accuracy, low retrieval latency, and minimal operational overhead. The cross-account querying model keeps data ownership with customers while giving Example Corp a simple, uniform integration pattern across its customer base — no per-customer infrastructure to deploy or manage. upvoted 1 time Submit     Cancel ... minime 6 months, 25 days ago Selected Answer: C Customer data ownership preserved (data stays in their account) Low latency + high accuracy (managed vector retrieval) No real-time ingestion requirement (pre-indexed KB) Minimal complexity for Example Corp (no per-customer infra to manage) Native Bedrock integration → simpler GenAI pipeline upvoted 1 time Submit     Cancel ... Gagg 6 months, 25 days ago Selected Answer: C A - Amazon Q Business is an internal enterprise assistant, not designed for cross-organization data retrieval by external companies. - B - Deploying MCP servers per customer = maximum complexity and contradicts &quot;don't deploy services in each customer's environment.&quot; - D - Kendra requires crawling raw data sources (more invasive), is heavier/costlier, and is being superseded by Bedrock Knowledge Bases. upvoted 1 time Submit     Cancel ... de1612d 7 months, 5 days ago Selected Answer: C Gemini answer is C upvoted 1 time Submit     Cancel ... AM_aws Highly Voted 7 months, 30 days ago Selected Answer: A https://aws.amazon.com/blogs/machine-learning/enhance-enterprise-productivity-for-your-llm-solution-by-becoming-an-amazon-q-business-data-accessor/ upvoted 8 times Submit     Cancel ... StelSen 8 months, 3 days ago Selected Answer: C Bedrock Knowledge Base per customer: - Each customer creates a Bedrock Knowledge Base - Data remains inside the customer's account - Example Corp performs cross-account querying. But, Amazon Q Business is an end-user AI assistant product, not a RAG backend. Q Business is not intended to expose retrieval APIs for external GenAI models. It introduces another AI assistant layer, which is unnecessary. upvoted 2 times Submit     Cancel ... eesa 8 months, 7 days ago Selected Answer: B ✅ Customer data ownership: Knowledge base en cuenta del cliente ✅ Full control: Cliente gestiona sus propios datos ✅ Cross-account querying: Example Corp accede vía IAM sin gestionar infraestructura en cuenta del cliente ✅ Semantic accuracy: Vector embeddings para búsqueda semántica ✅ Low latency: Knowledge bases optimizado para retrieval rápido ✅ No real-time required: Knowledge base es asíncrono (indexing separado de querying) ✅ Minimal complexity: Bedrock managed service, sin despliegues custom ✅ No deployment in customer env: Example Corp solo query, no despliega servicio upvoted 1 time Submit     Cancel ... xyztest 8 months, 13 days ago Selected Answer: A correct answer upvoted 2 times Submit     Cancel ...

----------------------------------------

## Exam AWS Certified Generative AI Developer - Professional AIP-C01 topic 1 question 65 discussion



A company is building a legal research AI assistant that uses Amazon Bedrock with an Anthropic Claude foundation model (FM). The AI assistant must retrieve highly relevant case law documents to augment the FM's responses. The AI assistant must identify semantic relationships between legal concepts, specific legal terminology, and citations. The AI assistant must perform quickly and return precise results.

Which solution will meet these requirements?

A. Configure an Amazon Bedrock knowledge base to use a default vector search configuration. Use Amazon Bedrock to expand queries to improve retrieval for legal documents based on specific terminology and citations.

B. Use Amazon OpenSearch service to deploy a hybrid search architecture that combines vector search with keyword search. Apply an Amazon Bedrock reranker model to optimize result relevance.

C. Enable the Amazon Kendra query suggestion feature for end users. Use Amazon Bedrock to perform post-processing of search results to identify semantic similarity in the documents and to produce precise results.

D. Use Amazon OpenSearch Service with vector search and Amazon Bedrock Titan embeddings to index and search legal documents. Use custom AWS Lambda functions to merge results with keyword-based filters that are stored in an Amazon RDS database. Forgot my password

**Answer: **

**Timestamp: **

[View on ExamTopics](https://www.examtopics.com/discussions/amazon/view/384287-exam-aws-certified-generative-ai-developer-professional-aip-c01-topic-1-question-65-discussion/)

Comments: Chibuzo1 Most Recent 4 months, 29 days ago Selected Answer: B Bottom line: Hybrid search (vector + keyword) + reranking is the purpose-built, AWS-native pattern for domains requiring both semantic understanding and exact-term precision — exactly what legal research demands. upvoted 1 time Submit     Cancel ... Kimzia 6 months, 7 days ago Selected Answer: B Amazon Bedrock reranker model to optimize result relevance upvoted 1 time Submit     Cancel ... awsguruji 7 months, 23 days ago Selected Answer: B B -&gt; relevant == reranker upvoted 2 times Submit     Cancel ... eesa 8 months, 7 days ago Selected Answer: B ✅ Hybrid search: Vector (semantic) + keyword (exact terminology/citations) ✅ Vector search: Identifica semantic relationships entre conceptos legales ✅ Keyword search: Captura specific legal terminology y citations exactas ✅ Bedrock reranker: Optimiza relevancia de resultados ✅ Fast performance: OpenSearch optimizado para búsquedas rápidas ✅ Precise results: Reranker mejora precisi upvoted 2 times Submit     Cancel ...

----------------------------------------

## Exam AWS Certified Generative AI Developer - Professional AIP-C01 topic 1 question 66 discussion



A company deploys multiple Amazon Bedrock based generative AI (GenAI) applications across multiple business units for customer service, content generation, and document analysis. Some applications show unpredictable token consumption patterns. The company requires a comprehensive observability solution that provides real-time visibility into token usage patterns across multiple models. The observability solution must support custom dashboards for multiple stakeholder groups and provide alerting capabilities for token consumption across all the foundational models that the company's applications use.

Which combination of solutions will meet these requirements with the LEAST operational overhead? (Choose two.)

A. Use Amazon CloudWatch metrics as data sources to create custom Amazon QuickSight dashboards that show token usage trends and usage patterns across FMs.

B. Use Amazon CloudWatch Logs Insights to analyze Amazon Bedrock invocation logs for token consumption patterns and usage attribution by application. Create custom queries to identify high-usage scenarios. Add log widgets to dashboards to enable continuous monitoring.

C. Create custom Amazon CloudWatch dashboards that combine native Amazon Bedrock token and invocation CloudWatch metrics. Set up CloudWatch alarms to monitor token usage thresholds.

D. Create dashboards that show token usage trends and patterns across the company's FMs by using an Amazon Bedrock zero-ETL integration with Amazon Managed Grafana.

E. Implement Amazon EventBridge rules to capture Amazon Bedrock model invocation events. Route token usage data to an Amazon Data Firehose delivery stream that targets Amazon OpenSearch Serverless. Use OpenSearch dashboards to analyze usage patterns. Forgot my password

**Answer: **

**Timestamp: **

[View on ExamTopics](https://www.examtopics.com/discussions/amazon/view/384262-exam-aws-certified-generative-ai-developer-professional-aip-c01-topic-1-question-66-discussion/)

Comments: Chibuzo1 Most Recent 4 months, 29 days ago Selected Answer: BC Amazon Bedrock natively publishes invocation and token metrics directly to Amazon CloudWatch (e.g., InputTokenCount, OutputTokenCount, Invocations, InvocationLatency) CloudWatch Logs Insights against Bedrock invocation logs lets you run custom queries to break down token usage by application/stakeholder group upvoted 1 time Submit     Cancel ... AM_aws 7 months, 30 days ago Selected Answer: B CloudWatch --&gt; GenAI Observability upvoted 1 time Submit     Cancel ... AM_aws 7 months, 30 days ago BC - not only B upvoted 1 time Submit     Cancel ... StelSen 8 months, 3 days ago Selected Answer: BC Option-C: is the cleanest way to get near real-time visibility and alerting with the least overhead. Amazon Bedrock publishes native CloudWatch runtime metrics such as InputTokenCount and OutputTokenCount, and can graph them in CloudWatch and set alarms on thresholds. Option-B: complements that by giving deeper usage-pattern analysis and attribution by application from Bedrock model invocation logs in CloudWatch Logs. Bedrock invocation logging can send request/response data and metadata to CloudWatch Logs, and CloudWatch Logs Insights can query those logs and its results can be added as log widgets to dashboards. upvoted 2 times Submit     Cancel ... taka5094 8 months, 6 days ago Selected Answer: BC D: Bedrock's zero-ETL integration and Managed Grafana requires the configuration and management of additional services, increasing operational overhead. upvoted 3 times Submit     Cancel ... eesa 8 months, 7 days ago Selected Answer: BC ✅ Native Bedrock metrics: CloudWatch metrics automáticos sin configuración ✅ Custom dashboards: Soporte para múltiples stakeholders ✅ CloudWatch alarms: Alerting nativo para thresholds ✅ Real-time visibility: Métricas en tiempo real ✅ Mínimo overhead: Servicios managed, sin ETL ✅ CloudWatch Logs Insights: Análisis detallado de invocation logs ✅ Usage attribution: Identifica consumo por aplicación ✅ Custom queries: Flexible para high-usage scenarios ✅ Log widgets: Integración con dashboards ✅ Continuous monitoring: Queries programadas upvoted 2 times Submit     Cancel ... xyztest 8 months, 13 days ago Selected Answer: CD Correct Answer upvoted 1 time Submit     Cancel ... GiorgioGss 8 months, 14 days ago Selected Answer: BC Closest to the requirements. upvoted 1 time Submit     Cancel ...

----------------------------------------

## Exam AWS Certified Generative AI Developer - Professional AIP-C01 topic 1 question 67 discussion



A company is designing a solution that uses foundation models (FMs) to support multiple AI workloads. Some FMs must be invoked on demand and in real time. Other FMs require consistent high-throughput access for batch processing.

The solution must support hybrid deployment patterns and run workloads across cloud infrastructure and on-premises infrastructure to comply with data residency and compliance requirements.

Which combination of steps will meet these requirements? (Choose two.)

A. Use AWS Lambda to orchestrate low-latency FM inference by invoking FMs hosted on Amazon SageMaker AI asynchronous endpoints.

B. Configure provisioned throughput in Amazon Bedrock to ensure consistent performance for high-volume workloads.

C. Deploy FMs to Amazon SageMaker AI endpoints with support for edge deployment by using Amazon SageMaker Neo. Orchestrate the FMs by using AWS Lambda to support hybrid deployment.

D. Use Amazon Bedrock with auto-scaling to handle unpredictable traffic surges.

E. Use Amazon SageMaker JumpStart to host and invoke the FMs. Forgot my password

**Answer: **

**Timestamp: **

[View on ExamTopics](https://www.examtopics.com/discussions/amazon/view/384271-exam-aws-certified-generative-ai-developer-professional-aip-c01-topic-1-question-67-discussion/)

Comments: Naaser Most Recent 5 months, 29 days ago Selected Answer: BC Choice B (High Throughput &amp; Consistency): Amazon Bedrock Provisioned Throughput is specifically designed for workloads requiring consistent, high-volume access. It provides dedicated capacity for a foundation model, ensuring that batch processing or heavy real-time traffic is not subject to the rate limits or latency fluctuations of the on-demand shared pool.Choice C (Hybrid &amp; On-Premises Deployment): To meet data residency and compliance requirements that demand on-premises processing, Amazon SageMaker Neo is the key. Neo optimizes models for specific hardware and allows them to be deployed at the edge or on local infrastructure. AWS Lambda (specifically via AWS IoT Greengrass) can then orchestrate these models in a hybrid environment. upvoted 2 times Submit     Cancel ... Chibuzo1 6 months, 21 days ago Selected Answer: BC Bedrock provisioned throughput for consistent batch processing (B) + SageMaker with edge deployment for hybrid cloud/on-premises patterns with data residency compliance (C). The two services complement each other — Bedrock handles the high-throughput cloud workloads, SageMaker handles the hybrid deployment flexibility.compliance — together covering every stated requirement across both deployment patterns. upvoted 2 times Submit     Cancel ... de1612d 7 months, 9 days ago Selected Answer: BD C is not correct because **Amazon SageMaker Neo is designed for edge deployment optimization, not for managing hybrid cloud/on-prem FM workloads or real-time and high-throughput inference. It does not address the core requirements of scalability, throughput consistency, or hybrid infrastructure execution. upvoted 2 times Submit     Cancel ... eesa 8 months, 7 days ago Selected Answer: BC ✅ Consistent high-throughput: Provisioned throughput garantiza capacidad para batch processing ✅ Batch processing: Ideal para workloads predecibles de alto volumen ✅ Cloud infrastructure: Bedrock es servicio cloud managed ✅ On-demand real-time: SageMaker endpoints para invocación en tiempo real ✅ Hybrid deployment: SageMaker Neo compila modelos para edge/on-premises ✅ Data residency: Deployment on-premises cumple compliance ✅ Lambda orchestration: Coordina workloads híbridos upvoted 3 times Submit     Cancel ...

----------------------------------------

## Exam AWS Certified Generative AI Developer - Professional AIP-C01 topic 1 question 68 discussion



A company is planning to deploy multiple generative AI (GenAI) applications to five independent business units that operate in multiple countries in Europe and the Americas. Each application uses Amazon Bedrock Retrieval Augmented Generation (RAG) patterns with business unit-specific knowledge bases that store terabytes of unstructured data.

The company must establish well-architected, standardized components for security controls, observability practices, and deployment patterns across all the GenAI applications. The components must be reusable, versioned, and governed consistently.

Which solution will meet these requirements?

A. Configure Amazon API Gateway REST API endpoints for the GenAI applications. Deploy common security, observability, and RAG patterns based on the AWS Well-Architected Generative AI Lens in standardized AWS CloudFormation templates. Use CloudFormation Guard after the deployment to validate policy compliance in each business unit.

B. Create standardized AWS CloudFormation templates to implement security, observability, and RAG patterns based on the AWS Well-Architected Generative AI Lens. Establish a centralized repository that performs version control. Integrate a CI/CD pipeline with CloudFormation Guard to enforce consistent and repeatable deployments across business units.

C. Use AWS Service Catalog to define standardized portfolios and versioned products for each business unit. Use the portfolios to enforce security, observability, and RAG patterns based on the AWS Well-Architected Generative AI Lens. Require the business units to use the Service Catalog console to deploy resources.

D. Document security controls, observability requirements, and RAG patterns based on the AWS Well-Architected Generative AI Lens in a shared design document. Use Amazon Macie to enforce deployment. Delegate implementation responsibility to each business unit. Forgot my password

**Answer: **

**Timestamp: **

[View on ExamTopics](https://www.examtopics.com/discussions/amazon/view/384283-exam-aws-certified-generative-ai-developer-professional-aip-c01-topic-1-question-68-discussion/)

Comments: Chibuzo1 Most Recent 6 months, 21 days ago Selected Answer: B It delivers the complete governance lifecycle: standardized templates encode best practices, a centralized repository provides version control and reusability, and a CI/CD pipeline with CloudFormation Guard provides preventive, automated enforcement — ensuring every business unit across every country deploys consistent, compliant GenAI infrastructure without manual intervention. upvoted 1 time Submit     Cancel ... minime 6 months, 24 days ago Selected Answer: C CloudFormation = building blocks CI/CD = delivery Service Catalog = governance + standardization at scale upvoted 1 time Submit     Cancel ... eesa 8 months, 7 days ago Selected Answer: B ✅ Standardized CloudFormation templates: Componentes reusables y versionados ✅ Centralized repository: Version control (Git) para governance ✅ CI/CD pipeline: Deployments automatizados y consistentes ✅ CloudFormation Guard: Policy enforcement ANTES del deployment ✅ Well-Architected GenAI Lens: Best practices incorporadas ✅ Repeatable: Mismo template para todas las business units ✅ Governed consistently: CI/CD + Guard garantiza compliance upvoted 3 times Submit     Cancel ... xyztest 8 months, 13 days ago Selected Answer: B Correct Answer upvoted 1 time Submit     Cancel ...

----------------------------------------

## Exam AWS Certified Generative AI Developer - Professional AIP-C01 topic 1 question 69 discussion



A company upgraded its Amazon Bedrock powered foundation model (FM) that supports a multilingual customer service assistant. After the upgrade, the assistant exhibited inconsistent behavior across languages. The assistant began generating different responses in some languages when presented with identical questions.

The company needs a solution to detect and address similar problems for future updates. The evaluation must be completed within 45 minutes for all supported languages. The evaluation must process at least 15,000 test conversations in parallel. The evaluation process must be fully automated and integrated into the CI/CD pipeline. The solution must block deployment if quality thresholds are not met.

Which solution will meet these requirements?

A. Create a distributed traffic simulation framework that sends translation-heavy workloads to the assistant in multiple languages simultaneously. Use Amazon CloudWatch metrics to monitor latency, concurrency, and throughput. Run simulations before production releases to identify infrastructure bottlenecks.

B. Deploy the assistant in multiple AWS Regions with Amazon Route 53 latency-based routing and AWS Global Accelerator to improve global performance. Store multilingual conversation logs in Amazon S3. Perform weekly post-deployment audits to review consistency.

C. Create a pre-processing pipeline that normalizes all incoming messages into a consistent format before sending the messages to the assistant. Apply rule-based checks to flag potential hallucinations in the outputs. Focus the evaluation on the normalized text to simplify testing across languages.

D. Set up standardized multilingual test conversations with identical meaning. Run the test conversations in parallel by using Amazon Bedrock model evaluation jobs. Apply similarity and hallucination thresholds. Integrate the process into the CI/CD pipeline to block releases that fail. Forgot my password

**Answer: **

**Timestamp: **

[View on ExamTopics](https://www.examtopics.com/discussions/amazon/view/384266-exam-aws-certified-generative-ai-developer-professional-aip-c01-topic-1-question-69-discussion/)

Comments: Chibuzo1 Most Recent 6 months, 21 days ago Selected Answer: D D , directly addresses the root problem (cross-language semantic inconsistency) with the right methodology (standardized multilingual test cases + similarity metrics), the right infrastructure (Bedrock model evaluation jobs for parallel batch processing), and the right operational integration (CI/CD pipeline with automated quality gates that block deployment on failure). upvoted 1 time Submit     Cancel ... de1612d 7 months, 5 days ago Selected Answer: D Answer is D upvoted 1 time Submit     Cancel ...

----------------------------------------

## Exam AWS Certified Generative AI Developer - Professional AIP-C01 topic 1 question 70 discussion



A company is developing a generative AI (GenAI) application that uses Amazon Bedrock foundation models (FMs). The application has several custom tool integrations. The application has experienced unexpected token consumption surges despite consistent user traffic.

The company needs a solution that uses Amazon Bedrock model invocation logging to monitor InputTokenCount metrics and OutputTokenCount metrics. The solution must detect unusual patterns in tool usage and identify which specific tool integrations cause abnormal token consumption. The solution must also automatically adjust thresholds as traffic patterns change.

Which solution will meet these requirements?

A. Use Amazon CloudWatch Logs to capture model invocation logs. Create CloudWatch dashboards based on InputTokenCount metrics and OutputTokenCount metrics. Configure static CloudWatch alarms with fixed thresholds for each tool integration.

B. Store model invocation logs in an Amazon S3 bucket. Use AWS Glue to catalog the logs. Analyze token consumption patterns by using scheduled Amazon Athena queries that generate reports on tool usage trends.

C. Use Amazon CloudWatch Logs to capture model invocation logs. Create CloudWatch metric filters to extract tool-specific invocation patterns. Apply CloudWatch anomaly detection alarms that adjust baselines for each tool's metrics.

D. Store model invocation logs in an Amazon S3 bucket. Create an AWS Lambda function to process logs in real time. Manually update Amazon CloudWatch alarm thresholds based on token consumption trends that the Lambda function identifies. Forgot my password

**Answer: **

**Timestamp: **

[View on ExamTopics](https://www.examtopics.com/discussions/amazon/view/384247-exam-aws-certified-generative-ai-developer-professional-aip-c01-topic-1-question-70-discussion/)

Comments: Chibuzo1 Most Recent 6 months, 21 days ago Selected Answer: C CloudWatch Logs for capture, metric filters for tool-level granularity, and anomaly detection alarms for intelligent, self-adjusting baselines — all within a single managed service with zero custom infrastructure and fully automatic threshold adaptation. upvoted 1 time Submit     Cancel ... AndreyShne24 6 months, 24 days ago Selected Answer: C C is the only answer that provides Anomaly detection, the question states dynamic adjustments to traffic patterns, CloudWatch Anomaly detection learns from your usual metric patterns and triggers when it reads an abnormality in the metrics. upvoted 1 time Submit     Cancel ... de1612d 7 months, 9 days ago Selected Answer: C Answer is C upvoted 1 time Submit     Cancel ... eesa 8 months, 7 days ago Selected Answer: C ✅ CloudWatch Logs: Captura model invocation logs automáticamente ✅ Metric filters: Extrae tool-specific patterns de logs ✅ Anomaly detection: Detecta unusual patterns automáticamente ✅ Auto-adjusting thresholds: Baselines se ajustan con traffic patterns ✅ Tool-specific monitoring: Identifica qué tool causa consumo anormal ✅ Real-time detection: CloudWatch alarms en tiempo real upvoted 3 times Submit     Cancel ... 67bdb19 8 months, 22 days ago Selected Answer: D I’d roll with D — seems like the most solid choice. upvoted 1 time Submit     Cancel ...

----------------------------------------

## Exam AWS Certified Generative AI Developer - Professional AIP-C01 topic 1 question 71 discussion



A company is using Amazon Bedrock to develop an AI-powered application that uses a foundation model (FM) that supports cross-Region inference and provisioned throughput. The application must serve users in Europe and North America with consistently low latency. The application must comply with data residency regulations that require European user data to remain within Europe-based AWS Regions.

During testing, the application experiences service degradation when Regional traffic spikes reach service quotas. The company needs a solution that maintains application resilience and minimizes operational complexity.

Which solution will meet these requirements?

A. Deploy separate Amazon Bedrock instances in North American and European Regions. Use a custom routing layer that directs traffic based on user location. Configure Amazon CloudWatch alarms to monitor Regional service usage. Use Amazon SNS to send email alerts to the company when usage approaches specified thresholds.

B. Use Amazon Bedrock cross-Region inference profiles by specifying geographical codes in profile IDs when the application calls the InvokeModel API. Configure separate Amazon API Gateway HTTP APIs to direct European and North American users to the appropriate Regional endpoints.

C. Deploy a multi-Region Amazon API Gateway HTTP API and AWS Lambda functions that implement retry logic to handle throttling. Configure the Lambda functions to call the FM in the nearest secondary Region when the application reaches service quotas in the primary Region. Use intelligent routing to ensure compliance with data residency requirements.

D. Configure provisioned throughput for Amazon Bedrock in multiple Regions. Implement failover logic in the application code to switch between Regions when throttling occurs. Use AWS Global Accelerator to route traffic to the appropriate endpoints based on user location. Forgot my password

**Answer: **

**Timestamp: **

[View on ExamTopics](https://www.examtopics.com/discussions/amazon/view/384288-exam-aws-certified-generative-ai-developer-professional-aip-c01-topic-1-question-71-discussion/)

Comments: de1612d Most Recent 7 months, 9 days ago Selected Answer: B Answer is B upvoted 2 times Submit     Cancel ... eesa 8 months, 7 days ago Selected Answer: B ✅ Cross-Region inference profiles: Feature nativo de Bedrock para multi-región ✅ Geographical codes: Garantiza data residency (EU data en EU regions) ✅ Automatic load distribution: Bedrock distribuye carga entre regiones ✅ Low latency: Routing geográfico optimizado ✅ Resilience: Failover automático entre regiones ✅ Minimal complexity: Usa capacidades nativas de Bedrock ✅ Compliance: Separate endpoints garantizan data residency upvoted 3 times Submit     Cancel ...

----------------------------------------

## Exam AWS Certified Generative AI Developer - Professional AIP-C01 topic 1 question 72 discussion



An international company is building an AI assistant that uses RAG. The company wants the AI assistant to have near real-time, low-latency performance. The AI assistant must provide service to several geographic areas. The company's customers will use proprietary data with the AI assistant. The proprietary data must not leave the company's immediate geographic area.

Which solution will meet these requirements?

A. Deploy an Amazon Bedrock model with a cross-Region model inference profile. Create Amazon S3 buckets in each AWS Region the company operates in. Store a knowledge base in each respective S3 bucket. In each Region, configure Amazon Kendra to interact with the respective knowledge base. In each Region, configure an AWS Lambda function that uses Kendra and Amazon Bedrock to process AI assistant prompts.

B. Deploy an Amazon Bedrock model in each AWS Region the company operates in. Configure an Amazon Bedrock cross-Region model inference profile. Configure a vector database that uses Amazon Bedrock Knowledge Bases. Store the knowledge bases in Amazon S3 in each Region the company operates in.

C. Use AWS Outposts to deploy an outpost in each AWS Region the company operates in. Create Amazon S3 buckets to store knowledge bases in each corresponding Region. Deploy Amazon RDS configured as a vector database to each outpost. Deploy an Amazon Bedrock model with a cross-Region inference profile in a central Region.

D. Configure a knowledge base stored in the Amazon S3 Express One Zone storage class in each AWS Local Zone the company operates in. Use Amazon RDS to deploy a vector database in each Local Zone the company operates in. Deploy a large language model (LLM) to Amazon EC2 instances in each Local Zone. Configure the AI assistant to route prompts to the model in the respective Local Zone. Forgot my password

**Answer: **

**Timestamp: **

[View on ExamTopics](https://www.examtopics.com/discussions/amazon/view/384255-exam-aws-certified-generative-ai-developer-professional-aip-c01-topic-1-question-72-discussion/)

Comments: Chibuzo1 Most Recent 4 months, 28 days ago Selected Answer: D RequirementKey ConstraintNear real-time, low-latency RAGInfrastructure must be geographically close to usersMultiple geographic areasPer-region/per-zone deploymentProprietary data must NOT leave local geographyNo cross-region data movement — ever upvoted 1 time Submit     Cancel ... HarryNZ1982 5 months, 24 days ago Selected Answer: D D is the correct answer as that is the only option that meets the following Data residency: S3 Express One Zone + RDS vector DB + EC2 LLMs are all deployed per Local Zone. Proprietary data and prompts never leave that Local Zone. Low latency: Local Zones place compute/storage very close to end users. S3 Express One Zone is designed for single-digit ms latency. No cross-region inference: The LLM runs locally on EC2, so no data goes to Bedrock in another region. upvoted 1 time Submit     Cancel ... jyrajan69 5 months, 29 days ago Selected Answer: D D is the right answer, all others break the strict data sovereign rule, Deploys everything within each AWS Local Zone: upvoted 1 time Submit     Cancel ... eesa 8 months, 7 days ago Selected Answer: B La pregunta menciona &quot;AI assistant that uses RAG&quot; En el contexto de AWS, RAG + AI assistant → Amazon Bedrock Knowledge Bases es la solución nativa y recomendada Opción B usa Bedrock Knowledge Bases (patrón correcto) Opción D usa LLM en EC2 (sale del scope de Bedrock) upvoted 2 times Submit     Cancel ... GiorgioGss 8 months, 14 days ago Selected Answer: B meets low latency, RAG requirements, multi-region support, and strict data residency upvoted 3 times Submit     Cancel ...

----------------------------------------

## Exam AWS Certified Generative AI Developer - Professional AIP-C01 topic 1 question 73 discussion



A company is building a generative AI (GenAI) application that processes financial reports and provides summaries for analysts. The application must run two compute environments. In one environment, AWS Lambda function must use the Python SDK to analyze reports on demand. In the second environment, Amazon EKS containers must use the JavaScript SDK to batch process multiple reports on a schedule. The application must maintain conversational context throughout multi-tum interactions, use the same foundation model (FM) across environments, and ensure consistent authentication.

Which solution will meet these requirements?

A. Use the Amazon Bedrock InvokeModel API with a separate authentication method for each environment. Store conversation states in Amazon DynamoDB. Use custom I/O formatting logic for each programming language.

B. Use the Amazon Bedrock Converse API directly in both environments with a common authentication mechanism that uses IAM roles. Store conversation states in Amazon ElastiCache. Creating programming language-specific wrappers for model parameters.

C. Create a centralized Amazon API Gateway REST API endpoint that handles all model interactions by using the InvokeModel API. Store interaction history in application process memory in each Lambda function or EKS container. Use environment variables to configure model parameters.

D. Use the Amazon Bedrock Converse API and IAM roles for authentication. Pass previous messages in the request messages array to maintain conversational context. Use programming language-specific SDKs to establish consistent API interfaces. Forgot my password

**Answer: **

**Timestamp: **

[View on ExamTopics](https://www.examtopics.com/discussions/amazon/view/384258-exam-aws-certified-generative-ai-developer-professional-aip-c01-topic-1-question-73-discussion/)

Comments: Chibuzo1 Most Recent 6 months, 20 days ago Selected Answer: D Converse API was designed precisely for this scenario — a unified interface across programming languages and FMs, with built-in multi-turn context management via the messages array, and IAM roles providing consistent authentication across Lambda and EKS without any custom code or external state infrastructure. upvoted 1 time Submit     Cancel ... 2d5eb96 7 months, 4 days ago Selected Answer: D Option D is the only solution that fully satisfies all requirements through: Native Converse API support in both Python and JavaScript SDKs Consistent IAM role-based authentication Stateless conversational context via message array Model-agnostic API ensuring FM consistency No unnecessary infrastructure complexity upvoted 1 time Submit     Cancel ... eesa 8 months, 7 days ago Selected Answer: D Dos entornos diferentes: Lambda (Python SDK) + EKS (JavaScript SDK) Mantener contexto conversacional en interacciones multi-turn Mismo FM en ambos entornos Autenticación consistente upvoted 2 times Submit     Cancel ... GiorgioGss 8 months, 14 days ago Selected Answer: D Could be also B but storing message outside is not needed. upvoted 2 times Submit     Cancel ...

----------------------------------------

## Exam AWS Certified Generative AI Developer - Professional AIP-C01 topic 1 question 74 discussion



A company is building a serverless application that uses AWS Lambda functions to help students around the world summarize notes. The application uses Anthropic Claude through Amazon Bedrock. The company observed that most of the traffic occurs during evenings in each time zone. Users report experiencing throttling errors during peak usage times in their times zones.

The company needs to resolve the throttling issues by ensuring continuous operation of the application. The solution must maintain application performance quality. The company needs a solution that does not require a fixed hourly cost during low traffic periods.

Which solution will meet these requirements?

A. Create custom Amazon CloudWatch metrics to monitor model errors. Set provisioned throughput to a value that is safely higher than the peak traffic observed.

B. Create custom Amazon CloudWatch metrics to monitor model errors. Set up a failover mechanism to redirect invocations to a backup AWS Region when the errors exceed a specified threshold.

C. Enable invocation logging in Amazon Bedrock. Monitor key metrics such as Invocations, InputTokenCount, OutputTokenCount, and Invocation Throttles. Distribute traffic across cross-Region inference endpoints.

D. Enable invocation logging in Amazon Bedrock. Monitor InvocationLatency, InvocationClientErrors, and InvocationServerErrors metrics. Distribute traffic across multiple versions of the same model. Forgot my password

**Answer: **

**Timestamp: **

[View on ExamTopics](https://www.examtopics.com/discussions/amazon/view/384275-exam-aws-certified-generative-ai-developer-professional-aip-c01-topic-1-question-74-discussion/)

Comments: Chibuzo1 Most Recent 6 months, 20 days ago Selected Answer: C Cross-Region inference profiles are purpose-built for exactly this scenario — globally distributed traffic with rolling peak windows across time zones — providing on-demand, pay-per-use load distribution across AWS Regions without any fixed hourly reservation cost. upvoted 1 time Submit     Cancel ... GiorgioGss 8 months, 14 days ago Selected Answer: C cross-Region inference handle peak traffic upvoted 2 times Submit     Cancel ...

----------------------------------------

## Exam AWS Certified Generative AI Developer - Professional AIP-C01 topic 1 question 75 discussion



A company is developing a new AI-powered application that needs to integrate with various specialized tools. These tools currently run as Model Context Protocol (MCP) servers on the local machines of developers and do not maintain states between invocations. The company plans to deploy each MCP server as an AWS Lambda function to support the company's production application.

The solution must be accessible to both internal applications and authorized third-party partners. The solution must use strict authentication and authorization controls.

Which additional steps will meet these requirements with the LEAST operational overhead?

A. Create a custom Lambda invocation transport by using the Lambda Invoke API. Implement IAM authentication and grant InvokeFunction permissions to authorized users and roles.

B. Expose the Lambda functions through Amazon API Gateway REST API endpoints. Implement API keys for authentication. Configure the applications that need to access the MCP servers to use standard HTTP requests instead of the MCP protocol.

C. Create Lambda function URLs and enable a custom Streamable HTTP transport and SigV4. Implement AWS IAM authentication. Grant InvokeFunctionUrl permissions to authorized users and roles.

D. Expose the Lambda function through Amazon API Gateway HTTP API endpoints with the Streamable HTTP transport. Use Amazon Cognito to implement OAuth authentication. Configure API Gateway to validate OAuth tokens. Forgot my password

**Answer: **

**Timestamp: **

[View on ExamTopics](https://www.examtopics.com/discussions/amazon/view/384284-exam-aws-certified-generative-ai-developer-professional-aip-c01-topic-1-question-75-discussion/)

Comments: 953bf6d Most Recent 20 days ago Selected Answer: D Correct answer: D. It preserves MCP compatibility while providing managed authentication and authorization for internal applications and external partners. Why D meets the requirements Streamable HTTP preserves MCP: It supports remote MCP communication over HTTP. A stateless implementation is suitable for the Lambda deployment described in the question. Cognito provides OAuth-based access: Clients obtain tokens, and API Gateway’s managed JWT authorizer validates them before allowing access to the Lambda-backed endpoints. AWS documents this Cognito and HTTP API integration. Scopes enforce authorization: Configure required OAuth scopes on API routes so a valid token alone is insufficient; it must also contain the appropriate permissions. This avoids building a custom token-validation service. The request path is: MCP client → API Gateway validates token and scopes → Lambda MCP server Why not the others? A: Explicitly requires a custom Lambda invocation transport. D instead uses MCP’s remote HTTP transport and managed token validation, making it the better fit for least operational overhead. B: Explicitly replaces MCP with ordinary HTTP requests, rather than exposing the existing tools through a compatible MCP transport. Streamable HTTP retains MCP semantics over HTTP. C: IAM authentication is not inherently insecure or incapable of supporting partners. However, this option explicitly requires custom transport and SigV4 integration; D offers the more suitable managed OAuth access pattern for the stated audience. upvoted 2 times Submit     Cancel ... Chibuzo1 5 months, 14 days ago Selected Answer: C MCP servers as Lambda functions (stateless) MCP's modern Streamable HTTP transport is designed exactly for stateless server deployments — it maps cleanly to Lambda's request/response model. Options A and B don't use MCP-native transport, which means rearchitecting how clients communicate. upvoted 1 time Submit     Cancel ... Naaser 5 months, 29 days ago Selected Answer: C Lowest Operational Overhead: Lambda Function URLs are a simpler way to provide dedicated HTTP(S) endpoints compared to managing Amazon API Gateway.MCP Compatibility: The Streamable HTTP transport is a core part of the Model Context Protocol. It allows for long-running connections or chunked data transfer, which is necessary for the protocol's communication patterns.Strong Security: Using AWS IAM (SigV4) authentication is the most robust way to secure the endpoint. It ensures that only specifically authorized AWS users, roles, or third-party partners (via cross-account roles) can invoke the tools. upvoted 1 time Submit     Cancel ... Kimzia 6 months, 0 days ago Selected Answer: A it uses the native Lambda Invoke API to access the stateless MCP servers directly, while IAM authentication and InvokeFunction permissions provide strict access control for both internal applications and authorized third-party partners with the least operational overhead. upvoted 2 times Submit     Cancel ... AndreyShne24 6 months, 24 days ago Selected Answer: D I think D is the answer since the question states to support third-party partners, Cognito is good for these types of situations, C for example is good if it is AWS to AWS only in which the question doesn't explicitly say upvoted 5 times Submit     Cancel ... Kraftzman 7 months, 23 days ago Selected Answer: C To fulfill the requirements with the least operational overhead while providing strict security for your Model Context Protocol (MCP) servers, the most efficient solution is to leverage Lambda Function URLs. upvoted 2 times Submit     Cancel ... eesa 8 months, 7 days ago Selected Answer: C MCP servers stateless → Lambda es ideal Accesible a aplicaciones internas Y partners externos Autenticación y autorización estrictas LEAST operational overhead Mantener compatibilidad con MCP protocol upvoted 3 times Submit     Cancel ... GiorgioGss 8 months, 14 days ago Selected Answer: C &quot;LEAST operational overhead&quot; upvoted 3 times Submit     Cancel ...

----------------------------------------

## Exam AWS Certified Generative AI Developer - Professional AIP-C01 topic 1 question 76 discussion



A company has a generative AI (GenAI) application that uses Amazon Bedrock to provide real-time responses to customer queries. The company has noticed intermittent failures with API calls to foundation models (FMs) during peak traffic periods.

The company needs a solution to handle transient errors and provide detailed observability into FM performance. The solution must prevent cascading failures during throttling events and provide distributed tracing across service boundaries to identify latency contributors. The solution must also enable correlation of performance issues with specific FM characteristics.

Which solution will meet these requirements?

A. Implement a custom retry mechanism with a fixed delay of 1 second between retries. Configure Amazon CloudWatch alarms to monitor the application's error rates and latency metrics.

B. Configure the AWS SDK with standard retry mode and exponential backoff with jitter. Use AWS X-Ray tracing with annotations to identify and filter service components.

C. Implement client-side caching of all FM responses. Add custom logging statements in the application code to record API call durations.

D. Configure the AWS SDK with adaptive retry mode. Use AWS CloudTrail distributed tracing to monitor throttling events. Forgot my password

**Answer: **

**Timestamp: **

[View on ExamTopics](https://www.examtopics.com/discussions/amazon/view/384253-exam-aws-certified-generative-ai-developer-professional-aip-c01-topic-1-question-76-discussion/)

Comments: Naaser Most Recent 5 months, 29 days ago Selected Answer: B Handling Transient Errors: The AWS SDK standard retry mode with exponential backoff and jitter is the AWS-recommended way to handle transient errors and throttling. Jitter prevents &quot;thundering herd&quot; issues where multiple clients retry at the exact same time, further overwhelming the service.Distributed Tracing: AWS X-Ray provides end-to-back visibility across service boundaries (e.g., from an API Gateway to Lambda to Amazon Bedrock). It allows you to see exactly where delays or failures occur in the request lifecycle. upvoted 1 time Submit     Cancel ... Chibuzo1 6 months, 20 days ago Selected Answer: B The answer is B because exponential backoff with jitter is the AWS-recommended pattern for preventing cascading failures during throttling, and X-Ray with annotations is the native distributed tracing solution that spans service boundaries and enables correlation of performance issues with specific FM characteristics — together addressing every stated requirement with managed AWS services and minimal custom code. upvoted 1 time Submit     Cancel ... de1612d 7 months, 9 days ago Selected Answer: D Answer is D upvoted 1 time Submit     Cancel ... de1612d 7 months, 9 days ago Not D,Answer B upvoted 1 time Submit     Cancel ... GiorgioGss 8 months, 14 days ago Selected Answer: B Could be D but it is incomplete. upvoted 3 times Submit     Cancel ... 67bdb19 8 months, 22 days ago Selected Answer: A Pretty sure it's A. This pattern is very common. upvoted 1 time Submit     Cancel ...

----------------------------------------

## Exam AWS Certified Generative AI Developer - Professional AIP-C01 topic 1 question 77 discussion



A company is building a video analysis platform on AWS. The platform will analyze a large video archive by using Amazon Rekognition and Amazon Bedrock. The platform must comply with predefined privacy standards. The platform must also use secure model I/O, control foundation model (FM) access patterns, and provide an audit of who accessed what and when.

Which solution will meet these requirements?

A. Configure VPC endpoints for Amazon Bedrock model API calls. Implement Amazon Bedrock Guardrails to filter harmful or unauthorized content in prompts and responses. Use Amazon Bedrock trace events to track all agent and model invocations for auditing purposes. Export the traces to Amazon CloudWatch Logs as an audit record of model usage. Store all prompts and outputs in Amazon S3 with server-side encryption with AWS KMS keys (SSE-KMS).

B. Define access control by using IAM with attribute-based controls to map departments to specific permissions. Configure VPC endpoints for Amazon Bedrock model API calls. Use IAM condition keys to enforce specific GuardrailIdentifier and ModelId values. Configure AWS CloudTrail to capture management and data events for S3 objects and KMS key usage activities. Enable S3 server access logging to record detailed file-level interactions with the video archives. Send all CloudTrail logs to AWS CloudTrail Lake. Set up Amazon CloudWatch alarms to detect and alert on unexpected activity from Amazon Bedrock, Amazon Rekognition, and AWS KMS.

C. Restrict access to services by using VPC endpoint policies. Use AWS Config to track resource changes and compliance with security rules. Use server-side encryption with AWS KMS keys (SSE-KMS) to encrypt data at rest. Store the model's I/O in separate Amazon S3 buckets. Enable S3 server access logging to track file-level interactions.

D. Configure AWS CloudTrail Insights to analyze API call patterns across accounts and detect anomalous activity in Amazon Bedrock, Amazon Rekognition, Amazon S3, and AWS KMS. Deploy Amazon Macie to scan and classify the video archive. Use server-side encryption with AWS KMS keys (SSE-KMS) to encrypt all stored data. Configure CloudTrail to capture KMS API usage events for audit purposes. Configure Amazon EventBridge rules to process CloudTrail Insights anomalies and Macie findings. Use CloudWatch alarms to trigger automated notifications and security responses when potential security issues are detected. Forgot my password

**Answer: **

**Timestamp: **

[View on ExamTopics](https://www.examtopics.com/discussions/amazon/view/384254-exam-aws-certified-generative-ai-developer-professional-aip-c01-topic-1-question-77-discussion/)

Comments: Naaser Most Recent 5 months, 29 days ago Selected Answer: B Strict Access Patterns: Using IAM condition keys to enforce specific GuardrailIdentifier and ModelId ensures that users can only interact with approved models and that every request must pass through a security guardrail.Secure Model I/O: Implementing VPC endpoints ensures that traffic to Amazon Bedrock and Rekognition stays within the AWS network, never traversing the public internet.Comprehensive Audit Trail: Sending CloudTrail management and data events to CloudTrail Lake provides a centralized, immutable, and queryable audit record of &quot;who accessed what and when,&quot; including specific interactions with sensitive video data in S3. upvoted 1 time Submit     Cancel ... GiorgioGss 8 months, 14 days ago Selected Answer: B B is the most complete answer. upvoted 3 times Submit     Cancel ...

----------------------------------------

## Exam AWS Certified Generative AI Developer - Professional AIP-C01 topic 1 question 78 discussion



An insurance company uses existing Amazon SageMaker AI infrastructure to support a web-based application that allows customers to predict what their insurance premiums will be. The company stores customer data that is used to train the SageMaker AI model in an Amazon S3 bucket. The dataset is growing rapidly. The company wants a solution to continuously re-train the model. The solution must automatically re-train and re-deploy the model to the application when an employee uploads a new customer data file to the S3 bucket.

Which solution will meet these requirements?

A. Use AWS Glue to run an ETL job on each uploaded file. Configure the ETL job to use the AWS SDK to invoke the Sage Maker AI model endpoint. Use real-time inference with the endpoint to re-deploy the model after it is re-trained on the updated customer dataset.

B. Create an AWS Lambda function and webhook handlers to generate an event when an employee uploads a new file. Configure SageMaker Pipelines to re-deploy the model after it is re-trained on the updated customer dataset. Use Amazon EventBridge to create an event bus. Set the Lambda function event as the source and SageMaker Pipelines as the target.

C. Create an AWS Step Functions Express workflow with AWS SDK integrations to retrieve the customer data from the S3 bucket when an employee uploads a new file to the S3 bucket. Use a SageMaker Data Wrangler flow to export the data from the S3 bucket to SageMaker Autopilot. Use SageMaker Autopilot to re-deploy the model after it has been re-trained on the updated customer dataset.

D. Create an AWS Step Functions Standard workflow. Configure the first state to call an AWS Lambda function to respond when an employee uploads a new file to the S3 bucket. Use a pipeline in SageMaker Pipelines to re-deploy the model after it has been re-trained on the updated customer dataset. Use the next state in the workflow to run the pipeline when the first state receives a response. Forgot my password

**Answer: **

**Timestamp: **

[View on ExamTopics](https://www.examtopics.com/discussions/amazon/view/384274-exam-aws-certified-generative-ai-developer-professional-aip-c01-topic-1-question-78-discussion/)

Comments: Chibuzo1 Most Recent 5 months, 13 days ago Selected Answer: D Trigger: A Lambda function responds to the S3 upload event (via S3 Event Notifications) Orchestration: AWS Step Functions Standard workflow coordinates the sequence — Lambda fires first, then the next state kicks off the SageMaker Pipeline Re-training &amp; Re-deployment: SageMaker Pipelines natively handles both model retraining and redeployment in a structured, repeatable ML pipeline Reliability: Step Functions Standard workflows provide full execution history, error handling, and retry logic — appropriate for long-running ML jobs upvoted 1 time Submit     Cancel ... michele_scar 7 months, 20 days ago Selected Answer: D B mentions webhook and not standard S3 event. Why reinvent the wheel? Lambda as event source for EventBridge - This is backwards; Lambda would be the target, not the source upvoted 1 time Submit     Cancel ... Kraftzman 7 months, 22 days ago Selected Answer: D option B describes a &quot;webhook&quot; and &quot;event bus&quot; setup that is unnecessarily complex. While EventBridge is great, the description of &quot;Lambda function and webhook handlers&quot; to generate an event for an S3 upload is redundant because S3 can send events to EventBridge natively. It also lacks a central orchestrator for the retraining logic. upvoted 1 time Submit     Cancel ... ArunRav 7 months, 25 days ago Selected Answer: D S3 automatic triggering lambda, Sagemaker pipelines for model training and deployment, Step function to orchestration is the right approach. upvoted 2 times Submit     Cancel ... eesa 8 months, 7 days ago Selected Answer: B Trigger automático cuando se sube archivo a S3 Re-train model con nuevos datos Re-deploy model automáticamente después del entrenamiento Continuous retraining (proceso repetible) upvoted 2 times Submit     Cancel ... xyztest 8 months, 13 days ago Selected Answer: D Correct Answer upvoted 2 times Submit     Cancel ... GiorgioGss 8 months, 14 days ago Selected Answer: B It's B or D... hard one upvoted 1 time Submit     Cancel ...

----------------------------------------

## Exam AWS Certified Generative AI Developer - Professional AIP-C01 topic 1 question 79 discussion



A company uses Amazon Bedrock to implement a Retrieval Augmented Generation (RAG)-based system to serve medical information to users. The company needs to compare multiple chunking strategies, evaluate the generation quality of two foundation models (FMs), and enforce quality thresholds for deployment.

Which Amazon Bedrock evaluation configuration will meet these requirements?

A. Create a retrieve-only evaluation job that uses a supported version of Anthropic Claude Sonnet as the evaluator model. Configure metrics for context relevance and context coverage. Define deployment thresholds in a separate CI/CD pipeline.

B. Create a retrieve-and-generate evaluation job that uses custom precision at k metrics and an LLM-as-a-judge metric that uses a scale of 1-5. Include each chunking strategy in the evaluation dataset. Use a supported version of Anthropic Claude Sonnet to evaluate responses from both FMs.

C. Create a separate evaluation job for each chunking strategy and FM combination. Use Amazon Bedrock built-in metrics for correctness and completeness. Manually review scores before deployment approval.

D. Set up a pipeline that uses multiple retrieve-only evaluation jobs to assess retrieval quality. Create separate evaluation jobs for both FMs that use Amazon Nova Pro as the LLM-as-a-judge model. Evaluate based on faithfulness and citation precision metrics. Forgot my password

**Answer: **

**Timestamp: **

[View on ExamTopics](https://www.examtopics.com/discussions/amazon/view/384257-exam-aws-certified-generative-ai-developer-professional-aip-c01-topic-1-question-79-discussion/)

Comments: Chibuzo1 Most Recent 6 months, 20 days ago Selected Answer: B The answer is B because a single retrieve-and-generate evaluation job with chunking strategies embedded in the dataset, LLM-as-a-judge scoring on a quantitative scale, and Claude Sonnet as the evaluator covers all three requirements — chunking strategy comparison, dual-FM generation quality evaluation, and enforceable numerical deployment thresholds — in one cohesive, minimal-overhead configuration. upvoted 1 time Submit     Cancel ... GiorgioGss 8 months, 14 days ago Selected Answer: B benchmarks often favor Claude as a judge upvoted 1 time Submit     Cancel ...

----------------------------------------

## Exam AWS Certified Generative AI Developer - Professional AIP-C01 topic 1 question 80 discussion



A wildlife conservation agency operates zoos globally. The agency uses various sensors, trackers, and audiovisual recorders to monitor animal behavior. The agency wants to launch a generative AI (GenAI) assistant that can ingest multimodal data to study animal behavior.

The GenAI assistant must support natural language queries, avoid speculative behavioral interpretations, and maintain audit logs for ethical research audits.

Which solution will meet these requirements?

A. Ingest raw videos into Amazon Rekognition to detect animal postures and expressions. Use Amazon Data Firehose to stream sensor and GPS data into an Amazon S3 data lake. Prompt an Amazon Bedrock foundation model (FM) by using basic templates that are stored in AWS Systems Manager Parameter Store. Use IAM policies to control access. Use AWS CloudTrail for audit logging.

B. Use Amazon SageMaker Processing and Amazon Transcribe to pre-process multimodal data. Ingest summaries into an Amazon Bedrock Retrieval Augmented Generation (RAG) knowledge base. Apply Amazon Bedrock guardrails to restrict speculative outputs. Use AWS AppConfig to manage prompt templates. Use AWS CloudTrail to log research activity for audits.

C. Use Amazon OpenSearch Serverless to index behavioral logs and telemetry events. Use Amazon Comprehend to extract entities. Use Amazon Bedrock to build a layer to answer questions. Embed study summaries into OpenSearch Serverless documents. Use IAM to control access. Use AWS CloudTrail to log user interactions with the AI assistant.

D. Configure Amazon Q Business to federate data across Amazon S3, Amazon Kinesis, and Amazon SageMaker Feature Store. Configure Amazon EventBridge to invoke data ingestion jobs. Use custom AWS Lambda functions to filter large language model (LLM) outputs for ethical compliance before returning results to users. Forgot my password

**Answer: **

**Timestamp: **

[View on ExamTopics](https://www.examtopics.com/discussions/amazon/view/384265-exam-aws-certified-generative-ai-developer-professional-aip-c01-topic-1-question-80-discussion/)

Comments: Chibuzo1 Most Recent 6 months, 20 days ago Selected Answer: B The answer is B because it is the only option that addresses all three requirements with purpose-built AWS services: SageMaker + Transcribe for multimodal preprocessing, Bedrock RAG for grounded natural language querying, Bedrock Guardrails as an enforceable control against speculative outputs (the most discriminating requirement), and CloudTrail for immutable ethical audit logging. upvoted 1 time Submit     Cancel ... GiorgioGss 8 months, 14 days ago Selected Answer: B For all info you will need a RAG upvoted 2 times Submit     Cancel ...

----------------------------------------

## Exam AWS Certified Generative AI Developer - Professional AIP-C01 topic 1 question 81 discussion



A company uses an organization in AWS Organizations with all features enabled to manage multiple AWS accounts. Employees use Amazon Bedrock across multiple accounts. The company must prevent specific topics and proprietary information from being included in prompts to Amazon Bedrock models. The company must ensure that employees can use only approved Amazon Bedrock models. The company centrally manages IAM roles for employees.

Which combination of solutions will meet these requirements? (Choose two.)

A. Create an IAM permissions boundary for each employee's IAM role. Configure the permissions boundary to require an approved Amazon Bedrock guardrail identifier to invoke Amazon Bedrock models. Create an SCP that allows employees to use only approved models.

B. Create an SCP that allows employees to use only approved models. Configure the SCP to require employees to specify a guardrail identifier in calls to invoke an approved model.

C. Create an SCP that prevents an employee from invoking a model if a centrally deployed guardrail identifier is not specified in a call to the model. Create a permissions boundary on each employee's IAM role that allows each employee to invoke only approved models.

D. Use AWS CloudFormation to create a custom Amazon Bedrock guardrail that has a block filtering policy. Use stack sets to deploy the guardrail to each account in the organization.

E. Use AWS CloudFormation to create a custom Amazon Bedrock guardrail that has a mask filtering policy. Use stack sets to deploy the guardrail to each account in the organization. Forgot my password

**Answer: **

**Timestamp: **

[View on ExamTopics](https://www.examtopics.com/discussions/amazon/view/384251-exam-aws-certified-generative-ai-developer-professional-aip-c01-topic-1-question-81-discussion/)

Comments: 953bf6d Most Recent 20 days ago Selected Answer: AD The best choices are A and D, with a caveat: C also describes a technically viable enforcement pattern, making the question somewhat ambiguous. A: Enforce approved guardrails and approved models A supplies two permission controls: The employee role’s permissions boundary requires the approved guardrail, rather than allowing an arbitrary guardrail. Bedrock supports enforcing a specific guardrail through the bedrock:GuardrailIdentifier condition key. The SCP restricts model access to the company’s approved models. D: Create and deploy the blocking guardrails D supplies the actual content protection. Configure the guardrail with: Denied topics for prohibited subjects. Word filters or custom sensitive-information patterns for identifiable proprietary terms and information. CloudFormation supports these guardrail policies. Deploying the configuration across accounts provides the guardrails that A requires employees to use. Together: D creates the protection; A makes its use mandatory and restricts model access. Why not the others? B: Requires a guardrail identifier, not explicitly an approved guardrail identifier. Merely supplying any guardrail does not ensure the company’s required filters are applied. Specific-guardrail enforcement addresses that gap. C: Not inherently wrong. It reverses A’s placement of the controls: the SCP enforces the approved guardrail, while permissions boundaries restrict models. Properly implemented, C + D could also meet the requirements. The wording does not provide a strong technical reason to exclude it. E: Masking is not a replacement for blocking prohibited topics. Denied-topic policies return a blocked message when a prohibited topic is detected. Exam selection: A + D. Technical assessment: the overlap with C makes this an imperfect “choose two” question. upvoted 1 time Submit     Cancel ... Chibuzo1 6 months, 20 days ago Selected Answer: BD The answers are B and D because the SCP enforces both model approval and mandatory guardrail usage at the organization level, while CloudFormation StackSets deploys a consistent block-filtering guardrail across all accounts — together providing centralized, enforceable content governance and model access control across the entire AWS organization. upvoted 1 time Submit     Cancel ... Kraftzman 7 months, 20 days ago Selected Answer: BD Why the other options are incorrect: A &amp; C (Permissions Boundaries): While Permissions Boundaries can restrict what a user can do, they must be applied to each IAM role individually. In a multi-account environment where you already have AWS Organizations, SCPs are the more scalable and standard method for central governance. E (Masking Policy): As mentioned, masking is better for PII redaction in responses. Blocking is the appropriate mechanism for enforcing company policy on what can be sent to the model. upvoted 2 times Submit     Cancel ... eesa 8 months, 7 days ago Selected Answer: BD Simplicidad: Un mecanismo (SCP) vs dos (SCP + Boundary) Best practice AWS: SCP para controles organizacionales Menor overhead: No necesitas gestionar boundaries en cada rol upvoted 2 times Submit     Cancel ... xyztest 8 months, 11 days ago Selected Answer: BD Correct Answer upvoted 2 times Submit     Cancel ... GiorgioGss 8 months, 14 days ago Selected Answer: BD &quot;The company must prevent&quot; - D because E only mask. upvoted 2 times Submit     Cancel ... 67bdb19 8 months, 22 days ago Selected Answer: D Gotta say, D makes the most sense. It directly addresses the problem statement. upvoted 1 time Submit     Cancel ...

----------------------------------------

## Exam AWS Certified Generative AI Developer - Professional AIP-C01 topic 1 question 82 discussion



A company is designing an API for a generative AI (GenAI) application that uses a foundation model (FM) that is hosted on a managed model service. The API must stream responses to reduce latency, enforce token limits to manage compute resource usage, and implement retry logic to handle model timeouts and partial responses.

Which solution will meet these requirements with the LEAST operational overhead?

A. Integrate an Amazon API Gateway HTTP API with an AWS Lambda function to invoke Amazon Bedrock. Use Lambda response streaming to stream responses. Enforce token limits within the Lambda function. Implement retry logic for model timeouts by using Lambda and API Gateway timeout configurations.

B. Connect an Amazon API Gateway HTTP API directly to Amazon Bedrock. Simulate streaming by using client-side polling. Enforce token limits on the frontend. Configure retry behavior by using API Gateway integration settings.

C. Connect an Amazon API Gateway WebSocket API to an Amazon ECS service that hosts a containerized inference server. Stream responses by using the WebSocket protocol. Enforce token limits within Amazon ECS. Handle model timeouts by using ECS task lifecycle hooks and restart policies.

D. Integrate an Amazon API Gateway REST API with an AWS Lambda function that invokes Amazon Bedrock. Use Lambda response streaming to stream responses. Enforce token limits within the Lambda function. Implement retry logic by using Lambda and API Gateway timeout configurations. Forgot my password

**Answer: **

**Timestamp: **

[View on ExamTopics](https://www.examtopics.com/discussions/amazon/view/384276-exam-aws-certified-generative-ai-developer-professional-aip-c01-topic-1-question-82-discussion/)

Comments: a0c03ac Most Recent 2 months, 20 days ago Selected Answer: D Amazon API Gateway HTTP API - does not support streaming, while REST supports progressive delivery upvoted 1 time Submit     Cancel ... nebulane 5 months, 11 days ago Selected Answer: A answer is A since http api has lower latency than REST for streaming upvoted 1 time Submit     Cancel ... Chibuzo1 5 months, 13 days ago Selected Answer: A he critical architectural detail: HTTP API (not REST API) is the correct API Gateway type here because it supports Lambda response streaming and has lower latency and cost than REST API. upvoted 1 time Submit     Cancel ... Naaser 5 months, 29 days ago Selected Answer: A Managed Services: Amazon Bedrock is a fully managed service for foundation models, eliminating the need to manage infrastructure (unlike the ECS option in C).Response Streaming: Lambda response streaming (introduced for Node.js and Python) allows the API Gateway HTTP API to push partial payloads to the client as they are generated, satisfying the low-latency requirement.Least Operational Overhead: HTTP APIs are simpler and cheaper than REST APIs (Option D) and integrate seamlessly with Lambda for event-driven scaling. upvoted 1 time Submit     Cancel ... Kimzia 6 months, 8 days ago Selected Answer: D Response streaming is only supported for REST APIs. upvoted 4 times Submit     Cancel ... Wardove 7 months, 5 days ago Selected Answer: D only (D) uses REST API + Lambda response streaming, this IS valid as of November 2025. REST API is the ONLY API Gateway type that supports Lambda response streaming https://aws.amazon.com/about-aws/whats-new/2025/11/api-gateway-response-streaming-rest-apis/ upvoted 4 times Submit     Cancel ... Kraftzman 7 months, 22 days ago Selected Answer: D Option A (HTTP API): While HTTP APIs are often faster/cheaper, native payload response streaming is currently a feature exclusive to REST APIs in API Gateway. Attempting this with an HTTP API would require a Lambda Function URL proxy, adding an extra layer of configuration. upvoted 4 times Submit     Cancel ... attila9778 7 months, 28 days ago Selected Answer: D Amazon API Gateway HTTP API - does not support streaming, while REST supports progressive delivery upvoted 6 times Submit     Cancel ... Tanle 7 months, 29 days ago Selected Answer: A Correct ansswer upvoted 2 times Submit     Cancel ... taka5094 8 months, 3 days ago Selected Answer: A D: REST API does not natively support streaming responses. A: The HTTP API is more suitable for streaming use cases and can meet requirements with lower latency and lower cost. upvoted 2 times Submit     Cancel ... eesa 8 months, 7 days ago Selected Answer: A Stream responses para reducir latencia Enforce token limits para gestionar recursos Implement retry logic para timeouts y respuestas parciales LEAST operational overhead upvoted 2 times Submit     Cancel ... xyztest 8 months, 11 days ago Selected Answer: D Correct Answer upvoted 2 times Submit     Cancel ... GiorgioGss 8 months, 14 days ago Selected Answer: A &quot;LEAST operational overhead&quot; upvoted 2 times Submit     Cancel ...

----------------------------------------

## Exam AWS Certified Generative AI Developer - Professional AIP-C01 topic 1 question 83 discussion



A retail company is using Amazon Bedrock to develop a customer service AI assistant. Analysis shows that 70% of customer inquiries are simple product questions that a smaller model can effectively handle. However, 30% of inquiries are complex return policy questions that require advanced reasoning. The company wants to implement a cost-effective model selection framework to automatically route customer inquiries to appropriate models based on inquiry complexity. The framework must maintain high customer satisfaction and minimize response latency.

Which solution will meet these requirements with the LEAST implementation effort?

A. Create a multi-stage architecture that uses a small foundation model (FM) to classify the complexity of each inquiry. Route simple inquiries to a smaller, more cost-effective model. Route complex inquiries to a larger, more capable model. Use AWS Lambda functions to handle the routing logic.

B. Use Amazon Bedrock intelligent prompt routing to automatically analyze inquiries. Route simple product inquiries to smaller models, and route complex return policy inquiries to more capable larger models.

C. Implement a single-model solution that uses an Amazon Bedrock mid-sized foundation model (FM) with on-demand pricing. Include special instructions in model prompts to handle both simple and complex inquiries by using the same model.

D. Create separate Amazon Bedrock endpoints for simple and complex inquiries. Implement a rule-based routing system based on keyword detection. Use on-demand pricing for the smaller model and provisioned throughput for the larger model. Forgot my password

**Answer: **

**Timestamp: **

[View on ExamTopics](https://www.examtopics.com/discussions/amazon/view/384280-exam-aws-certified-generative-ai-developer-professional-aip-c01-topic-1-question-83-discussion/)

Comments: 2d5eb96 Most Recent 7 months, 3 days ago Selected Answer: B Bedrock Prompt routing is the best approach for cost and LEAST operations : https://aws.amazon.com/bedrock/intelligent-prompt-routing/ upvoted 1 time Submit     Cancel ... GiorgioGss 8 months, 14 days ago Selected Answer: B https://aws.amazon.com/blogs/machine-learning/multi-llm-routing-strategies-for-generative-ai-applications-on-aws/ upvoted 2 times Submit     Cancel ...

----------------------------------------

## Exam AWS Certified Generative AI Developer - Professional AIP-C01 topic 1 question 84 discussion



A specialty coffee company has a mobile app that generates personalized coffee roast profiles by using Amazon Bedrock with a three-stage prompt chain. The prompt chain converts user inputs into structured metadata, retrieves relevant logs for coffee roasts, and generates a personalized roast recommendation for each customer.

Users in multiple AWS Regions report inconsistent roast recommendations for identical inputs, slow inference during the retrieval step, and unsafe recommendations such as brewing at excessively high temperatures. The company must improve the stability of outputs for repeated inputs. The company must also improve app performance and the safety of the app's outputs. The updated solution must ensure 99.5% output consistency for identical inputs and achieve inference latency of less than 1 second. The solution must also block unsafe or hallucinated recommendations by using validated safety controls.

Which solution will meet these requirements?

A. Deploy Amazon Bedrock with provisioned throughput to stabilize inference latency. Apply Amazon Bedrock guardrails that have semantic denial rules to block unsafe outputs. Use Amazon Bedrock Prompt Management to manage prompts by using approval workflows.

B. Use Amazon Bedrock Agents to manage chaining. Log model inputs and outputs to Amazon CloudWatch Logs. Use logs from Amazon CloudWatch to perform A/B testing for prompt versions.

C. Cache prompt results in Amazon ElastiCache. Use AWS Lambda functions to pre-process metadata and to trace end-to-end latency. Use AWS X-Ray to identify and remediate performance bottlenecks.

D. Use Amazon Kendra to improve roast log retrieval accuracy. Store normalized prompt metadata within Amazon DynamoDB. Use AWS Step Functions to orchestrate multistep prompts. Forgot my password

**Answer: **

**Timestamp: **

[View on ExamTopics](https://www.examtopics.com/discussions/amazon/view/384293-exam-aws-certified-generative-ai-developer-professional-aip-c01-topic-1-question-84-discussion/)

Comments: Chibuzo1 Most Recent 6 months, 20 days ago Selected Answer: A The answer is A because it is the only option that directly addresses all three requirements with purpose-built Amazon Bedrock native capabilities: Prompt Management with approval workflows for consistent, governed prompt execution; Provisioned Throughput for guaranteed sub-second latency; and Guardrails with semantic denial rules for validated, enforceable safety controls that block unsafe or hallucinated recommendations before they reach users. upvoted 1 time Submit     Cancel ... 2d5eb96 7 months, 3 days ago Selected Answer: A Only option which include Guardrails which is one of the requirements upvoted 1 time Submit     Cancel ... eesa 8 months, 7 days ago Selected Answer: A High consistency + low latency + safety controls + prompt chain → Provisioned Throughput + Bedrock Guardrails (semantic denial) + Prompt Management ✅ Garantiza latency &lt; 1s (provisioned throughput) ✅ Logra 99.5% consistency (low temp + provisioned + versioning) ✅ Bloquea unsafe outputs (guardrails con semantic denial) ✅ Gestiona prompts profesionalmente (approval workflows) ✅ Usa features nativas de Bedrock (menos complejidad) upvoted 2 times Submit     Cancel ... GiorgioGss 8 months, 14 days ago Selected Answer: A Other options are either overhead or add latency upvoted 2 times Submit     Cancel ...

----------------------------------------

## Exam AWS Certified Generative AI Developer - Professional AIP-C01 topic 1 question 85 discussion



A company is developing a generative AI (GenAI) application by using Amazon Bedrock. The application will analyze patterns and relationships in the company's data. The application will process millions of new data points daily across AWS Regions in Europe, North America, and Asia before storing the data in Amazon S3.

The application must comply with local data protection and storage regulations. Data residency and processing must occur within the same continent. The application must also maintain audit trails of the application's decision-making processes and provide data classification capabilities.

Which solution will meet these requirements?

A. Deploy the application in each Region with local IAM policies. Use Amazon Bedrock cross-Region inference to distribute the workload. Use Amazon CloudWatch to log AI decision-making processes and data processing activities. Manually track compliance certifications across Regions.

B. Use SCPs with AWS Organizations to manage location-specific permissions. Use AWS CloudTrail immutable logs to audit the decision-making processes. Import a custom model into Amazon Bedrock and deploy the model to each Region.

C. Use Amazon S3 Object Lock with Region-specific S3 bucket policies. Pre-process the data points within the Region based on geographic origin before sending the data points to Amazon Bedrock. Use Amazon Macie to classify the data. Use AWS CloudTrail immutable logs to audit the decision-making processes.

D. Create separate AWS accounts for each Region with individual compliance frameworks. Use Amazon SageMaker AI with custom monitoring to track model performance and compliance with data residency requirements. Create manual reports for each regulatory jurisdiction. Forgot my password

**Answer: **

**Timestamp: **

[View on ExamTopics](https://www.examtopics.com/discussions/amazon/view/384256-exam-aws-certified-generative-ai-developer-professional-aip-c01-topic-1-question-85-discussion/)

Comments: Chibuzo1 Most Recent 4 months, 24 days ago Selected Answer: C S3 Object Lock enforces immutable retention policies required by regulations like GDPR (Europe), CCPA (North America), and PDPA (Asia) upvoted 1 time Submit     Cancel ... eesa 8 months, 7 days ago Selected Answer: C Data residency: Datos deben permanecer en el mismo continente Local data protection regulations (GDPR Europa, etc.) Millions of data points daily en múltiples regiones Audit trails de decision-making processes Data classification capabilities Processing within same continent upvoted 2 times Submit     Cancel ... GiorgioGss 8 months, 14 days ago Selected Answer: C A - Bedrock cross-Region inference explicitly routes requests across regions B - operational complexity with no clear benefit D - separate accounts per region with manual compliance reports is the highest-overhead solution possible upvoted 2 times Submit     Cancel ...

----------------------------------------

## Exam AWS Certified Generative AI Developer - Professional AIP-C01 topic 1 question 86 discussion



A financial services company is deploying a generative AI (GenAI) application that uses Amazon Bedrock to assist customer service representatives to provide personalized investment advice to customers. The company must implement a comprehensive governance solution that follows responsible AI practices and meets regulatory requirements.



The solution must detect and prevent hallucinations in recommendations. The solution must have safety controls for customer interactions. The solution must also monitor model behavior drift in real time and maintain audit trails of all prompt-response pairs for regulatory review.



The company must deploy the solution within 60 days. The solution must integrate with the company's existing compliance dashboard and respond to customers within 200 ms.



Which solution will meet these requirements with the LEAST operational overhead?

A. Configure Amazon Bedrock guardrails to apply custom content filters and toxicity detection. Use Amazon Bedrock Model Evaluation to detect hallucinations. Store prompt-response pairs in Amazon DynamoDB to capture audit trails and set a TTL. Integrate Amazon CloudWatch custom metrics with the existing compliance dashboard.

B. Deploy Amazon Bedrock and use AWS PrivateLink to access the application securely. Use AWS Lambda functions to implement custom prompt validation. Store prompt-response pairs in an Amazon S3 bucket and configure S3 Lifecycle policies. Create custom Amazon CloudWatch dashboards to monitor model performance metrics.

C. Use Amazon Bedrock Agents and Amazon Bedrock Knowledge Bases to ground responses. Use Amazon Bedrock Guardrails to enforce content safety. Use Amazon OpenSearch Service to store and index prompt-responses pairs. Integrate OpenSearch Service with Amazon QuickSight to create compliance reports and to detect model behavior drift.

D. Use Amazon SageMaker Model Monitor to detect model behavior drift. Use AWS WAF to filter content. Store customer interactions in an encrypted Amazon RDS database. Use Amazon API Gateway to create custom HTTP APIs to integrate with the compliance dashboard. Forgot my password

**Answer: **

**Timestamp: **

[View on ExamTopics](https://www.examtopics.com/discussions/amazon/view/402483-exam-aws-certified-generative-ai-developer-professional-aip-c01-topic-1-question-86-discussion/)

Comments: steve_stoca Most Recent 4 months, 4 days ago Selected Answer: A Both C and A are a good approach. But I think A is the right answer because the question explicitly says that the solution must integrate with the existing dashboard, and answer C includes building a new dashboard. upvoted 1 time Submit     Cancel ... nebulane 5 months, 11 days ago Selected Answer: C answer is C since Bedrock Model Evaluations cannot satisfy the sub-200 ms requirement upvoted 1 time Submit     Cancel ... nebulane 5 months, 11 days ago also Bedrock Model evaluations cannot prevent hallucinations only detect them upvoted 1 time Submit     Cancel ... Chibuzo1 6 months, 18 days ago Selected Answer: A The answer is A because it exclusively uses Amazon Bedrock-native services — Guardrails, Model Evaluation, CloudWatch — paired with DynamoDB's serverless, low-latency storage. Every component is fully managed, configurable without custom code, deployable within weeks rather than months, and purpose-built for the specific requirements: hallucination detection, safety controls, drift monitoring, audit trails, sub-200ms latency, and compliance dashboard integration. upvoted 1 time Submit     Cancel ... jakie22332 6 months, 23 days ago Selected Answer: C C is only option that meets all requirements upvoted 1 time Submit     Cancel ... 2d5eb96 7 months, 3 days ago Selected Answer: A C is close but doesn't meet the 200ms , using RAG+Opensearch+Agent Orchestration upvoted 2 times Submit     Cancel ... de1612d 7 months, 5 days ago Selected Answer: A Answer is A upvoted 1 time Submit     Cancel ... Wardove 7 months, 5 days ago Selected Answer: C C wins because Bedrock Knowledge Bases grounds responses to prevent hallucinations at generation time (A only detects them afterward via batch Model Evaluation), OpenSearch retains audit data indefinitely (A's DynamoDB TTL deletes it), and OpenSearch+QuickSight provides real-time drift detection (A's CloudWatch metrics don't). upvoted 1 time Submit     Cancel ...

----------------------------------------

## Exam AWS Certified Generative AI Developer - Professional AIP-C01 topic 1 question 87 discussion



A company uses AWS Lake Formation to set up a data lake that contains databases and tables for multiple business units across multiple AWS Regions. The company wants to use a foundation model (FM) through Amazon Bedrock to perform fraud detection. The FM must ingest sensitive financial data from the data lake. The data includes some customer personally identifiable information (PM).



The company must design an access control solution that prevents PI I from appearing in a production environment. The FM must access only authorized data subsets that have PH redacted from specific data columns. The company must capture audit trails for all data access.



Which solution will meet these requirements?

A. Create a separate dataset in a separate Amazon S3 bucket for each business unit and Region combination. Configure S3 bucket policies to control access based on IAM roles that are assigned to FM training instances. Use S3 access logs to track data access.

B. Configure the FM to authenticate by using IAM roles and Lake Formation permissions based on LF-Tag expressions. Define business units and Regions as LF-Tags that are assigned to databases and tables. Use AWS CloudTrail to collect comprehensive audit trails of data access.

C. Use direct IAM principal grants on specific databases and tables in Lake Formation. Create a custom application layer that logs access requests and further filters sensitive columns before sending data to the FM.

D. Configure the FM to request temporary credentials from AWS STS. Access the data by using presigned S3 URLs that are generated by an API that applies business unit and Regional filters. Use AWS CloudTrail to collect comprehensive audit trails of data access. Forgot my password

**Answer: **

**Timestamp: **

[View on ExamTopics](https://www.examtopics.com/discussions/amazon/view/402484-exam-aws-certified-generative-ai-developer-professional-aip-c01-topic-1-question-87-discussion/)

Comments: Chibuzo1 Most Recent 6 months, 18 days ago Selected Answer: B The answer is B because AWS Lake Formation with LF-Tag expressions is purpose-built for exactly this use case — scalable, tag-driven access control across multi-dimensional data lake architectures with native column-level PII protection, no custom application code required, and full CloudTrail integration for the immutable audit trails that financial services regulators require. upvoted 1 time Submit     Cancel ... de1612d 7 months, 5 days ago Selected Answer: B Answer is B upvoted 1 time Submit     Cancel ...

----------------------------------------

## Exam AWS Certified Generative AI Developer - Professional AIP-C01 topic 1 question 88 discussion



A company runs a Retrieval Augmented Generation (RAG) application that uses Amazon Bedrock Knowledge Bases to perform regulatory compliance queries. The application uses the RetrieveAndGenerateStream API. The application retrieves relevant documents from a knowledge base that contains more than 50,000 regulatory documents, legal precedents, and policy updates.



The RAG application is producing suboptimal responses because the initial retrieval often returns semantically similar but contextually irrelevant documents. The poor responses are causing model hallucinations and incorrect regulatory guidance. The company needs to improve the performance of the RAG application so it returns more relevant documents.



Which solution will meet this requirement with the LEAST operational overhead?

A. Deploy an Amazon SageMaker endpoint to run a fine-tuned ranking model. Use an Amazon API Gateway REST API to route requests. Configure the application to make requests through the REST API to rerank the results.

B. Use Amazon Comprehend to classify documents and apply relevance scores. Integrate the RAG application’s reranking process with Amazon Textract to run document analysis. Use Amazon Neptune to perform graph-based relevance calculations.

C. Implement a retrieval pipeline that uses the Amazon Bedrock Knowledge Bases Retrieve API to perform initial document retrieval. Call the Amazon Bedrock Rerank API to rerank the results. Invoke the InvokeModelWithResponseStream operation to generate responses.

D. Use the latest Amazon reranker model through the reranking configuration within Amazon Bedrock Knowledge Bases. Use the model to improve document relevance scoring and to reorder results based on contextual assessments. Forgot my password

**Answer: **

**Timestamp: **

[View on ExamTopics](https://www.examtopics.com/discussions/amazon/view/402485-exam-aws-certified-generative-ai-developer-professional-aip-c01-topic-1-question-88-discussion/)

Comments: Chibuzo1 Most Recent 5 months, 8 days ago Selected Answer: D Option D uses the native reranking configuration built directly into Amazon Bedrock Knowledge Bases, which means: Zero additional infrastructure — no separate endpoints, APIs, or services to deploy or manage The reranker model is configured directly within the Knowledge Base settings It integrates seamlessly with the existing RetrieveAndGenerateStream API the company is already using Amazon handles all the underlying orchestration between retrieval and reranking automatically upvoted 1 time Submit     Cancel ... de1612d 7 months, 5 days ago Selected Answer: D Answer is D! upvoted 1 time Submit     Cancel ...

----------------------------------------

## Exam AWS Certified Generative AI Developer - Professional AIP-C01 topic 1 question 89 discussion



A company is developing a customer communication platform that uses an AI assistant powered by an Amazon Bedrock foundation model (FM). The AI assistant summarizes customer messages and generates initial response drafts.



The company wants to use Amazon Comprehend to implement layered content filtering. The layered content filtering must prevent sharing of offensive content, protect customer privacy, and detect potential inappropriate advice solicitation. Inappropriate advice solicitation includes requests for unethical practices, harmful activities, or manipulative behaviors. The solution must maintain acceptable overall response times, so all pre-processing filters must finish before the content reaches the FM.



Which solution will meet these requirements?

A. Use parallel processing with asynchronous API calls. Use toxicity detection for offensive content. Use prompt safety classification for inappropriate advice solicitation. Use personally identifiable information (PII) detection without redaction.

B. Use custom classification to build an FM that detects offensive content and inappropriate advice solicitation. Apply personally identifiable information (PII) detection as a secondary filter only when messages pass the custom classifier.

C. Deploy a multi-stage process. Configure the process to use prompt safety classification first, then toxicity detection on safe prompts only, and finally personally identifiable information (PII) detection in streaming mode. Route flagged messages through Amazon EventBridge for human review.

D. Use toxicity detection with thresholds configured to 0.5 for all categories. Use parallel processing for both prompt safety classification and personally identifiable information (PII) detection with entity redaction. Apply Amazon CloudWatch alarms to filter metrics. Forgot my password

**Answer: **

**Timestamp: **

[View on ExamTopics](https://www.examtopics.com/discussions/amazon/view/402486-exam-aws-certified-generative-ai-developer-professional-aip-c01-topic-1-question-89-discussion/)

Comments: mosun Most Recent 2 months, 3 days ago Selected Answer: A Answer is A, because option D has fixed value - 0.5 for all categories upvoted 1 time Submit     Cancel ... dbcert87 3 months, 29 days ago Selected Answer: C 1/ Question asked layered filtering which rules our parellel processing 2/ Hard coding .5 for all categories is not sage and AWS best practice 3/Sequential filtering is best if complete before inference. upvoted 1 time Submit     Cancel ... OlaFemi 4 months, 11 days ago Selected Answer: D A is not correct, it says Use personally identifiable information (PII) detection without redaction. and a redaction is needed upvoted 2 times Submit     Cancel ... Naaser 5 months, 29 days ago Selected Answer: A Lowest Latency: Using parallel processing with asynchronous API calls ensures that all three Amazon Comprehend filters (Toxicity, Prompt Safety, and PII) run simultaneously. This prevents cumulative &quot;sequential&quot; latency, meeting the requirement for acceptable response times.Complete Coverage:Toxicity Detection: Directly addresses the requirement to filter offensive content.Prompt Safety Classification: Specifically designed to detect inappropriate advice solicitation (unethical, harmful, or manipulative requests).PII Detection: Protects customer privacy by identifying sensitive data before it reaches the foundation model. upvoted 3 times Submit     Cancel ... jyrajan69 6 months, 18 days ago Selected Answer: A Option D is not the right answer as it required hard coding the 0.5 as toxicity thresh hold, better option is A upvoted 1 time Submit     Cancel ... Chibuzo1 6 months, 18 days ago Selected Answer: D The answer is D because it correctly pairs all three required Comprehend capabilities with the right configurations — toxicity detection with a calibrated threshold, prompt safety classification, and PII detection with entity redaction — running in parallel to minimize pre-processing latency, ensuring all filters complete before the FM receives any content, and maintaining operational visibility through CloudWatch alarms. upvoted 2 times Submit     Cancel ... de1612d 7 months, 5 days ago Selected Answer: D Answer is D upvoted 1 time Submit     Cancel ...

----------------------------------------

## Exam AWS Certified Generative AI Developer - Professional AIP-C01 topic 1 question 90 discussion



A software as a service (SaaS) company is building a recommendation model that uses Amazon SageMaker AI to support an application that recommends airline cabin upgrades to customers. The company will host SageMaker AI models on Amazon Bedrock by using Amazon Bedrock Custom Model Import. Airline companies will use the application to send customized offers to customers.



The model must examine the travel history of customers to help make more relevant recommendations. The company stores customer travel history data in an Amazon RDS database. The company must ensure that the application delivers consistent, relevant, and accurate results across multiple airlines and customer populations.



Which solution will meet these requirements?

A. Use Amazon Bedrock Knowledge Bases to implement a RAG architecture to analyze customer travel history data to give the application semantic search capabilities. Use the semantic search capabilities to retrieve relevant booking patterns, preferences, and loyalty information to generate personalized cabin upgrade recommendations. Apply Amazon Bedrock guardrails to filter content. Use AWS Step Functions and AWS Lambda functions to orchestrate validation workflows to reduce hallucinations.

B. Implement text-to-SQL transformations with SQL validations to accurately retrieve relevant booking patterns, preferences, and loyalty information from the RDS database. Use the results to generate personalized cabin upgrade recommendations. Apply Amazon Bedrock guardrails to filter content. Use AWS Step Functions and AWS Lambda functions to orchestrate validation workflows to reduce hallucinations.

C. Use Amazon OpenSearch Service to implement vector searches of customer travel history embeddings. Use the vector searches to give the application the ability to perform similarity-based retrieval of booking patterns, preferences, and loyalty information to generate personalized cabin upgrade recommendations. Apply Amazon Bedrock guardrails to filter responses. Use confidence scoring and semantic similarity searches to reduce hallucinations.

D. Implement text-to-SQL transformations with SQL validations to accurately retrieve relevant booking patterns, preferences, and loyalty information from the RDS database. Use the results to generate personalized cabin upgrade recommendations. Apply Amazon Bedrock guardrails to filter responses. Use confidence scoring and semantic similarity searches to reduce hallucinations. Forgot my password

**Answer: **

**Timestamp: **

[View on ExamTopics](https://www.examtopics.com/discussions/amazon/view/402487-exam-aws-certified-generative-ai-developer-professional-aip-c01-topic-1-question-90-discussion/)

Comments: esrbthn 1 month, 20 days ago Selected Answer: D Aws official skillsbuilder practice test confirms option D upvoted 1 time Submit     Cancel ... Chibuzo1 6 months, 18 days ago Selected Answer: D The answer is D because it correctly matches the data architecture — text-to-SQL for structured RDS relational data with SQL validation for query correctness — applies Bedrock guardrails for content safety, and uses confidence scoring with semantic similarity as lightweight, purpose-built hallucination reduction mechanisms that require no additional infrastructure, delivering consistent, accurate recommendations across all airline customer populations with the least operational overhead. upvoted 2 times Submit     Cancel ... Chibuzo1 Most Recent 4 months, 14 days ago Why B is correct The scenario has two critical requirements that point toward a specific architecture: 1. The data lives in Amazon RDS (a relational database) The customer travel history is structured, relational data — booking records, loyalty tiers, preferences, flight history. This data is already organized in tables with defined schemas. The most accurate and consistent way to query structured RDS data is text-to-SQL, which translates the model's natural language reasoning into precise SQL queries. This avoids the lossy conversion of structured data into vector embeddings. upvoted 1 time Submit     Cancel ... 2d5eb96 7 months, 3 days ago Selected Answer: B - Consistency - Text-to-SQL - Hallucination upvoted 1 time Submit     Cancel ... de1612d 7 months, 5 days ago Selected Answer: B Answer is B upvoted 1 time Submit     Cancel ... Wardove 7 months, 5 days ago Selected Answer: B B wins because structured RDS data requires deterministic SQL validation via Step Functions + Lambda, while D's &quot;confidence scoring and semantic similarity searches&quot; are vector/unstructured retrieval techniques that make no sense applied to factual tabular query results. upvoted 2 times Submit     Cancel ...

----------------------------------------

## Exam AWS Certified Generative AI Developer - Professional AIP-C01 topic 1 question 91 discussion



A company is using Amazon Bedrock to develop a customer support AI assistant. The AI assistant must respond to customer questions about their accounts. The AI assistant must not expose personal information in responses. The company must comply with data residency policies by ensuring that all processing occurs within the same AWS Region where each customer is located.



The company wants to evaluate how effective the AI assistant is at preventing the exposure of personal information before the company makes the AI assistant available to customers.



Which solution will meet these requirements?

A. Configure a cross-Region Amazon Bedrock guardrail to apply sensitive information filters. Set the guardrail to detect mode during development and testing. Switch to block mode for production deployment.

B. Configure an Amazon Bedrock guardrail to apply sensitive information filters. Set the guardrail to mask mode during development and testing. Switch to block mode for production deployment. Deploy a copy of the guardrail to each Region where the company operates.

C. Configure an Amazon Bedrock guardrail to apply content and topic filters. Set the guardrail to detect mode during development, testing, and production. Disable invocation logging for the Amazon Bedrock model.

D. Configure a cross-Region Amazon Bedrock guardrail to apply a set of content and word filters. Set the guardrail to detect mode during development and testing. Switch to mask mode for production deployment. Forgot my password

**Answer: **

**Timestamp: **

[View on ExamTopics](https://www.examtopics.com/discussions/amazon/view/402488-exam-aws-certified-generative-ai-developer-professional-aip-c01-topic-1-question-91-discussion/)

Comments: Chibuzo1 Most Recent 6 months, 18 days ago Selected Answer: B The answer is B because it is the only option that: uses sensitive information filters (the correct filter type for PII), applies mask mode during development (enabling meaningful effectiveness evaluation), switches to block mode for production (maximum protection), and deploys Region-specific guardrail copies (satisfying data residency by ensuring all processing stays within each customer's local Region). upvoted 2 times Submit     Cancel ... de1612d 7 months, 9 days ago Selected Answer: B And is B upvoted 1 time Submit     Cancel ...

----------------------------------------

## Exam AWS Certified Generative AI Developer - Professional AIP-C01 topic 1 question 92 discussion



A university recently digitized a collection of archival documents, academic journals, and manuscripts. The university stores the digital files in an AWS Lake Formation data lake.



The university hires a GenAI developer to build a solution to allow users to search the digital files by using text queries. The solution must return journal abstracts that are semantically similar to a user's query. Users must be able to search the digitized collection based on text and metadata that is associated with the journal abstracts. The metadata of the digitized files does not contain keywords. The solution must match similar abstracts to one another based on the similarity of their text. The data lake contains fewer than 1 million files.



Which solution will meet these requirements with the LEAST operational overhead?

A. Use Amazon Titan Embeddings in Amazon Bedrock to create vector representations of the digitized files. Store embeddings in the OpenSearch Neural Plugin for Amazon OpenSearch Service.

B. Use Amazon Comprehend to extract topics from the digitized files. Store the topics and file metadata in an Amazon Aurora PostgreSQL database. Query the abstract metadata against the data in the Aurora database.

C. Use Amazon SageMaker AI to deploy a sentence-transformer model. Use the model to create vector representations of the digitized files. Store embeddings in an Amazon Aurora PostgreSQL database that has the pgvector extension.

D. Use Amazon Titan Embeddings in Amazon Bedrock to create vector representations of the digitized files. Store embeddings in an Amazon Aurora PostgreSQL Serverless database that has the pgvector extension. Forgot my password

**Answer: **

**Timestamp: **

[View on ExamTopics](https://www.examtopics.com/discussions/amazon/view/402489-exam-aws-certified-generative-ai-developer-professional-aip-c01-topic-1-question-92-discussion/)

Comments: Chibuzo1 Most Recent 6 months, 18 days ago Selected Answer: D The answer is D because it pairs Amazon Bedrock's fully managed Titan Embeddings API (zero infrastructure for embedding generation) with Aurora PostgreSQL Serverless and pgvector (zero infrastructure management for vector storage and search) — delivering complete semantic similarity search across text and metadata for a sub-million document collection with the absolute minimum operational overhead, while naturally handling the absence of keywords through semantic vector representations. upvoted 1 time Submit     Cancel ... 2d5eb96 7 months, 3 days ago Selected Answer: D Least operational overhead definitely upvoted 1 time Submit     Cancel ... de1612d 7 months, 7 days ago Selected Answer: D Gemini answer is D upvoted 1 time Submit     Cancel ...

----------------------------------------

## Exam AWS Certified Generative AI Developer - Professional AIP-C01 topic 1 question 93 discussion



A financial services company wants to use Amazon Bedrock foundation models (FMs) to analyze call center recordings. When calls end, the call center stores recordings as MP3 files in an Amazon S3 bucket. The company needs to generate summaries and sentiment analysis for the recordings in a structured format as soon as new files are created. The recordings average 20 MB in size.



Which combination of solutions will meet these requirements? (Choose two.)

A. Use AWS Step Functions to orchestrate a workflow to process the recordings. Configure steps to invoke Amazon Transcribe to convert audio to text, validate job completion, and to invoke an AWS Lambda function to process the text by using Amazon Bedrock FMs to generate structured analysis output.

B. Use AWS Step Functions to orchestrate a workflow to process the recordings. Configure steps to invoke Amazon Transcribe to convert audio to text, validate job completion, and to directly invoke Amazon Bedrock FMs to generate summaries and sentiment analysis in JSON format.

C. Use AWS Step Functions to orchestrate a workflow to process the recordings. Configure steps to invoke Amazon Transcribe to convert audio to text, validate job completion, and to invoke an AWS Lambda function to create a prompt to invoke Amazon Bedrock FMs to generate structured analysis output.

D. Configure the source S3 bucket to send events to Amazon EventBridge. Create an EventBridge rule to invoke the Step Functions workflow when an object is created in the bucket.

E. Configure the source S3 bucket to send notifications to the Step Functions workflow when an object is created in the bucket. Forgot my password

**Answer: **

**Timestamp: **

[View on ExamTopics](https://www.examtopics.com/discussions/amazon/view/402490-exam-aws-certified-generative-ai-developer-professional-aip-c01-topic-1-question-93-discussion/)

Comments: ericcloud20 Most Recent 21 days ago Selected Answer: BD Why B: the processing Transcribe step: Bedrock models analyze text, not MP3 audio, so the recording has to be transcribed first. Step Functions starts the Transcribe job and loops to check its status until the job is done. Calling Bedrock directly: Step Functions has a built-in integration for Bedrock InvokeModel. The state machine can build the prompt from the transcript itself, asking for a JSON object with summary and sentiment fields, and call the model with no Lambda in between. That’s less code to write, deploy, and maintain. Size limits: the 20 MB MP3 goes to Transcribe by its S3 location, not through the workflow payload, so its size doesn’t matter. The Bedrock integration can also read model input from an S3 location, so a long transcript doesn’t run into Step Functions’ state payload size limit. Why D: the trigger S3 event notifications can only go to four destinations: SNS topics, SQS queues, Lambda, and EventBridge. Step Functions isn’t one of them. Sending events to EventBridge with a rule that targets the state machine is the standard way to start a workflow “as soon as new files are created.” upvoted 1 time Submit     Cancel ... nebulane 5 months, 11 days ago Selected Answer: CD CD because you need to prompt the FM to generate the structured data aside from the raw mp3 text upvoted 1 time Submit     Cancel ... Chibuzo1 6 months, 18 days ago Selected Answer: CD The answers are C and D because together they form a complete, production-ready solution: EventBridge detects new MP3 files and triggers Step Functions (D), which orchestrates Transcribe for audio-to-text conversion, uses Lambda to construct a structured prompt from the transcript, and invokes Bedrock FMs to generate consistent JSON-formatted summaries and sentiment analysis (C) — all fully event-driven with proper async job handling and no manual intervention. upvoted 1 time Submit     Cancel ... Oldgun99 6 months, 28 days ago Selected Answer: CD Amazon Transcribe produces raw transcript text Raw transcript text cannot be directly passed to Bedrock FMs and reliably produce structured output — it requires a carefully engineered prompt upvoted 1 time Submit     Cancel ... 2d5eb96 7 months, 3 days ago Selected Answer: AD Option A provides complete orchestration with Lambda for prompt engineering, Bedrock invocation, and structured output processing Option D uses EventBridge for reliable, scalable event routing from S3 to Step Functions with advanced filtering capabilities upvoted 1 time Submit     Cancel ... Wardove 7 months, 5 days ago Selected Answer: CD CD wins because Transcribe outputs JSON with metadata (not a ready Bedrock prompt) and transcripts from 20 MB MP3s exceed Step Functions' 256 KiB state payload limit — so Lambda is required to read the transcript from S3, craft a proper prompt, and invoke Bedrock internally (C), while S3 must route events through EventBridge since Step Functions isn't a direct S3 notification destination (D). upvoted 1 time Submit     Cancel ... de1612d 7 months, 7 days ago Selected Answer: AD Gemini answer is A,D upvoted 1 time Submit     Cancel ...

----------------------------------------

## Exam AWS Certified Generative AI Developer - Professional AIP-C01 topic 1 question 94 discussion



A medical device company wants to feed reports of medical procedures that used the company's devices into an AI assistant. To protect patient privacy, the AI assistant must expose patient personally identifiable information (PII) only to surgeons. The AI assistant must redact PII for engineers. The AI assistant must reference only medical reports that are less than 3 years old.



The company stores reports in an Amazon S3 bucket as soon as each report is published. The company has already set up an Amazon Bedrock knowledge base. The AI assistant uses Amazon Cognito to authenticate users.



Which solution will meet these requirements?

A. Enable Amazon Macie PII detection on the S3 bucket. Use an S3 trigger to invoke an AWS Lambda function that redacts PII from the reports. Configure the Lambda function to delete outdated documents from the bucket and to invoke knowledge base syncing.

B. Invoke an AWS Lambda function to sync the S3 bucket and the knowledge base when a new report is uploaded to the bucket. Use a second Lambda function to invoke Amazon Comprehend to detect and redact PII if a user is part of the engineer Cognito user group. Set up an S3 Lifecycle configuration to remove reports that are older than 3 years from the bucket.

C. Set up an S3 Lifecycle configuration on the bucket to remove reports that are older than 3 years. Schedule an AWS Lambda function to run daily syncs between the bucket and the knowledge base. When users interact with the AI assistant, call the ApplyGuardrail configuration that matches the user's Cognito user group to redact PII from the agent’s responses if appropriate.

D. Create a second knowledge base. Set up an S3 Lifecycle configuration on the bucket to remove reports that are older than 3 years. Invoke an AWS Lambda function that syncs the bucket with the original knowledge base when a new report is uploaded to the bucket. Use Amazon Comprehend to detect and redact PII before syncing the bucket with the second knowledge base. When a user interacts with the AI assistant, redirect the model to the appropriate knowledge base depending on the user’s Cognito user group. Forgot my password

**Answer: **

**Timestamp: **

[View on ExamTopics](https://www.examtopics.com/discussions/amazon/view/402491-exam-aws-certified-generative-ai-developer-professional-aip-c01-topic-1-question-94-discussion/)

Comments: Chibuzo1 Most Recent 5 months, 6 days ago Selected Answer: D D is correct because it separates the data at the knowledge base level (the safest boundary), uses event-driven syncing, and leverages Cognito group membership to route users to the appropriate data — each piece working within its intended design upvoted 2 times Submit     Cancel ... Oldgun99 6 months, 28 days ago Selected Answer: C the user's Cognito user group to redact PII from the agent’s responses if appropriate. upvoted 3 times Submit     Cancel ... 2d5eb96 7 months, 3 days ago Selected Answer: C ApplyGuardrail is the logic here, upvoted 2 times Submit     Cancel ... de1612d 7 months, 7 days ago Selected Answer: D Gemini answer is D upvoted 1 time Submit     Cancel ... de1612d 7 months, 4 days ago Sorry, it seems the correct answer is c. upvoted 1 time Submit     Cancel ...

----------------------------------------

## Exam AWS Certified Generative AI Developer - Professional AIP-C01 topic 1 question 95 discussion



A large ecommerce company has deployed a foundation model (FM) to generate product descriptions. The company's engineering team monitors technical metrics such as token usage, latency, and error rates by using Amazon CloudWatch. The company's marketing team tracks business metrics such as conversion rates and revenue impact in its own systems.



The company needs a unified observability solution that correlates technical performance with business outcomes. The solution must provide automatic alerts to stakeholders when operational metrics indicate degradation. The solution must provide comprehensive visibility across both technical and business metrics.



Which solution will meet these requirements?

A. Create CloudWatch dashboards that include technical metrics and imported business metrics. Configure CloudWatch composite alarms that combine technical data and business data. Use Amazon SNS to set up notifications to stakeholders.

B. Use Amazon Managed Grafana to visualize technical metrics from CloudWatch with business metrics from external sources. Configure Amazon Managed Grafana alerts to invoke AWS Lambda functions. Configure the Lambda functions to remediate issues automatically when metrics exceed predefined thresholds.

C. Stream CloudWatch metrics to Amazon S3 by using CloudWatch metric streams. Create Amazon QuickSight dashboards to visualize the combined technical metrics and business metrics. Set up Amazon EventBridge rules to send notifications to stakeholders when metrics exceed predefined thresholds.

D. Configure CloudWatch custom dashboards that integrate operational metrics with imported business metrics. Set up CloudWatch composite alarms with anomaly detection. Use Amazon SNS to create alarm actions to notify stakeholders when correlated metrics indicate performance issues. Forgot my password

**Answer: **

**Timestamp: **

[View on ExamTopics](https://www.examtopics.com/discussions/amazon/view/402492-exam-aws-certified-generative-ai-developer-professional-aip-c01-topic-1-question-95-discussion/)

Comments: Chibuzo1 Most Recent 6 months, 18 days ago Selected Answer: D The answer is D because it delivers all three requirements — unified dashboards correlating technical and imported business metrics, composite alarms with anomaly detection for intelligent correlated alerting, and SNS for stakeholder notifications — entirely within the CloudWatch ecosystem that the engineering team already uses, requiring minimal new infrastructure, no new services to operate, and no custom code while providing the most sophisticated alerting capability (anomaly detection + composite alarms) of all options presented. upvoted 1 time Submit     Cancel ... AWS_SkillBuilder 7 months, 1 days ago Selected Answer: D Proactive Monitoring: Incorporating Anomaly Detection allows CloudWatch to learn the &quot;normal&quot; patterns of your business (e.g., higher traffic on weekends) and only trigger alerts when a metric deviates from its expected baseline, reducing false positives. upvoted 1 time Submit     Cancel ... de1612d 7 months, 4 days ago Selected Answer: D Answer is D upvoted 1 time Submit     Cancel ... de1612d 7 months, 7 days ago Selected Answer: A Gemini answer is A upvoted 1 time Submit     Cancel ... de1612d 7 months, 4 days ago Delete please upvoted 1 time Submit     Cancel ...

----------------------------------------

## Exam AWS Certified Generative AI Developer - Professional AIP-C01 topic 1 question 96 discussion



A GenAI developer is evaluating Amazon Bedrock foundation models (FMs) to enhance a Europe-based company's internal business application. The company has a multi-account landing zone in AWS Control Tower. The company uses SCPs to allow its accounts to use only the eu-north-1 Region and the eu-west-1 Region. All customer data must remain in private networks within the approved AWS Regions.



The GenAI developer selects an FM based on analysis and testing and hosts the model in the eu-central-1 Region and the eu-west-3 Region. The GenAI developer must enable access to the FM for the company’s employees. The GenAI developer must ensure that requests to the FM are private and remain with the same Regions as the FM.



Which solution will meet these requirements?

A. Deploy an AWS Lambda function that is exposed by a private Amazon API Gateway REST API to a VPC in eu-north-1. Create a VPC endpoint for the selected FM in eu-central-1 and eu-west-3. Extend existing SCPs to allow employees to use the FM. Integrate the REST API with the business application.

B. Deploy the FM on Amazon EC2 instances in eu-north-1. Deploy a private Amazon API Gateway REST API in front of the EC2 instances. Configure an Amazon Bedrock VPC endpoint. Integrate the REST API with the business application.

C. Configure the FM to use cross-Region inference through an eu.amazon.* endpoint to ensure that all calls remain within Europe. Configure an Amazon Bedrock VPC endpoint. Extend existing SCPs to allow employees to use the FM through inference profiles in Europe-based Regions where the FM is available. Use an inference profile to integrate Amazon Bedrock with the business application.

D. Deploy the FM in Amazon SageMaker AI in eu-north-1. Configure a SageMaker AI VPC endpoint. Extend existing SCPs to allow employees to use the SageMaker AI endpoint. Integrate the FM in SageMaker AI with the business application. Forgot my password

**Answer: **

**Timestamp: **

[View on ExamTopics](https://www.examtopics.com/discussions/amazon/view/402493-exam-aws-certified-generative-ai-developer-professional-aip-c01-topic-1-question-96-discussion/)

Comments: Chibuzo1 Most Recent 6 months, 18 days ago Selected Answer: C The answer is C because it is the only option that works with the FM as already deployed in eu-central-1 and eu-west-3, uses the native Bedrock mechanism designed for exactly this scenario (cross-Region inference profiles with eu.* endpoints keeping traffic within Europe), ensures private network connectivity through a Bedrock VPC endpoint, and resolves the SCP constraint through a targeted policy extension for inference profiles — without rebuilding the architecture, abandoning Bedrock, or creating Regional access violations. upvoted 1 time Submit     Cancel ... de1612d 7 months, 7 days ago Selected Answer: C Gemini answer is C upvoted 1 time Submit     Cancel ...

----------------------------------------

## Exam AWS Certified Generative AI Developer - Professional AIP-C01 topic 1 question 97 discussion



A healthcare company is developing an application to process medical queries. The application must answer complex queries with high accuracy by reducing semantic dilution. The application must refer to domain-specific terminology in medical documents to reduce ambiguity in medical terminology. The application must be able to respond to 1,000 queries each minute with response times less than 2 seconds.



Which solution will meet these requirements with the LEAST operational overhead?

A. Use Amazon API Gateway to route incoming queries to an Amazon Bedrock agent. Configure the agent to use an Anthropic Claude model to decompose queries and an Amazon Titan model to expand queries. Create an Amazon Bedrock knowledge base to store the reference medical documents.

B. Configure an Amazon Bedrock knowledge base to store the reference medical documents. Enable query decomposition in the knowledge base. Configure an Amazon Bedrock flow that uses a foundation model (FM) and the knowledge base to support the application.

C. Use Amazon SageMaker Al to host custom ML models for both query decomposition and query expansion. Configure Amazon Bedrock knowledge bases to store the reference medical documents. Encrypt the documents in the knowledge base.

D. Create an Amazon Bedrock agent to orchestrate multiple AWS Lambda functions to decompose queries. Create an Amazon Bedrock knowledge base to store the reference medical documents. Use the agent's built-in knowledge base capabilities. Add deep research and reasoning capabilities to the agent to reduce ambiguity in the medical terminology. Forgot my password

**Answer: **

**Timestamp: **

[View on ExamTopics](https://www.examtopics.com/discussions/amazon/view/402494-exam-aws-certified-generative-ai-developer-professional-aip-c01-topic-1-question-97-discussion/)

Comments: Chibuzo1 Most Recent 6 months, 18 days ago Selected Answer: B The answer is B because it delivers every requirement — query decomposition for accuracy, medical document grounding for terminology precision, and Bedrock's managed scaling for throughput and latency — through a fully managed configuration-driven architecture with Amazon Bedrock Flows and Knowledge Bases, requiring zero custom code, zero infrastructure management, and zero model operations, making it the clear choice for least operational overhead. upvoted 1 time Submit     Cancel ... de1612d 7 months, 7 days ago Selected Answer: B Gemini answer is B upvoted 1 time Submit     Cancel ...

----------------------------------------

## Exam AWS Certified Generative AI Developer - Professional AIP-C01 topic 1 question 100 discussion



A company is creating a generative AI (GenAI) application that uses Amazon Bedrock foundation models (FMs). The application must use Microsoft Entra ID to authenticate. All FM API calls must stay on private network paths. Access to the application must be limited by department to specific model families. The company also needs a comprehensive audit trail of model interactions.



Which solution will meet these requirements?

A. Configure SAML federation between Microsoft Entra ID and IAM. Create department-specific IAM roles that allow only the required ModelId values. Create AWS PrivateLink interface VPC endpoints for Amazon Bedrock runtime services. Enable AWS CloudTrail to capture Amazon Bedrock API calls. Configure Amazon Bedrock model invocation logging to record detailed model interactions.

B. Create an identity provider (IdP) connection in IAM to authenticate by using Microsoft Entra ID. Assign department permission sets to control access to specific model families. Deploy AWS Lambda functions in private subnets with a NAT gateway for egress to Amazon Bedrock public endpoints. Enable CloudWatch Logs to capture model interactions for auditing purposes.

C. Create a SAML identity provider (IdP) in IAM to authenticate by using Microsoft Entra ID. Use IAM permissions boundaries to limit department roles’ access to specific model families. Configure public Amazon Bedrock API endpoints with VPC routing to maintain private network connectivity. Set up AWS CloudTrail with Amazon S3 Lifecycle rules to manage audit logs of model interactions.

D. Configure OpenID Connect (OIDC) federation between Microsoft Entra ID and IAM. Use attribute-based access control to map department attributes to specific model access permissions. Apply SCP policies to restrict access to Amazon Bedrock FM families based on department. Use Microsoft Entra ID’s built-in logging capabilities to maintain an audit trail of model interactions. Forgot my password

**Answer: **

**Timestamp: **

[View on ExamTopics](https://www.examtopics.com/discussions/amazon/view/421754-exam-aws-certified-generative-ai-developer-professional-aip-c01-topic-1-question-100-discussion/)

Comments: Nowax Most Recent 2 months, 11 days ago Selected Answer: A SAML 2.0 is the standard Entra ID-&gt;IAM enterprise SSO pattern; department IAM roles scoped to model ARNs enforce family-level access; 'bedrock-runtime' PrivateLink endpoints keep inference off the internet; and CloudTrail (API activity) plus model invocation logging (prompt/response bodies) together give the complete trail. Not B - NAT gateway egress reaches the public Bedrock endpoint, so traffic leaves the private path, and CloudWatch Logs captures nothing unless invocation logging is enabled. Not C - &quot;public endpoints with VPC routing&quot; is not a private path, permissions boundaries cap rather than grant, and CloudTrail alone omits prompt/response content. And not D - Entra ID has no visibility into Bedrock invocations, so it cannot be the audit trail, and SCPs are account-wide guardrails, not per-department grants. upvoted 1 time Submit     Cancel ...

----------------------------------------

## Exam AWS Certified Generative AI Developer - Professional AIP-C01 topic 1 question 115 discussion



A company is developing a customer support chat assistant that uses an Amazon Bedrock foundation model (FM). The company wants to update to a newer FM version but needs to implement a validation system to detect semantic drift in responses. The company wants to ensure that performance and functionality for end users remains consistent.



The company needs a solution to compare responses between current and new FM versions for 500 test cases. The solution must detect changes in response meaning, generate quantitative similarity scores, complete validations, and log detailed results for historical comparison.



Which solution will meet these requirements with the LEAST operational complexity?

A. Configure Amazon CloudWatch Synthetics canaries that use custom JavaScript code to send identical prompts to both new and existing FM versions. Store responses in Amazon S3. Perform manual reviews to identify semantic differences between FM versions.

B. Configure an AWS Step Functions workflow that sends test prompts to both new and existing FM versions. Use Amazon Bedrock embedding models to calculate cosine similarity scores. Store the results in Amazon DynamoDB with a composite key schema.

C. Use Amazon Bedrock model evaluation jobs to compare the new FM version against the current version using the 500 test cases. Configure the evaluation to calculate semantic similarity metrics. Store results in Amazon S3 for historical comparison.

D. Build a custom solution by using Amazon SageMaker AI to train a classifier model on historical responses to detect anomalies when the solution compares responses from the new FM version to previous patterns. Forgot my password

**Answer: **

**Timestamp: **

[View on ExamTopics](https://www.examtopics.com/discussions/amazon/view/421770-exam-aws-certified-generative-ai-developer-professional-aip-c01-topic-1-question-115-discussion/)

Comments: TNT87 Most Recent 1 month, 3 days ago Selected Answer: C Amazon Bedrock model evaluation jobs, which is a native, fully managed feature designed specifically to test, compare, and validate foundation models using a predefined dataset (such as the 500 test cases). It supports automated and programmatic evaluation tasks that can calculate quantitative similarity metrics (like BERTScore to assess text semantic similarity/drift). The results are natively logged and stored in Amazon S3 for downstream or historical comparison, fulfilling all requirements with the least operational upvoted 1 time Submit     Cancel ...

----------------------------------------

## Exam AWS Certified Generative AI Developer - Professional AIP-C01 topic 1 question 116 discussion



A media company is building an AI-powered content moderation system by using Amazon Bedrock. The system first classifies text by using a small, low-latency model. Then the system escalates requests that have a confidence score below 0.65 to a larger, more expensive model.



The system must respond in near real time for high-confidence results. The system must process low-confidence requests asynchronously. The system must scale to meet sudden spikes in demand. The company wants to optimize costs for the system by invoking the larger model only when required. The company wants to use decoupled components to achieve high resiliency for the system.



Which solution will meet these requirements?

A. Use Amazon API Gateway to invoke the small model synchronously. If the small model’s confidence score is below 0.65, synchronously call the larger model. Use provisioned concurrency to handle traffic spikes.

B. Use an AWS Step Functions workflow that has parallel branches to run both the small model and the large model for every request. Choose the large model result when confidence score values differ.

C. Send requests to an Amazon SQS queue. Use AWS Fargate to process messages. Invoke the small model first. If the confidence score is below 0.65, place the request in a second SQS queue to process asynchronously by using the large model.

D. Deploy both models on Amazon EC2 instances and enable auto scaling. Use a custom application heuristic to route requests to the appropriate instance based on phrase length and keyword rules. Forgot my password

**Answer: **

**Timestamp: **

[View on ExamTopics](https://www.examtopics.com/discussions/amazon/view/421763-exam-aws-certified-generative-ai-developer-professional-aip-c01-topic-1-question-116-discussion/)

Comments: TNT87 Most Recent 1 month, 3 days ago Selected Answer: C Send requests to an Amazon SQS queue. Use AWS Fargate to process messages. Invoke the small model first. If the confidence score is below 0.65, place the request in a second SQS queue to process asynchronously by using the large model upvoted 1 time Submit     Cancel ...

----------------------------------------

## Exam AWS Certified Generative AI Developer - Professional AIP-C01 topic 1 question 117 discussion



A social messaging company is building an AI chat assistant by using Amazon Bedrock. The company must ensure that every inference complies with an approved safety policy. The company wants to block harmful prompts before model invocations, filter streamed model outputs in real time, and route flagged cases for human review.



Which solution will meet these requirements?

A. Configure an AWS Step Functions workflow. Configure a step to use an AWS Lambda function to pre-check inputs by using the ApplyGuardrail API. Use an InvokeModelWithResponseStream API step that has the guardrail attached. Configure a second Lambda function step to post-check outputs by using the ApplyGuardrail API. Route flagged items to an Amazon SQS queue. Enforce guardrail use by using a bedrock:GuardrailIdentifier IAM condition.

B. Configure an AWS Step Functions workflow. Configure a step to call the ApplyGuardrail API before inference. Then call the InvokeModel API without streaming and use the guardrail. Store the results in Amazon S3. Use the client UI to hide problematic tokens.

C. Configure an AWS Step Functions workflow. Configure a step to use the InvokeModelWithResponseStream API that has the guardrail attached for in-stream filtering. Run an AWS Lambda post-check step by using the ApplyGuardrail API to check flagged cases. Do not perform pre-inference.

D. Configure an AWS Step Functions workflow that includes steps to perform pre-checks and post-checks by using the ApplyGuardrail API and the InvokeModelWithResponseStream API. Attach the guardrail to the check steps. Use process controls such as code reviews instead of IAM enforcement to ensure that guardrails are always applied. Forgot my password

**Answer: **

**Timestamp: **

[View on ExamTopics](https://www.examtopics.com/discussions/amazon/view/421764-exam-aws-certified-generative-ai-developer-professional-aip-c01-topic-1-question-117-discussion/)

Comments: TNT87 Most Recent 1 month, 3 days ago Selected Answer: A Pre-check validation: Using an AWS Lambda function with the ApplyGuardrail API before invoking the model ensures that harmful prompts are blocked immediately before consuming unnecessary model generation resources upvoted 1 time Submit     Cancel ...

----------------------------------------

## Exam AWS Certified Generative AI Developer - Professional AIP-C01 topic 1 question 118 discussion



A financial services company uses Amazon Bedrock to analyze customer data that is stored in an Amazon S3 bucket. The data includes personally identifiable information (PII). The company must mask PII from foundation model (FM) responses.



Which solution will meet this requirement with the LEAST operational effort?

A. Create a guardrail in Amazon Bedrock to filter PII content. Define the PII type and set the guardrail action to MASK. Configure Amazon Bedrock to apply the filter to each FM response.

B. Use Amazon Comprehend to detect PII entities in the S3 data before invoking Amazon Bed-rock. Configure an AWS Lambda function to call the Amazon Comprehend DetectPiiEntities API to mask detected PII. Store the processed data back to the original S3 bucket.

C. Use Amazon Macie to scan the S3 bucket for PII data. Configure an AWS Lambda function to store PII in a second S3 bucket. Use an Amazon EventBridge rule to invoke the Lambda func-tion.

D. Configure an AWS Lambda function to search for PII data. Implement a step in the Lambda function code to store the PII in a second S3 bucket and non-PII data into a third S3 bucket. Forgot my password

**Answer: **

**Timestamp: **

[View on ExamTopics](https://www.examtopics.com/discussions/amazon/view/427518-exam-aws-certified-generative-ai-developer-professional-aip-c01-topic-1-question-118-discussion/)

Comments: TNT87 Most Recent 1 month, 3 days ago Selected Answer: A Create a guardrail in Amazon Bedrock to filter PII content. Define the PII type and set the guardrail action to MASK. Configure Amazon Bedrock to apply the filter to each FM response upvoted 1 time Submit     Cancel ...

----------------------------------------

## Exam AWS Certified Generative AI Developer - Professional AIP-C01 topic 1 question 119 discussion



A healthcare company is implementing a clinical knowledge base application on Amazon Bed-rock that provides medical information to doctors. During testing, a quality team discovers that the generative AI (GenAI) model occasionally fabricates medical treatment recommendations that do not originate from the approved clinical guidelines.



The quality team needs to implement a solution to detect the hallucinations before releasing the application. The solution must analyze model responses against verified medical information. The solution must identify semantic inconsistencies when users ask similar questions in different ways.



Which solution will meet these requirements?

A. Deploy a real-time monitoring system that uses Amazon CloudWatch Logs Insights to analyze response patterns and to flag factual inaccuracies based on predefined keywords. Implement AWS Lambda functions to compare responses with known answers from an Amazon Dyna-moDB table.

B. Create a reference dataset with validated question-answer pairs from clinical guidelines. Im-plement output diffing by using Amazon Bedrock Guardrails for response consistency analysis. Use Amazon Bedrock evaluation to detect factual inaccuracies.

C. Configure Amazon Bedrock Guardrails with custom rules to detect and block potentially hal-lucinated content by identifying specific patterns in the GenAI responses. Use Amazon Sage-Maker Feature Store to maintain a repository of verified clinical guidelines.

D. Create an Amazon Bedrock automatic model evaluation job with a custom prompt dataset. Set up anomaly detection alarms to identify factual inaccuracies. Implement Amazon SNS notifi-cations when inaccuracies are detected. Forgot my password

**Answer: **

**Timestamp: **

[View on ExamTopics](https://www.examtopics.com/discussions/amazon/view/427538-exam-aws-certified-generative-ai-developer-professional-aip-c01-topic-1-question-119-discussion/)

Comments: TNT87 Most Recent 1 month, 3 days ago Selected Answer: B Ans B Create a reference dataset with validated question-answer pairs from clinical guidelines. Implement output diffing by using Amazon Bedrock Guardrails for response consistency analysis. Use Amazon Bedrock evaluation to detect factual inaccuracies upvoted 1 time Submit     Cancel ...

----------------------------------------

## Exam AWS Certified Generative AI Developer - Professional AIP-C01 topic 1 question 122 discussion



A financial company is building an AI-powered recommendation system. The system uses real-time market data and verified internal documents. The system must include evaluation capabili-ties that collect explicit user ratings and detect problematic responses in real time. The system must include evaluation capabilities that track model performance over time and support A/B testing of different prompt or model variants.



The system must orchestrate multi-step workflows. The workflows must retrieve trusted knowledge, validate inputs, and generate recommendations. The system must securely store all user feedback, flagged events, and audit logs in a compliance-ready immutable repository. The repository must be write- once, tamper-evident storage that is suitable for regulated audit reten-tion.



Which architecture will meet these requirements?

A. Deploy a fine-tuned FM on Amazon SageMaker JumpStart. Use Amazon Bedrock AgentCore to orchestrate input validation and retrieval workflows. Store user feedback and flagged queries in Amazon DynamoDB. Run scheduled Amazon Athena queries on AWS CloudTrail logs for anomaly detection. Store generated outputs in encrypted Amazon S3 buckets. Enable S3 Object Lock.

B. Configure Amazon API Gateway to invoke an Amazon Bedrock FM that retrieves from Am-azon Kendra. Store all responses in encrypted Amazon S3 buckets. Enable S3 Object Lock. Use Amazon Macie to scan stored logs for problematic content.

C. Use Amazon Bedrock AgentCore to orchestrate retrieval from curated Amazon Kendra in-dexes. Configure an AWS Lambda function to sanitize input. Configure a function to check post-generation fact consistency. Configure a function to split traffic for A/B testing. Store user feedback in Amazon DynamoDB. Write audit logs through AWS CloudTrail. Store the logs in Amazon S3. Enable S3 Object Lock. Use Amazon SageMaker Model Monitor to track data drift and output anomalies continuously.

D. Build an Amazon Lex chat-based AI assistant with aliases that route a percentage of queries to two Amazon SageMaker AI endpoints for recommendations. Log interactions to Amazon CloudWatch Logs. Conduct quarterly manual audits for hallucination and prompt-injection de-tection. Store feedback in Amazon RDS with encryption. Forgot my password

**Answer: **

**Timestamp: **

[View on ExamTopics](https://www.examtopics.com/discussions/amazon/view/427515-exam-aws-certified-generative-ai-developer-professional-aip-c01-topic-1-question-122-discussion/)

Comments: TNT87 Most Recent 1 month, 3 days ago Selected Answer: C • Workflow Orchestration &amp; Knowledge Retrieval: Amazon Bedrock Agents (formerly managed under AgentCore architectures) perfectly handles multi-step conversational and retrieval tasks. It orchestrates pulling trusted, verified domain data directly from customized Amazon Kendra indices. upvoted 1 time Submit     Cancel ...

----------------------------------------

## Exam AWS Certified Generative AI Developer - Professional AIP-C01 topic 1 question 123 discussion



A retail company has a product recommendation system that uses a foundation model (FM) in Amazon Bedrock. The system processes and searches millions of product embeddings that are updated hourly. The company regularly adds new products.



During peak shopping events, the current solution experiences high latency and occasional fail-ures when the system performs similarity searches across the product catalog. The company must resolve the performance issues.



Which solution will meet this requirement?

A. Implement Amazon OpenSearch Service with a multi-node architecture. Configure vector-specific index settings and memory circuit breakers. Establish dedicated vector operation queues to handle surge capacity during peak usage events.

B. Deploy an Amazon DynamoDB table that uses sparse vector compression. Implement parallel query executors to handle search operations. Configure DynamoDB Streams and AWS Lambda functions to maintain the vector index in real time.

C. Set up an Amazon Bedrock knowledge base that uses custom vector partitioning. Implement hierarchical metadata structures. Integrate the knowledge base with Amazon EventBridge to provide synchronized catalog updates and to generate vectors.

D. Deploy an Amazon Neptune cluster with specialized vector endpoints. Configure custom similarity computation functions. Use the Neptune bulk loader API to manage vector updates across the product catalog. Forgot my password

**Answer: **

**Timestamp: **

[View on ExamTopics](https://www.examtopics.com/discussions/amazon/view/427488-exam-aws-certified-generative-ai-developer-professional-aip-c01-topic-1-question-123-discussion/)

Comments: TNT87 Most Recent 1 month, 3 days ago Selected Answer: A Implement Amazon OpenSearch Service with a multi-node architecture. Configure vector-specific index settings and memory circuit breakers. Establish dedicated vector operation queues to handle surge capacity during peak usage events. upvoted 1 time Submit     Cancel ...

----------------------------------------

## Exam AWS Certified Generative AI Developer - Professional AIP-C01 topic 1 question 124 discussion



A healthcare company is developing an application that processes sensitive patient data and gen-erates treatment summaries by using a foundation model (FM). The application must maintain an audit trail of all prompts and completions. The application must securely handle protected health information (PHI) data throughout the processing lifecycle. The company must track all prompt-completion pairs with original patient data, but the company must redact any PHI from stored records. The company must enforce healthcare-specific data retention policies.



Which solution will meet these requirements?

A. Store prompt-completion pairs in Amazon S3 and enable default server-side encryption. De-ploy an AWS Lambda function that scans records by using Amazon Comprehend Medical. Con-figure the Lambda function to delete PHI data after a required retention period.

B. Use Amazon Bedrock Prompt Management and Amazon Bedrock Flows to detect PHI. Con-figure Amazon Bedrock Guardrails to use sensitive information filters to mask PHI automatical-ly. Store logs in Amazon S3 and configure appropriate retention settings.

C. Store prompt-completion pairs in Amazon S3. Configure S3 Object Lock in compliance mode. Apply tag-based S3 Lifecycle policies to PHI data. Configure an AWS Lambda function to re-dact patient information after the application processes the data.

D. Store patient data in an Amazon Bedrock knowledge base. Use Amazon Comprehend Medi-cal to identify PHI. Configure an AWS Lambda function to manage data retention according to healthcare policies. Forgot my password

**Answer: **

**Timestamp: **

[View on ExamTopics](https://www.examtopics.com/discussions/amazon/view/427522-exam-aws-certified-generative-ai-developer-professional-aip-c01-topic-1-question-124-discussion/)

Comments: TNT87 Most Recent 1 month, 3 days ago Selected Answer: B Use Amazon Bedrock Prompt Management and Amazon Bedrock Flows to detect PHI. Configure Amazon Bedrock Guardrails to use sensitive information filters to mask PHI automatically. Store logs in Amazon S3 and configure appropriate retention settings. Ans B upvoted 1 time Submit     Cancel ...

----------------------------------------

## Exam AWS Certified Generative AI Developer - Professional AIP-C01 topic 1 question 125 discussion



A financial services company runs an AI application that uses Amazon Bedrock foundation models (FMs) to generate personalized investment recommendations based on customer docu-ments. The AI application processes customer portfolios, financial statements, and regulatory documentation to create personalized recommendations.



The company is experiencing inconsistent model performance because of poor data quality. Some documents contain personally identifiable information (PII) that the company must redact. Other documents contain formatting inconsistencies that confuse the FMs. The company needs a solu-tion that ensures consistent, high-quality inputs to optimize FM. The solution must comply with financial regulations and PII handling policies.



Which solution will meet these requirements with the LEAST operational overhead?

A. Use Amazon Macie to automatically detect and redact PII. Use AWS Lambda functions and Amazon Textract to enforce standard document formatting. Create dynamic prompts that adapt to individual document schemas to improve model consistency.

B. Use Amazon Comprehend to detect PII by using custom entity recognition. Use AWS Step Functions to orchestrate document preprocessing workflows. Use prompt templates with condi-tional logic to handle schema variations effectively.

C. Use Amazon Bedrock Guardrails to filter out PII during inference. Use pre-processing AWS Lambda functions to standardized document formatting. Use few-shot prompting techniques and standardized examples to improve model performance across document types.

D. Use Amazon Textract to analyze document structures and extract text. Use Amazon Compre-hend to detect PII and analyze sentiment. Design prompt engineering strategies that use struc-tured metadata to improve FM reasoning and reduce hallucinations. Forgot my password

**Answer: **

**Timestamp: **

[View on ExamTopics](https://www.examtopics.com/discussions/amazon/view/427492-exam-aws-certified-generative-ai-developer-professional-aip-c01-topic-1-question-125-discussion/)

Comments: TNT87 Most Recent 1 month, 3 days ago Selected Answer: C Use Amazon Bedrock Guardrails to filter out PII during inference. Use pre-processing AWS Lambda functions to standardized document formatting. Use few-shot prompting techniques and standardized examples to improve model performance across document types upvoted 1 time Submit     Cancel ...

----------------------------------------

## Exam AWS Certified Generative AI Developer - Professional AIP-C01 topic 1 question 126 discussion



A global company uses an organization in AWS Organizations to manage 25 AWS accounts. The company’s products have 50,000 daily user interactions. The company is using Amazon Bedrock AgentCore to build an AI assistant.



The AI assistant must access customer data that is stored in multiple AWS accounts across sever-al business units. The AI assistant needs to perform actions on behalf of specific users by query-ing Amazon DynamoDB tables that contain customer information in each business unit's AWS account. Each business unit maintains its own AWS account that hosts its own DynamoDB ta-bles.



The company must enforce strict data access security boundaries and must collect full audit trails that show which user’s credentials are used to perform each action. The solution must allow the AgentCore application to access resources across multiple accounts while preserving user identity context. The solution must support the company’s plan to expand to more than 40 AWS accounts in the next year.



Which solution will meet these requirements with the LEAST operational overhead?

A. Configure the AI assistant to use an outbound credential provider that runs AssumeRole op-erations to dynamically obtain temporary credentials so the AI assistant can access resources across accounts. Create an IAM role in each business unit account that has a trust relationship to the AI assistant’s execution role and permissions to access the DynamoDB tables. Ensure that AssumeRole calls include session tags to identify the end user.

B. Create a separate AI assistant in each business unit account. Deploy an Amazon API Gateway REST API that runs request routing logic. Create AWS Lambda authorizers to direct user queries to the appropriate AI assistant based on the customer’s business unit identifier from the request context.

C. Use AWS Resource Access Manager (AWS RAM) to share the DynamoDB tables from each business unit account to a central account where the AI assistant runs. Configure AWS RAM permissions to allow cross-account access to the DynamoDB tables. Grant the AgentCore execu-tion role permissions to access the shared resources directly.

D. Configure SCPs for the organization to explicitly allow the AI assistant’s execution role prin-cipal to perform dynamodb:Getltem and dynamodb:Query actions across all member accounts. Configure the AI assistant to reference cross-account DynamoDB table ARNs directly in their resource definitions. Forgot my password

**Answer: **

**Timestamp: **

[View on ExamTopics](https://www.examtopics.com/discussions/amazon/view/427479-exam-aws-certified-generative-ai-developer-professional-aip-c01-topic-1-question-126-discussion/)

Comments: TNT87 Most Recent 1 month, 3 days ago Selected Answer: A Cross-Account Access: Implementing AssumeRole allows the central AI assistant to securely access DynamoDB tables residing in multiple distinct member accounts within the AWS Organization without requiring separate agent deployments upvoted 1 time Submit     Cancel ... TNT87 1 month, 3 days ago Selected Answer: A Least Operational Overhead &amp; High Scalability: Centralizing the AI assistant using Amazon Bedrock AgentCore allows the architecture to easily scale from 25 to more than 40 accounts. Instead of deploying and managing duplicate agent configurations across dozens of business unit accounts (as proposed in Option B), a single assistant can orchestrate cross-account workflows upvoted 1 time Submit     Cancel ...

----------------------------------------

## Exam AWS Certified Generative AI Developer - Professional AIP-C01 topic 1 question 127 discussion



A hospital is building an AI application to help medical clinicians to make treatment decisions. The application uses Amazon Bedrock to analyze patient case histories and suggest diagnoses. The application must maintain sub-500 ms response times to integrate with the hospital’s existing real-time clinical workflow. To comply with privacy regulations, the application must log all per-sonally identifiable information (PII) handling decisions for audits. The application must detect and remove PII from responses with at least 99% accuracy.



After initial deployment, clinicians report that diagnostic summaries from the application occa-sionally include patient names and medical record numbers that were not present in the original case history inputs. An investigation reveals that Amazon Comprehend Medical successfully de-tects and removes PII from inputs with 95% accuracy, and the application replaces all detected entities with tokens before it sends inputs to Amazon Bedrock. However, the application contin-ues to generate patient-identifying information in approximately 3-5% of outputs.



The company needs a solution to prevent the application from displaying PII in outputs while meeting all other operational requirements.



Which solution will meet these requirements?

A. Configure Amazon Bedrock guardrails with sensitive information filters to detect and block PII in model outputs.

B. Implement a secondary PII detection layer by using regular expressions and custom entity recognition to detect identifiers that Amazon Comprehend Medical misses before sending inputs to Amazon Bedrock.

C. Remove detailed medical context from case histories during pre-processing to prevent the model from generating patient-specific information based on clinical pattern associations.

D. Enable session isolation in Amazon Bedrock API calls. Clear conversation history between requests to prevent patient information from persisting across multiple case analyses. Forgot my password

**Answer: **

**Timestamp: **

[View on ExamTopics](https://www.examtopics.com/discussions/amazon/view/427507-exam-aws-certified-generative-ai-developer-professional-aip-c01-topic-1-question-127-discussion/)

Comments: TNT87 Most Recent 1 month, 3 days ago Selected Answer: A Configure Amazon Bedrock guardrails with sensitive information filters to detect and block PII in model outputs A upvoted 1 time Submit     Cancel ... Rudrajit 2 months, 22 days ago Selected Answer: A A and D are good answers. But I select a because of the ask &quot;prevent the application from displaying PII in outputs while meeting all other operational requirements.&quot; Amazon Bedrock guardrails does that. upvoted 1 time Submit     Cancel ...

----------------------------------------

## Exam AWS Certified Generative AI Developer - Professional AIP-C01 topic 1 question 128 discussion



A company is designing a GenAI solution to help children between the ages of 8 and 14 understand world history. The system must support concurrent use for up to 30 children in a classroom and provide responses in less than 1 second. The company is using Amazon Bedrock and Amazon Nova Pro with a knowledge base that contains history textbooks that are written for students between the ages of 6 and 21. The company uses an Amazon Bedrock flow to ensure that the solution uses the knowledge base to generate every response. The company sets the prompt response temperature to 0.7.



Early testing of the solution results in some responses that are historically inaccurate, violent, and not appropriate for children. A GenAI developer must prevent the solution from responding to prompts inaccurately and inappropriately.



Which solution will meet this requirement?

A. Increase the inference temperature in the flow. Add a node to the flow after the initial response that calls the Amazon Nova model to remove any violence from the response. Return the result of the model call.

B. Configure Amazon Bedrock guardrails for the model responses by using content filters. Set the content filter strength high and set the guardrail action to block. Add the guardrail to the flow. Reduce the inference temperature in the flow.

C. Use Amazon Bedrock Data Automation with a custom output that removes all violent content from the knowledge base. Increase the inference temperature in the flow.

D. Configure Amazon Bedrock guardrails for the prompts by using content filters. Set the content filter strength to high and set the guardrail action to block. Add the guardrail to the flow. Reduce the inference temperature in the flow. Forgot my password

**Answer: **

**Timestamp: **

[View on ExamTopics](https://www.examtopics.com/discussions/amazon/view/429349-exam-aws-certified-generative-ai-developer-professional-aip-c01-topic-1-question-128-discussion/)

Comments: TNT87 Most Recent 1 month, 3 days ago Selected Answer: B Configure Amazon Bedrock guardrails for the model responses by using content filters. Set the content filter strength high and set the guardrail action to block. Add the guardrail to the flow. Reduce the inference temperature in the flow. upvoted 1 time Submit     Cancel ...

----------------------------------------

## Exam AWS Certified Generative AI Developer - Professional AIP-C01 topic 1 question 129 discussion



A legal research company is developing an AI-powered chat assistant that uses Amazon Bedrock with a knowledge base that contains millions of legal documents. When attorneys search for legal case precedents, the initial retrieval returns many documents. The company wants the chat assistant to generate all responses within 3 seconds.



The foundation model (FM) that the chat assistant uses has a context window limitation that allows effective processing for only 10 documents for each query. Currently, the retrieval configuration fetches 50 documents by using semantic search. Attorneys report that highly relevant precedents frequently appear in positions 15-40 of the results.



The company needs a solution to improve the relevance of query results. The solution must meet the company's latency and context window constraints.



Which solution will meet these requirements?

A. Maintain the 50-document retrieval but increase the FM's temperature parameter. Implement prompt engineering techniques that instruct the model to identify the most relevant documents from the full result set before the model generates responses.

B. Enable reranking on the knowledge base by using a reranker model with language-specific configurations. Configure the chat assistant to initially retrieve 50 documents. Use the reranker model's cross-encoder architecture to evaluate query-document pairs. Return only the top 10 highest-scored documents.

C. Configure three separate knowledge bases. Configure one knowledge base to use 500 token chunks, another to use 1,000 token chunks, and the third to use 2,000 token chunks. Implement a pre-processing action group by using an AWS Lambda function that retrieves 50 documents from each knowledge base, merges the 150 total results, and uses term frequency - inverse document frequency (TF-IDF) scoring to select the top 10 documents.

D. Implement a post-processing action group by using an AWS Lambda function that retrieves 50 documents and calculates cosine similarity scores between the query embedding and each document embedding by using Amazon Titan Embeddings. Configure the action group to sort by similarity score and return the top 10 documents. Forgot my password

**Answer: **

**Timestamp: **

[View on ExamTopics](https://www.examtopics.com/discussions/amazon/view/429345-exam-aws-certified-generative-ai-developer-professional-aip-c01-topic-1-question-129-discussion/)

Comments: TNT87 Most Recent 1 month, 3 days ago Selected Answer: B Enable reranking on the knowledge base by using a reranker model with language-specific configurations. Configure the chat assistant to initially retrieve 50 documents. Use the reranker model's cross-encoder architecture to evaluate query-document pairs. Return only the top 10 highest-scored documents. upvoted 1 time Submit     Cancel ...

----------------------------------------

## Exam AWS Certified Generative AI Developer - Professional AIP-C01 topic 1 question 130 discussion



A multinational healthcare company is building a GenAI solution to analyze patient medical records and clinical trial data to identify treatment patterns and generate research insights. Some of the countries where the company operates require the company to store patient data on premises within each country.



The solution must provide low-latency, AI-assisted diagnostics for remote clinics around the world. The solution must use cloud-based foundation models (FMs) to perform advanced, large-scale analytics. The company needs a solution that ensures data residency, delivers sub-100 ms inference at clinics, and supports consistent development workflows across hybrid environments.



Which solution will meet these requirements with the LEAST operational overhead?

A. Use AWS Global Accelerator to reduce latency for remote clinics. Replicate on-premises patient data to Amazon S3 by using AWS DataSync. Process all model requests through a centralized inference endpoint that is hosted in one AWS Region.

B. Deploy open source FMs on Amazon EC2 instances in each country to comply with data residency requirements. Store patient data locally on Amazon EBS volumes. Use AWS Systems Manager to manage model updates across countries. Manually export aggregated research insights as CSV files to Amazon S3 buckets in each AWS Region to perform cross-country analysis.

C. Deploy FMs in multiple AWS Regions on Amazon EC2 GPU instances. Replicate patient data from on-premises systems to the cloud. Centralize model training and inference.

D. Use AWS Outposts to process and store sensitive on-premises patient data in countries that have data residency requirements. Deploy AWS Wavelength at remote clinics to perform real-time inference. Forgot my password

**Answer: **

**Timestamp: **

[View on ExamTopics](https://www.examtopics.com/discussions/amazon/view/429352-exam-aws-certified-generative-ai-developer-professional-aip-c01-topic-1-question-130-discussion/)

Comments: TNT87 Most Recent 1 month, 3 days ago Selected Answer: D Use AWS Outposts to process and store sensitive on-premises patient data in countries that have data residency requirements. Deploy AWS Wavelength at remote clinics to perform real-time inference. upvoted 1 time Submit     Cancel ...

----------------------------------------

## Exam AWS Certified Generative AI Developer - Professional AIP-C01 topic 1 question 131 discussion



A global company runs an AI-powered document-processing pipeline that uses Amazon Bedrock to summarize text documents. The pipeline occasionally times out during peak traffic periods. The timeouts cause service degradation.



The company needs a solution to detect when error rates exceed 10% within any 60-second window. The solution must switch to an alternate process path when the error rate threshold is exceeded. The solution must automatically resume normal Amazon Bedrock processing when the pipeline recovers. The company must ensure that the pipeline processes all documents within 15 minutes.



Which solution will meet these requirements?

A. Configure an AWS Step Functions workflow that implements a circuit breaker pattern by tracking Amazon Bedrock invocation failures in Amazon DynamoDB. Configure the workflow to route processing jobs between normal and alternate processing paths based on the current failure state.

B. Configure an AWS Step Functions workflow that uses an AWS Lambda function to poll Amazon CloudWatch metrics for Amazon Bedrock. Store error rate metrics in Amazon DynamoDWhen the error rate exceeds 10%, instruct company staff to manually update the workflow to divert traffic to the alternate processing path.

C. Configure an AWS Step Functions state machine that includes a Task state to implement Retry/Catch logic for Amazon Bedrock calls. Configure an Amazon CloudWatch alarm that triggers an Amazon EventBridge rule to direct traffic from the state machine to the alternate processing path when the error rate exceeds 10%.

D. Deploy multiple identical AWS Step Functions state machines that use multiple Amazon Bedrock models behind an Amazon API Gateway API. Use a custom health check AWS Lambda function to route requests to whichever state machine responds fastest. Forgot my password

**Answer: **

**Timestamp: **

[View on ExamTopics](https://www.examtopics.com/discussions/amazon/view/429348-exam-aws-certified-generative-ai-developer-professional-aip-c01-topic-1-question-131-discussion/)

Comments: sghdfghdfghdghdfh4w56346he346h Most Recent 29 days ago Selected Answer: A Correct answer: A. Use an AWS Step Functions workflow to implement a circuit breaker pattern, tracking Amazon Bedrock invocation failures in Amazon DynamoDB and routing processing jobs to an alternate path when the failure threshold is exceeded. Why A is correct Detect failures: Track invocation failures and calculate whether the error rate exceeds 10% within a rolling 60-second window. Automatic failover: When the threshold is exceeded, the workflow routes jobs to the alternate processing path without waiting for manual intervention. Automatic recovery: The circuit breaker can periodically check the failure state and resume normal Bedrock processing when the service recovers. Meet the 15-minute deadline: The workflow can use bounded retries, timeouts, and an alternate processing path to keep document processing within the required time limit. Why the other options are incorrect B: Requires staff to manually divert traffic, so failover is not automatic. C: Retry/Catch logic handles individual failures, but the proposed alarm-to-EventBridge routing does not, by itself, implement reliable dynamic routing and automatic recovery for the state machine. D: Routing to whichever state machine responds fastest does not explicitly enforce the 10% error threshold or implement circuit-breaker recovery. upvoted 1 time Submit     Cancel ... TNT87 1 month, 3 days ago Selected Answer: A • Circuit Breaker Pattern: Implementing a circuit breaker pattern is the standard architectural method to handle intermittent failures or timeouts of a downstream service under heavy load. By tracking invocation failures in a fast, low-latency datastore like Amazon DynamoDB, the Step Functions workflow can dynamically decide whether to attempt normal execution or divert to the alternate processing path automatically based on the failure rate. • Automation: It satisfies the requirement to automatically switch to the alternate path and gracefully resume normal Amazon Bedrock processing when the system recovers. upvoted 1 time Submit     Cancel ...

----------------------------------------

## Exam AWS Certified Generative AI Developer - Professional AIP-C01 topic 1 question 132 discussion



A media company needs to automatically generate searchable metadata for a video library that contains 10,000 hours of content. Each video includes visual scenes, spoken dialogue, background music, and on-screen text.



The company needs a solution to extract scene descriptions, speaker transcripts with timestamps, text overlay content, and emotional context from each video. The output must synchronize all metadata types with one another and create a searchable index. Users must be able to search based on any metadata type and jump directly to a specific moment in each video.



What solution will meet these requirements?

A. Create an Amazon SageMaker AI processing job that extracts video frames at regular intervals. Use Amazon Transcribe to process audio and perform speech-to-text conversions. Use an Anthropic Claude model in Amazon Bedrock to process frames individually to produce multimodal scene analyses. Store outputs in separate Amazon S3 buckets that are organized by content type.

B. Create an Amazon SageMaker AI processing job that extracts video frames at fixed intervals and attaches timestamps. Use Amazon Transcribe with time markers enabled to process audio. Use an Anthropic Claude model in Amazon Bedrock to analyze frame-transcript pairs. Store outputs in a unified JSON structure that preserves temporal relationships.

C. Create an Amazon SageMaker AI parallel processing job that is orchestrated by a SageMaker AI pipeline. Configure multiple steps in the pipeline to extract video segments, process audio streams by using Amazon Transcribe, analyze video frames by using Amazon Rekognition to detect text in scenes, use Amazon Comprehend to perform sentiment analysis, and store unified metadata in Amazon DynamoDB with time-based partitioning.

D. Create an Amazon SageMaker AI processing job that configures Anthropic Claude Opus in Amazon Bedrock to produce a comprehensive multimodal analysis for each video. Configure the processing job to extract metadata by using a single inference request and to index results in Amazon OpenSearch Service to provide temporal search capabilities. Forgot my password

**Answer: **

**Timestamp: **

[View on ExamTopics](https://www.examtopics.com/discussions/amazon/view/429351-exam-aws-certified-generative-ai-developer-professional-aip-c01-topic-1-question-132-discussion/)

Comments: TNT87 Most Recent 1 month, 3 days ago Selected Answer: C • Comprehensive Metadata Extraction: It leverages highly specialized, native AWS AI services optimized for each precise requirement: • Amazon Transcribe handles spoken dialogue and generates timestamps/time-markers for audio. • Amazon Rekognition natively detects text-in-video / text overlay content within the visual scenes. • Amazon Comprehend processes the resulting text to perform sentiment analysis, delivering the required emotional context. upvoted 1 time Submit     Cancel ...

----------------------------------------

## Exam AWS Certified Generative AI Developer - Professional AIP-C01 topic 1 question 133 discussion



A financial services company is developing a GenAI application that needs to analyze data across multiple AWS accounts by using a foundation model (FM). The data and application are in Amazon S3 buckets in three separate accounts. Account A contains transaction data. Account B contains customer profiles, including personally identifiable information (PII). Account C hosts the GenAI application. The company plans to add data sources from seven more business units within the next few months.



The company must have strict control over PII data. The company must ensure that the FM accesses only necessary data fields.



The company needs a solution to establish secure cross-account access for the GenAI application.



Which solution will meet these requirements?

A. Use AWS Identity Center to create a permission set for the FM service account. Configure resource-based policies on each S3 bucket to allow specific access to Account C. Deploy a custom AWS Lambda authorizer to filter PII data before passing it to the FM.

B. Configure Amazon Bedrock cross-account IAM roles. Create role-based access policies in each source account that allow access only for specific S3 bucket paths. Apply tagbased access controls on S3 objects to classify and control access to PII data.

C. Set up AWS Lake Formation in each source account. Register the S3 buckets with Lake Formation. Create IAM roles in each source account that have permissions to access specific S3 bucket paths. Configure Lake Formation permissions to allow access only to specific data columns by using Lake Formation tag-based access controls. Use Amazon SageMaker AI to deploy the FM with an execution role in Account C that can assume the cross-account IAM roles to access the data through Lake Formation.

D. Configure resource-based policies on S3 buckets in each source account to allow access from the GenAI application in Account C. Configure identity-based policies for the FM's service role that allow access only to specific data columns by using AWS Lake Formation tag-based access controls. Set up a VPC endpoint in each account to provide secure cross-account access. Forgot my password

**Answer: **

**Timestamp: **

[View on ExamTopics](https://www.examtopics.com/discussions/amazon/view/429347-exam-aws-certified-generative-ai-developer-professional-aip-c01-topic-1-question-133-discussion/)

Comments: TNT87 Most Recent 1 month, 3 days ago Selected Answer: C Set up AWS Lake Formation in each source account. Register the S3 buckets with Lake Formation. Create IAM roles in each source account that have permissions to access specific S3 bucket paths. Configure Lake Formation permissions to allow access only to specific data columns by using Lake Formation tag-based access controls. Use Amazon SageMaker AI to deploy the FM with an execution role in Account C that can assume the cross-account IAM roles to access the data through Lake Formatio upvoted 1 time Submit     Cancel ...

----------------------------------------

## Exam AWS Certified Generative AI Developer - Professional AIP-C01 topic 1 question 134 discussion



A logistics company is building an agentic GenAI-powered solution to automate freight optimization. The solution must retrieve data in real time from multiple internal and external systems. The solution must include a human-in-the-loop approval step before the optimization process is finished. The solution must support modular growth as the number of integrations and amount of logic increases.



Which solution will meet these requirements with the LEAST operational overhead?

A. Use an Amazon SageMaker AI endpoint that hosts a large language model (LLM) that directly calls all internal databases and external APIs. Use a custom web application that provides a UI to implement the human-in-the-loop review step.

B. Build a hierarchical system by using the Strands Agents SDK and Amazon Bedrock AgentCore. Configure a coordinating agent to delegate tasks to multiple specialized agents. Use MCP to facilitate inter-agent messaging. Use AWS Step Functions to implement a human-in-the-loop approval step.

C. Use AWS Glue to aggregate operational data into Amazon S3. Use Amazon Athena to query the data. Invoke an AWS Lambda function to generate route assignments. Use Amazon SNS to send notifications to supervisor agents.

D. Use a single Amazon Bedrock AgentCore agent with AWS Lambda based tools to integrate with all internal and external systems. Use AWS Step Functions to orchestrate the approval workflow. Forgot my password

**Answer: **

**Timestamp: **

[View on ExamTopics](https://www.examtopics.com/discussions/amazon/view/429350-exam-aws-certified-generative-ai-developer-professional-aip-c01-topic-1-question-134-discussion/)

Comments: TNT87 Most Recent 1 month, 3 days ago Selected Answer: B Build a hierarchical system by using the Strands Agents SDK and Amazon Bedrock AgentCore. Configure a coordinating agent to delegate tasks to multiple specialized agents. Use MCP to facilitate inter-agent messaging. Use AWS Step Functions to implement a human-in-the-loop approval step. upvoted 1 time Submit     Cancel ...

----------------------------------------

## Exam AWS Certified Generative AI Developer - Professional AIP-C01 topic 1 question 135 discussion



A financial services company is building a fraud detection system by using Amazon Bedrock. The system will monitor activity in multiple stock trading applications that run in the United States and Europe. The system must process 1,000 transactions every second with sub-500 ms response times. The system must also maintain high availability during connectivity disruptions.



The company must ensure that data for European customers is processed only in AWS Regions that are based in Europe.



Which solution will meet these requirements?

A. Configure AWS Lambda functions and Amazon EKS applications to use the InvokeModel API with a global inference profile. Deploy an automated failover system that uses Amazon Route 53 health checks. Create a dedicated European inference profile and enable Geographic cross-Region inference for European applications. Use Amazon CloudWatch alarms to monitor utilization metrics.

B. Configure all applications to use the InvokeModel API with provisioned throughput for an Anthropic Claude model in each Region separately. Set up a custom Application Load Balancer to distribute traffic based on Regional capacity and response times. Implement a Regional failover mechanism that uses Amazon EventBridge rules to handle connectivity disruptions.

C. Configure all applications to use the InvokeModelWithResponseStream API with on-demand throughput. Deploy an Amazon API Gateway REST API with Regional endpoints in each location where the company operates to route requests to the closest Amazon Bedrock endpoint. Create separate IAM roles for applications that run in the United States and Europe. Grant the IAM roles Region-specific permissions.

D. Configure applications that run in the United States to use provisioned throughput with the InvokeModel API. Configure European applications to use a Europe-specific geographic inference profile to ensure data sovereignty. Configure automatic scaling for provisioned capacity based on utilization metrics. Use Amazon EventBridge and AWS Lambda functions to implement cross-Region failover mechanisms. Forgot my password

**Answer: **

**Timestamp: **

[View on ExamTopics](https://www.examtopics.com/discussions/amazon/view/429353-exam-aws-certified-generative-ai-developer-professional-aip-c01-topic-1-question-135-discussion/)

Comments: 953bf6d Most Recent 25 days ago Selected Answer: A Option A is the correct solution. Why Option A Works • Data Sovereignty: Using a dedicated European inference profile with Geographic cross-Region inference ensures that requests and data for European customers stay strictly within AWS Regions located in Europe. • Performance &amp; Throughput: The InvokeModel API combined with inference profiles handles high-volume traffic (1,000 transactions/sec) while keeping response times under 500 ms. • High Availability &amp; Failover: Amazon Route 53 health checks and Amazon CloudWatch alarms provide automated monitoring and failover capabilities during connectivity disruptions. upvoted 1 time Submit     Cancel ... TNT87 1 month, 3 days ago Selected Answer: D Data Sovereignty/Residency Compliance: Using a Europe-specific geographic inference profile (prefixed with eu.) ensures that any inference requests initiated by European applications are routed and processed only within AWS Regions located in Europe. This perfectly satisfies the data sovereignty requirement https://aws.amazon.com/blogs/machine-learning/global-cross-region-inference-for-latest-anthropic-claude-opus-sonnet-and-haiku-models-on-amazon-bedrock-in-thailand-malaysia-singapore-indonesia-and-taiwan/ upvoted 1 time Submit     Cancel ... seoyeon_01 2 months, 12 days ago Could someone explain why this answer makes sense in this context? upvoted 1 time Submit     Cancel ...

----------------------------------------

## Exam AWS Certified Generative AI Developer - Professional AIP-C01 topic 1 question 136 discussion



A company is implementing a 2-week initiative to incorporate GenAI into several hundred existing applications to provide context-driven natural language help for users. To simplify the process to choose an appropriate model for each application, a GenAI Developer is building a system to automatically compare foundation models (FMs) based on general text generation accuracy. The system runs a job that performs a series of steps.



First, the system creates a service role and attaches an IAM permissions policy that allows Amazon Bedrock to invoke the FMs and grants access to Amazon S3. Then the system requests and receives access to all the FMs that need to be tested. Then the system creates S3 buckets to store the evaluation results. Then the system creates evaluation configurations by using the TREX built-in dataset. Finally, the system specifies the Accuracy metric and Generation evaluation type in each evaluation configuration.



When the GenAI developer attempts to run the system, it fails with an AccessDenied exception. The GenAI developer must resolve the issue.



Which solution will meet this requirement?

A. Create a trust policy that defines Amazon Bedrock as the service principal. Attach the trust policy to the service role.

B. Configure cross-origin resource sharing (CORS) permissions that allow GET and DELETE actions on the S3 buckets.

C. Change the test dataset from TREX to Gigaword in the evaluation configurations.

D. Change the evaluation type to Summarization and the metric type to Correctness in the evaluation configurations. Forgot my password

**Answer: **

**Timestamp: **

[View on ExamTopics](https://www.examtopics.com/discussions/amazon/view/429346-exam-aws-certified-generative-ai-developer-professional-aip-c01-topic-1-question-136-discussion/)

Comments: TNT87 Most Recent 1 month, 3 days ago Selected Answer: A When you create an AWS identity-based service role for Amazon Bedrock to perform automated model evaluation jobs, it requires two types of policies: 1. Permissions Policy: This grants the role permission to access specific AWS resources (like Amazon S3 and Bedrock foundation models). The developer already attached this. 2. Trust Policy (Assume Role Policy): This defines who is allowed to assume the role. Without a trust policy explicitly listing ://amazonaws.com as a trusted service principal, Amazon Bedrock is blocked from assuming the role to run the evaluation job, resulting in an AccessDenied exception upvoted 1 time Submit     Cancel ...
