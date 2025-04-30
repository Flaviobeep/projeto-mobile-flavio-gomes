import { Image, StyleSheet, Platform } from 'react-native';

import { HelloWave } from '@/components/HelloWave';
import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';

export default function HomeScreen() {
  return (
    <ParallaxScrollView
      headerBackgroundColor={{ light: '#fe5000', dark: '#1D3D47' }}
      headerImage={
        <Image
          source={require('@/assets/images/favicon.png')}
          style={styles.reactLogo}
        />
      }>
      <ThemedView style={styles.titleContainer}>
        <ThemedText type="title">Bem-Vindo Mateus</ThemedText>
      </ThemedView>
      <ThemedView style={styles.stepContainer}>
        <ThemedText type="subtitle">Conta</ThemedText>
        <ThemedText>
        R$: 2500,00{' '}
        </ThemedText>
      </ThemedView>
      <ThemedView style={styles.stepContainer}>
        <ThemedText type="subtitle">Boletos Pendentes</ThemedText>
        <ThemedText>
        Copel: Conta de Luz | Vencimento: 30/04/2025 | Valor: R$ 580,90
        </ThemedText>
        <ThemedText>
        Spotfy: Plano Premium Mensal | Vencimento: 01/05/2025 | Valor: R$ 21,90
        </ThemedText>
      </ThemedView>
      <ThemedView style={styles.stepContainer}>
        <ThemedText type="subtitle"></ThemedText>
      </ThemedView>
    </ParallaxScrollView>
  );
}

const styles = StyleSheet.create({
  titleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  stepContainer: {
    gap: 7,
    marginBottom: 8,
  },
  reactLogo: {
    height: 150,
    width: 150,
    bottom: -70,
    left: 10,
    position: 'margin top',
  },
});
