import {Container, Title} from './App.styled';
import {Phonebook} from '../Phonebook/Phonebook';
import {Filter} from '../Filter/Filter';
import {ContactsList} from '../ContactsList/ContactsList';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { selectError } from "redux/seletors";
import { getContacts } from 'redux/contactsOperations';
import { Error } from 'components/Error/Error';


export const App = () => {

  const dispatch = useDispatch();
  const error = useSelector(selectError);

  useEffect(() => {
    dispatch(getContacts());
  }, [dispatch])

    return (
      <Container>
        <Title>Phonebook</Title>
        <Phonebook/>
        <Title>Contacts</Title>
        <Filter/>
        {!error ? <ContactsList/> : <Error/>}
      </Container>
    )
  }
