import { Link } from 'expo-router';
import { StyleSheet, TouchableOpacity, View } from 'react-native';

import { ThemedText } from '@/components/themed-text';
import { ThemedView } from '@/components/themed-view';

export default function ModalScreen() {
  return (
    <ThemedView style={styles.container}>
      <ThemedText type="title" style={styles.title}>Victor dos Santos</ThemedText>
      <ThemedText type="subtitle" style={styles.subtitle}>Desenvolvedor de Sistemas em formação</ThemedText>
      
      {/* Seção Sobre Mim */}
      <View style={styles.aboutContainer}>
        <ThemedText type="subtitle" style={styles.aboutTitle}>Sobre Mim</ThemedText>
        <ThemedText style={styles.aboutText}>
          Sou um desenvolvedor de sistemas em formação, apaixonado por tecnologia e programação. 
          Tenho experiência em desenvolvimento web e mobile, utilizando ferramentas como React Native, Expo, e Node.js.
        </ThemedText>
      </View>

      <TouchableOpacity style={styles.button}>
        <Link href="/projetos">
          <ThemedText type="link" style={styles.buttonText}>Clique aqui e veja meus projetos</ThemedText>
        </Link>
      </TouchableOpacity>
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#FFFFFF',
    textAlign: 'center',
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 24,
    color: '#AAAAAA',
    textAlign: 'center',
    marginBottom: 20,
  },
  aboutContainer: {
    marginVertical: 20,
    paddingHorizontal: 10,
  },
  aboutTitle: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#FFFFFF',
    textAlign: 'center',
    marginBottom: 10,
  },
  aboutText: {
    fontSize: 18,
    color: '#AAAAAA',
    textAlign: 'center',
  },
  button: {
    marginTop: 15,
    paddingVertical: 15,
    paddingHorizontal: 20,
    backgroundColor: '#007BFF',
    borderRadius: 5,
  },
  buttonText: {
    fontSize: 20,
    color: '#FFFFFF',
    textAlign: 'center',
  },
});
