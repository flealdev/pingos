---
author: Michel Leal
pubDatetime: 2023-12-18
title: Redes Wi-Fi residenciais
postSlug: redes-wifi-residenciais
featured: true
draft: false
tags:
  - redes
  - wifi
description:
  Saiba como utilizar seu wifi da melhor forma!
---

## Table of contents

## Introdução

Os tempos mudaram e a internet via rádio deu lugar à fibra ótica em locais onde tal conexão era um sonho. As novas tecnologias facilitaram a criação de cada vez mais provedores de acesso à internet (conhecidos também pela sigla em inglês, ISP) e à estruturação das redes de fibra ótica. A diminuição dos custos de equipamentos e dispositivos necessários para por em prática tais projetos fez com que a modernidade se instalasse na maioria das residências. As redes wireless (sem fio) deixaram de se tornar algo visto somente em grandes torres e painéis de onde as antenas receptoras (também chamadas estações) se conectavam e passaram a ser aplicadas dentro das residências na forma conhecida por Wi-Fi, suportando altas velocidades.

Considere no decorrer deste artigo que na sua residência haja os sequintes equipamentos:

- **_O modem_** que converte o sinal recebido do seu provedor (normalmente via fibra ótica) para sinal elétrico; e
- **_O roteador_** (que aqui podemos chamar de ponto de acesso ou emissor de sinal) que recebe o sinal elétrico e o transfere via pacotes de dados pelos meios de comunicação que os seus dispositivos suportam (Ethernet/cabos ou Wi-Fi). Ele possui, normalmente, antenas externas (visíveis). Alguns modelos de roteadores mesh possuem antenas internas (não visíveis) - veremos adiante.
- **_Os dispositivos receptores_**, responsáveis por se conectar ao seu roteador estabelecendo uma conexão via Wi-Fi, proporcionando a você o acesso à Internet. São eles: smartphones, televisões, notebooks, consoles de videogame, entre outros. No decorrer do texto poderão ser chamados de estações ou receptores.

***
## Como funciona o seu roteador e a distribuição do Wi-Fi na residência

**_Chamamos de sinal o nível de força_** que uma onda possui quando alcança um dispositivo receptor. O sinal normalmente é simbolizado por uma antena com alguns traços (no seu telefone, por exemplo) ou por meio numérico através de algarismos negativos com um nomezinho meio incomum: dBm. Quanto mais traços cheios melhor será a conexão, e o mesmo é válido para a aferição numérica: quanto mais próximo de -30 dBm, melhor é a qualidade.

O seu roteador emite o sinal de Wi-Fi por meio de milhões de pulsos/ondas eletromagnéticas por segundo que utilizam do espectro de radiofrequência chamado de micro-ondas (mais precisamente as frequências de 2.4 e 5 GHz). E sim, por isso o forno micro-ondas da sua casa pode interferir na sua conexão de 2.4 GHz (a mais básica atualmente).

Os pulsos emitidos pelo roteador são distribuídos em qualquer direção, a depender da localização do dispositivo receptor, e são dispersados para o mais longe que a potência de transmissão conseguir “empurrá-lo”.

> Em dispositivos próximos demais do roteador a qualidade da conexão estará prejudicada pois o sinal não estará corretamente propagado no local (por incrível que pareça, um sinal abaixo de -30 dBm, por exemplo, pode resultar em uma conexão precária). Considere uma distância mínima de um metro do roteador para a utilização da conexão e a instalação do roteador a uma altura de 1,5 m do chão e longe de qualquer objeto que possa ocultá-lo (como móveis, por exemplo).

Os pulsos emitidos encontram os dispositivos receptores devido a sinais chamados **beacons**, que mantém ativa a conexão entre o dispositivo emissor e o receptor. Este é o motivo pela sua TV estar desligada (mas conectada na tomada) e ainda sim estar aparecendo como conectada no roteador, ela mantém ativa a conexão para que quando o usuário for utilizar, a rede esteja pronta.

**_A largura de banda_** (do inglês bandwith, também traduzido como largura de barramento) é o ajuste realizado para que a onda dispersa no ar comporte mais velocidade/banda.

> Ajustes menores fazem com que a rede fique menos propensa a interferências e o inverso aumenta a possibilidade de interferências (principalmente na faixa de 2.4 GHz).

**_Os canais da sua rede Wi-Fi_** podem ser consideradas pequenas fatias das frequências de funcionamento somadas à largura de banda especificada nas configurações do seu roteador (por isso uma largura de banda maior pode contribuir com o aumento de interferências). Consulte a seção de referências para links sobre o assunto.

