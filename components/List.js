import React from 'react'
import { View, Text } from 'react-native'

export default class List extends React.Component {

    static navigationOption = {
        title: 'Météo / '
    }

    constructor(props) {
        super(props)
        // console.log('state', this.props.navigation.stater)
        this.state = {
            city: '',
            report: null
        }
    }


    render() {
        return(
            <View>
                <Text>{this.state.city}</Text>
            </View>
        )
    }


}

