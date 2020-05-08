import React from 'react'

export default React.createContext({
  pictures: [],
  comments: [],
  articles: [],
  addArticle: () => {},
  addComment: () => {},
  addPicture: () => {},
  deleteArticle: () => {},
  deletePicture: () => {},
  deleteComment: ()=> {},
})