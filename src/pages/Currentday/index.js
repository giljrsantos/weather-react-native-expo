import React, { useState, useEffect } from 'react';
import { useNavigation } from '@react-navigation/native';
import { View, Image, Text, TouchableOpacity, FlatList } from 'react-native';
import { Feather } from '@expo/vector-icons';

import logoImg from '../../assets/logo.png';
import diaSol from '../../assets/diasolnublado.png';

import api from '../../services/api';

import styles from './styles';


export default function Currentday() {

        const [currentDay, setCurrentDay] = useState([]);

        const navigation = useNavigation();

        function navigateToNextDays() {
                navigation.navigate('Nextdays');
        }

        //função com o `THEN` orientação passado pela Karina
        async function loadCurrentDay(){
                
                await api.get('weather').then( res => {                        
                                var dados = res.data.results;
                                setCurrentDay(res.data.results);
                                 console.log(dados);                       
                }).catch(err =>
                        console.log(err.response)
                        //console.error('Error:', err)
                );
        }

        //função com try catch
        // async function loadForecastDays() {
        //         try{
        //                 const res = await api.get('weather')
        //                 //console.log(res.data);
        //         }catch(err){
        //                 console.log('Error:', err);
        //         }
        // }

        // async loadForecastDays(){
        //         const res = await api.get('weather')
        //         setCurrentDay(dados);
        // }
        
        //let time = 1 * 60000; //cada 10000 milesimo é 10 segundos
        useEffect(() => {
                loadCurrentDay();     
                
        }, []);





        return (
                <View style={styles.container}>

                        <View style={styles.header}>
                                <Image source={logoImg} style={styles.imageBordaArredondada} />
                                <Text style={styles.headerTextBold}>{currentDay.date}, Última Verificação às{currentDay.time}</Text>
                        </View>
                             

                        <FlatList 
                                data={[1]}
                                keyExtractor={previsao => String(previsao)}
                                showsVerticalScrollIndicator={false}
                                style={styles.forecastList}
                                renderItem={() => (
                                        <View style={styles.groupList}>

                                        <View style={styles.forecastTop}>
                                                <Image source={diaSol} style={styles.imageBordaArredondada} />
                                                <Text style={styles.forecastChamadaTitlePageFirst}>{currentDay.city} {currentDay.temp}ºC</Text>
                                        </View>

                                        <View style={styles.forecast}>
                                                <Text style={styles.forecastProperty}>Desc:</Text>
                                                <Text style={styles.forecastValue}>{currentDay.description}</Text>
                                        </View>

                                        <View style={styles.forecast}>
                                                <Text style={styles.forecastProperty}>Atualmente: </Text>
                                                <Text style={styles.forecastValue}>{currentDay.currently}</Text>
                                        </View>

                                        <View style={styles.forecast}>
                                                <Text style={styles.forecastProperty}>Umidade: </Text>
                                                <Text style={styles.forecastValue}>{currentDay.humidity}%</Text>
                                        </View>

                                        <View style={styles.forecast}>
                                                <Text style={styles.forecastProperty}>Vel. Vento: </Text>
                                                <Text style={styles.forecastValue}>{currentDay.wind_speedy}</Text>
                                        </View>

                                        <View style={styles.forecast}>
                                                <Text style={styles.forecastProperty}>Nascer do Sol: </Text>
                                                <Text style={styles.forecastValue}>{currentDay.sunrise}</Text>
                                        </View>

                                        <View style={styles.forecast}>
                                                <Text style={styles.forecastProperty}>Por do Sol: </Text>
                                                <Text style={styles.forecastValue}>{currentDay.sunset}</Text>
                                        </View>

                                        <View style={styles.forecast}>
                                                <Text style={styles.forecastProperty}>Condição</Text>
                                                <Text style={styles.forecastValue}>{currentDay.condition_slug}</Text>
                                        </View>

                                        <TouchableOpacity style={styles.detailsButton}
                                                onPress={navigateToNextDays}>
                                                <Text style={styles.textButton}>Veja os 10 próximos dias</Text>
                                                <Feather name="arrow-right" size={30} color="#e02041" />
                                        </TouchableOpacity>                                        


                                </View>



                                )}
                        />

 

                </View>

        );
}