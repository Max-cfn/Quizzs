## Exam AWS Certified Generative AI Developer - Professional (AIP-C01) (PDF) topic 1 question 1
Question #: 1
Topic #: 1

A retail company has a generative AI (GenAI) product recommendation application that uses Amazon Bedrock. The application suggests products to customers based on browsing history and demographics. The company needs to implement fairness evaluation across multiple demographic groups to detect and measure bias in recommendations between two prompt approaches. The company wants to collect and monitor fairness metrics in real time. The company must receive an alert if the fairness metrics show a discrepancy of more than 15% between demographic groups. The company must receive weekly reports that compare the performance of the two prompt approaches. Which solution will meet these requirements with the LEAST custom development effort?

A. Configure an Amazon CloudWatch dashboard to display default metrics from Amazon Bedrock API calls. Create custom metrics based on model outputs. Set up Amazon EventBridge rules to invoke AWS lambda functions that perform post-processing analysis on model responses and publish custom fairness metrics.
B. Create the two prompt variants in Amazon Bedrock Prompt Management. Use Amazon Bedrock Flows to deploy the prompt variants with defined traffic allocation. Configure Amazon Bedrock guardrails that have content filters to monitor demographic fairness. Set up Amazon CloudWatch alarms on the GuardrailContentSource dimension that use InvocationsIntervened metrics to detect recommendation discrepancy threshold violations.
C. Set up Amazon SageMaker Clarify to analyze model outputs. Publish fairness metrics to Amazon CloudWatch. Create CloudWatch composite alarms that combine SageMaker Clarify bias metrics with Amazon Bedrock latency metrics to provide a comprehensive fairness evaluation dashboard.
D. Create an Amazon Bedrock model evaluation job to compare fairness between the two prompt variants. Enable model invocation logging in Amazon CloudWatch. Set up CloudWatch alarms for InvocationsIntervened metrics with a dimension for each demographic group.

**Answer: C**

Explanation:
C.Set up Amazon SageMaker Clarify to analyze model outputs. Publish fairness metrics to Amazon CloudWatch. Create CloudWatch composite alarms that combine SageMaker Clarify bias metrics with Amazon Bedrock latency metrics to provide a comprehensive fairness evaluation dashboard

.Using Amazon SageMaker Clarify is specifically designed for bias detection and fairness evaluation across demographic groups. It already provides:

Built-in fairness metrics (e.g., disparate impact, bias across groups)

Direct integration with model outputs

Ability to publish metrics to Amazon CloudWatch

Minimal custom logic compared to building your own fairness pipeline

---

## Exam AWS Certified Generative AI Developer - Professional (AIP-C01) (PDF) topic 1 question 2
Question #: 2
Topic #: 1

A finance company is developing an AI assistant to help clients plan investments and manage their portfolios. The company identifies several high-risk conversation patterns such as requests for specific stock recommendations or guaranteed returns. High-risk conversation patterns could lead to regulatory violations if the company cannot implement appropriate controls. The company must ensure that the AI assistant does not provide inappropriate financial advice, generate content about competitors, or make claims that are not factually grounded in the company's approved financial guidance. The company wants to use Amazon Bedrock Guardrails to implement a solution. Which combination of steps will meet these requirements? (Choose three.)

A. Add the high-risk conversation patterns to a denied topics guardrail.
B. Configure a content filter guardrail to filter prompts that contain the high-risk conversation patterns.
C. Configure a content filter guardrail to filter prompts that contain competitor names.
D. Add the names of competitors as custom word filters. Set the input and output actions to block.
E. Set a low grounding score threshold.
F. Set a high grounding score threshold.

**Answer: ADF**

Explanation:
Justification

Add the high-risk conversation patterns to a denied-topic guardrail (A). This explicitly tells the model to refuse any input that matches the prohibited financial-advice prompts (e.g., “suggest a specific stock to buy” or “guarantee a return”). The deny action prevents the model from ever generating a response for those patterns, directly addressing the regulatory-risk requirement. Configure a content-filter guardrail to filter prompts that contain competitor names (D). By listing competitor names in a custom word filter and setting both input and output actions to block, every request mentioning a rival brand is intercepted before the model can produce any reference to it. This protects the company from generating competitive or market-comparative statements that could be inaccurate or non-compliant. Set a high grounding-score threshold (F). A high grounding score (e.g.,≥0.9) ensures that any generated answer must be tightly tethered to the company’s approved financial guidance or known knowledge base. By forcing the model to meet a strict grounding criterion, only responses grounded in vetted material are allowed to proceed, mitigating hallucinations and unsupported claims.

Why the other options are less suitable

B (filter prompts for high-risk patterns only) – Insufficient on its own because it does not block competitor mentions or enforce grounding; the model could still generate competitive content or unsubstantiated advice if the pattern-matching logic is bypassed. C (filter prompts that contain competitor names) – While useful, it only blocks explicit competitor references and does not protect against indirect references or advice that indirectly promotes a competitor. It also does not address the broader need to enforce grounded, approved responses. E (set a low grounding-score threshold) – A low threshold would relax the grounding requirement, increasing the chance of hallucinated or unverified statements, which directly opposes the goal of ensuring fact-based, compliant advice. G (set a high grounding-score threshold) – The wording “high grounding score threshold” is ambiguous; without context it could refer to raising the minimum score required, which is essentially the same effect as optionF. However, by itself it does not solve the competitor-mention issue, nor does it explicitly block high-risk topics, making it incomplete without the other two actions.

Conclusion

Only the combination ADF simultaneously (1) denies high-risk financial-advice topics, (2) blocks competitor-related prompts, and (3) enforces a stringent grounding requirement on all remaining outputs, thereby delivering a compliant, regulator-safe AI assistant.

References

Amazon Bedrock Guardrails documentation:

https://docs.aws.amazon.com/bedrock/latest/userguide/guardrails.html Guardrails for content filtering and grounding scores:

https://docs.aws.amazon.com/bedrock/latest/userguide/guardrails-content-filtering.html

---

## Exam AWS Certified Generative AI Developer - Professional (AIP-C01) (PDF) topic 1 question 3
Question #: 3
Topic #: 1

A company has deployed an AI assistant as a React application that uses AWS Amplify, an AWS AppSync GraphQL API, and Amazon Bedrock Knowledge Bases. The application uses the GraphQL API to call the Amazon Bedrock RetrieveAndGenerate API for knowledge base interactions. The company configures an AWS Lambda resolver to use the RequestResponse invocation type. Application users report frequent timeouts and slow response times. Users report these problems more frequently for complex questions that require longer processing. The company needs a solution to fix these performance issues and enhance the user experience. Which solution will meet these requirements?

A. Use AWS Amplify AI Kit to implement streaming responses from the GraphQL API and to optimize client-side rendering.
B. Increase the timeout value of the Lambda resolver. Implement retry logic with exponential backoff.
C. Update the application to send an API request to an Amazon SQS queue. Update the AWS AppSync resolver to poll and process the queue.
D. Change the RetrieveAndGenerate API to the InvokeModelWithResponseStream API. Update the application to use an Amazon API Gateway WebSocket API to support the streaming response.

**Answer: A**

Explanation:
Solution justification

OptionA – Adopt AWS Amplify AI Kit with streaming responses Amplify AIKit provides built-in support for streaming GraphQL responses, allowing the client to receive partial results as they are generated. This reduces perceived latency for complex queries that involve RetrieveAndGenerate calls. Streaming enables the front-end to render UI updates incrementally (e.g., token-by-token) instead of waiting for the entire response, which directly mitigates timeout and slowdown experiences. No changes to the existing Lambda or GraphQL resolver are required, preserving existing security models and simplifying deployment. OptionB – Raise Lambda timeout Only prolongs the maximum allowed execution time; it does not address the underlying bottleneck caused by long-running RetrieveAndGenerate calls. If the knowledge-base retrieval exceeds the new timeout, the request still fails, and increased timeouts raise cost and may hit other limits (e.g., memory). Adding retry logic with exponential back-off can increase load on downstream services without improving response speed for real-time user interactions. OptionC – Route through SQS and poll Introduces asynchronous decoupling but shifts the latency problem to polling intervals and message-queue processing, which adds complexity and does not provide immediate feedback to the UI. Polling can increase overall system latency for users and requires additional orchestration logic in the AppSync resolver, contrary to the goal of enhancing interactive UI responsiveness. OptionD – Switch to InvokeModelWithResponseStream and use APIGateway WebSocket While streaming the model response is beneficial, implementing a WebSocket endpoint adds significant architectural overhead (authentication, connection management, client-side hand-off) that is unnecessary when Amplify AIKit already supplies a streaming GraphQL interface. This option requires major code rewrites and introduces extra infrastructure, making it less optimal compared with the incremental solution offered by Amplify AI Kit.

Conclusion – OptionA directly tackles the user-perceived latency through built-in streaming support and incremental rendering, making it the most appropriate answer.

References

AWS Amplify AI Kit documentation – Streaming GraphQL responses:

https://docs.aws.amazon.com/amplify/latest/userguide/ai-kit-streaming.html Amazon Bedrock RetrieveAndGenerate API – Response streaming:

https://docs.aws.amazon.com/bedrock/latest/userguide/runtime-apis.html#retrieve-and-generate-streaming

---

## Exam AWS Certified Generative AI Developer - Professional (AIP-C01) (PDF) topic 1 question 4
Question #: 4
Topic #: 1

An ecommerce company operates a global product recommendation system that needs to switch between multiple foundation models (FM) in Amazon Bedrock based on regulations, cost optimization, and performance requirements. The company must apply custom controls based on proprietary business logic, including dynamic cost thresholds, AWS Region-specific compliance rules, and real-time A/B testing across multiple FMs. The system must be able to switch between FMs without deploying new code. The system must route user requests based on complex rules including user tier, transaction value, regulatory zone, and real-time cost metrics that change hourly and require immediate propagation across thousands of concurrent requests. Which solution will meet these requirements?

A. Deploy an AWS Lambda function that uses environment variables to store routing rules and Amazon Bedrock FM IDs. Use the Lambda console to update the environment variables when business requirements change. Configure an Amazon API Gateway REST API to read request parameters to make routing decisions.
B. Deploy Amazon API Gateway REST API request transformation templates to implement routing logic based on request attributes. Store Amazon Bedrock FM endpoints as REST API stage variables. Update the variables when the system switches between models.
C. Configure an AWS Lambda function to fetch routing configurations from the AWS AppConfig Agent for each user request. Run business logic in the Lambda function to select the appropriate FM for each request. Expose the FM through a single Amazon API Gateway REST API endpoint.
D. Use AWS Lambda authorizers for an Amazon API Gateway REST API to evaluate routing rules that are stored in AWS AppConfig. Return authorization contexts based on business logic. Route requests to model-specific Lambda functions for each Amazon Bedrock FM.

**Answer: C**

Explanation:
Why option C is the optimal choice

Dynamic, per-request configuration – The Lambda function pulls its routing rules from AWSAppConfig using the AppConfig Agent. This means the configuration can be updated in real time (e.g., new cost thresholds, compliance zones) and the change is instantly visible to every concurrent request without redeploying code or restarting services. Single entry point – All incoming requests are funneled through one Amazon API Gateway REST API endpoint. The Lambda inspects the request attributes (user tier, transaction value, region, etc.), evaluates the current AppConfig payload, and forwards the request to the appropriate Bedrock foundation model. This satisfies the “no-code redeploy” requirement and simplifies API management. Scalable and low-latency routing – AppConfig delivers configuration via a push-based model to the Lambda runtime, ensuring that thousands of simultaneous requests receive the latest rules with minimal overhead. Lambda’s built-in concurrency handles the traffic spikes typical of an ecommerce recommendation engine.

Why the other options fall short Option A relies on Lambda environment variables to store routing information. Environment variables are immutable at deployment time; updating them requires a new deployment or a configuration-change Lambda, which cannot meet the “immediate propagation” and “real-time hourly changes” demands. Limits on variable size and the lack of a push-based update mechanism make this approach unsuitable for high-velocity rule changes. Option B uses APIGateway request-transformation templates and stage variables for routing. Stage variables are static per stage and cannot be altered on a per-request basis; they require a new deployment to change routing logic. This prevents the rapid, granular adjustments needed for regulatory or cost-based switches. Option D applies Lambda authorizers to evaluate routing rules stored in AppConfig, then routes to model-specific Lambda functions. While authorizers can read AppConfig, they are primarily designed for authentication/authorization, not for business-logic routing. Maintaining separate Lambda functions per model introduces additional cold-start latency, operational complexity, and does not provide a single unified endpoint, making it less efficient for a globally-scaled recommendation system.

Conclusion – Option C delivers a single, highly-scalable API gateway endpoint that dynamically routes each request to the appropriate Bedrock foundation model based on continuously refreshed configuration from AppConfig, directly addressing the regulatory, cost-optimization, and real-time A/B-testing requirements.

References

AWSAppConfig – Configurations that can be pushed to applications

https://docs.aws.amazon.com/appconfig/latest/userguide/intro.html

AWS Lambda – Invocation model and configuration management

https://docs.aws.amazon.com/lambda/latest/dg/invocation-requirements.html

---

## Exam AWS Certified Generative AI Developer - Professional (AIP-C01) (PDF) topic 1 question 5
Question #: 5
Topic #: 1

A company is developing an internal generative AI (GenAI) assistant that uses Amazon Bedrock to summarize corporate documents for multiple business units. The GenAI assistant must generate responses in a consistent format that includes a document summary, classification of business risks, and terms that are flagged for review. The GenAI assistant must adapt the tone of responses for each user's business unit, such as legal, human resources, or finance. The GenAI assistant must block hate speech, inappropriate topics, and sensitive information such as personal health information. The company needs a solution to centrally manage prompt variants across business units and teams. The company wants to minimize ongoing orchestration efforts and maintenance for post-processing logic. The company also wants to have the ability to adjust content moderation criteria for the GenAI assistant over time. Which solution will meet these requirements with the LEAST maintenance overhead?

A. Use Amazon Bedrock Prompt Management to configure reusable templates and business unit-specific prompt variants. Apply Amazon Bedrock guardrails that have category filters and sensitive term lists to block prohibited content.
B. Use Amazon Bedrock Prompt Management to define base templates. Enforce business unit-specific tone by using system prompt variables. Configure Amazon Bedrock guardrails to apply audience-based threshold tuning. Manage the guardrails by using an internal administration API.
C. Use Amazon Bedrock with business unit-based instruction injection in API calls. Store response formatting rules in Amazon DynamoDB. Use AWS Step functions to validate responses. Use Amazon Comprehend to apply content filters after the GenAI assistant generates responses.
D. Use Amazon Bedrock with custom prompt templates that are stored in Amazon DynamoDB. Create one AWS Lambda function to select business unit-specific prompts. Create a second Lambda function to call Amazon Comprehend to filter prohibited content from responses.

**Answer: A**

Explanation:
Why option A is the best fit

Centralised prompt management – Amazon Bedrock Prompt Management lets you store reusable base templates and create business-unit-specific variants in a single catalogue, eliminating the need to maintain separate artefact stores. Integrated guardrails – Built-in guardrails provide category filters (e.g., Hate Speech, PII) and allow you to adjust moderation thresholds centrally; no additional post-processing services are required. Minimal orchestration – All control-plane functions (template selection, variant injection, guardrail activation) are handled by Bedrock itself, so there is no extra workflow engine, Lambda code, or DynamoDB tables to operate and monitor. Low ops overhead – Changes to tone or moderation rules are applied by updating the prompt or guardrail configuration, which is a single-click operation in the AWS console or API, reducing ongoing maintenance effort.

Why the other options are less suitable

Option B requires an internal administration API to manage guardrails, adding custom development and operational burden; the API must be built, secured, and kept in sync with guardrail changes. Option C introduces Step Functions and Amazon Comprehend as separate services for response validation and filtering, creating extra orchestration layers and latency while increasing the number of components to monitor. Option D relies on custom Lambda functions and DynamoDB storage to drive prompt selection and content filtering; this spreads the logic across multiple services, demanding more code, testing, and infrastructure maintenance.

References

Amazon Bedrock Prompt Management: https://docs.aws.amazon.com/bedrock/latest/userguide/prompt- management.html Amazon Bedrock Guardrails (content filtering):

https://docs.aws.amazon.com/bedrock/latest/userguide/guardrails.html

---

## Exam AWS Certified Generative AI Developer - Professional (AIP-C01) (PDF) topic 1 question 6
Question #: 6
Topic #: 1

A financial services company is building a customer support application that retrieves relevant financial regulation documents from a database based on semantic similarities to user queries. The application must integrate with Amazon Bedrock to generate responses. The application must be able to search documents that are in English, Spanish, and Portuguese. The application must filter documents by metadata such as publication date, regulatory agency, and document type. The database stores approximately 10 million document embeddings. To minimize operational overhead, the company wants a solution that minimizes management and maintenance effort. The application must provide low- latency responses for real-time customer interactions. Which solution will meet these requirements?

A. Use Amazon OpenSearch Serverless to provide vector search capabilities and metadata filtering. Connect to Amazon Bedrock Knowledge Bases to enable Retrieval Augmented Generation (RAG) capabilities that use an Anthropic Claude foundation model (FM).
B. Deploy an Amazon Aurora PostgreSQL database with the pgvector extension. Define tables to store embeddings and metadata. Use SQL queries to perform similarity searches. Send retrieved documents to Amazon Bedrock to generate responses.
C. Use Amazon S3 Vectors to configure a vector index and non-filterable metadata fields. Integrate S3 Vectors with Amazon Bedrock to enable Retrieval Augmented Generation (RAG) capabilities.
D. Set up an Amazon Neptune Analytics graph database. Configure a vector index that has appropriate dimensionality to store document embeddings. Use Amazon Bedrock to perform graph-based retrieval and to generate responses.

**Answer: A**

Explanation:
Justification

Option A is the only solution that simultaneously delivers high-performance vector search with rich metadata filtering, low-latency retrieval, and a fully managed, low-overhead service. Amazon OpenSearch Serverless automatically scales vector indexes to store the ~10million embeddings and supports filtered queries on metadata (publication date, regulatory agency, document type). It integrates natively with Amazon Bedrock Knowledge Bases, enabling Retrieval-Augmented Generation (RAG) where the retrieved documents are passed to an Anthropic Claude FM for question generation without additional infrastructure. As a serverless offering, OpenSearch Serverless eliminates the need for cluster provisioning, patching, or capacity planning, directly satisfying the requirement for minimal operational overhead. Vector search in OpenSearch is optimized for low-latency responses, aligning with the real-time customer-interaction latency target. Option B requires operational management of an Amazon Aurora PostgreSQL cluster and custom SQL-based similarity logic. While it can store embeddings and metadata, the need to maintain the database, tune index parameters, and orchestrate the pipeline adds significant overhead. Moreover, Aurora does not provide built-in vector acceleration comparable to dedicated vector engines, resulting in potentially higher latency. Option C uses Amazon S3 Vectors, which is currently limited to non-filterable metadata and lacks native integration with Bedrock Knowledge Bases for RAG. The inability to filter on regulatory metadata makes it unsuitable for the described use case, and S3 Vectors offers no managed query engine for low-latency retrieval. Option D relies on Amazon Neptune Analytics, which is primarily a graph-analytics service. Although it can store vectors, Neptune is not optimized for large-scale vector similarity searches nor for metadata filtering in the same way as OpenSearch. Setting up a graph-based retrieval workflow would introduce extra complexity and does not guarantee the low-latency behavior required for real-time customer interactions.

Conclusion

Option A best meets all functional requirements—semantic search across three languages, metadata filtering, low-latency RAG integration with Bedrock, and minimal operational maintenance—by leveraging a fully managed vector search service that directly supports the necessary filtering capabilities and seamless Bedrock connectivity.

References

Amazon OpenSearch Serverless – Vector Search and Filters: https://docs.aws.amazon.com/opensearch- serverless/latest/developerguide/vectors.html Amazon Bedrock Knowledge Bases – Retrieval-Augmented Generation:

https://docs.aws.amazon.com/bedrock/latest/userguide/knowledge-bases.html

---

## Exam AWS Certified Generative AI Developer - Professional (AIP-C01) (PDF) topic 1 question 7
Question #: 7
Topic #: 1

A medical company is building a generative AI (GenAI) application that uses RAG to provide evidence-based medical information. The application uses Amazon OpenSearch Service to retrieve vector embeddings. Users report that searches frequently miss results that contain exact medical terms and acronyms and return too many semantically similar but irrelevant documents. The company needs to improve retrieval quality and maintain low end user latency, even as the document collection grows to millions of documents. Which solution will meet these requirements with the LEAST operational overhead?

A. Configure hybrid search by combining vector similarity with keyword matching to improve semantic understanding and exact term and acronym matching.
B. Increase the dimensions of the vector embeddings from 384 to 1536. Use a post-processing AWS Lambda function to filter out irrelevant results after retrieval.
C. Replace OpenSearch Service with Amazon Kendra. Use query expansion to handle medical acronyms and terminology variants during pre-processing.
D. Implement a two-stage retrieval architecture in which initial vector search results are re-ranked by an ML model that is hosted on Amazon SageMaker AI.

**Answer: A**

Explanation:
Why optionA is correct

OpenSearchService already supports hybrid queries that combine vector (semantic) similarity with classic keyword (exact term) matching. By adding a keyword clause for medical terms and acronyms, the system can retrieve documents that contain the precise token while still ranking semantically relevant results higher. Hybrid search improves precision for medical vocabularies without altering the underlying embedding model or requiring additional compute resources, keeping latency low even as the index scales to millions of documents. It leverages existing OpenSearch capabilities, so the operational overhead is minimal—no new services to manage, no model training, and no extra data pipelines.

Why the other options are less suitable

OptionB: Increasing embedding dimensionality expands index size and memory consumption, leading to higher storage cost and longer index rebuild times. A post-processing Lambda adds another asynchronous step, increasing end-to-end latency and operational complexity. OptionC: Replacing OpenSearch with AmazonKendra introduces a migration effort, new service quotas, and a different query model. Kendra’s built-in query-expansion is limited for custom medical terminology and does not integrate with your existing vector pipeline, adding substantial operational overhead. OptionD: A two-stage re-ranking workflow requires hosting an ML model on SageMaker, managing model updates, scaling endpoints, and incurring additional inference latency. This approach adds significant operational burden compared to the built-in hybrid search feature.

References

OpenSearch hybrid search documentation: https://docs.aws.amazon.com/opensearch- service/latest/developerguide/hybrid-search.html Keyword and term queries in OpenSearch: https://opensearch.org/docs/latest/query-dsl/keyword-search/

---

## Exam AWS Certified Generative AI Developer - Professional (AIP-C01) (PDF) topic 1 question 8
Question #: 8
Topic #: 1

A company runs a generative AI (GenAI)-powered summarization application in an application AWS account that uses Amazon Bedrock. The application architecture includes an Amazon API Gateway REST API that forwards requests to AWS Lambda functions that are attached to private VPC subnets. The application summarizes sensitive customer records that the company stores in a governed data lake in a centralized data storage account. The company has enabled Amazon S3, Amazon Athena, and AWS Glue in the data storage account. The company must ensure that calls that the application makes to Amazon Bedrock use only private connectivity between the company's application VPC and Amazon Bedrock. The company's data lake must provide fine-grained column-level access across the company's AWS accounts. Which solution will meet these requirements?

A. In the application account, create interface VPC endpoints for Amazon Bedrock runtimes. Run Lambda functions in private subnets. Use IAM conditions on inference and data-plane policies to allow calls only to approved endpoints and roles. In the data storage account, use AWS Lake Formation LF-tag-based access control to create table and column-level cross-account grants.
B. Run Lambda functions in private subnets. Configure a NAT gateway to provide access to Amazon Bedrock and the data lake. Use S3 bucket policies and ACLs to manage permissions. Export AWS CloudTrail logs to Amazon S3 to perform weekly reviews.
C. Create a gateway endpoint only for Amazon S3 in the application account. Invoke Amazon Bedrock through public endpoints. Use database-level grants in AWS Lake Formation to manage data access. Stream AWS CloudTrail logs to Amazon CloudWatch Logs. Do not set up metric filters or alarms.
D. Use VPC endpoints to provide access to Amazon Bedrock and Amazon S3 in the application account. Use only IAM path-based policies to manage data lake access. Send AWS CloudTrail logs to Amazon CloudWatch Logs. Periodically create dashboards and allow public fallback for cross-Region reads to reduce setup time.

**Answer: A**

Explanation:
Why optionA is the only solution that satisfies all requirements

Private connectivity to Amazon Bedrock – Creates interface VPC endpoints in the application account, ensuring all Bedrock API calls stay inside the VPC and never traverse the public internet. Lambda functions can invoke Bedrock through these endpoints while remaining in private subnets. Fine-grained column-level access across accounts – Leverages AWS Lake Formation with LF-tag-based access control. Tags can be attached to columns (e.g., pii, financial) and policies can grant or deny access on a per-tag basis, enabling cross-account, column-level permissions without broad S3 bucket policies. Secure data-lake integration – By using Lake Formation tags together with IAM conditions on inference and data-plane operations, the solution enforces that only approved roles and validated requests can read/write governed tables, satisfying the govern-ance requirement. Least-privilege networking – Lambda runs in private subnets with no NAT or Internet-gateway exposure; traffic to Bedrock and S3 stays within the VPC. Auditability – IAM conditions can be tied to CloudTrail logging; no additional routing (NAT) is needed, keeping the architecture simple and compliant.

Why the alternative options fail

OptionB routes Bedrock traffic through a NAT gateway and keeps the service publicly reachable, violating the “private connectivity only” mandate. It also relies on S3 bucket policies and ACLs, which cannot enforce column-level confidentiality across accounts. OptionC uses only a gateway endpoint for S3 and accesses Bedrock through public endpoints, directly contradicting the private-connectivity requirement. It applies coarse-grained database-level grants instead of the needed column-level controls and lacks any enforcement of secure cross-account access. OptionD proposes IAM path-based policies for data-lake access, which are insufficient for fine-grained column permissions and do not integrate with Lake Formation’s tag-based model. It also suggests allowing public fallback for cross-Region reads, compromising data security and governance.

Conclusion OptionA uniquely combines private VPC endpoints for Bedrock, Lambda execution in private subnets, and Lake Formation LF-tag governance to meet both the connectivity and fine-grained access requirements in a secure, auditable manner.

References Amazon VPC Endpoints for Amazon Bedrock –

https://docs.aws.amazon.com/bedrock/latest/userguide/bedrock-vpc-endpoints.html Lake Formation LF-Tag-Based Access Control – https://docs.aws.amazon.com/lakeformation/latest/dg/ lgfed- access-control.html

---

## Exam AWS Certified Generative AI Developer - Professional (AIP-C01) (PDF) topic 1 question 9
Question #: 9
Topic #: 1

A media company must use Amazon Bedrock to implement a robust governance process for AI-generated content. The company needs to manage hundreds of prompt templates. Multiple teams use the templates across multiple AWS Regions to generate content. The solution must provide version control with approval workflows that include notifications for pending reviews. The solution must also provide detailed audit trails that document prompt activities and consistent prompt parameterization to enforce quality standards. Which solution will meet these requirements?

A. Configure Amazon Bedrock Studio prompt templates. Use Amazon CloudWatch to create dashboards that display prompt usage metrics. Store the approval status of content in Amazon DynamoDB. Use AWS Lambda functions to enforce approvals.
B. Use Amazon Bedrock Prompt Management to implement version control. Configure AWS CloudTrail for audit logging. Use IAM policies to control approval permissions. Create parameterized prompt templates by specifying variables.
C. Use AWS Step Functions to create an approval workflow. Store prompts as documents in Amazon S3. Use tags to implement version control. Use Amazon EventBridge to send notifications.
D. Deploy Amazon SageMaker Canvas with prompt templates that are stored in Amazon S3. Use AWS CloudFormation to implement version control. Use AWS Config to enforce approval policies.

**Answer: B**

Explanation:
Why optionB is the optimal choice

Prompt version control & approval workflow – Amazon BedrockPrompt Management directly supports versioned prompt libraries, change histories, and mandatory approval gates, which satisfies the requirement to manage hundreds of templates across teams and regions. Auditability – CloudTrail records every call to Bedrock services (including prompt creation, update, and execution), giving an immutable trail that can be analyzed for compliance and forensic purposes. Permission enforcement – IAM policies can be scoped to specific prompt versions or tags, allowing fine-grained control over who may edit, approve, or publish prompts, ensuring that only vetted content proceeds to generation. Parameter-driven templates – By defining placeholders (e.g., $ region , $ tone ) within Bedrock prompts, teams can reuse the same logical structure while supplying region-specific or team-specific variables, guaranteeing consistent parameterization and quality standards. Scalable multi-region deployment – Bedrock is a regional service; prompts managed in one region are automatically replicated or can be shared via cross-region configuration, meeting the distributed usage pattern without additional glue code.

Why the alternative options fall short

OptionA relies on CloudWatch metrics and DynamoDB to store approval status. While functional, it does not provide native prompt versioning or built-in approval workflows; implementing those would require custom Lambda orchestration, increasing operational complexity and reducing audit granularity compared with Bedrock’s native capabilities. OptionC uses Step Functions for approval sequencing and S3 for storage. This approach can enforce workflows but lacks a purpose-built prompt-versioning schema and does not integrate tightly with Bedrock’s prompt-parameter system, resulting in fragmented governance and weaker audit trails. OptionD involves SageMaker Canvas, which is oriented toward low-code data science rather than prompt lifecycle management. CloudFormation versioning and AWS Config are not designed for fine-grained prompt approvals, leading to over-provisioned resources and limited support for multi-region prompt sharing.

References

Amazon BedrockPrompt Management: https://docs.aws.amazon.com/bedrock/latest/userguide/prompt- management.html AWS CloudTrail Logging for Bedrock: https://docs.aws.amazon.com/bedrock/latest/userguide/cloudtrail- logging.html

---

## Exam AWS Certified Generative AI Developer - Professional (AIP-C01) (PDF) topic 1 question 10
Question #: 10
Topic #: 1

A company is developing a customer support application that uses Amazon Bedrock foundation models (FMs) to provide real-time AI assistance to the company's employees. The application must display AI-generated responses character by character as the responses are generated. The application needs to support thousands of concurrent users with minimal latency. The responses typically take 15 to 45 seconds to finish. Which solution will meet these requirements?

A. Configure an Amazon API Gateway WebSocket API with an AWS Lambda integration. Configure the WebSocket API to invoke the Amazon Bedrock InvokeModelWithResponseStream API and stream partial responses through WebSocket connections.
B. Configure an Amazon API Gateway REST API with an AWS Lambda integration. Configure the REST API to invoke the Amazon Bedrock standard InvokeModel API and implement frontend client-side polling every 100 ms for complete response chunks.
C. Implement direct frontend client connections to Amazon Bedrock by using IAM user credentials and the InvokeModelWithResponseStream API without any intermediate gateway or proxy layer.
D. Configure an Amazon API Gateway HTTP API with an AWS Lambda integration. Configure the HTTP API to cache complete responses in an Amazon DynamoDB table and serve the responses through multiple paginated GET requests to frontend clients.

**Answer: A**

Explanation:
Why optionA is the optimal solution

WebSocket streaming delivers data to the client as soon as it is generated, eliminating the need for periodic polling and reducing round-trip latency to near-zero. This matches the requirement for “character-by-character” display and sub-second response times. InvokeModelWithResponseStream is purpose-built for low-latency, incremental output from Bedrock models; integrating it directly through a WebSocket API preserves the streaming semantics while decoupling client logic from the model endpoint. AWS Lambda scales automatically to thousands of concurrent connections, handling connection management, authentication, and back-pressure without provisioning servers. API Gateway WebSocket can broadcast messages to many connected clients, supporting thousands of simultaneous users with minimal operational overhead. The architecture isolates compute (Lambda) from storage and networking, allowing independent scaling of request processing and stream handling.

Why the other options fall short

OptionB (REST+polling) introduces fixed 100ms client-side intervals, adding artificial latency and increasing load on both client and backend; it cannot guarantee true real-time character streaming. OptionC (direct IAM-authenticated connections) bypasses API Gateway’s scaling, throttling, and authorisation controls, exposing Bedrock to unmanaged client traffic and making it difficult to enforce usage quotas or monitor concurrent streams. OptionD (HTTP API + DynamoDB caching + pagination) stores full responses rather than streaming incremental text, requiring pagination that introduces additional latency and complexity; it does not provide the character-by-character experience needed.

References

Amazon API Gateway WebSocket APIs –

https://docs.aws.amazon.com/apigateway/latest/developerguide/websocket-api.html Bedrock InvokeModelWithResponseStream –https://docs.aws.amazon.com/bedrock/latest/userguide/invoke- models-streaming.html

---

## Exam AWS Certified Generative AI Developer - Professional (AIP-C01) (PDF) topic 1 question 11
Question #: 11
Topic #: 1

A company is using Amazon Bedrock to design an application to help researchers apply for grants. The application is based on an Amazon Nova Pro foundation model (FM). The application contains four required inputs and must provide responses in a consistent text format. The company wants to receive a notification in Amazon Bedrock if a response contains bullying language. However, the company does not want to block all flagged responses. The company creates an Amazon Bedrock flow that takes an input prompt and sends it to the Amazon Nova Pro FM. The Amazon Nova Pro FM provides a response. Which additional steps must the company take to meet these requirements? (Choose two.)

A. Use Amazon Bedrock Prompt Management to specify the required inputs as variables. Select an Amazon Nova Pro FM. Specify the output format for the response. Add the prompt to the prompts node of the flow.
B. Create an Amazon Bedrock guardrail that applies the hate content filter. Set the filter response to block. Add the guardrail to the prompts node of the flow.
C. Create an Amazon Bedrock prompt router. Specify an Amazon Nova Pro FM. Add the required inputs as variables to the input node of the flow. Add the prompt router to the prompts node. Add the output format to the output node.
D. Create an Amazon Bedrock guardrail that applies the insults content filter. Set the filter response to detect. Add the guardrail to the prompts node of the flow.
E. Create an Amazon Bedrock application inference profile that specifies an Amazon Nova Pro FM. Specify the output format for the response in the description. Include a tag for each of the input variables. Add the profile to the prompts node of the flow.

**Answer: AD**

Explanation:
Why optionAD is correct

A – The flow must treat the four required inputs as named variables so they can be reused consistently across prompts. Using Bedrock Prompt Management, you create a prompt that references those variables, select Amazon NovaPro as the model, and explicitly define the desired output format. This guarantees that every invocation receives the same structured response. D – Bullying language corresponds to the insults content filter. To be notified whenever such language appears, you must attach a guardrail that uses the insults filter with the detect response type. “Detect” does not block the output; it simply raises a signal (e.g., a CloudWatch alarm or SNS notification) that the application can consume, satisfying the requirement to receive a notification without rejecting the response.

Why the other options are not appropriate B – The hate-content filter is unrelated to bullying language and, when set to block, would reject valid answers, contradicting the “do not block all flagged responses” requirement. C – A prompt router is useful for selecting among multiple models based on input characteristics, but the scenario already fixes a single NovaPro model. Adding a router does not help with input-variable handling or content-filter detection. E – While an inference profile can specify a model, it does not provide a mechanism for defining prompt variables, output formatting, or content-filter detection. Tags on variables are purely metadata and do not affect filter behavior.

Thus, the only combination that simultaneously enforces consistent input handling/output formatting and provides a non-blocking detection of insulting language is A+D.

References

Prompt Management in Amazon Bedrock – https://docs.aws.amazon.com/bedrock/latest/userguide/prompt- management.html Guardrails for content filtering (insults filter) –

https://docs.aws.amazon.com/bedrock/latest/userguide/guardrails.html#guardrails-filters-insults

---

## Exam AWS Certified Generative AI Developer - Professional (AIP-C01) (PDF) topic 1 question 12
Question #: 12
Topic #: 1

A healthcare company is using Amazon Bedrock to build a Retrieval Augmented Generation (RAG) application that helps practitioners make clinical decisions. The application must achieve high accuracy for patient information retrievals, identify hallucinations in generated content, and reduce human review costs. Which solution will meet these requirements?

A. Use Amazon Comprehend to analyze and classify RAG responses and to extract medical entities and relationships. Use AWS Step Functions to orchestrate automated evaluations. Configure Amazon CloudWatch metrics to track entity recognition confidence scores. Configure CloudWatch to send an alert when accuracy falls below specified thresholds.
B. Implement automated large language model (LLM)-based evaluations that use a specialized model that is fine-tuned for medical content to assess all responses. Deploy AWS Lambda functions to parallelize evaluations. Publish results to Amazon CloudWatch metrics that track relevance and factual accuracy.
C. Configure Amazon CloudWatch Synthetics to generate test queries that have known answers on a regular schedule, and track model success rates. Set up dashboards that compare synthetic test results against expected outcomes.
D. Deploy a hybrid evaluation system that uses an automated LLM-as-a-judge evaluation to initially screen responses and targeted human reviews for edge cases. Use Amazon SageMaker Feature Store to maintain evaluation datasets. Use a built-in Amazon Bedrock evaluation to track retrieval precision and hallucination rates.

**Answer: D**

Explanation:
Why optionD is the best fit

Hybrid evaluation workflow – It combines an automated LLM-as-judge step to flag low-confidence or potentially hallucinated outputs with targeted human review for edge cases, directly addressing the need for both high-accuracy retrievals and cost-effective human oversight. Built-in Bedrock evaluation – Utilises Amazon Bedrock’s native evaluation metrics for retrieval precision and hallucination detection, giving a standardized, out-of-the-box way to track the exact KPIs the question emphasizes. Scalable data store – Amazon SageMaker Feature Store centralises the evaluation dataset and feature engineering artefacts, enabling versioned retrieval-ground truth pairs that can be reused across test runs and audits. End-to-end integration – The solution leverages services native to the AWS stack (Bedrock, SageMaker, CloudWatch) without requiring external orchestration tools or custom metrics pipelines, simplifying deployment and maintenance while meeting the security and compliance expectations of a healthcare workload.

Why the other options are less suitable

OptionA – Relies solely on Comprehend for entity extraction and CloudWatch alerts on confidence scores. It does not provide any hallucination-specific evaluation, nor does it incorporate a dedicated LLM-judge or any human-in-the-loop review, so it cannot guarantee retrieval accuracy at the required level. OptionB – Involves fine-tuning a separate medical model and running parallel Lambda evaluations. This approach adds unnecessary model-management overhead, introduces additional training pipelines, and does not address the need for a systematic hallucination-detection mechanism or cost-controlled human review. OptionC – Uses CloudWatch Synthetics to generate synthetic queries with known answers. While useful for regression testing, synthetic queries cannot reflect the rich, unstructured nature of real clinical prompts, and the solution lacks any mechanism for detecting or mitigating hallucinations in generated content.

References

Amazon Bedrock Model Evaluation – https://docs.aws.amazon.com/bedrock/latest/userguide/evaluate- models.html SageMaker Feature Store Documentation –

https://docs.aws.amazon.com/sagemaker/latest/developerguide/feature-store.html

These resources detail the evaluation capabilities and data-management best practices that underpin the recommended hybrid approach.

---

## Exam AWS Certified Generative AI Developer - Professional (AIP-C01) (PDF) topic 1 question 13
Question #: 13
Topic #: 1

Company configures a landing zone in AWS Control Tower. The company handles sensitive data that must remain within the European Union. The company must use only the eu-central-1 Region. The company uses SCPs to enforce data residency policies. GenAI developers at the company are assigned IAM roles that have full permissions for Amazon Bedrock. The company must ensure that GenAI developers can use the Amazon Nova Pro model through Amazon Bedrock only by using cross-Region inference (CRI) and only in eu-central-1. The company enables model access for the GenAI developer IAM roles in Amazon Bedrock. However, when a GenAI developer attempts to invoke the model through the Amazon Bedrock Chat/Text playground, the GenAI developer receives the following error. User: arn:aws:sts::123456789012:assumed-role/AssumedDevRole/DevUserName Action: bedrock:InvokeModelWithResponseStream On resource(s): arn:aws:bedrock:eu-west-3::foundation-model/amazon.nova-pro-v1:0 Context: a service control policy explicitly denies the action The company needs a solution to resolve the error. The solution must retain the company's existing governance controls and must provide precise access control. The solution must comply with the company's existing data residency policies. Which combination of solutions will meet these requirements? (Choose two.)

A. Add an AdministratorAccess policy to the GenAI developer IAM role.
B. Extend the existing SCPs to enable CRI for the eu.amazon.nova-pro-v1:0 inference profile.
C. Enable Amazon Bedrock model access for Amazon Nova Pro in the eu-west-3 Region.
D. Validate that the GenAI developer IAM roles have permissions to invoke Amazon Nova Pro through the eu.amazon.nova-pro.v1:0 inference profile on all European Union AWS Regions that can serve the model.
E. Extend the existing SCP to enable CRI for the eu.* inference profile.

**Answer: BD**

Explanation:
WhyBD is the only combination that satisfies all constraints

The company’s SCPs already block bedrock:InvokeModelWithResponseStreamOn for the NovaPro inference profile. Bdirectly addresses this block by extending the existing SCPs to permit the specific CRI action eu.amazon.nova-pro-v1:0 – the only profile that maps to the EU-based model and respects the residency requirement. Densures that the GenAI developers’ IAM roles contain the necessary bedrock:InvokeModel (and CRI) permissions in every EU Region capable of serving NovaPro. This gives the developers the exact granularity they need without granting blanket admin rights or opening access to non-EU regions.

Why the other choices fail the governance and residency goals

A – AdministratorAccess – Grants broad, unlimited privileges that override the company’s least-privilege and SCP-based governance, making it incompatible with the required precise control. C – Enable model access ineu-west-3 – The model is not available ineu-west-3 for NovaPro; enabling it would either be impossible or would force the company to relax its “must stay ineu-central-1” policy, breaking data-residency rules. E – Extend SCPs to eu.* inference profiles – This would allow CRI across any EU region, potentially letting developers invoke models in regions that do not meet the data-residency constraint, thus weakening the existing controls.

Result – Only B + D provides a targeted SCP amendment that respects the allowed inference profile and validates the IAM permissions needed across all compliant EU regions, keeping the existing governance model intact.

References

Amazon Bedrock model access and inference profiles –

https://docs.aws.amazon.com/bedrock/latest/userguide/models.html Service control policies (SCPs) – Using SCPs with Amazon Bedrock –

https://docs.aws.amazon.com/organizations/latest/userguide/orgs_manage_scp.html Cross-Region inference (CRI) for Amazon Bedrock –

https://docs.aws.amazon.com/bedrock/latest/userguide/-cross-region-inference.html (All links are current as of the 2024 certification guide.)

---

## Exam AWS Certified Generative AI Developer - Professional (AIP-C01) (PDF) topic 1 question 14
Question #: 14
Topic #: 1

A financial services company is developing a customer service AI assistant by using Amazon Bedrock. The AI assistant must not discuss investment advice with users. The AI assistant must block harmful content, mask personally identifiable information (PII), and maintain audit trails for compliance reporting. The AI assistant must apply content filtering to both user inputs and model responses based on content sensitivity. The company requires an Amazon Bedrock guardrail configuration that will effectively enforce policies with minimal false positives. The solution must provide multiple handling strategies for multiple types of sensitive content. Which solution will meet these requirements?

A. Configure a single guardrail and set content filters to high for all categories. Set up denied topics for investment advice and include sample phrases to block. Set up sensitive information filters that apply the block action for all PII entities. Apply the guardrail to all model inference calls.
B. Configure multiple guardrails by using tiered policies. Create one guardrail and set content filters to high. Configure the guardrail to block PII for public interactions. Configure a second guardrail and set content filters to medium. Configure the second guardrail to mask PII for internal use. Configure multiple topic-specific guardrails to block investment advice and set up contextual grounding checks.
C. Configure a guardrail and set content filters to medium for harmful content. Set up denied topics for investment advice and include clear definitions and sample phrases to block. Configure sensitive information filters to mask PII in responses and to block financial information in inputs. Enable both input and output evaluations that use custom blocked messages for audits.
D. Create a separate guardrail for each use case. Create one guardrail that applies a harmful content filter. Create a guardrail to apply topic filters for investment advice. Create a guardrail to apply sensitive information filters to block PII. Use AWS Step Functions to chain the guardrails together sequentially. Use conditional logic based on content classification.

**Answer: C**

Explanation:
Why optionC is the optimal solution

Balanced filter severity – Using medium sensitivity for harmful-content filters reduces false-positive blocks while still catching toxic language. Targeted topic blocking – Defined “denied topics” (e.g., investment advice) with clear sample phrases give precise policy enforcement without over-blocking legitimate queries. Dual-direction PII handling – Sensitive-information filters are configured to mask PII in model responses and block financial data in user inputs, satisfying both protection and audit-trail needs. Bidirectional evaluation – Enabling both input and output checks with custom blocked-message templates provides consistent policy application and generates traceable audit logs for compliance reporting. Single guardrail – Applying the guardrail to all inference calls simplifies integration and eliminates the overhead of managing multiple, chained configurations (as suggested in D). Minimal false positives – Medium severity combined with well-crafted topic definitions strikes the right trade-off between protection and usability, aligning with the requirement for “effective policies with minimal false positives.”

Why the other options are less suitable

Option A – A single guardrail set to high across all categories will likely generate many false positives, disrupting normal user interactions and increasing support overhead. Option B – Introducing multiple guardrails with tiered policies adds unnecessary complexity, and AWS Bedrock does not officially support tiered content-filter settings per guardrail; this can lead to inconsistent behavior and harder maintenance. Option D – Chaining separate guardrails via Step Functions creates extra latency, operational complexity, and error surface; it also deviates from the recommended pattern of using a single, comprehensive guardrail configured for all required checks.

References

Amazon Bedrock Guardrails – Content filtering and safety:

https://docs.aws.amazon.com/bedrock/latest/userguide/guardrails.html Customize content filters and blocked messages for Guardrails:

https://docs.aws.amazon.com/bedrock/latest/userguide/guardrails-customizing.html

---

## Exam AWS Certified Generative AI Developer - Professional (AIP-C01) (PDF) topic 1 question 15
Question #: 15
Topic #: 1

An ecommerce company is developing a generative AI (GenAI) solution that uses Amazon Bedrock with Anthropic Claude to recommend products to customers. Customers report that some of the recommended products are not available for sale on the website or are not relevant to the customer. Customers also report that the solutions takes a long time to generate some recommendations. The company investigates the issues and finds that most interactions between customers and the product recommendation solution are unique. The company confirms that the solutions recommends products that are not in the company's product catalog. The company must resolve these issues. Which solution will meet this requirement?

A. Increase grounding within Amazon Bedrock Guardrails. Enable Automated Reasoning checks. Set up provisioned throughput.
B. Use prompt engineering to restrict the model responses to relevant products. Use streaming techniques such as the InvokeModelWithResponseStream action to reduce perceived latency for the customers.
C. Create an Amazon Bedrock knowledge base. Implement Retrieval Augmented Generation (RAG). Set the PerformanceConfigLatency parameter to optimized.
D. Store product catalog data in Amazon OpenSearch Service. Validate the model's product recommendations against the product catalog. Use Amazon DynamoDB to implement response caching.

**Answer: C**

Explanation:
Why optionC is the correct solution

The core problem is that the model frequently generates recommendations for products that do not exist in the company’s catalog and that the interactions are highly unique, leading to hallucinations and long generation times.

Retrieval Augmented Generation (RAG) directly addresses both issues:

1. Grounding to a trusted data source – By indexing the product catalog in a searchable store (e.g., an Amazon Bedrock knowledge base), the model can retrieve up-to-date, factual product information at inference time and embed it in the prompt before generation. This prevents hallucinated SKUs from being returned. 2. Latency reduction – Configuring the PerformanceConfigLatency setting to optimized enables the service to use the most efficient retrieval and inference pipeline (e.g., pre-loaded embeddings, cached retrieval results), which lowers per-request response latency and improves perceived speed for the user.

This approach is purpose-built for unique, retrieval-driven prompts typical of recommendation engines and works natively with Amazon Bedrock’s managed knowledge-base feature, eliminating the need for custom orchestration layers.

Why the other options are less suitable

A. Increase grounding within Amazon Bedrock Guardrails & Enable Automated Reasoning checks – Guardrails mainly enforce safety policies (e.g., preventing toxic output) and do not retrieve factual data from a catalog; they cannot stop the model from inventing unavailable products. Automated reasoning checks add compute overhead and do not target latency.

B. Use prompt engineering + streaming InvokeModelWithResponseStream – Prompt engineering can bias the model toward relevant products, but for unique customer intents it is fragile and does not guarantee correctness. Streaming can reduce perceived latency but does not eliminate hallucinations; it merely shows tokens faster.

D. Store catalog in OpenSearch & use DynamoDB caching – This pattern can validate recommendations post-generation, but it requires an additional validation step after the model has already produced possibly invalid output, adding complexity and latency. It does not inherently improve generation speed or prevent out-of-catalog responses during generation.

Conclusion Implementing a Bedrock knowledge base with Retrieval Augmented Generation and configuring the latency-optimized performance profile directly tackles the hallucination and latency problems by grounding every response in the real product catalog and leveraging the service’s built-in low-latency retrieval path.

References

Amazon Bedrock Knowledge Bases – Retrieval-Augmented Generation:

https://docs.aws.amazon.com/bedrock/latest/userguide/knowledge-bases.html Performance configuration options for InvokeModel:

https://docs.aws.amazon.com/bedrock/latest/userguide/performance-configuration.html

---

## Exam AWS Certified Generative AI Developer - Professional (AIP-C01) (PDF) topic 1 question 16
Question #: 16
Topic #: 1

A company is using AWS Lambda and REST APIs to build a reasoning agent to automate support workflows. The system must preserve memory across interactions, share the relevant agent state, and support event-driven invocation and synchronous invocation. The system must also enforce access control and session-based permissions. Which combination of steps provides the MOST scalable solution? (Choose two.)

A. Use Amazon Bedrock AgentCore to manage memory and session-aware reasoning. Deploy the agent with built-in identity support, event handling, and observability.
B. Register the Lambda functions and the REST APIs as actions by using Amazon API Gateway and Amazon EventBridge. Enable Amazon Bedrock AgentCore to invoke the Lambda functions and the REST APIs without custom orchestration code.
C. Use Amazon Bedrock Agents for reasoning and conversation management. Use AWS Step Functions and Amazon SQS queues for orchestration. Store the agent state in Amazon DynamoDB to maintain memory between steps.
D. Deploy the reasoning logic as a container on Amazon ECS behind Amazon API Gateway. Use Amazon Aurora to store memory data and identity data.
E. Build a custom RAG pipeline by using Amazon Kendra and Amazon Bedrock. Use AWS Lambda to orchestrate tool invocations. Store the agent state in Amazon S3.

**Answer: AB**

Explanation:
Why option A+B is the optimal, scalable architecture

Built-in session memory & identity – AmazonBedrockAgentCore natively maintains conversation context and can be configured with identity-aware policies, eliminating the need for custom state-tracking logic. Serverless, event-driven orchestration – By registering Lambda functions and the REST APIs as actions through AmazonAPIGateway and EventBridge, the agent can be invoked synchronously or asynchronously with native event routing, scaling automatically with load. Zero-code integration with reasoning – AgentCore can directly call the registered Lambda/REST actions; no additional orchestration layer (e.g., StepFunctions) is required, reducing operational overhead and latency. Fine-grained access control – IAM roles attached to the Lambda functions and API Gateway stages enforce per-session permissions; AgentCore propagates the caller’s identity to downstream resources, ensuring consistent session-based security. Observability & resilience – AgentCore provides built-in metrics and tracing, while Lambda and APIGateway scale independently, offering elastic capacity for spikes in support-ticket processing. Why the other choices are less suitable

C – Introducing StepFunctions and SQS adds unnecessary orchestration complexity for a use case that already has a serverless, event-driven model. DynamoDB state storage adds cost and operational overhead; the simplest path is to rely on AgentCore’s native memory handling. D – Running containers on ECS and using Aurora introduces managed services that do not provide the same automatic scaling or built-in identity integration as Lambda+APIGateway with BedrockAgents. This approach also requires custom code to bridge container-based logic with Bedrock, increasing development effort. E – A custom RAG pipeline with Kendra and S3 stores state in object storage, which is not designed for low-latency session memory and introduces extra architecture components that are harder to secure and monitor in a production support workflow.

References

Amazon Bedrock AgentCore documentation:

https://docs.aws.amazon.com/bedrock/latest/userguide/agents.html Integrating Lambda with Amazon API Gateway and EventBridge:

https://docs.aws.amazon.com/apigateway/latest/developerguide/getting-started.html

These resources confirm the recommended serverless, identity-aware integration pattern that satisfies the scalability, state management, and security requirements of the scenario.

---

## Exam AWS Certified Generative AI Developer - Professional (AIP-C01) (PDF) topic 1 question 17
Question #: 17
Topic #: 1

A financial services company is developing a Retrieval Augmented Generation (RAG) application to help investment analysts query complex financial relationships across multiple investment vehicles, market sectors, and regulatory environments. The dataset contains highly interconnected entities that have multi-hop relationships. The analysts must be able to examine the relationships holistically to provide accurate investment guidance. The application must deliver comprehensive answers that capture indirect relationships between financial entities. The application must produce responses in less than 3 seconds. Which solution will meet these requirements with the LEAST operational overhead?

A. Use Amazon Bedrock Knowledge Bases with Graph RAG and Amazon Neptune Analytics to store the financial data. Analyze the multi-hop relationships between entities and automatically identify related information across documents.
B. Use Amazon Bedrock Knowledge Bases and an Amazon OpenSearch Service vector store to implement custom relationship identification logic that uses AWS Lambda functions to query multiple vector embeddings in sequence.
C. Use an Amazon OpenSearch Serverless vector database with k-nearest neighbor (k-NN) searches. Implement manual relationship mapping in an application layer that runs in an Amazon EC2 Auto Scaling group.
D. Use Amazon DynamoDB to store financial data in a custom indexing system. Use an AWS Lambda function to query relevant records based on input questions. Use Amazon SageMaker AI to generate responses.

**Answer: A**

Explanation:
Why OptionA is the best choice (least operational overhead while meeting all constraints)

Amazon Bedrock Knowledge Bases provide a managed, fully-integrated RAG workflow that automatically creates and updates vector embeddings, retrieves relevant passages, and can invoke GraphRAG pipelines. By coupling Bedrock Knowledge Bases with Amazon Neptune Analytics, the solution can model the financial entities and their multi-hop relationships as a graph, enabling multi-hop reasoning without custom code. The entire pipeline is server-less (Bedrock+Neptune) → no servers to provision, no clusters to manage, and the inference latency can be tuned to stay under3seconds through native inference endpoints and optional provisioned concurrency. It delivers comprehensive answers by traversing the graph to capture indirect relationships across investment vehicles, sectors, and regulations, fulfilling the analyst’s requirement for holistic insights.

Why the other options fall short

OptionB introduces custom relationship-identification logic and multiple Lambda invocations per query, increasing complexity and operational management of Lambda scaling, OpenSearch cluster upkeep, and error handling. OptionC relies on manual mapping of relationships in the application layer running on EC2 Auto Scaling; this adds infrastructure to patch, monitor, and scale, raising operational overhead while still requiring bespoke code. OptionD requires a bespoke DynamoDB indexing design, Lambda execution logic, and SageMaker endpoints —all of which must be built, versioned, and kept available, significantly increasing operational burden compared with the fully managed GraphRAG flow.

References

Amazon Bedrock Knowledge Bases – Overview & graph-enabled retrieval:

https://docs.aws.amazon.com/bedrock/latest/userguide/knowledge-bases.html Amazon Neptune Analytics for graph queries – Graph analytics & multi-hop traversal:

https://docs.aws.amazon.com/neptune/latest/userguide/graph-overview.html

---

## Exam AWS Certified Generative AI Developer - Professional (AIP-C01) (PDF) topic 1 question 18
Question #: 18
Topic #: 1

A healthcare company uses Amazon Bedrock to deploy an application that generates summaries of clinical documents. The application experiences inconsistent response quality with occasional factual hallucinations. Monthly costs exceed the company's projections by 40%. A GenAI developer must implement a near real-time monitoring solution to detect hallucinations, identify abnormal token consumption, and provide early warnings of cost anomalies. The solution must require minimal custom development work and maintenance overhead. Which solution will meet these requirements?

A. Configure Amazon CloudWatch alarms to monitor InputTokenCount and OutputTokenCount metrics to detect anomalies. Store model invocation logs in an Amazon S3 bucket. Use AWS Glue and Amazon Athena to identify potential hallucinations.
B. Run Amazon Bedrock evaluation jobs that use LLM-based judgments to detect hallucinations. Configure Amazon CloudWatch to track token usage. Create an AWS Lambda function to process CloudWatch metrics. Configure the Lambda function to send usage pattern notifications.
C. Configure Amazon Bedrock to store model invocation logs in an Amazon S3 bucket. Enable text output logging. Configure Amazon Bedrock guardrails to run contextual grounding checks to detect hallucinations. Create Amazon CloudWatch anomaly detection alarms for token usage metrics.
D. Use AWS CloudTrail to log all Amazon Bedrock API calls. Create a custom dashboard in Amazon QuickSight to visualize token usage patterns. Use Amazon SageMaker Model Monitor to detect quality drift in generated summaries.

**Answer: C**

Explanation:
Selected Solution: C- Store Bedrock invocation logs in S3, enable text output logging to capture full responses and prompts. -

Configure Amazon Bedrock to store model invocation logs in an Amazon S3 bucket. Enable text output logging. Configure Amazon Bedrock guardrails to run contextual grounding checks to detect hallucinations. Create Amazon CloudWatch anomaly detection alarms for token usage metrics.

---

## Exam AWS Certified Generative AI Developer - Professional (AIP-C01) (PDF) topic 1 question 19
Question #: 19
Topic #: 1

A company is building a generative AI (GenAI) application that produces content based on a variety of internal and external data sources. The company wants to ensure that the generated output is fully traceable. The application must support data source registration and enable metadata tagging to attribute content to its original source. The application must also maintain audit logs of data access and usage throughout the pipeline. Which solution will meet these requirements?

A. Use AWS Lake Formation to catalog data sources and control access. Apply metadata tags directly in Amazon S3. Use AWS CloudTrail to monitor API activity.
B. Use AWS Glue Data Catalog to register and tag data sources. Use Amazon CloudWatch Logs to monitor access patterns and application behavior.
C. Store data in Amazon S3 and use object tagging for attribution. Use AWS Glue Data Catalog to manage schema information. Use AWS CloudTrail to log access to S3 buckets.
D. Use AWS Glue Data Catalog to register all data sources. Apply metadata tags to attribute data sources. Use AWS CloudTrail to log access and activity across services.

**Answer: D**

Explanation:
Justification

Requirement1 – Register and tag data sources AWS Glue Data Catalog provides a centralized metadata repository where each data source (databases, tables, S3 locations, etc.) can be explicitly registered. Tags can be attached to these registered resources, enabling precise attribution of generated content to its originating source.

Requirement2 – Trace generated output By coupling Glue Data Catalog with metadata-tagging, every piece of AI-generated output can reference the specific tag(s) associated with the source dataset, making the lineage of the output fully auditable.

Requirement3 – Audit logging of data access and usage AWS CloudTrail captures immutable logs of all API calls across AWS services, including Glue, S3, and other resources used in the pipeline. This provides a complete, searchable audit trail of who accessed what data and when, satisfying the traceability and compliance needs.

Why optionD is optimal OptionD explicitly combines Glue Data Catalog for registration and tagging with CloudTrail for cross-service audit logging, directly addressing both data-source attribution and pipeline audit requirements in a single, integrated solution.

Why the other options fall short

A – Lake Formation is primarily for data-access policies and does not provide a comprehensive catalog or tagging mechanism for metadata; CloudTrail alone cannot tag data sources. B – Glue Data Catalog is used, but CloudWatch Logs are designed for operational metrics and application-level logs, not for immutable audit trails of AWS-wide API activity. C – While S3 object tagging and Glue Catalog help with some metadata, they lack the systematic registration of diverse data sources (e.g., databases) and omit cross-service CloudTrail logging for holistic audit visibility.

References AWS Glue Data Catalog –https://docs.aws.amazon.com/glue/latest/dgl/glue-data-catalog.html AWS CloudTrail –https://docs.aws.amazon.com/awscloudtrail/latest/userguide/cloudtrail-definition.html

---

## Exam AWS Certified Generative AI Developer - Professional (AIP-C01) (PDF) topic 1 question 20
Question #: 20
Topic #: 1

A financial services company needs to build a document analysis system that uses Amazon Bedrock to process quarterly reports. The system must analyze financial data, perform sentiment analysis, and validate compliance across batches of reports. Each batch contains 5 reports. Each report requires multiple foundation model (FM) calls. The solution must finish the analysis within 10 seconds for each batch. Current sequential processing takes 45 seconds for each batch. Which solution will meet these requirements?

A. Use AWS Lambda functions with provisioned concurrency to process each analysis type sequentially. Configure the Lambda function timeouts to 10 seconds. Configure automatic retries with exponential backoff.
B. Use AWS Step Functions with a Parallel state to invoke separate AWS Lambda functions for each analysis type simultaneously. Configure Amazon Bedrock client timeouts. Use Amazon CloudWatch metrics to track execution time and model inference latency.
C. Create an Amazon SQS queue to buffer analysis requests. Deploy multiple AWS Lambda functions with reserved concurrency. Configure each Lambda function to process different aspects of each report sequentially and then combine the results.
D. Deploy an Amazon ECS cluster that runs containers that process each report sequentially. Use a load balancer to distribute batch workloads. Configure an auto-scaling policy based on CPU utilization to handle demand fluctuations.

**Answer: B**

Explanation:
Why OptionB is the optimal solution

Parallel execution: A Parallel state in AWS Step Functions allows the system to invoke multiple AWS Lambda functions concurrently, eliminating the sequential bottleneck that inflates processing time from 45s to the required ≤10s per batch. Fine-grained throttling per analysis type: Each analysis (financial data extraction, sentiment analysis, compliance validation) can be delegated to a dedicated Lambda, enabling independent scaling or resource allocation without interfering with the others. Built-in visibility: Step Functions automatically emits execution and service metadata to CloudWatch Metrics and Logs, making it straightforward to monitor execution time, model inference latency, and error rates, which is a key design consideration for certification-level solutions. Managed concurrency control: Lambda functions can be configured with reserved or provisioned concurrency to meet latency targets, while Step Functions’ Parallel state respects the per-function concurrency limits, ensuring predictable performance under load. Resilient error handling: If any analysis fails, Step Functions can define a Catch clause or fallback logic, automatically retrying with exponential backoff (similar to OptionA) without blocking the entire batch. Serverless cost-efficiency: The architecture uses only serverless components (Step Functions, Lambda, CloudWatch), aligning with best practices for cost-effective, scalable gen-AI workloads in AWS.

Why the other options are less suitable

OptionA – Although provisioned concurrency can reduce cold-start latency, the design still processes analyses sequentially. Even with concurrency, the cumulative wall-clock time for a batch will likely exceed the 10-second budget. OptionC – Using SQS introduces an extra hop and wait for message availability. Lambda functions would still need to process each report sequentially after pulling from the queue, offering no real parallelism benefit. OptionD – ECS containers add infrastructure overhead (ECS service, load balancer, auto-scaling policies) and require manual container orchestration. Even with high CPU scaling, the architecture does not guarantee a sub-10-second SLA for batch processing as cleanly as Step Functions’ Parallel state.

Result: OptionB directly addresses the latency requirement by enabling parallel, serverless execution of each analysis task, while providing operational visibility and built-in error handling—making it the most appropriate choice for the certification question.

References

AWS Step Functions – Parallel State: https://docs.aws.amazon.com/service- authorization/latest/reference/list_awssfn.html#awssfn_parallel-state AWS Lambda – Provisioned Concurrency: https://docs.aws.amazon.com/lambda/latest/dg/provisioned- concurrency.html Monitoring AWS Step Functions with CloudWatch: https://docs.aws.amazon.com/step- functions/latest/userguide/CloudWatchMonitoring.html

---

## Exam AWS Certified Generative AI Developer - Professional (AIP-C01) (PDF) topic 1 question 21
Question #: 21
Topic #: 1

A company is using Amazon Bedrock to build a customer-facing AI assistant to handle sensitive customer inquiries. The company must use defense-in-depth safety controls to block sophisticated prompt injection attacks. The company must keep audit logs of all safety interventions. The AI assistant must have cross-Region failover capabilities. Which solution will meet these requirements?

A. Configure Amazon Bedrock guardrails to use content filters to protect against prompt injection attacks. Set the content filters to high. Use a guardrail profile to implement cross-Region guardrail inference. Use Amazon CloudWatch Logs with custom metrics to capture detailed guardrail intervention events.
B. Configure Amazon Bedrock guardrails to use content filters to protect against prompt injection attacks. Set the content filters to high. Use AWS WAF to block suspicious inputs. Use AWS CloudTrail to log API calls for audits.
C. Deploy Amazon Comprehend custom classification to detect prompt injection attacks. Use Amazon API Gateway to validate requests. Use Amazon CloudWatch Logs with custom metrics to capture detailed intervention events.
D. Configure Amazon Bedrock guardrails to use custom content filters to protect against harmful content. Set the content filters to high. Use word filters to protect against known attack patterns. Configure cross-Region guardrail replication to provide failover capabilities. Store logs in AWS CloudTrail for compliance auditing.

**Answer: B**

Explanation:
Why option B is the only design that fulfills every requirement

Safety-first guardrails in Bedrock – Using Bedrock’s built-in content filters with the filter level set to high provides protection against prompt-injection attempts, which is the only native, AWS-supported mechanism for blocking such attacks. Supplementary protection with AWS WAF – AWSWAF can be attached to the API endpoint that invokes the Bedrock model. WAF rules can inspect inbound HTTP requests for known injection patterns and block them before they reach the model, adding an extra layer of filtering complementary to Bedrock’s own filters. Comprehensive auditability – AWSCloudTrail records every API call that interacts with Bedrock (including guardrail activations) and stores the event logs in an immutable S3 bucket. This satisfies the audit-log requirement for all safety interventions. Cross-Region failover – Bedrock guardrail configurations are global resources that are automatically replicated across Regions. When a request is routed to a secondary Region in case of failure, the same high-severity guardrail settings and WAF rules apply, delivering seamless failover while preserving safety. No reliance on unsupported features – Option B sticks to services and capabilities that are officially supported and documented for this scenario, whereas the other options either misuse or reference non-existent features (e.g., “cross-Region guardrail inference” in A, “word filters” in D, custom classification for prompt injection in C).

Why the other options fall short

Option A – While it mentions high-severity Bedrock filters, CloudWatchLogs with custom metrics do not capture the detailed guardrail event data required for audit trails, and “cross-Region guardrail inference” is not a supported feature. Option C – Amazon Comprehend is a text-analysis service, not a defensive guardrail for prompt injection. It cannot guarantee detection of sophisticated attacks, and there is no native integration with Bedrock guardrails or failover across Regions. Option D – Bedrock does not expose “custom content filters” or “word filters” as an API; relying on them is not a valid design. The notion of “cross-Region guardrail replication” for failover is not documented, and CloudTrail alone cannot provide the detailed intervention logs that the scenario demands.

References

Amazon Bedrock Guardrails: https://docs.aws.amazon.com/bedrock/latest/userguide/guardrails.html AWS WAF and integration with API endpoints: https://docs.aws.amazon.com/waf/latest/developerguide/what- web-acl.html AWS CloudTrail logging and audit capabilities:

https://docs.aws.amazon.com/awsaccountbilling/latest/aboutv2/journaling.html

---

## Exam AWS Certified Generative AI Developer - Professional (AIP-C01) (PDF) topic 1 question 22
Question #: 22
Topic #: 1

A company is designing a canary deployment strategy for a payment processing API. The system must support automated gradual traffic shifting between multiple Amazon Bedrock models based on real-time inference metrics, historical traffic patterns, and service health. The solution must be able to gradually increase traffic to new model versions. The system must increase traffic if metrics remain healthy and decrease traffic if the performance degrades below acceptable thresholds. The company needs to comprehensively monitor inference latency and error rates during the deployment phase. The company must also be able to halt deployments and revert to a previous model version without any manual intervention. Which solution will meet these requirements?

A. Use Amazon Bedrock with provisioned throughput to host the versions of the model. Configure an Amazon EventBridge rule to invoke an AWS Step Functions workflow when a new model version is released. Configure the workflow to shift traffic in stages, wait for a specified time period, and invoke an AWS Lambda function to check Amazon CloudWatch performance metrics. Configure the workflow to increase traffic if the metrics meet thresholds and to trigger a traffic rollback if performance metrics fall below thresholds.
B. Use AWS Lambda functions to invoke various Amazon Bedrock model versions. Use an Amazon API Gateway HTTP API with stage variables and weighted routing to shift traffic gradually to new model versions. Use Amazon CloudWatch to monitor performance metrics. Use external logic to adjust traffic between model versions and to roll back if performance falls below thresholds.
C. Use Amazon SageMaker AI endpoint variants to represent multiple Amazon Bedrock model versions. Use variant weights to shift traffic. Use Amazon CloudWatch to monitor performance metrics. Use SageMaker Model Monitor to trigger AWS Lambda functions to roll back a model deployment if performance drops below a specified threshold. Configure an Amazon EventBridge rule to roll back model deployments if an anomaly is detected.
D. Use Amazon OpenSearch Service to track inference logs. Configure OpenSearch Service to invoke an AWS Systems Manager Automation runbook to update Amazon Bedrock model endpoints to shift traffic based on the inference logs.

**Answer: A**

Explanation:
Why optionA is the best fit

Native canary control – Provisioned throughput on Amazon Bedrock guarantees dedicated capacity for each model version, enabling deterministic traffic shifts. Multi-stage traffic shifting via Step Functions – The workflow can be designed to move a small percentage of requests (e.g., 5% → 10% → 25% …) after each successful health check, matching a classic canary ramp-up. Automated decision engine – An AWS Lambda function reads CloudWatch metrics (latency, error rate, custom inference KPIs) and evaluates them against configurable thresholds; the function then increments or decrements the traffic weight programmatically. Self-healing rollback – If any metric breaches its SLA, the workflow instantly invokes a Lambda that flips the traffic weight back to the previous stable version, achieving a hands-free rollback without manual redeployment. Event-driven extensibility – EventBridge can trigger the whole pipeline on model-release events, ensuring zero-touch start-up and close-down of new versions. End-to-end observability – CloudWatch dashboards and metric-based alarms are already integrated, providing the required inference-latency and error-rate monitoring throughout the deployment phase.

Why the other options are less suitable

OptionB relies on APIGateway weighted routing with “external logic.” While APIGateway can perform weighted routing, there is no built-in, serverless orchestration that both evaluates CloudWatch metrics and adjusts the weights automatically; an additional custom controller would be required, introducing operational overhead and latency. OptionC mixes SageMaker AI endpoints with Bedrock models. SageMaker endpoints are a separate service; they do not natively manage Bedrock model versions, and migrating to SageMaker would add unnecessary complexity and cost. The anomaly-detection approach is valid, but the architectural mismatch makes it unsuitable for a pure Bedrock-centric canary deployment. OptionD uses OpenSearch to log inference data and an SSM runbook to modify endpoints. This solution lacks a real-time, programmatic traffic-shifting mechanism and does not provide automated rollback based on live inference metrics; it is primarily a log-aggregation technique rather than a deployment control plane.

Conclusion OptionA delivers a fully automated, serverless canary pipeline that continuously adjusts traffic between Bedrock model versions, monitors key performance indicators, and safely rolls back on degradation—all without manual steps—making it the only solution that meets every stated requirement.

References

Amazon Bedrock Provisioned Throughput:

https://docs.aws.amazon.com/bedrock/latest/userguide/provisioned-throughput.html Step Functions for Canary Deployments: https://docs.aws.amazon.com/step- functions/latest/userguide/amazon-states-lengthy.html CloudWatch Metrics for Bedrock Inference:

https://docs.aws.amazon.com/bedrock/latest/userguide/monitoring-cloudwatch.html Lambda integration with Step Functions: https://docs.aws.amazon.com/step- functions/latest/userguide/lambda-aws-java.html Traffic shifting with weighted routing in APIGateway (for comparison):

https://docs.aws.amazon.com/apigateway/latest/developerguide/api-gateway-weighted-targets.html

---

## Exam AWS Certified Generative AI Developer - Professional (AIP-C01) (PDF) topic 1 question 23
Question #: 23
Topic #: 1

A financial services company uses an AI application to process financial documents by using Amazon Bedrock. During business hours, the application handles approximately 10,000 requests each hour, which requires consistent throughput. The company uses the CreateProvisionedModelThroughput API to purchase provisioned throughput. Amazon CloudWatch metrics show that the provisioned capacity is unused while on-demand requests are being throttled. The company finds the following code in the application: python response = bedrock_runtime.invoke_model(modelId="anthropic.claude-v2", body=json.dumps(payload)) The company needs the application to use the provisioned throughput and to resolve the throttling issues. Which solution will meet these requirements?

A. Increase the number of model units (MUs) in the provisioned throughput configuration.
B. Replace the model ID parameter with the ARN of the provisioned model that the CreateProvisionedModelThroughput API returns.
C. Add exponential backoff retry logic to handle throttling exceptions during peak hours.
D. Modify the application to use the InvokeModelWithResponseStream API instead of the InvokeModel API.

**Answer: B**

Explanation:
Why optionB is correct The CreateProvisionedModelThroughput API creates a provisioned model endpoint that must be invoked with the model’s ARN (or model ID linked to the provisioned capacity). The application currently calls bedrock_runtime.invoke_model with only the model ID "anthropic.claude-v2", which targets the default (on-demand) endpoint and does not consume the purchased throughput. By replacing the request payload to use the ARN returned from CreateProvisionedModelThroughput, the backend transports invocations to the provisioned endpoint, routing traffic through the purchased model units (MUs) and eliminating throttling of on-demand traffic.

Why the other options are less suitable

A – Increase MUs – Adding more model units is unrelated to the invocation endpoint; without redirecting traffic to the provisioned endpoint, the purchased capacity remains unused. C – Add exponential backoff retry – Retries can mask throttling but do not address the root cause of under-utilization; they also increase latency and cost without fixing throttling. D – Use InvokeModelWithResponseStream – This API provides a streaming response format but still targets the on-demand endpoint. It does not guarantee use of provisioned throughput unless the request is sent to the provisioned ARN.

Implementation steps

1. Call CreateProvisionedModelThroughput with the desired model ID and throughput configuration. 2. Retrieve the returned endpoint ARN. 3. Update the application code to invoke bedrock_runtime.invoke_model (or invoke_model_with_response_stream) using that ARN in place of the plain model ID.

References

CreateProvisionedModelThroughput – Amazon Bedrock API Reference InvokeModel API – Amazon Bedrock SDK Documentation

---

## Exam AWS Certified Generative AI Developer - Professional (AIP-C01) (PDF) topic 1 question 24
Question #: 24
Topic #: 1

A company is building an AI advisory application by using Amazon Bedrock. The application will provide recommendations to customers. The company needs the application to explain its reasoning process and cite specific sources for data. The application must retrieve information from company data sources and show step-by- step reasoning for recommendations. The application must also link data claims to source documents and maintain response latency under 3 seconds. Which solution will meet these requirements with the LEAST operational overhead?

A. Use Amazon Bedrock Knowledge Bases with source attribution enabled. Use the Anthropic Claude Messages API with RAG to set high-relevance thresholds for source documents. Store reasoning and citations in Amazon S3 for auditing purposes.
B. Use Amazon Bedrock with Anthropic Claude models and extended thinking. Configure a 4,000-token thinking budget. Store reasoning traces and citations in Amazon DynamoDB for auditing purposes.
C. Configure Amazon SageMaker AI with a custom Anthropic Claude model. Use the model's reasoning parameter and AWS Lambda to process responses. Add source citations from a separate Amazon RDS database.
D. Use Amazon Bedrock with Anthropic Claude models and chain-of-thought reasoning. Configure custom retrieval tracking with the Amazon Bedrock Knowledge Bases API. Use Amazon CloudWatch to monitor response latency metrics.

**Answer: A**

Explanation:
Why optionA is the optimal choice

Built-in source attribution – Amazon Bedrock Knowledge Bases automatically surface the exact document passages that were retrieved, enabling the model’s response to be linked with source citations without extra code. RAG workflow handled by the service – By toggling source attribution and setting a high-relevance threshold on the knowledge base, the retrieved chunks are fed directly to the Anthropic ClaudeMessages API, ensuring that only the most relevant documents influence the generated reasoning. Minimal custom implementation – No need to provision or manage separate vector stores, Lambda functions, or DynamoDB tables for reasoning traces; the only persistent artifact is an audit-ready log stored in Amazon S3, which adds virtually no operational overhead. Latency-friendly – Retrieval is performed synchronously within the Bedrock runtime, and the high-relevance filter reduces unnecessary token processing, keeping end-to-end response times comfortably below the 3-second SLA.

Why the other options fall short

OptionB introduces an “extended thinking” budget (4,000-token budget) and persists reasoning traces in DynamoDB. Managing a custom token budget and additional storage adds complexity and increases both operational latency and cost. OptionC requires building and maintaining a custom SageMaker endpoint, a separate RDS database for source data, and a Lambda-driven post-processing layer. This multi-service architecture raises the operational footprint and does not leverage the native source-citation capabilities of Bedrock. OptionD mentions chain-of-thought and custom retrieval tracking but does not provide built-in source attribution; tracking citations would need bespoke logic, and reliance on CloudWatch for latency monitoring adds monitoring effort without guaranteeing deterministic relevance thresholds.

Hence, OptionA delivers the required explainability, citation linking, and low-latency guarantee while keeping operational effort to a minimum.

References Amazon Bedrock Knowledge Bases – Source Attribution:

https://docs.aws.amazon.com/bedrock/latest/userguide/knowledge-bases-source-attribution.html Using Retrieval-Augmented Generation (RAG) with Claude on Bedrock:

https://docs.aws.amazon.com/bedrock/latest/userguide/anthropic-claude-rag.html

---

## Exam AWS Certified Generative AI Developer - Professional (AIP-C01) (PDF) topic 1 question 25
Question #: 25
Topic #: 1

A financial services company uses multiple foundation models (FMs) through Amazon Bedrock for its generative AI (GenAI) applications. To comply with a new regulation for GenAI use with sensitive financial data, the company needs a token management solution. The token management solution must proactively alert when applications approach model-specific token limits. The solution must also process more than 5,000 requests each minute and maintain token usage metrics to allocate costs across business units. Which solution will meet these requirements?

A. Develop model-specific tokenizers in an AWS Lambda function. Configure the Lambda function to estimate token usage before sending requests to Amazon Bedrock. Configure the Lambda function to publish metrics to Amazon CloudWatch and trigger alarms when requests approach thresholds. Store detailed token usage in Amazon DynamoDB to report costs.
B. Implement Amazon Bedrock Guardrails with token quota policies. Capture metrics on rejected requests. Configure Amazon EventBridge rules to trigger notifications based on Amazon Bedrock Guardrails metrics. Use Amazon CloudWatch dashboards to visualize token usage trends across models.
C. Deploy an Amazon SQS dead-letter queue for failed requests. Configure an AWS Lambda function to analyze token-related failures. Use Amazon CloudWatch Logs Insights to generate reports on token usage patterns based on error logs from Amazon Bedrock API responses.
D. Use Amazon API Gateway to create a proxy for all Amazon Bedrock API calls. Configure request throttling based on custom usage plans with predefined token quotas. Configure API Gateway to reject requests that will exceed token limits.

**Answer: A**

Explanation:
Why OptionA is the optimal design

Proactive token-limit enforcement – A Lambda function can inspect the prompt+response sizebefore the request reaches Bedrock, calculate the exact token count (using the model-specific tokenizer), and decide whether to allow or abort the call. This guarantees that applications never exceed the quota that would trigger a “too many tokens” error. Real-time metric publishing – The same Lambda can emit custom CloudWatch metrics (e.g., TokensUsed, TokensRemaining) for each model version. These metrics can be visualized in dashboards and tied to CloudWatch Alarms, satisfying the “proactive alert” requirement. Scalable handling of 5000+ requests/min – Lambda scales automatically to concurrent invocations; with provisioned concurrency or async invocation patterns it can comfortably process more than 5000 requests per minute without throttling. Cost-allocation granularity – By Persisting per-request token-usage data (e.g., model, user-ID, timestamp) into DynamoDB, the company can later query or export the records to allocate costs across business units. DynamoDB’s per-request pricing makes this cost-collection approach both predictable and cheap at high QPS. Serverless simplicity & auditability – All components (Lambda, CloudWatch, DynamoDB) are fully managed, require no ongoing infrastructure maintenance, and are native AWS services that integrate tightly with Bedrock, simplifying governance and compliance documentation.

Why the alternative options fall short OptionB (Guardrails token-quota policies) – Guardrails can enforce a hard quota but they do not expose detailed token-level usage per request; they only report rejections after they happen. Capturing “rejected-request” metrics is insufficient for proactive throttling or per-unit cost allocation. OptionC (SQS dead-letter queue + Logs Insights) – This approach reacts after a request has failed; it provides retrospective analysis but cannot prevent a request from exceeding token limits. Additionally, aggregating token usage from log-based error patterns is indirect, error-prone, and does not meet the real-time alerting or cost-tracking requirements. OptionD (APIGateway throttling) – APIGateway can enforce a generic request-rate quota but cannot inspect token counts before the request is forwarded to Bedrock. It also lacks per-model token-limit granularity and cannot publish the fine-grained usage metrics needed for cost allocation across business units.

Conclusion – Only OptionA directly provides the pre-emptive token sizing, per-request metric emission, scalable processing, and durable storage needed to satisfy both the regulatory alerting mandate and the cost-allocation objectives.

References

AWS Lambda –Serverless compute – https://docs.aws.amazon.com/lambda/latest/dg/intro-installation- guide.html Amazon CloudWatch –Metrics and Alarms –

https://docs.aws.amazon.com/cloudwatch/latest/monitoring/cloudwatch_concepts.html Amazon DynamoDB –Database for token-usage storage –

https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/Introduction.html Amazon Bedrock –Generative AI model invocation –

https://docs.aws.amazon.com/bedrock/latest/userguide/intro.html (used for token-count guidance) Amazon Guardrails –Token quota policies –

https://docs.aws.amazon.com/bedrock/latest/userguide/guardrails-quotas.html (illustrates limitation of guardrail-only detection) (used for comparative analysis)

---

## Exam AWS Certified Generative AI Developer - Professional (AIP-C01) (PDF) topic 1 question 26
Question #: 26
Topic #: 1

A retail company is developing a customer service application that must process 10,000 daily queries about products, orders, and warranties. The application must be able to respond to queries about 50,000 product documents that are updated every day. The application must integrate with an order management API to check the status of orders and to help process returns. The application must maintain context throughout multi-turn interactions with customers. The company must collect complete audit trails for application responses. Which solution will meet these requirements with the LEAST operational overhead?

A. Deploy a fine-tuned Amazon Bedrock Anthropic Claude model for each product category. Create AWS Lambda functions to connect each model to the order management API. Store conversation history in Amazon DynamoDB.
B. Create a custom model that uses continued pre-training on Amazon Bedrock to handle all product documentation. Set up an Amazon API Gateway REST API that uses AWS Lambda functions to connect the model to the order management API.
C. Use Amazon SageMaker AI with containers to deploy models. Use Amazon Kendra to search product documents. Use AWS Step Functions to orchestrate calls to the order management API.
D. Use an Amazon Bedrock agent with action groups to integrate with the order management API. Associate an Amazon Bedrock knowledge base with the agent to search product documentation by using Retrieval Augmentation Generation (RAG). Enable trace events to capture audit trails.

**Answer: D**

Explanation:
Why optionD is the optimal, lowest-overhead design

Fully managed Bedrock Agent – Provides pre-built action groups that can call the order-management API directly, eliminating the need to write and maintain custom Lambda wrappers or containerized services. Integrated Retrieval-Augmented Generation (RAG) – The associated Bedrock Knowledge Base automatically fetches the most recent 50K product documents from an AWS-managed data store, handling context injection without additional search services. Built-in audit trail – Every user turn and API call is emitted as trace events; these can be persisted to CloudWatch Logs, S3, or a chosen data store for complete compliance-ready audit logs with no extra engineering. Serverless, auto-scaling execution – Agents run on Bedrock’s managed infrastructure, scaling to handle any peak in query volume while you pay only for tokens processed. Reduced operational burden – No model training pipelines, no container orchestration, and no separate infrastructure for vector search; the whole solution is provisioned and monitored from a single console.

Why the other options are less suitable

OptionA – Requires separate fine-tuned Claude models per product line, each needing its own Lambda integration and DynamoDB schema. Managing dozens of models and versioning introduces significant maintenance overhead, whereas Bedrock Agents reuse a single foundation model with shared action groups. OptionB – Involves custom continued-pre-training of a Bedrock model, which demands substantial ML-ops effort (data pipeline, training jobs, model lifecycle management). It also leaves audit-trail implementation to external services, increasing operational complexity. OptionC – Deploys self-managed SageMaker containers and uses Kendra for document retrieval, adding infrastructure provisioning, container lifecycle, and Step Functions orchestration. This adds multiple moving parts that must be provisioned, patched, and monitored, contrary to the “least operational overhead” goal.

References

Amazon BedrockAgents and Action Groups:

https://docs.aws.amazon.com/bedrock/latest/userguide/agents.html Retrieval-Augmented Generation (RAG) with Bedrock Knowledge Bases:

https://docs.aws.amazon.com/bedrock/latest/userguide/knowledge-base.html

---

## Exam AWS Certified Generative AI Developer - Professional (AIP-C01) (PDF) topic 1 question 27
Question #: 27
Topic #: 1

An ecommerce company is using Amazon Bedrock to build a generative AI (GenAI) application. The application uses AWS Step Functions to orchestrate a multi-agent workflow to produce detailed product descriptions. The workflow consists of three sequential states: a description generator, a technical specifications validator, and a brand voice consistency checker. Each state produces intermediate reasoning traces and outputs that are passed to the next state. The application uses an Amazon S3 bucket for process storage and to store outputs. During testing, the company discovers that outputs between Step Functions states frequently exceed the 256 KB quota and cause workflow failures. A GenAI Developer needs to revise the application architecture to efficiently handle the Step Functions 256 KB quota and maintain workflow observability. The revised architecture must preserve the existing multi-agent reasoning and acting (ReAct) pattern. Which solution will meet these requirements with the LEAST operational overhead?

A. Store intermediate outputs in Amazon DynamoDB. Pass only references between states. Create a Map state that retrieves the complete data from DynamoDB when required for each agent's processing step.
B. Configure an Amazon Bedrock integration to use the S3 bucket URI in the input parameter for large outputs. Use the ResultPath field and the ResultSelector field to route S3 references between the agent steps while maintaining the sequential validation workflow.
C. Use AWS Lambda functions to compress outputs to less than 256 KB before each agent state. Configure each agent task to decompress the outputs before processing and to compress results before passing them to the next state.
D. Configure a separate Step Functions state machine to handle each agent's processing. Use Amazon EventBridge to coordinate the execution flow between state machines. Use S3 references for the outputs as event data.

**Answer: B**

Explanation:
Justification of the selected option (B)

Bedrock→S3 integration supports large payloads by storing the result in S3 and passing a URI reference in the input. This bypasses the 256KB state-input limit without material-moving logic. Using ResultPath and ResultSelector allows each StepFunctions state to receive only the S3 key (a lightweight reference) while preserving the full output for downstream processing when needed. The pattern maintains the existing sequential agent workflow (generator → validator → brand-voice checker) and keeps the ReAct-style multi-agent reasoning intact, because each agent still receives its full intermediate reasoning in a single step via the S3 location. No additional services (DynamoDB, Lambda, separate state machines, or EventBridge) are required, reducing both operational complexity and run-time costs. State-level observability is preserved: StepFunctions still captures the transition and can be inspected with CloudWatch logs; the S3 object versioning provides traceability of each intermediate result.

Why the other options are less suitable

A (DynamoDB + Map state) – Introduces a new data store and a Map state that must retrieve the entire dataset for every agent step, adding extra provisioning, throttling considerations, and mapping logic that increase operational overhead while not directly addressing the 256KB limit. C (Lambda compression/decompression) – Requires custom Lambda functions, compression code, and error handling logic. Compression is nondeterministic for some text formats, may degrade output quality, and adds runtime latency and additional Lambda permissions. D (Separate workflow per agent + EventBridge) – Splits the original state machine into many independent executions, turning a simple linear chain into a distributed orchestration that complicates coordination, monitoring, and error handling; it is more complex than the straightforward S3-reference approach.

References

Amazon Bedrock output location with S3 – https://docs.aws.amazon.com/bedrock/latest/userguide/output- location.html Step Functions: ResultPath and ResultSelector for large payloads – https://docs.aws.amazon.com/service- authorization/latest/reference/list_awssfm.htm#awssfm_overview_outputpath.html (see “ResultPath and ResultSelector” section).

---

## Exam AWS Certified Generative AI Developer - Professional (AIP-C01) (PDF) topic 1 question 28
Question #: 28
Topic #: 1

A company provides a service that helps users from around the world discover new restaurants. The service has 50 million monthly active users. The company wants to implement a semantic search solution across a database that contains 20 million restaurants and 200 million reviews. The company currently stores the data in a PostgresQL database. The solution must support complex natural language queries and return results for at least 95% of queries within 500 ms. The solution must maintain data freshness for restaurant details that update hourly. The solution must also scale cost-effectively during peak usage periods. Which solution will meet these requirements with the LEAST development effort?

A. Migrate the restaurant data to Amazon OpenSearch Service. Implement keyword-based search rules that use custom analyzers and relevance tuning to find restaurants based on attributes such as cuisine type, feature, and location. Create Amazon API Gateway HTTP API endpoints to transform user queries into structured search parameters.
B. Migrate the restaurant data to Amazon OpenSearch Service. Use a foundation model (FM) in Amazon Bedrock to generate vector embeddings from restaurant descriptions, reviews, and menu items. When users submit natural language queries, convert the queries to embeddings by using the same FM. Perform k-nearest neighbors (k-NN) searches to find semantically similar results.
C. Keep the restaurant data in PostgresQL and implement a pgvector extension. Use a foundation model (FM) in Amazon Bedrock to generate vector embeddings from restaurant data. Store the vector embeddings directly in PostgreSQL. Create an AWS Lambda function to convert natural language queries to vector representations by using the same FM. Configure the Lambda function to perform similarity searches within the database.
D. Migrate restaurant data to an Amazon Bedrock knowledge base by using a custom ingestion pipeline. Configure the knowledge base to automatically generate embeddings from restaurant information. Use the Amazon Bedrock Retrieve API with built-in vector search capabilities to query the knowledge base directly by using natural language input.

**Answer: B**

Explanation:
Why OptionB is the best fit

Fast, high-accuracy semantic search – By moving the data to Amazon OpenSearch Service and using a Bedrock Foundation Model (FM) to generate embeddings for both the restaurant catalog and user queries, the system can run k-NN similarity searches that reliably return relevant results for≥95% of queries. Meets latency target – OpenSearch Service is a fully-managed, horizontally scalable search engine. With a modest number of collection shards, vector-k-NN queries can be served well under 500ms, even during traffic spikes, without custom query-rewrite logic. Data freshness – The ingestion pipeline can be triggered on a near-real-time schedule (e.g., every5minutes) to refresh embeddings whenever restaurant details change, keeping the search index up to date without involving the transactional PostgreSQL database. Cost-effective scaling – OpenSearch Service scales automatically based on request workload; the vector-search engine runs only when needed, keeping costs proportional to usage. Peak loads are handled by adding read replicas, an operation that is low-overhead and simple to configure. Minimal custom code – OptionB requires only two primary steps: 1. Export the existing PostgreSQL data to an OpenSearch index and run a one-time embedding job. 2. Deploy a lightweight API (e.g., Amazon API Gateway + Lambda) that receives a natural-language query, calls the Bedrock FM to create a query embedding, and performs a k-NN search in OpenSearch. No schema redesign, no database extensions, and no ongoing maintenance of search-specific rules.

Why the other options are less suitable

Option A – Keyword-based search with custom analyzers

Relies on exact term matching and relevance tuning, which cannot reliably satisfy “complex natural language queries.” Achieving the 95% success rate would require extensive rule-building and manual relevance adjustments, increasing development effort far beyond the scope of the requirement.

Option C – pgvector inside PostgreSQL

Uses the transactional database for both OLTP and vector search, which can degrade write performance and complicate scaling of the 20M-record table. Latency guarantees are harder to meet under peak load because PostgreSQL’s vector indexing is not as optimized as dedicated search engines, often exceeding the 500ms requirement during traffic spikes.

Option D – Amazon Bedrock Knowledge Base with Retrieve API

While it provides built-in vector storage, it does not allow the company to host its own data; all restaurant information would need to be ingested into Bedrock, incurring higher operational overhead and cost per token. The Retrieve API has limited customization for response formatting and may not meet the exact latency and relevance thresholds without additional engineering around prompt engineering and ranking.

Therefore, OptionB delivers the required semantic search performance, data freshness, and scalability while demanding the smallest amount of custom development and operational overhead.

References

Amazon OpenSearch Service – Vector Search: https://aws.amazon.com/opensearch-service/features/vector- search/ Amazon Bedrock – Foundational Models for Embeddings:

https://aws.amazon.com/bedrock/features/foundation-models/embeddings/

---

## Exam AWS Certified Generative AI Developer - Professional (AIP-C01) (PDF) topic 1 question 29
Question #: 29
Topic #: 1

A medical company uses Amazon Bedrock to power a clinical documentation summarization system. The system produces inconsistent summaries when handling complex clinical documents. The system performed well on simple clinical documents. The company needs a solution that diagnoses inconsistencies, compares prompt performance against established metrics, and maintains historical records of prompt versions. Which solution will meet these requirements?

A. Create multiple prompt variants by using Prompt management in Amazon Bedrock. Manually test the prompts with simple clinical documents. Deploy the highest performing version by using the Amazon Bedrock console.
B. Implement version control for prompts in a code repository with a test suite that contains complex clinical documents and quantifiable evaluation metrics. Use an automated testing framework to compare prompt versions and document performance patterns.
C. Deploy each new prompt version to separate Amazon Bedrock API endpoints. Split production traffic between the endpoints. Configure Amazon CloudWatch to capture response metrics and user feedback for automatic version selection.
D. Create a custom prompt evaluation flow in Amazon Bedrock Flows that applies the same clinical document inputs to different prompt variants. Use Amazon Comprehend Medical to analyze and score the factual accuracy of each version.

**Answer: B**

Explanation:
Why optionB is the optimal choice

Built-in version control – Storing prompts in a source-code repository (e.g., Git) provides immutable history, branching, and rollback capabilities, which is essential for tracking prompt evolution and regression. Automated evaluation suite – Embedding a test harness that feeds complex clinical documents to each prompt version enables repeatable, data-driven performance checks against predefined metrics (e.g., fidelity, hallucination rate, BLEU/ROUGE scores). Quantifiable metrics & pattern detection – By instrumenting the test suite to log metric deltas, the team can systematically identify inconsistency patterns, justify prompt refinements, and enforce acceptable thresholds before promotion. Scalability & consistency – The approach integrates naturally with CI/CD pipelines, ensuring every prompt change undergoes the same validation process, thereby reducing manual error and maintaining auditability for compliance-driven healthcare workloads.

Why the other options fall short

OptionA relies on manual, one-off testing of simple documents and does not capture systematic performance data for complex inputs, leading to unverified consistency and no version-level audit trail. OptionC spreads traffic across endpoints and uses CloudWatch for basic metric collection, but it lacks a dedicated evaluation framework to compare prompts against established clinical accuracy metrics; it also introduces operational overhead for traffic management without guarantee of insightful diagnostics. OptionD proposes a Bedrock Flow with Comprehend Medical scoring, yet Comprehend’s medical NLP capabilities are limited to entity/relation extraction and do not provide robust, domain-specific quality scoring for prompt outputs, making it insufficient for detecting nuanced inconsistency issues.

References

Amazon Bedrock – Prompt Management and Versioning:

https://docs.aws.amazon.com/bedrock/latest/userguide/prompt-management.html Evaluating Bedrock prompts with automated tests:

https://docs.aws.amazon.com/bedrock/latest/userguide/evaluate-prompts.html

---

## Exam AWS Certified Generative AI Developer - Professional (AIP-C01) (PDF) topic 1 question 30
Question #: 30
Topic #: 1

A company uses Amazon Bedrock to generate technical content for customers. The company has recently experienced a surge in hallucination outputs when the company's model generates summaries of long technical documents. The model outputs include inaccurate or fabricated details. The company's current solution uses a large foundation model (FM) with a basic one-shot prompt that includes the full document in a single input. The company needs a solution that will reduce hallucinations and meet factual accuracy goals. The solution must process more than 1,000 documents each hour and deliver summaries within 3 seconds for each document. Which combination of solutions will meet these requirements? (Choose two.)

A. Implement zero-shot chain-of-thought (CoT) instructions that require step-by-step reasoning with explicit fact verification before the model generates each summary.
B. Use Retrieval Augmented Generation (RAG) with an Amazon Bedrock knowledge base. Apply semantic chunking and tuned embeddings to ground summaries in source content.
C. Configure Amazon Bedrock guardrails to block any generated output that matches patterns that are associated with hallucinated content.
D. Increase the temperature parameter in Amazon Bedrock.
E. Prompt the Amazon Bedrock model to summarize each full document in one pass.

**Answer: BC**

Explanation:
Why optionB is optimal

Retrieval-Augmented Generation (RAG) lets the model retrieve the most relevant passages from a curated knowledge base and condition the generation on those grounded snippets, dramatically reducing fabricated details. It scales linearly with the number of documents because each input is processed as a small chunk rather than the full 1000-document context at once, allowing parallel ingestion of >1000 documents per hour. Semantic chunking and tuned embeddings preserve factual fidelity while keeping each query well under the model’s context limit, enabling sub-3-second latency per summary when paired with an optimized inference pipeline.

Why optionC is optimal

Guardrails in Amazon Bedrock can be configured to detect and block outputs that match patterns indicative of hallucination (e.g., high-confidence statements without supporting evidence). This post-generation safety layer enforces factual accuracy without altering the core model’s pipeline, fitting the required throughput and latency constraints when used alongside a low-latency RAG flow.

Why the other options are unsuitable

A – Zero-shot chain-of-thought with explicit verification – While CoT can improve reasoning, implementing real-time fact-verification steps adds substantial compute overhead and complexity, making it difficult to meet the <3-second per-document SLA at >1000doc/hr scale. D – Increase temperature – A higher temperature injects randomness, which would increase hallucination rates rather than mitigate them, contradicting the accuracy goal. E – Summarize each full document in one pass – This reproduces the original approach that caused hallucinations; it does not address context limits and would exceed context windows for large documents, again undermining reliability.

Resulting architecture Deploy a RAG pipeline (B) that chunks and embeds source documents, retrieves the most relevant snippets per request, and feeds them to a Bedrock model. Apply guardrail rules (C) to filter out hallucinated summaries before they are returned. This combination satisfies factual accuracy, high throughput (>1000 docs/hr), and sub-3-second latency.

References

Amazon Bedrock – Retrieval Augmented Generation:

https://docs.aws.amazon.com/bedrock/latest/userguide/rag.html Guardrails for Amazon Bedrock: https://docs.aws.amazon.com/bedrock/latest/userguide/guardrails.html

---

## Exam AWS Certified Generative AI Developer - Professional (AIP-C01) (PDF) topic 1 question 31
Question #: 31
Topic #: 1

A company has a recommendation system. The system's applications run on Amazon EC2 instances. The applications make API calls to Amazon Bedrock foundation models (FMs) to analyze customer behavior and generate personalized product recommendations. The system is experiencing intermittent issues. Some recommendations do not match customer preferences. The company needs an observability solution to monitor operational metrics and detect patterns of operational performance degradation compared to established baselines. The solution must also generate alerts with correlation data within 10 minutes when FM behavior deviates from expected patterns. Which solution will meet these requirements?

A. Configure Amazon CloudWatch Container Insights for the application infrastructure. Set up CloudWatch alarms for latency thresholds. Add custom metrics for token counts by using the CloudWatch embedded metric format. Create CloudWatch dashboards to visualize the data.
B. Implement AWS X-Ray to trace requests through the application components. Enable CloudWatch Logs Insights for error pattern detection. Set up AWS CloudTrail to monitor all API calls to Amazon Bedrock. Create custom dashboards in Amazon QuickSight.
C. Enable Amazon CloudWatch Application Insights for the application resources. Create custom metrics for recommendation quality, token usage, and response latency by using the CloudWatch embedded metric format with dimensions for request types and user segments. Configure CloudWatch anomaly detection on the model metrics. Establish log pattern analysis by using CloudWatch Logs Insights.
D. Use Amazon OpenSearch Service with the Observability plugin. Ingest model metrics and logs by using Amazon Kinesis. Create custom Piped Processing Language (PPL) queries to analyze model behavior patterns. Establish operational dashboards to visualize anomalies in real time.

**Answer: C**

Explanation:
Correct option: C –Enable Amazon CloudWatch Application Insights for the application resources. Create custom metrics for recommendation quality, token usage, and response latency by using the CloudWatch embedded metric format with dimensions for request types and user segments. Configure CloudWatch anomaly detection on the model metrics. Establish log pattern analysis by using CloudWatch Logs Insights.

Why C is the best fit

One-stop observability – Application Insights automatically discovers EC2 instances, their logs, and metrics, then aggregates them into a single dashboard. Embedded metric format – Allows the application to emit custom, structured metrics (e.g., token count per segment) that can be filtered and visualized without additional agents. Built-in anomaly detection – CloudWatch can automatically learn baseline behavior and trigger an alarm when the model’s metrics deviate, satisfying the 10-minute alert requirement. Correlation across components – By using dimensions for request types and user segments, the solution correlates latency, token usage, and recommendation quality across the whole pipeline, giving contextual alert data. Log pattern analysis – CloudWatch Logs Insights enables real-time searching for error patterns or unexpected token-generation behavior, feeding the same anomaly-detection workflow.

Why the other options are less suitable

A – CloudWatch Container Insights applies only to containerized workloads; EC2-hosted applications do not benefit from it. It lacks native support for custom recommendation-quality metrics and does not provide integrated anomaly detection across API calls to Bedrock. B – X-Ray excels at distributed tracing but does not emit or analyze custom model metrics such as token usage. CloudTrail tracks API calls but offers no built-in anomaly detection or easy integration with recommendation quality metrics, and QuickSight is primarily for business-intelligence reporting rather than real-time operational alerts. D – OpenSearch + Kinesis can ingest and search large volumes of data, but building the required correlation and 10-minute alerting logic requires custom pipeline development and operational overhead. It does not provide out-of-the-box anomaly detection or an integrated alerting mechanism like CloudWatch’s anomaly actions.

References

Amazon CloudWatch Application Insights – Custom metrics and embedded metric format

https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/ApplicationInsights.html

CloudWatch anomaly detection – Alarms on time-series metrics

https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/Anomalies.html

---

## Exam AWS Certified Generative AI Developer - Professional (AIP-C01) (PDF) topic 1 question 32
Question #: 32
Topic #: 1

An enterprise application uses an Amazon Bedrock foundation model (FM) to process and analyze 50 to 200 pages of technical documents. Users are experiencing inconsistent responses and receiving truncated outputs when processing documents that exceed the FM's context window limits. Which solution will resolve this problem?

A. Configure fixed-size chunking at 4,000 tokens for each chunk with 20% overlap. Use application-level logic to link multiple chunks sequentially until the FM's maximum context window of 200,000 tokens is reached before making inference calls.
B. Use hierarchical chunking with parent chunks of 8,000 tokens and child chunks of 2,000 tokens. Use Amazon Bedrock Knowledge Bases built-in retrieval to automatically select relevant parent chunks based on query context. Configure overlap tokens to maintain semantic continuity.
C. Use semantic chunking with a breakpoint percentile threshold of 95% and a buffer size of 3 sentences. Use the Amazon Bedrock RetrieveAndGenerate API call to dynamically select the most relevant chunks based on embedding similarity scores.
D. Create a pre-processing AWS Lambda function that analyzes document token count by using the FM's tokenizer. Configure the lambda function to split documents into equal segments that fit within 80% of the context window. Configure the Lambda function to process each segment independently before aggregating the results.

**Answer: C**

Explanation:
Why optionC is the most appropriate solution

Dynamic relevance-driven selection – The RetrieveAndGenerate API evaluates embedding similarity and returns the top-scoring chunks, ensuring that only the portions of the document that are semantically related to the user’s query are sent to the model. Handles variable-length inputs – By applying a breakpoint percentile threshold and a buffer of≈3 sentences, the chunking step respects natural semantic boundaries rather than imposing a uniform token size. This prevents loss of critical information that could occur when a fixed-size split cuts through a concept. Avoids recurring truncation – Because the API automatically curates a set of chunks that together stay within the model’s 200K token limit while maximizing relevance, the model never receives an oversized context that would be truncated. Leverages built-in Bedrock capabilities – Using the native RetrieveAndGenerate flow eliminates the need for custom token-count logic and guarantees optimal interaction with the underlying FM’s context window.

Why the other options are less suitable

OptionA uses a static 4K-token chunk size with 20% overlap. While it can reach the 200K token ceiling, the fixed size does not align with semantic structure and may still drop high-value segments; no retrieval step ensures relevance. OptionB introduces hierarchical chunking with parent/child tokens and relies on Knowledge Base retrieval, but the retrieval is driven by predefined parent-chunk selection rather than similarity scoring. It can suffer from the same fixed-size constraints and adds unnecessary complexity for the described use-case. OptionD performs token-count-based splitting in a Lambda and processes each segment independently. This approach does not consider semantic relevance or context-aware relevance ranking, leading to possible loss of continuity and no guarantee that the most pertinent fragments are sent to the model.

References

Amazon Bedrock RetrieveAndGenerate –https://docs.aws.amazon.com/bedrock/latest/userguide/bedrock- rag.html Best practices for chunking and retrieval in Bedrock –https://aws.amazon.com/bedrock/guidance/chunking- retrieval/

---

## Exam AWS Certified Generative AI Developer - Professional (AIP-C01) (PDF) topic 1 question 33
Question #: 33
Topic #: 1

A company is developing a generative AI (GenAI) application that analyzes customer service calls in real-time and generates suggested responses for human customer service agents. The application must process 500,000 concurrent calls during peak hours with less than 200 ms end-to-end latency for each suggestion. The company uses existing architecture to transcribe customer call audio streams. The application must not exceed a pre- defined monthly compute budget and must maintain auto scaling capabilities. Which solution will meet these requirements?

A. Deploy a large, complex reasoning model on Amazon Bedrock. Purchase provisioned throughput and optimize for batch processing.
B. Deploy a low-latency, real-time optimized model on Amazon Bedrock. Purchase provisioned throughput and set up automatic scaling policies.
C. Deploy a large language model (LLM) on an Amazon SageMaker AI real-time endpoint that uses dedicated GPU instances.
D. Deploy a mid-sized language model on an Amazon SageMaker AI serverless endpoint that is optimized for batch processing.

**Answer: B**

Explanation:
Technical justification

Latency & throughput – The workload requires sub-200ms end-to-end response time for each real-time call suggestion. Amazon Bedrock’s real-time, low-latency inference profile is purpose-built for such use-cases; by selecting a pre-configured, low-latency model and provisioning dedicated throughput, the system can guarantee constant response latency even under 500k concurrent streams. Auto-scaling – Bedrock automatically scales provisioned throughput based on request volume. Combined with Bedrock’s built-in scaling policies, the service can elastically handle peak loads without manual intervention, preserving the monthly compute budget. Cost control – Paying for provisioned throughput on Bedrock allows predictable budgeting; you can right-size the throughput units to match the expected 500k concurrent calls and scale down during off-peak periods, staying within the allocated spend. Integration with existing transcription – Bedrock models can be invoked directly from the call-stream pipeline, enabling a tight coupling between the transcription service and the response generation step without additional data movement.

Why the other options are less suitable

Option A – A large, complex reasoning model on Bedrock is optimized for batch workloads, not for the strict latency requirements of real-time interaction. Provisioned throughput would still have to accommodate the heavier model, increasing cost and likely exceeding the latency budget. Option C – SageMaker real-time endpoints that use dedicated GPU instances can meet latency targets, but they require explicit instance sizing, capacity planning, and manual scaling policies. This adds operational overhead and makes it harder to stay within a pre-defined monthly budget compared with the serverless, auto-scaled provisioning of Bedrock. Option D – A serverless SageMaker endpoint optimized for batch processing incurs higher per-invocation latency and does not guarantee the consistent sub-200ms response time needed for a live call-center stream; it is also geared toward periodic jobs rather than continuous, high-concurrency traffic.

Conclusion – OptionB delivers the required low-latency, auto-scaling, and cost-predictable characteristics for a real-time GenAI response service while leveraging the managed simplicity of Amazon Bedrock.

References Amazon Bedrock – Real-time inference and provisioned throughput:

https://docs.aws.amazon.com/bedrock/latest/userguide/real-time-inference.html Auto Scaling and cost management with Bedrock provisioned throughput:

https://docs.aws.amazon.com/bedrock/latest/userguide/provisioned-throughput.html

---

## Exam AWS Certified Generative AI Developer - Professional (AIP-C01) (PDF) topic 1 question 34
Question #: 34
Topic #: 1

An ecommerce company is building an internal platform to develop generative AI applications by using Amazon Bedrock foundation models (FMs). Developers need to select models based on evaluations that are aligned to ecommerce use cases. The platform must display accuracy metrics for text generation and summarization in dashboards. The company has custom ecommerce datasets to use as standardized evaluation inputs. Which combination of steps will meet these requirements with the LEAST operational overhead? (Choose two.)

A. Import the datasets to an Amazon S3 bucket. Provide appropriate IAM permissions and cross-origin resource sharing (CORS) permissions to give the evaluation jobs access to the datasets.
B. Import the datasets to an Amazon S3 bucket. Provide appropriate IAM permissions and a VPC endpoint configuration to give the evaluation jobs access to the datasets.
C. Configure an AWS Lambda function to create model evaluation jobs on a schedule in the Amazon Bedrock console. Provide the URI of the S3 bucket that contains the datasets as an input. Configure the evaluation jobs to measure the real world knowledge (RWK) score for text generation and BERT Score for summarization. Configure a second Lambda function to check the status of the jobs and publish custom logs to Amazon CloudWatch. Create a custom Amazon CloudWatch Logs Insights dashboard.
D. Use Amazon SageMaker Clarify on a schedule to create model evaluation jobs. Use open source frameworks to create and run standardized evaluations. Publish results to Amazon CloudWatch namespaces. Use the word error rate score for text generation and toxicity for summarization as metrics for accuracy. Configure an AWS Lambda function to check the status of the jobs and publish custom logs to CloudWatch. Create a custom Amazon CloudWatch Logs Insights dashboard.
E. Run an Amazon SageMaker AI notebook job on a schedule by using the fmevals or ragas framework to run evaluations that use the datasets in the S3 bucket. Write Python code in the notebook that makes direct InvokeModel API calls to the FMs and processes their responses for evaluation. Publish job status and results to Amazon CloudWatch Logs to measure the real world knowledge (RWK) score for text generation and toxicity for summarization as metrics for accuracy. Create a custom CloudWatch Logs Insights dashboard.

**Answer: AC**

Explanation:
Why optionA+C is the optimal choice

A– Stores the custom ecommerce datasets in Amazon S3, the simplest and most cost-effective repository. Granting read-only IAM permissions and basic CORS configuration gives the evaluation jobs the least-privilege access without provisioning VPC endpoints or additional networking components, keeping operational overhead minimal. C– Leverages AWS-native functionality: a Lambda-driven schedule creates Bedrock model-evaluation jobs directly from the console, passing the S3 URI as input. Bedrock’s built-in metrics (real-world knowledgescore for text generation and BERTScore for summarization) are exactly the accuracy indicators the platform must surface. The Lambda polls job status, streams logs to CloudWatch, and a custom CloudWatchLogsInsights dashboard visualises the results. This end-to-end flow requires only serverless components and no external frameworks or additional services.

Why the other options add unnecessary complexity

B adds a VPC endpoint configuration, which introduces extra networking and security-group management solely for dataset access, offering no benefit over the simpler CORS approach. D relies on SageMakerClarify, a tool designed for tabular model explainability and bias detection, not for evaluating generative text generation or summarisation metrics. The suggested “word error rate” and “toxicity” scores are not the required accuracy measures. E mandates a persistent SageMaker notebook job and custom framework code (fmevals or RAGAS). Maintaining notebooks, managing Spark or Python environments, and writing invoke-model logic increases operational burden compared with the fully serverless Lambda-Bedrock integration.

Result – Combining the S3 storage with IAM/CORS (A) and the Lambda-orchestrated Bedrock evaluation with native metrics and CloudWatch Insights (C) satisfies all functional requirements while minimizing managed services and custom code, thus delivering the lowest operational overhead.

References

Amazon Bedrock Model Evaluation Guide –

https://docs.aws.amazon.com/bedrock/latest/userguide/evaluate-models.html Amazon CloudWatch Logs Insights – Create Custom Dashboards –

https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/create-cloudwatch-logs-insights- dashboards.html

---

## Exam AWS Certified Generative AI Developer - Professional (AIP-C01) (PDF) topic 1 question 35
Question #: 35
Topic #: 1

An elevator service company has developed an AI assistant application by using Amazon Bedrock. The application generates elevator maintenance recommendations to support the company's elevator technicians. The company uses Amazon Kinesis Data Streams to collect the elevator sensor data. New regulatory rules require that a human technician must review all AI-generated recommendations. The company needs to establish human oversight workflows to review and approve AI recommendations. The company must store all human technician review decisions for audit purposes. Which solution will meet these requirements?

A. Create a custom approval workflow by using AWS Lambda functions and Amazon SQS queues for human review of AI recommendations. Store all review decisions in Amazon DynamoDB for audit purposes.
B. Create an AWS Step Functions workflow that has a human approval step that uses the waitForTaskToken API to pause execution. After a human technician completes a review, use an AWS Lambda function to call the SendTaskSuccess API that has the approval decision. Store all review decisions in Amazon DynamoDB.
C. Create an AWS Glue workflow that has a human approval step. After the human technician review, integrate the application with an AWS Lambda function that calls the SendTaskSuccess API. Store all human technician review decisions in Amazon DynamoDB.
D. Configure Amazon EventBridge rules with custom event patterns to route AI recommendations to human technicians for review. Create AWS Glue jobs to process human technician approval queues. Use Amazon ElastiCache to cache all human technician review decisions.

**Answer: B**

Explanation:
Why optionB is the optimal solution

Built-in human-in-the-loop pattern – AWS Step Functions provides the waitForTaskToken token, which pauses a workflow until a downstream action (e.g., a human reviewer) signals completion. This is the canonical way to inject manual approval into an automated AI-generated recommendation pipeline. Direct hand-off to a human – The paused state can be exposed to a reviewer UI (or a simple email/action task). Once the reviewer submits the decision, a Lambda function invoked by the token calls SendTaskSuccess (or SendTaskFailure) and can forward the decision to downstream systems. Native audit trail – The decision can be persisted in Amazon DynamoDB with the same execution ARN as the primary key, giving a tamper-evident, query-able audit log that satisfies regulatory record-keeping. Serverless, scalable, and low-maintenance – All components (Step Functions, Lambda, DynamoDB) are fully managed, automatically scale with the volume of recommendations, and require no custom networking or orchestration logic.

Why the other options are unsuitable

OptionA – Relies on Lambda + SQS to implement a custom approval flow. While technically possible, it lacks the declarative, visual workflow representation that Step Functions offers, making it harder to enforce the exact sequence of “AI recommendation → human pause → decision → store”. Error handling, retries, and visibility are left to the developer, increasing operational overhead. OptionC – AWS Glue is designed for batch ETL transformations, not for stateful, event-driven workflows with human checkpoints. Introducing Glue to host a human-approval step adds unnecessary complexity and does not provide a native pause/resume mechanism like waitForTaskToken. Consequently, the solution is over-engineered and does not align with the intended human-oversight pattern. OptionD – Using EventBridge to route events and then Glue jobs to process “approval queues” introduces indirect routing and a cache layer (ElastiCache) that adds no value for audit purposes. There is no built-in way to pause execution for a human decision, nor a straightforward method to capture and store the reviewer’s choice; auditors would need to build custom logging around Glue runs, increasing maintenance and risk.

Implementation sketch for optionB

1. Workflow definition – A Step Functions state machine contains a “Task” state that invokes a Lambda (or an HTTPS endpoint) which issues a waitForTaskToken. 2. Human review – The token is returned to the UI; the technician reviews the AI recommendation and submits “Approve” or “Reject”. 3. Completion signal – The UI calls back the task token via the Step Functions sendTaskHeartbeat/sendTaskSuccess API (exposed through a lightweight Lambda). The payload contains the decision. 4. Decision persistence – A second Lambda, triggered by the TaskSuccess outcome, writes the decision (ARN, recommendation ID, reviewer ID, decision, timestamp) to DynamoDB. This record can be queried for audits. 5. Continue processing – The state machine proceeds to any downstream actions (e.g., notification, action on the maintenance schedule) based on the stored decision.

References

AWS Step Functions –Wait for Task Token AWS Lambda –Integrating with Step Functions Amazon DynamoDB –Best practices for audit trails

---

## Exam AWS Certified Generative AI Developer - Professional (AIP-C01) (PDF) topic 1 question 36
Question #: 36
Topic #: 1

A bank is building a generative AI (GenAI) application that uses Amazon Bedrock to assess loan applications by using scanned financial documents. The application must extract structured data from the documents. The application must redact personally identifiable information (PII) before inference. The application must use foundation models (FMs) to generate approvals. The application must route low-confidence document extraction results to human reviewers who are within the same AWS Region as the loan applicant. The company must ensure that the application complies with strict Regional data residency and auditability requirements. The application must be able to scale to handle 25,000 applications each day and provide 99.9% availability. Which combination of solutions will meet these requirements? (Choose three.)

A. Deploy Amazon Textract and Amazon Augmented AI (Amazon A2I) within the same Region to extract relevant data from the scanned documents. Route low-confidence pages to human reviewers.
B. Use AWS Lambda functions to detect and redact PII from submitted documents before inference. Apply Amazon Bedrock guardrails to prevent inappropriate or unauthorized content in model outputs. Configure Region-specific IAM roles to enforce data residency requirements and to control access to the extracted data.
C. Use Amazon Kendra and Amazon OpenSearch Service to extract field level values semantically from the uploaded documents before inference.
D. Store uploaded documents in Amazon S3 and apply object metadata. Configure IAM policies to store original documents within the same Region as each applicant. Enable object tagging for future audits.
E. Use AWS Glue Data Quality to validate the structured document data. Use AWS Step Functions to orchestrate a review workflow that includes a prompt engineering step that transforms validated data into optimized prompts before invoking Amazon Bedrock to assess loan applications.
F. Use Amazon SageMaker Clarify to generate fairness and bias reports based on model scoring decisions that Amazon Bedrock makes.

**Answer: ABD**

Explanation:
WhyABD is the correct combination

A – Textract+Amazon A2I Textract provides high-accuracy, region-local OCR and field-level extraction from scanned loan documents. When extraction confidence falls below the configured threshold, A2I automatically routes the page to an on-site human reviewer, keeping the processing loop within the same AWS Region as the applicant and satisfying the low-confidence routing requirement.

B – Lambda PII redaction + Bedrock guardrails + Region-specific IAM Lambda functions can scan the extracted fields and apply automated redaction rules (e.g., mask names, SSNs, account numbers) before any model inference. Bedrock guardrails enforce content-safety policies and prevent the model from emitting prohibited outputs. All IAM policies are scoped to a single Region, guaranteeing that PII never leaves the applicant’s residency zone and providing the audit trail required for compliance.

D – S3 with regional storage, metadata, tagging & IAM Uploaded documents are persisted in S3 buckets placed in the applicant’s Region. Object-level tags capture provenance (e.g., applicant ID, receipt date) and can be leveraged for audit queries. IAM policies enforce that only resources in the same Region can read or write these objects, meeting strict data- residency constraints while supporting scalable, highly-available storage (99.9%+ durability).

Together, these three services deliver end-to-end extraction, PII protection, regional compliance, scalable processing (≈25k apps/day), and a clear audit path, fulfilling every listed requirement.

Why the other options are not suitable

C – Kendra + OpenSearch – These services excel at searching indexed text collections, not at extracting structured fields from raw scanned images. They lack native PII-redaction capabilities and do not guarantee that extracted data remains within a single Region without additional custom code.

E – Glue Data Quality + Step Functions + prompt engineering – While Step Functions could orchestrate a workflow, Glue Data Quality is designed for bulk data catalog validation, not per-document PII scrubbing. The prompt-engineering step is not mandated by the requirements and adds unnecessary complexity; the question asks for the core services that directly satisfy the constraints.

F – SageMaker Clarify – Clarify generates fairness/bias reports for model inputs, but it does not address data residency, PII redaction, or extraction from scanned documents. It is unrelated to the auditability and regional compliance goals outlined. References

Amazon Textract & Amazon Augmented AI documentation:

https://docs.aws.amazon.com/textract/latest/dg/what-is-textract.html Amazon Bedrock guardrails & regional compliance:

https://docs.aws.amazon.com/bedrock/latest/userguide/guardrails.html

---

## Exam AWS Certified Generative AI Developer - Professional (AIP-C01) (PDF) topic 1 question 37
Question #: 37
Topic #: 1

A software company is using Amazon Q Business to build an AI assistant that allows employees to access company information and personal information by using natural language prompts. The company stores this information in an Amazon S3 bucket. Each department in the company has a dedicated prefix in the S3 bucket. Each object name includes the S3 prefix of the department that it belongs to. Each department can belong to only a single group in AWS IAM Identity Center. Each employee belongs to a single department. The company configures Amazon Q Business to access data stored in an S3 bucket as a data source. The company needs to ensure that the AI assistant respects access controls based on the user's IAM Identity Center group membership. Which solution will meet this requirement with the LEAST operational overhead?

A. Create a JSON file named acl.json in each department folder. In each file, create access control entries that specify the IAM Identity Center group that should have access to that department's data. Indicate the location of the JSON file in the Access Control section of the data source settings.
B. Create a single JSON file named acl.json at the top level of the S3 bucket. Add access control entries that map each department's S3 prefix to its corresponding IAM Identity Center group. Indicate the location of the JSON file in the Access Control section of the data source settings.
C. For each IAM Identity Center group, create a separate permissions set that denies access to all prefixes in the S3 bucket. Add a StringNotEquals condition key to the permissions set for each group that specifies the department each group is associated with. Attach the permissions sets to the Identity Center groups.
D. Create a metadata file named metadata.json at the top level of the S3 bucket. Add an AccessControlList object to the file that specifies the S3 path of each department's prefix. Specify the IAM Identity Center group that should have access to each department's prefix. Reference the file location in the data source metadata settings.

**Answer: B**

Explanation:
Why optionB is the optimal solution

Amazon Q Business evaluates S3 access controls through the Access Control section of the data source configuration, where a single JSON file can define path-based permissions. Placing the acl.json at the bucket root and mapping each department’s S3 prefix to its IAM Identity Center group enables a single, centralized policy that directly aligns with how Q Business interprets path-level ACLs. This approach requires no additional permissions-set creation or custom condition logic; it uses the native S3 ACL JSON format that Q Business supports out-of-the-box, minimizing implementation steps and ongoing maintenance. Because each department’s data is confined to its own prefix and each employee belongs to only one IAM Identity Center group, a single mapping file provides deterministic, low-latency enforcement of least-privilege access without extra processing overhead.

Why the other options are less suitable

OptionA requires a separate ACL file per department folder. While valid, it creates multiple policy artifacts that must be managed individually, increasing operational overhead when departments are added or restructured. OptionC relies on Deny permissions sets with conditional keys to restrict prefixes. This method is more complex to craft, requires custom IAM policy syntax, and can be error-prone; it also consumes extra IAM policy management effort, which conflicts with the “least operational overhead” goal. OptionD uses a metadata.json file and references it in the data source metadata settings. Q Business does not process arbitrary metadata files for access-control decisions; it only recognizes the built-in Access Control JSON syntax, making this approach unsupported and ineffective for enforcing IAM Identity Center group permissions.

References

1. Amazon Q Business – Configuring S3 Data Sources with Path-Based Access Control

https://docs.aws.amazon.com/amazonq/latest/business-userguide/data-sources-s3-access- control.html 2. Managing Access to Amazon S3 Objects using JSON Policy Documents

https://docs.aws.amazon.com/AmazonS3/latest/userguide/s3-bucket-policy.html#s3-bucket-policy- example-json

---

## Exam AWS Certified Generative AI Developer - Professional (AIP-C01) (PDF) topic 1 question 38
Question #: 38
Topic #: 1

A healthcare company is using Amazon Bedrock to build a system to help practitioners make clinical decisions. The system must provide treatment recommendations to physicians based only on approved medical documentation and must cite specific sources. The system must not hallucinate or produce factually incorrect information. Which solution will meet these requirements with the LEAST operational overhead?

A. Integrate Amazon Bedrock with Amazon Kendra to retrieve approved documents. Implement custom post- processing to compare generated responses against source documents and to include citations.
B. Deploy an Amazon Bedrock knowledge base and connect it to approved clinical source documents. Use the Amazon Bedrock RetrieveAndGenerate API to return citations from the knowledge base.
C. Use Amazon Bedrock and Amazon Comprehend Medical to extract medical entities. Implement verification logic against a medical terminology database.
D. Use an Amazon Bedrock knowledge base with Retrieve API calls and InvokeModel API calls to retrieve approved clinical source documents. Implement verification logic to compare against retrieved sources and to cite sources.

**Answer: B**

Explanation:
Why option B is the best fit

Built-in retrieval-augmented generation – Bedrock knowledge bases are designed to combine a vector store of approved documents with the generative model, and the RetrieveAndGenerate API directly returns results that include source citations. No custom retrieval pipeline or post-processing layer has to be built or maintained. Least operational overhead – All indexing, vector-search, and citation handling are managed by AWS. You only need to supply the approved clinical source files; the service takes care of embedding, similarity search, and response generation with citations automatically. Deterministic, hallucination-controlled output – Because generation is constrained to the retrieved chunks, the model can only reference information that actually exists in the knowledge base, helping prevent unsupported or fabricated recommendations. Compliance with medical documentation – The knowledge base can be refreshed without redeploying code, allowing you to keep the source documents up-to-date while preserving auditability of each citation.

Why the other choices are less suitable

OptionA – Requires integrating Bedrock with Amazon Kendra, then writing custom logic to compare responses and add citations. Kendra adds another service to manage and you must implement the verification and citation steps yourself, increasing both design complexity and operational burden. OptionC – Introduces Amazon Comprehend Medical for entity extraction and a separate medical terminology database for verification. This adds multiple independent services, custom mapping code, and extra latency, raising operational overhead without providing an out-of-the-box citation mechanism. OptionD – Uses Bedrock’s Retrieve and InvokeModel APIs manually and then builds verification logic on top. While technically possible, it replicates functionality that the RetrieveAndGenerate API already offers “as a service,” meaning you must write, test, and maintain that glue code, which is more work than the simpler RetrieveAndGenerate flow.

Conclusion – OptionB leverages Bedrock’s native knowledge-base and RetrieveAndGenerate capabilities to deliver citation-rich recommendations with minimal custom development and operational management, making it the most suitable choice for the scenario described.

References

Amazon Bedrock Knowledge Bases – Overview and setup:

https://docs.aws.amazon.com/bedrock/latest/userguide/knowledge-bases.html RetrieveAndGenerate API (citation-enabled generation):

https://docs.aws.amazon.com/bedrock/latest/userguide/knowledge-bases-retrieval.html

---

## Exam AWS Certified Generative AI Developer - Professional (AIP-C01) (PDF) topic 1 question 39
Question #: 39
Topic #: 1

A financial services company is developing a real-time generative AI (GenAI) assistant to support human call center agents. The GenAI assistant must transcribe live customer speech, analyze context, and provide incremental suggestions to call center agents while a customer is still speaking. To preserve responsiveness, the GenAI assistant must maintain end-to-end latency under 1 second from speech to initial response display. The architecture must use only managed AWS services and must support bidirectional streaming to ensure that call center agents receive updates in real time. Which solution will meet these requirements?

A. Use the Amazon Transcribe streaming API to transcribe calls. Pass the text to Amazon Comprehend to perform sentiment analysis. Feed the results to Anthropic Claude on Amazon Bedrock by using the InvokeModel API. Store results in Amazon DynamoDB. Use a WebSocket API to display the results.
B. Use Amazon Transcribe streaming with partial results enabled to deliver fragments of transcribed text before customers finish speaking. Forward text fragments to Amazon Bedrock by using the InvokeModelWithResponseStream API. Stream responses to call center agents through an Amazon API Gateway WebSocket API.
C. Use Amazon Transcribe batch processing to convert calls to text. Pass complete transcripts to Anthropic Claude on Amazon Bedrock by using the ConverseStream API. Return responses through an Amazon Lex chatbot interface that call center agents can access from their work computers.
D. Use the Amazon Transcribe streaming API with an AWS Lambda function to transcribe each audio segment. Configure the Lambda function to call the Amazon Titan Embeddings model on Amazon Bedrock by using the InvokeModel API. Configure the Lambda function to publish results to an Amazon SNS topic. Subscribe the call center agents to the SNS topic.

**Answer: B**

Explanation:
Why optionB is the optimal solution

Streaming first-word-level transcription – AmazonTranscribe’s streaming API with partial results can emit text fragments as soon as they are recognized, allowing the model to start processing before the customer finishes speaking. This dramatically reduces the time to the first word (often <200ms), keeping end-to-end latency well below the 1-second target. Bidirectional model invocation – Bedrock’s InvokeModelWithResponseStream enables the model to return tokens incrementally as they are generated. The call-center assistant receives model output token-by-token, which can be push-ed directly to the UI without waiting for a complete response. Managed, serverless end-to-end flow – All components (Transcribe streaming, Bedrock invoke streaming, APIGateway WebSocket) are fully managed AWS services, requiring no infrastructure provisioning or scaling logic from the development team. Real-time push to agents – The WebSocket API maintains an open, low-latency channel that can deliver updates instantly to the agents’ browsers or desktop clients, satisfying the bidirectional communication requirement. Minimal data-store overhead – No extra services (e.g., DynamoDB, SNS) are needed to synchronize state; the streaming pipeline itself provides the necessary real-time delivery, simplifying architecture and reducing latency spikes introduced by additional round-trips.

Why the other options are less suitable

OptionA relies on InvokeModel (synchronous) and stores results in DynamoDB before pushing via WebSocket. The synchronous call forces the model to wait for the full generation before returning, inflating latency and breaking the sub-second requirement. Storing in DynamoDB adds an unnecessary processing step. OptionC uses Amazon Transcribe batch processing, which only returns a complete transcript after the audio ends. This introduces unacceptable latency for real-time assistance and does not support incremental updates. The Lex chatbot interface is also unidirectional and not designed for low-latency bidirectional streams. OptionD invokes the model via InvokeModel (not the streaming variant) and publishes results to an SNS topic. SNS is a fire-and-forget publish/subscribe service; it does not guarantee ordered, low-latency delivery to individual agents and adds extra hops that can increase latency. Moreover, the solution lacks a direct bidirectional channel back to the UI.

References

Amazon Transcribe streaming transcription: https://docs.aws.amazon.com/transcribe/latest/dg streaming- transcription.html Amazon Bedrock InvokeModelWithResponseStream API:

https://docs.aws.amazon.com/bedrock/latest/userguide/api-invoke-model-with-response-stream.html

---

## Exam AWS Certified Generative AI Developer - Professional (AIP-C01) (PDF) topic 1 question 40
Question #: 40
Topic #: 1

A media company is launching a platform that allows thousands of users every hour to upload images and text content. The platform uses Amazon Bedrock to process the uploaded content to generate creative compositions. The company needs a solution to ensure that the platform does not process or produce inappropriate content. The platform must not expose personally identifiable information (PII) in the compositions. The solution must integrate with the company's existing Amazon S3 storage workflow. Which solution will meet these requirements with the LEAST infrastructure management overhead?

A. Enable the Enhanced Monitoring tool. Use an Amazon CloudWatch alarm to filter traffic to the platform. Use Amazon Comprehend PII detection to pre-process the data. Create a CloudWatch alarm to monitor for Amazon Comprehend PII detection events. Create an AWS Step Functions workflow that includes an Amazon Rekognition image moderation step.
B. Use an Amazon API Gateway HTTP API with request validation templates to screen content before storing the uploaded content in Amazon S3. Use Amazon SageMaker AI to build custom content moderation models that process content before sending the processed content to Amazon Bedrock.
C. Create an Amazon Cognito user pool that uses pre-authentication AWS Lambda functions to run content moderation checks. Use Amazon Textract to filter text content and Amazon Rekognition to filter image content before allowing users to upload content to the platform.
D. Create an AWS Step Functions workflow that uses built-in Amazon Bedrock guardrails to filter content. Use Amazon Comprehend PII detection to pre-process the content. Use Amazon Rekognition image moderation.

**Answer: D**

Explanation:
Why optionD is the best choice

Built-in guardrails – AWSStep Functions can invokeAmazonBedrockGuardrails, which are explicitly designed to filter toxic or disallowed outputs and to enforce PII-safety policies without custom code. Minimal custom infrastructure – The workflow ties together only managed services (Step Functions, Bedrock Guardrails, ComprehendPII detection, Rekognition moderation). No dedicated Lambda functions, API Gateways, or custom model training pipelines are needed, reducing operational overhead. Native S3 integration – Content can be staged in S3 and processed via Step Functions’ Invoke-API tasks, preserving the existing upload pipeline. Scalable & serverless – All components are serverless and auto-scale to handle thousands of requests per hour, matching the company’s traffic pattern.

Why the other options are less suitable

OptionA mixes many services but lacks a single, managed moderation layer; it requires separate CloudWatch alarms and custom workflow logic, increasing both complexity and management effort. OptionB introduces a custom SageMaker model that must be trained, versioned, and operated, adding substantial development and maintenance overhead, whereas the question seeks the least infrastructure-heavy solution. OptionC relies on Cognito user pools and Lambda-based moderation checks; managing Lambda functions, authentication flows, and integration with S3 adds extra resources and operational burden compared to a fully serverless, managed approach.

References

Amazon Bedrock Guardrails Overview: https://docs.aws.amazon.com/bedrock/latest/userguide/guardrails- overview.html Using Amazon Comprehend for PII Detection: https://docs.aws.amazon.com/comprehend/latest/userguide/pii- detection.html

---

## Exam AWS Certified Generative AI Developer - Professional (AIP-C01) (PDF) topic 1 question 41
Question #: 41
Topic #: 1

A company has set up Amazon Q Developer Pro licenses for all developers at the company. The company maintains a list of approved resources that developers must use when developing applications. The approved resources include internal libraries, proprietary algorithmic techniques, and sample code with approved styling. A new team of developers is using Amazon Q Developer to develop a new Java-based application. The company must ensure that the new developer team uses the company's approved resources. The company does not want to make project-level modifications. Which solution will meet these requirements?

A. Create a Git repository that contains all of the approved internal libraries, algorithms, and code samples. Include this Git repository in the application project locally as part of the workspace. Ensure that the developers use the @workspace context to retrieve suggestions from the Git repository.
B. In the project root folder, create a folder named .amazonq/rules. Add the approved internal libraries, algorithms, and code samples to the folder.
C. Create a folder in the application project named rules. Store the guidelines and code in the folder for Amazon Q Developer to reference product code suggestions.
D. Create an Amazon Q Developer customization that includes the approved data sources. Ensure that the developers use the customization to develop the application.

**Answer: D**

Explanation:
Justification

OptionA –Creating a Git repo of approved artifacts and using the @workspace context requires developers to commit the repository into the project and to reference it via the workspace. This introduces project-level modifications, violates the “no project-level changes” constraint, and does not leverage Amazon Q Developer’s native customization mechanisms for enforcing approved data sources and libraries.

OptionB –Placing files under .amazonq/rules is not a recognized location for configuring Amazon Q Developer customizations. The path is ignored by the service, so the approved resources will not be surfaced to the developer when using Q-Suggestions or reference-guided generation.

OptionC –Storing “rules” in a generic rules/ folder is merely a static directory that Amazon Q Developer does not automatically scan or interpret. Without an explicit customization registration, Q cannot enforce or expose these artifacts, making the approach ineffective.

OptionD –Building a customization that bundles approved libraries, algorithms, and code-sample data sources is the recommended design. Customizations are the sanctioned way to inject reference data and context into Amazon Q Developer, allowing the model to surface suggestions that draw from the approved set. Once created, the customization can be used by developers without altering the application project, satisfying the no-project-modification requirement.

Why D is therefore the correct answer Customizations are designed for precisely this scenario: they let administrators attach curated data sources (e.g., internal artifact indexes, style guides) to Amazon Q Developer, ensuring generated code suggestions adhere to corporate standards while keeping the source code untouched. This aligns with the certification objectives of Designing Amazon Q Developer workflows and Managing customization for enterprise compliance.

References

Amazon Q Developer Customizations –Official Documentation Using the @workspace and Data Sources in Q Suggestions –Official Documentation

---

## Exam AWS Certified Generative AI Developer - Professional (AIP-C01) (PDF) topic 1 question 42
Question #: 42
Topic #: 1

An ecommerce company is using Amazon Bedrock to build a customer service AI assistant. The AI assistant needs to process over 50,000 customer inquiries every day. The AI assistant occasionally experiences traffic spikes of up to 150,000 inquiries every day during promotional events. Analysis shows that 40% of inquiries follow similar patterns that share the same context. A GenAI developer must design a solution that will ensure low latency and consistent performance for the AI assistant during traffic spikes. Which solution will meet these requirements MOST cost-effectively?

A. Configure latency-optimized inference by setting the latency parameter to optimized in the performance configuration of the request to Amazon Bedrock. Use prompt caching to handle the repetitive inquiries.
B. Purchase provisioned throughput and model units (MUs) that are sized to handle peak traffic loads. Use Amazon ElastiCache (Redis OSS) to cache repetitive inquiries.
C. Use Amazon Bedrock Agents and custom knowledge bases to pre-process customer inquiries. Configure cross-Region inference to distribute traffic.
D. Use AWS Lambda functions to pre-process requests by using a custom prompt routing mechanism. Use Amazon DynamoDB as a caching layer to handle frequently asked questions.

**Answer: A**

Explanation:
Why optionA is the optimal, cost-effective solution

Latency-optimized inference – By selecting the latency-optimized performance profile, Bedrock automatically configures the underlying inference engine for the lowest possible response time, eliminating the need to over-provision compute resources for peak bursts. This profile is priced per inference and does not require upfront commitments, preserving the pay-as-you-go model. Prompt caching for repetitive patterns – The 40% of inquiries that share identical context can be cached using Bedrock’s built-in prompt-caching feature. Cached prompts incur a reduced per-token cost and avoid re-processing the same context, delivering sub-100ms responses even during spikes to 150k requests/day. Scalability without additional infrastructure – The combination of latency-optimized inference and prompt caching scales automatically with request volume; no extra services (e.g., ElastiCache, Lambda, DynamoDB) are required, reducing both operational overhead and incidental charges. Cost efficiency – Because provisioned capacity (as in optionB) must be sized for the absolute peak (150k requests), you would pay for idle capacity during normal traffic. OptionA consumes only the actual compute used plus a modest cache fee, making it the most economical choice for unpredictable spikes.

Why the other options are less suitable

OptionB – Purchasing provisioned Throughput Units or Model Units locks you into a fixed capacity that must cover the peak load, leading to over-provisioning for the majority of days. Adding ElastiCache incurs separate cluster, data-transfer, and storage costs, increasing total spend. OptionC – Using Bedrock Agents and cross-Region inference introduces inter-Region data replication, higher latency due to network hops, and additional pricing for secondary Region endpoints. This complexity does not directly address cost-effectiveness for short spikes. OptionD – Deploying Lambda functions and DynamoDB for routing adds extra invocation and storage charges per request. The added layers also increase architectural surface area and may introduce latency if the caching logic is not perfectly tuned, making it less efficient than native Bedrock caching.

Conclusion OptionA leverages Bedrock’s native latency-optimized inference and prompt-caching capabilities to meet the low-latency, high-throughput requirements at the lowest marginal cost, aligning with the exam’s focus on cost-optimized design patterns.

References

Bedrock Inference Configuration – Latency Optimized:

https://docs.aws.amazon.com/bedrock/latest/userguide/inference-configuration.html Prompt Caching in Bedrock: https://docs.aws.amazon.com/bedrock/latest/userguide/prompt-caching.html

---

## Exam AWS Certified Generative AI Developer - Professional (AIP-C01) (PDF) topic 1 question 43
Question #: 43
Topic #: 1

A legal research company has a Retrieval Augmented Generation (RAG) application that uses Amazon Bedrock and Amazon OpenSearch Service. The application stores 768-dimensional vector embeddings for 15 million legal documents, including statutes, court rulings, and case summaries. The company's current chunking strategy segments text into fixed-length blocks of 500 tokens. The current chunking strategy often splits contextually linked information such as legal arguments, court opinions, or statute references across separate chunks. Researchers report that generated outputs frequently omit key context or cite outdated legal information. Recent application logs show a 40% increase in response times. The p95 latency metric exceeds 2 seconds. The company expects storage needs for the application to grow from 90 GB to 360 GB within a year. The company needs a solution to improve retrieval relevance and system performance at scale. Which solution will meet these requirements?

A. Increase the embedding vector dimensionality from 768 to 4,096 without changing the existing chunking or pre-processing strategy.
B. Replace dynamic retrieval with static, pre-written summaries that are stored in Amazon S3. Use Amazon CloudFront to serve the summaries to reduce compute demand and improve predictability.
C. Update the chunking strategy to use semantic boundaries such as complete legal arguments, clauses, or sections rather than fixed token limits. Regenerate vector embeddings to align with the new chunk structure.
D. Migrate from OpenSearch Service to Amazon DynamoDB. Implement keyword-based indexes to enable faster lookups for legal concepts.

**Answer: C**

Explanation:
Correct Answer: C – Update the chunking strategy to use semantic boundaries such as complete legal arguments, clauses, or sections rather than fixed token limits. Regenerate vector embeddings to align with the new chunk structure.

Problem alignment: Fixed-token chunking at 500 tokens frequently splits legally related passages (e.g., an argument that spans several sentences or a multi-section clause). This creates fragmented contexts, causing the retriever to return incomplete or out-of-date passages, which manifests as omitted context and incorrect citations. Semantic-aware chunking: Using language-aware delimiters (e.g., section headers, clause breaks, or sentence-level logical boundaries) preserves the logical integrity of legal content. Each chunk then represents a self-contained unit of meaning, dramatically improving relevance of retrieved vectors and reducing noisy “partial” matches. Embedding regeneration: Vector embeddings derived from a model fine-tuned on legal text should be recomputed on the newly formed chunks so that the embedding space reflects the revised segmentation. This ensures that similarity scores faithfully capture legal concept cohesion. Performance impact: By reducing the number of irrelevant matches, downstream LLM prompt construction becomes simpler, cutting token-processing overhead. Consequently, p95 latency drops from >2s toward the target sub-second range, even as the stored corpus grows from 90GB to 360GB. Scalability: The approach is storage-agnostic; as the dataset expands, the same semantic-boundary heuristic continues to produce well-structured chunks, keeping retrieval accuracy stable while allowing linear growth in vector store size.

Why other options are not appropriate

A – Increase embedding dimensionality to 4,096 without changing chunking: Higher dimensional vectors can capture richer semantics, but they also increase storage, distance-calculation cost, and latency, exacerbating the existing 2s p95 issue. Moreover, the root cause—fragmented chunks—remains untouched, so retrieval relevance and citation accuracy will not improve. B – Replace dynamic retrieval with static pre-written summaries stored in S3 and served via CloudFront: Static summaries cannot keep pace with evolving statutes, case law, or new citations, violating the requirement for up-to-date legal information. They also forfeit the ability to retrieve precise passages, undermining the RAG paradigm and failing to address the fragmented-chunk problem.

D – Migrate to DynamoDB and use keyword-based indexes: DynamoDB is optimized for high-throughput key-value access, not for dense vector similarity search. Legal content relies heavily on semantic resemblance, not simple keyword matches; keyword indexes will miss nuanced legal concepts and are unlikely to improve retrieval precision or latency at the scale of 15M documents.

References

Amazon Bedrock – Retrieval-Augmented Generation (RAG) best practices:

https://docs.aws.amazon.com/bedrock/latest/userguide/rag-best-practices.html Amazon OpenSearch Service – Tuning vector search performance:

https://docs.aws.amazon.com/opensearch-service/latest/developerguide/performance.html#vector-search- tuning

These links provide the official AWS guidance on vector-search pipelines and performance considerations, supporting the technical justification above.

---

## Exam AWS Certified Generative AI Developer - Professional (AIP-C01) (PDF) topic 1 question 44
Question #: 44
Topic #: 1

A company is developing a generative AI (GenAI)-powered customer support application that uses Amazon Bedrock foundation models (FMs). The application must maintain conversational context across multiple interactions with the same user. The application must run clarification workflows to handle ambiguous user queries. The company must store encrypted records of each user conversation to use for personalization. The application must be able to handle thousands of concurrent users while responding to each user quickly. Which solution will meet these requirements?

A. Use an AWS Step Functions Express workflow to orchestrate conversation flow. Invoke AWS Lambda functions to run clarification logic. Store conversation history in Amazon RDS and use session IDs as the primary key.
B. Use an AWS Step Functions Standard workflow to orchestrate clarification workflows. Include Wait for a Callback patterns to manage the workflows. Store conversation history in Amazon DynamoDPurchase on- demand capacity and configure server-side encryption.
C. Deploy the application by using an Amazon API Gateway REST API to route user requests to an AWS Lambda function to update and retrieve conversation context. Store conversation history in Amazon S3 and configure server-side encryption. Save each interaction as a separate JSON file.
D. Use AWS Lambda functions to call Amazon Bedrock inference APIs. Use Amazon SQS queues to orchestrate clarification steps. Store conversation history in an Amazon ElastiCache (Redis OSS) cluster. Configure encryption at rest.

**Answer: B**

Explanation:
Correct option – B uses an AWS Step Functions Standard workflow to orchestrate the interactive clarification process.

Why it meets the requirements • The Standard workflow can maintain state across multiple turns, enabling complex conversation branching and clarification loops. • It seamlessly integrates with Amazon Bedrock inference APIs for generating responses and with Amazon SQS/SNS for decoupling clarification steps, providing natural back-pressure handling for high concurrency. • Conversation history can be stored in Amazon DynamoDB with on-demand capacity scaling, offering millisecond-level latency even under thousands of concurrent users. • DynamoDB supports server-side encryption at rest (KMS-managed) to satisfy data-privacy requirements, and its built-in TTL can purge old sessions automatically. • The workflow can invoke Lambda functions for clarification logic and can wait for a callback pattern, allowing the system to pause, collect user input, and resume without blocking the entire flow.

Why the other options fail

A: An Express workflow cannot retain stateful context over many turns; it is designed for short-lived, near-real-time orchestration and does not support the “Wait for Callback” pattern needed for clarification. RDS would also become a performance bottleneck under high load. C: Using API Gateway + Lambda to store each turn in S3 as a separate file makes retrieving the full conversational context costly and inefficient. S3 lacks native support for atomic updates and does not provide the low-latency reads needed for thousands of concurrent users. D: ElastiCache (Redis) can store conversation state but cannot guarantee durability; any node failure would lose recent interactions. Moreover, Lambda alone cannot reliably enforce the complex branching required for clarification, and placing encryption responsibilities on the cache layer is less straightforward than DynamoDB’s native encryption.

References

AWS Step Functions – Standard VS Express workflows: https://docs.aws.amazon.com/step- functions/latest/dg/choose-workflow-type.html Amazon DynamoDB encryption at rest:

https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/encryption-at-rest.html

---

## Exam AWS Certified Generative AI Developer - Professional (AIP-C01) (PDF) topic 1 question 45
Question #: 45
Topic #: 1

A financial services company needs to pre-process unstructured data such as customer transcripts, financial reports, and documentation. The company stores the unstructured data in Amazon S3 to support an Amazon Bedrock application. The company must validate data quality, create auditable metadata, monitor data metrics, and customize text chunking to optimize foundation model (FM) performance. Which solution will meet these requirements with the LEAST development effort?

A. Use Amazon SageMaker Data Wrangler to create a data flow. Configure Amazon CloudWatch metrics and alarms to monitor data quality. Use a custom AWS Lambda function to pre-process the data. Load processed data into Amazon Bedrock.
B. Set up an AWS Glue crawler to catalog data sources. Create AWS Glue ETL jobs to run custom transformation scripts. Use AWS Glue Data Quality to validate and monitor data quality. Load processed data into Amazon Bedrock.
C. Use Amazon Comprehend to extract entities. Create an AWS Lambda function to chunk text. Run Amazon Athena to query and validate data quality. Load processed data into Amazon Bedrock.
D. Create an AWS Step Functions workflow to orchestrate data pre-processing tasks. Run custom code on Amazon EC2 instances to process the data. Use Amazon SageMaker Model Monitor to monitor data quality. Load processed data into Amazon Bedrock.

**Answer: B**

Explanation:
Why optionB is the best fit

Minimal manual coding: AWS Glue offers a fully managed crawler and ETL environment that automatically discovers schemas, applies predefined transformations, and runs the Data Quality feature out-of-the-box. This eliminates the need to write and maintain separate Lambda functions, EC2 scripts, or custom Step Functions state machines. Integrated data quality & metadata: Glue Data Quality provides ready-made checks (e.g., completeness, pattern matching, statistical outliers) and automatically captures custom metadata in the Glue Data Catalog, satisfying the auditable metadata requirement with virtually no extra development. Seamless Bedrock integration: Processed data can be written directly to a designated S3 location that the Bedrock application polls, enabling a straightforward hand-off without additional orchestration layers. Low operational overhead: All components (crawler, ETL job, Data Quality, catalog) are serverless, scale automatically, and are covered by AWS-managed SLAs—aligning with the “LEAST development effort” goal.

Why the other options are less suitable

OptionA relies on SageMaker Data Wrangler and custom Lambda code, requiring explicit pipeline creation, manual metric publishing, and extra code for chunking—more development effort than a single Glue workflow. OptionC uses Amazon Comprehend for entity extraction only, then depends on Athena for validation—a UI-centric query tool that does not provide automated data-quality checks or metadata cataloging, and it lacks built-in text-chunking best practices for Bedrock. OptionD introduces Step Functions orchestration and EC2-based custom processing, adding infrastructure management and code maintenance that increase complexity and development time compared with the fully managed Glue solution.

References

AWS Glue Data Catalog & Crawlers: https://docs.aws.amazon.com/glue/latest/dg/crawler.html AWS Glue Data Quality: https://docs.aws.amazon.com/glue/latest/dg/data-quality.html

---

## Exam AWS Certified Generative AI Developer - Professional (AIP-C01) (PDF) topic 1 question 46
Question #: 46
Topic #: 1

A company uses Amazon Bedrock to build a Retrieval Augmented Generation (RAG) system. The RAG system uses an Amazon Bedrock knowledge base that is based on an Amazon S3 bucket as the data source for emergency news video content. The system retrieves transcripts, archived reports, and related documents from the S3 bucket. The RAG system uses state-of-the-art embedding models and a high-performing retrieval setup. However, users report slow responses and irrelevant results, which cause decreased user satisfaction. The company notices that vector searches are evaluating too many documents across too many content types and over long periods of time. The company determines that the underlying models will not benefit from additional fine tuning. The company must improve retrieval accuracy by applying smarter constraints. The company wants a solution that requires minimal changes to the existing architecture. Which solution will meet these requirements?

A. Enhance embeddings by using a domain-adapted model that is specifically trained on emergency news content for improved vector similarity.
B. Migrate to Amazon OpenSearch Service. Use vector fields and metadata filters to define the scope of results retrieval.
C. Enable metadata-aware filtering within the Amazon Bedrock knowledge base by indexing S3 object metadata.
D. Migrate to an Amazon Q Business index to perform structured metadata filtering and document categorization during retrieval.

**Answer: C**

Explanation:
Why optionC is the optimal choice

Minimal architectural impact – Amazon Bedrock Knowledge Bases already support metadata-aware indexing. By attaching the S3 object’s tags/metadata (e.g., content_type, source, release_date) to the vector store, retrieval can be scoped using those fields without moving data, changing the embedding model, or re-architecting the pipeline. Precision-focused filtering – Adding metadata to the index lets the system limit vector searches to the relevant subset (e.g., only emergency-news_video objects). This reduces the number of candidate documents evaluated, cutting latency and eliminating irrelevant matches caused by overly broad similarity searches. Preserves existing components – The current embedding model, Retrieval-Augmented Generation flow, and source-data (S3 bucket) remain untouched; only the indexing step is extended with metadata fields, aligning with the requirement for “smart constraints” and “minimal changes.” No model fine-tuning required – Since the issue stems from search scope rather than model capability, introducing a domain-adapted embedding (optionA) would add unnecessary complexity and does not address the retrieval bottleneck. Likewise, migrating to OpenSearch (B) or a Q-Business index (D) would entail significant re-architecture and data migration, violating the “minimal changes” constraint.

Why the other options are less suitable

OptionA – Domain-adapted embeddings – While embeddings can improve similarity relevance, the primary symptom reported is excessive document evaluation, not poor similarity quality. Retraining embeddings would require data labeling, pipeline changes, and model deployment, which exceeds the “minimal changes” goal. OptionB – Migrate to Amazon OpenSearch Service – This introduces a separate search engine, new data pipelines, and operational overhead. It fundamentally alters the architecture rather than refining the existing Bedrock Knowledge Base workflow. OptionD – Migrate to Amazon Q Business – Q Business adds a new service layer with additional licensing and configuration. It also changes the retrieval engine entirely, which does not meet the requirement to keep the existing Bedrock-based RAG architecture intact.

References

Amazon Bedrock Knowledge Bases – Metadata filtering:

https://docs.aws.amazon.com/bedrock/latest/userguide/knowledge-bases.html#knowledge-bases-metadata- filtering S3 Object Metadata and Tagging: https://docs.aws.amazon.com/AmazonS3/latest/userguide/using- metadata.html

---

## Exam AWS Certified Generative AI Developer - Professional (AIP-C01) (PDF) topic 1 question 47
Question #: 47
Topic #: 1

A financial services company is creating a Retrieval Augmented Generation (RAG) application that uses Amazon Bedrock to generate summaries of market activities. The application relies on a vector database that stores a small proprietary dataset that has a low index count. The application must perform similarity searches. The Amazon Bedrock model's responses must maximize accuracy and maintain high performance. The company needs to configure the vector database and integrate it with the application. Which solution will meet these requirements?

A. Launch an Amazon MemoryDB cluster and configure the index by using the Flat algorithm. Configure a horizontal scaling policy based on performance metrics.
B. Launch an Amazon MemoryDB cluster and configure the index by using the Hierarchical Navigable Small World (HNSW) algorithm. Configure a vertical policy based on performance metrics.
C. Launch an Amazon Aurora PostgresSQL cluster and configure the index by using the Inverted File with Flat Compression (IVFFlat) algorithm. Configure the instance class to scale to a larger size when the load increases.
D. Launch an Amazon DocumentDB cluster that has an Inverted File with Flat Compression (IVFFlat) index and a high probe value. Configure connections to the cluster as a replica set Distribute reads to replica instances.

**Answer: A**

Explanation:
Why option A is the optimal solution

MemoryDB for Redis provides a fully managed, in-memory vector store that can host small, proprietary datasets with low index counts while delivering sub-millisecond latency for similarity searches – a key requirement for accurate RAG outputs. The Flat algorithm produces an exact nearest-neighbor index, guaranteeing maximum accuracy for small collections; it avoids the approximation trade-offs introduced by HNSW or IVFFlat, which are beneficial only for very large vectors. Configuring a horizontal scaling policy based on performance metrics (e.g., CPU, latency) allows the cluster to grow outwards by adding read replicas, maintaining high throughput without sacrificing precision. Integration with Amazon Bedrock is seamless through the Redis API, enabling the application to fetch embeddings, run similarity queries, and feed results to the generative model with minimal latency.

Why the other options are less suitable

Option B – While HNSW offers good recall-speed trade-offs for large indexes, it introduces approximation that can slightly reduce accuracy; a vertical scaling policy is not the intended use for MemoryDB, which scales horizontally via read replicas. Option C – Aurora PostgreSQL is a relational database; IVFFlat is designed for large-scale vector workloads and requires substantial disk space and compute, making it overkill for a low-count dataset and potentially hurting performance. Option D – Amazon DocumentDB supports the MongoDB API and can host IVFFlat indexes, but the IVFFlat structure again approximates results, and using a replica set for read distribution adds operational complexity without delivering the exact-match accuracy needed for high-precision market-summary generation.

References

Amazon MemoryDB for Redis – Vector search and indexing:

https://docs.aws.amazon.com/memorydb/latest/userguide/vector-search.html Amazon Bedrock – Integrating with MemoryDB for RAG:

https://docs.aws.amazon.com/bedrock/latest/userguide/integrating-memorydb.html

---

## Exam AWS Certified Generative AI Developer - Professional (AIP-C01) (PDF) topic 1 question 48
Question #: 48
Topic #: 1

A GenAI developer is building a Retrieval Augmented Generation (RAG)-based customer support application that uses Amazon Bedrock foundation models (FMs). The application needs to process 50 GB of historical customer conversations that are stored in an Amazon S3 bucket as JSON files. The application must use the processed data as its retrieval corpus. The application's data processing workflow must extract relevant data from customer support documents, remove customer personally identifiable information (PII), and generate embeddings for vector storage. The processing workflow must be cost-effective and must finish within 4 hours. Which solution will meet these requirements with the LEAST operational overhead?

A. Use AWS Lambda and Amazon Comprehend to process files in parallel, remove PII, and call Amazon Bedrock APIs to generate vectors. Configure Lambda concurrency limits and memory settings to optimize throughput.
B. Create an AWS Glue ETL job to run PII detection scripts on the data. Use Amazon SageMaker Processing to run the HuggingFaceProcessor to generate embeddings by using a pre-trained model. Store the embeddings in Amazon OpenSearch Service.
C. Deploy an Amazon EMR cluster that runs Apache Spark with user-defined functions (UDFs) that call Amazon Comprehend to detect PII. Use Amazon Bedrock APIs to generate vectors. Store outputs in Amazon Aurora PostgreSQL with the pgvector extension.
D. Implement a data processing pipeline that uses AWS Step Functions to orchestrate a workload that uses Amazon Comprehend to detect PII and Amazon Bedrock to generate embeddings. Directly integrate the workflow with Amazon OpenSearch Serverless to store vectors and provide similarity search capabilities.

**Answer: D**

Explanation:
Solution D employs a fully serverless workflow: Step Functions orchestrates the steps, AmazonComprehend detects PII, AmazonBedrock generates embeddings, and vectors are written directly to AmazonOpenSearch Serverless, which provides built-in similarity search. All components are managed, require no infrastructure provisioning, and scale automatically to meet the 4-hour deadline while keeping costs low. Why it’s optimal: The pipeline uses only managed services, eliminates the need for cluster or database administration, and stores vectors where they can be queried immediately, reducing overall operational overhead. Why the other options are less suitable: • A relies on Lambda concurrency tuning and custom memory settings; it lacks native vector storage integration and would need additional services for similarity search, increasing complexity. • B introduces AWS Glue, SageMaker Processing, and a separate embedding step, adding multiple managed services and operational overhead. • C requires provisioning and maintaining an EMR Spark cluster and an Aurora PostgreSQL instance with pgvector, which is heavier, more expensive, and less suited to a tight 4-hour processing window.

References

Amazon Step Functions – Orchestrating serverless workflows: https://docs.aws.amazon.com/step- functions/latest/userguide/intro.html Amazon OpenSearch Serverless – Fully managed search and analytics:

https://docs.aws.amazon.com/opensearch-serverless/latest/developerguide/what-is.html

((D))

---

## Exam AWS Certified Generative AI Developer - Professional (AIP-C01) (PDF) topic 1 question 49
Question #: 49
Topic #: 1

A financial services company is developing a generative AI (GenAI) application that serves both premium customers and standard customers. The application uses AWS Lambda functions behind an Amazon API Gateway REST API to process requests. The company needs to dynamically switch between AI models based on which customer tier each user belongs to. The company also wants to perform A/B testing for new features without redeploying code. The company needs to validate model parameters like temperature and maximum token limits before applying changes. Which solution will meet these requirements with the LEAST operational overhead?

A. Create an AWS Systems Manager Parameter Store parameters for each configuration. Use Lambda functions to poll for parameter updates. Use Amazon EventBridge events to trigger redeployments when configurations change.
B. Store model configurations in Amazon DynamoDB tables. Optimize access patterns to retrieve configurations according to customer tier. Configure Lambda functions to query DynamoDB at the beginning of each request to determine which model to use.
C. Use AWS AppConfig to manage model configurations. Use feature flags to perform A/B testing. Define JSON schema validation rules for model parameters. Configure Lambda functions to retrieve configurations by using the AWS AppConfig Agent.
D. Create an Amazon ElastiCache (Redis OSS) cluster to store model configurations. Set short TTL values. Run custom validation logic in Lambda functions. Use Amazon CloudWatch metrics to monitor configuration usage.

**Answer: C**

Explanation:
Why optionC is the best choice

Centralized, managed configuration – AWS AppConfig provides a single source of truth for model parameters and feature-flag settings, eliminating the need to write and maintain custom storage or polling logic. Zero-code retrieval – The AWS AppConfig Agent can be embedded in a Lambda runtime, allowing the function to fetch the configuration at start-up or on-demand without additional SDK calls or runtime overhead. Built-in validation – JSON schemas can be attached to AppConfig configurations, so invalid parameter values are rejected automatically, ensuring that temperature, max-token limits, or other settings are always syntactically correct before they are used. Feature-flag and A/B testing support – AppConfig natively supports rollout strategies (e.g., 10% of requests) and can switch configurations instantly, enabling experimentation without code or Lambda redeployment. Low operational overhead – No extra resources (e.g., DynamoDB tables, ElastiCache clusters) need to be provisioned, monitored, or scaled. AppConfig handles versioning, caching, and automatic rollback if a validation error occurs.

Why the other options are less suitable

OptionA – Requires Lambda functions to poll Parameter Store and EventBridge to trigger redeployments. This adds custom polling logic, introduces latency, and creates operational complexity (polling intervals, IAM permissions, and redeployment orchestration). OptionB – Storing configurations in DynamoDB forces each request-handling Lambda to perform a database lookup, increasing request latency and requiring custom error-handling for missing or malformed items. Managing table throughput and security adds overhead. OptionD – Introducing an ElastiCache cluster adds a separate infrastructure component to provision, patch, and monitor. Although TTL can limit stale data, it provides no built-in validation or feature-flag rollout controls, increasing both operational burden and risk of serving invalid parameters.

References

AWS AppConfig – https://docs.aws.amazon.com/appconfig/latest/userguide/what-is-appconfig.html Using AWS AppConfig with Lambda – https://docs.aws.amazon.com/appconfig/latest/userguide/lambda- integration.html

---

## Exam AWS Certified Generative AI Developer - Professional (AIP-C01) (PDF) topic 1 question 50
Question #: 50
Topic #: 1

A company is using Amazon Bedrock and Anthropic Claude 3 Haiku to develop an AI assistant. The AI assistant normally processes 10,000 requests each hour but experiences surges of up 30,000 requests each hour during peak usage periods. The AI assistant must respond within 2 seconds while operating across multiple AWS Regions. The company observes that during peak usage periods, the AI assistant experiences throughput bottlenecks that cause increased latency and occasional request timeouts. The company must resolve the performance issues. Which solution will meet this requirement?

A. Purchase provisioned throughput and sufficient model units (MUs) in a single Region. Configure the application to retry failed requests with exponential backoff.
B. Implement token batching to reduce API overhead. Use cross-Region inference profiles to automatically distribute traffic across available Regions.
C. Set up auto scaling AWS Lambda functions in each Region. Implement client-side round-robin request distribution. Purchase one model unit (MU) of provisioned throughput as a backup.
D. Implement batch inference for all requests by using Amazon S3 buckets across multiple Regions. Use Amazon SQS to set up an asynchronous retrieval process.

**Answer: B**

Explanation:
Why optionB is the optimal solution

Cross-Region inference profiles automatically route requests to the Region with available model capacity, ensuring that the 30KRPS peak can be handled across multiple Regions without adding latency-inducing routing hops. Provisioned throughput (purchased model units –MUs) can be scaled up in each Region to meet the required request-per-second envelope, guaranteeing that responses stay under the 2-second SLA. Token-batching reduces per-request API overhead by aggregating multiple user tokens into a single inference call, which lowers the effective latency and increases throughput without additional cost or architecture complexity. Together these mechanisms address both capacity and latency while keeping the service region-aware and resilient, exactly what the scenario demands.

Why the other options are unsuitable

OptionA restricts provisioning to a single Region and relies on client-side retries. A single Region cannot supply the extra throughput needed during the 30KRPS surge, and retries only increase load rather than solving the capacity shortage. OptionC suggests Lambda scaling and round-robin distribution but still purchases only one MU. Lambda scaling does not increase the underlying model capacity; a single MU cannot sustain the required request rate across Regions, leading to the same bottlenecks. OptionD shifts to batch inference with S3 and SQS, which turns the service asynchronous. This contradicts the strict 2-second response requirement and adds latency for users waiting for batch results.

References

Amazon Bedrock – Inference Configuration and Scaling:

https://docs.aws.amazon.com/bedrock/latest/userguide/inference-configuration.html Token Batching for Amazon Bedrock: https://docs.aws.amazon.com/bedrock/latest/userguide/token- batching.html

---

## Exam AWS Certified Generative AI Developer - Professional (AIP-C01) (PDF) topic 1 question 51
Question #: 51
Topic #: 1

A company uses Amazon Bedrock to develop an AI assistant to provide customer support. Analysis shows that 40% of customer queries use varied phrasing or wording to ask the same questions. The company wants a solution to reduce redundant model calls. The solution must ensure that semantically equivalent questions receive consistent answers. The solution must ensure low latency. Which solution will meet these requirements?

A. Deploy an Amazon DynamoDB Accelerator (DAX) cluster as an in-memory cache. Specify the query text as the partition key and the model response text as the sort key. Query the cache by using a filter expression with the LIKE operator.
B. Use Amazon Bedrock to generate embeddings from customer queries. Use Amazon MemoryDB for Valkey to store hash sets of vector embeddings and model responses. Use a RANGE query to find similar queries and their responses.
C. Deploy Amazon OpenSearch Service that has k-nearest neighbor (k-NN) capabilities to store query-response text pairs. Use an approximate k-NN technique to find similar queries and their responses.
D. Create a caching solution by using Amazon DynamoDB to create a global secondary index on the normalized query text. Apply stemming to incoming queries. Query the index of cached customer queries.

**Answer: C**

Explanation:
Why option C is the optimal choice

The core problem is semantic equivalence, not exact string matching.A solution must map different wording with the same intent to a common internal representation and retrieve the corresponding response quickly. Amazon OpenSearch Service with k-NN stores query-response pairs as dense vector embeddings.Its built-in approximate k-NN search can locate the nearest-neighbor vectors in sub-millisecond latency, even when the phrasing varies widely. OpenSearch’s k-NN plugin maintains an optimized index that can be scaled horizontally and warm-cached, preserving the low-latency requirement for a production support assistant. The retrieved nearest vectors are directly mapped back to their stored response text, guaranteeing that semantically equivalent questions receive the same answer across the assist. Because the search operates on embeddings rather than raw text, it naturally abstracts minor lexical differences, making the answer consistent without additional normalization logic.

Why the other options are less suitable

Option A (DynamoDBDAX with LIKE filter) relies on exact partition keys and a pattern-matching filter.LIKE cannot capture semantic similarity; different phrasings will generate distinct partition values and therefore will not be deduped, leading to redundant model invocations. Option B (MemoryDBValkey with hash sets of vector embeddings) stores vectors as hash entries but does not provide a built-in similarity search primitive.Finding “similar” vectors would require a full-scan of the set, which becomes costly and adds latency, defeating the low-latency SLA. Option D (DynamoDB GSI with normalized text and stemming) only normalizes surface tokens; it still cannot map distinct sentences that convey the same intent but differ in structure or vocabulary.Stemming does not guarantee semantic equivalence, so many unique queries would still bypass the cache.

Thus, the combination of vector-based retrieval, approximate nearest-neighbor search, and O(1)-ish latency provided by OpenSearch Service’s k-NN capabilities directly satisfies the requirements of semantic deduplication, consistent answers, and performance.

References

Amazon OpenSearch Servicek-Nearest Neighbor (k-NN) – https://docs.aws.amazon.com/opensearch- service/latest/developerguide/knn.html Amazon BedrockEmbedding models – https://docs.aws.amazon.com/bedrock/latest/userguide/what-is- bedrock-embeddings.html

---

## Exam AWS Certified Generative AI Developer - Professional (AIP-C01) (PDF) topic 1 question 52
Question #: 52
Topic #: 1

A company uses AWS Lambda functions to build an AI agent solution. A GenAI developer must set up a Model Context Protocol (MCP) server that accesses user information. The GenAI developer must also configure the AI agent to use the new MCP server. The GenAI developer must ensure that only authorized users can access the MCP server. Which solution will meet these requirements?

A. Use a Lambda function to host the MCP server. Grant the AI agent Lambda functions permission to invoke the Lambda function that hosts the MCP server. Configure the AI agent's MCP client to invoke the MCP server asynchronously.
B. Use a Lambda function to host the MCP server. Grant the AI agent Lambda functions permission to invoke the Lambda function that hosts the MCP server. Configure the AI agent to use the STDIO transport with the MCP server.
C. Use a Lambda function to host the MCP server. Create an Amazon API Gateway HTTP API that proxies requests to the Lambda function. Configure the AI agent solution to use the Streamable HTTP transport to make requests through the HTTP API. Use Amazon Cognito to enforce OAuth 2.1.
D. Use a Lambda layer to host the MCP server. Add the Lambda layer to the AI agent Lambda functions. Configure the agentic AI solution to use the STDIO transport to send requests to the MCP server. In the AI agent's MCP configuration, specify the Lambda layer ARN as the command. Specify the user credentials as environment variables.

**Answer: C**

Explanation:
Why optionC is the only solution that satisfies all requirements

MCP server hosting – The MCP server must be reachable over HTTP so that any client (the AI agent) can invoke it via a standard request/response pattern. Transport choice – The MCP specification defines three transports; the only one that works across process boundaries and over the network is Streamable HTTP. OptionC configures the AI agent to use this transport by routing requests through an Amazon API Gateway HTTP API that forwards them to the Lambda-based MCP server. Secure, fine-grained authorization – The question explicitly requires that only authorized users can access the MCP server. API Gateway can be protected with Amazon Cognito User Pools, which enforce OAuth2.1 (or OIDC) scopes and token-based auth. This gives a managed, scalable authentication layer that can be tied to IAM policies or custom claims, fulfilling the security requirement. Separation of concerns – Hosting the MCP server in a Lambda (as in all options) is fine, but the server must expose a public endpoint. API Gateway provides a stable, publicly reachable URL, automatic request/response marshaling, and throttling – features not available when the server is invoked directly from another Lambda or via STDIO pipes. Correct use of MCP client configuration – The AI agent must point to the HTTP endpoint of the API Gateway and use the Streamable HTTP transport. This matches the official MCP client pattern (client-side → HTTP → server).

Why the other choices fail

OptionA – Invoking the Lambda that hosts the MCP server asynchronously breaks the request-response contract required by MCP; the AI agent cannot receive timely results or proper streaming of tokens. Moreover, it does not address authentication beyond IAM permissions, leaving the server exposed to any caller with Lambda invoke rights. OptionB – STDIO transport works only when the client and server share the same process or runtime environment. It cannot be used over a network boundary, so the AI agent running in a separate Lambda (or external service) cannot communicate with the MCP server. No authentication mechanism is described, so the “authorized-user only” constraint is unmet. OptionD – A Lambda layer can only contain static code and libraries; it cannot host a running server process. Embedding the MCP server inside a layer makes it impossible to expose a network endpoint or handle HTTP traffic. Storing user credentials in environment variables also violates best-practice security (they are plain-text and limited to 4KB). The transport choice (STDIO) is therefore unsuitable for a cross-service MCP interaction.

Result – Only OptionC correctly combines a publicly reachable HTTP MCP server, the required Streamable HTTP transport, and a managed OAuth2.1 authentication flow via Cognito, satisfying both functional and security requirements.

References

Model Context Protocol –Amazon Bedrock MCP Overview Streamable HTTP transport for MCP –MCP HTTP Transport Guide Securing HTTP APIs with Cognito –API Gateway Auth with Cognito Lambda layer limits and use cases –Lambda Layer Documentation

---

## Exam AWS Certified Generative AI Developer - Professional (AIP-C01) (PDF) topic 1 question 53
Question #: 53
Topic #: 1

A company wants to create an annual rewards program for its customers. The rewards that customers earn vary based on different parameters such as the categories of the items ordered and the customers' purchase history. The company needs a generative AI (GenAI) solution that uses three Amazon Bedrock agents to help customers during online catalog browsing. The agents must use knowledge bases and action groups to handle the search, recommendation, and order modules. The modules must operate sequentially. An AWS Lambda function must calculate estimated rewards for each recommended item. The solution must provide graceful degradation during service disruptions. Which solution will meet these requirements with the MOST operational efficiency?

A. Define an Amazon API Gateway REST API behind each agent. Create a second Lambda function to orchestrate the calls to the agents and the rewards Lambda function. Configure the second Lambda function with a retry/fallback mechanism.
B. Create an AWS Step Functions state machine with four tasks that run the agents and the rewards Lambda function. Set up retry and catch branches for each of the task steps.
C. Configure each agent with a separate retry/fallback mechanism. Create a second Lambda function to orchestrate the calls to the agents and the rewards Lambda function. Define an Amazon API Gateway REST API behind the second Lambda function.
D. Create a second Lambda function to orchestrate the calls to the agents and the rewards Lambda function. Create an AWS Step Functions state machine with one task that runs the second Lambda function. Set up retry and catch branches for the task step.

**Answer: B**

Explanation:
Why OptionB is the most operationally efficient solution

Sequential orchestration is natively supported – AWS Step Functions lets you model multi-step workflows with explicit task ordering, ensuring the catalog-search, recommendation, and order-lookup agents execute in the required sequence while automatically propagating the result of each step to the next. Built-in retry and fallback handling – Each state in a state machine can be configured with Retry and Catch blocks, providing declarative error handling without writing custom logic in Lambda or API Gateway. This reduces operational overhead and eliminates race conditions. Serverless and cost-effective – The entire pipeline (agents on Amazon Bedrock, the rewards Lambda, and Step Functions) runs on a fully managed serverless stack. You only pay for the actual executions and state transitions, avoiding the need for continuously running API Gateways or custom orchestration infrastructure. Graceful degradation – By configuring Catch branches for each task, the state machine can divert to fallback actions (e.g., degrade to a simplified recommendation path or return a static response) when an agent or downstream service is unavailable, maintaining service continuity. Scalable concurrency – Step Functions scales automatically with the number of concurrent executions, letting the architecture absorb spikes in catalog browsing without provisioning additional resources. Why the other options are less suitable

OptionA relies on API Gateway REST APIs behind each agent and adds a second Lambda orchestrator with explicit retry logic. This introduces extra managed services (multiple API Gateways) and custom orchestration code, increasing operational complexity and cost while still lacking native state management and built-in fallback handling. OptionC distributes retry/fallback logic per agent and uses an additional Lambda to expose an API Gateway. Although it reduces the number of external services, it does not provide a unified, declarative workflow for sequencing tasks, requiring more custom controller code to enforce the required order and error handling. OptionD creates a single task Step Functions state machine that merely invokes the orchestrator Lambda. This defeats the purpose of Step Functions’ multi-task capability, forcing the Lambda to embed all sequencing and error handling itself, which undermines the managed workflow benefits and adds unnecessary logic to a Lambda function.

References

Step Functions – Error Handling and Retries: https://docs.aws.amazon.com/states/latest/dg/workflows- retries-error-handling.html Serverless Workflows with Lambda and Step Functions: https://aws.amazon.com/blogs/compute/serverless- workflows-using-aws-step-functions-and-aws-lambda/

---

## Exam AWS Certified Generative AI Developer - Professional (AIP-C01) (PDF) topic 1 question 54
Question #: 54
Topic #: 1

A company is creating a workflow to review customer-facing communications before the company sends the communications. The company uses a pre-defined message template to generate the communications and stores the communications in an Amazon S3 bucket. The workflow needs to capture a specific portion from the template and send it to an Amazon Bedrock model. The workflow must store model responses back to the original S3 bucket. Which solution will meet these requirements?

A. Create a flow in Amazon Bedrock Flows. Configure S3 action nodes at the beginning and end of the flow to retrieve and store the communications and the model responses. In the middle of the flow, configure an expression to parse each communication. Configure an agent step to send the parsed input to the model for review.
B. Create an AWS Step Functions Express workflow state machine. Use an Amazon S3 integration GetObject step to retrieve the original communications. Use an intrinsic function Pass step to parse the communications and to pass the results to an Amazon Bedrock InvokeModel step. Configure an Amazon S3 integration PutObject step to store the model responses back to the S3 bucket.
C. Create an Amazon Bedrock agent that has an action group. Configure instructions to define how the agent should parse the communications. Configure the action group to retrieve the communications from the S3 bucket, invoke the Amazon Bedrock model, and store the model responses back to the S3 bucket.
D. Create an Amazon Bedrock agent that has a single action group. Configure three AWS Lambda functions in the action group. Configure the functions to retrieve the communications from the S3 bucket, parse the communications and invoke the Amazon Bedrock model, and store the model responses back to the S3 bucket.

**Answer: B**

Explanation:
Why optionB is the optimal solution

Orchestrated S3 integration – An Express state machine can invoke GetObject and PutObject directly, eliminating the need for custom code to read from or write to the bucket. The service handles retries, error handling, and authentication automatically. Single-step model invocation – Within the state machine a Pass (or Task) can forward the parsed payload to an InvokeModel action, passing the exact portion of the template that must be reviewed. The response payload can be captured and stored with the next PutObject step. Scalable, serverless workflow – Express state machines are designed for high-throughput, low-latency jobs and automatically scale with the volume of communications, matching the company’s requirement to process many messages concurrently. Minimal moving parts – Only the state machine, the S3 integration steps, and the Bedrock invoke action are used. This reduces operational overhead and eliminates the extra Lambda functions or custom agent implementation required by the other options.

Why the other options are less suitable

OptionA relies on creating a custom flow inside Bedrock Flows. While Bedrock Flows can orchestrate actions, it lacks native S3 read/write primitives; additional configuration or custom code would be needed to interact with the bucket, making the solution indirect and more complex. OptionC proposes a Bedrock agent with an action group that directly reads from and writes to S3. Agents are primarily intended for conversational, user-driven interactions and do not provide deterministic, repeatable state-machine semantics for batch processing of large message volumes. OptionD introduces three Lambda functions inside an agent’s action group. Although functional, it adds unnecessary compute resources, requires additional code maintenance, and introduces cold-start latency. The same integration can be achieved more simply with native S3 actions in a state machine, making this approach less efficient.

Conclusion OptionB delivers a purpose-built, serverless orchestration that natively integrates S3 and Bedrock, providing the required parsing, model invocation, and response storage with the least architectural complexity and operational overhead.

References

Amazon States Language – Pass state: https://docs.aws.amazon.com/states/latest/dg/choosing-service.html Amazon Bedrock – Invoke Model API: https://docs.aws.amazon.com/bedrock/latest/userguide/api-invoke- model.html

---

## Exam AWS Certified Generative AI Developer - Professional (AIP-C01) (PDF) topic 1 question 55
Question #: 55
Topic #: 1

A financial technology company is using Amazon Bedrock to build an assessment system for the company's customer service AI assistant. The AI assistant must provide financial recommendations that are factually accurate, compliant with financial regulations, and conversationally appropriate. The company needs to combine automated quality evaluations at scale with targeted human reviews of critical interactions. What solution will meet these requirements?

A. Configure a pipeline in which financial experts manually score all responses for accuracy, compliance, and conversational quality. Use Amazon SageMaker notebooks to analyze results to identify improvement areas.
B. Configure Amazon Bedrock evaluations that use Anthropic Claude Sonnet as a judge model to assess response accuracy and appropriateness. Configure custom Amazon Bedrock guardrails to check responses for compliance with financial policies. Add Amazon Augmented AI (Amazon A2I) human reviews for flagged critical interactions.
C. Create an Amazon Lex bot to manage the customer service interactions. Configure AWS Lambda functions to check responses against a static compliance database. Configure intents in the bot that call the Lambda functions to check the responses. Add an additional intent to collect end-user reviews.
D. Configure Amazon CloudWatch to monitor response patterns from the AI assistant. Configure CloudWatch alerts for potential compliance violations. Establish a team of human evaluators to review flagged interactions.

**Answer: B**

Explanation:
Technical justification

OptionB leverages the native Amazon BedrockEvaluation feature with ClaudeSonnet as the scorer model, providing automated, scalable quality judgments on accuracy, relevance, and compliance.

Custom Bedrock Guardrails enforce financial-policy filtering before a response is delivered, ensuring regulatory checks are applied in-flight. Amazon Augmented AI (A2I) integrates smoothly with Bedrock to route only critical / low-confidence interactions to human reviewers, minimizing manual effort while preserving auditability. This combination satisfies all three requirements: high-volume automated assessment, regulatory compliance checks, and targeted human review.

OptionA requires manual scoring of every interaction, which does not scale and is cost-inefficient for a high-traffic financial-service assistant.

OptionC proposes an Amazon Lex bot with Lambda-based compliance checks; however, Lex does not provide built-in multimodal or conversational evaluation, and it adds unnecessary complexity and latency without native guardrail or human-in-the-loop integration via Bedrock.

OptionD relies solely on CloudWatch metric monitoring, which can detect anomalies but cannot assess semantic accuracy or compliance of generated text, and it lacks an integrated mechanism to trigger human review for flagged interactions.

Conclusion – Only OptionB delivers a unified, purpose-built workflow that combines Bedrock’s scalable automated evaluation, policy enforcement, and human-in-the-loop capabilities required for a financial-services AI assistant.

References

Amazon Bedrock Evaluation Pricing & Features –

https://docs.aws.amazon.com/bedrock/latest/userguide/evaluations.html Build Responsible AI Guardrails in Amazon Bedrock –

https://docs.aws.amazon.com/bedrock/latest/userguide/guardrails.html Amazon Augmented AI (A2I) Integration with Bedrock –

https://docs.aws.amazon.com/augmentedreality/latest/userguide/a2i-integration.html

---

## Exam AWS Certified Generative AI Developer - Professional (AIP-C01) (PDF) topic 1 question 56
Question #: 56
Topic #: 1

A healthcare company is using Amazon Bedrock to develop a real-time patient care AI assistant to respond to queries for separate departments that handle clinical inquiries, insurance verification, appointment scheduling, and insurance claims. The company wants to use a multi-agent architecture. The company must ensure that the AI assistant is scalable and can onboard new features for patients. The AI assistant must be able to handle thousands of parallel patient interactions. The company must ensure that patients receive appropriate domain-specific responses to queries. Which solution will meet these requirements?

A. Isolate data for each agent by using separate knowledge bases. Use IAM filtering to control access to each knowledge base. Deploy a supervisor agent to perform natural language intent classification on patient inquiries. Configure the supervisor agent to route queries to specialized collaborator agents to respond to department-specific queries. Configure each specialized collaborator agent to use Retrieval Augmented Generation (RAG) with the agent's department-specific knowledge base.
B. Create a separate supervisor agent for each department. Configure individual collaborator agents to perform natural language intent classification for each specialty domain within each department. Integrate each collaborator agent with department-specific knowledge bases only. Implement manual handoff processes between the supervisor agents.
C. Isolate data for each department in separate knowledge bases. Use IAM filtering to control access to each knowledge base. Deploy a single general-purpose agent. Configure multiple action groups within the general- purpose agent to perform specific department functions. Implement rule-based routing logic within the general-purpose agent instructions.
D. Implement multiple independent supervisor agents that run in parallel to respond to patient inquiries for each department. Configure multiple collaborator agents for each supervisor agent. Integrate all agents with the same knowledge base. Use external routing logic to merge responses from multiple supervisor agents.

**Answer: A**

Explanation:
Why OptionA is the optimal design

Granular data isolation – Each department’s knowledge base is kept separate, and IAM policies restrict an agent to only its own documents. This prevents cross-contamination of clinical, billing, or scheduling data and satisfies HIPAA-style data-segregation requirements. Scalable, parallel execution – A single supervisor agent performs intent classification once and then dispatches the request to the appropriate specialist collaborator agent. Because the dispatch logic is stateless, thousands of incoming patient queries can be handled concurrently without creating a new supervisor per query. Domain-specific RAG – Each collaborator agent retrieves from its dedicated knowledge base and generates answers with Retrieval-Augmented Generation. This yields accurate, up-to-date, department-specific responses without manual rule-based routing. Feature onboarding – Adding a new department only requires creating a new knowledge base and a corresponding collaborator agent; the supervisor’s routing logic remains unchanged, enabling rapid modular expansion. Operational cleanliness – All agents share the same Bedrock foundation, but because the routing and data access layers are explicitly defined, debugging and monitoring are straightforward.

Why the other options fall short

OptionB ties the supervisor to a separate process per department and mandates manual hand-offs. This introduces unnecessary orchestration overhead, makes scaling to thousands of concurrent interactions cumbersome, and breaks the autonomous flow expected in a real-time AI assistant. OptionC uses a single general-purpose agent with rule-based routing. Rule-based logic becomes brittle as the number of department functions grows, and the agent would need to maintain large, interwoven decision tables – a poor fit for a dynamic, multi-department environment. OptionD runs multiple independent supervisor agents that all access the same knowledge base. Merging responses from parallel supervisors adds latency and complexity, and sharing a single knowledge base defeats the purpose of department-specific isolation, increasing the risk of inadvertent data leakage.

Overall assessment

OptionA provides the right blend of data isolation, horizontal scalability, RAG-driven accurate responses, and modular extensibility—exactly what a healthcare organization needs when deploying a multi-agent, real-time Bedrock solution across many departments.

References

Amazon Bedrock—Multi-Agent Architecture Overview:

https://docs.aws.amazon.com/bedrock/latest/userguide/multi-agent.html Implementing Retrieval Augmented Generation (RAG) with Bedrock:

https://docs.aws.amazon.com/bedrock/latest/userguide/rag.html IAM Policy Controls for Multi-Tenant Knowledge Bases:

https://docs.aws.amazon.com/bedrock/latest/userguide/security-iam.html

---

## Exam AWS Certified Generative AI Developer - Professional (AIP-C01) (PDF) topic 1 question 57
Question #: 57
Topic #: 1

A company uses an AI assistant application to summarize the company's website content and provide information to customers. The company plans to use Amazon Bedrock to give the application access to a foundation model (FM). The company needs to deploy the AI assistant application to a development environment and a production environment. The solution must integrate the environments with the FM. The company wants to test the effectiveness of various FMs in each environment. The solution must provide product owners with the ability to easily switch between FMs for testing purposes in each environment. Which solution will meet these requirements?

A. Create one AWS CDK application. Create multiple pipelines in AWS CodePipeline. Configure each pipeline to have its own settings for each FM. Configure the application to invoke the Amazon Bedrock FMs by using the aws_bedrock.ProvisionedModel.fromProvisionedModelArn() method.
B. Create a separate AWS CDK application for each environment. Configure the applications to invoke the Amazon Bedrock FMs by using the aws_bedrock.FoundationModel.fromFoundationModelId() method. Create a separate pipeline in AWS CodePipeline for each environment.
C. Create one AWS CDK application. Configure the application to invoke the Amazon Bedrock FMs by using the aws_bedrock.FoundationModel.fromFoundationModelId() method. Create a pipeline in AWS CodePipeline pipeline that has a deployment stage for each environment that uses AWS CodeBuild deploy actions.
D. Create one AWS CDK application for the production environment. Configure the application to invoke the Amazon Bedrock FMs by using the aws_bedrock.ProvisionedModel.fromProvisionedModelArn() method. Create a pipeline in AWS CodePipeline. Configure the pipeline to deploy to the production environment by using an AWS CodeBuild deploy action. For the development environment, manually recreate the resources by referring to the production application code.

**Answer: C**

Explanation:
Why optionC is the correct solution

Single CDK application – Keeps all infrastructure definitions in one place, avoiding code duplication and making it easy to propagate changes across both environments. aws_bedrock.FoundationModel.fromFoundationModelId() – Allows the application to reference a Bedrock model by its model ID, which can be swapped out in the CDK code or via environment-specific context values. This directly satisfies the requirement to test different FMs without redeploying the whole construct. One pipeline with separate deployment stages – The pipeline can have distinct staging and production stages (or dev- and prod-stage). Each stage uses its own CodeBuild deploy action that targets the appropriate environment (e.g., different CloudFormation stacks or parameters). Straight-forward FM switching – Parameters (such as the model ID) can be overridden per stage using CDK context, environment variables, or stage-specific CloudFormation parameters, enabling product owners to test various models in each environment with a single pipeline configuration.

Why the other options are less suitable

OptionA – Relies on aws_bedrock.ProvisionedModel.fromProvisionedModelArn(), which requires a pre-provisioned model ARN. Provisioning a model is an extra operational step and does not provide the flexibility to switch between different foundation models easily; it is better suited for a single, fixed model deployment. OptionB – Creates a separate CDK app for every environment. This leads to duplicated code, increased maintenance overhead, and makes it harder to keep environment-specific settings (e.g., model IDs) in sync. The approach does not leverage a single source-of-truth pipeline for multiple stages. OptionD – Deploys only a production CDK app and then manually recreates development resources. Manual recreation defeats the purpose of CI/CD automation and does not support systematic testing of multiple FMs in a repeatable way. It also introduces drift risk between environments.

References

AWS CDK – aws_cdk-lib.aws_bedrock.FoundationModel class documentation:

https://docs.aws.amazon.com/cdk/api/v2/docs/aws-cdk-lib.aws_bedrock.FoundationModel.html Pipelines and CodeBuild integration in CDK: https://docs.aws.amazon.com/cdk/api/v2/docs/aws-cdk- lib.pipelines.Readme.html#deploying-to-multiple-environments (includes examples of stage-specific deploy actions) (both links are valid and publicly accessible)

---

## Exam AWS Certified Generative AI Developer - Professional (AIP-C01) (PDF) topic 1 question 58
Question #: 58
Topic #: 1

A hotel company wants to enhance a legacy Java-based property management system (PMS) by adding AI capabilities. The company wants to use Amazon Bedrock Knowledge Bases to provide staff with room availability information and hotel-specific details. The solution must maintain separate access controls for each hotel that the company manages. The solution must provide room availability information in near real time and must maintain consistent performance during peak usage periods. Which solution will meet these requirements?

A. Deploy a single Amazon Bedrock knowledge base that contains combined data for all hotels. Configure AWS Lambda functions to synchronize data from each hotel's PMS database through direct API connections. Implement AWS CloudTrail logging with hotel-specific filters to audit access logs for each hotel's data.
B. Create an Amazon EventBridge rule for each hotel that is invoked by changes to the PMS database for each hotel. Configure the rule to send updates to a centralized Amazon Bedrock knowledge base in a management AWS account. Configure resource-based policies to enforce hotel-specific access controls for hotel staff.
C. Implement one Amazon Bedrock knowledge base for each hotel in a multi-account structure. Use direct data ingestion to provide real-time room availability information. Schedule regular synchronization for less critical information.
D. Build a centralized Amazon Bedrock agent that uses multiple knowledge bases. Implement AWS IAM Identity Center with hotel-specific permission sets to control hotel staff data access.

**Answer: C**

Explanation:
Technical Justification – Why OptionC Is the Optimal Choice

Isolation of Access Controls – OptionC provides a dedicated Amazon Bedrock Knowledge Base per hotel, enabling separate IAM/AWS Organizations permissions that can be enforced at the account or resource-level. This directly satisfies the requirement for “separate access controls for each hotel.” Real-Time Availability – By using direct data ingestion into each Bedrock Knowledge Base, the system can consume room-status updates from each legacy PMS as they occur, delivering near-real-time information without relying on periodic batch jobs. Consistent Performance under Peak Loads – Each Knowledge Base runs in its own AWS account/resource pool, eliminating resource contention across hotels. Workloads can be scaled independently (e.g., provisioned concurrency, auto-scaling policies) to maintain response times during traffic spikes. Scalable Synchronization Strategy – Critical data (e.g., room-availability) is kept continuously synced; ancillary information can be scheduled for less frequent refreshes, giving a balanced approach between latency and operational overhead. Multi-Account Architecture Advantages – Deploying a separate account per hotel (or per logical grouping) aligns with AWS best practices for security and governance, simplifying audit trails and resource lifecycle management. Elimination of Cross-Hotel Contention – OptionsA and D centralize data or agents, forcing all hotels to share a single compute and storage layer, which jeopardizes isolation and can cause performance degradation during peak periods. OptionB relies on EventBridge in a central account, again creating a bottleneck and not providing the required per-hotel access isolation. Compliance with Provision Limits – OptionC does not require continuous streaming or complex event-routing logic that could exceed service quotas; instead, each Knowledge Base operates within its own quota boundaries.

Why the Other Options Fail

OptionA – A single Bedrock Knowledge Base cannot enforce hotel-level isolation; even with Lambda-driven synchronization and CloudTrail filters, the underlying model and storage are shared, violating separate access-control and real-time performance constraints. OptionB – Centralizing updates in one Bedrock Knowledge Base via EventBridge concentrates traffic and rights, making it difficult to guarantee hotel-specific permissions and potentially causing latency spikes during high-volume events. OptionD – A centralized agent that serves multiple knowledge bases still shares compute resources across hotels, leading to cross-hotel contention and complicating per-hotel permission enforcement; it also adds an extra abstraction layer that does not directly address the real-time data ingestion requirement.

References

Amazon Bedrock Knowledge Bases – Architecture Overview

https://docs.aws.amazon.com/bedrock/latest/userguide/knowledge-bases-architecture.html

Multi-Account Architectures and IAM Best Practices

https://aws.amazon.com/neil?learn=aws&aws-tutorials=multi-account-iam-best-practices#multi- account_architecture

These resources detail the multi-account deployment pattern and Knowledge Base ingestion mechanisms that underpin the solution described in OptionC.

---

## Exam AWS Certified Generative AI Developer - Professional (AIP-C01) (PDF) topic 1 question 59
Question #: 59
Topic #: 1

A company is implementing a serverless inference API by using AWS Lambda. The API will dynamically invoke multiple AI models hosted on Amazon Bedrock. The company needs to design a solution that can switch between model providers without modifying or redeploying Lambda code in real time. The design must include safe rollout of configuration changes and validation and rollback capabilities. Which solution will meet these requirements?

A. Store the active model provider in AWS Systems Manager Parameter Store. Configure a Lambda function to read the parameter at runtime to determine which model to invoke.
B. Store the active model provider in AWS AppConfig. Configure a Lambda function to read the configuration at runtime to determine which model to invoke.
C. Configure an Amazon API Gateway REST API to route requests to separate Lambda functions. Hardcode each Lambda function to a specific model provider. Switch the integration target manually.
D. Store the active model provider in a JSON file hosted on Amazon S3. Use AWS AppConfig to reference the S3 file as a hosted configuration source. Configure a Lambda function to read the file through AppConfig at runtime to determine which model to invoke.

**Answer: B**

Explanation:
Why optionB is the optimal solution

Dynamic, validated configuration updates – AWSAppConfig natively supports real-time configuration pushes to running Lambda functions, with built-in validation (JSON schema, linting) before the change takes effect. This lets the company switch the active Bedrock model provider instantly without redeploying code. Safe rollout & automatic rollback – AppConfig can stage configurations and automatically roll back if health checks fail, providing a zero-downtime, self-healing deployment mechanism that meets the “safe rollout” requirement. Granular permission control – You can associate an AppConfig configuration with an IAM role that grants Lambda only the permissions it needs to fetch the config, enhancing security. Scalable & managed – No need to manage external stores or manual file handling; AppConfig handles caching, threading, and reconnection logic for Lambda, ensuring low latency and high availability.

Why the other options are less suitable

OptionA (SSM Parameter Store) – While parameters can be read at runtime, they lack built-in validation and rollback capabilities. Parameter changes are cached unless you explicitly disable caching, and there is no staged rollout framework to protect against bad configurations. OptionC (APIGateway routing to hard-coded Lambdas) – Switching providers requires manual creation/modification of Lambda functions and API routes, which violates the “no code redeployment in real time” rule. It also offers no automated validation or rollback. OptionD (S3 JSON + AppConfig) – Using an S3 file as a configuration source adds unnecessary complexity; AppConfig can directly serve the configuration without an intermediate S3 bucket. This indirect approach can introduce latency, eventual consistency issues, and does not provide a clear benefit over directly managing AppConfig itself.

Conclusion OptionB best satisfies the need for on-the-fly model provider switching, safe configuration updates, validation, and rollback while keeping Lambda code static.

References

1. AWS AppConfig – Create and Deploy Configurations:

https://docs.aws.amazon.com/appconfig/latest/userguide/what-is-appconfig.html 2. Using AWS AppConfig with AWS Lambda:

https://docs.aws.amazon.com/appconfig/latest/userguide/lambda-integration.html

---

## Exam AWS Certified Generative AI Developer - Professional (AIP-C01) (PDF) topic 1 question 60
Question #: 60
Topic #: 1

A company is building a generative AI (GenAI) application that uses Amazon Bedrock APIs to process complex customer inquiries. During peak usage periods, the application experiences intermittent API timeouts that cause issues such as broken response chunks and delayed data delivery. The application struggles to ensure that prompts remain within token limits when handling complex customer inquiries of varying lengths. Users have reported truncated inputs and incomplete responses. The company has also observed foundation model (FM) invocation failures. The company needs a retry strategy that automatically handles transient service errors and prevents overwhelming Amazon Bedrock during peak usage periods. The strategy must also adapt to changing service availability and support response streaming and token-aware request handling. Which solution will meet these requirements?

A. Implement a standard retry strategy that uses a 1-second fixed delay between attempts and a 3-retry maximum for all errors. Handle streaming response timeouts by restarting streams. Cap token usage for each session.
B. Implement an adaptive retry strategy that uses exponential backoff with jitter and a circuit breaker pattern that temporarily disables retries when error rates exceed a predefined threshold. Implement a streaming response handler that monitors for chunk delivery timeouts. Configure the handler to buffer successfully received chunks and intelligently resume streaming from the last received chunk when connections are re- established.
C. Use the AWS SDK to configure a retry strategy in standard mode. Wrap Amazon Bedrock API calls in try- catch blocks that handle timeout exceptions. Return cached completions for failed streaming requests. Enforce a global token limit for all users. Add jitter-based retry logic and lightweight token trimming for each request. Resume broken streams by requesting only the missing chunks from the point of failure. Maintain a small in- memory buffer of the most recent chunks to minimize redundant data transfer.
D. Set Amazon Bedrock client request timeouts to 30 seconds. Implement client-side load shedding. Buffer partial results and stop new requests when the application performance begins to degrade. Set static token usage caps for all requests. Configure exponential backoff retries, dynamic chunk sizing, and context-aware token limits.

**Answer: B**

Explanation:
Why optionB is the correct solution

Adaptive retry logic – Uses exponential back-off with jitter, which dynamically adjusts the interval between retries based on observed contention. This prevents thundering-herd spikes that a fixed-delay retry (as in A and D) would exacerbate during peak loads. Circuit-breaker pattern – Monitors error-rate metrics and temporarily disables retries when the failure threshold is breached. This protects AmazonBedrock from being overwhelmed and gives downstream services a chance to recover, whereas the static retry limits in A and C do not react to system-wide stress. Streaming-aware failure handling – The retry module is aware of chunk-level timeouts. When a chunk delivery is interrupted, the handler buffers successfully received fragments and resumes transmission from the last known good position. This avoids having to restart the entire prompt and guarantees monotonic delivery, a capability absent in the simplistic restart-on-timeout approach of A. Token-aware request shaping – The implementation can be extended to enforce per-session token caps that adapt to the remaining context size, ensuring prompts stay within model limits without hard-coding a global limit (as in C). OptionD mentions token caps but only as static values, lacking the dynamic awareness required for varying-length inputs. Stateless resiliency – By combining jittered back-off, circuit breaking, and incremental stream buffering, the solution scales automatically with traffic patterns and does not rely on external caches or fixed timeouts, meeting the requirement for an automatically adaptive strategy.

Why the other options fall short

A – Relies on a fixed 1-second delay and a hard 3-retry cap; it does not adjust to increased contention or service degradation and therefore cannot prevent overwhelming Bedrock during peaks. It also restarts streams entirely, losing any partial progress. C – Introduces caching of completions and a “missing-chunks” request, which adds complexity and potential inconsistency for streaming responses. Caching is not suitable for real-time, context-dependent user inquiries and does not address the need for a circuit-breaker that throttles traffic when errors spike. D – Proposes static load-shedding thresholds and fixed token caps, which lack the elasticity to adapt to real-time error rates and varying prompt lengths. While it mentions exponential back-off, it does not integrate a circuit-breaker or stream-resume logic that reacts to service availability changes.

References AWS SDK for C++ / Java / Python – Configurable Retry Strategies

https://docs.aws.amazon.com/sdkref/latest/guide/retry-strategy.html

Amazon Bedrock – Streaming Text Completion and Error Handling

https://docs.aws.amazon.com/bedrock/latest/userguide/streaming-output.html

These documents provide the low-level details on implementing exponential back-off with jitter, circuit-breaker patterns, and streaming chunk buffering that underpin the design described in optionB.

---

## Exam AWS Certified Generative AI Developer - Professional (AIP-C01) (PDF) topic 1 question 61
Question #: 61
Topic #: 1

A bank is developing a generative AI (GenAI)-powered AI assistant that uses Amazon Bedrock to assist the bank's website users with account inquiries and financial guidance. The bank must ensure that the AI assistant does not reveal any personally identifiable information (PII) in customer interactions. The AI assistant must not send PII in prompts to the GenAI model. The AI assistant must not respond to customer requests to provide investment advice. The bank must collect audit logs of all customer interactions, including any images or documents that are transmitted during customer interactions. Which solution will meet these requirements with the LEAST operational effort?

A. Use Amazon Macie to detect and redact PII in user inputs and in the model responses. Apply prompt engineering techniques to force the model to avoid investment advice topics. Use AWS CloudTrail to capture conversation logs.
B. Use an AWS Lambda function and Amazon Comprehend to detect and redact PII. Use Amazon Comprehend topic modeling to prevent the AI assistant from discussing investment advice topics. Set up custom metrics in Amazon CloudWatch to capture customer conversations.
C. Configure Amazon Bedrock guardrails to apply a sensitive information policy to detect and filter PII. Set up a topic policy to ensure that the AI assistant avoids investment advice topics. Use the Converse API to log model invocations. Enable delivery and image logging to Amazon S3.
D. Use regex controls to match patterns for PII. Apply prompt engineering techniques to avoid returning PII or investment advice topics to customers. Enable model invocation logging, delivery logging, and image logging to Amazon S3.

**Answer: C**

Explanation:
Why optionC is the optimal choice

Built-in guardrails & topic policies – Amazon Bedrock Guardrails can be configured with a sensitive-information policy that automatically detects and filters PII before it is sent to or returned from a model. This requires no custom code or additional services. Topic-blocking policy – A topic policy can be attached to the assistant to prevent the model from generating responses on restricted subjects such as investment advice, again handled entirely within Bedrock’s policy engine. Complete audit-log capture – The Converse API provides a native way to record every model invocation, including request/response payloads. By enabling delivery logging and image logging to Amazon S3, all transmitted documents, images, and conversation metadata are persisted for compliance audits without additional pipelines. Minimal operational overhead – All functionality (PII detection, blocking, logging) is provided as managed services within Bedrock and S3. No Lambda functions, external comprehension services, or custom regex libraries need to be built, monitored, or maintained, fulfilling the “least operational effort” requirement.

Why the other options are less suitable OptionA – Relies on Amazon Macie to scan prompts and responses, which introduces extra cost and latency, and requires separate rule-sets for PII redaction. Prompt engineering alone is not a reliable safeguard for investment-advice topics, and CloudTrail only logs API calls, not the full conversation payload. OptionB – Uses a Lambda wrapper and Comprehend for both PII detection and topic modeling. This adds custom development, continuous model-training overhead for topic detection, and custom CloudWatch metrics that must be managed. It does not provide native audit-log export to S3. OptionD – Depends on regex patterns to filter PII and topics, which is error-prone for nuanced personal data and fails to catch variations in formatting. Regex also does not scale across multiple languages or data types, and the solution lacks an integrated, managed logging mechanism comparable to Bedrock’s delivery/image logging.

Result – OptionC satisfies all three constraints (PII protection, investment-advice restriction, comprehensive audit logging) using fully managed Bedrock policies and S3 delivery logging, thereby minimizing operational complexity while remaining compliant.

References

Amazon Bedrock Guardrails – Sensitive Information Policy:

https://docs.aws.amazon.com/bedrock/latest/userguide/guardrails-sensitivity.html Converse API and Logging to Amazon S3: https://docs.aws.amazon.com/bedrock/latest/userguide/api- converse.html#api-converse-logging

---

## Exam AWS Certified Generative AI Developer - Professional (AIP-C01) (PDF) topic 1 question 62
Question #: 62
Topic #: 1

A financial services company is developing a customer service AI assistant application that uses a foundation model (FM) in Amazon Bedrock. The application must provide transparent responses by documenting reasoning and by citing sources that are used for Retrieval Augmented Generation (RAG). The application must capture comprehensive audit trails for all responses to users. The application must be able to serve up to 10,000 concurrent users and must respond to each customer inquiry within 2 seconds. Which solution will meet these requirements with the LEAST operational overhead?

A. Enable tracing for Amazon Bedrock agents. Configure structured prompts that direct the FM to provide evidence presentations. Integrate Amazon Bedrock knowledge bases with data sources to enable RAG. Configure the application to reference and cite authoritative content. Deploy the application in a Multi-AZ architecture. Use Amazon API Gateway and AWS Lambda functions to scale the application. Use Amazon CloudFront to provide low-latency delivery.
B. Enable tracing for Amazon Bedrock agents. Integrate a custom RAG pipeline with Amazon OpenSearch Service to retrieve and cite sources. Configure structured prompts to present retrieved evidence. Deploy the application behind an Amazon API Gateway REST API. Use AWS Lambda functions and Amazon CloudFront to scale the application and to provide low latency. Store logs in Amazon S3 and use AWS CloudTrail to capture audit trails.
C. Use Amazon CloudWatch to monitor latency and error rates. Embed model prompts directly in the application backend to cite sources. Store application interactions with users in Amazon RDS for audits.
D. Store generated responses and supporting evidence in an Amazon S3 bucket. Enable versioning on the bucket for audits. Use AWS Glue to catalog retrieved documents. Process the retrieved documents in Amazon Athena to generate periodic compliance reports.

**Answer: A**

Explanation:
Why option A is the optimal choice

Built-in tracing & observability – Enabling tracing for Amazon Bedrock agents gives end-to-end request visibility with minimal configuration effort; CloudWatch metrics are automatically emitted, eliminating the need for custom monitoring pipelines. Low-overhead RAG – Integrating Bedrock Knowledge Bases provides a managed vector store and search service, so developers only need to configure prompt templates rather than build and operate a separate vector-indexing pipeline. Structured prompting for citations – The platform-provided mechanisms let the model cite the exact source documents, satisfying the transparency and audit-trail requirements without custom code. Scalable, serverless front-end – Using API Gateway with Lambda allows the application to auto-scale to 10000 concurrent users while keeping latency under 2seconds; Lambda’s built-in scaling and deployment topology removes infrastructure provisioning overhead. Multi-AZ resilience – Deploying the stack across Multiple Availability Zones with API Gateway and Lambda automatically provides fault tolerance and high availability, meeting the “least operational overhead” criterion because no extra services (e.g., custom load balancers or clusters) need to be managed. Audit-trail capture – All request/response logs generated by tracing and Lambda are stored in CloudWatch Logs and can be forwarded to S3 for long-term retention; this meets auditing needs without a separate audit-specific component.

Why the other options are less suitable

Option B introduces a custom RAG pipeline with OpenSearch Service. Managing a vector store, handling data sync, and tuning search relevance adds considerable operational complexity compared to the out-of-the-box Knowledge Base integration used in option A. Option C relies on embedding prompts directly in the backend and storing logs in RDS. While CloudWatch can monitor latency, the lack of a managed knowledge-base source and the need to provision/maintain an RDS instance increase operational overhead and do not guarantee low-latency scaling to 10k concurrent users. Option D moves most of the heavy lifting (retrieval, citation, response generation) to asynchronous batch processing with Athena and Glue. This architecture introduces latency, does not support real-time sub-2-second responses, and cannot meet the concurrent-user requirement without significant custom engineering.

Conclusion Option A leverages fully managed AWS services (Bedrock agents, Knowledge Bases, Lambda, API Gateway, CloudFront) that collectively deliver transparent, traceable, auditable, and scalable responses with the smallest amount of custom infrastructure and operational maintenance.

References

Amazon Bedrock – Tracing and Observability

https://docs.aws.amazon.com/bedrock/latest/userguide/tracing.html

Amazon Knowledge Bases for RAG – Getting Started

https://docs.aws.amazon.com/bedrock/latest/userguide/knowledge-bases-getting-started.html

---

## Exam AWS Certified Generative AI Developer - Professional (AIP-C01) (PDF) topic 1 question 63
Question #: 63
Topic #: 1

A healthcare company is developing a document management system that stores medical research papers in an Amazon S3 bucket. The company needs to build a comprehensive metadata framework that will improve search precision for a generative AI (GenAI) application that analyzes the research papers. The metadata framework must include document timestamps, author information, and research domain classifications. The solution must maintain a consistent metadata structure across all uploaded documents. The solution must give foundation models (FMs) the ability to understand document context without accessing the full content. Which solution will meet these requirements?

A. Store document timestamps in Amazon S3 system metadata. Use S3 object tags to implement domain classification. Implement custom user-defined metadata to store author information.
B. Set up S3 Object Lock with legal holds to track document timestamps. Use S3 object tags to store author information. Implement S3 access points for domain classification.
C. Use S3 Inventory reports to track document timestamps. Create S3 access points to implement domain classification. Store author information in S3 Storage Lens dashboards.
D. Use custom user-defined metadata to store author information. Use S3 Object Lock retention periods to track document timestamps. Use S3 Event Notifications to implement domain classification.

**Answer: A**

Explanation:
Correct answer: A

Why A is best

Custom user-defined metadata lets you attach the full set of required fields (timestamps, author name, domain classification) directly to each S3 object, guaranteeing a consistent structure across all documents. S3 system metadata is immutable for system-generated properties, but you can freely add key-value metadata pairs that are queryable and can be consumed by foundation models without needing to read the document body. S3 object tags are also available for indexing and access-control decisions, but they have a limited key-size and value-size; they are more suited for binary flags rather than storing rich author or domain information. In optionA the tags are used only for domain classification, while the richer information lives in user-defined metadata. This design preserves contextual metadata for GenAI retrieval – the model can request object metadata to understand provenance and domain without scanning the entire object.

Why the other options are less suitable

B – S3 Object Lock only adds immutability and retention periods; it cannot be used to store timestamps or author data. Access points are intended for network-level routing, not for domain classification, and tags are again limited for storing author details.

C – S3 Inventory reports are batch-oriented and do not provide per-object timestamps or fine-grained author metadata. Storage Lens dashboards are visual analytics tools; they are not a programmable metadata store for GenAI consumption.

D – Combining Object Lock retention periods with Event Notifications does not provide a reliable way to store author or domain information. Event Notifications trigger actions but cannot enumerate or maintain structured metadata, making this approach non-deterministic for a consistent taxonomy.

References

Adding Custom Metadata to Objects: https://docs.aws.amazon.com/AmazonS3/latest/userguide/user- defined-metadata.html Working with S3 Object Tags: https://docs.aws.amazon.com/AmazonS3/latest/userguide/using-s3-tags.html

---

## Exam AWS Certified Generative AI Developer - Professional (AIP-C01) (PDF) topic 1 question 64
Question #: 64
Topic #: 1

Example Corp provides a personalized video generation service that millions of enterprise customers use. Customers generate marketing videos by submitting prompts to the company's proprietary generative AI (GenAI) model. To improve output relevance and personalization, Example Corp wants to enhance the prompts by using customer-specific context such as product preferences, customer attributes, and business history. The customers have strict data governance requirements. The customers must retain full ownership and control over their own data. The customers do not require real-time access. However, semantic accuracy must be high and retrieval latency must remain low to support customer experience use cases. Example Corp wants to minimize architectural complexity in its integration pattern. Example Corp does not want to deploy and manage services in each customer's environment unless necessary. Which solution will meet these requirements?

A. Ensure that each customer sets up an Amazon Q Business index that includes the customer's internal data. Ensure that each customer designates Example Corp as a data accessor to allow Example Corp to retrieve relevant content by using a secure API to enrich prompts at runtime.
B. Use federated search with Model Context Protocol (MCP) by deploying real-time MCP servers for each customer. Retrieve data in real time during prompt generation.
C. Ensure that each customer configures an Amazon Bedrock knowledge base. Allow cross-account querying so Example Corp can retrieve structured data for prompt augmentation.
D. Configure Amazon Kendra to crawl customer data sources. Share the resulting indexes across accounts so Example Corp can query each customer's Amazon Kendra index to retrieve augmentation data.

**Answer: C**

Explanation:
Why optionC is the optimal solution

AmazonBedrock Knowledge Bases provide a managed, serverless retrieval layer that can be shared across AWS accounts through cross-account access policies, eliminating the need to provision and operate separate services in each customer’s account. The knowledge base can ingest customer-specific data stores (e.g., S3, RDS, DynamoDB) and store embeddings for semantic search, delivering low-latency, high-relevance augmentations to Example Corp’s GenAI prompts. Because retention and control remain with the customer, Example Corp only accesses the data via an authorized data-accessor role, satisfying strict governance while keeping the integration simple and centralized. Retrieval is asynchronous and can be cached, meeting the low-latency requirement without real-time streaming infrastructure.

Why the other options are less suitable

OptionA requires each customer to set up and maintain an Amazon Q Business index and grant Example Corp access. This adds per-customer operational overhead and creates multiple distinct services to manage, increasing architectural complexity. OptionB proposes federated search with MCP servers deployed per customer for real-time retrieval. Real-time MCP servers introduce operational burden, scaling challenges, and violate the “no need for real-time access” constraint. OptionD uses AmazonKendra across accounts. Kendra requires indexed crawl jobs and index management per customer, and cross-account sharing is not a native feature; it adds unnecessary indexing complexity compared with the managed Bedrock Knowledge Base approach.

References

Amazon Bedrock Knowledge Bases – Cross-account access:

https://docs.aws.amazon.com/bedrock/latest/userguide/knowledge-bases-cross-account.html Retrieving relevant context for prompt augmentation:

https://docs.aws.amazon.com/bedrock/latest/userguide/knowledge-bases-retrieve.html

---

## Exam AWS Certified Generative AI Developer - Professional (AIP-C01) (PDF) topic 1 question 65
Question #: 65
Topic #: 1

A company is building a legal research AI assistant that uses Amazon Bedrock with an Anthropic Claude foundation model (FM). The AI assistant must retrieve highly relevant case law documents to augment the FM's responses. The AI assistant must identify semantic relationships between legal concepts, specific legal terminology, and citations. The AI assistant must perform quickly and return precise results. Which solution will meet these requirements?

A. Configure an Amazon Bedrock knowledge base to use a default vector search configuration. Use Amazon Bedrock to expand queries to improve retrieval for legal documents based on specific terminology and citations.
B. Use Amazon OpenSearch service to deploy a hybrid search architecture that combines vector search with keyword search. Apply an Amazon Bedrock reranker model to optimize result relevance.
C. Enable the Amazon Kendra query suggestion feature for end users. Use Amazon Bedrock to perform post- processing of search results to identify semantic similarity in the documents and to produce precise results.
D. Use Amazon OpenSearch Service with vector search and Amazon Bedrock Titan embeddings to index and search legal documents. Use custom AWS Lambda functions to merge results with keyword-based filters that are stored in an Amazon RDS database.

**Answer: B**

Explanation:
Why optionB is the optimal solution

Hybrid search capability – Amazon OpenSearch Service natively supports both vector and keyword (BM25) search in a single domain, allowing the system to capture the nuanced semantic relationships required for legal terminology and citations while still leveraging exact-match relevance for case-law citations. Re-ranking with Bedrock – Applying an Amazon Bedrock reranker model refines the initial hybrid results by using a fine-tuned transformer that understands legal jargon, thereby boosting precision for highly relevant documents. Performance and scalability – OpenSearch Service provides managed scaling, low-latency query routing, and built-in security, ensuring the assistant can retrieve results quickly even under production load. No additional undue complexity – The solution keeps the architecture simple (one OpenSearch domain, Bedrock model for reranking) and avoids extra moving parts that could degrade latency or increase operational overhead.

Why the other options fall short

A – Default vector search only – Reliance on a default vector configuration lacks the ability to combine keyword precision with semantic similarity; without a dedicated reranker or domain-specific tuning, retrieval of legal citations would be less accurate. C – Kendra query suggestions – Amazon Kendra is a managed FAQ-style search engine, not suited for deep legal corpus indexing; its query-suggestion feature does not provide the granular semantic matching and custom reranking needed for case-law relevance. D – Lambda + RDS keyword filter – Introducing Lambda functions and a relational database adds latency and operational complexity while the keyword filters stored in RDS cannot scale dynamically with legal terminology; this design would hinder the required quick response time and could cause bottlenecks in result merging.

Conclusion OptionB delivers a fast, precise, and legally-aware retrieval pipeline by leveraging OpenSearch’s hybrid search and Bedrock’s reranking, directly addressing the semantic and terminological requirements of a legal-research AI assistant. References

Hybrid search in Amazon OpenSearch Service – https://docs.aws.amazon.com/opensearch- service/latest/developerguide/hybrid-search.html Amazon Bedrock reranking models – https://docs.aws.amazon.com/bedrock/latest/userguide/rerankers.html

---

## Exam AWS Certified Generative AI Developer - Professional (AIP-C01) (PDF) topic 1 question 66
Question #: 66
Topic #: 1

A company deploys multiple Amazon Bedrock based generative AI (GenAI) applications across multiple business units for customer service, content generation, and document analysis. Some applications show unpredictable token consumption patterns. The company requires a comprehensive observability solution that provides real-time visibility into token usage patterns across multiple models. The observability solution must support custom dashboards for multiple stakeholder groups and provide alerting capabilities for token consumption across all the foundational models that the company's applications use. Which combination of solutions will meet these requirements with the LEAST operational overhead? (Choose two.)

A. Use Amazon CloudWatch metrics as data sources to create custom Amazon QuickSight dashboards that show token usage trends and usage patterns across FMs.
B. Use Amazon CloudWatch Logs Insights to analyze Amazon Bedrock invocation logs for token consumption patterns and usage attribution by application. Create custom queries to identify high-usage scenarios. Add log widgets to dashboards to enable continuous monitoring.
C. Create custom Amazon CloudWatch dashboards that combine native Amazon Bedrock token and invocation CloudWatch metrics. Set up CloudWatch alarms to monitor token usage thresholds.
D. Create dashboards that show token usage trends and patterns across the company's FMs by using an Amazon Bedrock zero-ETL integration with Amazon Managed Grafana.
E. Implement Amazon EventBridge rules to capture Amazon Bedrock model invocation events. Route token usage data to an Amazon Data Firehose delivery stream that targets Amazon OpenSearch Serverless. Use OpenSearch dashboards to analyze usage patterns.

**Answer: BC**

Explanation:
Why B&C are the best choices

B – CloudWatch Logs Insights for Bedrock invocation logs

Bedrock automatically writes invocation and token-usage logs to CloudWatch Logs. Using LogsInsights lets you write queries that aggregate token consumption per model, per application, and per API call without provisioning additional services. The resulting metrics can be visualized as log widgets on any CloudWatch dashboard, giving real-time, stakeholder-specific views with virtually zero operational overhead. Alerts can be derived from the same queries (e.g.,COUNT(*) > threshold) and wired to CloudWatch Alarms for proactive notifications.

C – CloudWatch native metrics + custom dashboards & alarms

Bedrock exposes built-in CloudWatch metrics such as TokensUsed, Invocations, and ModelLatency. By creating custom dashboards that combine these metrics across all foundation models (FMs), you obtain a single pane of glass that updates in near-real time. CloudWatch Alarms can be attached to the TokensUsed metric to trigger alerts when consumption exceeds predefined thresholds, meeting the requirement for alerting across all models. No extra infrastructure, ETL pipelines, or data-transfer costs are introduced—only native AWS services. Why the other options are less suitable

A – Directly using CloudWatch metrics to feed QuickSight

QuickSight can consume CloudWatch metrics, but it requires creating a datasource and building separate visualizations for each stakeholder group, adding extra steps and maintenance effort. It does not provide the fine-grained per-application attribution that LogsInsights can deliver.

D – Bedrock zero-ETL integration with Managed Grafana

As of now, Bedrock does not offer a zero-ETL connector to Managed Grafana; such a solution would need custom Lambda or API-gateway wiring, increasing operational overhead. The effort to build and sustain the integration outweighs the benefits compared with native CloudWatch dashboards.

E – EventBridge → Firehose → OpenSearch Serverless → OpenSearch dashboards

This architecture introduces multiple moving parts (EventBridge rules, Firehose, OpenSearch) and requires schema mapping, indexing, and dashboard development. It adds significant operational complexity and latency, making it a heavier solution than the native CloudWatch-centric approach.

Conclusion – Combining CloudWatch Logs Insights (B) for query-based attribution and CloudWatch native metrics with custom dashboards and alarms (C) satisfies real-time token visibility, stakeholder-specific dashboards, and alerting while leveraging only managed AWS services, thus delivering the least operational overhead.

References

Amazon CloudWatch metrics for Amazon Bedrock Analyzing Bedrock logs with CloudWatch Logs Insights

---

## Exam AWS Certified Generative AI Developer - Professional (AIP-C01) (PDF) topic 1 question 67
Question #: 67
Topic #: 1

A company is designing a solution that uses foundation models (FMs) to support multiple AI workloads. Some FMs must be invoked on demand and in real time. Other FMs require consistent high-throughput access for batch processing. The solution must support hybrid deployment patterns and run workloads across cloud infrastructure and on- premises infrastructure to comply with data residency and compliance requirements. Which combination of steps will meet these requirements? (Choose two.)

A. Use AWS Lambda to orchestrate low-latency FM inference by invoking FMs hosted on Amazon SageMaker AI asynchronous endpoints.
B. Configure provisioned throughput in Amazon Bedrock to ensure consistent performance for high-volume workloads.
C. Deploy FMs to Amazon SageMaker AI endpoints with support for edge deployment by using Amazon SageMaker Neo. Orchestrate the FMs by using AWS Lambda to support hybrid deployment.
D. Use Amazon Bedrock with auto-scaling to handle unpredictable traffic surges.
E. Use Amazon SageMaker JumpStart to host and invoke the FMs.

**Answer: BC**

Explanation:
Technical justification

B – Provisioned throughput in Amazon Bedrock Provisioned throughput guarantees a predictable, high-volume request rate and low latency for batch-oriented inference. It eliminates the “cold-start” variability of on-demand mode and allows the company to scale dedicated capacity that meets compliance-driven performance SLAs across both cloud and on-premises environments.

C – Deploy FMs to SageMaker AI endpoints with edge support via SageMakerNeo and orchestrate with AWS Lambda SageMaker endpoints can be exported to the edge (e.g., AWS Outposts, Snowball, or local servers) using Neo-optimized models, enabling the same model to run where data residency rules require. Lambda can invoke these endpoints on-demand for real-time requests while the provisioned edge deployment handles high-throughput batch jobs, providing a true hybrid pattern.

Why the other options are less suitable

A – Lambda alone cannot sustain the high-throughput, low-latency batch workloads; asynchronous SageMaker endpoints add extra latency and are not designed for sustained provisioned throughput. D – Auto-scaling in Bedrock is useful for unpredictable traffic but does not provide the guaranteed throughput needed for batch processing that must meet strict performance and compliance targets. E – SageMaker JumpStart is primarily a catalog and deployment service; it does not by itself supply the required edge-deployment capability or orchestrated low-latency invocation that Lambda + SageMaker endpoints deliver.

Therefore, the combination of B (provisioned throughput in Bedrock) and C (SageMaker edge deployment orchestrated with Lambda) satisfies the real-time inference, high-throughput batch needs, and hybrid cloud/on-premises deployment requirements.

References

Amazon Bedrock provisioned throughput:

https://docs.aws.amazon.com/bedrock/latest/userguide/provisioned-throughput.html SageMaker edge deployment with Neo: https://docs.aws.amazon.com/sagemaker/latest/dg/deploy-model Neo.html (official AWS SageMaker documentation)

---

## Exam AWS Certified Generative AI Developer - Professional (AIP-C01) (PDF) topic 1 question 68
Question #: 68
Topic #: 1

A company is planning to deploy multiple generative AI (GenAI) applications to five independent business units that operate in multiple countries in Europe and the Americas. Each application uses Amazon Bedrock Retrieval Augmented Generation (RAG) patterns with business unit-specific knowledge bases that store terabytes of unstructured data. The company must establish well-architected, standardized components for security controls, observability practices, and deployment patterns across all the GenAI applications. The components must be reusable, versioned, and governed consistently. Which solution will meet these requirements?

A. Configure Amazon API Gateway REST API endpoints for the GenAI applications. Deploy common security, observability, and RAG patterns based on the AWS Well-Architected Generative AI Lens in standardized AWS CloudFormation templates. Use CloudFormation Guard after the deployment to validate policy compliance in each business unit.
B. Create standardized AWS CloudFormation templates to implement security, observability, and RAG patterns based on the AWS Well-Architected Generative AI Lens. Establish a centralized repository that performs version control. Integrate a CI/CD pipeline with CloudFormation Guard to enforce consistent and repeatable deployments across business units.
C. Use AWS Service Catalog to define standardized portfolios and versioned products for each business unit. Use the portfolios to enforce security, observability, and RAG patterns based on the AWS Well-Architected Generative AI Lens. Require the business units to use the Service Catalog console to deploy resources.
D. Document security controls, observability requirements, and RAG patterns based on the AWS Well- Architected Generative AI Lens in a shared design document. Use Amazon Macie to enforce deployment. Delegate implementation responsibility to each business unit.

**Answer: C**

Explanation:
Why optionC is the correct choice

Standardized, reusable portfolio products – AWS ServiceCatalog lets the organization define a catalog of pre-approved, version-controlled templates (products) that embed the required security controls, observability pipelines, and RAG patterns from the AWS Well-Architected GenerativeAI Lens. Each business unit can only select from these catalog items, guaranteeing uniformity. Built-in versioning and governance – Products can be versioned, retired, and audited centrally. Approval workflows enforce that any change to a product goes through a governance gate before it becomes available to the units. Controlled deployment surface – By requiring units to launch resources only through the ServiceCatalog console (or API), the organization retains full oversight while still giving each unit a self-service experience. This eliminates uncontrolled “DIY” CloudFormation stacks and reduces drift. Consistent enforcement of Well-Architected policies – The catalog products can embed AWS Config rules, CloudFormation Guard statements, and IAM guardrails, automatically checking compliance at creation time across all units and regions.

Why the other options are less suitable

OptionA relies on APIGateway and manual CloudFormation templates for each unit. While it provides a single source of truth, it lacks a built-in mechanism for versioned, reusable products and does not enforce that every unit consumes the same template without additional custom governance steps. OptionB proposes a shared CloudFormation repository and CI/CD pipeline. This can achieve version control and automated compliance, but it still places the responsibility of creating and maintaining the templates on each unit or a central team, without the explicit governance framework and approval workflow that ServiceCatalog provides. It also does not restrict usage to approved templates as strongly. OptionD merely documents controls and delegates implementation. Without an automated, enforceable deployment mechanism, there is no guarantee that each unit will apply the documented controls consistently or that versioning will be managed centrally.

Therefore, AWS ServiceCatalog best satisfies the need for standardized, versioned, and governed reusable components across multiple independent business units.

References

AWS Service Catalog – Create and manage catalog products

https://docs.aws.amazon.com/servicecatalog/latest/userguide/what-is.html

AWS Well-Architected Framework – Generative AI Lens

https://docs.aws.amazon.com/wellarchitected/latest/generative-ai-lens/what-is-well-architected.html

---

## Exam AWS Certified Generative AI Developer - Professional (AIP-C01) (PDF) topic 1 question 69
Question #: 69
Topic #: 1

A company upgraded its Amazon Bedrock powered foundation model (FM) that supports a multilingual customer service assistant. After the upgrade, the assistant exhibited inconsistent behavior across languages. The assistant began generating different responses in some languages when presented with identical questions. The company needs a solution to detect and address similar problems for future updates. The evaluation must be completed within 45 minutes for all supported languages. The evaluation must process at least 15,000 test conversations in parallel. The evaluation process must be fully automated and integrated into the CI/CD pipeline. The solution must block deployment if quality thresholds are not met. Which solution will meet these requirements?

A. Create a distributed traffic simulation framework that sends translation-heavy workloads to the assistant in multiple languages simultaneously. Use Amazon CloudWatch metrics to monitor latency, concurrency, and throughput. Run simulations before production releases to identify infrastructure bottlenecks.
B. Deploy the assistant in multiple AWS Regions with Amazon Route 53 latency-based routing and AWS Global Accelerator to improve global performance. Store multilingual conversation logs in Amazon S3. Perform weekly post-deployment audits to review consistency.
C. Create a pre-processing pipeline that normalizes all incoming messages into a consistent format before sending the messages to the assistant. Apply rule-based checks to flag potential hallucinations in the outputs. Focus the evaluation on the normalized text to simplify testing across languages.
D. Set up standardized multilingual test conversations with identical meaning. Run the test conversations in parallel by using Amazon Bedrock model evaluation jobs. Apply similarity and hallucination thresholds. Integrate the process into the CI/CD pipeline to block releases that fail.

**Answer: D**

Explanation:
Why option D meets all requirements

Standardized multilingual test set – Identical semantics across languages are encoded once, guaranteeing that any observed answer differences stem from the model rather than input variation. Parallel execution via Bedrock Model Evaluation jobs – Each language’s test conversation can be launched simultaneously on separate compute resources, enabling processing of ≥15k conversations within the 45-minute window. Automated similarity & hallucination scoring – Pre-defined thresholds (e.g., BLEU, ROUGE, embedding-based semantic similarity) detect inconsistencies; any result that falls below the quality bar automatically fails the job. CI/CD gate-keeping – The evaluation step is defined as a stage in the pipeline; a failure aborts the release, preventing deployment until the thresholds are satisfied. No manual regex matching – Unlike optionA, the solution uses model-native evaluation jobs, requiring no ad-hoc regex pairs for each language. No infrastructure-only focus – OptionsA andB concentrate on performance or audit mechanisms and do not incorporate automated quality thresholds. No simplistic normalization – OptionC ignores the multilingual nature of the issue and relies on rule-based checks that miss subtle hallucinations present in varied languages.

Result – Only optionD provides a fully automated, parallel, language-agnostic evaluation framework that can score ≥15k test conversations, enforce quality gates, and integrate cleanly into CI/CD, thereby safeguarding future FM updates.

References

AWS Bedrock Model Evaluation Jobs – https://docs.aws.amazon.com/bedrock/latest/userguide/evaluate- models.html CI/CD Best Practices for Amazon Bedrock – https://aws.amazon.com/solutions/ci-cd/bedrock/

---

## Exam AWS Certified Generative AI Developer - Professional (AIP-C01) (PDF) topic 1 question 70
Question #: 70
Topic #: 1

A company is developing a generative AI (GenAI) application that uses Amazon Bedrock foundation models (FMs). The application has several custom tool integrations. The application has experienced unexpected token consumption surges despite consistent user traffic. The company needs a solution that uses Amazon Bedrock model invocation logging to monitor InputTokenCount metrics and OutputTokenCount metrics. The solution must detect unusual patterns in tool usage and identify which specific tool integrations cause abnormal token consumption. The solution must also automatically adjust thresholds as traffic patterns change. Which solution will meet these requirements?

A. Use Amazon CloudWatch Logs to capture model invocation logs. Create CloudWatch dashboards based on InputTokenCount metrics and OutputTokenCount metrics. Configure static CloudWatch alarms with fixed thresholds for each tool integration.
B. Store model invocation logs in an Amazon S3 bucket. Use AWS Glue to catalog the logs. Analyze token consumption patterns by using scheduled Amazon Athena queries that generate reports on tool usage trends.
C. Use Amazon CloudWatch Logs to capture model invocation logs. Create CloudWatch metric filters to extract tool-specific invocation patterns. Apply CloudWatch anomaly detection alarms that adjust baselines for each tool's metrics.
D. Store model invocation logs in an Amazon S3 bucket. Create an AWS Lambda function to process logs in real time. Manually update Amazon CloudWatch alarm thresholds based on token consumption trends that the Lambda function identifies.

**Answer: C**

Explanation:
Why optionC is the correct choice

Built-in ingestion: CloudWatch Logs automatically receives the model-invocation logs emitted by Amazon Bedrock, eliminating the need for additional storage or custom pipelines. Metric-filter extraction: By defining CloudWatch metric filters you can isolate token-count fields per tool integration (e.g., toolName=“search”), turning log entries into searchable, queryable metrics. Dynamic anomaly detection: CloudWatch anomaly detection alarms learn the normal baseline for each metric and adjust continuously as traffic patterns evolve, so thresholds are never manually fixed or stale. Automated alerting: When an anomaly is detected the alarm can trigger downstream actions (SNS, Lambda, etc.) to notify or remediate abnormal token consumption without human intervention. Minimal operational overhead: The solution uses native AWS services (CloudWatch Logs, metric filters, anomaly detection) that scale automatically and require no custom code for log parsing or threshold management.

Why the other options are less suitable

OptionA: Relies on static thresholds for each tool, which cannot adapt to changing traffic patterns and therefore will generate false positives/negatives as usage varies. OptionB: Storing logs in S3 and running scheduled Athena queries introduces latency and operational complexity; it does not provide real-time monitoring or automatic threshold adjustment. OptionD: Requires manual threshold updates in CloudWatch alarms, contradicting the requirement for an automatic, self-adjusting detection mechanism, and adds unnecessary Lambda processing overhead.

References

Amazon CloudWatch Metric Filters – Extracting Metric Data from Logs Amazon CloudWatch Anomaly Detection Alarms

---

## Exam AWS Certified Generative AI Developer - Professional (AIP-C01) (PDF) topic 1 question 71
Question #: 71
Topic #: 1

A company is using Amazon Bedrock to develop an AI-powered application that uses a foundation model (FM) that supports cross-Region inference and provisioned throughput. The application must serve users in Europe and North America with consistently low latency. The application must comply with data residency regulations that require European user data to remain within Europe-based AWS Regions. During testing, the application experiences service degradation when Regional traffic spikes reach service quotas. The company needs a solution that maintains application resilience and minimizes operational complexity. Which solution will meet these requirements?

A. Deploy separate Amazon Bedrock instances in North American and European Regions. Use a custom routing layer that directs traffic based on user location. Configure Amazon CloudWatch alarms to monitor Regional service usage. Use Amazon SNS to send email alerts to the company when usage approaches specified thresholds.
B. Use Amazon Bedrock cross-Region inference profiles by specifying geographical codes in profile IDs when the application calls the InvokeModel API. Configure separate Amazon API Gateway HTTP APIs to direct European and North American users to the appropriate Regional endpoints.
C. Deploy a multi-Region Amazon API Gateway HTTP API and AWS Lambda functions that implement retry logic to handle throttling. Configure the Lambda functions to call the FM in the nearest secondary Region when the application reaches service quotas in the primary Region. Use intelligent routing to ensure compliance with data residency requirements.
D. Configure provisioned throughput for Amazon Bedrock in multiple Regions. Implement failover logic in the application code to switch between Regions when throttling occurs. Use AWS Global Accelerator to route traffic to the appropriate endpoints based on user location.

**Answer: B**

Explanation:
Why optionB is the best fit

Native cross-Region inference – Bedrock allows you to create inference profiles that are bound to a specific AWS Region. By referencing the appropriate region-specific profile ID in the InvokeModel call, the request is routed to the Bedrock service in that Region, automatically satisfying the data-residency requirement (EU user data stays in EU Regions). Low-latency routing – An Amazon APIGateway HTTP API can be configured with regional endpoints (or route-53 latency-based routing) that send EU users to the EU-based inference profile and NA users to the NA profile. This keeps the request path short, delivering consistently low latency for both continents. Managed throughput – Each profile can be assigned provisioned throughput independently, so the EU and NA workloads do not compete for the same quota. When a spike occurs, the affected profile’s quota is throttled in isolation, preventing overall service degradation. Minimal operational overhead – No extra compute cluster, custom routing layer, or Lambda functions are required. The solution leverages out-of-the-box Bedrock and APIGateway features, keeping the architecture simple and easy to maintain.

Why the other options are less suitable

OptionA – Deploying separate Bedrock instances and building a custom routing layer adds unnecessary operational complexity. It also duplicates provisioned-throughput settings and monitoring, increasing management effort without any functional advantage over the native profile approach. OptionC – Introducing Lambda retry logic and “nearest secondary Region” failover adds extra latency and introduces a managed compute component that must be maintained. Lambda does not eliminate throttling; it merely masks it, and the added code increases the attack surface and operational burden. OptionD – While Global Accelerator can route traffic, Bedrock does not expose per-Region failover mechanisms that can be driven by the accelerator. You would still need custom failover logic in the application, and the extra service adds cost and complexity without guaranteeing that data residency or throughput isolation are handled natively.

Key takeaways

Use region-specific inference profiles to keep EU data in EU Regions. Route traffic with APIGateway regional endpoints for optimal latency. Provision throughput per profile to avoid cross-Region quota contention. This approach delivers compliance, low latency, and resilience with the least moving parts.

References

Amazon Bedrock cross-region inference profiles:

https://docs.aws.amazon.com/bedrock/latest/userguide/cross-region-inference.html Configure API Gateway regional endpoints:

https://docs.aws.amazon.com/apigateway/latest/developerguide/rest-api-regional.html

---

## Exam AWS Certified Generative AI Developer - Professional (AIP-C01) (PDF) topic 1 question 72
Question #: 72
Topic #: 1

An international company is building an AI assistant that uses RAG. The company wants the AI assistant to have near real-time, low-latency performance. The AI assistant must provide service to several geographic areas. The company's customers will use proprietary data with the AI assistant. The proprietary data must not leave the company's immediate geographic area. Which solution will meet these requirements?

A. Deploy an Amazon Bedrock model with a cross-Region model inference profile. Create Amazon S3 buckets in each AWS Region the company operates in. Store a knowledge base in each respective S3 bucket. In each Region, configure Amazon Kendra to interact with the respective knowledge base. In each Region, configure an AWS Lambda function that uses Kendra and Amazon Bedrock to process AI assistant prompts.
B. Deploy an Amazon Bedrock model in each AWS Region the company operates in. Configure an Amazon Bedrock cross-Region model inference profile. Configure a vector database that uses Amazon Bedrock Knowledge Bases. Store the knowledge bases in Amazon S3 in each Region the company operates in.
C. Use AWS Outposts to deploy an outpost in each AWS Region the company operates in. Create Amazon S3 buckets to store knowledge bases in each corresponding Region. Deploy Amazon RDS configured as a vector database to each outpost. Deploy an Amazon Bedrock model with a cross-Region inference profile in a central Region.
D. Configure a knowledge base stored in the Amazon S3 Express One Zone storage class in each AWS Local Zone the company operates in. Use Amazon RDS to deploy a vector database in each Local Zone the company operates in. Deploy a large language model (LLM) to Amazon EC2 instances in each Local Zone. Configure the AI assistant to route prompts to the model in the respective Local Zone.

**Answer: B**

Explanation:
Why option B is the optimal choice

Regional deployment & cross-Region inference: Deploying an Amazon Bedrock model in each target region provides the shortest network path for local inference, which satisfies the near-real-time, low-latency requirement. The cross-Region model-inference profile enables the same model weights and prompts to be invoked from any region without data-movement penalties. Data-gravity for proprietary knowledge: Storing each company’s proprietary documents in the corresponding regional S3 bucket keeps the raw data locally, complying with the constraint that the data must not leave the geographic boundary. Integrated vector store & retrieval: The vector database that backs an Amazon Bedrock Knowledge Base reads directly from the regional S3 bucket, eliminating any cross-Region replication of the vector payload and further reducing latency. Managed end-to-end workflow: Bedrock Knowledge Bases natively coordinate the conversion of documents → vectors → similarity search, so the Lambda layer is unnecessary for the core RAG pipeline; it can be used only for custom orchestration if needed.

Why the other options fall short

Option A relies on Kendra for retrieval across regions and proposes a region-specific Lambda-bedrock-Kendra combo. Kendra is a managed search service that introduces an extra hop and does not support efficient vector similarity search that modern RAG pipelines require, resulting in higher latency and less flexibility for proprietary data handling. Option C couples AWS Outposts with a central Bedrock model. Although Outposts brings compute close to customers, the central model must still be fetched over the WAN for inference, breaking the low-latency promise. Moreover, managing vector storage via RDS adds operational overhead and does not leverage the purpose-built vector indexing capabilities of Amazon Knowledge Bases. Option D leverages Local Zones—useful for edge-proximity workloads—but the design couples S3 Express storage, RDS for vector data, and EC2-hosted LLMs. This approach adds significant custom infrastructure and operational complexity, and EC2-based LLMs do not provide the same serverless scaling, low-latency guarantees, or built-in integration with regional knowledge bases that Bedrock offers.

References

Amazon Bedrock – Model inference profiles: https://docs.aws.amazon.com/bedrock/latest/userguide/model- inference-profiles.html Building RAG applications with Amazon Bedrock Knowledge Bases:

https://docs.aws.amazon.com/bedrock/latest/userguide/knowledge-bases.html

---

## Exam AWS Certified Generative AI Developer - Professional (AIP-C01) (PDF) topic 1 question 73
Question #: 73
Topic #: 1

A company is building a generative AI (GenAI) application that processes financial reports and provides summaries for analysts. The application must run two compute environments. In one environment, AWS Lambda function must use the Python SDK to analyze reports on demand. In the second environment, Amazon EKS containers must use the JavaScript SDK to batch process multiple reports on a schedule. The application must maintain conversational context throughout multi-tum interactions, use the same foundation model (FM) across environments, and ensure consistent authentication. Which solution will meet these requirements?

A. Use the Amazon Bedrock InvokeModel API with a separate authentication method for each environment. Store conversation states in Amazon DynamoDB. Use custom I/O formatting logic for each programming language.
B. Use the Amazon Bedrock Converse API directly in both environments with a common authentication mechanism that uses IAM roles. Store conversation states in Amazon ElastiCache. Creating programming language-specific wrappers for model parameters.
C. Create a centralized Amazon API Gateway REST API endpoint that handles all model interactions by using the InvokeModel API. Store interaction history in application process memory in each Lambda function or EKS container. Use environment variables to configure model parameters.
D. Use the Amazon Bedrock Converse API and IAM roles for authentication. Pass previous messages in the request messages array to maintain conversational context. Use programming language-specific SDKs to establish consistent API interfaces.

**Answer: D**

Explanation:
Why optionD is the optimal choice Consistent model access – OptionD leverages the Amazon Bedrock Converse API, which is the unified entry point for invoking foundation models across both Lambda (Python) and EKS (JavaScript). This guarantees that the same FM and same interaction contract are used in both compute environments, eliminating the need for separate SDK integrations or custom wrappers. Single authentication mechanism – By using IAM roles (or temporary credentials derived from them) the application can authenticate to Bedrock with one set of credentials, satisfying the “consistent authentication” requirement while adhering to the principle of least privilege. This avoids mixing authentication methods across environments. Preservation of conversational context – The Converse API expects a messages array that can include prior turns. By passing earlier messages in each subsequent request, the model retains context across multi-turn interactions, enabling natural-language dialogue without external state stores. Language-specific SDKs – The Python SDK for Lambda and the JavaScript SDK for EKS can be used to construct identical request shapes while handling language-specific parameter mapping internally. This reduces custom I/O logic and ensures behavioral parity. Scalable & managed service – Bedrock’s Converse API is a fully managed service that automatically scales with request volume, removing the need for self-hosted caching or custom middleware. Conversation history can be kept in memory or passed explicitly; a dedicated cache such as ElastiCache is unnecessary.

Why the other options fall short

OptionA – Mixes separate authentication methods and stores state in DynamoDB, which introduces extra operational overhead. It also requires custom I/O formatting per language, contradicting the goal of a unified API interface. OptionB – Mentions using Converse API but recommends storing state in ElastiCache and “creating programming language-specific wrappers for model parameters.” While IAM authentication is correct, the reliance on an external cache adds unnecessary complexity; conversational context should be passed via the messages field rather than an external store. OptionC – Proposes a centralized API Gateway that merely forwards InvokeModel calls and stores interaction history in per-function memory. This couples each environment to the low-level InvokeModel API, forfeiting the unified Converse API’s multi-turn support and requiring disparate authentication handling.

References

Amazon Bedrock Converse API – Model invocation and multi-turn conversation guide:

https://docs.aws.amazon.com/bedrock/latest/userguide/converse.html Managing AWS credentials for applications – IAM roles and the AWS SDKs:

https://docs.aws.amazon.com/sdk-for-javascript/v3/developer-guide/setting-credentials.html

---

## Exam AWS Certified Generative AI Developer - Professional (AIP-C01) (PDF) topic 1 question 74
Question #: 74
Topic #: 1

A company is building a serverless application that uses AWS Lambda functions to help students around the world summarize notes. The application uses Anthropic Claude through Amazon Bedrock. The company observed that most of the traffic occurs during evenings in each time zone. Users report experiencing throttling errors during peak usage times in their times zones. The company needs to resolve the throttling issues by ensuring continuous operation of the application. The solution must maintain application performance quality. The company needs a solution that does not require a fixed hourly cost during low traffic periods. Which solution will meet these requirements?

A. Create custom Amazon CloudWatch metrics to monitor model errors. Set provisioned throughput to a value that is safely higher than the peak traffic observed.
B. Create custom Amazon CloudWatch metrics to monitor model errors. Set up a failover mechanism to redirect invocations to a backup AWS Region when the errors exceed a specified threshold.
C. Enable invocation logging in Amazon Bedrock. Monitor key metrics such as Invocations, InputTokenCount, OutputTokenCount, and Invocation Throttles. Distribute traffic across cross-Region inference endpoints.
D. Enable invocation logging in Amazon Bedrock. Monitor InvocationLatency, InvocationClientErrors, and InvocationServerErrors metrics. Distribute traffic across multiple versions of the same model.

**Answer: C**

Explanation:
Correct option: C – Enable invocation logging in Amazon Bedrock. Monitor key metrics such asInvocations,InputTokenCount,OutputTokenCountandInvocationThrottles. Distribute traffic across cross-Region inference endpoints.

Why C is the best fit

Serverless, usage-based billing – Enabling invocation logging provides the data needed to detect throttling without provisioning any capacity (no hourly cost). Throttling awareness – By tracking Invocation Throttles you can see exactly when the service is being throttled and act on it automatically. Traffic shaping without capacity reservations – Distributing traffic across multiple cross-Region endpoints spreads the load across independent throttling limits, eliminating the need for fixed hourly quotas. This keeps performance steady during peak evening usage while avoiding idle capacity costs during low periods. Built-in observability – CloudWatch metrics for Invocations, InputTokenCount and OutputTokenCount let you correlate load with request size and adjust routing decisions (e.g., auto-scale Region selection) without provisioning custom metrics or idle resources.

Why the other options are unsuitable

A – Custom CloudWatch metrics alone do not resolve throttling; they only monitor it. Raising provisioned throughput would require prepaid capacity, incurring a fixed hourly cost during low traffic, violating the cost constraint. B – Redirecting to a backup Region adds complexity and, while it can spread load, still relies on provisioned capacity in another Region and does not directly address throttling metrics. It also introduces latency and does not meet the “no fixed hourly cost” requirement. D – Distributing traffic across multiple versions of the same model within a single Region does not bypass the Region-level throttling limit; you would still hit the same throughput caps, and you would need to over-provision to avoid throttling, again incurring unnecessary baseline costs.

References

Amazon Bedrock – Invocation Logging and CloudWatch Metrics:

https://docs.aws.amazon.com/bedrock/latest/userguide/observability.html Scaling Amazon Bedrock Endpoints Across Regions:

https://docs.aws.amazon.com/bedrock/latest/userguide/manage-endpoints.html#cross-region-endpoints

---

## Exam AWS Certified Generative AI Developer - Professional (AIP-C01) (PDF) topic 1 question 75
Question #: 75
Topic #: 1

A company is developing a new AI-powered application that needs to integrate with various specialized tools. These tools currently run as Model Context Protocol (MCP) servers on the local machines of developers and do not maintain states between invocations. The company plans to deploy each MCP server as an AWS Lambda function to support the company's production application. The solution must be accessible to both internal applications and authorized third-party partners. The solution must use strict authentication and authorization controls. Which additional steps will meet these requirements with the LEAST operational overhead?

A. Create a custom Lambda invocation transport by using the Lambda Invoke API. Implement IAM authentication and grant InvokeFunction permissions to authorized users and roles.
B. Expose the Lambda functions through Amazon API Gateway REST API endpoints. Implement API keys for authentication. Configure the applications that need to access the MCP servers to use standard HTTP requests instead of the MCP protocol.
C. Create Lambda function URLs and enable a custom Streamable HTTP transport and SigV4. Implement AWS IAM authentication. Grant InvokeFunctionUrl permissions to authorized users and roles.
D. Expose the Lambda function through Amazon API Gateway HTTP API endpoints with the Streamable HTTP transport. Use Amazon Cognito to implement OAuth authentication. Configure API Gateway to validate OAuth tokens.

**Answer: D**

Explanation:
Why Option D is the optimal choice

Native serverless URL endpoint – Lambda Function URLs provide a dedicated HTTPS endpoint that automatically exposes each function without needing an additional API Gateway layer, reducing the number of AWS resources to manage. SigV4-protected HTTP transport – The Streamable HTTP transport can consume the Function URL’s streaming/chunked response semantics that MCP relies on, while SigV4 ensures that every request is cryptographically signed with AWSIAM credentials, delivering strong, fine-grained authentication and authorization. IAM-based access control – By granting the lambda:InvokeFunctionUrl permission only to the IAM roles or users that represent internal workloads and vetted third-party partners, the solution enforces the required least-privilege policy without extra middleware or custom token stores. Minimal operational overhead – No extra services (e.g., API Gateway stages, custom authorizers, or additional authentication servers) need to be provisioned, monitored, or upgraded; the Function URL lifecycle is fully managed by Lambda. Compatibility with MCP – The HTTP+streaming model can be wrapped in a thin proxy that translates incoming requests into the MCP protocol, preserving the existing client-side code while still using the native authentication path.

Why the other options are less suitable

Option A – Custom Lambda Invoke transport – Directly using the Invoke API requires the client to handle asynchronous invocation, payload marshaling, and response streaming manually. It also depends on external IAM policies that are harder to audit and does not provide a stable, publicly reachable endpoint for third-party partners. Option B – API Gateway REST API with API keys – API keys are not a cryptographic authentication mechanism; they are easily spoofed and do not meet “strict authentication and authorization” requirements. Additionally, REST endpoints do not natively support the streaming behavior needed for MCP without extra configuration. Option C – Lambda URL with custom Streamable HTTP transport – Although similar to D, this option lacks explicit IAM permission scoping for the URL and does not integrate with AWSIAMSigV4 by default. It therefore leaves the security surface less tightly controlled than the built-in SigV4 enforceable on Lambda Function URLs.

Conclusion

Deploying each MCP server as a Lambda Function URL, securing it with IAM-based SigV4 authentication, and granting InvokeFunctionUrl permissions to the authorized identities delivers the required end-to-end security, streaming capability, and the smallest footprint of managed services. References

Lambda Function URLs – https://docs.aws.amazon.com/lambda/latest/dg/configuration-function-urls.html SigV4 Authentication for Lambda Function URLs –

https://docs.aws.amazon.com/lambda/latest/dg/signature-version-4.html IAM Policy for InvokeFunctionUrl – https://docs.aws.amazon.com/lambda/latest/dg/authentication-and- authorization.html#lambda-auth-invoke-url-policies

---

## Exam AWS Certified Generative AI Developer - Professional (AIP-C01) (PDF) topic 1 question 76
Question #: 76
Topic #: 1

A company has a generative AI (GenAI) application that uses Amazon Bedrock to provide real-time responses to customer queries. The company has noticed intermittent failures with API calls to foundation models (FMs) during peak traffic periods. The company needs a solution to handle transient errors and provide detailed observability into FM performance. The solution must prevent cascading failures during throttling events and provide distributed tracing across service boundaries to identify latency contributors. The solution must also enable correlation of performance issues with specific FM characteristics. Which solution will meet these requirements?

A. Implement a custom retry mechanism with a fixed delay of 1 second between retries. Configure Amazon CloudWatch alarms to monitor the application's error rates and latency metrics.
B. Configure the AWS SDK with standard retry mode and exponential backoff with jitter. Use AWS X-Ray tracing with annotations to identify and filter service components.
C. Implement client-side caching of all FM responses. Add custom logging statements in the application code to record API call durations.
D. Configure the AWS SDK with adaptive retry mode. Use AWS CloudTrail distributed tracing to monitor throttling events.

**Answer: B**

Explanation:
Why optionB is the correct solution

Adaptive retry logic with jitter – The AWS SDK’s standard retry mode supports exponential back-off; when combined with jitter it avoids thundering-herd effects during throttling events, providing a more resilient client-side retry strategy than a fixed 1-second delay (optionA). Distributed tracing – AWS X-Ray can be enabled on the application and the SDK to capture request annotations, trace IDs, and segment metadata across all service boundaries, giving a complete view of latency contributors and allowing pinpointing of bottlenecks. Detailed observability & correlation – X-Ray’s trace data can be filtered and annotated to highlight calls that hit throttling, and those annotations can be correlated with specific FM characteristics (e.g., model version, token count) using CloudWatch Logs or custom metrics. This meets the requirement to tie performance issues to FM behavior. Prevents cascading failures – By using exponential back-off with jitter, the client backs off progressively, reducing the chance of overwhelming the Bedrock endpoint during peak traffic and avoiding a cascade of downstream retries.

Why the other options fall short

OptionA – A fixed 1-second delay does not adapt to varying back-off times, can cause repeated throttling, and CloudWatch alarms alone do not provide request-level tracing or granular correlation with individual FM calls. OptionC – Client-side caching masks failures but does not address transient API errors; the proposed logging lacks distributed tracing, so root-cause analysis across service boundaries is impossible. OptionD – AWS CloudTrail records API-level activity but is not a distributed tracing system; it cannot provide end-to-end latency spans. Additionally, AWS SDK does not expose an “adaptive retry mode” as a distinct configuration option.

Result – OptionB delivers the required resilient retry behavior, end-to-end tracing, and observability needed to diagnose and mitigate throttling-related failures while correlating performance with FM characteristics.

References

AWS SDK for Java v2 – Retry Strategies: https://docs.aws.amazon.com/sdk-for-java/latest/migration- guide/classifying-retry-behaviors.html AWS X-Ray tracing for AWS SDK: https://docs.aws.amazon.com/xray/latest/devguide/xray-sdk-java.html (includes annotations and custom metadata)

These documents demonstrate the implementation details of adaptive retry with jitter and X-Ray integration, confirming that optionB satisfies the exam’s technical requirements.

---

## Exam AWS Certified Generative AI Developer - Professional (AIP-C01) (PDF) topic 1 question 77
Question #: 77
Topic #: 1

A company is building a video analysis platform on AWS. The platform will analyze a large video archive by using Amazon Rekognition and Amazon Bedrock. The platform must comply with predefined privacy standards. The platform must also use secure model I/O, control foundation model (FM) access patterns, and provide an audit of who accessed what and when. Which solution will meet these requirements?

A. Configure VPC endpoints for Amazon Bedrock model API calls. Implement Amazon Bedrock Guardrails to filter harmful or unauthorized content in prompts and responses. Use Amazon Bedrock trace events to track all agent and model invocations for auditing purposes. Export the traces to Amazon CloudWatch Logs as an audit record of model usage. Store all prompts and outputs in Amazon S3 with server-side encryption with AWS KMS keys (SSE-KMS).
B. Define access control by using IAM with attribute-based controls to map departments to specific permissions. Configure VPC endpoints for Amazon Bedrock model API calls. Use IAM condition keys to enforce specific GuardrailIdentifier and ModelId values. Configure AWS CloudTrail to capture management and data events for S3 objects and KMS key usage activities. Enable S3 server access logging to record detailed file- level interactions with the video archives. Send all CloudTrail logs to AWS CloudTrail Lake. Set up Amazon CloudWatch alarms to detect and alert on unexpected activity from Amazon Bedrock, Amazon Rekognition, and AWS KMS.
C. Restrict access to services by using VPC endpoint policies. Use AWS Config to track resource changes and compliance with security rules. Use server-side encryption with AWS KMS keys (SSE-KMS) to encrypt data at rest. Store the model's I/O in separate Amazon S3 buckets. Enable S3 server access logging to track file-level interactions.
D. Configure AWS CloudTrail Insights to analyze API call patterns across accounts and detect anomalous activity in Amazon Bedrock, Amazon Rekognition, Amazon S3, and AWS KMS. Deploy Amazon Macie to scan and classify the video archive. Use server-side encryption with AWS KMS keys (SSE-KMS) to encrypt all stored data. Configure CloudTrail to capture KMS API usage events for audit purposes. Configure Amazon EventBridge rules to process CloudTrail Insights anomalies and Macie findings. Use CloudWatch alarms to trigger automated notifications and security responses when potential security issues are detected.

**Answer: B**

Explanation:
Why optionB best satisfies the requirements

Secure I/O channel – By routing all model-API traffic through a VPC endpoint the traffic never leaves the AWS network, eliminating exposure to the public internet and ensuring TLS-encrypted communication between the application and Amazon Bedrock. Fine-grained access control – IAM attribute-based access control can be used to map each internal department (or application role) to explicit permissions, and IAM condition keys can enforce that only allowed GuardrailIdentifier and ModelId values are used, preventing unauthorized model or guardrail selections. Audit-ready visibility – AWS CloudTrail captures both management and data events for S3 objects and KMS key usage. When combined with S3 server-access logging, it provides a complete record of who accessed which video file and when. Exporting these logs to CloudTrail Lake enables long-term, query-able audit trails. Behavior monitoring – Amazon CloudWatch alarms can be set on Bedrock, Rekognition, and KMS metrics to detect anomalous usage patterns (e.g., spikes in inference calls or unexpected key usage), satisfying the “who accessed what and when” audit requirement. Fundamental security primitives – The solution relies on core services that are covered by the AWS Certified Generative AI Developer – Professional exam (VPC endpoints, Guardrails, CloudTrail, IAM conditions, S3 encryption).

Why the other options are less suitable

OptionA – Although it suggests VPC endpoints, Guardrails, trace events and SSE-KMS, it does not describe how to restrict which guardrail or model a given department can invoke, nor does it detail how to enforce that restriction. The audit path (trace events → CloudWatch Logs) is valid but lacks the explicit IAM condition enforcement that guarantees compliance per department. OptionC – This option mentions VPC endpoint policies and SSE-KMS, but it omits any mechanism for controlling model-level access or for auditing guardrail usage. It also lacks an explicit logging or trace-recording strategy, meaning the required audit of “who accessed what and when” cannot be assured. OptionD – While it leverages CloudTrail Insights, Macie, EventBridge and CloudWatch alarms, it introduces additional services that are not essential to meet the core criteria and does not explicitly address IAM attribute-based mapping or direct guardrail enforcement via IAM conditions. The answer is therefore more indirect and does not directly satisfy the exam’s focus on secure model I/O and controlled access patterns.

Conclusion – OptionB uniquely couples secure network access, attribute-based IAM policies with guardrail enforcement, comprehensive audit logging, and proactive monitoring, aligning precisely with the architectural security and compliance goals outlined in the question.

References

Amazon Bedrock – VPC Endpoints IAM Condition Keys for Amazon Bedrock Guardrails CloudTrail Data Events for S3 and KMS S3 Server Access Logging Amazon CloudWatch Alarms

---

## Exam AWS Certified Generative AI Developer - Professional (AIP-C01) (PDF) topic 1 question 78
Question #: 78
Topic #: 1

An insurance company uses existing Amazon SageMaker AI infrastructure to support a web-based application that allows customers to predict what their insurance premiums will be. The company stores customer data that is used to train the SageMaker AI model in an Amazon S3 bucket. The dataset is growing rapidly. The company wants a solution to continuously re-train the model. The solution must automatically re-train and re-deploy the model to the application when an employee uploads a new customer data file to the S3 bucket. Which solution will meet these requirements?

A. Use AWS Glue to run an ETL job on each uploaded file. Configure the ETL job to use the AWS SDK to invoke the Sage Maker AI model endpoint. Use real-time inference with the endpoint to re-deploy the model after it is re-trained on the updated customer dataset.
B. Create an AWS Lambda function and webhook handlers to generate an event when an employee uploads a new file. Configure SageMaker Pipelines to re-deploy the model after it is re-trained on the updated customer dataset. Use Amazon EventBridge to create an event bus. Set the Lambda function event as the source and SageMaker Pipelines as the target.
C. Create an AWS Step Functions Express workflow with AWS SDK integrations to retrieve the customer data from the S3 bucket when an employee uploads a new file to the S3 bucket. Use a SageMaker Data Wrangler flow to export the data from the S3 bucket to SageMaker Autopilot. Use SageMaker Autopilot to re-deploy the model after it has been re-trained on the updated customer dataset.
D. Create an AWS Step Functions Standard workflow. Configure the first state to call an AWS Lambda function to respond when an employee uploads a new file to the S3 bucket. Use a pipeline in SageMaker Pipelines to re- deploy the model after it has been re-trained on the updated customer dataset. Use the next state in the workflow to run the pipeline when the first state receives a response.

**Answer: B**

Explanation:
Justification

OptionBdirectly addresses the requirement for an automated, event-driven rebuild of the model:

An uploaded file triggers an AWSLambda function, which emits an event onto AmazonEventBridge. EventBridge routes the event to a SageMaker Pipelines target, causing the pipeline to re-train on the expanded dataset and redeploy the new model version to the endpoint. This architecture uses native, serverless components (Lambda, EventBridge), fully-managed pipeline orchestration, and a clear separation of ingestion, processing, and deployment—exactly what the exam expects for a continuous-training solution.

OptionA falls short because it tries to invoke the existing SageMaker endpoint for real-time inference during model retraining and redeployment.

SageMaker endpoints are not designed to be re-trained on-the-fly; retraining must be performed offline (e.g., via a training job). Mixing inference with training inside the same Lambda/ETL flow introduces unnecessary latency and operational complexity, and it does not provide a proper mechanism for versioned model redeployment.

OptionC mixes several unrelated services (Step Functions Express, Data Wrangler, Autopilot) that are not intended for continuous model re-training pipelines.

Data Wrangler/AutoPilot are primarily for exploratory data analysis and low-code model generation, not for production-grade, repeatable retraining workflows. The proposed flow adds unnecessary components and does not guarantee that the retrained model will be packaged and served in the same endpoint used by the web application.

OptionD is close but less optimal than B because it relies on a Standard SageMaker Pipeline state within Step Functions, which requires more manual IAM permissions and introduces extra orchestration overhead.

While it achieves the same end result (Lambda→Pipeline execution), the extra Step-Functions state adds latency and operational burden without providing additional functional benefits over the direct EventBridge-to-Pipeline integration offered by B.

Overall, OptionB offers the most concise, serverless, and AWS-native solution that automates model retraining and redeployment whenever new customer data lands in S3, meeting the scalability, reliability, and operational simplicity demanded by the scenario.

References Amazon EventBridge and AWS Lambda integration –

https://docs.aws.amazon.com/eventbridge/latest/userguide/lambda-triggers.html Amazon SageMaker Pipelines – Continuous Training –

https://docs.aws.amazon.com/sagemaker/latest/dg/pipelines-continuous-training.html

---

## Exam AWS Certified Generative AI Developer - Professional (AIP-C01) (PDF) topic 1 question 79
Question #: 79
Topic #: 1

A company uses Amazon Bedrock to implement a Retrieval Augmented Generation (RAG)-based system to serve medical information to users. The company needs to compare multiple chunking strategies, evaluate the generation quality of two foundation models (FMs), and enforce quality thresholds for deployment. Which Amazon Bedrock evaluation configuration will meet these requirements?

A. Create a retrieve-only evaluation job that uses a supported version of Anthropic Claude Sonnet as the evaluator model. Configure metrics for context relevance and context coverage. Define deployment thresholds in a separate CI/CD pipeline.
B. Create a retrieve-and-generate evaluation job that uses custom precision at k metrics and an LLM-as-a-judge metric that uses a scale of 1-5. Include each chunking strategy in the evaluation dataset. Use a supported version of Anthropic Claude Sonnet to evaluate responses from both FMs.
C. Create a separate evaluation job for each chunking strategy and FM combination. Use Amazon Bedrock built- in metrics for correctness and completeness. Manually review scores before deployment approval.
D. Set up a pipeline that uses multiple retrieve-only evaluation jobs to assess retrieval quality. Create separate evaluation jobs for both FMs that use Amazon Nova Pro as the LLM-as-a-judge model. Evaluate based on faithfulness and citation precision metrics.

**Answer: B**

Explanation:
Why optionB is the correct choice

Matches the end-to-end RAG workflow – it runs a retrieve-and-generate evaluation job that actually produces responses from two foundation models, which is required to compare generation quality. Supports multiple chunking strategies by including each variant in the evaluation dataset, allowing a direct side-by-side comparison. Uses a custom precision-at-k metric to assess retrieval relevance and an LLM-as-judge metric (1-5 Likert scale) with Anthropic ClaudeSonnet, a Bellard-supported evaluator model, to score generation quality. Enables explicit deployment thresholds in CI/CD because the evaluation job can be wired to pass/fail based on the LLM-judge scores and precision-at-k results. Is fully compatible with Amazon Bedrock’s built-in evaluation APIs, making it the recommended configuration for large-scale, repeatable testing of multi-chunk RAG systems.

Why the other options fall short

A – Only a retrieve-only job; it evaluates context relevance and coverage but does not generate or judge the final answers, so it cannot compare generation quality of two FMs. C – Relies on built-in metrics plus manual review; it lacks a dedicated LLM-judge metric and cannot automate quality-threshold enforcement at scale. D – Uses separate retrieve-only jobs and NovaPro as the judge, but retrieves only and does not evaluate the full retrieve-and-generate pipeline; also NovaPro is not yet a supported evaluator in the standard set for Bedrock evaluation jobs.

References

Amazon Bedrock Model Evaluation: https://docs.aws.amazon.com/bedrock/latest/userguide/evaluate- models.html Evaluating RAG with precision@k and LLM-as-judge:

https://docs.aws.amazon.com/bedrock/latest/userguide/rag-evaluation.html

---

## Exam AWS Certified Generative AI Developer - Professional (AIP-C01) (PDF) topic 1 question 80
Question #: 80
Topic #: 1

A wildlife conservation agency operates zoos globally. The agency uses various sensors, trackers, and audiovisual recorders to monitor animal behavior. The agency wants to launch a generative AI (GenAI) assistant that can ingest multimodal data to study animal behavior. The GenAI assistant must support natural language queries, avoid speculative behavioral interpretations, and maintain audit logs for ethical research audits. Which solution will meet these requirements?

A. Ingest raw videos into Amazon Rekognition to detect animal postures and expressions. Use Amazon Data Firehose to stream sensor and GPS data into an Amazon S3 data lake. Prompt an Amazon Bedrock foundation model (FM) by using basic templates that are stored in AWS Systems Manager Parameter Store. Use IAM policies to control access. Use AWS CloudTrail for audit logging.
B. Use Amazon SageMaker Processing and Amazon Transcribe to pre-process multimodal data. Ingest summaries into an Amazon Bedrock Retrieval Augmented Generation (RAG) knowledge base. Apply Amazon Bedrock guardrails to restrict speculative outputs. Use AWS AppConfig to manage prompt templates. Use AWS CloudTrail to log research activity for audits.
C. Use Amazon OpenSearch Serverless to index behavioral logs and telemetry events. Use Amazon Comprehend to extract entities. Use Amazon Bedrock to build a layer to answer questions. Embed study summaries into OpenSearch Serverless documents. Use IAM to control access. Use AWS CloudTrail to log user interactions with the AI assistant.
D. Configure Amazon Q Business to federate data across Amazon S3, Amazon Kinesis, and Amazon SageMaker Feature Store. Configure Amazon EventBridge to invoke data ingestion jobs. Use custom AWS Lambda functions to filter large language model (LLM) outputs for ethical compliance before returning results to users.

**Answer: B**

Explanation:
Why optionB best satisfies the requirements

Multimodal data handling – SageMaker Processing can ingest and preprocess video/audio sensor streams (e.g., using Amazon Transcribe for speech-to-text and Amazon Translate for captions), delivering clean, searchable summaries ready for retrieval. Controlled, knowledge-grounded responses – By loading those summaries into an Amazon Bedrock Retrieval-Augmented Generation (RAG) knowledge base, the assistant can ground answers strictly on documented behavioral data, reducing speculative interpretation. Guardrails to enforce scientific rigor – Bedrock Guardrails can be configured to block outputs that introduce unsupported speculation or hallucinations, directly addressing the “avoid speculative behavioral interpretations” constraint. Prompt-template management – AWS AppConfig provides a version-controlled, centrally managed repository for prompts, ensuring consistent, auditable interaction design across studies. Auditability – AWS CloudTrail logs all API calls and data-access events, creating an immutable audit trail that satisfies the agency’s ethical-research audit requirements. Fine-grained access control – IAM policies can restrict who can query the RAG index, upload new data, or modify guardrails, meeting security and compliance standards.

Why the other options fall short

OptionA relies on Rekognition for posture/expression detection, which introduces speculative visual interpretation rather than grounding answers in documented telemetry. Prompt templates stored only in Parameter Store lack versioning and explicit guardrail enforcement. While CloudTrail provides audit logs, the lack of a dedicated guardrail layer makes it harder to enforce “no speculation”. OptionC indexes logs in OpenSearch and uses Comprehend for entity extraction, but it does not explicitly describe how the system prevents speculative答复 or how prompt templates are managed. Auditing is limited to CloudTrail user interactions; there is no built-in mechanism to restrict hallucinated outputs. OptionD uses Amazon Q Business for federation and Lambda to filter LLM outputs, but it does not detail how guardrails are defined or enforced, nor does it provide a consistent method for grounding queries in a vetted knowledge base. Additionally, Q Business is still in preview and may not meet the precise RAG-centric audit and ethical-compliance requirements for a scientific research assistant.

References

Amazon Bedrock – Guardrails for controlling model behavior:

https://docs.aws.amazon.com/bedrock/latest/userguide/guardrails.html Amazon CloudTrail – Auditing API activity:

https://docs.aws.amazon.com/awscloudtrail/latest/userguide/cloudtrail-event-logging.html

---

## Exam AWS Certified Generative AI Developer - Professional (AIP-C01) (PDF) topic 1 question 81
Question #: 81
Topic #: 1

A company uses an organization in AWS Organizations with all features enabled to manage multiple AWS accounts. Employees use Amazon Bedrock across multiple accounts. The company must prevent specific topics and proprietary information from being included in prompts to Amazon Bedrock models. The company must ensure that employees can use only approved Amazon Bedrock models. The company centrally manages IAM roles for employees. Which combination of solutions will meet these requirements? (Choose two.)

A. Create an IAM permissions boundary for each employee's IAM role. Configure the permissions boundary to require an approved Amazon Bedrock guardrail identifier to invoke Amazon Bedrock models. Create an SCP that allows employees to use only approved models.
B. Create an SCP that allows employees to use only approved models. Configure the SCP to require employees to specify a guardrail identifier in calls to invoke an approved model.
C. Create an SCP that prevents an employee from invoking a model if a centrally deployed guardrail identifier is not specified in a call to the model. Create a permissions boundary on each employee's IAM role that allows each employee to invoke only approved models.
D. Use AWS CloudFormation to create a custom Amazon Bedrock guardrail that has a block filtering policy. Use stack sets to deploy the guardrail to each account in the organization.
E. Use AWS CloudFormation to create a custom Amazon Bedrock guardrail that has a mask filtering policy. Use stack sets to deploy the guardrail to each account in the organization.

**Answer: BE**

Explanation:
Justification

OptionB – An SCP can be written to require that every InvokeModel call include a guardrail identifier as a request parameter. At the same time the SCP can restrict the bedrock:InvokeModel action to a whitelist of model AmazonIDs. This directly enforces two constraints: (1) only approved models may be invoked and (2) the call must be accompanied by a centrally-managed guardrail ID, ensuring that prohibited topics or proprietary data are filtered before the model processes the prompt. OptionE – Using AWS CloudFormation together with StackSets to deploy a custom Bedrock guardrail that employs a mask filtering policy provides a reusable, account-wide enforcement mechanism. The guardrail can be authored once and distributed to every member account, guaranteeing consistent filtering of sensitive content across the organization. Because the guardrail is attached to the model invocation, it works in conjunction with the SCP inB to guarantee that every employee, regardless of the account they work in, must supply the required guardrail identifier. Why the other options are less suitable A – IAM permissions boundaries cannot inspect the payload parameters (e.g., guardrail identifier) that are passed to InvokeModel; they only limit the set of actions a role can perform. Enforcing a guardrail identifier through a boundary would require custom IAM policy conditions that are not supported for Bedrock. C – While an SCP can block invocations lacking a guardrail identifier, coupling it with a permissions boundary that “allows only approved models” does not guarantee that the guardrail identifier is actually used in the request; the boundary does not enforce parameter-level validation. This approach also adds unnecessary per-user boundary management. D – A block-filtering guardrail does not meet the requirement to mask proprietary information; block policies are coarse and may unintentionally deny legitimate content. Moreover, the solution does not address the need to require a guardrail identifier in each call. C and D together still lack the explicit SCP-level enforcement of a guardrail identifier that is central to the design, and they introduce extra complexity without providing the required precision.

Conclusion – The combination of B (SCP that enforces both model whitelisting and guardrail identifier presence) and E (centralized, account-wide deployment of a mask-filtering guardrail via CloudFormation/StackSets) directly satisfies all stated requirements: centralized IAM role management, approved-model restriction, and prevention of prohibited topics or proprietary data in prompts.

References

Amazon Bedrock Guardrails – Create and Use Guardrails:

https://docs.aws.amazon.com/bedrock/latest/userguide/guardrails.html AWS Organizations Service Control Policies (SCPs) – Condition Keys:

https://docs.aws.amazon.com/organizations/latest/userguide/reference_policies_actions.html#policies_actions_conditio keys

These links provide the official AWS documentation needed to implement the described guardrail enforcement and SCP design.

---

## Exam AWS Certified Generative AI Developer - Professional (AIP-C01) (PDF) topic 1 question 82
Question #: 82
Topic #: 1

A company is designing an API for a generative AI (GenAI) application that uses a foundation model (FM) that is hosted on a managed model service. The API must stream responses to reduce latency, enforce token limits to manage compute resource usage, and implement retry logic to handle model timeouts and partial responses. Which solution will meet these requirements with the LEAST operational overhead?

A. Integrate an Amazon API Gateway HTTP API with an AWS Lambda function to invoke Amazon Bedrock. Use Lambda response streaming to stream responses. Enforce token limits within the Lambda function. Implement retry logic for model timeouts by using Lambda and API Gateway timeout configurations.
B. Connect an Amazon API Gateway HTTP API directly to Amazon Bedrock. Simulate streaming by using client- side polling. Enforce token limits on the frontend. Configure retry behavior by using API Gateway integration settings.
C. Connect an Amazon API Gateway WebSocket API to an Amazon ECS service that hosts a containerized inference server. Stream responses by using the WebSocket protocol. Enforce token limits within Amazon ECS. Handle model timeouts by using ECS task lifecycle hooks and restart policies.
D. Integrate an Amazon API Gateway REST API with an AWS Lambda function that invokes Amazon Bedrock. Use Lambda response streaming to stream responses. Enforce token limits within the Lambda function. Implement retry logic by using Lambda and API Gateway timeout configurations.

**Answer: A**

Explanation:
Why optionA is the optimal choice

Fully serverless and low-ops – An HTTP API in API Gateway together with a Lambda function that invokes Bedrock requires no clusters, no EC2/ECS management, and no custom networking. This eliminates the bulk of operational overhead. True response streaming – Lambda supports response streaming (lambda.invoke with payload-format-version: "2.0" and is-streaming-enabled:true). Bedrock returns partial tokens as they are generated, and Lambda can forward each chunk to the HTTP client, achieving the required low-latency streaming without client-side polling. Token-limit enforcement in code – The function can count tokens from the Bedrock response (e.g., using a tokenizer library) and abort the stream or truncate once a preset limit is reached, directly controlling compute consumption. Built-in retry semantics – Lambda has configurable retry attempts with exponential back-off; API Gateway can pass the retries to the function. Additionally, the function can detect timeout errors (429/500 responses from Bedrock) and invoke the model again, all within the same Lambda execution environment. Cost-effective scaling – Each request triggers an independent Lambda instance; scaling is automatic and billed per-invocation, which is cheaper than managing a dedicated inference fleet.

Why the other alternatives are less suitable

OptionB – It relies on client-side polling to simulate streaming, which introduces extra latency and adds unnecessary complexity in the front-end. Retry logic is only configurable at the API Gateway level, providing less granular control over the Lambda/Bedrock retry behavior. OptionC – Hosting an inference server in ECS requires provisioning and managing clusters, load balancers, and container health checks. While WebSocket streaming is possible, the operational burden (capacity planning, patching, scaling policies) outweighs the benefits for a low-overhead solution. OptionD – The REST API in API Gateway does not natively support response streaming; it requires chunked transfer encoding work-arounds that are more fragile. Moreover, a REST API is heavier to configure than the lighter HTTP API and incurs higher per-request costs. Lambda-to-Bedrock integration works similarly, but the added REST-API complexity and reduced streaming support make it less optimal than the HTTP-API approach of optionA.

References

Amazon API Gateway – HTTP APIs: https://docs.aws.amazon.com/apigateway/latest/developerguide/http- api.html Lambda function URLs & streaming responses with Bedrock:

https://docs.aws.amazon.com/bedrock/latest/userguide/lambda-invoke.html#lambda-streaming

These documents confirm that API Gateway HTTP APIs combined with Lambda-based invocation provide the simplest, most operationally-efficient path to meet streaming, token-limit, and retry requirements.

---

## Exam AWS Certified Generative AI Developer - Professional (AIP-C01) (PDF) topic 1 question 83
Question #: 83
Topic #: 1

A retail company is using Amazon Bedrock to develop a customer service AI assistant. Analysis shows that 70% of customer inquiries are simple product questions that a smaller model can effectively handle. However, 30% of inquiries are complex return policy questions that require advanced reasoning. The company wants to implement a cost-effective model selection framework to automatically route customer inquiries to appropriate models based on inquiry complexity. The framework must maintain high customer satisfaction and minimize response latency. Which solution will meet these requirements with the LEAST implementation effort?

A. Create a multi-stage architecture that uses a small foundation model (FM) to classify the complexity of each inquiry. Route simple inquiries to a smaller, more cost-effective model. Route complex inquiries to a larger, more capable model. Use AWS Lambda functions to handle the routing logic.
B. Use Amazon Bedrock intelligent prompt routing to automatically analyze inquiries. Route simple product inquiries to smaller models, and route complex return policy inquiries to more capable larger models.
C. Implement a single-model solution that uses an Amazon Bedrock mid-sized foundation model (FM) with on- demand pricing. Include special instructions in model prompts to handle both simple and complex inquiries by using the same model.
D. Create separate Amazon Bedrock endpoints for simple and complex inquiries. Implement a rule-based routing system based on keyword detection. Use on-demand pricing for the smaller model and provisioned throughput for the larger model.

**Answer: B**

Explanation:
Why optionB is the most appropriate

Built-in intelligent routing – Amazon Bedrock’s Intelligent Prompt Routing feature automatically classifies incoming prompts and selects the optimal model (small-cost or large-capability) without requiring custom code or external services. Minimal implementation effort – The routing logic is handled natively by Bedrock; developers only need to configure the model aliases and enable the routing policy, eliminating the need to write Lambda functions, manage separate endpoints, or maintain keyword lists. Cost-effectiveness & latency – Simple product questions are directed to smaller, cheaper models, reducing inference cost and latency, while complex return-policy queries are routed to larger models that can provide accurate reasoning. This directly satisfies the goal of minimizing response latency and maintaining high customer satisfaction. Dynamic adaptation – As inquiry patterns evolve, the routing classifier can be retrained or fine-tuned within Bedrock, providing a future-proof solution without architectural changes.

Why the other options are less suitable

OptionA – Requires building and operating a multi-stage pipeline (classification model + Lambda) that adds considerable development, testing, and operational overhead. Although flexible, it does not meet the “LEAST implementation effort” criterion. OptionC – Uses a single mid-size model with prompt engineering to handle both query types. This forces the model to perform complex reasoning on every request, potentially increasing latency and cost, and may degrade accuracy for the more nuanced return-policy questions. OptionD – Relies on a rule-based keyword detection system and separate endpoints, which introduces maintenance of keyword lists and static routing rules. It also conflates provisioned throughput with on-demand pricing in a way that adds operational complexity and may lead to sub-optimal routing compared to the semantic classification provided by Intelligent Prompt Routing.

References

Amazon Bedrock Intelligent Prompt Routing –

https://docs.aws.amazon.com/bedrock/latest/userguide/intelligent-prompt-routing.html Amazon Bedrock Model Selection & Routing Best Practices –

https://docs.aws.amazon.com/bedrock/latest/userguide/model-routing.html

---

## Exam AWS Certified Generative AI Developer - Professional (AIP-C01) (PDF) topic 1 question 84
Question #: 84
Topic #: 1

A specialty coffee company has a mobile app that generates personalized coffee roast profiles by using Amazon Bedrock with a three-stage prompt chain. The prompt chain converts user inputs into structured metadata, retrieves relevant logs for coffee roasts, and generates a personalized roast recommendation for each customer. Users in multiple AWS Regions report inconsistent roast recommendations for identical inputs, slow inference during the retrieval step, and unsafe recommendations such as brewing at excessively high temperatures. The company must improve the stability of outputs for repeated inputs. The company must also improve app performance and the safety of the app's outputs. The updated solution must ensure 99.5% output consistency for identical inputs and achieve inference latency of less than 1 second. The solution must also block unsafe or hallucinated recommendations by using validated safety controls. Which solution will meet these requirements?

A. Deploy Amazon Bedrock with provisioned throughput to stabilize inference latency. Apply Amazon Bedrock guardrails that have semantic denial rules to block unsafe outputs. Use Amazon Bedrock Prompt Management to manage prompts by using approval workflows.
B. Use Amazon Bedrock Agents to manage chaining. Log model inputs and outputs to Amazon CloudWatch Logs. Use logs from Amazon CloudWatch to perform A/B testing for prompt versions.
C. Cache prompt results in Amazon ElastiCache. Use AWS Lambda functions to pre-process metadata and to trace end-to-end latency. Use AWS X-Ray to identify and remediate performance bottlenecks.
D. Use Amazon Kendra to improve roast log retrieval accuracy. Store normalized prompt metadata within Amazon DynamoDB. Use AWS Step Functions to orchestrate multistep prompts.

**Answer: A**

Explanation:
Why optionA is the optimal solution

Stable inference latency – Deploying Bedrock with provisioned throughput guarantees a reserved capacity that can be sized to meet the<1second latency target, eliminating variability caused by on-demand scaling. Deterministic output consistency – By managing the three-stage prompt through Bedrock Prompt Management and using approval workflows, the exact prompt version that produces the desired metadata and recommendation is locked and repeatedly executed, enabling the required99.5% output consistency for identical inputs. Built-in safety controls – Amazon Bedrock Guardrails provide semantic denial rules that can automatically block unsafe or hallucinated recommendations (e.g., temperature values outside the permissible range) before they reach the client, directly addressing the unsafe-output concern. Integrated approach – All three requirements—latency, consistency, and safety—are handled within a single service stack, simplifying architecture, reducing integration points, and ensuring that each component is jointly tested and monitored.

Why the other options fall short

OptionB focuses on logging and A/B testing but does not provide a mechanism to enforce consistent prompts or to guarantee safety; it also lacks any latency-optimizing deployment strategy. OptionC improves performance via caching and tracing but does not address unsafe recommendations or guarantee that cached results will remain consistent across regions; safety controls are absent. OptionD introduces Kendra for retrieval and Step Functions for orchestration, yet it does not specify any built-in guardrails or deterministic prompt management, leaving safety and consistency to custom implementation that may not meet the strict 99.5% consistency target.

References

Amazon Bedrock Guardrails – Semantic Denial Rules:

https://docs.aws.amazon.com/bedrock/latest/userguide/guardrails.html Prompt Management & Approval Workflows: https://docs.aws.amazon.com/bedrock/latest/userguide/prompt- management.html

---

## Exam AWS Certified Generative AI Developer - Professional (AIP-C01) (PDF) topic 1 question 85
Question #: 85
Topic #: 1

A company is developing a generative AI (GenAI) application by using Amazon Bedrock. The application will analyze patterns and relationships in the company's data. The application will process millions of new data points daily across AWS Regions in Europe, North America, and Asia before storing the data in Amazon S3. The application must comply with local data protection and storage regulations. Data residency and processing must occur within the same continent. The application must also maintain audit trails of the application's decision- making processes and provide data classification capabilities. Which solution will meet these requirements?

A. Deploy the application in each Region with local IAM policies. Use Amazon Bedrock cross-Region inference to distribute the workload. Use Amazon CloudWatch to log AI decision-making processes and data processing activities. Manually track compliance certifications across Regions.
B. Use SCPs with AWS Organizations to manage location-specific permissions. Use AWS CloudTrail immutable logs to audit the decision-making processes. Import a custom model into Amazon Bedrock and deploy the model to each Region.
C. Use Amazon S3 Object Lock with Region-specific S3 bucket policies. Pre-process the data points within the Region based on geographic origin before sending the data points to Amazon Bedrock. Use Amazon Macie to classify the data. Use AWS CloudTrail immutable logs to audit the decision-making processes.
D. Create separate AWS accounts for each Region with individual compliance frameworks. Use Amazon SageMaker AI with custom monitoring to track model performance and compliance with data residency requirements. Create manual reports for each regulatory jurisdiction.

**Answer: C**

Explanation:
Why optionC is the optimal solution

Geographic data-processing compliance – The design pre-processes data inside the Region where it originates, ensuring that all transformation, inference, and storage steps stay within the same continent. This satisfies the “data residency” requirement for European, North American, and Asian workloads. S3 Object Lock for immutable retention – By configuring Region-specific S3 buckets with Object Lock, the processed data is write-once-read-many and cannot be overwritten or deleted, fulfilling legal retention periods and providing a tamper-evident audit trail. Data classification with Amazon Macie – Macie can automatically discover and tag sensitive data (PII, PHI, etc.) at the source bucket, enabling downstream classification before the data reaches Bedrock. Comprehensive audit trails – CloudTrail immutable logs capture every API call related to the S3 buckets, Bedrock inference requests, and IAM actions, giving a complete, searchable chain of decisions that can be reviewed for regulatory compliance. Native integration with Bedrock – The pre-processed data is sent to Bedrock for inference; no cross-Region data movement is required, reducing latency and avoiding the need for additional compliance paperwork.

Why the other options fall short

OptionA – Leveraging Cross-Region inference would transfer data between continents, violating residency rules. Manual compliance tracking is error-prone and not a scalable audit mechanism. CloudWatch alone does not provide immutable storage or classification. OptionB – While SCPs and CloudTrail improve access control and logging, the solution still requires importing a custom model into Bedrock and deploying it per Region without a clear residency-enforcement mechanism. It does not address data classification or immutable retention. OptionD – Separate AWS accounts add operational overhead and do not inherently enforce geographic processing; SageMaker does not guarantee that training/inference stays within a specific continent unless explicitly constrained, and manual regulatory reporting is not an automated compliance solution.

Result OptionC directly addresses data residency, immutable audit trails, classification, and Region-local processing while integrating seamlessly with AWS services. It therefore meets all stated regulatory and technical constraints.

References

Amazon S3 Object Lock – WORM storage Amazon Macie – Data classification Amazon CloudTrail – Integrity validation Amazon Bedrock – Region-specific endpoints

---

## Exam AWS Certified Generative AI Developer - Professional (AIP-C01) (PDF) topic 1 question 86
Question #: 86
Topic #: 1

A financial services company is deploying a generative AI (GenAI) application that uses Amazon Bedrock to assist customer service representatives to provide personalized investment advice to customers. The company must implement a comprehensive governance solution that follows responsible AI practices and meets regulatory requirements. The solution must detect and prevent hallucinations in recommendations. The solution must have safety controls for customer interactions. The solution must also monitor model behavior drift in real time and maintain audit trails of all prompt-response pairs for regulatory review. The company must deploy the solution within 60 days. The solution must integrate with the company's existing compliance dashboard and respond to customers within 200 ms. Which solution will meet these requirements with the LEAST operational overhead?

A. Configure Amazon Bedrock guardrails to apply custom content filters and toxicity detection. Use Amazon Bedrock Model Evaluation to detect hallucinations. Store prompt-response pairs in Amazon DynamoDB to capture audit trails and set a TTL. Integrate Amazon CloudWatch custom metrics with the existing compliance dashboard.
B. Deploy Amazon Bedrock and use AWS PrivateLink to access the application securely. Use AWS Lambda functions to implement custom prompt validation. Store prompt-response pairs in an Amazon S3 bucket and configure S3 Lifecycle policies. Create custom Amazon CloudWatch dashboards to monitor model performance metrics.
C. Use Amazon Bedrock Agents and Amazon Bedrock Knowledge Bases to ground responses. Use Amazon Bedrock Guardrails to enforce content safety. Use Amazon OpenSearch Service to store and index prompt- responses pairs. Integrate OpenSearch Service with Amazon QuickSight to create compliance reports and to detect model behavior drift.
D. Use Amazon SageMaker Model Monitor to detect model behavior drift. Use AWS WAF to filter content. Store customer interactions in an encrypted Amazon RDS database. Use Amazon API Gateway to create custom HTTP APIs to integrate with the compliance dashboard.

**Answer: A**

Explanation:
Answer: A – This option delivers the required functionality with the smallest operational footprint.

Built-in Guardrails & Hallucination detection – Amazon Bedrock Guardrails can enforce custom content filters and toxicity rules out-of-the-box; the Model Evaluation API includes a hallucination metric that directly validates answer fidelity. Audit-ready storage – DynamoDB provides instant, serverless persistence with TTL for automatic expiration of prompt-response records, eliminating the need for separate lifecycle management. Real-time drift monitoring – CloudWatch custom metrics can be emitted from Bedrock runtime logs (via PutMetricData) and routed to the existing compliance dashboard without extra services. Performance SLA – All components are fully managed; the 200ms response target is met by configuring Bedrock inference parameters (e.g., temperature, maxTokens) and provisioning throughput, keeping infrastructure management minimal. Low overhead – No additional clusters, pipelines, or custom inference containers are introduced; everything runs serverless within AWS.

Why the other options are less suitable

B – Custom Lambda validation must be coded and deployed, increasing code-maintenance. S3 storage requires lifecycle configuration and does not natively support low-latency reads for real-time dashboards. CloudWatch dashboards would need extra parsing logic, adding operational steps.

C – OpenSearch adds a managed search cluster that must be provisioned, scaled, and monitored, raising operational complexity. QuickSight integration introduces extra data pipelines for compliance reporting, extending setup time beyond the 60-day window.

D – SageMaker Model Monitor is designed for endpoint-level models, not for Bedrock-hosted prompts; it requires custom inference containers and monitoring jobs. AWS WAF is a network-layer filter and cannot guarantee semantic safety or hallucination detection. RDS adds a managed relational database that must be modeled, encrypted, and backed-up, further increasing ops load.

References

Amazon Bedrock Guardrails: https://docs.aws.amazon.com/bedrock/latest/userguide/guardrails.html Bedrock Model Evaluation (hallucination metric):

https://docs.aws.amazon.com/bedrock/latest/userguide/model-evaluation.html

---

## Exam AWS Certified Generative AI Developer - Professional (AIP-C01) (PDF) topic 1 question 87
Question #: 87
Topic #: 1

A company uses AWS Lake Formation to set up a data lake that contains databases and tables for multiple business units across multiple AWS Regions. The company wants to use a foundation model (FM) through Amazon Bedrock to perform fraud detection. The FM must ingest sensitive financial data from the data lake. The data includes some customer personally identifiable information (PM). The company must design an access control solution that prevents PI I from appearing in a production environment. The FM must access only authorized data subsets that have PH redacted from specific data columns. The company must capture audit trails for all data access. Which solution will meet these requirements?

A. Create a separate dataset in a separate Amazon S3 bucket for each business unit and Region combination. Configure S3 bucket policies to control access based on IAM roles that are assigned to FM training instances. Use S3 access logs to track data access.
B. Configure the FM to authenticate by using IAM roles and Lake Formation permissions based on LF-Tag expressions. Define business units and Regions as LF-Tags that are assigned to databases and tables. Use AWS CloudTrail to collect comprehensive audit trails of data access.
C. Use direct IAM principal grants on specific databases and tables in Lake Formation. Create a custom application layer that logs access requests and further filters sensitive columns before sending data to the FM.
D. Configure the FM to request temporary credentials from AWS STS. Access the data by using presigned S3 URLs that are generated by an API that applies business unit and Regional filters. Use AWS CloudTrail to collect comprehensive audit trails of data access.

**Answer: B**

Explanation:
Why OptionB is the correct solution

Lake Formation fine-grained access control with LF-Tags – By assigning Lake Formation tags (LF-Tags) such as BusinessUnit and Region to databases and tables, you can define Lake Formation permissions that are evaluated at query time. Only data whose LF-Tags match the tags associated with the FM’s IAM role (or with a role assumed by the FM) is visible to the model. Column-level protection – LF-Tags can be attached to individual columns, allowing you to mask or redact PII columns automatically when the FM reads the data. This satisfies the requirement that sensitive financial data be filtered before it reaches the production environment. Native integration with Amazon Bedrock – Bedrock can assume an IAM role that has Lake Formation permissions, enabling seamless access to the tagged data without having to manage separate credentials or external access layers. Comprehensive audit trails – AWS CloudTrail records every data-access request that passes through Lake Formation, including the principal, the LF-Tag evaluation outcome, and the specific query executed. This provides end-to-end auditability for compliance and forensic investigations.

Why the other options are less suitable

OptionA – Creating separate S3 buckets per business unit and region introduces operational overhead and does not provide column-level filtering. S3 bucket policies alone cannot enforce Fine-Grained access based on LF-Tags, and they lack the ability to enforce masking of PII fields. Access logging via S3 access logs is limited compared to CloudTrail’s detailed, account-wide audit capabilities. OptionC – Direct IAM grants are coarse-grained and do not support tag-based scoping, making it difficult to enforce region- or business-unit isolation at scale. Building a custom application layer to filter data adds development complexity and introduces a single point of failure; it also bypasses Lake Formation’s native masking and audit features. OptionD – Using temporary STS credentials and presigned URLs works for simple S3 access, but it does not integrate with Lake Formation’s tag-based security model, nor does it guarantee that only the required columns are exposed. Audit logging would rely solely on CloudTrail for STS calls, missing the richer Lake Formation access logs that detail which rows/columns were actually accessed.

Conclusion OptionB aligns with AWS best practices for data-lake security: it leverages Lake Formation’s LF-Tag-based permissions for fine-grained, column-level protection, ensures that only authorized data subsets are visible to the foundation model, and captures full audit trails via CloudTrail. This design meets the stringent isolation, masking, and compliance requirements described in the scenario.

References

Lake Formation Security Overview & Tag-Based Access Control:

https://docs.aws.amazon.com/lakeformation/latest/dg/security-overview.html AWS CloudTrail Data Events for Lake Formation Auditing:

https://docs.aws.amazon.com/awscloudtrail/latest/userguide/cloudtrail-data-events.html

---

## Exam AWS Certified Generative AI Developer - Professional (AIP-C01) (PDF) topic 1 question 88
Question #: 88
Topic #: 1

A company runs a Retrieval Augmented Generation (RAG) application that uses Amazon Bedrock Knowledge Bases to perform regulatory compliance queries. The application uses the RetrieveAndGenerateStream API. The application retrieves relevant documents from a knowledge base that contains more than 50,000 regulatory documents, legal precedents, and policy updates. The RAG application is producing suboptimal responses because the initial retrieval often returns semantically similar but contextually irrelevant documents. The poor responses are causing model hallucinations and incorrect regulatory guidance. The company needs to improve the performance of the RAG application so it returns more relevant documents. Which solution will meet this requirement with the LEAST operational overhead?

A. Deploy an Amazon SageMaker endpoint to run a fine-tuned ranking model. Use an Amazon API Gateway REST API to route requests. Configure the application to make requests through the REST API to rerank the results.
B. Use Amazon Comprehend to classify documents and apply relevance scores. Integrate the RAG application’s reranking process with Amazon Textract to run document analysis. Use Amazon Neptune to perform graph- based relevance calculations.
C. Implement a retrieval pipeline that uses the Amazon Bedrock Knowledge Bases Retrieve API to perform initial document retrieval. Call the Amazon Bedrock Rerank API to rerank the results. Invoke the InvokeModelWithResponseStream operation to generate responses.
D. Use the latest Amazon reranker model through the reranking configuration within Amazon Bedrock Knowledge Bases. Use the model to improve document relevance scoring and to reorder results based on contextual assessments.

**Answer: D**

Explanation:
Why optionD is the optimal choice

Native, managed reranking – Bedrock Knowledge Bases already includes a built-in reranking configuration that invokes the latest Amazon-produced reranker model automatically. No additional services, model hosting, or custom APIs are required, so operational overhead stays minimal. Zero-maintenance infrastructure – Since the reranker runs inside the Knowledge Base service, there is no need to provision or monitor SageMaker endpoints, API Gateways, or extra compute resources. The application simply updates the retrieval call to use the configured reranking setting. Preserves existing RetrieveAndGenerateStream flow – The solution fits seamlessly into the current RetrieveAndGenerateStream pipeline; only the retrieval parameters need adjustment. This allows a quick, low-risk code change while still delivering higher relevance scores and reducing hallucinations. Automatic model versioning – Bedrock manages model updates behind the scenes, ensuring the application always uses the most recent, highest-performing reranker without manual intervention.

Why the other options are less suitable

OptionA requires deploying and operating a custom SageMaker model, an API Gateway, and additional orchestration code. This introduces significant operational overhead and ongoing maintenance responsibilities. OptionB mixes multiple disjointed services (Comprehend classification, Textract parsing, Neptune graph queries). Integrating and managing these components adds complexity and latency, and it does not directly address relevance ranking within the Knowledge Base workflow. OptionC suggests using a separate “Amazon Bedrock Rerank API” that does not exist as a distinct service; the reranking capability is already embedded in the Knowledge Base configuration. Adding an extra step creates unnecessary architecture complexity.

Conclusion – Leveraging the built-in reranking configuration of Amazon Bedrock Knowledge Bases provides the highest relevance improvement with the least operational burden, making optionD the best answer.

References

Amazon Bedrock Knowledge Bases – Retrieval and reranking configuration

https://docs.aws.amazon.com/bedrock/latest/userguide/knowledge-bases-retrieval.html

Reranking with Amazon Bedrock (official documentation)

https://docs.aws.amazon.com/bedrock/latest/userguide/reranking.html

---

## Exam AWS Certified Generative AI Developer - Professional (AIP-C01) (PDF) topic 1 question 89
Question #: 89
Topic #: 1

A company is developing a customer communication platform that uses an AI assistant powered by an Amazon Bedrock foundation model (FM). The AI assistant summarizes customer messages and generates initial response drafts. The company wants to use Amazon Comprehend to implement layered content filtering. The layered content filtering must prevent sharing of offensive content, protect customer privacy, and detect potential inappropriate advice solicitation. Inappropriate advice solicitation includes requests for unethical practices, harmful activities, or manipulative behaviors. The solution must maintain acceptable overall response times, so all pre-processing filters must finish before the content reaches the FM. Which solution will meet these requirements?

A. Use parallel processing with asynchronous API calls. Use toxicity detection for offensive content. Use prompt safety classification for inappropriate advice solicitation. Use personally identifiable information (PII) detection without redaction.
B. Use custom classification to build an FM that detects offensive content and inappropriate advice solicitation. Apply personally identifiable information (PII) detection as a secondary filter only when messages pass the custom classifier.
C. Deploy a multi-stage process. Configure the process to use prompt safety classification first, then toxicity detection on safe prompts only, and finally personally identifiable information (PII) detection in streaming mode. Route flagged messages through Amazon EventBridge for human review.
D. Use toxicity detection with thresholds configured to 0.5 for all categories. Use parallel processing for both prompt safety classification and personally identifiable information (PII) detection with entity redaction. Apply Amazon CloudWatch alarms to filter metrics.

**Answer: D**

Explanation:
Why option D is the optimal choice

Layered, deterministic workflow – It processes the user message through three independent filters in a fixed order (toxicity → prompt-safety → PII), guaranteeing that any flagged content is caught before it reaches the Bedrock FM, thus protecting response quality and compliance. Appropriate thresholds – Setting toxicity-classification thresholds to0.5 balances sensitivity with false-positive rate, preventing over-filtering that could degrade latency. Parallel execution for performance – Toxicity detection and PII detection run in parallel, minimizing cumulative processing time while still providing full coverage of the required checks. Entity redaction – PII entities are redacted on-the-fly, preserving customer privacy without blocking legitimate discussion. Monitoring & automatic throttling – CloudWatch alarms on filter-metric thresholds enable real-time alerts if processing latency exceeds the target SLA, allowing the platform to scale or adjust thresholds dynamically. End-to-end pipeline readiness – The combination of asynchronous calls and streaming-mode PII detection ensures the solution scales to high request volumes while maintaining acceptable end-to-end response times.

Why the other options are less suitable

OptionA – Uses toxicity detection and prompt-safety classification but leaves PII handling without redaction; this violates privacy requirements. Additionally, it relies on asynchronous calls only for throughput, not for deterministic ordering of safety checks. OptionB – Introduces a custom classifier that must be trained, validated, and continuously maintained, adding operational overhead and risk of inaccurate detection. It also applies PII detection only after the custom classifier, which could expose PII-containing safe messages to unsafe content. OptionC – Proposes a multi-stage process with EventBridge routing for human review, but it delays the FM until after additional filters, potentially increasing latency beyond acceptable limits. It also lacks explicit threshold tuning and parallelism that are essential for maintaining performance at scale.

References

AWSComprehend –Detect PII with Entity Redaction Amazon Bedrock –Prompt Safety Classification

---

## Exam AWS Certified Generative AI Developer - Professional (AIP-C01) (PDF) topic 1 question 90
Question #: 90
Topic #: 1

A software as a service (SaaS) company is building a recommendation model that uses Amazon SageMaker AI to support an application that recommends airline cabin upgrades to customers. The company will host SageMaker AI models on Amazon Bedrock by using Amazon Bedrock Custom Model Import. Airline companies will use the application to send customized offers to customers. The model must examine the travel history of customers to help make more relevant recommendations. The company stores customer travel history data in an Amazon RDS database. The company must ensure that the application delivers consistent, relevant, and accurate results across multiple airlines and customer populations. Which solution will meet these requirements?

A. Use Amazon Bedrock Knowledge Bases to implement a RAG architecture to analyze customer travel history data to give the application semantic search capabilities. Use the semantic search capabilities to retrieve relevant booking patterns, preferences, and loyalty information to generate personalized cabin upgrade recommendations. Apply Amazon Bedrock guardrails to filter content. Use AWS Step Functions and AWS Lambda functions to orchestrate validation workflows to reduce hallucinations.
B. Implement text-to-SQL transformations with SQL validations to accurately retrieve relevant booking patterns, preferences, and loyalty information from the RDS database. Use the results to generate personalized cabin upgrade recommendations. Apply Amazon Bedrock guardrails to filter content. Use AWS Step Functions and AWS Lambda functions to orchestrate validation workflows to reduce hallucinations.
C. Use Amazon OpenSearch Service to implement vector searches of customer travel history embeddings. Use the vector searches to give the application the ability to perform similarity-based retrieval of booking patterns, preferences, and loyalty information to generate personalized cabin upgrade recommendations. Apply Amazon Bedrock guardrails to filter responses. Use confidence scoring and semantic similarity searches to reduce hallucinations.
D. Implement text-to-SQL transformations with SQL validations to accurately retrieve relevant booking patterns, preferences, and loyalty information from the RDS database. Use the results to generate personalized cabin upgrade recommendations. Apply Amazon Bedrock guardrails to filter responses. Use confidence scoring and semantic similarity searches to reduce hallucinations.

**Answer: D**

Explanation:
Why option D is the optimal solution

Data source alignment – The company’s travel-history records reside in an Amazon RDS database. OptionD explicitly uses text-to-SQL transformations with SQL validation to query that relational store, ensuring that only accurate, up-to-date metadata (booking patterns, preferences, loyalty scores) is fed to the recommendation model. OptionsA andC rely on vector or semantic search over unstructured data, which would require an additional embedding pipeline and lose the rigor of relational semantics. OptionB also uses text-to-SQL but pairs it only with guardrails, leaving out the confidence-scoring and semantic-similarity mechanisms that further tighten reliability. Model-agnostic orchestration – By employing AWS Step Functions and Lambda, D creates a deterministic workflow that can call the Bedrock Custom Model Import endpoint, invoke the SQL generator, validate the output, and apply guardrails in a repeatable fashion. This guarantees consistent behavior across multiple airline tenants and varying customer segments. Hallucination control – D combines confidence scoring and semantic similarity checks to detect low-confidence or out-of-distribution responses before they reach the recommendation layer. This layered guard-rail approach is more robust than guardrails alone (as in A) or missing altogether (as in B). OptionC does include similarity checks but still depends on vector search, which introduces extra latency and requires maintaining an embedding index. Scalability & multi-tenant isolation – Step Functions can enforce per-tenant quotas and isolate execution contexts, making it easier to deploy the same workflow for several airlines while preserving data-privacy boundaries. This is not addressed in the alternative designs.

Why the other options are less suitable

A – Relies solely on vector-based RAG through Bedrock Knowledge Bases; it does not leverage the structured RDS data directly, risking loss of precise loyalty or booking attributes. It also lacks the explicit SQL validation and confidence scoring that D provides, resulting in higher hallucination risk. B – While it uses text-to-SQL and guardrails, it omits the additional semantic similarity and confidence scoring mechanisms that D incorporates, making it more vulnerable to inaccurate or fabricated recommendations. C – Uses OpenSearch for vector similarity searches. This adds operational overhead (index management, embedding updates) and does not utilize the existing relational schema, potentially reducing accuracy for queries that require exact attribute retrieval.

References

Amazon SageMakerCustom Model Import Documentation Amazon Bedrock Guardrails Overview

These links provide the official AWS guidance on integrating custom models with Bedrock and on implementing guardrails, both of which underpin the justification for optionD.

---

## Exam AWS Certified Generative AI Developer - Professional (AIP-C01) (PDF) topic 1 question 91
Question #: 91
Topic #: 1

A company is using Amazon Bedrock to develop a customer support AI assistant. The AI assistant must respond to customer questions about their accounts. The AI assistant must not expose personal information in responses. The company must comply with data residency policies by ensuring that all processing occurs within the same AWS Region where each customer is located. The company wants to evaluate how effective the AI assistant is at preventing the exposure of personal information before the company makes the AI assistant available to customers. Which solution will meet these requirements?

A. Configure a cross-Region Amazon Bedrock guardrail to apply sensitive information filters. Set the guardrail to detect mode during development and testing. Switch to block mode for production deployment.
B. Configure an Amazon Bedrock guardrail to apply sensitive information filters. Set the guardrail to mask mode during development and testing. Switch to block mode for production deployment. Deploy a copy of the guardrail to each Region where the company operates.
C. Configure an Amazon Bedrock guardrail to apply content and topic filters. Set the guardrail to detect mode during development, testing, and production. Disable invocation logging for the Amazon Bedrock model.
D. Configure a cross-Region Amazon Bedrock guardrail to apply a set of content and word filters. Set the guardrail to detect mode during development and testing. Switch to mask mode for production deployment.

**Answer: B**

Explanation:
Why optionB is the best fit

Regional data-residency compliance – The solution explicitly instructs you to deploy a copy of the guardrail to each AWS Region where the company operates, guaranteeing that all processing of a customer’s data stays inside the same Region where that customer resides. Progressive protection model – During development and testing the guardrail runs in mask mode, which redacts personally identifying information without stopping the request, allowing the model to be stress-tested in a realistic workflow. For production the same guardrail is switched to block mode, which outright prevents any request that would expose sensitive data, ensuring the assistant never returns PII. Focused filtering – The guardrail is configured to apply sensitive-information filters, directly targeting the risk of personal-information leakage, rather than generic “content” or “word” filters that may miss PII patterns. Evaluations before launch – Mask-mode operation provides full logging and observability, enabling the team to review how often PII is being masked and to fine-tune the filter before the stricter block mode is enforced.

Why the other options are less suitable

OptionA – Uses a cross-Region guardrail and switches to “block mode” only in production, but detection mode alone cannot prevent exposure; it merely flags issues, which can still result in PII being returned during testing. Additionally, a cross-Region guardrail does not guarantee that each customer’s data stays within its home Region. OptionC – Relies on generic “content and topic filters” and keeps the guardrail in detection mode permanently, which does not actively stop PII from being generated. Disabling invocation logging also removes the ability to audit failures, making it unsuitable for the required pre-deployment evaluation. OptionD – Describes a “cross-Region guardrail” with “content and word filters,” mixing masking and detection in ways that are not aligned with AWS’s recommended guardrail types. It also suggests moving to “mask mode for production,” whereas the requirement is to prevent exposure, i.e., block mode is the safer, compliance-focused choice.

References

Amazon Bedrock Guardrails – Mask and Block modes:

https://docs.aws.amazon.com/bedrock/latest/userguide/guardrails.html Deploying Guardrails per Region: https://docs.aws.amazon.com/bedrock/latest/userguide/guardrails-multi- region.html (both links are publicly accessible and describe the configuration steps used in the solution).

---

## Exam AWS Certified Generative AI Developer - Professional (AIP-C01) (PDF) topic 1 question 92
Question #: 92
Topic #: 1

A university recently digitized a collection of archival documents, academic journals, and manuscripts. The university stores the digital files in an AWS Lake Formation data lake. The university hires a GenAI developer to build a solution to allow users to search the digital files by using text queries. The solution must return journal abstracts that are semantically similar to a user's query. Users must be able to search the digitized collection based on text and metadata that is associated with the journal abstracts. The metadata of the digitized files does not contain keywords. The solution must match similar abstracts to one another based on the similarity of their text. The data lake contains fewer than 1 million files. Which solution will meet these requirements with the LEAST operational overhead?

A. Use Amazon Titan Embeddings in Amazon Bedrock to create vector representations of the digitized files. Store embeddings in the OpenSearch Neural Plugin for Amazon OpenSearch Service.
B. Use Amazon Comprehend to extract topics from the digitized files. Store the topics and file metadata in an Amazon Aurora PostgreSQL database. Query the abstract metadata against the data in the Aurora database.
C. Use Amazon SageMaker AI to deploy a sentence-transformer model. Use the model to create vector representations of the digitized files. Store embeddings in an Amazon Aurora PostgreSQL database that has the pgvector extension.
D. Use Amazon Titan Embeddings in Amazon Bedrock to create vector representations of the digitized files. Store embeddings in an Amazon Aurora PostgreSQL Serverless database that has the pgvector extension.

**Answer: D**

Explanation:
Why option D is the best choice

Fully managed vector search stack – Amazon Titan Embeddings are provided as a serverless service in Amazon Bedrock, eliminating the need to operate dedicated embedding instances. Native pgvector support in Aurora Serverless – Aurora Serverless automatically scales compute and storage based on query load, and the built-in pgvector extension enables fast similarity search without provisioning a separate vector database. Lowest operational overhead – Combining a serverless embedding API with a serverless relational store means the developer does not manage clusters, scaling policies, or separate search indices; the entire pipeline can be built and run with minimal infrastructure code. Meets all functional requirements – 1. Generates embeddings for each abstract-level document. 2. Stores both the embeddings and the associated metadata (title, authors, etc.) in a single Aurora Serverless instance. 3. Enables vector similarity queries on the embeddings while still being able to filter/sort by metadata stored in the same table, satisfying the need to search on both text and attached metadata. 4. Handles up to 1million documents comfortably within Aurora Serverless limits.

Why the other options are less suitable

Option A requires deploying and managing an OpenSearch cluster with the Neural Plugin, which adds operational complexity (cluster sizing, monitoring, patching) and incurs higher cost for a workload that stays well below 1million objects. Option B relies on Amazon Comprehend topic extraction, which does not produce dense vector embeddings suitable for semantic similarity; it also forces the metadata into a relational schema that must be manually maintained, increasing development effort. Option C uses a self-hosted SageMaker inference endpoint, meaning the developer must provision, scale, and patch EC2 instances or containers. Although pgvector can store the vectors, the need to run a dedicated SageMaker endpoint introduces more operational overhead than the fully serverless TitanEmbeddings+Aurora Serverless path.

Result – OptionD delivers the required semantic similarity search with the smallest operational footprint by leveraging fully managed, serverless services for both embedding generation and storage.

References

Amazon Titan Embeddings –https://docs.aws.amazon.com/bedrock/latest/userguide/titan-embeddings.html Amazon Aurora Serverless with pgvector –

https://docs.aws.amazon.com/AmazonRDS/latest/userguide/postgresql-creating-postgres- extensions.html#postgresql-extensions-pgvector

---

## Exam AWS Certified Generative AI Developer - Professional (AIP-C01) (PDF) topic 1 question 93
Question #: 93
Topic #: 1

A financial services company wants to use Amazon Bedrock foundation models (FMs) to analyze call center recordings. When calls end, the call center stores recordings as MP3 files in an Amazon S3 bucket. The company needs to generate summaries and sentiment analysis for the recordings in a structured format as soon as new files are created. The recordings average 20 MB in size. Which combination of solutions will meet these requirements? (Choose two.)

A. Use AWS Step Functions to orchestrate a workflow to process the recordings. Configure steps to invoke Amazon Transcribe to convert audio to text, validate job completion, and to invoke an AWS Lambda function to process the text by using Amazon Bedrock FMs to generate structured analysis output.
B. Use AWS Step Functions to orchestrate a workflow to process the recordings. Configure steps to invoke Amazon Transcribe to convert audio to text, validate job completion, and to directly invoke Amazon Bedrock FMs to generate summaries and sentiment analysis in JSON format.
C. Use AWS Step Functions to orchestrate a workflow to process the recordings. Configure steps to invoke Amazon Transcribe to convert audio to text, validate job completion, and to invoke an AWS Lambda function to create a prompt to invoke Amazon Bedrock FMs to generate structured analysis output.
D. Configure the source S3 bucket to send events to Amazon EventBridge. Create an EventBridge rule to invoke the Step Functions workflow when an object is created in the bucket.
E. Configure the source S3 bucket to send notifications to the Step Functions workflow when an object is created in the bucket.

**Answer: BD**

Explanation:
Justification

Option B is correct because it combines a fully serverless, event-driven pipeline with the required transformation steps:

1. Amazon S3 → Transcribe: When a new MP3 arrives, Transcribe converts the audio to text without managing servers. 2. Step Functions orchestration: The state machine validates the Transcribe job’s completion (e.g., using DescribeTranscribeJob) before proceeding. 3. Direct Bedrock FM invocation: Step Functions can invoke a Bedrock model (e.g., via the InvokeModel integration) and return the model’s JSON response directly, eliminating an extra Lambda layer and preserving the structured output format required for downstream processing. 4. This design meets the “as soon as new files are created” latency requirement while keeping the architecture simple, cost-effective, and fully managed.

Option D is also correct because it establishes the proper event source for the workflow: S3 Event Notification → EventBridge: S3 can natively publish ObjectCreated events to EventBridge, which then triggers the Step Functions state machine. This decouples S3 from the processing logic, provides built-in filtering and retry semantics, and guarantees that every new recording initiates the pipeline without custom Lambda glue code. Together with Option B, D completes the event-driven flow and ensures reliable start-of-processing for each recording. Option A introduces an unnecessary Lambda step between Transcribe and Bedrock. The Lambda would need to translate the transcription result into a proper prompt before calling Bedrock, adding latency and extra code to maintain. Direct Bedrock invocation (as in B) avoids this indirection. Option C suggests using Lambda to create the prompt for Bedrock. While technically possible, it adds stateful logic and extra execution time, which is unnecessary when the prompt can be constructed in the orchestration layer or even passed directly from Step Functions. This makes C less optimal than B. Option E describes “notification to the Step Functions workflow”. S3 cannot invoke Step Functions directly; it must rely on EventBridge or SQS/SNS. Hence E is incorrect because it misrepresents the integration mechanism.

Overall, the optimal architecture uses B (Step Functions → Transcribe → direct Bedrock FM call) together with D (S3 → EventBridge rule to start the workflow). This combination delivers low-latency, fully managed processing, preserves the required structured JSON output, and aligns with AWS best-practice serverless patterns.

References

Amazon Bedrock – Invoking models from Step Functions:

https://docs.aws.amazon.com/bedrock/latest/userguide/bedrock-studio-invoke-model-step-functions.html EventBridge rule for S3 ObjectCreated events:

https://docs.aws.amazon.com/eventbridge/latest/userguide/events-s3-example.html

---

## Exam AWS Certified Generative AI Developer - Professional (AIP-C01) (PDF) topic 1 question 94
Question #: 94
Topic #: 1

A medical device company wants to feed reports of medical procedures that used the company's devices into an AI assistant. To protect patient privacy, the AI assistant must expose patient personally identifiable information (PII) only to surgeons. The AI assistant must redact PII for engineers. The AI assistant must reference only medical reports that are less than 3 years old. The company stores reports in an Amazon S3 bucket as soon as each report is published. The company has already set up an Amazon Bedrock knowledge base. The AI assistant uses Amazon Cognito to authenticate users. Which solution will meet these requirements?

A. Enable Amazon Macie PII detection on the S3 bucket. Use an S3 trigger to invoke an AWS Lambda function that redacts PII from the reports. Configure the Lambda function to delete outdated documents from the bucket and to invoke knowledge base syncing.
B. Invoke an AWS Lambda function to sync the S3 bucket and the knowledge base when a new report is uploaded to the bucket. Use a second Lambda function to invoke Amazon Comprehend to detect and redact PII if a user is part of the engineer Cognito user group. Set up an S3 Lifecycle configuration to remove reports that are older than 3 years from the bucket.
C. Set up an S3 Lifecycle configuration on the bucket to remove reports that are older than 3 years. Schedule an AWS Lambda function to run daily syncs between the bucket and the knowledge base. When users interact with the AI assistant, call the ApplyGuardrail configuration that matches the user's Cognito user group to redact PII from the agent’s responses if appropriate.
D. Create a second knowledge base. Set up an S3 Lifecycle configuration on the bucket to remove reports that are older than 3 years. Invoke an AWS Lambda function that syncs the bucket with the original knowledge base when a new report is uploaded to the bucket. Use Amazon Comprehend to detect and redact PII before syncing the bucket with the second knowledge base. When a user interacts with the AI assistant, redirect the model to the appropriate knowledge base depending on the user’s Cognito user group.

**Answer: C**

Explanation:
Why optionC is the correct solution

Retention control:S3 Lifecycle configuration automatically removes objects older than 3years, ensuring that the knowledge base only indexes reports that meet the age requirement. Role-based PII redaction:When a user interacts with the AI assistant, the assistant can invoke the ApplyGuardrail API and supply the user’s Cognito group identifier. Guardrails can be configured to redact PII for engineers while leaving it visible for surgeons, satisfying the privacy constraint without custom code per request. Knowledge-base synchronization:A daily Lambda function synchronizes the S3 bucket with the Bedrock knowledge base, guaranteeing that newly uploaded reports are indexed promptly while the lifecycle rule governs the removal of stale documents. Simplified architecture:All requirements are addressed with native AWS services (S3, Lambda, Guardrails, Cognito) in a single knowledge-base, reducing operational overhead and eliminating the need for multiple indexes or duplicated data stores. Why the other options are less suitable

OptionA – Relies on Macie for PII detection and a Lambda to delete outdated documents, but it does not incorporate Guardrails to conditionally redact PII based on user role, nor does it reference the age filter when syncing the knowledge base. It also lacks explicit integration with Cognito for role-specific processing. OptionB – Uses Comprehend for PII detection only when the caller belongs to the “engineer” group, but it does not enforce a 3-year retention policy on the knowledge base; reports may remain indexed indefinitely. Additionally, the approach ties PII redaction to the ingestion Lambda rather than to the interaction flow, making the solution harder to maintain. OptionD – Introduces a second knowledge base and a routing step that selects among bases based on Cognito groups. While this can enforce different content visibility, it adds unnecessary complexity and does not guarantee that the routed base respects the 3-year age constraint automatically; the age rule would still need to be applied separately.

Key AWS services involved

Amazon S3 Lifecycle – enforces automatic deletion of objects older than a defined period. AWS Lambda – orchestrates daily sync of the bucket with the Bedrock knowledge base. Amazon Bedrock Knowledge Base – stores and retrieves relevant medical reports for the assistant. Amazon Guardrails – applies role-specific transformations (e.g., redaction of PII) during inference. Amazon Cognito – provides user authentication and group identifiers that drive Guardrail policies.

References

Amazon Bedrock Knowledge Bases – https://docs.aws.amazon.com/bedrock/latest/userguide/knowledge- bases.html S3 Lifecycle Configuration – https://docs.aws.amazon.com/AmazonS3/latest/userguide/object-lifecycle- mgmt.html Guardrails for Bedrock – https://docs.aws.amazon.com/bedrock/latest/userguide/guardrails.html Cognito User Pool Groups – https://docs.aws.amazon.com/cognito/latest/userguide/user-pools-apps.html

---

## Exam AWS Certified Generative AI Developer - Professional (AIP-C01) (PDF) topic 1 question 95
Question #: 95
Topic #: 1

A large ecommerce company has deployed a foundation model (FM) to generate product descriptions. The company's engineering team monitors technical metrics such as token usage, latency, and error rates by using Amazon CloudWatch. The company's marketing team tracks business metrics such as conversion rates and revenue impact in its own systems. The company needs a unified observability solution that correlates technical performance with business outcomes. The solution must provide automatic alerts to stakeholders when operational metrics indicate degradation. The solution must provide comprehensive visibility across both technical and business metrics. Which solution will meet these requirements?

A. Create CloudWatch dashboards that include technical metrics and imported business metrics. Configure CloudWatch composite alarms that combine technical data and business data. Use Amazon SNS to set up notifications to stakeholders.
B. Use Amazon Managed Grafana to visualize technical metrics from CloudWatch with business metrics from external sources. Configure Amazon Managed Grafana alerts to invoke AWS Lambda functions. Configure the Lambda functions to remediate issues automatically when metrics exceed predefined thresholds.
C. Stream CloudWatch metrics to Amazon S3 by using CloudWatch metric streams. Create Amazon QuickSight dashboards to visualize the combined technical metrics and business metrics. Set up Amazon EventBridge rules to send notifications to stakeholders when metrics exceed predefined thresholds.
D. Configure CloudWatch custom dashboards that integrate operational metrics with imported business metrics. Set up CloudWatch composite alarms with anomaly detection. Use Amazon SNS to create alarm actions to notify stakeholders when correlated metrics indicate performance issues.

**Answer: D**

Explanation:
Justification

Option D directly leverages native AWS services (CloudWatch dashboards, custom metrics, composite alarms, anomaly detection, and SNS) to correlate operational and business metrics in a single pane of visibility and to trigger automated alerts to stakeholders. The solution integrates both technical and business data within CloudWatch, enabling unified monitoring without external pipelines. Anomaly detection in composite alarms provides adaptive thresholding, which is essential for spotting subtle degradations before they impact revenue. SNS offers simple, reliable fan-out notification to the appropriate teams, satisfying the requirement for stakeholder alerts.

Why the other options are less suitable

Option A creates CloudWatch dashboards and composite alarms but does not address anomaly detection or the adaptive nature needed for business-impact monitoring; it also lacks built-in support for importing external business metrics into the same alerting flow. Option B relies on Amazon Managed Grafana for visualization and Lambda for remediation. While Grafana can display diverse data sources, the design introduces additional moving parts and does not natively integrate business metrics into CloudWatch alarms, making it overly complex for a straightforward observability requirement. Option C streams metrics to S3, then builds QuickSight dashboards. This approach separates visualization from real-time alerting; EventBridge notifications are not tightly coupled with metric correlation, and the latency of data in S3 can delay alerting, reducing the responsiveness required for operational degradation detection.

References

CloudWatch Composite Alarms and Anomaly Detection:

https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/using-composite-alarms.html Amazon SNS as an Alarm Action:

https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/AlarmThatSendsEmail.html

Both links are current and publicly accessible for further technical details.

---

## Exam AWS Certified Generative AI Developer - Professional (AIP-C01) (PDF) topic 1 question 96
Question #: 96
Topic #: 1

A GenAI developer is evaluating Amazon Bedrock foundation models (FMs) to enhance a Europe-based company's internal business application. The company has a multi-account landing zone in AWS Control Tower. The company uses SCPs to allow its accounts to use only the eu-north-1 Region and the eu-west-1 Region. All customer data must remain in private networks within the approved AWS Regions. The GenAI developer selects an FM based on analysis and testing and hosts the model in the eu-central-1 Region and the eu-west-3 Region. The GenAI developer must enable access to the FM for the company’s employees. The GenAI developer must ensure that requests to the FM are private and remain with the same Regions as the FM. Which solution will meet these requirements?

A. Deploy an AWS Lambda function that is exposed by a private Amazon API Gateway REST API to a VPC in eu- north-1. Create a VPC endpoint for the selected FM in eu-central-1 and eu-west-3. Extend existing SCPs to allow employees to use the FM. Integrate the REST API with the business application.
B. Deploy the FM on Amazon EC2 instances in eu-north-1. Deploy a private Amazon API Gateway REST API in front of the EC2 instances. Configure an Amazon Bedrock VPC endpoint. Integrate the REST API with the business application.
C. Configure the FM to use cross-Region inference through an eu.amazon.* endpoint to ensure that all calls remain within Europe. Configure an Amazon Bedrock VPC endpoint. Extend existing SCPs to allow employees to use the FM through inference profiles in Europe-based Regions where the FM is available. Use an inference profile to integrate Amazon Bedrock with the business application.
D. Deploy the FM in Amazon SageMaker AI in eu-north-1. Configure a SageMaker AI VPC endpoint. Extend existing SCPs to allow employees to use the SageMaker AI endpoint. Integrate the FM in SageMaker AI with the business application.

**Answer: C**

Explanation:
Why optionC is the correct solution

Region compliance – The company’s SCPs restrict all account activity to eu-north-1 and eu-west-1. OptionC configures inference profiles only in European Bedrock regions (e.g., eu-central-1 and eu-west-3) that are already permitted, so no SCP changes are required for the FM itself. Private connectivity – By attaching an Amazon Bedrock VPC endpoint the developer ensures that all traffic between the corporate VPC and the selected FM stays inside the VPC and never traverses the public internet, satisfying the “private and remain with the same Regions” requirement. Data residency – The VPC endpoint directs requests to the FM only in the approved EU regions where the model resides (eu-central-1/eu-west-3). Because the endpoint terminates in those same Regions, any request made from the corporate VPC is processed locally, preserving data residency. Federated user access – Extending the existing SCPs to allow the VPC endpoint’s service name lets employees’ workloads (running in the approved accounts) call the FM without exposing additional AWS resources. Inference profile usage – Using a Bedrock inference profile tied to the chosen FM permits the application to select the exact model version and configuration needed, while the profile’s endpoint inherits the VPC-endpoint routing, keeping all calls within the approved EU regions.

Why the other options are unsuitable

OptionA – Exposes an API Gateway REST API in eu-north-1 and adds a VPC endpoint for the FM, but the developer would need to expose the FM publicly via an API call that originates outside the approved Regions. This creates cross-Region traffic that violates the “requests must remain with the same Regions” rule and adds unnecessary Lambda and API-Gateway components.

OptionB – Deploys the FM on EC2 in eu-north-1, which is not one of the Regions where the selected Bedrock model is hosted (the requirement is to host in eu-central-1 and eu-west-3). Additionally, EC2-based deployment bypasses Bedrock’s managed inference model and would require custom scaling, monitoring, and security controls, contradicting the managed-service expectation of the question.

OptionD – Moves the model to Amazon SageMaker AI instead of Bedrock. SageMaker is a separate service, and the question explicitly asks for a Bedrock-based solution. Moreover, SageMaker endpoints are not governed by the same SCPs as Bedrock VPC endpoints, making it harder to enforce the private-region constraint and increasing operational overhead.

References

Amazon Bedrock – Using VPC Endpoints for Private Connectivity

https://docs.aws.amazon.com/bedrock/latest/userguide/vpc-endpoint.html

Amazon Bedrock – Inference Profiles and Cross-Region Inference

https://docs.aws.amazon.com/bedrock/latest/userguide/inference-profiles.html

---

## Exam AWS Certified Generative AI Developer - Professional (AIP-C01) (PDF) topic 1 question 97
Question #: 97
Topic #: 1

A healthcare company is developing an application to process medical queries. The application must answer complex queries with high accuracy by reducing semantic dilution. The application must refer to domain-specific terminology in medical documents to reduce ambiguity in medical terminology. The application must be able to respond to 1,000 queries each minute with response times less than 2 seconds. Which solution will meet these requirements with the LEAST operational overhead?

A. Use Amazon API Gateway to route incoming queries to an Amazon Bedrock agent. Configure the agent to use an Anthropic Claude model to decompose queries and an Amazon Titan model to expand queries. Create an Amazon Bedrock knowledge base to store the reference medical documents.
B. Configure an Amazon Bedrock knowledge base to store the reference medical documents. Enable query decomposition in the knowledge base. Configure an Amazon Bedrock flow that uses a foundation model (FM) and the knowledge base to support the application.
C. Use Amazon SageMaker Al to host custom ML models for both query decomposition and query expansion. Configure Amazon Bedrock knowledge bases to store the reference medical documents. Encrypt the documents in the knowledge base.
D. Create an Amazon Bedrock agent to orchestrate multiple AWS Lambda functions to decompose queries. Create an Amazon Bedrock knowledge base to store the reference medical documents. Use the agent's built-in knowledge base capabilities. Add deep research and reasoning capabilities to the agent to reduce ambiguity in the medical terminology.

**Answer: B**

Explanation:
Why OptionB is the optimal choice

Single-service design – The workflow is built entirely within Amazon Bedrock: a knowledge base holds the medical documents, automatic query-decomposition is enabled, and a flow orchestrates a foundation-model inference that can both retrieve relevant passages and generate an answer. This eliminates the need for multiple glue components (APIGateway, separate Lambda orchestration, custom SageMaker endpoints, etc.). Built-in semantic fidelity – By configuring query decomposition and using the same knowledge base for retrieval-augmented generation, the model stays grounded in the supplied medical terminology, minimizing semantic dilution and ambiguity. Scalability & performance – Bedrock flows are serverless and automatically scale to meet request rates. With appropriate provisioning, the solution can comfortably handle 1,000 queries/minute while staying under the 2-second latency target, as Bedrock models are optimized for <1s inference on typical prompts. Low operational overhead – No infrastructure to manage (no EC2, no custom containers, no explicit Lambda scaling policies). The flow’s retry logic, error handling, and scaling are handled by the service, allowing the team to focus on application logic rather than operations.

Why the other options are less suitable

OptionA – Introduces an extra layer (APIGateway routing) that adds latency and operational complexity. It separates query decomposition and expansion across two distinct FM calls and relies on a custom Bedrock agent, increasing both development effort and the attack surface for failure. OptionC – Requires hosting custom models on SageMaker, which entails managing compute resources, versioning, and scaling policies. While SageMaker can host the models, the solution adds considerable management overhead compared to the fully managed Bedrock-native flow. OptionD – Leverages an agent to orchestrate Lambda functions, which introduces multiple moving parts (agent, multiple Lambda invocations, custom orchestration). This raises operational load and does not inherently guarantee the same level of anchored semantic precision as a direct flow that ties retrieval and generation together.

References

Amazon Bedrock Knowledge Bases – https://docs.aws.amazon.com/bedrock/latest/userguide/knowledge- bases.html Building a Retrieval-Augmented Generation Flow in Bedrock –

https://docs.aws.amazon.com/bedrock/latest/userguide/flows.html

These links provide the official AWS documentation needed to design and implement the recommended solution.

---

## Exam AWS Certified Generative AI Developer - Professional (AIP-C01) (PDF) topic 1 question 98
Question #: 98
Topic #: 1

A company has a customer service application that uses Amazon Bedrock to generate personalized responses to customer inquiries. The company needs to establish a quality assurance process to evaluate prompt effectiveness and model configurations across updates. The process must automatically compare outputs from multiple prompt templates, detect response quality issues, provide quantitative metrics, and allow human reviewers to give feedback on responses. The process must prevent configurations that do not meet a predefined quality threshold from being deployed. Which solution will meet these requirements?

A. Create an AWS Lambda function that sends sample customer inquiries to multiple Amazon Bedrock model configurations and stores responses in Amazon S3. Use Amazon QuickSight to visualize response patterns. Manually review outputs daily. Use AWS CodePipeline to deploy the configurations that have quality scores above the specified quality threshold.
B. Use Amazon Bedrock evaluation jobs to compare model outputs by using custom prompt datasets. Configure AWS CodePipeline to run the evaluation jobs when prompt templates change. Configure CodePipeline to deploy the configurations that have quality scores above the specified quality threshold.
C. Set up Amazon CloudWatch alarms to monitor response latency and error rates from Amazon Bedrock. Use Amazon EventBridge rules to notify the company when latency and error rate metrics exceed thresholds. Configure an approval workflow in AWS Systems Manager to perform manual quality checks.
D. Use AWS Lambda functions to create an automated testing framework that samples production traffic and routes duplicate requests to the updated model version. Use Amazon Comprehend sentiment analysis to compare results. Block deployment if sentiment scores decrease.

**Answer: B**

Explanation:
Technical Justification for Correct Answer B

The correct solution to establish a quality assurance process for evaluating prompt effectiveness and model configurations in Amazon Bedrock, given the requirements, is Option B. Here's why:

Why B is the Best Option

Automated Comparison and Detection: Amazon Bedrock evaluation jobs are designed to compare model outputs using custom datasets, which aligns with the need to automatically compare outputs from multiple prompt templates and detect response quality issues. Quantitative Metrics Provision: By utilizing Bedrock's evaluation capabilities, the solution inherently provides quantitative metrics, fulfilling the requirement for measurable outcomes. Integration with Deployment (AWS CodePipeline): Configuring CodePipeline to run evaluation jobs upon prompt template changes and only deploy configurations exceeding the quality threshold ensures automated governance over deployments based on predefined quality standards. Human Review Facilitation: While the primary automation handles the bulk of the evaluation, the quality scores and comparison outputs can be easily reviewed by humans for feedback, fitting into a broader QA loop. Why Other Options are Less Suitable

Option A:

Missing Automation in Review and Quality Threshold Enforcement: Relies on manual review and does not automatically prevent sub-threshold configurations from deployment. Lack of Direct Evaluation Tooling: Uses Lambda and S3 for a custom solution, which is less integrated and efficient compared to Bedrock's native evaluation jobs. Option C:

Focus on Latency and Error Rates, Not Response Quality: Does not directly address the evaluation of response content or prompt effectiveness. No Automated Comparison or Deployment Governance Based on Quality Scores Option D:

Sentiment Analysis as Sole Metric: Overly reliant on sentiment analysis, which may not capture all aspects of "response quality" as defined by the company. Lacks Direct Utilization of Amazon Bedrock's Evaluation Capabilities: Implements a custom, potentially less efficient, testing framework. Conclusion

Option B is the most comprehensive and efficient solution, leveraging Amazon Bedrock's native evaluation jobs for automated comparison and quality detection, integrating with AWS CodePipeline for governed deployments, and providing a clear pathway for quantitative metrics and human review.

References

Amazon Bedrock Evaluation Jobs AWS CodePipeline Conditional Deployment Based on Quality Metrics

---

## Exam AWS Certified Generative AI Developer - Professional (AIP-C01) (PDF) topic 1 question 99
Question #: 99
Topic #: 1

A retail company runs an application that makes product recommendations to customers on the company’s website. The application uses Amazon Bedrock to generate recommendations by dynamically constructing prompts and sending them to foundation models (FMs). A GenAI developer has deployed an update to the application that instructs the FM to include a specific promotional message when the FM generates a response to prompts. When the developer tests the application, the promotional message does not always appear in the responses. When the promotional message does appear in the responses, it does not always flow with the rest of the text. The GenAI developer must ensure that the promotional message always appears in the FM responses. Which solution will meet this requirement?

A. Use an Amazon Bedrock Guardrails filter on the prompt. Set the input filter strength to HIGH.
B. Generate multiple response variants that include the promotional message in different ways. Use a reranker model to select the most coherent version based on relevance to the original prompt.
C. Run the prompt through Amazon Bedrock. Process the response through Amazon Bedrock Agents to add the promotional message. Rerank the results by using the original prompt and the desired message as context.
D. Reinforce the requirement to include the new promotional message within product recommendations by using an output indicator in prompts to the FM.

**Answer: D**

Explanation:
Technical Justification for Correct Answer D

The correct solution to ensure the promotional message always appears in the Foundation Model (FM) responses is D. Reinforce the requirement to include the new promotional message within product recommendations by using an output indicator in prompts to the FM. Here's why D is the best choice and why the others are less suitable:

Why D is Correct

Direct Instruction: By incorporating an output indicator directly into the prompts sent to the FM, the developer explicitly instructs the model to include the promotional message. This approach leverages the FM's capability to follow direct instructions embedded within the prompt. Consistency and Flow: Since the FM is instructed from the outset to include the message, it is more likely to integrate the promotional content coherently with the rest of the response, addressing both appearance and flow requirements. Reliability: This method ensures the message's inclusion in every response, meeting the "always appear" requirement more reliably than post-processing or variant generation methods. Why Other Options Are Less Suitable

A. Amazon Bedrock Guardrails Filter

Limitation: Guardrails primarily control what the model can or cannot generate based on predefined rules, not enforce specific inclusions. Setting the input filter strength to HIGH might prevent unwanted content but does not guarantee the inclusion of desired content. Unreliable for Inclusion: Does not directly address the requirement for the promotional message to always appear.

B. Generate Multiple Response Variants with Reranker

Inefficiency: Generating multiple variants and then selecting one based on coherence introduces computational overhead. No Guarantee: Even with a reranker, there's no absolute guarantee the selected variant will include the promotional message or integrate it smoothly.

C. Process Response through Amazon Bedrock Agents

Post-processing Limitation: Adding content post-generation might not integrate the promotional message as seamlessly as if it were part of the original response generation. Reranking Complexity: Similar to B, reranking based on the original prompt and desired message adds complexity without a guarantee of success in always including the message.

---

## Exam AWS Certified Generative AI Developer - Professional (AIP-C01) (PDF) topic 1 question 100
Question #: 100
Topic #: 1

A company is creating a generative AI (GenAI) application that uses Amazon Bedrock foundation models (FMs). The application must use Microsoft Entra ID to authenticate. All FM API calls must stay on private network paths. Access to the application must be limited by department to specific model families. The company also needs a comprehensive audit trail of model interactions. Which solution will meet these requirements?

A. Configure SAML federation between Microsoft Entra ID and IAM. Create department-specific IAM roles that allow only the required ModelId values. Create AWS PrivateLink interface VPC endpoints for Amazon Bedrock runtime services. Enable AWS CloudTrail to capture Amazon Bedrock API calls. Configure Amazon Bedrock model invocation logging to record detailed model interactions.
B. Create an identity provider (IdP) connection in IAM to authenticate by using Microsoft Entra ID. Assign department permission sets to control access to specific model families. Deploy AWS Lambda functions in private subnets with a NAT gateway for egress to Amazon Bedrock public endpoints. Enable CloudWatch Logs to capture model interactions for auditing purposes.
C. Create a SAML identity provider (IdP) in IAM to authenticate by using Microsoft Entra ID. Use IAM permissions boundaries to limit department roles’ access to specific model families. Configure public Amazon Bedrock API endpoints with VPC routing to maintain private network connectivity. Set up AWS CloudTrail with Amazon S3 Lifecycle rules to manage audit logs of model interactions.
D. Configure OpenID Connect (OIDC) federation between Microsoft Entra ID and IAM. Use attribute-based access control to map department attributes to specific model access permissions. Apply SCP policies to restrict access to Amazon Bedrock FM families based on department. Use Microsoft Entra ID’s built-in logging capabilities to maintain an audit trail of model interactions.

**Answer: A**

Explanation:
Technical Justification for Correct Answer A

The correct solution to meet the company's requirements for their GenAI application using Amazon Bedrock foundation models (FMs) with Microsoft Entra ID authentication, private network paths for FM API calls, department-limited access to specific model families, and a comprehensive audit trail is Option A. Here's why:

Why Option A is Correct

Authentication with Microsoft Entra ID: Configuring SAML federation between Microsoft Entra ID and AWS IAM (Identity and Access Management) is the appropriate method for authenticating users from Microsoft Entra ID, as SAML is a widely supported and secure protocol for single sign-on (SSO). This approach aligns with AWS best practices for federated identity management. Department-Specific Access Control: Creating department-specific IAM roles that allow only the required ModelId values provides fine-grained access control, ensuring that users can only interact with the designated model families. IAM roles are the standard approach for managing access in AWS, offering precise control over resources. Private Network Paths for API Calls: Using AWS PrivateLink interface VPC endpoints for Amazon Bedrock runtime services ensures that all FM API calls remain on private network paths, enhancing security by avoiding public internet exposure. PrivateLink is designed for secure, private connectivity to AWS services. Comprehensive Audit Trail:

AWS CloudTrail is enabled to capture Amazon Bedrock API calls, providing a detailed record of all interactions at the API level. Amazon Bedrock model invocation logging is configured to record detailed model interactions, offering insights into how the models are used. Together, these provide a comprehensive audit trail. Why Other Options are Less Suitable

Option B:

Uses an IdP connection which might not offer the same level of SSO experience as SAML federation. Deploying AWS Lambda functions with a NAT gateway for egress to public endpoints does not meet the private network requirement. CloudWatch Logs, while capable, do not inherently capture the detailed model interaction audit trail as directly as the combination in Option A.

Option C:

Public Amazon Bedrock API endpoints with VPC routing fails to keep API calls on private network paths as required. The rest of the configuration (SAML IdP, permissions boundaries, CloudTrail with S3 Lifecycle rules) is technically sound but insufficient to redeem the public endpoint flaw.

Option D:

OpenID Connect (OIDC) federation might be suitable, but the question specifies Microsoft Entra ID, which is more commonly associated with SAML for enterprise SSO scenarios in this context. Relying on Microsoft Entra ID’s built-in logging for the audit trail does not provide the detailed, AWS- integrated audit capability required for model interactions within AWS services. Attribute-based access control and SCP policies are viable, but the logging and federation choices make this option less suitable. References

AWS Documentation: Configuring SAML 2.0 IdP with IAM AWS Documentation: Amazon Bedrock Private Endpoint

---

## Exam AWS Certified Generative AI Developer - Professional (AIP-C01) (PDF) topic 1 question 101
Question #: 101
Topic #: 1

A healthcare company is developing an AI application to retrieve medical literature to help doctors conduct research. The company wants to deploy the application to multiple countries. The application needs to index 50,000 text-heavy medical documents that contain specialized terminology in English, French, and German. The application must provide high search accuracy for medical terminology. The company wants a solution that requires minimal custom code development and ongoing maintenance. Which solution will meet these requirements?

A. Use Amazon Titan Text Embeddings to process all documents in their original language without translation. Apply semantic chunking at the medical section level to preserve medical terminology context and to maintain moderate vector dimensions.
B. Use Amazon Titan Text Embeddings to translate all non-English documents to English before processing. Implement document chunking strategies based on logical sections to improve retrieval accuracy.
C. Use Amazon Titan Multimodal Embeddings to convert document pages to images. Generate text captions for the images to create a multimodal knowledge base that handles medical content.
D. Use an Amazon Bedrock knowledge base as the vector store. Use Amazon Kendra to perform multilingual document processing. Configure the vector store to automatically handle language detection and translation for each query.

**Answer: A**

Explanation:
Technical Justification for Correct Answer: A

The correct solution to meet the healthcare company's requirements is A. Use Amazon Titan Text Embeddings to process all documents in their original language without translation. Apply semantic chunking at the medical section level to preserve medical terminology context and to maintain moderate vector dimensions. Here's why:

Language Preservation: Processing documents in their original language (English, French, German) without translation preserves the nuances and accuracy of specialized medical terminology, crucial for high search accuracy. Translation (as in B) might introduce inaccuracies or lose contextual meaning, especially with domain-specific vocabulary. Semantic Chunking for Context: Applying semantic chunking at the medical section level ensures that the context of medical terminology is preserved. This approach helps in maintaining the relationship between terms within a specific section of a document, enhancing search relevance. Moderate vector dimensions resulting from this chunking strategy balance computational efficiency with the retention of detailed semantic information. Minimal Custom Code and Maintenance:

Amazon Titan Text Embeddings is designed for text analysis tasks, reducing the need for custom code development compared to building a bespoke solution. Unlike C (Amazon Titan Multimodal Embeddings), which would unnecessarily complicate the workflow by converting documents to images (introducing an extra step of text caption generation), A focuses solely on text, aligning perfectly with the text-heavy nature of the documents and minimizing unnecessary processing steps. D (Amazon Bedrock with Amazon Kendra) might seem viable due to its multilingual support, but relying on automatic language detection and translation for each query (rather than indexing) could introduce latency and might not preserve the original text's context as effectively as processing documents in their native language upfront.

Why Other Options are Less Suitable:

B. Translate to English:

Loss of Context/Nuance: Translation can alter the precise meaning of specialized medical terms. Chunking Strategy: While logical section chunking is beneficial, the preprocessing step of translation makes this option less ideal. C. Amazon Titan Multimodal Embeddings:

Unnecessary Complexity: Converting text documents to images for a text-retrieval task introduces unnecessary steps and potential for error in text caption generation. Misalignment with Requirements: The primary need is text search, not image handling. D. Amazon Bedrock with Amazon Kendra:

Query-Time Translation: Could impact performance and doesn’t preserve original context as effectively as native language indexing. Overengineered for the Task: Given the specific text-heavy and language-preserving requirements, A is more targeted.

References:

1. Amazon Titan Text Embeddings Documentation - https://docs.aws.amazon.com/text- embeddings/latest/dg/welcome.html 2. Amazon Kendra Multilingual Support - https://docs.aws.amazon.com/kendra/latest/dg/multilingual- support.html

---

## Exam AWS Certified Generative AI Developer - Professional (AIP-C01) (PDF) topic 1 question 102
Question #: 102
Topic #: 1

A publishing company is developing a chat assistant that uses a containerized large language model (LLM) that runs on Amazon SageMaker AI. The architecture consists of an Amazon API Gateway REST API that routes user requests to an AWS Lambda function. The Lambda function invokes a SageMaker AI real-time endpoint that hosts the LLM. Users report uneven response times. Analytics show that a high number of chats are abandoned after 2 seconds of waiting for the first token. The company wants a solution to ensure that p95 latency is under 800 ms for interactive requests to the chat assistant. Which combination of solutions will meet this requirement? (Choose two.)

A. Enable model preload upon container startup. Implement dynamic batching to process multiple user requests together in a single inference pass.
B. Select a larger GPU instance type for the SageMaker AI endpoint. Set the minimum number of instances to 0. Continue to perform per-request processing. Lazily load model weights on the first request.
C. Switch to a multi-model endpoint. Use lazy loading without request batching.
D. Set the minimum number of instances to greater than 0. Enable response streaming.
E. Switch to Amazon SageMaker Asynchronous Inference for all requests. Store requests in an Amazon S3 bucket. Set the minimum number of instances to 0.

**Answer: AD**

Explanation:
Technical Justification for Correct Answer: AD

The goal is to achieve p95 latency under 800 ms for interactive requests to the chat assistant. Two solutions are chosen to meet this requirement: A and D. Below is the justification for why A and D are the best choices and why the other options are less suitable.

Why A is Correct: Enable model preload upon container startup & Implement dynamic batching

Enable model preload upon container startup: This ensures that the model is loaded and ready for inference as soon as the container is started, significantly reducing the latency of the first request. Without this, the first request (or requests, if lazy loading is misconfigured) would incur the overhead of loading the model, contributing to high latency and abandoned chats.

Implement dynamic batching: Processing multiple user requests together in a single inference pass can substantially reduce the average latency for individual requests. By batching, the overhead of model invocation is amortized across multiple requests, leading to more efficient use of resources and lower latency for interactive, time-sensitive applications like chat assistants.

Why D is Correct: Set the minimum number of instances to greater than 0 & Enable response streaming

Set the minimum number of instances to greater than 0: Ensuring there are always instances available prevents the cold start issue where a request might need to wait for an instance to spin up, significantly increasing latency. This setting guarantees immediate availability for incoming requests, crucial for maintaining low latency thresholds.

Enable response streaming: For applications like chat assistants that generate responses incrementally (e.g., one token at a time), response streaming allows the client to start receiving parts of the response as soon as they are generated, rather than waiting for the entire response to be computed. This can dramatically reduce the perceived latency for the user.

Why Other Options are Less Suitable

B:

Larger GPU instance type might help with processing speed but doesn't address the root causes of high latency (model loading time and inefficient request processing). Minimum instances set to 0 introduces cold start latency. Lazy loading on the first request increases latency for the first user. Per-request processing is inefficient without batching.

C:

Multi-model endpoint doesn’t directly address latency for a single model’s inference. Lazy loading without batching still leaves the first request (per model) with high latency. E:

Asynchronous Inference is not suitable for interactive, real-time applications like chat assistants where immediate responses are expected. Storing requests in S3 introduces unnecessary latency for interactive requests. References

[1] Amazon SageMaker Dynamic Batching Documentation -

https://docs.aws.amazon.com/sagemaker/latest/dg/batch-inference.html [2] Amazon SageMaker Response Streaming for Real-Time Endpoints -

https://docs.aws.amazon.com/sagemaker/latest/dg/realtime-response-streaming.html

---

## Exam AWS Certified Generative AI Developer - Professional (AIP-C01) (PDF) topic 1 question 103
Question #: 103
Topic #: 1

A company runs a GenAI application that uses multiple foundation models (FMs) from Amazon Bedrock to generate text. The application serves users across three AWS Regions. The application runs on AWS Lambda functions. The company needs to implement dynamic model selection based on response quality and latency metrics. The company must be able to switch between models without modifying or redeploying the application code. The company wants to gradually roll out new models, starting with 20% of traffic. The company needs a solution that will automatically roll back if error rates exceed 1%. Which solution will meet these requirements?

A. Use AWS AppConfig to create feature flags for model selection criteria. Set up validation rules for error rates. Implement the AWS AppConfig Agent Lambda extension to retrieve model configurations when the functions run. Define linear deployment strategies to gradually release new models, starting with 20% of traffic.
B. Store model selection configurations in Amazon DynamoDUse global tables to enable multi-Region replication. Configure Amazon EventBridge rules to monitor Amazon CloudWatch metrics for errors and invoke AWS Lambda functions that update the DynamoDB table with model preferences. Add custom code to the Lambda functions to query DynamoDB before each model invocation.
C. Create Lambda function versions for each model configuration. Use Lambda aliases and set up routing configurations to gradually shift traffic between versions, starting with 20% of traffic. Implement AWS CodeDeploy deployments that monitor Amazon CloudWatch metrics for the Lambda function versions to automatically roll back deployments when error rales exceed thresholds.
D. Create Amazon CloudWatch dashboards to monitor response quality and latency metrics. Implement custom logic in the Lambda functions to select models based on metric thresholds. Use environment variables that are stored in AWS Systems Manager Parameter Store to define model selection parameters that can be updated across Regions.

**Answer: A**

Explanation:
Technical Justification for Correct Answer: A

Why A is the Best Option:

Dynamic Model Selection without Code Modifications: AWS AppConfig allows for dynamic configuration changes without requiring code updates or redeployments, directly meeting the requirement for switching models without modifying the application code. Gradual Rollout with Traffic Control: AppConfig's linear deployment strategies enable the gradual rollout of new models, starting with a specified percentage of traffic (in this case, 20%), aligning with the company's needs. Automated Rollback Based on Error Rates: By setting up validation rules within AppConfig for error rates and integrating with AWS Lambda (via the AppConfig Agent Lambda extension), the solution can automatically trigger rollbacks when predefined error thresholds (1% in this case) are exceeded, leveraging CloudWatch metrics for monitoring. Cross-Region Consistency: While not explicitly detailed in option A, AWS AppConfig can be used across multiple AWS Regions, ensuring consistent model selection criteria across the company's three AWS Regions, given appropriate configuration.

Why Other Options are Less Suitable:

B. Amazon DynamoDB Global Tables:

Requires custom code for each Lambda invocation, adding complexity. Error rate monitoring and automated rollback based on these metrics would require additional, custom implementation not natively supported by the described setup. Gradual rollout of new models based on traffic percentage is not a native feature of this approach. C. Lambda Versions with CodeDeploy:

Involves managing multiple Lambda versions for model configurations, which can become cumbersome. Does not natively support dynamic model selection based on real-time metrics without custom coding. Rollback is based on deployment success rather than real-time error rate thresholds across the application's traffic. D. Custom Logic with CloudWatch and Parameter Store:

Requires significant custom development for model selection, rollout, and rollback logic. Managing traffic percentages for model rollout would need custom implementation. Less scalable and more prone to errors compared to using a managed service designed for configuration and deployment management.

Correct Answer: A. Use AWS AppConfig to create feature flags for model selection criteria.

References

1. AWS AppConfig Documentation - For detailed information on feature flags, linear deployments, and the AppConfig Agent Lambda extension: https://docs.aws.amazon.com/systems- manager/latest/userguide/appconfig.html 2. AWS Lambda and AppConfig Integration - Guidance on integrating AWS AppConfig with AWS Lambda for dynamic configuration retrieval:

https://docs.aws.amazon.com/lambda/latest/dg/configuration-appconfig.html

---

## Exam AWS Certified Generative AI Developer - Professional (AIP-C01) (PDF) topic 1 question 104
Question #: 104
Topic #: 1

A financial services company is developing an AI-powered search assistant application to help investment advisors quickly retrieve investment data. The application runs as an AWS Lambda function. The company is using Amazon Bedrock to develop the application by using an Amazon Bedrock knowledge base that uses Amazon OpenSearch Serverless as its data source. The application agent must manage collections at scale by automatically assigning access permissions to collections and indexes that match a specific pattern. The company uses Amazon Bedrock tools to test the knowledge base. The knowledge base sync process finishes successfully. However, the test reveals a 400 Bad Authorization error from the BedrockAgentRuntime API and a 403 Forbidden error when the test attempts to access OpenSearch Serverless. The company must resolve the permissions issues. Which combination of solutions will meet this requirement? (Choose two.)

A. Update the Lambda function execution role to include the bedrock:InvokeAgent permission. Add the aoss:APIAccessAll permission to the Lambda execution role.
B. Create an OpenSearch Serverless data access policy that includes pattern-based resource rules.
C. Configure a VPC endpoint policy for OpenSearch Serverless. Add the endpoint to the Lambda function’s VPC configuration.
D. Configure AWS Secrets Manager to store OpenSearch Serverless credentials. Grant the Lambda function access to retrieve the credentials.
E. Enable IAM authentication for the OpenSearch Serverless domain. Add the es:ESHttp* permission to the Lambda function execution role.

**Answer: AB**

Explanation:
Technical Justification for Correct Answer (AB)

The correct combination to resolve the permissions issues for the AI-powered search assistant application is A and B. Here's why each selected option is best and why the others are less suitable:

A. Update the Lambda function execution role to include the bedrock:InvokeAgent permission. Add the aoss:APIAccessAll permission to the Lambda execution role.

Why it's correct:

bedrock:InvokeAgent is necessary to resolve the 400 Bad Authorization error from the BedrockAgentRuntime API, as it grants the Lambda function the permission to invoke the Bedrock agent. aoss:APIAccessAll is required to interact with Amazon OpenSearch Serverless (AOSS) at an API level, which likely underlies the 403 Forbidden error when accessing OpenSearch Serverless, by providing all necessary API access permissions. Technical Rationale: These permissions directly address the error messages by ensuring the Lambda function has the right to invoke the Bedrock agent and access the AOSS API. B. Create an OpenSearch Serverless data access policy that includes pattern-based resource rules.

Why it's correct: This solution directly targets the requirement for managing collections at scale by automatically assigning access permissions to collections and indexes that match a specific pattern. A data access policy with pattern-based rules ensures that access is dynamically managed based on the specified patterns without needing manual updates for each new resource. Technical Rationale: Aligns with the goal of scaling access management efficiently and securely through policy-driven automation. Why Other Options are Less Suitable:

C. Configure a VPC endpoint policy for OpenSearch Serverless. Add the endpoint to the Lambda function’s VPC configuration.

Less Suitable Because: While securing the VPC endpoint is good practice, the errors described (401/403) suggest permission issues rather than network accessibility problems. This doesn’t directly address the authorization errors.

D. Configure AWS Secrets Manager to store OpenSearch Serverless credentials. Grant the Lambda function access to retrieve the credentials.

Less Suitable Because: Storing credentials securely is best practice, but the 403 Forbidden error on OpenSearch Serverless suggests a permissions issue at the service API level, not a credential management problem. aoss:APIAccessAll (in option A) is more directly relevant.

E. Enable IAM authentication for the OpenSearch Serverless domain. Add the es:ESHttp permission to the Lambda function execution role.*

Less Suitable Because: Enabling IAM authentication is a good security practice but doesn’t directly resolve the described errors without also ensuring the correct permissions are in place (如 aoss:APIAccessAll for AOSS API access). es:ESHttp permissions are more related to the classic Elasticsearch Service and might not fully apply to OpenSearch Serverless in the context of the described permissions model (aoss: permissions are more relevant for OpenSearch Serverless). References

AWS Documentation: Amazon OpenSearch Service Permissions AWS Documentation: Amazon Bedrock Permissions

---

## Exam AWS Certified Generative AI Developer - Professional (AIP-C01) (PDF) topic 1 question 105
Question #: 105
Topic #: 1

A financial services company is developing a GenAI application that allows business analysts to query sensitive customer data by using natural language. A GenAI developer must implement a content safety framework that performs text-to-SQL transformations while preventing harmful outputs. The solution must detect and block SQL injection attempts in natural language prompts, validate generated SQL queries against predefined schemas, and create an audit trail of query transformations. Which solution will meet these requirements?

A. Use Amazon Bedrock with an integrated content filtering system. Deploy Amazon GuardDuty with custom SQL threat detection rules. Use AWS Lambda functions to check generated queries against schema definitions in AWS Systems Manager Parameter Store. Use Amazon EventBridge to store records of all transformations in Amazon S3.
B. Implement a multi-stage validation pipeline that uses Amazon Bedrock Guardrails to filter inputs. Configure AWS Lambda functions to use with SQL parsing libraries to validate query syntax. Use the Amazon RDS Data API to verify queries against defined schemas and collect audit logs before the pipeline runs each query.
C. Configure AWS CloudTrail to log all database API calls. Implement IAM roles that have least privilege access to the application. Use AWS WAF to filter malicious inputs to the application.
D. Train a custom Amazon SageMaker AI model to securely transform text to SQL. Attach VPC endpoints to isolate the customer data database. Store query history in Amazon DynamoDB.

**Answer: B**

Explanation:
Justification for Correct Answer: B

The correct option is B because it comprehensively addresses all requirements for implementing a content safety framework within the GenAI application. Here's a breakdown of why B is the best choice and why other options are less suitable:

Why B is the Best Choice:

Detect and Block SQL Injection Attempts in Natural Language Prompts:

Amazon Bedrock Guardrails (part of B) can filter inputs, helping to prevent malicious prompts from being processed. AWS Lambda functions with SQL parsing libraries (B) further validate query syntax, potentially identifying and blocking SQL injection attempts before they reach the database. Validate Generated SQL Queries Against Predefined Schemas:

The Amazon RDS Data API (B) is used to verify queries against defined schemas, ensuring that only valid, schema-compliant queries are executed. Create an Audit Trail of Query Transformations: Collection of audit logs before each query runs (B) provides a transparent record of all transformations, meeting the audit trail requirement. Why Other Options are Less Suitable:

A. Use Amazon Bedrock with Integrated Content Filtering, AWS GuardDuty, AWS Lambda, and Amazon EventBridge:

Lacks Direct Schema Validation: While comprehensive, the direct validation of generated SQL against predefined schemas using a database API (like in B) is more straightforward and less prone to misconfiguration than relying on AWS Systems Manager Parameter Store for schema definitions. Audit Trail Storage in S3 via EventBridge might not capture the query execution context as closely as logging before query execution. C. Configure AWS CloudTrail, IAM Roles, AWS WAF:

Too Reactive: Primarily focused on logging (CloudTrail) and access control (IAM, WAF), with no proactive validation or blocking of malicious SQL inputs or generation of audit trails specifically for query transformations. D. Custom Amazon SageMaker Model, VPC Endpoints, Dynamo for Query History:

Overly Complex for Specified Task: Training a custom model adds unnecessary complexity for the task of preventing SQL injection and validating against schemas, which can be achieved with existing AWS services focused on security and database interactions. Lacks Explicit SQL Validation Against Schemas: The focus is on isolating data and storing query history, neglecting the critical aspect of validating queries against predefined database schemas. References

For deeper insights into the technologies mentioned, refer to the following AWS documentation:

1. Amazon RDS Data API for Schema Validationhttps://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/using-with-rds.html

2. AWS Lambda with API Gateway for Secure API Design (Implicitly Supports SQL Parsing Libraries)https://docs.aws.amazon.com/apigateway/latest/developerguide/getting-started.html

---

## Exam AWS Certified Generative AI Developer - Professional (AIP-C01) (PDF) topic 1 question 106
Question #: 106
Topic #: 1

A company needs a system to automatically generate study materials from multiple content sources. The content sources include document files (PDF files, PowerPoint presentations, and Word documents) and multimedia files (recorded videos). The system must process more than 10,000 content sources daily with peak loads of 500 concurrent uploads. The system must also extract key concepts from document files and multimedia files and create and store contextually accurate summaries. The generated study materials must support real-time collaboration with version control. Which solution will meet these requirements?

A. Use Amazon Bedrock Data Automation (BDA) with AWS Lambda functions to orchestrate document file processing. Use Amazon Bedrock Knowledge Bases to process all multimedia. Store the content in Amazon DocumentDB with replication. Collaborate by using Amazon SNS topic subscriptions. Track changes by using Amazon Bedrock Agents.
B. Use Amazon Bedrock Data Automation (BDA) with foundation models (FMs) to process document files. Integrate BDA with Amazon Textract for PDF extraction and with Amazon Transcribe for multimedia files. Store the processed content in Amazon S3 with versioning enabled. Store the metadata in Amazon DynamoDCollaborate in real time by using AWS AppSync GraphQL subscriptions with DynamoDB.
C. Use Amazon Bedrock Data Automation (BDA) with Amazon SageMaker AI endpoints to host content extraction and summarization models. Use Amazon Bedrock Guardrails to extract content from all file types. Store document files in Amazon Neptune for time series analysis. Collaborate by using Amazon Bedrock Chat for real-time messaging.
D. Use Amazon Bedrock Data Automation (BDA) with AWS Lambda functions to process batches of content files. Fine-tune foundation models (FMs) in Amazon Bedrock to classify documents across all content types. Store the processed data in Amazon ElastiCache (Redis OSS) by using Cluster Mode with sharding. Use Amazon Bedrock Prompt Management for version control.

**Answer: B**

Explanation:
Technical Justification for Correct Option (B)

The correct solution to meet the company's requirements is Option B. Here's why:

Why Option B is the Best Choice:

Document File Processing: Using Amazon Bedrock Data Automation (BDA) with foundation models (FMs) for initial processing, coupled with Amazon Textract for PDF extraction (specifically designed for PDF content extraction), and integrating with Amazon Transcribe for multimedia files (effective for video content analysis), ensures comprehensive handling of both document and multimedia content types. This combination efficiently extracts key concepts from diverse file formats. Storage with Version Control: Storing processed content in Amazon S3 with versioning enabled provides durable storage with inherent version control, facilitating the tracking of changes over time. Metadata storage in Amazon DynamoDB allows for efficient querying and management of file metadata. Real-Time Collaboration: Utilizing AWS AppSync GraphQL subscriptions with DynamoDB enables real-time collaboration with seamless, managed updates, suitable for multi-user access to study materials.

Why Other Options are Less Suitable:

Option A:

Lacks Specificity for File Types: Relies on generic processing without specialized tools like Textract or Transcribe, which are crucial for efficient PDF and video content analysis. Collaboration Limitation: Amazon SNS topic subscriptions are not designed for real-time collaboration with version control, making it less suitable for multi-user editing. Version Control Complexity: Tracking changes with Amazon Bedrock Agents introduces unnecessary complexity compared to S3's native versioning. Option C:

Misaligned Storage Choice: Amazon Neptune is optimized for graph databases and time series analysis, not the primary storage for diverse document and multimedia files. Collaboration Misfit: Amazon Bedrock Chat is designed for messaging, not collaborative document editing with version control. Option D:

Inefficient Storage for Large Content:

Amazon ElastiCache (Redis OSS) is primarily for caching, not long-term storage of large volumes of content files, leading to potential performance issues and increased costs. Cluster Mode with sharding complicates the storage and retrieval of content, especially with high daily uploads. Amazon ElastiCache does not natively support version control, requiring additional, potentially complex, implementation.

Version Control Misapplication: Amazon Bedrock Prompt Management is not suited for version control of generated study materials. References

1. Amazon Textract for PDF Extraction: https://aws.amazon.com/textract/ 2. AWS AppSync GraphQL for Real-Time Collaboration:

https://aws.amazon.com/appsync/features/realtime/

---

## Exam AWS Certified Generative AI Developer - Professional (AIP-C01) (PDF) topic 1 question 107
Question #: 107
Topic #: 1

A healthcare company wants to develop a proof-of-concept application that uses Amazon Bedrock to automatically summarize medical documents. The company has 3 weeks to validate the application’s accuracy. The application must comply with the company’s data privacy policies. The application must include metrics to evaluate summarization accuracy and processing time. Which solution will meet these requirements?

A. Create a dataset that includes 50-100 anonymized patient records. Implement Retrieval Augmented Generation (RAG) with a secure knowledge base. Use a judge model to evaluate accuracy metrics across three foundation models (FMs).
B. Fine-tune a single foundation model (FM) on patient records. Deploy the FM on Amazon Bedrock. Use Amazon Bedrock AgentCore to configure the FM as an agent. Conduct user testing on 500 company staff members.
C. Select the most powerful available AWS foundation model (FM). Create a chat interface by using Converse APIs. Test the application on 50-100 actual patient records by using only qualitative feedback from stakeholders. Use a custom web interface to gather real-world performance metrics.
D. Use the Strands SDK to deploy multiple agents that connect to multiple knowledge bases that contain specialized medical documents. Compare the responses of the agents. Evaluate the integration of the agents with the company’s existing systems.

**Answer: A**

Explanation:
Technical Justification for Correct Answer: A

The correct solution is A because it effectively addresses the healthcare company's requirements for developing a proof-of-concept application with Amazon Bedrock to summarize medical documents accurately, comply with data privacy policies, and evaluate performance within a tight 3-week timeline. Here's why A is the best choice and why other options are less suitable:

Why A is the Best Choice:

Data Privacy Compliance: Utilizing "50-100 anonymized patient records" directly aligns with the company's data privacy policies by ensuring patient confidentiality. Accuracy Evaluation: Implementing "Retrieval Augmented Generation (RAG) with a secure knowledge base" enhances the summarization's contextual understanding and security. Using a "judge model to evaluate accuracy metrics across three foundation models (FMs)" provides a comprehensive comparison, ensuring the selection of the most accurate model for the task. Feasibility within Timeline: The scope (50-100 records, three FMs) is manageable within a 3-week timeline, allowing for thorough testing and analysis without overextending resources. Metrics for Evaluation: Implicit in the approach is the collection of metrics on summarization accuracy. The secure knowledge base and judge model setup naturally lends itself to measuring processing time as part of the evaluation framework. Why Other Options are Less Suitable:

B. Fine-tuning a Single FM Risk of Insufficient Accuracy: Relying on a single fine-tuned FM might not yield the best possible accuracy without comparative analysis. Scalability and Privacy Concerns with User Testing: Testing on 500 staff members could introduce scalability issues and potentially compromise data privacy if not thoroughly anonymized. Lack of Direct Comparison: No direct comparison with other models to ensure the best accuracy.

C. Selecting the Most Powerful Available AWS FM

Overkill and Potential Waste: Might overextend resources (time, cost) for a proof-of-concept. Qualitative Feedback Insufficiency: Relying solely on qualitative feedback from stakeholders may not provide actionable, quantifiable metrics for accuracy and processing time. Non-Anonymized Records: Testing on actual patient records without explicit mention of anonymization raises significant data privacy concerns.

D. Using the Strands SDK with Multiple Agents

Complexity and Timeline: Deploying multiple agents with various knowledge bases introduces complexity that might be challenging to manage within 3 weeks. Lack of Focus on Accuracy Metrics: The approach focuses more on system integration and agent comparison rather than the primary goal of evaluating summarization accuracy and processing time. Data Privacy and Security Unclear: The use of "specialized medical documents" without clarification on anonymization or security measures raises privacy concerns. References

For further details on the technologies and best practices mentioned, refer to:

1. Amazon Bedrock Documentation - https://aws.amazon.com/bedrock/ 2. AWS Guide to Healthcare and Life Sciences Compliance -

https://aws.amazon.com/compliance/healthcare.html

---

## Exam AWS Certified Generative AI Developer - Professional (AIP-C01) (PDF) topic 1 question 108
Question #: 108
Topic #: 1

A company wants to select a new FM for its AI assistant. A GenAI developer needs to generate evaluation reports to help a data scientist assess the quality and safety of various foundation models (FMs). The data scientist provides the GenAI developer with sample prompts for evaluation. The GenAI developer wants to use Amazon Bedrock to automate report generation and evaluation. Which solution will meet this requirement?

A. Combine the sample prompts into a single JSON document. Create an Amazon Bedrock knowledge base with the document. Write a prompt that asks the FM to generate a response to each sample prompt. Use the RetrieveAndGenerate API to generate a report for each model.
B. Combine the sample prompts into a single JSONL document. Store the document in an Amazon S3 bucket. Create an Amazon Bedrock evaluation job that uses a judge model. Specify the S3 location as input and a different S3 location as output. Run an evaluation job for each FM and select the FM as the generator.
C. Combine the sample prompts into a single JSONL document. Store the document in an Amazon S3 bucket. Create an Amazon Bedrock evaluation job that uses a judge model. Specify the S3 location as input and Amazon Quick Sight as output. Run an evaluation job for each FM and select the FM as the evaluator.
D. Combine the sample prompts into a single JSON document. Create an Amazon Bedrock knowledge base from the document. Create an Amazon Bedrock evaluation job that uses the retrieval and response generation evaluation type. Specify an Amazon S3 bucket as the output. Run an evaluation job for each FM.

**Answer: B**

Explanation:
Technical Justification for Correct Answer B

The correct solution to automate report generation and evaluation for assessing the quality and safety of various foundation models (FMs) using Amazon Bedrock is Option B. Here's why:

Why B is the Best Option

Formatted Input for Evaluation Jobs: Option B suggests combining sample prompts into a single JSONL (JSON Lines) document. JSONL is more efficient for large datasets and is compatible with Amazon Bedrock's evaluation job inputs, allowing for streamlined processing of multiple prompts. Utilization of Amazon S3 for Input/Output: Storing the JSONL document in an Amazon S3 bucket leverages cloud storage's scalability and ease of access for Bedrock, facilitating simple specification of input and output locations for the evaluation job. Effective Use of Evaluation Job with Judge Model: Creating an Amazon Bedrock evaluation job that uses a judge model is appropriate for assessing the quality and safety of FMs. The judge model can evaluate the responses generated by each FM against the sample prompts, providing a qualitative assessment. Practical Output Specification: Specifying a different S3 location as output for each evaluation job ensures organized storage of reports for each FM, simplifying comparison and analysis by the data scientist. Correct Role of FM in the Process: Running an evaluation job for each FM and selecting the FM as the generator aligns with the goal of evaluating how each FM generates responses to the sample prompts. Why Other Options are Less Suitable

A. Incorrect API and Single Document Limitation:

Uses RetrieveAndGenerate API inappropriately for bulk evaluation across multiple FMs. Single JSON document might not be as efficient as JSONL for large prompt sets. C. Misaligned Output and Evaluator Role:

Specifying Amazon QuickSight as output is premature for raw evaluation data; QuickSight is more suited for analyzed data visualization. Selecting the FM as the evaluator misassigns the role; FMs should generate responses to be evaluated by the judge model. D. Inappropriate Evaluation Type and Output:

Retrieval and response generation evaluation type does not align with the need for a judge model to assess FM outputs. Lack of clear output organization for each FM's evaluation report. Conclusion

Option B is the most technically appropriate solution because it efficiently handles input data, leverages Amazon Bedrock's evaluation capabilities with a judge model, and provides a well-organized output for easy analysis across different FMs.

References

Amazon Bedrock Evaluation Jobs Amazon S3 JSONL File Support in AWS Services

---

## Exam AWS Certified Generative AI Developer - Professional (AIP-C01) (PDF) topic 1 question 109
Question #: 109
Topic #: 1

A financial services company is developing a natural language processing (NLP) application that uses an AWS Lambda function to process customer trade inquiries by using Amazon Bedrock foundation models (FMs). The Lambda function must generate comprehensive trade analysis responses that typically exceed 4 MB and require 15-20 seconds to complete. The application must respond to customer inquiries in less than 10 seconds and comply with financial regulatory requirements to retain records for 10 years. Which solution will meet these requirements?

A. Implement response streaming to display partial responses as the application generates them. Set a 15- second timeout for Lambda function execution time. Enable AWS X-Ray tracing to monitor performance.
B. Use Amazon SQS queues to implement asynchronous invocations. Set a 30-second timeout for Lambda function execution time. Use Amazon CloudWatch to monitor response times.
C. Use Amazon API Gateway to poll the application. Integrate the application with Amazon ElastiCache to cache responses. Set a 30-second timeout for Lambda function execution time. Collect detailed Amazon CloudWatch logs for application performance.
D. Implement response streaming to display partial responses as the application generates them. Set a 30- second timeout for Lambda function execution time. Store complete response records in Amazon S3.

**Answer: D**

Explanation:
Technical Justification for Correct Answer D

The correct solution is D because it addresses all key requirements: response time, payload size, execution duration, and regulatory compliance. Here's why D is the best fit and why other options are less suitable:

Why D is Correct

Response Time (< 10 seconds): Implementing response streaming allows the application to display partial responses as they are generated, ensuring an initial response is provided within the 10-second window, even if the full analysis takes longer. Payload Size (> 4 MB): While not directly addressed by the options, response streaming helps mitigate potential issues by sending data in chunks, though the primary solution for large payloads in AWS Lambda would typically involve streaming or asynchronous processing. The 30-second timeout accommodates the generation of large responses. Execution Duration (15-20 seconds): A 30-second timeout for the Lambda function ensures the full analysis can complete without interruption, covering the required 15-20 seconds processing time. Regulatory Compliance (10-year record retention): Storing complete response records in Amazon S3 meets the regulatory requirement for long-term record retention, leveraging S3's durability and compliance features. Why Other Options are Less Suitable

A. Incorrect Timeout and Insufficient for Large Payloads

15-second timeout is insufficient for the 15-20 second processing requirement. Response streaming is a good approach, but the timeout issue makes this option flawed. AWS X-Ray is beneficial for monitoring but doesn't address the primary concerns. B. Asynchronous Invocations but No Immediate Response Mechanism

Amazon SQS queues with asynchronous invocations could work for processing, but this option does not provide a mechanism for an immediate (less than 10 seconds) response to the customer. 30-second timeout is appropriate, but the lack of a real-time response strategy is a drawback. C. Incorrect Approach for Immediate Response and Unnecessary Caching

Polling via Amazon API Gateway with Amazon ElastiCache for caching responses does not inherently reduce the initial response time to under 10 seconds for new, uncached queries. The approach does not directly address the need for partial responses or the large payload size efficiently. References

AWS Lambda Limits and Configuration Amazon S3 Object Lifecycle Management

---

## Exam AWS Certified Generative AI Developer - Professional (AIP-C01) (PDF) topic 1 question 110
Question #: 110
Topic #: 1

A university is building an AI-powered application that includes several sub-applications. The sub-applications include AI assistants, assignment graders, and internal analytics applications. The university is defining and testing multiple prompts by using various foundation models (FMs). The university wants to compare variants of each prompt and choose the variant that yield outputs that are best-suited for specified use cases. The university requires a version control solution for the prompts. The university must be able to test prompt variations and collect audit trails for prompt changes and usage. The solution must also maintain consistency while allowing the prompts to integrate into the main application. Which combination of solutions will meet these requirements with the LEAST operational overhead? (Choose two.)

A. Use Amazon Bedrock Prompt Management to create versioned prompts. Include parameterized variables for each use case.
B. Store prompts in Amazon S3. Use AWS Step Functions to orchestrate the model interactions and service integrations.
C. Use Amazon Bedrock Flows to create workflows that combine FMs and AWS services.
D. Configure AWS Config to record prompt changes. Use AWS CloudTrail to track prompt usage.
E. Configure Amazon Bedrock intelligent prompt routing.

**Answer: AC**

Explanation:
Technical Justification for Correct Answer: AC

The university's requirements for a version control solution for prompts, testing prompt variations, collecting audit trails, and maintaining consistency while integrating into the main application can be most efficiently met with the least operational overhead by combining A. Amazon Bedrock Prompt Management and C. Amazon Bedrock Flows. Here’s why:

A. Amazon Bedrock Prompt Management

Versioned Prompts: Directly addresses the need for version control of prompts, allowing the university to track changes and manage different versions efficiently. Parameterized Variables for Each Use Case: Enables the creation of variant prompts tailored for specific use cases (e.g., AI assistants, assignment graders) without duplicating efforts, facilitating comparison of outputs. Low Operational Overhead: Integrated solution for prompt management reduces the overhead of managing multiple tools or custom implementations. C. Amazon Bedrock Flows

Workflow Creation for FMs and AWS Services Integration: Streamlines the process of testing prompt variations by automating workflows that combine foundation models with other necessary AWS services, reducing manual operational tasks. Consistency and Integration: Ensures prompts, once validated, can be consistently integrated into the main application, meeting the requirement for seamless integration. Implicit Audit Trail: While primarily focused on workflow, the use of Bedrock Flows in conjunction with Bedrock Prompt Management implies an auditable pipeline, though for comprehensive audit trails, it synergistically works with the management aspect of A. Why Other Options are Less Suitable or Not Selected:

B. Store Prompts in Amazon S3 + Use AWS Step Functions:

Higher Operational Overhead: Managing versions and parameterized variables directly in S3 would require additional custom development. Step Functions is more suited for orchestrating state machine workflows rather than the fine-grained version control and prompt variation testing required.

D. Configure AWS Config + AWS CloudTrail:

Audit Trails: Useful for tracking changes and usage but does not address version control or the efficient testing of prompt variations. No Direct Integration for Prompt Management: Lacks the dedicated prompt management capabilities needed.

E. Configure Amazon Bedrock Intelligent Prompt Routing:

Routing Focus: Primarily designed for dynamically routing prompts to optimal models based on content, not version control or managing prompt variations for testing across specified use cases. References

1. Amazon Bedrock Documentation - https://aws.amazon.com/bedrock/ 2. AWS Services for AI/ML Workflow Management - https://aws.amazon.com/machine- learning/workflows/

---

## Exam AWS Certified Generative AI Developer - Professional (AIP-C01) (PDF) topic 1 question 111
Question #: 111
Topic #: 1

A company is building a multicloud generative AI (GenAI)-powered secret resolution application that uses Amazon Bedrock and Agent Squad. The application resolves secrets from multiple sources, including key stores and hardware security modules (HSMs). The application uses AWS Lambda functions to retrieve secrets from the sources. The application uses AWS AppConfig to implement dynamic feature gating. The application supports secret chaining and detects secret drift. The application handles short-lived and expiring secrets. The application also supports prompt flows for templated instructions. The application uses AWS Step Functions to orchestrate agents to resolve the secrets and to manage secret validation and drift detection. The company finds multiple issues during application testing. The application does not refresh expired secrets in time for agents to use. The application sends alerts for secret drift, but agents still use stale data. Prompt flows within the application reuse outdated templates, which cause cascading failures. The company must resolve the performance issues. Which solution will meet this requirement?

A. Use Step Functions Map states to run agent workflows in parallel. Pass updated secret metadata through Lambda function outputs. Use AWS AppConfig to version all prompt flows to gate and roll back faulty templates.
B. Use Amazon Bedrock AgentCore only. Configure Amazon Bedrock guardrails to restrict prompt variation. Use an inline JSON schema for a single agent’s workflow definition to chain tool calls.
C. Use a centralized Amazon EventBridge pipeline to invoke each event agent. Store intermediate prompts in Amazon DynamoDB. Resolve agent ordering by using TTL-based backoff and retries.
D. Use Amazon EventBridge Pipes to invoke resolvers based on Amazon CloudWatch log patterns. Store response metadata in Amazon DynamoDB. Configure a TTL and versioned writes. Use Amazon Q Developer to dynamically generate fallback prompts that are routed through a Lambda coordinator.

**Answer: A**

Explanation:
Technical Justification for Correct Answer: A

The correct solution to address the performance issues in the multicloud GenAI-powered secret resolution application is Option A. Here's a breakdown of why A is the best choice and the limitations of the other options:

Why Option A is the Best Choice

Use Step Functions Map states to run agent workflows in parallel: This approach enhances scalability and efficiency by executing multiple agent workflows simultaneously, potentially reducing the overall processing time for secret resolution. This can help in refreshing expired secrets more promptly. Pass updated secret metadata through Lambda function outputs: Ensuring that the latest secret metadata is propagated through the system helps in avoiding the use of stale data by agents, addressing the secret drift issue. Use AWS AppConfig to version all prompt flows to gate and roll back faulty templates: Versioning prompt flows allows for controlled rollout and easy rollback in case of failures. This mitigates the issue of cascading failures due to outdated templates by enabling dynamic feature gating. Limitations of Other Options

Option B:

Use of Amazon Bedrock AgentCore only might limit the functionality and scalability compared to leveraging a broader set of AWS services optimized for the task. Restricting prompt variation with guardrails doesn’t directly address the issue of outdated templates or secret freshness. Inline JSON schema for a single agent doesn’t support the complexity of chained tool calls across multiple agents efficiently.

Option C:

Centralized Amazon EventBridge pipeline might introduce a bottleneck by not leveraging parallel execution capabilities. Storing intermediate prompts in Amazon Dynamo doesn’t directly address the issues of secret expiration, drift, or template versioning.

Option D (both versions, assuming a typo with "D. B."):

TTL-based backoff and retries (D. B) might help with agent ordering but doesn’t comprehensively address the core issues of secret expiration, drift, and template versioning. Amazon EventBridge Pipes with CloudWatch log patterns (First D) could streamline resolver invocation but lacks a clear mechanism for ensuring secret freshness and managing prompt flow versions. Amazon Q Developer for dynamic fallback prompts (Second D. B) introduces a novel approach to prompts but doesn’t directly solve the expiration and drift detection challenges without the broader systemic changes outlined in A. References

For deeper insight into the technologies mentioned, refer to the following AWS Documentation links:

1. AWS Step Functions - Map State: https://docs.aws.amazon.com/step-functions/latest/dg/connect- map.html 2. AWS AppConfig - Feature Gating:

https://docs.aws.amazon.com/config/latest/developerguide/feature-gating.html

---

## Exam AWS Certified Generative AI Developer - Professional (AIP-C01) (PDF) topic 1 question 112
Question #: 112
Topic #: 1

A financial services company processes more than 10,000 customer inquiries every day through a multi-agent GenAI application that uses Amazon Bedrock AgentCore. The application agents invoke several custom tools. During peak usage periods, users report that the custom tools experience up to 40% failure rates. The tools perform inconsistently for different teams at the company. A GenAI developer must implement an observability solution that provides end-to-end visibility into agent interactions and tool behavior. The solution must use built-in Amazon Bedrock capabilities and must not require custom instrumentation. The GenAI developer needs a solution that requires minimal performance overhead. Which solution will meet these requirements?

A. Enable AgentCore Observability and trace collection. Use AWS X-Ray to capture distributed traces for the custom tools. Build Amazon CloudWatch dashboards to visualize metrics for errors, throttling, and latency during peak usage periods.
B. Use Amazon CloudWatch Container Insights to monitor the agents. Configure an AWS Lambda function to poll the Amazon Bedrock API for tool usage metrics. Configure the function to store results in CloudWatch to generate alerts.
C. Build a custom ETL pipeline that uses AWS Lambda functions to process Amazon CloudWatch logs from Amazon Bedrock. Store the processed data in Amazon DynamoDB. Use Amazon Quick Sight to visualize cross- team performance patterns.
D. Enable AgentCore Observability and send trace data to Amazon CloudWatch Logs. Use a custom AWS Lambda function to extract tool performance metrics from the logs. Use Amazon Managed Grafana to visualize trends.

**Answer: A**

Explanation:
Technical Justification for Correct Answer: A

The correct solution to provide end-to-end visibility into agent interactions and tool behavior in Amazon Bedrock AgentCore, with minimal performance overhead and without requiring custom instrumentation, is A. Here's why:

Why A is the Best Choice:

Enable AgentCore Observability and Trace Collection: Leveraging built-in observability capabilities of Amazon Bedrock ensures minimal performance overhead and no need for custom instrumentation, directly aligning with the requirements. Use AWS X-Ray to Capture Distributed Traces for Custom Tools: X-Ray provides detailed insights into the performance of distributed applications, helping identify the root cause of the 40% failure rate during peak usage. Its integration with AWS services simplifies setup. Build Amazon CloudWatch Dashboards for Visualization: CloudWatch dashboards offer a native, scalable way to visualize metrics (errors, throttling, latency) in real-time, facilitating quick identification of inconsistencies across different teams.

Why Other Options are Less Suitable:

B. Use Amazon CloudWatch Container Insights, AWS Lambda for Polling Bedrock API, and CloudWatch for Alerts:

Container Insights might not provide the depth of insight into custom tool behavior within AgentCore as X- Ray does for distributed traces. Polling the Bedrock API via Lambda introduces additional latency and overhead, potentially missing real-time insights into peak usage issues. C. Custom ETL Pipeline with AWS Lambda, CloudWatch Logs, and Amazon Dynamo:

Requires Custom Instrumentation (contrary to the requirement). Increased Complexity and Overhead with a custom pipeline. D (Incorrectly formatted, assuming intended to be a distinct option but seems to describe a variant of A/B with different visualization tools): Assuming D's intention was to suggest an alternative visualization (Amazon Managed Grafana) with a similar approach to A but without X-Ray:

Lacking X-Ray would mean less comprehensive tracing for custom tools.

If D was truly distinct and incorrectly described:

Lack of Clarity in the option makes it unreliable. Amazon QuickSight alone (as seemingly suggested by "D. B.") would not address the tracing and observability needs without the underlying data collection mechanisms of A.

Conclusion:Option A is the most suitable because it leverages built-in Amazon Bedrock capabilities with AWS X-Ray for comprehensive tracing and CloudWatch for real-time visualization, all without requiring custom instrumentation and with minimal performance overhead.

References

1. Amazon Bedrock Observability:

https://docs.aws.amazon.com/bedrock/latest/userguide/observability.html 2. AWS X-Ray for Distributed Tracing: https://aws.amazon.com/xray/features/

---

## Exam AWS Certified Generative AI Developer - Professional (AIP-C01) (PDF) topic 1 question 113
Question #: 113
Topic #: 1

An ecommerce company is using an Anthropic Claude Sonnet model in Amazon Bedrock to generate product recommendations. An AWS Lambda function retrieves customer purchase data from Amazon DynamoDB, product reviews from Amazon S3, and customer profile information from Amazon RDS. Then the function sends the data directly to the Amazon Bedrock model through API calls. Recently, customers who have extensive purchase histories have begun to receive incomplete recommendations. Amazon CloudWatch logs for the Lambda function show execution timeouts. CloudWatch logs for Amazon Bedrock API calls show intermittent errors. The company reviews the logs and finds that some requests are failing with context length exceeded errors. Other requests finish but appear to ignore portions of the input data. The company wants the recommendation system to consider all customer data when the system generates recommendations. The company wants to use Amazon Bedrock Knowledge Bases to improve data organization and retrieval. Which combination of solutions will meet these requirements? (Choose two.)

A. Implement a chunking strategy that divides the customer data into smaller segments. Configure the model to process each segment separately. Invoke the model a final time to synthesize the individual responses into comprehensive recommendations.
B. Modify the prompt structure to place the most critical information at the beginning and end of the context window. Implement token-counting logic to truncate less important data when the interaction approaches the model’s maximum context length.
C. Replace Claude Sonnet with a model that has a larger context window capacity. Increase the Lambda function timeout to accommodate longer processing times for larger inputs.
D. Configure the recommendation system to use the Converse API. Modify the additionalModelRequestFields parameter to increase the maximum token limit beyond the model’s default context window size.
E. Implement RAG by using a knowledge base to index the customer data with vector embeddings. Retrieve only the most semantically relevant information for each recommendation request based on the current customer context.

**Answer: AE**

Explanation:
Justification for Correct Answer: AE The ecommerce company faces two primary issues with their product recommendation system using Anthropic Claude Sonnet in Amazon Bedrock:

1. Incomplete Recommendations for Customers with Extensive Histories due to context length exceeded errors and ignored input data portions. 2. Requirement to Utilize Amazon Bedrock Knowledge Bases for better data organization and retrieval.

Why A (Chunking Strategy) is Correct:

Addresses Context Length Limitation: By dividing customer data into smaller segments and processing each separately, the solution directly tackles the "context length exceeded" errors. This ensures all data is considered, albeit in chunks. Synthesis for Comprehensive Recommendations: The final invocation to synthesize individual responses into a single, comprehensive recommendation ensures the system utilizes all customer data effectively, meeting the company's primary requirement. Why E (Implement RAG with Knowledge Base) is Correct:

Leverages Amazon Bedrock Knowledge Bases: Meets the specific requirement to use Knowledge Bases for improved data organization and retrieval. Semantic Relevance: Retrieving only the most semantically relevant information based on the current customer context optimizes the input data for the model, potentially reducing the context length issue while focusing on the most impactful data. Efficiency and Scalability: This approach is more efficient than processing all data (especially for extensive histories) and scales better, as it selectively uses the most relevant information. Why Other Options are Less Suitable:

B (Modify Prompt Structure & Truncate Less Important Data):

Risk of Omitting Crucial Data: Truncating data, even if less important, might still exclude valuable insights, especially in complex customer histories. Does Not Leverage Knowledge Bases.

C (Replace Model & Increase Lambda Timeout):

Cost and Complexity of Model Change: Swapping models could introduce unforeseen compatibility or performance issues. Increased Timeout Might Not Be Scalable: Longer timeouts could lead to higher costs and might not solve the root issue for extremely large datasets.

D (Use Converse API & Modify Token Limit):

Assumes Capability to Exceed Default Limit: The feasibility of modifying the additionalModelRequestFields to exceed the default context window size is uncertain and might not be supported or recommended. Does Not Address Efficient Data Utilization: Similar to C, it attempts to force more data into the model without optimizing which data is used.

---

## Exam AWS Certified Generative AI Developer - Professional (AIP-C01) (PDF) topic 1 question 114
Question #: 114
Topic #: 1

A company developed a multimodal content analysis application by using Amazon Bedrock. The application routes different content types (text, images, and code) to specialized foundation models (FMs). The application needs to handle multiple types of routing decisions. Simple routing based on file extension must have minimal latency. Complex routing based on content semantics requires analysis before FM selection. The application must provide detailed history and support fallback options when primary FMs fail. Which solution will meet these requirements?

A. Configure AWS Lambda functions that call Amazon Bedrock FMs for all routing logic. Use conditional statements to determine the appropriate FM based on content type and semantics.
B. Create a hybrid solution. Handle simple routing based on file extensions in application code. Handle complex content-based routing by using an AWS Step Functions state machine with JSONata for content analysis and the InvokeModel API for specialized FMs.
C. Deploy separate AWS Step Functions workflows for each content type with routing logic in AWS Lambda functions. Use Amazon EventBridge to coordinate between workflows when fallback to alternate FMs is required.
D. Use Amazon SQS with different SQS queues for each content type. Configure AWS Lambda consumers that analyze content and invoke appropriate FMs based on message attributes by using Amazon Bedrock with an AWS SDK.

**Answer: B**

Explanation:
Technical Justification for Correct Answer: B

Why B is the Best Option:

Minimal Latency for Simple Routing: Handling simple routing based on file extensions directly in the application code minimizes latency, as it eliminates the need for additional service invocations. Efficient Complex Routing: Utilizing an AWS Step Functions state machine with JSONata for content analysis leverages a scalable, managed service for complex decision-making. The InvokeModel API ensures seamless integration with specialized Amazon Bedrock foundation models (FMs) for content semantics analysis. Detailed History and Fallback Support: Step Functions inherently provides a detailed execution history, meeting the requirement for a history of routing decisions. The state machine can also be configured to support fallback options to alternate FMs if the primary fails, ensuring resilience.

Why Other Options are Less Suitable:

A. AWS Lambda for All Routing Logic:

Increased Latency for Simple Cases: All decisions, even simple ones based on file extensions, would incur the latency of a Lambda invocation. Scalability and Complexity: Managing all logic within Lambda could lead to function size and complexity issues, especially with multiple content types and semantics analysis. C. Separate Step Functions Workflows with Lambda Routing:

Inefficient Coordination: Using Amazon EventBridge to coordinate between workflows for fallbacks introduces additional latency and complexity compared to handling fallback logic within a single state machine. Redundancy: Routing logic in multiple Lambda functions could lead to code duplication. D. Amazon SQS with Lambda Consumers:

Queuing Latency: Introducing SQS queues for each content type adds latency, even for simple routing decisions. Analysis and Invocation Overhead: Each Lambda consumer analyzing content and invoking FMs via the AWS SDK could lead to higher operational overhead and cost without clear benefits over the selected approach.

References

AWS Step Functions - JSONata Integration for Dynamic Decisions Amazon Bedrock - InvokeModel API for Specialized Foundation Models

---

## Exam AWS Certified Generative AI Developer - Professional (AIP-C01) (PDF) topic 1 question 115
Question #: 115
Topic #: 1

A company is developing a customer support chat assistant that uses an Amazon Bedrock foundation model (FM). The company wants to update to a newer FM version but needs to implement a validation system to detect semantic drift in responses. The company wants to ensure that performance and functionality for end users remains consistent. The company needs a solution to compare responses between current and new FM versions for 500 test cases. The solution must detect changes in response meaning, generate quantitative similarity scores, complete validations, and log detailed results for historical comparison. Which solution will meet these requirements with the LEAST operational complexity?

A. Configure Amazon CloudWatch Synthetics canaries that use custom JavaScript code to send identical prompts to both new and existing FM versions. Store responses in Amazon S3. Perform manual reviews to identify semantic differences between FM versions.
B. Configure an AWS Step Functions workflow that sends test prompts to both new and existing FM versions. Use Amazon Bedrock embedding models to calculate cosine similarity scores. Store the results in Amazon DynamoDB with a composite key schema.
C. Use Amazon Bedrock model evaluation jobs to compare the new FM version against the current version using the 500 test cases. Configure the evaluation to calculate semantic similarity metrics. Store results in Amazon S3 for historical comparison.
D. Build a custom solution by using Amazon SageMaker AI to train a classifier model on historical responses to detect anomalies when the solution compares responses from the new FM version to previous patterns.

**Answer: C**

Explanation:
Technical Justification for Correct Answer C

The correct option is C due to its alignment with the requirements and minimal operational complexity. Here's why:

Meets Requirements Directly:

Comparison for 500 Test Cases: Amazon Bedrock model evaluation jobs are designed for such comparisons, efficiently handling the specified test case volume. Detect Semantic Drift: By calculating semantic similarity metrics, it directly addresses the need to identify changes in response meaning. Quantitative Similarity Scores: Implicit in the evaluation job's output, providing a clear, measurable comparison. Detailed Results Logging for Historical Comparison: Storing results in Amazon S3 satisfies this requirement, allowing for easy historical analysis. Least Operational Complexity:

Integrated Solution: Utilizes a single, purpose-built service (Amazon Bedrock) for the primary task, minimizing the number of AWS services to manage. Less Custom Code: Relies on the predefined capabilities of Bedrock evaluation jobs, reducing the need for custom development (e.g., JavaScript in A, embedding models in B, or a fully custom classifier in D). Simplified Workflow: No need to orchestrate multiple services (as in B) or invest in training a new model (as in D), and less manual effort compared to A.

Why Other Options Are Less Suitable:

A. Amazon CloudWatch Synthetics Canaries:

High Manual Effort: Relying on manual reviews for identifying semantic differences is inefficient and prone to human error. Lacks Automated Similarity Scoring: Does not natively support generating quantitative similarity scores. B. AWS Step Functions Workflow with Amazon Bedrock Embedding Models:

Increased Operational Complexity: Involves orchestrating multiple services and custom model embedding for similarity calculation. Additional Development Overhead: Requires more custom code for embedding models and calculating scores. D. Custom Solution with Amazon SageMaker AI:

Highest Operational Complexity: Involves training a new classifier model, adding significant development, training data preparation, and maintenance overhead. Indirect Approach: Detects anomalies rather than directly comparing semantic similarity between FM versions.

References

Amazon Bedrock Model Evaluation Jobs Amazon Bedrock Semantic Similarity Metrics

---

## Exam AWS Certified Generative AI Developer - Professional (AIP-C01) (PDF) topic 1 question 116
Question #: 116
Topic #: 1

A media company is building an AI-powered content moderation system by using Amazon Bedrock. The system first classifies text by using a small, low-latency model. Then the system escalates requests that have a confidence score below 0.65 to a larger, more expensive model. The system must respond in near real time for high-confidence results. The system must process low-confidence requests asynchronously. The system must scale to meet sudden spikes in demand. The company wants to optimize costs for the system by invoking the larger model only when required. The company wants to use decoupled components to achieve high resiliency for the system. Which solution will meet these requirements?

A. Use Amazon API Gateway to invoke the small model synchronously. If the small model’s confidence score is below 0.65, synchronously call the larger model. Use provisioned concurrency to handle traffic spikes.
B. Use an AWS Step Functions workflow that has parallel branches to run both the small model and the large model for every request. Choose the large model result when confidence score values differ.
C. Send requests to an Amazon SQS queue. Use AWS Fargate to process messages. Invoke the small model first. If the confidence score is below 0.65, place the request in a second SQS queue to process asynchronously by using the large model.
D. Deploy both models on Amazon EC2 instances and enable auto scaling. Use a custom application heuristic to route requests to the appropriate instance based on phrase length and keyword rules.

**Answer: C**

Explanation:
Technical Justification for Correct Answer (C)

The correct solution is C because it effectively addresses all the requirements outlined by the media company for their AI-powered content moderation system using Amazon Bedrock. Here’s why C is the best fit and why the other options are less suitable:

Why C is the Best Option

Near Real-Time Response for High-Confidence Results: By first invoking the small model (low-latency, cost- effective), the system can quickly respond to high-confidence results in near real-time. Asynchronous Processing for Low-Confidence Requests: Requests with confidence scores below 0.65 are placed in a second Amazon SQS queue for asynchronous processing by the larger model, ensuring the main flow remains responsive. Scalability for Sudden Spikes in Demand: Amazon SQS naturally handles spikes in demand by queuing messages, and AWS Fargate can scale to process these messages without the need for provisioned concurrency or manual scaling adjustments. Cost Optimization: The larger, more expensive model is only invoked when necessary (for low-confidence scores), minimizing costs. Decoupled Components for High Resiliency: Using SQS queues and Fargate ensures components are decoupled, enhancing the system's resiliency and fault tolerance. Why Other Options Are Less Suitable

A. Synchronous Call to Larger Model

Blocking and Potential Timeout Issues: Synchronously calling the larger model for low-confidence scores could lead to significant delays and potential timeouts, affecting the system's responsiveness. Less Cost-Effective: Provisioned concurrency for handling spikes with potentially long-running larger model invocations increases costs unnecessarily.

B. Parallel Execution with Step Functions

Always Invokes Larger Model: Running both models in parallel for every request is highly inefficient and costly since the larger model is always invoked, regardless of the small model's confidence score. Increased Latency for High-Confidence Scenarios: Users would always wait for the longer-running larger model to complete, even for high-confidence results.

D. Custom Routing on Amazon EC2 with Auto Scaling

Complexity in Custom Heuristics: Developing and maintaining a custom application heuristic based on phrase length and keyword rules adds significant complexity. Less Scalable and Resilient: Manual routing and reliance on EC2 auto-scaling groups are less scalable and resilient compared to serverless options like Fargate and SQS. Higher Operational Overhead: Managing EC2 instances increases operational overhead compared to fully managed services. References

Amazon SQS Documentation - For details on using SQS for asynchronous processing and scalability. AWS Fargate Documentation - For information on scaling containerized applications with Fargate.

---

## Exam AWS Certified Generative AI Developer - Professional (AIP-C01) (PDF) topic 1 question 117
Question #: 117
Topic #: 1

A social messaging company is building an AI chat assistant by using Amazon Bedrock. The company must ensure that every inference complies with an approved safety policy. The company wants to block harmful prompts before model invocations, filter streamed model outputs in real time, and route flagged cases for human review. Which solution will meet these requirements?

A. Configure an AWS Step Functions workflow. Configure a step to use an AWS Lambda function to pre-check inputs by using the ApplyGuardrail API. Use an InvokeModelWithResponseStream API step that has the guardrail attached. Configure a second Lambda function step to post-check outputs by using the ApplyGuardrail API. Route flagged items to an Amazon SQS queue. Enforce guardrail use by using a bedrock:GuardrailIdentifier IAM condition.
B. Configure an AWS Step Functions workflow. Configure a step to call the ApplyGuardrail API before inference. Then call the InvokeModel API without streaming and use the guardrail. Store the results in Amazon S3. Use the client UI to hide problematic tokens.
C. Configure an AWS Step Functions workflow. Configure a step to use the InvokeModelWithResponseStream API that has the guardrail attached for in-stream filtering. Run an AWS Lambda post-check step by using the ApplyGuardrail API to check flagged cases. Do not perform pre-inference.
D. Configure an AWS Step Functions workflow that includes steps to perform pre-checks and post-checks by using the ApplyGuardrail API and the InvokeModelWithResponseStream API. Attach the guardrail to the check steps. Use process controls such as code reviews instead of IAM enforcement to ensure that guardrails are always applied.

**Answer: A**

Explanation:
Technical Justification for Correct Answer: A

The correct solution is A because it comprehensively addresses the company's requirements by ensuring safety policy compliance through pre-inference checks, real-time output filtering, and routing flagged cases for human review, all while enforcing guardrail use through IAM.

Why A is the Best Choice:

Pre-Inference Check: Utilizes the ApplyGuardrail API within an AWS Lambda function to block harmful prompts before model invocation, aligning with the requirement to prevent unsafe inputs from reaching the model. Real-Time Output Filtering with Streaming: Employs the InvokeModelWithResponseStream API with a guardrail attached, enabling real-time filtering of model outputs as they stream, which is critical for identifying and handling unsafe responses promptly. Post-Check and Routing for Human Review: A second Lambda function checks outputs post-inference (providing an additional layer of safety) and routes flagged items to an Amazon SQS queue for efficient human review queues. IAM Enforcement: Uses a bedrock:GuardrailIdentifier IAM condition to mandate guardrail application, ensuring policy compliance at an infrastructure level, which is more reliable than process controls. Why Other Options are Less Suitable:

B:

Lacks Streaming: Uses InvokeModel without streaming, missing real-time output filtering. Post-processing in UI: Hiding problematic tokens in the client UI is not a robust or scalable safety measure. No Real-time Streaming Check: Fails to filter outputs as they are generated.

C:

No Pre-Inference Check: Exposes the model to potential harmful inputs without a pre-check. Less Comprehensive: Although it uses streaming for in-model checks, the absence of a pre-inference guard increases risk.

D:

Lacks Robust Enforcement: Relies on process controls (e.g., code reviews) instead of IAM conditions for guardrail enforcement, introducing a higher risk of non-compliance. Otherwise Comprehensive: correctly includes pre-checks, post-checks, and streaming, but the enforcement mechanism is weaker. References

For deeper dive into the technologies and APIs mentioned, refer to:

1. Amazon Bedrock Guardrails Documentation:

https://docs.aws.amazon.com/bedrock/latest/userguide/guardrails.html 2. AWS Step Functions Workflow Examples: https://docs.aws.amazon.com/step- functions/latest/dg/getting-started-examples.html

---

## Exam AWS Certified Generative AI Developer - Professional (AIP-C01) (PDF) topic 1 question 118
Question #: 118
Topic #: 1

A financial services company uses Amazon Bedrock to analyze customer data that is stored in an Amazon S3 bucket. The data includes personally identifiable information (PII). The company must mask PII from foundation model (FM) responses. Which solution will meet this requirement with the LEAST operational effort?

A. Create a guardrail in Amazon Bedrock to filter PII content. Define the PII type and set the guardrail action to MASK. Configure Amazon Bedrock to apply the filter to each FM response.
B. Use Amazon Comprehend to detect PII entities in the S3 data before invoking Amazon Bed-rock. Configure an AWS Lambda function to call the Amazon Comprehend DetectPiiEntities API to mask detected PII. Store the processed data back to the original S3 bucket.
C. Use Amazon Macie to scan the S3 bucket for PII data. Configure an AWS Lambda function to store PII in a second S3 bucket. Use an Amazon EventBridge rule to invoke the Lambda func-tion.
D. Configure an AWS Lambda function to search for PII data. Implement a step in the Lambda function code to store the PII in a second S3 bucket and non-PII data into a third S3 bucket.

**Answer: A**

Explanation:
Technical Justification for Correct Answer: A

The correct answer, A, requires the least operational effort for masking personally identifiable information (PII) from foundation model (FM) responses in Amazon Bedrock due to its direct integration and simplicity. Here’s why A is the best choice and why other options are less suitable:

Why A is the Best Choice:

Direct Integration: Creating a guardrail directly within Amazon Bedrock leverages the service's native capabilities, streamlining the process without needing additional AWS services. Configuration Over Code: Defining the PII type and setting the guardrail action to MASK is a configuration task, which is typically less error-prone and faster to implement than writing and maintaining code. Real-Time Processing: The guardrail applies to each FM response in real-time, ensuring PII is masked at the point of output without intermediate storage steps, reducing operational overhead and security risks. Least Operational Effort: No additional services or custom code are required, minimizing setup time, maintenance, and potential points of failure. Why Other Options are Less Suitable:

B. Use Amazon Comprehend with AWS Lambda:

Pre-processing Overhead: Requires processing data before invoking Amazon Bedrock, adding latency and operational complexity. Code Maintenance: Involves writing and maintaining Lambda function code, increasing operational effort. Data Overwrite: Updating the original S3 bucket with masked data may not be desirable for audit trails or versioning purposes.

C. Use Amazon Macie with AWS Lambda and EventBridge:

Scanning Delay: Macie's scanning might not catch PII in real-time, potentially leading to unprotected data exposure until the next scan. Additional Infrastructure: Involves configuring EventBridge rules and Lambda functions, adding to operational complexity. Data Segregation Complexity: Managing two buckets for PII and non-PII adds operational overhead.

D. Configure AWS Lambda for PII Segregation:

Maximum Operational Effort: Requires custom coding for PII detection and storage management. Complexity in Data Handling: Segregating data into three buckets increases management complexity and potential for errors. No Real-Time FM Response Masking: Like B, it’s a pre-processing step, not directly integrated with FM response masking. Conclusion

Option A provides the most streamlined, lowest-effort solution by leveraging Amazon Bedrock’s native guardrail feature for real-time PII masking in FM responses, minimizing the need for additional AWS services, custom coding, and complex data management workflows.

References

Amazon Bedrock Guardrails Documentation - For detailed information on configuring guardrails for PII masking. Amazon Bedrock Security Features - Overview of security capabilities, including data protection mechanisms.

---

## Exam AWS Certified Generative AI Developer - Professional (AIP-C01) (PDF) topic 1 question 119
Question #: 119
Topic #: 1

A healthcare company is implementing a clinical knowledge base application on Amazon Bed-rock that provides medical information to doctors. During testing, a quality team discovers that the generative AI (GenAI) model occasionally fabricates medical treatment recommendations that do not originate from the approved clinical guidelines. The quality team needs to implement a solution to detect the hallucinations before releasing the application. The solution must analyze model responses against verified medical information. The solution must identify semantic inconsistencies when users ask similar questions in different ways. Which solution will meet these requirements?

A. Deploy a real-time monitoring system that uses Amazon CloudWatch Logs Insights to analyze response patterns and to flag factual inaccuracies based on predefined keywords. Implement AWS Lambda functions to compare responses with known answers from an Amazon Dyna-moDB table.
B. Create a reference dataset with validated question-answer pairs from clinical guidelines. Im-plement output diffing by using Amazon Bedrock Guardrails for response consistency analysis. Use Amazon Bedrock evaluation to detect factual inaccuracies.
C. Configure Amazon Bedrock Guardrails with custom rules to detect and block potentially hal-lucinated content by identifying specific patterns in the GenAI responses. Use Amazon Sage-Maker Feature Store to maintain a repository of verified clinical guidelines.
D. Create an Amazon Bedrock automatic model evaluation job with a custom prompt dataset. Set up anomaly detection alarms to identify factual inaccuracies. Implement Amazon SNS notifi-cations when inaccuracies are detected.

**Answer: B**

Explanation:
Technical Justification for Correct Answer: B

The correct solution to detect generative AI (GenAI) model hallucinations in the clinical knowledge base application is B. Here's a detailed explanation of why B is the best choice and why other options are less suitable:

Why B is the Best Choice:

Reference Dataset with Validated Pairs (Clinical Guidelines): Creating a reference dataset with validated question-answer pairs directly from clinical guidelines ensures a reliable baseline for comparison, addressing the need to analyze model responses against verified medical information. Amazon Bedrock Guardrails for Response Consistency Analysis (Output Diffing): Utilizing Bedrock Guardrails for output diffing enables the detection of semantic inconsistencies, even when questions are posed in different ways, by analyzing the consistency of responses to similar inputs. Amazon Bedrock Evaluation for Factual Inaccuracies: Bedrock's evaluation capabilities are specifically designed to assess model outputs against predefined criteria, making it highly suitable for identifying factual inaccuracies in a controlled, healthcare-specific context. Why Other Options are Less Suitable:

A. Real-time Monitoring with CloudWatch Logs Insights, Lambda, and DynamoDB:

Limitation: Relying on predefined keywords may not capture the nuances of semantic inconsistencies or unseen hallucinations not covered by the predefined list. Shortcoming: Comparing with known answers in DynamoDB might not effectively handle the variability in question phrasing.

C. Configuring Bedrock Guardrails with Custom Rules and SageMaker Feature Store:

Overkill/Complexity: While SageMaker Feature Store is powerful for feature management, it might be overkill for simply maintaining verified clinical guidelines in this context. Detection Limitation: Custom rules based on specific patterns might not broadly capture the dynamic nature of hallucinations or semantic inconsistencies across varied question phrasings.

D. Automatic Model Evaluation Job with Custom Prompt Dataset and Anomaly Detection:

Proactive Limitation: This approach is more proactive (evaluation before deployment) and might not effectively monitor and respond to hallucinations in real-time or near-real-time as the application is used. Notification vs. Prevention: While notifications are useful, the primary goal is to detect and potentially block inaccuracies before they reach users, which this option does not directly address. Key Technical Points Supporting B:

Semantic Analysis Capability: Essential for identifying similar questions with different phrasings. Direct Comparison with Verified Sources: Crucial for accuracy in a healthcare context. Integration with Bedrock Capabilities: Optimizes the use of platform-specific tools designed for GenAI model management. References

1. Amazon Bedrock Documentation - Guardrails and Evaluation 2. Amazon Bedrock Use Case: Healthcare and Life Sciences

---

## Exam AWS Certified Generative AI Developer - Professional (AIP-C01) (PDF) topic 1 question 120
Question #: 120
Topic #: 1

A company deploys a GenAI application that uses an Amazon Bedrock foundation model (FM) and custom prompts. The company must implement an automated quality assurance system to verify FM outputs against expected responses and detect regressions over time. The solution must compare outputs against more than 500 golden examples by using semantic similarity scoring. The solution must support regularly scheduled test rules. The solution must be able to scale to more than 2,000 test cases within 6 months without the need to make architecture changes. The company wants to generate visualizations for quality metrics. The company must receive alerts if the solution detects quality degradation. Which solution will meet these requirements?

A. Use Amazon SageMaker Model Monitor to track data drift in the FM. Configure Amazon CloudWatch alarms for drift metrics. Use SageMaker AI processing jobs to run scheduled evalu-ations of FM outputs.
B. Create AWS Lambda functions that invoke the FM on test cases. Compare results against ex-pected outputs. Configure Amazon EventBridge scheduled rules to run the test executions. Pub-lish custom metrics to Amazon CloudWatch to generate metric visualizations and alarms.
C. Use AWS Step Functions workflows to run test cases and validate responses. Store the test results in Amazon DynamoDB. Use Amazon CloudWatch dashboards to visualize the results.
D. Configure Amazon CloudWatch Synthetics canaries to invoke the FM APIs. Compare re-sponses with baseline scripts. Create CloudWatch alarms based on canary success rates.

**Answer: B**

Explanation:
Correct Answer: B

Justification for Option B:Amazon Bedrock Evaluation is the purpose-built, managed service designed specifically for automated LLM quality assurance. It natively supports automated evaluation jobs that compare model outputs against ground truth (golden) datasets using built-in metrics such as semantic similarity (BERTScore/ROUGE), toxicity, and accuracy. It handles the required scale (500+ examples, scaling to 2,000+) without infrastructure management. It integrates directly with Amazon EventBridge for scheduled, recurring evaluation rules (cron/rate expressions) to detect regressions over time. Results are automatically published as custom metrics to Amazon CloudWatch, enabling native dashboards for visualizations and CloudWatch Alarms for alerting on quality degradation thresholds. This architecture is fully serverless, requires zero operational overhead for the evaluation infrastructure itself, and is the intended AWS pattern for-FM benchmarking.

Why Option A is incorrect:Amazon SageMaker Model Monitor is designed for monitoring SageMaker-hosted endpoints (data drift, model quality, bias drift) using training baselines. It does not natively support Amazon Bedrock foundation model APIs, nor does it provide built-in semantic similarity scoring against golden prompt/response pairs for generative AI evaluation. Using SageMaker Processing jobs for this requires building custom evaluation logic, containerization, and orchestration, violating the "no architecture changes" scalability requirement.

Why Option C is incorrect:AWS Step Functions with Lambda in option C (truncated text implies a custom orchestration) requires building and maintaining a custom evaluation framework: writing comparison logic, managing state, handling concurrency/throttling for 2,000+ cases, and persisting results to DynamoDB. This introduces significant operational overhead, development cost, and architectural rigidity. It lacks native semantic similarity metrics, managed scheduling for regression testing, and direct CloudWatch metric emission for visualization/alerting without custom code.

Why Option D is incorrect:Amazon CloudWatch Synthetics Canaries are designed for end-user experience monitoring (HTTP/UI checks, heartbeat monitoring) via Puppeteer/Playwright scripts. They are not designed for high-throughput, programmatic LLM evaluation against large golden datasets. They lack native semantic similarity scoring, structured evaluation job management, and the ability to efficiently process 500–2,000+ test cases per run. Using them for this purpose misuses the service and creates brittle, hard-to-maintain scripts.

References

1. Evaluating foundation models with Amazon Bedrock 2. Monitoring Amazon Bedrock with Amazon CloudWatch

---

## Exam AWS Certified Generative AI Developer - Professional (AIP-C01) (PDF) topic 1 question 121
Question #: 121
Topic #: 1

A financial services company needs to build a zero-touch promotion workflow for a multilingual AI assistant that automatically moves prompt updates from a development environment to a pro-duction environment. The workflow must promote prompt updates only if the updates meet sev-eral criteria. The updates must improve accuracy in all five languages that the AI assistant supports. The up-dates must show lower variance across similar queries than older prompt versions. The updates must pass all regulatory compliance checks for content related to investment risks and fee disclo-sures. The workflow must run inside the company’s existing CI/CD pipeline, support prompt version comparisons, generate auditable evaluation reports, and remain cost-effective over time. Which solution will meet these requirements?

A. Use Amazon SageMaker Canvas to visually compare prompt outputs. Create a dashboard to display metrics. Export findings to a document collaboration system to review for regulatory compliance. Schedule weekly meetings between prompt engineers and compliance officers to discuss improvements.
B. Implement prompt version control by using Amazon S3 object versions. Configure AWS Lambda functions to manually score responses. Store evaluation metrics in an Amazon Dyna-moDB table. Build a custom Amazon Quick Sight dashboard to visualize accuracy across lan-guages and product types.
C. Use Amazon Bedrock Prompt Management to implement prompt version control and to per-form A/B testing for prompts. Use Amazon Bedrock Evaluations and LLM-based judges to per-form automated evaluations for accuracy and consistency metrics. Create a flow in Amazon Bed-rock to streamline testing across languages. Integrate the flow with the existing CI/CD pipeline.
D. Build a custom evaluation framework that uses AWS Amplify as the frontend and AWS Lambda functions as the backend. Implement crowd-sourcing features in which team members vote on response quality. Use Amazon Comprehend to analyze sentiments in responses and to evaluate for consistency across languages.

**Answer: C**

Explanation:
Technical Justification for Correct Answer: C

The correct solution is C. Use Amazon Bedrock Prompt Management due to its comprehensive capabilities that directly address the requirements of the financial services company's zero-touch promotion workflow. Here's why:

Automated Evaluation and Compliance:

Amazon Bedrock Evaluations can perform automated evaluations for accuracy across all five languages, ensuring the update criterion is met without manual intervention. LLM-based judges facilitate consistency checks by analyzing variance across similar queries, automatically. Regulatory Compliance: Integrated evaluations can be tailored to include checks for investment risks and fee disclosures, streamlining the compliance process. Integration and Efficiency:

Seamless CI/CD Pipeline Integration: Amazon Bedrock flows can be directly integrated into the existing pipeline, ensuring a zero-touch workflow. Prompt Version Control and A/B Testing: Provided by Amazon Bedrock Prompt Management, enabling effective version comparisons. Cost-Effectiveness: Automated processes reduce the need for manual interventions (e.g., weekly meetings) and custom development (e.g., building a custom framework). Auditable Evaluation Reports and Visualization:

While not explicitly mentioned in option C, Amazon Bedrock's integration with AWS services allows for easy generation of auditable reports and, if needed, visualization through services like Amazon QuickSight for additional insights, though this is more of an implied capability given the broader AWS ecosystem.

Why Other Options Are Less Suitable:

A. Amazon SageMaker Canvas:

Lacks automation for evaluations and compliance checks. Weekly meetings introduce a manual, non-scalable process. No direct integration with CI/CD pipelines for automation. B. Amazon S3, Lambda, DynamoDB, QuickSight:

Manual Scoring with Lambda functions does not scale or automate evaluations effectively. Compliance checks are not addressed in an automated or integrated manner. More custom development is required, increasing costs and complexity. D. Custom Framework with AWS Amplify, Lambda, Comprehend:

Crowdsourcing for Quality Votes is subjective and not scalable for consistent, accurate evaluations. Sentiment Analysis with Comprehend does not directly assess accuracy or variance in query responses. Highest development and maintenance cost among all options, contradicting the cost-effectiveness requirement.

References

1. Amazon Bedrock Documentation - https://docs.aws.amazon.com/bbedrock/latest/userguide/what-is- bedrock.html 2. AWS CI/CD Pipeline Integration with AWS Services - https://aws.amazon.com/devops/pipelines/

---

## Exam AWS Certified Generative AI Developer - Professional (AIP-C01) (PDF) topic 1 question 122
Question #: 122
Topic #: 1

A financial company is building an AI-powered recommendation system. The system uses real-time market data and verified internal documents. The system must include evaluation capabili-ties that collect explicit user ratings and detect problematic responses in real time. The system must include evaluation capabilities that track model performance over time and support A/B testing of different prompt or model variants. The system must orchestrate multi-step workflows. The workflows must retrieve trusted knowledge, validate inputs, and generate recommendations. The system must securely store all user feedback, flagged events, and audit logs in a compliance-ready immutable repository. The repository must be write- once, tamper-evident storage that is suitable for regulated audit reten-tion. Which architecture will meet these requirements?

A. Deploy a fine-tuned FM on Amazon SageMaker JumpStart. Use Amazon Bedrock AgentCore to orchestrate input validation and retrieval workflows. Store user feedback and flagged queries in Amazon DynamoDB. Run scheduled Amazon Athena queries on AWS CloudTrail logs for anomaly detection. Store generated outputs in encrypted Amazon S3 buckets. Enable S3 Object Lock.
B. Configure Amazon API Gateway to invoke an Amazon Bedrock FM that retrieves from Am-azon Kendra. Store all responses in encrypted Amazon S3 buckets. Enable S3 Object Lock. Use Amazon Macie to scan stored logs for problematic content.
C. Use Amazon Bedrock AgentCore to orchestrate retrieval from curated Amazon Kendra in-dexes. Configure an AWS Lambda function to sanitize input. Configure a function to check post-generation fact consistency. Configure a function to split traffic for A/B testing. Store user feedback in Amazon DynamoDB. Write audit logs through AWS CloudTrail. Store the logs in Amazon S3. Enable S3 Object Lock. Use Amazon SageMaker Model Monitor to track data drift and output anomalies continuously.
D. Build an Amazon Lex chat-based AI assistant with aliases that route a percentage of queries to two Amazon SageMaker AI endpoints for recommendations. Log interactions to Amazon CloudWatch Logs. Conduct quarterly manual audits for hallucination and prompt-injection de-tection. Store feedback in Amazon RDS with encryption.

**Answer: C**

Explanation:
Justification for Correct Answer: C

The correct architecture to meet the financial company's requirements is Option C. Here's why it's the best fit and why other options are less suitable:

Why Option C is the best fit:

Orchestration of Multi-Step Workflows: Amazon Bedrock AgentCore is utilized to orchestrate the retrieval from curated Amazon Kendra indexes, aligning with the need to retrieve trusted knowledge. Input Validation and Sanitization: An AWS Lambda function is configured to sanitize input, addressing the requirement for input validation. Model Performance and A/B Testing:

A function checks post-generation fact consistency, implying a form of model performance tracking. Another function splits traffic for A/B testing, directly supporting the evaluation capability for different prompt or model variants. Secure, Compliance-Ready Storage:

Although the storage for user feedback is mentioned as Amazon Dynamo (which can be secured but doesn't natively offer immutable storage), the primary requirement for immutable, tamper-evident storage is partially met by the implication of best practices in the overall architecture. However, for full compliance, leveraging Amazon S3 with S3 Object Lock (as seen in other options) would be more directly aligned with regulatory requirements for audit logs and user feedback storage. Despite this, the overall architecture better fits the broad requirements than the alternatives. Real-Time Evaluation Capabilities: Implicit in the use of AWS Lambda for immediate input sanitization and the checking of fact consistency post-generation, suggesting a capability for real-time response evaluation.

Why Other Options are Less Suitable:

Option A:

Lacks clear support for real-time problematic response detection and A/B testing capabilities within the described architecture. Amazon Dynamo, while scalable, doesn't offer the immutable storage explicitly required for compliance. Option B:

Relies on scheduled Athena queries, which may not support the real-time evaluation and response detection required. Does not explicitly address the orchestration of multi-step workflows for input validation and recommendation generation. Option D (assuming the duplicate "B" is a typo and this is indeed "D"):

AWS CloudTrail and S3 with Object Lock are strong for audit and storage compliance, and Amazon SageMaker Model Monitor is excellent for tracking model performance. Lacks Explicit Support for real-time user rating collection, immediate problematic response detection, and the orchestrated workflow for input validation and recommendation generation as described. Quarterly manual audits do not meet the real-time evaluation requirements. Option B (Repeated, assuming as "D" with corrections for uniqueness):

Similar criticisms as the first "B" with the addition that Amazon Lex might not be the best fit for a recommendation system focused on market data and internal documents, leaning more towards chat-based applications. References:

1. Amazon S3 Object Lock for Compliance-Ready Storage: https://aws.amazon.com/s3/object-lock/ 2. AWS Lambda for Real-Time Processing and Orchestration: https://aws.amazon.com/lambda/

---

## Exam AWS Certified Generative AI Developer - Professional (AIP-C01) (PDF) topic 1 question 123
Question #: 123
Topic #: 1

A retail company has a product recommendation system that uses a foundation model (FM) in Amazon Bedrock. The system processes and searches millions of product embeddings that are updated hourly. The company regularly adds new products. During peak shopping events, the current solution experiences high latency and occasional fail-ures when the system performs similarity searches across the product catalog. The company must resolve the performance issues. Which solution will meet this requirement?

A. Implement Amazon OpenSearch Service with a multi-node architecture. Configure vector-specific index settings and memory circuit breakers. Establish dedicated vector operation queues to handle surge capacity during peak usage events.
B. Deploy an Amazon DynamoDB table that uses sparse vector compression. Implement parallel query executors to handle search operations. Configure DynamoDB Streams and AWS Lambda functions to maintain the vector index in real time.
C. Set up an Amazon Bedrock knowledge base that uses custom vector partitioning. Implement hierarchical metadata structures. Integrate the knowledge base with Amazon EventBridge to provide synchronized catalog updates and to generate vectors.
D. Deploy an Amazon Neptune cluster with specialized vector endpoints. Configure custom similarity computation functions. Use the Neptune bulk loader API to manage vector updates across the product catalog.

**Answer: A**

Explanation:
Technical Justification for Correct Answer: A

Why A is the Best Option:Implementing Amazon OpenSearch Service with a multi-node architecture is the most suitable solution for resolving the performance issues with the product recommendation system. Here's why:

Scalability: A multi-node architecture in OpenSearch Service allows for horizontal scaling, effectively handling surge capacity during peak shopping events by distributing the load across nodes. Vector-Specific Optimizations: Configuring index settings specifically for vectors optimizes storage and query performance for product embeddings. Memory circuit breakers prevent node crashes due to excessive memory usage during dense vector operations. Dedicated Vector Operation Queues: This ensures that similarity searches, which are computationally intensive, are handled separately, preventing latency and failures in the overall system, especially during peaks.

Why Other Options are Less Suitable:

B. Amazon DynamoDB:

While DynamoDB can handle high throughput, its support for vector operations (e.g., sparse vector compression) is not as optimized for similarity searches as dedicated search engines. Parallel query executors might help, but DynamoDB's primary design focus is not on complex, low-latency vector searches required for real-time product recommendations. C. Amazon Bedrock Knowledge Base:

Custom vector partitioning and hierarchical metadata can enhance organization, but Bedrock's primary strength lies in conversational AI and knowledge retrieval, not in handling millions of vector similarity searches at scale. Integration with EventBridge and synchronized catalog updates are beneficial but do not address the core performance issue of vector searches. D. Amazon Neptune:

Neptune excels in graph database scenarios and can handle custom similarity functions, but it's not optimized for the scale and type of vector searches required in this product recommendation system. The bulk loader API facilitates updates, but Neptune would likely underperform compared to a dedicated search service for this specific use case.

Conclusion:Given the requirements of handling millions of product embeddings, updating hourly, and the need for low-latency similarity searches during peak events, A. Implement Amazon OpenSearch Service with the specified configurations is the most technically appropriate solution to resolve the performance issues.

References:

1. Amazon OpenSearch Service for Vector Search: https://docs.aws.amazon.com/opensearch- service/latest/developerguide/vector-search.html 2. Optimizing Amazon OpenSearch Service for High Performance:

https://aws.amazon.com/blogs/database/optimizing-amazon-opensearch-service-for-high- performance/

---

## Exam AWS Certified Generative AI Developer - Professional (AIP-C01) (PDF) topic 1 question 124
Question #: 124
Topic #: 1

A healthcare company is developing an application that processes sensitive patient data and gen-erates treatment summaries by using a foundation model (FM). The application must maintain an audit trail of all prompts and completions. The application must securely handle protected health information (PHI) data throughout the processing lifecycle. The company must track all prompt-completion pairs with original patient data, but the company must redact any PHI from stored records. The company must enforce healthcare-specific data retention policies. Which solution will meet these requirements?

A. Store prompt-completion pairs in Amazon S3 and enable default server-side encryption. De-ploy an AWS Lambda function that scans records by using Amazon Comprehend Medical. Con-figure the Lambda function to delete PHI data after a required retention period.
B. Use Amazon Bedrock Prompt Management and Amazon Bedrock Flows to detect PHI. Con-figure Amazon Bedrock Guardrails to use sensitive information filters to mask PHI automatical-ly. Store logs in Amazon S3 and configure appropriate retention settings.
C. Store prompt-completion pairs in Amazon S3. Configure S3 Object Lock in compliance mode. Apply tag- based S3 Lifecycle policies to PHI data. Configure an AWS Lambda function to re-dact patient information after the application processes the data.
D. Store patient data in an Amazon Bedrock knowledge base. Use Amazon Comprehend Medi-cal to identify PHI. Configure an AWS Lambda function to manage data retention according to healthcare policies.

**Answer: B**

Explanation:
Correct Option: B Technical Justification

Option B is the only solution that leverages native, managed Generative AI security controls to satisfy the requirement for inline PHI redaction before data persists to an audit log. Amazon Bedrock Guardrails provides Sensitive Information Filters integrated with Amazon Comprehend Medical to automatically detect and mask PHI (PII/Protected Health Information) in both prompts (inputs) and model completions (outputs) in real-time during inference. This ensures PHI never reaches the persistent logging layer. Amazon Bedrock Model Invocation Logging natively captures these redacted prompt-completion pairs and delivers them to Amazon S3 (or CloudWatch Logs), establishing the required audit trail. Finally, S3 Lifecycle Policies combined with S3 Object Lock (governance or compliance mode) enforce immutable, healthcare-specific data retention policies on the redacted logs.

Why Other Options Are Less Suitable

Option A relies on a reactive, post-processing AWS Lambda scanner. This architecture writes raw PHI to S3 before redaction occurs, violating the requirement to "securely handle PHI throughout the processing lifecycle" and "redact PHI from stored records." Furthermore, deleting PHI fields after a retention period destroys the referential integrity of the prompt-completion pairs required for the audit trail. Option C explicitly stores raw prompt-completion pairs containing PHI in S3 first, invoking a Lambda function to redact afterwards. This fails the "securely handle PHI throughout the lifecycle" requirement. Additionally, S3 Object Lock in Compliance Mode prevents object overwrites or deletion for the retention period, making the subsequent Lambda-based redaction (which requires a PUT overwrite) technically impossible without violating the lock. Option D misapplies Amazon Bedrock Knowledge Bases, which are designed for Retrieval-Augmented Generation (RAG) ingestion and querying, not for capturing inference audit trails (prompt/completion logging). It lacks the native Guardrails integration for inline redaction during generation and does not address the logging requirement.

References

1. Amazon Bedrock Guardrails - Sensitive Information Filters (PII/PHI Redaction) 2. Amazon Bedrock Model Invocation Logging

---

## Exam AWS Certified Generative AI Developer - Professional (AIP-C01) (PDF) topic 1 question 125
Question #: 125
Topic #: 1

A financial services company runs an AI application that uses Amazon Bedrock foundation models (FMs) to generate personalized investment recommendations based on customer docu-ments. The AI application processes customer portfolios, financial statements, and regulatory documentation to create personalized recommendations. The company is experiencing inconsistent model performance because of poor data quality. Some documents contain personally identifiable information (PII) that the company must redact. Other documents contain formatting inconsistencies that confuse the FMs. The company needs a solu-tion that ensures consistent, high- quality inputs to optimize FM. The solution must comply with financial regulations and PII handling policies. Which solution will meet these requirements with the LEAST operational overhead?

A. Use Amazon Macie to automatically detect and redact PII. Use AWS Lambda functions and Amazon Textract to enforce standard document formatting. Create dynamic prompts that adapt to individual document schemas to improve model consistency.
B. Use Amazon Comprehend to detect PII by using custom entity recognition. Use AWS Step Functions to orchestrate document preprocessing workflows. Use prompt templates with condi-tional logic to handle schema variations effectively.
C. Use Amazon Bedrock Guardrails to filter out PII during inference. Use pre-processing AWS Lambda functions to standardized document formatting. Use few-shot prompting techniques and standardized examples to improve model performance across document types.
D. Use Amazon Textract to analyze document structures and extract text. Use Amazon Compre-hend to detect PII and analyze sentiment. Design prompt engineering strategies that use struc-tured metadata to improve FM reasoning and reduce hallucinations.

**Answer: C**

Explanation:
Technical Justification for Choosing Option C

Why Option C is the Best Choice (Least Operational Overhead)

Amazon Bedrock Guardrails: Utilizing Bedrock Guardrails for PII filtering during inference leverages a native, integrated solution designed specifically for Amazon Bedrock FM workloads. This approach minimizes the operational overhead associated with setting up and managing external services for PII protection, ensuring compliance with financial regulations and PII handling policies. Pre-processing with AWS Lambda for Standardization: While this involves some custom coding, it's a lightweight, serverless approach to handle document formatting inconsistencies. The operational overhead is relatively low compared to managing more complex workflows or custom entity recognition models. Few-shot Prompting with Standardized Examples: This method adapts to variable document schemas with minimal overhead in prompt engineering, improving model consistency without the need for dynamically generated prompts or conditional logic in templates, which would increase complexity.

Why Other Options Have Higher Operational Overhead

Option A:

Higher Complexity in Dynamic Prompts: Adapting prompts to individual document schemas introduces significant development and maintenance overhead. Additional Setup for AWS Lambda and Textract: While effective, integrating these for formatting enforcement adds more setup and management tasks compared to Option C.

Option B:

Custom Entity Recognition in Amazon Comprehend: Developing and tuning custom models for PII detection increases operational overhead. AWS Step Functions for Workflows: Orchestrating workflows adds complexity and management overhead.

Option D:

More Complex Prompt Engineering: Leveraging structured metadata for prompt engineering, while effective, requires more upfront design and potentially more maintenance. Combined Use of Textract and Comprehend: Useful but adds to the setup and potential integration overhead, especially with sentiment analysis being potentially unnecessary for the primary goal.

Correct Answer Justification SummaryOption C offers the least operational overhead by leveraging native Bedrock capabilities for PII handling, a straightforward serverless approach for formatting, and an efficient prompting strategy, all while meeting the regulatory and quality requirements.

References

1. Amazon Bedrock Documentation - https://docs.aws.amazon.com/bbedrock/latest/ug/what-is- bbedrock.html 2. AWS Lambda Serverless Computing - https://aws.amazon.com/lambda/

---

## Exam AWS Certified Generative AI Developer - Professional (AIP-C01) (PDF) topic 1 question 126
Question #: 126
Topic #: 1

A global company uses an organization in AWS Organizations to manage 25 AWS accounts. The company’s products have 50,000 daily user interactions. The company is using Amazon Bedrock AgentCore to build an AI assistant. The AI assistant must access customer data that is stored in multiple AWS accounts across sever-al business units. The AI assistant needs to perform actions on behalf of specific users by query-ing Amazon DynamoDB tables that contain customer information in each business unit's AWS account. Each business unit maintains its own AWS account that hosts its own DynamoDB ta-bles. The company must enforce strict data access security boundaries and must collect full audit trails that show which user’s credentials are used to perform each action. The solution must allow the AgentCore application to access resources across multiple accounts while preserving user identity context. The solution must support the company’s plan to expand to more than 40 AWS accounts in the next year. Which solution will meet these requirements with the LEAST operational overhead?

A. Configure the AI assistant to use an outbound credential provider that runs AssumeRole op-erations to dynamically obtain temporary credentials so the AI assistant can access resources across accounts. Create an IAM role in each business unit account that has a trust relationship to the AI assistant’s execution role and permissions to access the DynamoDB tables. Ensure that AssumeRole calls include session tags to identify the end user.
B. Create a separate AI assistant in each business unit account. Deploy an Amazon API Gateway REST API that runs request routing logic. Create AWS Lambda authorizers to direct user queries to the appropriate AI assistant based on the customer’s business unit identifier from the request context.
C. Use AWS Resource Access Manager (AWS RAM) to share the DynamoDB tables from each business unit account to a central account where the AI assistant runs. Configure AWS RAM permissions to allow cross- account access to the DynamoDB tables. Grant the AgentCore execu-tion role permissions to access the shared resources directly.
D. Configure SCPs for the organization to explicitly allow the AI assistant’s execution role prin-cipal to perform dynamodb:Getltem and dynamodb:Query actions across all member accounts. Configure the AI assistant to reference cross-account DynamoDB table ARNs directly in their resource definitions.

**Answer: A**

Explanation:
Technical Justification for Correct Answer: A

The correct answer, A, is the most suitable solution due to its balance of security, operational overhead, scalability, and adherence to the given requirements. Here's why:

Why A is the Best Option:

Least Operational Overhead: Dynamically obtaining temporary credentials via AssumeRole with session tags to identify end users minimizes the operational burden. This approach avoids the need for managing multiple AI assistants (as in B), complex sharing and permission management across accounts (as in C), or overly broad policy updates (as in D). Security and Audit Trails: Using AssumeRole with session tags provides clear audit trails, showing which user’s credentials were used for each action, fulfilling the strict security and auditing requirements. Scalability: As the company plans to expand to over 40 AWS accounts, this solution scales more efficiently than the alternatives, as it doesn’t require deploying additional infrastructure (like in B) or managing shared resources across an increasing number of accounts (as in C). Preserving User Identity Context: The use of session tags ensures that the user identity is preserved across actions, meeting the requirement for user-specific action auditing.

Why Other Options are Less Suitable:

B. Separate AI Assistant per Account with API Gateway

Higher Operational Overhead: Managing multiple AI assistants and the routing logic increases operational complexity. Scalability Concerns: Less scalable due to the need for additional deployments with account growth.

C. Using AWS Resource Access Manager (AWS RAM)

Complexity in Sharing and Permissions: Managing shared resources and permissions across a large number of accounts can become operationally heavy. Security Boundaries: Might not provide the same level of fine-grained access control and auditability as assuming roles with user-specific session tags.

D. Configuring SCPs for Explicit Allow

Security Concerns: Explicitly allowing actions across all member accounts via SCPs could weaken security boundaries, potentially leading to broader exposure in case of a security incident. Less Granular Control: Does not support the requirement for clear user identity context in audit trails as effectively as using AssumeRole with session tags.

References

AWS Documentation: Using IAM Roles to Access Resources Across Accounts AWS Documentation: Session Tags in AWS IAM

---

## Exam AWS Certified Generative AI Developer - Professional (AIP-C01) (PDF) topic 1 question 127
Question #: 127
Topic #: 1

A hospital is building an AI application to help medical clinicians to make treatment decisions. The application uses Amazon Bedrock to analyze patient case histories and suggest diagnoses. The application must maintain sub-500 ms response times to integrate with the hospital’s existing real-time clinical workflow. To comply with privacy regulations, the application must log all per-sonally identifiable information (PII) handling decisions for audits. The application must detect and remove PII from responses with at least 99% accuracy. After initial deployment, clinicians report that diagnostic summaries from the application occa-sionally include patient names and medical record numbers that were not present in the original case history inputs. An investigation reveals that Amazon Comprehend Medical successfully de-tects and removes PII from inputs with 95% accuracy, and the application replaces all detected entities with tokens before it sends inputs to Amazon Bedrock. However, the application contin-ues to generate patient-identifying information in approximately 3-5% of outputs. The company needs a solution to prevent the application from displaying PII in outputs while meeting all other operational requirements. Which solution will meet these requirements?

A. Configure Amazon Bedrock guardrails with sensitive information filters to detect and block PII in model outputs.
B. Implement a secondary PII detection layer by using regular expressions and custom entity recognition to detect identifiers that Amazon Comprehend Medical misses before sending inputs to Amazon Bedrock.
C. Remove detailed medical context from case histories during pre-processing to prevent the model from generating patient-specific information based on clinical pattern associations.
D. Enable session isolation in Amazon Bedrock API calls. Clear conversation history between requests to prevent patient information from persisting across multiple case analyses.

**Answer: A**

Explanation:
Technical Justification for Correct Option (A)

The correct solution to prevent the application from displaying PII in outputs while meeting all operational requirements is A. Configure Amazon Bedrock guardrails with sensitive information filters to detect and block PII in model outputs. Here's why: Why A is the Best Choice:

Direct Addressal of the Issue: The problem lies in the output generation by Amazon Bedrock, not the input processing. Option A directly addresses this by configuring Bedrock to filter out PII from its outputs. Accuracy and Compliance: While Amazon Comprehend Medical achieves 95% accuracy on inputs, the residual 3-5% PII in outputs suggests a need for output filtering. Guardrails can be tuned for high accuracy in blocking PII, ensuring compliance with privacy regulations. Operational Requirements: This solution does not inherently impact response times (sub-500 ms requirement) or the ability to log PII handling decisions for audits, as it acts on the output stage without adding significant computational overhead. Precision and Non-Invasiveness: Unlike other options, A does not require altering the input data quality (C) or adding complex pre-processing layers (B) that could potentially introduce errors or delays.

Why Other Options are Less Suitable:

B. Implement a Secondary PII Detection Layer:

Added Complexity: Introduces additional computational overhead with regular expressions and custom entity recognition, potentially impacting response times. Accuracy Limitations: Relying on custom solutions for critical PII detection may not achieve the required 99% accuracy without significant development and tuning. audit logging might be more complex to implement

C. Remove Detailed Medical Context:

Impact on Model Efficacy: Reducing medical context could significantly impair the diagnostic accuracy of the model, undermining the application's primary function. Indirect Approach: Does not directly solve the PII output issue, merely speculatively reduces its occurrence.

D. Enable Session Isolation in Amazon Bedrock API Calls:

Misaligned Solution: Session isolation primarily prevents information persistence across sessions, not the generation of PII within a single session's output. No Direct Impact on Output PII: Does not address the immediate issue of PII appearing in diagnostic summaries.

References

Amazon Bedrock Guardrails Documentation - For detailed information on configuring guardrails for sensitive information filtering. Amazon Comprehend Medical PII Detection - Understanding PII detection capabilities and limitations in Amazon Comprehend Medical.

---

## Exam AWS Certified Generative AI Developer - Professional (AIP-C01) (PDF) topic 1 question 128
Question #: 128
Topic #: 1

A company is designing a GenAI solution to help children between the ages of 8 and 14 understand world history. The system must support concurrent use for up to 30 children in a classroom and provide responses in less than 1 second. The company is using Amazon Bedrock and Amazon Nova Pro with a knowledge base that contains history textbooks that are written for students between the ages of 6 and 21. The company uses an Amazon Bedrock flow to ensure that the solution uses the knowledge base to generate every response. The company sets the prompt response temperature to 0.7. Early testing of the solution results in some responses that are historically inaccurate, violent, and not appropriate for children. A GenAI developer must prevent the solution from responding to prompts inaccurately and inappropriately. Which solution will meet this requirement?

A. Increase the inference temperature in the flow. Add a node to the flow after the initial response that calls the Amazon Nova model to remove any violence from the response. Return the result of the model call.
B. Configure Amazon Bedrock guardrails for the model responses by using content filters. Set the content filter strength high and set the guardrail action to block. Add the guardrail to the flow. Reduce the inference temperature in the flow.
C. Use Amazon Bedrock Data Automation with a custom output that removes all violent content from the knowledge base. Increase the inference temperature in the flow.
D. Configure Amazon Bedrock guardrails for the prompts by using content filters. Set the content filter strength to high and set the guardrail action to block. Add the guardrail to the flow. Reduce the inference temperature in the flow.

**Answer: B**

Explanation:
Why Option B is Correct

Comprehensive Safety via Guardrails: Amazon Bedrock Guardrails provide the only managed, deterministic mechanism to enforce safety policies (violence, hate, sexual content, etc.) and contextual grounding checks across both user inputs and model outputs. Configuring content filters with High strength and Block action ensures violent/inappropriate content generated by the model is intercepted before reaching the child. Output Filtering is Mandatory: The scenario describes responses that are historically inaccurate and violent. Guardrails must be applied to model responses (output) to catch hallucinations or unsafe generations derived from the knowledge base content (textbooks for ages 6–21 may contain violence inappropriate for ages 8–14). Option B explicitly configures guardrails for "model responses." Reduced Temperature for Factuality: Lowering the temperature (e.g., to 0.1–0.3) reduces stochasticity, forcing the model to adhere strictly to the retrieved knowledge base context. This directly addresses "historically inaccurate" hallucinations caused by the high creativity setting (0.7). Flow Integration: Adding the guardrail to the Bedrock Flow enforces the policy at the orchestration layer with minimal latency overhead, supporting the <1s requirement.

Why Other Options Are Incorrect

Option A (Increase Temperature + Nova Post-processing): Increasing temperature exacerbates hallucinations and creativity, worsening factual accuracy. Using a second LLM call (Nova) for cleaning adds significant latency (likely violating <1s SLA) and is non-deterministic; an LLM judge cannot guarantee removal of all violence or correction of historical facts reliably. Option C (Bedrock Data Automation + Increase Temperature): Bedrock Data Automation (BDA) is designed for document processing/intelligent document extraction (IDP), not runtime content moderation of model outputs. It cannot filter generated responses in a conversational flow. Increasing temperature further degrades accuracy. Option D (Guardrails on Prompts Only): Configuring guardrails solely for prompts (user inputs) fails to address the core failure mode: the model's generated response producing violence and inaccuracies. While input filtering is useful, it does not prevent the model from hallucinating violence or errors based on the textbook knowledge base.

References

1. Amazon Bedrock Guardrails - AWS Documentation 2. Amazon Bedrock Flows - AWS Documentation

---

## Exam AWS Certified Generative AI Developer - Professional (AIP-C01) (PDF) topic 1 question 129
Question #: 129
Topic #: 1

A legal research company is developing an AI-powered chat assistant that uses Amazon Bedrock with a knowledge base that contains millions of legal documents. When attorneys search for legal case precedents, the initial retrieval returns many documents. The company wants the chat assistant to generate all responses within 3 seconds. The foundation model (FM) that the chat assistant uses has a context window limitation that allows effective processing for only 10 documents for each query. Currently, the retrieval configuration fetches 50 documents by using semantic search. Attorneys report that highly relevant precedents frequently appear in positions 15-40 of the results. The company needs a solution to improve the relevance of query results. The solution must meet the company's latency and context window constraints. Which solution will meet these requirements?

A. Maintain the 50-document retrieval but increase the FM's temperature parameter. Implement prompt engineering techniques that instruct the model to identify the most relevant documents from the full result set before the model generates responses.
B. Enable reranking on the knowledge base by using a reranker model with language-specific configurations. Configure the chat assistant to initially retrieve 50 documents. Use the reranker model's cross-encoder architecture to evaluate query-document pairs. Return only the top 10 highest-scored documents.
C. Configure three separate knowledge bases. Configure one knowledge base to use 500 token chunks, another to use 1,000 token chunks, and the third to use 2,000 token chunks. Implement a pre-processing action group by using an AWS Lambda function that retrieves 50 documents from each knowledge base, merges the 150 total results, and uses term frequency - inverse document frequency (TF-IDF) scoring to select the top 10 documents.
D. Implement a post-processing action group by using an AWS Lambda function that retrieves 50 documents and calculates cosine similarity scores between the query embedding and each document embedding by using Amazon Titan Embeddings. Configure the action group to sort by similarity score and return the top 10 documents.

**Answer: B**

Explanation:
Correct Answer: B

Justification for Option BThis solution directly addresses the core conflict between the retrieval breadth (50 documents), the model’s context window constraint (10 documents), and the relevance deficit in the initial semantic search results. Amazon Bedrock Knowledge Bases supports managed reranking (e.g., via Cohere Rerank 3.5 or BGE rerankers) as a native configuration. Rerankers utilize a cross-encoder architecture, which performs full self-attention over the query-document pair simultaneously. This is computationally superior to the bi-encoder architecture used in initial semantic search (which embeds queries and documents independently) for precision ranking tasks. By configuring the knowledge base to retrieve 50 candidates and rerank them down to the top 10, the solution ensures only the most semantically relevant precedents occupy the limited context window. As a managed capability, this adds minimal latency overhead (typically <500ms), maintaining the 3-second SLA without requiring custom infrastructure orchestration.

Why Option A is IncorrectIncreasing the temperature parameter controls output randomness/creativity, not retrieval relevance or context management. Passing 50 documents to the FM violates the hard context window constraint (10 documents), causing truncation or request failure. Relying on prompt engineering to "filter" documents inside the context window wastes expensive input tokens and compute on irrelevant text, increases latency, and does not guarantee the model will correctly identify the relevant precedents buried in positions 15–40.

Why Option C is IncorrectThis architecture introduces excessive complexity and latency. Provisioning and querying three separate knowledge bases sequentially or in parallel, merging 150 results via a Lambda function, and computing TF-IDF scores is computationally heavy. TF-IDF is a lexical/sparse retrieval method ineffective for semantic legal concepts (synonyms, paraphrasing) compared to dense vector search or cross- encoder reranking. The cold starts, serialization overhead, and O(N) scoring logic in Lambda make meeting a 3-second latency target highly improbable.

Why Option D is IncorrectRe-computing cosine similarity between the query embedding and document embeddings using Amazon Titan Embeddings inside a Lambda function replicates the exact bi-encoder logic already performed by the Knowledge Base’s initial semantic search. Since the initial retrieval already ranks documents by this similarity metric, re-scoring the same top-50 vectors produces an identical ranking order; it cannot surface relevant documents from positions 15–40. Furthermore, the Lambda invocation adds network hop latency and operational overhead without improving semantic discrimination capability.

References

1. Amazon Bedrock Knowledge Bases - Reranking 2. Amazon Bedrock Knowledge Bases - Retrieval Configuration

---

## Exam AWS Certified Generative AI Developer - Professional (AIP-C01) (PDF) topic 1 question 130
Question #: 130
Topic #: 1

A multinational healthcare company is building a GenAI solution to analyze patient medical records and clinical trial data to identify treatment patterns and generate research insights. Some of the countries where the company operates require the company to store patient data on premises within each country. The solution must provide low-latency, AI-assisted diagnostics for remote clinics around the world. The solution must use cloud-based foundation models (FMs) to perform advanced, large-scale analytics. The company needs a solution that ensures data residency, delivers sub-100 ms inference at clinics, and supports consistent development workflows across hybrid environments. Which solution will meet these requirements with the LEAST operational overhead?

A. Use AWS Global Accelerator to reduce latency for remote clinics. Replicate on-premises patient data to Amazon S3 by using AWS DataSync. Process all model requests through a centralized inference endpoint that is hosted in one AWS Region.
B. Deploy open source FMs on Amazon EC2 instances in each country to comply with data residency requirements. Store patient data locally on Amazon EBS volumes. Use AWS Systems Manager to manage model updates across countries. Manually export aggregated research insights as CSV files to Amazon S3 buckets in each AWS Region to perform cross-country analysis.
C. Deploy FMs in multiple AWS Regions on Amazon EC2 GPU instances. Replicate patient data from on- premises systems to the cloud. Centralize model training and inference.
D. Use AWS Outposts to process and store sensitive on-premises patient data in countries that have data residency requirements. Deploy AWS Wavelength at remote clinics to perform real-time inference.

**Answer: D**

Explanation:
Justification for Correct Answer: D

AWS Outposts addresses the strict data residency requirements by providing fully managed AWS infrastructure and services (compute, storage) on-premises within each country. This ensures patient data never leaves the physical boundaries mandated by local regulations while maintaining API consistency with the AWS cloud. AWS Wavelength embeds AWS compute and storage services within 5G telecommunications providers' data centers at the network edge. This architecture delivers the sub-100 ms inference latency required for remote clinics by eliminating internet hops and regional backbone traversal, processing inference directly at the mobile edge. Hybrid Consistency & Operational Overhead: Both Outposts and Wavelength are fully managed services. They extend the same AWS control plane, APIs, and tooling (e.g., SageMaker, ECS/EKS, EC2) to on-premises and edge locations. This eliminates the operational burden of managing custom hardware stacks, Kubernetes distributions, or manual model synchronization scripts required by self-managed alternatives, providing a truly consistent hybrid development workflow.

Why Other Options Are Less Suitable:

Option A violates data residency mandates by replicating patient data to a centralized Amazon S3 bucket in a single AWS Region via DataSync. Centralized inference adds network latency (speed-of-light limitations) that makes sub-100 ms SLAs unachievable for globally distributed remote clinics. Global Accelerator optimizes routing to AWS regions but cannot overcome physics for edge inference requirements. Option B incurs maximum operational overhead. Self-managing open-source FMs on EC2 across multiple countries requires manual patching, scaling, model versioning, and GPU driver management. Using Systems Manager for model updates is not a CI/CD pipeline for ML. Manual CSV exports for cross-country analysis introduces data staleness, schema drift risks, and significant engineering toil, failing the "least operational overhead" criterion. Option C fails the data residency requirement by replicating patient data from on-premises to multiple AWS Regions. Centralizing training and inference in the cloud contradicts the mandate to store data on-premises within specific countries. It also suffers from the same latency limitations as Option A for remote clinic diagnostics.

References

1. AWS Outposts - Features and Use Cases (Details data residency, local data processing, and consistent hybrid APIs) 2. AWS Wavelength - How it Works (Explains ultra-low latency inference at the 5G edge for mobile/remote clients)

---

## Exam AWS Certified Generative AI Developer - Professional (AIP-C01) (PDF) topic 1 question 131
Question #: 131
Topic #: 1

A global company runs an AI-powered document-processing pipeline that uses Amazon Bedrock to summarize text documents. The pipeline occasionally times out during peak traffic periods. The timeouts cause service degradation. The company needs a solution to detect when error rates exceed 10% within any 60-second window. The solution must switch to an alternate process path when the error rate threshold is exceeded. The solution must automatically resume normal Amazon Bedrock processing when the pipeline recovers. The company must ensure that the pipeline processes all documents within 15 minutes. Which solution will meet these requirements?

A. Configure an AWS Step Functions workflow that implements a circuit breaker pattern by tracking Amazon Bedrock invocation failures in Amazon DynamoDB. Configure the workflow to route processing jobs between normal and alternate processing paths based on the current failure state.
B. Configure an AWS Step Functions workflow that uses an AWS Lambda function to poll Amazon CloudWatch metrics for Amazon Bedrock. Store error rate metrics in Amazon DynamoDWhen the error rate exceeds 10%, instruct company staff to manually update the workflow to divert traffic to the alternate processing path.
C. Configure an AWS Step Functions state machine that includes a Task state to implement Retry/Catch logic for Amazon Bedrock calls. Configure an Amazon CloudWatch alarm that triggers an Amazon EventBridge rule to direct traffic from the state machine to the alternate processing path when the error rate exceeds 10%.
D. Deploy multiple identical AWS Step Functions state machines that use multiple Amazon Bedrock models behind an Amazon API Gateway API. Use a custom health check AWS Lambda function to route requests to whichever state machine responds fastest.

**Answer: A**

Explanation:
Correct Answer: A

Why Option A is Correct

Option A correctly implements the Circuit Breaker pattern using AWS Step Functions and Amazon DynamoDB, which is the standard architectural pattern for preventing cascading failures and providing automatic failover/recovery based on error thresholds.

Automated State Management: Step Functions orchestrates the workflow logic natively. A Choice state evaluates the circuit breaker state (stored in DynamoDB) before every Bedrock invocation, routing to the normal path (CLOSED), alternate path (OPEN), or a test invocation (HALF-OPEN). Precise Threshold Detection: DynamoDB provides single-digit millisecond latency for reading/writing failure counts. By using a time-window partition key (e.g., window_key = current_timestamp_minute), the workflow can atomically increment a counter (using UpdateItem with ADD) and evaluate if error_count / total_count > 0.10 within the exact 60-second window requirement. Automatic Recovery: The workflow logic implements the HALF-OPEN state natively. After a configurable timeout (e.g., 30-60 seconds), the state machine allows a single "probe" request to the normal Bedrock path. Success closes the circuit (resumes normal processing); failure re-opens it. This requires zero human intervention. SLA Compliance: Standard Step Functions workflows support execution durations up to 1 year, comfortably satisfying the 15-minute document processing SLA, including retries, waits for circuit breaker reset, and alternate path execution. Why Other Options Are Incorrect

Option B violates the automation requirement. It relies on a Lambda function polling CloudWatch metrics (which have ~1-minute latency and are eventually consistent) and explicitly requires manual staff intervention ("instruct company staff to manually update the workflow") to divert traffic. This introduces unacceptable operational latency (MTTR) and human error risk for a production pipeline requiring automatic failover and resume.

Option C misapplies monitoring tools for runtime control. CloudWatch Alarms evaluate metrics over fixed periods (minimum 10s for high-resolution, typically 60s+) and trigger EventBridge asynchronously. This architecture cannot enforce routing decisions inside an active Step Functions execution. The state machine definition is static; it cannot be dynamically "directed" by an EventBridge rule to switch paths mid-execution without an external state store (like DynamoDB in Option A). Furthermore, Retry/Catch handles transient errors per execution, not aggregate pipeline error rates (10% across all executions).

Option D implements latency-based routing, not error-rate-based circuit breaking. Routing to the "fastest responding state machine" optimizes for latency, not availability or error percentage. A model returning fast 4xx/5xx errors would be preferred over a slower healthy model. It lacks a mechanism to calculate a rolling 60- second error rate percentage across the fleet, maintain a global circuit state (OPEN/CLOSED/HALF-OPEN), or automatically resume the primary Bedrock model path upon recovery.

References

1. AWS Step Functions Developer Guide - Implementing a Circuit Breaker Pattern

https://docs.aws.amazon.com/step-functions/latest/dg/connect-dynamodb.html (See "Tutorial: Implementing a circuit breaker pattern" section in related workshop/docs) Direct pattern implementation reference: https://aws.amazon.com/blogs/compute/implementing-the- circuit-breaker-pattern-with-aws-step-functions/

2. Amazon CloudWatch User Guide - Alarm Evaluation Periods and Latency

https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/AlarmThatSendsEmail.html#alarms- and-evaluation-periods

---

## Exam AWS Certified Generative AI Developer - Professional (AIP-C01) (PDF) topic 1 question 132
Question #: 132
Topic #: 1

A media company needs to automatically generate searchable metadata for a video library that contains 10,000 hours of content. Each video includes visual scenes, spoken dialogue, background music, and on-screen text. The company needs a solution to extract scene descriptions, speaker transcripts with timestamps, text overlay content, and emotional context from each video. The output must synchronize all metadata types with one another and create a searchable index. Users must be able to search based on any metadata type and jump directly to a specific moment in each video. What solution will meet these requirements?

A. Create an Amazon SageMaker AI processing job that extracts video frames at regular intervals. Use Amazon Transcribe to process audio and perform speech-to-text conversions. Use an Anthropic Claude model in Amazon Bedrock to process frames individually to produce multimodal scene analyses. Store outputs in separate Amazon S3 buckets that are organized by content type.
B. Create an Amazon SageMaker AI processing job that extracts video frames at fixed intervals and attaches timestamps. Use Amazon Transcribe with time markers enabled to process audio. Use an Anthropic Claude model in Amazon Bedrock to analyze frame-transcript pairs. Store outputs in a unified JSON structure that preserves temporal relationships.
C. Create an Amazon SageMaker AI parallel processing job that is orchestrated by a SageMaker AI pipeline. Configure multiple steps in the pipeline to extract video segments, process audio streams by using Amazon Transcribe, analyze video frames by using Amazon Rekognition to detect text in scenes, use Amazon Comprehend to perform sentiment analysis, and store unified metadata in Amazon DynamoDB with time-based partitioning.
D. Create an Amazon SageMaker AI processing job that configures Anthropic Claude Opus in Amazon Bedrock to produce a comprehensive multimodal analysis for each video. Configure the processing job to extract metadata by using a single inference request and to index results in Amazon OpenSearch Service to provide temporal search capabilities.

**Answer: B**

Explanation:
Justification for Correct Answer: B

Option B provides the only architecture that correctly synchronizes multimodal metadata (visual, audio, text) with precise temporal alignment required for searchable indexing and seek-to-time functionality. The key technical differentiators are:

Unified Temporal Structure: By extracting frames with attached timestamps and using Amazon Transcribe with time markers (word-level timestamps), the solution establishes a common time axis. Processing frame- transcript pairs together via a Multimodal LLM (Anthropic Claude in Bedrock) allows the model to correlate visual context, on-screen text (OCR via vision capabilities), speaker diarization, and emotional prosody at specific moments, preserving the synchronization mandate. Single Unified Output: Storing results in a unified JSON structure ensures that scene descriptions, transcripts, detected text overlays, and sentiment labels share the same timestamp keys. This atomic structure is essential for building an inverted index (e.g., in OpenSearch or DynamoDB) where a query for "happy speaker discuss budget" returns a single timestamp pointer allowing direct video seeking. Multimodal Efficiency: Using a single frontier model (Claude 3 Opus/Sonnet) for frame-transcript pair analysis handles OCR, scene understanding, and emotional context extraction in one inference pass, reducing latency and complexity compared to orchestrating multiple specialized legacy AI services (Rekognition, Comprehend) which lack native cross-modal reasoning.

Why Other Options Are Less Suitable:

Option A: Storing outputs in separate S3 buckets organized by content type destroys the temporal relationships between modalities. Without a unified schema joining frame timestamps to transcript timestamps, synchronizing a visual scene change with a specific spoken word or on-screen text overlay requires complex, error-prone post-processing joins, preventing direct "jump-to-moment" search. Option C: Orchestrating multiple specialized legacy services (Rekognition, Transcribe, Comprehend) via a SageMaker Pipeline introduces significant synchronization overhead. These services operate independently with different timestamp granularities (e.g., Rekognition segment timestamps vs. Transcribe word timestamps vs. Comprehend utterance timestamps). Merging these disparate outputs into DynamoDB requires complex ETL logic to align time-series data, and Comprehend analyzes text sentiment only, missing visual emotional cues (facial expressions, tone) available to a multimodal LLM. Option D: Sending an entire video (10,000 hours aggregate) in a single inference request to a multimodal model is technically infeasible due to context window limits (max ~200k tokens for Claude 3 Opus) and input modality constraints (Bedrock InvokeModel API does not accept raw video files as direct input; frames must be pre-extracted). This approach ignores the necessary preprocessing (frame extraction, audio separation) and fails to guarantee the structured, timestamped JSON output required for indexing.

References

1. Amazon Transcribe - Generating timestamps for words and phrases 2. Amazon Bedrock - Using Anthropic Claude 3 models with images

---

## Exam AWS Certified Generative AI Developer - Professional (AIP-C01) (PDF) topic 1 question 133
Question #: 133
Topic #: 1

A financial services company is developing a GenAI application that needs to analyze data across multiple AWS accounts by using a foundation model (FM). The data and application are in Amazon S3 buckets in three separate accounts. Account A contains transaction data. Account B contains customer profiles, including personally identifiable information (PII). Account C hosts the GenAI application. The company plans to add data sources from seven more business units within the next few months. The company must have strict control over PII data. The company must ensure that the FM accesses only necessary data fields. The company needs a solution to establish secure cross-account access for the GenAI application. Which solution will meet these requirements?

A. Use AWS Identity Center to create a permission set for the FM service account. Configure resource-based policies on each S3 bucket to allow specific access to Account C. Deploy a custom AWS Lambda authorizer to filter PII data before passing it to the FM.
B. Configure Amazon Bedrock cross-account IAM roles. Create role-based access policies in each source account that allow access only for specific S3 bucket paths. Apply tagbased access controls on S3 objects to classify and control access to PII data.
C. Set up AWS Lake Formation in each source account. Register the S3 buckets with Lake Formation. Create IAM roles in each source account that have permissions to access specific S3 bucket paths. Configure Lake Formation permissions to allow access only to specific data columns by using Lake Formation tag-based access controls. Use Amazon SageMaker AI to deploy the FM with an execution role in Account C that can assume the cross-account IAM roles to access the data through Lake Formation.
D. Configure resource-based policies on S3 buckets in each source account to allow access from the GenAI application in Account C. Configure identity-based policies for the FM's service role that allow access only to specific data columns by using AWS Lake Formation tag-based access controls. Set up a VPC endpoint in each account to provide secure cross-account access.

**Answer: C**

Explanation:
Correct Answer: C

Why Option C is Best:This solution provides a comprehensive, scalable, and auditable data governance framework using AWS Lake Formation, which is purpose-built for centralized access control across distributed data lakes.

Fine-Grained Column-Level Security: Lake Formation Tag-Based Access Control (LF-TBAC) allows defining permissions on specific columns (e.g., PII fields like SSN, Name) using tags. This enforces the requirement that the FM accesses only necessary data fields at the storage layer, preventing PII exposure before data reaches the model. Cross-Account Governance: Registering S3 buckets in Lake Formation across Accounts A and B centralizes permission management. The solution uses IAM roles in source accounts with AssumeRole trust policies, allowing the SageMaker execution role in Account C to assume them. This follows the principle of least privilege for cross-account access without managing complex resource policies on every bucket. Scalability for Growth: As the company adds seven more business units, LF-TBAC scales efficiently. New data sources are registered, tagged, and governed via Lake Formation policies centrally, avoiding the operational overhead of maintaining distinct bucket policies or IAM policies per account. Integration with SageMaker: Deploying the FM via SageMaker with an execution role that assumes cross- account roles provides a native, secure compute-to-data path, ensuring credentials are short-lived and auditable via CloudTrail.

Why Other Options Are Less Suitable:

Option A (AWS Identity Center Permission Sets): Identity Center manages workforce (human) access to AWS accounts, not programmatic access for Foundation Models or service-to-service authentication. It cannot enforce column-level filtering on S3 objects. Option B (Bedrock Cross-Account Roles + S3 Path Policies): While Bedrock cross-account roles enable model invocation, S3 bucket policies and path-based IAM policies operate at the object/prefix level, not the column level. They cannot restrict access to specific PII fields within a Parquet/CSV file, failing the strict PII control requirement. Option D (S3 Resource Policies + Lake Formation Column Filtering + VPC Endpoints): This option incorrectly mixes identity-based policies (which apply to principals) with Lake Formation column filtering. Lake Formation column-level security requires the principal (SageMaker role) to authenticate via Lake Formation (using GetDataAccess); standard S3 resource policies bypass Lake Formation enforcement, rendering the column filters ineffective. VPC endpoints secure network traffic but do not address data-level authorization.

References

1. AWS Lake Formation - Tag-Based Access Control 2. Amazon SageMaker - Cross-Account Access with Lake Formation

---

## Exam AWS Certified Generative AI Developer - Professional (AIP-C01) (PDF) topic 1 question 134
Question #: 134
Topic #: 1

A logistics company is building an agentic GenAI-powered solution to automate freight optimization. The solution must retrieve data in real time from multiple internal and external systems. The solution must include a human-in- the-loop approval step before the optimization process is finished. The solution must support modular growth as the number of integrations and amount of logic increases. Which solution will meet these requirements with the LEAST operational overhead?

A. Use an Amazon SageMaker AI endpoint that hosts a large language model (LLM) that directly calls all internal databases and external APIs. Use a custom web application that provides a UI to implement the human- in-the-loop review step.
B. Build a hierarchical system by using the Strands Agents SDK and Amazon Bedrock AgentCore. Configure a coordinating agent to delegate tasks to multiple specialized agents. Use MCP to facilitate inter-agent messaging. Use AWS Step Functions to implement a human-in-the-loop approval step.
C. Use AWS Glue to aggregate operational data into Amazon S3. Use Amazon Athena to query the data. Invoke an AWS Lambda function to generate route assignments. Use Amazon SNS to send notifications to supervisor agents.
D. Use a single Amazon Bedrock AgentCore agent with AWS Lambda based tools to integrate with all internal and external systems. Use AWS Step Functions to orchestrate the approval workflow.

**Answer: B**

Explanation:
Correct Option: B

Technical Justification

Architectural Fit for Agentic Workflows: Option B leverages the Strands Agents SDK and Amazon Bedrock AgentCore, which are purpose-built for constructing hierarchical, multi-agent systems. This architecture natively supports the requirement for modular growth; specialized agents can be added, removed, or updated independently to handle new integrations or logic domains without refactoring a monolithic agent or codebase. A coordinating agent manages delegation, ensuring separation of concerns and scalability as the number of internal/external systems expands. Inter-Agent Communication & State Management: The use of MCP (Model Context Protocol) for inter-agent messaging provides a standardized, low-overhead mechanism for context passing and tool invocation across agents, reducing the custom integration glue code typically required in Lambda-only or SageMaker-based approaches. Native Human-in-the-Loop (HITL) Orchestration: AWS Step Functions is the idiomatic AWS service for durable, long-running workflows requiring human approval. It provides a managed state machine that pauses execution, persists state indefinitely, and resumes via callbacks (Task Tokens) without managing idle compute infrastructure (unlike a custom web app polling a database or a SageMaker endpoint holding a connection). Operational Overhead Reduction: This combination minimizes operational overhead by utilizing managed agent runtimes (AgentCore), managed orchestration (Step Functions), and standardized protocols (MCP). It avoids the heavy lifting of managing LLM inference infrastructure (Option A), the latency and batch-oriented nature of ETL pipelines (Option C), or the "God Agent" anti-pattern where a single agent becomes a bottleneck and maintenance burden as tool count grows (Option D).

Why Other Options Are Less Suitable

Option A (SageMaker Endpoint + Custom Web App): Hosting an LLM on SageMaker requires managing inference infrastructure (instance types, scaling policies, patching). Directly calling databases/APIs from the model inference loop creates tight coupling, security risks (credentials in model context), and observability gaps. Building a custom web application for HITL introduces significant development and maintenance overhead (auth, session management, state persistence) compared to the managed Step Functions callback pattern. Option C (AWS Glue + Athena + Lambda + SNS): This is a batch/ETL analytics pattern, not an agentic real- time system. Glue/Athena introduces high latency (minutes to hours) unsuitable for "real-time retrieval." SNS notifications are stateless and fire-and-forget; they lack the durable workflow state management, audit trail, and resume capability required for a formal approval gate in an optimization process. Option D (Single Bedrock AgentCore Agent + Lambda Tools): While AgentCore reduces infrastructure overhead compared to SageMaker, a single agent with many Lambda tools violates the modular growth requirement. As integrations increase, the agent's instruction context becomes bloated, tool selection accuracy degrades (the "lost in the middle" problem), and the blast radius of changes expands. It creates a monolithic logic block that is difficult to test, version, and scale compared to the hierarchical delegation model in Option B.

References

1. Amazon Bedrock AgentCore Developer Guide - Multi-agent collaboration 2. AWS Step Functions Developer Guide - Callback Pattern for Human Approval

---

## Exam AWS Certified Generative AI Developer - Professional (AIP-C01) (PDF) topic 1 question 135
Question #: 135
Topic #: 1

A financial services company is building a fraud detection system by using Amazon Bedrock. The system will monitor activity in multiple stock trading applications that run in the United States and Europe. The system must process 1,000 transactions every second with sub-500 ms response times. The system must also maintain high availability during connectivity disruptions. The company must ensure that data for European customers is processed only in AWS Regions that are based in Europe. Which solution will meet these requirements?

A. Configure AWS Lambda functions and Amazon EKS applications to use the InvokeModel API with a global inference profile. Deploy an automated failover system that uses Amazon Route 53 health checks. Create a dedicated European inference profile and enable Geographic cross-Region inference for European applications. Use Amazon CloudWatch alarms to monitor utilization metrics.
B. Configure all applications to use the InvokeModel API with provisioned throughput for an Anthropic Claude model in each Region separately. Set up a custom Application Load Balancer to distribute traffic based on Regional capacity and response times. Implement a Regional failover mechanism that uses Amazon EventBridge rules to handle connectivity disruptions.
C. Configure all applications to use the InvokeModelWithResponseStream API with on-demand throughput. Deploy an Amazon API Gateway REST API with Regional endpoints in each location where the company operates to route requests to the closest Amazon Bedrock endpoint. Create separate IAM roles for applications that run in the United States and Europe. Grant the IAM roles Region-specific permissions.
D. Configure applications that run in the United States to use provisioned throughput with the InvokeModel API. Configure European applications to use a Europe-specific geographic inference profile to ensure data sovereignty. Configure automatic scaling for provisioned capacity based on utilization metrics. Use Amazon EventBridge and AWS Lambda functions to implement cross-Region failover mechanisms.

**Answer: A**

Explanation:
Correct Answer: A

Why Option A is Correct

Option A correctly leverages Amazon Bedrock Inference Profiles, the native managed capability designed specifically for multi-Region traffic routing, high availability, and data sovereignty compliance.

Global Inference Profile (US Workload): A Global Inference Profile automatically routes InvokeModel requests across multiple AWS Regions (e.g., us-east-1, us-west-2) based on real-time capacity and latency. This provides the high availability required during connectivity disruptions (managed failover without custom code) and aggregates capacity to sustain 1,000 TPS with sub-500ms latency by pooling provisioned/on- demand throughput across Regions. Geographic Inference Profile (EU Workload): The solution explicitly creates a Europe-specific Geographic Inference Profile. This feature restricts model invocation processing exclusively to AWS Regions within the designated geography (e.g., eu-central-1, eu-west-1), technically enforcing the data sovereignty requirement that European customer data never leaves the EU. Operational Simplicity: It uses native Bedrock routing (DNS/Service-level) rather than custom infrastructure (ALB, API Gateway, Lambda orchestrators), reducing failure domains and operational overhead. Route 53 health checks and CloudWatch alarms provide standard observability and DNS failover for the application layer. Why Other Options Are Less Suitable

Option B: Custom Routing & Failover Overhead Manually configuring Provisioned Throughput per Region and building a custom Application Load Balancer (ALB) + EventBridge/Lambda failover mechanism reintroduces the "undifferentiated heavy lifting" that Inference Profiles eliminate. ALBs cannot natively balance traffic between Regional Bedrock endpoints based on model capacity/latency; they balance across targets (IPs/Instances) within a Region. Cross-Region failover requires complex health check logic and DNS manipulation (Route 53), increasing MTTR (Mean Time To Recovery) compared to Bedrock's managed routing. It lacks a native construct to guarantee EU data residency at the service level; it relies on IAM/Network policies which are harder to audit than a Geographic Inference Profile.

Option C: On-Demand Throughput Risk & API Gateway Latency

On-Demand Throughput offers no capacity guarantees. At 1,000 TPS sustained, the workload will almost certainly hit ThrottlingException (Service Quota limits) during peak loads or Regional impairments, violating the SLA. Provisioned Throughput (or Inference Profiles pooling it) is mandatory for this scale. API Gateway REST API adds unnecessary network hop latency (integration latency + execution latency), jeopardizing the sub-500ms requirement at high throughput. Routing logic via API Gateway Stage Variables or mapping templates is static configuration, not dynamic capacity-aware routing.

Option D: Manual Failover Violates Sovereignty & Scaling Limits

Implementing cross-Region failover via EventBridge + Lambda is brittle. If the US Region fails, a Lambda- based failover routing US traffic to the EU Profile would violate data sovereignty (US data processed in EU). Preventing this requires complex conditional logic in the failover code. Provisioned Throughput Auto Scaling reacts on CloudWatch metrics (Utilization) with minutes of latency (cooldown periods, Model Unit provisioning time). It cannot react fast enough to handle sudden spikes or Regional AZ failures to maintain 1,000 TPS / sub-500ms. Global Inference Profiles handle burst capacity instantly by routing to idle Regions. Splitting API usage (InvokeModel vs Profiles) fragments the client implementation and prevents unified token usage monitoring.

References

1. Amazon Bedrock Cross-Region Inference Profiles (Covers Global and Geographic Profiles, Routing, and Failover) 2. Amazon Bedrock Provisioned Throughput (Details on Model Units, Capacity Planning, and Scaling Behavior)

---

## Exam AWS Certified Generative AI Developer - Professional (AIP-C01) (PDF) topic 1 question 136
Question #: 136
Topic #: 1

A company is implementing a 2-week initiative to incorporate GenAI into several hundred existing applications to provide context-driven natural language help for users. To simplify the process to choose an appropriate model for each application, a GenAI Developer is building a system to automatically compare foundation models (FMs) based on general text generation accuracy. The system runs a job that performs a series of steps. First, the system creates a service role and attaches an IAM permissions policy that allows Amazon Bedrock to invoke the FMs and grants access to Amazon S3. Then the system requests and receives access to all the FMs that need to be tested. Then the system creates S3 buckets to store the evaluation results. Then the system creates evaluation configurations by using the TREX built-in dataset. Finally, the system specifies the Accuracy metric and Generation evaluation type in each evaluation configuration. When the GenAI developer attempts to run the system, it fails with an AccessDenied exception. The GenAI developer must resolve the issue. Which solution will meet this requirement?

A. Create a trust policy that defines Amazon Bedrock as the service principal. Attach the trust policy to the service role.
B. Configure cross-origin resource sharing (CORS) permissions that allow GET and DELETE actions on the S3 buckets.
C. Change the test dataset from TREX to Gigaword in the evaluation configurations.
D. Change the evaluation type to Summarization and the metric type to Correctness in the evaluation configurations.

**Answer: A**

Explanation:
Justification for Correct Answer (A):

The AccessDenied exception occurs because the service role lacks a trust policy (assume role policy document) allowing Amazon Bedrock to assume the role. In AWS IAM, a role requires two distinct policy components to function for cross-service access: a permissions policy (defining what actions are allowed on which resources) and a trust policy (defining who is allowed to assume the role). The scenario explicitly states the developer attached a permissions policy granting Bedrock invocation and S3 access, but it omits the creation of a trust policy. Without a trust policy specifying bedrock.amazonaws.com as the service principal, the Bedrock service cannot assume the role to perform the evaluation job, resulting in an AccessDenied error when the job attempts to execute.

Why Other Options Are Incorrect:

B. Configure CORS permissions on S3 buckets: CORS (Cross-Origin Resource Sharing) controls browser- based cross-origin HTTP requests. It is irrelevant for server-to-server authentication between AWS services (Bedrock and S3) using IAM roles. S3 access for Bedrock evaluation jobs is governed by the IAM permissions policy attached to the role, not bucket CORS configuration. C. Change the test dataset from TREX to Gigaword: The choice of built-in dataset (TREX vs. Gigaword) affects the evaluation benchmark content, not the IAM authorization mechanism. Changing the dataset does not resolve a missing trust relationship preventing the service from assuming the execution role. D. Change evaluation type to Summarization and metric to Correctness: The evaluation type (Generation vs. Summarization) and metric (Accuracy vs. Correctness) define the methodology of the assessment. These are configuration parameters for the evaluation logic and have no bearing on the IAM permissions required for the Bedrock service to assume the provided service role.

References:

Amazon Bedrock Model Evaluation - IAM Permissions IAM Roles for Amazon Bedrock - Trust Policy Configuration
