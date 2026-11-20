## Exam Claude Certified Architect Professional (CCAR-P) (PDF) topic 1 question 1
Question #: 1
Topic #: 1

You are compiling guardrail tactics for a customer-facing assistant. Which two tactics belong on the guardrail list? Each correct answer presents a complete solution.

A. Embed approved override phrases that let trusted users relax guardrails on demand.
B. Lower sampling temperature globally to reduce the chance of off-policy completions.
C. Rely on a single hardened system prompt that enumerates every disallowed behavior.
D. Layer prompt-level guardrails with runtime content checks rather than relying on either alone.
E. Validate the model output against a structured schema before downstream actions are taken.

**Answer: DE**

Explanation:
A. Embed approved override phrases that let trusted users relax guardrails on demand.

Incorrect

Allowing users to bypass guardrails through special phrases can create a security and policy risk. Guardrails should not be easily disabled through conversational instructions, even for trusted users.

B. Lower sampling temperature globally to reduce the chance of off-policy completions.

Incorrect

Lowering temperature can make outputs more consistent and predictable, but it is not a reliable substitute for explicit safety controls. Model randomness settings alone cannot enforce policy boundaries.

C. Rely on a single hardened system prompt that enumerates every disallowed behavior.

Incorrect

A system prompt is an important layer, but relying on one control alone is not sufficient. Complex customer- facing systems benefit from multiple independent safeguards.

D. Layer prompt-level guardrails with runtime content checks rather than relying on either alone.

Correct

Using multiple guardrail layers provides defense in depth. Prompt-level instructions establish behavioral boundaries, while runtime checks can detect or block problematic content before it reaches users or downstream systems.

E. Validate the model output against a structured schema before downstream actions are taken.

Correct

Structured output validation helps ensure that the model response conforms to the expected format and required fields before it is passed to downstream systems. This reduces the risk of malformed or unexpected model output triggering unintended actions.

Final Answer: D and E

---

## Exam Claude Certified Architect Professional (CCAR-P) (PDF) topic 1 question 2
Question #: 2
Topic #: 1

A Claude architect is implementing safety controls for a customer-facing advice assistant that must never provide regulated investment recommendations. Which two guardrail implementations most directly enforce this constraint? (Select two.)

A. Increase response temperature to introduce variability that reduces the likelihood of specific recommendations.
B. Log all user queries to a SIEM for post-hoc compliance review.
C. Limit session length to reduce the volume of queries processed per user per day.
D. Define explicit out-of-scope categories in the system prompt with fixed refusal phrasing for investment advicerequests.
E. Add an output classifier that detects and blocks responses containing regulated investment- recommendation language.

**Answer: DE**

Explanation:
A. Increase response temperature to introduce variability that reduces the likelihood of specific recommendations.

Incorrect

Increasing temperature makes responses more variable and less predictable. It does not enforce a safety boundary and could actually make it harder to consistently prevent prohibited investment recommendations.

B. Log all user queries to a SIEM for post-hoc compliance review.

Incorrect

Logging supports monitoring, auditing, and investigation, but it is a post-hoc control. It does not directly prevent the assistant from generating a prohibited investment recommendation before the response reaches the user.

C. Limit session length to reduce the volume of queries processed per user per day.

Incorrect

Limiting session length may reduce overall usage, but it does not prevent the model from providing a regulated investment recommendation within an allowed session. It is therefore not a direct enforcement mechanism for this requirement.

D. Define explicit out-of-scope categories in the system prompt with fixed refusal phrasing for investment advice requests.

Correct

Explicitly defining out-of-scope behavior in the system instructions establishes a clear boundary for the assistant. Fixed refusal guidance also makes the expected response more consistent when users request prohibited investment recommendations.

E. Add an output classifier that detects and blocks responses containing regulated investment- recommendation language.

Correct

An output classifier provides a runtime enforcement layer that can detect prohibited content before it reaches the customer. This complements prompt-level guardrails and provides an additional control if the model attempts to generate restricted advice.

Final Answer: D and E

---

## Exam Claude Certified Architect Professional (CCAR-P) (PDF) topic 1 question 3
Question #: 3
Topic #: 1

You are configuring tool permissions for a Claude-based assistant. The assistant's defined responsibilities require read access to a knowledge base and write access to a draft queue, and nothing else. Which scoping design best applies least privilege?

A. Allow access to every tool in the catalog and rely on the model to decline tools it should not use.
B. Per-role allow-list of exactly the read-knowledge-base and write-draft-queue tools, enforced at the orchestration layer.
C. Disable all tools entirely to achieve a minimal permission surface, accepting that the assistant can no longer perform the read-knowledge-base or write-draft-queue tasks it was designed for.
D. Allow access to all tools with read permissions globally and restrict write permissions to the draft- queue tool, without scoping to only the specific tools required for defined tasks.

**Answer: B**

Explanation:
A. Allow access to every tool in the catalog and rely on the model to decline tools it should not use.

Incorrect

This does not follow the least-privilege principle because the assistant receives access to tools it does not need. Relying on the model to voluntarily avoid those tools is not an adequate security control.

B. Per-role allow-list of exactly the read-knowledge-base and write-draft-queue tools, enforced at the orchestration layer.

Correct

This is the strongest least-privilege design. The assistant receives access to only the two tools required for its defined responsibilities. Enforcing the allow-list at the orchestration layer provides a technical permission boundary rather than relying on the model's behavior.

C. Disable all tools entirely to achieve a minimal permission surface, accepting that the assistant can no longer perform the read-knowledge-base or write-draft-queue tasks it was designed for.

Incorrect

Although disabling all tools minimizes permissions, it also prevents the assistant from performing its required responsibilities. Least privilege means granting the minimum permissions necessary to accomplish the intended task, not removing necessary access.

D. Allow access to all tools with read permissions globally and restrict write permissions to the draft-queue tool, without scoping to only the specific tools required for defined tasks.

Incorrect

This still grants unnecessary access to tools outside the assistant's responsibilities. Least privilege requires permissions to be scoped to the specific capabilities the assistant actually needs. Final Answer: B. Per-role allow-list of exactly the read-knowledge-base and write-draft-queue tools, enforced at the orchestration layer.

---

## Exam Claude Certified Architect Professional (CCAR-P) (PDF) topic 1 question 4
Question #: 4
Topic #: 1

You are compiling team-setup practices for a Claude Code rollout across an engineering organization. Which two practices belong on the list? (Select two.) Each correct answer presents a complete solution.

A. Use project scope for personal editor preferences so the preferences apply consistently within the project.
B. Apply managed configuration centrally for security-critical settings that must not be overridden by individual engineers.
C. Use local scope for security-critical permission rules so each engineer can adapt them to ongoing work.
D. Use user scope for team-shared MCP servers so every engineer on the team has consistent access.
E. Use project scope for team-shared Model Context Protocol (MCP) servers and permission rules under version control.

**Answer: BE**

Explanation:
A. Use project scope for personal editor preferences so the preferences apply consistently within the project.

Incorrect

Project scope is intended for team-shared configuration, not personal preferences. Personal editor preferences should generally remain at the user or local scope so they do not affect other engineers working on the project.

B. Apply managed configuration centrally for security-critical settings that must not be overridden by individual engineers.

Correct

Managed configuration is appropriate for security-critical controls that need consistent enforcement across the organization. Central management prevents individual engineers from overriding important security policies.

C. Use local scope for security-critical permission rules so each engineer can adapt them to ongoing work.

Incorrect

Security-critical permission rules should not be individually adjustable when organizational consistency is required. Local configuration could allow engineers to weaken or bypass important security controls.

D. Use user scope for team-shared MCP servers so every engineer on the team has consistent access.

Incorrect

User scope applies to an individual engineer, not the entire project team. Team-shared MCP servers should be configured at a shared project or managed organizational level.

E. Use project scope for team-shared Model Context Protocol (MCP) servers and permission rules under version control. Correct

Project scope is appropriate for team-shared configuration. Keeping MCP server settings and permission rules under version control improves consistency, reviewability, and change tracking across the engineering organization.

Final Answer: B and E

---

## Exam Claude Certified Architect Professional (CCAR-P) (PDF) topic 1 question 5
Question #: 5
Topic #: 1

You are designing a content moderation classifier that processes high volumes of user-generated comments under a tight per-message latency budget using well-defined classification labels. Which model selection best aligns with the workload?

A. Sonnet, because larger general-purpose models are preferred even when workload latency requirements are strict.
B. Haiku, because its latency and cost profile align with high-volume classification workloads that require limited reasoning depth.
C. Sonnet with extended thinking enabled, because deeper reasoning should be applied to every moderation request to improve edge-case handling.
D. Opus, because every moderation decision requires maximum reasoning depth regardless of classification complexity.

**Answer: B**

Explanation:
A. Sonnet, because larger general-purpose models are preferred even when workload latency requirements are strict.

Incorrect

Sonnet provides strong general-purpose capabilities, but this workload emphasizes high volume, low latency, and well-defined classification tasks. A lighter model is generally a better fit when deep reasoning is not required.

B. Haiku, because its latency and cost profile align with high-volume classification workloads that require limited reasoning depth.

Correct

Haiku is well suited to fast, high-volume workloads where the task is clearly defined and does not require extensive reasoning. Its efficiency helps meet strict latency requirements while controlling resource consumption.

C. Sonnet with extended thinking enabled, because deeper reasoning should be applied to every moderation request to improve edge-case handling.

Incorrect

Extended Thinking adds deeper reasoning but can increase latency and resource consumption. Applying it to every high-volume classification request is unnecessary when the labels and task are already well defined.

D. Opus, because every moderation decision requires maximum reasoning depth regardless of classification complexity. Incorrect

Maximum reasoning capability is not required for every moderation task. Using a highly capable model for simple, high-volume classification can result in unnecessary cost and latency.

Final Answer: B. Haiku, because its latency and cost profile align with high-volume classification workloads that require limited reasoning depth.

---

## Exam Claude Certified Architect Professional (CCAR-P) (PDF) topic 1 question 6
Question #: 6
Topic #: 1

You are supporting an engineer whose Claude Code session reports a permission denial when the engineer expected the action to be allowed. Which resolution step is most appropriate?

A. Inspect the active permission rules across all scopes-managed, command-line, local, project, and user-to identify which rule is denying the action and confirm whether it should be amended or remain denied.
B. Tell the engineer to retry the denied action verbatim repeatedly until the denial stops appearing, without inspecting the active permission rules to determine whether the denial is intentional.
C. Disable the permission system entirely across all scopes to remove the denial, eliminating all tool-pattern and deny-rule controls rather than identifying and amending the specific rule.
D. Grant the engineer unrestricted Bash access to bypass the specific rule causing the denial, removing all tool- pattern constraints rather than amending only the rule in

**Answer: A**

Explanation:
A. Inspect the active permission rules across all scopes—managed, command-line, local, project, and user —to identify which rule is denying the action and confirm whether it should be amended or remain denied.

Correct

The appropriate approach is to diagnose the active permission configuration rather than bypassing the security controls. Reviewing the applicable rules across scopes helps identify the exact rule responsible for the denial and determine whether the rule is intentional or needs to be changed.

B. Tell the engineer to retry the denied action verbatim repeatedly until the denial stops appearing, without inspecting the active permission rules to determine whether the denial is intentional.

Incorrect

Repeated retries do not address the underlying permission configuration. The denial may be intentional, so the correct approach is to inspect and understand the active rules first.

C. Disable the permission system entirely across all scopes to remove the denial, eliminating all tool- pattern and deny-rule controls rather than identifying and amending the specific rule.

Incorrect

Disabling the permission system removes important security controls and violates the principle of least privilege. Only the specific rule that is incorrectly denying the required action should be considered for amendment.

D. Grant the engineer unrestricted Bash access to bypass the specific rule causing the denial, removing all tool-pattern constraints rather than amending only the rule in question. Incorrect

Unrestricted Bash access creates an unnecessarily broad security exposure. The appropriate solution is to identify and adjust the specific permission rule if necessary, rather than granting unrestricted capabilities.

Final Answer: A. Inspect the active permission rules across all applicable scopes to identify and resolve the specific denial.

---

## Exam Claude Certified Architect Professional (CCAR-P) (PDF) topic 1 question 7
Question #: 7
Topic #: 1

A managed agent deployment for claims triage has grown from 6 tools to 34 tools over 18 months as product teams added capabilities. Triage accuracy has declined from 91 percent to 78 percent, and average tool- selection latency has increased by 2.3 seconds. A junior engineer has proposed adding a tool-router agent in front of the current agent to filter the tool list per request. Which two findings should you present to justify capability decomposition before adding the router? (Select two.) Each correct answer presents part of the solution.

A. Tool descriptions overlap across multiple claim categories within the agent's tool set.
B. Several tools have not been invoked across the most recent 90 days of traffic.
C. The router pattern is well documented across publicly available agent literature.
D. The proposed router introduces an additional model call on every incoming request.
E. The 34 tools serve four distinct claim-workflow domains within the triage scope.

**Answer: DE**

Explanation:
A. Tool descriptions overlap across multiple claim categories within the agent's tool set.

Incorrect

Overlapping tool descriptions can contribute to tool-selection confusion, but this finding alone does not directly establish that the agent should first be decomposed into separate capability domains.

B. Several tools have not been invoked across the most recent 90 days of traffic.

Incorrect

Unused tools are useful evidence for tool rationalization or removal, but they do not directly demonstrate that the 34-tool set should be divided into separate capability domains.

C. The router pattern is well documented across publicly available agent literature.

Incorrect

The existence of a documented routing pattern does not establish that it is the right architectural solution for this deployment. The team should first understand the underlying capability structure and performance problem.

D. The proposed router introduces an additional model call on every incoming request.

Correct

Adding another agent introduces additional model-call overhead, which can increase latency and complexity. Since the existing system already has a 2.3-second increase in tool-selection latency, adding another model call may worsen the problem rather than address its root cause. E. The 34 tools serve four distinct claim-workflow domains within the triage scope.

Correct

This is strong evidence for capability decomposition. If the tools naturally fall into four distinct workflow domains, the system can potentially be divided into more focused agents or capability groups, reducing the number of tools each agent must reason over.

Final Answer: D and E

---

## Exam Claude Certified Architect Professional (CCAR-P) (PDF) topic 1 question 8
Question #: 8
Topic #: 1

A technical team is debating whether to implement a new capability for generating regulatory filings from internal data as a Claude Skill or as an MCP server. The capability requires a fixed authoring procedure with embedded examples, does not need to call live external systems, and must be portable across three Claude deployments: claude.ai, an internal API integration, and Claude Code. Which factor most strongly favors implementing the capability as a Skill?

A. The capability needs to query a live database for the most recent regulatory filings.
B. The capability requires direct authentication against the corporate identity provider.
C. The capability is procedural knowledge with no live external-system calls required.
D. The capability must also be callable from a developer's command-line interface.

**Answer: C**

Explanation:
A. The capability needs to query a live database for the most recent regulatory filings.

Incorrect

A capability that needs to interact with a live external system is better suited to an MCP-based integration. MCP is designed to connect Claude with external tools, services, and data sources.

B. The capability requires direct authentication against the corporate identity provider.

Incorrect

Direct authentication and integration with enterprise systems are characteristics that favor an MCP server or another external integration, rather than a Skill focused on procedural knowledge.

C. The capability is procedural knowledge with no live external-system calls required.

Correct

This is the strongest reason to choose a Skill. Skills are well suited to reusable procedures, instructions, examples, and domain-specific workflows that Claude can apply when relevant. Since this capability does not need to call live external systems, an MCP server is unnecessary.

D. The capability must also be callable from a developer's command-line interface.

Incorrect

Being usable from Claude Code does not by itself make MCP the better choice. The key distinction is whether the capability primarily provides procedural knowledge or requires external tools and system access.

Final Answer: C. The capability is procedural knowledge with no live external-system calls

---

## Exam Claude Certified Architect Professional (CCAR-P) (PDF) topic 1 question 9
Question #: 9
Topic #: 1

A Claude architect is auditing configuration scope assignments. Which two statements correctly identify an appropriate use of user-scope configuration versus other scopes? (Select two.)

A. Defining MCP server endpoints shared by all contributors to a specific repository.
B. Storing API authentication keys so they are not committed to version control.
C. Enforcing a company-wide policy that disables a feature for all engineers.
D. Persisting personal editor theme preferences that follow an engineer across projects.
E. Saving a preferred Claude response language that applies to all repositories the engineer uses.

**Answer: DE**

Explanation:
A. Defining MCP server endpoints shared by all contributors to a specific repository.

Incorrect

MCP servers shared by contributors to a particular repository are better suited to project scope, because project-level configuration can be shared and maintained with the project rather than tied to one individual engineer.

B. Storing API authentication keys so they are not committed to version control.

Incorrect

Authentication keys and other secrets require secure secret-management practices. Simply placing them in user-scope configuration is not the appropriate general solution for protecting sensitive credentials.

C. Enforcing a company-wide policy that disables a feature for all engineers.

Incorrect

Company-wide security or policy requirements should be enforced through managed/organizational configuration, rather than user scope. Individual engineers should not be able to override centrally required controls.

D. Persisting personal editor theme preferences that follow an engineer across projects.

Correct

User scope is appropriate for personal preferences that should follow an individual engineer across different projects. An editor theme is a good example because it does not need to be shared with the entire team.

E. Saving a preferred Claude response language that applies to all repositories the engineer uses.

Correct

A preferred response language is also an individual user preference. User scope allows the preference to persist across the engineer's different repositories and projects without imposing it on other team members.

Final Answer: D and E

---

## Exam Claude Certified Architect Professional (CCAR-P) (PDF) topic 1 question 10
Question #: 10
Topic #: 1

A research summarization assistant has been deployed for six months. A user has flagged that a generated summary contained a fabricated citation. The product team has asked whether the incident requires architectural action or whether it is an isolated case. Which two Diligence-competency actions should you take? (Select two.) Each correct answer presents part of the solution.

A. Disable the assistant immediately for all current users without any prior diagnostic analysis.
B. Review whether citation-grounding controls exist anywhere in the current generation pipeline.
C. Sample recent summaries to estimate the fabrication frequency across the population.
D. Treat the incident as an anecdotal isolated case and take no further investigative action.
E. Communicate to users that the assistant does not fabricate output as a matter of design.

**Answer: BC**

Explanation:
A. Disable the assistant immediately for all current users without any prior diagnostic analysis.

Incorrect

Immediately disabling the assistant may be appropriate in an extreme safety situation, but this scenario first requires evidence-based investigation. The team needs to understand the scope and cause of the issue before deciding on an architectural response.

B. Review whether citation-grounding controls exist anywhere in the current generation pipeline.

Correct

Reviewing the existing pipeline determines whether there are controls designed to prevent unsupported or fabricated citations. This helps identify potential architectural weaknesses and whether additional grounding or validation mechanisms are needed.

C. Sample recent summaries to estimate the fabrication frequency across the population.

Correct

Sampling recent outputs helps determine whether the reported citation is an isolated event or part of a recurring pattern. Measuring the frequency provides evidence for deciding whether broader corrective or architectural action is warranted.

D. Treat the incident as an anecdotal isolated case and take no further investigative action.

Incorrect

A single reported incident should not automatically be dismissed. Diligence requires investigating and assessing the broader risk before concluding that the problem is isolated.

E. Communicate to users that the assistant does not fabricate output as a matter of design.

Incorrect

A design intention does not prove that the system cannot produce fabricated content. Such a statement could create a false sense of reliability rather than addressing the reported incident.

Final Answer: B and C

---

## Exam Claude Certified Architect Professional (CCAR-P) (PDF) topic 1 question 11
Question #: 11
Topic #: 1

A customer support team has proposed delegating customer refund decisions to a Claude-driven workflow with no human review for refunds under 50 USD. The team's reasoning is that small refunds are low-risk and human review would erase the efficiency gain. Which Delegation-competency principle should quide your response?

A. Delegation should be avoided entirely wherever financial transactions occur in the workflow.
B. Delegation should always include human review on every decision the workflow produces.
C. Delegation scope should reflect the type of risk involved, not the transaction size alone.
D. Delegation scope should be set primarily by maximizing efficiency gains across the workflow.

**Answer: C**

Explanation:
A. Delegation should be avoided entirely wherever financial transactions occur in the workflow.

Incorrect

Delegation is not automatically inappropriate simply because a workflow involves financial transactions. The appropriate approach is to assess the specific risks and consequences and determine what level of human oversight is necessary.

B. Delegation should always include human review on every decision the workflow produces.

Incorrect

Human review is important for higher-risk decisions, but requiring manual review for every single decision is unnecessarily rigid. Appropriate delegation depends on the risk associated with the task and its potential impact.

C. Delegation scope should reflect the type of risk involved, not the transaction size alone.

Correct

The risk associated with an action is more important than the dollar amount alone. Even a small refund could involve fraud, customer disputes, policy exceptions, or other consequences. Delegation should therefore consider factors such as financial, legal, customer, and reputational risk when determining the appropriate level of human oversight.

D. Delegation scope should be set primarily by maximizing efficiency gains across the workflow.

Incorrect

Efficiency is an important consideration, but it should not override risk management and accountability. Delegation decisions should balance productivity with the potential consequences of automated decisions.

Final Answer: C. Delegation scope should reflect the type of risk involved, not the transaction size alone.

---

## Exam Claude Certified Architect Professional (CCAR-P) (PDF) topic 1 question 12
Question #: 12
Topic #: 1

You must present an architectural recommendation to deploy a Claude-based contract review assistant to a steering committee that includes the CFO, the general counsel, and the CIO. Each stakeholder cares about different aspects of the decision. How should you structure the recommendation document?

A. Lead with detailed cost projections across the full multi-year horizon before the rationale section.
B. Lead with the technical architecture diagram and the full component list before any other section.
C. Present the same dense narrative throughout with no stakeholder differentiation in any section.
D. Lead with the architectural decision, then address each stakeholder's primary concerns directly.

**Answer: D**

Explanation:
A. Lead with detailed cost projections across the full multi-year horizon before the rationale section.

Incorrect

Cost is highly relevant to the CFO, but leading exclusively with detailed financial projections may not address the legal, technical, and strategic concerns of the other stakeholders.

B. Lead with the technical architecture diagram and the full component list before any other section.

Incorrect

The technical architecture is particularly important to the CIO, but beginning with a detailed component list may overwhelm stakeholders who primarily need to understand the decision, rationale, risks, and business impact.

C. Present the same dense narrative throughout with no stakeholder differentiation in any section.

Incorrect

Different stakeholders have different responsibilities and concerns. A one-size-fits-all narrative may fail to address the specific information each decision-maker needs.

D. Lead with the architectural decision, then address each stakeholder's primary concerns directly.

Correct

The strongest approach is to state the recommendation clearly at the beginning and then address the key concerns of each stakeholder. For example, the CFO may focus on cost and ROI, the General Counsel on legal risk and compliance, and the CIO on architecture, security, integration, and operational considerations.

This structure makes the recommendation decision-oriented, concise, and relevant to the entire steering committee.

Final Answer: D. Lead with the architectural decision, then address each stakeholder's primary concerns directly.

---

## Exam Claude Certified Architect Professional (CCAR-P) (PDF) topic 1 question 13
Question #: 13
Topic #: 1

You are investigating an MCP server that fails on first launch but succeeds on subsequent runs. System permission dialogs appeared during the first launch. Which response is most appropriate?

A. Treat the first-run failure as a permanent fault, replace the MCP server, and do not verify whether subsequent runs succeed.
B. Reinstall the operating system to clear all permission state without first confirming whether the one- time permission grant caused the failure.
C. Recognize the first-run permission grant as the cause, document the expected behavior in onboarding guidance, and confirm that subsequent runs succeed.
D. Disable operating-system permission dialogs entirely, accept the resulting security implications, and proceed without confirming whether the failure recurs.

**Answer: C**

Explanation:
A. Treat the first-run failure as a permanent fault, replace the MCP server, and do not verify whether subsequent runs succeed.

Incorrect

The fact that the MCP server succeeds on subsequent runs strongly suggests that the initial failure may be related to first-run permissions or authorization. Replacing the server without investigating would be unnecessary and could fail to address the actual cause.

B. Reinstall the operating system to clear all permission state without first confirming whether the one- time permission grant caused the failure.

Incorrect

Reinstalling the operating system is an extreme and unnecessary troubleshooting step. The permission dialogs provide a much more relevant clue that should be investigated first.

C. Recognize the first-run permission grant as the cause, document the expected behavior in onboarding guidance, and confirm that subsequent runs succeed.

Correct

The appearance of system permission dialogs during the first launch is a strong indication that the initial failure was related to one-time operating-system authorization. The appropriate response is to document this expected first-run behavior and verify that the MCP server works normally afterward.

D. Disable operating-system permission dialogs entirely, accept the resulting security implications, and proceed without confirming whether the failure recurs.

Incorrect

Disabling operating-system permission controls unnecessarily weakens security protections. The better approach is to understand the permission requirement, document it, and verify successful subsequent operation.

Final Answer: C. Recognize the first-run permission grant as the cause, document the expected behavior in onboarding guidance, and confirm that subsequent runs succeed.

---

## Exam Claude Certified Architect Professional (CCAR-P) (PDF) topic 1 question 14
Question #: 14
Topic #: 1

You are producing an architecture guide for a new deployment and must complete the planning steps before drafting each section. Which two steps must be completed BEFORE drafting each section of the guide? (Select two.) Each correct answer presents part of the solution.

A. Translate the guide into the supported regional languages for the candidate population.
B. Establish the document under version control with a defined review cadence and approver list.
C. Identify the audience and the questions the guide must answer for that audience.
D. Outline the guide sections covering the overview, components, contracts, flows, runbooks, and limitations.
E. Validate the guide with the implementation team and incorporate corrections.

**Answer: CD**

Explanation:
A. Translate the guide into the supported regional languages for the candidate population.

Incorrect

Translation is a later-stage activity. Before drafting, the priority is to establish who the guide is for and what information it needs to contain.

B. Establish the document under version control with a defined review cadence and approver list.

Incorrect

Version control, review cadence, and approval processes are valuable for document governance, but they are not the primary content-planning steps required before drafting the sections.

C. Identify the audience and the questions the guide must answer for that audience.

Correct

Before writing, you should understand the intended audience and their information needs. This ensures that each section is written at the appropriate technical level and addresses the questions stakeholders actually need answered.

D. Outline the guide sections covering the overview, components, contracts, flows, runbooks, and limitations.

Correct

Creating an outline establishes the guide's structure and scope before detailed writing begins. It helps ensure important architecture topics are covered systematically and prevents unnecessary duplication or omissions.

E. Validate the guide with the implementation team and incorporate corrections.

Incorrect

Validation with the implementation team is an important review and refinement step, but it happens after the relevant content has been drafted rather than before drafting each section.

Final Answer: C and D

---

## Exam Claude Certified Architect Professional (CCAR-P) (PDF) topic 1 question 15
Question #: 15
Topic #: 1

You are responding to an adversarial input pattern in which users include text claiming admin authority and instructing the model to bypass safety restrictions. Which combination of controls most effectively mitigates this attack pattern?

A. Prompt-level instructions that treat user content as untrusted data, runtime classifiers that detect override attempts, scoped tool permissions that cannot be elevated by user content, and audit logging of attempts.
B. Granting users any privilege level they assert in their message content, on the assumption that cooperative behavior requires honoring self-declared authority without independent verification.
C. Trusting that the model will intrinsically recognize and reject all bypass attempts without prompt-level instructions, runtime classifiers, scoped permissions, or audit logging.
D. Removing all safety restrictions and guardrails to eliminate the attack surface that bypass attempts target, accepting that this makes the assistant unrestricted for all inputs.

**Answer: A**

Explanation:
A. Prompt-level instructions that treat user content as untrusted data, runtime classifiers that detect override attempts, scoped tool permissions that cannot be elevated by user content, and audit logging of attempts.

Correct

This approach provides defense in depth. User-provided claims of authority are treated as untrusted input, runtime controls can identify suspicious override attempts, and scoped permissions prevent the user from escalating privileges simply through prompt content. Audit logging also supports monitoring, investigation, and incident response.

B. Granting users any privilege level they assert in their message content, on the assumption that cooperative behavior requires honoring self-declared authority without independent verification.

Incorrect

User-supplied text is not a reliable source of authorization. Allowing users to declare their own privileges creates a serious privilege-escalation risk.

C. Trusting that the model will intrinsically recognize and reject all bypass attempts without prompt-level instructions, runtime classifiers, scoped permissions, or audit logging.

Incorrect

A model should not be treated as the sole security boundary. Multiple technical and procedural controls are needed because adversarial inputs can sometimes bypass model-level instructions.

D. Removing all safety restrictions and guardrails to eliminate the attack surface that bypass attempts target, accepting that this makes the assistant unrestricted for all inputs.

Incorrect

Removing safety controls does not mitigate the attack; it eliminates the protections that are intended to prevent unsafe behavior.

Final Answer: A. Use layered prompt, runtime, permission, and audit controls.

---

## Exam Claude Certified Architect Professional (CCAR-P) (PDF) topic 1 question 16
Question #: 16
Topic #: 1

You are a solution architect designing a Claude-based assistant with access to 60 internal tools across multiple business domains. Loading every tool definition on every request increases token usage and time to first response. Which design pattern best addresses this issue without sacrificing capability breadth?

A. Increase the maximum context length and load all 60 tool definitions on every request, accepting the higher token cost and latency as necessary for full capability.
B. Apply progressive tool discovery so a curated initial subset is exposed and additional tools are loaded on demand based on the task.
C. Hard-code a fixed set of five tools per request to reduce token usage, regardless of whether those tools are relevant to the current task.
D. Use a separate model call to summarize all 60 tool definitions before each user turn.

**Answer: B**

Explanation:
A. Increase the maximum context length and load all 60 tool definitions on every request, accepting the higher token cost and latency as necessary for full capability.

Incorrect

Increasing context capacity does not solve the underlying efficiency problem. Loading all 60 tool definitions on every request still consumes tokens and processing time, even when most tools are irrelevant to the current task.

B. Apply progressive tool discovery so a curated initial subset is exposed and additional tools are loaded on demand based on the task.

Correct

Progressive tool discovery reduces the amount of tool information that must be loaded initially. A relevant subset can be exposed first, and additional tools can be discovered or loaded when the task requires them. This preserves broad capability while reducing initial token usage and latency.

C. Hard-code a fixed set of five tools per request to reduce token usage, regardless of whether those tools are relevant to the current task.

Incorrect

Although this reduces token usage, it can restrict capability and prevent Claude from accessing tools required for a particular request. The selection should be task-relevant rather than an arbitrary fixed number.

D. Use a separate model call to summarize all 60 tool definitions before each user turn.

Incorrect

This adds another model call and therefore introduces additional latency and resource consumption. It also does not necessarily provide Claude with the precise tool definitions needed for reliable tool use.

Final Answer: B. Apply progressive tool discovery so relevant tools are exposed initially and additional tools are loaded on demand.

---

## Exam Claude Certified Architect Professional (CCAR-P) (PDF) topic 1 question 17
Question #: 17
Topic #: 1

You are presenting an architectural decision to a mixed audience that includes an executive sponsor and the engineering leads who will implement the decision. Which presentation strategy best serves both audiences?

A. Open with a deep dive into low-level implementation details targeted at engineering leads, and stop there without addressing the business outcomes or trade-offs the executive sponsor needs.
B. Skip the rationale, alternatives, and trade-off discussion entirely and simply announce the chosen decision, leaving both audiences without the context needed to implement or validate it.
C. Lead with the decision, the business outcomes it serves, and the trade-offs accepted; follow with the technical rationale, alternatives, and implementation implications for the engineering audience.
D. Present a single undifferentiated narrative that addresses technical and business concerns with equal weight throughout, treating both audiences as requiring the same depth on every section.

**Answer: C**

Explanation:
A. Open with a deep dive into low-level implementation details targeted at engineering leads, and stop there without addressing the business outcomes or trade-offs the executive sponsor needs.

Incorrect

This approach focuses almost entirely on the engineering audience and fails to address the executive sponsor's need to understand business outcomes, strategic rationale, risks, and trade-offs.

B. Skip the rationale, alternatives, and trade-off discussion entirely and simply announce the chosen decision, leaving both audiences without the context needed to implement or validate it.

Incorrect

Simply announcing the decision does not provide enough context. Both audiences need to understand why the decision was made, what alternatives were considered, and what trade-offs were accepted.

C. Lead with the decision, the business outcomes it serves, and the trade-offs accepted; follow with the technical rationale, alternatives, and implementation implications for the engineering audience.

Correct

This structure serves both audiences effectively. Executives get the decision, business value, and key trade- offs early, while engineering leads receive the technical rationale, alternatives, and implementation details needed to execute the decision.

D. Present a single undifferentiated narrative that addresses technical and business concerns with equal weight throughout, treating both audiences as requiring the same depth on every section.

Incorrect

Different stakeholders have different information needs. Giving every section equal technical and business depth can make the presentation less focused and less useful for both audiences.

Final Answer: C. Lead with the decision, business outcomes, and trade-offs, followed by the technical rationale and implementation implications.

---

## Exam Claude Certified Architect Professional (CCAR-P) (PDF) topic 1 question 18
Question #: 18
Topic #: 1

You are designing a test strategy for a Claude-based pipeline that handles sensitive financial data. hich two test types should be prioritized to cover both safety under attack and cross-component correctness? (Select two.)

A. Integration tests that verify end-to-end pipeline behavior across all components.
B. Smoke tests that verify core paths after each deployment.
C. Unit tests targeting only individual prompt-template rendering logic.
D. Regression tests against a stable reference set of previously known-good outputs.
E. Adversarial tests using prompt-injection and malformed-input cases.

**Answer: AE**

Explanation:
A. Integration tests that verify end-to-end pipeline behavior across all components.

Correct

Integration tests verify that the different components of the pipeline work correctly together. For a sensitive financial-data workflow, this is important because failures can occur at the boundaries between components even when individual components work correctly in isolation.

B. Smoke tests that verify core paths after each deployment.

Incorrect

Smoke tests are useful for quickly checking whether the system's basic functionality works after deployment, but they do not provide sufficient coverage for adversarial safety or detailed cross-component correctness.

C. Unit tests targeting only individual prompt-template rendering logic.

Incorrect

Unit tests are valuable for testing isolated logic, but testing only prompt-template rendering does not adequately cover the end-to-end pipeline or attacks such as prompt injection and malformed inputs.

D. Regression tests against a stable reference set of previously known-good outputs.

Incorrect

Regression testing is useful for detecting unexpected changes in output behavior, but it does not directly provide targeted coverage for adversarial attacks or verify all cross-component interactions.

E. Adversarial tests using prompt-injection and malformed-input cases.

Correct

Adversarial testing directly evaluates how the system behaves under malicious, unexpected, or malformed inputs. For a financial-data pipeline, this helps identify safety weaknesses and potential ways attackers could manipulate the system.

Final Answer: A and E

A = Cross-component correctness

E = Safety under attack

---

## Exam Claude Certified Architect Professional (CCAR-P) (PDF) topic 1 question 19
Question #: 19
Topic #: 1

You are running a risk assessment on a planned Claude-based deployment and must complete the inventory steps before assessing threats against assets. Which two steps must be completed BEFORE assessing threats against assets to estimate likelihood and impact? (Select two.) Each correct answer presents part of the solution.

A. Recommend mitigations and residual-risk acceptance for the risks that remain after analysis.
B. Recommend mitigations and residual-risk acceptance for risks that remain.
C. Enumerate the threat actors and attack vectors relevant to the deployment.
D. Document the assessment outcome with risks, mitigations, residual risk, and acceptance owners.
E. Identify the assets that the deployment touches, along with the sensitivity of each asset.

