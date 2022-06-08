# Posicionando Elementos com FlexBox

## Propriedades para flex container
- ***display: flex***: Torna o elemento um flex container(tornando os filhos deste elemento flex itens)

PS: Um elemento pode ser flex conteiner e flex item ao mesmo tempo

PS2: Por padrão os flex itens irão ocupar apenas o tamanho do conteudo do item
![image](https://user-images.githubusercontent.com/93055242/172491460-c11f681a-ea6f-42f4-8393-d873903f5d39.png)
- ***flex-direction***:: Define o eixo a ser exibido os elementos
  - row: linha horizontal da esquerda para direita(padrão)
  - row-reverse: linha horizontal da direita para esquerda
  - column: linha vertical da esquerda para direita(1 coluna por padrão)
  - column-reverse: linha vertical da direita para esquerda
- ***flex-wrap***: Define a quebra de linha
  - no-wrap: Não acontece a quebra de linha(os elementos vazam do limite)
  - wrap: Acontece a quebra de linha
  - wrap-reverse: Acontece a quebra de linha, mas para cima
  - ![image](https://user-images.githubusercontent.com/93055242/172494383-e580c75c-9fa6-4e8a-bcf5-7123e7f6580e.png)
- ***justify-content***(para flexbox): Define o alinhamento e espaçamento dos itens filho
  -  flex-start: Posiciona no início do container
  -  flex-end: Posiciona no final do container
  -  center: Posiciona no centro do container![image](https://user-images.githubusercontent.com/93055242/172499132-c9748ddd-024f-4fca-9c4c-633a0b4ee850.png)

  -  space-between: Cria um espaçamento igual entre os itens ![image](https://user-images.githubusercontent.com/93055242/172499070-006cc6fc-bb63-4a96-96b1-2279af9bc2cd.png)

  -  space-around: Espaçamento entre os itens é o dobro do espaçamento do inicio e fim![image](https://user-images.githubusercontent.com/93055242/172498968-3118c05f-ffbb-46b6-ae06-3313a88bc3ca.png)
PS: Se os filhos ocuparem todo o espaço do container, a propriedade será ignorada
- ***align-itens***: Alinha os itens em relação ao eixo estabelecido
  -  flex-start: Posiciona no início do container
  -  flex-end: Posiciona no final do container ![image](https://user-images.githubusercontent.com/93055242/172502084-d75b744c-67e5-484a-9e67-49374597a7cb.png)

  -  center: Posiciona no centro do container ![image](https://user-images.githubusercontent.com/93055242/172501791-8350cd55-1e0b-44ff-adb8-7e68c9d2b5f5.png)

  -  stretch: padrão, os flex crescem igualmente ![image](https://user-images.githubusercontent.com/93055242/172501837-465dbc4a-349e-4309-807e-b3702b816b3c.png)

  -  baseline: alinhamento de acordo com a linha base da tipografia dos itens ![image](https://user-images.githubusercontent.com/93055242/172501886-e6101673-de96-4a30-becc-205135c2ae90.png)
- ***align-content***: Alinhamento das linhas no eixo vertical, para isso precisa que tenha quebra de linha e que o container seja maior que o tamanho total das linhas
  - flex-start: Posiciona no início do container
  - flex-end: Posiciona no final do container
  - center: Posiciona no centro do container ![image](https://user-images.githubusercontent.com/93055242/172505460-82883489-7299-42b5-85dd-41a0a502c7d1.png)

  - space-between: Cria um espaçamento igual entre os itens ![image](https://user-images.githubusercontent.com/93055242/172505503-26cf195c-ea0e-4c63-9425-8498e1235dd8.png)

  - space-around: Espaçamento entre os itens é o dobro do espaçamento do inicio e fim ![image](https://user-images.githubusercontent.com/93055242/172505491-92d6684b-8195-48a6-afad-85691983bd1c.png)

  - stretch: padrão, os flex crescem igualmente ![image](https://user-images.githubusercontent.com/93055242/172505216-a070a49f-d418-479c-8cca-d037e071bc00.png)

