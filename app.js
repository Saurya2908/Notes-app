const chalk=require("chalk")
const notes=require("./notes.js")
const yargs=require("yargs")
const { string } = require("yargs")

//add a note
yargs.command({
    command:'add',
    describe:'Adding a new note',
    builder:{
        title:{
        describe:'Adding a title!!',
        demandOption:true, 
        type:'string'
        },
        body:{
            describe:'Adding a body!!',
            demandOption:true,
            type:'string'
            }
    },
    handler(argv){
        notes.addNotes(argv.title,argv.body)
    }
})

//remove a note
yargs.command({
    command:'remove',
    describe:'removing a new note',
    builder:{
        title:{
        describe:'Getting a title!!',
        demandOption:true,
        type:'string'
        }
    },
    handler(argv){
        notes.removeNotes(argv.title)
    }
})

//read a note
yargs.command({
    command:'read',
    describe:'Reading a new note',
    builder:{
        title:{
            describe:'getting a title',
            demandOption:true,
            type:'string'
        }
    },
    handler(argv){
        notes.readNotes(argv.title)
    }
})

//list all notes
yargs.command({
    command:'list',
    describe:'Listing all notes',
    handler(){
        notes.listNotes()
    }
})

yargs.parse()