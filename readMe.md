# [Iniciante, JavaScript] Desafio Avançando Dias: Praticando Arrays, Loops e Funções

Recentemente estava ajudando um amigo a resolver um exercício de Javascript que usava fundamentos interessantes não só da linguagem mas como da própria lógica de programação.

São fundamentos básicos porém importantes e que, se bem aplicados, serão de grande ajuda para quem está iniciando sua jornada na programação.

Por isso, resolvi trazer a explicação do desafio aqui, destrinchando os conceitos utilizados de forma didática e resolvendo o exercício passo a passo

## O Problema

Desenvolva uma função que avance os dias da semana, retornando o dia da semana que corresponda a um dia inicial mais a quantidade de dias avançado por um número inteiro. Tanto o dia inicial quanto a quantidade de dias avançados deverão ser passados por parâmetro.

Neste sentido, tanto o parâmetro de dia inicial como o retorno do dia da semana deverão ser String no formato "Sexta-feira", "Quinta-feira", "Sábado"... Validações de formato não são necessárias.

Por exemplo: Os parâmetros passados são "Terça-feira" e 5. A função deverá avançar cinco dias e retornar "Domingo". Ou então como parâmetro é passado "Quarta-feira" e 8. A função deverá avançar oito dias da semana e retornar "Quinta-feira".

Caso pretenda resolver por conta própria antes de ver a resolução, este é um bom momento para isso. Quando tiver pronto, é só seguir com o artigo!

