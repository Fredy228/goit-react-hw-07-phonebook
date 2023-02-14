import axios from 'axios';

axios.defaults.baseURL = 'https://63e26dc5ad0093bf29cfbcfc.mockapi.io/api/';

export const fetchAllContacts = async () => {
  const response = await axios.get('/contacts');
  console.log(response.data);
  return response.data;
};

export const postContact = async contact => {
  const response = await axios.post('/contacts', contact);
  console.log(response.data);
  return response.data;
};

export const deleteContact = async contactId => {
  const response = await axios.delete(`/contacts/${contactId}`);
  console.log(response.data);
  return response.data;
};
