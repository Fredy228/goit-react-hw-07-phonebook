import {Container, Title} from './App.styled';
import {Phonebook} from '../Phonebook/Phonebook';
import {Filter} from '../Filter/Filter';
import {ContactsList} from '../ContactsList/ContactsList';

export const App = () => {
  
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
