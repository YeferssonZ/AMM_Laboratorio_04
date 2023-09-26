import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import MusicPlayer from './MusicPlayer';
import Album from './Album';
import Carpetas from './Carpetas';

const Drawer = createDrawerNavigator();

const DrawerNavigation = () => {
  return (
    <Drawer.Navigator initialRouteName="MusicPlayer">
      <Drawer.Screen name="Music Player" component={MusicPlayer} />
          <Drawer.Screen name="Album" component={Album} />
          <Drawer.Screen name="Carpetas" component={Carpetas} />
    </Drawer.Navigator>
  );
}

export default DrawerNavigation;