**Answer: CE**

Explanation:
A. Recommend mitigations and residual-risk acceptance for the risks that remain after analysis.

Incorrect

Mitigations and residual-risk acceptance are later stages of the risk-assessment process. You first need to identify the assets and relevant threats before determining appropriate controls.

B. Recommend mitigations and residual-risk acceptance for risks that remain.

Incorrect

This is also a post-analysis activity. Mitigation decisions depend on understanding the risks, their likelihood, their impact, and the controls already available.

C. Enumerate the threat actors and attack vectors relevant to the deployment.

Correct

Identifying relevant threat actors and attack vectors is necessary before estimating risk. Understanding who could attack the system and how they might do so helps establish the likelihood and potential impact of threats against the identified assets.

D. Document the assessment outcome with risks, mitigations, residual risk, and acceptance owners.

Incorrect

Documenting the final assessment is generally performed after the analysis has been completed. You need the risk findings and mitigation decisions before producing the final assessment record.

E. Identify the assets that the deployment touches, along with the sensitivity of each asset.

Correct

Asset identification is a foundational step. Knowing which assets are involved and how sensitive they are provides the basis for evaluating the potential impact if those assets are compromised.

Final Answer: C and E

C = Identify relevant threats and attack vectors

E = Identify affected assets and their sensitivity

---

## Exam Claude Certified Architect Professional (CCAR-P) (PDF) topic 1 question 20
Question #: 20
Topic #: 1

A senior architect is managing stakeholder expectations for a Claude-based reporting assistant midway through development. Stakeholders have escalating concerns about response latency. Which two actions most directly address stakeholder expectation alignment in this situation? (Select two.)

A. Replace the current Claude model with a third-party model that may offer lower latency without evaluation.
B. Pause all development and reallocate engineering resources entirely to latency optimization.
C. Present measured p50 and p95 latency baselines against the agreed SLA thresholds so stakeholders have accurate data.
D. Revise the SLA definition collaboratively with stakeholders if current targets are not achievable given production constraints.
E. Communicate that latency concerns are a known LLM limitation and outside the architecture team's control.

**Answer: CD**

Explanation:
A. Replace the current Claude model with a third-party model that may offer lower latency without evaluation.

Incorrect

Replacing the model without proper evaluation does not address stakeholder alignment. It could introduce new quality, security, compatibility, or performance risks. Model changes should be based on measured requirements and controlled evaluation.

B. Pause all development and reallocate engineering resources entirely to latency optimization.

Incorrect

This is a broad project-management decision rather than a direct stakeholder-alignment action. It may also unnecessarily disrupt other development priorities without first establishing the actual performance gap.

C. Present measured p50 and p95 latency baselines against the agreed SLA thresholds so stakeholders have accurate data.

Correct

Providing objective performance measurements gives stakeholders a clear understanding of the current state. Comparing p50 and p95 latency with the agreed SLA helps distinguish actual performance gaps from perception and supports informed decisions.

D. Revise the SLA definition collaboratively with stakeholders if current targets are not achievable given production constraints.

Correct

If the original SLA is unrealistic given validated production constraints, the appropriate approach is to review and revise it collaboratively with stakeholders. This creates shared expectations rather than silently accepting an unachievable target.

E. Communicate that latency concerns are a known LLM limitation and outside the architecture team's control.

Incorrect

This approach dismisses stakeholder concerns instead of addressing them. Architecture teams should provide measured evidence, options, and trade-offs rather than treating performance as completely outside their responsibility.

Final Answer: C and D

C = Establish objective latency baselines against the SLA D = Collaboratively revise the SLA when justified by production constraints

---

## Exam Claude Certified Architect Professional (CCAR-P) (PDF) topic 1 question 21
Question #: 21
Topic #: 1

A Claude architect is designing a HIPAA-compliant pipeline that processes patient records. Which two design decisions directly support HIPAA compliance requirements? (Select two.)

A. Setting max_tokens to a low value to minimize the volume of text generated per request.
B. Selecting the highest-capability Claude model to maximize diagnostic accuracy.
C. Enforcing role-based access controls so that PH is retrievable only by authorized personnel.
D. Ensuring patient data is never included in training feedback loops sent to the model provider without a BAA in place.
E. Using streaming responses to reduce perceived latency for clinical users.

**Answer: CD**

Explanation:
A. Setting max_tokens to a low value to minimize the volume of text generated per request.

Incorrect

Reducing the maximum number of generated tokens can help control cost and output length, but it does not directly address HIPAA requirements such as access control, protection of protected health information, or appropriate contractual safeguards.

B. Selecting the highest-capability Claude model to maximize diagnostic accuracy.

Incorrect

Model capability and HIPAA compliance are separate concerns. Choosing a more capable model does not by itself provide the privacy, access-control, contractual, or data-handling protections required for compliant processing.

C. Enforcing role-based access controls so that PHI is retrievable only by authorized personnel.

Correct

Role-based access control (RBAC) limits access to protected health information (PHI) based on authorized roles. Restricting PHI access to appropriate personnel supports the principle of controlled access required when handling sensitive healthcare information.

D. Ensuring patient data is never included in training feedback loops sent to the model provider without a BAA in place.

Correct

Patient information requires appropriate privacy and contractual safeguards when processed by an external service provider. Ensuring PHI is not improperly used in provider training or feedback processes, and having the appropriate Business Associate Agreement (BAA) where required, directly supports HIPAA compliance.

E. Using streaming responses to reduce perceived latency for clinical users.

Incorrect

Streaming can improve the user experience and perceived response speed, but it does not directly establish HIPAA privacy or security compliance.

Final Answer: C and D

C = Enforce role-based access to PHI

D = Apply appropriate PHI data-handling and BAA safeguards

---

## Exam Claude Certified Architect Professional (CCAR-P) (PDF) topic 1 question 22
Question #: 22
Topic #: 1

You are preparing an operational runbook for a Claude-based service. Which content is essential to include in the runbook?

A. Dashboard and log references only, without alert definitions, triage steps, escalation paths, or rollback procedures for the on-call engineer to act on.
B. Common alerts and their triage steps, escalation paths, rollback procedures, and references to the relevant dashboards and logs.
C. Alert definitions and triage steps only, without escalation paths, rollback procedures, or references to dashboards and logs for on-call use.
D. Escalation paths and rollback procedures only, without alert definitions, triage steps, or dashboard references to guide initial incident response.

**Answer: B**

Explanation:
A. Dashboard and log references only, without alert definitions, triage steps, escalation paths, or rollback procedures for the on-call engineer to act on.

Incorrect

Dashboards and logs are useful, but references alone do not tell the on-call engineer what the alert means, how to investigate it, who to contact, or how to recover the service.

B. Common alerts and their triage steps, escalation paths, rollback procedures, and references to the relevant dashboards and logs.

Correct

A strong operational runbook should provide actionable guidance for incident response. It should explain common alerts, initial triage, escalation procedures, rollback or recovery steps, and where to find the relevant monitoring information.

C. Alert definitions and triage steps only, without escalation paths, rollback procedures, or references to dashboards and logs for on-call use.

Incorrect

Alert definitions and triage are important, but they are incomplete without escalation paths, recovery procedures, and monitoring references.

D. Escalation paths and rollback procedures only, without alert definitions, triage steps, or dashboard references to guide initial incident response.

Incorrect

Rollback and escalation procedures are valuable, but the on-call engineer also needs to know how to recognize and investigate the incident before escalating or rolling back.

Final Answer: B. Common alerts, triage steps, escalation paths, rollback procedures, and dashboard/log references.

---

## Exam Claude Certified Architect Professional (CCAR-P) (PDF) topic 1 question 23
Question #: 23
Topic #: 1

A technical team is cataloguing risks specific to Claude's use in a document-grounded Q & A system. Which two items represent failure modes intrinsic to LLM-based systems rather than generic software defects? (Select two.)

A. An expired TLS certificate blocks outbound API calls to Claude.
B. A database connection timeout causes retrieval to return an empty result set.
C. The model refuses a legitimate query because surface features trigger an overly broad safety pattern.
D. A misconfigured load balancer routes requests to a deprecated API version.
E. The model generates a plausible-sounding answer unsupported by any retrieved document.

**Answer: CE**

Explanation:
A. An expired TLS certificate blocks outbound API calls to Claude.

Incorrect

An expired TLS certificate is a general infrastructure and security configuration problem. It can affect many types of applications and is not specific to LLM behavior.

B. A database connection timeout causes retrieval to return an empty result set.

Incorrect

A database connection timeout is a generic integration or infrastructure failure. It is not an intrinsic failure mode of the language model itself.

C. The model refuses a legitimate query because surface features trigger an overly broad safety pattern.

Correct

This is an LLM-specific failure mode. Safety systems can sometimes produce over-refusals, where a legitimate request is incorrectly classified as unsafe because of particular words or patterns in the input.

D. A misconfigured load balancer routes requests to a deprecated API version.

Incorrect

This is a deployment and infrastructure configuration issue, not an intrinsic LLM failure mode.

E. The model generates a plausible-sounding answer unsupported by any retrieved document.

Correct

This is a classic hallucination/grounding failure. An LLM can generate an answer that sounds convincing even when the available source documents do not support the claim. This is particularly important in document- grounded Q&A systems. Final Answer: C and E

C = Over-refusal of legitimate requests

E = Plausible but unsupported generated answers

---

## Exam Claude Certified Architect Professional (CCAR-P) (PDF) topic 1 question 24
Question #: 24
Topic #: 1

You are rolling out monitoring for a Claude-based deployment and must complete the specification steps efore instrumenting the deployment. Which two steps must be completed BEFORE instrumenting the deployment to emit metrics and traces? (Select two.) Each correct answer presents part of the solution.

A. Define the metrics and the slices the deployment will monitor across normal and adversarial traffic.
B. Tune the alert thresholds based on observed normal-state distributions to reduce false positives.
C. Define the service-level objectives (SLOs) and the error budgets the deployment will be held to.
D. Build the dashboards that surface metrics across slices at the cadence the team operates on.
E. Document the dashboards, alerts, and runbooks for the on-call rotation that will respond.

**Answer: AC**

Explanation:
A. Define the metrics and the slices the deployment will monitor across normal and adversarial traffic.

Correct

Before instrumentation, you need to determine what you are going to measure. Defining the metrics and relevant slices establishes the observability requirements and ensures the deployment collects meaningful data for both normal and adversarial traffic.

B. Tune the alert thresholds based on observed normal-state distributions to reduce false positives.

Incorrect

Threshold tuning requires observed operational data. That data generally becomes available only after instrumentation has been implemented and the system has produced baseline measurements.

C. Define the service-level objectives (SLOs) and the error budgets the deployment will be held to.

Correct

SLOs establish the target level of service performance and reliability. Defining them before instrumentation ensures the metrics and telemetry collected can be evaluated against meaningful objectives and error budgets.

D. Build the dashboards that surface metrics across slices at the cadence the team operates on.

Incorrect

Dashboards depend on the metrics and telemetry being available. While dashboard requirements can be planned early, building the operational dashboards is normally part of the implementation after the monitoring specifications have been defined.

E. Document the dashboards, alerts, and runbooks for the on-call rotation that will respond. Incorrect

Runbooks and operational documentation are important, but they should be developed after the monitoring requirements, instrumentation, dashboards, and alerting behavior have been established.

Final Answer: A and C

A = Define what to measure and how to slice the data

C = Define SLOs and error budgets

---

## Exam Claude Certified Architect Professional (CCAR-P) (PDF) topic 1 question 25
Question #: 25
Topic #: 1

A document analysis service processes legal filings averaging 80,000 tokens each. Each filing is queried by attorneys an average of 14 times during a case. The current architecture sends the full filing on every query. The CFO has asked you to reduce per-query costs while preserving response quality. The security officer requires that filing contents not be stored outside Fabrikam's tenancy. Which optimization approach should you recommend?

A. Summarize each filing once at intake and run all subsequent queries against the summary.
B. Cache the filing as the prompt prefix for reuse across the 14 queries per case.
C. Index filings in a vector store and retrieve only the relevant passages per query.
D. Move the workload to a smaller Claude model to reduce the per-token cost paid.

**Answer: B**

Explanation:
A. Summarize each filing once at intake and run all subsequent queries against the summary.

Incorrect

Summarizing the filing once can reduce the amount of context used later, but it may discard important legal details needed for subsequent attorney questions. For legal filings, losing precise language or specific clauses can reduce response quality.

B. Cache the filing as the prompt prefix for reuse across the 14 queries per case.

Correct

Caching the repeated filing content as a prompt prefix can reduce the cost associated with repeatedly processing the same large context. Since the same 80,000-token filing is reused across approximately 14 queries, caching is particularly valuable. The implementation can also be designed to keep the filing within Fabrikam's controlled environment and approved data-handling boundaries.

C. Index filings in a vector store and retrieve only the relevant passages per query.

Incorrect

Retrieval can reduce the amount of context sent for each query, but it requires storing and indexing the filing content in a vector store. Given the explicit requirement that filing contents not be stored outside Fabrikam's tenancy, an externally hosted vector store would be unsuitable unless it is explicitly within the required tenancy and security boundary.

D. Move the workload to a smaller Claude model to reduce the per-token cost paid. Incorrect

A smaller model may reduce cost, but it could also affect response quality, especially for complex legal- document analysis. The requirement specifically calls for preserving quality, so reducing model capability is not the most direct optimization.

Final Answer: B. Cache the filing as the prompt prefix for reuse across the 14 queries per case.

---

## Exam Claude Certified Architect Professional (CCAR-P) (PDF) topic 1 question 26
Question #: 26
Topic #: 1

When communicating an architectural decision to a security and compliance reviewer, which content set is most aligned with that audience's primary concerns?

A. Feature delivery schedule, roadmap dependencies, and scope boundaries for the product manager.
B. Implementation timeline, component interfaces, and deployment sequence for the engineering team.
C. Threat model, control mappings, residual-risk acceptance criteria, and audit traceability.
D. Decision rationale, business outcomes, and high-level risk summary for executive review.

**Answer: C**

Explanation:
A. Feature delivery schedule, roadmap dependencies, and scope boundaries for the product manager.

Incorrect

This information is primarily relevant to a product manager. While delivery timelines and scope can matter to security teams, they do not directly address the reviewer's main concerns around security controls, threats, compliance, and auditability.

B. Implementation timeline, component interfaces, and deployment sequence for the engineering team.

Incorrect

These details are mainly intended for the engineering implementation team. They explain how the system will be built and deployed but do not provide sufficient evidence about security risks and compliance controls.

C. Threat model, control mappings, residual-risk acceptance criteria, and audit traceability.

Correct

This content directly addresses the primary concerns of security and compliance reviewers. They need to understand the threats being considered, which controls mitigate those threats, what residual risks remain, who accepts those risks, and how the decisions can be demonstrated during an audit.

D. Decision rationale, business outcomes, and high-level risk summary for executive review.

Incorrect

These elements are more appropriate for an executive audience. Executives generally need the decision, business value, and high-level risks rather than detailed control mappings and audit evidence.

Final Answer: C. Threat model, control mappings, residual-risk acceptance criteria, and audit traceability.

---

## Exam Claude Certified Architect Professional (CCAR-P) (PDF) topic 1 question 27
Question #: 27
Topic #: 1

You are integrating Claude Code into a workflow that runs against a production database. Which guardrail design most directly preserves safety on data-modifying operations?

A. Allow Claude Code to write directly to the production database without subagent scoping, read-only credential defaults, or human confirmation gates on data-modifying operations.
B. Configure the database MCP server with a fully privileged credential that can perform any read or write operation, and allow all operations to proceed without explicit human confirmation.
C. Disable all logging and auditing on database operations through the MCP server to reduce alert noise, removing the observability needed to detect unintended data modifications.
D. Configure the database MCP server with a read-only credential by default, restrict the subagent's tool list to read-only operations, and require explicit human confirmation on any operation that would modify data.

**Answer: D**

Explanation:
A. Allow Claude Code to write directly to the production database without subagent scoping, read-only credential defaults, or human confirmation gates on data-modifying operations.

Incorrect

This design provides excessive privileges and removes important safety controls. A production database should not be exposed to unrestricted automated write operations because an unintended action could modify or delete critical data.

B. Configure the database MCP server with a fully privileged credential that can perform any read or write operation, and allow all operations to proceed without explicit human confirmation.

Incorrect

A fully privileged credential violates the principle of least privilege. Removing confirmation for write operations also eliminates an important human control over potentially irreversible changes.

C. Disable all logging and auditing on database operations through the MCP server to reduce alert noise, removing the observability needed to detect unintended data modifications.

Incorrect

Disabling logging removes valuable auditability and observability. Production database operations should generally be traceable so unexpected or unauthorized changes can be investigated.

D. Configure the database MCP server with a read-only credential by default, restrict the subagent's tool list to read-only operations, and require explicit human confirmation on any operation that would modify data.

Correct

This provides defense in depth. Read-only credentials establish a safe default, tool scoping limits what the subagent can access, and explicit human confirmation creates an additional control before potentially destructive or consequential operations are performed.

Final Answer: D. Use read-only defaults, restrict tool permissions, and require human confirmation for data modifications.

---

## Exam Claude Certified Architect Professional (CCAR-P) (PDF) topic 1 question 28
Question #: 28
Topic #: 1

You are identifying signals that a deployment should re-enter design rather than continue iterating in place. Which signal most directly indicates the need for a new design cycle?

A. A runbook step requires a clarification edit to improve on-call guidance accuracy, which can be handled as a documentation update without changes to component responsibilities or core contracts.
B. A dashboard alert threshold needs a small numerical adjustment to reduce false-positive noise, which can be handled as an operational configuration change without a new design cycle.
C. A minor copy edit is requested in a customer-facing string within the existing Ul, which can be handled as a localized content change without altering component responsibilities or contracts.
D. The system's current architecture cannot meet the new requirements without changes to component responsibilities or core contracts.

**Answer: D**

Explanation:
A. A runbook step requires a clarification edit to improve on-call guidance accuracy, which can be handled as a documentation update without changes to component responsibilities or core contracts.

Incorrect

This is a documentation-level change. It does not alter the system's architecture, component responsibilities, or contracts, so a new design cycle is unnecessary.

B. A dashboard alert threshold needs a small numerical adjustment to reduce false-positive noise, which can be handled as an operational configuration change without a new design cycle.

Incorrect

A small alert-threshold adjustment is an operational tuning change. It can be made without revisiting the underlying architecture.

C. A minor copy edit is requested in a customer-facing string within the existing UI, which can be handled as a localized content change without altering component responsibilities or contracts.

Incorrect

A copy change is a localized content modification and does not require architectural redesign when the existing components and contracts remain unchanged.

D. The system's current architecture cannot meet the new requirements without changes to component responsibilities or core contracts.

Correct

This is the clearest signal that the system needs to re-enter the design cycle. Changes to component responsibilities or core contracts affect fundamental architectural decisions and should be evaluated through a new design process rather than handled as routine iteration.

Final Answer: D. The current architecture cannot meet the new requirements without changing component responsibilities or core contracts.

---

## Exam Claude Certified Architect Professional (CCAR-P) (PDF) topic 1 question 29
Question #: 29
Topic #: 1

You are reviewing a peer's Claude Code permission rules for an enterprise rollout. The rules grant unrestricted Bash access to all projects across all developers. Which response is most appropriate?

A. Add unrestricted access to additional tool categories as well, so that Bash is not asymmetrically more permissive than other tools, expanding the attack surface further in the name of consistency.
B. Approve the unrestricted Bash access as written on the grounds that narrowing the rules would add nfiguration complexity, accepting the full attack surface for all engineers across all projects.
C. Replace unrestricted Bash with narrowly scoped tool patterns that allow only the specific commands the workflows require, and add explicit deny rules for sensitive operations.
D. Disable all permission rules for the enterprise rollout so every command across every project runs without any tool-pattern scoping or explicit deny rules for sensitive operations.

**Answer: C**

Explanation:
A. Add unrestricted access to additional tool categories as well, so that Bash is not asymmetrically more permissive than other tools, expanding the attack surface further in the name of consistency.

Incorrect

Expanding unrestricted access does not solve the security problem. It would increase the attack surface and give developers broader capabilities than their workflows require.

B. Approve the unrestricted Bash access as written on the grounds that narrowing the rules would add configuration complexity, accepting the full attack surface for all engineers across all projects.

Incorrect

Enterprise permissions should follow the principle of least privilege. Configuration complexity is not a sufficient reason to accept unrestricted access to potentially powerful commands.

C. Replace unrestricted Bash with narrowly scoped tool patterns that allow only the specific commands the workflows require, and add explicit deny rules for sensitive operations.

Correct

This is the safest approach. Narrowly scoped permissions ensure Claude Code can perform the required operations without unnecessary privileges. Explicit deny rules provide an additional layer of protection for sensitive commands and operations.

D. Disable all permission rules for the enterprise rollout so every command across every project runs without any tool-pattern scoping or explicit deny rules for sensitive operations.

Incorrect

Disabling permissions entirely removes the security boundary and creates an unnecessarily large attack surface. Enterprise deployments require controlled and auditable access.

Final Answer: C. Use narrowly scoped tool patterns and explicit deny rules for sensitive operations.

---

## Exam Claude Certified Architect Professional (CCAR-P) (PDF) topic 1 question 30
Question #: 30
Topic #: 1

A solutions architect is analyzing stakeholder feedback collected after the first quarter of a Claude-powered procurement automation deployment. The feedback includes four statements: (1) "Our procurement team is processing 3x more purchase orders per analyst per day." (2) "We have eliminated the manual data entry role entirely and redeployed those staff to vendor relationship management." (3) "The API integration costs are running 40% over the projected per-transaction budget." (4) "Response latency during end-of-month batch runs is averaging 11 seconds, against our committed 5-second SLA." Which of the following correctly identifies the primary business value pillar each stakeholder statement represents?

A. Statement 1: Efficiency; Statement 2: Transformation; Statement 3: Solution Cost; Statement 4:Performance SLA
B. Statement 1: Productivity; Statement 2: Efficiency; Statement 3: Solution Cost; Statement 4:Performance SLA
C. Statement 1: Transformation; Statement 2: Productivity; Statement 3: Solution Cost; Statement 4:Efficiency
D. Statement 1: Efficiency; Statement 2: Productivity; Statement 3: Performance SLA; Statement 4:Solution Cost

**Answer: A**

Explanation:
A. Statement 1: Efficiency; Statement 2: Transformation; Statement 3: Solution Cost; Statement 4: Performance SLA

Correct

Statement 1 represents Efficiency because the team is processing significantly more purchase orders per analyst, demonstrating improved operational efficiency.

Statement 2 represents Transformation because the workflow has changed the way work is performed, eliminating a manual role and redeploying employees to a higher-value activity.

Statement 3 represents Solution Cost because it directly concerns the actual cost of operating the API integration compared with the planned budget.

Statement 4 represents Performance SLA because the observed 11-second latency is being compared directly against the committed 5-second SLA.

B. Statement 1: Productivity; Statement 2: Efficiency; Statement 3: Solution Cost; Statement 4: Performance SLA

Incorrect

Although Statement 3 and Statement 4 are correctly classified, Statement 2 describes a broader organizational/workflow transformation, not merely an efficiency improvement. The elimination of manual data entry and redeployment of staff represents a change in how the organization operates.

C. Statement 1: Transformation; Statement 2: Productivity; Statement 3: Solution Cost; Statement 4: Efficiency

Incorrect

Statement 1 is primarily about efficiency, since it measures purchase orders processed per analyst. Statement 2 represents transformation, while Statement 4 clearly concerns an SLA rather than general efficiency.

D. Statement 1: Efficiency; Statement 2: Productivity; Statement 3: Performance SLA; Statement 4: Solution Cost

Incorrect This option reverses the classifications for Statements 3 and 4. The 40% cost overrun is a Solution Cost issue, while the 11-second response time versus the 5-second SLA is a Performance SLA issue.

Final Answer: A

Statement 1 = Efficiency

Statement 2 = Transformation

Statement 3 = Solution Cost

Statement 4 = Performance SLA

---

## Exam Claude Certified Architect Professional (CCAR-P) (PDF) topic 1 question 31
Question #: 31
Topic #: 1

An operations engineer reports that a Claude-based pipeline began returning malformed JSON responses after a scheduled maintenance window, causing downstream processing failures. Which two investigative steps most directly isolate the root cause? (Select two.)

A. Clear the prompt cache and resubmit all pending requests to eliminate stale cached prefixes.
B. Compare the current system prompt and output schema configuration against the last known good version from before the maintenance window.
C. Switch to a different Claude model tier to rule out provider-side changes as a contributing factor.
D. Increase the max_tokens limit to determine whether output truncation is causing incomplete JSON structures.
E. Replay a set of premaintenance requests against the current configuration and inspect the raw model output before downstream parsing.

**Answer: BE**

Explanation:
A. Clear the prompt cache and resubmit all pending requests to eliminate stale cached prefixes.

Incorrect

There is no evidence that stale cached prefixes caused the problem. Clearing the cache before establishing a baseline could introduce unnecessary changes and make the investigation harder to isolate.

B. Compare the current system prompt and output schema configuration against the last known good version from before the maintenance window.

Correct

The problem started immediately after a maintenance window, so comparing the current configuration with the last known good configuration is an effective way to identify changes that may have introduced the malformed JSON behavior.

C. Switch to a different Claude model tier to rule out provider-side changes as a contributing factor.

Incorrect

Changing the model introduces another variable into the investigation. The existing configuration should first be examined to determine whether a maintenance-related configuration change caused the issue.

D. Increase the max_tokens limit to determine whether output truncation is causing incomplete JSON structures.

Incorrect

Output truncation can cause malformed JSON, but there is no evidence that token limits are the cause here. Increasing max_tokens would be a configuration change before the underlying cause is established.

E. Replay a set of premaintenance requests against the current configuration and inspect the raw model output before downstream parsing.

Correct

Replaying known premaintenance requests provides a controlled way to compare behavior. Inspecting the raw model output before downstream parsing helps determine whether Claude is producing malformed JSON or whether the problem occurs later in the pipeline.

Final Answer: B and E

B = Compare current and last known-good configuration

E = Replay known requests and inspect raw output before parsing

---

## Exam Claude Certified Architect Professional (CCAR-P) (PDF) topic 1 question 32
Question #: 32
Topic #: 1

You are compiling a diagnostic toolkit for Claude Code operational issues. Which two diagnostic actions belong in the toolkit? (Select two.) Each correct answer presents a complete solution.

A. Increase the model sampling temperature so that intermittent issues surface more frequently for analysis.
B. File a support ticket with vendor support before any local reproduction or evidence collection.
C. Reproduce the issue with a minimal reproduction case that isolates one variable at a time.
D. Roll back to the previous Claude Code version immediately to confirm whether the issue is version specific.
E. List the configured Model Context Protocol (MCP) servers and inspect server status to identify connection failures.

**Answer: CE**

Explanation:
A. Increase the model sampling temperature so that intermittent issues surface more frequently for analysis.

Incorrect

Changing the sampling temperature introduces another variable and can make the system's behavior less consistent. It is not a reliable first-line diagnostic technique for isolating Claude Code operational issues.

B. File a support ticket with vendor support before any local reproduction or evidence collection.

Incorrect

Support escalation can be appropriate when internal investigation is insufficient, but you should first reproduce the issue and collect relevant evidence whenever possible. This gives the support team useful diagnostic information.

C. Reproduce the issue with a minimal reproduction case that isolates one variable at a time. Correct

A minimal reproduction case is a fundamental troubleshooting technique. By reducing the workflow and changing one variable at a time, you can determine which component or configuration is responsible for the failure.

D. Roll back to the previous Claude Code version immediately to confirm whether the issue is version specific.

Incorrect

An immediate rollback changes the environment before the issue has been properly characterized. Version comparison can be useful later, but first you should collect evidence and isolate the problem.

E. List the configured Model Context Protocol (MCP) servers and inspect server status to identify connection failures.

Correct

MCP servers are important dependencies in Claude Code workflows. Checking the configured servers and their status can quickly identify connection, availability, or configuration problems that may be causing the operational issue.

Final Answer: C and E

C = Reproduce the issue using a minimal reproduction case.

E = Inspect configured MCP servers and their connection status.

---

## Exam Claude Certified Architect Professional (CCAR-P) (PDF) topic 1 question 33
Question #: 33
Topic #: 1

You are assessing data-exfiltration risk in a Claude-based assistant that has tools for both internal-document retrieval and outbound HTTP calls. Which scenario most directly indicates a data-exfiltration risk?

A. The outbound HTTP tool returns a 200 response when the assistant calls an allow-listed domain to fulfil a user-initiated data-lookup request.
B. The user submits a routine question and receives a routine answer.
C. Adversarial content in a retrieved document instructs the model to call the outbound HTTP tool and send sensitive content to an attacker-controlled URL.
D. The internal-document retrieval tool returns a document that the user is authorized to view.

**Answer: C**

Explanation:
A. The outbound HTTP tool returns a 200 response when the assistant calls an allow-listed domain to fulfil a user-initiated data-lookup request.

Incorrect

This describes a normal, authorized tool interaction. The destination is allow-listed, and the request was initiated by the user for a legitimate purpose. There is no indication that sensitive information is being sent to an unauthorized destination.

B. The user submits a routine question and receives a routine answer. Incorrect

A routine question producing a routine answer does not indicate data exfiltration. There is no evidence of unauthorized data access or transmission.

C. Adversarial content in a retrieved document instructs the model to call the outbound HTTP tool and send sensitive content to an attacker-controlled URL.

Correct

This is a direct data-exfiltration scenario. The retrieved document contains adversarial instructions attempting to manipulate the model into sending sensitive information to an attacker-controlled destination. This is a classic example of indirect prompt injection combined with an outbound tool, creating a serious security risk.

D. The internal-document retrieval tool returns a document that the user is authorized to view.

Incorrect

The user is authorized to access the document, so the retrieval itself does not indicate unauthorized disclosure or exfiltration.

Final Answer: C

C = Adversarial retrieved content attempts to send sensitive data to an attacker-controlled URL.

---

## Exam Claude Certified Architect Professional (CCAR-P) (PDF) topic 1 question 34
Question #: 34
Topic #: 1

After a prompt-template update, several previously passing test cases now produce unexpected outputs. Which test type is specifically designed to detect this category of failure?

A. Integration tests that validate cross-component pipeline behavior.
B. Adversarial tests that probe for prompt-injection vulnerabilities.
C. Regression tests scored against a stable reference set of known-good behavior.
D. Smoke tests that confirm high-level system availability after the change.

**Answer: C**

Explanation:
A. Integration tests that validate cross-component pipeline behavior.

Incorrect

Integration tests focus on whether multiple components work correctly together. They are useful for detecting interface and integration problems, but this scenario specifically concerns a change causing previously passing cases to behave differently.

B. Adversarial tests that probe for prompt-injection vulnerabilities.

Incorrect

Adversarial tests are designed to identify security weaknesses and attack behaviors, such as prompt injection. They are not specifically intended to detect regressions caused by a prompt-template change.

C. Regression tests scored against a stable reference set of known-good behavior. Correct

Regression testing compares the current behavior against a stable set of previously validated results. If a prompt-template update causes previously passing test cases to produce unexpected outputs, regression tests can identify those unintended changes.

D. Smoke tests that confirm high-level system availability after the change.

Incorrect

Smoke tests primarily verify that the system's basic functionality and availability remain intact after a change. They generally do not provide detailed comparison against previously known-good outputs.

Final Answer: C

C = Regression tests against a stable reference set of known-good behavior.

---

## Exam Claude Certified Architect Professional (CCAR-P) (PDF) topic 1 question 35
Question #: 35
Topic #: 1

You are identifying the highest-impact optimization for a deployment whose token cost is dominated by a long, repeated system prompt and a large retrieved context per request. Which optimization most directly targets the dominant cost driver?

A. Increase retrieval depth on every request to maximize recall, worsening the dominant cost driver by adding more retrieved tokens per request rather than reducing them.
B. Add additional repeated content to the system prompt to give the model more guidance.
C. Move the long, repeated system prompt into a cacheable prefix and trim retrieved context to the spans relevant to each query.
D. Switch every request to the heaviest available model to maximize output quality, accepting that higher per- request inference cost compounds rather than addresses the dominant cost driver.

**Answer: C**

Explanation:
A. Increase retrieval depth on every request to maximize recall, worsening the dominant cost driver by adding more retrieved tokens per request rather than reducing them.

Incorrect

Increasing retrieval depth adds even more tokens to each request. Since the current cost is already dominated by large retrieved context, this would increase the primary cost driver rather than optimize it.

B. Add additional repeated content to the system prompt to give the model more guidance.

Incorrect

Adding more repeated content makes the system prompt larger and increases token usage. It directly works against the goal of reducing the dominant prompt-related cost.

C. Move the long, repeated system prompt into a cacheable prefix and trim retrieved context to the spans relevant to each query.

Correct

This approach directly addresses both major cost drivers. Caching the repeated system prompt reduces the cost of repeatedly processing identical prefix content, while trimming retrieval to only relevant passages reduces the number of context tokens processed for each request.

D. Switch every request to the heaviest available model to maximize output quality, accepting that higher per-request inference cost compounds rather than addresses the dominant cost driver.

Incorrect

Using a heavier model generally increases inference cost and resource consumption. It does not address the repeated system prompt or excessive retrieved context that are causing the current cost problem.

Final Answer: C

C = Cache the repeated prompt prefix and trim retrieved context to query-relevant content.

---

## Exam Claude Certified Architect Professional (CCAR-P) (PDF) topic 1 question 36
Question #: 36
Topic #: 1

You are designing a feedback session for a deployment in flight. Which structure best supports productive stakeholder feedback?

A. Hold an open-ended meeting with no pre-distributed agenda or artifacts, and rely on participants' memory to carry decisions and follow-up owners forward.
B. Define a focused agenda, share the artifacts in advance, capture decisions and follow-ups in writing, and confirm action owners and dates.
C. Distribute artifacts at the session start rather than in advance, so stakeholders review materials in real timewithout preparation before the discussion begins.
D. End the session without recording decisions, follow-up items, action owners, or dates, relying on participant memory to carry the session's outcomes forward.

**Answer: B**

Explanation:
A. Hold an open-ended meeting with no pre-distributed agenda or artifacts, and rely on participants' memory to carry decisions and follow-up owners forward.

Incorrect

An unstructured meeting makes it difficult to keep the discussion focused and can lead to unclear decisions and missing follow-up actions. Relying on memory also increases the chance that important commitments will be lost.

B. Define a focused agenda, share the artifacts in advance, capture decisions and follow-ups in writing, and confirm action owners and dates.

Correct

This creates a structured and accountable feedback process. Sharing materials beforehand gives stakeholders time to prepare, while documenting decisions, owners, and deadlines ensures that feedback turns into clear, trackable actions.

C. Distribute artifacts at the session start rather than in advance, so stakeholders review materials in real time without preparation before the discussion begins.

Incorrect

Providing materials only at the start leaves stakeholders with insufficient preparation time. This can reduce the quality of discussion and make it harder to reach informed decisions efficiently.

D. End the session without recording decisions, follow-up items, action owners, or dates, relying on participant memory to carry the session's outcomes forward.

Incorrect

Without written decisions and assigned owners and dates, accountability becomes unclear. Effective stakeholder feedback should produce documented, actionable outcomes.

Final Answer: B

B = Focused agenda + advance artifacts + documented decisions + clear owners and dates.

---

## Exam Claude Certified Architect Professional (CCAR-P) (PDF) topic 1 question 37
Question #: 37
Topic #: 1

