/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Text,Image,View, TouchableOpacity,StyleSheet, FlatList } from 'react-native';
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
    Card,
    CardItem,
    List
} from 'native-base';
import {Icon,Avatar, ListItem} from 'react-native-elements'
import Grid from 'react-native-grid-component';
import { ScrollView } from 'react-native-gesture-handler';


export default class Pembaruan extends Component {
    kabars=[{
            id:1,
            picAuth:'https://image.shutterstock.com/image-vector/yellow-emoticon-face-sad-vector-450w-736066228.jpg',
            nameAuth:'fandhipray',
            titleAuth:'Hamba lelah ngoding kk',
            picTitle:'https://a.wattpad.com/cover/143263418-352-k196923.jpg',
            detailAuth:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus eget.',
            dateUpdate:'Okt 13, 2018 pukul 4.23 AM',
        },
        {
            id:2,
            picAuth:'https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg',
            nameAuth:'Lap Lap',
            titleAuth:'Judul 2',
            picTitle:'https://a.wattpad.com/cover/143263418-352-k196923.jpg',
            detailAuth:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus eget.',
            dateUpdate:'Okt 13, 2018 pukul 4.23 AM',
        },
        {
            id:3,
            picAuth:'https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg',
            nameAuth:'Author 3',
            titleAuth:'Judul yang ke 3',
            picTitle:'https://a.wattpad.com/cover/143263418-352-k196923.jpg',
            detailAuth:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus eget.',
            dateUpdate:'Okt 13, 2018 pukul 4.23 AM',
        },
        {
            id:4,
            picAuth:'https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg',
            nameAuth:'Author ke 4',
            titleAuth:'Judul ke 4',
            picTitle:'https://a.wattpad.com/cover/143263418-352-k196923.jpg',
            detailAuth:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus eget.',
            dateUpdate:'Okt 13, 2018 pukul 4.23 AM',
        }]
    bolder(item){
        
        return <Text style={{fontWeight:'bold'}}>{item}</Text> 
    }
  render() {
    return (
        <Container>
            <Header hasTabs
                style={{
                    backgroundColor: '#F09631',
                    flexDirection:'column',
                    paddingLeft: 0,
                    paddingRight:0
                }}>
                <Body style={{
                    flexDirection:'row'
                }} >
                <Left style={{flex:1,marginLeft:10}}>
                    <Button transparent>
                        <Image
                            source={require('../img/Wattpad_Icon.png')}
                            style={{
                                width: 50,
                                height: 50
                            }}/>
                    </Button>
                </Left>
                <Body style={{flex:1}}>
                    <Text style={{width:200,marginLeft:10}}><Title style={{fontSize:20,}}>Pembaruan</Title></Text>
                </Body>
                <Right style={{flex:1,marginRight:10, flexDirection:'row'}}>
                    <Button transparent style={{flex:1,paddingLeft:50 }}>
                        <Icon  type="MaterialIcons" name="person-add" color="white"></Icon>
                    </Button>
                    
                </Right>
                </Body>
            </Header>
            <Container>
              <Tabs locked={true} tabBarUnderlineStyle={{borderBottomWidth:3,borderBottomColor:'skyblue'}}>
                <Tab  tabStyle={{backgroundColor: 'white'}}  activeTabStyle={{backgroundColor: 'white'}} activeTextStyle={{color: '#000', fontWeight: 'normal',fontSize:12}} textStyle={{fontSize:12}} heading="KRONOLOGI KABAR">
                  {/* <Tab1 /> */}
                        <Content >
                        {this.kabars.map((kabar,i)=>(
                                                    <TouchableOpacity key={i}>
                                                        <Card style={{paddingLeft:5,paddingRight:10, paddingTop:10, paddingBottom:10}} >
                                                        <CardItem>
                                                            <Body>
                                                                <View style={{flexDirection:'row'}}>
                                                                    <View style={{flex:1,marginRight:10,}}>
                                                                    <Avatar
                                                                        size="large"
                                                                        rounded
                                                                        source={{uri: kabar.picAuth}}
                                                                        activeOpacity={0.7}
                                                                    />
                                                                    </View>
                                                                    <View style={{flex:5,}}>
                                                                            <View style={{flex:1,marginBottom:10,width:'100%'}}>
                                                                                    <Text> {this.bolder(kabar.nameAuth)} updated {this.bolder(kabar.titleAuth)} </Text>
                                                                            </View>
                                                                            <View style={{flex:1, flexDirection:'row', marginBottom:10}}>
                                                                                    <View style={{flex:1,}}>
                                                                                            <Image style={{width:50, height:75}} source={{uri:kabar.picTitle}} />
                                                                                    </View>
                                                                                    <View style={{flex:2,}}>
                                                                                            <Text>{kabar.detailAuth}</Text>
                                                                                    </View>
                                                                            </View>
                                                                            <View style={{flex:1,}}>
                                                                                    <Text style={{textAlign:'right'}}>{kabar.dateUpdate}</Text>
                                                                            </View>
                                                                    </View>
                                                               </View>
                                                            </Body>
                                                            </CardItem>
                                                        </Card>
                                                        </TouchableOpacity>
                        ))}

                        </Content>
                </Tab>
                <Tab tabStyle={{backgroundColor: 'white'}} activeTabStyle={{backgroundColor: 'white'}} text activeTextStyle={{color: '#000', fontWeight: 'normal', fontSize:12}}  textStyle={{fontSize:12}} heading="NOTIFIKASI">
                  {/* <Tab2 /> */}
                        <Content style={{backgroundColor:'#fff'}}>
                        <FlatList style={{marginTop:10,marginBottom:10}}
                            data={this.kabars}
                            renderItem={({item}) =>
                            <TouchableOpacity key={item.id}>
                                <View style={{flexDirection: 'row',marginBottom:5, borderBottomWidth:1, borderBottomColor:'#D4D0C8'}} >
                                        <View style={{flex:1, justifyContent: 'center',alignItems: 'center',}}>
                                                <Avatar
                                                        size={100}
                                                        rounded
                                                        source={{uri: item.picAuth}}
                                                        activeOpacity={0.7}
                                                 />
                                        </View>
                                        <View style={{flex:3, height:50}}>
                                                <View style={{flex:1}}>
                                                        <Text>{this.bolder(item.nameAuth)} memperbarui {this.bolder(item.titleAuth)}</Text>
                                                </View>
                                                <View style={{flex:1,flexDirection:"row", marginTop:5}}>
                                                        <Icon style={{flex:1,}} type='font awesome' name='book' color='#D4D0C8' size={12}/>
                                                        <Text style={{flex:1,paddingLeft:5,alignItems: 'center'}} >{item.dateUpdate}</Text>
                                                </View>  
                                        </View>
                                        <View style={{flex:1, justifyContent: 'center',alignItems: 'center',}}>
                                                    <Image style={{width:30, height:55, marginBottom:5}} source={{uri:item.picTitle}} />        
                                        </View>
                                </View> 
                                </TouchableOpacity>                       
                            }
                                keyExtractor={(item, index) => index.toString()}
                            />
                        </Content>
                </Tab>
                <Tab tabStyle={{backgroundColor: 'white'}}  activeTabStyle={{backgroundColor: 'white'}} activeTextStyle={{color: '#000', fontWeight: 'normal',fontSize:12}}  textStyle={{fontSize:12}} heading="PESAN">
                  {/* <Tab3 /> */}
                        <Content style={{backgroundColor:'#E0DDD8',}}>
                        <View style={{marginTop:50, marginLeft:15, marginRight:15,}}>
                                <Text style={{textAlign:'center',fontSize:30, marginBottom:15}}>
                                    Tidak ada pesan pada saat ini.
                                </Text>
                                <Text style={{textAlign:'center',color:'#D0CCC4',marginBottom:15, paddingLeft:15, paddingRight:15}}>
                                    Berbagi cerita yang disukai Anda dengan teman, dan kirim pujian kepada para penulis yang anda gemari.
                                </Text>
                                <TouchableOpacity style={{borderRadius:5, backgroundColor:'#FF9912', paddingTop:15, paddingBottom:15}}>
                                    <Text style={{color:'white', textAlign:'center'}}>Kirim pesan</Text>
                                </TouchableOpacity>
                        </View>
                        </Content>
                </Tab>
              </Tabs>
            </Container>
            <Footer>
                <FooterTab
                    style={{
                        backgroundColor: 'white'
                    }}>
                    <Button onPress={() => this.props.navigation.navigate('Jelajah')}>
                        <Icon name="home" color="gray" size={30}/>
                    </Button>
                    <Button onPress={() => this.props.navigation.navigate('Perpustakaan')}>
                        <Icon name="book" color="gray" size={30}/>
                    </Button>
                    <Button
                        style={{
                            borderWidth: 1,
                            borderColor: 'gray',
                            marginLeft: 20,
                            marginRight: 20,
                            height: 45
                        }}>
                        <Icon type="font-awesome" name="pencil" color="gray" size={30}/>
                    </Button>
                    <Button onPress={() => this.props.navigation.navigate('Pembaruan')}>
                        <Icon type="MaterialIcons" name="message" color="#F09631" size={30}/>
                    </Button>
                    <Button onPress={() => this.props.navigation.navigate('User')}>
                        <Icon name="person" color="gray" size={30}/>
                    </Button>
                </FooterTab>

            </Footer>
        </Container>

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
