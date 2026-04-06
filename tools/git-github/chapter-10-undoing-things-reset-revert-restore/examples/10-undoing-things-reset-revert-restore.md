# Example — Three ways to undo work

```bash
# discard local file edits
git restore src/app.js

# create a new commit that undoes an old commit
git revert HEAD

# move branch pointer back one commit locally
git reset --soft HEAD~1
```

Ask yourself one question first: do you want to keep history, or change history?
