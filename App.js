import * as React from 'react';
import Search from './components/Search'
import About from './components/About'
import List from './components/List'
import NFC from './components/NFC'
import { View, Text, Button } from 'react-native'
import { NavigationContainer } from '@react-navigation/native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

// const Stack = createNativeStackNavigator();
const BottomTab = createMaterialBottomTabNavigator();
const TopTab = createMaterialTopTabNavigator();

function SearchTab( navigation ) {
  return(
    <TopTab.Navigator>
      <TopTab.Screen name="City" component={SearchScreen} />
      <TopTab.Screen name="Result" component={ListScreen} />
    </TopTab.Navigator>  
  )
}

function AboutTab({ navigation }) {
  return (
    // <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
    <View>
      <About />
       <Button
        title="Go to Search"
        onPress={() => navigation.navigate('Result')}
      /> 
    </View>
  );
}

function SearchScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Search navigation={navigation} />
    </View> 
  );
}



function ListScreen({ navigation }) {
  return(
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <List navigation={navigation} />
    </View> 

  )
}

function NFCTab({ navigation }){
  return(
    <NFC />
  )
}

export default function App() {
  return (
    <NavigationContainer>
        <BottomTab.Navigator  
          shifting={true} 
          activeColor="#FFF"
          inactiveColor="#a7aaaf"
          barStyle={{ }}
          initialRouteName="Search"
          >
          <BottomTab.Screen name="Search" component={SearchTab} options={{ title: 'Search', tabBarLabel: "Search", tabBarIcon: ({color}) => ( <MaterialCommunityIcons name="map-search-outline" color={color} size={26} /> ), }} />
          <BottomTab.Screen name="NFC" component={NFCTab} options={{ title: 'NFC', tabBarLabel: "NFC", tabBarIcon: ({color}) => ( <MaterialCommunityIcons name="nfc" color={color} size={26} /> ), }} />
          <BottomTab.Screen name="About" component={AboutTab} options={{ title: 'About', tabBarLabel: "About", tabBarIcon: ({color}) => ( <MaterialCommunityIcons name="laravel" color={color} size={26} /> ), }} />
      </BottomTab.Navigator>
    </NavigationContainer>
  );
}


