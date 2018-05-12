---
path: "/blog/most-common-git-commands-that-i-use"
date: "2018-05-07"
title: A short list of the most common git commands that I use
template: "blog_post"
---

[Git](https://git-scm.com/) is a powerful version control system that allows people and teams to collaborate on source codes more efficiently and effectively. It saves history, allows you to work on features or bugs in parallel, peer review code before saving it to production, and much more. 

### Assumptions
This post assumes that you know the basics of git, and serves as a simple *cheat sheet*. I may create another post in the future dedicated to the basics of git and cover more complex topics like `git rebase`, but for now I think this will be helpful for others like myself that just want a simple reference sheet to the commands that we use most.

### Getting set up

- `git init` - create a new git repository
- `git clone <repository address>` - copies a repository from a website like [GitHub](https://github.com) to your computer, i.e. `git clone https://github.com/facebook/react.git`
- `git remote add origin <repository address> ` - set up a new remote repository, i.e. `git remote add origin https://github.com/seanwlawrence/bulma-classnames.git`
- `git push -u origin master` - update new repository with your first commit, after doing this for the first time, you can simply use `git push`

### Making changes
- `git status` - see if you have any files that have been changed or added to staging, helpful for checking where you're at before adding changes or making a commit
- `git add .` - add all changed files to staging. Side note: if you want to only add specific files to staging, you can remove the `.` and instead type out the file name, i.e. `git add index.html`
- `git commit` - commit all staged files
- `git push` - update remote repository with your local commits

### Updating your local repository
- `git pull` - update your local repository with any new changes from the remote repository

### Working with branches
- `git checkout <branch name>` - switch to another branch, i.e. `git checkout bug/header-styling`
- `git checkout -b <branch name>` - create new branch and switch to it, i.e. `git checkout -b feature/new-branch`
- `git branch` - see a list of all the branches
- `git branch -D <branch name>` - delete branch, i.e. `git branch -D chore/update-font-family`
- `git merge <branch name>` - merge two branches, i.e. merge the `feature/new-post` branch with the current branch `git merge feature/new-post`

### Viewing and deleting commits
- `git log` - see all of your commits 
- `git reset --hard <commit id>` - deletes all history after the specified commit id and goes back to that commit, i.e. `git reset --hard l3jlkj4l534059808`

### Conclusion
There are a ton of other common commands that many developers use for working with git, such as `git rebase` that I use pretty infrequently (since I prefer to use merges and usually only rebase when working on large open source projects like [Mail for Good](https://github.com/freeCodeCamp/mail-for-good)), but I left them out since they can get a bit complicated to explain and the experts at Atlassian do a much better job in their [blog post on rewriting history in git](https://www.atlassian.com/git/tutorials/rewriting-history). Happy coding! **SL**
