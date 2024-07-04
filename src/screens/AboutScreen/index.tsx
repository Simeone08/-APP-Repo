import React from 'react';
import { View, Text } from 'react-native';
import { PhotoComponent } from '../../components/PhotoComponent';

import { styles } from './styles';

export function AboutScreen() {
  return (
    <View style={styles.container}>

      <PhotoComponent />

      <View>
        <Text style={styles.text}>Werles Simeone</Text>
      </View>

      <View>
        <Text style={{textAlign: 'justify', height: 400, width: 380, fontSize: 18 }}>
          Sou um entusiasta da tecnologia, com formações técnicas em desenvolvimento móvel e
          atualmente cursando Análise e desenvolvimento de sistemas. Minha trajetória profissional
          tem sido marcada pela atuação como Desenvolvedor Mobile, onde aplico minha especialização 
          em React Native para superar desafios e criar experiências de usuário excepcionais. 
          Nesse meio tempo, adquiri habilidades abrangentes em várias tecnologias e ferramentas essenciais
          para o desenvolvimento móvel.
        </Text>
      </View>
    </View>
  );
}