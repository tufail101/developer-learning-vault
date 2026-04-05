# Full Workflow Example

```bash
git init
git add .
git commit -m "Create project files"
git checkout -b feature-readme
git add .
git commit -m "Update README"
git checkout main
git merge feature-readme
git remote add origin https://github.com/username/project.git
git push -u origin main
```
