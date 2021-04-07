# GithubApp

O projeto foi criado utilizando [Angular CLI](https://github.com/angular/angular-cli) version 11.2.7 e funciona perfeitamente em servidor local. (Tem algumas explicações do motivo de estar em local no decorrer do README).

## Como rodar o servidor?

Antes de tudo, clone o repositório em sua máquina:

```
git clone https://github.com/thurcst/GitSearch.git
```

Abra o terminal (ou prompt para windows) e execute `npm install` e em seguida `ng serve --open` Isso iniciará o servidor e abrirá uma janela no seu navegador assim que estiver pronto. Em modo de desenvolvimento existe o live reload, logo, qualquer alteração feita no código será automaticamente atualizada.

_Observação importante_: **NÃO** altere a porta, o Auth0 vai parar de funcionar caso seja feito.

## Dúvidas sobre o Angular?

Para descobrir os comandos disponíveis use `ng help` ou olhe na documentação oficial do mesmo. [(aqui)](https://angular.io/cli).

# #TeamNINA e o desafio

#### O desafio, dificuldades, aprendizados e conclusão

Primeiramente, queria agradecer a oportunidade de poder ter participado dessa seleção e mostrar um pouco da minha capacidade como um profissional, foi uma experiência nova, cheia de desafios e muito gratificante. Cada tarefa cumprida teve seus obstáculos e toda a tragetória foi muito interessante. Infelizmente não foi possível por em prática tudo que eu queria, tive algumas ideias que iriam tomar muito tempo para implementação e por isso foram deixadas de lado.

**Os bugs mais chatos que enfrentei:**

1. O serviço de autenticação do Github [(esse aqui)](https://docs.github.com/pt/developers/apps/authorizing-oauth-apps) não funciona para páginas HTTP, apenas para as que rodam em HTTPS, não aceitava meu POST de forma nenhuma, então tive que utilizar um outro meio de login (ainda utilizando a conta do Github), que é o Auth0. A autenticação ocorre normalmente. A outra forma de autenticação foi feita e estava quase finalizada (não apaguei para caso ainda assim servisse para mostrar como eu estava fazendo, é um service).
2. Tive sérios problemas enquanto implementava o NgRx, então optei por uma outra biblioteca de Redux (tive que correr para pedir ajuda aos universitários) mas mesmo assim não obtive sucesso. Foi minha primeira experiência tentando implementar Redux em um projeto.
3. Material Design me ajudou muito a ganhar tempo mas também foi um problema em várias vezes que precisei mexer em alguns design.

**Aqui segue algumas atividades que faltaram concluir:**

1. Não tenho acesso ao serviço de AWS, logo, não consegui colocar o serviço na núvem. (Amazon não cobra pelo serviço até certo ponto mas é necessário o uso de cartão de crédito para validar a conta).
2. Implementação do Redux

###### Curiosidade: Pesquisei pelo perfil do fabpot mais de 50 vezes durante o desenvolvimento

### Listas das subatividades presentes nos desafios:

- [x] Buscar e receber informações do usuário na API do Github. (Consumo de API);
- [x] Serviço de autenticação utilizando conta do Github. (Consumo de API);
- [x] Tela de login;
- [x] Tela de perfil;
- [x] Pesquisa de repositórios & paginação;
- [x] Angular 2+ & RXJS & Smart and Dumb components;
- [ ] Deploy em AWS e AWS via Yaml (Extra)
- [ ] NgRx (Extra)

_Obs:_ Não sei se o sistema de paginação deveria ser Client-Side ou utilizando Query Params, então fiz Client-Side.

## Quais foram as maiores dificuldades?

Implementação da estrutura do Redux, mesmo sendo um projeto pequeno, são muitas subestruturas para serem feitas, e eu tive que escolher entre terminar tudo e fazer um design responsivo/apresentável ou o Redux (que era um extra).

## Das tecnologias presentes no trabalho quais eu tinha e quais eu não tinha conhecimento antes do projeto?

##### Conhecidas:

> > Eu já venho trabalhando com Angular a um tempo (logo logo farei 6 meses com a tecnologia) apesar de utilizar em Mobile (Ionic). Toda a parte de requisições REST, Rxjs, Typescript, HTML e CSS já conheço e utilizo há algum tempo.

##### Desconhecidas:

> > Ngrx e AWS, este projeto seria a primeira vez que eu utilizaria ambos, entretanto, não consegui por em prática.

### Rotas utilizadas no projeto:

Aqui se encontram todas as APIs abertas fornecidas pelo github

```JSON
{
  "current_user_url": "https://api.github.com/user",
  "current_user_authorizations_html_url": "https://github.com/settings/connections/applications{/client_id}",
  "authorizations_url": "https://api.github.com/authorizations",
  "code_search_url": "https://api.github.com/search/code?q={query}{&page,per_page,sort,order}",
  "commit_search_url": "https://api.github.com/search/commits?q={query}{&page,per_page,sort,order}",
  "emails_url": "https://api.github.com/user/emails",
  "emojis_url": "https://api.github.com/emojis",
  "events_url": "https://api.github.com/events",
  "feeds_url": "https://api.github.com/feeds",
  "followers_url": "https://api.github.com/user/followers",
  "following_url": "https://api.github.com/user/following{/target}",
  "gists_url": "https://api.github.com/gists{/gist_id}",
  "hub_url": "https://api.github.com/hub",
  "issue_search_url": "https://api.github.com/search/issues?q={query}{&page,per_page,sort,order}",
  "issues_url": "https://api.github.com/issues",
  "keys_url": "https://api.github.com/user/keys",
  "label_search_url": "https://api.github.com/search/labels?q={query}&repository_id={repository_id}{&page,per_page}",
  "notifications_url": "https://api.github.com/notifications",
  "organization_url": "https://api.github.com/orgs/{org}",
  "organization_repositories_url": "https://api.github.com/orgs/{org}/repos{?type,page,per_page,sort}",
  "organization_teams_url": "https://api.github.com/orgs/{org}/teams",
  "public_gists_url": "https://api.github.com/gists/public",
  "rate_limit_url": "https://api.github.com/rate_limit",
  "repository_url": "https://api.github.com/repos/{owner}/{repo}",
  "repository_search_url": "https://api.github.com/search/repositories?q={query}{&page,per_page,sort,order}",
  "current_user_repositories_url": "https://api.github.com/user/repos{?type,page,per_page,sort}",
  "starred_url": "https://api.github.com/user/starred{/owner}{/repo}",
  "starred_gists_url": "https://api.github.com/gists/starred",
  "user_url": "https://api.github.com/users/{user}",
  "user_organizations_url": "https://api.github.com/user/orgs",
  "user_repositories_url": "https://api.github.com/users/{user}/repos{?type,page,per_page,sort}",
  "user_search_url": "https://api.github.com/search/users?q={query}{&page,per_page,sort,order}",
  "login": "https://github.com/login/oauth/authorize?client_id={client_id}"
}
```

Dessas APIS, utilizei:

|          API          |   Service    |
| :-------------------: | :----------: |
|       user_url        | DataService  |
| user_repositories_url | DataService  |
|     followers_url     | DataService  |
|         login         | LoginService |

#### Rotas da aplicação:

1. /login

   - Tela inicial, redireciona para o serviço do Auth0 e caso esteja logado, redireciona para a dashboard

2. /dashboard

   - Rota onde se encontra as informações de Perfil do usuário

3. /search

   - Tela de pesquisa, onde é possível buscar por usuários do Github

4. /about

   - Routa que eu usei pra deixar meu Card com minhas redes sociais

5. default
   - Qualquer outra tela redireciona de volta para a dashboard

**Algumas tecnologias que eu uso (e usei) e sempre me ajudam:**

1. Prettier (Code Formatting) acelera na produção e organiza o código
2. ESLint (Nesse caso foi utilizado TSLint pois já veio configurado e adianta bastante o trabalho)

**Prints da aplicação pronta:**

- Login Screen
  ![Login](https://i.postimg.cc/hGNgNsPw/login.png)

- Autenticador Auth0
  ![Auth](https://i.postimg.cc/PqbkJwWV/authenticator.png)

- Profile
  ![Profile](https://i.postimg.cc/3NThxwGF/profile.png)

- Pesquisa por usuários
  ![Search](https://i.postimg.cc/c4dZqr0s/Sem-t-tulo.png)

- Cards de Repositório + Search Bar
  ![Git Cards and Search Bar](https://i.postimg.cc/Bvj4hksH/cards.png)

- Cards sem filtro
  ![Cards](https://i.postimg.cc/cCBSgNMy/without-filter.png)

- Paginação
  ![Pagina 2](https://i.postimg.cc/j5NKTfDj/pag-2.png)

- Cards filtrados por nome
  ![Git Cards Filered](https://i.postimg.cc/bYx8FQXC/filtered.png)

**Algumas que foram feitas mas talvez passem despercebidas:**

1. A página about foi feita com muito carinho.
2. Este README foi escrito em menos de 1 hora.
3. O site está _muito_ responsivo! (Exceto pra tablet, rs)
4. Os cards de Seguidores são botões
5. Caso o usuário não tenha repositórios ou seguidores, nenhum dos dois tipos de cards são apresentados

```HTML
Um forte abraço, espero que você, leitor(a), esteja bem e saudável. Tempos melhores estão por vir!
```
