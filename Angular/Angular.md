# Conceitos
- Angular: FrameWork para a **criação de aplicativos de página unicas**
- SPA: Single Page Aplication(Aplicação de Página Única)
- Modulo: Limitador de contexto
- Modulo Pai: app.module.ts
- O angular permite usar o html padrão, mas também adiciona novos recursos
- data bind
- Interpolação: {{ var ou atributo do componente}}, usado no html(parecido com template string)
-  injeção de dependência é um padrão de projeto no qual uma classe solicita dependências de fontes externas ao invés de criá-las
- Classe de Serviço: feito para fornece funções
- Data pipes: funções que formatam strings com modelos predinidos(ex: formatação de datas)

# Funcionalidades
- Módulos
- Componentes
- Template: arquivos html e css dos componentes
- Diretivas: Aplica mudanças nos templates
    - Diretivas de atributos: Alteram elementos, componentes ou outra diretiva(ex:NgClass e NgStyle)
    - Diretivas estruturais:  Altera o layout, adicionando ou removendo elementos DOM(ex:ngIf e NgFor)
    - Diretivas personalizadas: 
- Serviços: Basicamente, uma classe para definir regras de negocios, principalmente para uso de API
- Injeção de dependência: Fornece quais serviços a classe pode usar
- Data-binding: troca de dados entre html e lógica
    - [ngModel]: One way data bind,Apenas exibe, não altera a propriedade de bind
    - [(ngModel)]: Two way data bind, Exibe e altera a propriedade de bind
- Roteamento
- Metadata

## Serviços Assincronos

- HttpClient: Usado para fazer a comunicação entre cliente e servidor usando protocolo HTTP

# Lembrar

- O Angular dá poder ao HTML(React dá poder ao JS)
- Usa Typescript
- Ao criar novo componente, 'avisar' ao modulo
- <[atributo] = "info de Angular">. ex <img [src]="image.png">

# Arquivos/Pastas importantes 
- e2e: Teste End-To-End
- package.json: Possui todas dependências do projeto
- angular.json: Contem informações globais, propriedades, pastas, scripts para a inicialização
    - styles e scripts
    - index e main
- node-modules: Possui todas dependências do projeto
- src: Contem os codigos do projeto
- main.ts: Bootstrap
# Comandos no Terminal

- ng new "NomeProjeto": Cria uma pasta para uma Aplicação Angular
- ng serve: Inicia um server para a aplicação(localhost: 4200)
- ng add libExterna
- ng g(generate) component Teste: Cria toda a estrutura do Componente
- ng build: Compila todos arquivos para subir no servidor

# Exemplos

## Diretivas

- [ngStyle]="{background: contador < 5? 'red': 'blue'}: Quando o contador for menor que 5 o background será red, quanto for maior será azul
-[ngClass]="{maiorQ5: contador > 5}">: Será aplicada a classe maiorQ5 enquanto a condição for verdadeira
-  h2 *ngIf="contador > 6; else menor">: O elemento só aparecerá se a condição for true, caso for false aparecerá o elemento menor
    -PS: o elemento usado no else deve ser a tag <**ng-template** #id> com seu identeficação(no caso menor)
- ul [ngSwitch]="contador">: Elemento pai
    - *ngSwitchCase="3">, elemento filho
    - *ngSwitchCase="5">, elemento filho
    - *ngSwitchCase="7">, elemento filho
    - *ngSwitchCase="8">, elemento filho
    - *ngSwitchCase="10">, elemento filho,
    - *ngSwitchDefault>, elemento filho