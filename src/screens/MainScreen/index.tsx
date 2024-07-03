import React from 'react';
import { Image, Linking, Pressable, Text, View } from 'react-native';

import { AntDesign, MaterialCommunityIcons } from '@expo/vector-icons';
import { styles } from './styles';

export function MainScreen() {
  return (
    <View style={styles.container}>

      <View style={styles.photo}>
        <Image 
          source={{uri:'https://github.com/simeone08.png'}}
          style={{ width: 150, height: 150, borderRadius: 150 }}
        />
      </View>

      <View>
        <Text style={styles.name}>Werles Simeone</Text>
      </View>

      <View style={styles.social}>
        <Pressable
          onPress={() => Linking.openURL('https://github.com/simeone08')}
        > 
          <AntDesign 
            name='github'
            size={40}
          />
        </Pressable>

        <Pressable
          onPress={() => Linking.openURL('https://linkedin.com/in/simeone08')}
        >
          <AntDesign 
            name='linkedin-square'
            size={40}
          />
        </Pressable>

        <Pressable
          onPress={() => Linking.openURL('mailto:simeone878@gmail.com')}
        >
          <MaterialCommunityIcons 
            name='gmail'
            size={45}
          />
        </Pressable>

      </View>
    </View>
  );
}