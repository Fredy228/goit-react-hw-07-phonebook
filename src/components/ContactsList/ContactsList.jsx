import {ListContacts, ItemContact, Button, Text} from './ContactsList.styled';
import { useDispatch, useSelector } from 'react-redux';
import { deleteContact } from 'redux/slice';

export const ContactsList = () => {
   
    const dispacth = useDispatch();
    const contacts = useSelector(state => state.contacts.items);
    const filter = useSelector((state) => state.filter.value);
    
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
                        <Button type='button' onClick={() => dispacth(deleteContact(id))}>Delete</Button>
                    </ItemContact>
                )
            })}
        </ListContacts>
    )
}