import react,{ Component } from "react";
import { Text,View,Image,TouchableOpacity } from "react-native";

export default class Login extends Component{
            render(){
                        return(
                                    <View style={{flexDirection:'column'}}>
                                                <View style={{flex:1}}>
                                                            <Image style={{width:200,height:40}}source={{uri:'https://upload.wikimedia.org/wikipedia/commons/thumb/9/9e/Wattpad_logo.svg/310px-Wattpad_logo.svg.png'}}/>
                                                </View>
                                                <View style={{flex:1}}>
                                                            <View>
                                                                        <Text>Masuk untuk membaca dan menulis cerita secara gratis !</Text>
                                                            </View>
                                                </View>
                                                <View style={{flex:1}}>
                                                            <TouchableOpacity style={{backgroundColor:'#3B5998'}}>
                                                                        <Text>facebook</Text>
                                                            </TouchableOpacity>
                                                            <TouchableOpacity style={{backgroundColor:'#fff'}}>
                                                                        <Text>Google</Text>
                                                            </TouchableOpacity>
                                                </View>
                                                <View></View>
                                                <View></View>
                                                <View></View>
                                                <View></View>
                                    </View>
                        )
            }
}