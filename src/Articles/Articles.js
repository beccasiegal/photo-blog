import React from 'react'
import './Articles.css'

export default function Articles(props) {
  const { className, ...otherProps } = props
  return (
    <form
      className={['Articles', className].join(' ')}
      action='#'
      {...otherProps}
    />
  )
}