import { useSelector } from "react-redux";
import { selectError } from "redux/seletors";
import { Div, Text } from "./Error.styled";



export const Error = () => {
    const error = useSelector(selectError);
    return(
        <Div>
            <Text>Error: {error}</Text>
        </Div>
    )
}