# Coding Buddie 


## Requirements

- Git should be installed [Install Git](https://git-scm.com/downloads)
- Nodejs [Install Nodejs](https://nodejs.org/en/download/).
- Yarn (we recommend using yarn as a package manager) [Install Yarn](https://yarnpkg.com/en/)

## Quick start

- Clone the repo: `git clone https://github.com/BrunoSette/CodeBuddyFrontEnd.git`.
- Get in the folder: `cd CodeBuddyFrontEnd`
- Start the App: `yarn start`


### Workflow

This section describes the workflow we are going to follow when working in a new feature or fixing a bug. If you want to contribute, please follow these steps:

1. Fork this project
2. Clone the forked project to your local environment, for example: `git clone git@github.com:BrunoSette/CodeBuddyFrontEnd.git` (Make sure to replace the URL to your own repository).
3. Add the original project as a remote, for this example the name is `upstream`, feel free to use whatever name you want. `git remote add upstream https://github.com/BrunoSette/CodeBuddyFrontEnd.git`.

Forking the project will create a copy of that project in your own GitHub account, you will commit your work against your own repository.

#### Updating your local

In order to update your local environment to the latest version on `master`, you will have to pull the changes using the `upstream` repository, for example: `git pull upstream master`. This will pull all the new commits from the origin repository to your local environment.

#### Features/Bugs

When working on a new feature, create a new branch `feature/something` from the `master` branch, for example `feature/login-form`. Commit your work against this new branch and push everything to your forked project. Once everything is completed, you should create a PR to the original project. Make sure to add a description about your work.

When fixing a bug, create a new branch `fix/something` from the `master` branch, for example `fix/css-btn-issues`. When completed, push your commits to your forked repository and create a PR from there. Please make sure to describe what was the problem and how did you fix it.

#### Updating your local branch

Let's say you've been working on a feature for a couple days, most likely there are new changes in `master` and your branch is behind. In order to update it to the latest (You might not need/want to do this) you need to pull the latest changes to `master` and then rebase your current branch.

```bash
$ git checkout master
$ git pull upstream master
$ git checkout feature/something-awesome
$ git rebase master
```

After this, your commits will be on top of the `master` commits. From here you can push to your `origin` repository and create a PR.

You might have some conflicts while rebasing, try to resolve the conflicts for each individual commit. Rebasing is intimidating at the beginning, if you need help don't be afraid to reach out in slack.

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br>
You will also see any lint errors in the console.

## TODOs

- [X] Create home page
- [X] Create signup page
- [X] Create login page
- [X] Deploy in https://zeit.co
- [ ] Redirect to Create Room after sign up
- [ ] Review website texts
- [ ] Create search for rooms
- [ ] Update login page
- [ ] Update create room page
 

