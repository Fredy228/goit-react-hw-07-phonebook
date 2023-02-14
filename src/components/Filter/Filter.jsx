import {Input, Label} from './Filter.styled';
import { useSelector, useDispatch } from 'react-redux'
import { handleChangeFilter } from 'redux/slice'
import { selectFilter } from 'redux/seletors';

export const Filter = () => {
    const filter = useSelector(selectFilter);
    const dispatch = useDispatch();

    return (
        <Label>
            Find contacts by name
            <Input type='text' value={filter} onChange={(e) => {dispatch(handleChangeFilter(e.currentTarget.value))}}/>
        </Label>
    )
}