A loan pre-qualification assistant shows 94 percent approval recommendations that match the human underwriter decision. The fairness team has reviewed approval rate parity across protected groups and reported no significant difference. A board member has asked whether this evidence is sufficient to declare the assistant fair. Which two Discernment-competency findings should you report? (Select two.) Each correct answer presents part of the solution.

A. Approval rate parity does not by itself assess error rate parity across protected groups.
B. Match with human underwriters does not establish freedom from underwriter-introduced bias.
C. The 94 percent match rate is sufficient evidence of fairness for the assistant's decisions.
D. The fairness team's review process likely missed at least some of the protected groups studied.
E. A larger sample is needed before any meaningful fairness claim can be made about the model.

**Answer: AB**

Explanation:
A. Approval rate parity does not by itself assess error rate parity across protected groups.

Correct

Equal or similar approval rates do not necessarily mean the system performs equally well across groups. A proper fairness assessment should also consider error patterns, such as false positives and false negatives, across protected groups.

B. Match with human underwriters does not establish freedom from underwriter-introduced bias.

Correct

A 94% match with human decisions only shows that the assistant agrees with the existing decision process. If human underwriters have existing biases, the model could reproduce those biases rather than eliminate them.

C. The 94 percent match rate is sufficient evidence of fairness for the assistant's decisions.

Incorrect

Agreement with human decisions measures consistency, not fairness. High agreement alone cannot establish that the decisions are unbiased or equitable.

D. The fairness team's review process likely missed at least some of the protected groups studied.

Incorrect There is no evidence that the fairness team omitted protected groups. This conclusion cannot be drawn from the information provided.

E. A larger sample is needed before any meaningful fairness claim can be made about the model.

Incorrect

Sample size can affect statistical confidence, but the key issue here is that approval-rate parity and agreement with humans are insufficient fairness measures even when the sample is large.

Final Answer: A and B

A = Approval-rate parity does not establish error-rate parity.

B = Agreement with humans does not establish freedom from human bias.

---

## Exam Claude Certified Architect Professional (CCAR-P) (PDF) topic 1 question 38
Question #: 38
Topic #: 1

You are an architect supporting the iteration phase of a deployed Claude-based system. Which activity most directly fits this phase?

A. Rebuild the entire system architecture from scratch at the start of every iteration cycle regardless of what production telemetry, evaluations, and stakeholder feedback indicate is needed.
B. Stop measuring production outcomes once the deployment has successfully launched, treating the go-live milestone as the end of the evaluation and iteration cycle.
C. Discard the evaluation framework and reference set once the deployment is in production, accepting that future iterations will have no structured basis for measuring the impact of changes.
D. Review production telemetry, sampled output evaluations, and stakeholder feedback to identify the highest- impact change for the next cycle, then plan the change against the evaluation framework.

**Answer: D**

Explanation:
A. Rebuild the entire system architecture from scratch at the start of every iteration cycle regardless of what production telemetry, evaluations, and stakeholder feedback indicate is needed.

Incorrect

Iteration does not mean rebuilding the entire system every cycle. Changes should be evidence-driven, based on production results, evaluations, and stakeholder feedback.

B. Stop measuring production outcomes once the deployment has successfully launched, treating the go- live milestone as the end of the evaluation and iteration cycle.

Incorrect

Deployment is not the end of evaluation. Production monitoring and ongoing evaluation are essential for identifying performance issues, quality changes, and opportunities for improvement.

C. Discard the evaluation framework and reference set once the deployment is in production, accepting that future iterations will have no structured basis for measuring the impact of changes.

Incorrect

The evaluation framework and reference set provide a consistent baseline for measuring whether changes improve or degrade the system. They should be maintained throughout iteration.

D. Review production telemetry, sampled output evaluations, and stakeholder feedback to identify the highest-impact change for the next cycle, then plan the change against the evaluation framework.

Correct

This directly reflects an evidence-driven iteration cycle. Production telemetry, output evaluations, and stakeholder feedback reveal where improvements are most valuable. The proposed change can then be evaluated against the existing framework to measure its impact.

Final Answer: D

D = Use production telemetry, evaluations, and stakeholder feedback to identify and plan the highest- impact improvement.

---

## Exam Claude Certified Architect Professional (CCAR-P) (PDF) topic 1 question 39
Question #: 39
Topic #: 1

You are explaining the precedence of Claude Code configuration scopes to the team. Which precedence ordering, from highest to lowest, is correct?

A. Local # managed # user # command-line arguments # project
B. Project # user # managed # local # command-line arguments
C. Managed # command-line arguments # local # project # user
D. User # project # local # command-line arguments # managed

**Answer: C**

Explanation:
A. Local → managed → user → command-line arguments → project

Incorrect

This ordering places local configuration above managed and command-line settings. It does not reflect the intended precedence hierarchy for Claude Code configuration.

B. Project → user → managed → local → command-line arguments

Incorrect

Project configuration is not the highest-precedence scope in this ordering. This option also places command- line arguments too low.

C. Managed → command-line arguments → local → project → user

Correct

This ordering correctly places the scopes from highest to lowest precedence:

Managed → Command-line arguments → Local → Project → User

This precedence determines which configuration takes effect when settings from multiple scopes apply to the same behavior.

D. User → project → local → command-line arguments → managed Incorrect

This reverses the hierarchy by placing user scope above managed configuration and puts managed configuration at the lowest level.

Final Answer: C

C = Managed → Command-line arguments → Local → Project → User

---

## Exam Claude Certified Architect Professional (CCAR-P) (PDF) topic 1 question 40
Question #: 40
Topic #: 1

A Claude architect observes that after a recent model-version upgrade, grounded responses began including claims not supported by the retrieved source documents. Which mitigation is most directly targeted at this failure mode?

A. Constrain responses to source-supported content, require citations, and add a verification step.
B. Score each new model version against a stable adversarial evaluation set.
C. Replace the shared API key with per-user Auth tokens to restrict data access.
D. Treat retrieved data as untrusted and apply input classifiers at ingestion time.

**Answer: A**

Explanation:
A. Constrain responses to source-supported content, require citations, and add a verification step.

Correct

This directly addresses grounding failures and hallucinated claims. Restricting the response to information supported by retrieved sources, requiring citations, and adding verification helps prevent unsupported information from reaching users.

B. Score each new model version against a stable adversarial evaluation set.

Incorrect

This is an excellent model-upgrade evaluation practice, but it primarily helps detect whether a new version introduces regressions. It does not directly mitigate the immediate problem of unsupported claims in production responses.

C. Replace the shared API key with per-user Auth tokens to restrict data access.

Incorrect

Per-user authentication improves access control and accountability, but it does not directly prevent the model from generating claims that are unsupported by retrieved documents.

D. Treat retrieved data as untrusted and apply input classifiers at ingestion time.

Incorrect

Input classification can help address malicious or adversarial content, such as prompt injection in retrieved documents. However, the specific failure described is unsupported generation after a model upgrade, so source-grounding and verification controls are more directly targeted.

Final Answer: A A = Restrict responses to source-supported content, require citations, and verify the output.

---

## Exam Claude Certified Architect Professional (CCAR-P) (PDF) topic 1 question 41
Question #: 41
Topic #: 1

You are distinguishing functional from non-functional requirements during discovery. Which item is a non-functional requirement?

A. The system must extract a defined set of specific fields from invoice attachments and populate a downstream data record.
B. The system must produce a draft response that a human reviewer can edit before sending.
C. The system must classify inbound tickets into a defined set of categories.
D. The system must respond at p95 latency under 800 milliseconds at the expected request volume.

**Answer: D**

Explanation:
A. The system must extract a defined set of specific fields from invoice attachments and populate a downstream data record.

Incorrect

This describes what the system must do: extract specific invoice fields and populate another record. That is a functional requirement.

B. The system must produce a draft response that a human reviewer can edit before sending.

Incorrect

This specifies a system capability or behavior: generating an editable draft for human review. Therefore, it is a functional requirement.

C. The system must classify inbound tickets into a defined set of categories.

Incorrect

Ticket classification describes what the system is required to perform, making it a functional requirement.

D. The system must respond at p95 latency under 800 milliseconds at the expected request volume.

Correct

This defines a performance constraint rather than a specific business function. Latency, throughput, scalability, reliability, and similar characteristics are typically non-functional requirements.

Final Answer: D

D = The system must meet a p95 latency requirement of under 800 milliseconds.

---

## Exam Claude Certified Architect Professional (CCAR-P) (PDF) topic 1 question 42
Question #: 42
Topic #: 1

You are integrating Claude Code into the team's pull-request workflow. The team wants Al-assisted review without removing human approval. Which integration design best fits this requirement?

A. Claude Code reviews the pull request and posts a structured analysis as a comment, while a human reviewer etains the approval decision under the existing branch-protection rules
B. Claude Code merges every pull request automatically after completing its analysis, bypassing human approval and the existing branch-protection rules.
C. Claude Code disables all existing branch-protection rules to streamline the merge process, removing human approval as a required gate.
D. Claude Code silently deletes pull requests it assesses as low quality without posting a comment or notifying the author.

**Answer: A**

Explanation:
A. Claude Code reviews the pull request and posts a structured analysis as a comment, while a human reviewer retains the approval decision under the existing branch-protection rules.

Correct

This design keeps Claude Code in an assistive role while preserving human accountability. Claude can analyze the pull request and provide useful feedback, but the human reviewer remains responsible for the final approval decision. Existing branch-protection rules also maintain an important safety and governance control.

B. Claude Code merges every pull request automatically after completing its analysis, bypassing human approval and the existing branch-protection rules.

Incorrect

Automatic merging removes the required human approval gate and bypasses established branch protections. This does not meet the team's requirement for AI assistance while retaining human oversight.

C. Claude Code disables all existing branch-protection rules to streamline the merge process, removing human approval as a required gate.

Incorrect

Disabling branch protection weakens the team's existing security and governance controls. It also directly conflicts with the requirement to retain human approval.

D. Claude Code silently deletes pull requests it assesses as low quality without posting a comment or notifying the author.

Incorrect

Deleting pull requests without human review or notification creates an unaccountable and potentially destructive workflow. Claude should assist reviewers rather than independently take irreversible actions.

Final Answer: A

A = Claude provides structured AI-assisted review while human reviewers retain the final approval decision.

---

## Exam Claude Certified Architect Professional (CCAR-P) (PDF) topic 1 question 43
Question #: 43
Topic #: 1

A revenue projection assistant has missed its monthly cost target by 38 percent. Profiling shows three contributors: a 6,000-token policy preamble repeated on every call (45 percent of cost), retrieval of historical sales chunks averaging 3,000 tokens per call (30 percent), and inference on a flagship-tier model (25 percent). Stakeholders require that projection accuracy remain unchanged. Which two optimizations should you sequence first to reduce cost without affecting accuracy? (Select two.) Each correct answer presents part of the solution.

A. Reduce the number of historical sales chunks retrieved across each query run.
B. Truncate the policy preamble to remove non-essential clauses from the prompt.
C. Enable prompt caching on the static policy preamble across the recurring calls.
D. Switch the workload to a smaller, faster Claude model tier across all queries.
E. Cache common retrieved sales chunks accessed across many of the daily queries.

**Answer: CE**

Explanation:
A. Reduce the number of historical sales chunks retrieved across each query run.

Incorrect

Reducing the number of retrieved chunks could lower token usage, but it may remove relevant historical information and therefore affect projection accuracy. Since accuracy must remain unchanged, this is not the safest first optimization.

B. Truncate the policy preamble to remove non-essential clauses from the prompt.

Incorrect

Although removing unnecessary content could reduce token usage, changing the policy preamble may remove information that affects model behavior or compliance. It is therefore less reliable than caching the unchanged content.

C. Enable prompt caching on the static policy preamble across the recurring calls.

Correct

The policy preamble accounts for 45% of the total cost and is repeated unchanged on every call. Prompt caching directly targets this dominant cost driver while preserving the full policy content, so it can reduce cost without changing the information provided to the model.

D. Switch the workload to a smaller, faster Claude model tier across all queries.

Incorrect

A smaller model could reduce inference costs, but it could also change the quality and accuracy of revenue projections. Since stakeholders explicitly require unchanged accuracy, changing the model is not the best first optimization.

E. Cache common retrieved sales chunks accessed across many of the daily queries.

Correct

Frequently reused historical sales content can benefit from caching. This reduces repeated processing of the same context while preserving the underlying sales information, making it a safer cost optimization than reducing retrieval depth.

Final Answer: C and E

C = Enable prompt caching for the repeated static policy preamble.

E = Cache frequently reused historical sales chunks.

---

## Exam Claude Certified Architect Professional (CCAR-P) (PDF) topic 1 question 44
Question #: 44
Topic #: 1

You are building an ethics-review checklist for deployments supported by artificial intelligence. Which two checks belong on the list? (Select two.) Each correct answer presents a complete solution.

A. Confirm that vendor licensing terms permit the planned production use of the model.
B. Verify that outputs do not rely on generalizations about people that the underlying data does not support.
C. Confirm that high-impact decisions retain human accountability rather than being attributed to the model.
D. Restrict ethics review to outputs that exceed a defined model-confidence threshold.
E. Confirm that latency and throughput targets are met across supported user populations.

**Answer: BC**

Explanation:
A. Confirm that vendor licensing terms permit the planned production use of the model.

Incorrect

Licensing is an important legal and procurement consideration, but it is not primarily an ethics-review check concerning fairness, accountability, or potential harm to people.

B. Verify that outputs do not rely on generalizations about people that the underlying data does not support.

Correct

This is an important ethical and fairness check. AI-generated outputs should not make unsupported generalizations about individuals or groups, particularly when those generalizations could lead to unfair treatment or harmful outcomes.

C. Confirm that high-impact decisions retain human accountability rather than being attributed to the model.

Correct

High-impact decisions should maintain human accountability and oversight. The model should support decision-making rather than become an unaccountable authority for consequential decisions.

D. Restrict ethics review to outputs that exceed a defined model-confidence threshold.

Incorrect

Model confidence is not a sufficient basis for determining whether an output requires ethical review. A model can be highly confident while still producing biased, harmful, or unsupported content.

E. Confirm that latency and throughput targets are met across supported user populations.

Incorrect

Latency and throughput are primarily performance and operational requirements. They are important deployment considerations but are not the core focus of an ethics review.

Final Answer: B and C

B = Check for unsupported generalizations about people. C = Preserve human accountability for high-impact decisions.

---

## Exam Claude Certified Architect Professional (CCAR-P) (PDF) topic 1 question 45
Question #: 45
Topic #: 1

A Claude architect at a health services organization is defining evaluation metrics for a clinical-summary pipeline. The pipeline must remain within a per-query cost ceiling and must never surface patient data to unauthorized roles. Which two metrics directly address these requirements? (Select two.)

A. BLEU score computed against a human-annotated reference summary set
B. Role-based access-control enforcement rate measured on a red-team dataset
C. Throughput measured as successful requests processed per minute
D. Per-query token cost measured against the defined cost ceiling
E. Response latency at the 95th percentile across a one-week sample window

**Answer: BD**

Explanation:
A. BLEU score computed against a human-annotated reference summary set

Incorrect

BLEU measures text similarity between generated summaries and reference summaries. It can be useful for evaluating output quality, but it does not directly measure access-control enforcement or whether the pipeline stays within its cost ceiling.

B. Role-based access-control enforcement rate measured on a red-team dataset

Correct

This directly addresses the requirement that unauthorized roles must not receive patient data. Testing role- based access controls with adversarial or red-team cases can measure whether the system consistently prevents unauthorized data exposure.

C. Throughput measured as successful requests processed per minute

Incorrect

Throughput measures system capacity and performance. It does not directly indicate whether patient data is protected from unauthorized users or whether individual requests remain within the specified cost ceiling.

D. Per-query token cost measured against the defined cost ceiling

Correct

This directly measures whether each query remains within the required cost constraint. Comparing actual token cost against the defined ceiling provides a clear operational metric for cost compliance.

E. Response latency at the 95th percentile across a one-week sample window

Incorrect

p95 latency is a useful performance metric, but the stated requirements concern cost control and authorization, not response speed. Final Answer: B and D

B = Measure role-based access-control enforcement.

D = Measure per-query token cost against the defined ceiling.

---

## Exam Claude Certified Architect Professional (CCAR-P) (PDF) topic 1 question 46
Question #: 46
Topic #: 1

The compliance team has authored a regulatory disclosure procedure that must be applied identically across customer service, sales, and onboarding workflows. The procedure changes when regulators issue updates, currently four to six times per year. You are designing how the procedure will be packaged for use by Claude across all three workflows. Which two design decisions should you include? (Select two.) Each correct answer presents part of the solution.

A. Package the procedure as a Claude Skill owned directly by the compliance team.
B. Embed the procedure text into each workflow's system prompt at integration time.
C. Store the procedure in a shared retrieval corpus accessed by all three workflows.
D. Have each workflow team rewrite the procedure for its own context.
E. Reference the same Claude Skill from all three workflow integrations.

**Answer: AE**

Explanation:
A. Package the procedure as a Claude Skill owned directly by the compliance team.

Correct

A Claude Skill is well suited for reusable, procedural knowledge that needs to be applied consistently across multiple workflows. Having the compliance team own the Skill also creates a clear governance and maintenance owner, which is especially important because the procedure changes several times per year.

B. Embed the procedure text into each workflow's system prompt at integration time.

Incorrect

Embedding the procedure separately into every workflow creates duplication and maintenance overhead. Each update would need to be propagated across multiple integrations, increasing the risk that one workflow uses an outdated version.

C. Store the procedure in a shared retrieval corpus accessed by all three workflows.

Incorrect

A shared retrieval corpus can be useful for retrieving reference information, but this scenario involves a specific, repeatable procedure that must be consistently applied. Packaging it as a reusable Skill provides a more appropriate mechanism for procedural guidance.

D. Have each workflow team rewrite the procedure for its own context.

Incorrect

Rewriting the procedure independently introduces inconsistency and governance risk. The requirement is that the same regulatory procedure be applied identically across all three workflows. E. Reference the same Claude Skill from all three workflow integrations.

Correct

Referencing the same Skill across all three workflows ensures that they use a common, centrally maintained procedure. When compliance updates the Skill, the change can be managed in one place rather than manually updating three separate system prompts.

Final Answer: A and E

A = Package the procedure as a compliance-owned Claude Skill.

E = Reference the same Skill from all three workflow integrations.

---

## Exam Claude Certified Architect Professional (CCAR-P) (PDF) topic 1 question 47
Question #: 47
Topic #: 1

You are defining when to introduce a project subagent versus relying on Claude Code's general capabilities. Which scenario most directly justifies a dedicated subagent?

A. The team has a recurring specialized task, such as database schema review, that requires a focused system prompt, narrow tool permissions, and a specific model selection across many sessions.
B. The team has a one-time ad hoc question that will not recur and does not require a focused system prompt, narrow tool permissions, or dedicated model selection.
C. The team has no recurring specialized tasks and uses Claude Code only for isolated general-purpose work that does not justify a dedicated system prompt or tool scope.
D. The team wants every Claude Code interaction to use the same generic system prompt with no task- specific specialization, narrow tool permissions, or dedicated model selection.

**Answer: A**

Explanation:
A. The team has a recurring specialized task, such as database schema review, that requires a focused system prompt, narrow tool permissions, and a specific model selection across many sessions.

Correct

A dedicated subagent is appropriate when a task is recurring, specialized, and requires consistent configuration. A focused system prompt, restricted tool permissions, and task-appropriate model selection allow the subagent to operate within a clearly defined scope while reducing unnecessary access.

B. The team has a one-time ad hoc question that will not recur and does not require a focused system prompt, narrow tool permissions, or dedicated model selection.

Incorrect

A one-time, general-purpose task does not justify the additional configuration and maintenance overhead of a dedicated subagent. Claude Code's general capabilities are sufficient.

C. The team has no recurring specialized tasks and uses Claude Code only for isolated general-purpose work that does not justify a dedicated system prompt or tool scope.

Incorrect

Without a recurring specialized workload, there is little reason to create a dedicated subagent. The general Claude Code environment is more appropriate. D. The team wants every Claude Code interaction to use the same generic system prompt with no task- specific specialization, narrow tool permissions, or dedicated model selection.

Incorrect

A generic configuration without task specialization does not provide the main benefits of a subagent. Dedicated subagents are valuable precisely when they can provide focused instructions, scoped permissions, and task-specific behavior.

Final Answer: A

A = Use a dedicated subagent for recurring specialized work that benefits from focused instructions, narrow permissions, and task-specific model selection.

---

## Exam Claude Certified Architect Professional (CCAR-P) (PDF) topic 1 question 48
Question #: 48
Topic #: 1

You are evaluating an evaluation set used to score a Claude-based hiring-support tool. The set is drawn from one geographic region and one tenure band. Which response is most appropriate?

A. Discard all quantitative evaluation and replace it with qualitative impressions collected from a small, convenience-selected group that may not represent the tool's full user population.
B. Expand the evaluation set to cover the geographic regions and tenure bands the tool will serve, and rescore the system on the expanded set before broader release.
C. Reduce the evaluation set further to a single demographic subgroup to simplify score interpretation, narrowing coverage rather than expanding it to match the intended user population.
D. Continue using the narrow evaluation set drawn from one region and one tenure band because the existing benchmark scores are already high on that subset.

**Answer: B**

Explanation:
A. Discard all quantitative evaluation and replace it with qualitative impressions collected from a small, convenience-selected group that may not represent the tool's full user population.

Incorrect

Replacing quantitative evaluation with a small convenience sample would reduce the reliability and representativeness of the evaluation. The goal should be to improve coverage, not eliminate structured measurement.

B. Expand the evaluation set to cover the geographic regions and tenure bands the tool will serve, and rescore the system on the expanded set before broader release.

Correct

The evaluation set should represent the intended user population. Expanding coverage across relevant geographic regions and tenure bands helps identify potential performance or fairness issues that may be hidden by the narrow original dataset. The system should then be rescored before broader deployment.

C. Reduce the evaluation set further to a single demographic subgroup to simplify score interpretation, narrowing coverage rather than expanding it to match the intended user population.

Incorrect Narrowing the evaluation set further makes the evaluation less representative and can hide problems affecting other groups. Simplifying evaluation should not come at the expense of meaningful population coverage.

D. Continue using the narrow evaluation set drawn from one region and one tenure band because the existing benchmark scores are already high on that subset.

Incorrect

High scores on a narrow subset do not demonstrate that the system will perform reliably across the full intended population. Broader evaluation is necessary before making a wider release decision.

Final Answer: B

B = Expand the evaluation set to represent the intended population and rescore before broader release.

---

## Exam Claude Certified Architect Professional (CCAR-P) (PDF) topic 1 question 49
Question #: 49
Topic #: 1

During an architectural review, the security team identifies a risk that adversarial content injected into retrieved documents could manipulate the model's behavior. Which mitigation most directly addresses this threat?

A. Treat all retrieved content as untrusted input and apply input classifiers with output validation.
B. Require citations for each claim and constrain responses to source-supported content.
C. Restrict outbound tool calls to an approved destination allow-list.
D. Score outputs against a stable adversarial evaluation set on each model-version change.

**Answer: A**

Explanation:
A. Treat all retrieved content as untrusted input and apply input classifiers with output validation.

Correct

Retrieved documents should be treated as untrusted data, because they may contain malicious instructions designed to manipulate the model. Input classification can help identify suspicious content, while output validation provides an additional layer of protection before the model's response is used downstream.

B. Require citations for each claim and constrain responses to source-supported content.

Incorrect

These controls are primarily aimed at grounding and hallucination risks. They can improve traceability and factual support, but they do not directly prevent adversarial instructions inside retrieved content from influencing the model.

C. Restrict outbound tool calls to an approved destination allow-list.

Incorrect

An allow-list is an effective control against unauthorized outbound communication and data exfiltration, but it does not directly address the initial prompt-injection threat within retrieved documents.

D. Score outputs against a stable adversarial evaluation set on each model-version change. Incorrect

Adversarial evaluation is useful for detecting regressions and measuring security behavior, especially after model changes. However, it is an evaluation mechanism rather than the most direct runtime mitigation for malicious content in retrieved documents.

Final Answer: A

A = Treat retrieved content as untrusted input, apply input classification, and validate outputs.

---

## Exam Claude Certified Architect Professional (CCAR-P) (PDF) topic 1 question 50
Question #: 50
Topic #: 1

You are responding to a stakeholder request that adds significant scope to a deployment already in flight. Which response best aligns expectations while respecting the stakeholder's underlying need?

A. Hide the scope-addition request from the broader delivery team to avoid a difficult conversation, allowing the change to proceed without team awareness of its timeline implications.
B. Decline the request outright without acknowledging the stakeholder's underlying need or offering alternatives such as deferral, descoping, or timeline extension.
C. Acknowledge the request, describe the scope and timeline implications transparently, and propose options- defer it, descope something else, or extend the timeline-for the stakeholder to choose.
D. Accept the additional scope into the current release without describing the timeline or descoping implications, allowing the delivery plan to absorb unacknowledged changes until they surface as delays.

**Answer: C**

Explanation:
A. Hide the scope-addition request from the broader delivery team to avoid a difficult conversation, allowing the change to proceed without team awareness of its timeline implications.

Incorrect

Hiding scope changes creates a transparency and planning problem. The delivery team needs visibility into changes that could affect timelines, resources, and commitments.

B. Decline the request outright without acknowledging the stakeholder's underlying need or offering alternatives such as deferral, descoping, or timeline extension.

Incorrect

Simply rejecting the request does not address the stakeholder's underlying business need. Effective stakeholder management should acknowledge the need and explore practical alternatives.

C. Acknowledge the request, describe the scope and timeline implications transparently, and propose options—defer it, descope something else, or extend the timeline—for the stakeholder to choose.

Correct

This approach combines transparency, expectation management, and stakeholder alignment. It makes the trade-offs explicit while allowing the stakeholder to choose how the underlying need should be addressed.

D. Accept the additional scope into the current release without describing the timeline or descoping implications, allowing the delivery plan to absorb unacknowledged changes until they surface as delays.

Incorrect Accepting additional scope without discussing its impact creates unmanaged scope creep and can lead to missed deadlines and unrealistic stakeholder expectations.

Final Answer: C

C = Acknowledge the need, explain the trade-offs, and offer clear options for the stakeholder to choose.

---

## Exam Claude Certified Architect Professional (CCAR-P) (PDF) topic 1 question 51
Question #: 51
Topic #: 1

The compliance team at a firm has approved a Claude Skill that generates client-facing investment summaries. The Skill includes the firm's required disclaimers and prohibited-language list. A product manager has asked whether additional guardrails are needed at the application layer or whether the Skill alone is sufficient. Which two guardrail responsibilities should remain at the application layer rather than the Skill? (Select two.) Each correct answer presents part of the solution.

A. Log every generated summary to the firm's compliance audit trail for retention.
B. Verify the requesting user is authorized to generate investment summaries at all.
C. Format output sections according to the firm's standardized house style guidelines.
D. Apply the disclaimer template that the compliance team has standardized firm-wide.
E. Apply the prohibited-language list that the compliance team maintains and updates.

**Answer: AB**

Explanation:
A. Log every generated summary to the firm's compliance audit trail for retention.

Correct

Audit logging is an application-level responsibility because it concerns system-wide observability, compliance records, retention, and traceability. A Skill can provide procedural guidance, but the application should enforce and record the actual audit trail.

B. Verify the requesting user is authorized to generate investment summaries at all.

Correct

Authorization is an access-control responsibility. The application must independently verify the user's identity and permissions before allowing the operation. A Skill should not be relied upon to enforce whether a user is authorized to perform the task.

C. Format output sections according to the firm's standardized house style guidelines.

Incorrect

Formatting and presentation instructions are well suited to the Skill, particularly when they are part of the standardized procedure for producing investment summaries.

D. Apply the disclaimer template that the compliance team has standardized firm-wide.

Incorrect

The disclaimer is explicitly part of the approved Skill's compliance procedure. Therefore, it is appropriate for the Skill to provide this instruction.

E. Apply the prohibited-language list that the compliance team maintains and updates. Incorrect

The prohibited-language list is already part of the compliance-owned Skill. Maintaining and applying this procedural guidance is an appropriate responsibility for the Skill.

Final Answer: A and B

A = Maintain the compliance audit trail at the application layer.

B = Enforce user authorization at the application layer.

---

## Exam Claude Certified Architect Professional (CCAR-P) (PDF) topic 1 question 52
Question #: 52
Topic #: 1

You are defining an SLA for a Claude-based assistant. Which SLA definition is most operationally meaningful?

A. A target tied to a stakeholder sentiment measure such as "the team feels satisfied," which cannot be measured objectively or used to trigger a documented breach response.
B. A measurable target with a defined metric, threshold, evaluation window, and consequence for breach- for example,"p95 per-request latency under 800 ms over a 28-day window."
C. A qualitative commitment such as "the system will be fast and reliable," which names no metric, threshold, or evaluation window.
D. A target without a defined metric, threshold, evaluation window, or breach consequence.

**Answer: B**

Explanation:
A. A target tied to a stakeholder sentiment measure such as “the team feels satisfied,” which cannot be measured objectively or used to trigger a documented breach response.

Incorrect

An SLA should be objective and measurable. Stakeholder sentiment alone does not provide a precise metric, threshold, or defined method for determining whether the SLA has been breached.

B. A measurable target with a defined metric, threshold, evaluation window, and consequence for breach— for example, “p95 per-request latency under 800 ms over a 28-day window.”

Correct

This is a strong SLA because it clearly defines:

Metric: p95 per-request latency Threshold: under 800 ms Evaluation window: 28 days Breach condition/consequence: a defined response when the target is not met

This makes the SLA objective, measurable, and operationally actionable.

C. A qualitative commitment such as “the system will be fast and reliable,” which names no metric, threshold, or evaluation window.

Incorrect

“Fast and reliable” is too vague to function as an operational SLA. There is no measurable definition of how fast, how reliable, or over what period performance should be evaluated.

D. A target without a defined metric, threshold, evaluation window, or breach consequence.

Incorrect

Without measurable criteria and a defined evaluation period, stakeholders cannot objectively determine whether the service has met or breached the SLA.

Final Answer: B

B = Define a measurable metric, threshold, evaluation window, and breach consequence.

---

## Exam Claude Certified Architect Professional (CCAR-P) (PDF) topic 1 question 53
Question #: 53
Topic #: 1

You are transitioning a Claude-based deployment from design into implementation. Which handoff package most directly supports a clean transition?

A. The most recent set of design presentation slides without component-level diagrams, interface contracts, an evaluation framework with a reference set, runbooks, or a known-limitations register.
B. A verbal walkthrough conducted on the day of handoff with no written architecture overview, ADRS, omponent contracts, evaluation framework, runbooks, playbook, or known limitations.
C. Architecture overview, ADRs, component contracts, evaluation framework with reference set, runbooks, on- call playbook, and known limitations.
D. Source code alone with no integrating architecture overview, ADRs, component contracts, evaluation amework, runbooks, on-call playbook, or known-limitations register to support the delivery team.

**Answer: C**

Explanation:
A. The most recent set of design presentation slides without component-level diagrams, interface contracts, an evaluation framework with a reference set, runbooks, or a known-limitations register.

Incorrect

Presentation slides alone rarely provide enough implementation detail. The delivery team needs architecture details, contracts, evaluation criteria, operational procedures, and known limitations to implement and operate the system correctly.

B. A verbal walkthrough conducted on the day of handoff with no written architecture overview, ADRs, component contracts, evaluation framework, runbooks, playbook, or known limitations.

Incorrect

A verbal walkthrough can supplement documentation, but it should not replace it. Without written artifacts, important decisions and operational knowledge can be lost or interpreted inconsistently.

C. Architecture overview, ADRs, component contracts, evaluation framework with reference set, runbooks, on-call playbook, and known limitations.

Correct

This provides the implementation team with the technical, evaluation, and operational information required for a smooth transition.

It includes: Architecture overview for understanding the overall system ADRs for understanding important architectural decisions Component contracts for integration boundaries Evaluation framework and reference set for validating behavior Runbooks and on-call playbook for operational support Known limitations for understanding risks and constraints

D. Source code alone with no integrating architecture overview, ADRs, component contracts, evaluation framework, runbooks, on-call playbook, or known-limitations register to support the delivery team.

Incorrect

Source code does not provide the complete architectural and operational context needed for a clean handoff. The implementation team also needs documentation explaining decisions, interfaces, evaluation, operations, and limitations.

Final Answer: C

C = Architecture overview + ADRs + component contracts + evaluation framework + runbooks + on-call playbook + known limitations.

---

## Exam Claude Certified Architect Professional (CCAR-P) (PDF) topic 1 question 54
Question #: 54
Topic #: 1

A security team is evaluating two proposed controls. Control A adds an outbound tool allow-list with destination restrictions and per-call review. Control B scores responses against a stable adversarial evaluation set after each model-version change. Which two risk categories are correctly matched to these controls? (Select two.)

A. Control A - prompt injection from adversarial content in retrieved data
B. Control A - silent quality drift after a model-version upgrade
C. Control A - data exfiltration via outbound tool calls
D. Control B - data exfiltration via outbound tool calls
E. Control B - silent quality drift after a model-version upgrade

**Answer: CE**

Explanation:
A. Control A – prompt injection from adversarial content in retrieved data

Incorrect

Control A primarily restricts outbound tool destinations and calls. Prompt injection from retrieved content is more directly addressed by treating retrieved content as untrusted input, input classification, and output validation.

B. Control A – silent quality drift after a model-version upgrade

Incorrect

An outbound allow-list does not detect quality or behavioral drift after a model update. This type of risk requires evaluation and comparison against a stable reference set.

C. Control A – data exfiltration via outbound tool calls Correct

An outbound destination allow-list and per-call review directly reduce the risk of sensitive data being transmitted to unauthorized external destinations through tools.

D. Control B – data exfiltration via outbound tool calls

Incorrect

Control B is an evaluation control designed to identify changes in model behavior. It does not directly prevent outbound data exfiltration.

E. Control B – silent quality drift after a model-version upgrade

Correct

Comparing each new model version against a stable adversarial evaluation set can reveal unexpected changes in behavior and identify quality or safety regressions after an upgrade.

Final Answer: C and E

C = Control A → Data exfiltration via outbound tool calls.

E = Control B → Silent quality drift after a model-version upgrade.

---

## Exam Claude Certified Architect Professional (CCAR-P) (PDF) topic 1 question 55
Question #: 55
Topic #: 1

57). A Claude Architect is reviewing a post-deployment performance report for an Al-assisted legal-document summarization system. The report includes these observations: * Average summarization time decreased from 47 minutes to 6 minutes per document. * Associates spend less time on summaries, but overall billable output has not measurably changed. * Infrastructure costs increased by 22% because redundant retry logic generated additional API calls. * Some summaries require attorney correction, adding an average of 8 minutes of review per document. Which analysis correctly attributes each observation to the appropriate business-value pillar?

A. Observations 1 and 2 both indicate efficiency gains; Observation 3 is a solution-cost issue; Observation 4 is a performance-SLA issue.
B. Observation 1 is a transformation outcome; Observation 2 is an efficiency gain; Observation 3 is a performance-SLA degradation; Observation 4 is a solution-cost issue.
C. Observations 1 and 4 together indicate a net performance-SLA improvement; Observation 2 is a transformation gap; Observation 3 is a productivity drain from over-engineering.
D. Observation 1 indicates an efficiency gain; Observation 2 shows that productivity has not yet been realized;Observation 3 is a solution-cost issue; Observation 4 is an efficiency loss that partially offsets Observation 1.

**Answer: D**

Explanation:
A. Observations 1 and 2 both indicate efficiency gains; Observation 3 is a solution-cost issue; Observation 4 is a performance-SLA issue.

