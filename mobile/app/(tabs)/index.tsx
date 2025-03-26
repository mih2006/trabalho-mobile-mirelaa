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
        <ThemedText type="subtitle"><h2>O que são as estrelas?</h2></ThemedText>
        <ThemedText>
          <ThemedText type="defaultSemiBold"> <h4>As Estrelas são corpos celestes com luz própria. Elas são, na verdade, esferas gigantes compostas de gases que produzem reações nucleares de fusão, mas, graças à gravidade, podem se manter vivas (sem se explodir) por trilhões de anos.</h4>
            <h4>Assim, além de luz, elas emitem energia na forma de calor, que se propaga na forma de radiação pelo espaço.</h4>
            <h4>Só na nossa galáxia — a Via-Láctea — as estimativas apontam entre cem e quatrocentos bilhões de estrelas. O Sol, única estrela em nosso sistema planetário, é uma delas.</h4>
          </ThemedText>
            {' '}
          <ThemedText type="defaultSemiBold">
            {Platform.select({
              ios: 'cmd + d',
              android: 'cmd + m',
              web: ''
            })}
          </ThemedText>{' '}
          <h2>Como as estrelas são criadas?</h2>
        </ThemedText>
      </ThemedView>
      <ThemedView style={styles.stepContainer}>
        <ThemedText>
         <h4>As estrelas formam-se pela condensação de gases que se aglutinam pela atração gravitacional. As grandes nebulosas, por exemplo, são “berçários” de estrelas, uma vez que, em seu interior, grandes nuvens moleculares dão origem a novas estrelas. Quando os gases responsáveis pela formação estelar aproximam-se, a velocidade deles aumenta, impulsionada pela gravidade local, bem como sua densidade e temperatura.</h4>
         <h4>Durante um período, que pode levar até 10 milhões de anos, essas protoestrelas (estrelas em estágio inicial de formação) são compactadas por suas próprias gravidades até que a pressão e temperatura em seu núcleo sejam suficientes para que os átomos de hidrogênio fundam-se, produzindo núcleos de hélio. As estrelas que extraem a sua energia da fusão dos átomos de hidrogênio são chamadas de estrelas de sequência principal, esse tipo de estrela corresponde a cerca de 90% de todas as estrelas do Universo.</h4>
         <h4>A partir do momento em que as estrelas tornam-se capazes de realizar fusões termonucleares, o seu combustível é consumido, até que a estrela evolua para o seu estágio final de vida. As possibilidades são muitas: de acordo com a massa da estrela e o seu raio, é possível estimar como será o seu futuro. Essas grandezas estelares, como a massa e o raio das estrelas, são comumente medidas em função da massa solar (M☉) e raio solar (R☉).</h4>
        </ThemedText>
      </ThemedView>
      <ThemedView style={styles.stepContainer}>
        <ThemedText type="subtitle">Step 3: Get a fresh start</ThemedText>
        <ThemedText>
          When you're ready, run{' '}
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
