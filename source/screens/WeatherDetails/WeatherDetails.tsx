import React, {useState, useEffect} from 'react';
import {
    RootContainer,
    WeatherImage,
    DetailText,
    TextContainer
} from './WeatherDetails.styles';
import { ActivityIndicator } from 'react-native-paper';
import axios from 'axios';
import {VerticalSpace} from '../../components';
import type { NativeStackScreenProps } from '@react-navigation/native-stack'
import { RootStackParamList } from '../../utilities/types';

type Props = NativeStackScreenProps<RootStackParamList, 'WeatherDetails'>;

const WeatherDetails = ({navigation, route}: Props) => {
    const {cityName} = route.params;
    const [isLoading, setIsLoading] = useState<boolean>(false)
    const [data, setData] = useState<any>({})

    const getData = async () => {
        console.log("STARTED EXECUTING")
        setIsLoading(true)
        const weatherDetails = await axios.get(`http://api.weatherstack.com/current?access_key=56b0357ad6b3a50d374244594a0b94f5&query=${cityName}`)
        setData(weatherDetails.data)
        console.log("DATA", weatherDetails.data)
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
            <WeatherImage source={{uri: data?.current?.weather_icons?.length && data?.current?.weather_icons[0]}} />
            <TextContainer>
                <DetailText>Temperature: {data?.current?.temperature}</DetailText>
                <DetailText>Precipitation: {data?.current?.precip}</DetailText>
                <DetailText>Wind Speed: {data?.current?.wind_speed}</DetailText>
            </TextContainer>
        </RootContainer>
    )
}

export default WeatherDetails;