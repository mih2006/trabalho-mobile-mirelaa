# 🌌 AstroApp – Explorando as Estrelas com a NASA

Este é um aplicativo em **React Native** que conecta você com o universo! Ele exibe a **Imagem do Dia da NASA (APOD)** e traz uma apresentação didática sobre **estrelas, sua formação, ciclo de vida e curiosidades**.

## 📸 Visão Geral

O app utiliza a API pública da NASA para buscar e exibir imagens astronômicas atualizadas diariamente. Além disso, apresenta conteúdos educativos sobre:

- O que são estrelas
- Como elas se formam
- Ciclo de vida e morte estelar
- Estimativas do número de estrelas no universo

## ✨ Funcionalidades

- 🌠 **Imagem do Dia** da NASA em tempo real
- 📖 Explicações detalhadas sobre o universo estelar
- 💡 Interface visual com imagens e texto temático
- 🌗 Suporte ao modo escuro e claro com componentes tematizados

## 🚀 Tecnologias Utilizadas

- [React Native](https://reactnative.dev/)
- [Expo](https://expo.dev/)
- [Axios](https://axios-http.com/) para chamadas à API
- Componentes personalizados com suporte a temas:
  - `ThemedText`
  - `ThemedView`
  - `ParallaxScrollView`
  - `HelloWave`

## 🛰️ API da NASA

Utilizamos o endpoint [APOD (Astronomy Picture of the Day)](https://api.nasa.gov/) da NASA, acessado via:

```
GET https://api.nasa.gov/planetary/apod?api_key=YOUR_API_KEY
```

🔐 **Importante:** A chave da API utilizada no projeto (`api_key`) é pública, mas você pode obter sua própria [aqui](https://api.nasa.gov/).

## 🛠️ Instalação

1. Clone o repositório:
   ```bash
   git clone https://github.com/seuusuario/astroapp.git
   cd astroapp
   ```

2. Instale as dependências:
   ```bash
   npm install
   ```

3. Inicie o projeto com o Expo:
   ```bash
   npx expo start
   ```

## 📱 Pré-requisitos

- Node.js
- Expo CLI (`npm install -g expo-cli`)
- Android Studio / Xcode ou dispositivo físico com o app Expo Go

## 📂 Estrutura de Código

```
/components
  ├── HelloWave.tsx
  ├── ParallaxScrollView.tsx
  ├── ThemedText.tsx
  └── ThemedView.tsx

/assets/images
  └── fundo.jpg

/screens
  └── HomeScreen.tsx
```

## 🧠 Aprendizados

Esse projeto foi uma ótima oportunidade para aprender sobre:

- Integração com APIs REST
- Uso de hooks (`useEffect`, `useState`)
- Estilização com `StyleSheet`
- Boas práticas em componentes reutilizáveis e temáticos

## 📄 Licença

Este projeto está sob a licença MIT. Veja o arquivo `LICENSE` para mais detalhes.

---


## ✨ AstroApp – Tipos de Estrelas
Este é um módulo do AstroApp, um aplicativo em React Native voltado para educação astronômica. Nesta tela, o usuário explora diferentes tipos de estrelas por meio de descrições informativas e imagens ilustrativas, organizadas em seções colapsáveis para uma navegação intuitiva.

🌟 Sobre o Projeto
A tela "Tipos de Estrelas" tem como objetivo apresentar, de forma visual e explicativa, as principais classificações de estrelas com base em sua cor, temperatura, massa e idade.

Cada tipo é exibido em um componente colapsável contendo texto descritivo e uma imagem representativa.

🧠 Funcionalidades
🌈 Classificação estelar com base em cor e temperatura

📚 Informações detalhadas sobre os seguintes tipos:

Estrelas Azuis

Anãs Amarelas

Anãs Vermelhas

Gigantes Azuis

Supergigantes Azuis

Anãs Brancas

🔽 Componentes interativos que expandem/recolhem conteúdo

🖼️ Imagens temáticas de cada tipo de estrela

🛠️ Tecnologias Utilizadas
React Native

Expo

Estilização com StyleSheet

Componentes personalizados:

Collapsible

ParallaxScrollView

ThemedView, ThemedText

IconSymbol

ExternalLink

📂 Estrutura de Código
bash
Copiar
Editar
/components
  ├── Collapsible.tsx
  ├── ThemedText.tsx
  ├── ThemedView.tsx
  ├── ParallaxScrollView.tsx
  ├── ExternalLink.tsx
  └── ui/IconSymbol.tsx

/assets/images
  ├── fundo2.jpg
  ├── estrelaazul.jpg
  ├── estrelaamarela.jpg
  ├── estrelavermelha.jpg
  ├── giganteazul.jpg
  ├── superazul.jpg
  └── estrelabranca.jpg

/screens
  └── TabTwoScreen.tsx
🚀 Executando o Projeto
Clone o repositório:

bash
Copiar
Editar
git clone https://github.com/seuusuario/astroapp.git
cd astroapp
Instale as dependências:

bash
Copiar
Editar
npm install
Inicie com o Expo:

bash
Copiar
Editar
npx expo start
Acesse a aba “Tipos de Estrelas” no app para explorar o conteúdo.

---

# 🚀 Navegação com Abas – AstroApp

Este componente define o **layout de navegação por abas** do AstroApp, utilizando o `expo-router`. Ele organiza as telas principais do app em abas inferiores com ícones, feedback tátil (haptic feedback) e aparência personalizada, garantindo uma navegação fluida e elegante para o usuário.

## 📱 Funcionalidade

- 📌 Duas abas principais:
  - **Início**: Tela inicial do app (ícone de estrela)
  - **Descubra**: Tela para explorar conteúdo (ícone de lua)
- 🎨 Personalização com base no tema (claro/escuro)
- 💫 Feedback tátil ao pressionar abas (Haptic)
- 🖼️ Plano de fundo estilizado da barra de abas
- ⚙️ Estilo adaptado para iOS com `position: absolute`

## 🛠️ Tecnologias Utilizadas

- [`expo-router`](https://expo.github.io/router/)
- React Native
- Expo Icons (`AntDesign`, `Octicons`)
- Componentes personalizados:
  - `HapticTab`
  - `TabBarBackground`
  - `IconSymbol`
- Tema dinâmico via `useColorScheme`
- Paleta de cores via `Colors`

## 📂 Estrutura de Arquivos

```
/components
  ├── HapticTab.tsx
  ├── ui/
  │   ├── TabBarBackground.tsx
  │   └── IconSymbol.tsx

/constants
  └── Colors.ts

/hooks
  └── useColorScheme.ts

/app
  ├── index.tsx
  └── explore.tsx

/app/_layout.tsx  ← ESTE ARQUIVO
```

## 📋 Exemplo de Uso

Este layout é aplicado automaticamente pelas rotas definidas via `expo-router`. Ele serve como estrutura base da navegação de abas no app.

## 💡 Dica

Para adicionar uma nova aba:
1. Crie o arquivo de tela no diretório `/app`.
2. Adicione uma nova `<Tabs.Screen />` no componente `TabLayout` com os detalhes da nova tela.

## 🧪 Comando para rodar o app

```bash
npx expo start
```

---

# 🌌 RootLayout – Estrutura Principal do AstroApp

Este componente define a **estrutura raiz do aplicativo** utilizando `expo-router`, controlando temas (claro/escuro), carregamento de fontes, navegação por pilha (Stack) e o comportamento da splash screen.

## 🧩 O que este componente faz?

- Carrega **fontes personalizadas** (`SpaceMono`)
- Gerencia a **splash screen** manualmente para evitar falhas visuais antes do carregamento completo
- Aplica **tema escuro ou claro** automaticamente com base nas preferências do sistema
- Define a navegação por **pilha (Stack)** incluindo:
  - A navegação por abas `"(tabs)"`
  - Uma tela de erro ou rota inexistente `"+not-found"`
- Controla a **barra de status** com o componente `StatusBar`

## 📦 Tecnologias Utilizadas

- [`@react-navigation/native`](https://reactnavigation.org/)
- [`expo-router`](https://expo.github.io/router/)
- [`expo-font`](https://docs.expo.dev/guides/using-custom-fonts/)
- [`expo-splash-screen`](https://docs.expo.dev/versions/latest/sdk/splash-screen/)
- React Native Reanimated (necessária para navegação suave)
- Tema dinâmico com `useColorScheme`

## 📂 Estrutura de Arquivos Relevante

```
/app
  └── _layout.tsx   ← ESTE ARQUIVO (RootLayout)
  └── (tabs)/       ← Abas principais do app
  └── +not-found.tsx← Tela para rota inexistente

/assets
  └── fonts/
      └── SpaceMono-Regular.ttf

/hooks
  └── useColorScheme.ts
```

## 🧠 Comportamento de Carregamento

1. A splash screen é exibida enquanto fontes são carregadas.
2. Após o carregamento completo (`useFonts`), a splash screen é ocultada manualmente com `SplashScreen.hideAsync()`.
3. O layout principal é renderizado com base no tema do sistema operacional.

## 💡 Dicas

- Para adicionar mais telas ao stack, basta criar novos arquivos na pasta `/app` e configurar novas `<Stack.Screen />`.
- Para adicionar mais fontes, utilize `expo-font` como no exemplo atual.

## 📄 Licença

Este projeto está licenciado sob os termos da licença MIT.

---


![Imagem do App](mobile\assets\images\print.png)
![Imagem do App](mobile\assets\images\print2.png)
![Imagem do App](mobile\assets\images\print3.png)
![Imagem do App](mobile\assets\images\print4.png)
![Imagem do App](mobile\assets\images\print5.png)
![Imagem do App](mobile\assets\images\print6.png)
![Imagem do App](mobile\assets\images\print7.png)
![Imagem do App](mobile\assets\images\print8.png)
![Imagem do App](mobile\assets\images\print9.png)
![Imagem do App](mobile\assets\images\print10.png)
