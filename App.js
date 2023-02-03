import {createMaterialTopTabNavigator} from "@react-navigation/material-top-tabs";
import {NavigationContainer} from "@react-navigation/native";
import {createNativeStackNavigator} from "@react-navigation/native-stack";
import {SafeAreaView} from "react-native";
import MovieDetailsScreen from "./src/screens/MovieDetailsScreen";
import MoviesScreen from "./src/screens/MoviesScreen";
import SearchScreen from "./src/screens/SearchScreen";
import TVShowsScreen from "./src/screens/TVShowsScreen";

const Tab = createMaterialTopTabNavigator();
const Stack = createNativeStackNavigator();

const Home = () => {
    return (
        <Tab.Navigator>
            <Tab.Screen name={"Movies"} component={MoviesScreen}/>
            <Tab.Screen name={"Search Results"} component={SearchScreen}/>
            <Tab.Screen name={"TV Shows"} component={TVShowsScreen}/>
        </Tab.Navigator>
    );
}

const App = () => {
  return (
      <SafeAreaView style={{flex: 1}}>
          <NavigationContainer>
              <Stack.Navigator>
                  <Stack.Screen name="Movies App" component={Home} />
                  <Stack.Screen name={"Movie Details"} component={MovieDetailsScreen}/>
              </Stack.Navigator>
          </NavigationContainer>
      </SafeAreaView>
  );

}

export default App;
