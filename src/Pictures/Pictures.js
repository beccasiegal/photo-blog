import React from 'react'
import './Pictures.css'

export default function Pictures(props) {
  const { className, ...otherProps } = props
  return (
    <form
      className={['Pictures', className].join(' ')}
      action='#'
      {...otherProps}
    />
  )
}