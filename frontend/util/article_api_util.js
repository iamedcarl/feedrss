export const fetchAllArticles = () => {
  return $.ajax({
    method: 'GET',
    url: '/api/articles',
  });
};

export const fetchSingleArticle = (articleId) => {
  return $.ajax({
    method: 'GET',
    url: `/api/articles/${articleId}`,
  });
};

export const createArticle = (article) => {
  return $.ajax({
    method: 'POST',
    url: '/api/articles',
    data: { article }
  });
};