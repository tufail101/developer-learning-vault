# Example — Ignoring local clutter and previewing cleanup

## Sample `.gitignore`

```gitignore
node_modules/
.env
.DS_Store
dist/
*.log
```

## Safe cleanup flow

```bash
git status
git clean -n
git clean -fd
```

Use `git clean -n` first so you can see what would be deleted before anything is removed.