Tecnologias como beamforming e MU-MIMO utilizam das propriedades que múltiplas antenas fornecem a ambos os dispositivos (emissores ou receptores). A grosso modo, **_o beamforming (BF)_** é responsável por focar determinado pulso de onda ao dispositivo que o solicitou, desta forma a propagação da onda é concentrada para onde o dispositivo receptor está, e quanto maior a quantidade de antenas no emissor (roteador) maior é a eficiência deste recurso. **_O MU-MIMO_** atua no tangente à quantidade de banda que o dispositivo irá receber: quanto mais antenas o dispositivo receptor possuir, mais tráfego conseguirá consumir.

***
## Os tipos de redes Wi-Fi, seus padrões (nomes técnicos) e a Rede Mesh

As redes Wi-Fi são classificadas perante as frequências de seu funcionamento assim como pelo padrão IEEE 802.11. Neste artigo estou considerando as de padrão a/b/g/n/ac (excluo o padrão ax por ser pouco difundido atualmente).

### 2.4 GHz (padrão a/b/g/n)

Esta rede funciona em uma frequência altamente poluída e está cada mais em desuso. **Possui o maior alcance de todas**, porém com velocidade reduzida (na prática, chega a até 50 megas, considerando possíveis interferências do ambiente).

É uma faixa de frequência que também é utilizada por controles sem fio, equipamentos bluetooth e fornos microondas. Se tornou muito difundida na época das conexões via rádio e hoje em dia ainda é a mais utilizada, principalmente por dispositivos de baixo custo (smartphones e notebooks de entrada, por exemplo).

Quanto mais esta rede é utilizada mais tende a cair em qualidade pois as frequências úteis são muito poucas, em torno de 13 (os tais canais). Isto faz com que os roteadores dos seus vizinhos, por exemplo, funcionem no mesmo canal que o seu (por isso aqueles momentos de “Conectado, sem internet” ou a lentidão no acesso à rede que pode ocorrer várias vezes durante o uso dos seus dispositivos). Um caos é uma conexão nesta frequência em um prédio com muitos moradores, é praticamente inutilizável (e não, a culpa não é do seu provedor - infelizmente).

O nome dos padrões define, basicamente, as características de funcionamento da rede (como velocidade máxima nominal e tecnologias suportadas). Os padrões a, b e g são os menos utilizados hoje em dia e os que mais pecam em qualidade. Geralmente os dispositivos atuais funcionam no padrão n quando conectados na rede 2.4GHz.

### 5 GHz (padrão ac)

Do contrário da rede 2.4GHz, esta possui um menor alcance (quanto maior a frequência, menor o alcance). Em contrapartida, **é a frequência com maior qualidade e velocidade**.

Basicamente, esta rede possui em torno de 24 canais para a propagação do sinal, fazendo com que o número de interferências acarretadas por outros roteadores diminua drasticamente.

As velocidades que esta rede pode atingir chegam a mais de 300 Mbit/s em dispositivos compatíveis, do contrário da rede 2.4.

Prefira estar conectado sempre nesta rede, a não ser que você se distancie a mais de 5 metros do roteador (e neste caso vale a dica de colocar um segundo roteador na sua residência ou uma rede mesh - veremos a seguir).
### Redes Mesh

Este é um termo mais técnico que nomeia os roteadores compatíveis com uma tecnologia de distribuição inteligente de conexão.

Como funciona? A imagem abaixo[^1] ilustra a aplicação de uma rede mesh a uma residência com vários pavimentos/andares (é um gif, tente abrir em outra aba casa o boneco não ande):

![Imagem animada ilustrando redes mesh com boneco se movimentando entre andares de uma casa](/public/img/rede-mesh.gif)

Roteadores compatíveis com esta tecnologia fornecem uma excelente experiência e qualidade de conexão. Hoje em dia tais equipamentos podem ser encontrados em combos com duas ou três unidades (vide a linha Deco da fabricante TP-Link).

Prefira este tipo de rede Wi-Fi em uma grande residência ou em residências com vários andares. Ela irá prevenir quedas de conexão decorrentes de um sinal fraco, pois o próprio roteador definirá qual o melhor ponto de acesso para o seu dispositivo, consequentemente o sinal sempre será o melhor!

***
## Perguntas Frequentes

<details>
<summary>Por qual razão devo desconectar os equipamentos da tomada por 2 minutos e desativar a rede Wi-Fi dos dispositivos por alguns minutos para melhorar a minha conexão? </summary>
<div>

