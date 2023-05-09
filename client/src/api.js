import axios from 'axios';

const BASE_URL = '/api';

export const getUsers = async () => {
  const response = await axios.get(`${BASE_URL}/users`);
  return response.data;
};

export const getUserById = async (id) => {
  const response = await axios.get(`${BASE_URL}/users/${id}`);
  return response.data;
};

export const createUser = async (data) => {
  const response = await axios.post(`${BASE_URL}/users`, data);
  return response.data;
};

export const updateUser = async (id, data) => {
  const response = await axios.put(`${BASE_URL}/users/${id}`, data);
  return response.data;
};

export const deleteUser = async (id) => {
  const response = await axios.delete(`${BASE_URL}/users/${id}`);
  return response.data;
};
