import styled from 'styled-components/native';
import { 
    TextInput as MaterialInput,
    Button as MaterialButton
} from 'react-native-paper';

export const RootContainer = styled.View`
    flex: 1;
    background-color: '#F2F2F2';
    justify-content: center;
    align-items: center;
`;

export const TextInput = styled(MaterialInput).attrs({mode: "outlined"})`
    max-height: 60px;
    width: 80%;
`;

export const Button = styled(MaterialButton).attrs({mode: "contained"})`
    border-radius: 5px;
    background-color: #590DE4;
`;