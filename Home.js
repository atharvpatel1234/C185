import React from 'react';
import {Text,TouchableOpacity,View,StyleSheet,StatusBar,Platform,SafeAreaView} from 'react-native';
import { RFValue } from 'react-native-responsive-fontsize';

export default class Home extends React.Component{
    render(){
        return(
            <View style={styles.container}>
             <SafeAreaView style={styles.droidSafeArea} />
             <View style={styles.headingContainer}>
                <View style={{ flexDirection: 'row', flexWrap: 'wrap' }}>
                    <Text style={styles.titleText1}>FR</Text><Text style={styles.titleText2}>APP</Text>
                </View>
                <View style={{ flexDirection: 'row', flexWrap: 'wrap' }}>
                    <Text style={styles.subheading1}>Try Our</Text><Text style={styles.subheading2}> Cool Frames</Text>
                </View>
            </View>

            <View style={styles.contentContainer}>
                <View style={{flex:0.5}}>
                    <Text style={styles.contentText}>EXperience jjbdcjdhbcedbhc </Text>
                </View>
            </View>
            <View style={styles.bottomContainer}>
                <TouchableOpacity style={styles.button} onPress={()=>{this.props.navigation.navigate('Main')}}>
                    <Text>Try Now</Text>
                </TouchableOpacity>
            </View>
            </View>

        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    droidSafeArea: {
        marginTop: Platform.OS === "android" ? StatusBar.currentHeight : 0
    },
    headingContainer: {
        flex: 0.15,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: "#6278e4"
    },
    titleText1: {
        fontSize: RFValue(30),
        fontWeight: "bold",
        color: "#efb141",
        fontStyle: 'italic',
        textShadowColor: 'rgba(0, 0, 0, 0.75)',
        textShadowOffset: { width: -3, height: 3 },
        textShadowRadius: 1
    },
    titleText2: {
        fontSize: RFValue(30),
        fontWeight: "bold",
        color: "white",
        fontStyle: 'italic',
        textShadowColor: 'rgba(0, 0, 0, 0.75)',
        textShadowOffset: { width: -3, height: 3 },
        textShadowRadius: 1
    },
    subheading1: {
        fontSize: RFValue(20),
        color: "#efb141",
        fontStyle: 'italic',
        textShadowColor: 'rgba(0, 0, 0, 0.75)',
        textShadowOffset: { width: -3, height: 3 },
        textShadowRadius: 1
    },
    subheading2: {
        fontSize: RFValue(20),
        color: "white",
        fontStyle: 'italic',
        textShadowColor: 'rgba(0, 0, 0, 0.75)',
        textShadowOffset: { width: -3, height: 3 },
        textShadowRadius: 1
    },
    bottomContainer: {
        flex: 0.2,
        paddingLeft: RFValue(20),
        paddingRight: RFValue(20),
        paddingTop: RFValue(30),
        backgroundColor: "#6278e4"
    },
    contentContainer:{
        flex:0.6,
        margin:RFValue(5),
        borderRadius:RFValue(15),
        backgroundColor:"white",
        height:"100%",
        pading:RFValue(20),

    },
    contentText:{
        fontSize:RFValue(17),
        fontStyle:"italic",
        fontWeight:"bold",

    },
    button:{
        backgroundColor:"orange",
        padding:RFValue(50),
        borderRadius:RFValue(20),
    }
})