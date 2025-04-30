import { StyleSheet, Image, Platform } from 'react-native';

import { Collapsible } from '@/components/Collapsible';
import { ExternalLink } from '@/components/ExternalLink';
import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import { IconSymbol } from '@/components/ui/IconSymbol';

export default function TabTwoScreen() {
  return (
    <ParallaxScrollView
      headerBackgroundColor={{ light: '#fe5000', dark: '#353636' }}
      headerImage={
        <Image
        source={require('@/assets/images/icone-cartão.png')}
          style={styles.headerImage}
        />
      }>
      <ThemedView style={styles.titleContainer}>
        <ThemedText type="title">Meus cartões</ThemedText>
      </ThemedView>
      <ThemedText></ThemedText>
      <Collapsible title="Cartão de Débito Visa">
       <ul>
        <ThemedText>
        <li>Titular do Cartão: Mateus{' '}</li>
        </ThemedText>
        <ThemedText>
        <li>Saldo Disponível: R$: 2500,00</li>
        </ThemedText>
        <ThemedText>
       <li>Último Pagamento Realizado: Casa China 22/04/2025 13:50pm</li>
        </ThemedText>
        </ul>
      </Collapsible>
      <Collapsible title="Cartão de Crédito Bradesco">
      <ul>
        <ThemedText>
        <li>Titular do cartão: Mateus{' '}</li>
        </ThemedText>
        <ThemedText>
        <li>Fatura: R$: 5000,00</li>
        </ThemedText>
        <ThemedText>
         <li>Limite de Crédito: R$: 1.500,00{' '}</li>
        </ThemedText>
        <ThemedText>
        <li>Último Pagamento Realizado: Mercado Livre.com 01/04/2025 18:00</li>
        </ThemedText>
        </ul>
      </Collapsible>
      <ThemedText type="title">Pix</ThemedText>
      <Collapsible title="Minha chave Pix">
      <ul>
        <ThemedText>
        <li>Chave Pix: 029.222.455-41</li>
        </ThemedText>
        <ThemedText>
       <li><button>Realizar Pix:</button></li>
        </ThemedText>
        <ThemedText>
       <li><button>Receber Pix:</button></li>
        </ThemedText>
        </ul>
      </Collapsible>
      <Collapsible title="Transações Recentes">
      <ul>
      <ThemedText>
        <li>Pix Realizado: 12/04/2025 15:40 Valor: R$100,00 para Pedro</li>
        </ThemedText>
        <ThemedText>
        <li>Pix Recebido: 20/03/2025 00:30 Valor:R$: 10,00 de Rafael</li>
        </ThemedText>
        </ul>
      </Collapsible>
    </ParallaxScrollView>
  );
}

const styles = StyleSheet.create({
  headerImage: {
    color: '#fe5000',
    bottom: -70,
    left: -10,
    position: 'margin top',
  },
  titleContainer: {
    flexDirection: 'row',
    gap: 8,
  },
});