Incorrect

Observation 2 specifically states that overall billable output has not measurably changed, so it does not demonstrate a realized efficiency/productivity outcome. Observation 4 concerns additional attorney review time, not a performance SLA. B. Observation 1 is a transformation outcome; Observation 2 is an efficiency gain; Observation 3 is a performance-SLA degradation; Observation 4 is a solution-cost issue.

Incorrect

Observation 1 is primarily an efficiency gain, not necessarily a transformation outcome. Observation 3 explicitly concerns increased infrastructure/API costs, making it a solution-cost issue, not a performance- SLA issue.

C. Observations 1 and 4 together indicate a net performance-SLA improvement; Observation 2 is a transformation gap; Observation 3 is a productivity drain from over-engineering.

Incorrect

Observation 1 measures time saved per document, while Observation 4 measures human correction/review effort. Neither directly establishes a performance-SLA improvement. Observation 3 is explicitly about increased infrastructure costs.

D. Observation 1 indicates an efficiency gain; Observation 2 shows that productivity has not yet been realized; Observation 3 is a solution-cost issue; Observation 4 is an efficiency loss that partially offsets Observation 1.

Correct

Each observation is correctly mapped:

Observation 1: 47 minutes → 6 minutes demonstrates a clear efficiency gain. Observation 2: Less time spent on summaries has not translated into increased billable output, so the expected productivity benefit has not yet been realized. Observation 3: A 22% increase in infrastructure/API costs is a solution-cost issue. Observation 4: Attorney correction adds 8 minutes of work, creating an efficiency loss that partially offsets the initial time savings.

Final Answer: D

D = Efficiency gain + unrealized productivity + solution-cost issue + partially offsetting efficiency loss.

---

## Exam Claude Certified Architect Professional (CCAR-P) (PDF) topic 1 question 56
Question #: 56
Topic #: 1

A Claude Architect is reviewing a post-deployment performance report for an Al-assisted legal-document summarization system. The report includes these observations: * Average summarization time decreased from 47 minutes to 6 minutes per document. * Associates spend less time on summaries, but overall billable output has not measurably changed. * Infrastructure costs increased by 22% because redundant retry logic generated additional API calls. * Some summaries require attorney correction, adding an average of 8 minutes of review per document. Which analysis correctly attributes each observation to the appropriate business-value pillar?

A. Observations 1 and 2 both indicate efficiency gains; Observation 3 is a solution-cost issue; Observation 4 is a performance-SLA issue.
B. Observation 1 is a transformation outcome; Observation 2 is an efficiency gain; Observation 3 is a performance-SLA degradation; Observation 4 is a solution-cost issue.
C. Observations 1 and 4 together indicate a net performance-SLA improvement; Observation 2 is a transformation gap; Observation 3 is a productivity drain from over-engineering.
D. Observation 1 indicates an efficiency gain; Observation 2 shows that productivity has not yet been realized;Observation 3 is a solution-cost issue; Observation 4 is an efficiency loss that partially offsets Observation 1.

**Answer: D**

Explanation:
A. Observations 1 and 2 both indicate efficiency gains; Observation 3 is a solution-cost issue; Observation 4 is a performance-SLA issue.

Incorrect

Observation 2 specifically states that overall billable output has not measurably changed, so it does not demonstrate a realized efficiency/productivity outcome. Observation 4 concerns additional attorney review time, not a performance SLA.

B. Observation 1 is a transformation outcome; Observation 2 is an efficiency gain; Observation 3 is a performance-SLA degradation; Observation 4 is a solution-cost issue.

Incorrect

Observation 1 is primarily an efficiency gain, not necessarily a transformation outcome. Observation 3 explicitly concerns increased infrastructure/API costs, making it a solution-cost issue, not a performance- SLA issue.

C. Observations 1 and 4 together indicate a net performance-SLA improvement; Observation 2 is a transformation gap; Observation 3 is a productivity drain from over-engineering.

Incorrect

Observation 1 measures time saved per document, while Observation 4 measures human correction/review effort. Neither directly establishes a performance-SLA improvement. Observation 3 is explicitly about increased infrastructure costs.

D. Observation 1 indicates an efficiency gain; Observation 2 shows that productivity has not yet been realized; Observation 3 is a solution-cost issue; Observation 4 is an efficiency loss that partially offsets Observation 1.

Correct

Each observation is correctly mapped:

Observation 1: 47 minutes → 6 minutes demonstrates a clear efficiency gain. Observation 2: Less time spent on summaries has not translated into increased billable output, so the expected productivity benefit has not yet been realized. Observation 3: A 22% increase in infrastructure/API costs is a solution-cost issue. Observation 4: Attorney correction adds 8 minutes of work, creating an efficiency loss that partially offsets the initial time savings.

Final Answer: D

D = Efficiency gain + unrealized productivity + solution-cost issue + partially offsetting efficiency loss.

---

## Exam Claude Certified Architect Professional (CCAR-P) (PDF) topic 1 question 57
Question #: 57
Topic #: 1

You are listing characteristics of robust guardrail design for an enterprise deployment. Which two characteristics belong on the list? (Select two.) Each correct answer presents a complete solution.

A. Centralized log retention for guardrail violations with quarterly review by the security team.
B. Per-role tool allow-lists enforced at the orchestration layer before any tool call executes.
C. Adversarial-input coverage in the evaluation set with regression tracking on guardrail performance.
D. User feedback channels that route reported guardrail failures into the product backlog for triage.
E. Periodic refresh of the system prompt wording to keep refusal language current and clear.

**Answer: BC**

Explanation:
A. Centralized log retention for guardrail violations with quarterly review by the security team.

Incorrect

Centralized logging and periodic review are useful for monitoring and governance, but they are not as directly related to the core guardrail enforcement and evaluation mechanisms represented by the correct answers.

B. Per-role tool allow-lists enforced at the orchestration layer before any tool call executes.

Correct

Enforcing per-role tool allow-lists at the orchestration layer applies least privilege before a tool can execute. This provides a strong preventive control because the model cannot simply decide to use a tool outside the permissions granted to its role.

C. Adversarial-input coverage in the evaluation set with regression tracking on guardrail performance.

Correct

Robust guardrails need continuous adversarial testing and regression tracking. Including attack-oriented cases in the evaluation set helps verify that guardrails continue to work as prompts, models, and system components change.

D. User feedback channels that route reported guardrail failures into the product backlog for triage.

Incorrect

User feedback is valuable for identifying issues, but it is primarily a feedback and improvement mechanism, rather than a direct preventive or evaluation control for guardrail robustness.

E. Periodic refresh of the system prompt wording to keep refusal language current and clear.

Incorrect

Refreshing refusal wording can improve clarity, but changing prompt language alone is not sufficient to establish robust guardrail enforcement. Strong guardrails should include controls outside the model's instructions as well.

Final Answer: B and C

B = Per-role tool allow-lists enforced before tool execution.

C = Adversarial evaluation coverage with regression tracking.

---

## Exam Claude Certified Architect Professional (CCAR-P) (PDF) topic 1 question 58
Question #: 58
Topic #: 1

A Claude architect is leading the discovery phase for a new Al-powered customer service solution. Which two activities are characteristic of structured discovery and requirement gathering for a Claude-based deployment? (Select two.)

A. Facilitating stakeholder workshops to surface latency, accuracy, and compliance constraints before scoping begins.
B. Selecting the Claude model tier based on the architect's prior project experience before stakeholder input is collected.
C. Generating an initial prototype and iterating based on user reaction rather than written requirements.
D. Documenting explicit success criteria and failure thresholds that will gate production deployment.
E. Deferring constraint documentation until the integration design phase to avoid scope creep.

**Answer: AD**

Explanation:
A. Facilitating stakeholder workshops to surface latency, accuracy, and compliance constraints before scoping begins.

Correct

Structured discovery begins by understanding the stakeholders, business needs, constraints, and expectations. Workshops can identify important requirements such as latency, accuracy, compliance, security, and operational constraints before architectural decisions are made.

B. Selecting the Claude model tier based on the architect's prior project experience before stakeholder input is collected.

Incorrect

Model selection should be driven by requirements and evidence, not simply by prior experience. Choosing a model before understanding stakeholder needs can result in an inappropriate architecture or unnecessary cost.

C. Generating an initial prototype and iterating based on user reaction rather than written requirements.

Incorrect

Prototyping can be valuable, but relying primarily on user reactions without documented requirements and success criteria does not represent structured discovery.

D. Documenting explicit success criteria and failure thresholds that will gate production deployment.

Correct

Clearly defined success criteria and failure thresholds turn stakeholder expectations into measurable requirements. They also provide objective criteria for determining whether the solution is ready for production.

E. Deferring constraint documentation until the integration design phase to avoid scope creep.

Incorrect

Constraints should be identified and documented during discovery. Delaying them can cause major architectural changes later and increase delivery risk.

Final Answer: A and D

A = Facilitate stakeholder workshops to identify requirements and constraints. D = Document measurable success criteria and failure thresholds for production readiness.

---

## Exam Claude Certified Architect Professional (CCAR-P) (PDF) topic 1 question 59
Question #: 59
Topic #: 1

You are identifying inefficiency in a Claude Code workflow where each engineer manually re-explains the project's conventions and architecture in every session. Which adjustment most directly removes this inefficiency?

A. Forbid the use of Claude Code on the project entirely to avoid the session-initialization overhead, accepting that the team loses all Al-assisted development productivity for this codebase.
B. Capture the project's conventions and architecture in a project-scoped CLAUDE.md (or equivalent persistent project-context file) committed to the repository, so each session loads it automatically.
C. Tell each engineer to retype the project conventions and architecture context more quickly at the start of eachsession, reducing time lost without eliminating the repeated manual effort.
D. Remove all documented project conventions and architectural standards so engineers have nothing to re- explain at session start, accepting the loss of consistency and shared coding standards.

**Answer: B**

Explanation:
A. Forbid the use of Claude Code on the project entirely to avoid the session-initialization overhead, accepting that the team loses all AI-assisted development productivity for this codebase.

Incorrect

This eliminates the inefficiency by eliminating Claude Code itself, but it also removes the team's AI-assisted development capability. It is not an effective solution to the underlying context-management problem.

B. Capture the project's conventions and architecture in a project-scoped CLAUDE.md (or equivalent persistent project-context file) committed to the repository, so each session loads it automatically.

Correct

A project-scoped CLAUDE.md provides persistent project context that can be reused across sessions. This eliminates the need for engineers to repeatedly explain the same architecture, conventions, and project instructions, while keeping the information version-controlled and shared with the team.

C. Tell each engineer to retype the project conventions and architecture context more quickly at the start of each session, reducing time lost without eliminating the repeated manual effort.

Incorrect

This only makes the existing inefficient process faster. It does not eliminate the repeated manual work or provide consistent persistent context.

D. Remove all documented project conventions and architectural standards so engineers have nothing to re-explain at session start, accepting the loss of consistency and shared coding standards.

Incorrect

Removing project standards sacrifices consistency and governance rather than solving the context problem. The correct approach is to preserve the standards in persistent project context.

Final Answer: B B = Store project conventions and architecture in a project-scoped CLAUDE.md so every Claude Code session can load the shared context automatically.

---

## Exam Claude Certified Architect Professional (CCAR-P) (PDF) topic 1 question 60
Question #: 60
Topic #: 1

You are integrating Al-assisted tooling into the team's documentation workflow. The team wants generated documentation that stays grounded in the actual code. Which integration approach best fits this requirement?

A. Generate documentation from the model's training-data recall without reading any of the actual repository code, cepting that the output will not reflect the current implementation.
B. Have the subagents publish generated documentation directly to the public-facing site without passing through the team's normal review workflow or any human approval step.
C. Configure subagents that read the relevant code files via filesystem and code-search tools, generate the documentation, and emit changes through the team's normal review workflow.
D. Disable all filesystem and code-search tools so the subagents cannot read any repository code, accepting that cumentation generation will be entirely disconnected from the actual implementation.

**Answer: C**

Explanation:
A. Generate documentation from the model's training-data recall without reading any of the actual repository code, accepting that the output will not reflect the current implementation.

Incorrect

Training-data recall may be outdated or unrelated to the current repository. Without access to the actual code, the generated documentation cannot reliably reflect the current implementation.

B. Have the subagents publish generated documentation directly to the public-facing site without passing through the team's normal review workflow or any human approval step.

Incorrect

Direct publication bypasses the team's review and approval process and could allow inaccurate or inappropriate documentation to reach users. AI-generated changes should follow the existing review workflow.

C. Configure subagents that read the relevant code files via filesystem and code-search tools, generate the documentation, and emit changes through the team's normal review workflow.

Correct

This approach grounds the documentation in the actual repository implementation. Filesystem and code- search tools allow the subagents to inspect current code, while the normal review workflow provides human oversight and quality control before publication.

D. Disable all filesystem and code-search tools so the subagents cannot read any repository code, accepting that documentation generation will be entirely disconnected from the actual implementation.

Incorrect

Removing access to the repository prevents the system from grounding its documentation in the current codebase, which directly conflicts with the requirement. Final Answer: C

C = Have subagents inspect the actual code, generate grounded documentation, and submit changes through the normal review workflow.

---

## Exam Claude Certified Architect Professional (CCAR-P) (PDF) topic 1 question 61
Question #: 61
Topic #: 1

A security audit uncovers two issues: (1) all end users share a single API key, and (2) tool calls are executed without logging the initiating user. Which two mitigations directly address these specific findings? (Select two.)

A. Validate structured outputs against a schema before downstream actions are executed.
B. Enforce RBAC at the retrieval layer before content enters the model context.
C. Move credentials out of the prompt context and resolve them from a server-side secret store.
D. Add actor attribution to tool-call logs so each call records the initiating user identity.
E. Replace the shared API key with per-user Auth tokens carrying scope-restricted permissions.

**Answer: DE**

Explanation:
A. Validate structured outputs against a schema before downstream actions are executed.

Incorrect

Schema validation helps prevent malformed or unexpected outputs from being passed to downstream systems. It does not address shared credentials or missing user attribution in tool-call logs.

B. Enforce RBAC at the retrieval layer before content enters the model context.

Incorrect

RBAC at the retrieval layer is useful for preventing unauthorized access to retrieved information, but it does not directly resolve the two findings of shared API credentials and missing actor attribution.

C. Move credentials out of the prompt context and resolve them from a server-side secret store.

Incorrect

A server-side secret store improves credential handling and secret protection, but by itself it does not replace the shared API key with per-user authorization or provide attribution for tool calls.

D. Add actor attribution to tool-call logs so each call records the initiating user identity.

Correct

This directly addresses the second finding. Recording the initiating user's identity with each tool call provides accountability, traceability, and useful audit information.

E. Replace the shared API key with per-user Auth tokens carrying scope-restricted permissions.

Correct

This directly addresses the first finding. Per-user, scope-restricted authentication provides individual accountability and supports least-privilege access instead of giving every user the same shared credential. Final Answer: D and E

D = Add initiating-user attribution to tool-call logs.

E = Replace the shared API key with per-user, scope-restricted authentication tokens.

---

## Exam Claude Certified Architect Professional (CCAR-P) (PDF) topic 1 question 62
Question #: 62
Topic #: 1

You are assessing a Claude-based system whose dominant risk is silent quality drift on safety-relevant outputs after a model-version upgrade. Which assessment activity most directly addresses this risk?

A. Disable adversarial evaluation entirely during model-version upgrade cycles to reduce evaluation cost, accepting that safety drift will go undetected until it appears in production.
B. Rotate adversarial inputs randomly so no two upgrades are scored on the same set.
C. Skip evaluation on each model-version upgrade and rely on user-submitted complaints to surface safety drift after the upgraded model has already served production traffic.
D. Maintain an adversarial evaluation set with version-attributed scoring so each upgrade is measured against the same set before promotion.

**Answer: D**

Explanation:
A. Disable adversarial evaluation entirely during model-version upgrade cycles to reduce evaluation cost, accepting that safety drift will go undetected until it appears in production.

Incorrect

Disabling adversarial evaluation removes an important mechanism for detecting safety regressions before deployment. This increases the risk that a model-version change introduces undetected problems into production.

B. Rotate adversarial inputs randomly so no two upgrades are scored on the same set.

Incorrect

Changing the evaluation set every time makes it difficult to establish a consistent baseline between model versions. Stable test cases are important for accurately identifying behavioral drift.

C. Skip evaluation on each model-version upgrade and rely on user-submitted complaints to surface safety drift after the upgraded model has already served production traffic.

Incorrect

Waiting for user complaints means the system is being evaluated after exposure to production users. Safety- relevant regressions should be detected before promotion whenever possible.

D. Maintain an adversarial evaluation set with version-attributed scoring so each upgrade is measured against the same set before promotion.

Correct

A stable adversarial evaluation set provides a consistent baseline for comparing model versions. Version- attributed scoring makes it possible to identify quality or safety drift and prevent a problematic version from being promoted. Final Answer: D

D = Maintain a stable adversarial evaluation set and compare each model version against it before promotion.

---

## Exam Claude Certified Architect Professional (CCAR-P) (PDF) topic 1 question 63
Question #: 63
Topic #: 1

You are a platform architect designing an internal Claude-based assistant that serves both finance analysts and external auditors. Each population must access only documents permitted by its role. Where should role-based access control be enforced in the pipeline?

A. Inside the system prompt as a natural-language instruction for Claude to ignore unauthorized documents.
B. At the retrieval layer, before any role-restricted content reaches the prompt-construction step or the model.
C. Nowhere in the pipeline; rely on the model's general refusal behavior to reject unauthorized document access without any enforced access control.
D. After the response is generated, by post-filtering content that should not have been retrieved.

**Answer: B**

Explanation:
A. Inside the system prompt as a natural-language instruction for Claude to ignore unauthorized documents.

Incorrect

A system prompt is an instruction to the model, not an enforcement boundary. Relying on the model to follow access-control instructions could allow unauthorized content to enter the model context.

B. At the retrieval layer, before any role-restricted content reaches the prompt-construction step or the model.

Correct

RBAC should be enforced before retrieval results are passed into the model context. The retrieval layer can verify the user's role and return only documents that the user is authorized to access.

This follows the principle of enforcing authorization at the data-access boundary, rather than relying on model behavior.

C. Nowhere in the pipeline; rely on the model's general refusal behavior to reject unauthorized document access without any enforced access control.

Incorrect

Model refusal behavior is not an access-control mechanism. Authorization must be explicitly enforced by the application or retrieval layer.

D. After the response is generated, by post-filtering content that should not have been retrieved.

Incorrect

Post-filtering is too late. Unauthorized information may already have entered the model's context and influenced the generated response. Access control should occur before the content reaches the model.

Final Answer: B B = Enforce RBAC at the retrieval layer before unauthorized content can enter the model context.

---

## Exam Claude Certified Architect Professional (CCAR-P) (PDF) topic 1 question 64
Question #: 64
Topic #: 1

You are running a controlled experiment to compare two prompts and must complete the design steps before executing the experiment. Which two steps must be completed BEFORE running the experiment with random assignment? (Select two.) Each correct answer presents part of the solution.

A. Determine the minimum detectable effect size and the sample size needed for power.
B. Decide whether to promote, reject, or iterate the candidate based on the analysis.
C. Define the hypothesis and the primary success metric for the comparison.
D. Analyze the results against the predefined success metric and significance threshold.
E. Document the recommendation, the trade-offs accepted, and the alternatives considered.

**Answer: AC**

Explanation:
A. Determine the minimum detectable effect size and the sample size needed for power.

Correct

Before running the experiment, you should determine the minimum detectable effect (MDE) and the required sample size. This ensures the experiment has enough statistical power to detect a meaningful difference between the two prompts.

B. Decide whether to promote, reject, or iterate the candidate based on the analysis.

Incorrect

This is a post-experiment decision. You can only decide whether to promote, reject, or iterate after collecting and analyzing the experimental results.

C. Define the hypothesis and the primary success metric for the comparison.

Correct

The hypothesis and primary success metric must be defined before the experiment begins. Predefining them prevents changing the evaluation criteria after seeing the results and helps maintain an objective comparison.

D. Analyze the results against the predefined success metric and significance threshold.

Incorrect

Analysis occurs after the experiment has been executed and the required data has been collected.

E. Document the recommendation, the trade-offs accepted, and the alternatives considered.

Incorrect

This belongs to the decision and reporting stage after the experiment has been analyzed. It is not a prerequisite for running the experiment.

Final Answer: A and C

A = Determine the MDE and required sample size for adequate statistical power. C = Define the hypothesis and primary success metric before random assignment.

---

## Exam Claude Certified Architect Professional (CCAR-P) (PDF) topic 1 question 65
Question #: 65
Topic #: 1

You are reviewing a customer-support agent's configuration. Each candidate tool falls into one of four categories: (1) required to complete defined tasks, (2) frequently used and reduces hand-offs, ( 3) occasionally useful for unrelated work, (4) speculative future utility. Which categories should typically remain in the agent configuration?

A. Only category 3, because occasionally useful tools for unrelated work provide broader coverage and should take priority over tools required for the agent's defined tasks.
B. Only category 4, because speculative future-utility tools provide the most flexibility and should be configured even when no defined task currently requires them.
C. Categories 1 and 2 only, because they map to defined tasks and the agent's regular hand-offs.
D. All four categories, because broader tool access is categorically better for agent performance regardless of whether the tools map to defined tasks or regular hand-offs.

**Answer: C**

Explanation:
A. Only category 3, because occasionally useful tools for unrelated work provide broader coverage and should take priority over tools required for the agent's defined tasks.

Incorrect

Tools that are occasionally useful for unrelated work do not directly support the agent's defined responsibilities. Including them can increase complexity, tool-selection overhead, and unnecessary access.

B. Only category 4, because speculative future-utility tools provide the most flexibility and should be configured even when no defined task currently requires them.

Incorrect

Speculative tools provide no immediate value and unnecessarily expand the agent's tool surface and complexity. Tools should be selected based on demonstrated or required utility rather than hypothetical future needs.

C. Categories 1 and 2 only, because they map to defined tasks and the agent's regular hand-offs.

Correct

Categories 1 and 2 directly support the agent's responsibilities. Required tools enable defined tasks, while frequently used tools that reduce hand-offs can improve workflow efficiency. Limiting the configuration to these categories also helps reduce unnecessary tool-selection overhead and access exposure.

D. All four categories, because broader tool access is categorically better for agent performance regardless of whether the tools map to defined tasks or regular hand-offs.

Incorrect

More tools do not automatically mean better performance. An unnecessarily large tool set can increase selection latency, token usage, complexity, and security exposure. Final Answer: C

C = Keep Categories 1 and 2 only because they directly support defined tasks and recurring workflow needs.

---

## Exam Claude Certified Architect Professional (CCAR-P) (PDF) topic 1 question 66
Question #: 66
Topic #: 1

You are comparing patterns for a batch document-classification job that follows fixed steps: extract metadata, classify, summarize, and persist. Which pattern is the best fit and why?

A. A workflow pattern, because the steps are well-defined and predictable per-request token cost is preferred over flexibility.
B. An agentic pattern, because agents are categorically more accurate than workflows and therefore always preferable regardless of step predictability.
C. An agentic pattern, because the open-ended planning capability of agents produces more consistent structured outputs than a fixed workflow graph on classification tasks.
D. A workflow pattern, because agentic patterns do not support tool invocations and therefore cannot execute the persist step that writes results to the downstream store.

**Answer: A**

Explanation:
A. Workflow pattern for well-defined, predictable steps.

Correct. The process has a fixed sequence and does not require autonomous planning. A workflow provides predictable execution and cost control.

B. Agentic pattern because agents are categorically more accurate.

Incorrect. Agents are not always more accurate than workflows. The best pattern depends on task requirements and complexity.

C. Agentic pattern because open-ended planning produces more consistent structured outputs.

Incorrect. For a predictable process, a fixed workflow generally provides more control and consistency than open-ended planning.

D. Workflow pattern because agents do not support tool invocations.

Incorrect. Agentic systems can invoke tools. The reason to choose a workflow is the predictable, predefined sequence—not a lack of tool support in agents.

Final Answer: A

---

## Exam Claude Certified Architect Professional (CCAR-P) (PDF) topic 1 question 67
Question #: 67
Topic #: 1

You are selecting a pattern for a compliance Q&A assistant that must answer policy questions with citations to the authoritative internal source set. Latency, cost, and audit predictability are prioritized. Which pattern is the best fit?

A. multi-agent orchestration with a planner, researcher, and writer agent for every query
B. a static prompt with the entire policy corpus concatenated into every request
C. augmented LLM with retrieval-augmented generation over the indexed authoritative corpus and citation rendering on each answer
D. a pure agent loop with open web-browsing tools to surface the most current policy information, without constraining retrieval to the authoritative internal corpus

**Answer: C**

Explanation:
A. Multi-agent orchestration with planner, researcher, and writer agents.

Incorrect. Multiple agents introduce additional processing, latency, and cost without being necessary for straightforward policy questions.

B. Static prompt containing the entire policy corpus.

Incorrect. Sending the entire corpus with every request increases token usage and cost, and may exceed context limits.

C. RAG over the indexed authoritative corpus with citations.

Correct. RAG retrieves relevant internal policy passages and supports source-grounded answers with citations and predictable execution.

D. Pure agent loop with open web-browsing tools.

Incorrect. Open web browsing may introduce unapproved or unreliable sources, conflicting with the requirement to use authoritative internal policies.

Final Answer: C

---

## Exam Claude Certified Architect Professional (CCAR-P) (PDF) topic 1 question 68
Question #: 68
Topic #: 1

You are reviewing a peer’s draft system prompt that contains contradictory instructions: one section says to never speculate beyond the supplied source, and another says to confidently fill in any gaps. Which response is most appropriate?

A. Add a priority-ordering instruction that tells the model to evaluate all available instructions and apply the most contextually appropriate one on each request.
B. Increase the temperature setting so that output randomness masks the contradictions.
C. Resolve the contradiction by removing or rewording the gap-filling instruction so the prompt consistently constrains the model to source-supported content.
D. Keep both contradictory instructions in place and rely on the model to select which one to follow on each individual request, accepting inconsistent behavior as a result.

**Answer: C**

Explanation:
A. Add a priority-ordering instruction that tells the model to evaluate all available instructions and apply the most contextually appropriate one on each request.

Incorrect. A priority-ordering instruction may help resolve conflicts between instructions with different levels of authority, but it does not necessarily eliminate a contradiction between two instructions at the same level. The conflicting guidance should be corrected directly. B. Increase the temperature setting so that output randomness masks the contradictions.

Incorrect. Temperature controls the randomness of generated responses. Increasing it does not resolve contradictory instructions and may make outputs less predictable or consistent.

C. Resolve the contradiction by removing or rewording the gap-filling instruction so the prompt consistently constrains the model to source-supported content.

Correct. Removing or rewording the conflicting instruction eliminates ambiguity and creates a consistent prompt. This supports reliable, source-grounded answers and reduces unsupported speculation.

D. Keep both contradictory instructions in place and rely on the model to select which one to follow on each individual request, accepting inconsistent behavior as a result.

Incorrect. Leaving contradictory instructions in place encourages inconsistent behavior. A well-designed system prompt should establish clear, compatible requirements rather than rely on the model to resolve avoidable conflicts.

---

## Exam Claude Certified Architect Professional (CCAR-P) (PDF) topic 1 question 69
Question #: 69
Topic #: 1

You are designing the prompt for a ticket-triage classifier with thirty well-defined categories and clear category descriptions in the prompt. Which technique is most appropriate as the starting point?

A. a prompt that demands the model invent new categories when the supplied ones do not fit
B. a chain-of-thought prompt for a routing decision that does not require multi-step reasoning
C. a zero-shot prompt that specifies the categories with their descriptions and the required output format
D. a prompt with no category descriptions, expecting the model to infer the category set

**Answer: C**

Explanation:
A. A prompt that demands the model invent new categories when the supplied ones do not fit

Incorrect. The classifier should use the predefined categories. Allowing it to invent new categories can produce inconsistent labels and undermine the purpose of a controlled classification system.

B. A chain-of-thought prompt for a routing decision that does not require multi-step reasoning

Incorrect. Chain-of-thought prompting is unnecessary for a straightforward classification task with clearly defined categories. A direct prompt is simpler and easier to maintain.

C. A zero-shot prompt that specifies the categories with their descriptions and the required output format

Correct. Zero-shot prompting is an appropriate starting point because the model has all the necessary category definitions in the prompt. It can classify tickets without requiring labeled examples, while the specified output format helps ensure structured results.

D. A prompt with no category descriptions, expecting the model to infer the category set

Incorrect. Without category descriptions, the model may interpret labels inconsistently or select unsuitable categories. Explicit definitions reduce ambiguity and improve reliability.

---

## Exam Claude Certified Architect Professional (CCAR-P) (PDF) topic 1 question 70
Question #: 70
Topic #: 1

You are selecting a model for a new production workload and must complete the upstream steps before testing candidate models empirically. Which two steps must be completed BEFORE running a representative sample on a candidate model? (Choose two.) Each correct answer presents part of the solution.

A. Sign off the production rollout plan with the platform and security teams.
B. Select the lightest model that consistently meets the quality bar across the sample.
C. Choose a candidate model based on the requirements profile and known capabilities.
D. Retest the model choice when a new model version becomes available.
E. Define the quality bar, latency tolerance, and expected volume for the workload.

**Answer: CE**

Explanation:
A. Sign off the production rollout plan with the platform and security teams.

Incorrect. Production rollout approval comes later, after the model has been evaluated and validated against the workload requirements.

B. Select the lightest model that consistently meets the quality bar across the sample.

Incorrect. This is a model-selection decision made after empirical testing. You must first run the representative sample to determine which model meets the quality requirements.

C. Choose a candidate model based on the requirements profile and known capabilities.

Correct. You must identify a suitable candidate model before running the representative sample. The candidate should align with the workload's functional and operational requirements.

D. Retest the model choice when a new model version becomes available.

Incorrect. Retesting after a model version update is an ongoing maintenance and evaluation practice, not a prerequisite for the initial empirical test.

E. Define the quality bar, latency tolerance, and expected volume for the workload.

Correct. These requirements establish the evaluation criteria. Without them, you cannot objectively determine whether the candidate model meets the workload's needs.

Correct answers: C and E.

---

## Exam Claude Certified Architect Professional (CCAR-P) (PDF) topic 1 question 71
Question #: 71
Topic #: 1
Matching options: Yes | No

You are reviewing a peer’s end-to-end design for a Claude-based platform expected to scale to thousands of concurrent users. For each statement, indicate yes if the statement reflects a sound architectural practice. Otherwise, select no.

A. Authentication and authorization run before retrieval so retrieval can filter by identity.
B. An asynchronous queue absorbs bursty traffic between intake and the model invocation layer.
C. Tax computation is encoded directly in the system prompt rather than in code.
D. Conversation logs include unredacted government identifiers to maximize signal for tuning.

**Answer: AABB**

Explanation:
Authentication and authorization run before retrieval so retrieval can filter by identity.

Selection: Yes

Reasoning: Authenticating and authorizing users prior to document/data retrieval enforces security-trimmed retrieval, ensuring the model only accesses data the specific user is permitted to see.

An asynchronous queue absorbs bursty traffic between intake and the model invocation layer.

Selection: Yes

Reasoning: Using an asynchronous message queue buffers spikes in user requests, protecting the model invocation layer from rate-limit throttles and service degradation under heavy load.

Tax computation is encoded directly in the system prompt rather than in code.

Selection: No

Reasoning: LLMs are probabilistic models and are not guaranteed to perform exact, error-free deterministic calculations. Exact business and financial logic like tax computation should always be handled deterministically in code or via dedicated services.

Conversation logs include unredacted government identifiers to maximize signal for tuning.

Selection: No

---

## Exam Claude Certified Architect Professional (CCAR-P) (PDF) topic 1 question 72
Question #: 72
Topic #: 1
Matching options: Pre-Processing | Model Stage | Post-Processing

You are sequencing decomposed components in an invoice-processing pipeline. For each of the decomposed components, select the execution layer it belongs to: “Pre-Processing”, “Model Stage”, or “Post-Processing”.

A. Claude-based classification of invoice type
B. persistence of validated records to the system of record
C. schema validation of the extracted fields
D. Claude-based extraction of structured invoice fields
E. PII redaction on extracted text prior to model invocation
F. optical character recognition on scanned invoice images

**Answer: BCCBAA**

Explanation:
Claude-based classification of invoice type

Selected Execution Layer: Model Stage

Reasoning: Using Claude to analyze input content and determine invoice category directly involves model inference.

persistence of validated records to the system of record

Selected Execution Layer: Post-Processing

Reasoning: Storing downstream data into target databases occurs after the model has extracted the fields and those fields have been validated.

schema validation of the extracted fields

Selected Execution Layer: Post-Processing

Reasoning: Verifying that the data returned by the model conforms to predefined schemas and types happens after model generation.

Claude-based extraction of structured invoice fields

Selected Execution Layer: Model Stage

Reasoning: Executing prompt-driven information extraction via Claude is an core model inference activity.

PII redaction on extracted text prior to model invocation

Selected Execution Layer: Pre-Processing

Reasoning: Redacting sensitive personal data prior to sending prompts to the model protects privacy and is performed beforehand.

optical character recognition on scanned invoice images

Selected Execution Layer: Pre-Processing

---

## Exam Claude Certified Architect Professional (CCAR-P) (PDF) topic 1 question 73
Question #: 73
Topic #: 1
Matching options: Input Preparation | Prompt Construction | Output Handling

You are classifying token-management tactics by where in the request lifecycle each tactic applies. For each of the tactics, select where in the request lifecycle each tactic applies: “Input Preparation”, “Prompt Construction”, or “Output Handling”.

A. Persist the validated output for downstream consumption and audit
B. Order the prompt sections so cacheable content sits before per-request content
C. Summarize prior conversation history when full history is no longer needed
D. Validate the model's structured output against the expected schema
E. Move stable repeated content into a cacheable prefix at the head of the prompt
F. Trim retrieved passages to spans relevant to the user's question

**Answer: CBACBA**

Explanation:
Persist the validated output for downstream consumption and audit

Request Lifecycle: Output Handling

Reasoning: Storing and logging generated results happens after model invocation and response validation.

Order the prompt sections so cacheable content sits before per-request content

Request Lifecycle: Prompt Construction

Reasoning: Structuring and ordering prompt elements to optimize prompt caching performance is part of assembling the final prompt.

Summarize prior conversation history when full history is no longer needed

Request Lifecycle: Input Preparation

Reasoning: Condensing chat history and raw contextual data occurs during the data preparation phase before building the final prompt context.

Validate the model's structured output against the expected schema

Request Lifecycle: Output Handling

Reasoning: Checking that the generated response adheres to the expected JSON or system schema is done on the model's output.

Move stable repeated content into a cacheable prefix at the head of the prompt

Request Lifecycle: Prompt Construction

Reasoning: Positioning static elements (like instructions or system guidelines) at the beginning of the prompt structure supports prompt caching mechanisms.

Trim retrieved passages to spans relevant to the user's question

Request Lifecycle: Input Preparation

Reasoning: Filtering and pruning retrieved context chunks (e.g., RAG context) ensures only essential data is passed downstream into prompt creation.

---

## Exam Claude Certified Architect Professional (CCAR-P) (PDF) topic 1 question 74
Question #: 74
Topic #: 1
Matching options: Long Structured Documents | Heterogeneous Short Records | Code or Hierarchical Specs

You are classifying chunking strategies by the corpus type each is best suited to. For each chunking strategy, select where in the request lifecycle each applies: “Long Structured Documents”, “Heterogeneous Short Records”, or “Code or Hierarchical Specs”.

