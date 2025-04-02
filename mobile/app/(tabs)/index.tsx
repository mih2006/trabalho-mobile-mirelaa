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
        <ThemedText type="title">Seja bem-vindo, vamos falar um pouco sobre as estrelas!</ThemedText>
        <HelloWave />
      </ThemedView>
      <ThemedView style={styles.stepContainer}>
        <ThemedText type="subtitle">O que são as estrelas?</ThemedText>
        <ThemedText>
          <ThemedText type="defaultSemiBold"></ThemedText>{' '}
              <h4>Estrelas são corpos celestes formados por gases, como hélio e hidrogênio, e poeira, com a presença de um núcleo denso no interior do qual acontecem as reações de fusão que resultam na liberação de energia. As estrelas se formam nas nebulosas e podem ter um tempo de vida de milhões a bilhões de anos, o que varia em conformidade com a sua massa. É difícil estimar quantas estrelas existem hoje no nosso Universo, mas alguns astrônomos indicam que o número ultrapassa os 20 dígitos.</h4>    
                <ThemedText type="defaultSemiBold">
            {Platform.select({
              ios: 'cmd + d',
              android: 'cmd + m',
              web: ''
            })}
          </ThemedText>{' '}
        </ThemedText>
      </ThemedView>
      <ThemedView style={styles.stepContainer}>
        <ThemedText type="subtitle">Criação das etrelas</ThemedText>
        <ThemedText>
        <h4>As estrelas formam-se pela condensação de gases que se aglutinam pela atração gravitacional. As grandes nebulosas, por exemplo, são “berçários” de estrelas, uma vez que, em seu interior, grandes nuvens moleculares dão origem a novas estrelas. Quando os gases responsáveis pela formação estelar aproximam-se, a velocidade deles aumenta, impulsionada pela gravidade local, bem como sua densidade e temperatura.</h4>
        <h4>Durante um período, que pode levar até 10 milhões de anos, essas protoestrelas (estrelas em estágio inicial de formação) são compactadas por suas próprias gravidades até que a pressão e temperatura em seu núcleo sejam suficientes para que os átomos de hidrogênio fundam-se, produzindo núcleos de hélio. As estrelas que extraem a sua energia da fusão dos átomos de hidrogênio são chamadas de estrelas de sequência principal, esse tipo de estrela corresponde a cerca de 90% de todas as estrelas do Universo.</h4>
        <h4>A partir do momento em que as estrelas tornam-se capazes de realizar fusões termonucleares, o seu combustível é consumido, até que a estrela evolua para o seu estágio final de vida. As possibilidades são muitas: de acordo com a massa da estrela e o seu raio, é possível estimar como será o seu futuro. Essas grandezas estelares, como a massa e o raio das estrelas, são comumente medidas em função da massa solar (M☉) e raio solar (R☉).</h4>
        </ThemedText>
      </ThemedView>
      <ThemedView style={styles.stepContainer}>
        <ThemedText type="subtitle">Step 3: Get a fresh start</ThemedText>
        <ThemedText>
          <h4></h4>
          <h4></h4>
          <h4></h4>
        </ThemedText>
      </ThemedView>
      <ThemedView style={styles.stepContainer}>
        <ThemedText type="subtitle">Step 3: Get a fresh start</ThemedText>
        <ThemedText>
          <h4></h4>
          <h4></h4>
          <h4></h4>
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
