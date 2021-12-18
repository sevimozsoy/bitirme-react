import React,{useState} from 'react';
import { Image, Text, TextInput, View, ScrollView, Button, StyleSheet, FlatList, SectionList } from 'react-native';


//creating a stylesheet
const styles = StyleSheet.create({
  container:{
    flex: 1,
    paddingTop: 30
  },
  item:{
    padding: 10,
    fontSize: 18,
    height: 44
  },
  sectionHeader:{
    paddingTop: 2,
    paddingLeft: 10,
    paddingRight: 10,
    paddingBottom: 2,
    fontSize: 14,
    fontWeight: 'bold',
    backgroundColor: 'rgba(247,247,247,1)'
  }
});

//a normal function
const Cat = (name) => {
  return(
    <Text>My name iz {name}</Text>
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

//using propties
const Cat2 = (props) => {
  return(
    <Text>Hello, my name is {props.name}</Text>
  );
}

//state
const CatWithState = (props) => {
  const [isHungry, setIsHungry] = useState(true);

  return(
    <View>
      <Text>
        I am {props.name}, and I am {isHungry ? "hungry" : "full"}!
      </Text>
      <Button
        onPress={() =>{
          setIsHungry(false);
        }}
        disabled={!isHungry}
        title={isHungry ? "Pour me some milk, please!" : "Thank you!"}
      />
    </View>
  );

}

//text handling
const Translate = () =>{
  const [text , setText] = useState('');
  return(
    <View style={{padding:10}}>
      <TextInput
      style = {{height:40}}
      placeholder="Type to translate!"
      onChangeText={text => setText(text)}
      defaultValue={text}
      />
      <Text style={{padding:10, fontSize:42}}> 
      {text.split(' ').map((word) => word && 'mestan').join(' ')}
      </Text>
    </View>
  );
}

//FlatList
//cannot written inside view or scrollview.
//export as a module
const FlatListBasics = () => {
  return(
    <View style={styles.container}>
      <FlatList 
        data={[
          {key: 'Devin'},
          {key: 'Dan'},
          {key: 'Dominic'},
          {key: 'Jackson'},
          {key: 'James'},
          {key: 'Joel'},
          {key: 'John'},
          {key: 'Jillian'},
          {key: 'Jimmy'},
          {key: 'Julie'},
        ]}
        renderItem={({item}) => <Text style={styles.item}>{item.key}
        </Text>}
      />
    </View>
  );
}

//SectionList
//FlatList but has logical sections
const SectionListBasics = () => {
  return(
  <View style={styles.container}>
    <SectionList 
    sections={[
      {title: 'D', data: ['Devin', 'Dan', 'Dominic']},
      {title: 'J', data: ['Jackson', 'James', 'Jillian', 'Jimmy', 'Joel', 'John', 'Julie']},
    ]}
    renderItem={({item}) => <Text style={styles.item}>{item}</Text>}
    renderSectionHeader={({section}) => <Text style={styles.sectionHeader}>{section.title}</Text>}
    keyExtractor={(item, index) => index}
    />
  </View>
  );
}

//main
const App = () => {
  return (
    
    <ScrollView>
      <View>
        <Text>Some more text</Text>
        <Text>{Cat("messstannn")}</Text>
        <Text>{Cat("mess")}</Text>
        <Text>{Cat("messsta")}</Text>
        <Cat2 name = "boncuk" />
        {/* <Cat2 name = "bişi"/>
        <Cat2 name = "bişi"/>
        <Cat2 name = "bişi"/>
        <Cat2 name = "bişi"/>
        <Cat2 name = "bişi"/> these are added to see the scrollView
        <Cat2 name = "bişi"/>
        <Cat2 name = "bişi"/>
        <Cat2 name = "bişi"/> */}
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
      <>
      <CatWithState name="Mestan"/>
      <CatWithState name="pamuk" />
      </>
      <Translate/>
    </ScrollView>
  );
}

export default App;
//export default FlatListBasics;
//export default SectionListBasics