import React, { useState, useEffect } from 'react';
import { useNavigation } from '@react-navigation/native';
import { View, FlatList, Image, Text, TouchableOpacity } from 'react-native';
import { Feather } from '@expo/vector-icons';

import api from '../../services/api';

import logoImg from '../../assets/logo.png';
import diaSol from '../../assets/diasolnublado.png';

import styles from './styles';

export default function Nextdays(){

   const [NextDays, setNextDays] = useState([]);
   const [currentDay, setCurrentDay] = useState([]);

    const navigation = useNavigation();

    function navigateToBack(){
            navigation.goBack();
    }

        //função com o `THEN` orientação passado pela Karina
        async function loadForecastDays(){
            await api.get('weather').then( res => {
                   var dados = res.data.results;
                   setCurrentDay(res.data.results);
                   setNextDays(res.data.results);
                    console.log(dados.forecast);
            }).catch(err => 
                    //console.error('Error:', err)
                    console.log(err.response)
            );
        }

        useEffect(() => {
            loadForecastDays();
        }, []);

    // async function loadForecastDays(){
    //     try{
    //         const res = await api.get('weather')
    //         console.log(res.data.results.forecast);
    //         setNextDays(res.data.results.forecast);
    //         //console.log(currentDay.results);
    //     }catch(err){
    //         console.log('Error:', err);
    //     }
    // }

    // async function loadForecastDays(){
    //         const res = await api.get('weather')
    //         setCurrentDay(dados);
    // }



    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Image source={logoImg} style={styles.imageBordaArredondada} />
                <Text style={styles.headerText}><Text style={styles.headerTextBold}>{currentDay.date}, Últ. Verif. às{currentDay.time}</Text></Text>
                <TouchableOpacity style={styles.detailsButton}
                onPress={navigateToBack}>
                    <Feather name="arrow-left" size={25} color="#49b7e8" />
                </TouchableOpacity>
            </View>


            <FlatList 
                data={NextDays.forecast}
                keyExtractor={previsao => String(previsao.date)}
                showsVerticalScrollIndicator={false}
                style={styles.forecastList}
                renderItem={({ item: previsao }) => (

                    <View style={styles.groupList}>

                        <View style={styles.forecastTop}>
                                <Image source={diaSol} style={styles.imageBordaArredondada} />
                                <Text style={styles.forecastChamadaTitle}>{previsao.date}, {previsao.weekday}</Text>       
                        </View>

                        <View style={styles.forecast}>
                                <Text style={styles.forecastProperty}>Desc:</Text> 
                                <Text style={styles.forecastValue}>{previsao.description}</Text>       
                        </View>

                        <View style={styles.forecast}>
                                <Text style={styles.forecastProperty}>Máxima: </Text> 
                                <Text style={styles.forecastValue}>{previsao.max}Cº</Text>       
                        </View>

                        <View style={styles.forecast}>
                                <Text style={styles.forecastProperty}>Mínima</Text> 
                                <Text style={styles.forecastValue}>{previsao.min}Cº</Text>       
                        </View>

                        <View style={styles.forecast}>
                                <Text style={styles.forecastProperty}>Condição</Text> 
                                <Text style={styles.forecastValue}>{previsao.condition}</Text>       
                        </View>

                    </View>                                            

                )}
            />

        </View>
    );
}