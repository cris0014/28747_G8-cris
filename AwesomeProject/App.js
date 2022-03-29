import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.titulo}> お前がもう死んでいる</Text>
      <Text style={styles.titulo}>ん。。。なに？！？！？ </Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F7D040',
    alignItems: 'center',
    justifyContent: 'center',
  },
  titulo:{
    fontSize: 60,
    color: "#900C3F",
    fontWeight: 'bold',
    marginBottom: 30,
    
  }
});
