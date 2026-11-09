export const november08ResearchPosts = [
  {
    "slug": "themortgageassistant-how-long-do-rate-lock-exceptions-take-to-resolve-before-expiration",
    "title": "How long do rate lock exceptions take to resolve before expiration?",
    "summary": "A bounded method for measuring rate lock exception resolution and the files that reach expiration without a decision.",
    "cluster": "Pipeline quality",
    "publishedAt": "2026-11-08",
    "finding": "Resolution time should be reported with the exception type and the expiration date, because a fast average can hide locks that died waiting on one document.",
    "thumbnail": "/thumbnails/november-08/themortgageassistant-how-long-do-rate-lock-exceptions-take-to-resolve-before-expiration.webp",
    "sections": [
      {
        "heading": "Question and scope",
        "paragraphs": [
          "This protocol asks how long rate lock exception resolution takes in one mortgage operation and what the record can show about the delay. It is a local measurement method, not an industry benchmark, a lending standard, or an audit opinion. The result covers one defined population during one observation window and does not estimate a national rate. An operations lead can repeat the check from the written rule below.",
          "This file review covers rate lock exception resolution in one mortgage team during a fixed observation window. It measures whether the file evidence can support the decision that was recorded. The protocol keeps a missing document separate from a confirmed negative, because the two mean different things. A second reviewer should be able to rebuild the sample from the stated rule and the retained extract.",
          "The question behind this brief is narrow: does the rate lock exception resolution file show the source, the date, and the reviewer at each step? The Mortgage Assistant uses the result to improve one workflow, not to judge a loan officer or a borrower. The scope is the population named in the next section, not every loan in the pipeline. The method is written for a team that needs a reproducible answer rather than a polished chart."
        ]
      },
      {
        "heading": "Population and unit",
        "paragraphs": [
          "The population is rate locks with an open exception during the observation window. The Mortgage Assistant freezes the eligible list, the systems included, and the duplicate rule before reviewers see outcomes. Missing, conflicted, and inaccessible files stay in the denominator unless the written protocol says otherwise. That rule prevents a clean-looking rate that quietly removed the hard files.",
          "The unit is one rate lock with an open exception before expiration. State the start event, the closing evidence, and the pause rule before counting the first file. A raw tally is not a measurement when the pipeline changes size during the window. Record each exclusion with a reason so a second reviewer can rebuild the sample."
        ]
      },
      {
        "heading": "Definitions and measures",
        "paragraphs": [
          "For this protocol, completion means the file supports the median and upper-quartile hours from exception to documented resolution with a dated source and a named reviewer. The dictionary also defines how a reopened file is counted and how a duplicate is resolved. The Mortgage Assistant reports the sample size, the unresolved count, and the oldest open file beside every rate. Those three numbers describe volume, evidence, and delay without letting one hide another.",
          "The Mortgage Assistant writes a short data dictionary that names each field, its allowed values, and the source that supports it. A missing value, an unavailable value, and a confirmed negative value are recorded separately. The measure is the median and upper-quartile hours from exception to documented resolution, and it is never reported without the eligible count and the exclusion count. A rate without a denominator and a window is not a finding the team can act on.",
          "Agree what complete means for rate lock exception resolution before the pipeline export is opened. Name the required fields, the acceptable source documents, and the handling of a blank value. The primary measure is the median and upper-quartile hours from exception to documented resolution, reported with its denominator and observation window. Add a count of missing evidence and the median age of files still open at the end of the window."
        ]
      },
      {
        "heading": "Evidence standard",
        "paragraphs": [
          "Each sampled file needs the source, the time observed, the field it supports, the reviewer, and the operations owner. Borrower detail stays in the approved system, and the review note uses a reference rather than a copy. The Mortgage Assistant collects only evidence the protocol can defend, even when a faster summary is available. A complete file is not proof that a lending decision was correct, and the report says so plainly.",
          "For this review, a record is usable when it carries  and  in the approved system. If two documents conflict, keep both copies and note which one informed the decision. The Mortgage Assistant labels an estimated value as an estimate so a later reader does not mistake it for a fact. The test is whether another reviewer can follow the evidence, not whether the file looks tidy."
        ]
      },
      {
        "heading": "Sampling and collection",
        "paragraphs": [
          "Sample across the full window, including busy days and days when coverage changed. A sample drawn only from quiet days can make a fragile control look stable. Record the date and time of each observation and the name of the reviewer who collected it. If the population is small, report the count and the instability instead of a precise-looking rate.",
          "Choose a random or systematic start rule, then take consecutive files within each stratum. Stratify by loan stage, owner, and exception type so the sample is not dominated by the easiest files. Include at least one adverse file: a missing document, a conflict, an unavailable owner, or a deadline that forced a decision. The Mortgage Assistant records every access failure instead of replacing it silently with a different file.",
          "For rate lock exception resolution, the extract starts with the pipeline export, not a list assembled after the result is known. The Mortgage Assistant keeps the selection rule, the random seed, and the exclusion log with the sample. The reviewer should not add files after the result is visible or remove a difficult file to improve the rate. A reproducible sample lets the team rerun the check after the workflow changes."
        ]
      },
      {
        "heading": "Analysis and reporting",
        "paragraphs": [
          "The analysis for rate lock exception resolution asks whether the evidence supports the decision, not whether the team felt busy. Segment the result by stage, owner, and exception type so the team can see where the gap sits. The Mortgage Assistant reports a range or a count when the sample is small, rather than implying false precision. The report ends with one proposed change and the measure that will show whether it worked.",
          "Report the distribution, not only the mean, because a median can hide a long tail of unreviewed files. Show the open-file count and the oldest file age by owner, then identify where delay accumulates. A finding that cannot name an owner or a next action is not ready for the pipeline meeting. The Mortgage Assistant writes the result in plain language and keeps the technical detail in an appendix."
        ]
      },
      {
        "heading": "Limits and sources of error",
        "paragraphs": [
          "The main limit is that the rate lock exception resolution record may be incomplete, delayed, or maintained outside the team. This method cannot infer missing work from a clean summary or prove that a policy was followed when no trace exists. The Mortgage Assistant states those limits beside the result instead of burying them in a footnote. A change in systems, investor rules, product mix, or volume can make the result stale, so record those triggers.",
          "Sampling error, reviewer judgment, and missing records all limit what the result can claim. The Mortgage Assistant reports the overlap review and any disagreement instead of assuming the coding was consistent. A local result describes one team and one window, and it should not be presented as an industry benchmark. The report names what remains unknown, because that sentence is part of an honest measurement.",
          "A complete file is not proof that a lending decision was correct, and the method measures evidence quality rather than loan quality. The protocol cannot establish intent, and it cannot speak for files that left no record at all. The Mortgage Assistant keeps the limits in the same section as the finding so a reader cannot separate them. When the definition changes, keep the old and new rules side by side for the transition period."
        ]
      },
      {
        "heading": "Review cadence",
        "paragraphs": [
          "The next sample should use the same codebook and the same population rule so the comparison is honest. If the rule changes, label which version applies to each file and keep both extracts. The Mortgage Assistant reviews the measure after the change and reports whether the gap narrowed. The goal is a reviewable decision, not a perfect number that nobody can reproduce.",
          "Set a review date and hold to it, with a named owner for the measurement and the follow-up. End with one process change, one owner, and one check date rather than a list of general improvements. When a defect repeats, change the template, the source, or the rule before coaching the person. The Mortgage Assistant keeps the same sample rule each time and files the review note with the change."
        ]
      }
    ],
    "sources": [
      {
        "label": "Consumer Financial Protection Bureau",
        "url": "https://www.consumerfinance.gov/"
      },
      {
        "label": "U.S. Department of Housing and Urban Development",
        "url": "https://www.hud.gov/"
      },
      {
        "label": "Federal Housing Finance Agency",
        "url": "https://www.fhfa.gov/"
      },
      {
        "label": "U.S. Government Accountability Office",
        "url": "https://www.gao.gov/"
      }
    ]
  },
  {
    "slug": "themortgageassistant-what-share-of-closing-disclosures-match-the-loan-estimate-at-delivery",
    "title": "What share of closing disclosures match the loan estimate at delivery?",
    "summary": "A comparison protocol for closing disclosures that keeps tolerance categories and change reasons visible.",
    "cluster": "Pipeline quality",
    "publishedAt": "2026-11-08",
    "finding": "The match rate must separate a valid changed circumstance from an unexplained fee change, and it must state the tolerance category used.",
    "thumbnail": "/thumbnails/november-08/themortgageassistant-what-share-of-closing-disclosures-match-the-loan-estimate-at-delivery.webp",
    "sections": [
      {
        "heading": "Question and scope",
        "paragraphs": [
          "The question behind this brief is narrow: does the closing disclosure accuracy file show the source, the date, and the reviewer at each step? The Mortgage Assistant uses the result to improve one workflow, not to judge a loan officer or a borrower. The scope is the population named in the next section, not every loan in the pipeline. The method is written for a team that needs a reproducible answer rather than a polished chart.",
          "This protocol asks how long closing disclosure accuracy takes in one mortgage operation and what the record can show about the delay. It is a local measurement method, not an industry benchmark, a lending standard, or an audit opinion. The result covers one defined population during one observation window and does not estimate a national rate. An operations lead can repeat the check from the written rule below.",
          "This file review covers closing disclosure accuracy in one mortgage team during a fixed observation window. It measures whether the file evidence can support the decision that was recorded. The protocol keeps a missing document separate from a confirmed negative, because the two mean different things. A second reviewer should be able to rebuild the sample from the stated rule and the retained extract."
        ]
      },
      {
        "heading": "Population and unit",
        "paragraphs": [
          "Define one one closing disclosure delivered for a loan and count it once under a documented identity rule. The population is closing disclosures delivered during the observation window, and the window is long enough to include routine volume and a heavy week. Record system outages, staffing changes, and investor updates as context rather than deleting them. A definition that changes halfway through the window destroys comparability, so keep the old rule beside the new one.",
          "The population is closing disclosures delivered during the observation window. The Mortgage Assistant freezes the eligible list, the systems included, and the duplicate rule before reviewers see outcomes. Missing, conflicted, and inaccessible files stay in the denominator unless the written protocol says otherwise. That rule prevents a clean-looking rate that quietly removed the hard files."
        ]
      },
      {
        "heading": "Definitions and measures",
        "paragraphs": [
          "Agree what complete means for closing disclosure accuracy before the pipeline export is opened. Name the required fields, the acceptable source documents, and the handling of a blank value. The primary measure is the share of disclosures with no unexplained change from the loan estimate, reported with its denominator and observation window. Add a count of missing evidence and the median age of files still open at the end of the window.",
          "For this protocol, completion means the file supports the share of disclosures with no unexplained change from the loan estimate with a dated source and a named reviewer. The dictionary also defines how a reopened file is counted and how a duplicate is resolved. The Mortgage Assistant reports the sample size, the unresolved count, and the oldest open file beside every rate. Those three numbers describe volume, evidence, and delay without letting one hide another.",
          "The Mortgage Assistant writes a short data dictionary that names each field, its allowed values, and the source that supports it. A missing value, an unavailable value, and a confirmed negative value are recorded separately. The measure is the share of disclosures with no unexplained change from the loan estimate, and it is never reported without the eligible count and the exclusion count. A rate without a denominator and a window is not a finding the team can act on."
        ]
      },
      {
        "heading": "Evidence standard",
        "paragraphs": [
          "Fix the evidence rule for closing disclosure accuracy before anyone opens the pipeline export. The rule should name the document that counts, the date that travels with it, and the treatment of a blank field. The primary measure is the share of disclosures with no unexplained change from the loan estimate, always shown with its eligible count and observation window. Add the number of missing documents and the age of the oldest open file at the close of the window.",
          "Each sampled file needs the source, the time observed, the field it supports, the reviewer, and the operations owner. Borrower detail stays in the approved system, and the review note uses a reference rather than a copy. The Mortgage Assistant collects only evidence the protocol can defend, even when a faster summary is available. A complete file is not proof that a lending decision was correct, and the report says so plainly."
        ]
      },
      {
        "heading": "Sampling and collection",
        "paragraphs": [
          "For closing disclosure accuracy, the extract starts with the pipeline export, not a list assembled after the result is known. The Mortgage Assistant keeps the selection rule, the random seed, and the exclusion log with the sample. The reviewer should not add files after the result is visible or remove a difficult file to improve the rate. A reproducible sample lets the team rerun the check after the workflow changes.",
          "Sample across the full window, including busy days and days when coverage changed. A sample drawn only from quiet days can make a fragile control look stable. Record the date and time of each observation and the name of the reviewer who collected it. If the population is small, report the count and the instability instead of a precise-looking rate.",
          "Choose a random or systematic start rule, then take consecutive files within each stratum. Stratify by loan stage, owner, and exception type so the sample is not dominated by the easiest files. Include at least one adverse file: a missing document, a conflict, an unavailable owner, or a deadline that forced a decision. The Mortgage Assistant records every access failure instead of replacing it silently with a different file."
        ]
      },
      {
        "heading": "Analysis and reporting",
        "paragraphs": [
          "Keep observed facts apart from interpretation, and label each table with its denominator and window. Show the oldest open file and the missing documents, not only the completion rate. The Mortgage Assistant names the next decision and the operations owner who must make it. Put the sample size beside every rate so a reader can judge how much weight the number carries.",
          "The analysis for closing disclosure accuracy asks whether the evidence supports the decision, not whether the team felt busy. Segment the result by stage, owner, and exception type so the team can see where the gap sits. The Mortgage Assistant reports a range or a count when the sample is small, rather than implying false precision. The report ends with one proposed change and the measure that will show whether it worked."
        ]
      },
      {
        "heading": "Limits and sources of error",
        "paragraphs": [
          "A complete file is not proof that a lending decision was correct, and the method measures evidence quality rather than loan quality. The protocol cannot establish intent, and it cannot speak for files that left no record at all. The Mortgage Assistant keeps the limits in the same section as the finding so a reader cannot separate them. When the definition changes, keep the old and new rules side by side for the transition period.",
          "The main limit is that the closing disclosure accuracy record may be incomplete, delayed, or maintained outside the team. This method cannot infer missing work from a clean summary or prove that a policy was followed when no trace exists. The Mortgage Assistant states those limits beside the result instead of burying them in a footnote. A change in systems, investor rules, product mix, or volume can make the result stale, so record those triggers.",
          "Sampling error, reviewer judgment, and missing records all limit what the result can claim. The Mortgage Assistant reports the overlap review and any disagreement instead of assuming the coding was consistent. A local result describes one team and one window, and it should not be presented as an industry benchmark. The report names what remains unknown, because that sentence is part of an honest measurement."
        ]
      },
      {
        "heading": "Review cadence",
        "paragraphs": [
          "Collection for closing disclosure accuracy ends when the sample is complete and the codebook is attached. The Mortgage Assistant stores the extract, the codebook, and the finding together so a later reviewer can rerun the check. The review closes with a short note that names what moved, what did not, and what remains unknown. That note is more useful than a precise-looking rate built on an unclear denominator.",
          "The next sample should use the same codebook and the same population rule so the comparison is honest. If the rule changes, label which version applies to each file and keep both extracts. The Mortgage Assistant reviews the measure after the change and reports whether the gap narrowed. The goal is a reviewable decision, not a perfect number that nobody can reproduce."
        ]
      }
    ],
    "sources": [
      {
        "label": "Consumer Financial Protection Bureau",
        "url": "https://www.consumerfinance.gov/"
      },
      {
        "label": "U.S. Department of Housing and Urban Development",
        "url": "https://www.hud.gov/"
      },
      {
        "label": "Federal Housing Finance Agency",
        "url": "https://www.fhfa.gov/"
      },
      {
        "label": "U.S. Government Accountability Office",
        "url": "https://www.gao.gov/"
      }
    ]
  },
  {
    "slug": "themortgageassistant-how-often-do-underwriting-conditions-clear-on-the-first-resubmission",
    "title": "How often do underwriting conditions clear on the first resubmission?",
    "summary": "A first-pass clearance measure that keeps condition type, source, and resubmission count visible.",
    "cluster": "Pipeline quality",
    "publishedAt": "2026-11-08",
    "finding": "First-pass clearance should be reported by condition type and document source, because a single rate hides the conditions that always bounce.",
    "thumbnail": "/thumbnails/november-08/themortgageassistant-how-often-do-underwriting-conditions-clear-on-the-first-resubmission.webp",
    "sections": [
      {
        "heading": "Question and scope",
        "paragraphs": [
          "This file review covers first-pass condition clearance in one mortgage team during a fixed observation window. It measures whether the file evidence can support the decision that was recorded. The protocol keeps a missing document separate from a confirmed negative, because the two mean different things. A second reviewer should be able to rebuild the sample from the stated rule and the retained extract.",
          "The question behind this brief is narrow: does the first-pass condition clearance file show the source, the date, and the reviewer at each step? The Mortgage Assistant uses the result to improve one workflow, not to judge a loan officer or a borrower. The scope is the population named in the next section, not every loan in the pipeline. The method is written for a team that needs a reproducible answer rather than a polished chart.",
          "This protocol asks how long first-pass condition clearance takes in one mortgage operation and what the record can show about the delay. It is a local measurement method, not an industry benchmark, a lending standard, or an audit opinion. The result covers one defined population during one observation window and does not estimate a national rate. An operations lead can repeat the check from the written rule below."
        ]
      },
      {
        "heading": "Population and unit",
        "paragraphs": [
          "The unit is one underwriting condition sent back for evidence. State the start event, the closing evidence, and the pause rule before counting the first file. A raw tally is not a measurement when the pipeline changes size during the window. Record each exclusion with a reason so a second reviewer can rebuild the sample.",
          "Define one one underwriting condition sent back for evidence and count it once under a documented identity rule. The population is conditions resubmitted during the observation window, and the window is long enough to include routine volume and a heavy week. Record system outages, staffing changes, and investor updates as context rather than deleting them. A definition that changes halfway through the window destroys comparability, so keep the old rule beside the new one."
        ]
      },
      {
        "heading": "Definitions and measures",
        "paragraphs": [
          "The Mortgage Assistant writes a short data dictionary that names each field, its allowed values, and the source that supports it. A missing value, an unavailable value, and a confirmed negative value are recorded separately. The measure is the share of conditions cleared on the first resubmission, and it is never reported without the eligible count and the exclusion count. A rate without a denominator and a window is not a finding the team can act on.",
          "Agree what complete means for first-pass condition clearance before the pipeline export is opened. Name the required fields, the acceptable source documents, and the handling of a blank value. The primary measure is the share of conditions cleared on the first resubmission, reported with its denominator and observation window. Add a count of missing evidence and the median age of files still open at the end of the window.",
          "For this protocol, completion means the file supports the share of conditions cleared on the first resubmission with a dated source and a named reviewer. The dictionary also defines how a reopened file is counted and how a duplicate is resolved. The Mortgage Assistant reports the sample size, the unresolved count, and the oldest open file beside every rate. Those three numbers describe volume, evidence, and delay without letting one hide another."
        ]
      },
      {
        "heading": "Evidence standard",
        "paragraphs": [
          "For this review, a record is usable when it carries  and  in the approved system. If two documents conflict, keep both copies and note which one informed the decision. The Mortgage Assistant labels an estimated value as an estimate so a later reader does not mistake it for a fact. The test is whether another reviewer can follow the evidence, not whether the file looks tidy.",
          "Fix the evidence rule for first-pass condition clearance before anyone opens the pipeline export. The rule should name the document that counts, the date that travels with it, and the treatment of a blank field. The primary measure is the share of conditions cleared on the first resubmission, always shown with its eligible count and observation window. Add the number of missing documents and the age of the oldest open file at the close of the window."
        ]
      },
      {
        "heading": "Sampling and collection",
        "paragraphs": [
          "Choose a random or systematic start rule, then take consecutive files within each stratum. Stratify by loan stage, owner, and exception type so the sample is not dominated by the easiest files. Include at least one adverse file: a missing document, a conflict, an unavailable owner, or a deadline that forced a decision. The Mortgage Assistant records every access failure instead of replacing it silently with a different file.",
          "For first-pass condition clearance, the extract starts with the pipeline export, not a list assembled after the result is known. The Mortgage Assistant keeps the selection rule, the random seed, and the exclusion log with the sample. The reviewer should not add files after the result is visible or remove a difficult file to improve the rate. A reproducible sample lets the team rerun the check after the workflow changes.",
          "Sample across the full window, including busy days and days when coverage changed. A sample drawn only from quiet days can make a fragile control look stable. Record the date and time of each observation and the name of the reviewer who collected it. If the population is small, report the count and the instability instead of a precise-looking rate."
        ]
      },
      {
        "heading": "Analysis and reporting",
        "paragraphs": [
          "Report the distribution, not only the mean, because a median can hide a long tail of unreviewed files. Show the open-file count and the oldest file age by owner, then identify where delay accumulates. A finding that cannot name an owner or a next action is not ready for the pipeline meeting. The Mortgage Assistant writes the result in plain language and keeps the technical detail in an appendix.",
          "Keep observed facts apart from interpretation, and label each table with its denominator and window. Show the oldest open file and the missing documents, not only the completion rate. The Mortgage Assistant names the next decision and the operations owner who must make it. Put the sample size beside every rate so a reader can judge how much weight the number carries."
        ]
      },
      {
        "heading": "Limits and sources of error",
        "paragraphs": [
          "Sampling error, reviewer judgment, and missing records all limit what the result can claim. The Mortgage Assistant reports the overlap review and any disagreement instead of assuming the coding was consistent. A local result describes one team and one window, and it should not be presented as an industry benchmark. The report names what remains unknown, because that sentence is part of an honest measurement.",
          "A complete file is not proof that a lending decision was correct, and the method measures evidence quality rather than loan quality. The protocol cannot establish intent, and it cannot speak for files that left no record at all. The Mortgage Assistant keeps the limits in the same section as the finding so a reader cannot separate them. When the definition changes, keep the old and new rules side by side for the transition period.",
          "The main limit is that the first-pass condition clearance record may be incomplete, delayed, or maintained outside the team. This method cannot infer missing work from a clean summary or prove that a policy was followed when no trace exists. The Mortgage Assistant states those limits beside the result instead of burying them in a footnote. A change in systems, investor rules, product mix, or volume can make the result stale, so record those triggers."
        ]
      },
      {
        "heading": "Review cadence",
        "paragraphs": [
          "Set a review date and hold to it, with a named owner for the measurement and the follow-up. End with one process change, one owner, and one check date rather than a list of general improvements. When a defect repeats, change the template, the source, or the rule before coaching the person. The Mortgage Assistant keeps the same sample rule each time and files the review note with the change.",
          "Collection for first-pass condition clearance ends when the sample is complete and the codebook is attached. The Mortgage Assistant stores the extract, the codebook, and the finding together so a later reviewer can rerun the check. The review closes with a short note that names what moved, what did not, and what remains unknown. That note is more useful than a precise-looking rate built on an unclear denominator."
        ]
      }
    ],
    "sources": [
      {
        "label": "Consumer Financial Protection Bureau",
        "url": "https://www.consumerfinance.gov/"
      },
      {
        "label": "U.S. Department of Housing and Urban Development",
        "url": "https://www.hud.gov/"
      },
      {
        "label": "Federal Housing Finance Agency",
        "url": "https://www.fhfa.gov/"
      },
      {
        "label": "U.S. Government Accountability Office",
        "url": "https://www.gao.gov/"
      }
    ]
  },
  {
    "slug": "themortgageassistant-what-share-of-borrower-status-updates-are-sent-inside-the-promised-window",
    "title": "What share of borrower status updates are sent inside the promised window?",
    "summary": "A timeliness protocol for borrower updates that separates scheduled communication from reactive messages.",
    "cluster": "Pipeline quality",
    "publishedAt": "2026-11-08",
    "finding": "Timeliness must be paired with the reason for the update and the stage, because a high send rate can still leave borrowers uninformed.",
    "thumbnail": "/thumbnails/november-08/themortgageassistant-what-share-of-borrower-status-updates-are-sent-inside-the-promised-window.webp",
    "sections": [
      {
        "heading": "Question and scope",
        "paragraphs": [
          "This protocol asks how long borrower update timeliness takes in one mortgage operation and what the record can show about the delay. It is a local measurement method, not an industry benchmark, a lending standard, or an audit opinion. The result covers one defined population during one observation window and does not estimate a national rate. An operations lead can repeat the check from the written rule below.",
          "This file review covers borrower update timeliness in one mortgage team during a fixed observation window. It measures whether the file evidence can support the decision that was recorded. The protocol keeps a missing document separate from a confirmed negative, because the two mean different things. A second reviewer should be able to rebuild the sample from the stated rule and the retained extract.",
          "The question behind this brief is narrow: does the borrower update timeliness file show the source, the date, and the reviewer at each step? The Mortgage Assistant uses the result to improve one workflow, not to judge a loan officer or a borrower. The scope is the population named in the next section, not every loan in the pipeline. The method is written for a team that needs a reproducible answer rather than a polished chart."
        ]
      },
      {
        "heading": "Population and unit",
        "paragraphs": [
          "The population is active files with a promised update window during the observation. The Mortgage Assistant freezes the eligible list, the systems included, and the duplicate rule before reviewers see outcomes. Missing, conflicted, and inaccessible files stay in the denominator unless the written protocol says otherwise. That rule prevents a clean-looking rate that quietly removed the hard files.",
          "The unit is one borrower status update owed on an active file. State the start event, the closing evidence, and the pause rule before counting the first file. A raw tally is not a measurement when the pipeline changes size during the window. Record each exclusion with a reason so a second reviewer can rebuild the sample."
        ]
      },
      {
        "heading": "Definitions and measures",
        "paragraphs": [
          "For this protocol, completion means the file supports the share of updates sent within the promised window with a dated source and a named reviewer. The dictionary also defines how a reopened file is counted and how a duplicate is resolved. The Mortgage Assistant reports the sample size, the unresolved count, and the oldest open file beside every rate. Those three numbers describe volume, evidence, and delay without letting one hide another.",
          "The Mortgage Assistant writes a short data dictionary that names each field, its allowed values, and the source that supports it. A missing value, an unavailable value, and a confirmed negative value are recorded separately. The measure is the share of updates sent within the promised window, and it is never reported without the eligible count and the exclusion count. A rate without a denominator and a window is not a finding the team can act on.",
          "Agree what complete means for borrower update timeliness before the pipeline export is opened. Name the required fields, the acceptable source documents, and the handling of a blank value. The primary measure is the share of updates sent within the promised window, reported with its denominator and observation window. Add a count of missing evidence and the median age of files still open at the end of the window."
        ]
      },
      {
        "heading": "Evidence standard",
        "paragraphs": [
          "Each sampled file needs the source, the time observed, the field it supports, the reviewer, and the operations owner. Borrower detail stays in the approved system, and the review note uses a reference rather than a copy. The Mortgage Assistant collects only evidence the protocol can defend, even when a faster summary is available. A complete file is not proof that a lending decision was correct, and the report says so plainly.",
          "For this review, a record is usable when it carries  and  in the approved system. If two documents conflict, keep both copies and note which one informed the decision. The Mortgage Assistant labels an estimated value as an estimate so a later reader does not mistake it for a fact. The test is whether another reviewer can follow the evidence, not whether the file looks tidy."
        ]
      },
      {
        "heading": "Sampling and collection",
        "paragraphs": [
          "Sample across the full window, including busy days and days when coverage changed. A sample drawn only from quiet days can make a fragile control look stable. Record the date and time of each observation and the name of the reviewer who collected it. If the population is small, report the count and the instability instead of a precise-looking rate.",
          "Choose a random or systematic start rule, then take consecutive files within each stratum. Stratify by loan stage, owner, and exception type so the sample is not dominated by the easiest files. Include at least one adverse file: a missing document, a conflict, an unavailable owner, or a deadline that forced a decision. The Mortgage Assistant records every access failure instead of replacing it silently with a different file.",
          "For borrower update timeliness, the extract starts with the pipeline export, not a list assembled after the result is known. The Mortgage Assistant keeps the selection rule, the random seed, and the exclusion log with the sample. The reviewer should not add files after the result is visible or remove a difficult file to improve the rate. A reproducible sample lets the team rerun the check after the workflow changes."
        ]
      },
      {
        "heading": "Analysis and reporting",
        "paragraphs": [
          "The analysis for borrower update timeliness asks whether the evidence supports the decision, not whether the team felt busy. Segment the result by stage, owner, and exception type so the team can see where the gap sits. The Mortgage Assistant reports a range or a count when the sample is small, rather than implying false precision. The report ends with one proposed change and the measure that will show whether it worked.",
          "Report the distribution, not only the mean, because a median can hide a long tail of unreviewed files. Show the open-file count and the oldest file age by owner, then identify where delay accumulates. A finding that cannot name an owner or a next action is not ready for the pipeline meeting. The Mortgage Assistant writes the result in plain language and keeps the technical detail in an appendix."
        ]
      },
      {
        "heading": "Limits and sources of error",
        "paragraphs": [
          "The main limit is that the borrower update timeliness record may be incomplete, delayed, or maintained outside the team. This method cannot infer missing work from a clean summary or prove that a policy was followed when no trace exists. The Mortgage Assistant states those limits beside the result instead of burying them in a footnote. A change in systems, investor rules, product mix, or volume can make the result stale, so record those triggers.",
          "Sampling error, reviewer judgment, and missing records all limit what the result can claim. The Mortgage Assistant reports the overlap review and any disagreement instead of assuming the coding was consistent. A local result describes one team and one window, and it should not be presented as an industry benchmark. The report names what remains unknown, because that sentence is part of an honest measurement.",
          "A complete file is not proof that a lending decision was correct, and the method measures evidence quality rather than loan quality. The protocol cannot establish intent, and it cannot speak for files that left no record at all. The Mortgage Assistant keeps the limits in the same section as the finding so a reader cannot separate them. When the definition changes, keep the old and new rules side by side for the transition period."
        ]
      },
      {
        "heading": "Review cadence",
        "paragraphs": [
          "The next sample should use the same codebook and the same population rule so the comparison is honest. If the rule changes, label which version applies to each file and keep both extracts. The Mortgage Assistant reviews the measure after the change and reports whether the gap narrowed. The goal is a reviewable decision, not a perfect number that nobody can reproduce.",
          "Set a review date and hold to it, with a named owner for the measurement and the follow-up. End with one process change, one owner, and one check date rather than a list of general improvements. When a defect repeats, change the template, the source, or the rule before coaching the person. The Mortgage Assistant keeps the same sample rule each time and files the review note with the change."
        ]
      }
    ],
    "sources": [
      {
        "label": "Consumer Financial Protection Bureau",
        "url": "https://www.consumerfinance.gov/"
      },
      {
        "label": "U.S. Department of Housing and Urban Development",
        "url": "https://www.hud.gov/"
      },
      {
        "label": "Federal Housing Finance Agency",
        "url": "https://www.fhfa.gov/"
      },
      {
        "label": "U.S. Government Accountability Office",
        "url": "https://www.gao.gov/"
      }
    ]
  },
  {
    "slug": "themortgageassistant-how-long-does-appraisal-reconsideration-take-from-request-to-decision",
    "title": "How long does appraisal reconsideration take from request to decision?",
    "summary": "A measurement protocol for appraisal reconsideration that keeps evidence quality and decision time separate.",
    "cluster": "Pipeline quality",
    "publishedAt": "2026-11-08",
    "finding": "The result should separate requests with new evidence from repeat challenges, since the two have different decision paths.",
    "thumbnail": "/thumbnails/november-08/themortgageassistant-how-long-does-appraisal-reconsideration-take-from-request-to-decision.webp",
    "sections": [
      {
        "heading": "Question and scope",
        "paragraphs": [
          "The question behind this brief is narrow: does the appraisal reconsideration time file show the source, the date, and the reviewer at each step? The Mortgage Assistant uses the result to improve one workflow, not to judge a loan officer or a borrower. The scope is the population named in the next section, not every loan in the pipeline. The method is written for a team that needs a reproducible answer rather than a polished chart.",
          "This protocol asks how long appraisal reconsideration time takes in one mortgage operation and what the record can show about the delay. It is a local measurement method, not an industry benchmark, a lending standard, or an audit opinion. The result covers one defined population during one observation window and does not estimate a national rate. An operations lead can repeat the check from the written rule below.",
          "This file review covers appraisal reconsideration time in one mortgage team during a fixed observation window. It measures whether the file evidence can support the decision that was recorded. The protocol keeps a missing document separate from a confirmed negative, because the two mean different things. A second reviewer should be able to rebuild the sample from the stated rule and the retained extract."
        ]
      },
      {
        "heading": "Population and unit",
        "paragraphs": [
          "Define one one appraisal reconsideration request filed on a loan and count it once under a documented identity rule. The population is reconsideration requests filed during the observation window, and the window is long enough to include routine volume and a heavy week. Record system outages, staffing changes, and investor updates as context rather than deleting them. A definition that changes halfway through the window destroys comparability, so keep the old rule beside the new one.",
          "The population is reconsideration requests filed during the observation window. The Mortgage Assistant freezes the eligible list, the systems included, and the duplicate rule before reviewers see outcomes. Missing, conflicted, and inaccessible files stay in the denominator unless the written protocol says otherwise. That rule prevents a clean-looking rate that quietly removed the hard files."
        ]
      },
      {
        "heading": "Definitions and measures",
        "paragraphs": [
          "Agree what complete means for appraisal reconsideration time before the pipeline export is opened. Name the required fields, the acceptable source documents, and the handling of a blank value. The primary measure is the median and upper-quartile days from request to documented decision, reported with its denominator and observation window. Add a count of missing evidence and the median age of files still open at the end of the window.",
          "For this protocol, completion means the file supports the median and upper-quartile days from request to documented decision with a dated source and a named reviewer. The dictionary also defines how a reopened file is counted and how a duplicate is resolved. The Mortgage Assistant reports the sample size, the unresolved count, and the oldest open file beside every rate. Those three numbers describe volume, evidence, and delay without letting one hide another.",
          "The Mortgage Assistant writes a short data dictionary that names each field, its allowed values, and the source that supports it. A missing value, an unavailable value, and a confirmed negative value are recorded separately. The measure is the median and upper-quartile days from request to documented decision, and it is never reported without the eligible count and the exclusion count. A rate without a denominator and a window is not a finding the team can act on."
        ]
      },
      {
        "heading": "Evidence standard",
        "paragraphs": [
          "Fix the evidence rule for appraisal reconsideration time before anyone opens the pipeline export. The rule should name the document that counts, the date that travels with it, and the treatment of a blank field. The primary measure is the median and upper-quartile days from request to documented decision, always shown with its eligible count and observation window. Add the number of missing documents and the age of the oldest open file at the close of the window.",
          "Each sampled file needs the source, the time observed, the field it supports, the reviewer, and the operations owner. Borrower detail stays in the approved system, and the review note uses a reference rather than a copy. The Mortgage Assistant collects only evidence the protocol can defend, even when a faster summary is available. A complete file is not proof that a lending decision was correct, and the report says so plainly."
        ]
      },
      {
        "heading": "Sampling and collection",
        "paragraphs": [
          "For appraisal reconsideration time, the extract starts with the pipeline export, not a list assembled after the result is known. The Mortgage Assistant keeps the selection rule, the random seed, and the exclusion log with the sample. The reviewer should not add files after the result is visible or remove a difficult file to improve the rate. A reproducible sample lets the team rerun the check after the workflow changes.",
          "Sample across the full window, including busy days and days when coverage changed. A sample drawn only from quiet days can make a fragile control look stable. Record the date and time of each observation and the name of the reviewer who collected it. If the population is small, report the count and the instability instead of a precise-looking rate.",
          "Choose a random or systematic start rule, then take consecutive files within each stratum. Stratify by loan stage, owner, and exception type so the sample is not dominated by the easiest files. Include at least one adverse file: a missing document, a conflict, an unavailable owner, or a deadline that forced a decision. The Mortgage Assistant records every access failure instead of replacing it silently with a different file."
        ]
      },
      {
        "heading": "Analysis and reporting",
        "paragraphs": [
          "Keep observed facts apart from interpretation, and label each table with its denominator and window. Show the oldest open file and the missing documents, not only the completion rate. The Mortgage Assistant names the next decision and the operations owner who must make it. Put the sample size beside every rate so a reader can judge how much weight the number carries.",
          "The analysis for appraisal reconsideration time asks whether the evidence supports the decision, not whether the team felt busy. Segment the result by stage, owner, and exception type so the team can see where the gap sits. The Mortgage Assistant reports a range or a count when the sample is small, rather than implying false precision. The report ends with one proposed change and the measure that will show whether it worked."
        ]
      },
      {
        "heading": "Limits and sources of error",
        "paragraphs": [
          "A complete file is not proof that a lending decision was correct, and the method measures evidence quality rather than loan quality. The protocol cannot establish intent, and it cannot speak for files that left no record at all. The Mortgage Assistant keeps the limits in the same section as the finding so a reader cannot separate them. When the definition changes, keep the old and new rules side by side for the transition period.",
          "The main limit is that the appraisal reconsideration time record may be incomplete, delayed, or maintained outside the team. This method cannot infer missing work from a clean summary or prove that a policy was followed when no trace exists. The Mortgage Assistant states those limits beside the result instead of burying them in a footnote. A change in systems, investor rules, product mix, or volume can make the result stale, so record those triggers.",
          "Sampling error, reviewer judgment, and missing records all limit what the result can claim. The Mortgage Assistant reports the overlap review and any disagreement instead of assuming the coding was consistent. A local result describes one team and one window, and it should not be presented as an industry benchmark. The report names what remains unknown, because that sentence is part of an honest measurement."
        ]
      },
      {
        "heading": "Review cadence",
        "paragraphs": [
          "Collection for appraisal reconsideration time ends when the sample is complete and the codebook is attached. The Mortgage Assistant stores the extract, the codebook, and the finding together so a later reviewer can rerun the check. The review closes with a short note that names what moved, what did not, and what remains unknown. That note is more useful than a precise-looking rate built on an unclear denominator.",
          "The next sample should use the same codebook and the same population rule so the comparison is honest. If the rule changes, label which version applies to each file and keep both extracts. The Mortgage Assistant reviews the measure after the change and reports whether the gap narrowed. The goal is a reviewable decision, not a perfect number that nobody can reproduce."
        ]
      }
    ],
    "sources": [
      {
        "label": "Consumer Financial Protection Bureau",
        "url": "https://www.consumerfinance.gov/"
      },
      {
        "label": "U.S. Department of Housing and Urban Development",
        "url": "https://www.hud.gov/"
      },
      {
        "label": "Federal Housing Finance Agency",
        "url": "https://www.fhfa.gov/"
      },
      {
        "label": "U.S. Government Accountability Office",
        "url": "https://www.gao.gov/"
      }
    ]
  },
  {
    "slug": "themortgageassistant-what-share-of-loan-files-have-a-complete-income-calculation-before-review",
    "title": "What share of loan files have a complete income calculation before review?",
    "summary": "A file completeness protocol for income calculations that keeps the worksheet and the conflict cases visible.",
    "cluster": "Pipeline quality",
    "publishedAt": "2026-11-08",
    "finding": "Completeness must be judged against a written worksheet, and the short-notice files should be reported separately rather than blended into the rate.",
    "thumbnail": "/thumbnails/november-08/themortgageassistant-what-share-of-loan-files-have-a-complete-income-calculation-before-review.webp",
    "sections": [
      {
        "heading": "Question and scope",
        "paragraphs": [
          "This file review covers income calculation completeness in one mortgage team during a fixed observation window. It measures whether the file evidence can support the decision that was recorded. The protocol keeps a missing document separate from a confirmed negative, because the two mean different things. A second reviewer should be able to rebuild the sample from the stated rule and the retained extract.",
          "The question behind this brief is narrow: does the income calculation completeness file show the source, the date, and the reviewer at each step? The Mortgage Assistant uses the result to improve one workflow, not to judge a loan officer or a borrower. The scope is the population named in the next section, not every loan in the pipeline. The method is written for a team that needs a reproducible answer rather than a polished chart.",
          "This protocol asks how long income calculation completeness takes in one mortgage operation and what the record can show about the delay. It is a local measurement method, not an industry benchmark, a lending standard, or an audit opinion. The result covers one defined population during one observation window and does not estimate a national rate. An operations lead can repeat the check from the written rule below."
        ]
      },
      {
        "heading": "Population and unit",
        "paragraphs": [
          "The unit is one loan file with a self-employed or variable income source. State the start event, the closing evidence, and the pause rule before counting the first file. A raw tally is not a measurement when the pipeline changes size during the window. Record each exclusion with a reason so a second reviewer can rebuild the sample.",
          "Define one one loan file with a self-employed or variable income source and count it once under a documented identity rule. The population is income files submitted for review during the observation window, and the window is long enough to include routine volume and a heavy week. Record system outages, staffing changes, and investor updates as context rather than deleting them. A definition that changes halfway through the window destroys comparability, so keep the old rule beside the new one."
        ]
      },
      {
        "heading": "Definitions and measures",
        "paragraphs": [
          "The Mortgage Assistant writes a short data dictionary that names each field, its allowed values, and the source that supports it. A missing value, an unavailable value, and a confirmed negative value are recorded separately. The measure is the share of files with a complete calculation worksheet before the reviewer opens them, and it is never reported without the eligible count and the exclusion count. A rate without a denominator and a window is not a finding the team can act on.",
          "Agree what complete means for income calculation completeness before the pipeline export is opened. Name the required fields, the acceptable source documents, and the handling of a blank value. The primary measure is the share of files with a complete calculation worksheet before the reviewer opens them, reported with its denominator and observation window. Add a count of missing evidence and the median age of files still open at the end of the window.",
          "For this protocol, completion means the file supports the share of files with a complete calculation worksheet before the reviewer opens them with a dated source and a named reviewer. The dictionary also defines how a reopened file is counted and how a duplicate is resolved. The Mortgage Assistant reports the sample size, the unresolved count, and the oldest open file beside every rate. Those three numbers describe volume, evidence, and delay without letting one hide another."
        ]
      },
      {
        "heading": "Evidence standard",
        "paragraphs": [
          "For this review, a record is usable when it carries  and  in the approved system. If two documents conflict, keep both copies and note which one informed the decision. The Mortgage Assistant labels an estimated value as an estimate so a later reader does not mistake it for a fact. The test is whether another reviewer can follow the evidence, not whether the file looks tidy.",
          "Fix the evidence rule for income calculation completeness before anyone opens the pipeline export. The rule should name the document that counts, the date that travels with it, and the treatment of a blank field. The primary measure is the share of files with a complete calculation worksheet before the reviewer opens them, always shown with its eligible count and observation window. Add the number of missing documents and the age of the oldest open file at the close of the window."
        ]
      },
      {
        "heading": "Sampling and collection",
        "paragraphs": [
          "Choose a random or systematic start rule, then take consecutive files within each stratum. Stratify by loan stage, owner, and exception type so the sample is not dominated by the easiest files. Include at least one adverse file: a missing document, a conflict, an unavailable owner, or a deadline that forced a decision. The Mortgage Assistant records every access failure instead of replacing it silently with a different file.",
          "For income calculation completeness, the extract starts with the pipeline export, not a list assembled after the result is known. The Mortgage Assistant keeps the selection rule, the random seed, and the exclusion log with the sample. The reviewer should not add files after the result is visible or remove a difficult file to improve the rate. A reproducible sample lets the team rerun the check after the workflow changes.",
          "Sample across the full window, including busy days and days when coverage changed. A sample drawn only from quiet days can make a fragile control look stable. Record the date and time of each observation and the name of the reviewer who collected it. If the population is small, report the count and the instability instead of a precise-looking rate."
        ]
      },
      {
        "heading": "Analysis and reporting",
        "paragraphs": [
          "Report the distribution, not only the mean, because a median can hide a long tail of unreviewed files. Show the open-file count and the oldest file age by owner, then identify where delay accumulates. A finding that cannot name an owner or a next action is not ready for the pipeline meeting. The Mortgage Assistant writes the result in plain language and keeps the technical detail in an appendix.",
          "Keep observed facts apart from interpretation, and label each table with its denominator and window. Show the oldest open file and the missing documents, not only the completion rate. The Mortgage Assistant names the next decision and the operations owner who must make it. Put the sample size beside every rate so a reader can judge how much weight the number carries."
        ]
      },
      {
        "heading": "Limits and sources of error",
        "paragraphs": [
          "Sampling error, reviewer judgment, and missing records all limit what the result can claim. The Mortgage Assistant reports the overlap review and any disagreement instead of assuming the coding was consistent. A local result describes one team and one window, and it should not be presented as an industry benchmark. The report names what remains unknown, because that sentence is part of an honest measurement.",
          "A complete file is not proof that a lending decision was correct, and the method measures evidence quality rather than loan quality. The protocol cannot establish intent, and it cannot speak for files that left no record at all. The Mortgage Assistant keeps the limits in the same section as the finding so a reader cannot separate them. When the definition changes, keep the old and new rules side by side for the transition period.",
          "The main limit is that the income calculation completeness record may be incomplete, delayed, or maintained outside the team. This method cannot infer missing work from a clean summary or prove that a policy was followed when no trace exists. The Mortgage Assistant states those limits beside the result instead of burying them in a footnote. A change in systems, investor rules, product mix, or volume can make the result stale, so record those triggers."
        ]
      },
      {
        "heading": "Review cadence",
        "paragraphs": [
          "Set a review date and hold to it, with a named owner for the measurement and the follow-up. End with one process change, one owner, and one check date rather than a list of general improvements. When a defect repeats, change the template, the source, or the rule before coaching the person. The Mortgage Assistant keeps the same sample rule each time and files the review note with the change.",
          "Collection for income calculation completeness ends when the sample is complete and the codebook is attached. The Mortgage Assistant stores the extract, the codebook, and the finding together so a later reviewer can rerun the check. The review closes with a short note that names what moved, what did not, and what remains unknown. That note is more useful than a precise-looking rate built on an unclear denominator."
        ]
      }
    ],
    "sources": [
      {
        "label": "Consumer Financial Protection Bureau",
        "url": "https://www.consumerfinance.gov/"
      },
      {
        "label": "U.S. Department of Housing and Urban Development",
        "url": "https://www.hud.gov/"
      },
      {
        "label": "Federal Housing Finance Agency",
        "url": "https://www.fhfa.gov/"
      },
      {
        "label": "U.S. Government Accountability Office",
        "url": "https://www.gao.gov/"
      }
    ]
  },
  {
    "slug": "themortgageassistant-how-many-title-exceptions-remain-open-at-the-closing-date",
    "title": "How many title exceptions remain open at the closing date?",
    "summary": "A clearance protocol for title exceptions that keeps the cure evidence and the closing date in view.",
    "cluster": "Pipeline quality",
    "publishedAt": "2026-11-08",
    "finding": "The clearance rate should name the exception type and the cure evidence, because a cleared flag does not prove the lien was released.",
    "thumbnail": "/thumbnails/november-08/themortgageassistant-how-many-title-exceptions-remain-open-at-the-closing-date.webp",
    "sections": [
      {
        "heading": "Question and scope",
        "paragraphs": [
          "This protocol asks how long title exception clearance takes in one mortgage operation and what the record can show about the delay. It is a local measurement method, not an industry benchmark, a lending standard, or an audit opinion. The result covers one defined population during one observation window and does not estimate a national rate. An operations lead can repeat the check from the written rule below.",
          "This file review covers title exception clearance in one mortgage team during a fixed observation window. It measures whether the file evidence can support the decision that was recorded. The protocol keeps a missing document separate from a confirmed negative, because the two mean different things. A second reviewer should be able to rebuild the sample from the stated rule and the retained extract.",
          "The question behind this brief is narrow: does the title exception clearance file show the source, the date, and the reviewer at each step? The Mortgage Assistant uses the result to improve one workflow, not to judge a loan officer or a borrower. The scope is the population named in the next section, not every loan in the pipeline. The method is written for a team that needs a reproducible answer rather than a polished chart."
        ]
      },
      {
        "heading": "Population and unit",
        "paragraphs": [
          "The population is title exceptions opened during the observation window. The Mortgage Assistant freezes the eligible list, the systems included, and the duplicate rule before reviewers see outcomes. Missing, conflicted, and inaccessible files stay in the denominator unless the written protocol says otherwise. That rule prevents a clean-looking rate that quietly removed the hard files.",
          "The unit is one title exception listed on a commitment. State the start event, the closing evidence, and the pause rule before counting the first file. A raw tally is not a measurement when the pipeline changes size during the window. Record each exclusion with a reason so a second reviewer can rebuild the sample."
        ]
      },
      {
        "heading": "Definitions and measures",
        "paragraphs": [
          "For this protocol, completion means the file supports the share of exceptions cleared before the scheduled closing date with a dated source and a named reviewer. The dictionary also defines how a reopened file is counted and how a duplicate is resolved. The Mortgage Assistant reports the sample size, the unresolved count, and the oldest open file beside every rate. Those three numbers describe volume, evidence, and delay without letting one hide another.",
          "The Mortgage Assistant writes a short data dictionary that names each field, its allowed values, and the source that supports it. A missing value, an unavailable value, and a confirmed negative value are recorded separately. The measure is the share of exceptions cleared before the scheduled closing date, and it is never reported without the eligible count and the exclusion count. A rate without a denominator and a window is not a finding the team can act on.",
          "Agree what complete means for title exception clearance before the pipeline export is opened. Name the required fields, the acceptable source documents, and the handling of a blank value. The primary measure is the share of exceptions cleared before the scheduled closing date, reported with its denominator and observation window. Add a count of missing evidence and the median age of files still open at the end of the window."
        ]
      },
      {
        "heading": "Evidence standard",
        "paragraphs": [
          "Each sampled file needs the source, the time observed, the field it supports, the reviewer, and the operations owner. Borrower detail stays in the approved system, and the review note uses a reference rather than a copy. The Mortgage Assistant collects only evidence the protocol can defend, even when a faster summary is available. A complete file is not proof that a lending decision was correct, and the report says so plainly.",
          "For this review, a record is usable when it carries  and  in the approved system. If two documents conflict, keep both copies and note which one informed the decision. The Mortgage Assistant labels an estimated value as an estimate so a later reader does not mistake it for a fact. The test is whether another reviewer can follow the evidence, not whether the file looks tidy."
        ]
      },
      {
        "heading": "Sampling and collection",
        "paragraphs": [
          "Sample across the full window, including busy days and days when coverage changed. A sample drawn only from quiet days can make a fragile control look stable. Record the date and time of each observation and the name of the reviewer who collected it. If the population is small, report the count and the instability instead of a precise-looking rate.",
          "Choose a random or systematic start rule, then take consecutive files within each stratum. Stratify by loan stage, owner, and exception type so the sample is not dominated by the easiest files. Include at least one adverse file: a missing document, a conflict, an unavailable owner, or a deadline that forced a decision. The Mortgage Assistant records every access failure instead of replacing it silently with a different file.",
          "For title exception clearance, the extract starts with the pipeline export, not a list assembled after the result is known. The Mortgage Assistant keeps the selection rule, the random seed, and the exclusion log with the sample. The reviewer should not add files after the result is visible or remove a difficult file to improve the rate. A reproducible sample lets the team rerun the check after the workflow changes."
        ]
      },
      {
        "heading": "Analysis and reporting",
        "paragraphs": [
          "The analysis for title exception clearance asks whether the evidence supports the decision, not whether the team felt busy. Segment the result by stage, owner, and exception type so the team can see where the gap sits. The Mortgage Assistant reports a range or a count when the sample is small, rather than implying false precision. The report ends with one proposed change and the measure that will show whether it worked.",
          "Report the distribution, not only the mean, because a median can hide a long tail of unreviewed files. Show the open-file count and the oldest file age by owner, then identify where delay accumulates. A finding that cannot name an owner or a next action is not ready for the pipeline meeting. The Mortgage Assistant writes the result in plain language and keeps the technical detail in an appendix."
        ]
      },
      {
        "heading": "Limits and sources of error",
        "paragraphs": [
          "The main limit is that the title exception clearance record may be incomplete, delayed, or maintained outside the team. This method cannot infer missing work from a clean summary or prove that a policy was followed when no trace exists. The Mortgage Assistant states those limits beside the result instead of burying them in a footnote. A change in systems, investor rules, product mix, or volume can make the result stale, so record those triggers.",
          "Sampling error, reviewer judgment, and missing records all limit what the result can claim. The Mortgage Assistant reports the overlap review and any disagreement instead of assuming the coding was consistent. A local result describes one team and one window, and it should not be presented as an industry benchmark. The report names what remains unknown, because that sentence is part of an honest measurement.",
          "A complete file is not proof that a lending decision was correct, and the method measures evidence quality rather than loan quality. The protocol cannot establish intent, and it cannot speak for files that left no record at all. The Mortgage Assistant keeps the limits in the same section as the finding so a reader cannot separate them. When the definition changes, keep the old and new rules side by side for the transition period."
        ]
      },
      {
        "heading": "Review cadence",
        "paragraphs": [
          "The next sample should use the same codebook and the same population rule so the comparison is honest. If the rule changes, label which version applies to each file and keep both extracts. The Mortgage Assistant reviews the measure after the change and reports whether the gap narrowed. The goal is a reviewable decision, not a perfect number that nobody can reproduce.",
          "Set a review date and hold to it, with a named owner for the measurement and the follow-up. End with one process change, one owner, and one check date rather than a list of general improvements. When a defect repeats, change the template, the source, or the rule before coaching the person. The Mortgage Assistant keeps the same sample rule each time and files the review note with the change."
        ]
      }
    ],
    "sources": [
      {
        "label": "Consumer Financial Protection Bureau",
        "url": "https://www.consumerfinance.gov/"
      },
      {
        "label": "U.S. Department of Housing and Urban Development",
        "url": "https://www.hud.gov/"
      },
      {
        "label": "Federal Housing Finance Agency",
        "url": "https://www.fhfa.gov/"
      },
      {
        "label": "U.S. Government Accountability Office",
        "url": "https://www.gao.gov/"
      }
    ]
  }
];