**_No tangente à rede Wi-Fi_**, os sinais de sincronia (beacons) estão sempre sendo trocados entre o roteador e o seu dispositivo. Desconectar da tomada o roteador e desativar a rede Wi-Fi dos seus dispositivos por alguns minutos fará com que a comunicação seja totalmente restabelecida e qualquer erro de transmissão seja eliminado.

**_Em conexões via cabo_** (em termos técnicos: por Ethernet), o ato de reiniciar os equipamentos possui o mesmo efeito ao da rede Wi-Fi. Neste caso o cabo deve ser desconectado no dispositivo receptor e no roteador e, em algumas situações, reiniciar televisões, computadores e consoles de videogame também pode ser necessário.

**_Equipamentos eletrônicos ligados por muito tempo tendem a acumular muitos erros em memória_**, o que pode ocasionar perda de conexão, lentidão, entre outros sintomas. Tente deixar um computador ligado por mais de 5 dias, dependendo do equipamento pode ficar praticamente inutilizável. Sendo assim, também é recomendado desconectar o seu roteador e modem da tomada por 2 minutos a cada 7 dias, no mínimo.
</div>
</details>


<details>
<summary>Por que a velocidade contratada junto ao meu provedor não chega nos meus dispositivos via Wi-Fi?</summary>
<div>

**_Pois a conexão em uma rede sem fio depende de vários fatores_**, alguns deles: distância e quantidade de obstáculos físicos (paredes, móveis, etc) entre o seu dispositivo (receptor) e o roteador (emissor), além da qualidade dos equipamentos receptores e emissores.

> _Não adianta ter um plano de 300 megas e possuir um celular básico que custa R$800 por exemplo, ou um plano de 300 megas com um roteador de uma ou duas antenas_.

