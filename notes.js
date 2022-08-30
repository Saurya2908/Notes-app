const fs=require('fs')
const chalk=require('chalk')

const loadNotes=()=>{
    try {
        const buffer=fs.readFileSync('notes.json')
        const data=JSON.parse(buffer)
        return data
    } catch (error) {
        return []
    }
}

const addNote=(title,body)=>{
    const notes=loadNotes()
    const duplicateNotes=notes.filter((note)=>note.title===title)
    if(duplicateNotes.length===0){
        notes.push({
            title:title,
            body:body
        })
        saveNotes(notes)
        console.log(chalk.green.inverse('Note added successfully!'))
    }else{
        console.log(chalk.yellow.inverse('Note Title Taken!'))
    }
    
}

const removeNote=(title)=>{
    const notes=loadNotes()
    const targetNote=notes.filter((note)=>note.title!==title)
    if(targetNote.length!==notes.length){
        saveNotes(targetNote)
        console.log(chalk.green.inverse('Note removed successfully!'))
    }
    else{
        console.log(chalk.red.inverse('No Note Found!'))
    }
}

const listNotes=()=>{
    const notes=loadNotes()
    console.log(chalk.blue.inverse('Your Notes: '))
    notes.forEach(note => {
        console.log(note.title)
    });
}

const readNote=(title)=>{
    const notes=loadNotes()
    const targetNote=notes.filter((note)=>note.title===title)
    if(targetNote.length!==0){
        console.log(chalk.yellow(targetNote[0].title))
        console.log(targetNote[0].body)
    }
    else{
        console.log(chalk.red.inverse('No note found!!'))
    }
    
}


const saveNotes=(notes)=>{
    data=JSON.stringify(notes)
    fs.writeFileSync('notes.json',data)
}

module.exports={
    addNote,
    removeNote,
    listNotes,
    readNote
}
