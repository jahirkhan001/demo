import React from 'react';
import {Text, View} from 'react-native';
import Routes from './src/navigation/Routes';
import Header from './src/Components/Header';

const App = () => {
  return (
    <View
      style={{
        flex: 1,
       
      }}>
        <Routes/>
        {/* <Header/> */}
      
    </View>
  );
};

export default App;
