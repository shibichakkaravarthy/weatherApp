import React, {useState, useEffect} from 'react';
import { ActivityIndicator } from 'react-native-paper';
import {
    RootContainer,
    DetailText,
    FlagImage,
    TextContainer,
    Button
} from './CountryDetails.styles';
import {VerticalSpace} from '../../components';
import type { NativeStackScreenProps } from '@react-navigation/native-stack'
import { RootStackParamList } from '../../utilities/types';
import axios from 'axios';

type Props = NativeStackScreenProps<RootStackParamList, 'CountryDetails'>;

const CountryDetailsScreen = ({navigation, route}: Props) => {
    const {countryName} = route.params
    const [isLoading, setIsLoading] = useState<boolean>(false)
    const [data, setData] = useState<any>({})

    const getData = async () => {
        console.log("STARTED EXECUTING")
        setIsLoading(true)
        const countryDetails = await axios.get(`https://restcountries.com/v3.1/name/${countryName}`)
        setData(countryDetails.data[0])
        console.log("DATA", countryDetails.data[0])
        setIsLoading(false)
    }

    useEffect(() => {
        getData()
    }, [])

    if(isLoading) {
        return (
            <RootContainer>
                <ActivityIndicator animating={true} color="#590DE4" />
            </RootContainer>
        )
    }

    return (
        <RootContainer>
            <VerticalSpace count={3} />
            <FlagImage source={{uri: data?.flags?.png}} />
            <VerticalSpace count={3} />
            <TextContainer>
                <DetailText>Capital: {data?.capital?.length && data.capital[0]}</DetailText>
                <DetailText>Country's Population: {data?.population}</DetailText>
                <DetailText>Latitude: {data?.latlng?.length && data.latlng[0]}</DetailText>
                <DetailText>Longitude: {data?.latlng?.length && data.latlng[1]}</DetailText>
            </TextContainer>
            <Button onPress={() => navigation.navigate('WeatherDetails', {cityName: data?.capital[0]})} >Capital Weather</Button>
        </RootContainer>
    )
}

export default CountryDetailsScreen;