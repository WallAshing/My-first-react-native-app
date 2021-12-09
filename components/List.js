import React from 'react'
import { View, Text } from 'react-native'

export default class List extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            city: this.props.navigation.state,
            report: null
        }
    }


    render() {
        console.log(this.props.city)
        return(
            <View>
                <Text></Text>
            </View>
        )
    }


}

