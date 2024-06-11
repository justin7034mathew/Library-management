import React, { useState,} from 'react'
import axios from 'axios'
import "./Home.css"

function Home() {

  const [title, setTitle] = useState('')
  const [author, setAuthor] = useState('')
  const [status, setStatus] = useState('')

  const saveButton = () => {
    axios.post("http://localhost:3001/books",{
      title : title,
      author : author,
      status : status
    }).then( 
    )
  }  

  console.log(status,"jj");

  return (
    <div className='home-header'>
      <div className="wrapper">
        <h4>Books  New</h4>
        <div className="home-wrapper">
          <h2>New Row</h2>
          <button onClick={() =>saveButton()}>Save</button>
        </div>
        <div className="section-wrapper">
        <div className='section'>
          <h6>Title</h6>
          <input id='input' type="text" placeholder='Title' onChange={(e) => setTitle(e.target.value)} />
        </div>
        <div className='section'>
          <h6>Author</h6>
          <input type="text" placeholder='Author' onChange={(e) => setAuthor(e.target.value)}/>
        </div>
        <div className='section'>
          <h6>Status</h6>
          <select value={status} onChange={(e) => setStatus(e.target.value)} >
            <option>choose an option</option>
            <option >Available</option>
            <option >Not Available</option>
          </select>
        </div>
        </div>  
      </div>       
    </div>
  )
}

export default Home