A. function-level or section-level chunking for code modules
B. tree-aware chunking that follows code or specification hierarchy
C. per-record chunking where each record is one chunk
D. semantic chunking along clause or paragraph boundaries
E. fixed-size chunking with overlap for short records of similar length
F. hierarchical chunking that mirrors document section structure

**Answer: CCBABA**

Explanation:
function-level or section-level chunking for code modules

Corpus Type: Code or Hierarchical Specs

Reasoning: Splitting content at function or module boundaries preserves syntactic units and logical scope within source code.

tree-aware chunking that follows code or specification hierarchy

Corpus Type: Code or Hierarchical Specs

Reasoning: Utilizing Abstract Syntax Trees (ASTs) or schema structures ensures that nested relationships in code or hierarchical specification documents remain intact.

per-record chunking where each record is one chunk

Corpus Type: Heterogeneous Short Records

Reasoning: Treating discrete data entries (such as database rows or individual support tickets) as distinct chunks prevents cross-record contamination.

semantic chunking along clause or paragraph boundaries

Corpus Type: Long Structured Documents

Reasoning: Breaking long-form text (such as legal contracts or reports) along paragraphs or natural language clauses preserves coherent semantic units without breaking thoughts mid-sentence.

fixed-size chunking with overlap for short records of similar length

Corpus Type: Heterogeneous Short Records

Reasoning: Standard token window slicing with overlap works efficiently for uniform, short text records where strict structural boundaries are less complex.

hierarchical chunking that mirrors document section structure

Corpus Type: Long Structured Documents

Reasoning: Mapping chunks to headers, subheadings, and sections maintains parent-child contextual context across multi-page, structured narrative documents.

---

## Exam Claude Certified Architect Professional (CCAR-P) (PDF) topic 1 question 75
Question #: 75
Topic #: 1
Matching options: Yes | No

You are evaluating retrieval-strategy claims used by a peer team. For each claim, select yes if the statement is generally accurate. Otherwise, select no.

A. Dense vector retrieval is well suited to recovering paraphrased intent against unstructured text.
B. Sparse term-matching retrieval recovers exact terms (such as identifiers and rare tokens) more reliably than dense alone.
C. Structured query retrieval is the right fit for filter-and-aggregate workloads against a relational store with schema and indexes.
D. Hybrid retrieval is identical to dense-only retrieval and shares the same recall characteristics.
E. Random sampling of a data store is a sound retrieval strategy for production Q&A.

**Answer: AAABB**

Explanation:
Dense vector retrieval is well suited to recovering paraphrased intent against unstructured text.

Selection: Yes

Reasoning: Dense embeddings capture conceptual meaning and semantic similarity, making them effective at matching paraphrased or conceptually related queries even when distinct vocabulary is used.

Sparse term-matching retrieval recovers exact terms (such as identifiers and rare tokens) more reliably than dense alone.

Selection: Yes

Reasoning: Keyword/lexical search algorithms (e.g., BM25) excel at exact string matching, making them superior for retrieving specific product codes, serial numbers, names, or rare technical terms.

Structured query retrieval is the right fit for filter-and-aggregate workloads against a relational store with schema and indexes.

Selection: Yes

Reasoning: Relational databases using SQL or structured queries are engineered specifically for filtering, joining, and aggregating structured records efficiently.

Hybrid retrieval is identical to dense-only retrieval and shares the same recall characteristics.

Selection: No

Reasoning: Hybrid retrieval combines dense semantic vectors with sparse keyword searching (and re- ranking), providing significantly higher overall recall and accuracy than dense-only retrieval alone.

Random sampling of a data store is a sound retrieval strategy for production Q&A.

Selection: No

Reasoning: Randomly selecting data chunks does not account for user query relevance, leading to irrelevant context and hallucinations in production RAG systems.

---

## Exam Claude Certified Architect Professional (CCAR-P) (PDF) topic 1 question 76
Question #: 76
Topic #: 1
Matching options: Yes | No

You are evaluating prompting claims in a peer’s design document. For each claim, select yes if the claim reflects sound practice. Otherwise, select no.

A. Zero-shot is appropriate as a starting point for closed-set classification when categories and descriptions are provided in the prompt.
B. Adding a few-shot example set with exact field names anchors output formatting on extraction tasks.
C. Chain-of-thought should be the default on every task regardless of complexity.
D. Leading-question framing is best mitigated by asking for an even-handed comparison with stated criteria.
E. Behavioral differences across model versions can be ignored once a prompt has been validated on one version.

**Answer: AABAB**

Explanation:
Zero-shot is appropriate as a starting point for closed-set classification when categories and descriptions are provided in the prompt.

Selection: Yes

Reasoning: When categories and clear descriptions are supplied directly in the context, zero-shot prompting establishes a baseline for classification tasks before adding complex examples or few-shot demonstration sets.

Adding a few-shot example set with exact field names anchors output formatting on extraction tasks.

Selection: Yes

Reasoning: Providing representative target output formats (few-shot examples) clearly grounds the model's output schema, field keys, and formatting structure for structured data extraction.

Chain-of-thought should be the default on every task regardless of complexity.

Selection: No

Reasoning: Chain-of-thought (CoT) prompting adds token latency and cost. While crucial for multi-step reasoning, logic, and arithmetic, simple tasks like short conversions or standard classifications do not require CoT.

Leading-question framing is best mitigated by asking for an even-handed comparison with stated criteria.

Selection: Yes

Reasoning: Encouraging objective evaluation criteria and balanced perspectives directly offsets bias introduced by leading or loaded prompts.

Behavioral differences across model versions can be ignored once a prompt has been validated on one version.

Selection: No

Reasoning: LLM updates and version upgrades often introduce variations in instruction-following, formatting adherence, and output style, requiring re-testing and re-validation across versions.

---

## Exam Claude Certified Architect Professional (CCAR-P) (PDF) topic 1 question 77
Question #: 77
Topic #: 1
Matching options: Yes | No

You are evaluating model-selection claims used by a peer team. For each statement, select yes if the statement is generally true. Otherwise, select no.

A. Heavier-reasoning models typically consume more of the rate limit and run more slowly than lighter models on the same input.
B. A representative-sample evaluation on the target workload is the right basis for confirming a model selection.
C. The most capable model is always the right choice regardless of the workload profile.
D. Tiered routing can serve routine traffic with a lighter model while reserving a heavier model for traffic that needs its capability.
E. Selecting a model based on which version was most recently announced is the right basis for production decisions.

**Answer: AABAB**

Explanation:
Heavier-reasoning models typically consume more of the rate limit and run more slowly than lighter models on the same input.

Selection: Yes

Reasoning: Larger, higher-parameter models have greater computational overhead, incurring higher latency and typically tighter API rate limits (such as lower Requests Per Minute or Tokens Per Minute) compared to faster, lightweight models.

A representative-sample evaluation on the target workload is the right basis for confirming a model selection.

Selection: Yes

Reasoning: Empirical evaluation using a domain-specific dataset that accurately mirrors production input traffic ensures that the selected model satisfies latency, quality, and cost constraints.

The most capable model is always the right choice regardless of the workload profile.

Selection: No

Reasoning: Choosing the most powerful model for simple, routine tasks introduces unnecessary latency, cost, and rate-limit risks when a smaller, faster model could perform equally well.

Tiered routing can serve routine traffic with a lighter model while reserving a heavier model for traffic that needs its capability.

Selection: Yes

Reasoning: Model routing architectures optimize both cost and latency by directing simple or standard queries to fast, lightweight models and escalating complex, edge-case requests to frontier reasoning models.

Selecting a model based on which version was most recently announced is the right basis for production decisions.

Selection: No

Reasoning: Production model choices should be determined by performance benchmarks, costs, latency, and system compatibility on your specific workload, rather than release recency.

---

## Exam Claude Certified Architect Professional (CCAR-P) (PDF) topic 1 question 78
Question #: 78
Topic #: 1

You are compiling factors that should drive the choice between Model Context Protocol (MCP), direct API integration, and agent-to-agent handoff. Which two factors belong on the list? (Choose two.) Each correct answer presents a complete solution.

A. whether the underlying transport supports encryption in transit between the integrated services
B. whether the interaction is stateless and latency-sensitive or stateful and longer-running
C. whether the vendor publishes detailed reference documentation for each candidate protocol
D. whether the team has prior implementation experience with any of the candidate protocols
E. whether the integration must be portable across multiple AI clients in the ecosystem

**Answer: BE**

Explanation:
A. Whether the underlying transport supports encryption in transit between the integrated services

Incorrect. Encryption is an important security requirement, but it is a general transport-security consideration rather than a primary factor for distinguishing among these integration patterns.

B. Whether the interaction is stateless and latency-sensitive or stateful and longer-running

Correct. The interaction pattern directly influences the appropriate integration approach. Simple, latency- sensitive request-response operations often favor direct APIs, while stateful, longer-running workflows may benefit from agent-to-agent handoffs.

C. Whether the vendor publishes detailed reference documentation for each candidate protocol

Incorrect. Documentation quality can affect implementation effort, but it does not fundamentally determine which integration pattern best fits the workload.

D. Whether the team has prior implementation experience with any of the candidate protocols

Incorrect. Existing team experience can influence development speed and maintenance costs, but the integration choice should primarily reflect the technical and operational requirements.

E. Whether the integration must be portable across multiple AI clients in the ecosystem

Correct. Portability and interoperability are important selection criteria. MCP provides a standardized protocol that allows compatible AI applications to connect with tools and resources without requiring a separate custom integration for every client. Key Takeaway

Correct answers: B and E.

---

## Exam Claude Certified Architect Professional (CCAR-P) (PDF) topic 1 question 79
Question #: 79
Topic #: 1

You are selecting a protocol for a single low-latency stateless tool call from a Claude-based assistant to an internal pricing service that already exposes a stable HTTP API. Which integration mechanism is the most appropriate?

A. a bespoke streaming protocol layered over an unrelated asynchronous message bus
B. an agent-to-agent handoff that introduces another Claude-based agent in front of the pricing service
C. a long-lived stateful session protocol for a stateless single-call interaction
D. a direct API call to the existing endpoint with the appropriate scoped credentials

**Answer: D**

Explanation:
A. A bespoke streaming protocol layered over an unrelated asynchronous message bus

Incorrect. This approach introduces unnecessary complexity and overhead for a simple, stateless request- response interaction. Streaming and asynchronous messaging are more appropriate when the workload requires those capabilities.

B. An agent-to-agent handoff that introduces another Claude-based agent in front of the pricing service

Incorrect. Adding another agent creates an unnecessary intermediary, increasing latency and operational complexity without providing a clear benefit for a single tool call.

C. A long-lived stateful session protocol for a stateless single-call interaction

Incorrect. A stateful session introduces unnecessary session management when the interaction requires only one independent request. It adds complexity without addressing a stated requirement.

D. A direct API call to the existing endpoint with the appropriate scoped credentials

Correct. The existing HTTP API already supports the required interaction. A direct call provides a simple, low- latency solution while scoped credentials help ensure secure, least-privilege access.

Correct Answer: D

---

## Exam Claude Certified Architect Professional (CCAR-P) (PDF) topic 1 question 80
Question #: 80
Topic #: 1

You are designing a human-in-the-loop validation workflow. Which two design elements belong in the workflow? (Choose two.) Each correct answer presents a complete solution.

A. capture of reviewer decisions as labeled data that feeds the evaluation set over time
B. mandatory reviewer agreement with the model output to maintain consistent reviewer-model alignment
C. aggregate reviewer throughput metrics published weekly to leadership for headcount planning
D. uniform sampling of all model outputs to give every request an equal chance of review
E. risk-stratified sampling that concentrates reviewer attention on low-confidence and high-impact outputs

**Answer: AE**

Explanation:
A. Capture of reviewer decisions as labeled data that feeds the evaluation set over time

Correct. Reviewer decisions provide valuable labeled data for evaluating model performance. Over time, this feedback helps identify failure patterns, measure improvements, and refine evaluation datasets.

B. Mandatory reviewer agreement with the model output to maintain consistent reviewer-model alignment

Incorrect. Reviewers must be able to disagree with the model and correct its mistakes. Requiring agreement undermines independent validation and can reinforce model errors.

C. Aggregate reviewer throughput metrics published weekly to leadership for headcount planning

Incorrect. Throughput metrics can help with operational planning, but publishing them weekly for headcount planning is not a core design element of a human-in-the-loop validation workflow.

D. Uniform sampling of all model outputs to give every request an equal chance of review

Incorrect. Uniform sampling can be useful for measuring overall performance, but it does not prioritize potentially dangerous or consequential errors. Risk-based sampling is more appropriate when review resources are limited.

E. Risk-stratified sampling that concentrates reviewer attention on low-confidence and high-impact outputs

Correct. Risk-stratified sampling directs human attention toward outputs that are uncertain or could cause significant harm if incorrect. This makes the validation process more efficient and strengthens oversight of critical decisions.

Correct answers: A and E.

A — Continuous evaluation: Capture human decisions as labeled evaluation data.

E — Risk-based review: Prioritize low-confidence and high-impact outputs.

---

## Exam Claude Certified Architect Professional (CCAR-P) (PDF) topic 1 question 81
Question #: 81
Topic #: 1

A Claude-based research assistant begins producing responses that confidently contradict its retrieved source documents despite no change to the retrieval pipeline. Which two diagnostic actions most directly identify the root cause of this behavior? (Choose two.)

A. Switch the retrieval index to a denser embedding model to improve chunk relevance scores.
B. Isolate whether the failure reproduces on the previous model version to test for model mismatch.
C. Inspect system-prompt grounding instructions to determine whether citation constraints remain intact.
D. Reduce the temperature setting to lower response variance across all query types.
E. Increase the context window size to allow more retrieved chunks per query.

**Answer: BC**

Explanation:
A. Switch the retrieval index to a denser embedding model to improve chunk relevance scores.

Incorrect. The retrieval pipeline has not changed, and there is no evidence that retrieved chunks are irrelevant. Changing the embedding model prematurely could introduce additional variables rather than identify the root cause.

B. Isolate whether the failure reproduces on the previous model version to test for model mismatch.

Correct. Comparing the current model with the previous version under the same conditions helps identify whether a model update caused changes in grounding behavior. This is a targeted diagnostic test.

C. Inspect system-prompt grounding instructions to determine whether citation constraints remain intact.

Correct. Grounding instructions tell the model how to use retrieved sources and handle unsupported information. Inspecting them can reveal whether conflicting instructions, missing constraints, or prompt changes are allowing unsupported claims.

D. Reduce the temperature setting to lower response variance across all query types.

Incorrect. Lower temperature may reduce response variability, but it does not directly identify why the model contradicts its sources. A confidently incorrect response can still occur at low temperature.

E. Increase the context window size to allow more retrieved chunks per query.

Incorrect. A larger context window does not necessarily improve grounding. The problem may concern how the model follows instructions or interprets context, rather than how much context it can receive.

Correct answers: B and C.

B — Model diagnosis: Compare behavior across model versions. C — Prompt diagnosis: Verify that source-grounding and citation instructions remain effective.

---

## Exam Claude Certified Architect Professional (CCAR-P) (PDF) topic 1 question 82
Question #: 82
Topic #: 1

A pilot AI assistant for procurement specialists shows 89 percent first-response acceptance, but follow-up surveys reveal that specialists frequently override the assistant’s vendor recommendations after consulting unrelated criteria the assistant did not consider. The pilot owner wants to ship the assistant as is, given the strong acceptance rate. Which two discernment-competency observations should you raise BEFORE approving the launch? (Choose two.) Each correct answer presents part of the solution.

A. Acceptance does not measure whether recommendations are right after specialist review.
B. The survey response rate may not be statistically representative of all the specialists.
C. The unconsidered criteria represent a scope gap in the assistant’s input space directly.
D. The acceptance rate alone is sufficient evidence of readiness for general production use.
E. The pilot duration was likely too short to establish reliability across the full year.

**Answer: AC**

Explanation:
A. Acceptance does not measure whether recommendations are right after specialist review.

Correct. Acceptance measures whether users initially accept the assistant's responses, not whether those recommendations remain correct after detailed expert evaluation. A high acceptance rate alone cannot establish recommendation quality or production readiness. B. The survey response rate may not be statistically representative of all the specialists.

Incorrect. Survey representativeness is a valid evaluation consideration, but the scenario provides no evidence that the survey response rate is biased or unrepresentative. The more direct concerns are recommendation quality and missing decision criteria.

C. The unconsidered criteria represent a scope gap in the assistant’s input space directly.

Correct. The assistant is missing criteria that specialists use to make procurement decisions. This indicates a gap between the information the assistant considers and the requirements of its intended task. The system's inputs and decision logic may need to be expanded before launch.

D. The acceptance rate alone is sufficient evidence of readiness for general production use.

Incorrect. A single metric cannot establish production readiness. The assistant must also be evaluated for correctness, completeness, reliability, and its ability to account for relevant procurement criteria.

E. The pilot duration was likely too short to establish reliability across the full year.

Incorrect. Long-term reliability is worth evaluating, but the scenario provides no information about the pilot's duration. The clearly identified problems are the limitations of the acceptance metric and the missing decision criteria.

Correct answers: A and C.

---

## Exam Claude Certified Architect Professional (CCAR-P) (PDF) topic 1 question 83
Question #: 83
Topic #: 1

The platform team at Trenova Systems, Inc. needs to reduce per-query cost and p95 latency for a high-volume Claude pipeline without degrading output quality on the core use case. Which two optimizations directly target both cost and latency simultaneously? (Choose two.)

A. Add a retrieval step that fetches the full source corpus into the context window before generation.
B. Expand the system prompt to include additional few-shot examples for every request.
C. Increase max_tokens to reduce the frequency of truncated responses requiring follow-up calls
D. Enable prompt caching on the static system-prompt prefix to reduce billable input tokens on repeated calls.
E. Route straightforward query types to a smaller, faster Claude model and reserve the full model for complex cases.

**Answer: DE**

Explanation:
A. Add a retrieval step that fetches the full source corpus into the context window before generation.

Incorrect. Fetching the full source corpus increases the amount of input the model must process, potentially raising token costs and latency. Selective retrieval is generally more efficient.

B. Expand the system prompt to include additional few-shot examples for every request.

Incorrect. Additional examples increase prompt length and input-token processing. Unless they provide a measurable quality improvement that justifies the expense, they can increase both cost and latency.

C. Increase max_tokens to reduce the frequency of truncated responses requiring follow-up calls.

Incorrect. Increasing max_tokens raises the permitted output length but does not inherently reduce latency or cost. It may increase both if the model generates longer responses. D. Enable prompt caching on the static system-prompt prefix to reduce billable input tokens on repeated calls.

Correct. Prompt caching avoids repeatedly processing and charging the full price for eligible cached input tokens. It can also reduce latency for repeated requests with the same static prompt prefix.

E. Route straightforward query types to a smaller, faster Claude model and reserve the full model for complex cases.

Correct. Model routing matches model capability to task complexity. Simpler tasks can use a less expensive, faster model, while complex tasks retain access to the more capable model, helping balance efficiency and quality.

Correct answers: D and E.

---

## Exam Claude Certified Architect Professional (CCAR-P) (PDF) topic 1 question 84
Question #: 84
Topic #: 1

You are integrating human review into a high-volume classification pipeline where reviewing every output is infeasible. Which sampling strategy best balances throughput with quality oversight?

A. no sampling at all, relying entirely on user-submitted complaints to surface quality and safety issues after they have already affected end users at scale
B. risk-stratified sampling that reviews all low-confidence and high-impact outputs and a smaller random sample of high-confidence routine outputs
C. inverse sampling that reviews only high-confidence routine outputs and skips all low-confidence and high- impact outputs
D. universal sampling that reviews every output regardless of confidence level or throughput impact, treating all outputs as equally requiring human review

**Answer: B**

Explanation:
A. No sampling at all, relying entirely on user-submitted complaints to surface quality and safety issues after they have already affected end users at scale.

Incorrect. Relying only on complaints is a reactive approach. Errors may affect many users before they are reported, and some users may never submit complaints. Proactive review is needed to identify issues earlier.

B. Risk-stratified sampling that reviews all low-confidence and high-impact outputs and a smaller random sample of high-confidence routine outputs.

Correct. This approach prioritizes potentially problematic outputs while preserving a random sample of routine cases. It supports efficient human oversight, helps identify serious errors, and provides ongoing insight into overall classification quality.

C. Inverse sampling that reviews only high-confidence routine outputs and skips all low-confidence and high-impact outputs.

Incorrect. This strategy directs reviewers away from the outputs most likely to contain errors or cause harm. It creates a significant gap in quality and safety oversight.

D. Universal sampling that reviews every output regardless of confidence level or throughput impact, treating all outputs as equally requiring human review. Incorrect. Reviewing every output may provide extensive oversight, but it ignores the stated throughput constraint and can overwhelm the review team. It is not the most practical strategy when reviewing all outputs is infeasible.

Correct Answer: B

---

## Exam Claude Certified Architect Professional (CCAR-P) (PDF) topic 1 question 85
Question #: 85
Topic #: 1

You are operating an interactive assistant whose dominant performance constraint is per-turn latency. Quality on routine turns is already acceptable. Which configuration adjustment most directly improves latency without disproportionately damaging quality?

A. Reduce retrieval depth to the top-k passages that historically cover the answer, and cache stable system- prompt content.
B. Increase retrieval depth to the corpus maximum to improve recall regardless of latency.
C. Disable prompt caching entirely to ensure fresh context processing on every request, preventing stale prefix content from affecting latency-sensitive interactions.
D. Switch every turn to the heaviest available model to maximize output quality, accepting that the increased model latency will worsen the per-turn SLO rather than improve it.

**Answer: A**

Explanation:
A. Reduce retrieval depth to the top-k passages that historically cover the answer, and cache stable system-prompt content.

Correct. Reducing retrieval depth avoids processing unnecessary passages, while prompt caching reduces repeated processing of static prompt content. Together, these optimizations directly target latency while preserving relevant context.

B. Increase retrieval depth to the corpus maximum to improve recall regardless of latency.

Incorrect. Retrieving more passages can increase retrieval overhead, input-token processing, and response latency. Since routine quality is already acceptable, this additional context may provide little benefit relative to its cost.

C. Disable prompt caching entirely to ensure fresh context processing on every request, preventing stale prefix content from affecting latency-sensitive interactions.

Incorrect. Disabling caching forces repeated processing of eligible static prompt content, potentially increasing latency and cost. Dynamic information should be updated appropriately without unnecessarily discarding reusable prompt prefixes.

D. Switch every turn to the heaviest available model to maximize output quality, accepting that the increased model latency will worsen the per-turn SLO rather than improve it.

Incorrect. A heavier model generally requires more computation and may increase latency. The scenario prioritizes faster responses, and routine quality is already sufficient, so this adjustment does not address the primary constraint.

Correct Answer: A

---

## Exam Claude Certified Architect Professional (CCAR-P) (PDF) topic 1 question 86
Question #: 86
Topic #: 1

You are operating an interactive assistant whose dominant performance constraint is per-turn latency. Quality on routine turns is already acceptable. Which configuration adjustment most directly improves latency without disproportionately damaging quality?

A. Reduce retrieval depth to the top-k passages that historically cover the answer, and cache stable system- prompt content.
B. Increase retrieval depth to the corpus maximum to improve recall regardless of latency.
C. Disable prompt caching entirely to ensure fresh context processing on every request, preventing stale prefix content from affecting latency-sensitive interactions.
D. Switch every turn to the heaviest available model to maximize output quality, accepting that the increased model latency will worsen the per-turn SLO rather than improve it.

**Answer: A**

Explanation:
A. Reduce retrieval depth to the top-k passages that historically cover the answer, and cache stable system-prompt content.

Correct. Reducing retrieval depth avoids processing unnecessary passages, while prompt caching reduces repeated processing of static prompt content. Together, these optimizations directly target latency while preserving relevant context.

B. Increase retrieval depth to the corpus maximum to improve recall regardless of latency.

Incorrect. Retrieving more passages can increase retrieval overhead, input-token processing, and response latency. Since routine quality is already acceptable, this additional context may provide little benefit relative to its cost.

C. Disable prompt caching entirely to ensure fresh context processing on every request, preventing stale prefix content from affecting latency-sensitive interactions.

Incorrect. Disabling caching forces repeated processing of eligible static prompt content, potentially increasing latency and cost. Dynamic information should be updated appropriately without unnecessarily discarding reusable prompt prefixes.

D. Switch every turn to the heaviest available model to maximize output quality, accepting that the increased model latency will worsen the per-turn SLO rather than improve it.

Incorrect. A heavier model generally requires more computation and may increase latency. The scenario prioritizes faster responses, and routine quality is already sufficient, so this adjustment does not address the primary constraint.

Correct Answer: A

---

## Exam Claude Certified Architect Professional (CCAR-P) (PDF) topic 1 question 87
Question #: 87
Topic #: 1

You are reviewing instrumentation in a multi-agent system. Which two findings constitute valid observability gaps in the instrumentation? (Choose two.) Each correct answer presents a complete solution.

A. Model identity and version on each turn are not recorded with the turn artifacts.
B. Tool-call payloads and outcomes are recorded with redaction applied to known sensitive fields
C. Latency and token usage on every span are emitted to the central metrics pipeline.
D. Request-scoped correlation identifiers do not propagate across agent and tool calls.
E. Trace spans for each agent step are exported to the shared distributed-tracing backend.

**Answer: AD**

Explanation:
A. Model identity and version on each turn are not recorded with the turn artifacts.

Correct. Recording the model identity and version is essential for reproducibility and debugging. Without this information, teams may struggle to determine whether a behavior change or failure resulted from a model update or a different model configuration.

B. Tool-call payloads and outcomes are recorded with redaction applied to known sensitive fields.

Incorrect.​ Recording tool-call payloads and outcomes with appropriate redaction is a useful observability practice. It provides diagnostic information while helping protect sensitive data.

C. Latency and token usage on every span are emitted to the central metrics pipeline.

Incorrect. Capturing latency and token usage provides essential performance and cost metrics. This is an existing observability capability, not a gap.

D. Request-scoped correlation identifiers do not propagate across agent and tool calls.

Correct. Correlation identifiers connect related events across distributed components. Without propagation, it becomes difficult to reconstruct an end-to-end request path, diagnose failures, and understand latency across agents and tools.

E. Trace spans for each agent step are exported to the shared distributed-tracing backend.

Incorrect. Exporting trace spans provides visibility into individual agent steps and their relationships. This is a valuable observability capability, not a gap.

Key Takeaway

Correct answers: A and D.

A — Model traceability: Record the model identity and version for each turn. D — End-to-end tracing: Propagate correlation identifiers across agents and tool calls.

---

## Exam Claude Certified Architect Professional (CCAR-P) (PDF) topic 1 question 88
Question #: 88
Topic #: 1

You are building an evaluation pipeline for a Claude-based deployment and must complete the specification steps before running the deployment against the dataset. Which two steps must be completed BEFORE running the deployment against the evaluation dataset? (Choose two.) Each correct answer presents part of the solution.

A. Score the deployment outputs against the reference labels and aggregate the metrics.
B. Publish the aggregated metrics to a dashboard and gate releases on threshold checks.
C. Review failure cases with subject matter experts to refine the scoring rubric.
D. Define the metrics and slices the framework will report across representative, edge, and adversarial cases.
E. Curate and label the evaluation dataset to match the defined slices.

**Answer: DE**

Explanation:
A. Score the deployment outputs against the reference labels and aggregate the metrics.

Incorrect. Scoring and aggregating metrics occur after the deployment has been run against the evaluation dataset.

B. Publish the aggregated metrics to a dashboard and gate releases on threshold checks.

Incorrect. Publishing metrics and enforcing release thresholds are downstream activities that follow evaluation and scoring.

C. Review failure cases with subject matter experts to refine the scoring rubric.

Incorrect. Reviewing failure cases can improve the rubric, but it generally happens after an initial evaluation has produced results. It is not one of the two prerequisite specification steps in this question.

D. Define the metrics and slices the framework will report across representative, edge, and adversarial cases.

Correct. The evaluation criteria and test-case categories must be defined before execution. This ensures the evaluation measures the intended quality dimensions and covers relevant scenarios.

E. Curate and label the evaluation dataset to match the defined slices.

Correct. The dataset must be prepared and labeled so the deployment can be evaluated against reliable reference answers across the required scenarios.

Key Takeaway

Correct answers: D and E.

---

## Exam Claude Certified Architect Professional (CCAR-P) (PDF) topic 1 question 89
Question #: 89
Topic #: 1

An architect is reviewing a Claude-based candidate-screening tool prior to deployment. A stakeholder asserts that because the model was not trained on company data, no bias evaluation is necessary. Which two responses most accurately challenge this assertion? (Choose two.)

A. The model may carry demographic biases from pretraining that manifest in screening outcomes regardless of fine-tuning.
B. Transparency obligations are satisfied by disclosing that an AI system is in use, without further evaluation.
C. The system should be evaluated on outcome-disparity metrics across protected groups before deployment.
D. Fairness testing is required only when the training dataset is known to contain protected-class labels.
E. Bias evaluation is unnecessary when the model provider has published a responsible-use policy.

**Answer: AC**

Explanation:
A. The model may carry demographic biases from pretraining that manifest in screening outcomes regardless of fine-tuning.

Correct. Pretrained models learn patterns from large datasets that may contain stereotypes or historical biases. These biases can influence candidate screening even when the organization has not supplied its own training data.

B. Transparency obligations are satisfied by disclosing that an AI system is in use, without further evaluation.

Incorrect. Disclosing AI use is one aspect of transparency, but it does not establish that the system is fair or safe. Bias evaluation and appropriate oversight are separate responsibilities.

C. The system should be evaluated on outcome-disparity metrics across protected groups before deployment.

Correct. Comparing screening outcomes across relevant protected groups can reveal disparities that require investigation. Such testing helps assess fairness before the system affects real candidates.

D. Fairness testing is required only when the training dataset is known to contain protected-class labels.

Incorrect. Bias can arise even without explicit protected-class labels. Other features may act as proxies for sensitive characteristics, and pretrained model behavior can also introduce bias.

E. Bias evaluation is unnecessary when the model provider has published a responsible-use policy.

Incorrect. A provider's responsible-use policy does not guarantee that a particular deployment is unbiased. Organizations must evaluate the system in its intended context and assess its real-world impact.

---

## Exam Claude Certified Architect Professional (CCAR-P) (PDF) topic 1 question 90
Question #: 90
Topic #: 1

You are defining where human review must remain in a planned automated pipeline. Which placement reflects sound human-in-the-loop design?

A. Remove all human review steps from the pipeline to maximize throughput, accepting that high-impact and irreversible actions will be taken without any human approval or oversight.
B. Place a human reviewer in the loop for a randomly selected sample of requests, without defining criteria for what the reviewer should check or which output categories require mandatory review.
C. Place a human reviewer between the model’s output and any high-impact, irreversible action, with explicit criteria for what the reviewer must check before approval.
D. Place a human reviewer only after the irreversible action has already executed, making the review a post-hoc audit rather than a meaningful pre-action check or approval gate.

**Answer: C**

Explanation:
A. Remove all human review steps from the pipeline to maximize throughput, accepting that high-impact and irreversible actions will be taken without any human approval or oversight.

Incorrect. Eliminating human oversight for high-impact actions increases the risk of serious errors and unintended consequences. Efficiency should not come at the expense of necessary safety controls.

B. Place a human reviewer in the loop for a randomly selected sample of requests, without defining criteria for what the reviewer should check or which output categories require mandatory review.

Incorrect. Random sampling can help with quality monitoring, but it does not guarantee that high-risk actions receive review. Reviewers also need explicit criteria to make consistent, informed decisions.

C. Place a human reviewer between the model’s output and any high-impact, irreversible action, with explicit criteria for what the reviewer must check before approval. Correct. This design creates a meaningful approval gate before consequential actions occur. Clear review criteria help ensure that outputs are checked for accuracy, policy compliance, and potential risks before execution.

D. Place a human reviewer only after the irreversible action has already executed, making the review a post-hoc audit rather than a meaningful pre-action check or approval gate.

Incorrect. Post-action review may help identify problems and improve future performance, but it cannot prevent an irreversible action that has already occurred.

---

## Exam Claude Certified Architect Professional (CCAR-P) (PDF) topic 1 question 91
Question #: 91
Topic #: 1

An engineer inadvertently commits an API key to the repository by placing it in .claude/settings.json. Which configuration design principle was violated?

A. Project-scope configuration should always override user-scope configuration.
B. MCP server definitions must reside in environment variables to prevent scope conflicts.
C. Credentials must be resolved at runtime from a secret store and never stored in version-controlled files.
D. Managed configuration must be applied before project-scope configuration is read.

**Answer: C**

Explanation:
A. Project-scope configuration should always override user-scope configuration.

Incorrect. Configuration precedence determines which settings take effect when values conflict. It does not justify storing sensitive credentials in version-controlled files.

B. MCP server definitions must reside in environment variables to prevent scope conflicts.

Incorrect. MCP server definitions can be configured through supported configuration files or other appropriate mechanisms. The core issue is exposing a secret in a committed file, not where MCP definitions reside.

C. Credentials must be resolved at runtime from a secret store and never stored in version-controlled files.

Correct. Secrets should be managed separately from source-controlled configuration and retrieved securely when needed. This reduces the risk of credential exposure and supports safer credential rotation.

D. Managed configuration must be applied before project-scope configuration is read.

Incorrect. Configuration-loading order is unrelated to the accidental commitment of an API key. Changing configuration precedence does not protect a credential stored in a repository.

---

## Exam Claude Certified Architect Professional (CCAR-P) (PDF) topic 1 question 92
Question #: 92
Topic #: 1

An engineering organization is adopting Claude Code across 200 developers. A team lead has proposed that AI- generated pull requests bypass the standard code review process for changes under 50 lines, on the grounds that small changes are low-risk and review capacity is constrained. Which two Diligence-competency objections should you raise? (Choose two.) Each correct answer presents part of the solution.

A. Code review capacity should be expanded to handle every code change submitted across the team.
B. The 50-line threshold should be raised to 200 lines instead to capture more changes overall.
C. Line count is a poor proxy for the actual risk a code change introduces into the system.
D. Removing review removes the verification mechanism that AI-generated output requires across the workflow.
E. AI-generated pull requests should be rejected as a default policy across the engineering organization.

**Answer: CD**

Explanation:
A. Code review capacity should be expanded to handle every code change submitted across the team.

Incorrect. Expanding review capacity might help address bottlenecks, but it is not the core objection to the proposed policy. The key issues are risk assessment and the need to verify AI-generated code.

B. The 50-line threshold should be raised to 200 lines instead to capture more changes overall.

Incorrect. Increasing the threshold does not solve the underlying problem. Line count is not a reliable measure of risk, regardless of the threshold selected.

C. Line count is a poor proxy for the actual risk a code change introduces into the system.

Correct. A small change can have a significant impact on security, reliability, or critical business functionality. Review requirements should reflect factors such as code criticality, security implications, and potential consequences rather than line count alone.

D. Removing review removes the verification mechanism that AI-generated output requires across the workflow.

Correct. AI-generated code can contain incorrect assumptions, subtle defects, or security vulnerabilities. Human review and appropriate automated checks provide essential verification before changes are merged into the codebase.

E. AI-generated pull requests should be rejected as a default policy across the engineering organization.

Incorrect. Rejecting all AI-generated pull requests is unnecessarily restrictive. AI-assisted development can be productive when supported by appropriate testing, code review, security checks, and accountability.

---

## Exam Claude Certified Architect Professional (CCAR-P) (PDF) topic 1 question 93
Question #: 93
Topic #: 1

