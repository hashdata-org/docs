
# Campo Calculado (Fórmula Matemática)

## Introdução

Campos calculados permitem a criação de fórmulas matemáticas que usam valores associados às respostas para calcular 
valores diversos, tais como médias, valores máximos, mínimos, desvíos padrões, etc.

Para construir uma fórmula você pode usar qualquer tipo de campo/resposta que tenha um valor númerico atribuído.

Veja abaixo a lista de questões que possuem ou, podem possuir, valores numéricos associados e podem ser usadas em uma fórmula:
* Questões numéricas (Inteiros, decimais e quantidade usando Emojis)
* Questões de seleção única (Menu suspenso, Rádio e Botões)
* Questões de seleção múltipla (Caixas de seleção e Botões)
* Questões de data e hora
* Questões de avaliação (Expressões faciais e Emojis)
* Questões de envio de arquivos (número de arquivos enviados)

## Criando uma fórmula simples

Imagine que você queira criar uma fórmula que calcule o peso médio de uma série de amostras de determinado produto. 
Assim, imagine que o formulário tenha as seguintes questões:

* Peso da amostra 1
* Peso da amostra 2
* Peso da amostra 3

Neste caso, cada pergunta deve ser configurada com um nome de campo único, por exemplo, 
`peso_amostra_1`, `peso_amostra_2` e `peso_amostra_3`.
// TODO: Adicionar imagens

Para isso, você deve criar um campo calculado e, em seguida, adicionar a fórmula desejada:

```typescript
function calculateValue() {
    return (resp.peso_amostra_1.number
          + resp.peso_amostra_2.number
          + resp.peso_amostra_3.number) / 3;
}
```

Vamos analisar cada parte da fórmula:

* `function calculateValue()` é a função que será executada para calcular o valor do campo calculado.
Essa função não pode ser renomeada, ela deve sempre ter esse nome, não pode receber parâmetros e deve retornar um valor numérico ou `null` (nulo/vazio).
* `resp` é um objeto que contém todas as **respostas** do formulário.
* `resp.peso_amostra_1` é uma estrutura que contém os dados associados à resposta da pergunta `peso_amostra_1`, tais como:
  * `number` é o valor numérico da resposta
  * `name` é o nome do campo da pergunta, ex.: `peso_amostra_1`
  * `tags` é uma lista de `tags` associadas à pergunta
* Por fim, a fórmula calcula a média aritmética dos valores das respostas, somando `peso_amostra_1`, `peso_amostra_2`, `peso_amostra_3` e dividindo por 3.

:::tip Nomes de variáveis
Você pode usar qualquer nome para as variáveis, mas é recomendado que você use nomes que façam sentido para o seu formulário.
:::

:::tip Autocomplete
O editor de código possui `autocomplete`, ou seja, ele irá sugerir os nomes de variáveis e funções disponíveis para você usar na fórmula.

Você pode usar as teclas `Ctrl+Space` ou `Ctrl+Shift+Space` para ativar o autocomplete manualmente.
:::

 ## Atributos gerais das respostas

Todas as respostas possuem no mínimo três atributos: `name`, `tags` e um ou mais atributos específicos
do tipo de resposta, por exemplo, `number` para questões numéricas, `text` para questões de texto, etc.

### name
`name: string`

Nome da pergunta. Exemplo: `peso_amostra_1`

### tags
`tags: string[];`

Lista de tags da questão, exemplo: `['peso', 'amostra']`

As `tags` são usadas para agrupar questões e facilitar a criação de fórmulas. 
Por exemplo, para calcular a média dos pesos de várias amostras, basta colocar uma tag
em cada questão de peso, por exemplo, `#peso`, e usar essa tag na fórmula:
    
```typescript
function calculateValue() {
    return avgByTag('#peso');
}
```

Onde `avgByTag` significa: "average by tag", ou seja, "média por tag".

## Atributos específicos das respostas

Veja abaixo a lista de atributos específicos disponíveis para cada tipo de resposta:


### text
`text?: string;`

Conteúdo textual da resposta, disponível para questões do tipo:
- Texto de uma linha
- Texto de várias linhas
- E-mail

:::tip Caracter "?" 
O caracter "?" indica que o atributo é opcional, ou seja, ele pode ou não existir.
Se o usuário responder a questão o atributo existirá, caso contrário, ele não existirá.
:::

### label
`label?: string;`

Etiqueta ou Texto vinculado à opção selecionada, disponível para questões do tipo:
- Seleção única
- Seleção múltipla
- Expressões faciais
  

### number
`number?: number;`

