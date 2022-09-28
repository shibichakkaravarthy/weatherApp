import React, {useState} from 'react';
import {
    RootContainer,
    TextInput,
    Button
} from './Home.styles';
import {VerticalSpace} from '../../components';
import type { NativeStackScreenProps } from '@react-navigation/native-stack'
import { RootStackParamList } from '../../utilities/types';

type Props = NativeStackScreenProps<RootStackParamList, 'Home'>;

const Home = ({ navigation }: Props) => {
    const [country, setCountry] = useState("");


    return (
        <RootContainer>
            <TextInput
                label="Enter Country"
                value={country}
                onChangeText={text => setCountry(text)}
            />
            <VerticalSpace count={3} />
            {country && <Button onPress={() => navigation.navigate('CountryDetails', {countryName: country})} >Submit</Button>}
        </RootContainer>
    )
}

export default Home;