import React, { Component } from 'react'
import { Route, Link } from 'react-router-dom'
import Articles from '../Articles/Articles'
import Comments from '../Comments/Comments'
import Pictures from '../Pictures/Pictures'
import AddArticle from '../AddArticle/AddArticle'
import AddComment from '../AddComment/AddComment'
import AddPicture from '../AddPicture/AddPicture'
import dummyStore from '../dummy-store'
import config from '../config'
import {findArticle, findComment, getCommentsForArticle} from '../articles-helper'
import './App.css'


class App extends Component {
  state = {
   articles: [],
    comments: [],
    pictures: [],
  };

  componentDidMount() {
    // fake date loading from API call
    setTimeout(() => this.setState(dummyStore), 600)
    
  }
  

  renderNavRoutes() {
    const { articles, comments, pictures } = this.state
    return (
      <div>
        {['/', '/articles/articlesid'].map(path =>
          <Route
            exact
            key={path}
            path={path}
            render={routeProps =>
              <Articles
                articles={articles}
                comments={comments}
                pictures={pictures}
                {...routeProps}
              />
            }
          />
        )}
        <Route
          path='/comments/:articleId'
          render={routeProps => {
            const { articleId } = routeProps.match.params
            const comment = findComment(comment, articleId) || {}
            const article = findArticle(article, articleId)
            return (
              <Articles
                {...routeProps}
                article={article}
              />
            )
          }}
        />
        <Route
          path='/add-article'
          component={Articles}
        />
        <Route
          path='/add-comment'
          component={Comments}
        />
      </div>
    )
  }

  renderMainRoutes() {
    const { pictures, articles } = this.state
    return (
      <div>
        {['/', '/articles/:articleId'].map(path =>
          <Route
            exact
            key={path}
            path={path}
            render={routeProps => {
              const { articleId } = routeProps.match.params
              const  comments = (comments, articleId)
              return (
                <Pictures
                  {...routeProps}
                  comments={comments}
                />
              )
            }}
          />
        )}
        
      
        <Route
          path='/add-article'
          component={AddArticle}
        />
        <Route
          path='/add-picture'
          render={routeProps => {
            return (
              <AddPicture
                {...routeProps}
                articles={articles}
              />
            )
          }}
        />
      </div>
    )
  }

  render() {
    return (
      <div className='App'>
        <nav className='App__nav'>
          {this.renderNavRoutes()}
        </nav>
        <header className='App__header'>
          <h1>
            <Link to='/'>The Momentary Pause</Link>
            {' '}
          </h1>
        </header>
        <main className='App__main'>
          {this.renderMainRoutes()}
        </main>
      </div>
    )
  }
}

export default App
