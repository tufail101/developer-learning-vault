# Machine Setup

This guide helps you prepare a simple, beginner-friendly development setup without overcomplicating your first week.

## 1. Install VS Code

Download Visual Studio Code from the official site and install it with the default options.

Once it opens, learn these basics:

- how to open a folder
- how to create a file
- how to use the file explorer
- how to use the search panel
- how to open the integrated terminal

## 2. Recommended Extensions

Install these first:

- Prettier
- ESLint
- Live Server
- GitLens

Optional but helpful:

- HTML CSS Support
- JavaScript and TypeScript Nightly if you like experimenting

Why these help:

- Prettier keeps formatting clean
- ESLint highlights common mistakes
- Live Server makes static pages easier to preview
- GitLens helps you understand Git history later

## 3. Install Node.js

Download the current LTS version of Node.js.

After installing, verify it in the terminal:

```bash
node -v
npm -v
```

Why Node.js matters even if you start with frontend:

- modern tooling often depends on it
- package managers use it
- many local dev workflows use it
- later chapters and backend lessons need it

## 4. Learn The Browser Developer Tools

Open your browser and practice these tabs:

- Elements: inspect and edit HTML
- Styles: test CSS changes live
- Console: read JavaScript errors and run code
- Network: inspect requests and responses
- Device Toolbar: preview mobile layouts

Simple exercise:

1. Open any website
2. Right-click and choose Inspect
3. Change a heading or background color in dev tools
4. Open the console and run `2 + 2`

## 5. Open The Terminal

You will use the terminal a lot, so get comfortable with it early.

In VS Code:

- open the project folder
- use `Terminal -> New Terminal`

Basic commands worth knowing:

```bash
pwd
ls
cd ..
mkdir practice-folder
```

## 6. Install Git

Install Git and verify it:

```bash
git --version
```

Then set your identity:

```bash
git config --global user.name "Your Name"
git config --global user.email "your@email.com"
```

## 7. Create A GitHub Account

Set up a GitHub account if you do not already have one.

Later this will help you:

- back up your work
- build a portfolio
- collaborate with others
- practice real developer workflows

## 8. Folder Setup

Keep your workspace simple.

One good beginner structure:

```text
learning/
  web-dev-learning-system/
  scratch/
  personal-projects/
```

This helps you separate:

- guided repo work
- experiments
- your own builds

## 9. First-Day Sanity Check

Before moving on, confirm:

- VS Code opens correctly
- the terminal works
- Node.js is installed
- Git is installed
- your browser dev tools open
- you can open this repository as a folder

If any one of these is missing, fix it before starting the chapters.

## 10. Keep It Lightweight

Do not spend hours perfecting your setup before learning.

You only need a setup that works well enough to let you:

- read files
- edit files
- preview pages
- run basic commands
- debug simple mistakes
