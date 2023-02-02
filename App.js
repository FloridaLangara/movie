import {createMaterialTopTabNavigator} from "@react-navigation/material-top-tabs";
import {NavigationContainer} from "@react-navigation/native";
import {SafeAreaView} from "react-native";
import MoviesScreen from "./src/screens/MoviesScreen";
import SearchScreen from "./src/screens/SearchScreen";
import TVShowsScreen from "./src/screens/TVShowsScreen";

const Tab = createMaterialTopTabNavigator();

export default function App() {
  return (
      <SafeAreaView style={{flex: 1}}>
          <NavigationContainer>
            <Tab.Navigator>
              <Tab.Screen name={"Movies"} component={MoviesScreen}/>
                <Tab.Screen name={"Search Results"} component={SearchScreen}/>
                <Tab.Screen name={"TV Shows"} component={TVShowsScreen}/>
            </Tab.Navigator>
          </NavigationContainer>
      </SafeAreaView>
  );
}
