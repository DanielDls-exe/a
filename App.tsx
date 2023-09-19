import React from 'react';
import { View, StatusBar } from 'react-native'; // Importa StatusBar desde react-native
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';
import HomeScreen from './screens/Home';
import RecipesScreen from './screens/Recipe';
import ShoppingListScreen from './screens/Shoping';
import MenuScreen from './screens/Menu';
import SettingsScreen from './screens/Settings';
import RecipesDetails from './screens/RecipeDetails';
import { createStackNavigator } from '@react-navigation/stack';

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

const tabBarIcons = {
  Home: 'home',
  Recipes: 'book',
  'Shopping List': 'cart',
  Menu: 'menu',
  Settings: 'settings',
};

export default function App() {
  return (
    <NavigationContainer>
      <View style={{ flex: 1, backgroundColor: 'white' }}>
        <StatusBar barStyle="dark-content" backgroundColor="white" />
        <Tab.Navigator
          screenOptions={({ route }) => ({
            tabBarIcon: ({ focused, color, size }) => {
              const iconName = tabBarIcons[route.name] || 'help';
              return <Ionicons name={focused ? iconName : `${iconName}-outline`} size={size} color={color} />;
            },
          })}
          tabBarOptions={{
            activeTintColor: 'tomato',
            inactiveTintColor: 'gray',
          }}
        >
          <Tab.Screen name="Home" component={HomeScreen} />
          {/* Agrega la navegación en Stack para la pestaña "Recipes" */}
          <Tab.Screen name="Recipes" options={{ title: 'Recipes' }}>
            {() => (
              <Stack.Navigator>
                <Stack.Screen name="Recipes" component={RecipesScreen} />
                <Stack.Screen name="RecipesDetails" component={RecipesDetails} />
              </Stack.Navigator>
            )}
          </Tab.Screen>
          <Tab.Screen name="Shopping List" component={ShoppingListScreen} />
          <Tab.Screen name="Menu" component={MenuScreen} />
          <Tab.Screen name="Settings" component={SettingsScreen} />
        </Tab.Navigator>
      </View>
    </NavigationContainer>
  );
}