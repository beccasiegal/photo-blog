import React from 'react'
import { Link } from 'react-router-dom'
import { format } from 'date-fns'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import './Comments.css'

export default function Comments(props) {
  return (
    <div className='Comment'>
      <h2 className='Comment_title'>
        <Link to={`/comments/${props.id}`}>
          {props.name}
        </Link>
      </h2>
      <div className='Comment_text'>
      <h2 className='Comment_text'>
        <Link to={`/comments/${props.id}`}>
          {props.name}
        </Link>
      </h2>
      <div className='Comment__dates'>
        <div className='Comment__dates-modified'>
          Modified
          {' '}
          <span className='Date'>
            {format(props.modified, 'Do MMM YYYY')}
          </span>
        </div>
        </div>
      </div>
    </div>
  )
}