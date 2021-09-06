# Spielshiff
Biblioteca de Jogos Spielshiff - Trabalho de programação web


Integrantes:
- Beatriz‌ ‌Souza‌ ‌
- Matheus‌ ‌Marques‌ ‌dos‌ ‌Santos‌ ‌
- Pedro‌ ‌Cardoso‌ ‌
- Priscilla‌ Carmo‌

A prosposta e o enunciado do projeto pode ser encontrado [aqui](https://github.com/fegemo/cefet-web/tree/master/assignments/project-open)!


As funcionalidades supracitadas, se devidamente implementadas, serão avaliadas qualitativamente quanto à qualidade do resultado e do esforço, podendo chegar até 70% da nota do projeto. Para atingir mais (até um limite de 150%), você pode escolher itens opcionais da seguinte lista:


- Gestão de usuários:
  1. [x] (4%) Receber e-mail ao se cadastrar
  1. [ ] (3%) Fluxo de "esqueci minha senha"
  1. [x] (5%) Integração com autenticação por 3ºs
  1. [ ] (3-7%) Possibilidade de alterar dados do perfil
  1. [ ] (5%) Autenticação de 2 fatores
- Engenharia de Software:
  1. [ ] (1-10%) Testes automatizados
  1. [ ] (2-6%) Processo de _build_ para _assets_ do _front-end_:
     - [ ] Minimizar arquivos CSS e JS
     - [ ] Eliminação de código morto JS
     - [ ] Otimização de imagens
     - [ ] Pré-processamento de CSS e JS
  1. [ ] (5%) Integração contínua durante o desenvolvimento (_build_ + teste + _deploy_)
  1. [x] (5%) Uso de _containers_ (eg Docker) para isolar ambientes e torná-los facilmente reprodutíveis
  1. [x] (5%) Descrição histórias de usuário
     - [ ] (+5%) Uso de _pull requests_ (PRs) para cada história
       - [ ] (+5%) _Code review_ de todos os PRs
- Integração:
  1. [ ] (5-10%) APIs de terceiros para fornecer dados do usuário (eg, biblioteca de jogos no Steam, músicas do usuário no Spotify)
  1. [ ] (3-7%) APIs "cosméticas" (eg, previsão do tempo para fazer algum efeitinho)
  1. [x] (6%) APIs de serviço de hospedagem (eg, da AWS para armazenar fotos enviadas por usuários)
- Inteligência:
  1. [ ] (5-13%) Alguma inteligência além de um CRUD. Exemplos:
     - Algoritmos de recuperação da informação
     - Algoritmos de aprendizado de máquina
     - Algoritmos de alocação de recursos/tarefas, _match-making_, problema da mochila, determinação de caminhos...
     - Algoritmos de computação gráfica _off-line_ (eg, _ray tracing_)
- _Back-end_:
  1. [ ] (4%) Agendamento de funções do _back-end_ para executar de tempos em tempos (eg, processar o ataque do reino de um jogador a outro)
  1. [ ] (5-9%) Uso de uma fila para execução de tarefas com duração maior
  1. [ ] (6%) Propagação de atualização do _back-end_ para o _front-end_ (eg, usando Web Sockets diretamente ou alguns bancos NoSQL reativos)
  1. [ ] (3%) Camada de dados RESTful
  1. [ ] (6%) Camada de dados GraphQL
  1. [ ] (5%) _Upload_ de arquivos
- _Front-end_:
  1. [x] (7%) Todas as páginas _responsive_
  1. [ ] (3%) Modo escuro
  1. [ ] (2-5%) Animações, transições e efeitos visuais diversos (onde fizer sentido)
     - [ ] (2%) Modo com menos animações
  1. [ ] (2%) Modo de impressão (se fizer sentido)
  1. [ ] (5%) Organização em componentes
  1. [ ] (3-10%) Uso de APIs do HTML5 (vide seminário)
  1. [ ] (2-10%) Interatividade para melhorar a experiência de uso (eg, a [Ovelhita][ovelhas] na página das ovelhas)




-----------------

### Para rodar utilizando Docker:

  
Se você ainda não tiver o docker instalado acesse o [site official](https://docs.docker.com/engine/install/ubuntu/) para realizar a instalação.

Como rodar:
    
Na pasta db, contrua a imagem do banco de dados:

```
docker build . -t spielshiff-mysql
```

Na pasta api, contrua a imagem do site:

```
docker build . -t spielshiff-app
```

Rodar a imagem:

```
docker run -d -p 3306:3306 spielshiff-mysql
docker run -d -p 3000:3000 spielshiff-app
```

