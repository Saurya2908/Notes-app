#npm packages used in notes-app:
**fs**= to read/write files
**yargs**= to parse command line arguments
**chalk**=for coloured command line output

#Instructions to run the app:

1. set the notes-app directory as pwd and in cmd type: npm i
2. run the main file using command: node app.js <command> <arguments>

The program has 4 command add, read, remove, list provide the command you require
Each command will have some required arguments (to see run any command without arguments and check for options)

eg:- 
*to add a new note*
node app.js add --title="veggies" --body="potato, tomato, spinach"

*to remove a note*
*node app.js remove --title="veggies"

*to read a note*
node app.js read --title="veggies"

*to list all notes*
node app.js list