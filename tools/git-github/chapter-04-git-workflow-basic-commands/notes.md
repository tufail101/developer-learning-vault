# Chapter 4: Git Workflow And Basic Commands

## The Basic Git Workflow

Most beginner Git work follows this pattern:

1. create or change files
2. check status
3. stage files
4. commit changes

## Core Commands

Initialize a repository:

```bash
git init
```

Check status:

```bash
git status
```

Stage files:

```bash
git add .
```

Create a commit:

```bash
git commit -m "Add homepage section"
```

View history:

```bash
git log
```

## Real-World Analogy

Think of Git like packing and labeling boxes:

- `git status` checks what changed
- `git add` puts items into the shipping box
- `git commit` seals and labels the box

## Why This Matters

This workflow is the daily heartbeat of Git.

## Best Practices

- run `git status` often
- commit small logical changes
- write commit messages that describe the change

## Common Mistakes

- committing without checking status
- staging too much by accident
- writing weak commit messages like `update`