**_Na maioria dos provedores o plano contratado é o máximo que os seus dispositivos poderão alcançar_**, portanto, dependerá da limitação de cada dispositivo. Planos maiores são bons para o usuário que possui muitos dispositivos na residência, mais de 7 conectados na maior parte do tempo por exemplo. Atualmente serviços como Youtube e Netflix em qualidade máxima consomem no máximo 40 Mbit/s (considere que a qualidade máxima não será utilizada a maior parte do tempo, a não ser que você possua uma TV com mais de 50", neste caso se tornaria útil uma qualidade maior).

**_Fuja de aparelhos TV box não homologados pela Anatel e de aplicativos IPTV e sites de filmes online que sejam ilegais/piratas._** Exemplos de aparelhos TV box piratas: HTV, TOCOMSAT, AZBox, Blue TV, BTV, XTV, MXQ, entre tantos outros. Estes equipamentos, aplicativos e sites utilizam a sua conexão de forma ilegal, e alguns deles utilizam a sua conexão para outros fins além da transmissão pirata, então fuja e procure informações antes de adquirir tais serviços (em fontes confiáveis como jornais ou portais de notícia online). Nestes equipamentos normalmente a velocidade contratada não irá chegar, nem por cabo, pois a qualidade dos equipamentos é duvidosa e [isto já foi comprovado pela Anatel](https://canaltech.com.br/seguranca/anatel-encontra-malware-na-tv-box-mais-vendida-no-brasil-205058/). Prefira a aquisição de aparelhos homologados pela Anatel, como Mi TV stick, Mi TV box, Amazon Fire Stick, Aquario TV box, etc. Não utilize aplicativos e sites de conteúdo pirata, prefira os aplicativos de streaming oficiais como Disney Plus, Netflix, Pluto TV, Paramount Plus, Amazon Prime Video, entre tantos outros que existem por aí (muitas vezes é melhor pagar para ter uma melhor qualidade do que sofrer com algo que só dá dor de cabeça).

**_A quantidade de dispositivos conectados na sua rede influencia no resultados dos testes_** (como os realizados em sites como speedtest.net, fast.com ou minhaconexao.com.br) pois quanto mais dispositivos conectados, menor será o resultado do teste (muitos dispositivos conectados no roteador podem consumir, além de velocidade, processamento do seu roteador - então certifique-se de que o seu roteador seja bom o suficiente para dar conta do recado).

**_Se você continuar com uma pulga atrás da orelha a respeito da velocidade que você está recebendo do seu provedor_**, faça como a Anatel orienta: entre no site [https://www.brasilbandalarga.com.br/bbl/](https://www.brasilbandalarga.com.br/bbl/) leia as orientações (ponto de interrogação ? próximo ao botão de iniciar o teste) e sempre efetue a aferição em um computador compatível com o seu plano (para velocidades acima de 100 megas o seu computador deve possuir uma placa de rede comumente chamada gigabit) conectado diretamente ao seu roteador por cabo de rede, ou peça para o seu provedor encaminhar uma equipe ao local.

</div>
</details>


<details>
<summary>Como posso efetuar a aquisição de dispositivos que podem me fornecer uma melhor qualidade via Wi-Fi?</summary>
<div>

 Defina o preço que você pode pagar.
2. Realize uma pesquisa segundo os critérios a seguir:  
    - **_Para telefones_**, eles devem ser compatíveis com o padrão AC do Wi-Fi, possuir processador octa core de 1.8 GHz ou mais e memória RAM de 4 GB ou mais.  
    - **_Para computadores_**, além de também serem compatíveis com o padrão AC, devem possuir uma placa de rede gigabit (para conexões via cabo de maior velocidade), processador no mínimo quad core de 1.8GHz ou mais, e, no mínimo, 8GB de memória RAM.  
    - **_Para roteadores_**, leve em consideração o tamanho da sua residência: casas grandes (incluindo as com mais de um andar), invista em soluções mesh; casas normais, compre um roteador com várias antenas (mais de 4, se possível) e que suportem planos maiores que 100 Mbit/s (devem ser gigabit, assim como computadores). Se a sua casa não for grande e mesmo assim o roteador não consiga dar conta de enviar o sinal até os fundos ou até onde você utiliza, compre um segundo roteador, de preferência do mesmo modelo (a instalação deverá ser via cabo de rede e poderá ser realizada por uma equipe do seu provedor, algum prestador de serviço ou por você mesmo - é relativamente simples). **Não caia na onda dos repetidores de sinal**, eles são mais inseguros e geralmente espalham um sinal que já estava ruim para o resto da sua casa, pecando muito em qualidade.
3. Escolha a melhor loja para adquirir o seu equipamento. Dê preferência para lojas especializadas com consultores bem preparados (no momento você já sabe mais do que boa parte dos vendendores que encontramos por aí).
4. **_Não se deixe levar pelo marketing de produtos_**. As velocidades estampadas nas caixas dos seus roteadores são apenas nominais. Na prática as velocidades atingidas chegam a até 30% da velocidade nominal em dispositivos compatíveis (raramente passam disso).
5. **_Tenha sempre em mente que o barato pode sair caro_**. Principalmente na área de tecnologia, produtos mais baratos tendem a dar mais dor de cabeça, pesquisa e opte pela melhor compra!

</div>
</details>

***
## Resumo: boas práticas para o melhor uso e observações

1. **_Esteja há, NO MÁXIMO, 5 metros afastado do seu roteador_** para uma utilização com o mínimo de qualidade. Leve em consideração o nível de sinal que está sendo recebido no seu dispositivo: nos celulares, na parte superior deve aparecer uma antena semelhante à imagem deste post e ela deve estar o mais cheia possível.
2. **_Tenha certeza de que o plano contratado junto ao seu provedor dá conta da demanda_**: se você possui um plano de 30 Mbit/s e normalmente conecta 10 ou mais dispositivos na sua rede, amplie a velocidade contratada urgentemente.
3. **_O seu roteador deve estar a_** uma distância de 1.5 m do chão, visível (longe de móveis) e fixado na parede (com pregos, cola quente ou fita 3M, o que você preferir). Cobre isto do técnico no momento da instalação!
4. **_O uso de aplicativos como_** Wi-Fi Analyzer (ajuda você a visualizar as interfências na rede) e Signal Strength (mostra a você o nível de sinal que o seu dispositivo possui) ajuda você a mitigar possíveis instabilidades na sua conexão ou a fornecer um diagnóstico para a equipe do seu provedor. Ambos são para Android.
5. **_Para testes de velocidade_**: prefira via cabo de rede em um computador com placa de rede gigabit. Na ausência deste, esteja a no mínimo 1 metro e no máximo 2 metros do seu roteador (certifique-se de que ele esteja visível para você), conecte o seu dispositivo na rede Wi-Fi de padrão AC (nome com final 5G) e realize o teste nos seguinte sites: fast.com, minhaconexao.com.br e speedtest.net (o resultado pode variar, por isso é bom testar em mais de um dispositivo e em mais de um site, não ao mesmo tempo - obviamente). Caso o seu dispositivo não seja compatível com o padrão AC, o resultado estará limitado a, no máximo, 70 megas, podendo ficar entre 30 e 50 megas (tudo dependerá do ambiente, por isso a necessidade de um teste via cabo).
6. **_Televisões e consoles de videogame necessitam de uma conexão via cabo de rede para uma melhor qualidade_**, negocie o cabeamento de seus equipamentos junto ao seu provedor ou prestador de serviço. Televisões são conhecidas por problemas de conexão via Wi-Fi (principalmente as mais básicas, na faixa de R$800 a R$2.000) e consoles de videogame precisam de uma conexão estável, tanto para jogar quanto para baixar jogos.
7. **_Utilize aparelhos e aplicações de qualidade_**: prefira aparelhos homologados pela Anatel e aplicativos das próprias distribuidoras de conteúdo (Netflix, Pluto TV, Paramount +, etc). Sempre busque análises e opiniões de outras pessoas na internet em sites de análises especializadas (como Canaltech, Tecmundo, Tecnoblog, TechTudo, Olhar Digital, Infowester, entre outros).
8. **_Divida a velocidade contratada por 8_** e você terá a taxa de download máxima que o seu dispositivo conseguirá alcançar ao baixar algum arquivo ou jogo. Mas acredito que isso você já sabia. :D

***
> Este texto foi elaborado para ser o menos técnico possível, apto a ser lido por uma pessoa leiga e entendido corretamente. Caso haja algum pecado técnico, ignore por gentileza. Artigos mais técnicos virão no futuro.
***
## Referências e fontes (alguns em inglês)

**Sobre as ondas eletromagnéticas e demais características e dicas sobre roteadores**

- [https://pt.wikipedia.org/wiki/Radiofrequ%C3%AAncia](https://pt.wikipedia.org/wiki/Radiofrequ%C3%AAncia)
- [https://www.uol.com.br/tilt/noticias/redacao/2019/02/12/sim-posicionar-o-roteador-mais-alto-possivel-melhora-o-sinal-entenda.htm](https://www.uol.com.br/tilt/noticias/redacao/2019/02/12/sim-posicionar-o-roteador-mais-alto-possivel-melhora-o-sinal-entenda.htm)
- [https://brasilescola.uol.com.br/fisica/espectro-eletromagnetico.htm](https://brasilescola.uol.com.br/fisica/espectro-eletromagnetico.htm)
- [https://medium.com/ubntbr/como-o-sinal-wifi-%C3%A9-propagado-na-natureza-d87daef39575](https://medium.com/ubntbr/como-o-sinal-wifi-é-propagado-na-natureza-d87daef39575)

**Sobre a especificação do Wi-Fi (padrões, sinal, canais, largura, etc)**

- [https://www.electronics-notes.com/articles/connectivity/wifi-ieee-802-11/channels-frequencies-bands-bandwidth.php](https://www.electronics-notes.com/articles/connectivity/wifi-ieee-802-11/channels-frequencies-bands-bandwidth.php)
- [https://www.netspotapp.com/pt/wifi-signal-strength-and-its-impact.html](https://www.netspotapp.com/pt/wifi-signal-strength-and-its-impact.html)
- [https://pt.wikipedia.org/wiki/Largura_de_barramento](https://pt.wikipedia.org/wiki/Largura_de_barramento)
- [https://en.wikipedia.org/wiki/IEEE_802.11](https://en.wikipedia.org/wiki/IEEE_802.11)

**IPTV e TV box piratas**

- [https://tecnoblog.net/noticias/2021/08/27/exclusivo-btv-htv-e-mais-de-100-tv-box-piratas-entram-na-mira-da-anatel-e-ancine/](https://tecnoblog.net/noticias/2021/08/27/exclusivo-btv-htv-e-mais-de-100-tv-box-piratas-entram-na-mira-da-anatel-e-ancine/)
- [https://www.terra.com.br/noticias/tecnologia/anatel-ja-apreendeu-r-1578-milhoes-em-tv-box-e-mais-produtos-irregulares,35179e545f2bcbdce06e7c215ed2bcc6sw1u3oc1.html](https://www.terra.com.br/noticias/tecnologia/anatel-ja-apreendeu-r-1578-milhoes-em-tv-box-e-mais-produtos-irregulares,35179e545f2bcbdce06e7c215ed2bcc6sw1u3oc1.html)
- [https://canaltech.com.br/seguranca/anatel-encontra-malware-na-tv-box-mais-vendida-no-brasil-205058/](https://canaltech.com.br/seguranca/anatel-encontra-malware-na-tv-box-mais-vendida-no-brasil-205058/)

***

[^1]: Fonte: [https://blog.tp-link.pt/preciso-de-uma-rede-mesh-wi-fi/](https://blog.tp-link.pt/preciso-de-uma-rede-mesh-wi-fi/)