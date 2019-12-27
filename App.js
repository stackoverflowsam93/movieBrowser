import React from 'react';
import { TextInput, StyleSheet, Text, View, TouchableOpacity, Picker } from 'react-native';
import { render } from 'react-dom';
import {fetchRequest} from './fetchRequest.js';

let myPrint = async () => {
  let request = await fetchRequest({title:'rocky'})
  console.log(request)
}

export default class App extends React.Component {
  render() {
    //myPrint()
    return (
      <View style={styles.container}>
        <View style={styles.searchBlock}>
          <View>
            <Text style={styles.searchText}>Title: </Text>
            <Text style={styles.searchText}>IMDB ID: </Text>
            <Text style={styles.searchText}>Year: </Text>
            <Text style={styles.searchText}>Type: </Text>
            <Text style={styles.searchText}>Plot: </Text>
          </View>
          <View styles={{width: '100%'}}>
            <TextInput style={styles.searchField}></TextInput>
            <TextInput style={styles.searchField}></TextInput>
            <TextInput style={styles.searchField}></TextInput>
            <Picker style={styles.searchField}>
              <Picker.item label="Full" value="full" style={styles.pickerItem}></Picker.item>
              <Picker.item label="Short" value="short"></Picker.item>
            </Picker>
            <TextInput style={styles.searchField}></TextInput>
          </View>
        </View>
        <TouchableOpacity style={styles.searchButton} >
          <Text>Search</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#DEDFDF',
    alignItems: 'center',
    justifyContent: 'center',
  },
  pickerItem: {
    height: 30
  },
  searchBlock: {
    flexDirection:'row',
  },
  searchText: {
    margin: 5,
    height: 30
  },
  searchButton: {
    marginTop: 20,
    backgroundColor: '#24D9E8',
    borderRadius: 5,
    padding: 5
  },
  searchField: {
    backgroundColor: '#FFF',
    textAlign: 'center',
    width: 200,
    margin: 5,
    height: 30
  }
});
