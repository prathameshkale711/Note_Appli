import React , { useState } from 'react'
import './App.css'
import AddNotes from './components/AddNotes'
import AllNotes from './components/AllNotes'



function App() {


  const [notes, setNotes] = useState([]);


  return (

    <div className=' h-full '>
      <AddNotes setNotes={setNotes} notes={notes}/>
      {notes.length===0 &&(
        <p className='text-center text-gray-500'>No notes available.please add a note</p>
      )}
      <AllNotes notes={notes} setNotes={setNotes}/>
      </div>
  )
}

export default App