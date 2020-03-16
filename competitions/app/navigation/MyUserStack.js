import { createStackNavigator } from "react-navigation-stack";
import MyUserScreen from "../screens/Account/MyUser";
import LoginScreen from "../screens/Account/Login";


const MyUserScreenStack = createStackNavigator({
  MyUser:{
    screen: MyUserScreen,
    navegationOptions: ()=>({
      title:"MyUser"
    })
  },
  Login:{
    screen: LoginScreen,
    navegationOptions: ()=>({
      title:"Loguin"
    })

  }

})

export default MyUserScreenStack;