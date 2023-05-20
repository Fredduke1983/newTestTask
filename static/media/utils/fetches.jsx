import axios from 'axios';

axios.defaults.baseURL =
  'https://6452a61dbce0b0a0f74cb532.mockapi.io/contacts/users/';

export const getUsers = async page => {
  const LIMIT = 3;

  try {
    return await axios(`?page=${page}&limit=${LIMIT}`);
  } catch (error) {
    console.log(error);
  }
};

export const getUserById = async id => {
  try {
    return await axios(id);
  } catch (error) {
    console.log(error);
  }
};

export const setUserFollowers = async (id, body) => {
  try {
    return await axios.put(id, body, {
      headers: {
        'Content-Type': 'application/json',
      },
    });
  } catch (error) {
    console.log(error);
  }
};
