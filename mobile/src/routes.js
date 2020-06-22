import React from 'react';
import { StatusBar } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import IconDot from './components/IconDot';

import Cronograma from './pages/Cronograma';
import Perfil from './pages/Perfil';
import SignUp from './pages/SignUp';
import SignIn from './pages/SignIn';
import Lista from './pages/Lista';
import Checklist from './pages/Checklist';
import Detalhes from './pages/Detalhes';

// import Dashboard from './pages/Dashboard';
// import Profile from './pages/Profile';

const DetalhesStack = createStackNavigator();

function DetalhesStackScreen() {
  return (
    <DetalhesStack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <DetalhesStack.Screen name="Detalhes" component={Detalhes} />
    </DetalhesStack.Navigator>
  );
}

const HomeStack = createStackNavigator();

function HomeStackScreen() {
  return (
    <HomeStack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <HomeStack.Screen name="Home" component={Cronograma} />
      <HomeStack.Screen name="Checklist" component={Checklist} />
    </HomeStack.Navigator>
  );
}

const PerfilStack = createStackNavigator();

function PerfilStackScreen() {
  return (
    <PerfilStack.Navigator>
      options={{
          headerShown: false,
        }}
      <PerfilStack.Screen name="Perfil" component={Perfil}/>
      <PerfilStack.Screen name="SignUp" component={SignUp}/>
      <PerfilStack.Screen name="SignIn" component={SignIn}/>
    </PerfilStack.Navigator>
  );
}

const ListaStack = createStackNavigator();

function ListaStackScreen() {
  return (
    <ListaStack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <ListaStack.Screen name="Lista" component={Lista} />
    </ListaStack.Navigator>
  );
}

const Tab = createBottomTabNavigator();
export default () => (
  <SafeAreaProvider>
    <NavigationContainer>
      <StatusBar hidden barStyle="light-content" backgroundColor="#7159c1" />
      <Tab.Navigator
        tabBarIcon="history"
        tabBarOptions={{
          activeTintColor: '#6d5dcf',
          inactiveTintColor: '#c0c3c4',
          showLabel: false,
          style: {
            borderTopColor: 'transparent',
            elevation: 0,
            backgroundColor: 'none',
          },
        }}
      >
        <Tab.Screen
          name="Home"
          component={HomeStackScreen}
          options={{
            tabBarIcon: ({ focused, color, size }) => (
              <IconDot
                isActive={focused}
                name="home"
                size={size}
                color={color}
              />
            ),
          }}
        />
        <Tab.Screen
          name="Perfil"
          component={PerfilStackScreen}
          options={{
            tabBarIcon: ({ focused, color, size }) => (
              <IconDot
                isActive={focused}
                name="tag"
                size={size}
                color={color}
              />
            ),
          }}
        />
        <Tab.Screen
          name="Lista"
          component={ListaStackScreen}
          options={{
            tabBarIcon: ({ focused, color, size }) => (
              <IconDot
                isActive={focused}
                name="clock"
                size={size}
                color={color}
              />
            ),
          }}
        />
        <Tab.Screen
          name="Search"
          component={DetalhesStackScreen}
          options={{
            tabBarIcon: ({ focused, color, size }) => (
              <IconDot
                isActive={focused}
                name="search"
                size={size}
                color={color}
              />
            ),
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  </SafeAreaProvider>
);
