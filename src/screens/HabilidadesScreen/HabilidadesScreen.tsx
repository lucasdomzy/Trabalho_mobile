import React from 'react';
import { View, Text, Image } from 'react-native';
import styles from './styles';

const skills = [
  { name: 'JavaScript', level: 2 },
  { name: 'React Native', level: 4 },
  { name: 'Node.js', level: 2 },
  { name: 'Java', level: 4 },
  { name: 'PHP', level: 3 },
];

const HabilidadesScreen: React.FC = () => {
  return (
    <View style={styles.container}>
      <Image source={require('../../../assets/images/minha_imagem.jpg')} style={styles.profileImage} />
      <Text style={{fontFamily: 'font', fontSize:48}}>Conhecimentos</Text>
      {skills.map((skill) => (
        <View key={skill.name} style={{ marginVertical: 10 }}>
          <Text style={{fontFamily: 'font', fontSize:26}}>{skill.name}: {'⭐'.repeat(skill.level)}{'☆'.repeat(5 - skill.level)}</Text>
        </View>
      ))}
    </View>
  );
};

export default HabilidadesScreen;