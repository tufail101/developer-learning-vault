# Example — A tiny workflow file

```yaml
name: Basic Check

on: [push, pull_request]

jobs:
  check-files:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - name: List files
        run: ls
```

Even a small workflow can teach you how events, jobs, and steps fit together.
