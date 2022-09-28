import styled from 'styled-components/native';

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

export const WeatherImage = styled.Image`
    width: 150px;
    height: 100px;
`;

export const TextContainer = styled.View`
    width: 100%;
    padding: 20px;
`;