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
        <ThemedText type="subtitle">Vida e morte das estrelas</ThemedText>
        <ThemedText>
          <h4>As estrelas se formam, amadurecem e deixam de existir como a maioria dos corpos celestes do Universo. O ciclo de vida de uma estrela pode ter duração de milhões ou bilhões de anos. Uma característica que todas elas apresentam, no entanto, é o fato de a sua fase madura corresponder a cerca de 90% de todo esse ciclo.</h4>
          <h4>A maneira como uma estrela evolui até a sua morte varia de acordo com a massa, diretamente relacionada com a presença de gás combustível em sua estrutura para a continuidade das reações químicas do núcleo. Quando essas reações consistem na fusão do hidrogênio para a composição do hélio, caracteriza-se esses astros como estrelas de sequência principal. Nesse caso, o hidrogênio vai sendo consumido até se esgotar, fazendo com que o núcleo colapse e a parte externa da estrela se expanda até que ela se torne uma gigante vermelha.</h4>
          <h4>A partir de então, as etapas que seguem dependem diretamente da massa da estrela. Nas estrelas medianas e pouco massivas, a atividade no núcleo continuará, porém dando origem a átomos de carbono originários da fusão do hélio. Quando este chega ao fim, toda a massa da estrela dá origem a uma nebulosa planetária. O núcleo, por sua vez, origina uma anã branca.</h4>
          <h4>No caso das estrelas massivas, que apresentam pelo menos sete vezes a massa do Sol, ocorre a formação das supergigantes vermelhas. Seu núcleo dá início a reações que resultam na formação de elementos como o ferro, cuja produção demanda uma enorme quantidade de energia. Em decorrência disso, a estrela retrai como reação da própria gravidade e, logo em seguida, se expande de maneira violenta por meio de uma explosão chamada de supernova.</h4>
          <h4>A maior parte dos seus materiais fica no espaço, mas cerca de 25% darão origem a uma estrela de nêutrons ou a um buraco negro, o que depende da massa propriamente dita. Originam buracos negros somente as estrelas supermassivas.</h4>
        </ThemedText>
      </ThemedView>
      <ThemedView style={styles.stepContainer}>
        <ThemedText type="subtitle">Qual é o número de estrelas do céu?</ThemedText>
        <ThemedText>
          <h4>Apesar de parecer simples, essa é uma pergunta extremamente difícil de responder, simplesmente por que não é possível contar um número tão grande de forma direta. Estima-se, entretanto, que existam pelo menos 1010 galáxias no Universo observável, que podem conter alguns bilhões de estrelas.</h4>
          <h4>Em nossa galáxia, a via láctea, e também em nossa vizinha mais próxima, a galáxia de Andrômeda, por exemplo, existem pelo menos 100 bilhões de estrelas, em razão disso, as estimativas dos astrônomos indicam que devam existir pelo menos 1021 estrelas em todo o Universo.</h4>
          <h4>Apesar do enorme número de estrelas, uma ínfima parte delas é visível da Terra a olho nu. Daqui, sem o auxílio de qualquer instrumento óptico, só é possível enxergar cerca de 10.000 estrelas.</h4>
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
