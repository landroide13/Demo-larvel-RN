import 'react-native-gesture-handler';

import React, { useState, useEffect } from 'react';
import { Text, View } from 'react-native';
import { useFonts, Lato_100Thin, Lato_400Regular, Lato_700Bold } from '@expo-google-fonts/lato';
import AppLoading from 'expo-app-loading';
// import * as SplashScreen from 'expo-splash-screen';
import { Asset } from 'expo-asset';
import EStyleSheet from 'react-native-extended-stylesheet';
import { ActivityLoader } from './src/components/Shared';
import Constants  from 'expo-constants';
import AppNavigation from './src/navigations/AppNavigation';
require('./src/themes')
import { RootSiblingParent } from 'react-native-root-siblings'; 
import { AuthProvider } from './src/providers/AuthProvider';


export default function App({ name }) {

  let [fontsLoaded] = useFonts({
    Lato_100Thin, Lato_400Regular, Lato_700Bold
  });

  const [ready, setReady] = useState(false);

  if(!ready || !fontsLoaded){
    return(
      <AppLoading 
        startAsync={_cacheResourceAsync}
        onFinish={() => setReady(true)} 
        onError={console.warn}
        />
    )
  }

  return (
   <RootSiblingParent>
     <AuthProvider />
   </RootSiblingParent>
  );
  
}

App.defaultProps = {
  name: Constants.expoConfig.name
}

const _cacheResourceAsync = () => {
  const images = [
    require('./assets/icon.png')
  ]

  const cacheImages = images.map(image => {
    return Asset.fromModule(image).downloadAsync();
  })

  return Promise.all(cacheImages);
}

const styles = EStyleSheet.create({
  container:{
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '$primary'
  },
  text:{
    fontSize: '$font28',
    color: '$white',
    fontFamily: '$400Regular'
  },
})
