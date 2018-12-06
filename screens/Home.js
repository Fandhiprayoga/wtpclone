import React, {Component} from 'react';
import {Text,Image, } from 'react-native';
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
    Tabs
} from 'native-base';
import {Icon} from 'react-native-elements'
import TabBtn from './TabBtn'

export default class Home extends Component {
  
    render() {
        return (
            <Container>
                <Header hasTabs
                    style={{
                        backgroundColor: '#F09631',
                        flexDirection:'column',
                        height:110,
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
                        <Text style={{width:200,marginLeft:10}}><Title style={{fontSize:20,}}>Halaman utama</Title></Text>
                    </Body>
                    <Right style={{flex:1,marginRight:10}}>
                        <Button transparent>
                            <Icon type="font-awesome" name="search" color="white"></Icon>
                        </Button>
                    </Right>
                    </Body>
                    <TabBtn {...this.props}/>
                </Header>
                <Content>
                   {this.props.children}
                </Content>
                <Footer>
                    <FooterTab
                        style={{
                            backgroundColor: 'white'
                        }}>
                        <Button >
                            <Icon name="home" color="#F09631" size={30}/>
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