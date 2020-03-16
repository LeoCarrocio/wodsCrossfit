import { createStackNavigator } from "react-navigation-stack";
import CompetitonScreen from "../screens/Competition";


 const CompetitonScreenStack = createStackNavigator({
  Competiton:{
    screen: CompetitonScreen,
    navegationOptions: () =>({
      title : "Competitions"
    })
  }
});

export default CompetitonScreenStack;