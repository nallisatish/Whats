import React from 'react';

import { NavigationContainer } from '@react-navigation/native';
import MainNavigation from './Screens/navigation/MainNavigation';

function App(){
 
  return (
    <NavigationContainer>
      <MainNavigation/>
    </NavigationContainer>
    
  );
}
export default App;
