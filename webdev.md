## Week 1 - Orientation, HTML/CSS/Basic JS
### 1.1 | Web Dev + Devops Orientation - [🔗](https://petal-estimate-4e9.notion.site/Orientation-703d935ef4564fe1bc61e60e83f4c409) [🎥](https://app.100xdevs.com/courses/14/411/412) [📝](https://github.com/sansela/cohort3/tree/master/webdev/week-1/html-css-basics)
* Web Dev + Devops Cohort by 100xDevs
* Avoid the spikes
* What would I do if I was you?
* Select your level
* Good things to hash out
* VSCode Installation
* HTML
* CSS
### 1.2 | Basics of Javascript (4th Aug, 2024)[🔗](https://projects.100xdevs.com/tracks/javascript-1/Javascript-101-1)[🎥](https://app.100xdevs.com/courses/14/411/421)[📝](https://github.com/sansela/cohort3/tree/master/webdev/week-1/js-basics)
* Did you code yesterday ?
* Javascript - The basics
* Properties of JS
* Syntax of Javascript
* Complex types
## Cohort 2 Warm up videos
### Intro, Setting up your IDE [🔗](https://slides.com/harkiratsingh-8/deck)[🎥](https://app.100xdevs.com/courses/14/417/418)[📝]()
### HTML Basics (Tags and Attributes) [🔗](https://slides.com/harkiratsingh-8/deck)[🎥](https://app.100xdevs.com/courses/14/417/419)[📝](https://github.com/sansela/cohort3/tree/master/webdev/cohort-2-warmup)
### CSS Basics [🔗](https://slides.com/harkiratsingh-8/deck)[🎥](https://app.100xdevs.com/courses/14/417/420)[📝](https://github.com/sansela/cohort3/tree/master/webdev/cohort-2-warmup)

