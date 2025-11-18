import { StyleSheet, ScrollView, View } from 'react-native';
import { ThemedText } from '@/components/themed-text';
import { ThemedView } from '@/components/themed-view';

export default function ProjectsScreen() {
  return (
    <ThemedView style={styles.container}>
      <ThemedText type="title" style={styles.title}>Meus Projetos</ThemedText>
      <ScrollView contentContainerStyle={styles.projectsContainer}>
        {/* Exemplo de projeto */}
        <View style={styles.projectCard}>
          <ThemedText type="subtitle" style={styles.projectTitle}>App E-Commerce </ThemedText>
          <ThemedText style={styles.projectDescription}>
            Aplicativo desenvolvidos com o intuito de ajudar microempresas com seus negócios e terem mais auxílios. Este projeto foi desenvolvido usando React Native e Expo.
          </ThemedText>
        </View>
        <View style={styles.projectCard}>
          <ThemedText type="subtitle" style={styles.projectTitle}>App lista de compras</ThemedText>
          <ThemedText style={styles.projectDescription}>
            É um aplicativo desenvolvido para listar e organizar melhor suas compras podendo editar, apagar e ter uma organização melhor de suas compras. Este projeto utiliza Node.js e Express.
          </ThemedText>
        </View>
        {/* Adicione mais projetos aqui */}
      </ScrollView>
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
    padding: 20,
  },
  title: {
    color: 'white',
    fontSize: 24,
    marginBottom: 20,
    textAlign: 'center',
  },
  projectsContainer: {
    alignItems: 'center',
  },
  projectCard: {
    backgroundColor: '#1E1E1E',
    padding: 15,
    marginVertical: 10,
    borderRadius: 8,
    width: '100%',
  },
  projectTitle: {
    color: '#FFFFFF',
    fontSize: 18,
    marginBottom: 5,
  },
  projectDescription: {
    color: '#AAAAAA',
    fontSize: 14,
  },
});