// src/routes/index.tsx
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Listagem  from '../screens/Listagem';
import Cadastrar from '../screens/Cadastrar';
import Resumo    from '../screens/Resumo';
import { Ionicons } from '@expo/vector-icons';
import { theme } from '../global/theme';

const Tab = createBottomTabNavigator();

export function Routes() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={{
          headerShown: false,
          tabBarStyle:   { backgroundColor: theme.colors.primary },
          tabBarActiveTintColor:   theme.colors.secondary,
          tabBarInactiveTintColor: theme.colors.text_light
        }}
      >
        <Tab.Screen
          name="Listagem"
          component={Listagem}
          options={{
            tabBarIcon: ({ color }) => <Ionicons name="list" size={24} color={color}/>
          }}
        />
        <Tab.Screen
          name="Cadastrar"
          component={Cadastrar}
          options={{
            tabBarIcon: ({ color }) => <Ionicons name="add-circle" size={24} color={color}/>
          }}
        />
        <Tab.Screen
          name="Resumo"
          component={Resumo}
          options={{
            tabBarIcon: ({ color }) => <Ionicons name="pie-chart" size={24} color={color}/>
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
