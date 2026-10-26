import type { ResearchPost } from './types';

export const october26ResearchBatch: readonly ResearchPost[] = [
  {
    "slug": "triage-accuracy",
    "title": "How Consistently Are Requests Triaged in mortgage application and document support?",
    "summary": "A protocol for measuring whether independent reviewers assign the same triage class and owner to the same mortgage application and document support request.",
    "cluster": "Application intake",
    "publishedAt": "2026-10-26",
    "finding": "Do two reviewers assign the same triage class and owner to the same request? The scope is the operational record for mortgage application and document support, not the legal, financial, or clinical conclusion that may follow.",
    "thumbnail": "/article-thumbnails/october-26/triage-accuracy.svg",
    "sections": [
      {
        "heading": "Research question and scope",
        "paragraphs": [
          "Do two reviewers assign the same triage class and owner to the same request? The scope is the operational record for mortgage application and document support, not the legal, financial, or clinical conclusion that may follow.",
          "Concrete example: a rate lock expires while a condition remains open. The mortgage support specialist opens a condition log, records application and disclosure date and rate-lock expiration and terms, and asks one precise question instead of filling the blank from memory. The item leaves the application, disclosure, condition, and rate-lock queue only after the mortgage operations manager accepts the next action and the evidence link is attached."
        ]
      },
      {
        "heading": "Population and unit of analysis",
        "paragraphs": [
          "The \"population and unit of analysis\" control becomes fragile when the application, disclosure, condition, and rate-lock queue is measured only by completed items. The mortgage support specialist should record owner and next action and loan and borrower identifier, keep exceptions visible, and let the mortgage operations manager decide any commitment or scope change. The mortgage operations manager can then sample an application checklist and compare rate locks nearing expiry without review against the work that remains open.",
          "Ask what would let a new reviewer continue the \"population and unit of analysis\" work without a conversation. The answer is usually an application checklist with the source, version, owner, and next action. If the item involves rate lock expires before closing, the mortgage support specialist pauses the item, records the gap, and routes one question to the mortgage operations manager; do not close the item just to keep the queue moving."
        ]
      },
      {
        "heading": "Definitions and measures",
        "paragraphs": [
          "The \"definitions and measures\" control becomes fragile when the application, disclosure, condition, and rate-lock queue is measured only by completed items. The mortgage support specialist should record loan and borrower identifier and owner and next action, keep exceptions visible, and let the mortgage operations manager decide any commitment or scope change. The compliance reviewer can then sample a condition log and compare files returned for missing documents against the work that remains open.",
          "The application checklist is useful for the \"definitions and measures\" control only if another person can audit it. The mortgage support specialist records condition and supporting document and rate-lock expiration and terms, keeps the source attached, and marks a case involving income or asset document conflicts with the owner who accepted it. Review rate locks nearing expiry without review during the weekly check and test one recent correction against the original evidence."
        ]
      },
      {
        "heading": "Evidence and data dictionary",
        "paragraphs": [
          "Within mortgage application and underwriting support, the \"evidence and data dictionary\" control is only repeatable when the mortgage support specialist can show a rate-lock record behind each decision. Start with rate-lock expiration and terms, add owner and next action, and attach the source and date before the item moves. If the item involves disclosure timing is at risk, hold the work in the application, disclosure, condition, and rate-lock queue and route the choice to the mortgage operations manager; the compliance reviewer should be able to reconstruct the next step without asking the preparer.",
          "Treat the \"evidence and data dictionary\" control as an evidence problem before treating it as a speed problem. The mortgage support specialist can prepare a condition log, but the mortgage operations manager keeps the decision when the item involves income or asset document conflicts. Record rate locks nearing expiry without review with its denominator and window, then use the weekly sample to check whether the same gap keeps returning."
        ]
      },
      {
        "heading": "Sampling and collection",
        "paragraphs": [
          "The \"sampling and collection\" control becomes fragile when the application, disclosure, condition, and rate-lock queue is measured only by completed items. The mortgage support specialist should record condition and supporting document and rate-lock expiration and terms, keep exceptions visible, and let the mortgage operations manager decide any commitment or scope change. The mortgage operations manager can then sample a condition log and compare applications with complete disclosures against the work that remains open.",
          "The condition log is useful for the \"sampling and collection\" control only if another person can audit it. The mortgage support specialist records loan and borrower identifier and rate-lock expiration and terms, keeps the source attached, and marks a case involving rate lock expires before closing with the owner who accepted it. Review applications with complete disclosures during the weekly check and test one recent correction against the original evidence."
        ]
      },
      {
        "heading": "Reviewer independence",
        "paragraphs": [
          "Treat the \"reviewer independence\" control as an evidence problem before treating it as a speed problem. The mortgage support specialist can prepare a disclosure timing record, but the mortgage operations manager keeps the decision when the item involves income or asset document conflicts. Record conditions cleared by owner with its denominator and window, then use the weekly sample to check whether the same gap keeps returning.",
          "The rate-lock record is useful for the \"reviewer independence\" control only if another person can audit it. The mortgage support specialist records application and disclosure date and condition and supporting document, keeps the source attached, and marks a case involving borrower identity or authorization is unclear with the owner who accepted it. Review rate locks nearing expiry without review during the weekly check and test one recent correction against the original evidence."
        ]
      },
      {
        "heading": "What the evidence can support",
        "paragraphs": [
          "The record can show field presence, source currency, named ownership, and where the mortgage application and document support record is thin. It can support a triage class guide, a requester verification step, a duplicate search rule.",
          "A useful test for the \"what the evidence can support\" control is whether an application checklist still makes sense after a week away. The mortgage support specialist records owner and next action and loan and borrower identifier, then checks one high-value case and one exception during the weekly review. When the item involves income or asset document conflicts, the item stays open with a named owner and a dated next action rather than being marked complete."
        ]
      },
      {
        "heading": "Limitations and error",
        "paragraphs": [
          "Concrete example: an asset statement conflicts with the application. The mortgage support specialist opens an application checklist, records owner and next action and application and disclosure date, and asks one precise question instead of filling the blank from memory. The item leaves the application, disclosure, condition, and rate-lock queue only after the mortgage operations manager accepts the next action and the evidence link is attached.",
          "The \"limitations and error\" control becomes fragile when the application, disclosure, condition, and rate-lock queue is measured only by completed items. The mortgage support specialist should record loan and borrower identifier and condition and supporting document, keep exceptions visible, and let the mortgage operations manager decide any commitment or scope change. The underwriter can then sample a rate-lock record and compare files returned for missing documents against the work that remains open."
        ]
      },
      {
        "heading": "Sensitivity and alternatives",
        "paragraphs": [
          "Ask what would let a new reviewer continue the \"sensitivity and alternatives\" work without a conversation. The answer is usually a disclosure timing record with the source, version, owner, and next action. If the item involves borrower identity or authorization is unclear, the mortgage support specialist pauses the item, records the gap, and routes one question to the loan officer; do not close the item just to keep the queue moving.",
          "Before scaling the \"sensitivity and alternatives\" workflow, make a disclosure timing record readable to someone outside the original team. It should show the request, the source, rate-lock expiration and terms, the mortgage operations manager, and the next date in one place. The compliance reviewer reviewing the application, disclosure, condition, and rate-lock queue should see exceptions, not a clean activity count that hides unresolved work."
        ]
      },
      {
        "heading": "Privacy, access, and retention",
        "paragraphs": [
          "The application, disclosure, condition, and rate-lock queue in mortgage application and underwriting support usually fails at the handoff, not at the first task. For the \"privacy, access, and retention\" section, the mortgage support specialist should capture the source, the version, the accountable mortgage operations manager, and the next review date in an application checklist. If the item involves disclosure timing is at risk, route it to the loan officer and keep the exception reason attached so a later reviewer can see why the normal path did not apply.",
          "The \"privacy, access, and retention\" control becomes fragile when the application, disclosure, condition, and rate-lock queue is measured only by completed items. The mortgage support specialist should record loan and borrower identifier and application and disclosure date, keep exceptions visible, and let the mortgage operations manager decide any commitment or scope change. The loan officer can then sample a disclosure timing record and compare conditions cleared by owner against the work that remains open."
        ]
      },
      {
        "heading": "Operational use and reporting",
        "paragraphs": [
          "Publish the case flow, definitions, counts, unresolved items, disagreement summary, and limits together. Separate observations, calculations, and owner judgments.",
          "Ask what would let a new reviewer continue the \"operational use and reporting\" work without a conversation. The answer is usually an application checklist with the source, version, owner, and next action. If the item involves disclosure timing is at risk, the mortgage support specialist pauses the item, records the gap, and routes one question to the compliance reviewer; do not close the item just to keep the queue moving."
        ]
      },
      {
        "heading": "Governance and stopping",
        "paragraphs": [
          "In practice, the mortgage support specialist handles the \"governance and stopping\" work by preparing an application checklist and naming the decision boundary. Include the source and retrieval date, rate-lock expiration and terms, and the next action owner. When the item involves disclosure timing is at risk, the item goes to the compliance reviewer with the evidence already checked; the application, disclosure, condition, and rate-lock queue should show the hold, not hide it.",
          "The application, disclosure, condition, and rate-lock queue in mortgage application and underwriting support usually fails at the handoff, not at the first task. For the \"governance and stopping\" section, the mortgage support specialist should capture the source, the version, the accountable mortgage operations manager, and the next review date in a disclosure timing record. If the item involves borrower identity or authorization is unclear, route it to the mortgage operations manager and keep the exception reason attached so a later reviewer can see why the normal path did not apply."
        ]
      },
      {
        "heading": "A calibration case",
        "paragraphs": [
          "In practice, the mortgage support specialist handles the \"a calibration case\" work by preparing an application checklist and naming the decision boundary. Include the source and retrieval date, rate-lock expiration and terms, and the next action owner. When the item involves disclosure timing is at risk, the item goes to the compliance reviewer with the evidence already checked; the application, disclosure, condition, and rate-lock queue should show the hold, not hide it.",
          "The condition log is useful for the \"a calibration case\" control only if another person can audit it. The mortgage support specialist records condition and supporting document and loan and borrower identifier, keeps the source attached, and marks a case involving disclosure timing is at risk with the owner who accepted it. Review conditions cleared by owner during the weekly check and test one recent correction against the original evidence."
        ]
      },
      {
        "heading": "Effort and practical constraints",
        "paragraphs": [
          "In practice, the mortgage support specialist handles the \"effort and practical constraints\" work by preparing a disclosure timing record and naming the decision boundary. Include the source and retrieval date, loan and borrower identifier, and the next action owner. When the item involves rate lock expires before closing, the item goes to the compliance reviewer with the evidence already checked; the application, disclosure, condition, and rate-lock queue should show the hold, not hide it.",
          "Within mortgage application and underwriting support, the \"effort and practical constraints\" control is only repeatable when the mortgage support specialist can show an application checklist behind each decision. Start with application and disclosure date, add owner and next action, and attach the source and date before the item moves. If the item involves borrower identity or authorization is unclear, hold the work in the application, disclosure, condition, and rate-lock queue and route the choice to the mortgage operations manager; the loan officer should be able to reconstruct the next step without asking the preparer."
        ]
      },
      {
        "heading": "Reporting package",
        "paragraphs": [
          "Publish the case flow, definitions, counts, unresolved items, disagreement summary, and limitations together. Label observations, calculations, and owner judgments.",
          "The control that matters for the \"reporting package\" section is a short, reviewable record, not a longer checklist. The mortgage support specialist captures rate-lock expiration and terms and application and disclosure date, labels a case involving borrower identity or authorization is unclear, and leaves the decision with the mortgage operations manager. During the weekly review, compare applications with complete disclosures with the unresolved items and note which fix changed the result."
        ]
      },
      {
        "heading": "Interpreting a small sample",
        "paragraphs": [
          "Treat the \"interpreting a small sample\" control as an evidence problem before treating it as a speed problem. The mortgage support specialist can prepare a rate-lock record, but the mortgage operations manager keeps the decision when the item involves borrower identity or authorization is unclear. Record conditions cleared by owner with its denominator and window, then use the weekly sample to check whether the same gap keeps returning.",
          "Concrete example: a disclosure is sent after the timing window. The mortgage support specialist opens a disclosure timing record, records application and disclosure date and rate-lock expiration and terms, and asks one precise question instead of filling the blank from memory. The item leaves the application, disclosure, condition, and rate-lock queue only after the mortgage operations manager accepts the next action and the evidence link is attached."
        ]
      },
      {
        "heading": "Reopening conditions",
        "paragraphs": [
          "Ask what would let a new reviewer continue the \"reopening conditions\" work without a conversation. The answer is usually a condition log with the source, version, owner, and next action. If the item involves rate lock expires before closing, the mortgage support specialist pauses the item, records the gap, and routes one question to the compliance reviewer; do not close the item just to keep the queue moving.",
          "Before scaling the \"reopening conditions\" workflow, make a disclosure timing record readable to someone outside the original team. It should show the request, the source, rate-lock expiration and terms, the mortgage operations manager, and the next date in one place. The compliance reviewer reviewing the application, disclosure, condition, and rate-lock queue should see exceptions, not a clean activity count that hides unresolved work."
        ]
      },
      {
        "heading": "A worked example of the record",
        "paragraphs": [
          "An item arrives with a source that is one version behind the current mortgage application and document support record. The reviewer flags the version, keeps the item open, and asks one question. No one rebuilds the case from memory.",
          "In practice, the mortgage support specialist handles the \"a worked example of the record\" work by preparing an application checklist and naming the decision boundary. Include the source and retrieval date, condition and supporting document, and the next action owner. When the item involves disclosure timing is at risk, the item goes to the underwriter with the evidence already checked; the application, disclosure, condition, and rate-lock queue should show the hold, not hide it."
        ]
      },
      {
        "heading": "Common failure modes",
        "paragraphs": [
          "The application checklist is useful for the \"common failure modes\" control only if another person can audit it. The mortgage support specialist records loan and borrower identifier and application and disclosure date, keeps the source attached, and marks a case involving borrower identity or authorization is unclear with the owner who accepted it. Review conditions cleared by owner during the weekly check and test one recent correction against the original evidence.",
          "The condition log is useful for the \"common failure modes\" control only if another person can audit it. The mortgage support specialist records rate-lock expiration and terms and condition and supporting document, keeps the source attached, and marks a case involving rate lock expires before closing with the owner who accepted it. Review files returned for missing documents during the weekly check and test one recent correction against the original evidence."
        ]
      },
      {
        "heading": "What the result does not prove",
        "paragraphs": [
          "The result does not prove that the mortgage application and document support work was correct, that a customer will be satisfied, or that one staffing model is better. It describes the record and the process around it.",
          "Within mortgage application and underwriting support, the \"what the result does not prove\" control is only repeatable when the mortgage support specialist can show a rate-lock record behind each decision. Start with condition and supporting document, add owner and next action, and attach the source and date before the item moves. If the item involves rate lock expires before closing, hold the work in the application, disclosure, condition, and rate-lock queue and route the choice to the mortgage operations manager; the underwriter should be able to reconstruct the next step without asking the preparer."
        ]
      },
      {
        "heading": "A short review agenda",
        "paragraphs": [
          "Treat the \"a short review agenda\" control as an evidence problem before treating it as a speed problem. The mortgage support specialist can prepare a disclosure timing record, but the mortgage operations manager keeps the decision when the item involves income or asset document conflicts. Record applications with complete disclosures with its denominator and window, then use the weekly sample to check whether the same gap keeps returning.",
          "The \"a short review agenda\" control becomes fragile when the application, disclosure, condition, and rate-lock queue is measured only by completed items. The mortgage support specialist should record application and disclosure date and rate-lock expiration and terms, keep exceptions visible, and let the mortgage operations manager decide any commitment or scope change. The loan officer can then sample an application checklist and compare files returned for missing documents against the work that remains open."
        ]
      },
      {
        "heading": "Data quality checks",
        "paragraphs": [
          "Before scaling the \"data quality checks\" workflow, make an application checklist readable to someone outside the original team. It should show the request, the source, owner and next action, the mortgage operations manager, and the next date in one place. The compliance reviewer reviewing the application, disclosure, condition, and rate-lock queue should see exceptions, not a clean activity count that hides unresolved work.",
          "Ask what would let a new reviewer continue the \"data quality checks\" work without a conversation. The answer is usually a condition log with the source, version, owner, and next action. If the item involves rate lock expires before closing, the mortgage support specialist pauses the item, records the gap, and routes one question to the underwriter; do not close the item just to keep the queue moving."
        ]
      },
      {
        "heading": "A note on sampling",
        "paragraphs": [
          "The control that matters for the \"a note on sampling\" section is a short, reviewable record, not a longer checklist. The mortgage support specialist captures condition and supporting document and loan and borrower identifier, labels a case involving disclosure timing is at risk, and leaves the decision with the mortgage operations manager. During the weekly review, compare applications with complete disclosures with the unresolved items and note which fix changed the result.",
          "Ask what would let a new reviewer continue the \"a note on sampling\" work without a conversation. The answer is usually an application checklist with the source, version, owner, and next action. If the item involves disclosure timing is at risk, the mortgage support specialist pauses the item, records the gap, and routes one question to the underwriter; do not close the item just to keep the queue moving."
        ]
      },
      {
        "heading": "A note on evidence ownership",
        "paragraphs": [
          "Concrete example: an asset statement conflicts with the application. The mortgage support specialist opens a rate-lock record, records condition and supporting document and application and disclosure date, and asks one precise question instead of filling the blank from memory. The item leaves the application, disclosure, condition, and rate-lock queue only after the mortgage operations manager accepts the next action and the evidence link is attached.",
          "For the \"a note on evidence ownership\" section, define the stopping condition before the mortgage support specialist starts the task. The rate-lock record should show owner and next action, application and disclosure date, and the evidence that let the mortgage operations manager accept the result. If the item involves borrower identity or authorization is unclear, document the reason and route the decision to the compliance reviewer; a reopened item needs a new dated action, not a copied closure note."
        ]
      },
      {
        "heading": "What would change the answer",
        "paragraphs": [
          "Within mortgage application and underwriting support, the \"what would change the answer\" control is only repeatable when the mortgage support specialist can show a condition log behind each decision. Start with loan and borrower identifier, add condition and supporting document, and attach the source and date before the item moves. If the item involves borrower identity or authorization is unclear, hold the work in the application, disclosure, condition, and rate-lock queue and route the choice to the mortgage operations manager; the compliance reviewer should be able to reconstruct the next step without asking the preparer.",
          "The control that matters for the \"what would change the answer\" section is a short, reviewable record, not a longer checklist. The mortgage support specialist captures application and disclosure date and loan and borrower identifier, labels a case involving borrower identity or authorization is unclear, and leaves the decision with the mortgage operations manager. During the weekly review, compare rate locks nearing expiry without review with the unresolved items and note which fix changed the result."
        ]
      },
      {
        "heading": "Why this matters for The Mortgage Assistant",
        "paragraphs": [
          "The Mortgage Assistant supports mortgage teams with mortgage application and document support. A local protocol is useful only if it names the records this team can actually see and the decisions its owners can actually make.",
          "For the \"why this matters for The Mortgage Assistant\" section, define the stopping condition before the mortgage support specialist starts the task. The condition log should show rate-lock expiration and terms, application and disclosure date, and the evidence that let the mortgage operations manager accept the result. If the item involves rate lock expires before closing, document the reason and route the decision to the compliance reviewer; a reopened item needs a new dated action, not a copied closure note."
        ]
      },
      {
        "heading": "Writing the conclusion",
        "paragraphs": [
          "The \"writing the conclusion\" control becomes fragile when the application, disclosure, condition, and rate-lock queue is measured only by completed items. The mortgage support specialist should record application and disclosure date and condition and supporting document, keep exceptions visible, and let the mortgage operations manager decide any commitment or scope change. The underwriter can then sample a rate-lock record and compare applications with complete disclosures against the work that remains open.",
          "Treat the \"writing the conclusion\" control as an evidence problem before treating it as a speed problem. The mortgage support specialist can prepare a rate-lock record, but the mortgage operations manager keeps the decision when the item involves income or asset document conflicts. Record files returned for missing documents with its denominator and window, then use the weekly sample to check whether the same gap keeps returning."
        ]
      },
      {
        "heading": "Related reading",
        "paragraphs": [
          "The operational control behind this protocol is described in [Triage Requests for mortgage application and document support Before They Reach the Queue](/blog/request-triage-standard) and [Plan Capacity for mortgage application and document support From Real Workload](/blog/capacity-plan). Public context is available in [DOL Recordkeeping Fact Sheet](https://www.dol.gov/agencies/whd/fact-sheets/21-flsa-recordkeeping)."
        ]
      },
      {
        "heading": "Governance and handoff",
        "paragraphs": [
          "The control that matters for the \"governance and handoff\" section is a short, reviewable record, not a longer checklist. The mortgage support specialist captures rate-lock expiration and terms and owner and next action, labels a case involving disclosure timing is at risk, and leaves the decision with the mortgage operations manager. During the weekly review, compare files returned for missing documents with the unresolved items and note which fix changed the result.",
          "In practice, the mortgage support specialist handles the \"governance and handoff\" work by preparing a disclosure timing record and naming the decision boundary. Include the source and retrieval date, rate-lock expiration and terms, and the next action owner. When the item involves rate lock expires before closing, the item goes to the compliance reviewer with the evidence already checked; the application, disclosure, condition, and rate-lock queue should show the hold, not hide it."
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
    "sources": [
      {
        "label": "https://www.dol.gov/agencies/whd/fact-sheets/21-flsa-recordkeeping",
        "url": "https://www.dol.gov/agencies/whd/fact-sheets/21-flsa-recordkeeping"
      },
      {
        "label": "https://www.gao.gov/products/gao-14-704g",
        "url": "https://www.gao.gov/products/gao-14-704g"
      },
      {
        "label": "https://www.nist.gov/cyberframework",
        "url": "https://www.nist.gov/cyberframework"
      },
      {
        "label": "https://www.sba.gov/business-guide/manage-your-business",
        "url": "https://www.sba.gov/business-guide/manage-your-business"
      }
    ]
  },
  {
    "slug": "capacity-variance",
    "title": "Where Does Capacity Go in mortgage application and document support?",
    "summary": "A protocol separating planned work, exceptions, rework, and waiting in a mortgage application and document support team's available hours.",
    "cluster": "Application intake",
    "publishedAt": "2026-10-26",
    "finding": "How much available time goes to planned work, exceptions, rework, and waiting? The scope is the operational record for mortgage application and document support, not the legal, financial, or clinical conclusion that may follow.",
    "thumbnail": "/article-thumbnails/october-26/capacity-variance.svg",
    "sections": [
      {
        "heading": "Research question and scope",
        "paragraphs": [
          "How much available time goes to planned work, exceptions, rework, and waiting? The scope is the operational record for mortgage application and document support, not the legal, financial, or clinical conclusion that may follow.",
          "Within mortgage application and underwriting support, the \"research question and scope\" control is only repeatable when the mortgage support specialist can show a rate-lock record behind each decision. Start with application and disclosure date, add condition and supporting document, and attach the source and date before the item moves. If the item involves income or asset document conflicts, hold the work in the application, disclosure, condition, and rate-lock queue and route the choice to the mortgage operations manager; the loan officer should be able to reconstruct the next step without asking the preparer."
        ]
      },
      {
        "heading": "Population and unit of analysis",
        "paragraphs": [
          "Within mortgage application and underwriting support, the \"population and unit of analysis\" control is only repeatable when the mortgage support specialist can show a disclosure timing record behind each decision. Start with condition and supporting document, add rate-lock expiration and terms, and attach the source and date before the item moves. If the item involves income or asset document conflicts, hold the work in the application, disclosure, condition, and rate-lock queue and route the choice to the mortgage operations manager; the mortgage operations manager should be able to reconstruct the next step without asking the preparer.",
          "The condition log is useful for the \"population and unit of analysis\" control only if another person can audit it. The mortgage support specialist records owner and next action and loan and borrower identifier, keeps the source attached, and marks a case involving disclosure timing is at risk with the owner who accepted it. Review applications with complete disclosures during the weekly check and test one recent correction against the original evidence."
        ]
      },
      {
        "heading": "Definitions and measures",
        "paragraphs": [
          "The application, disclosure, condition, and rate-lock queue in mortgage application and underwriting support usually fails at the handoff, not at the first task. For the \"definitions and measures\" section, the mortgage support specialist should capture the source, the version, the accountable mortgage operations manager, and the next review date in a disclosure timing record. If the item involves income or asset document conflicts, route it to the compliance reviewer and keep the exception reason attached so a later reviewer can see why the normal path did not apply.",
          "The condition log is useful for the \"definitions and measures\" control only if another person can audit it. The mortgage support specialist records condition and supporting document and rate-lock expiration and terms, keeps the source attached, and marks a case involving income or asset document conflicts with the owner who accepted it. Review files returned for missing documents during the weekly check and test one recent correction against the original evidence."
        ]
      },
      {
        "heading": "Evidence and data dictionary",
        "paragraphs": [
          "For the \"evidence and data dictionary\" section, define the stopping condition before the mortgage support specialist starts the task. The rate-lock record should show application and disclosure date, condition and supporting document, and the evidence that let the mortgage operations manager accept the result. If the item involves borrower identity or authorization is unclear, document the reason and route the decision to the mortgage operations manager; a reopened item needs a new dated action, not a copied closure note.",
          "A useful test for the \"evidence and data dictionary\" control is whether a condition log still makes sense after a week away. The mortgage support specialist records loan and borrower identifier and owner and next action, then checks one high-value case and one exception during the weekly review. When the item involves income or asset document conflicts, the item stays open with a named owner and a dated next action rather than being marked complete."
        ]
      },
      {
        "heading": "Sampling and collection",
        "paragraphs": [
          "The control that matters for the \"sampling and collection\" section is a short, reviewable record, not a longer checklist. The mortgage support specialist captures condition and supporting document and rate-lock expiration and terms, labels a case involving rate lock expires before closing, and leaves the decision with the mortgage operations manager. During the weekly review, compare conditions cleared by owner with the unresolved items and note which fix changed the result.",
          "A useful test for the \"sampling and collection\" control is whether an application checklist still makes sense after a week away. The mortgage support specialist records loan and borrower identifier and condition and supporting document, then checks one high-value case and one exception during the weekly review. When the item involves income or asset document conflicts, the item stays open with a named owner and a dated next action rather than being marked complete."
        ]
      },
      {
        "heading": "Reviewer independence",
        "paragraphs": [
          "The application, disclosure, condition, and rate-lock queue in mortgage application and underwriting support usually fails at the handoff, not at the first task. For the \"reviewer independence\" section, the mortgage support specialist should capture the source, the version, the accountable mortgage operations manager, and the next review date in a condition log. If the item involves borrower identity or authorization is unclear, route it to the mortgage operations manager and keep the exception reason attached so a later reviewer can see why the normal path did not apply.",
          "Treat the \"reviewer independence\" control as an evidence problem before treating it as a speed problem. The mortgage support specialist can prepare a condition log, but the mortgage operations manager keeps the decision when the item involves rate lock expires before closing. Record applications with complete disclosures with its denominator and window, then use the weekly sample to check whether the same gap keeps returning."
        ]
      },
      {
        "heading": "What the evidence can support",
        "paragraphs": [
          "The record can show field presence, source currency, named ownership, and where the mortgage application and document support record is thin. It can support a work-type capacity model, a rework reason code, a weekly capacity review.",
          "The application, disclosure, condition, and rate-lock queue in mortgage application and underwriting support usually fails at the handoff, not at the first task. For the \"what the evidence can support\" section, the mortgage support specialist should capture the source, the version, the accountable mortgage operations manager, and the next review date in an application checklist. If the item involves rate lock expires before closing, route it to the compliance reviewer and keep the exception reason attached so a later reviewer can see why the normal path did not apply."
        ]
      },
      {
        "heading": "Limitations and error",
        "paragraphs": [
          "Concrete example: a rate lock expires while a condition remains open. The mortgage support specialist opens an application checklist, records application and disclosure date and loan and borrower identifier, and asks one precise question instead of filling the blank from memory. The item leaves the application, disclosure, condition, and rate-lock queue only after the mortgage operations manager accepts the next action and the evidence link is attached.",
          "The application, disclosure, condition, and rate-lock queue in mortgage application and underwriting support usually fails at the handoff, not at the first task. For the \"limitations and error\" section, the mortgage support specialist should capture the source, the version, the accountable mortgage operations manager, and the next review date in a condition log. If the item involves borrower identity or authorization is unclear, route it to the loan officer and keep the exception reason attached so a later reviewer can see why the normal path did not apply."
        ]
      },
      {
        "heading": "Sensitivity and alternatives",
        "paragraphs": [
          "The control that matters for the \"sensitivity and alternatives\" section is a short, reviewable record, not a longer checklist. The mortgage support specialist captures loan and borrower identifier and application and disclosure date, labels a case involving income or asset document conflicts, and leaves the decision with the mortgage operations manager. During the weekly review, compare files returned for missing documents with the unresolved items and note which fix changed the result.",
          "A useful test for the \"sensitivity and alternatives\" control is whether a rate-lock record still makes sense after a week away. The mortgage support specialist records rate-lock expiration and terms and loan and borrower identifier, then checks one high-value case and one exception during the weekly review. When the item involves income or asset document conflicts, the item stays open with a named owner and a dated next action rather than being marked complete."
        ]
      },
      {
        "heading": "Privacy, access, and retention",
        "paragraphs": [
          "The control that matters for the \"privacy, access, and retention\" section is a short, reviewable record, not a longer checklist. The mortgage support specialist captures condition and supporting document and rate-lock expiration and terms, labels a case involving income or asset document conflicts, and leaves the decision with the mortgage operations manager. During the weekly review, compare rate locks nearing expiry without review with the unresolved items and note which fix changed the result.",
          "The application, disclosure, condition, and rate-lock queue in mortgage application and underwriting support usually fails at the handoff, not at the first task. For the \"privacy, access, and retention\" section, the mortgage support specialist should capture the source, the version, the accountable mortgage operations manager, and the next review date in a condition log. If the item involves borrower identity or authorization is unclear, route it to the underwriter and keep the exception reason attached so a later reviewer can see why the normal path did not apply."
        ]
      },
      {
        "heading": "Operational use and reporting",
        "paragraphs": [
          "Publish the case flow, definitions, counts, unresolved items, disagreement summary, and limits together. Separate observations, calculations, and owner judgments.",
          "A useful test for the \"operational use and reporting\" control is whether a disclosure timing record still makes sense after a week away. The mortgage support specialist records condition and supporting document and rate-lock expiration and terms, then checks one high-value case and one exception during the weekly review. When the item involves rate lock expires before closing, the item stays open with a named owner and a dated next action rather than being marked complete."
        ]
      },
      {
        "heading": "Governance and stopping",
        "paragraphs": [
          "Concrete example: a disclosure is sent after the timing window. The mortgage support specialist opens a rate-lock record, records condition and supporting document and rate-lock expiration and terms, and asks one precise question instead of filling the blank from memory. The item leaves the application, disclosure, condition, and rate-lock queue only after the mortgage operations manager accepts the next action and the evidence link is attached.",
          "The \"governance and stopping\" control becomes fragile when the application, disclosure, condition, and rate-lock queue is measured only by completed items. The mortgage support specialist should record application and disclosure date and condition and supporting document, keep exceptions visible, and let the mortgage operations manager decide any commitment or scope change. The mortgage operations manager can then sample a rate-lock record and compare conditions cleared by owner against the work that remains open."
        ]
      },
      {
        "heading": "A calibration case",
        "paragraphs": [
          "The control that matters for the \"a calibration case\" section is a short, reviewable record, not a longer checklist. The mortgage support specialist captures loan and borrower identifier and application and disclosure date, labels a case involving disclosure timing is at risk, and leaves the decision with the mortgage operations manager. During the weekly review, compare files returned for missing documents with the unresolved items and note which fix changed the result.",
          "Ask what would let a new reviewer continue the \"a calibration case\" work without a conversation. The answer is usually an application checklist with the source, version, owner, and next action. If the item involves borrower identity or authorization is unclear, the mortgage support specialist pauses the item, records the gap, and routes one question to the compliance reviewer; do not close the item just to keep the queue moving."
        ]
      },
      {
        "heading": "Effort and practical constraints",
        "paragraphs": [
          "In practice, the mortgage support specialist handles the \"effort and practical constraints\" work by preparing a disclosure timing record and naming the decision boundary. Include the source and retrieval date, rate-lock expiration and terms, and the next action owner. When the item involves disclosure timing is at risk, the item goes to the underwriter with the evidence already checked; the application, disclosure, condition, and rate-lock queue should show the hold, not hide it.",
          "The condition log is useful for the \"effort and practical constraints\" control only if another person can audit it. The mortgage support specialist records condition and supporting document and owner and next action, keeps the source attached, and marks a case involving income or asset document conflicts with the owner who accepted it. Review files returned for missing documents during the weekly check and test one recent correction against the original evidence."
        ]
      },
      {
        "heading": "Reporting package",
        "paragraphs": [
          "Publish the case flow, definitions, counts, unresolved items, disagreement summary, and limitations together. Label observations, calculations, and owner judgments.",
          "Before scaling the \"reporting package\" workflow, make a rate-lock record readable to someone outside the original team. It should show the request, the source, loan and borrower identifier, the mortgage operations manager, and the next date in one place. The mortgage operations manager reviewing the application, disclosure, condition, and rate-lock queue should see exceptions, not a clean activity count that hides unresolved work."
        ]
      },
      {
        "heading": "Interpreting a small sample",
        "paragraphs": [
          "For the \"interpreting a small sample\" section, define the stopping condition before the mortgage support specialist starts the task. The disclosure timing record should show owner and next action, loan and borrower identifier, and the evidence that let the mortgage operations manager accept the result. If the item involves disclosure timing is at risk, document the reason and route the decision to the loan officer; a reopened item needs a new dated action, not a copied closure note.",
          "Concrete example: an asset statement conflicts with the application. The mortgage support specialist opens a rate-lock record, records owner and next action and loan and borrower identifier, and asks one precise question instead of filling the blank from memory. The item leaves the application, disclosure, condition, and rate-lock queue only after the mortgage operations manager accepts the next action and the evidence link is attached."
        ]
      },
      {
        "heading": "Reopening conditions",
        "paragraphs": [
          "Within mortgage application and underwriting support, the \"reopening conditions\" control is only repeatable when the mortgage support specialist can show a rate-lock record behind each decision. Start with rate-lock expiration and terms, add loan and borrower identifier, and attach the source and date before the item moves. If the item involves disclosure timing is at risk, hold the work in the application, disclosure, condition, and rate-lock queue and route the choice to the mortgage operations manager; the mortgage operations manager should be able to reconstruct the next step without asking the preparer.",
          "In practice, the mortgage support specialist handles the \"reopening conditions\" work by preparing an application checklist and naming the decision boundary. Include the source and retrieval date, owner and next action, and the next action owner. When the item involves income or asset document conflicts, the item goes to the loan officer with the evidence already checked; the application, disclosure, condition, and rate-lock queue should show the hold, not hide it."
        ]
      },
      {
        "heading": "A worked example of the record",
        "paragraphs": [
          "An item arrives with a source that is one version behind the current mortgage application and document support record. The reviewer flags the version, keeps the item open, and asks one question. No one rebuilds the case from memory.",
          "The application checklist is useful for the \"a worked example of the record\" control only if another person can audit it. The mortgage support specialist records condition and supporting document and loan and borrower identifier, keeps the source attached, and marks a case involving disclosure timing is at risk with the owner who accepted it. Review files returned for missing documents during the weekly check and test one recent correction against the original evidence."
        ]
      },
      {
        "heading": "Common failure modes",
        "paragraphs": [
          "Concrete example: a disclosure is sent after the timing window. The mortgage support specialist opens a condition log, records condition and supporting document and rate-lock expiration and terms, and asks one precise question instead of filling the blank from memory. The item leaves the application, disclosure, condition, and rate-lock queue only after the mortgage operations manager accepts the next action and the evidence link is attached.",
          "Before scaling the \"common failure modes\" workflow, make an application checklist readable to someone outside the original team. It should show the request, the source, owner and next action, the mortgage operations manager, and the next date in one place. The compliance reviewer reviewing the application, disclosure, condition, and rate-lock queue should see exceptions, not a clean activity count that hides unresolved work."
        ]
      },
      {
        "heading": "What the result does not prove",
        "paragraphs": [
          "The result does not prove that the mortgage application and document support work was correct, that a customer will be satisfied, or that one staffing model is better. It describes the record and the process around it.",
          "Concrete example: a rate lock expires while a condition remains open. The mortgage support specialist opens a rate-lock record, records loan and borrower identifier and application and disclosure date, and asks one precise question instead of filling the blank from memory. The item leaves the application, disclosure, condition, and rate-lock queue only after the mortgage operations manager accepts the next action and the evidence link is attached."
        ]
      },
      {
        "heading": "A short review agenda",
        "paragraphs": [
          "Before scaling the \"a short review agenda\" workflow, make an application checklist readable to someone outside the original team. It should show the request, the source, rate-lock expiration and terms, the mortgage operations manager, and the next date in one place. The loan officer reviewing the application, disclosure, condition, and rate-lock queue should see exceptions, not a clean activity count that hides unresolved work.",
          "The control that matters for the \"a short review agenda\" section is a short, reviewable record, not a longer checklist. The mortgage support specialist captures owner and next action and rate-lock expiration and terms, labels a case involving rate lock expires before closing, and leaves the decision with the mortgage operations manager. During the weekly review, compare conditions cleared by owner with the unresolved items and note which fix changed the result."
        ]
      },
      {
        "heading": "Data quality checks",
        "paragraphs": [
          "A useful test for the \"data quality checks\" control is whether an application checklist still makes sense after a week away. The mortgage support specialist records rate-lock expiration and terms and owner and next action, then checks one high-value case and one exception during the weekly review. When the item involves borrower identity or authorization is unclear, the item stays open with a named owner and a dated next action rather than being marked complete.",
          "For the \"data quality checks\" section, define the stopping condition before the mortgage support specialist starts the task. The condition log should show condition and supporting document, owner and next action, and the evidence that let the mortgage operations manager accept the result. If the item involves income or asset document conflicts, document the reason and route the decision to the underwriter; a reopened item needs a new dated action, not a copied closure note."
        ]
      },
      {
        "heading": "A note on sampling",
        "paragraphs": [
          "Concrete example: a rate lock expires while a condition remains open. The mortgage support specialist opens an application checklist, records rate-lock expiration and terms and application and disclosure date, and asks one precise question instead of filling the blank from memory. The item leaves the application, disclosure, condition, and rate-lock queue only after the mortgage operations manager accepts the next action and the evidence link is attached.",
          "The application checklist is useful for the \"a note on sampling\" control only if another person can audit it. The mortgage support specialist records owner and next action and rate-lock expiration and terms, keeps the source attached, and marks a case involving disclosure timing is at risk with the owner who accepted it. Review applications with complete disclosures during the weekly check and test one recent correction against the original evidence."
        ]
      },
      {
        "heading": "A note on evidence ownership",
        "paragraphs": [
          "A useful test for the \"a note on evidence ownership\" control is whether a disclosure timing record still makes sense after a week away. The mortgage support specialist records rate-lock expiration and terms and application and disclosure date, then checks one high-value case and one exception during the weekly review. When the item involves borrower identity or authorization is unclear, the item stays open with a named owner and a dated next action rather than being marked complete.",
          "The condition log is useful for the \"a note on evidence ownership\" control only if another person can audit it. The mortgage support specialist records condition and supporting document and rate-lock expiration and terms, keeps the source attached, and marks a case involving disclosure timing is at risk with the owner who accepted it. Review applications with complete disclosures during the weekly check and test one recent correction against the original evidence."
        ]
      },
      {
        "heading": "What would change the answer",
        "paragraphs": [
          "The application, disclosure, condition, and rate-lock queue in mortgage application and underwriting support usually fails at the handoff, not at the first task. For the \"what would change the answer\" section, the mortgage support specialist should capture the source, the version, the accountable mortgage operations manager, and the next review date in a condition log. If the item involves borrower identity or authorization is unclear, route it to the underwriter and keep the exception reason attached so a later reviewer can see why the normal path did not apply.",
          "Within mortgage application and underwriting support, the \"what would change the answer\" control is only repeatable when the mortgage support specialist can show a condition log behind each decision. Start with loan and borrower identifier, add application and disclosure date, and attach the source and date before the item moves. If the item involves rate lock expires before closing, hold the work in the application, disclosure, condition, and rate-lock queue and route the choice to the mortgage operations manager; the loan officer should be able to reconstruct the next step without asking the preparer."
        ]
      },
      {
        "heading": "Why this matters for The Mortgage Assistant",
        "paragraphs": [
          "The Mortgage Assistant supports mortgage teams with mortgage application and document support. A local protocol is useful only if it names the records this team can actually see and the decisions its owners can actually make.",
          "The \"why this matters for The Mortgage Assistant\" control becomes fragile when the application, disclosure, condition, and rate-lock queue is measured only by completed items. The mortgage support specialist should record owner and next action and application and disclosure date, keep exceptions visible, and let the mortgage operations manager decide any commitment or scope change. The loan officer can then sample a rate-lock record and compare rate locks nearing expiry without review against the work that remains open."
        ]
      },
      {
        "heading": "Writing the conclusion",
        "paragraphs": [
          "Treat the \"writing the conclusion\" control as an evidence problem before treating it as a speed problem. The mortgage support specialist can prepare an application checklist, but the mortgage operations manager keeps the decision when the item involves disclosure timing is at risk. Record files returned for missing documents with its denominator and window, then use the weekly sample to check whether the same gap keeps returning.",
          "Ask what would let a new reviewer continue the \"writing the conclusion\" work without a conversation. The answer is usually a disclosure timing record with the source, version, owner, and next action. If the item involves disclosure timing is at risk, the mortgage support specialist pauses the item, records the gap, and routes one question to the mortgage operations manager; do not close the item just to keep the queue moving."
        ]
      },
      {
        "heading": "Related reading",
        "paragraphs": [
          "The operational control behind this protocol is described in [Plan Capacity for mortgage application and document support From Real Workload](/blog/capacity-plan) and [Stop Incomplete Files in mortgage application and document support Work](/blog/document-completeness). Public context is available in [National Archives Records Management](https://www.archives.gov/records-mgmt)."
        ]
      },
      {
        "heading": "Governance and handoff",
        "paragraphs": [
          "The \"governance and handoff\" control becomes fragile when the application, disclosure, condition, and rate-lock queue is measured only by completed items. The mortgage support specialist should record application and disclosure date and condition and supporting document, keep exceptions visible, and let the mortgage operations manager decide any commitment or scope change. The compliance reviewer can then sample a disclosure timing record and compare rate locks nearing expiry without review against the work that remains open.",
          "The application, disclosure, condition, and rate-lock queue in mortgage application and underwriting support usually fails at the handoff, not at the first task. For the \"governance and handoff\" section, the mortgage support specialist should capture the source, the version, the accountable mortgage operations manager, and the next review date in a rate-lock record. If the item involves income or asset document conflicts, route it to the loan officer and keep the exception reason attached so a later reviewer can see why the normal path did not apply."
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
    "sources": [
      {
        "label": "https://www.archives.gov/records-mgmt",
        "url": "https://www.archives.gov/records-mgmt"
      },
      {
        "label": "https://www.nist.gov/cyberframework",
        "url": "https://www.nist.gov/cyberframework"
      },
      {
        "label": "https://www.sba.gov/business-guide/manage-your-business",
        "url": "https://www.sba.gov/business-guide/manage-your-business"
      },
      {
        "label": "https://www.dol.gov/agencies/whd/fact-sheets/21-flsa-recordkeeping",
        "url": "https://www.dol.gov/agencies/whd/fact-sheets/21-flsa-recordkeeping"
      }
    ]
  },
  {
    "slug": "completeness-return",
    "title": "Why Do Files Come Back Incomplete in mortgage application and document support?",
    "summary": "The control that matters for the \"sources\" section is a short, reviewable record, not a longer checklist. The mortgage support specialist captures rate-lock expiration and terms and loan and borrower identifier, labels a case involving rate lock expires before closing, and leaves the decision with the mortgage operations manager. During the weekly review, compare rate locks nearing expiry without review with the unresolved items and note which fix changed the result.",
    "cluster": "Application intake",
    "publishedAt": "2026-10-26",
    "finding": "Which required fields are missing at first review, and what causes the file to be returned? The scope is the operational record for mortgage application and document support, not the legal, financial, or clinical conclusion that may follow.",
    "thumbnail": "/article-thumbnails/october-26/completeness-return.svg",
    "sections": [
      {
        "heading": "Research question and scope",
        "paragraphs": [
          "Which required fields are missing at first review, and what causes the file to be returned? The scope is the operational record for mortgage application and document support, not the legal, financial, or clinical conclusion that may follow.",
          "The control that matters for the \"research question and scope\" section is a short, reviewable record, not a longer checklist. The mortgage support specialist captures rate-lock expiration and terms and application and disclosure date, labels a case involving borrower identity or authorization is unclear, and leaves the decision with the mortgage operations manager. During the weekly review, compare applications with complete disclosures with the unresolved items and note which fix changed the result."
        ]
      },
      {
        "heading": "Population and unit of analysis",
        "paragraphs": [
          "The control that matters for the \"population and unit of analysis\" section is a short, reviewable record, not a longer checklist. The mortgage support specialist captures application and disclosure date and owner and next action, labels a case involving rate lock expires before closing, and leaves the decision with the mortgage operations manager. During the weekly review, compare rate locks nearing expiry without review with the unresolved items and note which fix changed the result.",
          "Concrete example: an asset statement conflicts with the application. The mortgage support specialist opens an application checklist, records owner and next action and rate-lock expiration and terms, and asks one precise question instead of filling the blank from memory. The item leaves the application, disclosure, condition, and rate-lock queue only after the mortgage operations manager accepts the next action and the evidence link is attached."
        ]
      },
      {
        "heading": "Definitions and measures",
        "paragraphs": [
          "The \"definitions and measures\" control becomes fragile when the application, disclosure, condition, and rate-lock queue is measured only by completed items. The mortgage support specialist should record loan and borrower identifier and application and disclosure date, keep exceptions visible, and let the mortgage operations manager decide any commitment or scope change. The compliance reviewer can then sample a condition log and compare applications with complete disclosures against the work that remains open.",
          "Before scaling the \"definitions and measures\" workflow, make a rate-lock record readable to someone outside the original team. It should show the request, the source, rate-lock expiration and terms, the mortgage operations manager, and the next date in one place. The loan officer reviewing the application, disclosure, condition, and rate-lock queue should see exceptions, not a clean activity count that hides unresolved work."
        ]
      },
      {
        "heading": "Evidence and data dictionary",
        "paragraphs": [
          "The application, disclosure, condition, and rate-lock queue in mortgage application and underwriting support usually fails at the handoff, not at the first task. For the \"evidence and data dictionary\" section, the mortgage support specialist should capture the source, the version, the accountable mortgage operations manager, and the next review date in a rate-lock record. If the item involves rate lock expires before closing, route it to the loan officer and keep the exception reason attached so a later reviewer can see why the normal path did not apply.",
          "Within mortgage application and underwriting support, the \"evidence and data dictionary\" control is only repeatable when the mortgage support specialist can show a condition log behind each decision. Start with loan and borrower identifier, add application and disclosure date, and attach the source and date before the item moves. If the item involves rate lock expires before closing, hold the work in the application, disclosure, condition, and rate-lock queue and route the choice to the mortgage operations manager; the mortgage operations manager should be able to reconstruct the next step without asking the preparer."
        ]
      },
      {
        "heading": "Sampling and collection",
        "paragraphs": [
          "Before scaling the \"sampling and collection\" workflow, make an application checklist readable to someone outside the original team. It should show the request, the source, owner and next action, the mortgage operations manager, and the next date in one place. The loan officer reviewing the application, disclosure, condition, and rate-lock queue should see exceptions, not a clean activity count that hides unresolved work.",
          "In practice, the mortgage support specialist handles the \"sampling and collection\" work by preparing a disclosure timing record and naming the decision boundary. Include the source and retrieval date, condition and supporting document, and the next action owner. When the item involves borrower identity or authorization is unclear, the item goes to the compliance reviewer with the evidence already checked; the application, disclosure, condition, and rate-lock queue should show the hold, not hide it."
        ]
      },
      {
        "heading": "Reviewer independence",
        "paragraphs": [
          "Treat the \"reviewer independence\" control as an evidence problem before treating it as a speed problem. The mortgage support specialist can prepare a condition log, but the mortgage operations manager keeps the decision when the item involves rate lock expires before closing. Record conditions cleared by owner with its denominator and window, then use the weekly sample to check whether the same gap keeps returning.",
          "In practice, the mortgage support specialist handles the \"reviewer independence\" work by preparing a condition log and naming the decision boundary. Include the source and retrieval date, application and disclosure date, and the next action owner. When the item involves income or asset document conflicts, the item goes to the mortgage operations manager with the evidence already checked; the application, disclosure, condition, and rate-lock queue should show the hold, not hide it."
        ]
      },
      {
        "heading": "What the evidence can support",
        "paragraphs": [
          "The record can show field presence, source currency, named ownership, and where the mortgage application and document support record is thin. It can support a required-field list by work type, a return-message template, a waiver log.",
          "Concrete example: a disclosure is sent after the timing window. The mortgage support specialist opens an application checklist, records application and disclosure date and loan and borrower identifier, and asks one precise question instead of filling the blank from memory. The item leaves the application, disclosure, condition, and rate-lock queue only after the mortgage operations manager accepts the next action and the evidence link is attached."
        ]
      },
      {
        "heading": "Limitations and error",
        "paragraphs": [
          "Concrete example: a rate lock expires while a condition remains open. The mortgage support specialist opens an application checklist, records rate-lock expiration and terms and loan and borrower identifier, and asks one precise question instead of filling the blank from memory. The item leaves the application, disclosure, condition, and rate-lock queue only after the mortgage operations manager accepts the next action and the evidence link is attached.",
          "Treat the \"limitations and error\" control as an evidence problem before treating it as a speed problem. The mortgage support specialist can prepare a disclosure timing record, but the mortgage operations manager keeps the decision when the item involves borrower identity or authorization is unclear. Record files returned for missing documents with its denominator and window, then use the weekly sample to check whether the same gap keeps returning."
        ]
      },
      {
        "heading": "Sensitivity and alternatives",
        "paragraphs": [
          "Before scaling the \"sensitivity and alternatives\" workflow, make a disclosure timing record readable to someone outside the original team. It should show the request, the source, application and disclosure date, the mortgage operations manager, and the next date in one place. The compliance reviewer reviewing the application, disclosure, condition, and rate-lock queue should see exceptions, not a clean activity count that hides unresolved work.",
          "The application, disclosure, condition, and rate-lock queue in mortgage application and underwriting support usually fails at the handoff, not at the first task. For the \"sensitivity and alternatives\" section, the mortgage support specialist should capture the source, the version, the accountable mortgage operations manager, and the next review date in a rate-lock record. If the item involves disclosure timing is at risk, route it to the underwriter and keep the exception reason attached so a later reviewer can see why the normal path did not apply."
        ]
      },
      {
        "heading": "Privacy, access, and retention",
        "paragraphs": [
          "In practice, the mortgage support specialist handles the \"privacy, access, and retention\" work by preparing an application checklist and naming the decision boundary. Include the source and retrieval date, condition and supporting document, and the next action owner. When the item involves disclosure timing is at risk, the item goes to the compliance reviewer with the evidence already checked; the application, disclosure, condition, and rate-lock queue should show the hold, not hide it.",
          "Within mortgage application and underwriting support, the \"privacy, access, and retention\" control is only repeatable when the mortgage support specialist can show a disclosure timing record behind each decision. Start with condition and supporting document, add owner and next action, and attach the source and date before the item moves. If the item involves rate lock expires before closing, hold the work in the application, disclosure, condition, and rate-lock queue and route the choice to the mortgage operations manager; the mortgage operations manager should be able to reconstruct the next step without asking the preparer."
        ]
      },
      {
        "heading": "Operational use and reporting",
        "paragraphs": [
          "Publish the case flow, definitions, counts, unresolved items, disagreement summary, and limits together. Separate observations, calculations, and owner judgments.",
          "Ask what would let a new reviewer continue the \"operational use and reporting\" work without a conversation. The answer is usually a condition log with the source, version, owner, and next action. If the item involves disclosure timing is at risk, the mortgage support specialist pauses the item, records the gap, and routes one question to the loan officer; do not close the item just to keep the queue moving."
        ]
      },
      {
        "heading": "Governance and stopping",
        "paragraphs": [
          "Concrete example: a disclosure is sent after the timing window. The mortgage support specialist opens a disclosure timing record, records rate-lock expiration and terms and application and disclosure date, and asks one precise question instead of filling the blank from memory. The item leaves the application, disclosure, condition, and rate-lock queue only after the mortgage operations manager accepts the next action and the evidence link is attached.",
          "For the \"governance and stopping\" section, define the stopping condition before the mortgage support specialist starts the task. The condition log should show owner and next action, loan and borrower identifier, and the evidence that let the mortgage operations manager accept the result. If the item involves income or asset document conflicts, document the reason and route the decision to the underwriter; a reopened item needs a new dated action, not a copied closure note."
        ]
      },
      {
        "heading": "A calibration case",
        "paragraphs": [
          "Ask what would let a new reviewer continue the \"a calibration case\" work without a conversation. The answer is usually a disclosure timing record with the source, version, owner, and next action. If the item involves rate lock expires before closing, the mortgage support specialist pauses the item, records the gap, and routes one question to the mortgage operations manager; do not close the item just to keep the queue moving.",
          "In practice, the mortgage support specialist handles the \"a calibration case\" work by preparing a condition log and naming the decision boundary. Include the source and retrieval date, application and disclosure date, and the next action owner. When the item involves disclosure timing is at risk, the item goes to the compliance reviewer with the evidence already checked; the application, disclosure, condition, and rate-lock queue should show the hold, not hide it."
        ]
      },
      {
        "heading": "Effort and practical constraints",
        "paragraphs": [
          "Before scaling the \"effort and practical constraints\" workflow, make an application checklist readable to someone outside the original team. It should show the request, the source, owner and next action, the mortgage operations manager, and the next date in one place. The compliance reviewer reviewing the application, disclosure, condition, and rate-lock queue should see exceptions, not a clean activity count that hides unresolved work.",
          "Before scaling the \"effort and practical constraints\" workflow, make an application checklist readable to someone outside the original team. It should show the request, the source, loan and borrower identifier, the mortgage operations manager, and the next date in one place. The compliance reviewer reviewing the application, disclosure, condition, and rate-lock queue should see exceptions, not a clean activity count that hides unresolved work."
        ]
      },
      {
        "heading": "Reporting package",
        "paragraphs": [
          "Publish the case flow, definitions, counts, unresolved items, disagreement summary, and limitations together. Label observations, calculations, and owner judgments.",
          "Ask what would let a new reviewer continue the \"reporting package\" work without a conversation. The answer is usually an application checklist with the source, version, owner, and next action. If the item involves rate lock expires before closing, the mortgage support specialist pauses the item, records the gap, and routes one question to the mortgage operations manager; do not close the item just to keep the queue moving."
        ]
      },
      {
        "heading": "Interpreting a small sample",
        "paragraphs": [
          "The control that matters for the \"interpreting a small sample\" section is a short, reviewable record, not a longer checklist. The mortgage support specialist captures rate-lock expiration and terms and loan and borrower identifier, labels a case involving disclosure timing is at risk, and leaves the decision with the mortgage operations manager. During the weekly review, compare conditions cleared by owner with the unresolved items and note which fix changed the result.",
          "In practice, the mortgage support specialist handles the \"interpreting a small sample\" work by preparing an application checklist and naming the decision boundary. Include the source and retrieval date, application and disclosure date, and the next action owner. When the item involves borrower identity or authorization is unclear, the item goes to the compliance reviewer with the evidence already checked; the application, disclosure, condition, and rate-lock queue should show the hold, not hide it."
        ]
      },
      {
        "heading": "Reopening conditions",
        "paragraphs": [
          "The application, disclosure, condition, and rate-lock queue in mortgage application and underwriting support usually fails at the handoff, not at the first task. For the \"reopening conditions\" section, the mortgage support specialist should capture the source, the version, the accountable mortgage operations manager, and the next review date in a rate-lock record. If the item involves disclosure timing is at risk, route it to the mortgage operations manager and keep the exception reason attached so a later reviewer can see why the normal path did not apply.",
          "A useful test for the \"reopening conditions\" control is whether a disclosure timing record still makes sense after a week away. The mortgage support specialist records application and disclosure date and condition and supporting document, then checks one high-value case and one exception during the weekly review. When the item involves borrower identity or authorization is unclear, the item stays open with a named owner and a dated next action rather than being marked complete."
        ]
      },
      {
        "heading": "A worked example of the record",
        "paragraphs": [
          "An item arrives with a source that is one version behind the current mortgage application and document support record. The reviewer flags the version, keeps the item open, and asks one question. No one rebuilds the case from memory.",
          "Ask what would let a new reviewer continue the \"a worked example of the record\" work without a conversation. The answer is usually an application checklist with the source, version, owner, and next action. If the item involves borrower identity or authorization is unclear, the mortgage support specialist pauses the item, records the gap, and routes one question to the mortgage operations manager; do not close the item just to keep the queue moving."
        ]
      },
      {
        "heading": "Common failure modes",
        "paragraphs": [
          "Concrete example: a disclosure is sent after the timing window. The mortgage support specialist opens a condition log, records application and disclosure date and condition and supporting document, and asks one precise question instead of filling the blank from memory. The item leaves the application, disclosure, condition, and rate-lock queue only after the mortgage operations manager accepts the next action and the evidence link is attached.",
          "A useful test for the \"common failure modes\" control is whether a disclosure timing record still makes sense after a week away. The mortgage support specialist records application and disclosure date and condition and supporting document, then checks one high-value case and one exception during the weekly review. When the item involves borrower identity or authorization is unclear, the item stays open with a named owner and a dated next action rather than being marked complete."
        ]
      },
      {
        "heading": "What the result does not prove",
        "paragraphs": [
          "The result does not prove that the mortgage application and document support work was correct, that a customer will be satisfied, or that one staffing model is better. It describes the record and the process around it.",
          "Ask what would let a new reviewer continue the \"what the result does not prove\" work without a conversation. The answer is usually a rate-lock record with the source, version, owner, and next action. If the item involves rate lock expires before closing, the mortgage support specialist pauses the item, records the gap, and routes one question to the compliance reviewer; do not close the item just to keep the queue moving."
        ]
      },
      {
        "heading": "A short review agenda",
        "paragraphs": [
          "The control that matters for the \"a short review agenda\" section is a short, reviewable record, not a longer checklist. The mortgage support specialist captures rate-lock expiration and terms and owner and next action, labels a case involving rate lock expires before closing, and leaves the decision with the mortgage operations manager. During the weekly review, compare conditions cleared by owner with the unresolved items and note which fix changed the result.",
          "In practice, the mortgage support specialist handles the \"a short review agenda\" work by preparing a condition log and naming the decision boundary. Include the source and retrieval date, loan and borrower identifier, and the next action owner. When the item involves rate lock expires before closing, the item goes to the underwriter with the evidence already checked; the application, disclosure, condition, and rate-lock queue should show the hold, not hide it."
        ]
      },
      {
        "heading": "Data quality checks",
        "paragraphs": [
          "Treat the \"data quality checks\" control as an evidence problem before treating it as a speed problem. The mortgage support specialist can prepare a rate-lock record, but the mortgage operations manager keeps the decision when the item involves disclosure timing is at risk. Record rate locks nearing expiry without review with its denominator and window, then use the weekly sample to check whether the same gap keeps returning.",
          "Treat the \"data quality checks\" control as an evidence problem before treating it as a speed problem. The mortgage support specialist can prepare a condition log, but the mortgage operations manager keeps the decision when the item involves disclosure timing is at risk. Record conditions cleared by owner with its denominator and window, then use the weekly sample to check whether the same gap keeps returning."
        ]
      },
      {
        "heading": "A note on sampling",
        "paragraphs": [
          "In practice, the mortgage support specialist handles the \"a note on sampling\" work by preparing a condition log and naming the decision boundary. Include the source and retrieval date, rate-lock expiration and terms, and the next action owner. When the item involves rate lock expires before closing, the item goes to the mortgage operations manager with the evidence already checked; the application, disclosure, condition, and rate-lock queue should show the hold, not hide it.",
          "The disclosure timing record is useful for the \"a note on sampling\" control only if another person can audit it. The mortgage support specialist records loan and borrower identifier and rate-lock expiration and terms, keeps the source attached, and marks a case involving borrower identity or authorization is unclear with the owner who accepted it. Review applications with complete disclosures during the weekly check and test one recent correction against the original evidence."
        ]
      },
      {
        "heading": "A note on evidence ownership",
        "paragraphs": [
          "Within mortgage application and underwriting support, the \"a note on evidence ownership\" control is only repeatable when the mortgage support specialist can show a disclosure timing record behind each decision. Start with loan and borrower identifier, add owner and next action, and attach the source and date before the item moves. If the item involves disclosure timing is at risk, hold the work in the application, disclosure, condition, and rate-lock queue and route the choice to the mortgage operations manager; the mortgage operations manager should be able to reconstruct the next step without asking the preparer.",
          "The control that matters for the \"a note on evidence ownership\" section is a short, reviewable record, not a longer checklist. The mortgage support specialist captures owner and next action and loan and borrower identifier, labels a case involving income or asset document conflicts, and leaves the decision with the mortgage operations manager. During the weekly review, compare rate locks nearing expiry without review with the unresolved items and note which fix changed the result."
        ]
      },
      {
        "heading": "What would change the answer",
        "paragraphs": [
          "A useful test for the \"what would change the answer\" control is whether a rate-lock record still makes sense after a week away. The mortgage support specialist records rate-lock expiration and terms and owner and next action, then checks one high-value case and one exception during the weekly review. When the item involves rate lock expires before closing, the item stays open with a named owner and a dated next action rather than being marked complete.",
          "The application, disclosure, condition, and rate-lock queue in mortgage application and underwriting support usually fails at the handoff, not at the first task. For the \"what would change the answer\" section, the mortgage support specialist should capture the source, the version, the accountable mortgage operations manager, and the next review date in a condition log. If the item involves disclosure timing is at risk, route it to the compliance reviewer and keep the exception reason attached so a later reviewer can see why the normal path did not apply."
        ]
      },
      {
        "heading": "Why this matters for The Mortgage Assistant",
        "paragraphs": [
          "The Mortgage Assistant supports mortgage teams with mortgage application and document support. A local protocol is useful only if it names the records this team can actually see and the decisions its owners can actually make.",
          "Ask what would let a new reviewer continue the \"why this matters for The Mortgage Assistant\" work without a conversation. The answer is usually a rate-lock record with the source, version, owner, and next action. If the item involves rate lock expires before closing, the mortgage support specialist pauses the item, records the gap, and routes one question to the compliance reviewer; do not close the item just to keep the queue moving."
        ]
      },
      {
        "heading": "Writing the conclusion",
        "paragraphs": [
          "Concrete example: a disclosure is sent after the timing window. The mortgage support specialist opens a rate-lock record, records rate-lock expiration and terms and condition and supporting document, and asks one precise question instead of filling the blank from memory. The item leaves the application, disclosure, condition, and rate-lock queue only after the mortgage operations manager accepts the next action and the evidence link is attached.",
          "Concrete example: an asset statement conflicts with the application. The mortgage support specialist opens a disclosure timing record, records rate-lock expiration and terms and condition and supporting document, and asks one precise question instead of filling the blank from memory. The item leaves the application, disclosure, condition, and rate-lock queue only after the mortgage operations manager accepts the next action and the evidence link is attached."
        ]
      },
      {
        "heading": "Related reading",
        "paragraphs": [
          "The operational control behind this protocol is described in [Stop Incomplete Files in mortgage application and document support Work](/blog/document-completeness) and [Set a Client Update Cadence for mortgage application and document support](/blog/client-update-cadence). Public context is available in [GAO Standards for Internal Control](https://www.gao.gov/products/gao-14-704g)."
        ]
      },
      {
        "heading": "Governance and handoff",
        "paragraphs": [
          "A useful test for the \"governance and handoff\" control is whether an application checklist still makes sense after a week away. The mortgage support specialist records application and disclosure date and condition and supporting document, then checks one high-value case and one exception during the weekly review. When the item involves rate lock expires before closing, the item stays open with a named owner and a dated next action rather than being marked complete.",
          "The disclosure timing record is useful for the \"governance and handoff\" control only if another person can audit it. The mortgage support specialist records application and disclosure date and rate-lock expiration and terms, keeps the source attached, and marks a case involving disclosure timing is at risk with the owner who accepted it. Review files returned for missing documents during the weekly check and test one recent correction against the original evidence."
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
    "sources": [
      {
        "label": "https://www.gao.gov/products/gao-14-704g",
        "url": "https://www.gao.gov/products/gao-14-704g"
      },
      {
        "label": "https://www.sba.gov/business-guide/manage-your-business",
        "url": "https://www.sba.gov/business-guide/manage-your-business"
      },
      {
        "label": "https://www.dol.gov/agencies/whd/fact-sheets/21-flsa-recordkeeping",
        "url": "https://www.dol.gov/agencies/whd/fact-sheets/21-flsa-recordkeeping"
      },
      {
        "label": "https://www.archives.gov/records-mgmt",
        "url": "https://www.archives.gov/records-mgmt"
      }
    ]
  },
  {
    "slug": "threshold-compliance",
    "title": "Are Approvals Routed at the Right Level in mortgage application and document support?",
    "summary": "A protocol testing whether sampled mortgage application and document support approvals used the level required by the written threshold.",
    "cluster": "Application intake",
    "publishedAt": "2026-10-26",
    "finding": "What share of sampled approvals were made at the level required by the threshold in force at the time? The scope is the operational record for mortgage application and document support, not the legal, financial, or clinical conclusion that may follow.",
    "thumbnail": "/article-thumbnails/october-26/threshold-compliance.svg",
    "sections": [
      {
        "heading": "Research question and scope",
        "paragraphs": [
          "What share of sampled approvals were made at the level required by the threshold in force at the time? The scope is the operational record for mortgage application and document support, not the legal, financial, or clinical conclusion that may follow.",
          "A useful test for the \"research question and scope\" control is whether a disclosure timing record still makes sense after a week away. The mortgage support specialist records application and disclosure date and owner and next action, then checks one high-value case and one exception during the weekly review. When the item involves borrower identity or authorization is unclear, the item stays open with a named owner and a dated next action rather than being marked complete."
        ]
      },
      {
        "heading": "Population and unit of analysis",
        "paragraphs": [
          "A useful test for the \"population and unit of analysis\" control is whether a disclosure timing record still makes sense after a week away. The mortgage support specialist records application and disclosure date and condition and supporting document, then checks one high-value case and one exception during the weekly review. When the item involves borrower identity or authorization is unclear, the item stays open with a named owner and a dated next action rather than being marked complete.",
          "For the \"population and unit of analysis\" section, define the stopping condition before the mortgage support specialist starts the task. The condition log should show owner and next action, condition and supporting document, and the evidence that let the mortgage operations manager accept the result. If the item involves income or asset document conflicts, document the reason and route the decision to the compliance reviewer; a reopened item needs a new dated action, not a copied closure note."
        ]
      },
      {
        "heading": "Definitions and measures",
        "paragraphs": [
          "Within mortgage application and underwriting support, the \"definitions and measures\" control is only repeatable when the mortgage support specialist can show a disclosure timing record behind each decision. Start with application and disclosure date, add owner and next action, and attach the source and date before the item moves. If the item involves income or asset document conflicts, hold the work in the application, disclosure, condition, and rate-lock queue and route the choice to the mortgage operations manager; the loan officer should be able to reconstruct the next step without asking the preparer.",
          "Ask what would let a new reviewer continue the \"definitions and measures\" work without a conversation. The answer is usually a condition log with the source, version, owner, and next action. If the item involves rate lock expires before closing, the mortgage support specialist pauses the item, records the gap, and routes one question to the loan officer; do not close the item just to keep the queue moving."
        ]
      },
      {
        "heading": "Evidence and data dictionary",
        "paragraphs": [
          "Concrete example: a rate lock expires while a condition remains open. The mortgage support specialist opens a condition log, records condition and supporting document and rate-lock expiration and terms, and asks one precise question instead of filling the blank from memory. The item leaves the application, disclosure, condition, and rate-lock queue only after the mortgage operations manager accepts the next action and the evidence link is attached.",
          "For the \"evidence and data dictionary\" section, define the stopping condition before the mortgage support specialist starts the task. The condition log should show rate-lock expiration and terms, owner and next action, and the evidence that let the mortgage operations manager accept the result. If the item involves rate lock expires before closing, document the reason and route the decision to the mortgage operations manager; a reopened item needs a new dated action, not a copied closure note."
        ]
      },
      {
        "heading": "Sampling and collection",
        "paragraphs": [
          "The application, disclosure, condition, and rate-lock queue in mortgage application and underwriting support usually fails at the handoff, not at the first task. For the \"sampling and collection\" section, the mortgage support specialist should capture the source, the version, the accountable mortgage operations manager, and the next review date in an application checklist. If the item involves rate lock expires before closing, route it to the mortgage operations manager and keep the exception reason attached so a later reviewer can see why the normal path did not apply.",
          "The application, disclosure, condition, and rate-lock queue in mortgage application and underwriting support usually fails at the handoff, not at the first task. For the \"sampling and collection\" section, the mortgage support specialist should capture the source, the version, the accountable mortgage operations manager, and the next review date in a condition log. If the item involves rate lock expires before closing, route it to the compliance reviewer and keep the exception reason attached so a later reviewer can see why the normal path did not apply."
        ]
      },
      {
        "heading": "Reviewer independence",
        "paragraphs": [
          "The \"reviewer independence\" control becomes fragile when the application, disclosure, condition, and rate-lock queue is measured only by completed items. The mortgage support specialist should record condition and supporting document and loan and borrower identifier, keep exceptions visible, and let the mortgage operations manager decide any commitment or scope change. The compliance reviewer can then sample a rate-lock record and compare applications with complete disclosures against the work that remains open.",
          "Concrete example: an asset statement conflicts with the application. The mortgage support specialist opens a rate-lock record, records rate-lock expiration and terms and condition and supporting document, and asks one precise question instead of filling the blank from memory. The item leaves the application, disclosure, condition, and rate-lock queue only after the mortgage operations manager accepts the next action and the evidence link is attached."
        ]
      },
      {
        "heading": "What the evidence can support",
        "paragraphs": [
          "The record can show field presence, source currency, named ownership, and where the mortgage application and document support record is thin. It can support a threshold schedule with an effective date, an approval log, a split-request check.",
          "For the \"what the evidence can support\" section, define the stopping condition before the mortgage support specialist starts the task. The disclosure timing record should show condition and supporting document, loan and borrower identifier, and the evidence that let the mortgage operations manager accept the result. If the item involves disclosure timing is at risk, document the reason and route the decision to the compliance reviewer; a reopened item needs a new dated action, not a copied closure note."
        ]
      },
      {
        "heading": "Limitations and error",
        "paragraphs": [
          "In practice, the mortgage support specialist handles the \"limitations and error\" work by preparing a condition log and naming the decision boundary. Include the source and retrieval date, condition and supporting document, and the next action owner. When the item involves borrower identity or authorization is unclear, the item goes to the underwriter with the evidence already checked; the application, disclosure, condition, and rate-lock queue should show the hold, not hide it.",
          "Concrete example: a disclosure is sent after the timing window. The mortgage support specialist opens an application checklist, records rate-lock expiration and terms and application and disclosure date, and asks one precise question instead of filling the blank from memory. The item leaves the application, disclosure, condition, and rate-lock queue only after the mortgage operations manager accepts the next action and the evidence link is attached."
        ]
      },
      {
        "heading": "Sensitivity and alternatives",
        "paragraphs": [
          "For the \"sensitivity and alternatives\" section, define the stopping condition before the mortgage support specialist starts the task. The application checklist should show owner and next action, condition and supporting document, and the evidence that let the mortgage operations manager accept the result. If the item involves income or asset document conflicts, document the reason and route the decision to the mortgage operations manager; a reopened item needs a new dated action, not a copied closure note.",
          "Within mortgage application and underwriting support, the \"sensitivity and alternatives\" control is only repeatable when the mortgage support specialist can show a condition log behind each decision. Start with condition and supporting document, add loan and borrower identifier, and attach the source and date before the item moves. If the item involves income or asset document conflicts, hold the work in the application, disclosure, condition, and rate-lock queue and route the choice to the mortgage operations manager; the loan officer should be able to reconstruct the next step without asking the preparer."
        ]
      },
      {
        "heading": "Privacy, access, and retention",
        "paragraphs": [
          "Treat the \"privacy, access, and retention\" control as an evidence problem before treating it as a speed problem. The mortgage support specialist can prepare a condition log, but the mortgage operations manager keeps the decision when the item involves income or asset document conflicts. Record rate locks nearing expiry without review with its denominator and window, then use the weekly sample to check whether the same gap keeps returning.",
          "Ask what would let a new reviewer continue the \"privacy, access, and retention\" work without a conversation. The answer is usually a rate-lock record with the source, version, owner, and next action. If the item involves income or asset document conflicts, the mortgage support specialist pauses the item, records the gap, and routes one question to the underwriter; do not close the item just to keep the queue moving."
        ]
      },
      {
        "heading": "Operational use and reporting",
        "paragraphs": [
          "Publish the case flow, definitions, counts, unresolved items, disagreement summary, and limits together. Separate observations, calculations, and owner judgments.",
          "Before scaling the \"operational use and reporting\" workflow, make an application checklist readable to someone outside the original team. It should show the request, the source, owner and next action, the mortgage operations manager, and the next date in one place. The mortgage operations manager reviewing the application, disclosure, condition, and rate-lock queue should see exceptions, not a clean activity count that hides unresolved work."
        ]
      },
      {
        "heading": "Governance and stopping",
        "paragraphs": [
          "The application, disclosure, condition, and rate-lock queue in mortgage application and underwriting support usually fails at the handoff, not at the first task. For the \"governance and stopping\" section, the mortgage support specialist should capture the source, the version, the accountable mortgage operations manager, and the next review date in a disclosure timing record. If the item involves borrower identity or authorization is unclear, route it to the compliance reviewer and keep the exception reason attached so a later reviewer can see why the normal path did not apply.",
          "For the \"governance and stopping\" section, define the stopping condition before the mortgage support specialist starts the task. The disclosure timing record should show rate-lock expiration and terms, owner and next action, and the evidence that let the mortgage operations manager accept the result. If the item involves disclosure timing is at risk, document the reason and route the decision to the underwriter; a reopened item needs a new dated action, not a copied closure note."
        ]
      },
      {
        "heading": "A calibration case",
        "paragraphs": [
          "In practice, the mortgage support specialist handles the \"a calibration case\" work by preparing an application checklist and naming the decision boundary. Include the source and retrieval date, condition and supporting document, and the next action owner. When the item involves income or asset document conflicts, the item goes to the loan officer with the evidence already checked; the application, disclosure, condition, and rate-lock queue should show the hold, not hide it.",
          "A useful test for the \"a calibration case\" control is whether a disclosure timing record still makes sense after a week away. The mortgage support specialist records loan and borrower identifier and condition and supporting document, then checks one high-value case and one exception during the weekly review. When the item involves borrower identity or authorization is unclear, the item stays open with a named owner and a dated next action rather than being marked complete."
        ]
      },
      {
        "heading": "Effort and practical constraints",
        "paragraphs": [
          "Ask what would let a new reviewer continue the \"effort and practical constraints\" work without a conversation. The answer is usually a rate-lock record with the source, version, owner, and next action. If the item involves disclosure timing is at risk, the mortgage support specialist pauses the item, records the gap, and routes one question to the mortgage operations manager; do not close the item just to keep the queue moving.",
          "Treat the \"effort and practical constraints\" control as an evidence problem before treating it as a speed problem. The mortgage support specialist can prepare an application checklist, but the mortgage operations manager keeps the decision when the item involves rate lock expires before closing. Record rate locks nearing expiry without review with its denominator and window, then use the weekly sample to check whether the same gap keeps returning."
        ]
      },
      {
        "heading": "Reporting package",
        "paragraphs": [
          "Publish the case flow, definitions, counts, unresolved items, disagreement summary, and limitations together. Label observations, calculations, and owner judgments.",
          "The condition log is useful for the \"reporting package\" control only if another person can audit it. The mortgage support specialist records condition and supporting document and loan and borrower identifier, keeps the source attached, and marks a case involving disclosure timing is at risk with the owner who accepted it. Review conditions cleared by owner during the weekly check and test one recent correction against the original evidence."
        ]
      },
      {
        "heading": "Interpreting a small sample",
        "paragraphs": [
          "For the \"interpreting a small sample\" section, define the stopping condition before the mortgage support specialist starts the task. The condition log should show application and disclosure date, condition and supporting document, and the evidence that let the mortgage operations manager accept the result. If the item involves disclosure timing is at risk, document the reason and route the decision to the compliance reviewer; a reopened item needs a new dated action, not a copied closure note.",
          "The control that matters for the \"interpreting a small sample\" section is a short, reviewable record, not a longer checklist. The mortgage support specialist captures loan and borrower identifier and owner and next action, labels a case involving disclosure timing is at risk, and leaves the decision with the mortgage operations manager. During the weekly review, compare files returned for missing documents with the unresolved items and note which fix changed the result."
        ]
      },
      {
        "heading": "Reopening conditions",
        "paragraphs": [
          "The application, disclosure, condition, and rate-lock queue in mortgage application and underwriting support usually fails at the handoff, not at the first task. For the \"reopening conditions\" section, the mortgage support specialist should capture the source, the version, the accountable mortgage operations manager, and the next review date in a disclosure timing record. If the item involves income or asset document conflicts, route it to the underwriter and keep the exception reason attached so a later reviewer can see why the normal path did not apply.",
          "A useful test for the \"reopening conditions\" control is whether an application checklist still makes sense after a week away. The mortgage support specialist records rate-lock expiration and terms and condition and supporting document, then checks one high-value case and one exception during the weekly review. When the item involves borrower identity or authorization is unclear, the item stays open with a named owner and a dated next action rather than being marked complete."
        ]
      },
      {
        "heading": "A worked example of the record",
        "paragraphs": [
          "An item arrives with a source that is one version behind the current mortgage application and document support record. The reviewer flags the version, keeps the item open, and asks one question. No one rebuilds the case from memory.",
          "Ask what would let a new reviewer continue the \"a worked example of the record\" work without a conversation. The answer is usually a disclosure timing record with the source, version, owner, and next action. If the item involves income or asset document conflicts, the mortgage support specialist pauses the item, records the gap, and routes one question to the compliance reviewer; do not close the item just to keep the queue moving."
        ]
      },
      {
        "heading": "Common failure modes",
        "paragraphs": [
          "The disclosure timing record is useful for the \"common failure modes\" control only if another person can audit it. The mortgage support specialist records owner and next action and loan and borrower identifier, keeps the source attached, and marks a case involving income or asset document conflicts with the owner who accepted it. Review rate locks nearing expiry without review during the weekly check and test one recent correction against the original evidence.",
          "A useful test for the \"common failure modes\" control is whether a condition log still makes sense after a week away. The mortgage support specialist records owner and next action and rate-lock expiration and terms, then checks one high-value case and one exception during the weekly review. When the item involves disclosure timing is at risk, the item stays open with a named owner and a dated next action rather than being marked complete."
        ]
      },
      {
        "heading": "What the result does not prove",
        "paragraphs": [
          "The result does not prove that the mortgage application and document support work was correct, that a customer will be satisfied, or that one staffing model is better. It describes the record and the process around it.",
          "The control that matters for the \"what the result does not prove\" section is a short, reviewable record, not a longer checklist. The mortgage support specialist captures loan and borrower identifier and owner and next action, labels a case involving rate lock expires before closing, and leaves the decision with the mortgage operations manager. During the weekly review, compare files returned for missing documents with the unresolved items and note which fix changed the result."
        ]
      },
      {
        "heading": "A short review agenda",
        "paragraphs": [
          "The application, disclosure, condition, and rate-lock queue in mortgage application and underwriting support usually fails at the handoff, not at the first task. For the \"a short review agenda\" section, the mortgage support specialist should capture the source, the version, the accountable mortgage operations manager, and the next review date in a rate-lock record. If the item involves rate lock expires before closing, route it to the underwriter and keep the exception reason attached so a later reviewer can see why the normal path did not apply.",
          "For the \"a short review agenda\" section, define the stopping condition before the mortgage support specialist starts the task. The condition log should show rate-lock expiration and terms, owner and next action, and the evidence that let the mortgage operations manager accept the result. If the item involves rate lock expires before closing, document the reason and route the decision to the loan officer; a reopened item needs a new dated action, not a copied closure note."
        ]
      },
      {
        "heading": "Data quality checks",
        "paragraphs": [
          "Treat the \"data quality checks\" control as an evidence problem before treating it as a speed problem. The mortgage support specialist can prepare an application checklist, but the mortgage operations manager keeps the decision when the item involves borrower identity or authorization is unclear. Record conditions cleared by owner with its denominator and window, then use the weekly sample to check whether the same gap keeps returning.",
          "Before scaling the \"data quality checks\" workflow, make a condition log readable to someone outside the original team. It should show the request, the source, loan and borrower identifier, the mortgage operations manager, and the next date in one place. The underwriter reviewing the application, disclosure, condition, and rate-lock queue should see exceptions, not a clean activity count that hides unresolved work."
        ]
      },
      {
        "heading": "A note on sampling",
        "paragraphs": [
          "Treat the \"a note on sampling\" control as an evidence problem before treating it as a speed problem. The mortgage support specialist can prepare a condition log, but the mortgage operations manager keeps the decision when the item involves borrower identity or authorization is unclear. Record conditions cleared by owner with its denominator and window, then use the weekly sample to check whether the same gap keeps returning.",
          "The control that matters for the \"a note on sampling\" section is a short, reviewable record, not a longer checklist. The mortgage support specialist captures loan and borrower identifier and application and disclosure date, labels a case involving income or asset document conflicts, and leaves the decision with the mortgage operations manager. During the weekly review, compare files returned for missing documents with the unresolved items and note which fix changed the result."
        ]
      },
      {
        "heading": "A note on evidence ownership",
        "paragraphs": [
          "For the \"a note on evidence ownership\" section, define the stopping condition before the mortgage support specialist starts the task. The application checklist should show owner and next action, loan and borrower identifier, and the evidence that let the mortgage operations manager accept the result. If the item involves income or asset document conflicts, document the reason and route the decision to the underwriter; a reopened item needs a new dated action, not a copied closure note.",
          "Before scaling the \"a note on evidence ownership\" workflow, make a rate-lock record readable to someone outside the original team. It should show the request, the source, condition and supporting document, the mortgage operations manager, and the next date in one place. The mortgage operations manager reviewing the application, disclosure, condition, and rate-lock queue should see exceptions, not a clean activity count that hides unresolved work."
        ]
      },
      {
        "heading": "What would change the answer",
        "paragraphs": [
          "Before scaling the \"what would change the answer\" workflow, make an application checklist readable to someone outside the original team. It should show the request, the source, condition and supporting document, the mortgage operations manager, and the next date in one place. The compliance reviewer reviewing the application, disclosure, condition, and rate-lock queue should see exceptions, not a clean activity count that hides unresolved work.",
          "The application checklist is useful for the \"what would change the answer\" control only if another person can audit it. The mortgage support specialist records application and disclosure date and loan and borrower identifier, keeps the source attached, and marks a case involving borrower identity or authorization is unclear with the owner who accepted it. Review conditions cleared by owner during the weekly check and test one recent correction against the original evidence."
        ]
      },
      {
        "heading": "Why this matters for The Mortgage Assistant",
        "paragraphs": [
          "The Mortgage Assistant supports mortgage teams with mortgage application and document support. A local protocol is useful only if it names the records this team can actually see and the decisions its owners can actually make.",
          "A useful test for the \"why this matters for The Mortgage Assistant\" control is whether an application checklist still makes sense after a week away. The mortgage support specialist records owner and next action and rate-lock expiration and terms, then checks one high-value case and one exception during the weekly review. When the item involves disclosure timing is at risk, the item stays open with a named owner and a dated next action rather than being marked complete."
        ]
      },
      {
        "heading": "Writing the conclusion",
        "paragraphs": [
          "Treat the \"writing the conclusion\" control as an evidence problem before treating it as a speed problem. The mortgage support specialist can prepare a disclosure timing record, but the mortgage operations manager keeps the decision when the item involves rate lock expires before closing. Record conditions cleared by owner with its denominator and window, then use the weekly sample to check whether the same gap keeps returning.",
          "Treat the \"writing the conclusion\" control as an evidence problem before treating it as a speed problem. The mortgage support specialist can prepare a disclosure timing record, but the mortgage operations manager keeps the decision when the item involves rate lock expires before closing. Record files returned for missing documents with its denominator and window, then use the weekly sample to check whether the same gap keeps returning."
        ]
      },
      {
        "heading": "Related reading",
        "paragraphs": [
          "The operational control behind this protocol is described in [Set a Client Update Cadence for mortgage application and document support](/blog/client-update-cadence) and [Track Supplier Follow-Up for mortgage application and document support](/blog/supplier-followup). Public context is available in [NIST Cybersecurity Framework](https://www.nist.gov/cyberframework)."
        ]
      },
      {
        "heading": "Governance and handoff",
        "paragraphs": [
          "Concrete example: an asset statement conflicts with the application. The mortgage support specialist opens an application checklist, records rate-lock expiration and terms and condition and supporting document, and asks one precise question instead of filling the blank from memory. The item leaves the application, disclosure, condition, and rate-lock queue only after the mortgage operations manager accepts the next action and the evidence link is attached.",
          "The application, disclosure, condition, and rate-lock queue in mortgage application and underwriting support usually fails at the handoff, not at the first task. For the \"governance and handoff\" section, the mortgage support specialist should capture the source, the version, the accountable mortgage operations manager, and the next review date in an application checklist. If the item involves borrower identity or authorization is unclear, route it to the mortgage operations manager and keep the exception reason attached so a later reviewer can see why the normal path did not apply."
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
    "sources": [
      {
        "label": "https://www.nist.gov/cyberframework",
        "url": "https://www.nist.gov/cyberframework"
      },
      {
        "label": "https://www.dol.gov/agencies/whd/fact-sheets/21-flsa-recordkeeping",
        "url": "https://www.dol.gov/agencies/whd/fact-sheets/21-flsa-recordkeeping"
      },
      {
        "label": "https://www.archives.gov/records-mgmt",
        "url": "https://www.archives.gov/records-mgmt"
      },
      {
        "label": "https://www.gao.gov/products/gao-14-704g",
        "url": "https://www.gao.gov/products/gao-14-704g"
      }
    ]
  },
  {
    "slug": "change-adoption",
    "title": "Did the Process Change Reach the Work in mortgage application and document support?",
    "summary": "A protocol comparing records before and after a written mortgage application and document support process change to see whether the new step was used.",
    "cluster": "Application intake",
    "publishedAt": "2026-10-26",
    "finding": "After a written process change, did the affected records follow the new step? The scope is the operational record for mortgage application and document support, not the legal, financial, or clinical conclusion that may follow.",
    "thumbnail": "/article-thumbnails/october-26/change-adoption.svg",
    "sections": [
      {
        "heading": "Research question and scope",
        "paragraphs": [
          "After a written process change, did the affected records follow the new step? The scope is the operational record for mortgage application and document support, not the legal, financial, or clinical conclusion that may follow.",
          "Treat the \"research question and scope\" control as an evidence problem before treating it as a speed problem. The mortgage support specialist can prepare an application checklist, but the mortgage operations manager keeps the decision when the item involves rate lock expires before closing. Record files returned for missing documents with its denominator and window, then use the weekly sample to check whether the same gap keeps returning."
        ]
      },
      {
        "heading": "Population and unit of analysis",
        "paragraphs": [
          "Before scaling the \"population and unit of analysis\" workflow, make a disclosure timing record readable to someone outside the original team. It should show the request, the source, rate-lock expiration and terms, the mortgage operations manager, and the next date in one place. The loan officer reviewing the application, disclosure, condition, and rate-lock queue should see exceptions, not a clean activity count that hides unresolved work.",
          "In practice, the mortgage support specialist handles the \"population and unit of analysis\" work by preparing an application checklist and naming the decision boundary. Include the source and retrieval date, application and disclosure date, and the next action owner. When the item involves borrower identity or authorization is unclear, the item goes to the underwriter with the evidence already checked; the application, disclosure, condition, and rate-lock queue should show the hold, not hide it."
        ]
      },
      {
        "heading": "Definitions and measures",
        "paragraphs": [
          "Within mortgage application and underwriting support, the \"definitions and measures\" control is only repeatable when the mortgage support specialist can show a condition log behind each decision. Start with application and disclosure date, add owner and next action, and attach the source and date before the item moves. If the item involves rate lock expires before closing, hold the work in the application, disclosure, condition, and rate-lock queue and route the choice to the mortgage operations manager; the loan officer should be able to reconstruct the next step without asking the preparer.",
          "The application, disclosure, condition, and rate-lock queue in mortgage application and underwriting support usually fails at the handoff, not at the first task. For the \"definitions and measures\" section, the mortgage support specialist should capture the source, the version, the accountable mortgage operations manager, and the next review date in an application checklist. If the item involves rate lock expires before closing, route it to the loan officer and keep the exception reason attached so a later reviewer can see why the normal path did not apply."
        ]
      },
      {
        "heading": "Evidence and data dictionary",
        "paragraphs": [
          "Before scaling the \"evidence and data dictionary\" workflow, make a condition log readable to someone outside the original team. It should show the request, the source, condition and supporting document, the mortgage operations manager, and the next date in one place. The loan officer reviewing the application, disclosure, condition, and rate-lock queue should see exceptions, not a clean activity count that hides unresolved work.",
          "Concrete example: a disclosure is sent after the timing window. The mortgage support specialist opens an application checklist, records owner and next action and rate-lock expiration and terms, and asks one precise question instead of filling the blank from memory. The item leaves the application, disclosure, condition, and rate-lock queue only after the mortgage operations manager accepts the next action and the evidence link is attached."
        ]
      },
      {
        "heading": "Sampling and collection",
        "paragraphs": [
          "The \"sampling and collection\" control becomes fragile when the application, disclosure, condition, and rate-lock queue is measured only by completed items. The mortgage support specialist should record application and disclosure date and rate-lock expiration and terms, keep exceptions visible, and let the mortgage operations manager decide any commitment or scope change. The underwriter can then sample a rate-lock record and compare rate locks nearing expiry without review against the work that remains open.",
          "The \"sampling and collection\" control becomes fragile when the application, disclosure, condition, and rate-lock queue is measured only by completed items. The mortgage support specialist should record loan and borrower identifier and rate-lock expiration and terms, keep exceptions visible, and let the mortgage operations manager decide any commitment or scope change. The compliance reviewer can then sample a rate-lock record and compare files returned for missing documents against the work that remains open."
        ]
      },
      {
        "heading": "Reviewer independence",
        "paragraphs": [
          "The \"reviewer independence\" control becomes fragile when the application, disclosure, condition, and rate-lock queue is measured only by completed items. The mortgage support specialist should record loan and borrower identifier and rate-lock expiration and terms, keep exceptions visible, and let the mortgage operations manager decide any commitment or scope change. The mortgage operations manager can then sample an application checklist and compare conditions cleared by owner against the work that remains open.",
          "For the \"reviewer independence\" section, define the stopping condition before the mortgage support specialist starts the task. The disclosure timing record should show application and disclosure date, loan and borrower identifier, and the evidence that let the mortgage operations manager accept the result. If the item involves rate lock expires before closing, document the reason and route the decision to the underwriter; a reopened item needs a new dated action, not a copied closure note."
        ]
      },
      {
        "heading": "What the evidence can support",
        "paragraphs": [
          "The record can show field presence, source currency, named ownership, and where the mortgage application and document support record is thin. It can support a change note template, an acknowledgment log, a post-change sample.",
          "The rate-lock record is useful for the \"what the evidence can support\" control only if another person can audit it. The mortgage support specialist records rate-lock expiration and terms and application and disclosure date, keeps the source attached, and marks a case involving borrower identity or authorization is unclear with the owner who accepted it. Review files returned for missing documents during the weekly check and test one recent correction against the original evidence."
        ]
      },
      {
        "heading": "Limitations and error",
        "paragraphs": [
          "The \"limitations and error\" control becomes fragile when the application, disclosure, condition, and rate-lock queue is measured only by completed items. The mortgage support specialist should record loan and borrower identifier and owner and next action, keep exceptions visible, and let the mortgage operations manager decide any commitment or scope change. The mortgage operations manager can then sample a disclosure timing record and compare conditions cleared by owner against the work that remains open.",
          "In practice, the mortgage support specialist handles the \"limitations and error\" work by preparing a rate-lock record and naming the decision boundary. Include the source and retrieval date, application and disclosure date, and the next action owner. When the item involves borrower identity or authorization is unclear, the item goes to the underwriter with the evidence already checked; the application, disclosure, condition, and rate-lock queue should show the hold, not hide it."
        ]
      },
      {
        "heading": "Sensitivity and alternatives",
        "paragraphs": [
          "The control that matters for the \"sensitivity and alternatives\" section is a short, reviewable record, not a longer checklist. The mortgage support specialist captures rate-lock expiration and terms and owner and next action, labels a case involving borrower identity or authorization is unclear, and leaves the decision with the mortgage operations manager. During the weekly review, compare rate locks nearing expiry without review with the unresolved items and note which fix changed the result.",
          "For the \"sensitivity and alternatives\" section, define the stopping condition before the mortgage support specialist starts the task. The condition log should show owner and next action, condition and supporting document, and the evidence that let the mortgage operations manager accept the result. If the item involves borrower identity or authorization is unclear, document the reason and route the decision to the underwriter; a reopened item needs a new dated action, not a copied closure note."
        ]
      },
      {
        "heading": "Privacy, access, and retention",
        "paragraphs": [
          "The application, disclosure, condition, and rate-lock queue in mortgage application and underwriting support usually fails at the handoff, not at the first task. For the \"privacy, access, and retention\" section, the mortgage support specialist should capture the source, the version, the accountable mortgage operations manager, and the next review date in a rate-lock record. If the item involves income or asset document conflicts, route it to the compliance reviewer and keep the exception reason attached so a later reviewer can see why the normal path did not apply.",
          "Within mortgage application and underwriting support, the \"privacy, access, and retention\" control is only repeatable when the mortgage support specialist can show a disclosure timing record behind each decision. Start with owner and next action, add loan and borrower identifier, and attach the source and date before the item moves. If the item involves disclosure timing is at risk, hold the work in the application, disclosure, condition, and rate-lock queue and route the choice to the mortgage operations manager; the compliance reviewer should be able to reconstruct the next step without asking the preparer."
        ]
      },
      {
        "heading": "Operational use and reporting",
        "paragraphs": [
          "Publish the case flow, definitions, counts, unresolved items, disagreement summary, and limits together. Separate observations, calculations, and owner judgments.",
          "Within mortgage application and underwriting support, the \"operational use and reporting\" control is only repeatable when the mortgage support specialist can show a rate-lock record behind each decision. Start with loan and borrower identifier, add application and disclosure date, and attach the source and date before the item moves. If the item involves disclosure timing is at risk, hold the work in the application, disclosure, condition, and rate-lock queue and route the choice to the mortgage operations manager; the underwriter should be able to reconstruct the next step without asking the preparer."
        ]
      },
      {
        "heading": "Governance and stopping",
        "paragraphs": [
          "Treat the \"governance and stopping\" control as an evidence problem before treating it as a speed problem. The mortgage support specialist can prepare an application checklist, but the mortgage operations manager keeps the decision when the item involves disclosure timing is at risk. Record conditions cleared by owner with its denominator and window, then use the weekly sample to check whether the same gap keeps returning.",
          "The application checklist is useful for the \"governance and stopping\" control only if another person can audit it. The mortgage support specialist records condition and supporting document and rate-lock expiration and terms, keeps the source attached, and marks a case involving borrower identity or authorization is unclear with the owner who accepted it. Review rate locks nearing expiry without review during the weekly check and test one recent correction against the original evidence."
        ]
      },
      {
        "heading": "A calibration case",
        "paragraphs": [
          "For the \"a calibration case\" section, define the stopping condition before the mortgage support specialist starts the task. The disclosure timing record should show rate-lock expiration and terms, owner and next action, and the evidence that let the mortgage operations manager accept the result. If the item involves disclosure timing is at risk, document the reason and route the decision to the mortgage operations manager; a reopened item needs a new dated action, not a copied closure note.",
          "Within mortgage application and underwriting support, the \"a calibration case\" control is only repeatable when the mortgage support specialist can show a rate-lock record behind each decision. Start with owner and next action, add application and disclosure date, and attach the source and date before the item moves. If the item involves income or asset document conflicts, hold the work in the application, disclosure, condition, and rate-lock queue and route the choice to the mortgage operations manager; the compliance reviewer should be able to reconstruct the next step without asking the preparer."
        ]
      },
      {
        "heading": "Effort and practical constraints",
        "paragraphs": [
          "Concrete example: a rate lock expires while a condition remains open. The mortgage support specialist opens an application checklist, records loan and borrower identifier and condition and supporting document, and asks one precise question instead of filling the blank from memory. The item leaves the application, disclosure, condition, and rate-lock queue only after the mortgage operations manager accepts the next action and the evidence link is attached.",
          "The application, disclosure, condition, and rate-lock queue in mortgage application and underwriting support usually fails at the handoff, not at the first task. For the \"effort and practical constraints\" section, the mortgage support specialist should capture the source, the version, the accountable mortgage operations manager, and the next review date in a condition log. If the item involves disclosure timing is at risk, route it to the mortgage operations manager and keep the exception reason attached so a later reviewer can see why the normal path did not apply."
        ]
      },
      {
        "heading": "Reporting package",
        "paragraphs": [
          "Publish the case flow, definitions, counts, unresolved items, disagreement summary, and limitations together. Label observations, calculations, and owner judgments.",
          "Concrete example: a rate lock expires while a condition remains open. The mortgage support specialist opens a condition log, records application and disclosure date and condition and supporting document, and asks one precise question instead of filling the blank from memory. The item leaves the application, disclosure, condition, and rate-lock queue only after the mortgage operations manager accepts the next action and the evidence link is attached."
        ]
      },
      {
        "heading": "Interpreting a small sample",
        "paragraphs": [
          "Ask what would let a new reviewer continue the \"interpreting a small sample\" work without a conversation. The answer is usually a condition log with the source, version, owner, and next action. If the item involves disclosure timing is at risk, the mortgage support specialist pauses the item, records the gap, and routes one question to the mortgage operations manager; do not close the item just to keep the queue moving.",
          "Before scaling the \"interpreting a small sample\" workflow, make a rate-lock record readable to someone outside the original team. It should show the request, the source, application and disclosure date, the mortgage operations manager, and the next date in one place. The underwriter reviewing the application, disclosure, condition, and rate-lock queue should see exceptions, not a clean activity count that hides unresolved work."
        ]
      },
      {
        "heading": "Reopening conditions",
        "paragraphs": [
          "In practice, the mortgage support specialist handles the \"reopening conditions\" work by preparing a condition log and naming the decision boundary. Include the source and retrieval date, rate-lock expiration and terms, and the next action owner. When the item involves income or asset document conflicts, the item goes to the compliance reviewer with the evidence already checked; the application, disclosure, condition, and rate-lock queue should show the hold, not hide it.",
          "In practice, the mortgage support specialist handles the \"reopening conditions\" work by preparing a condition log and naming the decision boundary. Include the source and retrieval date, owner and next action, and the next action owner. When the item involves rate lock expires before closing, the item goes to the loan officer with the evidence already checked; the application, disclosure, condition, and rate-lock queue should show the hold, not hide it."
        ]
      },
      {
        "heading": "A worked example of the record",
        "paragraphs": [
          "An item arrives with a source that is one version behind the current mortgage application and document support record. The reviewer flags the version, keeps the item open, and asks one question. No one rebuilds the case from memory.",
          "Within mortgage application and underwriting support, the \"a worked example of the record\" control is only repeatable when the mortgage support specialist can show a rate-lock record behind each decision. Start with rate-lock expiration and terms, add loan and borrower identifier, and attach the source and date before the item moves. If the item involves borrower identity or authorization is unclear, hold the work in the application, disclosure, condition, and rate-lock queue and route the choice to the mortgage operations manager; the loan officer should be able to reconstruct the next step without asking the preparer."
        ]
      },
      {
        "heading": "Common failure modes",
        "paragraphs": [
          "The control that matters for the \"common failure modes\" section is a short, reviewable record, not a longer checklist. The mortgage support specialist captures owner and next action and loan and borrower identifier, labels a case involving disclosure timing is at risk, and leaves the decision with the mortgage operations manager. During the weekly review, compare rate locks nearing expiry without review with the unresolved items and note which fix changed the result.",
          "Within mortgage application and underwriting support, the \"common failure modes\" control is only repeatable when the mortgage support specialist can show an application checklist behind each decision. Start with loan and borrower identifier, add condition and supporting document, and attach the source and date before the item moves. If the item involves disclosure timing is at risk, hold the work in the application, disclosure, condition, and rate-lock queue and route the choice to the mortgage operations manager; the loan officer should be able to reconstruct the next step without asking the preparer."
        ]
      },
      {
        "heading": "What the result does not prove",
        "paragraphs": [
          "The result does not prove that the mortgage application and document support work was correct, that a customer will be satisfied, or that one staffing model is better. It describes the record and the process around it.",
          "Concrete example: a disclosure is sent after the timing window. The mortgage support specialist opens a disclosure timing record, records application and disclosure date and owner and next action, and asks one precise question instead of filling the blank from memory. The item leaves the application, disclosure, condition, and rate-lock queue only after the mortgage operations manager accepts the next action and the evidence link is attached."
        ]
      },
      {
        "heading": "A short review agenda",
        "paragraphs": [
          "A useful test for the \"a short review agenda\" control is whether a rate-lock record still makes sense after a week away. The mortgage support specialist records loan and borrower identifier and application and disclosure date, then checks one high-value case and one exception during the weekly review. When the item involves disclosure timing is at risk, the item stays open with a named owner and a dated next action rather than being marked complete.",
          "Ask what would let a new reviewer continue the \"a short review agenda\" work without a conversation. The answer is usually a disclosure timing record with the source, version, owner, and next action. If the item involves disclosure timing is at risk, the mortgage support specialist pauses the item, records the gap, and routes one question to the mortgage operations manager; do not close the item just to keep the queue moving."
        ]
      },
      {
        "heading": "Data quality checks",
        "paragraphs": [
          "Within mortgage application and underwriting support, the \"data quality checks\" control is only repeatable when the mortgage support specialist can show a rate-lock record behind each decision. Start with loan and borrower identifier, add application and disclosure date, and attach the source and date before the item moves. If the item involves disclosure timing is at risk, hold the work in the application, disclosure, condition, and rate-lock queue and route the choice to the mortgage operations manager; the mortgage operations manager should be able to reconstruct the next step without asking the preparer.",
          "The application, disclosure, condition, and rate-lock queue in mortgage application and underwriting support usually fails at the handoff, not at the first task. For the \"data quality checks\" section, the mortgage support specialist should capture the source, the version, the accountable mortgage operations manager, and the next review date in a disclosure timing record. If the item involves disclosure timing is at risk, route it to the loan officer and keep the exception reason attached so a later reviewer can see why the normal path did not apply."
        ]
      },
      {
        "heading": "A note on sampling",
        "paragraphs": [
          "The control that matters for the \"a note on sampling\" section is a short, reviewable record, not a longer checklist. The mortgage support specialist captures owner and next action and condition and supporting document, labels a case involving borrower identity or authorization is unclear, and leaves the decision with the mortgage operations manager. During the weekly review, compare files returned for missing documents with the unresolved items and note which fix changed the result.",
          "Concrete example: a rate lock expires while a condition remains open. The mortgage support specialist opens an application checklist, records condition and supporting document and application and disclosure date, and asks one precise question instead of filling the blank from memory. The item leaves the application, disclosure, condition, and rate-lock queue only after the mortgage operations manager accepts the next action and the evidence link is attached."
        ]
      },
      {
        "heading": "A note on evidence ownership",
        "paragraphs": [
          "Before scaling the \"a note on evidence ownership\" workflow, make a condition log readable to someone outside the original team. It should show the request, the source, rate-lock expiration and terms, the mortgage operations manager, and the next date in one place. The mortgage operations manager reviewing the application, disclosure, condition, and rate-lock queue should see exceptions, not a clean activity count that hides unresolved work.",
          "Before scaling the \"a note on evidence ownership\" workflow, make a condition log readable to someone outside the original team. It should show the request, the source, rate-lock expiration and terms, the mortgage operations manager, and the next date in one place. The underwriter reviewing the application, disclosure, condition, and rate-lock queue should see exceptions, not a clean activity count that hides unresolved work."
        ]
      },
      {
        "heading": "What would change the answer",
        "paragraphs": [
          "A useful test for the \"what would change the answer\" control is whether a disclosure timing record still makes sense after a week away. The mortgage support specialist records owner and next action and condition and supporting document, then checks one high-value case and one exception during the weekly review. When the item involves rate lock expires before closing, the item stays open with a named owner and a dated next action rather than being marked complete.",
          "The application, disclosure, condition, and rate-lock queue in mortgage application and underwriting support usually fails at the handoff, not at the first task. For the \"what would change the answer\" section, the mortgage support specialist should capture the source, the version, the accountable mortgage operations manager, and the next review date in a disclosure timing record. If the item involves borrower identity or authorization is unclear, route it to the compliance reviewer and keep the exception reason attached so a later reviewer can see why the normal path did not apply."
        ]
      },
      {
        "heading": "Why this matters for The Mortgage Assistant",
        "paragraphs": [
          "The Mortgage Assistant supports mortgage teams with mortgage application and document support. A local protocol is useful only if it names the records this team can actually see and the decisions its owners can actually make.",
          "Before scaling the \"why this matters for The Mortgage Assistant\" workflow, make an application checklist readable to someone outside the original team. It should show the request, the source, rate-lock expiration and terms, the mortgage operations manager, and the next date in one place. The underwriter reviewing the application, disclosure, condition, and rate-lock queue should see exceptions, not a clean activity count that hides unresolved work."
        ]
      },
      {
        "heading": "Writing the conclusion",
        "paragraphs": [
          "The condition log is useful for the \"writing the conclusion\" control only if another person can audit it. The mortgage support specialist records condition and supporting document and loan and borrower identifier, keeps the source attached, and marks a case involving rate lock expires before closing with the owner who accepted it. Review applications with complete disclosures during the weekly check and test one recent correction against the original evidence.",
          "Concrete example: a rate lock expires while a condition remains open. The mortgage support specialist opens a rate-lock record, records application and disclosure date and loan and borrower identifier, and asks one precise question instead of filling the blank from memory. The item leaves the application, disclosure, condition, and rate-lock queue only after the mortgage operations manager accepts the next action and the evidence link is attached."
        ]
      },
      {
        "heading": "Related reading",
        "paragraphs": [
          "The operational control behind this protocol is described in [Track Supplier Follow-Up for mortgage application and document support](/blog/supplier-followup) and [Put Recurring mortgage application and document support Work on a Controlled Calendar](/blog/recurring-task-calendar-control). Public context is available in [SBA Manage Your Business](https://www.sba.gov/business-guide/manage-your-business)."
        ]
      },
      {
        "heading": "Governance and handoff",
        "paragraphs": [
          "Within mortgage application and underwriting support, the \"governance and handoff\" control is only repeatable when the mortgage support specialist can show an application checklist behind each decision. Start with owner and next action, add condition and supporting document, and attach the source and date before the item moves. If the item involves income or asset document conflicts, hold the work in the application, disclosure, condition, and rate-lock queue and route the choice to the mortgage operations manager; the compliance reviewer should be able to reconstruct the next step without asking the preparer.",
          "For the \"governance and handoff\" section, define the stopping condition before the mortgage support specialist starts the task. The application checklist should show loan and borrower identifier, owner and next action, and the evidence that let the mortgage operations manager accept the result. If the item involves borrower identity or authorization is unclear, document the reason and route the decision to the loan officer; a reopened item needs a new dated action, not a copied closure note."
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
    "sources": [
      {
        "label": "https://www.sba.gov/business-guide/manage-your-business",
        "url": "https://www.sba.gov/business-guide/manage-your-business"
      },
      {
        "label": "https://www.archives.gov/records-mgmt",
        "url": "https://www.archives.gov/records-mgmt"
      },
      {
        "label": "https://www.gao.gov/products/gao-14-704g",
        "url": "https://www.gao.gov/products/gao-14-704g"
      },
      {
        "label": "https://www.nist.gov/cyberframework",
        "url": "https://www.nist.gov/cyberframework"
      }
    ]
  }
];
