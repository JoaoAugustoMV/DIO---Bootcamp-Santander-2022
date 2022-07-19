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



# Boas Praticas

- NotaçãoCamelo
    - notaAlunoFinal
- Var final(constante) em letra Maiusculas separados por "_"
    - CPF_DO_USUARIO