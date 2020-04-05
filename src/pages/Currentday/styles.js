import { StyleSheet } from 'react-native';
import Constants from 'expo-constants';

export default StyleSheet.create({
    container:{
        flex:1,
        paddingHorizontal:10,
        paddingTop: Constants.statusBarHeight + 20,
        //backgroundColor: '#49b7e8',
        //opacity:0.5,        
    },
    header:{
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    imageBordaArredondada:{
        borderRadius:8,
    },
    headerText:{
        fontSize:15,
        color: '#737380',
    },
    headerTextBold:{
        fontWeight: 'bold',
    },
    forecastList:{
        marginTop:32,
    },
    groupList:{
        backgroundColor: '#fff',
        borderRadius: 8,
        marginBottom:30,
        borderColor: '#49b7e8',
        borderWidth:1,
    },
    forecastTop:{
        padding:18,
        borderRadius:8,
        backgroundColor:'#fff',
        marginBottom:5,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        borderTopColor: '#999',
        borderLeftWidth:0,
        borderRightWidth:0,
        borderBottomWidth:0,
        borderTopWidth:0,
        borderWidth:1,
    },
    forecast:{
        padding:18,
        borderRadius:8,
        backgroundColor:'#fff',
        marginBottom:5,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        borderTopColor: '#999',
        borderLeftWidth:0,
        borderRightWidth:0,
        borderBottomWidth:0,
        borderWidth:1,
    },
    forecastProperty: {
        fontSize:14,
        color:'#737380', 
        fontWeight: 'bold',
    },
    forecastValue:{
        fontSize: 20,
        color:'#41414d',
        fontWeight: 'bold',
    },
    detailsButton:{
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor: '#49b7e8',
        padding:10,
        borderRadius:8,
    },
    textButton:{
        fontSize:18,
        fontWeight: 'bold',
        color:'#fff',
    },
    forecastChamadaTitlePageFirst:{
        fontWeight:'bold',
        fontSize:25,
    }                       
});