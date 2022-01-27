import React, { useState } from "react";
import { View, Button, Alert, StyleSheet, Text, TextInput, FlatList, ActivityIndicator, Image } from 'react-native'
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import axios from "axios"
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
// import { useNavigation } from '@react-navigation/native';


const TopTab = createMaterialTopTabNavigator();

export default function SearchTab({ navigation }){
    
    function SearchScreen({ navigation }) {
    
        const [text, onChangeText] = useState("");

        function submit(){
            axios.get(`http://api.openweathermap.org/data/2.5/forecast?q=${text}&appid=${process.env.API_KEY}&lang=fr&units=metric`)
                .then((response) => {
                    navigation.navigate('Result', {
                        city : text,
                        report : response.data
                })
            })
        }
    
        return(
            <View>
                <TextInput 
                    style={{ 
                        flex: 0,
                        fontSize: 28,
                        fontWeight: "bold",
                        height: 50,
                        borderColor: 'black',
                        borderWidth: 1,
                        marginVertical: 20,}}
                    onChangeText={onChangeText}
                    value={text}
                    placeholder="Nom de la ville"
                />
                <Button 
                    title="Rechercher"
                    onPress={ () => submit()}
                />
            </View>
        )
        
    }

    function ListScreen({ route, navigation }){
        
        const countryList = [["Japon","JP"], ["Féroé, îles","FO"], ["Maldives","MV"], ["Lao, République démocratique populaire","LA"], ["Åland, Îles","AX"], ["Palaos","PW"], ["Jersey","JE"], ["Ethiopie","ET"], ["Sao Tomé-et-Principe","ST"], ["Moldova, République de","MD"], ["Irlande","IE"], ["Bélize","BZ"], ["Zimbabwe","ZW"], ["Nouvelle-Zélande","NZ"], ["Guinée équatoriale","GQ"], ["Paraguay","PY"], ["Etats-Unis d\Amérique","US"], ["Trinité-et-Tobago","TT"], ["Salomon, Iles","SB"], ["Nicaragua","NI"], ["Christmas, île","CX"], ["Îles vierges des Etats-Unis","VI"], ["Saint-Marin","SM"], ["Saint-Kitts-et-Nevis","KN"], ["Nouvelle-Calédonie","NC"], ["Wallis et Futuna","WF"], ["Costa Rica","CR"], ["Falkland/Malouines (Îles)","FK"], ["Autriche","AT"], ["Algérie","DZ"], ["Tanzanie, République unie de","TZ"], ["Corée, République de","KR"], ["Colombie","CO"], ["Îles vierges britanniques","VG"], ["retour zone 102 (bibliographique)\n    haut de page\n\n    \n     retour zone 102 (autorité)","null"], ["Heard, Ile et MacDonald, îles","HM"], ["Suède","SE"], ["Dominique","DM"], ["Côte d\Ivoire","CI"], ["République arabe syrienne","SY"], ["Micronésie, Etats Fédérés de","FM"], ["Gambie","GM"], ["Sierra Leone","SL"], ["Bahamas","BS"], ["Tchad","TD"], ["Bermudes","BM"], ["Norfolk, Ile","NF"], ["Honduras","HN"], ["Macédoine, l\ex-République yougoslave de","MK"], ["Royaume-Uni de Grande-Bretagne et d\Irlande du Nord","GB"], ["Bélarus","BY"], ["Namibie","NA"], ["Saint-Vincent-et-les-Grenadines","VC"], ["Italie","IT"], ["Turkménistan","TM"], ["Ghana","GH"], ["Azerbaïdjan","AZ"], ["Libye","LY"], ["Andorre","AD"], ["Niue","NU"], ["Canada","CA"], ["Libéria","LR"], ["Pologne","PL"], ["Turks-et-Caïcos (Îles)","TC"], ["Macao","MO"], ["Tokelau","TK"], ["Saint-Martin (partie française)","MF"], ["Oman","OM"], ["Mozambique","MZ"], ["Mali","ML"], ["Comores","KM"], ["Montserrat","MS"], ["Yougoslavie","YU"], ["Estonie","EE"], ["Corée, République populaire démocratique de","KP"], ["Antarctique","AQ"], ["Madagascar","MG"], ["Tchèque, République","CZ"], ["Marshall, Iles","MH"], ["Belgique","BE"], ["Lesotho","LS"], ["Sainte-Hélène, Ascension et Tristan da Cunha","SH"], ["Djibouti","DJ"], ["Kiribati","KI"], ["Israël","IL"], ["Sahara occidental","EH"], ["Ouzbékistan","UZ"], ["Cameroun","CM"], ["Portugal","PT"], ["Guinée-Bissau","GW"], ["Grenade","GD"], ["Groenland","GL"], ["Somalie","SO"], ["Brésil","BR"], ["Île de Man","IM"], ["Danemark","DK"], ["Viet Nam","VN"], ["Vanuatu","VU"], ["Afghanistan","AF"], ["Mauritanie","MR"], ["Svalbard et île Jan Mayen","SJ"], ["Suisse","CH"], ["Saint-Martin (partie néerlandaise)","SX"], ["Afrique du Sud","ZA"], ["Iran, République islamique'", "IR"], ["Seychelles","SC"], ["Curaçao","CW"], ["Thaïlande","TH"], ["Burkina Faso","BF"], ["Equateur","EC"], ["Swaziland","SZ"], ["Argentine","AR"], ["Haïti","HT"], ["Antigua et Barbuda","AG"], ["Mongolie","MN"], ["Arménie","AM"], ["Slovénie","SI"], ["Guyana","GY"], ["Bonaire, Saint-Eustache et Saba","BQ"], ["Népal","NP"], ["Hong Kong","HK"], ["Singapour","SG"], ["Islande","IS"], ["Jamaïque","JM"], ["Samoa américaines","AS"], ["Pays-Bas","NL"], ["Burundi","BI"], ["Congo, République démocratique du","CD"], ["Luxembourg","LU"], ["Arabie Saoudite","SA"], ["Guam","GU"], ["Guinée","GN"], ["Roumanie","RO"], ["Zambie","ZM"], ["Malawi","MW"], ["Croatie","HR"], ["Russie, Fédération de","RU"], ["Turquie","TR"], ["Maurice","MU"], ["Zaïre","ZR"], ["Malaisie","MY"], ["Samoa","WS"], ["Saint-Barthélemy","BL"], ["Liechtenstein","LI"], ["Niger","NE"], ["Nigéria","NG"], ["Pays multiples","ZZ"], ["Qatar","QA"], ["Egypte","EG"], ["Martinique","MQ"], ["Dominicaine, République","DO"], ["Terres australes françaises","TF"], ["Saint-Siège","VA"], ["Anguilla","AI"], ["Sri Lanka","LK"], ["Cocos/Keeling (Îles)","CC"], ["Ouganda","UG"], ["Pérou","PE"], ["Palestine, Etat de","PS"], ["Monténégro","ME"], ["Géorgie","GE"], ["Koweït","KW"], ["Saint-Pierre-et-Miquelon","PM"], ["Caïmans, Iles","KY"], ["Soudan","SD"], ["Papouasie-Nouvelle-Guinée","PG"], ["Géorgie du sud et les îles Sandwich du sud","GS"], ["Réunion","RE"], ["France","FR"], ["Nauru","NR"], ["Inde","IN"], ["Maroc","MA"], ["Liban","LB"], ["Chine","CN"], ["Pitcairn","PN"], ["Bhoutan","BT"], ["Polynésie française","PF"], ["Sainte-Lucie","LC"], ["Cambodge","KH"], ["Espagne","ES"], ["Albanie","AL"], ["Lituanie","LT"], ["Congo","CG"], ["Finlande","FI"], ["Norvège","NO"], ["Bolivie (État plurinational de)","BO"], ["Iraq","IQ"], ["Indonésie","ID"], ["Mariannes du nord, Iles","MP"], ["Jordanie","JO"], ["Ukraine","UA"], ["Kazakhstan","KZ"], ["Porto Rico","PR"], ["Pays inconnu","XX"], ["Bosnie-Herzégovine","BA"], ["Bahrein","BH"], ["République centrafricaine","CF"], ["Pakistan","PK"], ["El Salvador","SV"], ["Guernesey","GG"], ["Bouvet, Ile","BV"], ["Kirghizistan","KG"], ["Angola","AO"], ["Bénin","BJ"], ["Chili","CL"], ["Serbie","RS"], ["Emirats arabes unis","AE"], ["Antilles néerlandaises","AN"], ["Togo","TG"], ["Vatican : voir Saint-Siège",""], ["Panama","PA"], ["Grèce","GR"], ["Barbade","BB"], ["Kenya","KE"], ["Soudan du Sud","SS"], ["Australie","AU"], ["Allemagne de l\EST","DD"], ["URSS","SU"], ["Lettonie","LV"], ["Myanmar","MM"], ["Guadeloupe","GP"], ["Rwanda","RW"], ["Suriname","SR"], ["Erythrée","ER"], ["Tonga","TO"], ["Cuba","CU"], ["Taïwan, Province de Chine","TW"], ["Allemagne","DE"], ["Venezuela (République bolivarienne du)","VE"], ["Gabon","GA"], ["Aruba","AW"], ["Malte","MT"], ["Uruguay","UY"], ["Tchécoslovaquie","CS"], ["Chypre","CY"], ["Botswana","BW"], ["Guyane française","GF"], ["Hongrie","HU"], ["Bulgarie","BG"], ["Timor-Leste","TL"], ["Yémen","YE"], ["Slovaquie","SK"], ["Tunisie","TN"], ["Guatemala","GT"], ["Mayotte","YT"], ["Indien (Territoire britannique de l\océan)","IO"], ["Îles mineures éloignées des Etats-Unis","UM"], ["Fidji","FJ"], ["Bangladesh","BD"], ["Philippines","PH"], ["Monaco","MC"], ["Cook, Iles","CK"], ["Tuvalu","TV"], ["Sénégal","SN"], ["Tadjikistan","TJ"], ["Cabo Verde","CV"], ["Viet Nam (Sud)","VD"], ["Brunéi Darussalam","BN"], ["Gibraltar","GI"], ["Mexique","MX"]]

        const [text, onChangeText] = useState(route.params ? route.params.city : "");
        
        const [report, onChangeReport] = useState(route.params ? route.params.report : null);
    
        function acroToCountry(){
            let result = countryList.find(([name, key]) => {
                if (key.toLowerCase() == report.city.country.toLowerCase()){ 
                    return(true) 
                }
            })
            return result == null ? "English" : result[0];
        }

        function displayDay(dateTime){
            if (dateTime.split(" ")[1].slice(0, 5) == "00:00"){
                return(<Text style={{color: "gray", fontSize: 20, paddingLeft: 5, paddingBottom: 10, paddingTop: 5}} >{ dateTime.split(" ")[0] }</Text>) 
            } 
            return
        }
        
        function chooseIcon(main){
            switch (main) {
                case "Clouds":
                    return "weather-cloudy"
                case "Sun":
                    return "weather-sunny"
                case "Snow":
                    return "snowflake"
                case "Clear":
                    return "weather-sunny"
                case "Rain":
                    return "weather-pouring"
                case "Drizle":
                    return "weather-rainy"
                case "Mist":
                    return "weather-fog"
                case "Smoke":
                    return "weather-fog"
                case "Haze":
                    return "weather-fog"
                case "Dust":
                    return "weather-fog"
                case "Fog":
                    return "weather-fog"
                case "Sand":
                    return "weather-fog"
                case "Dust":
                    return "weather-fog"
                case "Ash":
                    return "weather-fog"
                case "Squall":
                    return "weather-fog"
                case "Tornado":
                    return "weather-tornado"
                case "Thunderstorm":
                    return "weather-lightning"
            
                default:
                    return;
            }
        }

        const renderItem = ({ item }) => (
            
            <View>

                {displayDay(item.dt_txt)} 

                <View style={{ flexDirection:"row", height: 120, backgroundColor: "#067BCB", borderWidth: 3, borderColor: "#005A97", margin: 5, borderRadius: 20 }}>
                    
                    <View style={{flex: 3, flexDirection:"column"}}>
                        <View style={{flex: 2, justifyContent: "center", borderBottomColor: "#FFFFFF", borderBottomWidth: 2}}>
                            <Text style={{ paddingLeft: 10, textAlign:"center", fontSize: 15, color: "#FFFFFF",}}> 
                                {acroToCountry()} - {report.city.name} 
                            </Text>
                        </View>
                        <View style={{flex: 3, justifyContent:"center", textAlign: "center"}}>
                            <Text style={{justifyContent:"center", textAlign:"center", alignContent:"center", fontSize: 30, color: "#FFFFFF"}}> 
                                {item.dt_txt.split(" ")[1].slice(0, 5)}  {(Math.floor(item.main.temp * 10)/10) + "°C"} 
                            </Text>
                        </View>
                    </View>

                    

                    <View style={{flex: 2, flexDirection:"column", justifyContent: "center", borderLeftColor: "#FFFFFF", borderLeftWidth: 2}}>
                        <View style={{flex: 2, justifyContent: "center",}}>
                            <Text style={{textAlign: "center", fontSize: 13, color: "#FFFFFF",}}> 
                            {item.weather[0].description[0].toUpperCase() + item.weather[0].description.slice(1, item.weather[0].description.length)} 
                            </Text>
                        </View>
                        <View style={{flex: 3, justifyContent: "center", alignItems: "center"}}>
                            <MaterialCommunityIcons name={chooseIcon(item.weather[0].main)} color={"white"} size={65} />
                        </View>

                </View>
            </View>


            
            </View>
          );

        if(route.params){
            return (
                <View style={{ flex: 0, flexDirection: "column", paddingVertical: 20,}} >
                    <FlatList
                        data={report.list}
                        renderItem={renderItem}
                        keyExtractor={item => item.dt}
                    />
                </View>
            )
        }
        else{
            return(
                <View style={{ flex: 0, flexDirection: "column", padding: 20,}} >
                    <ActivityIndicator color="#FF0000" size="large" animating={true} />
                </View>
            )
        }
    
    }

    return(
        <TopTab.Navigator
        initialRouteName="City"
        >
              <TopTab.Screen name="City" component={SearchScreen} />
              <TopTab.Screen name="Result" component={ListScreen} />
        </TopTab.Navigator> 
    )
  }

const styles = StyleSheet.create({


    place: {
        fontFamily: 'Montserrat',
    },

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

})


