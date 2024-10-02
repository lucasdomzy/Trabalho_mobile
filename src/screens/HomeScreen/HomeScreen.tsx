import React from 'react';
import { View, Text, Image } from 'react-native';
import CustomButton from '../../components/CustomButton';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from '../../navigation/StackNavigator';
import styles from './styles';

type HomeScreenNavigationProp = StackNavigationProp<RootStackParamList, 'Home'>;


interface HomeScreenProps {
  navigation: HomeScreenNavigationProp;
}

const HomeScreen: React.FC<HomeScreenProps> = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Image source={require('../../../assets/images/minha_imagem.jpg')} style={styles.profileImage} />
      <Text style={{fontFamily: 'font', fontSize:48}}>Lucas Domingues</Text>
      <CustomButton
        title="Meus Contatos"
        backgroundColor="black"
        onPress={() => navigation.navigate('Contatos')}
      />
      <CustomButton
        title="Meus Niveis de Sabedoria"
        backgroundColor="black"
        onPress={() => navigation.navigate('Habilidades')}
      />
    </View>
  );
};

export default HomeScreen;