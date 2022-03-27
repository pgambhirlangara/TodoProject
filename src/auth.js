export const login = (user) => {
  localStorage.setItem('user', JSON.stringify(user));
};

export const logout = () => {
  localStorage.removeItem('user');
};

export const isLogin = () => {
  // Tells if the user is logged in or not
  if (localStorage.getItem('user')) {
    return true;
  }

  return false;
};
