import React from 'react';
import { View, Text, Image } from 'react-native';
import { AntDesign } from '@expo/vector-icons';

import { styles } from './styles';

export function SkillScreen() {
  return (
    <View style={styles.container}>

      <View>
        <Image 
          source={{uri:'https://github.com/simeone08.png'}}
          style={{ width: 150, height: 150, borderRadius: 150 }}
        />
      </View>

      <View>
        <Text>Werles Simeone</Text>
      </View>

      <View>
        <AntDesign 
          name='star'
          size={32}
          color={'yellow'}
        />
      </View>
    </View>
  );
}