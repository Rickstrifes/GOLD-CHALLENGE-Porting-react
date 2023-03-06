import React from 'react'
import './NotFoundPage.css'
import { Link } from 'react-router-dom'

const NotFoundPage = () => {
  return (
    <div className='not-found' role="notFoundPage" >
        <h1>404</h1>
        <h2>PAGE NOT FOUND</h2>
        <em>Maybe you entered the wrong word</em>
        <div className="back-control">
            <Link to="/"><bold>Back To Home</bold></Link>
            
        </div>
    </div>
  )
}

export default NotFoundPage