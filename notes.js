const chalk = require('chalk')
const fs=require('fs')
const addNotes=(title,body)=>{
    const notes=loadNotes()
    const duplicateNote=notes.find((notes)=>notes.title===title)
    if(!duplicateNote)
    {
    notes.push({
        title:title,
        body:body
    })
    saveNotes(notes)
    console.log("new note added!!")
    }
    else{
        console.log("note title already taken!!!")
    }
}
debugger

const saveNotes=(notes)=>{
    const dataJSON=JSON.stringify(notes)
    fs.writeFileSync('notes.json',dataJSON)
}

const loadNotes=()=>{
    try {
        const dataBuffer=fs.readFileSync('notes.json')
        const data = JSON.parse(dataBuffer.toString())
        return data
    } catch (error) {
        return []
    }
 
}

const removeNotes=(title)=>{
    const notes=loadNotes()
    const NotesToKeep=notes.filter((notes)=>notes.title!==title)
    if(notes.length>NotesToKeep.length){
        console.log(chalk.inverse.green("Note removed successfully!!"))
        saveNotes(NotesToKeep)
    }
    else{
        console.log(chalk.inverse.red("No note found!!"))
    }

    
}

const listNotes=()=>{
    console.log(chalk.yellow("Your Notes: "))
    const notes=loadNotes()
    notes.forEach((note)=>console.log(note.title))
    
}

const readNotes=(title)=>{
    const notes=loadNotes()
    const validNote=notes.find((notes)=>notes.title===title)
    if(validNote)
    {
        console.log(chalk.inverse("Title: "+validNote.title))
        console.log("Body :"+validNote.body)
    }
    else{
        console.log(chalk.inverse.red("No note found!!"))
    }
}


module.exports={
    addNotes:addNotes,
    removeNotes:removeNotes,
    listNotes:listNotes,
    readNotes:readNotes,
}