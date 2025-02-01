# Estudos sobre React.js  

Este repositório contém anotações e aprendizados sobre **React.js**, uma das bibliotecas mais populares para o desenvolvimento de interfaces de usuário (UI). O objetivo é registrar o progresso nos estudos e compartilhar conhecimentos sobre boas práticas e ferramentas relacionadas ao ecossistema React.  

---

## 📖 Capítulo 1 - Introdução ao React.js  

Neste capítulo, explorei os fundamentos do **React.js**, entendendo sua origem, propósito e os problemas que ele busca resolver.  

- **Origem do React**: Desenvolvido pelo Facebook, o React foi criado para facilitar o desenvolvimento de UIs dinâmicas e escaláveis, usando o conceito de componentes reutilizáveis.  
- **Principais conceitos abordados**:
  - O que é o React e suas vantagens.
  - Ferramentas e plugins nativos e de terceiros que ampliam as capacidades do React.  

---

## 📦 Capítulo 2 - Instalação de Dependências  

Neste capítulo, aprendi a configurar o ambiente necessário para iniciar projetos com React.js, incluindo a instalação de ferramentas essenciais para o desenvolvimento.  

### 🔧 Dependências Instaladas  

#### **React Router DOM**  
Permite gerenciar rotas e navegação em aplicativos React.  
```bash
npm install react-router-dom
```

#### **ESLint**  
Ferramenta para análise estática de código, ajudando a identificar e corrigir problemas de qualidade e manter boas práticas.  
```bash
npm install eslint --save-dev
```

#### **Prettier**  
Ferramenta para formatação automática de código, garantindo consistência e legibilidade no projeto.  
```bash
npm install --save-dev prettier
```
#### **Tailwind css**
Ferramenta de estilização para ajuda no desenvolvimento.

```bash
npm install tailwindcss postcss autoprefixer
```
**talwind.config.cjs**:

Configuarando o arquivo do talwind para processo interno.
```bash
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};
```

**postcss.config.cjs**

Configurando o arquivo do postcss:
```bash
module.exports = {
  plugins: {
    tailwindcss: {},
    autoprefixer: {},
  },
};
```



### 🛠️ Benefícios  
Essas ferramentas são essenciais para o desenvolvimento de aplicações escaláveis e facilitam a manutenção do código ao longo do tempo.  

---

## 📖 Capítulo 3 - Fundamentos do jsx
Neste capítulo aprendir os fundamentos de `.jsx` onde embora aprendemos a verdadeira perfomance do `.jsx`, como manipulação de estado de dooms com `JavaScript` embora seja mais complexo com o decorrer do desenvolvimento, aprendir lidar com boas práticas em manuseo de dados e suas estruturas.

### 📒 Map e seu poder de escala
`Map` é extremamente utilizando com `.jsx`, quando o assunto é lista de arrays embora seja bem utilizado, tem um certo meio ao desenvolver com `Map`, sempre sendo utilizando antes do retorno do `componets` do `react.js`.

### 📒 Comentários em códigos jsx
Comentários em `.jsx` é extremamente importante para o desenvolvimento do `frontend`, com isso deixa o código mais fácil para dar manutenção. Levando em consideração outros pontos tais como:

- Finalidade ao criar as pastas
- Finalidade ao criar o nome dos arquivos
- Finalidade e clareza no fluxo de dados de entra e saída do `components`

### 📒 Condição e comparação

No decorrer do desenvolvimento é bem normal lidamos com comparação sobre alguma estrutura, neste caso com `react.js` eu me deparei com uma situação bem inovadora, comparação ternária isso é extremamente poderos em certos eventos tais como:

 - Busca de dados em listas
 - Verificação de dados com estruturas utilizando `JavaScript`
 - Checagem condicional em booleanos `True` ou `False`


---



## 🏆 Meus estudos com React.JS
Ao longo deste repositório, irei continuar documentando os capítulos e aprofundando os estudos em React.js, cobrindo tópicos como:
- Introdução ao react.js. ✅
- Instalação de dependências. ✅
- Fundamentos do jsx ✅
- Componentização e props.
- Gerenciamento de estado com redux e context API.
- Efeitos colaterais com userEffect.
- Rotas de navegação com react-route.
- Context API para gerenciamento global de estado.
- Trabalhando com API externa.
- Estilização de componente.
- Testando aplicação com react.
- Desempenho de otimização.
- Boas práticas no desenvolvimento de aplicações React.  

Contribuições e feedbacks são sempre bem-vindos! 🚀  
