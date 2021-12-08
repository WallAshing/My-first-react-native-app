import React from "react";
import { View, Button, Alert, StyleSheet, Text } from 'react-native'
import { TextInput, TouchableOpacity } from "react-native-gesture-handler";
import { NavigationContainer } from '@react-navigation/native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';

export default class Search extends React.Component {

    constructor (props) {
        super(props)
        this.state = {
            city: 'Paris'
        }
    }

    setCity (city) {
        this.setState({city})
        // this.setState({
        //     city: city
        // })
    }
    
    submit() {
        this.props.navigation.navigate('Result', {city: this.state.city})
    }

    // Faut faire la fonction de list dans app et call, et créé labas la top tab (maybe)


    render() {
        return(
            <View style={{flexDirection: "column", height: 300, width: 300, padding: 20,}}>
                
                <TextInput 
                    underlineColorAndroid={'transparent'} 
                    style={styles.input}
                    value={this.state.city}
                    onChangeText={ (text) => this.setCity(text)}
                />
                <Button title="Recherche" onPress={() => this.submit()}/>
                <Button title="Moche ou beau" onPress={() => Alert.alert(Math.random() < 0.5 ? "T BO" : "T CHEUM")}/>
            </View>
        )
    }

}

const styles = StyleSheet.create({
    input: {
        flex: 0,
        fontSize: 28,
        fontWeight: "bold",
        height: 50,
        borderColor: 'black',
        borderWidth: 1,
        marginVertical: 20,
    },
    button: {
        width: 50,
        
    },
    view1: {
        flex: 1,
        backgroundColor: "#FF0000",
    },
    view2: {
        flex: 2,
        backgroundColor: "#00FF00",
    },
    view3: {
        flex: 3,
        backgroundColor: "#0000FF",
    },

})


