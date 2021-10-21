---
title: Como criar testes unitários em JavaScript sem precisar instalar nada
authors: [teles]
coauthors: [guilherme, rafa]
description: Introdução aos testes unitários em JavaScript com exemplos práticos sem necessidade de configurações ou instalações
published: true
---

Nesse texto vamos entender brevemente o que são os testes unitários, conhecer uma forma de escreve-los em JavaScript e talvez o mais importante: criar o nosso primeiro.

<!--more-->

Se você é desenvolvedora ou desenvolvedor provavelmente já se deparou ou vai se deparar com o conceito de testes unitários mais cedo ou mais tarde em sua carreira.

Testes unitários são trechos de código escrito para testar outros trechos de código. Apesar disso o código do teste unitário em si jamais afeta diretamente o produto final. Então teste unitário é algo pouco útil? Muito pelo contrário.


## Teste unitário: o que é

[Segundo a Wikipédia](https://pt.wikipedia.org/wiki/Teste_de_unidade), os testes unitários ou testes de unidade são:

> Teste de unidade é toda a aplicação de teste nas assinaturas de entrada e saída de um sistema. Consiste em validar dados válidos e inválidos via I/O (entrada/saída) sendo aplicado por desenvolvedores ou analistas de teste.

Quer dizer: você escreve, por exemplo, uma função como parte do código do seu site ou produto e para testar essa função você descreve cenários onde essa função deve retornar determinada saída caso receba determinada entrada


Aqui no nosso exemplo iremos utilizar uma plataforma online de código para escrever e mostrar nossos testes unitários. A plataforma escolhida é o codepen.

## Como usar o codepen

Talvez você já conheça alguns sites que te permitem hospedar código fonte. Essa página mesmo tem todo o seu código hospedado no [GitHub Pages](https://github.com/vivadecora/vivadecora.github.io) mas o GitHub não é a única plataforma que oferece esse tipo de serviço.

O [Codepen](https://codepen.io/vivadecora) é uma plataforma bastante útil de compartilhamento de código frontend. Nela você pode escrever códigos HTML, CSS e JavaScript e ver o resultado na hora automaticamente.

Para nosso artigo iremos usar o Codepen para:

* Hospedar JavaScript 
* Hospedar testes unitários
* Exibir uma página de relatório de testes unitários

Ao final de tudo teremos um resultado como esse:

![Exemplo de tela do codepen](/codepen-testes-javascript-numero-primo.png)

Os passos para usar o codepen são:

* Criar uma conta em https://codepen.io/
* Acessar esse [pen com template pronto para testes unitários](https://codepen.io/vivadecora/pen/ZEJWvya) e clicar em 'Fork'. Isso vai criar uma cópia do pen para sua conta pessoal. 


## Criando um teste unitário em JavaScript

Os exemplos a seguir mostram na prática como a criação de testes unitários poderia ajudar a criar uma simples função que diz se um número é primo ou não.

Para isso temos a seguintes informações:
* O número é primo se ele é divisível somente por si mesmo e por 1
* Por divisível entende-se que quando se divide número X por Y o resto da divisão é 0

Transformando isso em casos de testes poderíamos ter nosso primeiro código da seguinte maneira:

```JavaScript
function isPrimeNumber(number) {
    return number % number === 0;
}
```

Como todo número é divisível por 1 não precisamos testar esse caso. Então no código acima apenas checamos se o resto da divisão do número por ele mesmo é igual a zero. A seguir fazemos nosso primeiro teste unitário. 
E aqui vai um spoiler, o código acima tem bugs!


```JavaScript
describe("Especificações do isPrimeNumber", specs);

const specs = function() {
    it("Função isPrimeNumber existe e não está undefined", function() {
        expect(isPrimeNumber).not.toBeUndefined();
    });

    it("Testa números com valor baixo",  function(){
        expect(isPrimeNumber(1)).toBe(true);
        expect(isPrimeNumber(2)).toBe(true);
        expect(isPrimeNumber(3)).toBe(true);
    })
}
```

Onde no código acima:

* describe, it, expect, toBe, not, toBeUndefined são [funções do Jasmine](https://jasmine.github.io/2.0/introduction), ou seja, só funcionam se o Jasmine estiver rodando
* `describe` é uma função que recebe dois parâmetros. O primeiro é um texto qualquer que dá nome ao nosso grupo de testes relacionados ao isPrimeNumber
* O segundo parâmetro de `describe` é uma função que de fato contém nossos testes unitários
* O `it` é um cenário de teste dentro do nosso grupo de testes do `describe`
* O `it` recebe dois parâmetros, assim como no `describe`.
* Assim como no `describe` o primeiro parâmetro é um texto descritivo e o segundo é a função que será de fato executada
* Dentro da função de cada `it` podemos executar funções expect
* A função expect recebe uma expressão e retorna um objeto que pode receber funções de teste
* As funções de teste são as mais variadas disponibilizadas pelo Jasmine
* Exemplo: `expect(true).toBe(true)` espera que a expressão `true` retorne `true`
* Um teste passou quando todos os `expect` de um determinado `it` passaram
* Um teste falhou quando um ou mais `expect` de um determinado `it` falharam

Dentro do nosso exemplo, como podemos ver pelo relatório de cobertura, não temos bugs. Além disso sabemos também que todo o código está coberto, ou seja, todas as linhas que escrevemos foram executadas ao menos 1 vez durante o teste.


O que fizemos até agora pode ser visto aqui:

<p class="codepen" data-height="300" data-default-tab="html,result" data-slug-hash="MWoLZxd" data-user="vivadecora" style="height: 300px; box-sizing: border-box; display: flex; align-items: center; justify-content: center; border: 2px solid; margin: 1em 0; padding: 1em;">
  <span>See the Pen <a href="https://codepen.io/vivadecora/pen/MWoLZxd">
  Testes unitários com JavaScript - Parte 1</a> by Engenharia Viva Decora (<a href="https://codepen.io/vivadecora">@vivadecora</a>)
  on <a href="https://codepen.io">CodePen</a>.</span>
</p>


## Melhorando o código e o teste unitário

Mesmo com todo o código testado nosso código tem um bug bem claro e precisa ser alterado.
Esse bug é bem simples. Lembrando:

```JavaScript
function isPrimeNumber(number) {
    return number % number === 0;
}
```

Nessa função o que afirmamos é:

* Um número é primo se o resto da divisão por ele mesmo é igual a zero

Porém, **o resto da divisão de qualquer número por ele mesmo é sempre zero**! 
E quando comparamos isso com a definição de número primo a diferença fica clara:

* Nosso código: *'Um número é primo se o resto da divisão por ele mesmo é igual a zero'*
* Definição de número primo: *'O número é primo se ele é divisível somente por si mesmo e por 1'*

Quando nosso teste unitário roda checando se os números 1, 2 e 3 são primos ele tem o retorno esperado.

|Número| Teste | Resultado | Resultado esperado |
|-|-|-|-|
|1| o resto da divisão por ele mesmo é igual a zero? | `true` | `true`|
|1| é divisível somente por si mesmo e por 1? | `true` | `true`|
|2| o resto da divisão por ele mesmo é igual a zero? | `true` | `true`|
|2| é divisível somente por si mesmo e por 1? | `true` | `true`|
|3| o resto da divisão por ele mesmo é igual a zero? | `true` | `true`|
|3| é divisível somente por si mesmo e por 1? | `true` | `true`|

Vamos alterar nosso código para testar também os números 4,5 e 6.
E quando começamos a expandir nossos testes logo vemos o problema!


<p class="codepen" data-height="300" data-default-tab="html,result" data-slug-hash="wvqMzQr" data-user="vivadecora" style="height: 300px; box-sizing: border-box; display: flex; align-items: center; justify-content: center; border: 2px solid; margin: 1em 0; padding: 1em;">
  <span>See the Pen <a href="https://codepen.io/vivadecora/pen/wvqMzQr">
  Testes unitários com JavaScript - Parte 2</a> by Engenharia Viva Decora (<a href="https://codepen.io/vivadecora">@vivadecora</a>)
  on <a href="https://codepen.io">CodePen</a>.</span>
</p>


Os testes continuam passando quando não deveriam passar. Vejamos:

|Número| Teste | Resultado | Resultado esperado |
|-|-|-|-|
|4| o resto da divisão por ele mesmo é igual a zero? | `true` | `true`|
|4| é divisível somente por si mesmo e por 1? | ⚠️  `false`  | `true`|
|5| o resto da divisão por ele mesmo é igual a zero? | `true` | `true`|
|5| é divisível somente por si mesmo e por 1? | `true` | `true`|
|6| o resto da divisão por ele mesmo é igual a zero? | `true` | `true`|
|6| é divisível somente por si mesmo e por 1? | ⚠️ `false` | `true`|

Perceba: os números 4 e 6 embora atendam nosso código atual não são números primos. Ambos são divisíveis por 2 e o 6 ainda é divisível também por 3!


```JavaScript
describe("Especificações do isPrimeNumber", specs);

const specs = function() {
    it("Função isPrimeNumber existe e não está undefined", function() {
        expect(isPrimeNumber).not.toBeUndefined();
    });

    it("Testa números com valor baixo",  function(){
        expect(isPrimeNumber(1)).toBe(true);
        expect(isPrimeNumber(2)).toBe(true);
        expect(isPrimeNumber(3)).toBe(true);
    })

    it("Testa números 4, 5 e 6",  function(){
        expect(isPrimeNumber(4)).toBe(false);
        expect(isPrimeNumber(5)).toBe(true);
        expect(isPrimeNumber(6)).toBe(false);
    })
}
```

Agora nós iremos alterar nossa função `isPrimeNumber` unitário para que o teste quebre. 
Agora ela ficará assim:

```
function isPrimeNumber(number) {
   for(let i = 2; i < number; i++) {
      if(number % i === 0) {
         return false
      }
   }
   return true;
}
```
Esse código em questão adapter a partir desse [tópico do StackOverflow sobre números primos](https://stackoverflow.com/a/40200710)

Explicando o código:
* Se retornarmos `true` o número é primo, se retornarmos `false` ele não é
* É iniciado um laço for começando no número 2
* Esse for vai do número 2 até o número a ser testado -1
* Se a divisão do número a ser testado pelo valor atual do `i` for igual a zero retornamos `false` e saímos do laço
* Se o for acabar sem jamais atender a condição acima retornamos `true`

Com essa nova implementação nosso teste unitário deixa de quebrar mesmo nos números 4 e 6 🎉 

<p class="codepen" data-height="300" data-default-tab="html,result" data-slug-hash="ZEJQBQZ" data-user="vivadecora" style="height: 300px; box-sizing: border-box; display: flex; align-items: center; justify-content: center; border: 2px solid; margin: 1em 0; padding: 1em;">
  <span>See the Pen <a href="https://codepen.io/vivadecora/pen/ZEJQBQZ">
  Testes unitários com JavaScript - Parte 3</a> by Engenharia Viva Decora (<a href="https://codepen.io/vivadecora">@vivadecora</a>)
  on <a href="https://codepen.io">CodePen</a>.</span>
</p>


## O que aprendemos sobre teste unitário 

Apesar do código bastante simples passamos por fases típicas do desenvolvimento de qualquer produto.

* Escrevemos o código
* Testamos
* Quebramos o teste
* Refatoramos o código para desquebrar o teste

Também vimos que:

* É possível praticar testes unitários direto no codepen, sem depender de configurações no projeto
* Nem sempre um teste que passa significa um código sem bugs
* Mesmo um código 100% coberto pode esconder bugs de implementação
* Ter um teste unitário garante que novas implementações possam ser feitas com mais segurança

## Lição de casa e alteração na especificação dos números primos

Uma coisa que aprendi durante a leitura desse artigo foi que a definição abaixo está incompleta:

> O número é primo se ele é divisível somente por si mesmo e por 1

Pois o número 1 não é considerado primo, sendo assim uma definição melhor seria:

> O número é primo se ele é divisível somente por 2 números diferentes: ele mesmo e 1

Com isso finalizamos com algumas questões e melhorias para quem quiser se aprofundar:

* Como alterar nosso teste unitário e nosso código para atender a essa alteração na especificação? Fica como exercício
* Todo número par maior que 2 não é primo, ainda assim nosso laço de repetição testa esses números. Dá para melhorar?
* O maior número pelo qual um número é divisível para garantir que ele não é primo é a sua raiz quadrada. Podemos evitar testes números maiores que a raiz quadrada?
* O código da nossa função poderia ser mais legível? Como fazer isso sem quebrar testes ?

É isso!
O que achou dos testes unitários em JavaScript? Já tem prática com isso?
O que pretende testar agora?

Abraços

<script async src="https://cpwebassets.codepen.io/assets/embed/ei.js"></script>
