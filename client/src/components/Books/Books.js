import React, { useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom'
import "./Books.css"
import Button from './Button'
import axios from 'axios'



function Books() {

  const [bookdetail, setBookdetail] = useState([])

  console.log(bookdetail);

  useEffect(() => {
  axios.get("http://localhost:3001/getdata").then((res) => setBookdetail(res.data))
},[])

  return (
    <div className='home-header'>
      <div className="wrapper">
        <div className="home-wrapper">
          <h2>Books</h2>
          <button id='newbtn'> <NavLink to="/">Create New</NavLink></button>
        </div>
       <div className='content-wrapper'>
        <div className="search-input">
          <input type="text" placeholder='Search Title'/>
        </div>

        <div className='book-main-wrapper'>
        
          <div className="book-header">
            <h4>TITLE</h4>
            <h4>AUTHOR</h4> 
            <h4>STATUS</h4>
            <h4>ACTION</h4>
          </div>

          <div className="book-content">
            {bookdetail.map((data, key) => {
              return(
                <div className='book-details'>
                <h5 key={key}>{data.BookName}</h5>
                <h5 >{data.AuthorName}</h5>
                <h5>{data.Status}</h5>
                <Button />
                </div>
               
              )
                
            })}
          </div>    
          </div>
        </div>
      </div>          
    </div>
  )
}

export default Books