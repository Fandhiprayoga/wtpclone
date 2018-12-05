/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';

import {
            Container,
            Header,
            Left,
            Body,
            Right,
            Button,
            Title,
            Content,
            Footer,
            FooterTab,
            Tab,
            Tabs,
            List,
            ListItem
        } from 'native-base';

import Home from '../screens/Home'

export default class TabOne extends Component {

state={
            lsItems:["Lorem ipsum",
            "Lorem ipsum",
            "Lorem ipsum",
            "Lorem ipsum",
            "Lorem ipsum",
            "Lorem ipsum",
            "Lorem ipsum",
            "Lorem ipsum",
            "Lorem ipsum",
            "Lorem ipsum",
            "Lorem ipsum",],
}
  i=0;
  render() {
    return (
      <Home {...this.props} >
            <View>
                        <List>
                    
                                    {this.state.lsItems.map((lsItem, key)=>(
                                    <TouchableOpacity key={key} style={{height:50,borderBottomWidth:1,borderBottomColor:'#E6E3DF',justifyContent:'center',paddingLeft:15,}}>
                                  
                                    
                                          
                                                <Text>{this.i+=1} {lsItem}</Text>
                                          
                                    
                                 
                                    </TouchableOpacity>
                                    ))}
                        
                        </List>
            </View>
            </Home>       

    );
  }
}

//export default Trips;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
