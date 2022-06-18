Typescript: É um superset do Javascript, ou seja, uma linguagem baseada em Javascript

Tem esse nome, pois traz ao Javascript original, uma tipagem mais forte:
- Os tipos de dados nos parametros de funções devem ser indicados
- Não é possivel trocar o tipo de dado de variaveis ou atributos de objetos

tsconfig.json
- target : "es5" traduz para outra versao de js
- lib: diz quais bibliotecas o codigo usará
- outDir: Indica outra pasta para guardar os arquivos
- rootDir: Indica outra pasta para guardar os arquivos
 - -   },
  "include": ["src/**/*.ts"] (/**/ avançar pasta)
}