<h2>Restaurant Ordering System</h2>

Suggested work flow:
- git branch <feature name>
- after editing look at the recent commits of master branch if there is new
- git fetch
- git rebase origin/master
- fix conflicts if any
- git add
- git rebase --continue
- git push
- Ask for Pull Request or here in Gitlab "Merge Request" and add other devs as reviewers and press the "Remove source branch when merge request is accepted." option

Setting .gitconfig file
- go to (C:) drive
- go to Users
- go to your User name (mine is Timothy)
- edit the .gitconfig file and add this:
    [alias]
      co = checkout
      ci = commit
      st = status
      br = branch
      hist = log --pretty=format:'%h %ad | %s%d [%an]' --graph --date=short
      type = cat-file -t
      dump = cat-file -p
