import React, {useState} from 'react'
import { View, Text, Button } from 'react-native'

export default function List(navigation) {
    
    // const [city, setCity] = useState(props.route.params.params.city)
    
    return( 
        <View 
            style={{flexDirection: "column", height: 300, width: 300, padding: 20,}}
        >
            <Button title="test"
            onPress={() => console.log(props)} />
        </View>
    )

} 

