import React,{useState, useEffect} from 'react';
import type {Node} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
  TouchableOpacity
} from 'react-native';

import { LogBox } from 'react-native';




import Jitsi from './Jitsi';



const App  = () => {

  LogBox.ignoreAllLogs();

  const [isJitsi, setJitsi] = useState(false);



  if(isJitsi) {
    return <Jitsi />
  }

  return (
    

        <View style={{ flex: 1, justifyContent: 'center' }} >
           <TouchableOpacity 
            onPress={() => setJitsi(true)}
            style={{ 
              backgroundColor: '#FFFFFF', 
              paddingHorizontal: 10,
              paddingVertical: 20,
              borderWidth: 1,
              borderColor: '#000000',
              marginHorizontal: 40,
              alignItems: 'center', 
            }}>
            <Text>Join Meeting</Text>
          </TouchableOpacity>
        </View>
  );
};

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
});

export default App;
