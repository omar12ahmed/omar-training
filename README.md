# GIT Commands: A Basic Guide
This guide aims to provide a basic understanding of some of the most common Git commands that you might use when working locally and remotely. Here's an overview of what each command does:

## Local Repository Git Commands:
`git init`: This command is used to initialize a new Git repository in the current directory. It will create a new .git subdirectory in the current directory.

`git status`: This command shows the status of the repository, including any changes that have been made but not yet committed.

`git add <file>`: This command adds a file to the staging area in preparation for a commit. To add all the files in the current directory, `use git add .`.

`git commit -m "Your message here"`: This command creates a new commit with the changes you've added to the staging area. The `-m` flag is followed by a message that describes the changes made in the commit.

`git log`: This command displays a list of all the commits in the repository's history. Each commit is shown with its hash, author, date, and commit message.

## Remote Repository Git Commands:
`git clone <repository>`: This command is used to clone (or copy) a remote repository onto your local machine. Replace `<repository>` with the URL of the repository you want to clone.

`git push origin <branch>`: This command pushes your changes to the specified branch on the remote repository. Replace `<branch>` with the name of the branch you want to push to.
9
`git pull origin <branch>`: This command pulls changes from the specified branch of the remote repository and merges them into your current branch.

`git remote -v`: This command lists all remote repositories that are connected to the current repository.

## Branching Git Commands:
`git branch`: This command lists all branches in your repository. The current branch will be marked with an asterisk.

`git branch <branch>`: This command creates a new branch. Replace `<branch>` with the name you want to give to the new branch.

`git checkout <branch>`: This command switches to another branch. Replace `<branch>` with the name of the branch you want to switch to.

`git merge <branch>`: This command merges the specified branch into the current branch. Replace `<branch>` with the name of the branch you want to merge into your current branch.

Remember, Git has a vast number of commands beyond these basics. As you gain more experience and become more comfortable with Git, you'll likely find that you're using a wider variety of commands.