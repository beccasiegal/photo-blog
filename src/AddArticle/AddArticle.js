import React, { Component } from 'react'
import Articles from '../Articles/Articles'


export default class AddArticle extends Component {
  render() {
    return (
      <section className='AddArticle'>
        <h2>Add an Article</h2>
        <Animals>
          <div className='field'>
            <label htmlFor='picture-url-input'>
              Image URL
            </label>
            <input type='text' id='picture-url-input' />
          </div>
          <div className='buttons'>
            <button type='submit'>
              Add Article
            </button>
          </div>
        </Articles>
      </section>
    )
  }
}