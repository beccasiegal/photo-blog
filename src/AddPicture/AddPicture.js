import React, { Component } from 'react'
import Pictures from '../Pictures/Pictures'


export default class AddPicture extends Component {
  render() {
    return (
      <section className='Addpicture'>
        <h2>Add an picture</h2>
        <pictures>
          <div className='field'>
            <label htmlFor='picture-url-input'>
              Image URL
            </label>
            <input type='text' id='picture-url-input' />
          </div>
          <div className='buttons'>
            <button type='submit'>
              Add picture
            </button>
          </div>
        </pictures>
      </section>
    )
  }
}