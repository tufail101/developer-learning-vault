# Chapter 01: Why Testing

Testing helps you verify behavior and change code with more confidence.

## Main Testing Levels

- unit tests check small isolated pieces
- integration tests check how pieces work together
- end-to-end tests check full user flows

## What To Test

- business rules
- user-critical flows
- edge cases
- code that is easy to break during refactors

## What Not To Over-Test

- trivial implementation details
- framework internals
- code that changes constantly but does not affect behavior

## Senior Dev Thinking

Good testing is not about chasing 100 percent coverage. It is about reducing risk in the parts of the system that matter most.
