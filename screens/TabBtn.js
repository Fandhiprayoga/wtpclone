import React, {Component} from 'react';
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
import {Platform, StyleSheet, Text, View, Image, ScrollView} from 'react-native';

export default class TabBtn extends Component{

            render(){
                        return(
            
                        <FooterTab >
                                    <Button style={{backgroundColor:'white',borderBottomWidth:3,borderColor:!this.props.tabTwo?'skyblue':'white'}} onPress={() => this.props.navigation.navigate('Jelajah')} >
                                        <Text style={{fontSize:12,}}>JELAJAHI</Text>
                                    </Button>
                                    <Button style={{backgroundColor:'white',borderBottomWidth:3,borderColor:this.props.tabTwo?'skyblue':'white'}} onPress={() => this.props.navigation.navigate('Rekomendasi')}>
                                        <Text style={{fontSize:12}}>DIREKOMENDASIKAN</Text>
                                    </Button>
                        </FooterTab>
           
                        )
            }
}