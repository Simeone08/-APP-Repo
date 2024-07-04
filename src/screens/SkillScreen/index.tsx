import React from 'react';
import { View, Text, Image, ScrollView } from 'react-native';
import { PhotoComponent } from '../../components/PhotoComponent';

import { SkillComponents } from '../../components/SkillComponent';

import { styles } from './styles';

export function SkillScreen() { 
  return (
    <View style={styles.container}>

      <PhotoComponent />

      <View>
        <Text style={styles.text}> Werles Simeone </Text>
      </View>

      <View  style={styles.containerList}>
        <ScrollView>
          <SkillComponents title='HTML' rating={4}/>
          <SkillComponents title='CSS' rating={4}/>
          <SkillComponents title='Javascript' rating={4}/>
          <SkillComponents title='React' rating={4}/>
          <SkillComponents title='React Native' rating={4}/>
          <SkillComponents title='Typescript' rating={3}/>
          <SkillComponents title='NodeJS' rating={2}/>
          <SkillComponents title='MySQL' rating={2}/>
          <SkillComponents title='Oracle' rating={2}/>
          <SkillComponents title='Kotlin' rating={3}/>
        </ScrollView>
      </View>
    </View>
  );
}