![Let's go!](https://media.giphy.com/media/toz7qXlLyHy9n8KfKO/giphy.gif)

## A solução
### 1. Montando a função

Antes de mais nada deveremos montar a própria função. Neste caso, nossa função irá receber duas informações como parâmetro, o dia da semana inicial e a quantidade de dias a serem avançados.

```javascript
function avancarDias(dia, quantidade) {

}
```

### 2. Declaração do Array
Aqui teremos todos os dias da semana em um único array. Neste sentido, quando quisermos retornar um dia específico, devemos apenas retornar a posição do Array que corresponda ao dia em questão.

```javascript
function avancarDias(dia, quantidade) {
let diasSemana = ["Segunda-feira", "Terca-feira", "Quarta-feira", "Quinta-feira", "Sexta-feira", "Sabado", "Domingo"];

}
```

Com isso, se quisermos acessar "Segunda-feira", basta acessarmos a posição zero do array diasSemana (```diasSemana[0]```).

### 3. Parâmetro ___dia___

Para o primeiro parâmetro, dia da semana, ele deverá ser recebido como String no mesmo formato dos dias da semana como escritos no Array (***por exemplo: dia receberá "Quinta-feira"***).

Mas como indicar para a nossa função que o parâmetro dia "Quinta-feira" corresponde à quarta posição do array (```diasSemana[3]```)?

Para isso, usaremos um método do JavaScript chamado ___indexOf___. O que ele faz? Bom, [é sempre bom ler alguma documentação explicativa](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Array/indexOf) mas basicamente o indexOf irá receber um valor e procurar este valor no array. Caso seja encontrado, ele irá retornar o índice ao qual corresponda a este valor.

Em outras palavras, ele irá procurar no nosso array _diasSemana_ pelo valor que foi passado no parâmetro _dia_. Caso encontre, retornará a posição do mesmo no array, ou retornará -1 caso não encontre.

A aplicação prática seria assim:

```javascript
function avancarDias(dia, quantidade) {
  let diasSemana = ["Segunda-feira", "Terca-feira", "Quarta-feira", "Quinta-feira", "Sexta-feira", "Sabado", "Domingo"];

  let indiceDia = diasSemana.indexOf(dia);
}
```

Caso o parâmetro ___dia___ receba ___"Quinta-feira"___, o método indexOf irá procurar no array ___diasSemana___ e irá retornar o índice onde encontra-se quinta-feira (3) já que ```diasSemana[3] = "Quinta-feira"```.

Caso ainda tenha ficado alguma dúvida de como funciona o indexOf, [recomendo esta documentação do Mozilla Web Docs](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Array/indexOf). Mas caso esteja acompanhando, vamos para o próximo ponto!

### 4. Parâmetro ___quantidade___

Agora precisamos tratar o parâmetro de quantidade de dias a serem avançados. Neste sentido, precisamos fazer uma lógica que consiga fazer a quantidade de dias avançados percorrer o nosso array em **loop**. Ou seja, depois de atingir a última posição, ele volta para a primeira. Mas como fazer isso?

Como já disse antes, usaremos um loop!

Para que a quantidade não ultrapasse o tamanho do Array, o nosso loop irá diminuir por 7 (quantidade de dias da semana) toda vez que a quantidade for maior ou igual aos próprios dias da semana. Neste sentido se _quantidade_ recebe 42, o loop fará:

- 43-7 = 36
    - Em seguida:
- 36 - 7 = 29
    - Em seguida:
- 29 - 7 = 22
    - Em seguida:
- 22 - 7 = 15
    - Em seguida:
- 15 - 7 = 8
    - Em seguida:
- 8 - 7 = 1

Ou seja, nossa lógica fará com que avancemos 43 dias. Começando por uma segunda-feira, avançando 43 dias, o dia final será uma terça-feira!

Em código, o loop ficará da seguinte forma:

```javascript
function avancarDias(dia, quantidade) {
    let diasSemana = ["Segunda-feira", "Terca-feira", "Quarta-feira", "Quinta-feira", "Sexta-feira", "Sabado", "Domingo"];

    let indiceDia = diasSemana.indexOf(dia);
    
    while (quantidade >= 7) {
        quantidade -= 7;
    }
}
```

### 5. Juntando os dois parâmetros

Agora que temos a lógica de cada parâmetro pronta, podemos juntá-los. A partir de um dia inicial (parâmetro _dia_), avançamos uma quantidade e dias (parâmetro _quantidade_) e retornamos o dia da semana em questão. Para isso, basta somarmos os dois índices (tanto o _indiceDia_ quanto o _quantidade_).

O resultado será a posição certa no array que indica o dia final após os cálculos. A função, finalmente, só precisará retornar este valor!

```javascript
function avancarDias(dia, quantidade) {
  let diasSemana = ["Segunda-feira", "Terca-feira", "Quarta-feira", "Quinta-feira", "Sexta-feira", "Sabado", "Domingo"];
  let indiceDia = diasSemana.indexOf(dia);

  let indiceAtualizado = indiceDia + quantidade;
  while (indiceAtualizado >= 7) {
    indiceAtualizado -= 7;
  }

  return diasSemana[indiceAtualizado];
}
```

### 6. Refinando o código

Um último toque de acabamento para o código ficar bonito, podemos substituir o número de dias fixo da semana (7) pelo tamanho do Array, já que caso o índice seja maior do que o array, subtraia pelo seu próprio tamanho.

Neste caso o 7 poderia ser substituído por ```diasSemana.length```, já que o tamanho do Array é o próprio 7.

Finalizando, o código ficaria:

```javascript
function avancarDias(dia, quantidade) {
  let diasSemana = ["Segunda-feira", "Terca-feira", "Quarta-feira", "Quinta-feira", "Sexta-feira", "Sabado", "Domingo"];
  let indiceDia = diasSemana.indexOf(dia);

  let indiceAtualizado = indiceDia + quantidade;
  while (indiceAtualizado >= diasSemana.length) {
    indiceAtualizado -= diasSemana.length;
  }

  return diasSemana[indiceAtualizado];
}
```

### 7. Desafio completo!

Apesar de ser um código de apenas 11 linhas, muitos conceitos importantes de JavaScript e lógica de programação são aplicados. Se você conseguiu otimizar esse código ainda mais, me mande sua sugestão que eu ficaria satisfeito em receber!

No mais, se você aprendeu alguma coisa com este artigo ou achou útil salve nos seus favoritos ou mande para alguém. Ficarei feliz também em receber eventuais feedbacks, pode me mandar uma mensagem no meu [Instagram](https://www.instagram.com/alanpfabricio/) ou [LinkedIn](https://www.linkedin.com/in/alantsx/).

-----
See ya later!

![Byebye](https://media.giphy.com/media/zvKiurEemhLRcJNYfi/giphy.gif)
