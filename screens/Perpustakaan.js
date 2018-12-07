import React, {Component} from 'react';
import {Text,Image,View, TouchableOpacity,StyleSheet, ProgressBarAndroid, } from 'react-native';
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
    CardItem
} from 'native-base';
import {Icon} from 'react-native-elements'
import Grid from 'react-native-grid-component';
import { ScrollView } from 'react-native-gesture-handler';

const datas = [{url:'https://a.wattpad.com/cover/143263418-352-k196923.jpg', judul:'Lorem ipsum 1', progres:0.9},
{url:'https://a.wattpad.com/cover/143263418-352-k196923.jpg', judul:'Lorem ipsum 2', progres:0.2} , 
{url:'https://a.wattpad.com/cover/143263418-352-k196923.jpg', judul:'Lorem ipsum 3', progres:0.4}, 
{url:'https://a.wattpad.com/cover/143263418-352-k196923.jpg', judul:'Lorem ipsum 4', progres:0.6},
{url:'https://a.wattpad.com/cover/143263418-352-k196923.jpg', judul:'Lorem ipsum 5', progres:0.7},
{url:'https://a.wattpad.com/cover/143263418-352-k196923.jpg', judul:'Lorem ipsum 6', progres:0.2},
{url:'https://a.wattpad.com/cover/143263418-352-k196923.jpg', judul:'Lorem ipsum 7', progres:0.3},
{url:'https://a.wattpad.com/cover/143263418-352-k196923.jpg', judul:'Lorem ipsum 8', progres:1},
{url:'https://a.wattpad.com/cover/143263418-352-k196923.jpg', judul:'Lorem ipsum 6', progres:0.5}]




export default class Perpustakaan extends Component {


    counter = 1;

    addCounter(){
        this.counter++;
    }

    cekProgres(progres){
        if (progres == null)
        {
         return   'none'
        }
        else{
          return  'flex'
        }
    }

    cekGenap(){
         return datas.length % 2 !== 0 && datas.length === this.counter ? true : false
    }

    _renderItem = (data, i) => { 
       
        
        return(
            <TouchableOpacity style={{marginBottom:15,marginTop:10}} key={i}>
                <Image style={{width:100, height:150}} source={{uri:data.url}} />
                <ProgressBarAndroid  style={{display:this.cekProgres(data.progres)}}indeterminate={false} styleAttr="Horizontal" styleAttr="Horizontal" color="#2196F3" progress={data.progres}/>
                <Text>{data.judul}</Text>      
                { this.addCounter()}
            </TouchableOpacity>
      )};
     
