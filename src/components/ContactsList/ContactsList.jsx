import {ListContacts, ItemContact, Button, Text} from './ContactsList.styled';
import { useDispatch, useSelector } from 'react-redux';
import { deleteContact } from 'redux/contactsOperations';
import { selectContacts, selectFilter, selectIsLoading } from 'redux/seletors';
import { useRef } from 'react';
import { LoaderDelete } from 'components/Loader/Loader';

export const ContactsList = () => {
   
    const dispacth = useDispatch();
    const contacts = useSelector(selectContacts);
    const filter = useSelector(selectFilter);
    const isLoading = useSelector(selectIsLoading);
    const idContactDelete = useRef('');
    
    const findContactsByName = () => {
        return contacts.filter(contact => contact.name.toLocaleLowerCase().includes(filter.toLocaleLowerCase()));
    }

    let renderCondition = findContactsByName().length > 0 ? (findContactsByName()) : (contacts);

    return (
        <ListContacts>
            {renderCondition.map(({id, name, number}) => {
                return (
                    <ItemContact key={id}>
                        <Text>{name}: {number}</Text> 
                        <Button type='button' onClick={() => {
                            dispacth(deleteContact(id));
                            idContactDelete.current = id;                            
                        }}>
                          {isLoading && idContactDelete.current === String(id) && <LoaderDelete/>} 
                          {idContactDelete.current !== String(id) && 'Delete'}                   
                        </Button>
                    </ItemContact>
                )
            })}
        </ListContacts>
    )
}