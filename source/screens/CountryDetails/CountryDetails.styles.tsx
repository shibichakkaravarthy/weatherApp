import styled from 'styled-components/native';
import {
    Button as MaterialButton
} from 'react-native-paper';

export const RootContainer = styled.ScrollView.attrs({
    contentContainerStyle: {
        justifyContent: 'center',
        alignItems: 'center',
    }
})`
    flex: 1;
`;

export const DetailText = styled.Text`
    font-size: 24px;
    color: #444;
    padding: 10px;
`;

export const FlagImage = styled.Image`
    width: 350px;
    height: 200px;
`;

export const TextContainer = styled.View`
    width: 100%;
    padding: 20px;
`;

export const Button = styled(MaterialButton).attrs({mode: "contained"})`
    border-radius: 5px;
    background-color: #590DE4;
`;