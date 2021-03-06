import React from "react";
import {createStackNavigator} from "@react-navigation/stack";

import {HomeSubContext, Friend, Chat, EditProfile} from "./screens";

const Stack = createStackNavigator();

const App = () => {
  return (
    <Stack.Navigator initialRouteName="HomeSubContext" headerMode="none">
      <Stack.Screen name="HomeSubContext" component={HomeSubContext} />
      <Stack.Screen name="Friend" component={Friend} />
      <Stack.Screen name="Chat" component={Chat} />
      <Stack.Screen name="EditProfile" component={EditProfile} />
    </Stack.Navigator>
  );
};

export default App;