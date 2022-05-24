# Coin Flip Calculate

[Português]

Lançar uma moeda para tirar “cara ou coroa” é uma maneira bastante comum de tomar decisões com base na sorte. No esporte lançar a moeda decide quem vai iniciar o jogo. Numa eleição a moeda pode decidir quem vai ser o próximo governante, em caso de empate nas votações.

Em teoria, cara ou coroa oferece duas opções com 50% de chance cada lado. Ao lançar a moeda várias vezes é possível obter resultados aleatório, como o mesmo lado da moeda saindo duas ou três vezes consecutivas, ou então os dois lados saírem alternadamente.

Essa modalidade de sorteio levanta a dúvida sobre o quanto um lado da moeda pode sair consecutivamente em uma sequência de lançamentos. Quantas vezes uma pessoa teria que lançar a moeda para obter uma série de 3 lados iguais consecutivamente? E para obter 10?

Um pesquisador inglês chamado John Kerrich lançou uma moeda 10 mil vezes e anotou os resultados para ver qual o percentual de ocorrência de cada lado. Mas nem todas as pessoas dispõem dessa paciência para tirar esse tipo de dúvida. Por isso, este algoritmo foi criado. Ele permite simular o lançamento de uma moeda oferendo duas opções com probabilidade aproximada de 50% cada, e aferir qual a maior sequência consecutiva de cada lado da moeda.

[English]

Tossing a coin for “heads or tails” is a fairly common way to make decisions based on luck. In sport flipping the coin decides who will start the game. In an election, the currency can decide who will be the next ruler, in case of a tie in the votes.

In theory, heads or tails offers two options with a 50% chance each side. By tossing the coin several times it is possible to obtain random results, such as the same side of the coin coming out two or three consecutive times, or the two sides coming out alternately.

This type of draw raises the question of how much one side of the coin can come out consecutively in a sequence of tosses. How many times would a person have to flip the coin to get a series of 3 equal sides consecutively? And to get 10?

An English researcher named John Kerrich tossed a coin 10,000 times and recorded the results to see what percentage each side occurred. But not all people have the patience to take this kind of doubt. Therefore, this algorithm was created. It allows you to simulate the flip of a coin offering two options with a probability of approximately 50% each, and to determine which is the longest consecutive sequence on each side of the coin.

## Parâmetros / Parameters

[Português]

Os parâmetros para calcular as sequências são definidas no arquivo `src/index.ts`.

`num`: Define quantos lançamentos serão feitos.

`showSequence`: Define se a sequência de resultados dos lançamentos será mostrada no terminal.

`showStepByStep`: Define se o passo a passo feito pelo algoritmo para calcular as sequências consecutivas será mostrado no terminal.

[English]

The parameters for calculating the sequences are defined in the `src/index.ts` file.

`num`: Defines how many launches will be made.

`showSequence`: Defines whether the sequence of launch results will be shown in the terminal.

`showStepByStep`: Defines if the step by step made by the algorithm to calculate the consecutive sequences will be shown in the terminal.

## Executar / Run

[Português]

Primeiro instale as dependências do projeto:

```
yarn install
```

Executar o código:

```
yarn start
```

[English]

First install the project dependencies:

```
yarn install
```

Run the code:

```
yarn start
```

## Resultados / Results

[Português]

Exemplo de resultado após a execução:

[English]

Example result after execution:

```
Total coin flips: 1000
The longest sequence of heads is: 9
The longest sequence of tails is: 7
The total of heads is: 491
The total of tails is: 509
The percentage of heads is: 49.1%
The percentage of tails is: 50.9%
```

## Observações / Comments

[Português]

1 – Este código é apenas para satisfazer a curiosidade.

2 – Este código não foi pensado em performance, e por limitações de memória do NodeJS o autor conseguiu fazer no máximo aproximadamente 30 milhões de lançamentos.

[English]

1 – This code is just to satisfy curiosity.

2 – This code was not designed for performance, and due to memory limitations of NodeJS the author managed to make a maximum of approximately 30 million of flips.

## Referência

- [Cara ou coroa](https://pt.wikipedia.org/wiki/Cara_ou_coroa)
