import React, { Component } from 'react'
import ApiContext from '../apiContext';
import './AddComment.css'
import Articles from '../Articles/Articles'

export default class AddComment extends Component {
  static defaultProps = {
    Articles: [],
  }
  render() {
    const {AddComment } = this.props
    return (
      <section className='AddComment'>
        <h2>Add a comment</h2>
        <Articles>
          <div className='field'>
            <label htmlFor='name-input'>
              Your Name
            </label>
            <input type='text' id='name-input' />
            <label htmlFor='comment-input'>
              Your Comment
            </label>
            <input type='text' id='comment-input' />
          </div>
         
          <div className='buttons'>
            <button type='submit'>
              Add Comment
            </button>
          </div>
        </Articles>
      </section>
    )
  }
}
