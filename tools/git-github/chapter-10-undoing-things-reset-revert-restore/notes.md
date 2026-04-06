# Undoing Things Reset Revert Restore

## What This Chapter Is About

This chapter teaches how to undo changes safely with `git reset`, `git revert`, and `git restore`.
The goal is to help you use Git and GitHub with more confidence when the workflow gets a little more real.

## Real-World Analogy

Undoing Git work is like deciding whether you want to erase pencil marks, add a correction note, or put one page back the way it looked earlier. Each tool solves a different kind of mistake.

## Key Ideas

- `git restore` is useful for undoing local file changes.
- `git revert` creates a new commit that reverses an older commit safely.
- `git reset` changes history, so it needs more care than the other two commands.

## Why This Matters

Git gets much easier when you stop treating commands like magic words.
You do not need every command at once, but you do need to know which problem each one is meant to solve.
That is what this chapter is helping you practice.

## Common Mistakes

- using `git reset` when `git revert` would be safer
- undoing work without checking whether the commit is already shared
- running a command from memory without reading the flags carefully

## Practice Tip

Run commands in a throwaway repository first when the action feels risky.
That gives you room to learn without worrying about breaking something important.

## Next Step

Next chapter: **11 Resolving Merge Conflicts**.
That chapter builds directly on the workflow you practiced here.
