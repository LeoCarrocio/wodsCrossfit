import React from "react";
import {Icon} from "react-native-elements";

import {createAppContainer} from "react-navigation";
import {createBottomTabNavigator} from "react-navigation-tabs";


import CompetitonScreenStack from "./CompetitionsStack";
import MyUserScreenStack from "./MyUserStack";
import WodScreenStack from "./WodStack";

// creo mi configuracion de navegacion, nuestro stck de navegacion
const NavigationsStacks = createBottomTabNavigator({
  Competiton:{
    screen: CompetitonScreenStack,
    navigationOptions: ()=>({
      tabBarLabel: "Competiton",
      tabBarIcon: ({tintColor}) =>(
        <Icon 
          type = "material-community"
          name = "compass-outline"
          size = {22}
          color = {tintColor}
        />
      )
    })
  },
  MyUser:{
    screen: MyUserScreenStack,
    navigationOptions: ()=>({
      tabBarLabel: "MyUser",
      tabBarIcon: ({tintColor}) =>(
        <Icon 
          type = "material-community"
          name = "account"
          size = {22}
          color = {tintColor}
        />
      )
    })
  },
  Wods:{
    screen: WodScreenStack,
    navigationOptions: ()=>({
      tabBarLabel: "Wods",
      tabBarIcon: ({tintColor}) =>(
        <Icon 
          type = "material-community"
          name = "run"
          size = {22}
          color = {tintColor}
        />
      )
    })
  }
},
{
  initialRouteName:"MyUser",
  order:["MyUser","Competiton","Wods"],
  tabBarOptions: {
    inactiveTintColor:"#646464",
    activeTintColor:"#00a680"
  }
}
);

export default createAppContainer(NavigationsStacks);