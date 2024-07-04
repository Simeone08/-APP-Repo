import React from 'react';
import { View, Image } from 'react-native';


export function PhotoComponent() {
  return (
    <View>
        <Image 
          source={{uri:'https://github.com/simeone08.png'}}
          style={{ width: 150, height: 150, borderRadius: 150 }}
        />
    </View>
  );
}