export const findArticle = (articles=[], articleId) =>
  articles.find(article => article.id === articleId)

export const findComment = (comments=[], commentId) =>
  comments.find(comments => comment.id === commentId)

export const getCommentsForArticle = (comments=[], articleId) => (
  (!articleId)
    ? comment
    : comments.filter(comment=> comment.articleId === articleId)
)
    
