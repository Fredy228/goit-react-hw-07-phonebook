import {Container, Title} from './App.styled';
import {Phonebook} from '../Phonebook/Phonebook';
import {Filter} from '../Filter/Filter';
import {ContactsList} from '../ContactsList/ContactsList';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { getContacts } from 'redux/contactsOperations';


export const App = () => {

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getContacts());
  }, [dispatch])

    return (
      <Container>
        <Title>Phonebook</Title>
        <Phonebook/>
        <Title>Contacts</Title>
        <Filter/>
        <ContactsList/>
      </Container>
    )
  }
