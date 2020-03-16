import React from "react";
import { StyleSheet, View , Text, ScrollView, Image } from "react-native";
import { Button } from "react-native-elements"
import { withNavigation }  from "react-navigation"
 

const UserGuest = (props) =>{
  const { navigation } = props;  
  
  return(
    <ScrollView style={styles.viewbody} centerContent = {true}> 
      <Image 
        source ={require("../../../assets/img/crossfit_Proyecto_portada.jpg")}
        style={styles.image}
        resizeMethod = "scale"
      />
      <Text style={styles.title}>
        Gestion de Wods 
      </Text>
      <Text style={ styles.description}>
        App donde podras ver tus avanses Wods a wods... 
      </Text>
      <View style = {styles.viewbtn}>
        <Button 
          buttonStyle = {styles.btn}
          containerStyle = {styles.containerBtn}
          title = "ver tu perfil"
          onPress ={()=> navigation.navigate("Login")}
        />
      </View>
    </ScrollView>
  );
}

export default withNavigation(UserGuest)

const styles = StyleSheet.create({
  viewbody:{
    marginLeft: 30,
    marginRight: 30,
  },
  image:{
    height: 300,
    width:"100%",
    marginBottom: 40,
  },
  title:{
    fontWeight: "bold",
    fontSize: 19,
    marginBottom: 10,
    textAlign: "center",
  },
  description:{
    textAlign : "center",
    marginBottom : 20,
  },
  viewbtn:{
    flex:1,
    alignItems: "center",
  },
  btn:{
    backgroundColor:"#00a680" 
  },
  containerBtn:{
    width: "70%",
  }

})