You are evaluating a Claude-based deployment for adherence to a specific regulation. Which two steps must be completed BEFORE mapping deployment data flows to specific regulatory clauses? (Choose two.) Each correct answer presents part of the solution.

A. Compare the in-place controls against the regulatory requirements to identify any compliance gaps.
B. Inventory the vendor-provided compliance tooling and confirm which compliance affordances are in place.
C. Identify the applicability of the regulation based on data types, jurisdiction, and audience
D. Document the identified gaps along with recommended remediations and residual risk for sign-off
E. Schedule the remediation work with the engineering team based on the prioritized gap findings.

**Answer: BC**

Explanation:
A. Compare the in-place controls against the regulatory requirements to identify any compliance gaps.

Incorrect. A gap analysis is generally performed after identifying applicable regulatory requirements and understanding the existing controls. It is not one of the prerequisite steps selected here.

B. Inventory the vendor-provided compliance tooling and confirm which compliance affordances are in place.

Correct. Understanding the available compliance tooling and built-in controls establishes the deployment's existing compliance capabilities before detailed regulatory mapping.

C. Identify the applicability of the regulation based on data types, jurisdiction, and audience.

Correct. Regulatory applicability must be established first. Different regulations apply depending on factors such as the data processed, geographic jurisdiction, and the individuals or organizations affected.

D. Document the identified gaps along with recommended remediations and residual risk for sign-off.

Incorrect. Gap documentation and residual-risk sign-off occur after regulatory requirements have been mapped and gaps have been identified.

E. Schedule the remediation work with the engineering team based on the prioritized gap findings.

Incorrect. Scheduling remediation is a later activity that depends on the results of the compliance gap analysis.

Correct answers: B and C.

---

## Exam Claude Certified Architect Professional (CCAR-P) (PDF) topic 1 question 94
Question #: 94
Topic #: 1

You are reviewing an integration specification for security gaps. Which two findings constitute valid security gaps in the specification? (Choose two.) Each correct answer presents a complete solution.

A. Tool inputs and outputs are encrypted in transit using transport layer security between services.
B. Service credentials are placed in the prompt context where they can leak into logs and traces.
C. Tool calls execute server-side under a least-privilege service principal scoped to the requested action.
D. Role-based access control (RBAC) is enforced only at the response-rendering layer after the model accesses restricted data.
E. Per-user OAuth tokens are exchanged with scope-restricted permissions and refreshed within the active session.

**Answer: BD**

Explanation:
A. Tool inputs and outputs are encrypted in transit using transport layer security between services.

Incorrect.

Encryption in transit using TLS protects data exchanged between services from interception and tampering. This is a security best practice, not a security gap.

B. Service credentials are placed in the prompt context where they can leak into logs and traces. Correct.

Placing service credentials in the prompt context risks exposing secrets through logs, traces, model inputs, or debugging systems. Credentials should be stored in a secure secrets manager and accessed through controlled runtime mechanisms.

C. Tool calls execute server-side under a least-privilege service principal scoped to the requested action.

Incorrect.

This follows the principle of least privilege. The service principal receives only the permissions required for the requested action, reducing the potential impact of misuse.

D. Role-based access control (RBAC) is enforced only at the response-rendering layer after the model accesses restricted data.

Correct.

This is a serious security gap because the model can access restricted information before authorization is checked. RBAC should be enforced at the data-access or tool-execution layer, before protected data is retrieved or processed. Filtering the final response alone does not prevent unauthorized access or data leakage through logs and intermediate processing.

E. Per-user OAuth tokens are exchanged with scope-restricted permissions and refreshed within the active session.

Incorrect.

Scope-restricted OAuth tokens limit access to authorized resources and actions. Secure token exchange and refresh practices help maintain controlled, user-specific access.

---

## Exam Claude Certified Architect Professional (CCAR-P) (PDF) topic 1 question 95
Question #: 95
Topic #: 1

You are defining escalation criteria for ambiguous cases in an automated workflow. Which set of criteria best supports consistent escalation?

A. confidence threshold below a defined level, presence of high-impact decision categories, ambiguity flags raised by content classifiers, and the user’s explicit request for review
B. escalation at the discretion of whoever is available when the teams on-call engineer has spare capacity, with no defined threshold, category, or ambiguity criterion to trigger it
C. escalation only after an affected customer has already contacted the support channel to complain, by which point the automated workflow has already completed without human review
D. no escalation criteria at all; the model itself decides on each turn whether to escalate, without explicit confidence thresholds, impact categories, or classifier-based ambiguity flags

**Answer: A**

Explanation:
A. confidence threshold below a defined level, presence of high-impact decision categories, ambiguity flags raised by content classifiers, and the user’s explicit request for review

Correct.

This option defines multiple objective escalation triggers. Low confidence identifies uncertain outputs, high- impact categories flag decisions with greater potential consequences, classifier-based ambiguity flags detect unclear cases, and user requests ensure people can seek human review. Together, these criteria improve consistency, safety, and accountability.

B. escalation at the discretion of whoever is available when the teams on-call engineer has spare capacity, with no defined threshold, category, or ambiguity criterion to trigger it

Incorrect.

This approach relies on individual discretion and staff availability rather than consistent rules. Similar cases may receive different treatment, and important issues may be missed or delayed.

C. escalation only after an affected customer has already contacted the support channel to complain, by which point the automated workflow has already completed without human review

Incorrect.

This is reactive rather than preventive. The workflow may already have made an incorrect or harmful decision before a human becomes involved.

D. no escalation criteria at all; the model itself decides on each turn whether to escalate, without explicit confidence thresholds, impact categories, or classifier-based ambiguity flags

Incorrect.

Relying entirely on the model without explicit escalation criteria makes the process less predictable and harder to audit. Defined rules are needed to ensure similar cases are handled consistently.

---

## Exam Claude Certified Architect Professional (CCAR-P) (PDF) topic 1 question 96
Question #: 96
Topic #: 1

A Claude architect observes that after a recent model-version upgrade, grounded responses began including claims not supported by the retrieved source documents. Which mitigation is most directly targeted at this failure mode?

A. replacing the shared API key with per-user OAuth tokens to restrict data access
B. scoring each new model version against a stable adversarial evaluation set
C. constraining responses to source-supported content combined with required citations and a verification step
D. treating retrieved data as untrusted and applying input classifiers at ingestion time

**Answer: C**

Explanation:
A. replacing the shared API key with per-user OAuth tokens to restrict data access

Incorrect.

Per-user OAuth tokens improve authentication, authorization, and accountability. However, they do not directly prevent the model from generating unsupported claims from documents it has already retrieved.

B. scoring each new model version against a stable adversarial evaluation set

Incorrect.

A stable adversarial evaluation set helps detect regressions and compare model versions. It is valuable for identifying the problem, but it does not directly constrain individual responses to the retrieved evidence. C. constraining responses to source-supported content combined with required citations and a verification step

Correct.

This mitigation directly targets unsupported claims by requiring evidence for factual statements, citations to source documents, and verification that the cited material supports each claim. It improves grounding and reduces hallucinations.

D. treating retrieved data as untrusted and applying input classifiers at ingestion time

Incorrect.

Treating retrieved content as untrusted helps defend against prompt injection and malicious instructions embedded in documents. Input classifiers can identify certain risky content, but neither measure directly ensures that generated factual claims are supported by the retrieved sources.

---

## Exam Claude Certified Architect Professional (CCAR-P) (PDF) topic 1 question 97
Question #: 97
Topic #: 1

You are preparing a HIPAA-eligible deployment for a healthcare customer. Which configuration supports HIPAA compliance using Anthropic-offered tools?

A. disabling all audit logging so that no PHI is recorded in any log store, on the assumption that the absence of logs satisfies HIPAA requirements without a signed BAA
B. an ad-hoc personal Claude account used by individual clinicians for PHI-related tasks, with no Business Associate Agreement, no Zero Data Retention, and no audit logging configured
C. Claude Enterprise with a signed Business Associate Agreement, Zero Data Retention enabled, and audit logging configured for compliance tracking
D. Claude Free with no contractual addendum, since consumer products meet HIPAA requirements out of the box

**Answer: C**

Explanation:
A. disabling all audit logging so that no PHI is recorded in any log store, on the assumption that the absence of logs satisfies HIPAA requirements without a signed BAA

Incorrect.

Disabling audit logging does not establish HIPAA compliance or replace a BAA. Organizations need appropriate safeguards and monitoring controls, while managing logs to prevent unnecessary exposure of PHI.

B. an ad-hoc personal Claude account used by individual clinicians for PHI-related tasks, with no Business Associate Agreement, no Zero Data Retention, and no audit logging configured

Incorrect.

A personal account without an appropriate BAA and an eligible configuration is not a suitable basis for handling PHI under a HIPAA-compliant deployment.

C. Claude Enterprise with a signed Business Associate Agreement, Zero Data Retention enabled, and audit logging configured for compliance tracking

Correct — best answer among the options. An eligible enterprise deployment with a signed BAA and appropriate compliance controls is the intended approach. However, Zero Data Retention is not universally required for HIPAA compliance, and its availability depends on the applicable service and configuration. The organization must verify Anthropic's current HIPAA- eligible offering and retention requirements.

D. Claude Free with no contractual addendum, since consumer products meet HIPAA requirements out of the box

Incorrect.

Claude Free does not automatically provide the contractual protections and configuration needed for HIPAA- regulated PHI processing.

---

## Exam Claude Certified Architect Professional (CCAR-P) (PDF) topic 1 question 98
Question #: 98
Topic #: 1

You are defining transparency practices for a customer-facing assistant whose responses are materially shaped by AI. Which transparency practice most directly supports responsible deployment?

A. Disclose AI involvement only to internal staff and operators while withholding that information from the end users whose interactions are materially shaped by the AI system.
B. Refuse to answer any user question about how the responses were produced or whether AI was involved, treating the AI’s role as confidential operational information.
C. Misrepresent the AI’s role in producing responses in order to make the assistant feel more trustworthy or more human, undermining informed user consent and organizational transparency.
D. Disclose AI involvement to end users in line with the organization’s transparency policy and provide a documented path to reach a human when needed.

**Answer: D**

Explanation:
A. Disclose AI involvement only to internal staff and operators while withholding that information from the end users whose interactions are materially shaped by the AI system.

Incorrect.

Informing only internal staff does not provide transparency to affected users. Customers should receive appropriate disclosure when AI materially influences their interactions.

B. Refuse to answer any user question about how the responses were produced or whether AI was involved, treating the AI’s role as confidential operational information.

Incorrect.

Refusing all questions about AI involvement undermines transparency and prevents users from understanding the nature of the service.

C. Misrepresent the AI’s role in producing responses in order to make the assistant feel more trustworthy or more human, undermining informed user consent and organizational transparency.

Incorrect.

Misrepresenting AI involvement is deceptive and undermines user trust. Responsible deployment requires honest and appropriate disclosure. D. Disclose AI involvement to end users in line with the organization’s transparency policy and provide a documented path to reach a human when needed.

Correct.

This approach promotes transparency by informing users about AI involvement and supports human oversight by providing a clear escalation path when assistance, clarification, or intervention is required.

---

## Exam Claude Certified Architect Professional (CCAR-P) (PDF) topic 1 question 99
Question #: 99
Topic #: 1

You are supporting an EU-based deployment with GDPR obligations. Which combination of measures best supports the deployment’s GDPR posture?

A. disabling all data-retention configuration, redaction controls, and data-subject-rights handling to simplify day-to-day operations, accepting the resulting GDPR compliance exposure
B. enterprise-tier deployment with a signed Data Processing Addendum, defined data-retention configuration, redaction of personal data not needed for the task, and documented data-subject-rights handling
C. pasting full EU personal data into every prompt to “give Claude complete context” without considering purpose limitation, data minimization, or the organization’s Data Processing Addendum obligations
D. using a personal Claude account tier for processing EU personal data at scale, with no signed Data Processing Addendum and no documented data-subject-rights handling procedure

**Answer: B**

Explanation:
A. disabling all data-retention configuration, redaction controls, and data-subject-rights handling to simplify day-to-day operations, accepting the resulting GDPR compliance exposure

Incorrect.

Removing these controls weakens privacy protections and accountability. Organizations must implement appropriate measures to manage personal data and respond to applicable data-subject requests.

B. enterprise-tier deployment with a signed Data Processing Addendum, defined data-retention configuration, redaction of personal data not needed for the task, and documented data-subject-rights handling

Correct.

This option supports several important GDPR principles:

Data processing agreement: Documents the responsibilities of the data controller and processor. Retention configuration: Helps ensure personal data is not retained longer than necessary. Data minimization: Reduces unnecessary exposure by redacting personal information that is not required. Data-subject rights: Establishes procedures for handling applicable requests, such as access, correction, and erasure.

These measures support compliance, although the organization must also address other applicable GDPR obligations.

C. pasting full EU personal data into every prompt to “give Claude complete context” without considering purpose limitation, data minimization, or the organization’s Data Processing Addendum obligations

Incorrect. Including unnecessary personal data conflicts with the principle of data minimization and may increase privacy and security risks. Personal data should be processed only when necessary for a defined, lawful purpose.

D. using a personal Claude account tier for processing EU personal data at scale, with no signed Data Processing Addendum and no documented data-subject-rights handling procedure

Incorrect.

This approach lacks important contractual and operational safeguards for the proposed deployment. Organizations need appropriate data-processing arrangements and procedures for meeting applicable data- subject obligations.

---

## Exam Claude Certified Architect Professional (CCAR-P) (PDF) topic 1 question 100
Question #: 100
Topic #: 1

You are designing a human-in-the-loop validation workflow for a new Claude-based deployment and must complete the design steps before piloting the workflow. Which two steps must be completed BEFORE piloting the workflow with a representative subset of traffic? (Choose two.) Each correct answer presents part of the solution.

A. Onboard the reviewer pool with role-specific training on the check criteria and escalation procedures.
B. Iterate the workflow design based on observed pilot findings before broader rollout to production.
C. Document the workflow with check criteria, escalation paths, and service-level agreements (SLAs) for each step.
D. Define the sampling strategy and the escalation criteria at each oversight point in the pipeline.
E. Identify the decision points in the pipeline that require human oversight by impact and reversibility.

**Answer: DE**

Explanation:
A. Onboard the reviewer pool with role-specific training on the check criteria and escalation procedures.

Incorrect.

Reviewer training is important before reviewers begin performing their assigned tasks. However, the oversight decision points and sampling and escalation strategy should be established first so the training can reflect the finalized workflow design.

B. Iterate the workflow design based on observed pilot findings before broader rollout to production.

Incorrect.

Iteration based on pilot findings happens after the pilot. The question asks which design steps must be completed before the pilot begins.

C. Document the workflow with check criteria, escalation paths, and service-level agreements (SLAs) for each step.

Incorrect.

Documentation is an important implementation activity, but the question focuses on the key design decisions that must precede the pilot. Identifying oversight points and defining sampling and escalation criteria establish the core workflow design. D. Define the sampling strategy and the escalation criteria at each oversight point in the pipeline.

Correct.

The sampling strategy determines which cases receive human review, while escalation criteria specify when a case requires additional attention. Defining both before the pilot makes the validation process structured and measurable.

E. Identify the decision points in the pipeline that require human oversight by impact and reversibility.

Correct.

Human oversight should be prioritized according to the potential impact of a decision and how easily it can be reversed. High-impact or difficult-to-reverse decisions generally warrant stronger oversight than low-risk, reversible actions.

---

## Exam Claude Certified Architect Professional (CCAR-P) (PDF) topic 1 question 101
Question #: 101
Topic #: 1

An architect at Trenova Systems, Inc. is reviewing two draft communication packages for the same architectural decision. Package 1 contains a threat model, residual-risk register, and control-mapping table. Package 2 contains a list of capabilities delivered and feature-level roadmap dependencies. Which two audiences are correctly matched to these packages? (Choose two.)

A. Package 2 --> executive sponsor
B. Package 1 --> engineering implementation team
C. Package 2 --> product manager owning the roadmap
D. Package 2 --> security and compliance reviewer
E. Package 1 --> security and compliance reviewer

**Answer: CE**

Explanation:
A. Package 2 --> executive sponsor

Incorrect.

Executive sponsors typically need a high-level summary of business value, strategic alignment, costs, risks, and expected outcomes. A feature-level roadmap dependency list is more directly suited to product management.

B. Package 1 --> engineering implementation team

Incorrect.

Engineering teams may use threat models and control requirements, but a package centered on residual-risk registers and control-mapping tables is most directly targeted at security and compliance reviewers.

C. Package 2 --> product manager owning the roadmap

Correct.

Product managers need to understand delivered capabilities, feature dependencies, sequencing, and roadmap implications to plan releases and prioritize work.

D. Package 2 --> security and compliance reviewer Incorrect.

A list of delivered capabilities and roadmap dependencies does not directly provide the detailed threat analysis, residual-risk information, and control mappings needed for a security and compliance review.

E. Package 1 --> security and compliance reviewer

Correct.

Security and compliance reviewers need threat models to understand potential threats, residual-risk registers to assess remaining risks, and control-mapping tables to verify how requirements are addressed.

---

## Exam Claude Certified Architect Professional (CCAR-P) (PDF) topic 1 question 102
Question #: 102
Topic #: 1

You are reviewing a peer’s draft ADR. The ADR states the decision and the technical detail but does not state the alternatives considered or the trade-offs accepted. Which response is most appropriate?

A. Delete the ADR entirely and rely on the engineering team’s collective memory to reconstruct the decision context, alternatives, and trade-offs during future audits or onboarding.
B. Approve the ADR as written on the grounds that the decision itself is documented, accepting that reviewers and future maintainers will lack the context to evaluate or revisit it.
C. Replace the ADR with a different decision unrelated to the one drafted.
D. Ask the author to add the alternatives considered and the trade-offs accepted before publishing the ADR.

**Answer: D**

Explanation:
A. Delete the ADR entirely and rely on the engineering team’s collective memory to reconstruct the decision context, alternatives, and trade-offs during future audits or onboarding.

Incorrect.

Deleting the ADR would remove valuable architectural documentation. Relying on team members' memories makes it harder to preserve decision rationale, support onboarding, and conduct future audits.

B. Approve the ADR as written on the grounds that the decision itself is documented, accepting that reviewers and future maintainers will lack the context to evaluate or revisit it.

Incorrect.

Documenting only the decision and technical details is insufficient when the rationale, alternatives, and trade- offs are missing. These omissions make future evaluation and maintenance more difficult.

C. Replace the ADR with a different decision unrelated to the one drafted.

Incorrect.

Changing to an unrelated decision does not address the documentation gap and introduces unnecessary confusion.

D. Ask the author to add the alternatives considered and the trade-offs accepted before publishing the ADR.

Correct. This directly addresses the missing information. Documenting the alternatives and accepted trade-offs makes the ADR more complete, transparent, and useful for future architectural reviews.

---

## Exam Claude Certified Architect Professional (CCAR-P) (PDF) topic 1 question 103
Question #: 103
Topic #: 1

You are running a discovery engagement for a new Claude-based capability and must complete the requirements- gathering steps before validating with stakeholders. Which two steps must be completed BEFORE validating the captured requirements with stakeholders? (Choose two.) Each correct answer presents part of the solution.

A. Capture the business goals, success criteria, and the in-scope user population for the engagement.
B. Produce architecture decision records that capture the rationale for major design choices.
C. Identify the non-functional constraints covering latency, cost, audit, data sensitivity, and regulatory needs.
D. Schedule the rollout milestones and dependencies with engineering and product partners.
E. Document the consolidated requirements with traceability to the source stakeholder for each item.

**Answer: AC**

Explanation:
A. Capture the business goals, success criteria, and the in-scope user population for the engagement.

Correct.

Business goals define the problem the capability should solve, success criteria establish how outcomes will be measured, and the in-scope user population clarifies who the solution is intended to serve. These are foundational inputs to requirements gathering.

B. Produce architecture decision records that capture the rationale for major design choices.

Incorrect.

Architecture Decision Records (ADRs) document important design decisions and their rationale. They generally follow requirements discovery and architectural analysis rather than precede stakeholder validation of captured requirements.

C. Identify the non-functional constraints covering latency, cost, audit, data sensitivity, and regulatory needs.

Correct.

Non-functional constraints establish important boundaries for the solution. Identifying performance, cost, auditability, data sensitivity, and regulatory requirements early helps ensure the captured requirements reflect operational and compliance needs.

D. Schedule the rollout milestones and dependencies with engineering and product partners.

Incorrect.

Rollout planning typically occurs after requirements have been gathered, validated, and translated into an implementation plan.

E. Document the consolidated requirements with traceability to the source stakeholder for each item.

Incorrect. Consolidated documentation and stakeholder traceability are important, but they are part of organizing and recording the captured requirements. In this question, the foundational steps before stakeholder validation are defining the business objectives and identifying non-functional constraints.

Choose A and C.

---

## Exam Claude Certified Architect Professional (CCAR-P) (PDF) topic 1 question 104
Question #: 104
Topic #: 1

You are defining an SLA for a Claude-based assistant. Which SLA definition is most operationally meaningful?

A. a target that names the metric and threshold but omits the evaluation window and breach consequence, leaving compliance periods and remediation triggers undefined
B. a measurable target with a defined metric, threshold, evaluation window, and consequence for breach (for example, “p95 per-request latency under 800 ms over a 28-day window”)
C. a qualitative commitment such as “the system will be fast and reliable”, which names no metric, no threshold, and no evaluation window
D. a target tied to a stakeholder sentiment measure such as “the team feels satisfied”, which cannot be measured objectively or used to trigger a documented breach response

**Answer: B**

Explanation:
A. a target that names the metric and threshold but omits the evaluation window and breach consequence, leaving compliance periods and remediation triggers undefined

Incorrect.

A metric and threshold are useful, but without an evaluation window and defined consequences, teams cannot consistently determine when a breach has occurred or what action should follow.

B. a measurable target with a defined metric, threshold, evaluation window, and consequence for breach (for example, “p95 per-request latency under 800 ms over a 28-day window”)

Correct.

This definition provides measurable criteria, a threshold, a defined period for evaluating compliance, and a response to a breach. It enables teams to monitor performance, identify SLA violations, and trigger documented remediation procedures.

C. a qualitative commitment such as “the system will be fast and reliable”, which names no metric, no threshold, and no evaluation window

Incorrect.

Terms such as “fast” and “reliable” are subjective without measurable definitions. They cannot consistently establish whether the service meets its commitments.

D. a target tied to a stakeholder sentiment measure such as “the team feels satisfied”, which cannot be measured objectively or used to trigger a documented breach response

Incorrect.

Stakeholder satisfaction can be measured through surveys, but this example provides no objective threshold or evaluation period and does not define a breach response. Sentiment alone is insufficient as a clearly operational SLA.

---

## Exam Claude Certified Architect Professional (CCAR-P) (PDF) topic 1 question 105
Question #: 105
Topic #: 1

You are selecting the documentation set that should accompany a Claude-based deployment at handoff. Which set is most complete?

A. a verbal handover walkthrough conducted on the day of transition, with no written architecture overview, ADRs, runbooks, playbook, or known limitations captured for future reference
B. code comments scattered across individual source files with no integrating architecture overview, no ADRs, no runbooks, and no on-call playbook to orient operators or new team members
C. architecture overview, ADRs, component-level diagrams, runbooks for common operations, on-call playbook, and a list of known limitations
D. a single one-page architecture diagram with no ADRs, no runbooks, no on-call playbook, and no list of known limitations to support operators or future maintainers

**Answer: C**

Explanation:
A. a verbal handover walkthrough conducted on the day of transition, with no written architecture overview, ADRs, runbooks, playbook, or known limitations captured for future reference

Incorrect.

A verbal walkthrough can help explain the system, but it does not provide durable documentation. Future operators and new team members may lack the information needed to maintain or troubleshoot the deployment.

B. code comments scattered across individual source files with no integrating architecture overview, no ADRs, no runbooks, and no on-call playbook to orient operators or new team members

Incorrect.

Code comments explain implementation details but do not replace system-level architecture documentation, decision records, operational procedures, or incident-response guidance.

C. architecture overview, ADRs, component-level diagrams, runbooks for common operations, on-call playbook, and a list of known limitations

Correct.

This set covers the major handoff needs:

Architecture overview: Explains the system's structure and purpose. Architecture Decision Records (ADRs): Preserve the rationale behind major design choices. Component-level diagrams: Show components and their relationships. Runbooks: Document routine operations and troubleshooting procedures. On-call playbook: Guides incident response and escalation. Known limitations: Help operators and maintainers understand constraints and outstanding risks.

D. a single one-page architecture diagram with no ADRs, no runbooks, no on-call playbook, and no list of known limitations to support operators or future maintainers

Incorrect. A high-level diagram is useful, but it does not provide sufficient detail for day-to-day operations, incident management, decision review, or understanding known limitations.

---

## Exam Claude Certified Architect Professional (CCAR-P) (PDF) topic 1 question 106
Question #: 106
Topic #: 1

A Claude Architect is reviewing a post-deployment performance report for an AI-assisted legal document summarization system. The report includes the following observations: (1) Average summarization time has decreased from 47 minutes to 6 minutes per document. (2) Associates report spending less time on summaries but no measurable change in overall billable output. (3) Infrastructure costs have increased 22% due to higher API call volume from a redundant retry logic implementation. (4) The system occasionally generates summaries requiring attorney correction, adding an average of 8 minutes of review time per document. Which analysis correctly attributes each observation to the appropriate business value pillar?

A. Observation 1 indicates a transformation outcome; Observation 2 indicates an efficiency gain; Observation 3 indicates a performance SLA degradation; Observation 4 indicates a solution cost issue.
B. Observation 1 indicates an efficiency gain; Observation 2 indicates that productivity has not yet been realized; Observation 3 indicates a solution cost issue; Observation 4 indicates an efficiency loss that partially offsets the gain from Observation 1.
C. Observations 1 and 4 together indicate a net performance SLA improvement; Observation 2 indicates a transformation gap; Observation 3 indicates a productivity drain from over-engineering.
D. Observations 1 and 2 both indicate efficiency gains; Observation 3 indicates a solution cost issue; Observation 4 indicates a performance SLA issue.

**Answer: B**

Explanation:
A. Observation 1 indicates a transformation outcome; Observation 2 indicates an efficiency gain; Observation 3 indicates a performance SLA degradation; Observation 4 indicates a solution cost issue.

Incorrect.

Observation 1 demonstrates an efficiency gain, not necessarily a broader transformation outcome. Observation 2 explicitly states that overall billable output has not measurably changed. Observation 3 concerns infrastructure cost rather than an SLA degradation, while Observation 4 describes additional review effort.

B. Observation 1 indicates an efficiency gain; Observation 2 indicates that productivity has not yet been realized; Observation 3 indicates a solution cost issue; Observation 4 indicates an efficiency loss that partially offsets the gain from Observation 1.

Correct.

All four observations are classified appropriately. The option distinguishes faster task completion from realized productivity, identifies unnecessary infrastructure spending, and recognizes the additional review effort required to correct AI-generated summaries.

C. Observations 1 and 4 together indicate a net performance SLA improvement; Observation 2 indicates a transformation gap; Observation 3 indicates a productivity drain from over-engineering.

Incorrect.

Observations 1 and 4 concern task efficiency and rework, not necessarily performance SLA compliance. Observation 2 indicates that time savings have not translated into measurable billable-output gains. Observation 3 directly identifies a solution cost problem.

D. Observations 1 and 2 both indicate efficiency gains; Observation 3 indicates a solution cost issue; Observation 4 indicates a performance SLA issue.

Incorrect.

Observation 2 does not establish a realized productivity gain because billable output remains unchanged. Observation 4 describes attorney review and correction effort, which is an efficiency loss rather than a demonstrated SLA violation.

---

## Exam Claude Certified Architect Professional (CCAR-P) (PDF) topic 1 question 107
Question #: 107
Topic #: 1

You are building a feedback-and-alignment routine for a multi-stakeholder deployment. Which two practices belong in the routine? (Choose two.) Each correct answer presents a complete solution.

A. Record each session and distribute the recording to stakeholders who could not attend live.
B. Set a regular cadence for revisiting expectations and assumptions as conditions evolve over time.
C. Escalate any disagreement among stakeholders to the executive sponsor for binding resolution.
D. Rotate facilitation among the participating stakeholder groups to share ownership of the routine.
E. Reconcile divergent stakeholder positions explicitly rather than papering over them in the moment.

**Answer: BE**

Explanation:
A. Record each session and distribute the recording to stakeholders who could not attend live.

Incorrect.

Recording sessions can help stakeholders catch up, but it is not a core alignment practice. Recordings alone do not ensure that expectations remain current or that disagreements are resolved.

B. Set a regular cadence for revisiting expectations and assumptions as conditions evolve over time.

Correct.

Regular check-ins allow stakeholders to reassess priorities, validate assumptions, review progress, and adjust expectations when project conditions change.

C. Escalate any disagreement among stakeholders to the executive sponsor for binding resolution.

Incorrect.

Escalating every disagreement is unnecessarily rigid and can slow decision-making. Stakeholders should first attempt to resolve differences collaboratively, escalating only when appropriate.

D. Rotate facilitation among the participating stakeholder groups to share ownership of the routine.

Incorrect.

Rotating facilitation may be useful in some teams, but it is not as fundamental as regularly revisiting expectations and explicitly reconciling divergent positions.

E. Reconcile divergent stakeholder positions explicitly rather than papering over them in the moment. Correct.

Openly addressing conflicting priorities and assumptions prevents false consensus. Explicit reconciliation helps stakeholders understand the differences, agree on decisions, and document unresolved issues when necessary.

---

## Exam Claude Certified Architect Professional (CCAR-P) (PDF) topic 1 question 108
Question #: 108
Topic #: 1

You are choosing the level of detail for an implementation guide. The audience is a delivery team that will build the deployment. Which guidance composition best serves them?

A. component responsibilities and interface contracts only, without sequence diagrams of the dominant flows, configuration parameters with defaults, or runbooks to guide operational tasks
B. an architecture overview and sequence diagrams for the dominant flows, without interface contracts, configuration parameter tables, or operational runbooks for the delivery team to follow
C. an architecture overview and a list of known limitations, without component-level diagrams, interface contracts, configuration parameters, or operational runbooks to support implementation
D. component responsibilities, contracts between components, sequence diagrams of the dominant flows, configuration parameters with defaults, and operational runbooks

**Answer: D**

Explanation:
A. component responsibilities and interface contracts only, without sequence diagrams of the dominant flows, configuration parameters with defaults, or runbooks to guide operational tasks

Incorrect.

Component responsibilities and interface contracts are important, but this option omits workflow sequencing, configuration defaults, and operational guidance. The delivery team would lack essential implementation details.

B. an architecture overview and sequence diagrams for the dominant flows, without interface contracts, configuration parameter tables, or operational runbooks for the delivery team to follow

Incorrect.

Architecture overviews and sequence diagrams explain system structure and behavior, but the team also needs interface contracts, configuration parameters, and runbooks to implement and operate the system consistently.

C. an architecture overview and a list of known limitations, without component-level diagrams, interface contracts, configuration parameters, or operational runbooks to support implementation

Incorrect.

Known limitations help teams understand constraints, but this option lacks the detailed technical and operational information needed to build and configure the deployment.

D. component responsibilities, contracts between components, sequence diagrams of the dominant flows, configuration parameters with defaults, and operational runbooks

Correct. This option provides comprehensive implementation guidance:

Component responsibilities: Define each component's role. Interface contracts: Specify how components communicate and exchange data. Sequence diagrams: Show the order of interactions in major workflows. Configuration parameters with defaults: Make deployment settings explicit and reproducible. Operational runbooks: Guide routine operations and troubleshooting.

---

## Exam Claude Certified Architect Professional (CCAR-P) (PDF) topic 1 question 109
Question #: 109
Topic #: 1

You are running a discovery session with a business sponsor who asks for “an AI system to fix our customer escalations”. Which approach best yields actionable requirements?

A. Defer the discovery session indefinitely on the grounds that the sponsor must fully specify the system before the architect can ask any clarifying or scoping questions.
B. Decompose the request by asking targeted questions about who escalates, what triggers escalation, what good resolution looks like, and which constraints (latency, cost, audit, data sensitivity) apply.
C. Accept the sponsor’s original phrasing as a complete and final requirement and proceed directly to design without asking targeted questions to surface actors, triggers, or constraints.
D. Assume the requirement matches the architect’s previous engagement in a different industry and proceed with that context, without validating actors, triggers, or constraints for this sponsor.

**Answer: B**

Explanation:
A. Defer the discovery session indefinitely on the grounds that the sponsor must fully specify the system before the architect can ask any clarifying or scoping questions.

Incorrect.

Discovery sessions exist to help stakeholders clarify their needs. Requiring a complete specification beforehand defeats the purpose of discovery and delays progress unnecessarily.

B. Decompose the request by asking targeted questions about who escalates, what triggers escalation, what good resolution looks like, and which constraints (latency, cost, audit, data sensitivity) apply.

Correct.

This approach identifies the relevant actors, escalation triggers, desired outcomes, and non-functional constraints. The resulting requirements can guide architecture, implementation, and validation.

C. Accept the sponsor’s original phrasing as a complete and final requirement and proceed directly to design without asking targeted questions to surface actors, triggers, or constraints.

Incorrect.

The original statement is too vague to guide reliable design. Proceeding without clarification risks building a system that does not address the actual business problem.

D. Assume the requirement matches the architect’s previous engagement in a different industry and proceed with that context, without validating actors, triggers, or constraints for this sponsor.

Incorrect.

Previous experience can inform discovery, but assumptions from another engagement may not fit this sponsor's processes, priorities, or constraints. Requirements must be validated in the current business context.

---

## Exam Claude Certified Architect Professional (CCAR-P) (PDF) topic 1 question 110
Question #: 110
Topic #: 1

A business sponsor has requested an AI solution to “improve customer experience”. The sponsor cannot articulate which customer journey is failing, which metric reflects the failure, or which decisions the AI should support. The sponsor is asking you to begin design work next week. Which delegation-competency action should you take first?

A. Recommend that the sponsor revise the request and resubmit it later for evaluation.
B. Facilitate a structured discovery to define the failing decision and the target metric.
C. Propose a fixed scope that you commit to by default based on your own assumptions.
D. Begin prototyping a generic assistant against the broad request before the next deadline.

**Answer: B**

Explanation:
A. Recommend that the sponsor revise the request and resubmit it later for evaluation.

Incorrect.

This delays progress without helping the sponsor clarify the problem. The architect should actively facilitate discovery to turn the vague request into actionable requirements.

B. Facilitate a structured discovery to define the failing decision and the target metric.

Correct.

This is the appropriate first step. Structured discovery clarifies the business problem, identifies the decision that needs improvement, and establishes measurable success criteria before design begins.

C. Propose a fixed scope that you commit to by default based on your own assumptions.

Incorrect.

Defining scope without validated requirements risks solving the wrong problem and committing to unrealistic outcomes.

D. Begin prototyping a generic assistant against the broad request before the next deadline.

Incorrect.

A generic prototype may demonstrate technology, but without a clear customer journey, decision, or success metric, there is no reliable basis for evaluating whether it delivers business value.

---

## Exam Claude Certified Architect Professional (CCAR-P) (PDF) topic 1 question 111
Question #: 111
Topic #: 1

You are compiling continuity practices that span the deployment lifecycle. Which two practices belong on the list? (Choose two.) Each correct answer presents a complete solution.

A. Carry the evaluation framework and reference set forward across iterations rather than rebuilding each time.
B. Capture lessons learned at the end of each phase and surface them as inputs to the next phase.
C. Maintain a stakeholder register and notify the listed parties at every phase transition event.
D. Lock decisions made in early phases to prevent revisiting them as later phases begin.
E. Archive every phase deliverable in long-term storage to preserve a record of what was produced.

