import React, { Component } from "react";
import { Text, View, Image, TouchableOpacity, TextInput, Button } from "react-native";
import { Container, Content } from "native-base";

export default class Login extends Component {
    constructor(props) {
        super(props);
        this.state = { username: '', pass: '', color: 'gray', inputColor: '' };
    }
    render() {
        return (

            <Content>
                <Container style={{ marginTop: 45, marginLeft: 20, marginRight: 20, marginBottom: 20, height: 450 }}>
                    <View style={{ alignItems: 'center', marginBottom: 20 }}>
                        <Image style={{ width: 200, height: 50 }} source={{ uri: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/9e/Wattpad_logo.svg/310px-Wattpad_logo.svg.png' }} />
                    </View>
                    <View style={{ alignItems: 'center', marginBottom: 20 }}>
                        <View style={{ width: 200 }}>
                            <Text style={{ textAlign: 'center' }}>Masuk untuk membaca dan menulis cerita secara gratis !</Text>
                        </View>
                    </View>

                    <View style={{ flexDirection: 'row' }}>
                        <TouchableOpacity style={{ flex: 1, flexDirection: 'row', backgroundColor: '#3B5998', paddingLeft: 20, paddingRight: 10, paddingTop: 10, paddingBottom: 10, marginRight: 2, borderRadius: 5 }}>
                            <Image style={{ height: 20, width: 20 }} source={{ uri: 'http://www.stickpng.com/assets/images/584ac2d03ac3a570f94a666d.png' }} />
                            <Text style={{ flex: 1, marginLeft: 5, color: 'white' }}>Facebook</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={{ borderWidth: 1, borderColor: '#D4D0C8', flex: 1, flexDirection: 'row', backgroundColor: '#fff', paddingLeft: 20, paddingRight: 10, paddingTop: 10, paddingBottom: 10, marginLeft: 2, borderRadius: 5 }}>
                            <Image style={{ height: 20, width: 20 }} source={{ uri: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Google_%22G%22_Logo.svg/512px-Google_%22G%22_Logo.svg.png' }} />
                            <Text style={{ flex: 1, marginLeft: 5, }}>Google</Text>
                        </TouchableOpacity>
                    </View>

                    <View style={{ marginTop: 15, }}>
                        <Text style={{ color: '#D4D0C8', textAlign: 'center', backgroundColor: 'white', marginLeft: 120, marginRight: 120, zIndex: 9, }}>Atau</Text>
                        <Text style={{ borderBottomWidth: 1, borderBottomColor: '#D4D0C8', marginTop: -24 }}></Text>
                    </View>

                    <View style={{ marginTop: 30, borderColor: '#D4D0C8', borderWidth: 1, borderRadius: 5, paddingLeft: 6, paddingRight: 6 }}>
                        <TextInput placeholder='Nama Pengguna' onChangeText={(text) => this.setState({ username: text })} value={this.state.username} style={{ marginBottom: -15, color: this.state.color }} />

                        <Text style={{ borderBottomColor: '#D4D0C8', borderBottomWidth: 1 }}></Text>

                        <View style={{ flexDirection: 'row' }}>
                            <TextInput placeholder='Kata sandi' onChangeText={(text) => this.setState({ pass: text })} value={this.state.pass} style={{ flex: 2, color: this.state.color }} />
                            <TouchableOpacity style={{ flex: 1, justifyContent: 'center' }}>
                                <Text style={{ color: 'skyblue', }}>Lupa kata sandi ?</Text>
                            </TouchableOpacity>
                        </View>
                    </View>

                    <View>
                        <TouchableOpacity onPress={() => this.props.navigation.navigate('Jelajah')} style={{ backgroundColor: '#F8940F', borderRadius: 5, marginTop: 20, paddingTop: 15, paddingBottom: 15 }}>
                            <Text style={{ color: 'white', textAlign: 'center' }}>Masuk</Text>
                        </TouchableOpacity>
                    </View>

                    <View style={{ marginTop: 15 }}>
                        <TouchableOpacity >
                            <Text style={{ textAlign: 'center', color: '#F8940F' }}>Belum punya akun? Daftar</Text>
                        </TouchableOpacity>
                    </View>
                    {/* <View style={{flex:1, borderRadius:3,borderWidth:1,borderColor:'#D4D0C8'}}>
                                                            <View><TextInput/></View>
                                                            <View><TextInput/></View>
                                                            <View><TextInput/></View>
                                                            <View><TextInput/></View>
                                                </View> */}

                </Container>
            </Content>
        )
    }
}