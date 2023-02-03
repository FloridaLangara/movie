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
            <Tab.Screen
                name={"Movies"}
                component={MoviesScreen}
                options={{
                tabBarIndicatorStyle: {backgroundColor: "#2c3e50"},
                tabBarLabelStyle: {
                    fontSize: 11,
                }
            }}/>
            <Tab.Screen
                name={"Search Results"}
                component={SearchScreen}
                options={{
                tabBarIndicatorStyle: {backgroundColor: "#2c3e50"},
                tabBarLabelStyle: {
                    fontSize: 11,
                }
            }}/>
            <Tab.Screen
                name={"TV Shows"}
                component={TVShowsScreen}
                options={{
                tabBarIndicatorStyle: {backgroundColor: "#2c3e50"},
                tabBarLabelStyle: {
                    fontSize: 11,
                }
            }}/>
        </Tab.Navigator>
    );
}

const App = () => {
  return (
      <SafeAreaView style={{flex: 1}}>
          <NavigationContainer>
              <Stack.Navigator
                  screenOptions={{
                    headerBackTitle: "Back to List"
                  }}
              >
                  <Stack.Screen
                      name="Movies App"
                      component={Home}
                      options={{
                          headerStyle: {
                              backgroundColor: '#2c3e50',
                          },
                          headerTintColor: '#fff',
                      }
                  }/>
                  <Stack.Screen
                      name={"Movie Details"}
                      options={{title: ''}}
                      component={MovieDetailsScreen}
                  />
              </Stack.Navigator>
          </NavigationContainer>
      </SafeAreaView>
  );
}

export default App;
