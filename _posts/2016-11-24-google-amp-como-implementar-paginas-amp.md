---
title: Google AMP - O que é, por que e como implementar no seu site?

author:
  name: Jota Teles, Fabíola Faria
  info: (@<a href="http://www.jotateles.com.br">Jota Teles</a>),(@<a href="https://www.linkedin.com/in/fabiolafaria">Fabí</a>)

summary: O que é Accelerated Mobile Pages, porquê e como você pode implementá-lo no seu site ou portal.

---

## O que é AMP?

AMP é uma sigla que significa Accelerated Mobile Pages e é uma especificação de estrutura html criada pelo Google. Através do Projeto AMP o Google pretende fornecer resultados de buscas otimizados para dispositivos móveis, mas quando dizemos resultados otimizados entendemos sobretudo páginas com carregamento mais rápido, oferecendo assim uma melhor experiência aos usuários.

Os resultados de busca AMP já aparecem em cards destacados na primeira página para algumas buscas em celulares, principalmente para notícias.

[As páginas AMP já possuem 600 milhões de páginas indexadas](https://amphtml.wordpress.com/2016/10/07/amp-a-year-in-review/amp/), mas ainda não é um projeto largamente desenvolvido no Brasil, por isso sites que implementam AMP nesse momento podem ter um belo diferencial de SEO. Veja alguns dados atuais sobre as páginas AMP:

![AMP One Year in review](https://amphtml.files.wordpress.com/2016/10/1-wholeinfographic.png?w=768)


## AMP não é a mesma coisa que página mobile

Ok, já tem um tempo que o Google utiliza performance de carregamento e sites responsivos como fator de rankeamento. No entanto quando falamos de AMP não estamos falando de site responsivo ou versão mobile. É importante que isso fique claro.
Resumindo: Uma página AMP é uma versão de uma página qualquer otimizada de acordo com especificações do Projeto AMP para ser exibida nos resultados de busca para dispositivos móveis. Ok?

## Página AMP é só para o Google em dispositivos móveis?

Não, já temos fontes que relatam que o [BING também exibe AMP em seus resultados](https://googlediscovery.com/2016/09/23/bing-planeja-destacar-sites-com-google-amp/). E mais, que Bing planeja dar destaque para as páginas AMP. Considerando que o Google possui uma maior representatividade das Buscas, já temos mais do que bons motivos para implementarmos as páginas AMP no nosso site. Mas vamos falar de outras vantagens! 

## Por que implementar Google AMP?

AMP tem benefícios potenciais de:

*Melhorar o posicionamento nos resultados do Google;
*Trazer mais acessos para o seu site;
*Melhorar a indexação de imagens; 
*Ter uma versão do seu conteúdo com carregamento mais rápido;
*Futuramente o AMP pode se tornar fator de rankeamento.

Como sabemos disso? Calma, vamos falar mais detalhamente desses pontos em outro Post! Vamos a implementação...

## Como implementar páginas AMP no seu Site?

Como dito anteriormente o AMP deve ser implementado totalmente de acordo com a especificação do Google. A especificação AMP é bastante restritiva e inclui um novo atributo para a tag <html>. Além disso uma AMP pode conter somente arquivos javascript das bibliotecas AMP.

O primeiro passo na implementação de uma AMP é a criação de um template como esse:

``` 
<!doctype html>
<html amp lang="en">
  <head>
    <meta charset="utf-8">
    <script async src="https://cdn.ampproject.org/v0.js"></script>
    <title>Hello, AMPs</title>
    <link rel="canonical" href="http://example.ampproject.org/article-metadata.html" />
    <meta name="viewport" content="width=device-width,minimum-scale=1,initial-scale=1">
    <script type="application/ld+json">
      {
        "@context": "http://schema.org",
        "@type": "NewsArticle",
        "headline": "Open-source framework for publishing content",
        "datePublished": "2015-10-07T12:02:41Z",
        "image": [
          "logo.jpg"
        ]
      }
    </script>
    <style amp-boilerplate>body{-webkit-animation:-amp-start 8s steps(1,end) 0s 1 normal both;-moz-animation:-amp-start 8s steps(1,end) 0s 1 normal both;-ms-animation:-amp-start 8s steps(1,end) 0s 1 normal both;animation:-amp-start 8s steps(1,end) 0s 1 normal both}@-webkit-keyframes -amp-start{from{visibility:hidden}to{visibility:visible}}@-moz-keyframes -amp-start{from{visibility:hidden}to{visibility:visible}}@-ms-keyframes -amp-start{from{visibility:hidden}to{visibility:visible}}@-o-keyframes -amp-start{from{visibility:hidden}to{visibility:visible}}@keyframes -amp-start{from{visibility:hidden}to{visibility:visible}}</style><noscript><style amp-boilerplate>body{-webkit-animation:none;-moz-animation:none;-ms-animation:none;animation:none}</style></noscript>
  </head>
  <body>
    <h1>Welcome to the mobile web</h1>
  </body>
</html>
``` 

## Metadados para AMP

Feito o primeiro passo, em seguida é opcional mas muito recomendável a inclusão de metadados que descrevam o conteúdo da sua AMP.

Aqui no [Viva Decora](https://www.vivadecora.com.br) descrevemos parte de nossas AMP com o [schema.org para Articles](https://schema.org/article). Para fazer essa descrição de Article fizemos marcação de json-ld nas nossas páginas incluindo uma tag script, como a seguinte, dentro do <head> de nossas páginas AMP.

```
<script type="application/ld+json">
        {
            "@context":"http://schema.org",
            "@type":"Article",
            "mainEntityOfPage":"https://www.vivadecora.com.br/decoracao/cozinha",
            "headline":"Cozinha decorada com bom gosto deve continuar sendo funcional",
            "datePublished":"2016-09-23T09:00:45.000-03:00",
            "dateModified":"2016-09-23T10:38:36.306-03:00",
            "description":"A cozinha deixou de ser um ambiente da casa apenas para cozinhar, guardar a despensa e fazer as refeições. Passou a ser um espaço de convivência e de verdadeiras experiências gastronômicas. ",
            "author":{
                "@type":"Organization",
                "name":"Viva Decora"
            },
            "publisher":{
                "@type":"Organization",
                "name":"Viva Decora",
                "logo":{
                    "@type":"ImageObject",
                    "url":"/static/img/logo-amp.png",
                    "width":"140",
                    "height":"30"
                }
            },
            "image":{
                "@type":"ImageObject",
                "url":"https://imagens.vivadecora.com.br/N9QTp0ZRnAIsvZqFTx7c62otICA=/696x696/vivadecora/22653-outros-ambientes-cozinha-com-revestimento-vermelho-e-branco-decoracao-amfbarquitet-22653.jpg",
                "height":"696",
                "width":"696"
            }
        }
    </script>

```

A notação json-ld permite que seu schema.org seja definido dentro do <head> da sua página e é válida para AMP.
A documentação para desenvolvedores do Google inclui informações sobre [metadados para AMP](https://developers.google.com/search/docs/data-types/articles).


## Conteúdo e componentes para AMP

AMP oferece uma forma totalmente nova de escrever seu HTML. Isto significa, entre outras coisas, que algumas das tags padrão do html deverão ser substituídas por componentes AMP.
O melhor exemplo disso é a tag <img> que deve ser substituída pelo [componente amp-img](https://www.ampproject.org/docs/get_started/create/include_image).
Assim, uma imagem que comumente seria apresentada assim:


``` 
<img src="http://placehold.it/350x150" alt="Placeholder Cinza">
``` 

Utilizando o componente para imagens AMP deve ser escrito assim:

```
<amp-img src="http://placehold.it/350x150" alt="Placeholder Cinza" height="150" width="350"></amp-img>
``` 

Isso quer dizer que não posso usar <img> direto no meu AMP? Sim, a tag <img> deve ser substituída por <amp-img> ou então sua AMP será considerada invalidada e provavelmente sua página AMP não aparecerá nos resultados do Google.

O site [AMP by Example](https://ampbyexample.com/) e o [AMP Project](https://www.ampproject.org/) oferecem vários outros componentes prontos para AMP. 

Existem componentes [AMP para Instagram](https://ampbyexample.com/components/amp-instagram/), [AMP Analytics](https://ampbyexample.com/components/amp-analytics/) e [AMP Mustache](https://www.ampproject.org/docs/reference/components/amp-mustache).


## Javascript e CSS no AMP

Como vimos o AMP restringe e implementação de uma página aos componentes disponibilizados e autorizados pelo Google. 

Isso significa que o uso de javascript em arquivos externos é restringido para AMP. Quer dizer, nada de implementar suas AMP utilizando frameworks javascript como angular ou conceitos de web rica como Single Page Applications.

Em termos de CSS a restrição fica por conta do fato de que todo o código CSS deve estar dentro de uma tag <style amp-custom> no <head> do seu documento AMP. Ainda assim você pode estilizar livremente os seus componentes implementados. O Google ainda oferece algumas facilidades para tornar sua [AMP responsiva](https://www.ampproject.org/docs/guides/responsive_amp).


## Fazendo sua AMP ser encontrada e indexada pelo Google

Ok. Sua AMP está pronta, usando os componentes necessários, CSS personalizado, metadados descritivos. Como fazer para o Google saber que você tem uma AMP?

É bastante simples. Cada página canônica, ou seja, cada página “versão web” do seu site que possui uma AMP relacionada deverá ter uma tag <link> indicando o endereço da AMP correspondente. 

Por sua vez, cada AMP deverá ter uma tag <link> indicando a página canônica a qual está relacionada. Explicarei que tags são essas.

Exemplo:

A página canônica [https://www.vivadecora.com.br/decoracao/cozinha](https://www.vivadecora.com.br/decoracao/cozinha) deve possuir uma tag:

``` 
<link rel="amphtml" href="https://www.vivadecora.com.br/amp/decoracao/cozinha">
``` 

Essa tag indica o endereço de sua versão AMP.

Por sua vez, a AMP https://www.vivadecora.com.br/amp/decoracao/cozinha deve ter uma tag <link rel="canonical" href="https://www.vivadecora.com.br/decoracao/cozinha"> indicando sua versão canônica.

Só isso já é o suficiente para que o Google indexe suas AMP. Mas o melhor é que você consegue acompanhar essa indexação diretamente nos [relatórios AMP do Search Console](https://www.google.com/webmasters/tools/accelerated-mobile-pages). Qualquer erro na implementação do AMP será apontado nesses relatórios, então é altamente recomendável que você faça um acompanhamento da ferramenta.

## Validando sua Página AMP

Antes de colocar suas AMP em produção é importante garantir que elas sejam consideradas válidas.


Para isso você pode utilizar pelo menos três abordagens:

1. Coloque esse trecho no final da sua url AMP #development=1, assim https://www.vivadecora.com.br/amp/decoracao/quarto deve ficar https://www.vivadecora.com.br/amp/decoracao/quarto#development=1; então olhe o console do seu navegador e procure por erros de AMP ou pela mensagem “AMP validation successful.” 
2. Utilize o [validador de AMP online](https://validator.ampproject.org/);
3. Instale o [plugin validador de AMP para Chrome](https://chrome.google.com/webstore/detail/amp-validator/nmoffdblmcmgeicmolmhobpoocbbmknc), além de validar AMP ele exibe um ícone azul quando uma página que você estiver acessando possuir a versão de página AMP. Obs: Cuidado com a validação somente através do Plugin! Recomendamos que essa validação seja feita em conjunto com alguma das anteriores.


## Para finalizar sobre Páginas AMP

Como comentamos a AMP é uma especificação Google com grande potencial de retorno para o seu site. Mas lembre-se que o AMP possui um conjunto de componentes predefinidos e não permite adição de javascript ou css externo.

Durante a implementação de AMP recomenda-se estruturar os metadados de sua página e relacionar via tag <link> suas páginas canônicas com as versões AMP.

Válido também mencionar que já existem implementações prontas de plugins [AMP para wordpress](https://br.wordpress.org/plugins/amp/) e [AMP para jekyll](https://github.com/juusaw/amp-jekyll), por exemplo.

Espera-se que a adesão das páginas AMP continue crescendo no Brasil e no Mundo, pois falaremos com mais detalhe em outro post o quanto as páginas AMP podem contribuir com o SEO do seu site. Por momento, esse tutorial pretende ser um bom ponto de partida para quem deseja ter páginas AMP aparecendo nas buscas de celulares dentro dos resultados do Google.

Dúvidas e comentários?

Abraços








