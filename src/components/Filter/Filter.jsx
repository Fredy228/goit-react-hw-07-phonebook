import {Input, Label} from './Filter.styled';
import { useSelector, useDispatch } from 'react-redux'
import { handleChangeFilter } from 'redux/slice'

export const Filter = () => {
    const filter = useSelector((state) => state.filter.value);
    const dispatch = useDispatch();

    return (
        <Label>
            Find contacts by name
            <Input type='text' value={filter} onChange={(e) => {dispatch(handleChangeFilter(e.currentTarget.value))}}/>
        </Label>
    )
}