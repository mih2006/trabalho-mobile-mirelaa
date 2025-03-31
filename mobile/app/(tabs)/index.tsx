import { Image, StyleSheet, Platform } from 'react-native';

import { HelloWave } from '@/components/HelloWave';
import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';

export default function HomeScreen() {
  return (
    <ParallaxScrollView
      headerBackgroundColor={{ light: '#A1CEDC', dark: '#1D3D47' }}
      headerImage={
        <Image
          source={require('@/assets/images/partial-react-logo.png')}
          style={styles.reactLogo}
        />
      }>
      <ThemedView style={styles.titleContainer}>
        <ThemedText type="title">Seja muito bem-vindo, venha conhecer um poco sobre as estrelas!</ThemedText>
        <HelloWave />
      </ThemedView>
      <ThemedView style={styles.stepContainer}>
        <ThemedText type="subtitle">O que são as estrelas?</ThemedText>
        <ThemedText>
          <ThemedText type="defaultSemiBold"></ThemedText>{' '}
              <h4>As estrelas são corpos celestes que emitem luz e calor devido a reações nucleares que ocorrem em seus núcleos. Elas são fundamentais para a estrutura e evolução do universo, desempenhando um papel crucial na formação de elementos químicos e na criação de condições que podem suportar a vida. Neste texto, exploraremos a definição, a composição, a estrutura, os tipos, o ciclo de vida e a importância das estrelas.</h4>          <ThemedText type="defaultSemiBold">
            {Platform.select({
              ios: 'cmd + d',
              android: 'cmd + m',
              web: ''
            })}
          </ThemedText>{' '}
        </ThemedText>
      </ThemedView>
      <ThemedView style={styles.stepContainer}>
        <ThemedText type="subtitle">Formação das estrelas</ThemedText>
        <ThemedText>
        <h4>A formação das estrelas é um processo que ocorre em várias etapas ao longo de milhões de anos. Tudo começa em nuvens moleculares, que são aglomerados densos de gás e poeira, principalmente hidrogênio e hélio. Quando uma parte dessas nuvens se torna suficientemente densa, a gravidade faz com que ela colapse, formando uma protostar, que é uma estrela em formação.</h4>
        <h4>Durante a fase de protostar, a temperatura e a pressão no núcleo aumentam até que a fusão nuclear comece, transformando hidrogênio em hélio e liberando energia. Essa transição marca a entrada da estrela na fase de sequência principal, onde permanece por bilhões de anos, equilibrando a pressão da radiação gerada pela fusão com a força gravitacional que tenta colapsá-la.</h4>
        <h4>Estrelas de baixa massa, como o Sol, eventualmente se tornam gigantes vermelhas e, em seguida, anãs brancas. Estrelas de alta massa podem explodir em supernovas, dispersando elementos pesados no espaço. Esses elementos enriquecem o meio interestelar, permitindo a formação de novas estrelas e sistemas planetários, criando um ciclo contínuo de nascimento e morte estelar que molda a evolução do universo. Assim, as estrelas não apenas iluminam o cosmos, mas também são fundamentais para a criação de novos sistemas e a química do universo.</h4>
        </ThemedText>
      </ThemedView>
      <ThemedView style={styles.stepContainer}>
        <ThemedText type="subtitle">Step 3: Get a fresh start</ThemedText>
        <ThemedText>
          When you're ready, run{' '}
          <ThemedText type="defaultSemiBold">npm run reset-project</ThemedText> to get a fresh{' '}
          <ThemedText type="defaultSemiBold">app</ThemedText> directory. This will move the current{' '}
          <ThemedText type="defaultSemiBold">app</ThemedText> to{' '}
          <ThemedText type="defaultSemiBold">app-example</ThemedText>.
        </ThemedText>
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
    gap: 8,
    marginBottom: 8,
  },
  reactLogo: {
    height: 178,
    width: 290,
    bottom: 0,
    left: 0,
    position: 'absolute',
  },
});
