# 🌱 Git Basics & Workflow Reference

A complete guide to commonly used Git commands and best practices for beginners.

---

## 📁 File & Folder Operations

```bash
mkdir folderName        # Creates a new folder
touch fileName          # Creates a new file
cd directoryName        # Move into a directory
cd ..                   # Move back to the previous directory
```

---

## 🔧 Initializing Git

```bash
git init                # Initializes a Git repository (run once per project)
```

---

## 📊 Checking Status

```bash
git status              # Shows the current status of your working directory
```

---

## 📝 Staging & Unstaging Files

```bash
git add fileName        # Stage a specific file
git add .               # Stage all changes in the current directory
git rm --cached fileName # Unstage a file (removes from staging)
```

---

## ✅ Committing Changes

```bash
git commit -m "Your message here"   # Commit staged changes with a message
```

> 💡 Use **atomic commits** — each commit should represent one logical change (a feature or fix).

---

## 📜 Commit History

```bash
git log                 # Full commit history
git log --oneline       # Short, one-line summary per commit
```

---

## 🚫 .gitignore File

- Create a `.gitignore` to exclude files/folders from version control.

Example:
```
node_modules/
.env
dist/
*.log
```

---

## 🌿 Working with Branches

```bash
git branch                  # List all branches
git branch branchName       # Create a new branch
git switch branchName       # Switch to an existing branch
git switch -c newBranch     # Create and switch to a new branch
git checkout branchName     # (Older command to switch branches)
```

---

## 🔀 Merging Branches

```bash
git merge branchName        # Merge a branch into the current branch
```

---

## 🗑️ Deleting Branches

```bash
git branch -d branchName    # Delete a branch (if merged)
git branch -D branchName    # Force delete a branch
```

---

## 🌐 Remote Repositories in Git

### ➕ Add a Remote Repository (e.g., GitHub)

```bash
git remote add origin https://github.com/your-username/your-repo.git
```

- `origin` is the default name for your remote repository.
- Replace the URL with your actual repository URL (from GitHub, GitLab, Bitbucket, etc.).

### 🔍 Check Connected Remotes

```bash
git remote -v
```

- Displays the connected remotes and their URLs.

---

### 🧳 Clone a Remote Repository

```bash
git clone https://github.com/your-username/your-repo.git
```

- Creates a copy of a remote repository on your local machine.
- It clones the entire history of the repository.

---

## 🚀 Push & Pull (After Adding Remote)

### Push Your Local Branch to Remote

```bash
git push -u origin branchName  # First time with -u to set upstream
```

- `-u` sets the remote `origin` and branch name as the default for future pushes.

### Pull Changes from Remote to Local

```bash
git pull origin branchName     # Pull updates from the remote branch
```

- Keeps your local branch up to date with the remote.

### Fetch Remote Changes (without merging)

```bash
git fetch origin               # Fetch changes from the remote repo without merging them
```

- Useful to get updates from the remote without changing your local working directory.

---

## 📦 Stashing Changes

```bash
git stash                   # Temporarily saves uncommitted changes
git stash pop               # Apply the last stashed changes and remove from stash
git stash list              # View list of stashed changes
```

> Use when you need to switch branches but don't want to commit current changes yet.

---

## ♻️ Rebasing

```bash
git rebase branchName       # Reapplies commits on top of another branch
```

> 🔁 Use `rebase` to make a cleaner, linear history (commits are replayed).  
> ⚠️ Avoid rebasing shared branches (can rewrite history).

---

## 🧭 Git Workflow (Write → Add → Commit)

1. **Write code**
2. **Stage** with `git add .`
3. **Commit** with `git commit -m "message"`
4. **(Optional)** Push to remote: `git push origin branchName`

---
