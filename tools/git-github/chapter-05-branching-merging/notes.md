# Chapter 5: Branching And Merging

## What A Branch Is

A branch is a separate line of work.

You can use branches to:

- test a new feature
- fix a bug
- work without disturbing your main version

## Real-World Analogy

Imagine copying a notebook page to test ideas safely.
If the idea works, you bring it back into the main notebook.

## Common Commands

Create a branch:

```bash
git branch feature-navbar
```

Switch branch:

```bash
git checkout feature-navbar
```

Or in one step:

```bash
git checkout -b feature-navbar
```

Merge branch:

```bash
git checkout main
git merge feature-navbar
```

## Why This Matters

Branching is part of real developer workflow, especially in teams.

## Best Practices

- give branches clear names
- keep branch work focused
- merge only when the work is ready

## Common Mistakes

- forgetting which branch you are on
- mixing unrelated work into one branch
- merging without testing
