# Gitignore And Git Clean

## What This Chapter Is About

This chapter teaches how to ignore files you do not want in Git and how to clean untracked files safely.
The goal is to help you use Git and GitHub with more confidence when the workflow gets a little more real.

## Real-World Analogy

A `.gitignore` file is like a sign on a storage shelf that says which items should never be cataloged. `git clean` is like sweeping away loose scraps after you check that nothing important is in the pile.

## Key Ideas

- `.gitignore` keeps generated files, secrets, and local clutter out of your commits.
- `git status` helps you see what Git is tracking before you clean anything.
- `git clean` removes untracked files, so it should be used carefully and previewed first.

## Why This Matters

Git gets much easier when you stop treating commands like magic words.
You do not need every command at once, but you do need to know which problem each one is meant to solve.
That is what this chapter is helping you practice.

## Common Mistakes

- committing `.env` files or generated folders by accident
- using `git clean -fd` without previewing the result first
- assuming `.gitignore` will untrack files that are already committed

## Practice Tip

Run commands in a throwaway repository first when the action feels risky.
That gives you room to learn without worrying about breaking something important.

## Next Step

Next chapter: **10 Undoing Things Reset Revert Restore**.
That chapter builds directly on the workflow you practiced here.