**Answer: AB**

Explanation:
A. Carry the evaluation framework and reference set forward across iterations rather than rebuilding each time.

Correct.

Reusing a consistent evaluation framework and reference set enables meaningful comparisons across iterations. It helps teams track regressions, measure improvements, and maintain continuity in quality assessment.

B. Capture lessons learned at the end of each phase and surface them as inputs to the next phase.

Correct.

Documenting lessons learned ensures that knowledge from earlier phases informs future work. Teams can apply successful practices, address recurring problems, and improve decisions throughout the lifecycle.

C. Maintain a stakeholder register and notify the listed parties at every phase transition event.

Incorrect.

Stakeholder management and communication are valuable, but notifying everyone at every transition is not necessarily an effective continuity practice. Communication should be tailored to stakeholder roles and the information they need.

D. Lock decisions made in early phases to prevent revisiting them as later phases begin.

Incorrect.

Early decisions may need to change when new evidence, requirements, or risks emerge. Preventing reassessment undermines adaptability and continuous improvement.

E. Archive every phase deliverable in long-term storage to preserve a record of what was produced.

Incorrect.

Archiving deliverables supports recordkeeping, but simply preserving documents does not ensure that knowledge or evaluation practices carry forward into subsequent phases.

---

## Exam Claude Certified Architect Professional (CCAR-P) (PDF) topic 1 question 112
Question #: 112
Topic #: 1

You are listing characteristics of strong architectural-decision communication. Which two characteristics belong on the list? (Choose two.) Each correct answer presents a complete solution.

A. omission of rejected alternatives to keep the decision document focused and concise for readers
B. ownership and review cadence for revisiting the decision when conditions or assumptions change
C. alternatives considered along with the criteria that were used to evaluate each alternative
D. distribution to a standing review forum with mandatory attendance from senior engineering leaders
E. use of a consistent template across the team to standardize the visual presentation of decisions

**Answer: BC**

Explanation:
A. omission of rejected alternatives to keep the decision document focused and concise for readers

Incorrect.

Documenting rejected alternatives helps readers understand why the chosen option was preferred. Omitting them removes important decision context and makes future reassessment more difficult.

B. ownership and review cadence for revisiting the decision when conditions or assumptions change

Correct.

Assigning ownership and defining when to review a decision supports accountability. It also helps ensure that architectural decisions remain appropriate as requirements, risks, and operating conditions evolve.

C. alternatives considered along with the criteria that were used to evaluate each alternative

Correct.

Recording alternatives and evaluation criteria explains the reasoning behind the selected approach. This improves transparency, supports future reviews, and helps new team members understand the trade-offs.

D. distribution to a standing review forum with mandatory attendance from senior engineering leaders

Incorrect.

A mandatory forum with senior leaders is not essential for every architectural decision. Review and distribution should be appropriate to the decision's impact and the stakeholders involved.

E. use of a consistent template across the team to standardize the visual presentation of decisions

Incorrect.

Consistent templates improve readability and standardization, but visual consistency alone does not ensure that decision rationale, alternatives, and future review responsibilities are communicated effectively.

---

## Exam Claude Certified Architect Professional (CCAR-P) (PDF) topic 1 question 113
Question #: 113
Topic #: 1

An architect is reviewing a set of architecture documentation packages before handing off a Claude-based pipeline to an implementation team. Which two characteristics indicate that a documentation package is sufficient to support implementation without ongoing architect involvement? (Choose two.)

A. The document includes the architect's contact information for questions arising during implementation.
B. The document specifies integration contracts, configuration schemas, and expected input/output shapes for each component.
C. The document provides a high-level narrative description of the business problem without component-level detail.
D. The document lists all Claude models that were evaluated but does not specify which was selected or why.
E. The document includes a decision log that records the rationale for key architectural choices and the alternatives rejected.

**Answer: BE**

Explanation:
A. The document includes the architect's contact information for questions arising during implementation.

Incorrect. Contact information is useful for support, but it does not make the documentation self-sufficient. The goal is to minimize ongoing dependence on the architect by providing clear and complete implementation guidance.

B. The document specifies integration contracts, configuration schemas, and expected input/output shapes for each component.

Correct. These details define how components interact, what configurations they require, and what inputs and outputs they expect. This enables the implementation team to build and integrate components consistently without needing constant clarification.

C. The document provides a high-level narrative description of the business problem without component- level detail.

Incorrect. A high-level narrative explains the business context but lacks the technical details needed for implementation. Component-level specifications, interfaces, dependencies, and configuration details are also necessary.

D. The document lists all Claude models that were evaluated but does not specify which was selected or why.

Incorrect. Listing evaluated models without documenting the final selection and its rationale leaves important architectural decisions unresolved. The implementation team needs to know which model to use and the reasons for that choice.

E. The document includes a decision log that records the rationale for key architectural choices and the alternatives rejected.

Correct. A decision log preserves the reasoning behind architectural choices and explains why alternatives were rejected. This helps implementers understand design constraints, avoid revisiting settled decisions, and make consistent choices when handling implementation details.

---

## Exam Claude Certified Architect Professional (CCAR-P) (PDF) topic 1 question 114
Question #: 114
Topic #: 1

A healthcare organization is evaluating two Claude-powered AI architectures for a clinical documentation assistant. Architecture X produces higher output quality scores but costs $0.18 per documentation session and averages 4.2 seconds per response. Architecture Y scores slightly lower on quality metrics but costs $0.09 per session and averages 2.1 seconds per response. The stated SLA requires responses under 3 seconds, and the annual volume is projected at 2 million documentation sessions. Which evaluation approach correctly applies business value pillar analysis to this decision?

A. Select Architecture Y based solely on the 50% cost reduction, since solution cost is the most important value pillar in healthcare budget-constrained environments.
B. Select Architecture X because the higher quality scores justify the cost premium, and any SLA gap can be addressed through infrastructure optimization after deployment.
C. Eliminate Architecture X on SLA grounds, then evaluate Architecture Y against the efficiency and solution cost pillars by calculating annual cost difference and assessing whether the quality delta materially impacts clinical workflow productivity.
D. Recommend a hybrid approach using Architecture X for complex cases and Architecture Y for routine cases, without additional analysis, since this preserves quality where it matters most.

**Answer: C**

Explanation:
A. Select Architecture Y based solely on the 50% cost reduction, since solution cost is the most important value pillar in healthcare budget-constrained environments.

Incorrect. Cost is important, but business value analysis should not focus on cost alone. Quality, clinical workflow impact, and other relevant requirements must also be considered.

B. Select Architecture X because the higher quality scores justify the cost premium, and any SLA gap can be addressed through infrastructure optimization after deployment.

Incorrect. Architecture X violates the stated SLA. Assuming that future infrastructure optimization will resolve the problem is not a valid basis for selecting it without evidence that the requirement can be met.

C. Eliminate Architecture X on SLA grounds, then evaluate Architecture Y against the efficiency and solution cost pillars by calculating annual cost difference and assessing whether the quality delta materially impacts clinical workflow productivity.

Correct. This approach respects the mandatory response-time requirement, quantifies the financial difference, and evaluates whether the quality trade-off has a meaningful business impact. It applies multiple business value considerations rather than optimizing a single metric.

D. Recommend a hybrid approach using Architecture X for complex cases and Architecture Y for routine cases, without additional analysis, since this preserves quality where it matters most.

Incorrect. A hybrid approach might be worth investigating, but it requires additional analysis of routing accuracy, latency for complex cases, total cost, and clinical workflow impact. Architecture X's SLA violation cannot simply be ignored.

---

## Exam Claude Certified Architect Professional (CCAR-P) (PDF) topic 1 question 115
Question #: 115
Topic #: 1

You are documenting an architectural decision to support future audit and onboarding. Which artifact is the strongest fit?

A. a slide deck in a presentation folder with no accompanying written rationale
B. a code comment in a single file that contains an opinion of one engineer
C. a short verbal note shared during a hallway conversation with no written record
D. an Architecture Decision Record that states the context, the decision, the alternatives considered, the consequences, and the date and authors

**Answer: D**

Explanation:
A. A slide deck in a presentation folder with no accompanying written rationale

Incorrect. A slide deck may summarize an architecture, but without written rationale and decision details, it may not explain why a particular approach was selected or which alternatives were rejected.

B. A code comment in a single file that contains an opinion of one engineer Incorrect. A code comment can explain a local implementation detail, but it does not provide a complete, authoritative record of an architectural decision or its broader consequences.

C. A short verbal note shared during a hallway conversation with no written record

Incorrect. A verbal discussion is difficult to verify, preserve, and share with future team members. It does not provide a dependable audit trail.

D. An Architecture Decision Record that states the context, the decision, the alternatives considered, the consequences, and the date and authors

Correct. An ADR documents the essential information needed to understand and review an architectural decision. Its structured, written format supports auditability, knowledge transfer, and consistent implementation over time.

---

## Exam Claude Certified Architect Professional (CCAR-P) (PDF) topic 1 question 116
Question #: 116
Topic #: 1

The engineering lead at Trenova Systems, Inc. is evaluating two proposals for improving developer workflows using Claude-assisted tooling Proposal A adds Claude Code to the IDE for inline code generation and review. Proposal B routes all code-generation requests through a shared Slack bot with no IDE integration. Which two observations most accurately evaluate these proposals against workflow-improvement objectives? (Choose two.)

A. Proposal B is superior because centralizing requests in Slack creates an auditable log of all code-generation activity.
B. Proposal B introduces workflow friction by requiring developers to leave the IDE, which undermines the productivity objective.
C. Proposal A reduces context-switching by surfacing AI assistance at the point of development without requiring a separate tool.
D. Proposal B improves workflow velocity because Slack notifications create an asynchronous review queue.
E. Both proposals are equivalent because the underlying model capabilities are identical regardless of integration point.

**Answer: BC**

Explanation:
A. Proposal B is superior because centralizing requests in Slack creates an auditable log of all code- generation activity.

Incorrect. Centralized logging may improve visibility and auditability, but it does not automatically improve developer productivity. Developers may experience additional friction when they must leave their IDE to request code generation.

B. Proposal B introduces workflow friction by requiring developers to leave the IDE, which undermines the productivity objective.

Correct. Switching between the IDE and Slack interrupts the development workflow and adds extra steps. This friction can reduce efficiency, especially when developers frequently need AI assistance while coding.

C. Proposal A reduces context-switching by surfacing AI assistance at the point of development without requiring a separate tool.

Correct. Integrating Claude Code directly into the IDE allows developers to generate, review, and refine code within their existing workflow. This reduces context-switching and supports more efficient development. D. Proposal B improves workflow velocity because Slack notifications create an asynchronous review queue.

Incorrect. An asynchronous queue may help organize requests, but notifications alone do not guarantee faster development. Waiting for responses and switching tools can introduce delays.

E. Both proposals are equivalent because the underlying model capabilities are identical regardless of integration point.

Incorrect. Model capability is only one factor in workflow effectiveness. Integration, accessibility, context- switching, and how well the tool fits existing developer processes also affect productivity.

---

## Exam Claude Certified Architect Professional (CCAR-P) (PDF) topic 1 question 117
Question #: 117
Topic #: 1

You are integrating Claude Code into a team workflow and must complete the design and configuration steps before piloting the integrated workflow. Which two steps must be completed BEFORE piloting the integrated workflow with a small group? (Choose two.) Each correct answer presents part of the solution.

A. Iterate the integrated workflow based on pilot findings before broader rollout to the team.
B. Document the integrated workflow with hand-off criteria, permission boundaries, and on-call runbooks.
C. Negotiate the workflow change with affected teams and obtain formal sign-off from each manager.
D. Identify the workflow steps where AI-assisted tooling adds value and where human authority must remain.
E. Configure the project-scope Model Context Protocol (MCP) servers, permissions, subagents, and persistent project context.

**Answer: DE**

Explanation:
A. Iterate the integrated workflow based on pilot findings before broader rollout to the team.

Incorrect. Iterating based on pilot findings happens after the initial pilot. It is necessary before a broader rollout, but it is not a prerequisite for starting the pilot.

B. Document the integrated workflow with hand-off criteria, permission boundaries, and on-call runbooks.

Incorrect. Documentation is important for operational readiness and handoff. However, the question focuses on the key design and configuration steps required before the initial small-group pilot; identifying AI value and configuring the integration take priority here.

C. Negotiate the workflow change with affected teams and obtain formal sign-off from each manager.

Incorrect. Stakeholder communication and approvals may be appropriate depending on organizational policies, but formal sign-off from every manager is not a universal prerequisite for piloting an integrated workflow.

D. Identify the workflow steps where AI-assisted tooling adds value and where human authority must remain.

Correct. The team must identify suitable tasks for AI assistance and establish which decisions require human judgment or approval. This defines the workflow boundaries and helps prevent inappropriate delegation of authority to AI tools.

E. Configure the project-scope Model Context Protocol (MCP) servers, permissions, subagents, and persistent project context.

Correct. The integration must be configured before testing. Project-scoped MCP servers, appropriate permissions, subagents, and persistent project context enable Claude Code to access the intended tools and information within defined boundaries.

---

## Exam Claude Certified Architect Professional (CCAR-P) (PDF) topic 1 question 118
Question #: 118
Topic #: 1

You are resolving a Claude Code operational issue reported by the team and must complete the diagnostic steps before applying a targeted fix. Which two steps must be completed BEFORE applying the targeted fix? (Choose two.) Each correct answer presents part of the solution.

A. Open a permanent change request in the change-management system to formalize the upcoming fix.
B. Document the root cause and the fix in the team runbook for future occurrences.
C. Form a hypothesis about the most likely root cause given the symptom, configuration, and recent changes.
D. Reproduce the issue with a minimal reproduction case to confirm the symptom and isolate variables.
E. Notify the affected users that a fix has been deployed and the operational issue is resolved.

**Answer: CD**

Explanation:
A. Open a permanent change request in the change-management system to formalize the upcoming fix.

Incorrect. A change request may be required by organizational procedures, but it does not diagnose the problem. The immediate priority is to understand and confirm the root cause before selecting a fix.

B. Document the root cause and the fix in the team runbook for future occurrences.

Incorrect. Runbook documentation is valuable, but the root cause and fix should be documented after they have been established and validated. It is not a substitute for diagnosis.

C. Form a hypothesis about the most likely root cause given the symptom, configuration, and recent changes.

Correct. A hypothesis gives the investigation a clear direction. Reviewing symptoms, configuration, and recent changes helps narrow down likely causes and guides the next diagnostic steps.

D. Reproduce the issue with a minimal reproduction case to confirm the symptom and isolate variables.

Correct. A minimal reproduction case helps confirm that the issue is real and identify which factors trigger it. By isolating variables, the team can test the root-cause hypothesis and choose a targeted fix with greater confidence.

E. Notify the affected users that a fix has been deployed and the operational issue is resolved.

Incorrect. This notification should occur after the fix has been applied and verified. Claiming that the issue is resolved before deployment would be premature.

---

## Exam Claude Certified Architect Professional (CCAR-P) (PDF) topic 1 question 119
Question #: 119
Topic #: 1

A Claude architect is configuring a shared Claude Code environment for a twelve-person development team. Which two configuration decisions most directly establish a consistent, secure team environment? (Choose two.)

A. applying managed configuration to enforce non-overridable security and compliance policies across all team members
B. committing shared MCP server definitions and tool permissions in project-scope configuration files alongside the repository
C. instructing each engineer to configure their preferred Claude model in personal user-scope settings
D. storing the team’s shared API key in the project-scope settings.json so all engineers use the same credential
E. setting editor theme and display preferences at the project scope so they are uniform across workstations

**Answer: AB**

Explanation:
A. Applying managed configuration to enforce non-overridable security and compliance policies across all team members

Correct. Managed configuration allows administrators to enforce mandatory security and compliance requirements across the team. Non-overridable policies help prevent individual users from weakening critical organizational controls.

B. Committing shared MCP server definitions and tool permissions in project-scope configuration files alongside the repository

Correct. Project-scope configuration provides a consistent setup for repository contributors. Sharing MCP server definitions and appropriate tool permissions helps team members use the same integrations while keeping configuration reviewable and version-controlled.

C. Instructing each engineer to configure their preferred Claude model in personal user-scope settings

Incorrect. Individual model preferences can create inconsistent behavior across the team. Personal settings are not the best mechanism for establishing a standardized, centrally governed environment.

D. Storing the team’s shared API key in the project-scope settings.json so all engineers use the same credential

Incorrect. Storing shared API keys in project configuration risks exposing credentials through source control or other unintended access. Credentials should be managed through approved secret-management mechanisms and appropriate access controls.

E. Setting editor theme and display preferences at the project scope so they are uniform across workstations

Incorrect. Editor themes and display preferences may improve consistency, but they do not directly establish security or compliance controls and are not the most important configuration decisions for a secure shared environment.

---

## Exam Claude Certified Architect Professional (CCAR-P) (PDF) topic 1 question 120
Question #: 120
Topic #: 1

You are configuring Claude Code for a team that needs every engineer to share the same MCP server set, permission rules, and project context across the engineering monorepo. Which configuration scope best supports this requirement?

A. user scope configured individually on each engineer’s machine, with no shared configuration committed to the repository and no guarantee of consistency across the team
B. user scope with the MCP server definitions and permission rules placed in each engineer’s ~/.claude/settings.json and synchronized manually via a shared setup script outside version control
C. local scope configured only on the lead architect’s machine, with no configuration present on other engineers’ machines and no mechanism to distribute MCP servers or permission rules
D. project scope, with the configuration committed to the repository so every engineer working in the project picks up the same MCP servers, permissions, and context

**Answer: D**

Explanation:
A. User scope configured individually on each engineer’s machine, with no shared configuration committed to the repository and no guarantee of consistency across the team

Incorrect. User-scope settings apply to an individual engineer's environment. Without shared configuration, engineers may have different MCP servers, permissions, and project settings.

B. User scope with the MCP server definitions and permission rules placed in each engineer’s ~/.claude/settings.json and synchronized manually via a shared setup script outside version control

Incorrect. Manual synchronization introduces maintenance overhead and the risk of configuration drift. It does not provide the same repository-based review, versioning, and consistency as project-scope configuration.

C. Local scope configured only on the lead architect’s machine, with no configuration present on other engineers’ machines and no mechanism to distribute MCP servers or permission rules

Incorrect. Local-scope configuration is intended for machine-specific or personal project settings. Configuring it only on the lead architect’s machine does not distribute shared settings to the rest of the team.

D. Project scope, with the configuration committed to the repository so every engineer working in the project picks up the same MCP servers, permissions, and context

Correct. Project-scope configuration supports team-wide consistency by keeping shared settings alongside the repository. Engineers working in the project can use the same defined integrations and permission rules, while changes can be reviewed and tracked through version control.

---

## Exam Claude Certified Architect Professional (CCAR-P) (PDF) topic 1 question 121
Question #: 121
Topic #: 1

A Claude needs to ensure that a security-hardening flag cannot be disabled by any individual engineer after it is set. Which configuration scope correctly enforces this requirement?

A. managed configuration applied centrally and marked as non-overridable
B. environment variable defined in the CI/CD pipeline only
C. project scope (.claude/settings.json) committed to the repository
D. user scope (~/.claude/settings.json) on each engineer’s machine

**Answer: A**

Explanation:
A. Managed configuration applied centrally and marked as non-overridable Correct. Centrally managed, non-overridable configuration enforces mandatory security settings across the organization and prevents individual engineers from weakening the required controls.

B. Environment variable defined in the CI/CD pipeline only

Incorrect. A CI/CD environment variable affects the pipeline environment where it is defined. It does not necessarily enforce the setting across engineers’ local Claude Code environments.

C. Project scope (.claude/settings.json) committed to the repository

Incorrect. Project-scope configuration provides shared settings for repository contributors, but it does not provide the same centrally enforced, non-overridable guarantee as managed configuration.

D. User scope (~/.claude/settings.json) on each engineer’s machine

Incorrect. User-scope settings are controlled by individual engineers. Therefore, they cannot guarantee that a security flag remains enabled across all team members.

---

## Exam Claude Certified Architect Professional (CCAR-P) (PDF) topic 1 question 122
Question #: 122
Topic #: 1

You are supporting a team whose Claude Code sessions consistently load 60 or more MCP tools from many servers, exhausting context budget before the session begins. Which adjustment most directly addresses this issue without removing capability?

A. Enable Tool Search so tool definitions are deferred and discovered on demand rather than loaded into context upfront.
B. Add additional MCP servers to give the team more capability, which increases rather than reduces the number of tool definitions loaded into the session’s context budget.
C. Increase the prompt’s verbosity with additional instructions and context, which consumes more of the context budget rather than reducing the tool-definition overhead causing the issue.
D. Disable every MCP server in the configuration to free up context budget, accepting that the team loses all tool access and cannot perform any MCP-dependent task in the session.

**Answer: A**

Explanation:
A. Enable Tool Search so tool definitions are deferred and discovered on demand rather than loaded into context upfront.

Correct. Tool Search reduces the initial context overhead by making tool definitions available when needed. This helps preserve context capacity without requiring the team to remove useful MCP servers or permanently lose tool capabilities.

B. Add additional MCP servers to give the team more capability, which increases rather than reduces the number of tool definitions loaded into the session’s context budget.

Incorrect. Adding more servers can increase the number of available tools and worsen context consumption. It does not address the existing problem.

C. Increase the prompt’s verbosity with additional instructions and context, which consumes more of the context budget rather than reducing the tool-definition overhead causing the issue.

Incorrect. Adding more prompt content consumes additional context and does not reduce the overhead from loading tool definitions. D. Disable every MCP server in the configuration to free up context budget, accepting that the team loses all tool access and cannot perform any MCP-dependent task in the session.

Incorrect. Disabling all MCP servers would free context, but it would also remove the team's MCP-dependent capabilities. Tool Search offers a more targeted solution that preserves access to tools.

---

## Exam Claude Certified Architect Professional (CCAR-P) (PDF) topic 1 question 123
Question #: 123
Topic #: 1

A team manager wants all engineers working on the same repository to share identical MCP server definitions without manual synchronization. Which configuration approach satisfies this requirement?

A. project-scope .claude/settings.json and .mcp.json files committed to the repository
B. managed configuration pushed to all endpoints by the administrator
C. environment variables set at the operating-system level on each workstation
D. each engineer maintains a personal ~/.claude/settings.json with the shared definitions

**Answer: A**

Explanation:
A. Project-scope .claude/settings.json and .mcp.json files committed to the repository

Correct. These files support shared project configuration and MCP server definitions. Committing them to the repository allows team members to use the same configuration and receive updates through normal version- control workflows.

B. Managed configuration pushed to all endpoints by the administrator

Incorrect. Managed configuration is appropriate for centrally enforced organizational policies and settings. However, repository-based project configuration is the most direct approach for sharing repository-specific MCP definitions without manual synchronization.

C. Environment variables set at the operating-system level on each workstation

Incorrect. Environment variables must be configured on individual workstations or distributed through separate management mechanisms. They do not inherently provide version-controlled, repository-specific MCP definitions.

D. Each engineer maintains a personal ~/.claude/settings.json with the shared definitions

Incorrect. User-scope settings are maintained separately for each engineer. This introduces synchronization overhead and risks configuration differences across the team.

---

## Exam Claude Certified Architect Professional (CCAR-P) (PDF) topic 1 question 124
Question #: 124
Topic #: 1

A Claude-based research assistant begins producing responses that confidently contradict its retrieved source documents despite no change to the retrieval pipeline. Which two diagnostic actions most directly identify the root cause of this behavior? (Choose two.)

A. Switch the retrieval index to a denser embedding model to improve chunk relevance scores.
B. Isolate whether the failure reproduces on the previous model version to test for model mismatch.
C. Inspect system-prompt grounding instructions to determine whether citation constraints remain intact.
D. Reduce the temperature setting to lower response variance across all query types.
E. Increase the context window size to allow more retrieved chunks per query.

**Answer: BC**

Explanation:
A. Switch the retrieval index to a denser embedding model to improve chunk relevance scores.

Incorrect. The scenario states that the retrieval pipeline has not changed. Changing the embedding model prematurely introduces another variable and does not directly investigate whether the model or grounding instructions caused the contradictions.

B. Isolate whether the failure reproduces on the previous model version to test for model mismatch.

Correct. Comparing the current model with the previous version under the same prompts and retrieved documents helps determine whether a model change introduced the behavior. This is a targeted diagnostic test.

C. Inspect system-prompt grounding instructions to determine whether citation constraints remain intact.

Correct. Grounding instructions tell the model to base its answers on retrieved evidence and follow citation requirements. If these instructions were removed, weakened, or contradicted, the model might produce confident answers that conflict with the sources.

D. Reduce the temperature setting to lower response variance across all query types.

Incorrect. Lowering temperature may reduce output variability, but it does not directly identify why responses contradict the retrieved evidence. A consistently generated answer can still be incorrect or ungrounded.

E. Increase the context window size to allow more retrieved chunks per query.

Incorrect. A larger context window may accommodate more information, but it does not establish whether the current model or system-prompt instructions caused the problem. More context alone does not guarantee better grounding.

---

## Exam Claude Certified Architect Professional (CCAR-P) (PDF) topic 1 question 125
Question #: 125
Topic #: 1

You are supporting an engineer whose newly added MCP server does not appear in their Claude Code session. Which diagnostic step should be tried first?

A. Reinstall the developer’s operating system from scratch, discarding all local configuration and tool state before attempting any targeted diagnostic steps.
B. Disable every MCP server in the configuration to isolate the issue, removing all tool access rather than confirming whether the new server is registered.
C. Switch the team to a different Claude product family unrelated to the existing workflow, abandoning the current configuration rather than diagnosing the registration issue.
D. Verify the MCP server is registered using the listing command, then reconnect the session if needed, since configuration changes typically require a restart to take effect.

**Answer: D**

Explanation:
A. Reinstall the developer’s operating system from scratch, discarding all local configuration and tool state before attempting any targeted diagnostic steps.

Incorrect. Reinstalling the operating system is an extreme measure that risks data loss and wastes time. A targeted configuration check should come first.

B. Disable every MCP server in the configuration to isolate the issue, removing all tool access rather than confirming whether the new server is registered.

Incorrect. Disabling all MCP servers removes useful functionality and does not directly establish whether the new server is registered or loaded.

C. Switch the team to a different Claude product family unrelated to the existing workflow, abandoning the current configuration rather than diagnosing the registration issue.

Incorrect. Changing product families is unnecessary and does not diagnose the MCP server registration problem.

D. Verify the MCP server is registered using the listing command, then reconnect the session if needed, since configuration changes typically require a restart to take effect.

Correct. Checking the registered MCP servers is a simple, targeted diagnostic step. If the server is listed but does not appear in the active session, reconnecting or restarting the session can help load the updated configuration.

---

## Exam Claude Certified Architect Professional (CCAR-P) (PDF) topic 1 question 126
Question #: 126
Topic #: 1

You are supporting an engineer whose newly added MCP server does not appear in their Claude Code session. Which diagnostic step should be tried first?

A. Reinstall the developer’s operating system from scratch, discarding all local configuration and tool state before attempting any targeted diagnostic steps.
B. Disable every MCP server in the configuration to isolate the issue, removing all tool access rather than confirming whether the new server is registered.
C. Switch the team to a different Claude product family unrelated to the existing workflow, abandoning the current configuration rather than diagnosing the registration issue.
D. Verify the MCP server is registered using the listing command, then reconnect the session if needed, since configuration changes typically require a restart to take effect.

**Answer: D**

Explanation:
A. Reinstall the developer’s operating system from scratch, discarding all local configuration and tool state before attempting any targeted diagnostic steps.

Incorrect. Reinstalling the operating system is an extreme measure that risks data loss and wastes time. A targeted configuration check should come first.

B. Disable every MCP server in the configuration to isolate the issue, removing all tool access rather than confirming whether the new server is registered.

Incorrect. Disabling all MCP servers removes useful functionality and does not directly establish whether the new server is registered or loaded.

C. Switch the team to a different Claude product family unrelated to the existing workflow, abandoning the current configuration rather than diagnosing the registration issue.

Incorrect. Changing product families is unnecessary and does not diagnose the MCP server registration problem.

D. Verify the MCP server is registered using the listing command, then reconnect the session if needed, since configuration changes typically require a restart to take effect.

Correct. Checking the registered MCP servers is a simple, targeted diagnostic step. If the server is listed but does not appear in the active session, reconnecting or restarting the session can help load the updated configuration.

---

## Exam Claude Certified Architect Professional (CCAR-P) (PDF) topic 1 question 127
Question #: 127
Topic #: 1

Why is 'cost per call' described as the metric that makes a bad routing decision look good?

A. Because it is measured after batch discounts are applied
B. Because it does not distinguish between input and output tokens
C. Because a cheap call that must be retried or escalated still counts as one cheap call, while the retry and the human time appear elsewhere or nowhere
D. Because it excludes cached input tokens, which are the largest component

**Answer: C**

Explanation:
Correct Answer: C — Because a cheap call that must be retried or escalated still counts as one cheap call, while the retry and the human time appear elsewhere or nowhere

Only cost per resolved task folds in retries, escalations and human time, which is where a cheaper model's real cost lands.

Why the other options are wrong:

A: Discounts apply equally to both framings.

B: The input-output split is a detail within either framing.

D: Cache accounting is included in per-call cost and is not the distortion.

---

## Exam Claude Certified Architect Professional (CCAR-P) (PDF) topic 1 question 128
Question #: 128
Topic #: 1

Engineering leadership wants to roll out Claude Skills to 280 developers across 14 teams. Skills will encode internal coding standards, code-review checklists, and incident-postmortem templates. Leadership has asked how to govern Skill authorship so that Skills remain trustworthy without bottlenecking on a single central team. Which governance model should you recommend?

A. Per-developer authorship across the 280 engineers with no team-level coordination required
B. Centralized authorship by a single platform team responsible for every Skill produced.
C. Fully decentralized authorship across the 14 teams with no review before publication.
D. Federated authorship across the 14 teams with a central review and publication gate.

**Answer: D**

Explanation:
Federated authorship allows each domain team to maintain the procedural knowledge it understands while preserving organization-wide trust through a central publication gate. Team authors can update coding standards, review practices, and postmortem procedures without waiting for a single platform group to write every change. Central reviewers can validate ownership, security, tool permissions, duplication, versioning, testing evidence, and compliance before publication. Per-developer or fully decentralized publication creates inconsistent and potentially unsafe Skills. Fully centralized authorship becomes a scalability bottleneck and separates content maintenance from domain expertise. Anthropic describes Skills as packages of instructions, scripts, and resources and warns that repository Skills may grant broad tool access, making formal review essential. Claude Code Skills

---

## Exam Claude Certified Architect Professional (CCAR-P) (PDF) topic 1 question 129
Question #: 129
Topic #: 1

A wealth-management firm uses Claude to draft investment-suitability memos that advisers act on directly with clients. Compliance is worried about a single failure mode: a fabricated figure in a memo driving a client decision. Which control most directly reduces that risk?

A. Require the model to attach a source citation beside every figure it includes in each generated memo
B. Require adviser sign-off checking each figure against the cited source records before client use
C. Set temperature to zero so each memo is generated deterministically from the same underlying inputs
D. Add a standing notice to memos stating that figures should be independently verified before reliance

**Answer: B**

Explanation:
For high-stakes outputs people act on, human verification against source records is the control that directly intercepts fabricated content. Determinism settings, citation formatting, and disclaimers narrow or shift the risk without catching it.

---

## Exam Claude Certified Architect Professional (CCAR-P) (PDF) topic 1 question 130
Question #: 130
Topic #: 1

An insurer classifies incoming claims with a prompt carrying about 6,000 tokens of stable guidelines, taxonomy, and worked examples, followed by a short variable claim description. Volume is roughly 900,000 classifications per week, results feed a nightly job rather than a live user, and accuracy must not regress. Which TWO changes cut cost the most while preserving accuracy? (Select TWO)

A. Reorder the prompt so the variable claim description comes first and the stable guidelines follow at the end of each request
B. Split the taxonomy across several smaller sequential calls so each individual request carries a lighter context load
C. Mark the stable guideline-and-example block with a cache breakpoint so repeated requests read it at the reduced cached-token rate
D. Submit the classifications through the Message Batches API, which halves token pricing for asynchronous workloads
E. Move the workload to a larger model tier so the worked examples can be dropped from the prompt while holding accuracy

**Answer: CD**

Explanation:
Correct Answers: C and D

C. Mark the stable guideline-and-example block with a cache breakpoint so repeated requests read it at the reduced cached-token rate

Correct. Prompt caching reduces input-token costs when large, identical prompt prefixes are reused across requests. Since the 6,000-token guidelines, taxonomy, and examples remain stable, caching this block is a strong cost-saving strategy without changing the model's instructions or intended accuracy.

D. Submit the classifications through the Message Batches API, which halves token pricing for asynchronous workloads

Correct. The Message Batches API is designed for asynchronous workloads that do not require immediate responses. It offers reduced pricing, making it suitable for the insurer's nightly classification job and high request volume.

A. Reorder the prompt so the variable claim description comes first and the stable guidelines follow at the end of each request

Incorrect. Prompt caching benefits from a shared, stable prefix. Placing variable content first prevents the stable guidelines from forming the reusable prefix needed for effective caching.

B. Split the taxonomy across several smaller sequential calls so each individual request carries a lighter context load

Incorrect. Multiple sequential calls add overhead and repeat context, potentially increasing total token usage and cost. They may also introduce inconsistencies that affect classification accuracy.

E. Move the workload to a larger model tier so the worked examples can be dropped from the prompt while holding accuracy

Incorrect. A larger model generally costs more per token. There is also no guarantee that removing the worked examples will preserve accuracy.

---

## Exam Claude Certified Architect Professional (CCAR-P) (PDF) topic 1 question 131
Question #: 131
Topic #: 1

A home-goods retailer has written a new prompt version for its product-description generator. The team holds 400 expert-labeled examples with a scoring rubric, and leadership wants a go or no-go decision this week, before any customer traffic sees the new version. What is the soundest way to decide between the two prompts?

A. Have the generating model review each pair of outputs and record which version it judges stronger for every item
B. Release the new version behind a feature flag to full traffic and compare this week's engagement metrics with last week's
C. Launch a four-week production A/B test and use the labeled set only as a tie-breaker if the test proves inconclusive
D. Score both prompt versions against the held-out labeled set using the fixed rubric and compare the results side by side

**Answer: D**

Explanation:
Correct Answer: D. Score both prompt versions against the held-out labeled set using the fixed rubric and compare the results side by side.

A. Have the generating model review each pair of outputs and record which version it judges stronger for every item

Incorrect. Using the generating model as its own judge can introduce self-preference and evaluation bias. The team already has expert-labeled examples and a fixed scoring rubric, which provide a more reliable evaluation basis.

B. Release the new version behind a feature flag to full traffic and compare this week's engagement metrics with last week's

Incorrect. This exposes customer traffic to the new prompt before validating its quality. Comparing different weeks can also introduce seasonal, promotional, or traffic-related biases.

C. Launch a four-week production A/B test and use the labeled set only as a tie-breaker if the test proves inconclusive

Incorrect. A production A/B test is unnecessary as the first step because leadership needs a decision before customer exposure. The existing labeled dataset can provide an offline evaluation.

D. Score both prompt versions against the held-out labeled set using the fixed rubric and compare the results side by side

Correct. Offline evaluation using the 400 expert-labeled examples provides a controlled and reproducible comparison. Applying the same fixed rubric to both prompt versions helps determine whether the new version improves quality before deployment.

---

