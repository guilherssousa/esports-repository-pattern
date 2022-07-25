# Repository Pattern

Esse repositório é feito para estudar o funcionamento do padrão de repositório.
Entender os domínios da aplicação e seu fluxo de uso é o seu propósito final.

## Partes do Código

### Controller

O Controller tem a responsabilidade de interagir com a interface de comunicação
da API (no caso, o Express) e repassar os dados para o Service.

### Service

O Repository recebe os dados passados pelo Controller, faz a validação dos dados e
interage com o Repository para salvar os dados.

### Repository

O Repository é responsável por implementar as comunicações com o banco de dados.

### Bônus: Provider

O Provider serve para implementar serviços de terceiros, num formato parecido com um Repository.

## Rotas do projeto

### Jogadores

- GET /players - Lista todos os jogadores
- GET /players/:slug - Busca um jogador pelo slug
- POST /players - Cadastra um novo jogador
- PUT /players/:slug - Atualiza um jogador
- DELETE /players/:slug - Deleta um jogador

### Times

- GET /teams - Lista todas as equipes
- GET /teams/:slug - Busca uma equipe pelo slug
- POST /teams - Cadastra uma nova equipe
- PUT /teams/:slug - Atualiza uma equipe
- DELETE /teams/:slug - Deleta uma equipe
