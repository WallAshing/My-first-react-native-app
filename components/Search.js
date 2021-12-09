import React from "react";
import { View, Button, Alert, StyleSheet, Text } from 'react-native'
import { TextInput, TouchableOpacity } from "react-native-gesture-handler";
import { NavigationContainer } from '@react-navigation/native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import List from "./List";

const TopTab = createMaterialTopTabNavigator();
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

    
        
    render() {
        return(
            <View>
                <View style={{flexDirection: "column", height: 300, width: 300, padding: 20,}}>
                    <TextInput 
                        underlineColorAndroid={'transparent'} 
                        style={styles.input}
                        value={this.state.city}
                        onChangeText={ (text) => this.setCity(text)}
                    />
                    <Text>{this.state.city}</Text>   
                    <Button title="Recherche" onPress={() => console.log(this.props.navigation.navigate('Result', { city: "Paris"}))}/>
                    <Button title="Moche ou beau" onPress={() => Alert.alert(Math.random() < 0.5 ? "T BO" : "T CHEUM")}/>
                </View>
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


