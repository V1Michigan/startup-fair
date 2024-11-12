# V1 Startup Fair

## Setup

1. First clone the repository: `git clone https://github.com/v1michigan/startup-fair`.
2. Make sure you enter the repository through terminal `cd startup-fair`.
3. Create a new branch for your NEW feature: `git checkout -b [FEATURE_NAME]`.
   1. If you want to go to an existing feature: `git checkout [FEATURE_NAME]`
   2. If you want to go back to the main branch: `git checkout main`
   3. `[FEATURE_NAME]` should be all lowercase and formatted as `[f][l]--[describe-feature]`, where `f` and `l` are your first and last initials.
4. Ensure you are on **Node v16** by verifying `node -v`. If you're not:
   1. If you already have node, but a different version:
      1. Go to the root directory in your terminal (type `cd` and hit enter and it should take you there).
      2. *We will be deleting your existing node installations, because nvm will install its own node installations separately. It won't use your existing installation and as such it will just be wasting space on your disk. So let's remove it! If you have a reason to keep it, scroll below to the "Setup `nvm`" step.*
      3. Run `whereis node`. You should see two paths.
      4. Use `sudo rm -rf <path>` (No angle brackets) to delete each of them (check the [first answer here](https://stackoverflow.com/questions/11177954/how-do-i-completely-uninstall-node-js-and-reinstall-from-beginning-mac-os-x) for more help).
   2. Set up `nvm` ([find tutorial here](https://www.freecodecamp.org/news/node-version-manager-nvm-install-guide/) or see directions in [their repon here](https://github.com/nvm-sh/nvm#about)).
   5. Run `nvm install 16`
   6. Run `nvm use 16` to switch to Node v16.
   7. Verify `node -v` again. If it says `v16.x.x`, it worked!
5. Install dependencies: `npm install`. **We DO NOT use yarn for this.**
6. Begin Devving: `npm run dev`. This will allow you to access a dev version of the site @ `localhost:3000` that will update automatically as you save files.
7. When you finish a part of your feature and wish to push the changes to the remote repository:
8. `git add [changed_files]` (replace `changed_files` with the actual file names you changed)
9.  `git commit -m "meaningful commit message goes here"`
    1.  Please write your commit messages in [imperative present tense](https://stackoverflow.com/questions/3580013/should-i-use-past-or-present-tense-in-git-commit-messages)!
    2.  Ensure your commit messages say why you made said changes or what the implications of the changes are, not what changes you made to the code (because anyone can see what changes by looking at the commit diffs). 
10. `git push --set-upstream origin [FEATURE_NAME]` (the next time you push to this branch you can just say `git push`).
11. Go to the GitHub repo page, open a pull request and put the Linear issue ID in the PR title.
    1.  This allows Linear to automatically sync the status of the issue with the PR's status.
12. Request approval from a senior member of the Platform team.
13. Once it's approved, merge your PR and ship your changes! 🎉
