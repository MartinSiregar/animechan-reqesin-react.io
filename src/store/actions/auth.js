import axios from 'axios';

export const loginSuccess = (user) => ({
  type: 'LOGIN_SUCCESS',
  payload: user,
});

export const registSuccess = (user) => ({
  type: 'REGIST_SUCCESS',
  payload: user,
});

export const login = (username, password) => async (dispatch) => {
  try {
    const response = await axios.post('https://reqres.in/api/login', {
      username,
      password,
    });
    const { token } = response.data;
    localStorage.setItem('token', token);
    dispatch(loginSuccess(response.data));

    return { user: response.data, error: null };
  } catch (error) {
    return { user: null, error: 'Invalid credentials. Please try again.' };
  }
};

export const logout = () => {
  localStorage.removeItem('token');

  return {
    type: 'LOGOUT',
  };
};


export const register = (values) => async (dispatch) => {
  try {
    const response = await axios.post('https://reqres.in/api/register', values);
    dispatch(registSuccess(response.data));

    return { regist: response.data, error: null };
  } catch (error) {
    return { regist: null, error: 'Invalid credentials. Please try again.' };
  }
};

