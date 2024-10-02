import React from 'react';
import { View, Text, Image } from 'react-native';
import styles from './styles';

const ContatosScreen: React.FC = () => {
  return (
    <View style={styles.container}>
      <Image source={require('../../../assets/images/minha_imagem.jpg')} style={styles.profileImage} />
      <Text style={{fontFamily: 'font', fontSize:48}}>Meus Contatos</Text>
      <Text style={{fontFamily: 'font', fontSize:36}}>
        LinkedIn: <Text style={{ color: 'blue' }}>Lucas Domingues Silva</Text>
      </Text>
      <Text style={{fontFamily: 'font', fontSize:36}}>
        GitHub: <Text style={{ color: 'blue' }}>lucasdomzy</Text>
      </Text>
      <Text style={{fontFamily: 'font', fontSize:36}}>
        E-mail: <Text style={{ color: 'blue' }}>lucasdom.ds23@gmail.com</Text>
      </Text>
    </View>
  );
};

export default ContatosScreen;