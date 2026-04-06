# Code Review Guide

Code review is not just about catching mistakes. It is also about protecting maintainability, sharing knowledge, and helping the team move safely.

## What Senior Developers Look For

### Correctness

- does the code actually solve the stated problem?
- are there obvious edge cases missing?
- could the behavior break in production?

### Readability

- can another developer understand this quickly?
- are names clear?
- is the logic more complex than it needs to be?

### Maintainability

- will this be easy to change later?
- is the code organized well?
- are responsibilities separated cleanly?

### Tests

- are important behaviors covered?
- are tests checking behavior instead of internals?
- is there a risk of regression without tests?

### Accessibility And UX

- is the UI keyboard friendly?
- are loading, empty, and error states handled?
- are labels, semantics, and focus states considered?

## How To Give Good Feedback

- be specific
- explain why something matters
- suggest improvements when possible
- separate preference from real risk
- keep the tone collaborative

Examples:

- "This may break when the API returns an empty array because `items[0]` is assumed to exist."
- "Could we move this formatting logic into a helper so the component stays easier to scan?"

## How To Receive Feedback Well

- do not treat every comment like a personal attack
- ask for clarification if the risk is unclear
- focus on the shared goal of better code
- be willing to change your mind

## Red Flags In A PR

- giant unrelated changes
- unclear naming
- no tests for risky behavior
- repeated logic
- hidden side effects
- poor error handling

## A Healthy Review Culture

The best code review culture balances quality with respect. The goal is not to prove who is smartest. The goal is to make the codebase safer and make teammates stronger.
