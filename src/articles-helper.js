export const findArticle = (articles=[], articleId) =>
  articles.find(article => article.id === articleId)

export const findComment = (comments=[], commentId) =>
  comments.find(comments => comments.id === commentId)

export const getCommentsForArticle = (comments=[], articleId) => (
  (!articleId)
    ? comments
    : comments.filter(comments=> comments.articleId === articleId)
)
    
