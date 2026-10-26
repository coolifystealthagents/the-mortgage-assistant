import type { BlogPost } from './types';

export const october26BlogBatch: readonly BlogPost[] = [
  {
    "slug": "request-triage-standard",
    "title": "Triage Requests for mortgage application and document support Before They Reach the Queue",
    "description": "A triage standard for mortgage application and document support that captures the request, checks authority, and finds existing work before a new item is created.",
    "category": "Application intake",
    "publishedAt": "2026-10-26",
    "readTime": "11 min read",
    "thumbnail": "/article-thumbnails/october-26/request-triage-standard.svg",
    "sections": [
      {
        "heading": "Why this control matters",
        "paragraphs": [
          "A mortgage application and document support queue can look busy while the record that would let someone else continue is missing. This guide turns the control behind \"Triage Requests for mortgage application and document support Before They Reach the Queue\" into a bounded workflow with a source, a named owner, and a stop rule.",
          "It is written for mortgage teams. The specialist prepares and routes; the mortgage operations manager keeps the decisions that change a customer, a payment, a schedule, or a policy."
        ]
      },
      {
        "heading": "Start with the governing record",
        "paragraphs": [
          "Begin with the record that controls the mortgage application and document support item. At minimum, collect the request in the requester's words, the requester identity and authority, the account or service reference, the requested outcome, the deadline and time zone, any existing work reference. Record where each item came from, the version or date observed, and the field it supports.",
          "Treat the \"start with the governing record\" control as an evidence problem before treating it as a speed problem. The mortgage support specialist can prepare a condition log, but the mortgage operations manager keeps the decision when the item involves rate lock expires before closing. Record rate locks nearing expiry without review with its denominator and window, then use the weekly sample to check whether the same gap keeps returning."
        ]
      },
      {
        "heading": "Separate preparation from approval",
        "paragraphs": [
          "In practice, the mortgage support specialist handles the \"separate preparation from approval\" work by preparing a condition log and naming the decision boundary. Include the source and retrieval date, loan and borrower identifier, and the next action owner. When the item involves income or asset document conflicts, the item goes to the loan officer with the evidence already checked; the application, disclosure, condition, and rate-lock queue should show the hold, not hide it.",
          "The application, disclosure, condition, and rate-lock queue in mortgage application and underwriting support usually fails at the handoff, not at the first task. For the \"separate preparation from approval\" section, the mortgage support specialist should capture the source, the version, the accountable mortgage operations manager, and the next review date in a disclosure timing record. If the item involves income or asset document conflicts, route it to the compliance reviewer and keep the exception reason attached so a later reviewer can see why the normal path did not apply."
        ]
      },
      {
        "heading": "Where the process breaks",
        "paragraphs": [
          "In practice, the mortgage support specialist handles the \"where the process breaks\" work by preparing a condition log and naming the decision boundary. Include the source and retrieval date, rate-lock expiration and terms, and the next action owner. When the item involves rate lock expires before closing, the item goes to the compliance reviewer with the evidence already checked; the application, disclosure, condition, and rate-lock queue should show the hold, not hide it.",
          "The \"where the process breaks\" control becomes fragile when the application, disclosure, condition, and rate-lock queue is measured only by completed items. The mortgage support specialist should record application and disclosure date and loan and borrower identifier, keep exceptions visible, and let the mortgage operations manager decide any commitment or scope change. The loan officer can then sample a rate-lock record and compare rate locks nearing expiry without review against the work that remains open."
        ]
      },
      {
        "heading": "Build the control in four steps",
        "paragraphs": [
          "First, Capture the request verbatim and attach the message or form.",
          "Second, Verify the requester against the account record before creating work.",
          "Before scaling the \"build the control in four steps\" workflow, make a disclosure timing record readable to someone outside the original team. It should show the request, the source, application and disclosure date, the mortgage operations manager, and the next date in one place. The loan officer reviewing the application, disclosure, condition, and rate-lock queue should see exceptions, not a clean activity count that hides unresolved work.",
          "Fourth, Assign a triage class, one owner, and a next action date."
        ]
      },
      {
        "heading": "Write the exception path first",
        "paragraphs": [
          "The application, disclosure, condition, and rate-lock queue in mortgage application and underwriting support usually fails at the handoff, not at the first task. For the \"write the exception path first\" section, the mortgage support specialist should capture the source, the version, the accountable mortgage operations manager, and the next review date in an application checklist. If the item involves rate lock expires before closing, route it to the underwriter and keep the exception reason attached so a later reviewer can see why the normal path did not apply.",
          "Concrete example: a rate lock expires while a condition remains open. The mortgage support specialist opens a disclosure timing record, records loan and borrower identifier and application and disclosure date, and asks one precise question instead of filling the blank from memory. The item leaves the application, disclosure, condition, and rate-lock queue only after the mortgage operations manager accepts the next action and the evidence link is attached."
        ]
      },
      {
        "heading": "Measure the queue, not the activity",
        "paragraphs": [
          "Treat the \"measure the queue, not the activity\" control as an evidence problem before treating it as a speed problem. The mortgage support specialist can prepare a disclosure timing record, but the mortgage operations manager keeps the decision when the item involves borrower identity or authorization is unclear. Record conditions cleared by owner with its denominator and window, then use the weekly sample to check whether the same gap keeps returning.",
          "For the \"measure the queue, not the activity\" section, define the stopping condition before the mortgage support specialist starts the task. The disclosure timing record should show rate-lock expiration and terms, condition and supporting document, and the evidence that let the mortgage operations manager accept the result. If the item involves rate lock expires before closing, document the reason and route the decision to the compliance reviewer; a reopened item needs a new dated action, not a copied closure note."
        ]
      },
      {
        "heading": "A worked example",
        "paragraphs": [
          "The \"a worked example\" control becomes fragile when the application, disclosure, condition, and rate-lock queue is measured only by completed items. The mortgage support specialist should record owner and next action and application and disclosure date, keep exceptions visible, and let the mortgage operations manager decide any commitment or scope change. The compliance reviewer can then sample an application checklist and compare files returned for missing documents against the work that remains open.",
          "Concrete example: an asset statement conflicts with the application. The mortgage support specialist opens a condition log, records owner and next action and condition and supporting document, and asks one precise question instead of filling the blank from memory. The item leaves the application, disclosure, condition, and rate-lock queue only after the mortgage operations manager accepts the next action and the evidence link is attached."
        ]
      },
      {
        "heading": "Close and hand off",
        "paragraphs": [
          "The control that matters for the \"close and hand off\" section is a short, reviewable record, not a longer checklist. The mortgage support specialist captures application and disclosure date and rate-lock expiration and terms, labels a case involving disclosure timing is at risk, and leaves the decision with the mortgage operations manager. During the weekly review, compare conditions cleared by owner with the unresolved items and note which fix changed the result.",
          "In practice, the mortgage support specialist handles the \"close and hand off\" work by preparing a condition log and naming the decision boundary. Include the source and retrieval date, owner and next action, and the next action owner. When the item involves rate lock expires before closing, the item goes to the compliance reviewer with the evidence already checked; the application, disclosure, condition, and rate-lock queue should show the hold, not hide it."
        ]
      },
      {
        "heading": "A weekly review rhythm",
        "paragraphs": [
          "Set one recurring point each week to review the mortgage application and document support queue: the oldest items, the blocked items, and one item that was corrected. Keep the meeting short and decision-focused.",
          "The application, disclosure, condition, and rate-lock queue in mortgage application and underwriting support usually fails at the handoff, not at the first task. For the \"a weekly review rhythm\" section, the mortgage support specialist should capture the source, the version, the accountable mortgage operations manager, and the next review date in a rate-lock record. If the item involves income or asset document conflicts, route it to the underwriter and keep the exception reason attached so a later reviewer can see why the normal path did not apply."
        ]
      },
      {
        "heading": "When to stop and ask",
        "paragraphs": [
          "Ask what would let a new reviewer continue the \"when to stop and ask\" work without a conversation. The answer is usually an application checklist with the source, version, owner, and next action. If the item involves rate lock expires before closing, the mortgage support specialist pauses the item, records the gap, and routes one question to the mortgage operations manager; do not close the item just to keep the queue moving.",
          "Treat the \"when to stop and ask\" control as an evidence problem before treating it as a speed problem. The mortgage support specialist can prepare a condition log, but the mortgage operations manager keeps the decision when the item involves disclosure timing is at risk. Record conditions cleared by owner with its denominator and window, then use the weekly sample to check whether the same gap keeps returning."
        ]
      },
      {
        "heading": "A short checklist before release",
        "paragraphs": [
          "The rate-lock record is useful for the \"a short checklist before release\" control only if another person can audit it. The mortgage support specialist records application and disclosure date and owner and next action, keeps the source attached, and marks a case involving income or asset document conflicts with the owner who accepted it. Review rate locks nearing expiry without review during the weekly check and test one recent correction against the original evidence.",
          "For the \"a short checklist before release\" section, define the stopping condition before the mortgage support specialist starts the task. The condition log should show loan and borrower identifier, condition and supporting document, and the evidence that let the mortgage operations manager accept the result. If the item involves borrower identity or authorization is unclear, document the reason and route the decision to the underwriter; a reopened item needs a new dated action, not a copied closure note."
        ]
      },
      {
        "heading": "A note on tools and templates",
        "paragraphs": [
          "The application, disclosure, condition, and rate-lock queue in mortgage application and underwriting support usually fails at the handoff, not at the first task. For the \"a note on tools and templates\" section, the mortgage support specialist should capture the source, the version, the accountable mortgage operations manager, and the next review date in a disclosure timing record. If the item involves disclosure timing is at risk, route it to the loan officer and keep the exception reason attached so a later reviewer can see why the normal path did not apply.",
          "For the \"a note on tools and templates\" section, define the stopping condition before the mortgage support specialist starts the task. The disclosure timing record should show condition and supporting document, application and disclosure date, and the evidence that let the mortgage operations manager accept the result. If the item involves borrower identity or authorization is unclear, document the reason and route the decision to the compliance reviewer; a reopened item needs a new dated action, not a copied closure note."
        ]
      },
      {
        "heading": "A local note for The Mortgage Assistant",
        "paragraphs": [
          "The Mortgage Assistant applies this control to mortgage application and document support for mortgage teams. The working rule is simple: the specialist keeps the record current, and the mortgage operations manager keeps the decisions that change a customer, a payment, or a schedule.",
          "For themortgageassistant.com, the first pilot should use one queue and one reviewer. Add a second workflow only after the evidence standard holds under normal volume."
        ]
      },
      {
        "heading": "Related controls",
        "paragraphs": [
          "Read [Plan Capacity for mortgage application and document support From Real Workload](/blog/capacity-plan) and [Stop Incomplete Files in mortgage application and document support Work](/blog/document-completeness) for the neighboring controls. Public context is available in [DOL Recordkeeping Fact Sheet](https://www.dol.gov/agencies/whd/fact-sheets/21-flsa-recordkeeping)."
        ]
      },
      {
        "heading": "What the owner should see",
        "paragraphs": [
          "The application, disclosure, condition, and rate-lock queue in mortgage application and underwriting support usually fails at the handoff, not at the first task. For the \"what the owner should see\" section, the mortgage support specialist should capture the source, the version, the accountable mortgage operations manager, and the next review date in an application checklist. If the item involves rate lock expires before closing, route it to the underwriter and keep the exception reason attached so a later reviewer can see why the normal path did not apply.",
          "For the \"what the owner should see\" section, define the stopping condition before the mortgage support specialist starts the task. The condition log should show owner and next action, condition and supporting document, and the evidence that let the mortgage operations manager accept the result. If the item involves disclosure timing is at risk, document the reason and route the decision to the compliance reviewer; a reopened item needs a new dated action, not a copied closure note."
        ]
      },
      {
        "heading": "Sources",
        "paragraphs": [
          "GAO Standards for Internal Control: https://www.gao.gov/products/gao-14-704g",
          "NIST Cybersecurity Framework: https://www.nist.gov/cyberframework",
          "SBA Manage Your Business: https://www.sba.gov/business-guide/manage-your-business"
        ]
      }
    ],
    "faq": [
      {
        "q": "What should stay with the accountable owner?",
        "a": "The control that matters for the \"sources\" section is a short, reviewable record, not a longer checklist. The mortgage support specialist captures loan and borrower identifier and application and disclosure date, labels a case involving borrower identity or authorization is unclear, and leaves the decision with the mortgage operations manager. During the weekly review, compare conditions cleared by owner with the unresolved items and note which fix changed the result."
      },
      {
        "q": "What is the minimum evidence?",
        "a": "Before scaling the \"sources\" workflow, make an application checklist readable to someone outside the original team. It should show the request, the source, condition and supporting document, the mortgage operations manager, and the next date in one place. The underwriter reviewing the application, disclosure, condition, and rate-lock queue should see exceptions, not a clean activity count that hides unresolved work."
      }
    ],
    "internalService": "/services",
    "internalSibling": "/blog/request-triage-standard",
    "source": {
      "label": "Public guidance",
      "url": "https://www.dol.gov/agencies/whd/fact-sheets/21-flsa-recordkeeping"
    }
  },
  {
    "slug": "capacity-plan",
    "title": "Plan Capacity for mortgage application and document support From Real Workload",
    "description": "A capacity model for mortgage application and document support that compares work volume, handling time, rework, and available hours before promises are made.",
    "category": "Application intake",
    "publishedAt": "2026-10-26",
    "readTime": "11 min read",
    "thumbnail": "/article-thumbnails/october-26/capacity-plan.svg",
    "sections": [
      {
        "heading": "Why this control matters",
        "paragraphs": [
          "A mortgage application and document support queue can look busy while the record that would let someone else continue is missing. This guide turns the control behind \"Plan Capacity for mortgage application and document support From Real Workload\" into a bounded workflow with a source, a named owner, and a stop rule.",
          "It is written for mortgage teams. The specialist prepares and routes; the mortgage operations manager keeps the decisions that change a customer, a payment, a schedule, or a policy."
        ]
      },
      {
        "heading": "Start with the governing record",
        "paragraphs": [
          "Begin with the record that controls the mortgage application and document support item. At minimum, collect the work types and service levels, volume by day or week, handling time by work type, rework and exception time, available hours after leave and meetings, the planned change in volume. Record where each item came from, the version or date observed, and the field it supports.",
          "Ask what would let a new reviewer continue the \"start with the governing record\" work without a conversation. The answer is usually a rate-lock record with the source, version, owner, and next action. If the item involves borrower identity or authorization is unclear, the mortgage support specialist pauses the item, records the gap, and routes one question to the underwriter; do not close the item just to keep the queue moving."
        ]
      },
      {
        "heading": "Separate preparation from approval",
        "paragraphs": [
          "The control that matters for the \"separate preparation from approval\" section is a short, reviewable record, not a longer checklist. The mortgage support specialist captures rate-lock expiration and terms and owner and next action, labels a case involving borrower identity or authorization is unclear, and leaves the decision with the mortgage operations manager. During the weekly review, compare conditions cleared by owner with the unresolved items and note which fix changed the result.",
          "Within mortgage application and underwriting support, the \"separate preparation from approval\" control is only repeatable when the mortgage support specialist can show a condition log behind each decision. Start with loan and borrower identifier, add condition and supporting document, and attach the source and date before the item moves. If the item involves borrower identity or authorization is unclear, hold the work in the application, disclosure, condition, and rate-lock queue and route the choice to the mortgage operations manager; the compliance reviewer should be able to reconstruct the next step without asking the preparer."
        ]
      },
      {
        "heading": "Where the process breaks",
        "paragraphs": [
          "Within mortgage application and underwriting support, the \"where the process breaks\" control is only repeatable when the mortgage support specialist can show an application checklist behind each decision. Start with rate-lock expiration and terms, add loan and borrower identifier, and attach the source and date before the item moves. If the item involves disclosure timing is at risk, hold the work in the application, disclosure, condition, and rate-lock queue and route the choice to the mortgage operations manager; the compliance reviewer should be able to reconstruct the next step without asking the preparer.",
          "Before scaling the \"where the process breaks\" workflow, make an application checklist readable to someone outside the original team. It should show the request, the source, owner and next action, the mortgage operations manager, and the next date in one place. The mortgage operations manager reviewing the application, disclosure, condition, and rate-lock queue should see exceptions, not a clean activity count that hides unresolved work."
        ]
      },
      {
        "heading": "Build the control in four steps",
        "paragraphs": [
          "First, List work types and the service level for each.",
          "Second, Record handling time from a sample rather than a guess.",
          "Third, Subtract leave, meetings, and fixed obligations from available hours.",
          "Fourth, Compare demand and capacity weekly and publish the gap with options."
        ]
      },
      {
        "heading": "Write the exception path first",
        "paragraphs": [
          "Before scaling the \"write the exception path first\" workflow, make a disclosure timing record readable to someone outside the original team. It should show the request, the source, owner and next action, the mortgage operations manager, and the next date in one place. The compliance reviewer reviewing the application, disclosure, condition, and rate-lock queue should see exceptions, not a clean activity count that hides unresolved work.",
          "Treat the \"write the exception path first\" control as an evidence problem before treating it as a speed problem. The mortgage support specialist can prepare a disclosure timing record, but the mortgage operations manager keeps the decision when the item involves income or asset document conflicts. Record applications with complete disclosures with its denominator and window, then use the weekly sample to check whether the same gap keeps returning."
        ]
      },
      {
        "heading": "Measure the queue, not the activity",
        "paragraphs": [
          "A useful test for the \"measure the queue, not the activity\" control is whether a rate-lock record still makes sense after a week away. The mortgage support specialist records loan and borrower identifier and rate-lock expiration and terms, then checks one high-value case and one exception during the weekly review. When the item involves disclosure timing is at risk, the item stays open with a named owner and a dated next action rather than being marked complete.",
          "Within mortgage application and underwriting support, the \"measure the queue, not the activity\" control is only repeatable when the mortgage support specialist can show a disclosure timing record behind each decision. Start with application and disclosure date, add condition and supporting document, and attach the source and date before the item moves. If the item involves disclosure timing is at risk, hold the work in the application, disclosure, condition, and rate-lock queue and route the choice to the mortgage operations manager; the underwriter should be able to reconstruct the next step without asking the preparer."
        ]
      },
      {
        "heading": "A worked example",
        "paragraphs": [
          "The condition log is useful for the \"a worked example\" control only if another person can audit it. The mortgage support specialist records loan and borrower identifier and application and disclosure date, keeps the source attached, and marks a case involving income or asset document conflicts with the owner who accepted it. Review applications with complete disclosures during the weekly check and test one recent correction against the original evidence.",
          "Within mortgage application and underwriting support, the \"a worked example\" control is only repeatable when the mortgage support specialist can show a rate-lock record behind each decision. Start with condition and supporting document, add owner and next action, and attach the source and date before the item moves. If the item involves disclosure timing is at risk, hold the work in the application, disclosure, condition, and rate-lock queue and route the choice to the mortgage operations manager; the mortgage operations manager should be able to reconstruct the next step without asking the preparer."
        ]
      },
      {
        "heading": "Close and hand off",
        "paragraphs": [
          "Ask what would let a new reviewer continue the \"close and hand off\" work without a conversation. The answer is usually a condition log with the source, version, owner, and next action. If the item involves income or asset document conflicts, the mortgage support specialist pauses the item, records the gap, and routes one question to the loan officer; do not close the item just to keep the queue moving.",
          "Ask what would let a new reviewer continue the \"close and hand off\" work without a conversation. The answer is usually a condition log with the source, version, owner, and next action. If the item involves disclosure timing is at risk, the mortgage support specialist pauses the item, records the gap, and routes one question to the compliance reviewer; do not close the item just to keep the queue moving."
        ]
      },
      {
        "heading": "A weekly review rhythm",
        "paragraphs": [
          "Set one recurring point each week to review the mortgage application and document support queue: the oldest items, the blocked items, and one item that was corrected. Keep the meeting short and decision-focused.",
          "The application, disclosure, condition, and rate-lock queue in mortgage application and underwriting support usually fails at the handoff, not at the first task. For the \"a weekly review rhythm\" section, the mortgage support specialist should capture the source, the version, the accountable mortgage operations manager, and the next review date in an application checklist. If the item involves disclosure timing is at risk, route it to the underwriter and keep the exception reason attached so a later reviewer can see why the normal path did not apply."
        ]
      },
      {
        "heading": "When to stop and ask",
        "paragraphs": [
          "Ask what would let a new reviewer continue the \"when to stop and ask\" work without a conversation. The answer is usually a rate-lock record with the source, version, owner, and next action. If the item involves rate lock expires before closing, the mortgage support specialist pauses the item, records the gap, and routes one question to the mortgage operations manager; do not close the item just to keep the queue moving.",
          "Ask what would let a new reviewer continue the \"when to stop and ask\" work without a conversation. The answer is usually a disclosure timing record with the source, version, owner, and next action. If the item involves disclosure timing is at risk, the mortgage support specialist pauses the item, records the gap, and routes one question to the loan officer; do not close the item just to keep the queue moving."
        ]
      },
      {
        "heading": "A short checklist before release",
        "paragraphs": [
          "Concrete example: a disclosure is sent after the timing window. The mortgage support specialist opens a condition log, records rate-lock expiration and terms and application and disclosure date, and asks one precise question instead of filling the blank from memory. The item leaves the application, disclosure, condition, and rate-lock queue only after the mortgage operations manager accepts the next action and the evidence link is attached.",
          "In practice, the mortgage support specialist handles the \"a short checklist before release\" work by preparing a disclosure timing record and naming the decision boundary. Include the source and retrieval date, application and disclosure date, and the next action owner. When the item involves disclosure timing is at risk, the item goes to the underwriter with the evidence already checked; the application, disclosure, condition, and rate-lock queue should show the hold, not hide it."
        ]
      },
      {
        "heading": "A note on tools and templates",
        "paragraphs": [
          "The application, disclosure, condition, and rate-lock queue in mortgage application and underwriting support usually fails at the handoff, not at the first task. For the \"a note on tools and templates\" section, the mortgage support specialist should capture the source, the version, the accountable mortgage operations manager, and the next review date in a condition log. If the item involves rate lock expires before closing, route it to the underwriter and keep the exception reason attached so a later reviewer can see why the normal path did not apply.",
          "For the \"a note on tools and templates\" section, define the stopping condition before the mortgage support specialist starts the task. The application checklist should show application and disclosure date, rate-lock expiration and terms, and the evidence that let the mortgage operations manager accept the result. If the item involves borrower identity or authorization is unclear, document the reason and route the decision to the underwriter; a reopened item needs a new dated action, not a copied closure note."
        ]
      },
      {
        "heading": "A local note for The Mortgage Assistant",
        "paragraphs": [
          "The Mortgage Assistant applies this control to mortgage application and document support for mortgage teams. The working rule is simple: the specialist keeps the record current, and the mortgage operations manager keeps the decisions that change a customer, a payment, or a schedule.",
          "For themortgageassistant.com, the first pilot should use one queue and one reviewer. Add a second workflow only after the evidence standard holds under normal volume."
        ]
      },
      {
        "heading": "Related controls",
        "paragraphs": [
          "Read [Triage Requests for mortgage application and document support Before They Reach the Queue](/blog/request-triage-standard) and [Stop Incomplete Files in mortgage application and document support Work](/blog/document-completeness) for the neighboring controls. Public context is available in [National Archives Records Management](https://www.archives.gov/records-mgmt)."
        ]
      },
      {
        "heading": "What the owner should see",
        "paragraphs": [
          "A useful test for the \"what the owner should see\" control is whether a condition log still makes sense after a week away. The mortgage support specialist records loan and borrower identifier and condition and supporting document, then checks one high-value case and one exception during the weekly review. When the item involves income or asset document conflicts, the item stays open with a named owner and a dated next action rather than being marked complete.",
          "The control that matters for the \"what the owner should see\" section is a short, reviewable record, not a longer checklist. The mortgage support specialist captures loan and borrower identifier and condition and supporting document, labels a case involving rate lock expires before closing, and leaves the decision with the mortgage operations manager. During the weekly review, compare conditions cleared by owner with the unresolved items and note which fix changed the result."
        ]
      },
      {
        "heading": "Sources",
        "paragraphs": [
          "NIST Cybersecurity Framework: https://www.nist.gov/cyberframework",
          "SBA Manage Your Business: https://www.sba.gov/business-guide/manage-your-business",
          "DOL Recordkeeping Fact Sheet: https://www.dol.gov/agencies/whd/fact-sheets/21-flsa-recordkeeping"
        ]
      }
    ],
    "faq": [
      {
        "q": "What should stay with the accountable owner?",
        "a": "For the \"sources\" section, define the stopping condition before the mortgage support specialist starts the task. The application checklist should show application and disclosure date, loan and borrower identifier, and the evidence that let the mortgage operations manager accept the result. If the item involves borrower identity or authorization is unclear, document the reason and route the decision to the compliance reviewer; a reopened item needs a new dated action, not a copied closure note."
      },
      {
        "q": "What is the minimum evidence?",
        "a": "In practice, the mortgage support specialist handles the \"sources\" work by preparing an application checklist and naming the decision boundary. Include the source and retrieval date, condition and supporting document, and the next action owner. When the item involves rate lock expires before closing, the item goes to the compliance reviewer with the evidence already checked; the application, disclosure, condition, and rate-lock queue should show the hold, not hide it."
      }
    ],
    "internalService": "/services",
    "internalSibling": "/blog/capacity-plan",
    "source": {
      "label": "Public guidance",
      "url": "https://www.archives.gov/records-mgmt"
    }
  },
  {
    "slug": "document-completeness",
    "title": "Stop Incomplete Files in mortgage application and document support Work",
    "description": "A completeness gate for mortgage application and document support that names the required documents, checks version and signature, and returns gaps without rework.",
    "category": "Application intake",
    "publishedAt": "2026-10-26",
    "readTime": "11 min read",
    "thumbnail": "/article-thumbnails/october-26/document-completeness.svg",
    "sections": [
      {
        "heading": "Why this control matters",
        "paragraphs": [
          "A mortgage application and document support queue can look busy while the record that would let someone else continue is missing. This guide turns the control behind \"Stop Incomplete Files in mortgage application and document support Work\" into a bounded workflow with a source, a named owner, and a stop rule.",
          "It is written for mortgage teams. The specialist prepares and routes; the mortgage operations manager keeps the decisions that change a customer, a payment, a schedule, or a policy."
        ]
      },
      {
        "heading": "Start with the governing record",
        "paragraphs": [
          "Begin with the record that controls the mortgage application and document support item. At minimum, collect the required document list for the work type, the document version and date, the signature or approval, the source or issuing party, the expiry or validity window, the reviewer who checked it. Record where each item came from, the version or date observed, and the field it supports.",
          "The disclosure timing record is useful for the \"start with the governing record\" control only if another person can audit it. The mortgage support specialist records condition and supporting document and owner and next action, keeps the source attached, and marks a case involving rate lock expires before closing with the owner who accepted it. Review conditions cleared by owner during the weekly check and test one recent correction against the original evidence."
        ]
      },
      {
        "heading": "Separate preparation from approval",
        "paragraphs": [
          "A useful test for the \"separate preparation from approval\" control is whether a rate-lock record still makes sense after a week away. The mortgage support specialist records owner and next action and rate-lock expiration and terms, then checks one high-value case and one exception during the weekly review. When the item involves income or asset document conflicts, the item stays open with a named owner and a dated next action rather than being marked complete.",
          "The application, disclosure, condition, and rate-lock queue in mortgage application and underwriting support usually fails at the handoff, not at the first task. For the \"separate preparation from approval\" section, the mortgage support specialist should capture the source, the version, the accountable mortgage operations manager, and the next review date in a rate-lock record. If the item involves borrower identity or authorization is unclear, route it to the compliance reviewer and keep the exception reason attached so a later reviewer can see why the normal path did not apply."
        ]
      },
      {
        "heading": "Where the process breaks",
        "paragraphs": [
          "The application, disclosure, condition, and rate-lock queue in mortgage application and underwriting support usually fails at the handoff, not at the first task. For the \"where the process breaks\" section, the mortgage support specialist should capture the source, the version, the accountable mortgage operations manager, and the next review date in a disclosure timing record. If the item involves disclosure timing is at risk, route it to the underwriter and keep the exception reason attached so a later reviewer can see why the normal path did not apply.",
          "A useful test for the \"where the process breaks\" control is whether an application checklist still makes sense after a week away. The mortgage support specialist records condition and supporting document and rate-lock expiration and terms, then checks one high-value case and one exception during the weekly review. When the item involves income or asset document conflicts, the item stays open with a named owner and a dated next action rather than being marked complete."
        ]
      },
      {
        "heading": "Build the control in four steps",
        "paragraphs": [
          "First, Define the required set by work type and version.",
          "Second, Check presence, version, signature, and expiry in that order.",
          "The application, disclosure, condition, and rate-lock queue in mortgage application and underwriting support usually fails at the handoff, not at the first task. For the \"build the control in four steps\" section, the mortgage support specialist should capture the source, the version, the accountable mortgage operations manager, and the next review date in an application checklist. If the item involves borrower identity or authorization is unclear, route it to the compliance reviewer and keep the exception reason attached so a later reviewer can see why the normal path did not apply.",
          "Fourth, Record every waiver, its owner, and its expiry."
        ]
      },
      {
        "heading": "Write the exception path first",
        "paragraphs": [
          "The control that matters for the \"write the exception path first\" section is a short, reviewable record, not a longer checklist. The mortgage support specialist captures rate-lock expiration and terms and application and disclosure date, labels a case involving rate lock expires before closing, and leaves the decision with the mortgage operations manager. During the weekly review, compare conditions cleared by owner with the unresolved items and note which fix changed the result.",
          "A useful test for the \"write the exception path first\" control is whether a condition log still makes sense after a week away. The mortgage support specialist records condition and supporting document and rate-lock expiration and terms, then checks one high-value case and one exception during the weekly review. When the item involves borrower identity or authorization is unclear, the item stays open with a named owner and a dated next action rather than being marked complete."
        ]
      },
      {
        "heading": "Measure the queue, not the activity",
        "paragraphs": [
          "In practice, the mortgage support specialist handles the \"measure the queue, not the activity\" work by preparing a rate-lock record and naming the decision boundary. Include the source and retrieval date, application and disclosure date, and the next action owner. When the item involves income or asset document conflicts, the item goes to the loan officer with the evidence already checked; the application, disclosure, condition, and rate-lock queue should show the hold, not hide it.",
          "Ask what would let a new reviewer continue the \"measure the queue, not the activity\" work without a conversation. The answer is usually an application checklist with the source, version, owner, and next action. If the item involves borrower identity or authorization is unclear, the mortgage support specialist pauses the item, records the gap, and routes one question to the loan officer; do not close the item just to keep the queue moving."
        ]
      },
      {
        "heading": "A worked example",
        "paragraphs": [
          "The control that matters for the \"a worked example\" section is a short, reviewable record, not a longer checklist. The mortgage support specialist captures loan and borrower identifier and condition and supporting document, labels a case involving borrower identity or authorization is unclear, and leaves the decision with the mortgage operations manager. During the weekly review, compare conditions cleared by owner with the unresolved items and note which fix changed the result.",
          "The condition log is useful for the \"a worked example\" control only if another person can audit it. The mortgage support specialist records owner and next action and rate-lock expiration and terms, keeps the source attached, and marks a case involving borrower identity or authorization is unclear with the owner who accepted it. Review conditions cleared by owner during the weekly check and test one recent correction against the original evidence."
        ]
      },
      {
        "heading": "Close and hand off",
        "paragraphs": [
          "The rate-lock record is useful for the \"close and hand off\" control only if another person can audit it. The mortgage support specialist records owner and next action and condition and supporting document, keeps the source attached, and marks a case involving borrower identity or authorization is unclear with the owner who accepted it. Review files returned for missing documents during the weekly check and test one recent correction against the original evidence.",
          "Within mortgage application and underwriting support, the \"close and hand off\" control is only repeatable when the mortgage support specialist can show an application checklist behind each decision. Start with owner and next action, add loan and borrower identifier, and attach the source and date before the item moves. If the item involves income or asset document conflicts, hold the work in the application, disclosure, condition, and rate-lock queue and route the choice to the mortgage operations manager; the mortgage operations manager should be able to reconstruct the next step without asking the preparer."
        ]
      },
      {
        "heading": "A weekly review rhythm",
        "paragraphs": [
          "Set one recurring point each week to review the mortgage application and document support queue: the oldest items, the blocked items, and one item that was corrected. Keep the meeting short and decision-focused.",
          "The control that matters for the \"a weekly review rhythm\" section is a short, reviewable record, not a longer checklist. The mortgage support specialist captures rate-lock expiration and terms and condition and supporting document, labels a case involving disclosure timing is at risk, and leaves the decision with the mortgage operations manager. During the weekly review, compare conditions cleared by owner with the unresolved items and note which fix changed the result."
        ]
      },
      {
        "heading": "When to stop and ask",
        "paragraphs": [
          "A useful test for the \"when to stop and ask\" control is whether a rate-lock record still makes sense after a week away. The mortgage support specialist records loan and borrower identifier and owner and next action, then checks one high-value case and one exception during the weekly review. When the item involves disclosure timing is at risk, the item stays open with a named owner and a dated next action rather than being marked complete.",
          "In practice, the mortgage support specialist handles the \"when to stop and ask\" work by preparing a condition log and naming the decision boundary. Include the source and retrieval date, condition and supporting document, and the next action owner. When the item involves disclosure timing is at risk, the item goes to the loan officer with the evidence already checked; the application, disclosure, condition, and rate-lock queue should show the hold, not hide it."
        ]
      },
      {
        "heading": "A short checklist before release",
        "paragraphs": [
          "The \"a short checklist before release\" control becomes fragile when the application, disclosure, condition, and rate-lock queue is measured only by completed items. The mortgage support specialist should record owner and next action and loan and borrower identifier, keep exceptions visible, and let the mortgage operations manager decide any commitment or scope change. The mortgage operations manager can then sample a condition log and compare files returned for missing documents against the work that remains open.",
          "Ask what would let a new reviewer continue the \"a short checklist before release\" work without a conversation. The answer is usually an application checklist with the source, version, owner, and next action. If the item involves income or asset document conflicts, the mortgage support specialist pauses the item, records the gap, and routes one question to the underwriter; do not close the item just to keep the queue moving."
        ]
      },
      {
        "heading": "A note on tools and templates",
        "paragraphs": [
          "Concrete example: a rate lock expires while a condition remains open. The mortgage support specialist opens a condition log, records loan and borrower identifier and rate-lock expiration and terms, and asks one precise question instead of filling the blank from memory. The item leaves the application, disclosure, condition, and rate-lock queue only after the mortgage operations manager accepts the next action and the evidence link is attached.",
          "A useful test for the \"a note on tools and templates\" control is whether a rate-lock record still makes sense after a week away. The mortgage support specialist records rate-lock expiration and terms and owner and next action, then checks one high-value case and one exception during the weekly review. When the item involves disclosure timing is at risk, the item stays open with a named owner and a dated next action rather than being marked complete."
        ]
      },
      {
        "heading": "A local note for The Mortgage Assistant",
        "paragraphs": [
          "The Mortgage Assistant applies this control to mortgage application and document support for mortgage teams. The working rule is simple: the specialist keeps the record current, and the mortgage operations manager keeps the decisions that change a customer, a payment, or a schedule.",
          "For themortgageassistant.com, the first pilot should use one queue and one reviewer. Add a second workflow only after the evidence standard holds under normal volume."
        ]
      },
      {
        "heading": "Related controls",
        "paragraphs": [
          "Read [Triage Requests for mortgage application and document support Before They Reach the Queue](/blog/request-triage-standard) and [Plan Capacity for mortgage application and document support From Real Workload](/blog/capacity-plan) for the neighboring controls. Public context is available in [GAO Standards for Internal Control](https://www.gao.gov/products/gao-14-704g)."
        ]
      },
      {
        "heading": "What the owner should see",
        "paragraphs": [
          "A useful test for the \"what the owner should see\" control is whether a condition log still makes sense after a week away. The mortgage support specialist records application and disclosure date and rate-lock expiration and terms, then checks one high-value case and one exception during the weekly review. When the item involves disclosure timing is at risk, the item stays open with a named owner and a dated next action rather than being marked complete.",
          "The disclosure timing record is useful for the \"what the owner should see\" control only if another person can audit it. The mortgage support specialist records loan and borrower identifier and application and disclosure date, keeps the source attached, and marks a case involving rate lock expires before closing with the owner who accepted it. Review rate locks nearing expiry without review during the weekly check and test one recent correction against the original evidence."
        ]
      },
      {
        "heading": "Sources",
        "paragraphs": [
          "SBA Manage Your Business: https://www.sba.gov/business-guide/manage-your-business",
          "DOL Recordkeeping Fact Sheet: https://www.dol.gov/agencies/whd/fact-sheets/21-flsa-recordkeeping",
          "National Archives Records Management: https://www.archives.gov/records-mgmt"
        ]
      }
    ],
    "faq": [
      {
        "q": "What should stay with the accountable owner?",
        "a": "Concrete example: a rate lock expires while a condition remains open. The mortgage support specialist opens a condition log, records loan and borrower identifier and owner and next action, and asks one precise question instead of filling the blank from memory. The item leaves the application, disclosure, condition, and rate-lock queue only after the mortgage operations manager accepts the next action and the evidence link is attached."
      },
      {
        "q": "What is the minimum evidence?",
        "a": "Within mortgage application and underwriting support, the \"sources\" control is only repeatable when the mortgage support specialist can show a condition log behind each decision. Start with loan and borrower identifier, add owner and next action, and attach the source and date before the item moves. If the item involves disclosure timing is at risk, hold the work in the application, disclosure, condition, and rate-lock queue and route the choice to the mortgage operations manager; the underwriter should be able to reconstruct the next step without asking the preparer."
      }
    ],
    "internalService": "/services",
    "internalSibling": "/blog/document-completeness",
    "source": {
      "label": "Public guidance",
      "url": "https://www.gao.gov/products/gao-14-704g"
    }
  },
  {
    "slug": "client-update-cadence",
    "title": "Set a Client Update Cadence for mortgage application and document support",
    "description": "A client update rhythm for mortgage application and document support that ties the message to the work state and keeps commitments with the owner.",
    "category": "Application intake",
    "publishedAt": "2026-10-26",
    "readTime": "11 min read",
    "thumbnail": "/article-thumbnails/october-26/client-update-cadence.svg",
    "sections": [
      {
        "heading": "Why this control matters",
        "paragraphs": [
          "A mortgage application and document support queue can look busy while the record that would let someone else continue is missing. This guide turns the control behind \"Set a Client Update Cadence for mortgage application and document support\" into a bounded workflow with a source, a named owner, and a stop rule.",
          "It is written for mortgage teams. The specialist prepares and routes; the mortgage operations manager keeps the decisions that change a customer, a payment, a schedule, or a policy."
        ]
      },
      {
        "heading": "Start with the governing record",
        "paragraphs": [
          "Begin with the record that controls the mortgage application and document support item. At minimum, collect the client and primary contact, the current work state, the last update and channel, the next milestone or decision, the open question, the owner of the commitment. Record where each item came from, the version or date observed, and the field it supports.",
          "Ask what would let a new reviewer continue the \"start with the governing record\" work without a conversation. The answer is usually a disclosure timing record with the source, version, owner, and next action. If the item involves disclosure timing is at risk, the mortgage support specialist pauses the item, records the gap, and routes one question to the mortgage operations manager; do not close the item just to keep the queue moving."
        ]
      },
      {
        "heading": "Separate preparation from approval",
        "paragraphs": [
          "Within mortgage application and underwriting support, the \"separate preparation from approval\" control is only repeatable when the mortgage support specialist can show a disclosure timing record behind each decision. Start with rate-lock expiration and terms, add application and disclosure date, and attach the source and date before the item moves. If the item involves disclosure timing is at risk, hold the work in the application, disclosure, condition, and rate-lock queue and route the choice to the mortgage operations manager; the mortgage operations manager should be able to reconstruct the next step without asking the preparer.",
          "For the \"separate preparation from approval\" section, define the stopping condition before the mortgage support specialist starts the task. The condition log should show application and disclosure date, condition and supporting document, and the evidence that let the mortgage operations manager accept the result. If the item involves rate lock expires before closing, document the reason and route the decision to the compliance reviewer; a reopened item needs a new dated action, not a copied closure note."
        ]
      },
      {
        "heading": "Where the process breaks",
        "paragraphs": [
          "The control that matters for the \"where the process breaks\" section is a short, reviewable record, not a longer checklist. The mortgage support specialist captures rate-lock expiration and terms and owner and next action, labels a case involving borrower identity or authorization is unclear, and leaves the decision with the mortgage operations manager. During the weekly review, compare applications with complete disclosures with the unresolved items and note which fix changed the result.",
          "Ask what would let a new reviewer continue the \"where the process breaks\" work without a conversation. The answer is usually an application checklist with the source, version, owner, and next action. If the item involves rate lock expires before closing, the mortgage support specialist pauses the item, records the gap, and routes one question to the underwriter; do not close the item just to keep the queue moving."
        ]
      },
      {
        "heading": "Build the control in four steps",
        "paragraphs": [
          "First, Set a cadence by work state: active, waiting, or closed.",
          "Second, Use one template with state, next step, date, and open question.",
          "Third, Log the send time and the source of the update.",
          "Fourth, Escalate a missed update before the client asks."
        ]
      },
      {
        "heading": "Write the exception path first",
        "paragraphs": [
          "In practice, the mortgage support specialist handles the \"write the exception path first\" work by preparing a rate-lock record and naming the decision boundary. Include the source and retrieval date, rate-lock expiration and terms, and the next action owner. When the item involves rate lock expires before closing, the item goes to the underwriter with the evidence already checked; the application, disclosure, condition, and rate-lock queue should show the hold, not hide it.",
          "Ask what would let a new reviewer continue the \"write the exception path first\" work without a conversation. The answer is usually a rate-lock record with the source, version, owner, and next action. If the item involves borrower identity or authorization is unclear, the mortgage support specialist pauses the item, records the gap, and routes one question to the mortgage operations manager; do not close the item just to keep the queue moving."
        ]
      },
      {
        "heading": "Measure the queue, not the activity",
        "paragraphs": [
          "Treat the \"measure the queue, not the activity\" control as an evidence problem before treating it as a speed problem. The mortgage support specialist can prepare a rate-lock record, but the mortgage operations manager keeps the decision when the item involves disclosure timing is at risk. Record rate locks nearing expiry without review with its denominator and window, then use the weekly sample to check whether the same gap keeps returning.",
          "Treat the \"measure the queue, not the activity\" control as an evidence problem before treating it as a speed problem. The mortgage support specialist can prepare an application checklist, but the mortgage operations manager keeps the decision when the item involves disclosure timing is at risk. Record rate locks nearing expiry without review with its denominator and window, then use the weekly sample to check whether the same gap keeps returning."
        ]
      },
      {
        "heading": "A worked example",
        "paragraphs": [
          "Before scaling the \"a worked example\" workflow, make a condition log readable to someone outside the original team. It should show the request, the source, loan and borrower identifier, the mortgage operations manager, and the next date in one place. The underwriter reviewing the application, disclosure, condition, and rate-lock queue should see exceptions, not a clean activity count that hides unresolved work.",
          "For the \"a worked example\" section, define the stopping condition before the mortgage support specialist starts the task. The disclosure timing record should show loan and borrower identifier, application and disclosure date, and the evidence that let the mortgage operations manager accept the result. If the item involves borrower identity or authorization is unclear, document the reason and route the decision to the underwriter; a reopened item needs a new dated action, not a copied closure note."
        ]
      },
      {
        "heading": "Close and hand off",
        "paragraphs": [
          "In practice, the mortgage support specialist handles the \"close and hand off\" work by preparing a disclosure timing record and naming the decision boundary. Include the source and retrieval date, condition and supporting document, and the next action owner. When the item involves borrower identity or authorization is unclear, the item goes to the loan officer with the evidence already checked; the application, disclosure, condition, and rate-lock queue should show the hold, not hide it.",
          "For the \"close and hand off\" section, define the stopping condition before the mortgage support specialist starts the task. The rate-lock record should show owner and next action, loan and borrower identifier, and the evidence that let the mortgage operations manager accept the result. If the item involves income or asset document conflicts, document the reason and route the decision to the underwriter; a reopened item needs a new dated action, not a copied closure note."
        ]
      },
      {
        "heading": "A weekly review rhythm",
        "paragraphs": [
          "Set one recurring point each week to review the mortgage application and document support queue: the oldest items, the blocked items, and one item that was corrected. Keep the meeting short and decision-focused.",
          "The application checklist is useful for the \"a weekly review rhythm\" control only if another person can audit it. The mortgage support specialist records condition and supporting document and application and disclosure date, keeps the source attached, and marks a case involving rate lock expires before closing with the owner who accepted it. Review files returned for missing documents during the weekly check and test one recent correction against the original evidence."
        ]
      },
      {
        "heading": "When to stop and ask",
        "paragraphs": [
          "A useful test for the \"when to stop and ask\" control is whether a condition log still makes sense after a week away. The mortgage support specialist records loan and borrower identifier and owner and next action, then checks one high-value case and one exception during the weekly review. When the item involves rate lock expires before closing, the item stays open with a named owner and a dated next action rather than being marked complete.",
          "Within mortgage application and underwriting support, the \"when to stop and ask\" control is only repeatable when the mortgage support specialist can show a condition log behind each decision. Start with condition and supporting document, add loan and borrower identifier, and attach the source and date before the item moves. If the item involves borrower identity or authorization is unclear, hold the work in the application, disclosure, condition, and rate-lock queue and route the choice to the mortgage operations manager; the underwriter should be able to reconstruct the next step without asking the preparer."
        ]
      },
      {
        "heading": "A short checklist before release",
        "paragraphs": [
          "Concrete example: an asset statement conflicts with the application. The mortgage support specialist opens a condition log, records loan and borrower identifier and condition and supporting document, and asks one precise question instead of filling the blank from memory. The item leaves the application, disclosure, condition, and rate-lock queue only after the mortgage operations manager accepts the next action and the evidence link is attached.",
          "The \"a short checklist before release\" control becomes fragile when the application, disclosure, condition, and rate-lock queue is measured only by completed items. The mortgage support specialist should record owner and next action and loan and borrower identifier, keep exceptions visible, and let the mortgage operations manager decide any commitment or scope change. The compliance reviewer can then sample a condition log and compare files returned for missing documents against the work that remains open."
        ]
      },
      {
        "heading": "A note on tools and templates",
        "paragraphs": [
          "Before scaling the \"a note on tools and templates\" workflow, make an application checklist readable to someone outside the original team. It should show the request, the source, condition and supporting document, the mortgage operations manager, and the next date in one place. The loan officer reviewing the application, disclosure, condition, and rate-lock queue should see exceptions, not a clean activity count that hides unresolved work.",
          "Before scaling the \"a note on tools and templates\" workflow, make a rate-lock record readable to someone outside the original team. It should show the request, the source, application and disclosure date, the mortgage operations manager, and the next date in one place. The underwriter reviewing the application, disclosure, condition, and rate-lock queue should see exceptions, not a clean activity count that hides unresolved work."
        ]
      },
      {
        "heading": "A local note for The Mortgage Assistant",
        "paragraphs": [
          "The Mortgage Assistant applies this control to mortgage application and document support for mortgage teams. The working rule is simple: the specialist keeps the record current, and the mortgage operations manager keeps the decisions that change a customer, a payment, or a schedule.",
          "For themortgageassistant.com, the first pilot should use one queue and one reviewer. Add a second workflow only after the evidence standard holds under normal volume."
        ]
      },
      {
        "heading": "Related controls",
        "paragraphs": [
          "Read [Triage Requests for mortgage application and document support Before They Reach the Queue](/blog/request-triage-standard) and [Plan Capacity for mortgage application and document support From Real Workload](/blog/capacity-plan) for the neighboring controls. Public context is available in [NIST Cybersecurity Framework](https://www.nist.gov/cyberframework)."
        ]
      },
      {
        "heading": "What the owner should see",
        "paragraphs": [
          "Before scaling the \"what the owner should see\" workflow, make a rate-lock record readable to someone outside the original team. It should show the request, the source, application and disclosure date, the mortgage operations manager, and the next date in one place. The compliance reviewer reviewing the application, disclosure, condition, and rate-lock queue should see exceptions, not a clean activity count that hides unresolved work.",
          "Within mortgage application and underwriting support, the \"what the owner should see\" control is only repeatable when the mortgage support specialist can show a rate-lock record behind each decision. Start with application and disclosure date, add loan and borrower identifier, and attach the source and date before the item moves. If the item involves disclosure timing is at risk, hold the work in the application, disclosure, condition, and rate-lock queue and route the choice to the mortgage operations manager; the loan officer should be able to reconstruct the next step without asking the preparer."
        ]
      },
      {
        "heading": "Sources",
        "paragraphs": [
          "DOL Recordkeeping Fact Sheet: https://www.dol.gov/agencies/whd/fact-sheets/21-flsa-recordkeeping",
          "National Archives Records Management: https://www.archives.gov/records-mgmt",
          "GAO Standards for Internal Control: https://www.gao.gov/products/gao-14-704g"
        ]
      }
    ],
    "faq": [
      {
        "q": "What should stay with the accountable owner?",
        "a": "The disclosure timing record is useful for the \"sources\" control only if another person can audit it. The mortgage support specialist records condition and supporting document and rate-lock expiration and terms, keeps the source attached, and marks a case involving borrower identity or authorization is unclear with the owner who accepted it. Review applications with complete disclosures during the weekly check and test one recent correction against the original evidence."
      },
      {
        "q": "What is the minimum evidence?",
        "a": "Ask what would let a new reviewer continue the \"sources\" work without a conversation. The answer is usually an application checklist with the source, version, owner, and next action. If the item involves disclosure timing is at risk, the mortgage support specialist pauses the item, records the gap, and routes one question to the loan officer; do not close the item just to keep the queue moving."
      }
    ],
    "internalService": "/services",
    "internalSibling": "/blog/client-update-cadence",
    "source": {
      "label": "Public guidance",
      "url": "https://www.nist.gov/cyberframework"
    }
  },
  {
    "slug": "supplier-followup",
    "title": "Track Supplier Follow-Up for mortgage application and document support",
    "description": "A supplier follow-up log for mortgage application and document support that keeps one request, one reference, and one next date per issue.",
    "category": "Application intake",
    "publishedAt": "2026-10-26",
    "readTime": "11 min read",
    "thumbnail": "/article-thumbnails/october-26/supplier-followup.svg",
    "sections": [
      {
        "heading": "Why this control matters",
        "paragraphs": [
          "A mortgage application and document support queue can look busy while the record that would let someone else continue is missing. This guide turns the control behind \"Track Supplier Follow-Up for mortgage application and document support\" into a bounded workflow with a source, a named owner, and a stop rule.",
          "It is written for mortgage teams. The specialist prepares and routes; the mortgage operations manager keeps the decisions that change a customer, a payment, a schedule, or a policy."
        ]
      },
      {
        "heading": "Start with the governing record",
        "paragraphs": [
          "Begin with the record that controls the mortgage application and document support item. At minimum, collect the supplier and contact, the request and reference number, the date sent and channel, the response received, the promised date, the internal owner waiting. Record where each item came from, the version or date observed, and the field it supports.",
          "The disclosure timing record is useful for the \"start with the governing record\" control only if another person can audit it. The mortgage support specialist records rate-lock expiration and terms and condition and supporting document, keeps the source attached, and marks a case involving income or asset document conflicts with the owner who accepted it. Review rate locks nearing expiry without review during the weekly check and test one recent correction against the original evidence."
        ]
      },
      {
        "heading": "Separate preparation from approval",
        "paragraphs": [
          "Before scaling the \"separate preparation from approval\" workflow, make a disclosure timing record readable to someone outside the original team. It should show the request, the source, loan and borrower identifier, the mortgage operations manager, and the next date in one place. The mortgage operations manager reviewing the application, disclosure, condition, and rate-lock queue should see exceptions, not a clean activity count that hides unresolved work.",
          "Within mortgage application and underwriting support, the \"separate preparation from approval\" control is only repeatable when the mortgage support specialist can show a disclosure timing record behind each decision. Start with application and disclosure date, add condition and supporting document, and attach the source and date before the item moves. If the item involves borrower identity or authorization is unclear, hold the work in the application, disclosure, condition, and rate-lock queue and route the choice to the mortgage operations manager; the loan officer should be able to reconstruct the next step without asking the preparer."
        ]
      },
      {
        "heading": "Where the process breaks",
        "paragraphs": [
          "Within mortgage application and underwriting support, the \"where the process breaks\" control is only repeatable when the mortgage support specialist can show a disclosure timing record behind each decision. Start with rate-lock expiration and terms, add application and disclosure date, and attach the source and date before the item moves. If the item involves rate lock expires before closing, hold the work in the application, disclosure, condition, and rate-lock queue and route the choice to the mortgage operations manager; the compliance reviewer should be able to reconstruct the next step without asking the preparer.",
          "Within mortgage application and underwriting support, the \"where the process breaks\" control is only repeatable when the mortgage support specialist can show a disclosure timing record behind each decision. Start with rate-lock expiration and terms, add condition and supporting document, and attach the source and date before the item moves. If the item involves disclosure timing is at risk, hold the work in the application, disclosure, condition, and rate-lock queue and route the choice to the mortgage operations manager; the underwriter should be able to reconstruct the next step without asking the preparer."
        ]
      },
      {
        "heading": "Build the control in four steps",
        "paragraphs": [
          "First, Open one log entry per supplier request with a reference.",
          "Second, Record the sent date, promised date, and next chase date.",
          "Third, Use a shared mailbox or log rather than personal threads.",
          "Fourth, Escalate after two missed dates with the impact on the work."
        ]
      },
      {
        "heading": "Write the exception path first",
        "paragraphs": [
          "For the \"write the exception path first\" section, define the stopping condition before the mortgage support specialist starts the task. The disclosure timing record should show condition and supporting document, loan and borrower identifier, and the evidence that let the mortgage operations manager accept the result. If the item involves rate lock expires before closing, document the reason and route the decision to the compliance reviewer; a reopened item needs a new dated action, not a copied closure note.",
          "The control that matters for the \"write the exception path first\" section is a short, reviewable record, not a longer checklist. The mortgage support specialist captures condition and supporting document and application and disclosure date, labels a case involving borrower identity or authorization is unclear, and leaves the decision with the mortgage operations manager. During the weekly review, compare conditions cleared by owner with the unresolved items and note which fix changed the result."
        ]
      },
      {
        "heading": "Measure the queue, not the activity",
        "paragraphs": [
          "The \"measure the queue, not the activity\" control becomes fragile when the application, disclosure, condition, and rate-lock queue is measured only by completed items. The mortgage support specialist should record rate-lock expiration and terms and owner and next action, keep exceptions visible, and let the mortgage operations manager decide any commitment or scope change. The mortgage operations manager can then sample a disclosure timing record and compare rate locks nearing expiry without review against the work that remains open.",
          "For the \"measure the queue, not the activity\" section, define the stopping condition before the mortgage support specialist starts the task. The application checklist should show condition and supporting document, owner and next action, and the evidence that let the mortgage operations manager accept the result. If the item involves disclosure timing is at risk, document the reason and route the decision to the compliance reviewer; a reopened item needs a new dated action, not a copied closure note."
        ]
      },
      {
        "heading": "A worked example",
        "paragraphs": [
          "A useful test for the \"a worked example\" control is whether a condition log still makes sense after a week away. The mortgage support specialist records loan and borrower identifier and application and disclosure date, then checks one high-value case and one exception during the weekly review. When the item involves disclosure timing is at risk, the item stays open with a named owner and a dated next action rather than being marked complete.",
          "For the \"a worked example\" section, define the stopping condition before the mortgage support specialist starts the task. The rate-lock record should show owner and next action, rate-lock expiration and terms, and the evidence that let the mortgage operations manager accept the result. If the item involves rate lock expires before closing, document the reason and route the decision to the compliance reviewer; a reopened item needs a new dated action, not a copied closure note."
        ]
      },
      {
        "heading": "Close and hand off",
        "paragraphs": [
          "The application, disclosure, condition, and rate-lock queue in mortgage application and underwriting support usually fails at the handoff, not at the first task. For the \"close and hand off\" section, the mortgage support specialist should capture the source, the version, the accountable mortgage operations manager, and the next review date in an application checklist. If the item involves borrower identity or authorization is unclear, route it to the loan officer and keep the exception reason attached so a later reviewer can see why the normal path did not apply.",
          "For the \"close and hand off\" section, define the stopping condition before the mortgage support specialist starts the task. The rate-lock record should show application and disclosure date, condition and supporting document, and the evidence that let the mortgage operations manager accept the result. If the item involves borrower identity or authorization is unclear, document the reason and route the decision to the mortgage operations manager; a reopened item needs a new dated action, not a copied closure note."
        ]
      },
      {
        "heading": "A weekly review rhythm",
        "paragraphs": [
          "Set one recurring point each week to review the mortgage application and document support queue: the oldest items, the blocked items, and one item that was corrected. Keep the meeting short and decision-focused.",
          "In practice, the mortgage support specialist handles the \"a weekly review rhythm\" work by preparing a disclosure timing record and naming the decision boundary. Include the source and retrieval date, application and disclosure date, and the next action owner. When the item involves income or asset document conflicts, the item goes to the underwriter with the evidence already checked; the application, disclosure, condition, and rate-lock queue should show the hold, not hide it."
        ]
      },
      {
        "heading": "When to stop and ask",
        "paragraphs": [
          "Within mortgage application and underwriting support, the \"when to stop and ask\" control is only repeatable when the mortgage support specialist can show an application checklist behind each decision. Start with owner and next action, add loan and borrower identifier, and attach the source and date before the item moves. If the item involves rate lock expires before closing, hold the work in the application, disclosure, condition, and rate-lock queue and route the choice to the mortgage operations manager; the mortgage operations manager should be able to reconstruct the next step without asking the preparer.",
          "Within mortgage application and underwriting support, the \"when to stop and ask\" control is only repeatable when the mortgage support specialist can show a condition log behind each decision. Start with loan and borrower identifier, add rate-lock expiration and terms, and attach the source and date before the item moves. If the item involves income or asset document conflicts, hold the work in the application, disclosure, condition, and rate-lock queue and route the choice to the mortgage operations manager; the loan officer should be able to reconstruct the next step without asking the preparer."
        ]
      },
      {
        "heading": "A short checklist before release",
        "paragraphs": [
          "Ask what would let a new reviewer continue the \"a short checklist before release\" work without a conversation. The answer is usually a rate-lock record with the source, version, owner, and next action. If the item involves income or asset document conflicts, the mortgage support specialist pauses the item, records the gap, and routes one question to the mortgage operations manager; do not close the item just to keep the queue moving.",
          "Treat the \"a short checklist before release\" control as an evidence problem before treating it as a speed problem. The mortgage support specialist can prepare a disclosure timing record, but the mortgage operations manager keeps the decision when the item involves rate lock expires before closing. Record conditions cleared by owner with its denominator and window, then use the weekly sample to check whether the same gap keeps returning."
        ]
      },
      {
        "heading": "A note on tools and templates",
        "paragraphs": [
          "The application, disclosure, condition, and rate-lock queue in mortgage application and underwriting support usually fails at the handoff, not at the first task. For the \"a note on tools and templates\" section, the mortgage support specialist should capture the source, the version, the accountable mortgage operations manager, and the next review date in an application checklist. If the item involves rate lock expires before closing, route it to the underwriter and keep the exception reason attached so a later reviewer can see why the normal path did not apply.",
          "In practice, the mortgage support specialist handles the \"a note on tools and templates\" work by preparing a disclosure timing record and naming the decision boundary. Include the source and retrieval date, rate-lock expiration and terms, and the next action owner. When the item involves income or asset document conflicts, the item goes to the mortgage operations manager with the evidence already checked; the application, disclosure, condition, and rate-lock queue should show the hold, not hide it."
        ]
      },
      {
        "heading": "A local note for The Mortgage Assistant",
        "paragraphs": [
          "The Mortgage Assistant applies this control to mortgage application and document support for mortgage teams. The working rule is simple: the specialist keeps the record current, and the mortgage operations manager keeps the decisions that change a customer, a payment, or a schedule.",
          "For themortgageassistant.com, the first pilot should use one queue and one reviewer. Add a second workflow only after the evidence standard holds under normal volume."
        ]
      },
      {
        "heading": "Related controls",
        "paragraphs": [
          "Read [Triage Requests for mortgage application and document support Before They Reach the Queue](/blog/request-triage-standard) and [Plan Capacity for mortgage application and document support From Real Workload](/blog/capacity-plan) for the neighboring controls. Public context is available in [SBA Manage Your Business](https://www.sba.gov/business-guide/manage-your-business)."
        ]
      },
      {
        "heading": "What the owner should see",
        "paragraphs": [
          "The rate-lock record is useful for the \"what the owner should see\" control only if another person can audit it. The mortgage support specialist records owner and next action and loan and borrower identifier, keeps the source attached, and marks a case involving borrower identity or authorization is unclear with the owner who accepted it. Review applications with complete disclosures during the weekly check and test one recent correction against the original evidence.",
          "Before scaling the \"what the owner should see\" workflow, make a rate-lock record readable to someone outside the original team. It should show the request, the source, rate-lock expiration and terms, the mortgage operations manager, and the next date in one place. The compliance reviewer reviewing the application, disclosure, condition, and rate-lock queue should see exceptions, not a clean activity count that hides unresolved work."
        ]
      },
      {
        "heading": "Sources",
        "paragraphs": [
          "National Archives Records Management: https://www.archives.gov/records-mgmt",
          "GAO Standards for Internal Control: https://www.gao.gov/products/gao-14-704g",
          "NIST Cybersecurity Framework: https://www.nist.gov/cyberframework"
        ]
      }
    ],
    "faq": [
      {
        "q": "What should stay with the accountable owner?",
        "a": "The \"sources\" control becomes fragile when the application, disclosure, condition, and rate-lock queue is measured only by completed items. The mortgage support specialist should record application and disclosure date and loan and borrower identifier, keep exceptions visible, and let the mortgage operations manager decide any commitment or scope change. The underwriter can then sample a disclosure timing record and compare rate locks nearing expiry without review against the work that remains open."
      },
      {
        "q": "What is the minimum evidence?",
        "a": "The control that matters for the \"sources\" section is a short, reviewable record, not a longer checklist. The mortgage support specialist captures condition and supporting document and rate-lock expiration and terms, labels a case involving income or asset document conflicts, and leaves the decision with the mortgage operations manager. During the weekly review, compare conditions cleared by owner with the unresolved items and note which fix changed the result."
      }
    ],
    "internalService": "/services",
    "internalSibling": "/blog/supplier-followup",
    "source": {
      "label": "Public guidance",
      "url": "https://www.sba.gov/business-guide/manage-your-business"
    }
  },
  {
    "slug": "recurring-task-calendar-control",
    "title": "Put Recurring mortgage application and document support Work on a Controlled Calendar",
    "description": "A recurring-work calendar for mortgage application and document support that records the frequency rule, the owner, the backup, and the completion evidence.",
    "category": "Application intake",
    "publishedAt": "2026-10-26",
    "readTime": "11 min read",
    "thumbnail": "/article-thumbnails/october-26/recurring-task-calendar-control.svg",
    "sections": [
      {
        "heading": "Why this control matters",
        "paragraphs": [
          "A mortgage application and document support queue can look busy while the record that would let someone else continue is missing. This guide turns the control behind \"Put Recurring mortgage application and document support Work on a Controlled Calendar\" into a bounded workflow with a source, a named owner, and a stop rule.",
          "It is written for mortgage teams. The specialist prepares and routes; the mortgage operations manager keeps the decisions that change a customer, a payment, a schedule, or a policy."
        ]
      },
      {
        "heading": "Start with the governing record",
        "paragraphs": [
          "Begin with the record that controls the mortgage application and document support item. At minimum, collect the task name and obligation, the frequency rule and anchor date, the next due date, the owner and backup, the source or trigger, the completion evidence. Record where each item came from, the version or date observed, and the field it supports.",
          "Concrete example: an asset statement conflicts with the application. The mortgage support specialist opens a disclosure timing record, records application and disclosure date and condition and supporting document, and asks one precise question instead of filling the blank from memory. The item leaves the application, disclosure, condition, and rate-lock queue only after the mortgage operations manager accepts the next action and the evidence link is attached."
        ]
      },
      {
        "heading": "Separate preparation from approval",
        "paragraphs": [
          "Before scaling the \"separate preparation from approval\" workflow, make a disclosure timing record readable to someone outside the original team. It should show the request, the source, owner and next action, the mortgage operations manager, and the next date in one place. The underwriter reviewing the application, disclosure, condition, and rate-lock queue should see exceptions, not a clean activity count that hides unresolved work.",
          "Ask what would let a new reviewer continue the \"separate preparation from approval\" work without a conversation. The answer is usually a disclosure timing record with the source, version, owner, and next action. If the item involves income or asset document conflicts, the mortgage support specialist pauses the item, records the gap, and routes one question to the loan officer; do not close the item just to keep the queue moving."
        ]
      },
      {
        "heading": "Where the process breaks",
        "paragraphs": [
          "The control that matters for the \"where the process breaks\" section is a short, reviewable record, not a longer checklist. The mortgage support specialist captures loan and borrower identifier and application and disclosure date, labels a case involving income or asset document conflicts, and leaves the decision with the mortgage operations manager. During the weekly review, compare rate locks nearing expiry without review with the unresolved items and note which fix changed the result.",
          "A useful test for the \"where the process breaks\" control is whether a disclosure timing record still makes sense after a week away. The mortgage support specialist records loan and borrower identifier and application and disclosure date, then checks one high-value case and one exception during the weekly review. When the item involves rate lock expires before closing, the item stays open with a named owner and a dated next action rather than being marked complete."
        ]
      },
      {
        "heading": "Build the control in four steps",
        "paragraphs": [
          "First, List every recurring obligation with its source and anchor date.",
          "Second, Assign one owner and one named backup.",
          "Third, Put the next three dates on the calendar with a reminder.",
          "Fourth, Store completion evidence with the date and reviewer."
        ]
      },
      {
        "heading": "Write the exception path first",
        "paragraphs": [
          "Concrete example: an asset statement conflicts with the application. The mortgage support specialist opens a rate-lock record, records application and disclosure date and owner and next action, and asks one precise question instead of filling the blank from memory. The item leaves the application, disclosure, condition, and rate-lock queue only after the mortgage operations manager accepts the next action and the evidence link is attached.",
          "The rate-lock record is useful for the \"write the exception path first\" control only if another person can audit it. The mortgage support specialist records loan and borrower identifier and rate-lock expiration and terms, keeps the source attached, and marks a case involving income or asset document conflicts with the owner who accepted it. Review rate locks nearing expiry without review during the weekly check and test one recent correction against the original evidence."
        ]
      },
      {
        "heading": "Measure the queue, not the activity",
        "paragraphs": [
          "Treat the \"measure the queue, not the activity\" control as an evidence problem before treating it as a speed problem. The mortgage support specialist can prepare a disclosure timing record, but the mortgage operations manager keeps the decision when the item involves rate lock expires before closing. Record applications with complete disclosures with its denominator and window, then use the weekly sample to check whether the same gap keeps returning.",
          "In practice, the mortgage support specialist handles the \"measure the queue, not the activity\" work by preparing a disclosure timing record and naming the decision boundary. Include the source and retrieval date, application and disclosure date, and the next action owner. When the item involves borrower identity or authorization is unclear, the item goes to the mortgage operations manager with the evidence already checked; the application, disclosure, condition, and rate-lock queue should show the hold, not hide it."
        ]
      },
      {
        "heading": "A worked example",
        "paragraphs": [
          "The \"a worked example\" control becomes fragile when the application, disclosure, condition, and rate-lock queue is measured only by completed items. The mortgage support specialist should record loan and borrower identifier and application and disclosure date, keep exceptions visible, and let the mortgage operations manager decide any commitment or scope change. The underwriter can then sample a rate-lock record and compare rate locks nearing expiry without review against the work that remains open.",
          "Before scaling the \"a worked example\" workflow, make an application checklist readable to someone outside the original team. It should show the request, the source, loan and borrower identifier, the mortgage operations manager, and the next date in one place. The loan officer reviewing the application, disclosure, condition, and rate-lock queue should see exceptions, not a clean activity count that hides unresolved work."
        ]
      },
      {
        "heading": "Close and hand off",
        "paragraphs": [
          "Within mortgage application and underwriting support, the \"close and hand off\" control is only repeatable when the mortgage support specialist can show a disclosure timing record behind each decision. Start with application and disclosure date, add loan and borrower identifier, and attach the source and date before the item moves. If the item involves disclosure timing is at risk, hold the work in the application, disclosure, condition, and rate-lock queue and route the choice to the mortgage operations manager; the underwriter should be able to reconstruct the next step without asking the preparer.",
          "The control that matters for the \"close and hand off\" section is a short, reviewable record, not a longer checklist. The mortgage support specialist captures application and disclosure date and condition and supporting document, labels a case involving disclosure timing is at risk, and leaves the decision with the mortgage operations manager. During the weekly review, compare conditions cleared by owner with the unresolved items and note which fix changed the result."
        ]
      },
      {
        "heading": "A weekly review rhythm",
        "paragraphs": [
          "Set one recurring point each week to review the mortgage application and document support queue: the oldest items, the blocked items, and one item that was corrected. Keep the meeting short and decision-focused.",
          "In practice, the mortgage support specialist handles the \"a weekly review rhythm\" work by preparing an application checklist and naming the decision boundary. Include the source and retrieval date, condition and supporting document, and the next action owner. When the item involves borrower identity or authorization is unclear, the item goes to the underwriter with the evidence already checked; the application, disclosure, condition, and rate-lock queue should show the hold, not hide it."
        ]
      },
      {
        "heading": "When to stop and ask",
        "paragraphs": [
          "Concrete example: a rate lock expires while a condition remains open. The mortgage support specialist opens a condition log, records loan and borrower identifier and condition and supporting document, and asks one precise question instead of filling the blank from memory. The item leaves the application, disclosure, condition, and rate-lock queue only after the mortgage operations manager accepts the next action and the evidence link is attached.",
          "The \"when to stop and ask\" control becomes fragile when the application, disclosure, condition, and rate-lock queue is measured only by completed items. The mortgage support specialist should record loan and borrower identifier and application and disclosure date, keep exceptions visible, and let the mortgage operations manager decide any commitment or scope change. The underwriter can then sample an application checklist and compare conditions cleared by owner against the work that remains open."
        ]
      },
      {
        "heading": "A short checklist before release",
        "paragraphs": [
          "Within mortgage application and underwriting support, the \"a short checklist before release\" control is only repeatable when the mortgage support specialist can show an application checklist behind each decision. Start with rate-lock expiration and terms, add condition and supporting document, and attach the source and date before the item moves. If the item involves borrower identity or authorization is unclear, hold the work in the application, disclosure, condition, and rate-lock queue and route the choice to the mortgage operations manager; the loan officer should be able to reconstruct the next step without asking the preparer.",
          "A useful test for the \"a short checklist before release\" control is whether a rate-lock record still makes sense after a week away. The mortgage support specialist records rate-lock expiration and terms and loan and borrower identifier, then checks one high-value case and one exception during the weekly review. When the item involves borrower identity or authorization is unclear, the item stays open with a named owner and a dated next action rather than being marked complete."
        ]
      },
      {
        "heading": "A note on tools and templates",
        "paragraphs": [
          "In practice, the mortgage support specialist handles the \"a note on tools and templates\" work by preparing a disclosure timing record and naming the decision boundary. Include the source and retrieval date, condition and supporting document, and the next action owner. When the item involves borrower identity or authorization is unclear, the item goes to the loan officer with the evidence already checked; the application, disclosure, condition, and rate-lock queue should show the hold, not hide it.",
          "In practice, the mortgage support specialist handles the \"a note on tools and templates\" work by preparing an application checklist and naming the decision boundary. Include the source and retrieval date, application and disclosure date, and the next action owner. When the item involves rate lock expires before closing, the item goes to the mortgage operations manager with the evidence already checked; the application, disclosure, condition, and rate-lock queue should show the hold, not hide it."
        ]
      },
      {
        "heading": "A local note for The Mortgage Assistant",
        "paragraphs": [
          "The Mortgage Assistant applies this control to mortgage application and document support for mortgage teams. The working rule is simple: the specialist keeps the record current, and the mortgage operations manager keeps the decisions that change a customer, a payment, or a schedule.",
          "For themortgageassistant.com, the first pilot should use one queue and one reviewer. Add a second workflow only after the evidence standard holds under normal volume."
        ]
      },
      {
        "heading": "Related controls",
        "paragraphs": [
          "Read [Triage Requests for mortgage application and document support Before They Reach the Queue](/blog/request-triage-standard) and [Plan Capacity for mortgage application and document support From Real Workload](/blog/capacity-plan) for the neighboring controls. Public context is available in [DOL Recordkeeping Fact Sheet](https://www.dol.gov/agencies/whd/fact-sheets/21-flsa-recordkeeping)."
        ]
      },
      {
        "heading": "What the owner should see",
        "paragraphs": [
          "Before scaling the \"what the owner should see\" workflow, make a condition log readable to someone outside the original team. It should show the request, the source, application and disclosure date, the mortgage operations manager, and the next date in one place. The underwriter reviewing the application, disclosure, condition, and rate-lock queue should see exceptions, not a clean activity count that hides unresolved work.",
          "A useful test for the \"what the owner should see\" control is whether a disclosure timing record still makes sense after a week away. The mortgage support specialist records condition and supporting document and rate-lock expiration and terms, then checks one high-value case and one exception during the weekly review. When the item involves rate lock expires before closing, the item stays open with a named owner and a dated next action rather than being marked complete."
        ]
      },
      {
        "heading": "Sources",
        "paragraphs": [
          "GAO Standards for Internal Control: https://www.gao.gov/products/gao-14-704g",
          "NIST Cybersecurity Framework: https://www.nist.gov/cyberframework",
          "SBA Manage Your Business: https://www.sba.gov/business-guide/manage-your-business"
        ]
      }
    ],
    "faq": [
      {
        "q": "What should stay with the accountable owner?",
        "a": "The condition log is useful for the \"sources\" control only if another person can audit it. The mortgage support specialist records owner and next action and loan and borrower identifier, keeps the source attached, and marks a case involving borrower identity or authorization is unclear with the owner who accepted it. Review applications with complete disclosures during the weekly check and test one recent correction against the original evidence."
      },
      {
        "q": "What is the minimum evidence?",
        "a": "Within mortgage application and underwriting support, the \"sources\" control is only repeatable when the mortgage support specialist can show a rate-lock record behind each decision. Start with loan and borrower identifier, add application and disclosure date, and attach the source and date before the item moves. If the item involves disclosure timing is at risk, hold the work in the application, disclosure, condition, and rate-lock queue and route the choice to the mortgage operations manager; the underwriter should be able to reconstruct the next step without asking the preparer."
      }
    ],
    "internalService": "/services",
    "internalSibling": "/blog/recurring-task-calendar-control",
    "source": {
      "label": "Public guidance",
      "url": "https://www.dol.gov/agencies/whd/fact-sheets/21-flsa-recordkeeping"
    }
  },
  {
    "slug": "duplicate-detection",
    "title": "Detect Duplicate Records in mortgage application and document support",
    "description": "A duplicate check for mortgage application and document support that uses two identifiers, holds both records, and leaves the merge decision with the owner.",
    "category": "Application intake",
    "publishedAt": "2026-10-26",
    "readTime": "11 min read",
    "thumbnail": "/article-thumbnails/october-26/duplicate-detection.svg",
    "sections": [
      {
        "heading": "Why this control matters",
        "paragraphs": [
          "A mortgage application and document support queue can look busy while the record that would let someone else continue is missing. This guide turns the control behind \"Detect Duplicate Records in mortgage application and document support\" into a bounded workflow with a source, a named owner, and a stop rule.",
          "It is written for mortgage teams. The specialist prepares and routes; the mortgage operations manager keeps the decisions that change a customer, a payment, a schedule, or a policy."
        ]
      },
      {
        "heading": "Start with the governing record",
        "paragraphs": [
          "Begin with the record that controls the mortgage application and document support item. At minimum, collect the primary identifier, a second identifier such as date or amount, the requester or account, the source record, the candidate match and reason, the related record reference. Record where each item came from, the version or date observed, and the field it supports.",
          "Ask what would let a new reviewer continue the \"start with the governing record\" work without a conversation. The answer is usually an application checklist with the source, version, owner, and next action. If the item involves borrower identity or authorization is unclear, the mortgage support specialist pauses the item, records the gap, and routes one question to the underwriter; do not close the item just to keep the queue moving."
        ]
      },
      {
        "heading": "Separate preparation from approval",
        "paragraphs": [
          "Within mortgage application and underwriting support, the \"separate preparation from approval\" control is only repeatable when the mortgage support specialist can show a condition log behind each decision. Start with loan and borrower identifier, add application and disclosure date, and attach the source and date before the item moves. If the item involves borrower identity or authorization is unclear, hold the work in the application, disclosure, condition, and rate-lock queue and route the choice to the mortgage operations manager; the mortgage operations manager should be able to reconstruct the next step without asking the preparer.",
          "Treat the \"separate preparation from approval\" control as an evidence problem before treating it as a speed problem. The mortgage support specialist can prepare a condition log, but the mortgage operations manager keeps the decision when the item involves borrower identity or authorization is unclear. Record files returned for missing documents with its denominator and window, then use the weekly sample to check whether the same gap keeps returning."
        ]
      },
      {
        "heading": "Where the process breaks",
        "paragraphs": [
          "Treat the \"where the process breaks\" control as an evidence problem before treating it as a speed problem. The mortgage support specialist can prepare a disclosure timing record, but the mortgage operations manager keeps the decision when the item involves rate lock expires before closing. Record applications with complete disclosures with its denominator and window, then use the weekly sample to check whether the same gap keeps returning.",
          "Before scaling the \"where the process breaks\" workflow, make a disclosure timing record readable to someone outside the original team. It should show the request, the source, owner and next action, the mortgage operations manager, and the next date in one place. The compliance reviewer reviewing the application, disclosure, condition, and rate-lock queue should see exceptions, not a clean activity count that hides unresolved work."
        ]
      },
      {
        "heading": "Build the control in four steps",
        "paragraphs": [
          "First, Match on at least two independent fields.",
          "Second, Log the candidate pair and the reason for the match.",
          "Third, Hold both records from downstream action until the owner decides.",
          "Fourth, Record the decision and keep a link to the retired record."
        ]
      },
      {
        "heading": "Write the exception path first",
        "paragraphs": [
          "Ask what would let a new reviewer continue the \"write the exception path first\" work without a conversation. The answer is usually a rate-lock record with the source, version, owner, and next action. If the item involves income or asset document conflicts, the mortgage support specialist pauses the item, records the gap, and routes one question to the compliance reviewer; do not close the item just to keep the queue moving.",
          "The \"write the exception path first\" control becomes fragile when the application, disclosure, condition, and rate-lock queue is measured only by completed items. The mortgage support specialist should record owner and next action and condition and supporting document, keep exceptions visible, and let the mortgage operations manager decide any commitment or scope change. The loan officer can then sample an application checklist and compare files returned for missing documents against the work that remains open."
        ]
      },
      {
        "heading": "Measure the queue, not the activity",
        "paragraphs": [
          "The application, disclosure, condition, and rate-lock queue in mortgage application and underwriting support usually fails at the handoff, not at the first task. For the \"measure the queue, not the activity\" section, the mortgage support specialist should capture the source, the version, the accountable mortgage operations manager, and the next review date in a condition log. If the item involves disclosure timing is at risk, route it to the compliance reviewer and keep the exception reason attached so a later reviewer can see why the normal path did not apply.",
          "Within mortgage application and underwriting support, the \"measure the queue, not the activity\" control is only repeatable when the mortgage support specialist can show an application checklist behind each decision. Start with rate-lock expiration and terms, add application and disclosure date, and attach the source and date before the item moves. If the item involves rate lock expires before closing, hold the work in the application, disclosure, condition, and rate-lock queue and route the choice to the mortgage operations manager; the underwriter should be able to reconstruct the next step without asking the preparer."
        ]
      },
      {
        "heading": "A worked example",
        "paragraphs": [
          "Ask what would let a new reviewer continue the \"a worked example\" work without a conversation. The answer is usually an application checklist with the source, version, owner, and next action. If the item involves rate lock expires before closing, the mortgage support specialist pauses the item, records the gap, and routes one question to the mortgage operations manager; do not close the item just to keep the queue moving.",
          "Before scaling the \"a worked example\" workflow, make a rate-lock record readable to someone outside the original team. It should show the request, the source, loan and borrower identifier, the mortgage operations manager, and the next date in one place. The underwriter reviewing the application, disclosure, condition, and rate-lock queue should see exceptions, not a clean activity count that hides unresolved work."
        ]
      },
      {
        "heading": "Close and hand off",
        "paragraphs": [
          "Treat the \"close and hand off\" control as an evidence problem before treating it as a speed problem. The mortgage support specialist can prepare an application checklist, but the mortgage operations manager keeps the decision when the item involves income or asset document conflicts. Record rate locks nearing expiry without review with its denominator and window, then use the weekly sample to check whether the same gap keeps returning.",
          "Concrete example: an asset statement conflicts with the application. The mortgage support specialist opens an application checklist, records rate-lock expiration and terms and owner and next action, and asks one precise question instead of filling the blank from memory. The item leaves the application, disclosure, condition, and rate-lock queue only after the mortgage operations manager accepts the next action and the evidence link is attached."
        ]
      },
      {
        "heading": "A weekly review rhythm",
        "paragraphs": [
          "Set one recurring point each week to review the mortgage application and document support queue: the oldest items, the blocked items, and one item that was corrected. Keep the meeting short and decision-focused.",
          "The control that matters for the \"a weekly review rhythm\" section is a short, reviewable record, not a longer checklist. The mortgage support specialist captures application and disclosure date and owner and next action, labels a case involving disclosure timing is at risk, and leaves the decision with the mortgage operations manager. During the weekly review, compare files returned for missing documents with the unresolved items and note which fix changed the result."
        ]
      },
      {
        "heading": "When to stop and ask",
        "paragraphs": [
          "The application, disclosure, condition, and rate-lock queue in mortgage application and underwriting support usually fails at the handoff, not at the first task. For the \"when to stop and ask\" section, the mortgage support specialist should capture the source, the version, the accountable mortgage operations manager, and the next review date in a condition log. If the item involves income or asset document conflicts, route it to the underwriter and keep the exception reason attached so a later reviewer can see why the normal path did not apply.",
          "In practice, the mortgage support specialist handles the \"when to stop and ask\" work by preparing an application checklist and naming the decision boundary. Include the source and retrieval date, loan and borrower identifier, and the next action owner. When the item involves disclosure timing is at risk, the item goes to the underwriter with the evidence already checked; the application, disclosure, condition, and rate-lock queue should show the hold, not hide it."
        ]
      },
      {
        "heading": "A short checklist before release",
        "paragraphs": [
          "The control that matters for the \"a short checklist before release\" section is a short, reviewable record, not a longer checklist. The mortgage support specialist captures owner and next action and rate-lock expiration and terms, labels a case involving disclosure timing is at risk, and leaves the decision with the mortgage operations manager. During the weekly review, compare applications with complete disclosures with the unresolved items and note which fix changed the result.",
          "The condition log is useful for the \"a short checklist before release\" control only if another person can audit it. The mortgage support specialist records loan and borrower identifier and application and disclosure date, keeps the source attached, and marks a case involving disclosure timing is at risk with the owner who accepted it. Review files returned for missing documents during the weekly check and test one recent correction against the original evidence."
        ]
      },
      {
        "heading": "A note on tools and templates",
        "paragraphs": [
          "Within mortgage application and underwriting support, the \"a note on tools and templates\" control is only repeatable when the mortgage support specialist can show an application checklist behind each decision. Start with application and disclosure date, add rate-lock expiration and terms, and attach the source and date before the item moves. If the item involves borrower identity or authorization is unclear, hold the work in the application, disclosure, condition, and rate-lock queue and route the choice to the mortgage operations manager; the underwriter should be able to reconstruct the next step without asking the preparer.",
          "Concrete example: a disclosure is sent after the timing window. The mortgage support specialist opens a disclosure timing record, records rate-lock expiration and terms and condition and supporting document, and asks one precise question instead of filling the blank from memory. The item leaves the application, disclosure, condition, and rate-lock queue only after the mortgage operations manager accepts the next action and the evidence link is attached."
        ]
      },
      {
        "heading": "A local note for The Mortgage Assistant",
        "paragraphs": [
          "The Mortgage Assistant applies this control to mortgage application and document support for mortgage teams. The working rule is simple: the specialist keeps the record current, and the mortgage operations manager keeps the decisions that change a customer, a payment, or a schedule.",
          "For themortgageassistant.com, the first pilot should use one queue and one reviewer. Add a second workflow only after the evidence standard holds under normal volume."
        ]
      },
      {
        "heading": "Related controls",
        "paragraphs": [
          "Read [Triage Requests for mortgage application and document support Before They Reach the Queue](/blog/request-triage-standard) and [Plan Capacity for mortgage application and document support From Real Workload](/blog/capacity-plan) for the neighboring controls. Public context is available in [National Archives Records Management](https://www.archives.gov/records-mgmt)."
        ]
      },
      {
        "heading": "What the owner should see",
        "paragraphs": [
          "The rate-lock record is useful for the \"what the owner should see\" control only if another person can audit it. The mortgage support specialist records rate-lock expiration and terms and application and disclosure date, keeps the source attached, and marks a case involving income or asset document conflicts with the owner who accepted it. Review conditions cleared by owner during the weekly check and test one recent correction against the original evidence.",
          "Treat the \"what the owner should see\" control as an evidence problem before treating it as a speed problem. The mortgage support specialist can prepare a condition log, but the mortgage operations manager keeps the decision when the item involves disclosure timing is at risk. Record rate locks nearing expiry without review with its denominator and window, then use the weekly sample to check whether the same gap keeps returning."
        ]
      },
      {
        "heading": "Sources",
        "paragraphs": [
          "NIST Cybersecurity Framework: https://www.nist.gov/cyberframework",
          "SBA Manage Your Business: https://www.sba.gov/business-guide/manage-your-business",
          "DOL Recordkeeping Fact Sheet: https://www.dol.gov/agencies/whd/fact-sheets/21-flsa-recordkeeping"
        ]
      }
    ],
    "faq": [
      {
        "q": "What should stay with the accountable owner?",
        "a": "The \"sources\" control becomes fragile when the application, disclosure, condition, and rate-lock queue is measured only by completed items. The mortgage support specialist should record rate-lock expiration and terms and loan and borrower identifier, keep exceptions visible, and let the mortgage operations manager decide any commitment or scope change. The underwriter can then sample a condition log and compare applications with complete disclosures against the work that remains open."
      },
      {
        "q": "What is the minimum evidence?",
        "a": "Treat the \"sources\" control as an evidence problem before treating it as a speed problem. The mortgage support specialist can prepare a disclosure timing record, but the mortgage operations manager keeps the decision when the item involves disclosure timing is at risk. Record rate locks nearing expiry without review with its denominator and window, then use the weekly sample to check whether the same gap keeps returning."
      }
    ],
    "internalService": "/services",
    "internalSibling": "/blog/duplicate-detection",
    "source": {
      "label": "Public guidance",
      "url": "https://www.archives.gov/records-mgmt"
    }
  },
  {
    "slug": "approval-threshold",
    "title": "Route mortgage application and document support Approvals by a Written Threshold",
    "description": "An approval routing rule for mortgage application and document support that publishes the threshold, captures the value, and names a backup approver.",
    "category": "Application intake",
    "publishedAt": "2026-10-26",
    "readTime": "11 min read",
    "thumbnail": "/article-thumbnails/october-26/approval-threshold.svg",
    "sections": [
      {
        "heading": "Why this control matters",
        "paragraphs": [
          "A mortgage application and document support queue can look busy while the record that would let someone else continue is missing. This guide turns the control behind \"Route mortgage application and document support Approvals by a Written Threshold\" into a bounded workflow with a source, a named owner, and a stop rule.",
          "It is written for mortgage teams. The specialist prepares and routes; the mortgage operations manager keeps the decisions that change a customer, a payment, a schedule, or a policy."
        ]
      },
      {
        "heading": "Start with the governing record",
        "paragraphs": [
          "Begin with the record that controls the mortgage application and document support item. At minimum, collect the request and value or risk, the current threshold schedule, the approver role and name, the date and time submitted, the justification, any conflict or related request. Record where each item came from, the version or date observed, and the field it supports.",
          "Before scaling the \"start with the governing record\" workflow, make a disclosure timing record readable to someone outside the original team. It should show the request, the source, owner and next action, the mortgage operations manager, and the next date in one place. The loan officer reviewing the application, disclosure, condition, and rate-lock queue should see exceptions, not a clean activity count that hides unresolved work."
        ]
      },
      {
        "heading": "Separate preparation from approval",
        "paragraphs": [
          "In practice, the mortgage support specialist handles the \"separate preparation from approval\" work by preparing a condition log and naming the decision boundary. Include the source and retrieval date, loan and borrower identifier, and the next action owner. When the item involves borrower identity or authorization is unclear, the item goes to the compliance reviewer with the evidence already checked; the application, disclosure, condition, and rate-lock queue should show the hold, not hide it.",
          "For the \"separate preparation from approval\" section, define the stopping condition before the mortgage support specialist starts the task. The disclosure timing record should show application and disclosure date, owner and next action, and the evidence that let the mortgage operations manager accept the result. If the item involves borrower identity or authorization is unclear, document the reason and route the decision to the mortgage operations manager; a reopened item needs a new dated action, not a copied closure note."
        ]
      },
      {
        "heading": "Where the process breaks",
        "paragraphs": [
          "The \"where the process breaks\" control becomes fragile when the application, disclosure, condition, and rate-lock queue is measured only by completed items. The mortgage support specialist should record owner and next action and rate-lock expiration and terms, keep exceptions visible, and let the mortgage operations manager decide any commitment or scope change. The compliance reviewer can then sample a rate-lock record and compare conditions cleared by owner against the work that remains open.",
          "For the \"where the process breaks\" section, define the stopping condition before the mortgage support specialist starts the task. The rate-lock record should show condition and supporting document, application and disclosure date, and the evidence that let the mortgage operations manager accept the result. If the item involves rate lock expires before closing, document the reason and route the decision to the mortgage operations manager; a reopened item needs a new dated action, not a copied closure note."
        ]
      },
      {
        "heading": "Build the control in four steps",
        "paragraphs": [
          "First, Publish one threshold schedule with an effective date.",
          "Second, Capture the full value and any related requests.",
          "Third, Route to a named approver and a named backup.",
          "Fourth, Record the decision, the reason, and the level applied."
        ]
      },
      {
        "heading": "Write the exception path first",
        "paragraphs": [
          "The control that matters for the \"write the exception path first\" section is a short, reviewable record, not a longer checklist. The mortgage support specialist captures rate-lock expiration and terms and application and disclosure date, labels a case involving rate lock expires before closing, and leaves the decision with the mortgage operations manager. During the weekly review, compare files returned for missing documents with the unresolved items and note which fix changed the result.",
          "Treat the \"write the exception path first\" control as an evidence problem before treating it as a speed problem. The mortgage support specialist can prepare a condition log, but the mortgage operations manager keeps the decision when the item involves disclosure timing is at risk. Record applications with complete disclosures with its denominator and window, then use the weekly sample to check whether the same gap keeps returning."
        ]
      },
      {
        "heading": "Measure the queue, not the activity",
        "paragraphs": [
          "The rate-lock record is useful for the \"measure the queue, not the activity\" control only if another person can audit it. The mortgage support specialist records loan and borrower identifier and application and disclosure date, keeps the source attached, and marks a case involving income or asset document conflicts with the owner who accepted it. Review applications with complete disclosures during the weekly check and test one recent correction against the original evidence.",
          "Ask what would let a new reviewer continue the \"measure the queue, not the activity\" work without a conversation. The answer is usually a disclosure timing record with the source, version, owner, and next action. If the item involves rate lock expires before closing, the mortgage support specialist pauses the item, records the gap, and routes one question to the loan officer; do not close the item just to keep the queue moving."
        ]
      },
      {
        "heading": "A worked example",
        "paragraphs": [
          "A useful test for the \"a worked example\" control is whether an application checklist still makes sense after a week away. The mortgage support specialist records rate-lock expiration and terms and loan and borrower identifier, then checks one high-value case and one exception during the weekly review. When the item involves rate lock expires before closing, the item stays open with a named owner and a dated next action rather than being marked complete.",
          "Treat the \"a worked example\" control as an evidence problem before treating it as a speed problem. The mortgage support specialist can prepare an application checklist, but the mortgage operations manager keeps the decision when the item involves income or asset document conflicts. Record rate locks nearing expiry without review with its denominator and window, then use the weekly sample to check whether the same gap keeps returning."
        ]
      },
      {
        "heading": "Close and hand off",
        "paragraphs": [
          "Ask what would let a new reviewer continue the \"close and hand off\" work without a conversation. The answer is usually an application checklist with the source, version, owner, and next action. If the item involves disclosure timing is at risk, the mortgage support specialist pauses the item, records the gap, and routes one question to the underwriter; do not close the item just to keep the queue moving.",
          "For the \"close and hand off\" section, define the stopping condition before the mortgage support specialist starts the task. The application checklist should show condition and supporting document, rate-lock expiration and terms, and the evidence that let the mortgage operations manager accept the result. If the item involves income or asset document conflicts, document the reason and route the decision to the mortgage operations manager; a reopened item needs a new dated action, not a copied closure note."
        ]
      },
      {
        "heading": "A weekly review rhythm",
        "paragraphs": [
          "Set one recurring point each week to review the mortgage application and document support queue: the oldest items, the blocked items, and one item that was corrected. Keep the meeting short and decision-focused.",
          "Treat the \"a weekly review rhythm\" control as an evidence problem before treating it as a speed problem. The mortgage support specialist can prepare a condition log, but the mortgage operations manager keeps the decision when the item involves rate lock expires before closing. Record applications with complete disclosures with its denominator and window, then use the weekly sample to check whether the same gap keeps returning."
        ]
      },
      {
        "heading": "When to stop and ask",
        "paragraphs": [
          "Within mortgage application and underwriting support, the \"when to stop and ask\" control is only repeatable when the mortgage support specialist can show a condition log behind each decision. Start with loan and borrower identifier, add owner and next action, and attach the source and date before the item moves. If the item involves borrower identity or authorization is unclear, hold the work in the application, disclosure, condition, and rate-lock queue and route the choice to the mortgage operations manager; the loan officer should be able to reconstruct the next step without asking the preparer.",
          "Treat the \"when to stop and ask\" control as an evidence problem before treating it as a speed problem. The mortgage support specialist can prepare a disclosure timing record, but the mortgage operations manager keeps the decision when the item involves borrower identity or authorization is unclear. Record rate locks nearing expiry without review with its denominator and window, then use the weekly sample to check whether the same gap keeps returning."
        ]
      },
      {
        "heading": "A short checklist before release",
        "paragraphs": [
          "A useful test for the \"a short checklist before release\" control is whether a condition log still makes sense after a week away. The mortgage support specialist records condition and supporting document and rate-lock expiration and terms, then checks one high-value case and one exception during the weekly review. When the item involves disclosure timing is at risk, the item stays open with a named owner and a dated next action rather than being marked complete.",
          "Ask what would let a new reviewer continue the \"a short checklist before release\" work without a conversation. The answer is usually a rate-lock record with the source, version, owner, and next action. If the item involves disclosure timing is at risk, the mortgage support specialist pauses the item, records the gap, and routes one question to the mortgage operations manager; do not close the item just to keep the queue moving."
        ]
      },
      {
        "heading": "A note on tools and templates",
        "paragraphs": [
          "For the \"a note on tools and templates\" section, define the stopping condition before the mortgage support specialist starts the task. The disclosure timing record should show owner and next action, loan and borrower identifier, and the evidence that let the mortgage operations manager accept the result. If the item involves rate lock expires before closing, document the reason and route the decision to the loan officer; a reopened item needs a new dated action, not a copied closure note.",
          "Ask what would let a new reviewer continue the \"a note on tools and templates\" work without a conversation. The answer is usually an application checklist with the source, version, owner, and next action. If the item involves disclosure timing is at risk, the mortgage support specialist pauses the item, records the gap, and routes one question to the loan officer; do not close the item just to keep the queue moving."
        ]
      },
      {
        "heading": "A local note for The Mortgage Assistant",
        "paragraphs": [
          "The Mortgage Assistant applies this control to mortgage application and document support for mortgage teams. The working rule is simple: the specialist keeps the record current, and the mortgage operations manager keeps the decisions that change a customer, a payment, or a schedule.",
          "For themortgageassistant.com, the first pilot should use one queue and one reviewer. Add a second workflow only after the evidence standard holds under normal volume."
        ]
      },
      {
        "heading": "Related controls",
        "paragraphs": [
          "Read [Triage Requests for mortgage application and document support Before They Reach the Queue](/blog/request-triage-standard) and [Plan Capacity for mortgage application and document support From Real Workload](/blog/capacity-plan) for the neighboring controls. Public context is available in [GAO Standards for Internal Control](https://www.gao.gov/products/gao-14-704g)."
        ]
      },
      {
        "heading": "What the owner should see",
        "paragraphs": [
          "In practice, the mortgage support specialist handles the \"what the owner should see\" work by preparing a disclosure timing record and naming the decision boundary. Include the source and retrieval date, rate-lock expiration and terms, and the next action owner. When the item involves borrower identity or authorization is unclear, the item goes to the mortgage operations manager with the evidence already checked; the application, disclosure, condition, and rate-lock queue should show the hold, not hide it.",
          "Treat the \"what the owner should see\" control as an evidence problem before treating it as a speed problem. The mortgage support specialist can prepare a condition log, but the mortgage operations manager keeps the decision when the item involves borrower identity or authorization is unclear. Record files returned for missing documents with its denominator and window, then use the weekly sample to check whether the same gap keeps returning."
        ]
      },
      {
        "heading": "Sources",
        "paragraphs": [
          "SBA Manage Your Business: https://www.sba.gov/business-guide/manage-your-business",
          "DOL Recordkeeping Fact Sheet: https://www.dol.gov/agencies/whd/fact-sheets/21-flsa-recordkeeping",
          "National Archives Records Management: https://www.archives.gov/records-mgmt"
        ]
      }
    ],
    "faq": [
      {
        "q": "What should stay with the accountable owner?",
        "a": "The control that matters for the \"sources\" section is a short, reviewable record, not a longer checklist. The mortgage support specialist captures owner and next action and rate-lock expiration and terms, labels a case involving disclosure timing is at risk, and leaves the decision with the mortgage operations manager. During the weekly review, compare applications with complete disclosures with the unresolved items and note which fix changed the result."
      },
      {
        "q": "What is the minimum evidence?",
        "a": "Ask what would let a new reviewer continue the \"sources\" work without a conversation. The answer is usually an application checklist with the source, version, owner, and next action. If the item involves income or asset document conflicts, the mortgage support specialist pauses the item, records the gap, and routes one question to the loan officer; do not close the item just to keep the queue moving."
      }
    ],
    "internalService": "/services",
    "internalSibling": "/blog/approval-threshold",
    "source": {
      "label": "Public guidance",
      "url": "https://www.gao.gov/products/gao-14-704g"
    }
  },
  {
    "slug": "decision-log",
    "title": "Keep a mortgage application and document support Decision Log People Can Use",
    "description": "A decision log for mortgage application and document support that records the options, evidence, owner, rationale, and what the decision supersedes.",
    "category": "Application intake",
    "publishedAt": "2026-10-26",
    "readTime": "11 min read",
    "thumbnail": "/article-thumbnails/october-26/decision-log.svg",
    "sections": [
      {
        "heading": "Why this control matters",
        "paragraphs": [
          "A mortgage application and document support queue can look busy while the record that would let someone else continue is missing. This guide turns the control behind \"Keep a mortgage application and document support Decision Log People Can Use\" into a bounded workflow with a source, a named owner, and a stop rule.",
          "It is written for mortgage teams. The specialist prepares and routes; the mortgage operations manager keeps the decisions that change a customer, a payment, a schedule, or a policy."
        ]
      },
      {
        "heading": "Start with the governing record",
        "paragraphs": [
          "Begin with the record that controls the mortgage application and document support item. At minimum, collect the decision and date, the owner who decided, the options considered, the evidence used, the rationale, the work or record affected. Record where each item came from, the version or date observed, and the field it supports.",
          "Within mortgage application and underwriting support, the \"start with the governing record\" control is only repeatable when the mortgage support specialist can show an application checklist behind each decision. Start with rate-lock expiration and terms, add condition and supporting document, and attach the source and date before the item moves. If the item involves borrower identity or authorization is unclear, hold the work in the application, disclosure, condition, and rate-lock queue and route the choice to the mortgage operations manager; the mortgage operations manager should be able to reconstruct the next step without asking the preparer."
        ]
      },
      {
        "heading": "Separate preparation from approval",
        "paragraphs": [
          "Ask what would let a new reviewer continue the \"separate preparation from approval\" work without a conversation. The answer is usually a rate-lock record with the source, version, owner, and next action. If the item involves disclosure timing is at risk, the mortgage support specialist pauses the item, records the gap, and routes one question to the mortgage operations manager; do not close the item just to keep the queue moving.",
          "A useful test for the \"separate preparation from approval\" control is whether a rate-lock record still makes sense after a week away. The mortgage support specialist records application and disclosure date and condition and supporting document, then checks one high-value case and one exception during the weekly review. When the item involves borrower identity or authorization is unclear, the item stays open with a named owner and a dated next action rather than being marked complete."
        ]
      },
      {
        "heading": "Where the process breaks",
        "paragraphs": [
          "Within mortgage application and underwriting support, the \"where the process breaks\" control is only repeatable when the mortgage support specialist can show a condition log behind each decision. Start with loan and borrower identifier, add rate-lock expiration and terms, and attach the source and date before the item moves. If the item involves borrower identity or authorization is unclear, hold the work in the application, disclosure, condition, and rate-lock queue and route the choice to the mortgage operations manager; the compliance reviewer should be able to reconstruct the next step without asking the preparer.",
          "A useful test for the \"where the process breaks\" control is whether a rate-lock record still makes sense after a week away. The mortgage support specialist records owner and next action and loan and borrower identifier, then checks one high-value case and one exception during the weekly review. When the item involves rate lock expires before closing, the item stays open with a named owner and a dated next action rather than being marked complete."
        ]
      },
      {
        "heading": "Build the control in four steps",
        "paragraphs": [
          "First, Log each decision once with a stable key.",
          "Second, Link the evidence and the affected record.",
          "Third, Write the rationale in one or two sentences.",
          "Fourth, Mark superseded decisions and link the replacement."
        ]
      },
      {
        "heading": "Write the exception path first",
        "paragraphs": [
          "Ask what would let a new reviewer continue the \"write the exception path first\" work without a conversation. The answer is usually a condition log with the source, version, owner, and next action. If the item involves income or asset document conflicts, the mortgage support specialist pauses the item, records the gap, and routes one question to the compliance reviewer; do not close the item just to keep the queue moving.",
          "The control that matters for the \"write the exception path first\" section is a short, reviewable record, not a longer checklist. The mortgage support specialist captures loan and borrower identifier and owner and next action, labels a case involving borrower identity or authorization is unclear, and leaves the decision with the mortgage operations manager. During the weekly review, compare rate locks nearing expiry without review with the unresolved items and note which fix changed the result."
        ]
      },
      {
        "heading": "Measure the queue, not the activity",
        "paragraphs": [
          "Within mortgage application and underwriting support, the \"measure the queue, not the activity\" control is only repeatable when the mortgage support specialist can show a condition log behind each decision. Start with application and disclosure date, add owner and next action, and attach the source and date before the item moves. If the item involves borrower identity or authorization is unclear, hold the work in the application, disclosure, condition, and rate-lock queue and route the choice to the mortgage operations manager; the underwriter should be able to reconstruct the next step without asking the preparer.",
          "Ask what would let a new reviewer continue the \"measure the queue, not the activity\" work without a conversation. The answer is usually a disclosure timing record with the source, version, owner, and next action. If the item involves borrower identity or authorization is unclear, the mortgage support specialist pauses the item, records the gap, and routes one question to the loan officer; do not close the item just to keep the queue moving."
        ]
      },
      {
        "heading": "A worked example",
        "paragraphs": [
          "The control that matters for the \"a worked example\" section is a short, reviewable record, not a longer checklist. The mortgage support specialist captures rate-lock expiration and terms and condition and supporting document, labels a case involving disclosure timing is at risk, and leaves the decision with the mortgage operations manager. During the weekly review, compare applications with complete disclosures with the unresolved items and note which fix changed the result.",
          "The control that matters for the \"a worked example\" section is a short, reviewable record, not a longer checklist. The mortgage support specialist captures condition and supporting document and rate-lock expiration and terms, labels a case involving income or asset document conflicts, and leaves the decision with the mortgage operations manager. During the weekly review, compare files returned for missing documents with the unresolved items and note which fix changed the result."
        ]
      },
      {
        "heading": "Close and hand off",
        "paragraphs": [
          "Ask what would let a new reviewer continue the \"close and hand off\" work without a conversation. The answer is usually an application checklist with the source, version, owner, and next action. If the item involves income or asset document conflicts, the mortgage support specialist pauses the item, records the gap, and routes one question to the compliance reviewer; do not close the item just to keep the queue moving.",
          "Ask what would let a new reviewer continue the \"close and hand off\" work without a conversation. The answer is usually an application checklist with the source, version, owner, and next action. If the item involves borrower identity or authorization is unclear, the mortgage support specialist pauses the item, records the gap, and routes one question to the loan officer; do not close the item just to keep the queue moving."
        ]
      },
      {
        "heading": "A weekly review rhythm",
        "paragraphs": [
          "Set one recurring point each week to review the mortgage application and document support queue: the oldest items, the blocked items, and one item that was corrected. Keep the meeting short and decision-focused.",
          "The \"a weekly review rhythm\" control becomes fragile when the application, disclosure, condition, and rate-lock queue is measured only by completed items. The mortgage support specialist should record loan and borrower identifier and application and disclosure date, keep exceptions visible, and let the mortgage operations manager decide any commitment or scope change. The underwriter can then sample a condition log and compare conditions cleared by owner against the work that remains open."
        ]
      },
      {
        "heading": "When to stop and ask",
        "paragraphs": [
          "The application, disclosure, condition, and rate-lock queue in mortgage application and underwriting support usually fails at the handoff, not at the first task. For the \"when to stop and ask\" section, the mortgage support specialist should capture the source, the version, the accountable mortgage operations manager, and the next review date in a rate-lock record. If the item involves borrower identity or authorization is unclear, route it to the loan officer and keep the exception reason attached so a later reviewer can see why the normal path did not apply.",
          "For the \"when to stop and ask\" section, define the stopping condition before the mortgage support specialist starts the task. The rate-lock record should show loan and borrower identifier, rate-lock expiration and terms, and the evidence that let the mortgage operations manager accept the result. If the item involves disclosure timing is at risk, document the reason and route the decision to the loan officer; a reopened item needs a new dated action, not a copied closure note."
        ]
      },
      {
        "heading": "A short checklist before release",
        "paragraphs": [
          "In practice, the mortgage support specialist handles the \"a short checklist before release\" work by preparing an application checklist and naming the decision boundary. Include the source and retrieval date, application and disclosure date, and the next action owner. When the item involves borrower identity or authorization is unclear, the item goes to the loan officer with the evidence already checked; the application, disclosure, condition, and rate-lock queue should show the hold, not hide it.",
          "In practice, the mortgage support specialist handles the \"a short checklist before release\" work by preparing an application checklist and naming the decision boundary. Include the source and retrieval date, loan and borrower identifier, and the next action owner. When the item involves disclosure timing is at risk, the item goes to the compliance reviewer with the evidence already checked; the application, disclosure, condition, and rate-lock queue should show the hold, not hide it."
        ]
      },
      {
        "heading": "A note on tools and templates",
        "paragraphs": [
          "A useful test for the \"a note on tools and templates\" control is whether a condition log still makes sense after a week away. The mortgage support specialist records rate-lock expiration and terms and owner and next action, then checks one high-value case and one exception during the weekly review. When the item involves disclosure timing is at risk, the item stays open with a named owner and a dated next action rather than being marked complete.",
          "Before scaling the \"a note on tools and templates\" workflow, make a condition log readable to someone outside the original team. It should show the request, the source, application and disclosure date, the mortgage operations manager, and the next date in one place. The loan officer reviewing the application, disclosure, condition, and rate-lock queue should see exceptions, not a clean activity count that hides unresolved work."
        ]
      },
      {
        "heading": "A local note for The Mortgage Assistant",
        "paragraphs": [
          "The Mortgage Assistant applies this control to mortgage application and document support for mortgage teams. The working rule is simple: the specialist keeps the record current, and the mortgage operations manager keeps the decisions that change a customer, a payment, or a schedule.",
          "For themortgageassistant.com, the first pilot should use one queue and one reviewer. Add a second workflow only after the evidence standard holds under normal volume."
        ]
      },
      {
        "heading": "Related controls",
        "paragraphs": [
          "Read [Triage Requests for mortgage application and document support Before They Reach the Queue](/blog/request-triage-standard) and [Plan Capacity for mortgage application and document support From Real Workload](/blog/capacity-plan) for the neighboring controls. Public context is available in [NIST Cybersecurity Framework](https://www.nist.gov/cyberframework)."
        ]
      },
      {
        "heading": "What the owner should see",
        "paragraphs": [
          "The control that matters for the \"what the owner should see\" section is a short, reviewable record, not a longer checklist. The mortgage support specialist captures owner and next action and rate-lock expiration and terms, labels a case involving disclosure timing is at risk, and leaves the decision with the mortgage operations manager. During the weekly review, compare rate locks nearing expiry without review with the unresolved items and note which fix changed the result.",
          "Treat the \"what the owner should see\" control as an evidence problem before treating it as a speed problem. The mortgage support specialist can prepare a rate-lock record, but the mortgage operations manager keeps the decision when the item involves borrower identity or authorization is unclear. Record conditions cleared by owner with its denominator and window, then use the weekly sample to check whether the same gap keeps returning."
        ]
      },
      {
        "heading": "Sources",
        "paragraphs": [
          "DOL Recordkeeping Fact Sheet: https://www.dol.gov/agencies/whd/fact-sheets/21-flsa-recordkeeping",
          "National Archives Records Management: https://www.archives.gov/records-mgmt",
          "GAO Standards for Internal Control: https://www.gao.gov/products/gao-14-704g"
        ]
      }
    ],
    "faq": [
      {
        "q": "What should stay with the accountable owner?",
        "a": "In practice, the mortgage support specialist handles the \"sources\" work by preparing a rate-lock record and naming the decision boundary. Include the source and retrieval date, owner and next action, and the next action owner. When the item involves borrower identity or authorization is unclear, the item goes to the mortgage operations manager with the evidence already checked; the application, disclosure, condition, and rate-lock queue should show the hold, not hide it."
      },
      {
        "q": "What is the minimum evidence?",
        "a": "In practice, the mortgage support specialist handles the \"sources\" work by preparing a condition log and naming the decision boundary. Include the source and retrieval date, application and disclosure date, and the next action owner. When the item involves rate lock expires before closing, the item goes to the mortgage operations manager with the evidence already checked; the application, disclosure, condition, and rate-lock queue should show the hold, not hide it."
      }
    ],
    "internalService": "/services",
    "internalSibling": "/blog/decision-log",
    "source": {
      "label": "Public guidance",
      "url": "https://www.nist.gov/cyberframework"
    }
  },
  {
    "slug": "change-communication",
    "title": "Announce Process Changes in mortgage application and document support Before They Bite",
    "description": "A change communication pack for mortgage application and document support that names the effective date, affected roles, training, and rollback.",
    "category": "Application intake",
    "publishedAt": "2026-10-26",
    "readTime": "11 min read",
    "thumbnail": "/article-thumbnails/october-26/change-communication.svg",
    "sections": [
      {
        "heading": "Why this control matters",
        "paragraphs": [
          "A mortgage application and document support queue can look busy while the record that would let someone else continue is missing. This guide turns the control behind \"Announce Process Changes in mortgage application and document support Before They Bite\" into a bounded workflow with a source, a named owner, and a stop rule.",
          "It is written for mortgage teams. The specialist prepares and routes; the mortgage operations manager keeps the decisions that change a customer, a payment, a schedule, or a policy."
        ]
      },
      {
        "heading": "Start with the governing record",
        "paragraphs": [
          "Begin with the record that controls the mortgage application and document support item. At minimum, collect the change and its reason, the effective date and time zone, the affected roles and systems, the old and new steps, the training or job aid, the rollback condition. Record where each item came from, the version or date observed, and the field it supports.",
          "Concrete example: a rate lock expires while a condition remains open. The mortgage support specialist opens a condition log, records owner and next action and application and disclosure date, and asks one precise question instead of filling the blank from memory. The item leaves the application, disclosure, condition, and rate-lock queue only after the mortgage operations manager accepts the next action and the evidence link is attached."
        ]
      },
      {
        "heading": "Separate preparation from approval",
        "paragraphs": [
          "Treat the \"separate preparation from approval\" control as an evidence problem before treating it as a speed problem. The mortgage support specialist can prepare a condition log, but the mortgage operations manager keeps the decision when the item involves rate lock expires before closing. Record files returned for missing documents with its denominator and window, then use the weekly sample to check whether the same gap keeps returning.",
          "The application, disclosure, condition, and rate-lock queue in mortgage application and underwriting support usually fails at the handoff, not at the first task. For the \"separate preparation from approval\" section, the mortgage support specialist should capture the source, the version, the accountable mortgage operations manager, and the next review date in a disclosure timing record. If the item involves rate lock expires before closing, route it to the compliance reviewer and keep the exception reason attached so a later reviewer can see why the normal path did not apply."
        ]
      },
      {
        "heading": "Where the process breaks",
        "paragraphs": [
          "In practice, the mortgage support specialist handles the \"where the process breaks\" work by preparing a condition log and naming the decision boundary. Include the source and retrieval date, rate-lock expiration and terms, and the next action owner. When the item involves borrower identity or authorization is unclear, the item goes to the compliance reviewer with the evidence already checked; the application, disclosure, condition, and rate-lock queue should show the hold, not hide it.",
          "Concrete example: an asset statement conflicts with the application. The mortgage support specialist opens an application checklist, records rate-lock expiration and terms and application and disclosure date, and asks one precise question instead of filling the blank from memory. The item leaves the application, disclosure, condition, and rate-lock queue only after the mortgage operations manager accepts the next action and the evidence link is attached."
        ]
      },
      {
        "heading": "Build the control in four steps",
        "paragraphs": [
          "A useful test for the \"build the control in four steps\" control is whether a disclosure timing record still makes sense after a week away. The mortgage support specialist records loan and borrower identifier and owner and next action, then checks one high-value case and one exception during the weekly review. When the item involves rate lock expires before closing, the item stays open with a named owner and a dated next action rather than being marked complete.",
          "Second, List every affected role and send to a named recipient.",
          "Third, Schedule training or a job aid before the effective date.",
          "Fourth, Define the rollback trigger and the person who can call it."
        ]
      },
      {
        "heading": "Write the exception path first",
        "paragraphs": [
          "The control that matters for the \"write the exception path first\" section is a short, reviewable record, not a longer checklist. The mortgage support specialist captures application and disclosure date and owner and next action, labels a case involving disclosure timing is at risk, and leaves the decision with the mortgage operations manager. During the weekly review, compare applications with complete disclosures with the unresolved items and note which fix changed the result.",
          "The application, disclosure, condition, and rate-lock queue in mortgage application and underwriting support usually fails at the handoff, not at the first task. For the \"write the exception path first\" section, the mortgage support specialist should capture the source, the version, the accountable mortgage operations manager, and the next review date in a rate-lock record. If the item involves rate lock expires before closing, route it to the loan officer and keep the exception reason attached so a later reviewer can see why the normal path did not apply."
        ]
      },
      {
        "heading": "Measure the queue, not the activity",
        "paragraphs": [
          "Before scaling the \"measure the queue, not the activity\" workflow, make a condition log readable to someone outside the original team. It should show the request, the source, condition and supporting document, the mortgage operations manager, and the next date in one place. The underwriter reviewing the application, disclosure, condition, and rate-lock queue should see exceptions, not a clean activity count that hides unresolved work.",
          "A useful test for the \"measure the queue, not the activity\" control is whether an application checklist still makes sense after a week away. The mortgage support specialist records condition and supporting document and rate-lock expiration and terms, then checks one high-value case and one exception during the weekly review. When the item involves disclosure timing is at risk, the item stays open with a named owner and a dated next action rather than being marked complete."
        ]
      },
      {
        "heading": "A worked example",
        "paragraphs": [
          "A useful test for the \"a worked example\" control is whether a rate-lock record still makes sense after a week away. The mortgage support specialist records owner and next action and application and disclosure date, then checks one high-value case and one exception during the weekly review. When the item involves rate lock expires before closing, the item stays open with a named owner and a dated next action rather than being marked complete.",
          "The control that matters for the \"a worked example\" section is a short, reviewable record, not a longer checklist. The mortgage support specialist captures loan and borrower identifier and application and disclosure date, labels a case involving rate lock expires before closing, and leaves the decision with the mortgage operations manager. During the weekly review, compare applications with complete disclosures with the unresolved items and note which fix changed the result."
        ]
      },
      {
        "heading": "Close and hand off",
        "paragraphs": [
          "The \"close and hand off\" control becomes fragile when the application, disclosure, condition, and rate-lock queue is measured only by completed items. The mortgage support specialist should record application and disclosure date and rate-lock expiration and terms, keep exceptions visible, and let the mortgage operations manager decide any commitment or scope change. The mortgage operations manager can then sample a rate-lock record and compare rate locks nearing expiry without review against the work that remains open.",
          "The application, disclosure, condition, and rate-lock queue in mortgage application and underwriting support usually fails at the handoff, not at the first task. For the \"close and hand off\" section, the mortgage support specialist should capture the source, the version, the accountable mortgage operations manager, and the next review date in a rate-lock record. If the item involves borrower identity or authorization is unclear, route it to the loan officer and keep the exception reason attached so a later reviewer can see why the normal path did not apply."
        ]
      },
      {
        "heading": "A weekly review rhythm",
        "paragraphs": [
          "Set one recurring point each week to review the mortgage application and document support queue: the oldest items, the blocked items, and one item that was corrected. Keep the meeting short and decision-focused.",
          "Concrete example: an asset statement conflicts with the application. The mortgage support specialist opens an application checklist, records loan and borrower identifier and application and disclosure date, and asks one precise question instead of filling the blank from memory. The item leaves the application, disclosure, condition, and rate-lock queue only after the mortgage operations manager accepts the next action and the evidence link is attached."
        ]
      },
      {
        "heading": "When to stop and ask",
        "paragraphs": [
          "Before scaling the \"when to stop and ask\" workflow, make an application checklist readable to someone outside the original team. It should show the request, the source, condition and supporting document, the mortgage operations manager, and the next date in one place. The mortgage operations manager reviewing the application, disclosure, condition, and rate-lock queue should see exceptions, not a clean activity count that hides unresolved work.",
          "The \"when to stop and ask\" control becomes fragile when the application, disclosure, condition, and rate-lock queue is measured only by completed items. The mortgage support specialist should record rate-lock expiration and terms and condition and supporting document, keep exceptions visible, and let the mortgage operations manager decide any commitment or scope change. The compliance reviewer can then sample an application checklist and compare applications with complete disclosures against the work that remains open."
        ]
      },
      {
        "heading": "A short checklist before release",
        "paragraphs": [
          "Before scaling the \"a short checklist before release\" workflow, make a rate-lock record readable to someone outside the original team. It should show the request, the source, owner and next action, the mortgage operations manager, and the next date in one place. The compliance reviewer reviewing the application, disclosure, condition, and rate-lock queue should see exceptions, not a clean activity count that hides unresolved work.",
          "Treat the \"a short checklist before release\" control as an evidence problem before treating it as a speed problem. The mortgage support specialist can prepare a rate-lock record, but the mortgage operations manager keeps the decision when the item involves borrower identity or authorization is unclear. Record conditions cleared by owner with its denominator and window, then use the weekly sample to check whether the same gap keeps returning."
        ]
      },
      {
        "heading": "A note on tools and templates",
        "paragraphs": [
          "A useful test for the \"a note on tools and templates\" control is whether a rate-lock record still makes sense after a week away. The mortgage support specialist records loan and borrower identifier and condition and supporting document, then checks one high-value case and one exception during the weekly review. When the item involves income or asset document conflicts, the item stays open with a named owner and a dated next action rather than being marked complete.",
          "In practice, the mortgage support specialist handles the \"a note on tools and templates\" work by preparing a condition log and naming the decision boundary. Include the source and retrieval date, owner and next action, and the next action owner. When the item involves borrower identity or authorization is unclear, the item goes to the mortgage operations manager with the evidence already checked; the application, disclosure, condition, and rate-lock queue should show the hold, not hide it."
        ]
      },
      {
        "heading": "A local note for The Mortgage Assistant",
        "paragraphs": [
          "The Mortgage Assistant applies this control to mortgage application and document support for mortgage teams. The working rule is simple: the specialist keeps the record current, and the mortgage operations manager keeps the decisions that change a customer, a payment, or a schedule.",
          "For themortgageassistant.com, the first pilot should use one queue and one reviewer. Add a second workflow only after the evidence standard holds under normal volume."
        ]
      },
      {
        "heading": "Related controls",
        "paragraphs": [
          "Read [Triage Requests for mortgage application and document support Before They Reach the Queue](/blog/request-triage-standard) and [Plan Capacity for mortgage application and document support From Real Workload](/blog/capacity-plan) for the neighboring controls. Public context is available in [SBA Manage Your Business](https://www.sba.gov/business-guide/manage-your-business)."
        ]
      },
      {
        "heading": "What the owner should see",
        "paragraphs": [
          "In practice, the mortgage support specialist handles the \"what the owner should see\" work by preparing a disclosure timing record and naming the decision boundary. Include the source and retrieval date, application and disclosure date, and the next action owner. When the item involves borrower identity or authorization is unclear, the item goes to the compliance reviewer with the evidence already checked; the application, disclosure, condition, and rate-lock queue should show the hold, not hide it.",
          "Ask what would let a new reviewer continue the \"what the owner should see\" work without a conversation. The answer is usually a condition log with the source, version, owner, and next action. If the item involves income or asset document conflicts, the mortgage support specialist pauses the item, records the gap, and routes one question to the loan officer; do not close the item just to keep the queue moving."
        ]
      },
      {
        "heading": "Sources",
        "paragraphs": [
          "National Archives Records Management: https://www.archives.gov/records-mgmt",
          "GAO Standards for Internal Control: https://www.gao.gov/products/gao-14-704g",
          "NIST Cybersecurity Framework: https://www.nist.gov/cyberframework"
        ]
      }
    ],
    "faq": [
      {
        "q": "What should stay with the accountable owner?",
        "a": "Ask what would let a new reviewer continue the \"sources\" work without a conversation. The answer is usually an application checklist with the source, version, owner, and next action. If the item involves rate lock expires before closing, the mortgage support specialist pauses the item, records the gap, and routes one question to the loan officer; do not close the item just to keep the queue moving."
      },
      {
        "q": "What is the minimum evidence?",
        "a": "The \"sources\" control becomes fragile when the application, disclosure, condition, and rate-lock queue is measured only by completed items. The mortgage support specialist should record condition and supporting document and rate-lock expiration and terms, keep exceptions visible, and let the mortgage operations manager decide any commitment or scope change. The compliance reviewer can then sample an application checklist and compare files returned for missing documents against the work that remains open."
      }
    ],
    "internalService": "/services",
    "internalSibling": "/blog/change-communication",
    "source": {
      "label": "Public guidance",
      "url": "https://www.sba.gov/business-guide/manage-your-business"
    }
  },
  {
    "slug": "knowledge-refresh",
    "title": "Refresh Work Instructions for mortgage application and document support on a Schedule",
    "description": "A work-instruction refresh cycle for mortgage application and document support that assigns an owner, checks the source version, and confirms readers saw the update.",
    "category": "Application intake",
    "publishedAt": "2026-10-26",
    "readTime": "11 min read",
    "thumbnail": "/article-thumbnails/october-26/knowledge-refresh.svg",
    "sections": [
      {
        "heading": "Why this control matters",
        "paragraphs": [
          "A mortgage application and document support queue can look busy while the record that would let someone else continue is missing. This guide turns the control behind \"Refresh Work Instructions for mortgage application and document support on a Schedule\" into a bounded workflow with a source, a named owner, and a stop rule.",
          "It is written for mortgage teams. The specialist prepares and routes; the mortgage operations manager keeps the decisions that change a customer, a payment, a schedule, or a policy."
        ]
      },
      {
        "heading": "Start with the governing record",
        "paragraphs": [
          "Begin with the record that controls the mortgage application and document support item. At minimum, collect the instruction and version, the document owner, the last review date, the source or policy it depends on, the change trigger, the reader list. Record where each item came from, the version or date observed, and the field it supports.",
          "The control that matters for the \"start with the governing record\" section is a short, reviewable record, not a longer checklist. The mortgage support specialist captures application and disclosure date and rate-lock expiration and terms, labels a case involving rate lock expires before closing, and leaves the decision with the mortgage operations manager. During the weekly review, compare applications with complete disclosures with the unresolved items and note which fix changed the result."
        ]
      },
      {
        "heading": "Separate preparation from approval",
        "paragraphs": [
          "The \"separate preparation from approval\" control becomes fragile when the application, disclosure, condition, and rate-lock queue is measured only by completed items. The mortgage support specialist should record application and disclosure date and condition and supporting document, keep exceptions visible, and let the mortgage operations manager decide any commitment or scope change. The compliance reviewer can then sample an application checklist and compare conditions cleared by owner against the work that remains open.",
          "The \"separate preparation from approval\" control becomes fragile when the application, disclosure, condition, and rate-lock queue is measured only by completed items. The mortgage support specialist should record application and disclosure date and condition and supporting document, keep exceptions visible, and let the mortgage operations manager decide any commitment or scope change. The mortgage operations manager can then sample an application checklist and compare files returned for missing documents against the work that remains open."
        ]
      },
      {
        "heading": "Where the process breaks",
        "paragraphs": [
          "The control that matters for the \"where the process breaks\" section is a short, reviewable record, not a longer checklist. The mortgage support specialist captures application and disclosure date and condition and supporting document, labels a case involving income or asset document conflicts, and leaves the decision with the mortgage operations manager. During the weekly review, compare files returned for missing documents with the unresolved items and note which fix changed the result.",
          "Ask what would let a new reviewer continue the \"where the process breaks\" work without a conversation. The answer is usually a rate-lock record with the source, version, owner, and next action. If the item involves rate lock expires before closing, the mortgage support specialist pauses the item, records the gap, and routes one question to the loan officer; do not close the item just to keep the queue moving."
        ]
      },
      {
        "heading": "Build the control in four steps",
        "paragraphs": [
          "First, Assign one owner and one backup to each instruction.",
          "Second, Set a review date and a trigger list such as a system or policy change.",
          "Third, Keep a version log with the changed section and date.",
          "Fourth, Require a short acknowledgment from each reader."
        ]
      },
      {
        "heading": "Write the exception path first",
        "paragraphs": [
          "The application checklist is useful for the \"write the exception path first\" control only if another person can audit it. The mortgage support specialist records rate-lock expiration and terms and owner and next action, keeps the source attached, and marks a case involving borrower identity or authorization is unclear with the owner who accepted it. Review rate locks nearing expiry without review during the weekly check and test one recent correction against the original evidence.",
          "The disclosure timing record is useful for the \"write the exception path first\" control only if another person can audit it. The mortgage support specialist records owner and next action and condition and supporting document, keeps the source attached, and marks a case involving disclosure timing is at risk with the owner who accepted it. Review applications with complete disclosures during the weekly check and test one recent correction against the original evidence."
        ]
      },
      {
        "heading": "Measure the queue, not the activity",
        "paragraphs": [
          "The control that matters for the \"measure the queue, not the activity\" section is a short, reviewable record, not a longer checklist. The mortgage support specialist captures application and disclosure date and rate-lock expiration and terms, labels a case involving income or asset document conflicts, and leaves the decision with the mortgage operations manager. During the weekly review, compare conditions cleared by owner with the unresolved items and note which fix changed the result.",
          "Before scaling the \"measure the queue, not the activity\" workflow, make a condition log readable to someone outside the original team. It should show the request, the source, loan and borrower identifier, the mortgage operations manager, and the next date in one place. The underwriter reviewing the application, disclosure, condition, and rate-lock queue should see exceptions, not a clean activity count that hides unresolved work."
        ]
      },
      {
        "heading": "A worked example",
        "paragraphs": [
          "Treat the \"a worked example\" control as an evidence problem before treating it as a speed problem. The mortgage support specialist can prepare a disclosure timing record, but the mortgage operations manager keeps the decision when the item involves rate lock expires before closing. Record conditions cleared by owner with its denominator and window, then use the weekly sample to check whether the same gap keeps returning.",
          "Ask what would let a new reviewer continue the \"a worked example\" work without a conversation. The answer is usually an application checklist with the source, version, owner, and next action. If the item involves borrower identity or authorization is unclear, the mortgage support specialist pauses the item, records the gap, and routes one question to the mortgage operations manager; do not close the item just to keep the queue moving."
        ]
      },
      {
        "heading": "Close and hand off",
        "paragraphs": [
          "Within mortgage application and underwriting support, the \"close and hand off\" control is only repeatable when the mortgage support specialist can show a rate-lock record behind each decision. Start with application and disclosure date, add rate-lock expiration and terms, and attach the source and date before the item moves. If the item involves borrower identity or authorization is unclear, hold the work in the application, disclosure, condition, and rate-lock queue and route the choice to the mortgage operations manager; the loan officer should be able to reconstruct the next step without asking the preparer.",
          "Treat the \"close and hand off\" control as an evidence problem before treating it as a speed problem. The mortgage support specialist can prepare a condition log, but the mortgage operations manager keeps the decision when the item involves disclosure timing is at risk. Record files returned for missing documents with its denominator and window, then use the weekly sample to check whether the same gap keeps returning."
        ]
      },
      {
        "heading": "A weekly review rhythm",
        "paragraphs": [
          "Set one recurring point each week to review the mortgage application and document support queue: the oldest items, the blocked items, and one item that was corrected. Keep the meeting short and decision-focused.",
          "Treat the \"a weekly review rhythm\" control as an evidence problem before treating it as a speed problem. The mortgage support specialist can prepare a condition log, but the mortgage operations manager keeps the decision when the item involves disclosure timing is at risk. Record applications with complete disclosures with its denominator and window, then use the weekly sample to check whether the same gap keeps returning."
        ]
      },
      {
        "heading": "When to stop and ask",
        "paragraphs": [
          "Before scaling the \"when to stop and ask\" workflow, make an application checklist readable to someone outside the original team. It should show the request, the source, loan and borrower identifier, the mortgage operations manager, and the next date in one place. The mortgage operations manager reviewing the application, disclosure, condition, and rate-lock queue should see exceptions, not a clean activity count that hides unresolved work.",
          "For the \"when to stop and ask\" section, define the stopping condition before the mortgage support specialist starts the task. The application checklist should show owner and next action, loan and borrower identifier, and the evidence that let the mortgage operations manager accept the result. If the item involves rate lock expires before closing, document the reason and route the decision to the underwriter; a reopened item needs a new dated action, not a copied closure note."
        ]
      },
      {
        "heading": "A short checklist before release",
        "paragraphs": [
          "The \"a short checklist before release\" control becomes fragile when the application, disclosure, condition, and rate-lock queue is measured only by completed items. The mortgage support specialist should record condition and supporting document and application and disclosure date, keep exceptions visible, and let the mortgage operations manager decide any commitment or scope change. The mortgage operations manager can then sample a rate-lock record and compare conditions cleared by owner against the work that remains open.",
          "Ask what would let a new reviewer continue the \"a short checklist before release\" work without a conversation. The answer is usually a disclosure timing record with the source, version, owner, and next action. If the item involves borrower identity or authorization is unclear, the mortgage support specialist pauses the item, records the gap, and routes one question to the underwriter; do not close the item just to keep the queue moving."
        ]
      },
      {
        "heading": "A note on tools and templates",
        "paragraphs": [
          "A useful test for the \"a note on tools and templates\" control is whether a rate-lock record still makes sense after a week away. The mortgage support specialist records rate-lock expiration and terms and condition and supporting document, then checks one high-value case and one exception during the weekly review. When the item involves disclosure timing is at risk, the item stays open with a named owner and a dated next action rather than being marked complete.",
          "The control that matters for the \"a note on tools and templates\" section is a short, reviewable record, not a longer checklist. The mortgage support specialist captures loan and borrower identifier and application and disclosure date, labels a case involving borrower identity or authorization is unclear, and leaves the decision with the mortgage operations manager. During the weekly review, compare files returned for missing documents with the unresolved items and note which fix changed the result."
        ]
      },
      {
        "heading": "A local note for The Mortgage Assistant",
        "paragraphs": [
          "The Mortgage Assistant applies this control to mortgage application and document support for mortgage teams. The working rule is simple: the specialist keeps the record current, and the mortgage operations manager keeps the decisions that change a customer, a payment, or a schedule.",
          "For themortgageassistant.com, the first pilot should use one queue and one reviewer. Add a second workflow only after the evidence standard holds under normal volume."
        ]
      },
      {
        "heading": "Related controls",
        "paragraphs": [
          "Read [Triage Requests for mortgage application and document support Before They Reach the Queue](/blog/request-triage-standard) and [Plan Capacity for mortgage application and document support From Real Workload](/blog/capacity-plan) for the neighboring controls. Public context is available in [DOL Recordkeeping Fact Sheet](https://www.dol.gov/agencies/whd/fact-sheets/21-flsa-recordkeeping)."
        ]
      },
      {
        "heading": "What the owner should see",
        "paragraphs": [
          "A useful test for the \"what the owner should see\" control is whether a disclosure timing record still makes sense after a week away. The mortgage support specialist records loan and borrower identifier and owner and next action, then checks one high-value case and one exception during the weekly review. When the item involves rate lock expires before closing, the item stays open with a named owner and a dated next action rather than being marked complete.",
          "Within mortgage application and underwriting support, the \"what the owner should see\" control is only repeatable when the mortgage support specialist can show a condition log behind each decision. Start with loan and borrower identifier, add owner and next action, and attach the source and date before the item moves. If the item involves rate lock expires before closing, hold the work in the application, disclosure, condition, and rate-lock queue and route the choice to the mortgage operations manager; the loan officer should be able to reconstruct the next step without asking the preparer."
        ]
      },
      {
        "heading": "Sources",
        "paragraphs": [
          "GAO Standards for Internal Control: https://www.gao.gov/products/gao-14-704g",
          "NIST Cybersecurity Framework: https://www.nist.gov/cyberframework",
          "SBA Manage Your Business: https://www.sba.gov/business-guide/manage-your-business"
        ]
      }
    ],
    "faq": [
      {
        "q": "What should stay with the accountable owner?",
        "a": "Concrete example: a disclosure is sent after the timing window. The mortgage support specialist opens a condition log, records loan and borrower identifier and owner and next action, and asks one precise question instead of filling the blank from memory. The item leaves the application, disclosure, condition, and rate-lock queue only after the mortgage operations manager accepts the next action and the evidence link is attached."
      },
      {
        "q": "What is the minimum evidence?",
        "a": "Concrete example: an asset statement conflicts with the application. The mortgage support specialist opens a condition log, records application and disclosure date and owner and next action, and asks one precise question instead of filling the blank from memory. The item leaves the application, disclosure, condition, and rate-lock queue only after the mortgage operations manager accepts the next action and the evidence link is attached."
      }
    ],
    "internalService": "/services",
    "internalSibling": "/blog/knowledge-refresh",
    "source": {
      "label": "Public guidance",
      "url": "https://www.dol.gov/agencies/whd/fact-sheets/21-flsa-recordkeeping"
    }
  },
  {
    "slug": "month-end-close",
    "title": "Close the mortgage application and document support Month With a Reconciliation Checklist",
    "description": "A month-end close for mortgage application and document support that freezes the period, reconciles counts, lists exceptions, and records owner sign-off.",
    "category": "Application intake",
    "publishedAt": "2026-10-26",
    "readTime": "11 min read",
    "thumbnail": "/article-thumbnails/october-26/month-end-close.svg",
    "sections": [
      {
        "heading": "Why this control matters",
        "paragraphs": [
          "A mortgage application and document support queue can look busy while the record that would let someone else continue is missing. This guide turns the control behind \"Close the mortgage application and document support Month With a Reconciliation Checklist\" into a bounded workflow with a source, a named owner, and a stop rule.",
          "It is written for mortgage teams. The specialist prepares and routes; the mortgage operations manager keeps the decisions that change a customer, a payment, a schedule, or a policy."
        ]
      },
      {
        "heading": "Start with the governing record",
        "paragraphs": [
          "Begin with the record that controls the mortgage application and document support item. At minimum, collect the period and freeze time, opened and closed item counts, unmatched or pending records, adjustments and their reason, the owner sign-off, the archive location. Record where each item came from, the version or date observed, and the field it supports.",
          "Within mortgage application and underwriting support, the \"start with the governing record\" control is only repeatable when the mortgage support specialist can show an application checklist behind each decision. Start with owner and next action, add loan and borrower identifier, and attach the source and date before the item moves. If the item involves disclosure timing is at risk, hold the work in the application, disclosure, condition, and rate-lock queue and route the choice to the mortgage operations manager; the compliance reviewer should be able to reconstruct the next step without asking the preparer."
        ]
      },
      {
        "heading": "Separate preparation from approval",
        "paragraphs": [
          "The control that matters for the \"separate preparation from approval\" section is a short, reviewable record, not a longer checklist. The mortgage support specialist captures loan and borrower identifier and owner and next action, labels a case involving income or asset document conflicts, and leaves the decision with the mortgage operations manager. During the weekly review, compare applications with complete disclosures with the unresolved items and note which fix changed the result.",
          "Before scaling the \"separate preparation from approval\" workflow, make a rate-lock record readable to someone outside the original team. It should show the request, the source, loan and borrower identifier, the mortgage operations manager, and the next date in one place. The mortgage operations manager reviewing the application, disclosure, condition, and rate-lock queue should see exceptions, not a clean activity count that hides unresolved work."
        ]
      },
      {
        "heading": "Where the process breaks",
        "paragraphs": [
          "Before scaling the \"where the process breaks\" workflow, make a condition log readable to someone outside the original team. It should show the request, the source, owner and next action, the mortgage operations manager, and the next date in one place. The underwriter reviewing the application, disclosure, condition, and rate-lock queue should see exceptions, not a clean activity count that hides unresolved work.",
          "The control that matters for the \"where the process breaks\" section is a short, reviewable record, not a longer checklist. The mortgage support specialist captures owner and next action and rate-lock expiration and terms, labels a case involving income or asset document conflicts, and leaves the decision with the mortgage operations manager. During the weekly review, compare applications with complete disclosures with the unresolved items and note which fix changed the result."
        ]
      },
      {
        "heading": "Build the control in four steps",
        "paragraphs": [
          "First, Freeze the period and record the exact cut-off.",
          "Second, Reconcile opening, additions, closures, and ending counts.",
          "Third, List every exception with an owner and a next date.",
          "Fourth, Record sign-off and archive the pack with the source links."
        ]
      },
      {
        "heading": "Write the exception path first",
        "paragraphs": [
          "Ask what would let a new reviewer continue the \"write the exception path first\" work without a conversation. The answer is usually a rate-lock record with the source, version, owner, and next action. If the item involves borrower identity or authorization is unclear, the mortgage support specialist pauses the item, records the gap, and routes one question to the compliance reviewer; do not close the item just to keep the queue moving.",
          "Before scaling the \"write the exception path first\" workflow, make a disclosure timing record readable to someone outside the original team. It should show the request, the source, application and disclosure date, the mortgage operations manager, and the next date in one place. The underwriter reviewing the application, disclosure, condition, and rate-lock queue should see exceptions, not a clean activity count that hides unresolved work."
        ]
      },
      {
        "heading": "Measure the queue, not the activity",
        "paragraphs": [
          "Concrete example: a rate lock expires while a condition remains open. The mortgage support specialist opens an application checklist, records condition and supporting document and loan and borrower identifier, and asks one precise question instead of filling the blank from memory. The item leaves the application, disclosure, condition, and rate-lock queue only after the mortgage operations manager accepts the next action and the evidence link is attached.",
          "In practice, the mortgage support specialist handles the \"measure the queue, not the activity\" work by preparing an application checklist and naming the decision boundary. Include the source and retrieval date, loan and borrower identifier, and the next action owner. When the item involves income or asset document conflicts, the item goes to the mortgage operations manager with the evidence already checked; the application, disclosure, condition, and rate-lock queue should show the hold, not hide it."
        ]
      },
      {
        "heading": "A worked example",
        "paragraphs": [
          "The \"a worked example\" control becomes fragile when the application, disclosure, condition, and rate-lock queue is measured only by completed items. The mortgage support specialist should record loan and borrower identifier and condition and supporting document, keep exceptions visible, and let the mortgage operations manager decide any commitment or scope change. The mortgage operations manager can then sample a rate-lock record and compare files returned for missing documents against the work that remains open.",
          "In practice, the mortgage support specialist handles the \"a worked example\" work by preparing a rate-lock record and naming the decision boundary. Include the source and retrieval date, owner and next action, and the next action owner. When the item involves rate lock expires before closing, the item goes to the compliance reviewer with the evidence already checked; the application, disclosure, condition, and rate-lock queue should show the hold, not hide it."
        ]
      },
      {
        "heading": "Close and hand off",
        "paragraphs": [
          "In practice, the mortgage support specialist handles the \"close and hand off\" work by preparing a disclosure timing record and naming the decision boundary. Include the source and retrieval date, condition and supporting document, and the next action owner. When the item involves income or asset document conflicts, the item goes to the loan officer with the evidence already checked; the application, disclosure, condition, and rate-lock queue should show the hold, not hide it.",
          "A useful test for the \"close and hand off\" control is whether a condition log still makes sense after a week away. The mortgage support specialist records owner and next action and application and disclosure date, then checks one high-value case and one exception during the weekly review. When the item involves borrower identity or authorization is unclear, the item stays open with a named owner and a dated next action rather than being marked complete."
        ]
      },
      {
        "heading": "A weekly review rhythm",
        "paragraphs": [
          "Set one recurring point each week to review the mortgage application and document support queue: the oldest items, the blocked items, and one item that was corrected. Keep the meeting short and decision-focused.",
          "In practice, the mortgage support specialist handles the \"a weekly review rhythm\" work by preparing a rate-lock record and naming the decision boundary. Include the source and retrieval date, loan and borrower identifier, and the next action owner. When the item involves rate lock expires before closing, the item goes to the loan officer with the evidence already checked; the application, disclosure, condition, and rate-lock queue should show the hold, not hide it."
        ]
      },
      {
        "heading": "When to stop and ask",
        "paragraphs": [
          "Within mortgage application and underwriting support, the \"when to stop and ask\" control is only repeatable when the mortgage support specialist can show a rate-lock record behind each decision. Start with rate-lock expiration and terms, add condition and supporting document, and attach the source and date before the item moves. If the item involves disclosure timing is at risk, hold the work in the application, disclosure, condition, and rate-lock queue and route the choice to the mortgage operations manager; the compliance reviewer should be able to reconstruct the next step without asking the preparer.",
          "Ask what would let a new reviewer continue the \"when to stop and ask\" work without a conversation. The answer is usually a disclosure timing record with the source, version, owner, and next action. If the item involves income or asset document conflicts, the mortgage support specialist pauses the item, records the gap, and routes one question to the mortgage operations manager; do not close the item just to keep the queue moving."
        ]
      },
      {
        "heading": "A short checklist before release",
        "paragraphs": [
          "Before scaling the \"a short checklist before release\" workflow, make a condition log readable to someone outside the original team. It should show the request, the source, owner and next action, the mortgage operations manager, and the next date in one place. The compliance reviewer reviewing the application, disclosure, condition, and rate-lock queue should see exceptions, not a clean activity count that hides unresolved work.",
          "Ask what would let a new reviewer continue the \"a short checklist before release\" work without a conversation. The answer is usually a condition log with the source, version, owner, and next action. If the item involves borrower identity or authorization is unclear, the mortgage support specialist pauses the item, records the gap, and routes one question to the mortgage operations manager; do not close the item just to keep the queue moving."
        ]
      },
      {
        "heading": "A note on tools and templates",
        "paragraphs": [
          "In practice, the mortgage support specialist handles the \"a note on tools and templates\" work by preparing a disclosure timing record and naming the decision boundary. Include the source and retrieval date, loan and borrower identifier, and the next action owner. When the item involves income or asset document conflicts, the item goes to the compliance reviewer with the evidence already checked; the application, disclosure, condition, and rate-lock queue should show the hold, not hide it.",
          "For the \"a note on tools and templates\" section, define the stopping condition before the mortgage support specialist starts the task. The disclosure timing record should show condition and supporting document, owner and next action, and the evidence that let the mortgage operations manager accept the result. If the item involves rate lock expires before closing, document the reason and route the decision to the loan officer; a reopened item needs a new dated action, not a copied closure note."
        ]
      },
      {
        "heading": "A local note for The Mortgage Assistant",
        "paragraphs": [
          "The Mortgage Assistant applies this control to mortgage application and document support for mortgage teams. The working rule is simple: the specialist keeps the record current, and the mortgage operations manager keeps the decisions that change a customer, a payment, or a schedule.",
          "For themortgageassistant.com, the first pilot should use one queue and one reviewer. Add a second workflow only after the evidence standard holds under normal volume."
        ]
      },
      {
        "heading": "Related controls",
        "paragraphs": [
          "Read [Triage Requests for mortgage application and document support Before They Reach the Queue](/blog/request-triage-standard) and [Plan Capacity for mortgage application and document support From Real Workload](/blog/capacity-plan) for the neighboring controls. Public context is available in [National Archives Records Management](https://www.archives.gov/records-mgmt)."
        ]
      },
      {
        "heading": "What the owner should see",
        "paragraphs": [
          "Ask what would let a new reviewer continue the \"what the owner should see\" work without a conversation. The answer is usually a disclosure timing record with the source, version, owner, and next action. If the item involves rate lock expires before closing, the mortgage support specialist pauses the item, records the gap, and routes one question to the compliance reviewer; do not close the item just to keep the queue moving.",
          "The disclosure timing record is useful for the \"what the owner should see\" control only if another person can audit it. The mortgage support specialist records rate-lock expiration and terms and owner and next action, keeps the source attached, and marks a case involving borrower identity or authorization is unclear with the owner who accepted it. Review rate locks nearing expiry without review during the weekly check and test one recent correction against the original evidence."
        ]
      },
      {
        "heading": "Sources",
        "paragraphs": [
          "NIST Cybersecurity Framework: https://www.nist.gov/cyberframework",
          "SBA Manage Your Business: https://www.sba.gov/business-guide/manage-your-business",
          "DOL Recordkeeping Fact Sheet: https://www.dol.gov/agencies/whd/fact-sheets/21-flsa-recordkeeping"
        ]
      }
    ],
    "faq": [
      {
        "q": "What should stay with the accountable owner?",
        "a": "Before scaling the \"sources\" workflow, make a rate-lock record readable to someone outside the original team. It should show the request, the source, condition and supporting document, the mortgage operations manager, and the next date in one place. The loan officer reviewing the application, disclosure, condition, and rate-lock queue should see exceptions, not a clean activity count that hides unresolved work."
      },
      {
        "q": "What is the minimum evidence?",
        "a": "The \"sources\" control becomes fragile when the application, disclosure, condition, and rate-lock queue is measured only by completed items. The mortgage support specialist should record rate-lock expiration and terms and application and disclosure date, keep exceptions visible, and let the mortgage operations manager decide any commitment or scope change. The compliance reviewer can then sample a condition log and compare files returned for missing documents against the work that remains open."
      }
    ],
    "internalService": "/services",
    "internalSibling": "/blog/month-end-close",
    "source": {
      "label": "Public guidance",
      "url": "https://www.archives.gov/records-mgmt"
    }
  }
];
