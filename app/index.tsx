/* import React, {useState} from 'react';
 import { Text, View, Button, Alert, Switch } from "react-native";

 export default function homeScreen() {
   const [isEnabled, setIsEnabled] = useState(false);
   const toggleSwitch = () => setIsEnabled(previousState => !previousState);
   function pressMe(){
    Alert.alert("Button Clicked")
   }
   return (
    <View>
     <Text>Hello From Home Screen </Text>
     <Button title="Click Me" onPress={pressMe}/>
     <Switch
           onValueChange={toggleSwitch}
           value={isEnabled}/>
    </View>
   );
 }
*/


//Viewscroll

/* import React, {useState} from 'react';
 import { Text, View, Button, Alert, Switch, ScrollView } from "react-native";

 export default function homeScreen() {
  
   return (
   <ScrollView>
     {[...Array(35)].map((_, i) => (
       <Text key={i} style={{fontSize:24}}>Hello {i + 1}</Text>
     ))}
   </ScrollView>
 );
}
*/


//TEXTINPUT

/*import React from 'react';
import {StyleSheet, TextInput, View} from 'react-native';
const TextInputExample = () => {
  const [text, onChangeText] = React.useState('');
  const [number, onChangeNumber] = React.useState('');

  return (
        <View>
          <TextInput
           style={styles.input}
          onChangeText={onChangeText}
          value={text}
        />
        <TextInput
         style={styles.input}
          onChangeText={onChangeNumber}
          value={number}
          placeholder="useless placeholder"
          keyboardType="numeric"
        />
        </View>
        
  );
};
const styles = StyleSheet.create({
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
});
export default TextInputExample;
*/


//PRESSABLE
/*import React from 'react';
import {Alert, Pressable,Text} from 'react-native';
export default function pressable(){
  const onPressFunction = () => {
    Alert.alert("I AM PRESSABLE")
  }
  return (
    <Pressable onPress={onPressFunction}>
      <Text>I'm pressable!</Text>
    </Pressable>
  );
}
  */

//IMAGE BACKGROUND

import React from 'react';
import {ImageBackground, StyleSheet, Text, View} from 'react-native';
const image = {uri: 'https://legacy.reactjs.org/logo-og.png'};

const App = () => (
  
    <View>
      <ImageBackground source={image} resizeMode="cover" style={styles.image}>
        <Text style={styles.text}>Inside</Text>
      </ImageBackground>
    </View>
);

const styles = StyleSheet.create({
  image: {
    flex: 1,
    justifyContent: 'center',
  },
  text: {
    color: 'Blue',
    fontSize: 42,
    lineHeight: 84,
    fontWeight: 'bold',
    textAlign: 'center',
    backgroundColor: '#000000c0',
  },
});

export default App;
