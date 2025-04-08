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
      headerBackgroundColor={{ light: '#D0D0D0', dark: '#353636' }}
      headerImage={
        <IconSymbol
          size={310}
          color="#808080"
          name="chevron.left.forwardslash.chevron.right"
          style={styles.headerImage}
        />
      }>
      <ThemedView style={styles.titleContainer}>
        <ThemedText type="title">Tipos de estrelas</ThemedText>
      </ThemedView>
      <ThemedText><h4>Existem diversos tipos de estrelas. Essa designação depende de duas coisas: da classificação espectral, que diz respeito à temperatura da estrela e ao tamanho e massa da estrela. A classificação espectral é dada em cores. Em ordem crescente de temperatura, temos as estrelas vermelhas, laranjas, amarelas, amarelas-brancas, brancas, azuis-brancas e azuis.</h4>
        <h4>Essa definição de cores diz respeito ao pico de frequência emitida pela estrela e a relacionada à temperatura de emissão de corpo negro. Como as estrelas produzem quase todas as frequências de radiação simultaneamente, ao olho humano todas parecem-se esbranquiçadas ao serem vistas a olho nu.</h4>
        <h4>Confira alguns dos mais importantes tipos de estrelas que existem:</h4>
      </ThemedText>
      <Collapsible title="Estrelas azuis">
        <ThemedText>
          <ThemedText></ThemedText>
          <h4>São estrelas extremamente quentes, a temperatura de sua superfície pode atingir 30.000 K, são estrelas muito “novas” em comparação com os demais tipos de estrelas. A maioria dessas estrelas foi criada há menos 40 milhões de anos.</h4>
        </ThemedText>
        <Image source={require('@/assets/images/react-logo.png')} style={{ alignSelf: 'center' }} />
        <ThemedText>
        </ThemedText>
      </Collapsible>
      <Collapsible title="Anãs amarelas">
        <ThemedText>
          <ThemedText type="defaultSemiBold">
            <h4>Assim como o Sol, essas estrelas são muito antigas, existindo há bilhões de anos. O futuro dessas estrelas é o de se tornar uma gigante vermelha.</h4>
            </ThemedText> 
        </ThemedText>
        <Image source={require('@/assets/images/react-logo.png')} style={{ alignSelf: 'center' }} />
      </Collapsible>
      <Collapsible title="Anãs vermelhas">
        <ThemedText>
          <ThemedText type="defaultSemiBold">
            <h4> São as estrelas mais comuns, representam cerca de 73% das estrelas do Universo. Seu brilho é fraco, são estrelas pouco massivas.</h4>
            </ThemedText>
          <ThemedText type="defaultSemiBold">
          </ThemedText>
        </ThemedText>
        <Image source={require('@/assets/images/react-logo.png')} style={{ alignSelf: 'center' }} />
      </Collapsible>
      <Collapsible title="Gigantes azuis">
        <ThemedText>
          <ThemedText type="defaultSemiBold">
            <h4>São estrelas de temperaturas superiores a 10.000 K, muito massivas, podendo apresentar até 250 vezes a massa do Sol.</h4>
            </ThemedText>
          <ThemedText style={{ fontFamily: 'SpaceMono' }}>
          </ThemedText>
          <Image source={require('@/assets/images/react-logo.png')} style={{ alignSelf: 'center' }} />
        </ThemedText>
      </Collapsible>
      <Collapsible title="Supergigantes azuis">
        <ThemedText>
        <ThemedText type="defaultSemiBold">
          <h4>são muito massivas e brilhantes, apresentando temperaturas extremamente elevadas, variando entre 10.000 K e 50.000 K, no caso das supergigantes. Estas podem apresentar até 25 vezes a massa do Sol. Pela intensa atividade que ocorre em seu núcleo, são também estrelas muito jovens e com curto ciclo de vida.</h4>
          </ThemedText> 
          </ThemedText>
        <Image source={require('@/assets/images/react-logo.png')} style={{ alignSelf: 'center' }} />
      </Collapsible>
      <Collapsible title="Anãs brancas">
        <ThemedText>
          <ThemedText type="defaultSemiBold">
          <h4>Essas estrelas são formadas pelos núcleos de outras estrelas que ejetaram suas camadas externas, essas estrelas já não produzem mais fusões nucleares e comumente rotacionam em torno de seus eixos com velocidades muito altas.</h4>
            </ThemedText>
          <ThemedText type="defaultSemiBold"></ThemedText>{' '}
        </ThemedText>
        <Image source={require('@/assets/images/react-logo.png')} style={{ alignSelf: 'center' }} />
        {Platform.select({
          ios: (
            <ThemedText>
              The <ThemedText type="defaultSemiBold"></ThemedText>{' '}
            </ThemedText>
          ),
        })}
      </Collapsible>
    </ParallaxScrollView>
  );
}

const styles = StyleSheet.create({
  headerImage: {
    color: '#808080',
    bottom: -90,
    left: -35,
    position: 'absolute',
  },
  titleContainer: {
    flexDirection: 'row',
    gap: 8,
  },
});