      _renderPlaceholder = i => <View style={styles.item} key={i} />;
            
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
                        <Text style={{width:200,marginLeft:10}}><Title style={{fontSize:20,}}>Perpustakaan</Title></Text>
                    </Body>
                    <Right style={{flex:1,marginRight:10, flexDirection:'row'}}>
                        <Button transparent style={{flex:1,paddingLeft:50 }}>
                            <Icon type="font-awesome" name="search" color="white"></Icon>
                        </Button>
                        <Button transparent style={{flex:1}}>
                            <Icon type="entypo" name="dots-three-vertical" color="white"></Icon>
                        </Button>
                    </Right>
                    </Body>
                </Header>
                <Container>
                  <Tabs locked={true} tabBarUnderlineStyle={{borderBottomWidth:3,borderBottomColor:'skyblue'}}>
                    <Tab  tabStyle={{backgroundColor: 'white'}}  activeTabStyle={{backgroundColor: 'white'}} activeTextStyle={{color: '#000', fontWeight: 'normal',fontSize:12}} textStyle={{fontSize:12}} heading="SAAT INI DIBACA">
                      {/* <Tab1 /> */}
                            <Content >
                            <Grid
                                    style={styles.list}
                                    renderItem={this._renderItem}
                                    renderPlaceholder={this._renderPlaceholder}
                                    data={this.cekGenap ? [...datas, {uri:'', judul:'', progress:null}] :datas}
                                    itemsPerRow={2}
                             />
                             <View style={{borderTopWidth:1,borderTopColor:'#D4D0C8',marginBottom:15,marginTop:15}}>
                                 <Text style={{fontSize:20,marginLeft:15,}}>Temukan lebih banyak lagi cerita tentang</Text>
                             </View>
                             <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
                             <View style={{flexDirection:'row',marginLeft:15,marginRight:15,}}>
                                 <TouchableOpacity style={styles.more}><Text>love</Text></TouchableOpacity>
                                 <TouchableOpacity style={styles.more}><Text>poetry</Text></TouchableOpacity>
                                 <TouchableOpacity style={styles.more}><Text>puisi</Text></TouchableOpacity>
                                 <TouchableOpacity style={styles.more}><Text>sajak</Text></TouchableOpacity>
                                 <TouchableOpacity style={styles.more}><Text>cinta</Text></TouchableOpacity>
                                 <TouchableOpacity style={styles.more}><Text>indonesia</Text></TouchableOpacity>
                                 <TouchableOpacity style={styles.more}><Text>romance</Text></TouchableOpacity>
                             </View>
                             </ScrollView>
                            </Content>
                    </Tab>
                    <Tab tabStyle={{backgroundColor: 'white'}} activeTabStyle={{backgroundColor: 'white'}} text activeTextStyle={{color: '#000', fontWeight: 'normal', fontSize:12}}  textStyle={{fontSize:12}} heading="ARSIP">
                      {/* <Tab2 /> */}
                            <Content style={{backgroundColor:'#E5E5E5'}}>
                                  <View style={{marginTop:15}}><Icon size={40} color="#D7D3CC" type='font-awesome' name='inbox'/></View>
                                  <View><Text style={{textAlign:'center',fontSize:30,marginBottom:15,marginTop:20}}>Anda tidak mempunyai cerita yang diarsipkan</Text></View>
                                  <View><Text style={{textAlign:'center',}}>Cerita yang telah diperbarui akan kembali disimpan ke Perpustakaan. Cerita yang diarsipkan memerlukan lennih sedikir ruang di perangkat anda, tetapi tidak bisa dibaca secara luring</Text></View>
                                  <View style={{marginTop:30,alignSelf:'center'}}><TouchableOpacity style={{backgroundColor:'#FFFFFF',borderRadius:5,borderColor:'gray',borderWidth:1, paddingLeft:9,paddingRight:9,paddingTop:9,paddingBottom:9}}><Text style={{color:'#BFBAAE'}}>PILIH CERITA UNTUK DIARSIPKAN</Text></TouchableOpacity></View>
                            </Content>
                    </Tab>
                    <Tab tabStyle={{backgroundColor: 'white'}}  activeTabStyle={{backgroundColor: 'white'}} activeTextStyle={{color: '#000', fontWeight: 'normal',fontSize:12}}  textStyle={{fontSize:12}} heading="DAFTAR BACAAN">
                      {/* <Tab3 /> */}
                            <Content>
                                <TouchableOpacity>
                                <Card>
                                    <CardItem>
                                    <Body>
                                        <View style={{flexDirection:'row'}}>
                                            <View style={{flex:2}}>
                                                <Image style={{width:100, height:150}} source={{uri:'https://a.wattpad.com/cover/143263418-352-k196923.jpg'}} />
                                            </View>
                                            <View style={{flex:2}}>
                                                <Text>fandhi's reading List</Text>
                                                <Text style={{color:'#D4D4D4'}}>2 cerita</Text>
                                            </View>
                                            <View style={{flex:1}}>
                                                    <Icon type="entypo" name="dots-three-vertical" color="#D4D4D4"/>
                                            </View>
                                        </View>
                                    </Body>
                                    </CardItem>
                                </Card>
                                </TouchableOpacity>
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
                            <Icon name="book" color="#F09631" size={30}/>
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
                            <Icon type="MaterialIcons" name="message" color="gray" size={30}/>
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

const styles = StyleSheet.create({
    more: {
        borderWidth:0,
        borderRadius:20,
         backgroundColor:'#8588F7',
         marginRight:10, 
         paddingLeft:10, 
         paddingRight:10,
         paddingTop:10,
         paddingBottom:10,
         marginBottom:15
    },
    list: {
      flex: 1
    }
  });