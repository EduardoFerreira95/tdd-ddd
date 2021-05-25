import React from 'react';
import {Text, View} from 'react-native';

const App: React.FC = () => {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
        backgroundColor: '#323232',
        alignItems: 'center',
      }}>
      <Text style={{color: '#ff0', fontSize: 36}}>TDD - DDD</Text>
    </View>
  );
};

export default App;
