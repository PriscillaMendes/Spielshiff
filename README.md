# Spielshiff
Biblioteca de Jogos Spielshiff - Trabalho de programação web


Integrantes:
- Beatriz‌ ‌Souza‌ ‌
- Matheus‌ ‌Marques‌ ‌dos‌ ‌Santos‌ ‌
- Pedro‌ ‌Cardoso‌ ‌
- Priscilla‌ Carmo‌

A prosposta e o enunciado do projeto pode ser encontrado [aqui](https://github.com/fegemo/cefet-web/tree/master/assignments/project-open)!


As funcionalidades supracitadas, se devidamente implementadas, serão avaliadas qualitativamente quanto à qualidade do resultado e do esforço, podendo chegar até 70% da nota do projeto. Para atingir mais (até um limite de 150%), você pode escolher itens opcionais da seguinte lista:


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

