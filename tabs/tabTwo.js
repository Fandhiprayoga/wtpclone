/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react'
import {Platform, StyleSheet, View,TouchableOpacity,ScrollView, Image, Button} from 'react-native'
import {createBottomTabNavigator} from 'react-navigation'
import Home from '../screens/Home'
import { Container, Header, Content, List, ListItem, Text,Left,  } from 'native-base'
import {Icon} from 'react-native-elements'
import {Grid, Col, Row} from "react-native-easy-grid";
export default class TabTwo extends Component {
  rekomen={
    tagNames:[{
      key:1,
      tagName:"#winner",
      komenTag:"Tag yang populer",
      bukus:[{
          judul:'Judul Terserah 1',
      },{
        judul:'Judul Terserah 2',
      },{
        judul:'Judul Terserah 3',
      },{
        judul:'Judul Terserah 4',
      }]
    },{
      key:2,
      tagName:"#snsd",
      komenTag:"Tag yang populer",
      bukus:[{
          judul:'Judul Terserah 1',
      },{
          judul:'Judul Terserah 2',
      },]
    },{
      key:3,
      tagName:"#Pemenang Watty 2018",
      komenTag:"Daftar bacaan oleh Penghargaan Wattys 2018 dipilih khusus bagi Anda",
      bukus:[{
          judul:'Judul Terserah 1',
      },{
          judul:'Judul Terserah 2',
      },{
          judul:'Judul Terserah 3',
      },{
          judul:'Judul Terserah 4',
      },]
    },{
      key:4,
      tagName:"#jkt48",
      komenTag:"Tag yang populer",
      bukus:[{
          judul:'Judul Terserah 1',
      }]
    },{
      key:5,
      tagName:"#brother",
      komenTag:"Tag yang populer",
      bukus:[{
          judul:'Judul Terserah 1',
      },]
    },],
  }
  render() {
    return (
      <Home {...this.props} tabTwo>
      <Container  style={{height:'100%'}}>
        <Content >
                {this.rekomen.tagNames.map((tn,key)=>(
                            
                                      <View style={{borderBottomWidth:1,borderBottomColor:'#E6E3DF',}}  key={key}>
                                      <View style={{paddingLeft:15,paddingRight:15}}>
                                      <TouchableOpacity style={{marginTop:5}}>
                                            <View>
                                                <View style={{flexDirection:'row',}}>
                                                    <View style={{flex:1, flexDirection:'row'}}>
                                                        <Text style={{marginRight:15,}}>{tn.tagName} </Text><Icon color='#D4D0C8' type='font-awesome' name='angle-right'/>
                                                    </View>
                                                    <View style={{flex:1,}}>
                                                            
                                                    </View>
                                                </View>
                                                <Text style={{color:'gray', fontSize:11,}}>{tn.komenTag}</Text>
                                            </View>
                                          </TouchableOpacity>
                                          </View>
                                      <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
                                      <View style={{flexDirection:'row',paddingLeft:15,}}>
                                      {tn.bukus.map((bk,key2)=>(
                                          <View style={{flex:1, paddingBottom:15,paddingRight:15, width:300}} key={key2}>
                                          <TouchableOpacity>
                                          <View style={{flexDirection:'row', paddingTop:15}}>
                      
                                            <View style={{flex:1}}>
                                                <Image style={{width:100, height:150}} source={{uri:'https://a.wattpad.com/cover/143263418-352-k196923.jpg'}} />
                                            </View>
                                            <View style={{flex:1, marginLeft:-50}}>
                                                <View>
                                                  {/* //judul novel */}
                                                    <Text>{bk.judul}</Text>
                                                </View>
                                                <View style={{flexDirection:'row',marginBottom:5}}>
                                                      {/* //parameter */}
                                                      <View style={{flex:1}}><Icon  size={12} color='gray' type='font-awesome' name='eye'/></View>
                                                      <View style={{flex:3,marginRight:3}}><Text style={{color:'gray', fontSize:12,}} >258ribu</Text></View>
                                                      <View style={{flex:1}}><Icon  size={12} color='gray' type='font-awesome' name='star'/></View>
                                                      <View style={{flex:3,marginRight:3}}><Text style={{color:'gray', fontSize:12,}}>19,2ribu</Text></View>
                                                      <View style={{flex:1}}><Icon size={12} color='gray' type='font-awesome' name='list-ul'/></View>
                                                      <View style={{flex:3,}}><Text style={{color:'gray', fontSize:12,}}>101</Text></View>
                                                </View>
                                                <View>
                                                    <Text style={{color:'gray', fontSize:13,}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor</Text>
                                                </View>
                                                <View style={{flexDirection:'row',marginTop:5}}>
                                                  {/* //tblkategori */}
                                                    <TouchableOpacity style={{flex:1,}}><Text style={{textAlign:'center',borderRadius:5, paddingTop:0,paddingBottom:0,paddingLeft:0,paddingRight:0,borderWidth:1,borderColor:'gray',color:'gray', fontSize:11,}}>funny</Text></TouchableOpacity>
                                                    <TouchableOpacity style={{flex:1,}}><Text style={{textAlign:'center',borderRadius:5, paddingTop:0,paddingBottom:0,paddingLeft:0,paddingRight:0,borderWidth:1,borderColor:'gray', color:'gray', fontSize:11,}}>watty</Text></TouchableOpacity>
                                                    <TouchableOpacity style={{flex:1,}}><Text style={{textAlign:'center',borderRadius:5, paddingTop:0,paddingBottom:0,paddingLeft:0,paddingRight:0,borderWidth:1,borderColor:'gray',color:'gray', fontSize:11,}}>drama</Text></TouchableOpacity>
                                                    <TouchableOpacity style={{flex:1,}}><Text style={{textAlign:'center',color:'gray', fontSize:11,}}> +16 lagi</Text></TouchableOpacity>
                                                </View>
                                                
                                            </View>
                                          </View>
                                          </TouchableOpacity>
                                      </View>
                                      ))}
                                      
                                      {/* batas akhir */}
                                      </View>
                                      </ScrollView>
                                      </View>
                ))}
        </Content>
      </Container>
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
