const fs=require('fs')
const yargs=require('yargs')
const notes=require('./notes.js')

//Create add command
yargs.command({
    command:'add',
    describe:'Adding a note',
    builder:{
        title:{
            describe:'Note Title',
            demandOption: true,
            type: 'string'
        },
        body:{
            descrbe:"Note body",
            demandOption: false,
            type: 'string'
        }

    },
    handler:(argv)=>notes.addNote(argv.title,argv.body)
    
})

//Create remove command
yargs.command({
    command:'remove',
    describe:'deleting a note',
    builder:{
        title:{
            describe:'Note Title',
            demandOption:true,
            type:'string'
        }
    },
    handler:(argv)=>notes.removeNote(argv.title)
})

//Create read command
yargs.command({
    command:'read',
    describe:'reading a note',
    builder:{
        title:{
            describe:'Note Title',
            demandOption:true,
            type:'string'
        }
    },
    handler: (argv)=>notes.readNote(argv.title)
})

//Create list command
yargs.command({
    command:'list',
    describe:'listing notes',
    handler: ()=>notes.listNotes()
})
yargs.argv