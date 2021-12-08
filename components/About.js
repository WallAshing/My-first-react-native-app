import React from 'react';
import {View, Text, StyleSheet, ActivityIndicator} from 'react-native'
 
export default class About extends React.Component {

    render (){
        return(
            <View style={styles.view}>
                <Text style={styles.title}>A propos de moi</Text>
                <Text> Bonjour </Text>
                <View style={{flex: 1, flexDirection: 'row', justifyContent: 'space-between'}}>
                    <ActivityIndicator color="#FF0000" size="large" animating={true} />
                    <ActivityIndicator color="#FF0000" size="large" animating={true} />
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    view: {
        margin: 20,
        height: 300
    }, 

    title: {
        fontSize: 22,
        marginBottom: 20
    }
})