## Exam Claude Certified Architect Professional (CCAR-P) (PDF) topic 1 question 132
Question #: 132
Topic #: 1

An electricity transmission operator wants Claude to answer control-room questions strictly from its grid maintenance manuals. The corpus is about 40,000 pages, sections are revised monthly, and each answer must cite the exact section an operator should open. Answers must reflect a revision within one day of publication. Which integration approach best fits these constraints?

A. Fine-tune the model on the manual corpus each month so grid knowledge is available at query time with no retrieval dependency
B. Load the relevant manual volumes into the 1M token context window on each query so the model sees complete documents rather than fragments
C. Cache the full corpus with a one-hour prompt cache so repeated questions reuse the processed manuals at a fraction of input cost
D. Index the manuals in a retrieval pipeline returning section-level passages with identifiers, re-indexing changed sections as revisions land

**Answer: D**

Explanation:
Correct Answer: D. Index the manuals in a retrieval pipeline returning section-level passages with identifiers, re-indexing changed sections as revisions land.

A. Fine-tune the model on the manual corpus each month so grid knowledge is available at query time with no retrieval dependency

Incorrect. Fine-tuning is not the best approach for frequently revised reference documents. It does not reliably provide exact section citations, and monthly retraining may not meet the one-day freshness requirement.

B. Load the relevant manual volumes into the 1M token context window on each query so the model sees complete documents rather than fragments

Incorrect. Even a large context window is not an efficient solution for a 40,000-page corpus. It increases input costs and does not inherently provide reliable section-level citations or automatic updates.

C. Cache the full corpus with a one-hour prompt cache so repeated questions reuse the processed manuals at a fraction of input cost

Incorrect. Prompt caching reduces the cost of repeated stable context, but it does not solve document retrieval, precise section citations, or the requirement to reflect revisions within one day.

D. Index the manuals in a retrieval pipeline returning section-level passages with identifiers, re-indexing changed sections as revisions land

Correct. Retrieval-Augmented Generation (RAG) is the best fit. The manuals can be indexed into searchable sections, and retrieval can return relevant passages with section identifiers. Re-indexing updated sections as revisions arrive keeps answers current and supports precise citations.

---

## Exam Claude Certified Architect Professional (CCAR-P) (PDF) topic 1 question 133
Question #: 133
Topic #: 1

A freight forwarder is automating customs declarations. Every shipment follows the same pipeline: extract commodity codes from invoices, validate them against the current tariff schedule, compute duties, and queue the filing for a licensed broker's sign-off. Regulators require a reviewable record of each intermediate result, and the per-shipment processing budget is tight. Which architecture fits these constraints best?

A. An autonomous agent that plans its own path per shipment, choosing which extraction and validation actions to run based on what it discovers in the documents
B. A code-orchestrated chain of focused prompts, one per pipeline step, with each intermediate output validated and persisted before the next step runs
C. A single comprehensive prompt that performs extraction, tariff validation, and duty computation in one model call to minimize orchestration code
D. A routing layer that classifies each shipment on arrival and dispatches it to one of several differently tuned prompt variants

**Answer: B**

Explanation:
Correct Answer: B. A code-orchestrated chain of focused prompts, one per pipeline step, with each intermediate output validated and persisted before the next step runs.

A. An autonomous agent that plans its own path per shipment, choosing which extraction and validation actions to run based on what it discovers in the documents

Incorrect. Autonomous agents introduce dynamic planning and additional execution overhead. The shipment process has a fixed sequence, so autonomous decision-making is unnecessary and can make regulatory auditing more difficult.

B. A code-orchestrated chain of focused prompts, one per pipeline step, with each intermediate output validated and persisted before the next step runs Correct. A code-orchestrated workflow provides deterministic execution and precise control over each stage. Intermediate results can be validated, recorded, and audited before the next step begins. Focused prompts also avoid unnecessary model operations, helping control processing costs.

C. A single comprehensive prompt that performs extraction, tariff validation, and duty computation in one model call to minimize orchestration code

Incorrect. Although one model call may reduce orchestration overhead, it makes intermediate results harder to validate and persist independently. This conflicts with the regulator's requirement for a reviewable record of every processing stage.

D. A routing layer that classifies each shipment on arrival and dispatches it to one of several differently tuned prompt variants

Incorrect. Routing is useful when different inputs require different processing paths. Here, every shipment follows the same pipeline, so a routing layer adds unnecessary complexity.

---

## Exam Claude Certified Architect Professional (CCAR-P) (PDF) topic 1 question 134
Question #: 134
Topic #: 1

A retail bank is automating new-account onboarding triage. Every application moves through the same three stages: extract fields from the ID document, validate them against the application form, and flag discrepancies for a human reviewer. Compliance requires that each stage's output be independently inspectable, and the stage sequence has not changed in four years. Which architecture best fits these constraints?

A. A prompt-chained workflow with one model call per stage and programmatic validation gates between the stages.
B. An orchestrator agent that decomposes each application into subtasks and delegates them to worker agents at run time.
C. A single model call with a comprehensive prompt covering extraction, validation, and discrepancy flagging together.
D. A routing step that classifies each application and dispatches it to one of several specialized handler prompts.

**Answer: A**

Explanation:
Correct Answer: A. A prompt-chained workflow with one model call per stage and programmatic validation gates between the stages.

A. A prompt-chained workflow with one model call per stage and programmatic validation gates between the stages

Correct. A prompt-chained workflow is ideal for a fixed, predictable process. Each stage runs independently, and its output can be validated, inspected, and recorded before passing it to the next stage. This satisfies the bank's compliance and auditability requirements.

B. An orchestrator agent that decomposes each application into subtasks and delegates them to worker agents at run time

Incorrect. An orchestrator agent is useful for dynamic workflows where tasks and execution order vary. The bank has a stable, predefined sequence, so dynamic delegation adds unnecessary complexity.

C. A single model call with a comprehensive prompt covering extraction, validation, and discrepancy flagging together Incorrect. A single call combines all three stages, making independent inspection and validation of intermediate outputs more difficult.

D. A routing step that classifies each application and dispatches it to one of several specialized handler prompts

Incorrect. Routing is appropriate when different inputs require different processing paths. Every application follows the same three stages, so routing is unnecessary.

---

## Exam Claude Certified Architect Professional (CCAR-P) (PDF) topic 1 question 135
Question #: 135
Topic #: 1

A travel booking company classifies two million inbound chat messages a month into eight intent categories. The p95 latency target is under one second, finance has capped monthly model spend, and most messages are short and unambiguous. An internal labeled test set exists. Which model strategy fits this profile?

A. Standardize on the most capable Opus-tier model so classification quality is settled from day one, absorbing the higher per-message cost and latency
B. Start with Claude Haiku, the fastest and lowest-cost tier, validate accuracy on the labeled test set, and escalate tiers only if it misses the bar
C. Send each message to both a small and a large model and accept the label where they agree, re-running disagreements with a tie-breaking prompt
D. Fine-tune a mid-tier model on the labeled intents before measuring what a prompted base model already achieves on the existing test set

**Answer: B**

Explanation:
Correct Answer: B. Start with Claude Haiku, the fastest and lowest-cost tier, validate accuracy on the labeled test set, and escalate tiers only if it misses the bar.

A. Standardize on the most capable Opus-tier model so classification quality is settled from day one, absorbing the higher per-message cost and latency

Incorrect. Opus-tier models offer stronger capabilities but typically involve higher costs and latency. This is unnecessary for short, straightforward classification tasks with strict budget and response-time requirements.

B. Start with Claude Haiku, the fastest and lowest-cost tier, validate accuracy on the labeled test set, and escalate tiers only if it misses the bar

Correct. Haiku is a strong starting point for high-volume, low-complexity classification. Testing it against the existing labeled dataset allows the company to verify whether it meets the required accuracy while controlling cost and latency. If accuracy falls below the required threshold, the company can evaluate a higher model tier.

C. Send each message to both a small and a large model and accept the label where they agree, re-running disagreements with a tie-breaking prompt

Incorrect. Running two models for every message increases inference costs and processing overhead. It is unnecessary when most messages are short and unambiguous.

D. Fine-tune a mid-tier model on the labeled intents before measuring what a prompted base model already achieves on the existing test set Incorrect. Fine-tuning adds development and maintenance costs before establishing a baseline. The company should first evaluate a cost-effective base model using prompting and its existing labeled test set.

---

## Exam Claude Certified Architect Professional (CCAR-P) (PDF) topic 1 question 136
Question #: 136
Topic #: 1

A social gaming platform uses Claude to moderate chat and can mute players automatically. Volume is around 50,000 flags per day, the trust-and-safety team has six reviewers, a regulator requires an appeal path, and false mutes are a known churn driver. How should automated action be governed?

A. Automate all mutes at a single tuned global threshold and audit a weekly sample of muting decisions for quality drift
B. Auto-mute only above a validated confidence threshold, route borderline flags to reviewers, and log rationale for appeals
C. Require a trust-and-safety reviewer to confirm every proposed mute before it takes effect, keeping the model in an advisory role
D. Tighten the moderation prompt so fewer flags fire, and keep automatic muting on for whatever still gets flagged

**Answer: B**

Explanation:
Correct Answer: B. Auto-mute only above a validated confidence threshold, route borderline flags to reviewers, and log rationale for appeals.

A. Automate all mutes at a single tuned global threshold and audit a weekly sample of muting decisions for quality drift

Incorrect. A single global threshold can produce false positives, resulting in unfair mutes and player churn. Weekly audits may identify problems too late, and this approach does not adequately support individual appeals.

B. Auto-mute only above a validated confidence threshold, route borderline flags to reviewers, and log rationale for appeals

Correct. This approach balances automation, operational efficiency, and fairness. High-confidence violations can be handled automatically, while uncertain cases go to human reviewers. Logging the model's rationale provides an audit trail and supports regulatory appeal requirements.

C. Require a trust-and-safety reviewer to confirm every proposed mute before it takes effect, keeping the model in an advisory role

Incorrect. Human confirmation for every mute creates a significant bottleneck. With approximately 50,000 daily flags and only six reviewers, this approach is not operationally scalable.

D. Tighten the moderation prompt so fewer flags fire, and keep automatic muting on for whatever still gets flagged

Incorrect. Tightening the prompt may reduce the number of flags but does not guarantee that remaining decisions are accurate. It can also increase false negatives by allowing harmful content to pass through moderation.

---

## Exam Claude Certified Architect Professional (CCAR-P) (PDF) topic 1 question 137
Question #: 137
Topic #: 1

A global insurance carrier is automating first-notice-of-loss intake. Claims arrive as semi-structured forms with a fixed field set, the processing steps are known in advance (validate fields, classify claim type, route to a queue), and the business requires predictable per-claim latency and a fully auditable decision trail. Which architecture is the best fit?

A. Give a fully autonomous agent a broad tool set and let it decide its own steps for each claim so it can adapt to whatever form variation it happens to encounter along the way.
B. Fine-tune a model on historical claims so validation and routing logic lives in the weights and no orchestration layer is required.
C. Build a fixed workflow that runs each known step as a discrete Claude call with defined inputs and outputs, orchestrated by your own code.
D. Send one large prompt asking Claude to validate, classify, and route in a single response, returning everything together.

**Answer: C**

Explanation:
Correct Answer: C. Build a fixed workflow that runs each known step as a discrete Claude call with defined inputs and outputs, orchestrated by your own code.

A. Give a fully autonomous agent a broad tool set and let it decide its own steps for each claim so it can adapt to whatever form variation it happens to encounter along the way.

Incorrect. Autonomous agents are useful for dynamic and unpredictable tasks. Here, the processing steps are already known, so autonomous planning introduces unnecessary complexity and makes latency and auditability harder to control.

B. Fine-tune a model on historical claims so validation and routing logic lives in the weights and no orchestration layer is required.

Incorrect. Fine-tuning is not the best way to implement fixed business logic. Validation and routing rules should remain explicit, testable, and independently auditable rather than being embedded in model weights.

C. Build a fixed workflow that runs each known step as a discrete Claude call with defined inputs and outputs, orchestrated by your own code.

Correct. A code-orchestrated workflow provides predictable execution, clear input and output contracts, and independent inspection of every processing stage. It also allows the insurer to validate and record each decision for compliance and auditing.

D. Send one large prompt asking Claude to validate, classify, and route in a single response, returning everything together.

Incorrect. Combining all operations into one call makes intermediate decisions harder to inspect and validate independently. It also reduces control over individual processing stages.

---

## Exam Claude Certified Architect Professional (CCAR-P) (PDF) topic 1 question 138
Question #: 138
Topic #: 1

A medical-device maker summarizes 20,000 field incident reports a month with Claude. Each summary must preserve four mandatory fields (device model, failure mode, patient impact, action taken) and must not introduce claims absent from the source report. The team can fund expert human labeling for only a few hundred examples. Which evaluation design fits these constraints?

A. Score each summary's word-overlap (ROUGE) against its source report, tune the threshold on the labeled examples, and automatically fail any summary that falls below it
B. Have clinical reviewers examine every summary before release, since regulated safety content warrants expert human judgment on each individual
C. Use an LLM judge with a detailed grading rubric as the single quality gate, since one grader can score field presence and faithfulness together in a single pass
D. Enforce the four mandatory fields with deterministic code checks, and score faithfulness with an LLM judge whose rubric is calibrated against the human- labeled sample

**Answer: D**

Explanation:
Correct Answer: D. Enforce the four mandatory fields with deterministic code checks, and score faithfulness with an LLM judge whose rubric is calibrated against the human-labeled sample.

A. Score each summary's word-overlap (ROUGE) against its source report, tune the threshold on the labeled examples, and automatically fail any summary that falls below it

Incorrect. ROUGE measures text overlap, not whether mandatory fields are correctly preserved or whether unsupported claims have been introduced. A valid summary can use different wording while retaining the correct information.

B. Have clinical reviewers examine every summary before release, since regulated safety content warrants expert human judgment on each individual output

Incorrect. Human review provides valuable oversight, but reviewing all 20,000 monthly summaries is expensive and does not fit the limited expert-labeling budget. Targeted human review is more practical.

C. Use an LLM judge with a detailed grading rubric as the single quality gate, since one grader can score field presence and faithfulness together in a single pass

Incorrect. An LLM judge can evaluate semantic faithfulness, but relying on it alone for mandatory field presence is less reliable than deterministic validation. Required fields should be checked programmatically.

D. Enforce the four mandatory fields with deterministic code checks, and score faithfulness with an LLM judge whose rubric is calibrated against the human-labeled sample

Correct. This hybrid evaluation design combines reliable programmatic checks with semantic evaluation.

---

## Exam Claude Certified Architect Professional (CCAR-P) (PDF) topic 1 question 139
Question #: 139
Topic #: 1

A payments processor screens merchant onboarding applications. A deterministic risk engine already clears about 80 percent of applications instantly and rejects 5 percent, all within a 150 millisecond budget. The remaining 15 percent go to a 12-person review team carrying a two-day backlog. Leadership wants Claude to reduce that backlog without touching the instant decision path or adding latency to it. Which architecture fits best?

A. Insert Claude into the synchronous decision path for all applications so borderline cases benefit from model reasoning at the moment of submission
B. Leave the real-time path untouched and run Claude asynchronously on the review queue, drafting evidence- linked recommendations for the human team
C. Replace the review team with an autonomous agent that approves or rejects queued applications and escalates only when a tool call fails
D. Move the whole screening workload to the Batch API overnight so all decisions, including the instant tier, share one consistent pipeline

**Answer: B**

Explanation:
Correct Answer: B. Leave the real-time path untouched and run Claude asynchronously on the review queue, drafting evidence-linked recommendations for the human team.

A. Insert Claude into the synchronous decision path for all applications so borderline cases benefit from model reasoning at the moment of submission

Incorrect. Adding Claude to the synchronous path could increase latency and violate the existing 150- millisecond budget. Leadership explicitly requires the instant decision path to remain unchanged.

B. Leave the real-time path untouched and run Claude asynchronously on the review queue, drafting evidence-linked recommendations for the human team

Correct. This architecture preserves the existing deterministic risk engine and its fast decisions. Claude processes only the remaining 15% asynchronously, preparing evidence-linked recommendations that help reviewers make decisions faster without affecting application submission latency.

C. Replace the review team with an autonomous agent that approves or rejects queued applications and escalates only when a tool call fails

Incorrect. Fully autonomous approvals and rejections introduce compliance and operational risks. The requirement is to reduce the human review backlog, not eliminate human oversight.

D. Move the whole screening workload to the Batch API overnight so all decisions, including the instant tier, share one consistent pipeline

Incorrect. Moving all applications to overnight processing would eliminate the existing instant-decision capability and violate the requirement to preserve the real-time path.

---

## Exam Claude Certified Architect Professional (CCAR-P) (PDF) topic 1 question 140
Question #: 140
Topic #: 1

A security operations center runs a Claude agent that triages endpoint alerts and can isolate machines from the network. Contract SLAs require containment of commodity malware on employee workstations within 60 seconds around the clock. Leadership's specific worry is a false positive isolating a revenue-critical production server, and the analyst team is small. Which control design resolves this tension?

A. Restrict the agent to read-only enrichment and recommendation duties, with analysts executing every containment step manually from its written findings
B. Auto-execute isolation only when the model's stated confidence clears a high global threshold, holding lower-confidence verdicts for review
C. Tier the permission policy by asset class: auto-execute isolation on workstations to meet the SLA, and gate any server tagged critical behind analyst approval
D. Require an analyst to approve every isolation action across the entire fleet, workstation or server alike, so no machine can be disconnected on a bad classification

**Answer: C**

Explanation:
Correct Answer: C. Tier the permission policy by asset class: auto-execute isolation on workstations to meet the SLA, and gate any server tagged critical behind analyst approval. A. Restrict the agent to read-only enrichment and recommendation duties, with analysts executing every containment step manually from its written findings

Incorrect. This removes the agent's ability to execute containment actions automatically. Manual approval for every workstation isolation could prevent the SOC from meeting its 60-second SLA.

B. Auto-execute isolation only when the model's stated confidence clears a high global threshold, holding lower-confidence verdicts for review

Incorrect. A global confidence threshold does not account for differences in asset criticality. Even a high- confidence false positive could isolate a revenue-critical production server.

C. Tier the permission policy by asset class: auto-execute isolation on workstations to meet the SLA, and gate any server tagged critical behind analyst approval

Correct. Asset-based permission controls balance rapid incident response with operational safety. The agent can automatically isolate employee workstations to satisfy the 60-second SLA, while critical production servers require human approval before isolation.

D. Require an analyst to approve every isolation action across the entire fleet, workstation or server alike, so no machine can be disconnected on a bad classification

Incorrect. Requiring approval for every action creates a human bottleneck and could violate the containment SLA, especially with a small analyst team.

---

## Exam Claude Certified Architect Professional (CCAR-P) (PDF) topic 1 question 141
Question #: 141
Topic #: 1

A freight forwarder processes 40,000 customs declarations every night. For roughly 92 percent of documents, the same nine fields extract cleanly in a single structured-output call; the remainder are degraded scans that need a tariff-code lookup and a second extraction pass. Finance has capped per-document cost, and operations requires predictable nightly throughput. Which architecture best fits these

A. Route every declaration through an autonomous agent loop with lookup tools so clean and degraded documents follow one adaptive path
B. Run a fixed extraction pipeline with a confidence gate that routes only low-confidence documents into a lookup-and-reextract branch
C. Use an orchestrator agent that spawns a specialized extraction sub-agent per field so all nine fields are pulled independently in parallel
D. Process each document in one structured-output call and iterate on the prompt until degraded scans reach parity with clean-scan accuracy

**Answer: B**

Explanation:
Correct Answer: B. Run a fixed extraction pipeline with a confidence gate that routes only low-confidence documents into a lookup-and-reextract branch.

A. Route every declaration through an autonomous agent loop with lookup tools so clean and degraded documents follow one adaptive path

Incorrect. An autonomous agent loop introduces unnecessary reasoning and tool-calling overhead for the 92% of documents that already extract cleanly. This can increase processing costs and make nightly throughput less predictable. B. Run a fixed extraction pipeline with a confidence gate that routes only low-confidence documents into a lookup-and-reextract branch

Correct. This architecture uses a cost-efficient two-path workflow. Clean documents are processed with a single structured-output call, while degraded scans receive additional processing only when needed. A confidence gate controls the extra lookup and extraction steps, reducing unnecessary model calls while maintaining predictable throughput.

C. Use an orchestrator agent that spawns a specialized extraction sub-agent per field so all nine fields are pulled independently in parallel

Incorrect. Creating nine specialized agents introduces unnecessary orchestration complexity and additional processing costs. The nine fields are already extracted reliably in one structured-output call for most documents.

D. Process each document in one structured-output call and iterate on the prompt until degraded scans reach parity with clean-scan accuracy

Incorrect. A single extraction call may not reliably handle degraded scans. Prompt improvements alone do not guarantee accurate extraction from poor-quality documents, and this approach lacks a targeted recovery mechanism.

---

## Exam Claude Certified Architect Professional (CCAR-P) (PDF) topic 1 question 142
Question #: 142
Topic #: 1

A marketplace retailer classifies two million product-review snippets per day for sentiment, with a 300 ms per- item latency target inside a synchronous pipeline. The task is short single-label classification, accuracy needs are moderate, and finance has flagged inference spend as the top concern for the quarter. Which model choice best fits this profile?

A. Claude Opus, since a top-capability tier gives the widest quality margin and misclassified reviews carry reputational cost for marketplace sellers.
B. A self-hosted classifier fine-tuned on last year's reviews, so the team owns the stack and avoids per-call API pricing at this volume.
C. Alternating requests between Opus and Sonnet so average per-request cost lands between the two tiers while stronger models stay in the loop.
D. Claude Haiku, the fastest and lowest-cost tier, which handles short single-label classification within the latency and budget constraints.

**Answer: D**

Explanation:
A. Claude Opus, since a top-capability tier gives the widest quality margin and misclassified reviews carry reputational cost for marketplace sellers.

Incorrect. Opus is a high-capability model, but this task involves straightforward sentiment classification. Its higher inference cost and potentially greater latency are unnecessary when accuracy requirements are moderate.

B. A self-hosted classifier fine-tuned on last year's reviews, so the team owns the stack and avoids per-call API pricing at this volume.

Incorrect. Self-hosting may reduce API costs, but it introduces infrastructure, maintenance, deployment, and retraining expenses. It is not automatically the most cost-effective solution. C. Alternating requests between Opus and Sonnet so average per-request cost lands between the two tiers while stronger models stay in the loop.

Incorrect. Alternating between more expensive models adds unnecessary complexity and does not reliably meet the 300 ms latency target or minimize inference spending.

D. Claude Haiku, the fastest and lowest-cost tier, which handles short single-label classification within the latency and budget constraints.

Correct. Haiku is designed for fast, cost-efficient tasks such as short-text classification. It is the best fit for two million daily requests with moderate accuracy requirements and a strict latency target.

---

## Exam Claude Certified Architect Professional (CCAR-P) (PDF) topic 1 question 143
Question #: 143
Topic #: 1

You are evaluating a customer-support agent’s configuration. Each prospective tool belongs to one of four categories: (1) required to carry out defined tasks, (2) frequently used and reduces hand-offs, (3) occasionally helpful for unrelated work, (4) speculative future utility. Which categories should generally stay in the agent configuration?

A. Only category 3, because occasionally useful tools for unrelated work provide broader coverage and should take priority over tools required for the agent's defined tasks.
B. Only category 4, because speculative future-utility tools provide the most flexibility and should be configured even when no defined task currently requires them.
C. Categories 1 and 2 only, because they map to defined tasks and the agent's regular hand-offs.
D. All four categories, because broader tool access is categorically better for agent performance regardless of whether the tools map to defined tasks or regular hand-offs.

**Answer: C**

Explanation:
C. Categories 1 and 2 only, because they map to defined tasks and the agent’s regular hand-offs.

Agent tools should be limited to capabilities that support defined tasks and regular operational workflows. Required tools enable the agent’s intended work, and frequently used tools that reduce hand-offs improve its routine execution. Occasionally useful unrelated tools and speculative future tools do not justify current access and unnecessarily broaden the available tool set. OpenAI’s API supports constraining a model to a predefined set of allowed tools.

---

## Exam Claude Certified Architect Professional (CCAR-P) (PDF) topic 1 question 144
Question #: 144
Topic #: 1

You operate an interactive assistant where per-turn latency is the primary performance constraint. Quality on routine turns is already acceptable. Which configuration change most directly improves latency without disproportionately harming quality?

A. Disable prompt caching entirely to ensure fresh context processing on every request, preventing stale prefix content from affecting latency-sensitive interactions.
B. Reduce retrieval depth to the top-k passages that historically cover the answer, and cache stable system- prompt content.
C. Increase retrieval depth to the corpus maximum to improve recall regardless of latency.
D. Switch every turn to the heaviest available model to maximize output quality, accepting that the increased model latency will worsen the per-turn SLO rather than improve it.

**Answer: B**

Explanation:
Correct answer from the source:

B. Reduce retrieval depth to the top-k passages that historically cover the answer, and cache stable system-prompt content.

Retrieving only the top-k passages that historically supply the needed information reduces retrieval work and the prompt context processed on each turn, while preserving routine-answer quality. Caching stable system- prompt content avoids reprocessing an unchanged prefix. Retrieval adds compute and round trips, and preserving cached context improves cache utilization.

---

## Exam Claude Certified Architect Professional (CCAR-P) (PDF) topic 1 question 145
Question #: 145
Topic #: 1

An engineer accidentally commits an API key to the repository by placing it in .claude/settings.json. Which configuration design principle was breached?

A. Project-scope configuration should always override user-scope configuration.
B. Managed configuration must be applied before project-scope configuration is read.
C. Credentials must be resolved at runtime from a secret store and never stored in version-controlled files.
D. MCP server definitions must reside in environment variables to prevent scope conflicts.

**Answer: C**

Explanation:
Correct answer from the source:

C. Credentials must be resolved at runtime from a secret store and never stored in version-controlled files.

API keys are credentials and must not be committed to version-controlled configuration files, where repository access and history can expose them. They should be supplied securely at runtime, such as through a secret store or protected environment-based mechanism. Anthropic documents using a key helper that retrieves a key from a Vault secret for dynamic credentials.

---

## Exam Claude Certified Architect Professional (CCAR-P) (PDF) topic 1 question 146
Question #: 146
Topic #: 1

An architect is assessing a Claude-based candidate-screening tool before deployment. A stakeholder claims that no bias evaluation is needed because the model was not trained on company data. Which two responses most accurately dispute this claim? (Select two.) Choose two

A. Transparency obligations are satisfied by disclosing that an AI system is in use, without further evaluation.
B. Fairness testing is required only when the training dataset is known to contain protected-class labels.
C. The model may carry demographic biases from pretraining that manifest in screening outcomes regardless of fine-tuning.
D. The system should be evaluated on outcome-disparity metrics across protected groups before deployment.
E. Bias evaluation is unnecessary when the model provider has published a responsible-use policy.

**Answer: CD**

Explanation:
C. The model may carry demographic biases from pretraining that manifest in screening outcomes regardless of fine-tuning.

D. The system should be evaluated on outcome-disparity metrics across protected groups before deployment.

A model can retain demographic biases from its broad pretraining even when it has not been trained on an organization’s data. For an employment-screening use case, fairness evaluation should measure whether outcomes differ across protected groups before deployment. NIST guidance calls for evaluating fairness and bias and using context-specific metrics to assess performance and harms across groups.

---

## Exam Claude Certified Architect Professional (CCAR-P) (PDF) topic 1 question 147
Question #: 147
Topic #: 1

A platform team runs a self-hosted, multi-agent system on Kubernetes that coordinates seven specialized agents for invoice processing. The team uses approximately 40 percent of its engineering capacity for infrastructure maintenance, message-bus reliability, and agent-state recovery. The CFO has asked for an evaluation of a move to managed agent infrastructure to recover engineering capacity. The security officer requires all customer financial data to stay within an approved network boundary. Which factor should carry the greatest weight in your recommendation?

A. Whether the current seven agents map cleanly to the patterns supported by managed agents.
B. Whether managed agents reduce per-invoice token costs across the existing processing volume.
C. Whether managed agents support the current bus topology used by the platform team.
D. Whether managed agent data handling satisfies the network boundary required by security.

**Answer: D**

Explanation:
Correct Answer: D. Whether managed agent data handling satisfies the network boundary required by security.

A. Whether the current seven agents map cleanly to the patterns supported by managed agents.

Incorrect. Agent compatibility is important, but it should be evaluated only after confirming that the managed platform meets mandatory security requirements.

B. Whether managed agents reduce per-invoice token costs across the existing processing volume.

Incorrect. Token-cost savings are relevant to the business case, but they are secondary to the security officer's mandatory network-boundary requirement.

C. Whether managed agents support the current bus topology used by the platform team.

Incorrect. The existing bus topology may need to change during migration. Maintaining the same infrastructure design is not the primary requirement.

D. Whether managed agent data handling satisfies the network boundary required by security.

Correct. Customer financial data must remain within the approved network boundary. If managed infrastructure cannot satisfy this requirement, the migration is not viable, regardless of engineering savings or cost benefits.

---

## Exam Claude Certified Architect Professional (CCAR-P) (PDF) topic 1 question 148
Question #: 148
Topic #: 1

You are determining where human review must remain in a proposed automated pipeline. Which placement represents sound human-in-the-loop design?

A. Place a human reviewer only after the irreversible action has already executed, making the review a post-hoc audit rather than a meaningful pre-action check or approval gate.
B. Place a human reviewer between the model’s output and any high-impact, irreversible action, with explicit criteria for what the reviewer must check before approval.
C. Place a human reviewer in the loop for a randomly selected sample of requests, without defining criteria for what the reviewer should check or which output categories require mandatory review.
D. Remove all human review steps from the pipeline to maximize throughput, accepting that high-impact and irreversible actions will be taken without any human approval or oversight.

**Answer: B**

Explanation:
Correct Answer: B. Place a human reviewer between the model’s output and any high-impact, irreversible action, with explicit criteria for what the reviewer must check before approval.

A. Place a human reviewer only after the irreversible action has already executed, making the review a post-hoc audit rather than a meaningful pre-action check or approval gate.

Incorrect. Post-action review can help identify problems, but it cannot prevent an incorrect or harmful irreversible action.

B. Place a human reviewer between the model’s output and any high-impact, irreversible action, with explicit criteria for what the reviewer must check before approval.

Correct. Human review before execution provides an effective approval gate. Reviewers can verify the model's output, check relevant evidence, and reject or correct unsafe decisions before they take effect.

C. Place a human reviewer in the loop for a randomly selected sample of requests, without defining criteria for what the reviewer should check or which output categories require mandatory review.

Incorrect. Random sampling is useful for quality monitoring, but it does not guarantee oversight of high-risk actions. Review criteria and mandatory review conditions must be clearly defined.

D. Remove all human review steps from the pipeline to maximize throughput, accepting that high-impact and irreversible actions will be taken without any human approval or oversight.

Incorrect. Removing human oversight increases the risk of serious errors, especially when automated decisions have significant or irreversible consequences.

---

## Exam Claude Certified Architect Professional (CCAR-P) (PDF) topic 1 question 149
Question #: 149
Topic #: 1

You are assembling factors that should guide the selection among Model Context Protocol (MCP), direct API integration, and agent-to-agent handoff. Which two factors should be included on the list? Each correct answer provides a complete solution. (Select two.) Choose two

A. Whether the vendor publishes detailed reference documentation for each candidate protocol.
B. Whether the team has prior implementation experience with any of the candidate protocols.
C. Whether the underlying transport supports encryption in transit between the integrated services.
D. Whether the integration must be portable across multiple AI clients in the ecosystem.
E. Whether the interaction is stateless and latency-sensitive or stateful and longer-running.

**Answer: DE**

Explanation:
Correct Answers: D and E

D. Whether the integration must be portable across multiple AI clients in the ecosystem.

Correct. MCP is designed to provide a standardized way for AI applications to connect with external tools and data sources. Portability across multiple AI clients is an important factor when choosing an integration approach.

E. Whether the interaction is stateless and latency-sensitive or stateful and longer-running.

Correct. The interaction pattern helps determine the appropriate protocol:

Direct API integration: Often suitable for straightforward, stateless, latency-sensitive requests. MCP: Suitable for standardized access to tools and contextual resources. Agent-to-agent handoff: Suitable for stateful interactions involving delegation, collaboration, and longer- running tasks.

A. Whether the vendor publishes detailed reference documentation for each candidate protocol.

Incorrect. Documentation quality helps implementation, but it does not determine which protocol best fits the integration requirements.

B. Whether the team has prior implementation experience with any of the candidate protocols.

Incorrect. Existing team experience can influence implementation effort, but protocol selection should primarily depend on architectural and operational requirements.

C. Whether the underlying transport supports encryption in transit between the integrated services.

Incorrect. Encryption in transit is an important security requirement, but it is a baseline security consideration rather than a primary factor distinguishing MCP, direct APIs, and agent-to-agent handoff.

---

## Exam Claude Certified Architect Professional (CCAR-P) (PDF) topic 1 question 150
Question #: 150
Topic #: 1

You are choosing a protocol for one low-latency, stateless tool call from a Claude-based assistant to an internal pricing service that already offers a stable HTTP API. Which integration mechanism is most appropriate?

A. A direct API call to the existing endpoint with the appropriate scoped credentials.
B. A long-lived stateful session protocol for a stateless single-call interaction.
C. A bespoke streaming protocol layered over an unrelated asynchronous message bus.
D. An agent-to-agent handoff that introduces another Claude-based agent in front of the pricing service.

**Answer: A**

Explanation:
Correct Answer: A. A direct API call to the existing endpoint with the appropriate scoped credentials.

A. A direct API call to the existing endpoint with the appropriate scoped credentials.

Correct. The pricing service already provides a stable HTTP API, and the interaction is a single, stateless, low- latency request. A direct API call avoids unnecessary protocol layers, additional agents, and session- management overhead. Scoped credentials also support secure access.

B. A long-lived stateful session protocol for a stateless single-call interaction.

Incorrect. A stateful session introduces unnecessary connection and session-management overhead when the task requires only one independent request.

C. A bespoke streaming protocol layered over an unrelated asynchronous message bus.

Incorrect. Streaming and asynchronous messaging add complexity and latency without providing meaningful benefits for a simple synchronous API request.

D. An agent-to-agent handoff that introduces another Claude-based agent in front of the pricing service.

Incorrect. Agent-to-agent handoff is useful when tasks require delegation or collaboration between agents. Introducing another agent for a straightforward pricing lookup adds unnecessary complexity.

---

## Exam Claude Certified Architect Professional (CCAR-P) (PDF) topic 1 question 151
Question #: 151
Topic #: 1

You are troubleshooting a Claude Code session in which its subagent uses 50,000 context tokens before the engineer types even a single message. Which root cause is most likely?

A. The developer's keyboard layout or input-method configuration is the cause of the elevated context consumption, introducing extra tokens before the engineer types any message.
B. Many MCP servers are configured, each contributing tool definitions to the context budget; Tool Search is not enabled, so all definitions load upfront.
C. The model has internal personal preferences or default behaviors that silently consume large portions of context budget before any user message is processed, independent of tool configuration.
D. The font rendering or display-scaling settings of the IDE are converting visual output into additional context tokens, causing the high pre-session context consumption.

**Answer: B**

Explanation:
Correct answer from the source:

B. Many MCP servers are configured, each contributing tool definitions to the context budget; Tool Search is not enabled, so all definitions load upfront.

When Tool Search is disabled, Claude Code loads all configured MCP tool definitions into the context window at startup. A large collection of MCP servers can therefore consume tens of thousands of tokens before any engineer message is entered.
