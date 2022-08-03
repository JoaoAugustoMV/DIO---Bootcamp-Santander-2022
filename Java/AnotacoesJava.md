# JAVA

# Variaveis

## Estrutura
    <?visibilidade?><?modificador?> tipo nome <?valorInicial?>
        private final int numero = 100
        
         Visibilidade:
         Modificador: final(constante) e
         tipo:
         nome:
         valorInicial:

         PS: Parametros entre <??> são opcionais
         
## Tipos

### Numeral

- byte: -128 até 127 (8 bits)
- short: -32.768 até 32767 (16 bits)
- int: -2.147.483.648 até 2.147.483.647(32 bits)
- long: numeros inteiros com até 64bits(-9x10^15 até 9x10^15) (64 bits)
- float: numeros reais com até 32bits
    - Por padrão, se entederá  como double
    - Colocar (f) após o valorInicial
    - float pi = 3.1415f
- double: numeros reais com até 64bits
    - Colocar (d) após o valorInicial(opcioanal)
    - float pi = 3.1415d

### Textual

- char: Um unico caracter, indicado por aspas simples ''
    - char c = 'J'
- String: string convencional(é um objeto), indicado por aspas duplas ""
    - String str = "Joao"

### Boolean

- boolean t = true

### Casting(Conversões)

#### Upcast(implicito)
- Aumentar os bits de armazenamento
- Por ir para um numero maior de bits, não é necessário expressar o novo tipo
 
         int i = 100; // (32 bits)
         long l; // (64 bits)
         l = i; // Upcasting

#### Downcast(explicito)
- Diminuir os bits de armanzento
- Deve expressar o novo tipo

        long l = 100; // (64 bits)
        int i; // (32 bits)
        i = (int)l; // Downcasting(Explicito)

#### Truncar(float para int)
        float f = 43.543
        int i;
        i = (int)f
--- 
# Logica Condicional

## If(s) e else(s)
    if (teste){
        
    }else if(teste2){

    }else{
            
    }

## Switch

    switch(variavel){
        case 1:

        break;

        case 2:

        break;

        default:

        break;
    }


## Operador ternario
- condicao ? seTrue : seFalse;

---
# Arrays

---

- Exemplos:
    - String[] nomes = {"Joao", "Ana", "Wagner"} // Arrays de strings
    - int[ ] notas = new int[5]; // Array vazio de tamanho 5

# Programação Orientada a Objetos

- Visibilidade de classes, atributos e metodos
    - Private: Só dentro da classe
    - Protected: Dentro da classe, mesmo pacote e subclasses(Classes Filhos)
    - Public: Em qualquer lugar

## Objeto

-  Representação de uma classe

## Classe  

- Classe: **Estrutura** que define objetos semelhantes

## Atributo

- Caracteristicas do Objeto

## Metodo

- Funções para manipular o Objeto

- Destrutor: "Coletor de lixo"
`` class Carro {
    void finalize(){
      }
}``

- Sobrecargas: Criar metodos com mesmo nome com assinaturas diferentes
    - Cada assinatura terá parametros e dependendo deles, o comportamento será diferente
---

## Herança

- ``class Filho extends Pai{ }``

-  Upcast: Subir a hierarquia de classe
    - ``Pai p = new Filho () // Transforma o classe Filho em classe Pai``

-  Downcast: Descer na hierarquia de classe
    - ` Filho f = (Pai) new Filho()`
    - Quase nunca usado

## Polimorfismo
- Mesma ação, se comportando de forma diferente

## Sobrescrita

- Mesma ação, pode se comportar de forma diferente

## Associação

- Criar um relação entre classes
- Tipos
    - Estrutural: Atributos
        - Composição: "Funciona **Como parte** de um **Todo**"
            - Um **não** pode existir sem o outro
            - EX: Pessoa e Cpf
        - Agregação: "Funiona **Sem** fazer **parte Todo**
            - Um **pode**  existir sem o outro
            - EX: Aluno e materia
    - Comportamental: Metodos

---

## Interface

- Estrutura que deve ser seguido pela classe
    - Exemplo
    - ``interface Pessoa {}``
    ``class Aluno implements Pessoa``

---

# Debug

- Continue: Ir para o proximo breakpoint
- Step Over: Ir para proxima linha
- Step Into: Ir para dentro do metodo
- Step Out: Sair do metodo
- Evalute Expression: Terminal para teste durante execução

# Exceções

- É um evento que interrompe o fluxo normal de uma classe
- Como tratamento da exceção é possivel evitar a interrupção do código
- Diferente de um erro, pois uma exceção pode ser tratada e evitada

## Tipos

- Error: Lançado pela JVM, não há como tratar
    - Ps: Na verdade, não é considerado uma exceção
- Unchecked(Runtime): **Podem** ser evitadas se tratadas(Erro de lógica)
    - O compilador não consegue perceber o erro, apenas será lançada na execução
    - Exemplos:  divisão por 0, acessar não existente posição de array, casting(conversão) invalida
- Checked: **Devem** ser evitadas e tratadas
    - O proprio compilador percebe o erro e indica o tratamento
    - Exemplos: Acessar arquivo que não existe, fechar arquivo que não está aberto
---

# Coleções

- É um objeto que agrupa varios elementos 

## Composição

- Interfaces
- Classes ou Implementação
- Algoritmos

## Hierarquia

- List: Elementos duplicados e garante ordem de inserção
    - Vector: Mexe com Thread
    - ArrayList:
        - Deve usar quando tiver mais pesquisas
        - Herda apenas de interface Colletion
    - LinkedList: 
        - Deve usar quando tiver mais inclusão e exclusão
        - Herda de interface Colletion e Queue
- Set
    - Não permite itens duplicados
    - Não possui indice
    - Tio
- Map

## Set

- Não permite itens duplicados
- Não possui indice
- Tipos:
    - HashSet: Não mantem nenhum ordem dos elementos(Melhor Performance)
    - LinkedHashSet: Mantem a ordem de inserção dos elementos(2 em Performance)
    - TreeSet: Mantem a ordem crescente dos elementos(3 em Permformance)


## Map

- Conceito de chave: valor
- Tipos:
    - HashTable: ThreadSafe
    - TreeMap: Itera em ordem natural, não permite chave nulas(crescente)(4 em performance)
    - HashMap: Itera em ordem aleatoria
    - LinkedHashMap: Itera em ordem de inserção ou ordem de acesso(definida no constructor)

##  Stream API

- Forma de manipular de coleções
    - Source -> Pipeline -> Terminal
- Classe Anonima: Classe declarada e instaciada na mesma instrução. Usa quando só for utilizar a classe uma vez
- Functional Interface: Qualquer Interface SAM(Single Abstract Method). Metodo abstrato é metodo que será herdado pela classe filha, e nela terá um comportamento será definido na subclasse
- Lambda: Função sem nome, declarado e usado na mesma instrução. (argumento) -> (corpo)
- Reference Method: "Simplificar um função lambda" ::metodo sem parenteses
# Boas Praticas

- NotaçãoCamelo
    - notaAlunoFinal
- Var final(constante) em letra Maiusculas separados por "_"
    - CPF_DO_USUARIO
---
# Lembrar

- Static: Referente a classe(não de objeto)
    - É possivel chamar o metodo sem instanciar um objeto
- Imprimir Arrays
    - Arrays.toString(Lista)
- Stream: Coleção de elemento do mesmo tipo da original, mas com metodos adicionais