import axios from 'axios';

const MAIN_PATH = 'https://647bc928c0bae2880ad03fe8.mockapi.io/contacts';

export const getContactsDB = async () => {
  return await axios.get(MAIN_PATH);
};

export const postContactDB = async item => {
  return await axios.post(MAIN_PATH, item);
};

export const deleteContactDB = async id => {
  return await axios.delete(`${MAIN_PATH}/${id}`);
};
