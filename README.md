# GithubApp

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 11.2.7.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.

# Trinity

#### O desafio foi disponibilizado no dia 22/01/2020 às 16:42 e deveria ser entregue no dia 24/01 às 12:00. Devido ao curto tempo, não foi possível completar o desafio tendo em vista que o prazo deveria ter sido de 7 dias.

Primeiramente, queria agradecer a oportunidade de poder ter participado dessa seleção e mostrar um pouco da minha capacidade como um profissional, foi uma experiência nova, cheia de desafios e muito gratificante. Cada tarefa cumprida teve seus obstáculos e toda a tragetória foi muito interessante. Infelizmente não foi possível por em prática tudo que eu queria, tive algumas ideias que iriam tomar muito tempo para implementação e por isso foram deixadas de lado.

**Aqui segue algumas atividades que faltaram concluir:**

1. Não consegui fazer o sistema de rotas atualizar a página automaticamente, para acessar os detalhes do usuário é necessário colocar /app no link
2. Não consegui fazer renderizar os repositórios, apesar de que todos estão no localStorage e podem ser observados no painel de memória a partir de _Inspecionar elemento_ no navegador.
3. O botão de busca só funciona na tela inicial, apesar de ter sido feito também na tela de detalhes.
4. Mensagem de not found não foi implementada :(

**Algumas que foram feitas mas talvez não consigam ser observadas:**

1. Não é possível acessar o /app se não tiver encontrado o usuário que está sendo procurado.
2. Este README foi escrito em menos de 1 hora, pois já estava a 20 horas sem dormir.
3. O código foi comentado ao máximo para maior entendimento do _juiz_ que fará revisão do mesmo.

### Listas das subatividades presentes nos desafios:

- [x] Buscar e receber informações do usuário na API do Github.
- [ ] Atualizar a página e redirecionar para uma página com os detalhes do usuário.
- [x] Apresentar os detalhes do usuário na tela.
- [x] Utilizar o sistema de routes.
- [x] Na tela apresentar localização, número de seguidos, avatar, email e bio.
- [ ] Listar repositórios do usuário ordenado pelo número decrescente de estrelas

## O Projeto foi totalmente concluído?

> _Não._ Grande parte do que era utilizado na tecnologia React era desconhecido por mim, tive que pesquisar praticamente tudo, mas foi um aprendizado muito bom, apesar de não ter obtido o resultado desejado.

## Das tecnologias presentes no trabalho quais eu tinha conhecimento antes do projeto?

> Apenas Javascript, e muito básico. Mexer com o JS e o CSS foi uma experiência nova e muito gratificante, apesar das dores de cabeça. ~haha~.

# Tutorial de instalação

> Essa parte ficou um pouco subjetiva, não disseram de fato o que seria o tutorial, logo, explicarei como instalar o react e como rodar a aplicação no sistema que eu utilizo atualmente (Ubuntu 19.10).

### Segue o passo a passo:

**Abra o terminal e execute o seguinte comando para instalar o nodejs:**

```
curl -sL https://deb.nodesource.com/setup_12.x | sudo -E bash -
sudo apt-get install -y nodejs
```

**Agora, o NPM (Node Package Manager)**

```
sudo npm install npm@latest -g
```

**A Ferramenta para criar projetos é instalada pelo próprio NPM utilizando o comando:**

```
npm install -g create-react-app
```

**Para criar um novo projeto (Pode demorar alguns minutos):**

```
create-react-app awesome-project
```

**Após isso, só entrar na pasta que foi criada, apertar botão direito e abrir a pasta pelo terminal e escrever o seguinte comando:**

```
npm start
```

**Pronto, teu projeto vai estar rodando e a cada modificação, é só salvar o arquivo e ele vai atualizar a página pra ti! :D**

## Para rodar o meu é só seguir esses passos:

**Abre o terminal na área de trabalho ou qualquer outro lugar que você queira e digita o seguimte comando:**

```
git clone https://github.com/thurcst/Trinity.git
```

**O download vai começar logo após, já que meu repositório é público.**

**Após isso, é só entrar na pasta e usar o comando _npm start_ no terminal**

#### Qualquer dúvida estou disponível através do instagram ou email, ficarei muito feliz em responder todas perguntas sobre o trabalho!

> May the force be with you
