export const signup = (user) => {
  return $.ajax({
    method: 'POST',
    url: '/api/user',
    data: { user },
  });
};

export const login = (user) => {
  return $.ajax({
    method: 'POST',
    url: '/api/session',
    data: { user },
  });
};

export const logout = () => {
  return $.ajax({
    method: 'DELETE',
    url: '/api/session',
  });
};

export const fetchUser = () => {
  return $.ajax({
    method: 'GET',
    url: `api/user`,
  });
};

export const fetchSavedArticles = () => {
  return $.ajax({
    method: 'GET',
    url: `api/user/saved_articles`,
  });
};
