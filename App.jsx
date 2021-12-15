import React from 'react';
import { Image, Text, TextInput, View, ScrollView } from 'react-native';

//a normal function
const Cat = (name) => {
  return(
    <Text>My name iz {name}</Text>
  );
}

//using propties
const Cat2 = (props) => {
  return(
    <Text>Hello, my name is {props.name}</Text>
  );
}

//a normal function with styling
const Dog = () => {
  return(
  <View>
    <Text style={{fontSize:9}}>(Im not a dog person but anyways)</Text>
    <Text>My name is doggo</Text>
  </View>
  );
}

const App = () => {
  return (
    
    <ScrollView>
      <View>
        <Text>Some more text</Text>
        <Text>{Cat("messstannn")}</Text>
        <Text>{Cat("mess")}</Text>
        <Text>{Cat("messsta")}</Text>
        <Cat2 name = "boncuk" />
        <Dog />
        <Image
          source={{
            uri: 'https://reactnative.dev/docs/assets/p_cat2.png', //this is also prop.
          }}
          style={{ width: 200, height: 200 }} //also prop
        />
      </View>
      <TextInput
        style={{
          height: 40,
          borderColor: 'gray',
          borderWidth: 1
        }}
        defaultValue="You can type in me"
      />
    </ScrollView>
  );
}

export default App;
