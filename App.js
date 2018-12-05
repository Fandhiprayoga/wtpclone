import {
    createBottomTabNavigator,
    createAppContainer,
    createStackNavigator
} from "react-navigation"
import Home from "./screens/Home";
import Perpustakaan from "./screens/Perpustakaan";
import Pembaruan from "./screens/Pembaruan";
import User from "./screens/User";
import Jelajah from './tabs/tabOne';
import Rekomendasi from './tabs/tabTwo';



const Apps = createStackNavigator({
    Perpustakaan: Perpustakaan,
    Pembaruan: Pembaruan,
    User: User,
    Jelajah: Jelajah,
    Rekomendasi: Rekomendasi,
},{
    initialRouteName: 'Jelajah',
    headerMode: "none"
})

// const Tabs = createTabNavigator({
//     Jelajahi: Jelajahi,
//     Rekomendasi: Rekomendasi,
// })

export default createAppContainer(Apps);



// state={
//   colorIconPerpustakaan:'gray',
//   colorIconBook:'gray',
// }
// render() {
//     return (
//         <Router>
//            <Scene key = "root">
//               <Scene key = "Home" component = {Home}  initial = {true} hideNavBar={true}/> 
//               <Scene key = "Perpustakaan" component = {Perpustakaan} hideNavBar={true} />
//              <Scene key = "Pembaruan" component = {Pembaruan}  hideNavBar={true}/>
//               <Scene key = "User" component = {User}  hideNavBar={true} />
//               <Scene key = "Pembaruan" component = {Pembaruan} hideNavBar={true} />
//        </Scene>
//         </Router>

//     );
// }