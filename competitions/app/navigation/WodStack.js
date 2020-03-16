import { createStackNavigator } from "react-navigation-stack";
import WodScreen from "../screens/Wods";

const WodScreenStack = createStackNavigator({
  Wods :{
    screen :WodScreen,
    navigationOptions :()=>({
      title:"Wods"
    })
  }
});

export default WodScreenStack;