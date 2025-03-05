import { Stack, Tabs } from 'expo-router';
import React from 'react';
import { Platform } from 'react-native';
import { HapticTab } from '@/components/premade-comps/HapticTab';
import { IconSymbol } from '@/components/ui/IconSymbol';
import TabBarBackground from '@/components/ui/TabBarBackground';
import { useAuth } from '@/context/AuthContext';


export default function TabLayout() {

  const { loggedIn } = useAuth();

  return (
      <Tabs
        screenOptions={{
          tabBarActiveTintColor: "#fff",
          tabBarInactiveTintColor: "#000",
          tabBarActiveBackgroundColor: "#00bf63",
          tabBarInactiveBackgroundColor: "#00bf63",
          headerShown: false,
          tabBarButton: HapticTab,
          tabBarBackground: TabBarBackground,
          tabBarStyle: {
            position: 'absolute',
            backgroundColor: "#00bf63",
            borderTopWidth: 0, // Elimina la línea superior del Tab Bar
            height: 60, // Ajusta la altura para que se vea bien
            paddingBottom: 0, // Elimina margen extra
          },
        }}>
        <Tabs.Screen
          name="index"
          options={{
            title: 'Inicio',
            tabBarIcon: ({ color }) => <IconSymbol size={28} name="house.fill" color={color} />,
          }}
        />
        <Tabs.Screen
        name="profile"
          options={{
            href: (loggedIn ? '/profile' : null),
            title: 'Perfil',
            tabBarIcon: ({ color }) => <IconSymbol size={28} name="person.fill" color={color} />,
          }}
        />
      </Tabs>
    );
}