## Week 2 - Async JS
### 1.1 | Async JS (11th Aug 2024) [🔗](https://projects.100xdevs.com/tracks/async-js-1/Asynchronous-Javascript--Callbacks-and-more-1)[🎥](https://app.100xdevs.com/courses/14/430/431)[📝](https://github.com/sansela/cohort3/tree/master/webdev/week-2)
1. Introduction
2. Normal functions in JS
3. Synchronous code
4. I/O heavy operations
5. I/O bound tasks vs CPU bound tasks
6. Doing I/O bound taks in the real world
7. Functional Arguements
8. Asynchronous code, callbacks
9. JS architecture of async code
### Promises [🔗](https://projects.100xdevs.com/tracks/promises-async-await/Promises-and-async--await-1)[🎥](https://app.100xdevs.com/courses/14/430/432)[📝](https://github.com/sansela/cohort3/tree/master/webdev/week-2/promises)
1. Shoutouts
2. Classes in JS
3. Inheritence in Classes
4. Some more class
5. Promise class
## Week 2 - offline videos
### 1. Bash and Terminals (Basics) [🔗]()[🎥](https://app.100xdevs.com/courses/14/435/436)[📝](https://github.com/sansela/cohort3/tree/master/webdev/week-2-offline/bash)
1. pwd
2. cd
3. ls
4. mkdir
5. touch
6. cat
7. vi
8. mv
9. cp -r
10. nvm
11. npm
12. node
### 2. Bash advance [🔗]()[🎥](https://app.100xdevs.com/courses/14/435/437)[📝](https://github.com/sansela/cohort3/tree/master/webdev/week-2-offline/bash)
* ls
* ls -l
* ls -R for folder and subfiles
* ls -lt
* ls -la hidden files
* ls -lr
* ls -lR checks sub folders also recursivley
* ls -s size
* ls -lR | grep .txt searchs all subfolders for files contain .txt
* ls *.js all js files in current dir
* ls .. lists all files in parent dir
* touch a.txt
* cat a.txt - to see contents of file
* cat > a.txt Add some text -> Ctrl+ d  to save the file
* cat >> a.txt Add some text -> Ctrl + d to append some text
* mkdir frontend
* mkdir frontend && cd frontend -combining two commands
* mkdir -p frontend/html/css/js - recursively create dirs
* mkdir -p frontend frontend/html frontend/css frontend/js -crates frontend dir, remaining 3 dirs inside frontend dir
* mv a.txt b.txt -rename
* mv sample.txt frontend/scripts moves file/cut-paste
* mv sample.txt frontend/scripts/sample1.txt - rename while moving
* cp sample.txt frontend/scripts - copy file
* cp -r test frontend - copy test folder into frontend folder
* rm sample.txt - remove file
* rm -r frontend/scripts - remove scripts dir inside frontend. -r must for folders. i.e., recursively.
* chmod u+x script.sh - add execute permission to you for script.sh. But in Windows shell it won't work. ls -l still shows default. 
* chmod g+rx script.sh - add write,execute permissions for group.
* chmod g-rx script.sh -revokes read, execute permissions to the group.
* chmod 664 script.sh - numeric representation
* echo 'Hello World'
* echo $PATH
* head numbers.txt - first 10 rows
* tail numbers.txt - last 10 rows
* head -20 numbers.txt - first 20 rows
* tail -20 numbers.txt - last 20 rows
* head number.txt | head -5 first command output is an input to second command. First one gives 10 rows. Second command gives 5 of the first 10 rows.
* wc file1.txt - gives number of lines, number of words, number of characters.
* grep "one" numbers.txt - all the lines which contains word "one"
* grep "one" numbrs.txt |wc
* grep -c "0" numbers.txt - number of occurrences of 0
* grep -h "0" numbers.txt - prints all places
* grep -hi "one" numbers.txt - ignores the case and search all occurrences.
* grep -hir "one" . with in all dir recursively
* grep -hin "one" line numbers
* grep -hinw "one" nubers.txt - match whole word
* grep -o "one" numbers.txt -match whole word
* history - history of commands 
* bash script.sh - shebang, create new dir and file inside that.
* brew install node - to install node.js on Mac
* node -v
* nvm & curl for linux/unix
* grep -v "INFO" log.txt - everything except INFO
* grep -A 5 ERROR log.txt - 5 lines after ERROR
* grep -B 5 ERROR log.txt - 5 lines after ERROR
* grep -C 5 ERROR log.txt - 5 lines before & after ERROR
* sed -n '/ERROR/ p' log.txt - prints all ERROR lines
* sed 's/ERROR/CRITICAL/' log.txt - replaces ERROR with CRITICAL
* sed -ibackup 's/ERROR/CRITICAL/' log.txt - back up file created
* sed '3,7 s/ERROR/CRITICAL/' log.txt - replaces ERROR with CRITICAL within line 3 to 7
* sed -n '3,7 s/ERROR/CRITICAL/' log.txt - print before replacing
* awk '/ERROR/{print $0}' log.txt - prints ERROR lines
* awk '{gsub(/ERROR/, "CRITICAL")}{print}' log.txt - replaces
* awk 'BEGIN {print "LOG SUMAMARY\n----------------"} {print "---------------END OF LOG SUMMARY"}' log.txt - appends at the begining and end
* awk '{print $1 $2}' log.txt - prints 1st, 2nd columns of data
* awk -F "," '{print $1 $2}' log.txt - delimiter is , instead of default space delimiter
* awk '{count[$2]++} END {print count["ERROR"]}' log.txt - count occurrences of ERROR in column 2
* awk '{ if ($1 > 1598863888) {print $0}}' log.txt - pull logs after a specific timestamp
### 5. Callback hell, Rejects and async/await [🔗](https://projects.100xdevs.com/tracks/promises-async-await/Promises-and-async--await-1)[🎥](https://app.100xdevs.com/courses/14/435/440)[📝](https://github.com/sansela/cohort3/tree/master/webdev/week-2-offline/callbackhell-rejects-asyncawait)
6. Callback hell
7. Async await syntax
8. Defining your own async function
9. err first callback function vs reject in Promise
10. Assignments
