import React from "react";
import { View, TextInput } from "react-native";
import NfcManager, {NfcEvents} from 'react-native-nfc-manager';


export default function NFC() {

    const [text, onChangeText] = React.useState("Useless Text");
    
    async function initNfc() {
        await NfcManager.start();
      }
      
      function readNdef() {
        const cleanUp = () => {
          NfcManager.setEventListener(NfcEvents.DiscoverTag, null);
          NfcManager.setEventListener(NfcEvents.SessionClosed, null);
        };
      
        return new Promise((resolve) => {
          let tagFound = null;
      
          NfcManager.setEventListener(NfcEvents.DiscoverTag, (tag) => {
            tagFound = tag;
            resolve(tagFound);
            NfcManager.setAlertMessageIOS('NDEF tag found');
            NfcManager.unregisterTagEvent().catch(() => 0);
          });
      
          NfcManager.setEventListener(NfcEvents.SessionClosed, () => {
            cleanUp();
            if (!tagFound) {
              resolve();
            }
          });
      
          NfcManager.registerTagEvent();
        });
      }

    initNfc()
    readNdef()


    return(
        <View>
            <TextInput 
            style={{  flex: 0,
                fontSize: 28,
                fontWeight: "bold",
                height: 50,
                borderColor: 'black',
                borderWidth: 1,
                marginVertical: 20,}}
            onChangeText={onChangeText}
            value={text}
            
            />
        </View>
    )
}