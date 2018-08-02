# Restaurant Ordering System

Just what the name suggest :) 

## Set-up

### Prerequisites

* stable to fast Internet connection
* latest version of Java SE installed
* [Node.js latest LTS version](https://nodejs.org/en/download/)

* Maven 3.+
	  https://maven.apache.org/download.cgi
	
* Angular 5
	  
    type `cd angular-app` , press Enter, and then `npm install @angular/cli` and press Enter to install necessary Angular modules. 


### Installing
	
* Maven

	`mvn clean install`
	`mvn dependecy:resolve`
	    

### How to RUN LOCALLY
    
  * Spring Boot

    `mvn -DskipTests appengine:run`

  * Angular 5

    `ng serve --open`
    
### Deployment
    
  * Spring Boot

    `mvn -DskipTests appengine:deploy`

  * Angular 5

    `ng build --prod`

## Angular 5

Make sure you are in `angular-app` directory first before adding components, services, etc.

Ample knowledge of Angular 5 is also needed. 

### Adding Components

* `ng g c modules/admin|customer|receptionist/component-name`

* `move modules/admin|customer|receptionist/component-name.html|scss|ts src/app/assets/html|scss|ts`

Note: Gipangita pa nakog way kung unsaon pag shorten sa mga commands. Tiis-tiis lang :3

### Adding Services

* `ng g s core/services/service-name`

### Further stuff will be added later 

## Suggested work flow:
  - git branch < feature name >
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
      - [alias]
        - co = checkout
        - ci = commit
        - st = status
        - br = branch
        - hist = log --pretty=format:'%h %ad | %s%d [%an]' --graph --date=short
        - type = cat-file -t
        - dump = cat-file -p