Conteúdo numérico da resposta, seja o conteúdo fornecido pelo usuário, seja o conteúdo numérico
vinculado à opção selecionada.
Disponível para questões do tipo:
- Números inteiro
- Números decimais
- Quantidade usando Emojis
- Fórmula matemática
- Seleção única/simples
- Expressões faciais
- Tempo/Hora
  

### dateStr
`dateStr?: string;`

Data em forma de texto (string).
Formato: `YYYY-MM-DDTHH:MM:SSZ`, ex: 2030-12-31T23:59:59Z

Disponível para questões do tipo:
- Data
- Data e hora

### lat
`lat?: number;`

Latitude da coordenada geográfica informada na resposta

### lon
`lon?: number;`

Longitude da coordenada geográfica informada na resposta

### items
`items?: ISelectedItem[];`

Lista de itens selecionados, disponível para questões do tipo:
- Seleção múltipla
- Ordenação
  
Cada item da lista de `items` possui os seguintes atributos:
* `label: string`: Etiqueta ou Texto vinculado à opção selecionada.
* `number?: number`: Conteúdo numérico da opção selecionada. 
* `position?: number`: Número que representa a ordem escolhida pelo usuário para o item selecionado.
Disponível apenas nas questões do tipo `Ordenação`

## Funções disponíveis


### all
`function all(): IResponse[];`

Retorna uma lista (array) com todas as respostas existentes até o momento de execução do código, ou seja, as repostas das perguntas que aparecem antes deste elemento.

:::caution Atenção
Note que nem sempre existirá resposta para uma pergunta posicionada antes da fórmula, pois as
perguntas podem ser "puladas" por meio de uma lógica de navegação ou simplesmente não serem respondidas.

Este aviso vale para todas as funções que retornam uma lista de respostas.
:::

### findByTag
`function findByTag(oneOrMoreTagNames: string | string[]): IResponse[];`

Retorna uma lista (array) com as respostas que possuem as tags especificadas. <br/>
Somente as perguntas que aparecem antes deste elemento serão analisadas.

Exemplo:

A função abaixo retorna a quantidade de respostas que possuem a tag `#peso`, ou seja, a quantidade de amostras preenchidas pelo usuário.

```typescript
function calculateValue() {
    const qntAmostras = findByTag('#peso').filter(r => hasContent(r.number)).length;
    return qntAmostras;
}
```

### avgByTag
`function avgByTag(...oneOrMoreTagNames: string[]): number;`

Calcula a média dos valores numéricos das respostas que possuem as tags especificadas.

Respostas que não possuem valor numérico são ignoradas.

Somente as perguntas que aparecem antes deste elemento serão analisadas.

### sumByTag
`function sumByTag(...oneOrMoreTagNames: string[]): number;`

Calcula o somatório dos valores numéricos das respostas que possuem as tags especificadas.

Somente as perguntas que aparecem antes deste elemento serão analisadas.

### countByTag
`function countByTag(...oneOrMoreTagNames: string[]): number;`

Retorna a quantidade de respostas que possuem as tags especificadas.

Somente as perguntas que aparecem antes deste elemento serão analisadas.

### maxByTag
`function maxByTag(...oneOrMoreTagNames: string[]): number | undefined;`

Retorna o maior valor numérico existente nas respostas que possuem as tags especificadas ou 'undefined' caso nenhum valor seja encontrado.

Respostas que não possuem valor numérico são ignoradas.

Somente as perguntas que aparecem antes deste elemento serão analisadas.

### minByTag
`function minByTag(...oneOrMoreTagNames: string[]): number | undefined;`

Retorna o menor valor numérico existente nas respostas que possuem as tags especificadas ou 'undefined' caso nenhum valor seja encontrado.

Respostas que não possuem valor numérico são ignoradas.

Somente as perguntas que aparecem antes deste elemento serão analisadas.

### hasContent
`declare function hasContent(value: any): boolean;`

 Retorn "true" caso o valor informado seja diferente de "undefined", "null", [] ou uma string vazia.

### isEmpty
`declare function isEmpty(value: any): boolean;`

 Retorna "true" caso o valor informado seja "undefined", "null", [] ou uma string vazia.

## Exemplos

Este é um exemplo: `código`.

```typescritp
function add(x, y) {
   return x + y
}
```

:::tip Isto é uma dica
kdjshvkshv kjds
sdvsdv
:::

:::info Isto é uma dica
kdjshvkshv kjds
sdvsdv
:::

:::caution ATENçao
kjsdksjhfk j
fwfelfw
:::


:::danger ATENçao
kjsdksjhfk j
fwfelfw
:::
