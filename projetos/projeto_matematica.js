// SELETORES DO DOM
const conteudo = document.getElementById('conteudo');
const btnBasicMath = document.getElementById('btn-basic-math');
const btnAdvancedMath = document.getElementById('btn-advanced-math');
const categorySelector = document.getElementById('category-selector');
const viewHistoryBtn = document.getElementById('view-history-btn');

// SELETORES PARA O SIMULADO
const simuladoContainer = document.getElementById('simulado-container');
const resultsContainer = document.getElementById('results-container');
const questionNumberElement = document.getElementById('question-number');
const timerElement = document.getElementById('timer');
const questionTextElement = document.getElementById('question-text');
const optionsContainer = document.getElementById('options-container');
const prevQuestionBtn = document.getElementById('prev-question-btn');
const nextQuestionBtn = document.getElementById('next-question-btn');
const finishSimuladoBtn = document.getElementById('finish-simulado-btn');
const simuladoFeedbackElement = document.getElementById('simulado-feedback');
const questionNavBar = document.getElementById('question-nav-bar');
const pauseResumeBtn = document.getElementById('pause-resume-btn');

// SELETORES PARA A TELA DE RESULTADOS
const correctAnswersCountElement = document.getElementById('correct-answers-count');
const totalQuestionsCountElement = document.getElementById('total-questions-count');
const finalScoreElement = document.getElementById('final-score');
const reviewArea = document.getElementById('review-area');
const startNewSimuladoBtn = document.getElementById('start-new-simulado-btn');

// VARIÁVEIS DE ESTADO DO SIMULADO
let currentQuestions = [];
let currentQuestionIndex = 0;
let userAnswers = [];
let timerInterval;
let timeElapsed = 0;
let timerRunning = false;
let currentCategory = 'basic';

// --- DADOS DOS TÓPICOS ---
// Armazena os conteúdos dos tópicos de matemática básica
const basicTopicsData = {
    "operacoes-basicas": {
        titulo: "Operações Básicas: Fundamentos da Matemática",
        texto: `
            <h2>➕➖✖️➗ Operações Básicas: A Base de Toda a Matemática!</h2>
            <p>As operações básicas são o alicerce sobre o qual toda a matemática é construída. Dominá-las é fundamental não só para o ENEM, mas para qualquer cálculo no dia a dia. Refrescar e aprofundar esses conhecimentos é o primeiro passo para o sucesso em tópicos mais complexos!</p>

            <h3>💡 1. Adição (Soma)</h3>
            <p>A adição é a operação de combinar quantidades. O resultado da adição é chamado de <strong>soma</strong> ou <strong>total</strong>.</p>
            <ul>
                <li><strong>Símbolo:</strong> + (mais)</li>
                <li><strong>Termos:</strong> Parcelas</li>
            </ul>
            <p><strong>Exemplo:</strong> Se você tem 5 laranjas e ganha mais 3, quantas laranjas você tem no total?</p>
            <p>5 + 3 = 8</p>
            <p><strong>Propriedades Importantes:</strong></p>
            <ul>
                <li><strong>Comutativa:</strong> A ordem das parcelas não altera a soma. Ex: 2 + 3 = 3 + 2 = 5</li>
                <li><strong>Associativa:</strong> Na adição de três ou mais parcelas, a forma como as parcelas são agrupadas não altera a soma. Ex: (2 + 3) + 4 = 2 + (3 + 4) = 9</li>
                <li><strong>Elemento Neutro:</strong> O zero é o elemento neutro da adição, pois qualquer número somado a zero resulta no próprio número. Ex: 7 + 0 = 7</li>
            </ul>

            <h3>💡 2. Subtração (Diferença)</h3>
            <p>A subtração é a operação de retirar uma quantidade de outra ou de comparar quantidades para encontrar a diferença. O resultado da subtração é chamado de <strong>diferença</strong> ou <strong>resto</strong>.</p>
            <ul>
                <li><strong>Símbolo:</strong> - (menos)</li>
                <li><strong>Termos:</strong> Minuendo (o número do qual se subtrai) e Subtraendo (o número que é subtraído).</li>
            </ul>
            <p><strong>Exemplo:</strong> Se você tem 10 maçãs e come 4, quantas maçãs sobram?</p>
            <p>10 - 4 = 6</p>
            <p><strong>Atenção:</strong> A subtração não possui as propriedades comutativa e associativa.</p>

            <h3>💡 3. Multiplicação (Produto)</h3>
            <p>A multiplicação é uma forma abreviada de adição de parcelas iguais. O resultado da multiplicação é chamado de <strong>produto</strong>.</p>
            <ul>
                <li><strong>Símbolos:</strong> × ou * ou .</li>
                <li><strong>Termos:</strong> Fatores (os números que estão sendo multiplicados).</li>
            </ul>
            <p><strong>Exemplo:</strong> Se você tem 3 caixas e cada caixa tem 4 lápis, quantos lápis você tem no total?</p>
            <p>3 × 4 = 12 (É o mesmo que 4 + 4 + 4)</p>
            <p><strong>Propriedades Importantes:</strong></p>
            <ul>
                <li><strong>Comutativa:</strong> A ordem dos fatores não altera o produto. Ex: 2 × 3 = 3 × 2 = 6</li>
                <li><strong>Associativa:</strong> Na multiplicação de três ou mais fatores, a forma como os fatores são agrupados não altera o produto. Ex: (2 × 3) × 4 = 2 × (3 × 4) = 24</li>
                <li><strong>Elemento Neutro:</strong> O um (1) é o elemento neutro da multiplicação. Ex: 7 × 1 = 7</li>
                <li><strong>Elemento Nulo (Zero):</strong> Qualquer número multiplicado por zero resulta em zero. Ex: 7 × 0 = 0</li>
                <li><strong>Distributiva:</strong> Um fator pode ser distribuído sobre uma soma ou subtração. Ex: 2 × (3 + 4) = (2 × 3) + (2 × 4) = 6 + 8 = 14</li>
            </ul>

            <h3>💡 4. Divisão (Quociente)</h3>
            <p>A divisão é a operação de repartir uma quantidade em partes iguais ou de verificar quantas vezes uma quantidade cabe em outra. O resultado da divisão é chamado de <strong>quociente</strong>.</p>
            <ul>
                <li><strong>Símbolos:</strong> ÷ ou / ou :</li>
                <li><strong>Termos:</strong> Dividendo (o número a ser dividido), Divisor (o número que divide), Quociente (o resultado) e Resto (o que sobra da divisão, se não for exata).</li>
            </ul>
            <p><strong>Exemplo:</strong> Você tem 12 balas para dividir igualmente entre 3 amigos. Quantas balas cada amigo recebe?</p>
            <p>12 ÷ 3 = 4</p>
            <p><strong>Atenção:</strong> O divisor nunca pode ser zero! Divisão por zero é indefinida.</p>

            <h3>🔢 Ordem das Operações (Prioridade) - "PEMDAS" ou "Parênteses, Expoentes, Multiplicação/Divisão, Adição/Subtração"</h3>
            <p>Em expressões com várias operações, é fundamental seguir uma ordem específica para chegar ao resultado correto:</p>
            <ol>
                <li><strong>Parênteses ( ) , Colchetes [ ] , Chaves { }:</strong> Resolva primeiro as operações dentro dos agrupamentos, do mais interno para o mais externo.</li>
                <li><strong>Expoentes (Potenciação) e Raízes (Radiciação):</strong> Resolva as potências e raízes.</li>
                <li><strong>Multiplicação (×, *) e Divisão (÷, /):</strong> Resolva da esquerda para a direita.</li>
                <li><strong>Adição (+) e Subtração (-):</strong> Resolva da esquerda para a direita.</li>
            </ol>
            <p><strong>Mnemônico para lembrar:</strong> <strong>PEMDAS</strong> (Parênteses, Expoentes, Multiplicação e Divisão, Adição e Subtração) ou <strong>"Pares Ou Ímpares, Multiplicação e Divisão, Adição e Subtração"</strong>.</p>
            <p><strong>Exemplo:</strong> Resolva 5 + 3 × (8 - 4) ÷ 2</p>
            <ol>
                <li>Parênteses: 5 + 3 × 4 ÷ 2</li>
                <li>Multiplicação: 5 + 12 ÷ 2</li>
                <li>Divisão: 5 + 6</li>
                <li>Adição: 11</li>
            </ol>

            <h3>🧩 Exemplo Resolvido: Aplicação da Ordem das Operações</h3>
            <p>
                <strong>Problema:</strong> Um padeiro produziu 150 pães pela manhã. Vendeu 80 pães no período da manhã e, à tarde, vendeu o dobro da quantidade que sobrou da manhã. Quantos pães o padeiro vendeu no total?
                <br><strong>Resolução Detalhada:</strong>
                <br>1. **Pães que sobraram da manhã:**
                <br>   - Pães produzidos - Pães vendidos = 150 - 80 = 70 pães.
                <br>2. **Pães vendidos à tarde:**
                <br>   - O dobro do que sobrou: 2 × 70 = 140 pães.
                <br>3. **Total de pães vendidos:**
                <br>   - Vendidos de manhã + Vendidos à tarde = 80 + 140 = 220 pães.
                <br><strong>Resposta Final:</strong> O padeiro vendeu um total de <strong>220 pães</strong>.
            </p>

            <h3>📝 Exercícios de Fixação</h3>
            <ol>
                <li>
                    Resolva a expressão: 10 + 4 × (7 - 2) ÷ 2.<br>
                    <input type="number" id="resposta-opbas-ex1" placeholder="Resposta">
                    <button onclick="verificarOpBasica1()">Verificar</button>
                    <span id="feedback-opbas-ex1"></span>
                </li>
                <li>
                    Se um caixa tinha R$ 500 e recebeu três depósitos de R$ 120 cada, e depois fez dois pagamentos de R$ 80 cada, qual o saldo final do caixa?<br>
                    <input type="number" id="resposta-opbas-ex2" placeholder="Resposta">
                    <button onclick="verificarOpBasica2()">Verificar</button>
                    <span id="feedback-opbas-ex2"></span>
                </li>
                <li>
                    Uma professora comprou 20 lápis por R$ 2,50 cada e 15 canetas por R$ 3,00 cada. Se ela pagou com uma nota de R$ 100,00, quanto recebeu de troco?<br>
                    <input type="number" id="resposta-opbas-ex3" placeholder="Resposta">
                    <button onclick="verificarOpBasica3()">Verificar</button>
                    <span id="feedback-opbas-ex3"></span>
                </li>
            </ol>
        `
    },
    "numeros-inteiros": {
        titulo: "Números Inteiros: Compreendendo o Conjunto Z",
        texto: `
        <h2>📚 Números Inteiros: Uma Base Essencial para o ENEM!</h2>
        <p>Prepare-se para dominar os números inteiros, um conceito fundamental que permeia diversos tópicos da matemática básica e é frequentemente cobrado no ENEM. Compreender os inteiros é o primeiro passo para resolver problemas de lógica, finanças, temperatura e muito mais!</p>

        <h3>💡 O Que São Números Inteiros (Conjunto Z)?</h3>
        <p>Os números inteiros são um conjunto que engloba os <strong>números naturais</strong> (0, 1, 2, 3, ...) e seus respectivos <strong>números negativos</strong> (-1, -2, -3, ...). Eles são representados pela letra <strong>Z</strong>, que vem do alemão "Zahlen" (números).</p>
        <p>A característica principal dos números inteiros é que eles <strong>não possuem partes decimais ou fracionárias</strong>. Imagine-os como degraus de uma escada infinita que se estende tanto para cima (positivos) quanto para baixo (negativos), com o zero no centro.</p>
        <p><strong>Exemplos do dia a dia onde usamos inteiros:</strong></p>
        <ul>
            <li><strong>Temperaturas:</strong> 5°C acima de zero (+5°C) ou 10°C abaixo de zero (-10°C).</li>
            <li><strong>Saldos Bancários:</strong> Você tem R$200 na conta (+200) ou está devendo R$50 (-50).</li>
            <li><strong>Altitudes:</strong> 300 metros acima do nível do mar (+300m) ou 20 metros abaixo do nível do mar (-20m).</li>
            <li><strong>Andares de um prédio:</strong> Térreo (0), 3º andar (+3), 2º subsolo (-2).</li>
        </ul>

        <h3>➕➖ Operações Fundamentais com Números Inteiros</h3>
        <p>As operações com inteiros seguem regras específicas para os sinais. Dominá-las é crucial!</p>

        <h4>1. Adição e Subtração</h4>
        <ul>
            <li><strong>Sinais IGUAIS:</strong> Some os valores absolutos e mantenha o sinal comum.
                <ul>
                    <li>Ex: <strong>5 + 3 = 8</strong> (ambos positivos, resultado positivo)</li>
                    <li>Ex: <strong>(−5) + (−3) = −8</strong> (ambos negativos, some 5+3 e mantenha o sinal negativo)</li>
                </ul>
            </li>
            <li><strong>Sinais DIFERENTES:</strong> Subtraia o menor valor absoluto do maior e mantenha o sinal do número que tiver o maior valor absoluto.
                <ul>
                    <li>Ex: <strong>5 + (−3) = 2</strong> (5 é maior que 3, 5-3=2, sinal do 5 é positivo)</li>
                    <li>Ex: <strong>(−5) + 3 = −2</strong> (5 é maior que 3, 5-3=2, sinal do 5 é negativo)</li>
                    <li>Ex: <strong>7 - 10 = −3</strong> (Pode ser visto como 7 + (-10). O 10 é maior, então 10-7=3, sinal do 10 é negativo)</li>
                </ul>
            </li>
        </ul>

        <h4>2. Multiplicação e Divisão</h4>
        <p>A "regra dos sinais" é fundamental aqui:</p>
        <table style="width:100%; border-collapse: collapse; margin: 1em 0;">
            <thead>
                <tr style="background-color: var(--color-background-medium);">
                    <th style="padding: 8px; border: 1px solid #ddd; text-align: left;">Operação</th>
                    <th style="padding: 8px; border: 1px solid #ddd; text-align: left;">Regra</th>
                    <th style="padding: 8px; border: 1px solid #ddd; text-align: left;">Exemplo</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td style="padding: 8px; border: 1px solid #ddd;">(+) × (+) ou (+) ÷ (+)</td>
                    <td style="padding: 8px; border: 1px solid #ddd;">Resultado Positivo (+)</td>
                    <td style="padding: 8px; border: 1px solid #ddd;">5 × 3 = 15 | 10 ÷ 2 = 5</td>
                </tr>
                <tr>
                    <td style="padding: 8px; border: 1px solid #ddd;">(−) × (−) ou (−) ÷ (−)</td>
                    <td style="padding: 8px; border: 1px solid #ddd;">Resultado Positivo (+)</td>
                    <td style="padding: 8px; border: 1px solid #ddd;">(−5) × (−3) = 15 | (−10) ÷ (−2) = 5</td>
                </tr>
                <tr>
                    <td style="padding: 8px; border: 1px solid #ddd;">(+) × (−) ou (+) ÷ (−)</td>
                    <td style="padding: 8px; border: 1px solid #ddd;">Resultado Negativo (−)</td>
                    <td style="padding: 8px; border: 1px solid #ddd;">5 × (−3) = −15 | 10 ÷ (−2) = −5</td>
                </tr>
                <tr>
                    <td style="padding: 8px; border: 1px solid #ddd;">(−) × (+) ou (−) ÷ (+)</td>
                    <td style="padding: 8px; border: 1px solid #ddd;">Resultado Negativo (−)</td>
                    <td style="padding: 8px; border: 1px solid #ddd;">(−5) × 3 = −15 | (−10) ÷ 2 = −5</td>
                </tr>
            </tbody>
        </table>

        <h3>🧩 Exemplo Resolvido: Aplicação no Cotidiano</h3>
        <p>Para o ENEM, é comum que os problemas apresentem situações-problema que exigem a aplicação dos conceitos de números inteiros.</p>
        <p>
            <strong>Problema:</strong> Em um dia de inverno rigoroso, a temperatura em uma cidade começou em −3&nbsp;°C pela manhã. Ao meio-dia, a temperatura subiu 7&nbsp;°C. À noite, a temperatura caiu 5&nbsp;°C. Qual era a temperatura à noite?
            <br><strong>Resolução Detalhada:</strong>
            <br>1. <strong>Temperatura inicial:</strong> −3&nbsp;°C
            <br>2. <strong>Subida ao meio-dia:</strong> Subir significa adicionar. Então: −3 + 7 = 4&nbsp;°C.
            <br>   (Pense: "Estou devendo 3 e ganho 7. Pago a dívida e me sobram 4.")
            <br>3. <strong>Queda à noite:</strong> Cair significa subtrair. Então, da temperatura do meio-dia (4°C), subtraímos 5°C: 4 − 5 = −1&nbsp;°C.
            <br>   (Pense: "Tenho 4 e preciso pagar 5. Fico devendo 1.")
            <br><strong>Resposta Final:</strong> A temperatura à noite era de <strong>−1&nbsp;°C</strong>.
        </p>

        <h3>📝 Exercício de Fixação</h3>
        <p>
            Um submarino está a 150 metros abaixo do nível do mar (representado por −150&nbsp;m). Ele sobe 80 metros e, em seguida, desce 40 metros. Qual a nova profundidade do submarino em relação ao nível do mar?
        </p>
        <input type="number" id="resposta-inteiros" placeholder="Digite sua resposta">
        <button onclick="verificarRespostaInteiros()">Verificar</button>
        <p id="feedback-inteiros"></p>
        `
    },
    "fracoes": {
        titulo: "Frações: Entendendo Partes de um Todo",
        texto: `
        <h2>🍕 Frações: Dividindo e Conquistando a Matemática!</h2>
        <p>Frações são essenciais para o ENEM e para o dia a dia. Elas nos permitem representar partes de um todo, proporções e divisões. Desde receitas culinárias até cálculos de juros, as frações estão por toda parte!</p>

        <h3>💡 O Que São Frações? (Numerador e Denominador)</h3>
        <p>Uma fração é uma forma de expressar uma quantidade que é uma parte de um todo. Ela é escrita como <strong>a/b</strong>, onde:</p>
        <ul>
            <li><strong>Numerador (a):</strong> É o número que fica na parte de cima da fração. Ele indica <strong>quantas partes</strong> estamos considerando do todo.</li>
            <li><strong>Denominador (b):</strong> É o número que fica na parte de baixo da fração. Ele indica em <strong>quantas partes iguais</strong> o todo foi dividido.</li>
        </ul>
        <p><strong>Regra de Ouro:</strong> O denominador (b) nunca pode ser zero, pois não podemos dividir algo por zero!</p>
        <p><strong>Exemplos Visuais:</strong></p>
        <ul>
            <li><strong>1/2 (Um Meio):</strong> Significa que o todo foi dividido em 2 partes iguais e estamos pegando 1 dessas partes. (Pense em "metade")</li>
            <li><strong>3/4 (Três Quartos):</strong> O todo foi dividido em 4 partes iguais e pegamos 3 delas.</li>
            <li><strong>5/8 (Cinco Oitavos):</strong> O todo foi dividido em 8 partes iguais e pegamos 5 delas.</li>
        </ul>

        <h3>📊 Tipos de Frações</h3>
        <p>Conhecer os tipos de frações ajuda na hora de interpretar e simplificar:</p>
        <ul>
            <li><strong>Frações Próprias:</strong> O numerador é MENOR que o denominador. Representam uma quantidade menor que um inteiro.
                <br>Ex: 1/2 (metade de algo), 3/5 (menos que um todo).
            </li>
            <li><strong>Frações Impróprias:</strong> O numerador é MAIOR ou IGUAL ao denominador. Representam uma quantidade igual ou maior que um inteiro.
                <br>Ex: 5/3 (mais que um todo, pois 5 é maior que 3), 7/7 (um todo).
                <br>Frações impróprias podem ser escritas como <strong>números mistos</strong> (um número inteiro mais uma fração própria).
                <br>Ex: 5/3 = 1 e 2/3 (lê-se "um inteiro e dois terços"). Para converter, divida o numerador pelo denominador: o quociente é o inteiro, o resto é o novo numerador, e o denominador se mantém.
            </li>
            <li><strong>Frações Aparentes:</strong> São um tipo especial de fração imprópria onde o numerador é um MÚLTIPLO do denominador. Elas representam um número inteiro.
                <br>Ex: 6/3 = 2 (pois 6 dividido por 3 é 2), 10/5 = 2.
            </li>
        </ul>

        <h3>➕➖✖️➗ Operações com Frações: Passo a Passo</h3>

        <h4>1. Adição e Subtração</h4>
        <ul>
            <li><strong>Denominadores IGUAIS:</strong> É fácil! Apenas some ou subtraia os numeradores e mantenha o denominador.
                <br>Ex: 2/5 + 1/5 = (2+1)/5 = 3/5
                <br>Ex: 7/8 − 3/8 = (7-3)/8 = 4/8 (Simplificando: 1/2)
            </li>
            <li><strong>Denominadores DIFERENTES:</strong> Este é o truque! Você precisa encontrar um <strong>denominador comum</strong>. O método mais eficiente é encontrar o MMC (Mínimo Múltiplo Comum) dos denominadores.
                <br><strong>Passos:</strong>
                <br>1. Encontre o MMC dos denominadores.
                <br>2. Divida o MMC pelo denominador original de cada fração e multiplique o resultado pelo respectivo numerador.
                <br>3. Some ou subtraia os novos numeradores e mantenha o MMC como denominador.
                <br>Ex: 1/2 + 1/3
                <br>   - MMC de 2 e 3 é 6.
                <br>   - Para 1/2: (6 ÷ 2) × 1 = 3. Então 1/2 = 3/6.
                <br>   - Para 1/3: (6 ÷ 3) × 1 = 2. Então 1/3 = 2/6.
                <br>   - Soma: 3/6 + 2/6 = 5/6.
            </li>
        </ul>

        <h4>2. Multiplicação</h4>
        <p>A multiplicação de frações é a mais simples!</p>
        <p>Basta multiplicar numerador por numerador e denominador por denominador.</p>
        <p>Ex: 2/3 × 1/4 = (2 × 1) / (3 × 4) = 2/12 (Simplificando: 1/6)</p>
        <p>Ex: 3/5 × 10/9 = (3 × 10) / (5 × 9) = 30/45 (Simplificando: 2/3)</p>

        <h4>3. Divisão</h4>
        <p>Para dividir frações, use a regra "Mantenha, Mude, Inverta":</p>
        <p>Mantenha a primeira fração, Mude a operação para multiplicação, e Inverta a segunda fração (troque numerador por denominador).</p>
        <p>Ex: 1/2 ÷ 3/4</p>
        <p>   - Mantenha 1/2</p>
        <p>   - Mude ÷ para ×</p>
        <p>   - Inverta 3/4 para 4/3</p>
        <p>   - Resultado: 1/2 × 4/3 = (1 × 4) / (2 × 3) = 4/6 (Simplificando: 2/3)</p>

        <h4>4. Simplificação de Frações</h4>
        <p>Simplificar uma fração significa escrevê-la na sua forma mais simples ou irredutível, dividindo o numerador e o denominador pelo mesmo número (um divisor comum) até que não seja mais possível dividi-los por nenhum número inteiro (exceto 1).</p>
        <p>Para encontrar a fração irredutível, você pode dividir pelo MDC (Máximo Divisor Comum) ou por divisores comuns sucessivamente.</p>
        <p>Ex: Simplificar 12/18</p>
        <p>   - Divida por 2: (12÷2) / (18÷2) = 6/9</p>
        <p>   - Divida por 3: (6÷3) / (9÷3) = 2/3 (Forma irredutível)</p>
        <p>Ou, diretamente pelo MDC de 12 e 18, que é 6: (12÷6) / (18÷6) = 2/3.</p>

        <h3>🧩 Exemplo Resolvido: Problema Composto com Frações</h3>
        <p>
            <strong>Problema:</strong> Joana leu 1/5 de um livro no primeiro dia e 3/10 no segundo dia. Que fração do livro Joana leu no total? Se o livro tem 200 páginas, quantas páginas ela ainda precisa ler?
            <br><strong>Resolução Detalhada:</strong>
            <br>1. <strong>Calcular a fração total lida:</strong>
            <br>   - Precisamos somar as frações: 1/5 + 3/10.
            <br>   - Encontre o MMC de 5 e 10, que é 10.
            <br>   - Ajuste 1/5 para ter denominador 10: (1 × 2) / (5 × 2) = 2/10.
            <br>   - Agora some: 2/10 + 3/10 = 5/10.
            <br>   - Simplifique a fração lida: 5/10 = 1/2.
            <br>   Joana leu 1/2 do livro.
            <br>2. <strong>Calcular a fração restante:</strong>
            <br>   - O livro inteiro é representado por 1 (ou 2/2).
            <br>   - Fração restante = 1 - 1/2 = 1/2.
            <br>   Joana ainda precisa ler 1/2 do livro.
            <br>3. <strong>Calcular as páginas restantes:</strong>
            <br>   - Se o livro tem 200 páginas e ela precisa ler 1/2, então:
            <br>   - Páginas restantes = (1/2) × 200 = 200 / 2 = 100 páginas.
            <br><strong>Resposta Final:</strong> Joana leu <strong>1/2</strong> do livro e ainda precisa ler <strong>100 páginas</strong>.
        </p>

        <h3>📝 Exercício de Fixação</h3>
        <p>
            Em uma festa de aniversário, 1/3 do bolo foi comido por adultos e 1/4 do bolo foi comido por crianças.
            <br>a) Que fração do bolo foi comida no total?
            <br>b) Que fração do bolo sobrou?
        </p>
        <label for="resposta-fracoes-a">Resposta (a - em fração irredutível, ex: 1/2):</label>
        <input type="text" id="resposta-fracoes-a" placeholder="Ex: 5/6">
        <label for="resposta-fracoes-b">Resposta (b - em fração irredutível, ex: 1/2):</label>
        <input type="text" id="resposta-fracoes-b" placeholder="Ex: 1/6">
        <button onclick="verificarRespostaFracoes()">Verificar</button>
        <p id="feedback-fracoes"></p>
        `
    },
    "regra-de-tres": {
        titulo: "Regra de Três: Solucionando Problemas de Proporção",
        texto: `
        <h2>📏 Regra de Três: A Ferramenta Mestra para Proporções no ENEM!</h2>
        <p>A Regra de Três é uma das técnicas mais poderosas e frequentemente usadas em matemática para resolver problemas que envolvem grandezas proporcionais. É um tópico garantido no ENEM, aparecendo em diversas situações do dia a dia, desde cálculos de receita até planejamento de projetos.</p>

        <h3>💡 Regra de Três Simples</h3>
        <p>A Regra de Três Simples é utilizada quando temos <strong>apenas duas grandezas</strong> envolvidas e sabemos três dos quatro valores dessas grandezas, buscando encontrar o quarto valor (a incógnita).</p>
        <p><strong>Passos Essenciais:</strong></p>
        <ol>
            <li><strong>Identifique as Grandezas:</strong> Quais são as duas coisas que estão sendo comparadas? (Ex: peso e preço, tempo e velocidade).</li>
            <li><strong>Monte a Tabela:</strong> Organize os valores conhecidos e a incógnita em uma tabela, alinhando as grandezas.</li>
            <li><strong>Analise a Proporcionalidade:</strong> Determine se as grandezas são Diretamente Proporcionais (DP) ou Inversamente Proporcionais (IP).
                <ul>
                    <li><strong>DP:</strong> Se uma aumenta, a outra aumenta na mesma proporção (ou se uma diminui, a outra diminui).</li>
                    <li><strong>IP:</strong> Se uma aumenta, a outra diminui na mesma proporção (ou vice-versa).</li>
                </ul>
            </li>
            <li><strong>Monte a Proporção e Resolva:</strong>
                <ul>
                    <li>Para grandezas <strong>DP</strong>: Multiplique cruzado (em "X").</li>
                    <li>Para grandezas <strong>IP</strong>: Multiplique em linha reta (em "linha").</li>
                </ul>
            </li>
        </ol>

        <h4>Exemplos Resolvidos (Regra de Três Simples):</h4>
        <ul>
            <li><strong>Exemplo 1 (Direta):</strong>
                <p><strong>Problema:</strong> Se 5 kg de arroz custam R$20,00, quanto custam 12 kg do mesmo arroz?</p>
                <p><strong>Grandezas:</strong> Peso (kg) e Preço (R$).</p>
                <p><strong>Análise:</strong> Mais kg de arroz, mais caro será. São <strong>Diretamente Proporcionais (DP)</strong>.</p>
                <p><strong>Tabela:</strong></p>
                <table style="width:auto; border-collapse: collapse; margin: 0.5em 0;">
                    <tr><td style="border: 1px solid #ddd; padding: 5px;">Peso (kg)</td><td style="border: 1px solid #ddd; padding: 5px;">Preço (R$)</td></tr>
                    <tr><td style="border: 1px solid #ddd; padding: 5px;">5</td><td style="border: 1px solid #ddd; padding: 5px;">20</td></tr>
                    <tr><td style="border: 1px solid #ddd; padding: 5px;">12</td><td style="border: 1px solid #ddd; padding: 5px;">x</td></tr>
                </table>
                <p><strong>Montagem e Resolução:</strong> Multiplica cruzado.</p>
                <p>5/12 = 20/x</p>
                <p>5 * x = 12 * 20</p>
                <p>5x = 240</p>
                <p>x = 240 / 5</p>
                <p>x = 48</p>
                <p><strong>Resposta:</strong> 12 kg de arroz custam <strong>R$48,00</strong>.</p>
            </li>
            <li><strong>Exemplo 2 (Inversa):</strong>
                <p><strong>Problema:</strong> 3 pedreiros constroem um muro em 10 dias. Quantos dias levariam 5 pedreiros para construir o mesmo muro?</p>
                <p><strong>Grandezas:</strong> Número de Pedreiros e Tempo (dias).</p>
                <p><strong>Análise:</strong> Mais pedreiros, menos tempo de trabalho. São <strong>Inversamente Proporcionais (IP)</strong>.</p>
                <p><strong>Tabela:</strong></p>
                <table style="width:auto; border-collapse: collapse; margin: 0.5em 0;">
                    <tr><td style="border: 1px solid #ddd; padding: 5px;">Pedreiros</td><td style="border: 1px solid #ddd; padding: 5px;">Dias</td></tr>
                    <tr><td style="border: 1px solid #ddd; padding: 5px;">3</td><td style="border: 1px solid #ddd; padding: 5px;">10</td></tr>
                    <tr><td style="border: 1px solid #ddd; padding: 5px;">5</td><td style="border: 1px solid #ddd; padding: 5px;">x</td></tr>
                </table>
                <p><strong>Montagem e Resolução:</strong> Multiplica em linha reta (para IP).</p>
                <p>3 * 10 = 5 * x</p>
                <p>30 = 5x</p>
                <p>x = 30 / 5</p>
                <p>x = 6</p>
                <p><strong>Resposta:</strong> 5 pedreiros levariam <strong>6 dias</strong>.</p>
            </li>
        </ul>

        <h4>📝 Exercícios de Fixação (Regra de Três Simples)</h4>
        <ol>
            <li>
                Para fazer 12 pizzas, um pizzaiolo utiliza 1,5 kg de farinha. Se ele precisa fazer 20 pizzas, quantos kg de farinha serão necessários?<br>
                <input type="number" id="resposta-regra-s1" placeholder="Resposta">
                <button onclick="verificarRegra1()">Verificar</button>
                <span id="feedback-regra-s1"></span>
            </li>
            <li>
                Um caminhão, a uma velocidade de 60 km/h, leva 4 horas para realizar uma entrega. Se a velocidade fosse de 80 km/h, quantas horas o caminhão levaria para a mesma entrega?<br>
                <input type="number" id="resposta-regra-s2" placeholder="Resposta">
                <button onclick="verificarRegra2()">Verificar</button>
                <span id="feedback-regra-s2"></span>
            </li>
            <li>
                Se um atleta corre 5 km em 25 minutos, quantos minutos ele levará para correr 8 km, mantendo o mesmo ritmo?<br>
                <input type="number" id="resposta-regra-s3" placeholder="Resposta">
                <button onclick="verificarRegra3()">Verificar</button>
                <span id="feedback-regra-s3"></span>
            </li>
        </ol>

        <hr style="margin: 2em 0;">

        <h3>📈 Regra de Três Composta</h3> 
        <p>A Regra de Três Composta é usada quando há <strong>três ou mais grandezas</strong> envolvidas. O processo é um pouco mais elaborado, mas segue a mesma lógica de proporcionalidade.</p>
        <p><strong>Passos Essenciais:</strong></p>
        <ol>
            <li><strong>Identifique Todas as Grandezas:</strong> Liste todas as grandezas e seus valores, incluindo a incógnita.</li>
            <li><strong>Monte a Tabela:</strong> Organize as grandezas em colunas e os valores nas linhas. A coluna da grandeza com a incógnita (X) deve ficar no final, para facilitar.</li>
            <li><strong>Analise Cada Grandeza em Relação à Incógnita:</strong> Compare cada grandeza individualmente com a grandeza que possui a incógnita, para determinar se são DP ou IP.
                <ul>
                    <li>Use setas: Aponte uma seta para baixo na coluna da incógnita. Depois, para cada outra grandeza, desenhe uma seta na mesma direção se for DP, ou na direção oposta se for IP.</li>
                </ul>
            </li>
            <li><strong>Monte a Proporção:</strong>
                <ul>
                    <li>A fração da coluna da incógnita fica sozinha de um lado da igualdade.</li>
                    <li>Do outro lado, você multiplica as frações das outras grandezas.</li>
                    <li><strong>Atenção:</strong> As frações das grandezas IP devem ser invertidas (numerador vira denominador e vice-versa) ao montar a proporção.</li>
                </ul>
            </li>
            <li><strong>Resolva a Equação:</strong> Multiplique e simplifique até encontrar o valor da incógnita.</li>
        </ol>

        <h4>Exemplos Resolvidos (Regra de Três Composta):</h4>
        <ul>
            <li><strong>Exemplo 1 (Máquinas, Dias, Horas/Dia, Peças):</strong>
                <p><strong>Problema:</strong> 4 máquinas produzem 1.200 peças em 6 dias, trabalhando 8 horas por dia. Quantas peças 3 máquinas produziriam em 10 dias, trabalhando 6 horas por dia?</p>
                <p><strong>Grandezas:</strong> Máquinas, Peças, Dias, Horas/Dia. Incógnita: Peças (x).</p>
                <p><strong>Tabela e Análise (em relação a "Peças"):</strong></p>
                <table style="width:auto; border-collapse: collapse; margin: 0.5em 0;">
                    <tr>
                        <td style="border: 1px solid #ddd; padding: 5px;">Máquinas</td>
                        <td style="border: 1px solid #ddd; padding: 5px;">Peças</td>
                        <td style="border: 1px solid #ddd; padding: 5px;">Dias</td>
                        <td style="border: 1px solid #ddd; padding: 5px;">Horas/Dia</td>
                    </tr>
                    <tr>
                        <td style="border: 1px solid #ddd; padding: 5px;">4</td>
                        <td style="border: 1px solid #ddd; padding: 5px;">1200</td>
                        <td style="border: 1px solid #ddd; padding: 5px;">6</td>
                        <td style="border: 1px solid #ddd; padding: 5px;">8</td>
                    </tr>
                    <tr>
                        <td style="border: 1px solid #ddd; padding: 5px;">3</td>
                        <td style="border: 1px solid #ddd; padding: 5px;">x</td>
                        <td style="border: 1px solid #ddd; padding: 5px;">10</td>
                        <td style="border: 1px solid #ddd; padding: 5px;">6</td>
                    </tr>
                    <tr>
                        <td style="border: 1px solid #ddd; padding: 5px; text-align: center;">(DP)</td>
                        <td style="border: 1px solid #ddd; padding: 5px; text-align: center;">⬇️</td>
                        <td style="border: 1px solid #ddd; padding: 5px; text-align: center;">(DP)</td>
                        <td style="border: 1px solid #ddd; padding: 5px; text-align: center;">(DP)</td>
                    </tr>
                </table>
                <p><strong>Análise:</strong></p>
                <ul>
                    <li>Máquinas e Peças: Menos máquinas, menos peças (DP).</li>
                    <li>Dias e Peças: Mais dias, mais peças (DP).</li>
                    <li>Horas/Dia e Peças: Mais horas/dia, mais peças (DP).</li>
                </ul>
                <p><strong>Montagem e Resolução:</strong></p>
                <p>x / 1200 = (3/4) × (10/6) × (6/8)</p>
                <p>x / 1200 = 180 / 192</p>
                <p>x = (180 × 1200) / 192</p>
                <p>x = 216000 / 192</p>
                <p>x = 1125</p>
                <p><strong>Resposta:</strong> 3 máquinas produziriam <strong>1.125 peças</strong>.</p>
            </li>
            <li><strong>Exemplo 2 (Distância, Operários, Dias, Horas/Dia):</strong>
                <p><strong>Problema:</strong> Para construir 10 km de estrada, 5 operários levam 20 dias, trabalhando 6 horas por dia. Quantos operários seriam necessários para construir 15 km de estrada em 10 dias, trabalhando 8 horas por dia?</p>
                <p><strong>Grandezas:</strong> Km, Operários, Dias, Horas/Dia. Incógnita: Operários (x).</p>
                <p><strong>Tabela e Análise (em relação a "Operários"):</strong></p>
                <table style="width:auto; border-collapse: collapse; margin: 0.5em 0;">
                    <tr>
                        <td style="border: 1px solid #ddd; padding: 5px;">Km</td>
                        <td style="border: 1px solid #ddd; padding: 5px;">Operários</td>
                        <td style="border: 1px solid #ddd; padding: 5px;">Dias</td>
                        <td style="border: 1px solid #ddd; padding: 5px;">Horas/Dia</td>
                    </tr>
                    <tr>
                        <td style="border: 1px solid #ddd; padding: 5px;">10</td>
                        <td style="border: 1px solid #ddd; padding: 5px;">5</td>
                        <td style="border: 1px solid #ddd; padding: 5px;">20</td>
                        <td style="border: 1px solid #ddd; padding: 5px;">6</td>
                    </tr>
                    <tr>
                        <td style="border: 1px solid #ddd; padding: 5px;">15</td>
                        <td style="border: 1px solid #ddd; padding: 5px;">x</td>
                        <td style="border: 1px solid #ddd; padding: 5px;">10</td>
                        <td style="border: 1px solid #ddd; padding: 5px;">8</td>
                    </tr>
                    <tr>
                        <td style="border: 1px solid #ddd; padding: 5px; text-align: center;">(DP)</td>
                        <td style="border: 1px solid #ddd; padding: 5px; text-align: center;">⬇️</td>
                        <td style="border: 1px solid #ddd; padding: 5px; text-align: center;">(IP)</td>
                        <td style="border: 1px solid #ddd; padding: 5px; text-align: center;">(IP)</td>
                    </tr>
                </table>
                <p><strong>Análise:</strong></p>
                <ul>
                    <li>Km e Operários: Mais Km, mais operários (DP).</li>
                    <li>Dias e Operários: Menos dias, mais operários (IP).</li>
                    <li>Horas/Dia e Operários: Mais horas/dia, menos operários (IP).</li>
                </ul>
                <p><strong>Montagem e Resolução:</strong> Invertemos as frações das grandezas IP.</p>
                <p>x / 5 = (15/10) × (20/10) × (6/8)  <small>(Note: 20/10 e 6/8 são invertidas!)</small></p>
                <p>x / 5 = (15/10) × (20/10) × (6/8)</p>
                <p>x / 5 = (3/2) × (2/1) × (3/4)  <small>(Simplificando frações antes de multiplicar)</small></p>
                <p>x / 5 = 18 / 8</p>
                <p>x = (18 × 5) / 8</p>
                <p>x = 90 / 8</p>
                <p>x = 11.25</p>
                <p>Como não podemos ter "meio operário", geralmente arredondamos para cima neste tipo de problema.</p>
                <p><strong>Resposta:</strong> Seriam necessários <strong>12 operários</strong> (arredondando).</p>
            </li>
        </ul>

        <h3>📝 Exercícios de Fixação (Regra de Três Composta)</h3>
        <ol>
            <li>
                Uma fábrica, com 6 máquinas, produz 1800 peças em 5 dias, trabalhando 8 horas por dia. Se a fábrica comprar mais 2 máquinas (totalizando 8), quantas peças serão produzidas em 3 dias, trabalhando 10 horas por dia?<br>
                <input type="number" id="resposta-regra-c1" placeholder="Resposta">
                <button onclick="verificarRegra4()">Verificar</button>
                <span id="feedback-regra-c1"></span>
            </li>
            <li>
                Para pintar 50 casas, 10 pintores levam 15 dias. Quantos dias levariam 15 pintores para pintar 90 casas, considerando que o trabalho dos pintores é o mesmo?<br>
                <input type="number" id="resposta-regra-c2" placeholder="Resposta">
                <button onclick="verificarRegra5()">Verificar</button>
                <span id="feedback-regra-c2"></span>
            </li>
            <li>
                Uma equipe de 4 professores corrige 300 provas em 6 horas. Quantos professores seriam necessários para corrigir 500 provas em 5 horas?<br>
                <input type="number" id="resposta-regra-c3" placeholder="Resposta">
                <button onclick="verificarRegra6()">Verificar</button>
                <span id="feedback-regra-c3"></span>
            </li>
        </ol>
    `
    },
    "porcentagem": {
        titulo: "Porcentagem: Entendendo o 'Por Cem'",
        texto: `
        <h2>📈 Porcentagem: Uma Ferramenta Essencial para o ENEM e a Vida!</h2>
        <p>A porcentagem é um dos temas mais recorrentes no ENEM e no dia a dia. Descontos em lojas, juros em empréstimos, resultados de pesquisas e taxas de crescimento são exemplos claros de sua aplicação. Dominar porcentagem significa estar preparado para diversas situações!</p>

        <h3>💡 Conceito Fundamental: O que significa "%"?</h3>
        <p>Porcentagem é uma forma de expressar uma <strong>proporção</strong> ou <strong>parte de um todo</strong> em relação a 100. O símbolo "%" significa "por cento", ou seja, "por cem".</p>
        <p>Imagine que algo foi dividido em 100 partes iguais. A porcentagem indica quantas dessas 100 partes estamos considerando.</p>
        <p><strong>Exemplo:</strong> 25% significa 25 partes de 100. Isso pode ser representado de várias formas:</p>
        <ul>
            <li><strong>Forma Percentual:</strong> 25%</li>
            <li><strong>Forma Fracionária:</strong> 25/100 (ou simplificado para 1/4)</li>
            <li><strong>Forma Decimal:</strong> 0,25 (resultante da divisão de 25 por 100)</li>
        </ul>

        <h3>🔄 Formas de Representação e Conversão</h3>
        <p>É vital saber transitar entre as formas percentual, fracionária e decimal. Essa habilidade simplifica os cálculos!</p>
        <table style="width:100%; border-collapse: collapse; margin: 1em 0;">
            <thead>
                <tr style="background-color: var(--color-background-medium);">
                    <th style="padding: 8px; border: 1px solid #ddd; text-align: left;">Forma Percentual</th>
                    <th style="padding: 8px; border: 1px solid #ddd; text-align: left;">Para Forma Fracionária</th>
                    <th style="padding: 8px; border: 1px solid #ddd; text-align: left;">Para Forma Decimal</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td style="padding: 8px; border: 1px solid #ddd;">X%</td>
                    <td style="padding: 8px; border: 1px solid #ddd;">X/100</td>
                    <td style="padding: 8px; border: 1px solid #ddd;">X ÷ 100</td>
                </tr>
                <tr>
                    <td style="padding: 8px; border: 1px solid #ddd;">50%</td>
                    <td style="padding: 8px; border: 1px solid #ddd;">50/100 (ou 1/2)</td>
                    <td style="padding: 8px; border: 1px solid #ddd;">0,50</td>
                </tr>
                <tr>
                    <td style="padding: 8px; border: 1px solid #ddd;">75%</td>
                    <td style="padding: 8px; border: 1px solid #ddd;">75/100 (ou 3/4)</td>
                    <td style="padding: 8px; border: 1px solid #ddd;">0,75</td>
                </tr>
            </tbody>
        </table>

        <h3>➕➖ Cálculos com Porcentagem</h3>

        <h4>1. Calcular X% de um Valor Y</h4>
        <p>Para encontrar uma porcentagem de um valor, você pode usar a forma decimal ou fracionária da porcentagem e multiplicá-la pelo valor total.</p>
        <p><strong>Fórmula:</strong> Parte = (Porcentagem / 100) × Valor Total</p>
        <p><strong>Exemplo:</strong> Calcular 20% de R$300,00</p>
        <ul>
            <li><strong>Usando a forma decimal:</strong> 0,20 × 300 = R$60,00</li>
            <li><strong>Usando a forma fracionária:</strong> (20/100) × 300 = (1/5) × 300 = 300/5 = R$60,00</li>
        </ul>

        <h4>2. Aumentos Percentuais</h4>
        <p>Quando um valor aumenta em uma porcentagem, você pode calcular o valor do aumento e somar, ou usar um fator de multiplicação direto.</p>
        <p><strong>Fórmula:</strong> Valor Final = Valor Inicial × (1 + taxa percentual em decimal)</p>
        <p><strong>Exemplo:</strong> Aumento de 10% em R$200,00</p>
        <ul>
            <li><strong>Cálculo do aumento:</strong> 10% de R$200 = 0,10 × 200 = R$20,00</li>
            <li><strong>Valor Final:</strong> R$200,00 + R$20,00 = R$220,00</li>
            <li><strong>Usando o fator direto:</strong> R$200,00 × (1 + 0,10) = R$200,00 × 1,10 = R$220,00</li>
        </ul>

        <h4>3. Descontos Percentuais</h4>
        <p>Quando um valor sofre um desconto percentual, você pode calcular o valor do desconto e subtrair, ou usar um fator de multiplicação direto.</p>
        <p><strong>Fórmula:</strong> Valor Final = Valor Inicial × (1 − taxa percentual em decimal)</p>
        <p><strong>Exemplo:</strong> Desconto de 10% em R$200,00</p>
        <ul>
            <li><strong>Cálculo do desconto:</strong> 10% de R$200 = 0,10 × 200 = R$20,00</li>
            <li><strong>Valor Final:</strong> R$200,00 − R$20,00 = R$180,00</li>
            <li><strong>Usando o fator direto:</strong> R$200,00 × (1 − 0,10) = R$200,00 × 0,90 = R$180,00</li>
        </ul>

        <h3>🧩 Exemplo Resolvido: Cenário do ENEM</h3>
        <p>
            <strong>Problema:</strong> Um celular custava R$1.200,00. Na semana da Black Friday, ele recebeu um desconto de 20%. No entanto, como a procura foi grande, na semana seguinte o preço com desconto sofreu um acréscimo de 5%. Qual foi o preço final do celular após essas duas alterações?
            <br><strong>Resolução Detalhada:</strong>
            <br>1. <strong>Calcular o preço após o desconto de 20%:</strong>
            <br>   - Desconto de 20% significa que o preço restante é 100% - 20% = 80% do valor original.
            <br>   - Preço após desconto = R$1.200,00 × 0,80 = R$960,00.
            <br>2. <strong>Calcular o preço após o acréscimo de 5% sobre o preço com desconto:</strong>
            <br>   - O acréscimo de 5% é sobre os R$960,00.
            <br>   - Acréscimo de 5% significa que o novo preço é 100% + 5% = 105% do valor atual.
            <br>   - Preço final = R$960,00 × 1,05 = R$1.008,00.
            <br><strong>Resposta Final:</strong> O preço final do celular foi de <strong>R$1.008,00</strong>.
        </p>

        <h3>📝 Exercício de Fixação</h3>
        <p>
            Uma loja de eletrônicos teve um faturamento de R$ 50.000,00 em um mês. No mês seguinte, devido a uma promoção, houve um aumento de 15% no faturamento. Qual foi o faturamento total da loja nos dois meses combinados?
        </p>
        <input type="number" id="resposta-porcentagem" placeholder="Digite sua resposta">
        <button onclick="verificarRespostaPorcentagem()">Verificar</button>
        <p id="feedback-porcentagem"></p>
    `
    },
    "razao-proporcao": {
        titulo: "Razão e Proporção: Comparando Grandezas",
        texto: `
        <h2>⚖️ Razão e Proporção: A Arte de Comparar no ENEM!</h2>
        <p>Razão e proporção são conceitos interligados e fundamentais para a matemática e para o dia a dia. Eles nos permitem comparar grandezas, resolver problemas de escala, dosagem, velocidade e muitos outros cenários comuns nas provas do ENEM.</p>

        <h3>💡 Razão: A Comparação por Divisão</h3>
        <p>A <strong>razão</strong> é a comparação entre duas grandezas (valores, quantidades) através de uma <strong>divisão</strong>. Ela indica quantas vezes uma grandeza contém ou está contida na outra. Pode ser expressa de várias formas:</p>
        <ul>
            <li><strong>a/b</strong> (lê-se "a para b" ou "a dividido por b")</li>
            <li><strong>a : b</strong> (lê-se "a para b")</li>
            <li>"a para b"</li>
        </ul>
        <p><strong>Pontos Importantes:</strong></p>
        <ul>
            <li>O segundo termo (b) nunca pode ser zero.</li>
            <li>A razão pode ter ou não uma unidade de medida, dependendo das grandezas comparadas:
                <ul>
                    <li>Se as grandezas são da mesma natureza (ex: idade e idade), a razão é adimensional (não tem unidade). Ex: 12 anos / 48 anos = 1/4.</li>
                    <li>Se as grandezas são de naturezas diferentes (ex: distância e tempo), a razão terá uma nova unidade. Ex: 180 km / 2 horas = 90 km/h.</li>
                </ul>
            </li>
            <li><strong>A ORDEM IMPORTA!</strong> A razão de A para B é diferente da razão de B para A.</li>
        </ul>

        <h4>Exemplos Detalhados de Razão:</h4>
        <ul>
            <li><strong>Razão entre idades:</strong> Maria tem 12 anos e seu pai tem 48 anos.
                <br>Razão da idade de Maria para a do pai: 12 / 48 = 1/4.
                <br><strong>Interpretação:</strong> A idade de Maria é 1/4 (ou 25%) da idade do pai.
            </li>
            <li><strong>Razão em sala de aula:</strong> Em uma sala há 20 meninos e 25 meninas. Qual a razão de meninos para o TOTAL de alunos?
                <br>Total de alunos = 20 + 25 = 45.
                <br>Razão de meninos para o total: 20 / 45 = 4/9 (após simplificação).
                <br><strong>Interpretação:</strong> 4 em cada 9 alunos são meninos.
            </li>
            <li><strong>Velocidade (Razão de Grandezas Diferentes):</strong> Um carro percorre 180 km em 2 horas.
                <br>Razão (Velocidade Média) = 180 km / 2 horas = 90 km/h.
                <br><strong>Interpretação:</strong> O carro percorre 90 quilômetros a cada hora.
            </li>
        </ul>

        <h4>📝 Exercícios de Fixação (Razão)</h4>
        <ol>
            <li>
                Em uma turma de 40 alunos, 16 são meninos. Qual a razão do número de meninas para o número total de alunos nesta turma? (Responda a fração irredutível, ex: 1/5)<br>
                <input type="text" id="resposta-razao-ex1" placeholder="Resposta">
                <button onclick="verificarRazao1()">Verificar</button>
                <span id="feedback-razao-ex1"></span>
            </li>
            <li>
                Um mapa tem escala 1:250.000. Isso significa que 1 cm no mapa representa quantos km na realidade? (Responda apenas o número em km)<br>
                <input type="number" id="resposta-razao-ex2" placeholder="Resposta">
                <button onclick="verificarRazao2()">Verificar</button>
                <span id="feedback-razao-ex2"></span>
            </li>
            <li>
                A receita de um bolo pede 3 xícaras de farinha para cada 2 xícaras de açúcar. Se você for usar 6 xícaras de farinha, quantas xícaras de açúcar serão necessárias para manter a mesma razão? (Responda apenas o número)<br>
                <input type="number" id="resposta-razao-ex3" placeholder="Resposta">
                <button onclick="verificarRazao3()">Verificar</button>
                <span id="feedback-razao-ex3"></span>
            </li>
        </ol>

        <hr style="margin: 2em 0;">

        <h3>🔗 Proporção: A Igualdade entre Razões</h3>
        <p>Uma <strong>proporção</strong> é a igualdade entre duas razões. Se a razão de A para B é igual à razão de C para D, temos uma proporção:</p>
        <p><strong>a/b = c/d</strong>  ou  <strong>a : b :: c : d</strong></p>
        <p>A principal ferramenta para resolver problemas de proporção é a <strong>Propriedade Fundamental das Proporções (ou "regra cruzada")</strong>: o produto dos meios é igual ao produto dos extremos.</p>
        <p>Se a/b = c/d, então <strong>a × d = b × c</strong></p>

        <h4>Grandezas Proporcionais: Direta e Inversamente</h4>
        <ul>
            <li>
                <strong>Grandezas Diretamente Proporcionais (DP):</strong>
                <p>Quando uma grandeza aumenta (ou diminui), a outra também aumenta (ou diminui) na mesma proporção. A razão entre elas é constante.</p>
                <p>Ex: Quanto mais pães você compra, mais farinha é necessária para produzi-los.</p>
                <p>Se A e B são DP, então A/B = constante.</p>
            </li>
            <li>
                <strong>Grandezas Inversamente Proporcionais (IP):</strong>
                <p>Quando uma grandeza aumenta, a outra diminui na mesma proporção, e vice-versa. O produto entre elas é constante.</p>
                <p>Ex: Quanto maior a velocidade de um carro, menor o tempo que ele leva para percorrer uma mesma distância.</p>
                <p>Se A e B são IP, então A × B = constante.</p>
            </li>
        </ul>

        <h4>Exemplos Detalhados de Proporção:</h4>
        <ul>
            <li><strong>Proporção Direta:</strong> Se 3 caixas de lápis custam R$15,00, quanto custam 7 caixas?
                <p>Montagem (caixas e preço são DP):</p>
                <p>3 caixas -- R$15,00</p>
                <p>7 caixas -- x</p>
                <p>3/7 = 15/x</p>
                <p>Aplicando a propriedade fundamental: 3 × x = 7 × 15</p>
                <p>3x = 105</p>
                <p>x = 105 / 3</p>
                <p>x = 35</p>
                <p><strong>Resposta:</strong> 7 caixas custam R$35,00.</p>
            </li>
            <li><strong>Proporção Inversa:</strong> 4 máquinas produzem uma quantidade de peças em 8 horas. Se fossem 6 máquinas (mais máquinas), quantas horas levariam para produzir a mesma quantidade?
                <p>Montagem (máquinas e tempo são IP - mais máquinas, menos tempo):</p>
                <p>4 máquinas -- 8 horas</p>
                <p>6 máquinas -- x</p>
                <p>Para proporção inversa, uma das razões deve ser invertida. Ex: 4/6 = x/8 (INCORRETO se fosse multiplicar cruzado direto)</p>
                <p>Ou: 4/6 = (1/x) / (1/8) = 8/x (o certo é INVERTER A SEGUNDA RAZÃO na montagem OU MULTIPLICAR RETO)</p>
                <p>Mais fácil: para IP, monte a proporção e <strong>inverta uma das frações</strong> antes de multiplicar cruzado ou, simplesmente, <strong>multiplique em linha reta</strong>.</p>
                <p>4 máquinas × 8 horas = 6 máquinas × x horas</p>
                <p>32 = 6x</p>
                <p>x = 32 / 6</p>
                <p>x ≈ 5,33 horas (aproximadamente 5 horas e 20 minutos)</p>
                <p><strong>Resposta:</strong> Levariam aproximadamente 5,33 horas.</p>
            </li>
            <li><strong>Proporção em Escalas (Mapas e Plantas):</strong> Uma escala 1:100 em um mapa ou planta significa que 1 unidade no desenho representa 100 unidades na realidade.
                <p><strong>Problema:</strong> Se uma sala tem 5 cm no desenho com escala 1:100, qual o tamanho real da sala em metros?</p>
                <p>1 cm (desenho) -- 100 cm (realidade)</p>
                <p>5 cm (desenho) -- x cm (realidade)</p>
                <p>1/5 = 100/x</p>
                <p>1 × x = 5 × 100</p>
                <p>x = 500 cm</p>
                <p>Convertendo para metros: 500 cm ÷ 100 = 5 m.</p>
                <p><strong>Resposta:</strong> O tamanho real da sala é de 5 metros.</p>
            </li>
        </ul>

        <h3>📝 Exercícios de Fixação (Proporção)</h3>
        <ol>
            <li>
                Se um atleta corre 12 km em 1,5 horas, quantos quilômetros ele correrá em 2 horas, mantendo a mesma velocidade? (Responda apenas o número em km)<br>
                <input type="number" id="resposta-proporcao-ex1" placeholder="Resposta">
                <button onclick="verificarProporcao1()">Verificar</button>
                <span id="feedback-proporcao-ex1"></span>
            </li>
            <li>
                Para encher uma piscina, 3 torneiras iguais levam 10 horas. Se forem utilizadas 5 torneiras iguais, quantas horas levarão para encher a mesma piscina? (Responda apenas o número de horas)<br>
                <input type="number" id="resposta-proporcao-ex2" placeholder="Resposta">
                <button onclick="verificarProporcao2()">Verificar</button>
                <span id="feedback-proporcao-ex2"></span>
            </li>
            <li>
                Em uma receita, a razão de açúcar para farinha é de 1:4. Se você usar 240g de farinha, quantos gramas de açúcar você deve usar? (Responda apenas o número em gramas)<br>
                <input type="number" id="resposta-proporcao-ex3" placeholder="Resposta">
                <button onclick="verificarProporcao3()">Verificar</button>
                <span id="feedback-proporcao-ex3"></span>
            </li>
        </ol>
    `
    },
    "potenciacao-radiciacao": {
        titulo: "Potenciação e Radiciação: Operações Inversas",
        texto: `
        <h2>⚡ Potenciação e Radiciação: Expandindo e Contraindo Números!</h2>
        <p>Potenciação e Radiciação são operações inversas e estão interligadas. Elas são essenciais para simplificar expressões, resolver equações e compreender conceitos avançados em diversas áreas da matemática, além de serem muito presentes em questões do ENEM.</p>

        <h3>📈 Potenciação: Multiplicando por Si Mesmo</h3>
        <p>A <strong>Potenciação</strong> é uma operação matemática que representa a multiplicação de um número (a base) por ele mesmo um determinado número de vezes (o expoente).</p>
        <p><strong>Formato:</strong> b<sup>e</sup> (lê-se "b elevado a e")</p>
        <ul>
            <li><strong>Base (b):</strong> O número que será multiplicado.</li>
            <li><strong>Expoente (e):</strong> Indica quantas vezes a base será multiplicada por si mesma.</li>
            <li><strong>Expoente (e):</strong> Indica quantas vezes a base será multiplicada por si mesma.</li>
        </ul>
        <p><strong>Exemplo:</strong> 2<sup>3</sup> = 2 × 2 × 2 = 8</p>
        <p><strong>Casos Especiais:</strong></p>
        <ul>
            <li>Todo número elevado a 1 é ele mesmo. Ex: 5<sup>1</sup> = 5</li>
            <li>Todo número (diferente de zero) elevado a 0 é 1. Ex: 7<sup>0</sup> = 1</li>
            <li>Base 10: O expoente indica o número de zeros após o 1. Ex: 10<sup>3</sup> = 1000</li>
            <li>Expoente Negativo: Inverte a base e o expoente se torna positivo. Ex: 2<sup>-1</sup> = 1/2<sup>1</sup> = 1/2</li>
        </ul>

        <h4>Propriedades da Potenciação (Essenciais para Simplificar!):</h4>
        <p>Dominar estas propriedades agiliza a resolução de problemas:</p>
        <table style="width:100%; border-collapse: collapse; margin: 1em 0;">
            <thead>
                <tr style="background-color: var(--color-background-medium);">
                    <th style="padding: 8px; border: 1px solid #ddd; text-align: left;">Propriedade</th>
                    <th style="padding: 8px; border: 1px solid #ddd; text-align: left;">Descrição</th>
                    <th style="padding: 8px; border: 1px solid #ddd; text-align: left;">Exemplo</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td style="padding: 8px; border: 1px solid #ddd;">Produto de Potências de Mesma Base</td>
                    <td style="padding: 8px; border: 1px solid #ddd;">Conserva a base e soma os expoentes: a<sup>m</sup> × a<sup>n</sup> = a<sup>m+n</sup></td>
                    <td style="padding: 8px; border: 1px solid #ddd;">2<sup>3</sup> × 2<sup>2</sup> = 2<sup>3+2</sup> = 2<sup>5</sup> = 32</td>
                </tr>
                <tr>
                    <td style="padding: 8px; border: 1px solid #ddd;">Divisão de Potências de Mesma Base</td>
                    <td style="padding: 8px; border: 1px solid #ddd;">Conserva a base e subtrai os expoentes: a<sup>m</sup> ÷ a<sup>n</sup> = a<sup>m−n</sup></td>
                    <td style="padding: 8px; border: 1px solid #ddd;">5<sup>7</sup> ÷ 5<sup>4</sup> = 5<sup>7-4</sup> = 5<sup>3</sup> = 125</td>
                </tr>
                <tr>
                    <td style="padding: 8px; border: 1px solid #ddd;">Potência de Potência</td>
                    <td style="padding: 8px; border: 1px solid #ddd;">Multiplica os expoentes: (a<sup>m</sup>)<sup>n</sup> = a<sup>m×n</sup></td>
                    <td style="padding: 8px; border: 1px solid #ddd;">(3<sup>2</sup>)<sup>3</sup> = 3<sup>2×3</sup> = 3<sup>6</sup> = 729</td>
                </tr>
                <tr>
                    <td style="padding: 8px; border: 1px solid #ddd;">Potência de Produto</td>
                    <td style="padding: 8px; border: 1px solid #ddd;">Distribui o expoente para cada fator: (a × b)<sup>n</sup> = a<sup>n</sup> × b<sup>n</sup></td>
                    <td style="padding: 8px; border: 1px solid #ddd;">(2 × 5)<sup>3</sup> = 2<sup>3</sup> × 5<sup>3</sup> = 8 × 125 = 1000</td>
                </tr>
                <tr>
                    <td style="padding: 8px; border: 1px solid #ddd;">Potência de Quociente</td>
                    <td style="padding: 8px; border: 1px solid #ddd;">Distribui o expoente para o numerador e denominador: (a/b)<sup>n</sup> = a<sup>n</sup> / b<sup>n</sup></td>
                    <td style="padding: 8px; border: 1px solid #ddd;">(4/2)<sup>2</sup> = 4<sup>2</sup> / 2<sup>2</sup> = 16 / 4 = 4</td>
                </tr>
            </tbody>
        </table>

        <h4>🧩 Exemplo Resolvido (Potenciação):</h4>
        <p>
            <strong>Problema:</strong> Simplifique a expressão: (2<sup>5</sup> × 2<sup>-2</sup>) ÷ (2<sup>3</sup>)<sup>1</sup>
            <br><strong>Resolução Detalhada:</strong>
            <br>1. <strong>Resolva a multiplicação no numerador:</strong>
            <br>   - Propriedade: Produto de potências de mesma base (soma os expoentes).
            <br>   - 2<sup>5</sup> × 2<sup>-2</sup> = 2<sup>(5 + (-2))</sup> = 2<sup>3</sup>
            <br>2. <strong>Resolva a potência de potência no denominador:</strong>
            <br>   - Propriedade: Potência de potência (multiplica os expoentes).
            <br>   - (2<sup>3</sup>)<sup>1</sup> = 2<sup>(3 × 1)</sup> = 2<sup>3</sup>
            <br>3. <strong>Realize a divisão:</strong>
            <br>   - Propriedade: Divisão de potências de mesma base (subtrai os expoentes).
            <br>   - 2<sup>3</sup> ÷ 2<sup>3</sup> = 2<sup>(3 - 3)</sup> = 2<sup>0</sup>
            <br>4. <strong>Calcule o resultado final:</strong>
            <br>   - Todo número (diferente de zero) elevado a zero é 1.
            <br>   - 2<sup>0</sup> = 1
            <br><strong>Resposta Final:</strong> O valor simplificado da expressão é <strong>1</strong>.
        </p>

        <h3>📝 Exercícios de Fixação (Potenciação)</h3>
        <ol>
            <li>
                Calcule o valor de (−2)<sup>3</sup> + (−5)<sup>2</sup>.<br>
                <input type="number" id="resposta-pot-ex1" placeholder="Resposta">
                <button onclick="verificarPot1()">Verificar</button>
                <span id="feedback-pot-ex1"></span>
            </li>
            <li>
                Simplifique a expressão: (3<sup>7</sup> × 3<sup>-4</sup>) / (3<sup>2</sup>).<br>
                <input type="number" id="resposta-pot-ex2" placeholder="Resposta">
                <button onclick="verificarPot2()">Verificar</button>
                <span id="feedback-pot-ex2"></span>
            </li>
            <li>
                Qual o valor de 4<sup>-1</sup> + (5<sup>0</sup> × 2)? (Responda como decimal ou fração, ex: 2.25 ou 9/4)<br>
                <input type="text" id="resposta-pot-ex3" placeholder="Resposta">
                <button onclick="verificarPot3()">Verificar</button>
                <span id="feedback-pot-ex3"></span>
            </li>
        </ol>

        <hr style="margin: 2em 0;">

        <h3>📉 Radiciação: Encontrando a Base</h3>
        <p>A <strong>Radiciação</strong> é a operação inversa da potenciação. Ela busca descobrir qual número, elevado a um determinado expoente (o índice da raiz), resulta no radicando.</p>
        <p><strong>Formato:</strong> <sup>n</sup>√x = y (lê-se "raiz enésima de x é igual a y")</p>
        <ul>
            <li><strong>Radicando (x):</strong> O número dentro da raiz.</li>
            <li><strong>Índice (n):</strong> O "pequeno" número acima do radical, indica o "grau" da raiz (ex: raiz quadrada, raiz cúbica). Se não houver índice, ele é 2 (raiz quadrada).</li>
            <li><strong>Raiz (y):</strong> O resultado da operação.</li>
        </ul>
        <p><strong>Exemplo:</strong> √9 = 3, porque 3<sup>2</sup> = 9.</p>
        <p><strong>Exemplo:</strong> <sup>3</sup>√8 = 2, porque 2<sup>3</sup> = 8.</p>
        <p><strong>Atenção:</strong> Raízes de números negativos!</p>
        <ul>
            <li>Raiz quadrada (índice par) de número negativo NÃO existe no conjunto dos números reais. Ex: √(-4) não é um número real.</li>
            <li>Raiz cúbica (índice ímpar) de número negativo EXISTE. Ex: <sup>3</sup>√(-8) = -2, pois (-2)<sup>3</sup> = -8.</li>
        </ul>

        <h4>Propriedades da Radiciação (Simplificando Raízes!):</h4>
        <p>Estas propriedades ajudam a manipular e simplificar expressões com raízes:</p>
        <table style="width:100%; border-collapse: collapse; margin: 1em 0;">
            <thead>
                <tr style="background-color: var(--color-background-medium);">
                    <th style="padding: 8px; border: 1px solid #ddd; text-align: left;">Propriedade</th>
                    <th style="padding: 8px; border: 1px solid #ddd; text-align: left;">Descrição</th>
                    <th style="padding: 8px; border: 1px solid #ddd; text-align: left;">Exemplo</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td style="padding: 8px; border: 1px solid #ddd;">Raiz de Produto</td>
                    <td style="padding: 8px; border: 1px solid #ddd;">A raiz de um produto é o produto das raízes: √(a × b) = √a × √b</td>
                    <td style="padding: 8px; border: 1px solid #ddd;">√36 = √(4 × 9) = √4 × √9 = 2 × 3 = 6</td>
                </tr>
                <tr>
                    <td style="padding: 8px; border: 1px solid #ddd;">Raiz de Quociente</td>
                    <td style="padding: 8px; border: 1px solid #ddd;">A raiz de um quociente é o quociente das raízes: √(a / b) = √a / √b</td>
                    <td style="padding: 8px; border: 1px solid #ddd;">√(9 / 4) = √9 / √4 = 3 / 2 = 1.5</td>
                </tr>
                <tr>
                    <td style="padding: 8px; border: 1px solid #ddd;">Raiz de Raiz</td>
                    <td style="padding: 8px; border: 1px solid #ddd;">Multiplica os índices das raízes: <sup>n</sup>√(<sup>m</sup>√a) = <sup>n×m</sup>√a</td>
                    <td style="padding: 8px; border: 1px solid #ddd;"><sup>2</sup>√(<sup>3</sup>√64) = <sup>2×3</sup>√64 = <sup>6</sup>√64 = 2</td>
                </tr>
                <tr>
                    <td style="padding: 8px; border: 1px solid #ddd;">Raiz como Potência (Expoente Fracionário)</td>
                    <td style="padding: 8px; border: 1px solid #ddd;">O radicando com expoente fracionário: <sup>n</sup>√a<sup>m</sup> = a<sup>m/n</sup></td>
                    <td style="padding: 8px; border: 1px solid #ddd;">√2<sup>3</sup> = 2<sup>3/2</sup> | <sup>3</sup>√x<sup>5</sup> = x<sup>5/3</sup></td>
                </tr>
            </tbody>
        </table>

        <h4>Simplificação de Radicais:</h4>
        <p>Simplificar um radical significa extrair fatores da raiz. Para isso, fatoramos o radicando em fatores primos ou em um quadrado/cubo perfeito.</p>
        <p><strong>Exemplo:</strong> Simplificar √72</p>
        <p>1. Fatore 72: 72 = 36 × 2</p>
        <p>2. Aplique a propriedade da raiz de produto: √72 = √(36 × 2) = √36 × √2</p>
        <p>3. Calcule a raiz exata: √36 = 6</p>
        <p>4. Resultado: 6√2</p>

        <h4>🧩 Exemplo Resolvido (Radiciação):</h4>
        <p>
            <strong>Problema:</strong> Calcule o valor de √81 + <sup>3</sup>√-27.
            <br><strong>Resolução Detalhada:</strong>
            <br>1. <strong>Calcule √81:</strong>
            <br>   - Qual número elevado ao quadrado dá 81? É 9 (9 × 9 = 81).
            <br>   - Então, √81 = 9.
            <br>2. <strong>Calcule <sup>3</sup>√-27:</strong>
            <br>   - Qual número elevado ao cubo dá -27? É -3 ((-3) × (-3) × (-3) = 9 × (-3) = -27).
            <br>   - Então, <sup>3</sup>√-27 = -3.
            <br>3. <strong>Realize a adição:</strong>
            <br>   - 9 + (-3) = 9 - 3 = 6.
            <br><strong>Resposta Final:</strong> O resultado da expressão é <strong>6</strong>.
        </p>

        <h3>📝 Exercícios de Fixação (Radiciação)</h3>
        <ol>
            <li>
                Qual o resultado de √(4 + 5) + <sup>3</sup>√(1000)?<br>
                <input type="number" id="resposta-rad-ex1" placeholder="Resposta">
                <button onclick="verificarRad1()">Verificar</button>
                <span id="feedback-rad-ex1"></span>
            </li>
            <li>
                Simplifique o radical √75. (Formato: 5√3 ou 5raiz3)<br>
                <input type="text" id="resposta-rad-ex2" placeholder="Resposta">
                <button onclick="verificarRad2()">Verificar</button>
                <span id="feedback-rad-ex2"></span>
            </li>
            <li>
                Se a área de um quadrado é 144 cm², qual é a medida do lado desse quadrado? (Responda apenas o número em cm)<br>
                <input type="number" id="resposta-rad-ex3" placeholder="Resposta">
                <button onclick="verificarRad3()">Verificar</button>
                <span id="feedback-rad-ex3"></span>
            </li>
        </ol>
    `
    },
    "equacoes": {
        titulo: "Equações do 1º e 2º Grau: Encontrando o Valor da Incógnita",
        texto: `
        <h2>🎯 Equações: Desvendando o X da Questão no ENEM!</h2>
        <p>Equações são como balanças em equilíbrio: o que está de um lado é igual ao que está do outro. Nosso objetivo é encontrar o valor da "incógnita" (geralmente representada por 'x') que torna essa igualdade verdadeira. Dominar equações é crucial para resolver problemas em diversas áreas, desde física até finanças, e são presença garantida nas provas do ENEM.</p>

        <h3>📝 Equações do 1º Grau</h3>
        <p>Uma equação do 1º grau é aquela em que a incógnita (x) tem como maior expoente o número 1. Sua forma geral é: <strong>ax + b = 0</strong>, onde 'a' e 'b' são números reais e 'a' é diferente de zero.</p>
        <p><strong>O Princípio Fundamental:</strong> Para manter a "balança" em equilíbrio, tudo o que você fizer em um lado da equação, deve fazer no outro lado.</p>
        <p><strong>Passos para Resolver:</strong></p>
        <ol>
            <li><strong>Isolar os termos com 'x':</strong> Mova todos os termos que contêm a incógnita para um lado da igualdade e os números sem a incógnita para o outro lado. Lembre-se: ao "trocar de lado", o termo inverte sua operação (soma vira subtração, multiplicação vira divisão, etc.).</li>
            <li><strong>Simplificar:</strong> Some/subtraia os termos semelhantes em cada lado.</li>
            <li><strong>Isolar o 'x' (final):</strong> O número que estiver multiplicando (ou dividindo) 'x' deve passar para o outro lado com a operação inversa.</li>
        </ol>

        <h4>Exemplos Resolvidos (Equações do 1º Grau):</h4>
        <ul>
            <li><strong>Exemplo 1: Equação Simples</strong>
                <p><strong>Problema:</strong> Resolva a equação: 2x − 6 = 10</p>
                <p><strong>Resolução Detalhada:</strong></p>
                <ol>
                    <li>Mova o '-6' para o lado direito. Ele está subtraindo, então passa somando:
                        <br>2x = 10 + 6
                        <br>2x = 16
                    </li>
                    <li>O '2' está multiplicando 'x'. Mova-o para o lado direito dividindo:
                        <br>x = 16 / 2
                        <br>x = 8
                    </li>
                </ol>
                <p><strong>Verificação:</strong> Substitua x por 8 na equação original: 2(8) - 6 = 16 - 6 = 10. Correto!</p>
                <p><strong>Resposta:</strong> x = 8</p>
            </li>
            <li><strong>Exemplo 2: Com Parênteses</strong>
                <p><strong>Problema:</strong> Resolva a equação: 3(x + 2) = 15</p>
                <p><strong>Resolução Detalhada:</strong></p>
                <ol>
                    <li>Primeiro, aplique a propriedade distributiva (multiplique o 3 por cada termo dentro do parêntese):
                        <br>3x + 6 = 15
                    </li>
                    <li>Mova o '+6' para o lado direito. Ele está somando, então passa subtraindo:
                        <br>3x = 15 - 6
                        <br>3x = 9
                    </li>
                    <li>O '3' está multiplicando 'x'. Mova-o para o lado direito dividindo:
                        <br>x = 9 / 3
                        <br>x = 3
                    </li>
                </ol>
                <p><strong>Verificação:</strong> 3(3 + 2) = 3(5) = 15. Correto!</p>
                <p><strong>Resposta:</strong> x = 3</p>
            </li>
            <li><strong>Exemplo 3: Incógnita nos Dois Lados</strong>
                <p><strong>Problema:</strong> Resolva a equação: 4x − 5 = x + 7</p>
                <p><strong>Resolução Detalhada:</strong></p>
                <ol>
                    <li>Mova todos os termos com 'x' para um lado (ex: esquerdo) e os números sem 'x' para o outro (ex: direito).
                        <br>O 'x' do lado direito passa subtraindo para a esquerda.
                        <br>O '-5' do lado esquerdo passa somando para a direita.
                        <br>4x - x = 7 + 5
                        <br>3x = 12
                    </li>
                    <li>O '3' está multiplicando 'x'. Mova-o para o lado direito dividindo:
                        <br>x = 12 / 3
                        <br>x = 4
                    </li>
                </ol>
                <p><strong>Verificação:</strong> 4(4) - 5 = 16 - 5 = 11. E 4 + 7 = 11. Correto!</p>
                <p><strong>Resposta:</strong> x = 4</p>
            </li>
        </ul>

        <h3>📝 Exercícios de Fixação (1º Grau)</h3>
        <ol>
            <li>
                Qual o valor de x na equação: 7x - 10 = 32?<br>
                <input type="number" id="resposta-eq1g-ex1" placeholder="Resposta">
                <button onclick="verificarEq1g1()">Verificar</button>
                <span id="feedback-eq1g-ex1"></span>
            </li>
            <li>
                Resolva a equação: 2(x + 5) = 16.<br>
                <input type="number" id="resposta-eq1g-ex2" placeholder="Resposta">
                <button onclick="verificarEq1g2()">Verificar</button>
                <span id="feedback-eq1g-ex2"></span>
            </li>
            <li>
                Se o triplo de um número subtraído de 5 é igual ao dobro desse número somado com 2, qual é esse número?<br>
                <input type="number" id="resposta-eq1g-ex3" placeholder="Resposta">
                <button onclick="verificarEq1g3()">Verificar</button>
                <span id="feedback-eq1g-ex3"></span>
            </li>
        </ol>

        <hr style="margin: 2em 0;">

        <h3> Equações do 2º Grau</h3>
        <p>Uma equação do 2º grau é aquela em que a incógnita (x) tem como maior expoente o número 2. Sua forma geral é: <strong>ax² + bx + c = 0</strong>, onde 'a', 'b' e 'c' são números reais e 'a' é diferente de zero.</p>
        <p>As equações do 2º grau podem ter até duas soluções (ou raízes).</p>

        <h4>Métodos de Resolução:</h4>
        <ul>
            <li><strong>Fórmula de Bhaskara:</strong> É o método universal para resolver qualquer equação do 2º grau.
                <p>x = [-b ± sqrt(b² - 4ac)] / 2a</p>
                <p>Onde o termo dentro da raiz, (b² - 4ac), é chamado de <strong>Delta (Δ)</strong>.</p>
                <p>Δ = b² - 4ac</p>
                <p>A partir do valor de Delta, podemos saber quantas soluções reais a equação tem:</p>
                <ul>
                    <li>Se Δ > 0: Duas soluções reais e distintas.</li>
                    <li>Se Δ = 0: Uma única solução real (ou duas soluções reais iguais).</li>
                    <li>Se Δ < 0: Nenhuma solução real (soluções complexas).</li>
                </ul>
            </li>
            <li><strong>Fatoração (Casos Particulares):</strong> Para equações incompletas (quando b=0 ou c=0) ou trinomios quadrados perfeitos, a fatoração pode ser mais rápida.</li>
        </ul>

        <h4>Exemplos Resolvidos (Equações do 2º Grau):</h4>
        <ul>
            <li><strong>Exemplo 1: Equação Completa (usando Bhaskara)</strong>
                <p><strong>Problema:</strong> Resolva a equação: x² - 5x + 6 = 0</p>
                <p><strong>Resolução Detalhada:</strong></p>
                <ol>
                    <li>Identifique os coeficientes: a = 1, b = -5, c = 6.</li>
                    <li>Calcule o Delta (Δ):
                        <br>Δ = b² - 4ac
                        <br>Δ = (-5)² - 4(1)(6)
                        <br>Δ = 25 - 24
                        <br>Δ = 1
                    </li>
                    <li>Aplique a Fórmula de Bhaskara:
                        <br>x = [-b ± sqrt(Δ)] / 2a
                        <br>x = [-(-5) ± sqrt(1)] / 2(1)
                        <br>x = [5 ± 1] / 2
                    </li>
                    <li>Encontre as duas soluções:
                        <br>x' = (5 + 1) / 2 = 6 / 2 = 3
                        <br>x'' = (5 - 1) / 2 = 4 / 2 = 2
                    </li>
                </ol>
                <p><strong>Resposta:</strong> As soluções são x = 2 e x = 3.</p>
            </li>
            <li><strong>Exemplo 2: Equação Incompleta (c = 0) - Fatoração</strong>
                <p><strong>Problema:</strong> Resolva a equação: x² + 4x = 0</p>
                <p><strong>Resolução Detalhada:</strong></p>
                <ol>
                    <li>Coloque o 'x' em evidência (fator comum):
                        <br>x(x + 4) = 0
                    </li>
                    <li>Para que o produto seja zero, um dos fatores deve ser zero. Então, separe em duas equações de 1º grau:
                        <br>x = 0  (Primeira solução)
                        <br>OU
                        <br>x + 4 = 0
                        <br>x = -4 (Segunda solução)
                    </li>
                </ol>
                <p><strong>Resposta:</strong> As soluções são x = 0 e x = -4.</p>
            </li>
            <li><strong>Exemplo 3: Equação Incompleta (b = 0) - Isolamento</strong>
                <p><strong>Problema:</strong> Resolva a equação: 3x² - 75 = 0</p>
                <p><strong>Resolução Detalhada:</strong></p>
                <ol>
                    <li>Mova o '-75' para o lado direito (passa somando):
                        <br>3x² = 75
                    </li>
                    <li>Mova o '3' que multiplica 'x²' para o lado direito (passa dividindo):
                        <br>x² = 75 / 3
                        <br>x² = 25
                    </li>
                    <li>Para encontrar 'x', calcule a raiz quadrada de 25. Lembre-se que raízes quadradas têm duas soluções (uma positiva e uma negativa):
                        <br>x = ±sqrt(25)
                        <br>x = 5  OU  x = -5
                    </li>
                </ol>
                <p><strong>Resposta:</strong> As soluções são x = 5 e x = -5.</p>
            </li>
        </ul>

        <h3>📝 Exercícios de Fixação (2º Grau)</h3>
        <ol>
            <li>
                Qual(is) o(s) valor(es) de x na equação: x² - 8x + 15 = 0? (Responda as soluções em ordem crescente, separadas por vírgula, ex: "2,5")<br>
                <input type="text" id="resposta-eq2g-ex1" placeholder="Ex: 2,5">
                <button onclick="verificarEq2g1()">Verificar</button>
                <span id="feedback-eq2g-ex1"></span>
            </li>
            <li>
                Resolva a equação: 5x² = 45. (Responda as soluções em ordem crescente, separadas por vírgula, ex: "-3,3")<br>
                <input type="text" id="resposta-eq2g-ex2" placeholder="Ex: -3,3">
                <button onclick="verificarEq2g2()">Verificar</button>
                <span id="feedback-eq2g-ex2"></span>
            </li>
            <li>
                Encontre as soluções para a equação: 2x² - 6x = 0. (Responda as soluções em ordem crescente, separadas por vírgula, ex: "0,3")<br>
                <input type="text" id="resposta-eq2g-ex3" placeholder="Ex: 0,3">
                <button onclick="verificarEq2g3()">Verificar</button>
                <span id="feedback-eq2g-ex3"></span>
            </li>
        </ol>
    `
    },
    "estatistica-basica": {
        titulo: "Estatística Básica: Analisando e Interpretando Dados",
        texto: `
        <h2>📊 Estatística Básica: O Poder de Entender os Dados para o ENEM!</h2>
        <p>A Estatística é uma área da matemática fundamental para a vida moderna e para o ENEM. Ela nos permite coletar, organizar, analisar e interpretar grandes volumes de dados, transformando números em informações úteis para tomar decisões, prever tendências e compreender fenômenos sociais, econômicos e científicos.</p>

        <h3>💡 Medidas de Tendência Central: O "Centro" dos Dados</h3>
        <p>As medidas de tendência central são valores que representam o "centro" ou a "típica" de um conjunto de dados. Elas nos dão uma ideia de para onde os dados estão se concentrando.</p>

        <h4>1. Média Aritmética (Média)</h4>
        <ul>
            <li><strong>Conceito:</strong> É a soma de todos os valores de um conjunto de dados, dividida pelo número total de valores. É a medida mais conhecida e utilizada.</li>
            <li><strong>Fórmula:</strong> Média = (Soma de todos os valores) / (Número de valores)</li>
            <li><strong>Quando usar:</strong> Mais indicada para dados que não possuem valores extremos (outliers) que possam distorcer o resultado.</li>
            <li><strong>Exemplo:</strong> Notas de Matemática de 5 alunos: 7, 8, 6, 9, 10
                <br>Média = (7 + 8 + 6 + 9 + 10) / 5 = 40 / 5 = 8
            </li>
        </ul>

        <h4>2. Mediana</h4>
        <ul>
            <li><strong>Conceito:</strong> É o valor central de um conjunto de dados quando eles estão <strong>ordenados</strong> em ordem crescente ou decrescente. A mediana divide o conjunto em duas partes iguais, com 50% dos dados abaixo dela e 50% acima.</li>
            <li><strong>Como Calcular:</strong>
                <ol>
                    <li><strong>Ordene os dados:</strong> Coloque todos os valores em ordem crescente ou decrescente.</li>
                    <li><strong>Identifique a posição:</strong>
                        <ul>
                            <li><strong>Se o número de dados for ÍMPAR:</strong> A mediana é o valor que está exatamente no meio da lista.</li>
                            <li><strong>Se o número de dados for PAR:</strong> A mediana é a média aritmética dos dois valores centrais da lista.</li>
                        </ul>
                    </li>
                </ol>
            </li>
            <li><strong>Quando usar:</strong> Ideal para dados que podem ter valores extremos, pois a mediana não é tão afetada por eles quanto a média.</li>
            <li><strong>Exemplo 1 (Número ímpar de dados):</strong> Idades: 10, 15, 12, 11, 13
                <br>Ordenar: 10, 11, <strong>12</strong>, 13, 15
                <br>Mediana = 12
            </li>
            <li><strong>Exemplo 2 (Número par de dados):</strong> Salários: R$1000, R$1500, R$2000, R$5000
                <br>Ordenar: 1000, <strong>1500, 2000</strong>, 5000
                <br>Mediana = (1500 + 2000) / 2 = 3500 / 2 = 1750
            </li>
        </ul>

        <h4>3. Moda</h4>
        <ul>
            <li><strong>Conceito:</strong> É o valor que aparece com <strong>maior frequência</strong> em um conjunto de dados. Ou seja, é o dado mais comum.</li>
            <li><strong>Quando usar:</strong> Útil para dados não numéricos (qualitativos), como cor favorita, tipo sanguíneo, etc., e para identificar picos de ocorrência.</li>
            <li><strong>Tipos de Moda:</strong>
                <ul>
                    <li><strong>Amodal:</strong> Não há moda, pois todos os valores aparecem com a mesma frequência. Ex: 1, 2, 3, 4, 5</li>
                    <li><strong>Unimodal:</strong> Possui apenas uma moda. Ex: 2, 3, 3, 4, 5 (Moda = 3)</li>
                    <li><strong>Bimodal:</strong> Possui duas modas. Ex: 1, 1, 2, 3, 3, 4 (Modas = 1 e 3)</li>
                    <li><strong>Multimodal:</strong> Possui mais de duas modas.</li>
                </ul>
            </li>
            <li><strong>Exemplo:</strong> Cores de carros vendidos: Preto, Branco, Prata, Preto, Vermelho, Prata, Preto
                <br>Moda = Preto (aparece 3 vezes)
            </li>
        </ul>

        <h3>🧩 Exemplo Resolvido (Medidas de Tendência Central)</h3>
        <p>
            <strong>Problema:</strong> Durante uma semana, as vendas diárias de um produto foram: 10, 12, 8, 15, 10, 11, 10 unidades. Calcule a média, mediana e moda dessas vendas.
            <br><strong>Resolução Detalhada:</strong>
            <br>1. <strong>Ordenar os dados:</strong> 8, 10, 10, 10, 11, 12, 15
            <br>2. <strong>Média:</strong>
            <br>   - Soma = 8 + 10 + 10 + 10 + 11 + 12 + 15 = 76
            <br>   - Número de dados = 7
            <br>   - Média = 76 / 7 ≈ 10,86 (arredondando para duas casas decimais)
            <br>3. <strong>Mediana:</strong>
            <br>   - O conjunto tem 7 dados (número ímpar).
            <br>   - O valor do meio (4º valor) na lista ordenada (8, 10, 10, <strong>10</strong>, 11, 12, 15) é 10.
            <br>   - Mediana = 10
            <br>4. <strong>Moda:</strong>
            <br>   - O valor que mais se repete é 10 (aparece 3 vezes).
            <br>   - Moda = 10
            <br><strong>Resposta:</strong> Média ≈ 10,86; Mediana = 10; Moda = 10.
        </p>

        ---

        <h3>↔️ Medidas de Dispersão: A Variação dos Dados</h3>
        <p>As medidas de dispersão indicam o quão "espalhados" ou "variáveis" os dados estão em um conjunto. Elas complementam as medidas de tendência central, pois dois conjuntos com a mesma média podem ter dispersões muito diferentes.</p>

        <h4>1. Amplitude</h4>
        <ul>
            <li><strong>Conceito:</strong> É a medida de dispersão mais simples. Corresponde à diferença entre o maior e o menor valor de um conjunto de dados.</li>
            <li><strong>Fórmula:</strong> Amplitude = Valor Máximo - Valor Mínimo</li>
            <li><strong>Quando usar:</strong> Fornece uma ideia rápida da extensão dos dados, mas é muito sensível a valores extremos.</li>
            <li><strong>Exemplo:</strong> Temperaturas diárias em uma semana: 15°C, 18°C, 12°C, 20°C, 16°C
                <br>Valor Máximo = 20°C
                <br>Valor Mínimo = 12°C
                <br>Amplitude = 20 - 12 = 8°C
            </li>
        </ul>

        <h3>🧩 Exemplo Resolvido (Amplitude)</h3>
        <p>
            <strong>Problema:</strong> As pontuações de 5 alunos em um jogo foram: 85, 92, 78, 95, 80. Qual a amplitude dessas pontuações?
            <br><strong>Resolução Detalhada:</strong>
            <br>1. <strong>Identifique o Valor Máximo:</strong> A maior pontuação é 95.
            <br>2. <strong>Identifique o Valor Mínimo:</strong> A menor pontuação é 78.
            <br>3. <strong>Calcule a Amplitude:</strong>
            <br>   - Amplitude = Valor Máximo - Valor Mínimo
            <br>   - Amplitude = 95 - 78 = 17
            <br><strong>Resposta:</strong> A amplitude das pontuações é <strong>17</strong>.
        </p>

        <h3>📝 Exercícios de Fixação (Estatística)</h3>
        <ol>
            <li>
                Um grupo de amigos obteve as seguintes alturas em centímetros: 160, 175, 168, 172, 165. Qual a <strong>média</strong> das alturas?<br>
                <input type="number" id="resposta-est-ex1" placeholder="Resposta">
                <button onclick="verificarEstatistica1()">Verificar</button>
                <span id="feedback-est-ex1"></span>
            </li>
            <li>
                Em uma pesquisa sobre a cor preferida de carros, os resultados foram: Preto, Prata, Branco, Preto, Preto, Prata, Azul. Qual a <strong>moda</strong> desse conjunto de dados?<br>
                <input type="text" id="resposta-est-ex2" placeholder="Resposta (Cor)">
                <button onclick="verificarEstatistica2()">Verificar</button>
                <span id="feedback-est-ex2"></span>
            </li>
            <li>
                Calcule a <strong>mediana</strong> para o seguinte conjunto de dados de número de faltas em uma disciplina: 2, 0, 5, 1, 3, 4.<br>
                <input type="number" id="resposta-est-ex3" placeholder="Resposta">
                <button onclick="verificarEstatistica3()">Verificar</button>
                <span id="feedback-est-ex3"></span>
            </li>
            <li>
                As temperaturas máximas diárias em uma semana foram: 28°C, 32°C, 25°C, 30°C, 29°C, 31°C, 27°C. Qual a <strong>amplitude</strong> térmica dessa semana? (Responda apenas o número em °C)<br>
                <input type="number" id="resposta-est-ex4" placeholder="Resposta">
                <button onclick="verificarEstatistica4()">Verificar</button>
                <span id="feedback-est-ex4"></span>
            </li>
        </ol>
        `
    },
};

// Armazena os conteúdos dos tópicos de matemática avançada
const advancedTopicsData = {
    "geometria-plana": {
        titulo: "Geometria Plana: Figuras, Áreas e Perímetros",
        texto: `
            <h2>📐 Geometria Plana: Desvendando Formas e Medidas para o ENEM!</h2>
            <p>A Geometria Plana, também conhecida como Geometria Euclidiana, estuda as formas e figuras que existem em um plano (duas dimensões). Desde o formato de uma casa até o cálculo da área de um terreno, a geometria está presente em nosso cotidiano. No ENEM, ela é um dos temas mais recorrentes, exigindo a compreensão de conceitos, propriedades e, principalmente, o cálculo de áreas e perímetros.</p>
            <p style="font-style: italic; color: #666;"><strong>Dica:</strong> Para esta aula, se possível, pegue um papel e um lápis! Desenhar as figuras enquanto estuda ajudará muito na compreensão dos conceitos e na resolução dos exercícios.</p>

            <h3>1. Elementos Fundamentais: Ponto, Reta e Plano</h3>
            <ul>
                <li><strong>Ponto:</strong> O elemento mais básico, não possui dimensão. Representa uma localização. (Ex: A, B, C)</li>
                <li><strong>Reta:</strong> Uma linha infinita que não faz curva e não tem espessura. É unidimensional. (Ex: r, s)</li>
                <li><strong>Plano:</strong> Uma superfície infinita e "achatada" que não tem espessura. É bidimensional. (Ex: um chão, uma parede - sem limites).</li>
            </ul>

            <h3>2. Ângulos: Aberturas e Relações</h3>
            <p>Ângulo é a abertura formada por duas semirretas (lados do ângulo) que partem do mesmo ponto (vértice).</p>
            <h4>Tipos de Ângulos:</h4>
            <ul>
                <li><strong>Agudo:</strong> Menor que 90°. (Ex: 30°, 60°)</li>
                <li><strong>Reto:</strong> Exatamente 90°. Representado por um quadrado com um ponto no vértice.</li>
                <li><strong>Obtuso:</strong> Maior que 90° e menor que 180°. (Ex: 120°, 150°)</li>
                <li><strong>Raso (ou Meia Volta):</strong> Exatamente 180°. Forma uma linha reta.</li>
                <li><strong>Completo (ou Uma Volta):</strong> Exatamente 360°.</li>
            </ul>

            <h4>Relações entre Ângulos:</h4>
            <ul>
                <li><strong>Ângulos Complementares:</strong> A soma de dois ângulos é 90°.</li>
                <li><strong>Ângulos Suplementares:</strong> A soma de dois ângulos é 180°.</li>
                <li><strong>Ângulos Opostos pelo Vértice (OPV):</strong> São ângulos formados pelo cruzamento de duas retas. Eles são sempre iguais.</li>
                <li><strong>Ângulos Formados por Retas Paralelas Cortadas por uma Transversal:</strong>
                    <p>Quando uma reta transversal corta duas retas paralelas, formam-se 8 ângulos com relações específicas:</p>
                    <ul>
                        <li><strong>Alternos Internos:</strong> Estão entre as paralelas, em lados opostos da transversal. São iguais.</li>
                        <li><strong>Alternos Externos:</strong> Estão fora das paralelas, em lados opostos da transversal. São iguais.</li>
                        <li><strong>Correspondentes:</strong> Estão do mesmo lado da transversal, um interno e um externo. São iguais.</li>
                        <li><strong>Colaterais Internos:</strong> Estão entre as paralelas, do mesmo lado da transversal. São suplementares (somam 180°).</li>
                    </ul>
                </li>
            </ul>

            <h4>🧩 Exemplo Resolvido (Ângulos):</h4>
            <p>
                <strong>Problema:</strong> Duas retas paralelas 'r' e 's' são cortadas por uma transversal 't'. Se um dos ângulos alternos internos mede 70°, qual a medida do seu suplemento?
                <br><strong>Resolução Detalhada:</strong>
                <br>1. <strong>Identifique a relação:</strong> Ângulos alternos internos são iguais. Portanto, o outro ângulo alterno interno também mede 70°.
                <br>2. <strong>Encontre o suplemento:</strong> O suplemento de um ângulo (x) é 180° - x.
                <br>   - Suplemento de 70° = 180° - 70° = 110°.
                <br><strong>Resposta Final:</strong> O suplemento do ângulo é <strong>110°</strong>.
            </p>

            ---

            <h3>3. Polígonos: Formas Fechadas</h3>
            <p>Polígono é uma figura plana e fechada, formada por segmentos de reta que não se cruzam, a não ser nas suas extremidades.</p>
            <ul>
                <li><strong>Lados:</strong> Segmentos de reta que formam o polígono.</li>
                <li><strong>Vértices:</strong> Pontos de encontro dos lados.</li>
                <li><strong>Ângulos internos:</strong> Ângulos formados pelos lados dentro do polígono.</li>
                <li><strong>Diagonal:</strong> Segmento de reta que liga dois vértices não consecutivos.</li>
            </ul>
            <h4>Classificação de Polígonos pelo Número de Lados:</h4>
            <table style="width:auto; border-collapse: collapse; margin: 1em 0;">
                <thead>
                    <tr style="background-color: var(--color-background-medium);">
                        <th style="padding: 8px; border: 1px solid #ddd; text-align: left;">Lados</th>
                        <th style="padding: 8px; border: 1px solid #ddd; text-align: left;">Nome do Polígono</th>
                    </tr>
                </thead>
                <tbody>
                    <tr><td style="padding: 8px; border: 1px solid #ddd;">3</td><td style="padding: 8px; border: 1px solid #ddd;">Triângulo</td></tr>
                    <tr><td style="padding: 8px; border: 1px solid #ddd;">4</td><td style="padding: 8px; border: 1px solid #ddd;">Quadrilátero</td></tr>
                    <tr><td style="padding: 8px; border: 1px solid #ddd;">5</td><td style="padding: 8px; border: 1px solid #ddd;">Pentágono</td></tr>
                    <tr><td style="padding: 8px; border: 1px solid #ddd;">6</td><td style="padding: 8px; border: 1px solid #ddd;">Hexágono</td></tr>
                    <tr><td style="padding: 8px; border: 1px solid #ddd;">7</td><td style="padding: 8px; border: 1px solid #ddd;">Heptágono</td></tr>
                    <tr><td style="padding: 8px; border: 1px solid #ddd;">8</td><td style="padding: 8px; border: 1px solid #ddd;">Octógono</td></tr>
                    </tbody>
            </table>
            <h4>Soma dos Ângulos Internos de um Polígono:</h4>
            <p>A soma dos ângulos internos (Si) de um polígono de 'n' lados é dada pela fórmula:</p>
            <p><strong>Si = (n - 2) × 180°</strong></p>
            <p><strong>Exemplo:</strong> Soma dos ângulos internos de um Pentágono (n=5):</p>
            <p>Si = (5 - 2) × 180° = 3 × 180° = 540°</p>

            <h3>4. Triângulos: Os Polígonos de 3 Lados</h3>
            <p>Triângulos são os polígonos mais básicos e importantes. Possuem 3 lados e 3 ângulos. A soma dos ângulos internos de qualquer triângulo é sempre <strong>180°</strong>.</p>
            <h4>Classificação dos Triângulos:</h4>
            <ul>
                <li><strong>Quanto aos lados:</strong>
                    <ul>
                        <li><strong>Equilátero:</strong> 3 lados iguais e 3 ângulos iguais (60° cada).</li>
                        <li><strong>Isósceles:</strong> 2 lados iguais e 2 ângulos da base iguais.</li>
                        <li><strong>Escaleno:</strong> Todos os 3 lados diferentes e todos os 3 ângulos diferentes.</li>
                    </ul>
                </li>
                <li><strong>Quanto aos ângulos:</strong>
                    <ul>
                        <li><strong>Acutângulo:</strong> Todos os 3 ângulos agudos (menores que 90°).</li>
                        <li><strong>Retângulo:</strong> Possui um ângulo reto (90°). O lado oposto ao ângulo reto é a <strong>hipotenusa</strong> (o maior lado), e os outros dois são os <strong>catetos</strong>.</li>
                        <li><strong>Obtusângulo:</strong> Possui um ângulo obtuso (maior que 90°).</li>
                    </ul>
                </li>
            </ul>

            <h4>Teorema de Pitágoras (Fundamental para Triângulos Retângulos):</h4>
            <p>Em um triângulo retângulo, o quadrado da medida da hipotenusa é igual à soma dos quadrados das medidas dos catetos.</p>
            <p><strong>Fórmula: a² = b² + c²</strong></p>
            <p>Onde 'a' é a hipotenusa, e 'b' e 'c' são os catetos.</p>
            <p><strong>Exemplo:</strong> Um triângulo retângulo tem catetos medindo 3 cm e 4 cm. Qual a medida da hipotenusa?</p>
            <p>a² = 3² + 4²</p>
            <p>a² = 9 + 16</p>
            <p>a² = 25</p>
            <p>a = √25</p>
            <p>a = 5 cm</p>

            ---

            <h3>5. Quadriláteros: Polígonos de 4 Lados</h3>
            <p>Quadriláteros são polígonos com 4 lados e 4 ângulos. A soma dos ângulos internos de qualquer quadrilátero é sempre <strong>360°</strong>.</p>
            <h4>Tipos Principais de Quadriláteros e Suas Propriedades:</h4>
            <ul>
                <li><strong>Quadrado:</strong>
                    <ul>
                        <li>4 lados iguais.</li>
                        <li>4 ângulos retos (90°).</li>
                        <li>Diagonais iguais e se cruzam no ponto médio formando 90°.</li>
                    </ul>
                </li>
                <li><strong>Retângulo:</strong>
                    <ul>
                        <li>Lados opostos paralelos e iguais.</li>
                        <li>4 ângulos retos (90°).</li>
                        <li>Diagonais iguais e se cruzam no ponto médio.</li>
                    </ul>
                </li>
                <li><strong>Paralelogramo:</strong>
                    <ul>
                        <li>Lados opostos paralelos e iguais.</li>
                        <li>Ângulos opostos iguais.</li>
                        <li>Diagonais se cruzam no ponto médio.</li>
                    </ul>
                </li>
                <li><strong>Losango:</strong>
                    <ul>
                        <li>4 lados iguais.</li>
                        <li>Ângulos opostos iguais.</li>
                        <li>Diagonais se cruzam no ponto médio, são perpendiculares (formam 90°) e são bissetrizes dos ângulos.</li>
                    </ul>
                </li>
                <li><strong>Trapézio:</strong>
                    <ul>
                        <li>Possui apenas um par de lados paralelos (chamados de bases).</li>
                        <li>Pode ser isósceles (lados não paralelos iguais), retângulo (dois ângulos retos) ou escaleno.</li>
                    </ul>
                </li>
            </ul>

            ---

            <h3>6. Círculo e Circunferência: Curvas Perfeitas</h3>
            <ul>
                <li><strong>Circunferência:</strong> É a linha curva, fechada e plana, onde todos os pontos estão à mesma distância do centro. É o "contorno".</li>
                <li><strong>Círculo:</strong> É a área interna limitada pela circunferência. É a "superfície".</li>
                <li><strong>Raio (r):</strong> Distância do centro a qualquer ponto da circunferência.</li>
                <li><strong>Diâmetro (d):</strong> Segmento de reta que passa pelo centro e liga dois pontos da circunferência. O diâmetro é o dobro do raio (d = 2r).</li>
                <li><strong>Número Pi (π):</strong> Constante matemática irracional, aproximadamente 3,14. Usado em cálculos de circunferência e círculo.</li>
            </ul>
            <h4>Fórmulas:</h4>
            <ul>
                <li><strong>Comprimento da Circunferência (Perímetro):</strong> C = 2 × π × r</li>
                <li><strong>Área do Círculo:</strong> A = π × r²</li>
            </ul>

            ---

            <h3>7. Áreas das Principais Figuras Planas</h3>
            <p>Área é a medida da superfície de uma figura.</p>
            <table style="width:100%; border-collapse: collapse; margin: 1em 0;">
                <thead>
                    <tr style="background-color: var(--color-background-medium);">
                        <th style="padding: 8px; border: 1px solid #ddd; text-align: left;">Figura</th>
                        <th style="padding: 8px; border: 1px solid #ddd; text-align: left;">Fórmula da Área</th>
                        <th style="padding: 8px; border: 1px solid #ddd; text-align: left;">Legenda / Exemplo</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td style="padding: 8px; border: 1px solid #ddd;"><strong>Quadrado</strong></td>
                        <td style="padding: 8px; border: 1px solid #ddd;">A = l² (lado × lado)</td>
                        <td style="padding: 8px; border: 1px solid #ddd;">l = lado. Ex: Lado 5cm -> A = 5² = 25cm²</td>
                    </tr>
                    <tr>
                        <td style="padding: 8px; border: 1px solid #ddd;"><strong>Retângulo</strong></td>
                        <td style="padding: 8px; border: 1px solid #ddd;">A = b × h (base × altura)</td>
                        <td style="padding: 8px; border: 1px solid #ddd;">b = base, h = altura. Ex: 4cm × 3cm -> A = 12cm²</td>
                    </tr>
                    <tr>
                        <td style="padding: 8px; border: 1px solid #ddd;"><strong>Triângulo</strong></td>
                        <td style="padding: 8px; border: 1px solid #ddd;">A = (b × h) / 2 (base × altura / 2)</td>
                        <td style="padding: 8px; border: 1px solid #ddd;">b = base, h = altura. Ex: Base 6cm, Altura 4cm -> A = (6×4)/2 = 12cm²</td>
                    </tr>
                    <tr>
                        <td style="padding: 8px; border: 1px solid #ddd;"><strong>Paralelogramo</strong></td>
                        <td style="padding: 8px; border: 1px solid #ddd;">A = b × h (base × altura)</td>
                        <td style="padding: 8px; border: 1px solid #ddd;">b = base, h = altura. Ex: Base 7cm, Altura 5cm -> A = 35cm²</td>
                    </tr>
                    <tr>
                        <td style="padding: 8px; border: 1px solid #ddd;"><strong>Losango</strong></td>
                        <td style="padding: 8px; border: 1px solid #ddd;">A = (D × d) / 2 (Diagonal Maior × Diagonal Menor / 2)</td>
                        <td style="padding: 8px; border: 1px solid #ddd;">D = Diagonal Maior, d = Diagonal Menor. Ex: D=8cm, d=6cm -> A = (8×6)/2 = 24cm²</td>
                    </tr>
                    <tr>
                        <td style="padding: 8px; border: 1px solid #ddd;"><strong>Trapézio</strong></td>
                        <td style="padding: 8px; border: 1px solid #ddd;">A = [(B + b) × h] / 2 (Base Maior + Base Menor × altura / 2)</td>
                        <td style="padding: 8px; border: 1px solid #ddd;">B = Base Maior, b = Base Menor, h = altura. Ex: B=10, b=6, h=5 -> A = [(10+6)×5]/2 = 40cm²</td>
                    </tr>
                    <tr>
                        <td style="padding: 8px; border: 1px solid #ddd;"><strong>Círculo</strong></td>
                        <td style="padding: 8px; border: 1px solid #ddd;">A = π × r² (Pi × raio²)</td>
                        <td style="padding: 8px; border: 1px solid #ddd;">r = raio. Use π ≈ 3.14. Ex: Raio 3cm -> A = 3.14 × 3² ≈ 28.26cm²</td>
                    </tr>
                </tbody>
            </table>

            <h3>8. Perímetros das Figuras Planas</h3>
            <p>Perímetro é a medida do contorno de uma figura plana. É a soma das medidas de todos os seus lados.</p>
            <ul>
                <li><strong>Quadrado:</strong> P = 4 × l (4 vezes o lado)</li>
                <li><strong>Retângulo:</strong> P = 2 × (b + h) (2 vezes base + altura)</li>
                <li><strong>Triângulo:</strong> P = soma dos 3 lados</li>
                <li><strong>Circunferência:</strong> C = 2 × π × r (já visto na seção de Círculo/Circunferência)</li>
            </ul>

            ---

            <h3>🧩 Problema Resolvido: Aplicação Combinada de Conceitos</h3>
            <p>
                <strong>Problema:</strong> Uma praça retangular tem 50 metros de comprimento por 30 metros de largura. Dentro dela, há um jardim circular com raio de 10 metros no centro.
                <br>a) Qual a área total da praça?
                <br>b) Qual a área do jardim circular? (Use π = 3.14)
                <br>c) Qual a área da praça que NÃO é ocupada pelo jardim?
                <br>d) Quantos metros de grade seriam necessários para cercar a praça inteira?
                <br><strong>Resolução Detalhada:</strong>
                <br>1. <strong>Área total da praça (retângulo):</strong>
                <br>   - A_praça = comprimento × largura = 50 m × 30 m = 1500 m²
                <br>2. <strong>Área do jardim circular:</strong>
                <br>   - A_jardim = π × r² = 3.14 × 10² = 3.14 × 100 = 314 m²
                <br>3. <strong>Área da praça não ocupada pelo jardim:</strong>
                <br>   - A_não_jardim = A_praça - A_jardim = 1500 m² - 314 m² = 1186 m²
                <br>4. <strong>Perímetro da praça (retângulo):</strong>
                <br>   - P_praça = 2 × (comprimento + largura) = 2 × (50 + 30) = 2 × 80 = 160 m
                <br><strong>Resposta Final:</strong> a) 1500 m²; b) 314 m²; c) 1186 m²; d) 160 m.
            </p>

            <h3>📝 Exercícios de Fixação</h3>
            <ol>
                <li>
                    Um terreno triangular tem base de 10 metros e altura de 8 metros. Qual é a área desse terreno?<br>
                    <input type="number" id="resposta-geo-ex1" placeholder="Resposta em m²">
                    <button onclick="verificarGeometriaPlanaEx1()">Verificar</button>
                    <span id="feedback-geo-ex1"></span>
                </li>
                <li>
                    Calcule o comprimento de uma circunferência cujo raio é 7 cm. (Use π = 3.14 e responda com 2 casas decimais, ex: 12.34)<br>
                    <input type="text" id="resposta-geo-ex2" placeholder="Resposta em cm">
                    <button onclick="verificarGeometriaPlanaEx2()">Verificar</button>
                    <span id="feedback-geo-ex2"></span>
                </li>
                <li>
                    Em um triângulo retângulo, a hipotenusa mede 13 cm e um dos catetos mede 5 cm. Qual a medida do outro cateto?<br>
                    <input type="number" id="resposta-geo-ex3" placeholder="Resposta em cm">
                    <button onclick="verificarGeometriaPlanaEx3()">Verificar</button>
                    <span id="feedback-geo-ex3"></span>
                </li>
                <li>
                    Um losango tem diagonais medindo 12 cm e 8 cm. Qual é a área desse losango?<br>
                    <input type="number" id="resposta-geo-ex4" placeholder="Resposta em cm²">
                    <button onclick="verificarGeometriaPlanaEx4()">Verificar</button>
                    <span id="feedback-geo-ex4"></span>
                </li>
            </ol>
        `
    },
    "geometria-espacial": { // NOVO TÓPICO: Geometria Espacial
        titulo: "Geometria Espacial: Figuras em Três Dimensões",
        texto: `
            <h2>🧊 Geometria Espacial: Explorando o Mundo em 3D para o ENEM!</h2>
            <p>Após a Geometria Plana, que estuda figuras em duas dimensões (como o papel), a <strong>Geometria Espacial</strong> nos leva a um novo nível: o estudo de figuras em três dimensões, que ocupam um lugar no espaço. Pense em caixas, bolas, pirâmides e latas. Compreender volumes e áreas de superfícies desses sólidos é crucial para o ENEM e para aplicações práticas na engenharia, arquitetura e no cotidiano.</p>
            <p style="font-style: italic; color: #666;"><strong>Dica:</strong> A visualização é chave! Sempre que possível, tente imaginar as figuras ou, melhor ainda, utilize objetos reais ou desenhe esboços para ajudar na compreensão.</p>

            <h3>1. Conceitos Fundamentais</h3>
            <ul>
                <li><strong>Sólidos Geométricos:</strong> São figuras que possuem comprimento, largura e altura (três dimensões).</li>
                <li><strong>Superfície:</strong> É o limite entre o sólido e o espaço exterior.</li>
                <li><strong>Volume:</strong> É a medida do espaço ocupado por um sólido. Medido em unidades cúbicas (cm³, m³, etc.).</li>
                <li><strong>Área Total:</strong> É a soma das áreas de todas as faces (ou superfícies) que compõem o sólido.</li>
            </ul>

            <h3>2. Poliedros: Sólidos com Faces Planas</h3>
            <p>São sólidos geométricos cujas superfícies são formadas apenas por polígonos (faces). Eles não rolam.</p>
            <ul>
                <li><strong>Faces (F):</strong> Os polígonos que formam a superfície do poliedro.</li>
                <li><strong>Arestas (A):</strong> Os segmentos de reta que são a intersecção de duas faces.</li>
                <li><strong>Vértices (V):</strong> Os pontos de encontro das arestas.</li>
            </ul>
            <h4>Relação de Euler:</h4>
            <p>Para todo poliedro convexo, a relação entre o número de vértices (V), arestas (A) e faces (F) é dada por:</p>
            <p><strong>V - A + F = 2</strong></p>

            <h4>2.1. Prismas</h4>
            <p>Prismas são poliedros que possuem duas faces paralelas e congruentes (iguais), chamadas de <strong>bases</strong>, e suas faces laterais são paralelogramos. A altura do prisma é a distância entre suas bases.</p>
            <ul>
                <li><strong>Prisma Reto:</strong> As arestas laterais são perpendiculares às bases (faces laterais são retângulos).</li>
                <li><strong>Tipos:</strong> Nomeados pela forma de suas bases (ex: prisma de base triangular, prisma de base hexagonal).</li>
                <li><strong>Casos Especiais:</strong>
                    <ul>
                        <li><strong>Cubo:</strong> Prisma com todas as faces quadradas.</li>
                        <li><strong>Paralelepípedo Retângulo (ou Bloco Retangular):</strong> Prisma com todas as faces retangulares.</li>
                    </ul>
                </li>
            </ul>
            <table style="width:100%; border-collapse: collapse; margin: 1em 0;">
                <thead>
                    <tr style="background-color: var(--color-background-medium);">
                        <th style="padding: 8px; border: 1px solid #ddd; text-align: left;">Cálculo (Prisma)</th>
                        <th style="padding: 8px; border: 1px solid #ddd; text-align: left;">Fórmula</th>
                        <th style="padding: 8px; border: 1px solid #ddd; text-align: left;">Legenda / Exemplo (Paralelepípedo)</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td style="padding: 8px; border: 1px solid #ddd;">Volume (V)</td>
                        <td style="padding: 8px; border: 1px solid #ddd;">V = A<sub>b</sub> × h</td>
                        <td style="padding: 8px; border: 1px solid #ddd;">A<sub>b</sub> = Área da base, h = altura.<br>Para paralelepípedo: V = c × l × h</td>
                    </tr>
                    <tr>
                        <td style="padding: 8样的; border: 1px solid #ddd;">Área da Base (A<sub>b</sub>)</td>
                        <td style="padding: 8px; border: 1px solid #ddd;">Depende da forma da base (triângulo, quadrado, etc.)</td>
                        <td style="padding: 8px; border: 1px solid #ddd;">Para paralelepípedo: A<sub>b</sub> = c × l (comprimento × largura)</td>
                    </tr>
                    <tr>
                        <td style="padding: 8px; border: 1px solid #ddd;">Área Lateral (A<sub>l</sub>)</td>
                        <td style="padding: 8px; border: 1px solid #ddd;">A<sub>l</sub> = P<sub>b</sub> × h</td>
                        <td style="padding: 8px; border: 1px solid #ddd;">P<sub>b</sub> = Perímetro da base, h = altura.</td>
                    </tr>
                    <tr>
                        <td style="padding: 8px; border: 1px solid #ddd;">Área Total (A<sub>t</sub>)</td>
                        <td style="padding: 8px; border: 1px solid #ddd;">A<sub>t</sub> = 2 × A<sub>b</sub> + A<sub>l</sub></td>
                        <td style="padding: 8px; border: 1px solid #ddd;">Inclui as duas bases e as faces laterais.</td>
                    </tr>
                </tbody>
            </table>
            <p><strong>Exemplo (Cubo):</strong> Um cubo tem aresta de 4 cm.</p>
            <p>V = a³ = 4³ = 64 cm³</p>
            <p>A<sub>t</sub> = 6 × a² = 6 × 4² = 6 × 16 = 96 cm²</p>

            <h4>2.2. Pirâmides</h4>
            <p>Pirâmides são poliedros que possuem uma única base poligonal e faces laterais triangulares que se encontram em um único ponto (vértice ou ápice da pirâmide).</p>
            <ul>
                <li><strong>Altura (h):</strong> Distância do vértice à base.</li>
                <li><strong>Apótema da Pirâmide (g):</strong> Altura de uma face lateral.</li>
                <li><strong>Apótema da Base (m):</strong> Apótema do polígono da base. (Em pirâmides retas, 'g', 'h' e 'm' formam um triângulo retângulo: g² = h² + m²)</li>
            </ul>
            <table style="width:100%; border-collapse: collapse; margin: 1em 0;">
                <thead>
                    <tr style="background-color: var(--color-background-medium);">
                        <th style="padding: 8px; border: 1px solid #ddd; text-align: left;">Cálculo (Pirâmide)</th>
                        <th style="padding: 8px; border: 1px solid #ddd; text-align: left;">Fórmula</th>
                        <th style="padding: 8px; border: 1px solid #ddd; text-align: left;">Legenda / Observação</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td style="padding: 8px; border: 1px solid #ddd;">Volume (V)</td>
                        <td style="padding: 8px; border: 1px solid #ddd;">V = (1/3) × A<sub>b</sub> × h</td>
                        <td style="padding: 8px; border: 1px solid #ddd;">A<sub>b</sub> = Área da base, h = altura.<br>Volume é 1/3 do volume de um prisma com mesma base e altura.</td>
                    </tr>
                    <tr>
                        <td style="padding: 8px; border: 1px solid #ddd;">Área da Base (A<sub>b</sub>)</td>
                        <td style="padding: 8px; border: 1px solid #ddd;">Depende da forma da base</td>
                        <td style="padding: 8px; border: 1px solid #ddd;">(Quadrado, triângulo, etc.)</td>
                    </tr>
                    <tr>
                        <td style="padding: 8px; border: 1px solid #ddd;">Área Lateral (A<sub>l</sub>)</td>
                        <td style="padding: 8px; border: 1px solid #ddd;">Soma das áreas das faces triangulares</td>
                        <td style="padding: 8px; border: 1px solid #ddd;">Área de um triângulo = (base × apótema da pirâmide) / 2. Multiplique pelo nº de faces.</td>
                    </tr>
                    <tr>
                        <td style="padding: 8px; border: 1px solid #ddd;">Área Total (A<sub>t</sub>)</td>
                        <td style="padding: 8px; border: 1px solid #ddd;">A<sub>t</sub> = A<sub>b</sub> + A<sub>l</sub></td>
                        <td style="padding: 8px; border: 1px solid #ddd;">Inclui a base e as faces laterais.</td>
                    </tr>
                </tbody>
            </table>

            <hr style="margin: 2em 0;">

            <h3>3. Corpos Redondos (Não-Poliedros)</h3>
            <p>São sólidos que possuem superfícies curvas. Geralmente obtidos pela rotação de figuras planas.</p>

            <h4>3.1. Cilindro</h4>
            <p>Formado por duas bases circulares paralelas e uma superfície lateral curva. Pense em uma lata de refrigerante.</p>
            <ul>
                <li><strong>Raio (r):</strong> Raio da base circular.</li>
                <li><strong>Altura (h):</strong> Distância entre as bases.</li>
            </ul>
            <table style="width:100%; border-collapse: collapse; margin: 1em 0;">
                <thead>
                    <tr style="background-color: var(--color-background-medium);">
                        <th style="padding: 8px; border: 1px solid #ddd; text-align: left;">Cálculo (Cilindro)</th>
                        <th style="padding: 8px; border: 1px solid #ddd; text-align: left;">Fórmula (π ≈ 3.14)</th>
                        <th style="padding: 8px; border: 1px solid #ddd; text-align: left;">Legenda / Observação</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td style="padding: 8px; border: 1px solid #ddd;">Volume (V)</td>
                        <td style="padding: 8px; border: 1px solid #ddd;">V = π × r² × h</td>
                        <td style="padding: 8px; border: 1px solid #ddd;">Área da base (πr²) vezes a altura.</td>
                    </tr>
                    <tr>
                        <td style="padding: 8px; border: 1px solid #ddd;">Área da Base (A<sub>b</sub>)</td>
                        <td style="padding: 8px; border: 1px solid #ddd;">A<sub>b</sub> = π × r²</td>
                        <td style="padding: 8px; border: 1px solid #ddd;">Área de um círculo.</td>
                    </tr>
                    <tr>
                        <td style="padding: 8px; border: 1px solid #ddd;">Área Lateral (A<sub>l</sub>)</td>
                        <td style="padding: 8px; border: 1px solid #ddd;">A<sub>l</sub> = 2 × π × r × h</td>
                        <td style="padding: 8px; border: 1px solid #ddd;">Equivalente à área de um retângulo que forma o corpo.</td>
                    </tr>
                    <tr>
                        <td style="padding: 8px; border: 1px solid #ddd;">Área Total (A<sub>t</sub>)</td>
                        <td style="padding: 8px; border: 1px solid #ddd;">A<sub>t</sub> = 2 × A<sub>b</sub> + A<sub>l</sub></td>
                        <td style="padding: 8px; border: 1px solid #ddd;">Duas bases + área lateral.</td>
                    </tr>
                </tbody>
            </table>

            <h4>3.2. Cone</h4>
            <p>Formado por uma base circular e uma superfície lateral curva que se encontra em um único ponto (vértice). Pense em um chapéu de aniversário.</p>
            <ul>
                <li><strong>Raio (r):</strong> Raio da base circular.</li>
                <li><strong>Altura (h):</strong> Distância do vértice à base.</li>
                <li><strong>Geratriz (g):</strong> Distância do vértice a um ponto da circunferência da base.</li>
            </ul>
            <p><strong>Relação Importante (Triângulo Retângulo):</strong> g² = r² + h² (Teorema de Pitágoras).</p>
            <table style="width:100%; border-collapse: collapse; margin: 1em 0;">
                <thead>
                    <tr style="background-color: var(--color-background-medium);">
                        <th style="padding: 8px; border: 1px solid #ddd; text-align: left;">Cálculo (Cone)</th>
                        <th style="padding: 8px; border: 1px solid #ddd; text-align: left;">Fórmula (π ≈ 3.14)</th>
                        <th style="padding: 8px; border: 1px solid #ddd; text-align: left;">Legenda / Observação</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td style="padding: 8px; border: 1px solid #ddd;">Volume (V)</td>
                        <td style="padding: 8px; border: 1px solid #ddd;">V = (1/3) × π × r² × h</td>
                        <td style="padding: 8px; border: 1px solid #ddd;">Volume é 1/3 do volume de um cilindro com mesma base e altura.</td>
                    </tr>
                    <tr>
                        <td style="padding: 8px; border: 1px solid #ddd;">Área da Base (A<sub>b</sub>)</td>
                        <td style="padding: 8px; border: 1px solid #ddd;">A<sub>b</sub> = π × r²</td>
                        <td style="padding: 8px; border: 1px solid #ddd;">Área de um círculo.</td>
                    </tr>
                    <tr>
                        <td style="padding: 8px; border: 1px solid #ddd;">Área Lateral (A<sub>l</sub>)</td>
                        <td style="padding: 8px; border: 1px solid #ddd;">A<sub>l</sub> = π × r × g</td>
                        <td style="padding: 8px; border: 1px solid #ddd;">Geratriz (g) é calculada por Pitágoras.</td>
                    </tr>
                    <tr>
                        <td style="padding: 8px; border: 1px solid #ddd;">Área Total (A<sub>t</sub>)</td>
                        <td style="padding: 8px; border: 1px solid #ddd;">A<sub>t</sub> = A<sub>b</sub> + A<sub>l</sub></td>
                        <td style="padding: 8px; border: 1px solid #ddd;">Base + área lateral.</td>
                    </tr>
                </tbody>
            </table>

            <h4>3.3. Esfera</h4>
            <p>É um sólido geométrico perfeitamente redondo, onde todos os pontos de sua superfície estão à mesma distância do centro.</p>
            <ul>
                <li><strong>Raio (r):</strong> Distância do centro a qualquer ponto da superfície.</li>
            </ul>
            <table style="width:100%; border-collapse: collapse; margin: 1em 0;">
                <thead>
                    <tr style="background-color: var(--color-background-medium);">
                        <th style="padding: 8px; border: 1px solid #ddd; text-align: left;">Cálculo (Esfera)</th>
                        <th style="padding: 8px; border: 1px solid #ddd; text-align: left;">Fórmula (π ≈ 3.14)</th>
                        <th style="padding: 8px; border: 1px solid #ddd; text-align: left;">Legenda / Observação</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td style="padding: 8px; border: 1px solid #ddd;">Volume (V)</td>
                        <td style="padding: 8px; border: 1px solid #ddd;">V = (4/3) × π × r³</td>
                        <td style="padding: 8px; border: 1px solid #ddd;">Volume da "bola".</td>
                    </tr>
                    <tr>
                        <td style="padding: 8px; border: 1px solid #ddd;">Área da Superfície (A)</td>
                        <td style="padding: 8px; border: 1px solid #ddd;">A = 4 × π × r²</td>
                        <td style="padding: 8px; border: 1px solid #ddd;">Área do "casco" da bola.</td>
                    </tr>
                </tbody>
            </table>

            <hr style="margin: 2em 0;">

            <h3>4. Relação entre Volume e Capacidade</h3>
            <p>É comum no ENEM que os volumes sejam pedidos em unidades de capacidade (litros). Lembre-se das conversões:</p>
            <ul>
                <li><strong>1 m³ = 1.000 Litros (L)</strong></li>
                <li><strong>1 dm³ = 1 Litro (L)</strong></li>
                <li><strong>1 cm³ = 1 Mililitro (mL)</strong></li>
            </ul>

            <h3>🧩 Problema Resolvido: Aplicação de Volume e Capacidade</h3>
            <p>
                <strong>Problema:</strong> Uma caixa d'água tem formato de cilindro com raio da base de 2 metros e altura de 3 metros.
                <br>a) Qual o volume da caixa d'água em metros cúbicos? (Use π = 3.14)
                <br>b) Qual a capacidade máxima dessa caixa d'água em litros?
                <br><strong>Resolução Detalhada:</strong>
                <br>1. <strong>Calcular o volume do cilindro:</strong>
                <br>   - Fórmula: V = π × r² × h
                <br>   - V = 3.14 × 2² × 3
                <br>   - V = 3.14 × 4 × 3
                <br>   - V = 3.14 × 12 = 37.68 m³
                <br>2. <strong>Converter volume para litros:</strong>
                <br>   - Sabemos que 1 m³ = 1.000 Litros.
                <br>   - Capacidade = 37.68 m³ × 1.000 L/m³ = 37.680 Litros.
                <br><strong>Resposta Final:</strong> a) O volume é 37.68 m³; b) A capacidade máxima é 37.680 litros.
            </p>

            <h3>📝 Exercícios de Fixação</h3>
            <ol>
                <li>
                    Um paralelepípedo retângulo tem comprimento de 6 cm, largura de 4 cm e altura de 5 cm. Qual é o seu volume?<br>
                    <input type="number" id="resposta-geoesp-ex1" placeholder="Resposta em cm³">
                    <button onclick="verificarGeometriaEspacialEx1()">Verificar</button>
                    <span id="feedback-geoesp-ex1"></span>
                </li>
                <li>
                    Um cilindro possui raio da base de 3 metros e altura de 10 metros. Qual é a sua área lateral? (Use π = 3.14 e responda com 2 casas decimais, ex: 12.34)<br>
                    <input type="text" id="resposta-geoesp-ex2" placeholder="Resposta em m²">
                    <button onclick="verificarGeometriaEspacialEx2()">Verificar</button>
                    <span id="feedback-geoesp-ex2"></span>
                </li>
                <li>
                    Uma pirâmide de base quadrada tem lado da base medindo 6 cm e altura de 4 cm. Qual é o volume dessa pirâmide?<br>
                    <input type="number" id="resposta-geoesp-ex3" placeholder="Resposta em cm³">
                    <button onclick="verificarGeometriaEspacialEx3()">Verificar</button>
                    <span id="feedback-geoesp-ex3"></span>
                </li>
                <li>
                    Qual é o volume de uma esfera com raio de 3 cm? (Use π = 3.14 e responda com 2 casas decimais, ex: 12.34)<br>
                    <input type="text" id="resposta-geoesp-ex4" placeholder="Resposta em cm³">
                    <button onclick="verificarGeometriaEspacialEx4()">Verificar</button>
                    <span id="feedback-geoesp-ex4"></span>
                </li>
            </ol>
        `
    },
    "geometria-analitica": { // NOVO TÓPICO: Geometria Analítica
        titulo: "Geometria Analítica: Pontos, Retas e Figuras no Plano Cartesiano",
        texto: `
            <h2>📍 Geometria Analítica: Usando Álgebra para Visualizar a Geometria no ENEM!</h2>
            <p>A Geometria Analítica é o ramo da matemática que conecta a Álgebra com a Geometria. Ela nos permite representar figuras geométricas (pontos, retas, curvas) usando coordenadas e equações em um sistema de eixos (o Plano Cartesiano). Isso é extremamente útil para resolver problemas que envolvem distâncias, alinhamento, inclinação e áreas de formas no espaço, sendo um tópico constante no ENEM.</p>
            <p style="font-style: italic; color: #666;"><strong>Dica:</strong> Sempre que possível, esboce os pontos e as retas no plano cartesiano. Visualizar ajuda muito na compreensão e na resolução!</p>

            <h3>1. O Plano Cartesiano</h3>
            <p>É um sistema de coordenadas que permite localizar pontos em um plano. É formado por duas retas perpendiculares (eixos) que se cruzam na origem (ponto 0,0).</p>
            <ul>
                <li><strong>Eixo X (Abscissas):</strong> Horizontal. Representa a primeira coordenada de um ponto.</li>
                <li><strong>Eixo Y (Ordenadas):</strong> Vertical. Representa a segunda coordenada de um ponto.</li>
                <li><strong>Origem:</strong> Ponto (0, 0), onde os eixos se cruzam.</li>
                <li><strong>Coordenadas de um Ponto:</strong> Todo ponto P é representado por um par ordenado (x, y).</li>
                <li><strong>Quadrantes:</strong> O plano é dividido em 4 regiões pelos eixos, numeradas no sentido anti-horário.</li>
            </ul>

            <h3>2. Distância entre Dois Pontos</h3>
            <p>A distância entre dois pontos A(x<sub>1</sub>, y<sub>1</sub>) e B(x<sub>2</sub>, y<sub>2</sub>) no plano cartesiano pode ser calculada usando o Teorema de Pitágoras.</p>
            <p><strong>Fórmula: d = √[(x<sub>2</sub> - x<sub>1</sub>)² + (y<sub>2</sub> - y<sub>1</sub>)²]</strong></p>
            <p><strong>Exemplo:</strong> Calcule a distância entre A(1, 2) e B(4, 6).</p>
            <p>d = √[(4 - 1)² + (6 - 2)²]</p>
            <p>d = √[(3)² + (4)²]</p>
            <p>d = √[9 + 16]</p>
            <p>d = √25</p>
            <p>d = 5 unidades.</p>

            <h3>3. Ponto Médio de um Segmento</h3>
            <p>O ponto médio M de um segmento de reta que liga A(x<sub>1</sub>, y<sub>1</sub>) a B(x<sub>2</sub>, y<sub>2</sub>) é o ponto que divide o segmento em duas partes iguais.</p>
            <p><strong>Fórmula: M = ((x<sub>1</sub> + x<sub>2</sub>)/2 , (y<sub>1</sub> + y<sub>2</sub>)/2)</strong></p>
            <p><strong>Exemplo:</strong> Encontre o ponto médio do segmento com extremidades A(1, 2) e B(4, 6).</p>
            <p>M = ((1 + 4)/2 , (2 + 6)/2)</p>
            <p>M = (5/2 , 8/2)</p>
            <p>M = (2.5 , 4)</p>

            <h3>4. Condição de Alinhamento de Três Pontos (Colinearidade)</h3>
            <p>Três pontos A(x<sub>A</sub>, y<sub>A</sub>), B(x<sub>B</sub>, y<sub>B</sub>) e C(x<sub>C</sub>, y<sub>C</sub>) são colineares (estão na mesma reta) se o determinante formado por suas coordenadas for igual a zero.</p>
            <p><strong>Método do Determinante:</strong></p>
            <p>Monte uma matriz 3x3 adicionando uma coluna de '1's e calcule seu determinante.</p>
            <pre>
| x<sub>A</sub>  y<sub>A</sub>  1 |
| x<sub>B</sub>  y<sub>B</sub>  1 | = 0
| x<sub>C</sub>  y<sub>C</sub>  1 |
            </pre>
            <p><strong>Exemplo:</strong> Os pontos A(1, 2), B(2, 4) e C(3, 6) são colineares?</p>
            <pre>
| 1  2  1 | 1  2   (Repete as duas primeiras colunas)
| 2  4  1 | 2  4
| 3  6  1 | 3  6
            </pre>
            <p>Determinante = (1*4*1 + 2*1*3 + 1*2*6) - (1*4*3 + 1*1*6 + 2*2*1)</p>
            <p>Determinante = (4 + 6 + 12) - (12 + 6 + 4)</p>
            <p>Determinante = 22 - 22 = 0</p>
            <p>Como o determinante é 0, os pontos são colineares.</p>

            ---

            <h3>5. Estudo da Reta</h3>
            <p>Uma reta pode ser descrita por diferentes tipos de equações.</p>

            <h4>5.1. Coeficiente Angular (m) ou Declividade</h4>
            <p>Indica a inclinação da reta em relação ao eixo X. Pode ser calculado a partir de dois pontos P<sub>1</sub>(x<sub>1</sub>, y<sub>1</sub>) e P<sub>2</sub>(x<sub>2</sub>, y<sub>2</sub>).</p>
            <p><strong>Fórmula: m = (y<sub>2</sub> - y<sub>1</sub>) / (x<sub>2</sub> - x<sub>1</sub>)</strong> (onde x<sub>1</sub> ≠ x<sub>2</sub>)</p>
            <ul>
                <li>Se m > 0: Reta <strong>crescente</strong>.</li>
                <li>Se m < 0: Reta <strong>decrescente</strong>.</li>
                <li>Se m = 0: Reta <strong>horizontal</strong>.</li>
                <li>Se x<sub>1</sub> = x<sub>2</sub> (m indefinido): Reta <strong>vertical</strong>.</li>
            </ul>
            <p><strong>Relação entre Retas e Coeficiente Angular:</strong></p>
            <ul>
                <li><strong>Retas Paralelas:</strong> Têm o mesmo coeficiente angular (m<sub>1</sub> = m<sub>2</sub>).</li>
                <li><strong>Retas Perpendiculares:</strong> O produto de seus coeficientes angulares é -1 (m<sub>1</sub> × m<sub>2</sub> = -1).</li>
            </ul>

            <h4>5.2. Equações da Reta</h4>
            <ul>
                <li><strong>Equação Reduzida: y = mx + n</strong>
                    <p>Onde 'm' é o coeficiente angular e 'n' é o coeficiente linear (ponto onde a reta corta o eixo Y).</p>
                    <p>É a forma mais comum e útil para analisar a reta rapidamente.</p>
                </li>
                <li><strong>Equação Geral: Ax + By + C = 0</strong>
                    <p>Qualquer reta pode ser representada nessa forma. Para encontrar o coeficiente angular a partir dela: m = -A/B.</p>
                </li>
            </ul>
            <p><strong>Exemplo:</strong> Encontre a equação reduzida da reta que passa pelos pontos A(1, 2) e B(3, 8).</p>
            <p>1. Calcule o coeficiente angular (m):</p>
            <p>m = (8 - 2) / (3 - 1) = 6 / 2 = 3</p>
            <p>2. Use a equação reduzida (y = mx + n) com um dos pontos (ex: A(1, 2)):</p>
            <p>2 = 3(1) + n</p>
            <p>2 = 3 + n</p>
            <p>n = 2 - 3 = -1</p>
            <p>3. A equação reduzida é: <strong>y = 3x - 1</strong>.</p>

            <h3>6. Posição Relativa entre Duas Retas</h3>
            <p>Dadas duas retas r: y = m<sub>r</sub>x + n<sub>r</sub> e s: y = m<sub>s</sub>x + n<sub>s</sub>:</p>
            <ul>
                <li><strong>Paralelas Distintas:</strong> m<sub>r</sub> = m<sub>s</sub> e n<sub>r</sub> ≠ n<sub>s</sub>. (Mesma inclinação, Y-interceptos diferentes)</li>
                <li><strong>Concorrentes:</strong> m<sub>r</sub> ≠ m<sub>s</sub>. (Cruzam-se em um único ponto)
                    <ul>
                        <li><strong>Perpendiculares (um caso de concorrentes):</strong> m<sub>r</sub> × m<sub>s</sub> = -1. (Cruzam-se formando 90°)</li>
                    </ul>
                </li>
                <li><strong>Coincidentes:</strong> m<sub>r</sub> = m<sub>s</sub> e n<sub>r</sub> = n<sub>s</sub>. (São a mesma reta)</li>
            </ul>

            ---

            <h3>7. Área de um Triângulo no Plano Cartesiano</h3>
            <p>A área de um triângulo com vértices A(x<sub>A</sub>, y<sub>A</sub>), B(x<sub>B</sub>, y<sub>B</sub>) e C(x<sub>C</sub>, y<sub>C</sub>) pode ser calculada usando o determinante de suas coordenadas.</p>
            <p><strong>Fórmula: Área = 1/2 × |D|</strong></p>
            <p>Onde D é o determinante da matriz:</p>
            <pre>
| x<sub>A</sub>  y<sub>A</sub>  1 |
| x<sub>B</sub>  y<sub>B</sub>  1 |
| x<sub>C</sub>  y<sub>C</sub>  1 |
            </pre>
            <p><strong>Exemplo:</strong> Calcule a área do triângulo com vértices A(1, 1), B(4, 2) e C(2, 5).</p>
            <pre>
| 1  1  1 | 1  1   (Repete as duas primeiras colunas)
| 4  2  1 | 4  2
| 2  5  1 | 2  5
            </pre>
            <p>D = (1*2*1 + 1*1*2 + 1*4*5) - (1*2*2 + 1*1*5 + 1*4*1)</p>
            <p>D = (2 + 2 + 20) - (4 + 5 + 4)</p>
            <p>D = 24 - 13 = 11</p>
            <p>Área = 1/2 × |11| = 11 / 2 = 5.5 unidades de área.</p>

            <h3>🧩 Problema Resolvido: Aplicação Combinada de Geometria Analítica (ENEM)</h3>
            <p>
                <strong>Problema:</strong> Os pontos A(0, 0), B(3, 4) e C(8, 0) são vértices de um triângulo.
                <br>a) Calcule o comprimento do lado AB.
                <br>b) Encontre o ponto médio do lado BC.
                <br>c) Qual é a área desse triângulo?
                <br><strong>Resolução Detalhada:</strong>
                <br>1. <strong>Comprimento do lado AB (Distância entre dois pontos):</strong>
                <br>   - A(0, 0), B(3, 4)
                <br>   - d<sub>AB</sub> = √[(3 - 0)² + (4 - 0)²] = √[3² + 4²] = √[9 + 16] = √25 = 5 unidades.
                <br>2. <strong>Ponto médio do lado BC:</strong>
                <br>   - B(3, 4), C(8, 0)
                <br>   - M<sub>BC</sub> = ((3 + 8)/2 , (4 + 0)/2) = (11/2 , 4/2) = (5.5 , 2).
                <br>3. <strong>Área do triângulo ABC:</strong>
                <br>   - A(0, 0), B(3, 4), C(8, 0)
                <br>   - Determinante D:
                <pre>
| 0  0  1 | 0  0
| 3  4  1 | 3  4
| 8  0  1 | 8  0
                </pre>
                <br>   - D = (0*4*1 + 0*1*8 + 1*3*0) - (1*4*8 + 0*1*0 + 0*3*1)
                <br>   - D = (0 + 0 + 0) - (32 + 0 + 0) = 0 - 32 = -32
                <br>   - Área = 1/2 × |-32| = 1/2 × 32 = 16 unidades de área.
                <br><strong>Resposta Final:</strong> a) 5 unidades; b) (5.5, 2); c) 16 unidades de área.
            </p>

            <h3>📝 Exercícios de Fixação</h3>
            <ol>
                <li>
                    Calcule a distância entre os pontos P( -2, 3) e Q(1, -1). (Responda com 2 casas decimais, ex: 5.00)<br>
                    <input type="text" id="resposta-geoanalitica-ex1" placeholder="Distância">
                    <button onclick="verificarGeoAnaliticaEx1()">Verificar</button>
                    <span id="feedback-geoanalitica-ex1"></span>
                </li>
                <li>
                    Os pontos A(1, 1), B(3, 5) e C(5, 9) estão alinhados? (Responda "Sim" ou "Não")<br>
                    <input type="text" id="resposta-geoanalitica-ex2" placeholder="Sim ou Não">
                    <button onclick="verificarGeoAnaliticaEx2()">Verificar</button>
                    <span id="feedback-geoanalitica-ex2"></span>
                </li>
                <li>
                    Qual é o coeficiente angular da reta que passa pelos pontos R(2, 7) e S(4, 11)?<br>
                    <input type="number" id="resposta-geoanalitica-ex3" placeholder="Coeficiente angular">
                    <button onclick="verificarGeoAnaliticaEx3()">Verificar</button>
                    <span id="feedback-geoanalitica-ex3"></span>
                </li>
                <li>
                    Determine a área do triângulo cujos vértices são D(0, 0), E(5, 0) e F(3, 4).<br>
                    <input type="number" id="resposta-geoanalitica-ex4" placeholder="Área">
                    <button onclick="verificarGeoAnaliticaEx4()">Verificar</button>
                    <span id="feedback-geoanalitica-ex4"></span>
                </li>
            </ol>
        `
    },
    "funcoes": { // NOVO TÓPICO: Funções
        titulo: "Funções: Entendendo Relações e Gráficos",
        texto: `
            <h2>📈 Funções: A Chave para Entender Relações e Variações no ENEM!</h2>
            <p>Funções são um dos conceitos mais poderosos e presentes na matemática. Elas descrevem como uma grandeza se relaciona com outra, permitindo modelar fenômenos, prever comportamentos e analisar dados. No ENEM, a interpretação de gráficos e a compreensão de funções do 1º e 2º grau são constantemente cobradas em diversos contextos, desde economia até física.</p>
            <p style="font-style: italic; color: #666;"><strong>Dica:</strong> Para esta aula, pratique esboçar os gráficos das funções enquanto estuda. A visualização é fundamental para entender o comportamento das funções!</p>

            <h3>1. Conceito Fundamental de Função</h3>
            <p>Uma <strong>função</strong> é uma relação especial entre dois conjuntos, onde para cada elemento do primeiro conjunto (chamado <strong>domínio</strong>), associa-se um <strong>único</strong> elemento do segundo conjunto (chamado <strong>contradomínio</strong>).</p>
            <ul>
                <li><strong>Variável Independente (x):</strong> É o valor de entrada, que pertence ao domínio.</li>
                <li><strong>Variável Dependente (y ou f(x)):</strong> É o valor de saída, que é determinado pela função a partir do valor de 'x'.</li>
                <li><strong>Notação:</strong> f(x) (lê-se "f de x") significa "o valor da função f para um dado x". É o mesmo que 'y'. Ex: y = 2x + 1 ou f(x) = 2x + 1.</li>
            </ul>
            <p><strong>Teste da Linha Vertical:</strong> Para saber se um gráfico representa uma função, trace linhas verticais. Se qualquer linha vertical cruzar o gráfico em mais de um ponto, a relação NÃO é uma função.</p>

            <h3>2. Domínio, Contradomínio e Imagem</h3>
            <ul>
                <li><strong>Domínio (D):</strong> É o conjunto de todos os valores possíveis para a variável independente (x).</li>
                <li><strong>Contradomínio (CD):</strong> É o conjunto de todos os valores que a função PODE assumir (valores de y).</li>
                <li><strong>Imagem (Im):</strong> É o subconjunto do contradomínio que realmente é atingido pelos valores da função (os valores de y que a função de fato assume).</li>
            </ul>
            <h4>Restrições Comuns para o Domínio:</h4>
            <ul>
                <li><strong>Denominador diferente de zero:</strong> Em frações, o denominador nunca pode ser zero. Ex: Em f(x) = 1/x, o domínio é todos os números reais, exceto x = 0.</li>
                <li><strong>Radicando (número dentro da raiz) não negativo para raízes de índice par:</strong> Em raízes quadradas (ou de índice par), o valor dentro da raiz deve ser maior ou igual a zero. Ex: Em f(x) = √x, o domínio é x ≥ 0.</li>
            </ul>

            ---

            <h3>3. Tipos de Funções Essenciais para o ENEM</h3>

            <h4>3.1. Função Afim (ou Função do 1º Grau)</h4>
            <ul>
                <li><strong>Definição:</strong> É uma função do tipo <strong>f(x) = ax + b</strong>, onde 'a' e 'b' são números reais e 'a' é diferente de zero.</li>
                <li><strong>Gráfico:</strong> Uma linha reta.</li>
                <li><strong>Coeficientes:</strong>
                    <ul>
                        <li><strong>'a' (coeficiente angular ou declividade):</strong> Determina a inclinação da reta.
                            <ul>
                                <li>Se a > 0: Função <strong>crescente</strong> (a reta "sobe" da esquerda para a direita).</li>
                                <li>Se a < 0: Função <strong>decrescente</strong> (a reta "desce" da esquerda para a direita).</li>
                            </ul>
                        </li>
                        <li><strong>'b' (coeficiente linear):</strong> É o ponto onde a reta <strong>corta o eixo Y</strong>. É o valor de f(x) quando x = 0.</li>
                    </ul>
                </li>
                <li><strong>Raiz ou Zero da Função:</strong> É o valor de 'x' que faz com que f(x) = 0 (onde a reta corta o eixo X). Para encontrar, basta resolver ax + b = 0.</li>
            </ul>
            <p><strong>Exemplo:</strong> f(x) = 2x - 4</p>
            <ul>
                <li>a = 2 (Função crescente)</li>
                <li>b = -4 (Corta o eixo Y em -4)</li>
                <li>Raiz: 2x - 4 = 0 => 2x = 4 => x = 2 (Corta o eixo X em 2)</li>
            </ul>

            <h4>3.2. Função Quadrática (ou Função do 2º Grau)</h4>
            <ul>
                <li><strong>Definição:</strong> É uma função do tipo <strong>f(x) = ax² + bx + c</strong>, onde 'a', 'b' e 'c' são números reais e 'a' é diferente de zero.</li>
                <li><strong>Gráfico:</strong> Uma <strong>parábola</strong> (curva em forma de "U" ou "U" invertido).</li>
                <li><strong>Coeficientes:</strong>
                    <ul>
                        <li><strong>'a':</strong> Determina a concavidade da parábola.
                            <ul>
                                <li>Se a > 0: Concavidade para cima (parábola abre para cima, tem um ponto de <strong>mínimo</strong>).</li>
                                <li>Se a < 0: Concavidade para baixo (parábola abre para baixo, tem um ponto de <strong>máximo</strong>).</li>
                            </ul>
                        </li>
                        <li><strong>'c':</strong> É o ponto onde a parábola <strong>corta o eixo Y</strong> (valor de f(x) quando x = 0).</li>
                    </ul>
                </li>
                <li><strong>Raízes ou Zeros da Função:</strong> São os valores de 'x' que fazem f(x) = 0 (onde a parábola corta o eixo X). Encontrados resolvendo a equação ax² + bx + c = 0, geralmente pela Fórmula de Bhaskara. Uma função quadrática pode ter 0, 1 ou 2 raízes reais.</li>
                <li><strong>Vértice da Parábola (V):</strong> É o ponto de máximo ou mínimo da função.
                    <ul>
                        <li>Coordenada X do vértice (x<sub>V</sub>): x<sub>V</sub> = -b / 2a</li>
                        <li>Coordenada Y do vértice (y<sub>V</sub>): y<sub>V</sub> = -Δ / 4a (onde Δ = b² - 4ac)</li>
                    </ul>
                </li>
            </ul>
            <p><strong>Exemplo:</strong> f(x) = x² - 4x + 3</p>
            <ul>
                <li>a = 1 (Concavidade para cima, tem um mínimo)</li>
                <li>c = 3 (Corta o eixo Y em 3)</li>
                <li>Raízes (x² - 4x + 3 = 0): (x-1)(x-3) = 0 => x=1 e x=3</li>
                <li>Vértice: x<sub>V</sub> = -(-4) / (2*1) = 4/2 = 2. y<sub>V</sub> = 2² - 4(2) + 3 = 4 - 8 + 3 = -1. Vértice (2, -1).</li>
            </ul>

            ---

            <h3>4. Leitura e Interpretação de Gráficos</h3>
            <p>Gráficos são representações visuais de funções e são muito comuns no ENEM. Saber interpretá-los é tão importante quanto saber calculá-los!</p>
            <ul>
                <li><strong>Eixo X (horizontal):</strong> Representa o domínio (variável independente).</li>
                <li><strong>Eixo Y (vertical):</strong> Representa a imagem (variável dependente).</li>
                <li><strong>Pontos do Gráfico:</strong> Cada ponto (x, y) no gráfico significa que f(x) = y.</li>
                <li><strong>Intervalos de Crescimento/Decrescimento:</strong>
                    <ul>
                        <li><strong>Crescente:</strong> Conforme 'x' aumenta, 'y' também aumenta (gráfico "sobe").</li>
                        <li><strong>Decrescente:</strong> Conforme 'x' aumenta, 'y' diminui (gráfico "desce").</li>
                        <li><strong>Constante:</strong> Conforme 'x' aumenta, 'y' permanece o mesmo (gráfico horizontal).</li>
                    </ul>
                </li>
                <li><strong>Pontos de Máximo/Mínimo:</strong> Os "picos" ou "vales" da curva, indicam o valor mais alto ou mais baixo que a função atinge em um determinado intervalo.</li>
                <li><strong>Leitura de Problemas:</strong> Entenda o que cada eixo representa (tempo, custo, produção, temperatura, etc.) para interpretar corretamente o que o gráfico está mostrando no contexto do problema.</li>
            </ul>

            <h3>🧩 Problema Resolvido: Análise de Função Quadrática (ENEM)</h3>
            <p>
                <strong>Problema:</strong> O lucro L (em reais) de uma empresa na venda de x unidades de um produto é dado pela função L(x) = -x² + 10x - 9.
                <br>a) Quantas unidades devem ser vendidas para o lucro ser máximo?
                <br>b) Qual o lucro máximo que a empresa pode obter?
                <br>c) Qual a quantidade mínima de unidades para que a empresa não tenha prejuízo (lucro zero)?
                <br><strong>Resolução Detalhada:</strong>
                <br>A função L(x) = -x² + 10x - 9 é uma função quadrática com a = -1, b = 10, c = -9.
                <br>Como a = -1 (negativo), a parábola tem concavidade para baixo, o que significa que ela tem um ponto de máximo (lucro máximo).
                <br>
                <br>a) <strong>Unidades para o lucro máximo (x do vértice):</strong>
                <br>   - x<sub>V</sub> = -b / 2a = -10 / (2 * -1) = -10 / -2 = 5 unidades.
                <br>b) <strong>Lucro máximo (y do vértice):</strong>
                <br>   - Primeiro, calcule o Delta (Δ) = b² - 4ac = 10² - 4(-1)(-9) = 100 - 36 = 64.
                <br>   - y<sub>V</sub> = -Δ / 4a = -64 / (4 * -1) = -64 / -4 = 16 reais.
                <br>c) <strong>Quantidade mínima para não ter prejuízo (lucro zero - raízes da função):</strong>
                <br>   - Queremos L(x) = 0, então -x² + 10x - 9 = 0. Multiplicando por -1 para facilitar: x² - 10x + 9 = 0.
                <br>   - Usando Bhaskara ou fatoração: (x-1)(x-9) = 0. As raízes são x = 1 e x = 9.
                <br>   - Isso significa que, vendendo 1 ou 9 unidades, o lucro é zero.
                <br>   - Para não ter prejuízo, a empresa deve vender <strong>a partir de 1 unidade</strong>.
                <br><strong>Resposta Final:</strong> a) 5 unidades; b) R$ 16,00; c) 1 unidade.
            </p>

            <h3>📝 Exercícios de Fixação</h3>
            <ol>
                <li>
                    Considere a função f(x) = 3x - 9.
                    <br>a) Qual o valor de f(2)?
                    <br>b) Qual a raiz (zero) dessa função?<br>
                    <input type="number" id="resposta-funcoes-ex1a" placeholder="f(2)">
                    <input type="number" id="resposta-funcoes-ex1b" placeholder="Raiz (zero)">
                    <button onclick="verificarFuncoesEx1()">Verificar</button>
                    <span id="feedback-funcoes-ex1"></span>
                </li>
                <li>
                    Para a função g(x) = -2x + 8, determine se ela é crescente ou decrescente e o ponto em que ela corta o eixo Y.<br>
                    <input type="text" id="resposta-funcoes-ex2a" placeholder="Cresc./Decresc.">
                    <input type="number" id="resposta-funcoes-ex2b" placeholder="Corta Y em">
                    <button onclick="verificarFuncoesEx2()">Verificar</button>
                    <span id="feedback-funcoes-ex2"></span>
                </li>
                <li>
                    A função h(x) = x² - 6x + 5 tem concavidade para cima ou para baixo? E quais são suas raízes?<br>
                    <input type="text" id="resposta-funcoes-ex3a" placeholder="Concavidade">
                    <input type="text" id="resposta-funcoes-ex3b" placeholder="Raízes (ex: 1,5)">
                    <button onclick="verificarFuncoesEx3()">Verificar</button>
                    <span id="feedback-funcoes-ex3"></span>
                </li>
                <li>
                    Qual o valor mínimo (y do vértice) da função f(x) = x² - 8x + 15?
                    <br>(Lembre-se que o x do vértice é -b/2a)<br>
                    <input type="number" id="resposta-funcoes-ex4" placeholder="Valor Mínimo">
                    <button onclick="verificarFuncoesEx4()">Verificar</button>
                    <span id="feedback-funcoes-ex4"></span>
                </li>
            </ol>
        `
    },
    "progressoes": { // NOVO TÓPICO: Progressões
        titulo: "Progressões: PA e PG - Sequências com Padrão",
        texto: `
            <h2>🔢 Progressões Aritméticas e Geométricas: Entendendo Sequências no ENEM!</h2>
            <p>Progressões são sequências numéricas que seguem um padrão lógico, seja por adição constante (PA) ou por multiplicação constante (PG). Esses conceitos são frequentemente cobrados no ENEM para modelar situações de crescimento populacional, juros compostos, depreciação de valores e muitas outras séries. Dominar PA e PG é essencial para identificar e resolver problemas com padrões numéricos.</p>

            <h3>1. Sequências Numéricas</h3>
            <p>Uma sequência numérica é uma lista de números que seguem uma determinada ordem. Cada número na sequência é chamado de <strong>termo</strong>.</p>
            <p>Ex: (2, 4, 6, 8, ...) é uma sequência de números pares.</p>

            ---

            <h3>2. Progressão Aritmética (PA)</h3>
            <p>Uma <strong>Progressão Aritmética (PA)</strong> é uma sequência numérica em que a diferença entre termos consecutivos é sempre a mesma. Essa diferença constante é chamada de <strong>razão (r)</strong> da PA.</p>
            <ul>
                <li><strong>Termos:</strong> (a<sub>1</sub>, a<sub>2</sub>, a<sub>3</sub>, ..., a<sub>n</sub>, ...)</li>
                <li><strong>Razão (r):</strong> r = a<sub>n</sub> - a<sub>n-1</sub> (diferença entre qualquer termo e seu anterior)</li>
            </ul>
            <p><strong>Exemplo:</strong> (2, 5, 8, 11, ...) - A razão é r = 3 (5-2=3, 8-5=3, etc.)</p>

            <h4>Fórmulas da PA:</h4>
            <table style="width:100%; border-collapse: collapse; margin: 1em 0;">
                <thead>
                    <tr style="background-color: var(--color-background-medium);">
                        <th style="padding: 8px; border: 1px solid #ddd; text-align: left;">Cálculo</th>
                        <th style="padding: 8px; border: 1px solid #ddd; text-align: left;">Fórmula</th>
                        <th style="padding: 8px; border: 1px solid #ddd; text-align: left;">Legenda</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td style="padding: 8px; border: 1px solid #ddd;">Termo Geral (a<sub>n</sub>)</td>
                        <td style="padding: 8px; border: 1px solid #ddd;"><strong>a<sub>n</sub> = a<sub>1</sub> + (n - 1)r</strong></td>
                        <td style="padding: 8px; border: 1px solid #ddd;">a<sub>n</sub> = n-ésimo termo<br>a<sub>1</sub> = primeiro termo<br>n = posição do termo<br>r = razão</td>
                    </tr>
                    <tr>
                        <td style="padding: 8px; border: 1px solid #ddd;">Soma dos n Termos (S<sub>n</sub>)</td>
                        <td style="padding: 8px; border: 1px solid #ddd;"><strong>S<sub>n</sub> = [(a<sub>1</sub> + a<sub>n</sub>) × n] / 2</strong></td>
                        <td style="padding: 8px; border: 1px solid #ddd;">S<sub>n</sub> = soma dos n termos<br>a<sub>1</sub> = primeiro termo<br>a<sub>n</sub> = n-ésimo termo<br>n = número de termos</td>
                    </tr>
                </tbody>
            </table>

            <h4>Propriedade Importante da PA:</h4>
            <p>Em uma PA de três termos consecutivos (x, y, z), o termo do meio é a média aritmética dos outros dois: <strong>y = (x + z) / 2</strong></p>
            <p>Ex: Na PA (5, 8, 11), 8 = (5 + 11) / 2 = 16 / 2 = 8.</p>

            <h4>🧩 Exemplo Resolvido (PA):</h4>
            <p>
                <strong>Problema:</strong> Qual o 10º termo de uma PA em que o primeiro termo é 3 e a razão é 4? E qual a soma dos 10 primeiros termos?
                <br><strong>Resolução Detalhada:</strong>
                <br>Dados: a<sub>1</sub> = 3, r = 4, n = 10.
                <br>a) <strong>Encontrar o 10º termo (a<sub>10</sub>):</strong>
                <br>   - Fórmula: a<sub>n</sub> = a<sub>1</sub> + (n - 1)r
                <br>   - a<sub>10</sub> = 3 + (10 - 1) × 4
                <br>   - a<sub>10</sub> = 3 + 9 × 4
                <br>   - a<sub>10</sub> = 3 + 36 = 39
                <br>b) <strong>Encontrar a soma dos 10 primeiros termos (S<sub>10</sub>):</strong>
                <br>   - Fórmula: S<sub>n</sub> = [(a<sub>1</sub> + a<sub>n</sub>) × n] / 2
                <br>   - S<sub>10</sub> = [(3 + 39) × 10] / 2
                <br>   - S<sub>10</sub> = [42 × 10] / 2
                <br>   - S<sub>10</sub> = 420 / 2 = 210
                <br><strong>Resposta Final:</strong> O 10º termo é <strong>39</strong> e a soma dos 10 primeiros termos é <strong>210</strong>.
            </p>

            ---

            <h3>3. Progressão Geométrica (PG)</h3>
            <p>Uma <strong>Progressão Geométrica (PG)</strong> é uma sequência numérica em que a razão entre termos consecutivos é sempre a mesma. Essa razão constante é chamada de <strong>razão (q)</strong> da PG.</p>
            <ul>
                <li><strong>Termos:</strong> (a<sub>1</sub>, a<sub>2</sub>, a<sub>3</sub>, ..., a<sub>n</sub>, ...)</li>
                <li><strong>Razão (q):</strong> q = a<sub>n</sub> / a<sub>n-1</sub> (quociente entre qualquer termo e seu anterior)</li>
            </ul>
            <p><strong>Exemplo:</strong> (2, 6, 18, 54, ...) - A razão é q = 3 (6/2=3, 18/6=3, etc.)</p>

            <h4>Fórmulas da PG:</h4>
            <table style="width:100%; border-collapse: collapse; margin: 1em 0;">
                <thead>
                    <tr style="background-color: var(--color-background-medium);">
                        <th style="padding: 8px; border: 1px solid #ddd; text-align: left;">Cálculo</th>
                        <th style="padding: 8px; border: 1px solid #ddd; text-align: left;">Fórmula</th>
                        <th style="padding: 8px; border: 1px solid #ddd; text-align: left;">Legenda</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td style="padding: 8px; border: 1px solid #ddd;">Termo Geral (a<sub>n</sub>)</td>
                        <td style="padding: 8px; border: 1px solid #ddd;"><strong>a<sub>n</sub> = a<sub>1</sub> × q<sup>(n - 1)</sup></strong></td>
                        <td style="padding: 8px; border: 1px solid #ddd;">a<sub>n</sub> = n-ésimo termo<br>a<sub>1</sub> = primeiro termo<br>q = razão<br>n = posição do termo</td>
                    </tr>
                    <tr>
                        <td style="padding: 8px; border: 1px solid #ddd;">Soma dos n Termos Finitos (S<sub>n</sub>)</td>
                        <td style="padding: 8px; border: 1px solid #ddd;"><strong>S<sub>n</sub> = a<sub>1</sub> × (q<sup>n</sup> - 1) / (q - 1)</strong> (para q ≠ 1)</td>
                        <td style="padding: 8px; border: 1px solid #ddd;">S<sub>n</sub> = soma dos n termos<br>a<sub>1</sub> = primeiro termo<br>q = razão<br>n = número de termos</td>
                    </tr>
                    <tr>
                        <td style="padding: 8px; border: 1px solid #ddd;">Soma dos Termos Infinitos (S<sub>∞</sub>)</td>
                        <td style="padding: 8px; border: 1px solid #ddd;"><strong>S<sub>∞</sub> = a<sub>1</sub> / (1 - q)</strong> (para |q| < 1)</td>
                        <td style="padding: 8px; border: 1px solid #ddd;">Só existe se o valor absoluto de q for menor que 1.</td>
                    </tr>
                </tbody>
            </table>

            <h4>Propriedade Importante da PG:</h4>
            <p>Em uma PG de três termos consecutivos (x, y, z), o quadrado do termo do meio é igual ao produto dos outros dois: <strong>y² = x × z</strong></p>
            <p>Ex: Na PG (2, 6, 18), 6² = 36. E 2 × 18 = 36.</p>

            <h4>🧩 Exemplo Resolvido (PG):</h4>
            <p>
                <strong>Problema:</strong> Qual o 5º termo de uma PG em que o primeiro termo é 4 e a razão é 2? E qual a soma dos 5 primeiros termos?
                <br><strong>Resolução Detalhada:</strong>
                <br>Dados: a<sub>1</sub> = 4, q = 2, n = 5.
                <br>a) <strong>Encontrar o 5º termo (a<sub>5</sub>):</strong>
                <br>   - Fórmula: a<sub>n</sub> = a<sub>1</sub> × q<sup>(n - 1)</sup>
                <br>   - a<sub>5</sub> = 4 × 2<sup>(5 - 1)</sup>
                <br>   - a<sub>5</sub> = 4 × 2<sup>4</sup>
                <br>   - a<sub>5</sub> = 4 × 16 = 64
                <br>b) <strong>Encontrar a soma dos 5 primeiros termos (S<sub>5</sub>):</strong>
                <br>   - Fórmula: S<sub>n</sub> = a<sub>1</sub> × (q<sup>n</sup> - 1) / (q - 1)
                <br>   - S<sub>5</sub> = 4 × (2<sup>5</sup> - 1) / (2 - 1)
                <br>   - S<sub>5</sub> = 4 × (32 - 1) / 1
                <br>   - S<sub>5</sub> = 4 × 31 = 124
                <br><strong>Resposta Final:</strong> O 5º termo é <strong>64</strong> e a soma dos 5 primeiros termos é <strong>124</strong>.
            </p>

            <h3>📝 Exercícios de Fixação</h3>
            <ol>
                <li>
                    Em uma Progressão Aritmética, o primeiro termo é 5 e a razão é 3. Qual é o 8º termo dessa PA?<br>
                    <input type="number" id="resposta-prog-ex1" placeholder="Resposta">
                    <button onclick="verificarProgressoesEx1()">Verificar</button>
                    <span id="feedback-prog-ex1"></span>
                </li>
                <li>
                    Qual a soma dos 6 primeiros termos da PA (2, 6, 10, ...)?<br>
                    <input type="number" id="resposta-prog-ex2" placeholder="Resposta">
                    <button onclick="verificarProgressoesEx2()">Verificar</button>
                    <span id="feedback-prog-ex2"></span>
                </li>
                <li>
                    O primeiro termo de uma Progressão Geométrica é 3 e sua razão é 2. Qual o 4º termo dessa PG?<br>
                    <input type="number" id="resposta-prog-ex3" placeholder="Resposta">
                    <button onclick="verificarProgressoesEx3()">Verificar</button>
                    <span id="feedback-prog-ex3"></span>
                </li>
                <li>
                    Calcule a soma dos termos da PG infinita (10, 5, 2.5, ...). (Responda com 1 casa decimal, ex: 12.5)<br>
                    <input type="text" id="resposta-prog-ex4" placeholder="Resposta">
                    <button onclick="verificarProgressoesEx4()">Verificar</button>
                    <span id="feedback-prog-ex4"></span>
                </li>
            </ol>
        `
    },
    "analise-combinatoria-probabilidade": { // NOVO TÓPICO: Análise Combinatória e Probabilidade
        titulo: "Análise Combinatória e Probabilidade: Contando Possibilidades e Chances",
        texto: `
            <h2>🎲 Análise Combinatória e Probabilidade: Desvendando o Mundo das Possibilidades para o ENEM!</h2>
            <p>Este é um dos temas que mais testa o raciocínio lógico no ENEM. Análise Combinatória nos ensina a contar o número de maneiras de realizar algo, enquanto Probabilidade calcula as chances de um evento ocorrer. Juntos, eles são a base para entender jogos de azar, estatísticas, resultados de pesquisas e muito mais.</p>
            <p style="font-style: italic; color: #666;"><strong>Dica:</strong> A chave aqui é a <strong>interpretação</strong> do problema! Pergunte-se sempre: a ordem importa? Há repetição? Estou escolhendo ou ordenando?</p>

            ---

            <h3>Parte I: Análise Combinatória (Contagem)</h3>
            <p>A Análise Combinatória estuda os métodos de contagem, ou seja, de quantas maneiras diferentes podemos agrupar ou ordenar elementos de um conjunto, sob certas condições.</p>

            <h4>1. Princípio Fundamental da Contagem (PFC)</h4>
            <p>Se um evento é composto por várias etapas sucessivas e independentes, o número total de possibilidades de o evento ocorrer é o produto do número de possibilidades de cada etapa.</p>
            <p><strong>Conceito:</strong> Se você tem "E" escolhas para a primeira etapa E "F" escolhas para a segunda etapa, o total é E × F.</p>
            <p><strong>Exemplo:</strong> Quantas combinações de roupa posso formar se tenho 3 camisetas e 2 calças?</p>
            <p>Opções = 3 (camisetas) × 2 (calças) = 6 combinações diferentes.</p>

            <h4>2. Fatorial (n!)</h4>
            <p>O fatorial de um número natural 'n' (representado por n!) é o produto de todos os números naturais de 'n' até 1.</p>
            <ul>
                <li><strong>n! = n × (n-1) × (n-2) × ... × 1</strong></li>
                <li><strong>Casos Especiais:</strong> 0! = 1 e 1! = 1</li>
            </ul>
            <p><strong>Exemplo:</strong> 5! = 5 × 4 × 3 × 2 × 1 = 120</p>

            <h4>3. Permutação Simples (P<sub>n</sub>)</h4>
            <p>É a maneira de ordenar <strong>todos</strong> os elementos de um conjunto. A ordem importa, e todos os elementos são usados.</p>
            <p><strong>Fórmula: P<sub>n</sub> = n!</strong></p>
            <p>Onde 'n' é o número total de elementos distintos.</p>
            <p><strong>Exemplo:</strong> De quantas maneiras diferentes podemos organizar 3 livros em uma prateleira?</p>
            <p>P<sub>3</sub> = 3! = 3 × 2 × 1 = 6 maneiras.</p>

            <h4>4. Arranjo Simples (A<sub>n,k</sub>)</h4>
            <p>É a maneira de escolher e ordenar 'k' elementos de um conjunto de 'n' elementos distintos. <strong>A ordem dos elementos ESCOLHIDOS importa.</strong></p>
            <p><strong>Fórmula: A<sub>n,k</sub> = n! / (n - k)!</strong></p>
            <p>Onde 'n' é o número total de elementos e 'k' é o número de elementos a serem escolhidos e ordenados.</p>
            <p><strong>Exemplo:</strong> Em uma corrida com 6 atletas, de quantas formas diferentes podem ser distribuídas as medalhas de ouro, prata e bronze?</p>
            <p>Aqui, a ordem importa (ouro é diferente de prata). n=6, k=3.</p>
            <p>A<sub>6,3</sub> = 6! / (6-3)! = 6! / 3! = (6 × 5 × 4 × 3!) / 3! = 6 × 5 × 4 = 120 formas.</p>

            <h4>5. Combinação Simples (C<sub>n,k</sub>)</h4>
            <p>É a maneira de escolher 'k' elementos de um conjunto de 'n' elementos distintos. <strong>A ordem dos elementos ESCOLHIDOS NÃO importa.</strong></p>
            <p><strong>Fórmula: C<sub>n,k</sub> = n! / [k! × (n - k)!]</strong></p>
            <p>Onde 'n' é o número total de elementos e 'k' é o número de elementos a serem escolhidos.</p>
            <p><strong>Exemplo:</strong> Em uma turma de 10 alunos, quantas comissões de 3 alunos podem ser formadas?</p>
            <p>Aqui, a ordem não importa (comissão {A, B, C} é a mesma que {B, A, C}). n=10, k=3.</p>
            <p>C<sub>10,3</sub> = 10! / [3! × (10-3)!] = 10! / (3! × 7!) = (10 × 9 × 8 × 7!) / [(3 × 2 × 1) × 7!] = (10 × 9 × 8) / 6 = 720 / 6 = 120 comissões.</p>

            <h4>Diferença Crucial: Ordem Importa ou Não?</h4>
            <table style="width:100%; border-collapse: collapse; margin: 1em 0;">
                <thead>
                    <tr style="background-color: var(--color-background-medium);">
                        <th style="padding: 8px; border: 1px solid #ddd; text-align: left;">Situação</th>
                        <th style="padding: 8px; border: 1px solid #ddd; text-align: left;">Ordem Importa?</th>
                        <th style="padding: 8px; border: 1px solid #ddd; text-align: left;">Técnica</th>
                        <th style="padding: 8px; border: 1px solid #ddd; text-align: left;">Exemplo</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td style="padding: 8px; border: 1px solid #ddd;">Organizar TODOS os elementos</td>
                        <td style="padding: 8px; border: 1px solid #ddd;">SIM</td>
                        <td style="padding: 8px; border: 1px solid #ddd;">Permutação</td>
                        <td style="padding: 8px; border: 1px solid #ddd;">Formar filas, anagramas.</td>
                    </tr>
                    <tr>
                        <td style="padding: 8px; border: 1px solid #ddd;">Escolher e Ordenar parte dos elementos</td>
                        <td style="padding: 8px; border: 1px solid #ddd;">SIM</td>
                        <td style="padding: 8px; border: 1px solid #ddd;">Arranjo</td>
                        <td style="padding: 8px; border: 1px solid #ddd;">Cargos distintos (presidente/vice), pódium.</td>
                    </tr>
                    <tr>
                        <td style="padding: 8px; border: 1px solid #ddd;">Escolher um grupo (a ordem não faz diferença no grupo)</td>
                        <td style="padding: 8px; border: 1px solid #ddd;">NÃO</td>
                        <td style="padding: 8px; border: 1px solid #ddd;">Combinação</td>
                        <td style="padding: 8px; border: 1px solid #ddd;">Formar comissões, times, subconjuntos.</td>
                    </tr>
                </tbody>
            </table>

            ---

            <h3>Parte II: Probabilidade (Chances)</h3>
            <p>Probabilidade é o ramo da matemática que estuda as chances de um evento ocorrer. É a medida da incerteza.</p>

            <h4>1. Conceitos Básicos:</h4>
            <ul>
                <li><strong>Experimento Aleatório:</strong> Um experimento que, repetido nas mesmas condições, pode apresentar resultados diferentes (ex: lançar um dado).</li>
                <li><strong>Espaço Amostral (Ω):</strong> O conjunto de todos os resultados possíveis de um experimento aleatório.</li>
                <li><strong>Evento (E):</strong> Qualquer subconjunto do espaço amostral; um resultado ou grupo de resultados de interesse.</li>
            </ul>

            <h4>2. Cálculo da Probabilidade Clássica:</h4>
            <p>A probabilidade de um evento (E) ocorrer é a razão entre o número de resultados favoráveis a esse evento e o número total de resultados possíveis no espaço amostral, desde que todos os resultados sejam igualmente prováveis.</p>
            <p><strong>Fórmula: P(E) = (Número de casos favoráveis) / (Número total de casos possíveis)</strong></p>
            <p>A probabilidade é sempre um número entre 0 e 1 (ou 0% e 100%).</p>
            <p><strong>Exemplo:</strong> Qual a probabilidade de tirar um número par ao lançar um dado justo de 6 faces?</p>
            <p>Espaço Amostral (Ω) = {1, 2, 3, 4, 5, 6} => n(Ω) = 6</p>
            <p>Evento (E) = {2, 4, 6} (números pares) => n(E) = 3</p>
            <p>P(E) = 3 / 6 = 1/2 = 0.5 = 50%</p>

            <h4>3. Propriedades da Probabilidade:</h4>
            <ul>
                <li><strong>Probabilidade Complementar:</strong>
                    <p>A probabilidade de um evento não ocorrer (E') é 1 menos a probabilidade de ele ocorrer.</p>
                    <p><strong>P(E') = 1 - P(E)</strong></p>
                    <p>Ex: Se a chance de chover é 0.7 (70%), a chance de não chover é 1 - 0.7 = 0.3 (30%).</p>
                </li>
                <li><strong>Eventos Independentes (Interseção):</strong>
                    <p>Se dois eventos A e B são independentes (a ocorrência de um não afeta o outro), a probabilidade de ambos ocorrerem é o produto de suas probabilidades.</p>
                    <p><strong>P(A e B) = P(A) × P(B)</strong></p>
                    <p>Ex: Qual a probabilidade de tirar 'cara' em uma moeda E um '6' em um dado? P(cara) = 1/2, P(6) = 1/6. P(cara e 6) = 1/2 × 1/6 = 1/12.</p>
                </li>
                <li><strong>Eventos Mutuamente Exclusivos (União):</strong>
                    <p>Se dois eventos A e B não podem ocorrer ao mesmo tempo (não há intersecção), a probabilidade de A ou B ocorrer é a soma de suas probabilidades.</p>
                    <p><strong>P(A ou B) = P(A) + P(B)</strong></p>
                    <p>Ex: Qual a probabilidade de tirar um '1' OU um '2' em um dado? P(1)=1/6, P(2)=1/6. P(1 ou 2) = 1/6 + 1/6 = 2/6 = 1/3.</p>
                </li>
            </ul>

            <h3>🧩 Problema Resolvido: Combinando Contagem e Chances (ENEM)</h3>
            <p>
                <strong>Problema:</strong> Em uma caixa, há 5 bolas azuis e 3 bolas vermelhas. Se duas bolas são retiradas ao acaso, sem reposição, qual a probabilidade de que ambas sejam azuis?
                <br><strong>Resolução Detalhada:</strong>
                <br>1. <strong>Calcular o número total de casos possíveis (espaço amostral):</strong>
                <br>   - Estamos escolhendo 2 bolas de um total de 8 (5 azuis + 3 vermelhas), e a ordem não importa. É uma Combinação.
                <br>   - n = 8, k = 2.
                <br>   - C<sub>8,2</sub> = 8! / (2! × (8-2)!) = 8! / (2! × 6!) = (8 × 7 × 6!) / (2 × 1 × 6!) = (8 × 7) / 2 = 56 / 2 = 28.
                <br>   - Total de casos possíveis = 28.
                <br>2. <strong>Calcular o número de casos favoráveis (ambas azuis):</strong>
                <br>   - Precisamos escolher 2 bolas azuis de um total de 5 bolas azuis. A ordem não importa. É uma Combinação.
                <br>   - n = 5, k = 2.
                <br>   - C<sub>5,2</sub> = 5! / (2! × (5-2)!) = 5! / (2! × 3!) = (5 × 4 × 3!) / (2 × 1 × 3!) = (5 × 4) / 2 = 20 / 2 = 10.
                <br>   - Número de casos favoráveis = 10.
                <br>3. <strong>Calcular a probabilidade:</strong>
                <br>   - P(Ambas Azuis) = (Casos favoráveis) / (Casos possíveis) = 10 / 28.
                <br>   - Simplificando a fração por 2: 5 / 14.
                <br><strong>Resposta Final:</strong> A probabilidade é de <strong>5/14</strong>.
            </p>

            <h3>📝 Exercícios de Fixação</h3>
            <ol>
                <li>
                    Em um campeonato com 8 times, de quantas maneiras diferentes os 3 primeiros lugares (campeão, vice, 3º colocado) podem ser preenchidos?<br>
                    <input type="number" id="resposta-combprob-ex1" placeholder="Resposta">
                    <button onclick="verificarCombinatoriaProbabilidadeEx1()">Verificar</button>
                    <span id="feedback-combprob-ex1"></span>
                </li>
                <li>
                    Quantos anagramas da palavra "ROMA" podem ser formados?<br>
                    <input type="number" id="resposta-combprob-ex2" placeholder="Resposta">
                    <button onclick="verificarCombinatoriaProbabilidadeEx2()">Verificar</button>
                    <span id="feedback-combprob-ex2"></span>
                </li>
                <li>
                    Em um baralho de 52 cartas, qual a probabilidade de retirar uma carta de OUROS?<br>
                    <input type="text" id="resposta-combprob-ex3" placeholder="Resposta (fração irredutível, ex: 1/4)">
                    <button onclick="verificarCombinatoriaProbabilidadeEx3()">Verificar</button>
                    <span id="feedback-combprob-ex3"></span>
                </li>
                <li>
                    Uma caixa contém 4 bolas verdes e 6 bolas amarelas. Se 3 bolas são retiradas ao acaso, sem reposição, qual a probabilidade de que todas sejam amarelas?<br>
                    <input type="text" id="resposta-combprob-ex4" placeholder="Resposta (fração irredutível, ex: 1/5)">
                    <button onclick="verificarCombinatoriaProbabilidadeEx4()">Verificar</button>
                    <span id="feedback-combprob-ex4"></span>
                </li>
            </ol>
        `
    },
    "trigonometria": { // NOVO TÓPICO: Trigonometria
        titulo: "Trigonometria: Ângulos, Triângulos e o Círculo Trigonométrico",
        texto: `
            <h2>📐 Trigonometria: Medindo Ângulos e Triângulos para o ENEM!</h2>
            <p>A Trigonometria é a área da matemática que estuda as relações entre os ângulos e os lados dos triângulos. É uma ferramenta poderosa para resolver problemas em diversas áreas como física, engenharia, navegação, cartografia e, claro, é um tema constante e fundamental no ENEM.</p>
            <p style="font-style: italic; color: #666;"><strong>Dica:</strong> A Trigonometria é muito visual. Desenhe os triângulos e o círculo trigonométrico para fixar os conceitos e as relações!</p>

            <h3>1. Razões Trigonométricas no Triângulo Retângulo</h3>
            <p>Em um triângulo retângulo (aquele que possui um ângulo de 90°), podemos definir três razões trigonométricas principais em relação aos ângulos agudos:</p>
            <ul>
                <li><strong>Hipotenusa:</strong> Lado oposto ao ângulo reto (o maior lado).</li>
                <li><strong>Cateto Oposto:</strong> Lado oposto ao ângulo agudo de referência.</li>
                <li><strong>Cateto Adjacente:</strong> Lado adjacente (ao lado) do ângulo agudo de referência, mas não é a hipotenusa.</li>
            </ul>
            <h4>As Três Razões Principais:</h4>
            <ul>
                <li><strong>Seno (sen):</strong> Razão entre o Cateto Oposto e a Hipotenusa.
                    <br><code>sen(ângulo) = Cateto Oposto / Hipotenusa</code>
                </li>
                <li><strong>Cosseno (cos):</strong> Razão entre o Cateto Adjacente e a Hipotenusa.
                    <br><code>cos(ângulo) = Cateto Adjacente / Hipotenusa</code>
                </li>
                <li><strong>Tangente (tg):</strong> Razão entre o Cateto Oposto e o Cateto Adjacente.
                    <br><code>tg(ângulo) = Cateto Oposto / Cateto Adjacente</code>
                </li>
            </ul>
            <p><strong>Mnemônico para memorizar: SOH CAH TOA</strong></p>
            <ul>
                <li><strong>SOH:</strong> Seno = Oposto / Hipotenusa</li>
                <li><strong>CAH:</strong> Cosseno = Adjacente / Hipotenusa</li>
                <li><strong>TOA:</strong> Tangente = Oposto / Adjacente</li>
            </ul>
            <p><strong>Exemplo:</strong> Em um triângulo retângulo, a hipotenusa mede 10 cm. Para um ângulo α, o cateto oposto mede 6 cm e o cateto adjacente mede 8 cm.</p>
            <ul>
                <li>sen(α) = 6 / 10 = 0.6</li>
                <li>cos(α) = 8 / 10 = 0.8</li>
                <li>tg(α) = 6 / 8 = 0.75</li>
            </ul>

            <h3>2. Tabela de Ângulos Notáveis (30°, 45°, 60°)</h3>
            <p>Os valores trigonométricos para 30°, 45° e 60° são frequentemente usados e devem ser memorizados:</p>
            <table style="width:auto; border-collapse: collapse; margin: 1em auto; text-align: center;">
                <thead>
                    <tr style="background-color: var(--color-background-medium);">
                        <th style="padding: 8px; border: 1px solid #ddd;">Ângulo</th>
                        <th style="padding: 8px; border: 1px solid #ddd;">Seno</th>
                        <th style="padding: 8px; border: 1px solid #ddd;">Cosseno</th>
                        <th style="padding: 8px; border: 1px solid #ddd;">Tangente</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td style="padding: 8px; border: 1px solid #ddd;">30°</td>
                        <td style="padding: 8px; border: 1px solid #ddd;">1/2 (0.5)</td>
                        <td style="padding: 8px; border: 1px solid #ddd;">√3/2 (≈ 0.866)</td>
                        <td style="padding: 8px; border: 1px solid #ddd;">√3/3 (≈ 0.577)</td>
                    </tr>
                    <tr>
                        <td style="padding: 8px; border: 1px solid #ddd;">45°</td>
                        <td style="padding: 8px; border: 1px solid #ddd;">√2/2 (≈ 0.707)</td>
                        <td style="padding: 8px; border: 1px solid #ddd;">√2/2 (≈ 0.707)</td>
                        <td style="padding: 8px; border: 1px solid #ddd;">1</td>
                    </tr>
                    <tr>
                        <td style="padding: 8px; border: 1px solid #ddd;">60°</td>
                        <td style="padding: 8px; border: 1px solid #ddd;">√3/2 (≈ 0.866)</td>
                        <td style="padding: 8px; border: 1px solid #ddd;">1/2 (0.5)</td>
                        <td style="padding: 8px; border: 1px solid #ddd;">√3 (≈ 1.732)</td>
                    </tr>
                </tbody>
            </table>

            <h3>3. Círculo Trigonométrico (Ciclo Trigonométrico)</h3>
            <p>O Círculo Trigonométrico é uma circunferência de raio 1, centrada na origem de um plano cartesiano. Ele é usado para estender os conceitos de seno, cosseno e tangente para ângulos maiores que 90°.</p>
            <ul>
                <li><strong>Eixo Horizontal (x):</strong> Eixo dos Cossenos.</li>
                <li><strong>Eixo Vertical (y):</strong> Eixo dos Senos.</li>
                <li><strong>Quadrantes:</strong> O círculo é dividido em 4 quadrantes (I, II, III, IV), numerados no sentido anti-horário a partir do eixo x positivo.</li>
            </ul>
            <h4>Sinal das Razões nos Quadrantes:</h4>
            <table style="width:auto; border-collapse: collapse; margin: 1em auto; text-align: center;">
                <thead>
                    <tr style="background-color: var(--color-background-medium);">
                        <th style="padding: 8px; border: 1px solid #ddd;">Função</th>
                        <th style="padding: 8px; border: 1px solid #ddd;">1º Quadrante (0° a 90°)</th>
                        <th style="padding: 8px; border: 1px solid #ddd;">2º Quadrante (90° a 180°)</th>
                        <th style="padding: 8px; border: 1px solid #ddd;">3º Quadrante (180° a 270°)</th>
                        <th style="padding: 8px; border: 1px solid #ddd;">4º Quadrante (270° a 360°)</th>
                    </tr>
                </thead>
                <tbody>
                    <tr><td style="padding: 8px; border: 1px solid #ddd;">Seno</td><td style="padding: 8px; border: 1px solid #ddd;">+</td><td style="padding: 8px; border: 1px solid #ddd;">+</td><td style="padding: 8px; border: 1px solid #ddd;">-</td><td style="padding: 8px; border: 1px solid #ddd;">-</td></tr>
                    <tr><td style="padding: 8px; border: 1px solid #ddd;">Cosseno</td><td style="padding: 8px; border: 1px solid #ddd;">+</td><td style="padding: 8px; border: 1px solid #ddd;">-</td><td style="padding: 8px; border: 1px solid #ddd;">-</td><td style="padding: 8px; border: 1px solid #ddd;">+</td></tr>
                    <tr><td style="padding: 8px; border: 1px solid #ddd;">Tangente</td><td style="padding: 8px; border: 1px solid #ddd;">+</td><td style="padding: 8px; border: 1px solid #ddd;">-</td><td style="padding: 8px; border: 1px solid #ddd;">+</td><td style="padding: 8px; border: 1px solid #ddd;">-</td></tr>
                </tbody>
            </table>

            <h3>4. Leis do Seno e do Cosseno (Para Triângulos Quaisquer)</h3>
            <p>Essas leis são usadas para resolver triângulos que NÃO são retângulos (triângulos quaisquer), quando o Teorema de Pitágoras e as razões básicas não se aplicam diretamente.</p>
            <h4>Lei do Seno:</h4>
            <p>A razão entre cada lado de um triângulo e o seno do ângulo oposto a esse lado é constante.</p>
            <p><strong>Fórmula: a / sen(A) = b / sen(B) = c / sen(C)</strong></p>
            <p>Onde a, b, c são os lados e A, B, C são os ângulos opostos a esses lados, respectivamente.</p>
            <p><strong>Quando usar:</strong> Quando você conhece dois ângulos e um lado, ou dois lados e um ângulo OPSTO a um deles.</p>
            <p><strong>Exemplo:</strong> Em um triângulo, um lado mede 10 cm, e os ângulos opostos a ele e a outro lado medem 30° e 45°, respectivamente. Qual a medida do outro lado (x)?</p>
            <p>10 / sen(30°) = x / sen(45°)</p>
            <p>10 / 0.5 = x / 0.707</p>
            <p>20 = x / 0.707</p>
            <p>x = 20 × 0.707 = 14.14 cm</p>

            <h4>Lei do Cosseno:</h4>
            <p>Em qualquer triângulo, o quadrado de um lado é igual à soma dos quadrados dos outros dois lados, menos o dobro do produto desses dois lados pelo cosseno do ângulo entre eles.</p>
            <p><strong>Fórmula (para lado 'a'): a² = b² + c² - 2bc × cos(A)</strong></p>
            <p>Onde 'a' é o lado oposto ao ângulo A, e 'b' e 'c' são os outros dois lados.</p>
            <p><strong>Quando usar:</strong> Quando você conhece dois lados e o ângulo ENTRE eles, ou quando conhece os três lados.</p>
            <p><strong>Exemplo:</strong> Em um triângulo, dois lados medem 4 cm e 6 cm, e o ângulo entre eles é de 60°. Qual a medida do terceiro lado (x)?</p>
            <p>x² = 4² + 6² - 2 × 4 × 6 × cos(60°)</p>
            <p>x² = 16 + 36 - 2 × 4 × 6 × 0.5</p>
            <p>x² = 52 - 48 × 0.5</p>
            <p>x² = 52 - 24</p>
            <p>x² = 28</p>
            <p>x = √28 ≈ 5.29 cm</p>

            <hr style="margin: 2em 0;">

            <h3>🧩 Problema Resolvido: Aplicação da Trigonometria (ENEM)</h3>
            <p>
                <strong>Problema:</strong> Um observador está a 100 metros de distância da base de um prédio e avista o topo do prédio com um ângulo de elevação de 30°. Considerando que o observador tem 1,70 m de altura e que o terreno é plano, qual a altura aproximada do prédio? (Use √3 ≈ 1.73 e despreze a altura do observador para o cálculo principal, somando-a no final).
                <br><strong>Resolução Detalhada:</strong>
                <br>1. <strong>Identifique o triângulo:</strong> Temos um triângulo retângulo formado pela linha do chão (100m), a altura do prédio (cateto oposto ao ângulo de 30°) e a linha de visão até o topo (hipotenusa).
                <br>2. <strong>Escolha a razão trigonométrica:</strong> Conhecemos o cateto adjacente (distância ao prédio) e queremos encontrar o cateto oposto (altura do prédio do nível dos olhos do observador). A razão que relaciona Cateto Oposto e Cateto Adjacente é a Tangente.
                <br>   - tg(30°) = Altura_olhos / Distância_observador
                <br>   - Sabemos pela tabela que tg(30°) = √3/3 ≈ 0.577
                <br>3. <strong>Calcule a altura a partir dos olhos:</strong>
                <br>   - 0.577 = Altura_olhos / 100
                <br>   - Altura_olhos = 0.577 × 100 = 57.7 metros
                <br>4. <strong>Some a altura do observador:</strong>
                <br>   - Altura_prédio_total = Altura_olhos + Altura_observador
                <br>   - Altura_prédio_total = 57.7 m + 1.70 m = 59.4 metros
                <br><strong>Resposta Final:</strong> A altura aproximada do prédio é de <strong>59.4 metros</strong>.
            </p>

            <h3>📝 Exercícios de Fixação</h3>
            <ol>
                <li>
                    Em um triângulo retângulo, um ângulo agudo mede 45°. Se o cateto oposto a esse ângulo mede 10 cm, qual a medida da hipotenusa? (Use √2 ≈ 1.41 e responda com 2 casas decimais, ex: 14.14)<br>
                    <input type="text" id="resposta-trig-ex1" placeholder="Resposta em cm">
                    <button onclick="verificarTrigonometriaEx1()">Verificar</button>
                    <span id="feedback-trig-ex1"></span>
                </li>
                <li>
                    Um avião decola formando um ângulo de 30° com o solo. Após percorrer 800 metros em linha reta, qual a altura aproximada do avião em relação ao solo? (Use sen(30°) = 0.5)<br>
                    <input type="number" id="resposta-trig-ex2" placeholder="Resposta em metros">
                    <button onclick="verificarTrigonometriaEx2()">Verificar</button>
                    <span id="feedback-trig-ex2"></span>
                </li>
                <li>
                    Em um triângulo com lados A=7 cm, B=8 cm e o ângulo entre eles medindo 60°, qual a medida do lado C oposto ao ângulo de 60°? (Use cos(60°) = 0.5 e responda com 2 casas decimais, ex: 7.21)<br>
                    <input type="text" id="resposta-trig-ex3" placeholder="Resposta em cm">
                    <button onclick="verificarTrigonometriaEx3()">Verificar</button>
                    <span id="feedback-trig-ex3"></span>
                </li>
                <li>
                    Para qual(is) quadrante(s) o seno é positivo e o cosseno é negativo?<br>
                    <input type="text" id="resposta-trig-ex4" placeholder="Resposta (ex: 1º e 2º)">
                    <button onclick="verificarTrigonometriaEx4()">Verificar</button>
                    <span id="feedback-trig-ex4"></span>
                </li>
            </ol>
        `
    },
    "matematica-financeira": { // NOVO TÓPICO: Matemática Financeira
        titulo: "Matemática Financeira: Juros Simples e Compostos",
        texto: `
            <h2>💰 Matemática Financeira: Desvendando o Dinheiro no ENEM e na Vida!</h2>
            <p>A Matemática Financeira é o estudo do dinheiro ao longo do tempo. Ela nos permite analisar investimentos, empréstimos, financiamentos e precificar bens, sendo fundamental para decisões pessoais e empresariais. No ENEM, problemas que envolvem juros (simples e compostos) e porcentagens são muito frequentes, exigindo raciocínio sobre cenários econômicos e financeiros.</p>

            <h3>1. Conceitos Fundamentais</h3>
            <ul>
                <li><strong>Capital (C) ou Principal:</strong> O valor inicial de um investimento ou dívida.</li>
                <li><strong>Juros (J):</strong> O "aluguel" do dinheiro; a remuneração paga pelo uso do capital ou o rendimento de um investimento.</li>
                <li><strong>Taxa de Juros (i):</strong> A porcentagem de juros aplicada sobre o capital em um determinado período. (Ex: 2% ao mês, 10% ao ano). <strong>Atenção:</strong> Sempre use a taxa na forma decimal nos cálculos (Ex: 2% = 0.02).</li>
                <li><strong>Tempo (t) ou Prazo:</strong> O período durante o qual o capital é investido ou emprestado. <strong>Atenção:</strong> A unidade de tempo da taxa de juros deve ser a mesma do prazo. Se a taxa é mensal, o tempo deve ser em meses.</li>
                <li><strong>Montante (M):</strong> O valor final, que é a soma do capital inicial com os juros acumulados (M = C + J).</li>
            </ul>

            <h3>2. Juros Simples</h3>
            <p>No sistema de <strong>juros simples</strong>, os juros são calculados sempre sobre o <strong>capital inicial</strong>. Ou seja, os juros de cada período são os mesmos, e não há "juros sobre juros".</p>
            <p><strong>Aplicação:</strong> Mais comum em operações de curto prazo, como alguns tipos de empréstimos pessoais ou financiamentos diretos.</p>

            <h4>Fórmulas de Juros Simples:</h4>
            <ul>
                <li><strong>Cálculo dos Juros (J):</strong> <strong>J = C × i × t</strong></li>
                <li><strong>Cálculo do Montante (M):</strong> <strong>M = C + J</strong> ou <strong>M = C × (1 + i × t)</strong></li>
            </ul>
            <p><strong>Exemplo Resolvido (Juros Simples):</strong></p>
            <p>
                <strong>Problema:</strong> Qual o montante de um capital de R$ 1.000,00 aplicado a juros simples por 6 meses, a uma taxa de 2% ao mês?
                <br><strong>Resolução Detalhada:</strong>
                <br>Dados: C = R$ 1.000,00; t = 6 meses; i = 2% a.m. = 0.02 a.m.
                <br>1. <strong>Calcular os Juros (J):</strong>
                <br>   - J = C × i × t
                <br>   - J = 1000 × 0.02 × 6
                <br>   - J = 20 × 6 = R$ 120,00
                <br>2. <strong>Calcular o Montante (M):</strong>
                <br>   - M = C + J
                <br>   - M = 1000 + 120 = R$ 1.120,00
                <br>   (Ou usando a fórmula direta: M = 1000 × (1 + 0.02 × 6) = 1000 × (1 + 0.12) = 1000 × 1.12 = R$ 1.120,00)
                <br><strong>Resposta Final:</strong> O montante será de <strong>R$ 1.120,00</strong>.
            </p>

            ---

            <h3>3. Juros Compostos</h3>
            <p>No sistema de <strong>juros compostos</strong>, os juros de cada período são calculados sobre o <strong>montante do período anterior</strong> (capital inicial + juros já acumulados). É o famoso sistema de "juros sobre juros", que proporciona um crescimento exponencial.</p>
            <p><strong>Aplicação:</strong> Mais comum em investimentos a longo prazo, financiamentos imobiliários, cartões de crédito e grande parte das operações bancárias.</p>

            <h4>Fórmulas de Juros Compostos:</h4>
            <ul>
                <li><strong>Cálculo do Montante (M):</strong> <strong>M = C × (1 + i)<sup>t</sup></strong></li>
                <li><strong>Cálculo dos Juros (J):</strong> <strong>J = M - C</strong></li>
            </ul>
            <p><strong>Exemplo Resolvido (Juros Compostos):</strong></p>
            <p>
                <strong>Problema:</strong> Um capital de R$ 1.000,00 é aplicado a juros compostos por 6 meses, a uma taxa de 2% ao mês. Qual o montante ao final da aplicação?
                <br><strong>Resolução Detalhada:</strong>
                <br>Dados: C = R$ 1.000,00; t = 6 meses; i = 2% a.m. = 0.02 a.m.
                <br>1. <strong>Calcular o Montante (M):</strong>
                <br>   - M = C × (1 + i)<sup>t</sup>
                <br>   - M = 1000 × (1 + 0.02)<sup>6</sup>
                <br>   - M = 1000 × (1.02)<sup>6</sup>
                <br>   - (1.02)<sup>6</sup> ≈ 1.126162
                <br>   - M = 1000 × 1.126162 = R$ 1.126,16
                <br><strong>Resposta Final:</strong> O montante será de <strong>R$ 1.126,16</strong>.
                <br>(Observe como os juros são maiores que no juros simples para o mesmo período e taxa, devido aos "juros sobre juros".)
            </p>

            <h3>4. Comparativo: Juros Simples vs. Juros Compostos</h3>
            <p>A principal diferença reside na base de cálculo dos juros:</p>
            <ul>
                <li><strong>Juros Simples:</strong> Crescimento linear. Os juros são sempre fixos por período, calculados sobre o capital inicial.</li>
                <li><strong>Juros Compostos:</strong> Crescimento exponencial. Os juros aumentam a cada período, pois são calculados sobre o montante acumulado.</li>
            </ul>
            <p>Para o mesmo capital, taxa e tempo, os juros compostos sempre gerarão um montante maior (exceto para t=0 ou t=1).</p>

            <h3>🧩 Problema Resolvido: Cenário do ENEM com Juros</h3>
            <p>
                <strong>Problema:</strong> João investiu R$ 5.000,00 a juros simples, com taxa de 1% ao mês, durante 10 meses. Maria investiu os mesmos R$ 5.000,00 a juros compostos, com taxa de 0.8% ao mês, durante os mesmos 10 meses. Qual a diferença, em reais, entre os montantes de João e Maria ao final do período? (Arredonde para 2 casas decimais).
                <br><strong>Resolução Detalhada:</strong>
                <br>1. <strong>Calcular o Montante de João (Juros Simples):</strong>
                <br>   - C = 5000, i = 1% a.m. = 0.01, t = 10 meses.
                <br>   - M<sub>João</sub> = C × (1 + i × t) = 5000 × (1 + 0.01 × 10)
                <br>   - M<sub>João</sub> = 5000 × (1 + 0.10) = 5000 × 1.10 = R$ 5.500,00
                <br>2. <strong>Calcular o Montante de Maria (Juros Compostos):</strong>
                <br>   - C = 5000, i = 0.8% a.m. = 0.008, t = 10 meses.
                <br>   - M<sub>Maria</sub> = C × (1 + i)<sup>t</sup> = 5000 × (1 + 0.008)<sup>10</sup>
                <br>   - M<sub>Maria</sub> = 5000 × (1.008)<sup>10</sup>
                <br>   - (1.008)<sup>10</sup> ≈ 1.083398...
                <br>   - M<sub>Maria</sub> = 5000 × 1.083398 = R$ 5.416,99 (arredondado)
                <br>3. <strong>Calcular a diferença entre os montantes:</strong>
                <br>   - Diferença = M<sub>João</sub> - M<sub>Maria</sub> = 5500.00 - 5416.99 = R$ 83,01
                <br><strong>Resposta Final:</strong> A diferença entre os montantes é de <strong>R$ 83,01</strong>.
            </p>

            <h3>📝 Exercícios de Fixação</h3>
            <ol>
                <li>
                    Um capital de R$ 2.500,00 é aplicado a juros simples por 8 meses, a uma taxa de 1.5% ao mês. Qual o valor dos juros gerados?<br>
                    <input type="number" id="resposta-financas-ex1" placeholder="Resposta em R$">
                    <button onclick="verificarFinancasEx1()">Verificar</button>
                    <span id="feedback-financas-ex1"></span>
                </li>
                <li>
                    Qual o montante de um investimento de R$ 4.000,00 a juros compostos, por 5 meses, a uma taxa de 2% ao mês? (Arredonde para 2 casas decimais, ex: 1234.56)<br>
                    <input type="text" id="resposta-financas-ex2" placeholder="Resposta em R$">
                    <button onclick="verificarFinancasEx2()">Verificar</button>
                    <span id="feedback-financas-ex2"></span>
                </li>
                <li>
                    Um produto que custava R$ 200,00 teve seu preço aumentado em 10% e, em seguida, esse novo preço foi reduzido em 5%. Qual o preço final do produto?<br>
                    <input type="number" id="resposta-financas-ex3" placeholder="Resposta em R$">
                    <button onclick="verificarFinancasEx3()">Verificar</button>
                    <span id="feedback-financas-ex3"></span>
                </li>
                <li>
                    Se um empréstimo de R$ 10.000,00 é feito a juros compostos com taxa de 3% ao mês, qual o valor total a ser pago após 3 meses? (Arredonde para 2 casas decimais, ex: 12345.67)<br>
                    <input type="text" id="resposta-financas-ex4" placeholder="Resposta em R$">
                    <button onclick="verificarFinancasEx4()">Verificar</button>
                    <span id="feedback-financas-ex4"></span>
                </li>
            </ol>
        `
    },
    "exponencial-logaritmo": { // NOVO TÓPICO: Exponencial e Logaritmo
        titulo: "Exponencial e Logaritmo: Crescimento, Decaimento e suas Inversas",
        texto: `
            <h2>🚀 Exponencial e Logaritmo: Poder e Escalas para o ENEM!</h2>
            <p>As funções exponenciais e logarítmicas são fundamentais para descrever fenômenos que crescem ou decaem muito rapidamente, como o crescimento populacional, a proliferação de bactérias, a desintegração radioativa, ou para trabalhar com escalas muito grandes ou muito pequenas (como pH, intensidade sonora). Elas são operações inversas uma da outra e são constantemente cobradas no ENEM.</p>

            <h3>1. Função Exponencial</h3>
            <p>Uma <strong>função exponencial</strong> é aquela em que a variável está no expoente. Sua forma geral é:</p>
            <p><strong>f(x) = a<sup>x</sup></strong></p>
            <p>Onde 'a' é a base (um número real) e 'x' é o expoente (a variável).</p>
            <p><strong>Condições da Base 'a':</strong></p>
            <ul>
                <li>a > 0 (a base deve ser positiva)</li>
                <li>a ≠ 1 (a base não pode ser 1, pois 1<sup>x</sup> seria sempre 1, uma função constante)</li>
            </ul>
            <h4>Características do Gráfico:</h4>
            <ul>
                <li>Sempre passa pelo ponto (0, 1), pois a<sup>0</sup> = 1 para qualquer 'a' ≠ 0.</li>
                <li><strong>Se a > 1:</strong> A função é <strong>crescente</strong>. Conforme x aumenta, f(x) cresce rapidamente (crescimento exponencial). Ex: 2<sup>x</sup>, 10<sup>x</sup>.</li>
                <li><strong>Se 0 < a < 1:</strong> A função é <strong>decrescente</strong>. Conforme x aumenta, f(x) diminui rapidamente (decaimento exponencial). Ex: (1/2)<sup>x</sup>, 0.5<sup>x</sup>.</li>
            </ul>
            <p><strong>Exemplo de Aplicação:</strong> O crescimento de uma população de bactérias pode ser modelado por uma função exponencial.</p>

            <h3>2. Equação Exponencial</h3>
            <p>São equações onde a incógnita aparece no expoente. O objetivo é encontrar o valor da incógnita.</p>
            <h4>Métodos de Resolução:</h4>
            <ul>
                <li><strong>Igualar as bases:</strong> Tente transformar ambos os lados da equação para que tenham a mesma base. Se as bases são iguais, os expoentes devem ser iguais.
                    <br>Ex: 2<sup>x</sup> = 8 => 2<sup>x</sup> = 2<sup>3</sup> => x = 3.
                </li>
                <li><strong>Substituição:</strong> Quando há termos repetidos (Ex: 4<sup>x</sup> e 2<sup>x</sup>, onde 4<sup>x</sup> = (2<sup>2</sup>)<sup>x</sup> = (2<sup>x</sup>)<sup>2</sup>), pode-se fazer uma substituição de variável (Ex: y = 2<sup>x</sup>).</li>
                <li><strong>Uso de Logaritmos:</strong> Quando as bases não podem ser igualadas (abordado após o estudo de logaritmos).</li>
            </ul>
            <p><strong>Exemplo Resolvido (Equação Exponencial):</strong></p>
            <p>
                <strong>Problema:</strong> Resolva a equação: 9<sup>x</sup> = 27
                <br><strong>Resolução Detalhada:</strong>
                <br>1. <strong>Igualar as bases:</strong> Tanto 9 quanto 27 podem ser escritos na base 3.
                <br>   - 9 = 3²
                <br>   - 27 = 3³
                <br>2. <strong>Reescrever a equação:</strong>
                <br>   - (3²)<sup>x</sup> = 3³
                <br>   - 3<sup>2x</sup> = 3³ (Propriedade de potência de potência: multiplica os expoentes)
                <br>3. <strong>Igualar os expoentes:</strong>
                <br>   - 2x = 3
                <br>   - x = 3/2 ou 1.5
                <br><strong>Resposta Final:</strong> A solução é <strong>x = 1.5</strong>.
            </p>

            ---

            <h3>3. Logaritmo: A Operação Inversa da Exponencial</h3>
            <p>O <strong>logaritmo</strong> é a operação inversa da potenciação. Ele responde à pergunta: "A que expoente a base precisa ser elevada para resultar em um certo número?".</p>
            <p><strong>Definição: log<sub>b</sub> N = x <=> b<sup>x</sup> = N</strong></p>
            <ul>
                <li><strong>b:</strong> Base do logaritmo (mesmas condições da base exponencial: b > 0 e b ≠ 1).</li>
                <li><strong>N:</strong> Logaritmando (o número do qual se calcula o logaritmo; sempre N > 0).</li>
                <li><strong>x:</strong> Logaritmo (o expoente).</li>
            </ul>
            <h4>Condições de Existência de um Logaritmo:</h4>
            <ul>
                <li>O logaritmando (N) deve ser <strong>positivo (N > 0)</strong>.</li>
                <li>A base (b) deve ser <strong>positiva (b > 0)</strong> e <strong>diferente de 1 (b ≠ 1)</strong>.</li>
            </ul>
            <h4>Casos Especiais:</h4>
            <ul>
                <li>log<sub>b</sub> 1 = 0 (pois b<sup>0</sup> = 1)</li>
                <li>log<sub>b</sub> b = 1 (pois b<sup>1</sup> = b)</li>
            </ul>
            <h4>Bases Comuns:</h4>
            <ul>
                <li><strong>Logaritmo Decimal:</strong> Base 10. Geralmente escrito como <strong>log N</strong> (sem a base explícita). (Ex: log 100 = 2, pois 10² = 100).</li>
                <li><strong>Logaritmo Natural (ou Neperiano):</strong> Base 'e' (número de Euler, ≈ 2.718). Escrito como <strong>ln N</strong>. (Ex: ln e = 1, pois e¹ = e).</li>
            </ul>

            <h3>4. Propriedades Operatórias dos Logaritmos</h3>
            <p>Estas propriedades são cruciais para simplificar expressões logarítmicas e resolver equações.</p>
            <table style="width:100%; border-collapse: collapse; margin: 1em 0;">
                <thead>
                    <tr style="background-color: var(--color-background-medium);">
                        <th style="padding: 8px; border: 1px solid #ddd; text-align: left;">Propriedade</th>
                        <th style="padding: 8px; border: 1px solid #ddd; text-align: left;">Fórmula</th>
                        <th style="padding: 8px; border: 1px solid #ddd; text-align: left;">Exemplo</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td style="padding: 8px; border: 1px solid #ddd;">Logaritmo do Produto</td>
                        <td style="padding: 8px; border: 1px solid #ddd;">log<sub>b</sub>(X × Y) = log<sub>b</sub> X + log<sub>b</sub> Y</td>
                        <td style="padding: 8px; border: 1px solid #ddd;">log<sub>2</sub>(4 × 8) = log<sub>2</sub> 4 + log<sub>2</sub> 8 = 2 + 3 = 5</td>
                    </tr>
                    <tr>
                        <td style="padding: 8px; border: 1px solid #ddd;">Logaritmo do Quociente</td>
                        <td style="padding: 8px; border: 1px solid #ddd;">log<sub>b</sub>(X / Y) = log<sub>b</sub> X - log<sub>b</sub> Y</td>
                        <td style="padding: 8px; border: 1px solid #ddd;">log<sub>3</sub>(27 / 9) = log<sub>3</sub> 27 - log<sub>3</sub> 9 = 3 - 2 = 1</td>
                    </tr>
                    <tr>
                        <td style="padding: 8px; border: 1px solid #ddd;">Logaritmo da Potência</td>
                        <td style="padding: 8px; border: 1px solid #ddd;">log<sub>b</sub>(X<sup>k</sup>) = k × log<sub>b</sub> X</td>
                        <td style="padding: 8px; border: 1px solid #ddd;">log<sub>5</sub>(25<sup>3</sup>) = 3 × log<sub>5</sub> 25 = 3 × 2 = 6</td>
                    </tr>
                    <tr>
                        <td style="padding: 8px; border: 1px solid #ddd;">Mudança de Base</td>
                        <td style="padding: 8px; border: 1px solid #ddd;">log<sub>b</sub> N = log<sub>c</sub> N / log<sub>c</sub> b</td>
                        <td style="padding: 8px; border: 1px solid #ddd;">log<sub>4</sub> 16 = log<sub>2</sub> 16 / log<sub>2</sub> 4 = 4 / 2 = 2</td>
                    </tr>
                </tbody>
            </table>

            <h3>5. Equação Logarítmica</h3>
            <p>São equações que contêm logaritmos. Para resolvê-las, geralmente usamos a definição de logaritmo ou suas propriedades, com a condição de sempre verificar o domínio das expressões envolvidas (logaritmando positivo!).</p>
            <p><strong>Exemplo Resolvido (Equação Logarítmica):</strong></p>
            <p>
                <strong>Problema:</strong> Resolva a equação: log<sub>2</sub>(x - 3) = 4
                <br><strong>Resolução Detalhada:</strong>
                <br>1. <strong>Condição de existência (domínio):</strong> O logaritmando (x - 3) deve ser positivo.
                <br>   - x - 3 > 0 => x > 3
                <br>2. <strong>Aplique a definição de logaritmo:</strong>
                <br>   - log<sub>b</sub> N = x <=> b<sup>x</sup> = N
                <br>   - log<sub>2</sub>(x - 3) = 4 <=> 2<sup>4</sup> = x - 3
                <br>3. <strong>Resolva a equação resultante:</strong>
                <br>   - 16 = x - 3
                <br>   - x = 16 + 3
                <br>   - x = 19
                <br>4. <strong>Verifique a solução no domínio:</strong> x = 19 é maior que 3, então a solução é válida.
                <br><strong>Resposta Final:</strong> A solução é <strong>x = 19</strong>.
            </p>

            <h3>6. Função Logarítmica</h3>
            <p>É a função inversa da função exponencial. Sua forma geral é: <strong>f(x) = log<sub>b</sub> x</strong></p>
            <p><strong>Características do Gráfico:</strong></p>
            <ul>
                <li>Sempre passa pelo ponto (1, 0), pois log<sub>b</sub> 1 = 0.</li>
                <li>O domínio é restrito a x > 0 (o gráfico só existe para x positivo).</li>
                <li><strong>Se b > 1:</strong> A função é <strong>crescente</strong>.</li>
                <li><strong>Se 0 < b < 1:</strong> A função é <strong>decrescente</strong>.</li>
            </ul>

            ---

            <h3>🧩 Problema Resolvido: Aplicação de Crescimento Exponencial (ENEM)</h3>
            <p>
                <strong>Problema:</strong> Uma população de insetos cresce de acordo com a função P(t) = 500 × 2<sup>t</sup>, onde P(t) é o número de insetos após 't' semanas.
                <br>a) Qual a população inicial de insetos?
                <br>b) Qual a população de insetos após 3 semanas?
                <br>c) Em quantas semanas a população atingirá 8.000 insetos?
                <br><strong>Resolução Detalhada:</strong>
                <br>Função: P(t) = 500 × 2<sup>t</sup>
                <br>a) <strong>População inicial (t = 0):</strong>
                <br>   - P(0) = 500 × 2<sup>0</sup> = 500 × 1 = 500 insetos.
                <br>b) <strong>População após 3 semanas (t = 3):</strong>
                <br>   - P(3) = 500 × 2<sup>3</sup> = 500 × 8 = 4.000 insetos.
                <br>c) <strong>Semanas para atingir 8.000 insetos:</strong>
                <br>   - Queremos P(t) = 8000:
                <br>   - 500 × 2<sup>t</sup> = 8000
                <br>   - 2<sup>t</sup> = 8000 / 500
                <br>   - 2<sup>t</sup> = 16
                <br>   - 2<sup>t</sup> = 2<sup>4</sup>
                <br>   - t = 4 semanas.
                <br><strong>Resposta Final:</strong> a) 500 insetos; b) 4.000 insetos; c) 4 semanas.
            </p>

            <h3>📝 Exercícios de Fixação</h3>
            <ol>
                <li>
                    Resolva a equação exponencial: 4<sup>x+1</sup> = 32.<br>
                    <input type="text" id="resposta-explog-ex1" placeholder="Resposta (decimal ou fração)">
                    <button onclick="verificarExpLogEx1()">Verificar</button>
                    <span id="feedback-explog-ex1"></span>
                </li>
                <li>
                    Calcule o valor de log<sub>3</sub> 81.<br>
                    <input type="number" id="resposta-explog-ex2" placeholder="Resposta">
                    <button onclick="verificarExpLogEx2()">Verificar</button>
                    <span id="feedback-explog-ex2"></span>
                </li>
                <li>
                    Sabendo que log 2 = 0.301 e log 3 = 0.477, calcule o valor de log 12. (Log na base 10. Responda com 3 casas decimais).<br>
                    <input type="text" id="resposta-explog-ex3" placeholder="Resposta">
                    <button onclick="verificarExpLogEx3()">Verificar</button>
                    <span id="feedback-explog-ex3"></span>
                </li>
                <li>
                    A intensidade de um terremoto é medida pela escala Richter, onde R = log(I/I<sub>0</sub>). Se I<sub>0</sub> é a intensidade de referência e um terremoto tem intensidade I = 10.000 × I<sub>0</sub>, qual a magnitude R desse terremoto na escala Richter?<br>
                    <input type="number" id="resposta-explog-ex4" placeholder="Magnitude R">
                    <button onclick="verificarExpLogEx4()">Verificar</button>
                    <span id="feedback-explog-ex4"></span>
                </li>
            </ol>
        `
    },
};

// --- BANCO DE QUESTÕES DO SIMULADO ---
const basicMathSimuladoQuestions = [
    {
        id: 'basic-q1',
        enunciado: 'Um reservatório de água com capacidade total de 2400 litros está com 3/8 de sua capacidade preenchida. Quantos litros de água faltam para que o reservatório esteja completamente cheio?',
        opcoes: [
            'A) 900 litros',
            'B) 1200 litros',
            'C) 1500 litros',
            'D) 1800 litros',
            'E) 2100 litros'
        ],
        respostaCorreta: 2, // C) 1500 litros (0-indexed)
        explicacao: 'O reservatório está com 3/8 de sua capacidade preenchida. Portanto, faltam 1 - 3/8 = 5/8 da capacidade para estar cheio. Para calcular quantos litros faltam, multiplicamos a capacidade total pela fração restante: (5/8) * 2400 = 5 * (2400 / 8) = 5 * 300 = 1500 litros.'
    },
    {
        id: 'basic-q2',
        enunciado: 'Em uma promoção, uma TV que custava R$ 2.500,00 foi vendida com 15% de desconto. Qual o valor final da TV?',
        opcoes: [
            'A) R$ 2.125,00',
            'B) R$ 2.250,00',
            'C) R$ 2.375,00',
            'D) R$ 2.000,00',
            'E) R$ 2.100,00'
        ],
        respostaCorreta: 0, // A) R$ 2.125,00
        explicacao: 'Para calcular o valor final da TV com 15% de desconto, podemos multiplicar o preço original por (1 - 0.15) = 0.85. Assim, 2500 * 0.85 = R$ 2.125,00. Alternativamente, 15% de 2500 é 0.15 * 2500 = 375. Então, 2500 - 375 = R$ 2.125,00.'
    },
    {
        id: 'basic-q3',
        enunciado: 'Se 4 máquinas produzem 120 peças em 3 horas, quantas peças 6 máquinas, trabalhando no mesmo ritmo, produziriam em 5 horas?',
        opcoes: [
            'A) 150 peças',
            'B) 200 peças',
            'C) 240 peças',
            'D) 300 peças',
            'E) 360 peças'
        ],
        respostaCorreta: 3, // D) 300 peças
        explicacao: 'Este é um problema de Regra de Três Composta. Grandezas: Máquinas (DP com Peças), Horas (DP com Peças). \n\nMáquinas | Peças | Horas\n--- | --- | ---\n4 | 120 | 3\n6 | x | 5\n\nMontando a proporção: 120/x = (4/6) * (3/5) = 12/30 = 2/5.\nEntão, 120/x = 2/5. Multiplicando cruzado: 2x = 120 * 5 => 2x = 600 => x = 300 peças.'
    },
    {
        id: 'basic-q4',
        enunciado: 'Qual o valor de x na equação 3(x - 2) + 5 = 2x + 7?',
        opcoes: [
            'A) 5',
            'B) 8',
            'C) 9',
            'D) 12',
            'E) 18'
        ],
        respostaCorreta: 1, // B) 8
        explicacao: '1. Aplique a distributiva: 3x - 6 + 5 = 2x + 7\n2. Simplifique: 3x - 1 = 2x + 7\n3. Isole o x: 3x - 2x = 7 + 1\n4. Resolva: x = 8.'
    },
    {
        id: 'basic-q5',
        enunciado: 'Um termômetro registrava -5°C às 6h da manhã. Se a temperatura subiu 12°C até o meio-dia e depois caiu 7°C até o final da tarde, qual a temperatura final?',
        opcoes: [
            'A) -1°C',
            'B) 0°C',
            'C) 1°C',
            'D) 2°C',
            'E) 3°C'
        ],
        respostaCorreta: 1, // B) 0°C
        explicacao: 'Temperatura inicial: -5°C.\nSubiu 12°C: -5 + 12 = 7°C.\nCaiu 7°C: 7 - 7 = 0°C.\n\nA temperatura final é 0°C.'
    },
    {
        id: 'basic-q6',
        enunciado: 'Um levantamento sobre o uso de redes sociais em uma amostra de 800 estudantes revelou que 45% deles utilizam o Instagram como rede principal. Desses, 25% também utilizam o TikTok. Quantos estudantes, na amostra, utilizam o Instagram como rede principal e também o TikTok?',
        opcoes: [
            'A) 90',
            'B) 100',
            'C) 120',
            'D) 180',
            'E) 200'
        ],
        respostaCorreta: 0, // A) 90
        explicacao: 'Primeiro, calculamos quantos estudantes utilizam o Instagram como rede principal: 45% de 800 = 0.45 * 800 = 360 estudantes. \n\nEm seguida, calculamos quantos desses 360 também utilizam o TikTok: 25% de 360 = 0.25 * 360 = 90 estudantes. \n\nPortanto, 90 estudantes utilizam o Instagram como rede principal e também o TikTok.'
    },
    {
        id: 'basic-q7',
        enunciado: 'Para pintar um muro de 60 metros de comprimento, 3 pintores levam 8 horas. Se o proprietário quisesse pintar um muro de 90 metros de comprimento, com 5 pintores, mantendo a mesma produtividade, quantas horas seriam necessárias?',
        opcoes: [
            'A) 6 horas',
            'B) 7.2 horas',
            'C) 8 horas',
            'D) 9.6 horas',
            'E) 10 horas'
        ],
        respostaCorreta: 1, // B) 7.2 horas
        explicacao: 'Este é um problema de Regra de Três Composta. As grandezas são Comprimento do Muro (metros), Pintores e Horas. A incógnita é Horas.\n\nComprimento (m) | Pintores | Horas\n--- | --- | ---\n60 | 3 | 8\n90 | 5 | x\n\nAnálise:\n- Comprimento e Horas: Diretamente proporcionais (mais muro, mais horas). Manter a fração 60/90.\n- Pintores e Horas: Inversamente proporcionais (mais pintores, menos horas). Inverter a fração 3/5 para 5/3.\n\nMontagem: 8/x = (60/90) * (5/3)\n8/x = (2/3) * (5/3)\n8/x = 10/9\nMultiplicando cruzado: 10x = 8 * 9\n10x = 72\nx = 72 / 10\nx = 7.2 horas.'
    },
    {
        id: 'basic-q8',
        enunciado: 'Em uma pesquisa de opinião, 1/4 dos entrevistados aprovou a nova medida, 2/5 desaprovaram e o restante não tinha opinião formada. Se 140 pessoas desaprovaram a medida, qual o número total de pessoas que participaram da pesquisa?',
        opcoes: [
            'A) 300',
            'B) 350',
            'C) 400',
            'D) 450',
            'E) 500'
        ],
        respostaCorreta: 1, // B) 350
        explicacao: 'Primeiro, somamos as frações de aprovados e desaprovados: 1/4 + 2/5. \nO MMC de 4 e 5 é 20. Assim: 5/20 + 8/20 = 13/20.\n\nIsso significa que 13/20 dos entrevistados tiveram uma opinião (aprovaram ou desaprovaram).\nSabemos que 2/5 do total (X) de entrevistados é igual a 140 pessoas.\nEntão, (2/5) * X = 140\n2X = 140 * 5\n2X = 700\nX = 700 / 2\nX = 350 pessoas.\n\nPortanto, 350 pessoas participaram da pesquisa.'
    },
    {
        id: 'basic-q9',
        enunciado: 'Considere a expressão matemática: $$(√{100} + 2^3) ÷ 3$$ Qual o resultado dessa expressão?',
        opcoes: [
            'A) 3',
            'B) 6',
            'C) 8',
            'D) 10',
            'E) 12'
        ],
        respostaCorreta: 1, // B) 6
        explicacao: 'Vamos resolver a expressão passo a passo, seguindo a ordem das operações (PEMDAS):\n\n1. Raiz quadrada: √100 = 10\n2. Potenciação: 2³ = 2 * 2 * 2 = 8\n\nA expressão agora é: (10 + 8) ÷ 3\n\n3. Parênteses (Adição): 10 + 8 = 18\n\nA expressão agora é: 18 ÷ 3\n\n4. Divisão: 18 ÷ 3 = 6\n\nO resultado da expressão é 6.'
    },
    {
        id: 'basic-q10',
        enunciado: 'As notas de um estudante em cinco provas foram 7.0, 8.5, 6.0, 9.0 e 7.5. Se a nota da próxima prova (a sexta) for 8.0, qual será a nova média aritmética das notas deste estudante?',
        opcoes: [
            'A) 7.0',
            'B) 7.2',
            'C) 7.5',
            'D) 7.6',
            'E) 7.8'
        ],
        respostaCorreta: 3, // D) 7.6
        explicacao: 'Para calcular a nova média, primeiro somamos todas as notas:\nSoma das 5 primeiras notas: 7.0 + 8.5 + 6.0 + 9.0 + 7.5 = 38.0.\n\nCom a adição da sexta prova, a nova soma das notas será: 38.0 + 8.0 = 46.0.\n\nAgora, calculamos a nova média aritmética dividindo a nova soma pelo total de provas (6 provas):\nNova Média = 46.0 / 6 = 7.666...\n\nO valor mais próximo e preciso entre as opções é 7.6. Em contextos de provas, frequentemente se utiliza o arredondamento para a primeira casa decimal ou a opção mais próxima do valor exato.'
    },
    {
        id: 'basic-q11',
        enunciado: 'Uma pesquisa de mercado entrevistou 500 pessoas sobre o consumo de café. Verificou-se que 60% dos entrevistados consomem café diariamente. Desses consumidores diários, 80% preferem café coado tradicional. Quantas pessoas, nessa pesquisa, preferem café coado tradicional?',
        opcoes: [
            'A) 240',
            'B) 280',
            'C) 300',
            'D) 320',
            'E) 400'
        ],
        respostaCorreta: 1, // B) 240 é 60% de 500 = 300; 80% de 300 = 240
        explicacao: 'Primeiro, calcule o número de pessoas que consomem café diariamente: 60% de 500 = 0.60 * 500 = 300 pessoas.\nEm seguida, calcule quantas dessas pessoas preferem café coado tradicional: 80% de 300 = 0.80 * 300 = 240 pessoas.'
    },
    {
        id: 'basic-q12',
        enunciado: 'Uma obra de construção civil precisa ser concluída em 45 dias. Para isso, são necessários 15 operários trabalhando 8 horas por dia. Se a empresa contratou mais 5 operários (totalizando 20) e decide que a obra deve ser finalizada em 30 dias, quantas horas por dia, no mínimo, cada operário deverá trabalhar?',
        opcoes: [
            'A) 6 horas',
            'B) 7.5 horas',
            'C) 8 horas',
            'D) 9 horas',
            'E) 10 horas'
        ],
        respostaCorreta: 3, // D) 9 horas
        explicacao: 'Este é um problema de Regra de Três Composta. Grandezas: Operários, Dias, Horas/Dia.\nOperários | Dias | Horas/Dia\n15 | 45 | 8\n20 | 30 | x\n\nAnálise em relação a Horas/Dia:\n- Operários e Horas/Dia: Inversamente Proporcionais (mais operários, menos horas/dia). Inverta a razão dos operários: 20/15.\n- Dias e Horas/Dia: Inversamente Proporcionais (menos dias, mais horas/dia). Inverta a razão dos dias: 30/45.\n\nMontagem da proporção: 8/x = (20/15) * (30/45)\nSimplificando as frações: 20/15 = 4/3; 30/45 = 2/3\n8/x = (4/3) * (2/3)\n8/x = 8/9\nMultiplicando cruzado: 8x = 8 * 9 => 8x = 72 => x = 9 horas.\n\nCada operário deverá trabalhar, no mínimo, 9 horas por dia.'
    },
    {
        id: 'basic-q13',
        enunciado: 'Um reservatório de combustível estava com sua capacidade total preenchida. Durante a semana, 1/3 do volume foi consumido. No final de semana, 1/4 do volume restante foi consumido. Que fração do volume total de combustível ainda resta no reservatório?',
        opcoes: [
            'A) 1/2',
            'B) 1/3',
            'C) 5/8',
            'D) 1/4',
            'E) 1/6'
        ],
        respostaCorreta: 0, // A) 1/2
        explicacao: 'Volume inicial: 1 (ou 1/1).\n1. Consumo na semana: 1/3 do volume total. Volume restante após a semana: 1 - 1/3 = 2/3.\n2. Consumo no final de semana: 1/4 do *volume restante*. Então, (1/4) * (2/3) = 2/12 = 1/6 do volume total foi consumido no final de semana.\n\nVolume total consumido: (1/3) + (1/6). O MMC de 3 e 6 é 6. Então, 2/6 + 1/6 = 3/6 = 1/2.\n\nSe 1/2 do volume total foi consumido, o volume que resta é: 1 - 1/2 = 1/2.\n\nPortanto, 1/2 do volume total de combustível ainda resta no reservatório.'
    },
    {
        id: 'basic-q14',
        enunciado: 'A soma de três números inteiros consecutivos é 57. Qual é o maior desses três números?',
        opcoes: [
            'A) 18',
            'B) 19',
            'C) 20',
            'D) 21',
            'E) 22'
        ],
        respostaCorreta: 2, // C) 20
        explicacao: 'Seja "x" o primeiro número inteiro. Os próximos dois números consecutivos serão "x + 1" e "x + 2".\nA soma deles é 57: x + (x + 1) + (x + 2) = 57\n3x + 3 = 57\n3x = 57 - 3\n3x = 54\nx = 54 / 3\nx = 18\n\nOs três números são 18, 19 e 20. O maior desses números é 20.'
    },
    {
        id: 'basic-q15',
        enunciado: 'A altura de um prédio é desconhecida. Sabe-se que uma escada de segurança que parte do solo e alcança o topo do prédio tem 25 metros de comprimento. Se a base da escada está a 7 metros do prédio, qual a altura do prédio?',
        opcoes: [
            'A) 18 metros',
            'B) 20 metros',
            'C) 22 metros',
            'D) 24 metros',
            'E) 26 metros'
        ],
        respostaCorreta: 3, // D) 24 metros
        explicacao: 'Este problema forma um triângulo retângulo onde a escada é a hipotenusa (25m), a distância da base da escada ao prédio é um cateto (7m) e a altura do prédio é o outro cateto (h).\n\nPodemos usar o Teorema de Pitágoras: hipotenusa² = cateto1² + cateto2²\n25² = 7² + h²\n625 = 49 + h²\nh² = 625 - 49\nh² = 576\nh = √576\nh = 24 metros.\n\nA altura do prédio é de 24 metros.'
    },
    {
        id: 'basic-q16',
        enunciado: 'Um terreno retangular tem 15 metros de comprimento por 8 metros de largura. Se for construída uma cerca em todo o seu perímetro e, a cada metro, for colocado um poste, quantos postes serão necessários?',
        opcoes: [
            'A) 23',
            'B) 30',
            'C) 46',
            'D) 60',
            'E) 120'
        ],
        respostaCorreta: 2, // C) 46
        explicacao: 'Para saber o número de postes, precisamos calcular o perímetro do terreno retangular. O perímetro (P) de um retângulo é dado por P = 2 * (comprimento + largura).\n\nP = 2 * (15m + 8m)\nP = 2 * (23m)\nP = 46m\n\nSe um poste é colocado a cada metro, serão necessários 46 postes para cercar todo o perímetro.'
    },
    {
        id: 'basic-q17',
        enunciado: 'Em um grupo de 30 alunos, 12 foram aprovados em matemática e 18 foram aprovados em português. Se 5 alunos foram aprovados em ambas as disciplinas, quantos alunos foram aprovados em matemática OU em português?',
        opcoes: [
            'A) 20',
            'B) 25',
            'C) 28',
            'D) 30',
            'E) 35'
        ],
        respostaCorreta: 2, // C) 25 (12+18-5)
        explicacao: 'Para encontrar o número de alunos aprovados em Matemática OU em Português (ou em ambas), usamos o princípio da inclusão-exclusão: \nNúmero de (A ou B) = Número de A + Número de B - Número de (A e B)\n\nN(Matemática ou Português) = N(Matemática) + N(Português) - N(Matemática e Português)\nN(Matemática ou Português) = 12 + 18 - 5\nN(Matemática ou Português) = 30 - 5\nN(Matemática ou Português) = 25 alunos.'
    },
    {
        id: 'basic-q18',
        enunciado: 'A população de uma cidade era de 80.000 habitantes. Em 10 anos, essa população cresceu 15%. Qual é a nova população da cidade?',
        opcoes: [
            'A) 88.000',
            'B) 90.000',
            'C) 92.000',
            'D) 95.000',
            'E) 96.000'
        ],
        respostaCorreta: 3, // D) 92.000 é 15% de 80.000 = 12.000, 80.000 + 12.000 = 92.000
        explicacao: 'Um crescimento de 15% significa que a nova população será 100% + 15% = 115% da população original.\n\nValor do aumento = 15% de 80.000 = 0.15 * 80.000 = 12.000 habitantes.\nNova população = População original + Aumento\nNova população = 80.000 + 12.000 = 92.000 habitantes.\n\nAlternativamente, podemos calcular diretamente: 80.000 * 1.15 = 92.000 habitantes.'
    },
    {
        id: 'basic-q19',
        enunciado: 'Se $$\\frac{x}{3} + \\frac{1}{2} = \\frac{5}{6}$$, qual o valor de x?',
        opcoes: [
            'A) 1',
            'B) 2',
            'C) 3',
            'D) 4',
            'E) 5'
        ],
        respostaCorreta: 0, // A) 1
        explicacao: 'Para resolver a equação com frações, primeiro encontre o Mínimo Múltiplo Comum (MMC) dos denominadores (3, 2, 6), que é 6.\n\nMultiplique todos os termos da equação por 6:\n$6 * (x/3) + 6 * (1/2) = 6 * (5/6)$\n\nSimplificando:\n$2x + 3 = 5$\n\nAgora, resolva a equação do 1º grau:\n$2x = 5 - 3$\n$2x = 2$\n$x = 2/2$\n$x = 1$'
    },
    {
        id: 'basic-q20',
        enunciado: 'Em uma padaria, foram produzidos 200 pães. Destes, 1/4 eram pães integrais e os restantes eram pães brancos. Se 10% dos pães integrais foram queimados e não puderam ser vendidos, quantos pães integrais estavam aptos para venda?',
        opcoes: [
            'A) 40',
            'B) 45',
            'C) 50',
            'D) 55',
            'E) 60'
        ],
        respostaCorreta: 1, // B) 45
        explicacao: '1. Calcular o número de pães integrais: 1/4 de 200 pães = 200 / 4 = 50 pães integrais.\n2. Calcular quantos pães integrais foram queimados: 10% de 50 = 0.10 * 50 = 5 pães integrais.\n3. Calcular quantos pães integrais estavam aptos para venda: 50 (total de integrais) - 5 (queimados) = 45 pães integrais.\n\nPortanto, 45 pães integrais estavam aptos para venda.'
    },
    {
        id: 'basic-q21',
        enunciado: 'Em um supermercado, uma caixa de maçãs custa R$ 35,00. Se um cliente comprar 3 caixas e pagar com uma nota de R$ 200,00, qual será o seu troco?',
        opcoes: [
            'A) R$ 85,00',
            'B) R$ 95,00',
            'C) R$ 105,00',
            'D) R$ 115,00',
            'E) R$ 125,00'
        ],
        respostaCorreta: 3, // D) 95,00 (35*3 = 105; 200-105 = 95)
        explicacao: 'Primeiro, calcule o custo total das 3 caixas de maçãs: 3 * R$ 35,00 = R$ 105,00.\nEm seguida, subtraia o valor gasto do valor pago para encontrar o troco: R$ 200,00 - R$ 105,00 = R$ 95,00.'
    },
    {
        id: 'basic-q22',
        enunciado: 'Um elevador está no 8º andar de um prédio. Ele desce 10 andares, depois sobe 3 andares e, por fim, desce 5 andares. Em qual andar o elevador parou?',
        opcoes: [
            'A) -4º andar',
            'B) -3º andar',
            'C) -2º andar',
            'D) 0º andar',
            'E) 1º andar'
        ],
        respostaCorreta: 3, // C) -4º andar (8 - 10 + 3 - 5 = -4)
        explicacao: 'Comece do 8º andar: 8.\nDesce 10 andares: 8 - 10 = -2.\nSobe 3 andares: -2 + 3 = 1.\nDesce 5 andares: 1 - 5 = -4.\nO elevador parou no -4º andar.'
    },
    {
        id: 'basic-q23',
        enunciado: 'Uma receita de bolo pede 2/3 de xícara de açúcar. Se você tem apenas 1/2 xícara de açúcar, qual fração da quantidade necessária você possui?',
        opcoes: [
            'A) 3/4',
            'B) 1/3',
            'C) 1/2',
            'D) 2/3',
            'E) 5/6'
        ],
        respostaCorreta: 0, // A) 3/4 ( (1/2) / (2/3) = 1/2 * 3/2 = 3/4 )
        explicacao: 'Para saber qual fração da quantidade necessária você possui, dividimos a quantidade que você tem pela quantidade que a receita pede: (1/2) ÷ (2/3).\nNa divisão de frações, mantemos a primeira e multiplicamos pelo inverso da segunda: (1/2) * (3/2) = 3/4.\nVocê possui 3/4 da quantidade de açúcar necessária.'
    },
    {
        id: 'basic-q24',
        enunciado: 'Em uma pesquisa, 400 pessoas foram questionadas sobre seu meio de transporte favorito. O resultado mostrou que 25% preferem carro, 30% preferem ônibus, e o restante prefere bicicleta. Quantas pessoas preferem bicicleta?',
        opcoes: [
            'A) 100',
            'B) 120',
            'C) 140',
            'D) 180',
            'E) 200'
        ],
        respostaCorreta: 3, // D) 180 (25%+30% = 55%. Restante = 45%. 45% de 400 = 180)
        explicacao: 'Primeiro, somamos as porcentagens que preferem carro e ônibus: 25% + 30% = 55%.\nO restante que prefere bicicleta é: 100% - 55% = 45%.\nAgora, calculamos 45% do total de pessoas entrevistadas: 0.45 * 400 = 180 pessoas.\n\n180 pessoas preferem bicicleta.'
    },
    {
        id: 'basic-q25',
        enunciado: 'Uma máquina produz 500 parafusos em 20 minutos. Se essa máquina operar por 1 hora e 30 minutos, mantendo a mesma taxa de produção, quantos parafusos ela produzirá?',
        opcoes: [
            'A) 1500',
            'B) 1750',
            'C) 2000',
            'D) 2250',
            'E) 2500'
        ],
        respostaCorreta: 3, // D) 2250 (1h30m = 90min. 90/20 = 4.5. 4.5 * 500 = 2250)
        explicacao: 'Primeiro, converta 1 hora e 30 minutos para minutos: 1 hora = 60 minutos, então 60 + 30 = 90 minutos.\nAgora, use uma regra de três simples:\n500 parafusos --- 20 minutos\nx parafusos --- 90 minutos\n\n500/x = 20/90\n20x = 500 * 90\n20x = 45000\nx = 45000 / 20\nx = 2250 parafusos.'
    },
    {
        id: 'basic-q26',
        enunciado: 'Se a raiz quadrada de um número é 12, qual é o dobro desse número?',
        opcoes: [
            'A) 24',
            'B) 72',
            'C) 144',
            'D) 288',
            'E) 576'
        ],
        respostaCorreta: 3, // D) 288 (Numero = 144, dobro = 288)
        explicacao: 'Se a raiz quadrada de um número é 12, então o número é 12² = 144.\nO dobro desse número é 2 * 144 = 288.'
    },
    {
        id: 'basic-q27',
        enunciado: 'Em um jogo, as pontuações de cinco rodadas foram: 10, 15, 10, 20, 5. Qual a mediana das pontuações?',
        opcoes: [
            'A) 10',
            'B) 12',
            'C) 12.5',
            'D) 15',
            'E) 20'
        ],
        respostaCorreta: 0, // A) 10 (ordenado: 5, 10, 10, 15, 20. Mediana é o do meio: 10)
        explicacao: 'Para encontrar a mediana, primeiro organize as pontuações em ordem crescente: 5, 10, 10, 15, 20.\nComo há um número ímpar de dados (5), a mediana é o valor central. Nesse caso, o valor central é 10.\n\nA mediana das pontuações é 10.'
    },
    {
        id: 'basic-q28',
        enunciado: 'Qual o valor de $$x$$ na equação $$5x - (2x + 1) = 8$$?',
        opcoes: [
            'A) 1',
            'B) 2',
            'C) 3',
            'D) 4',
            'E) 5'
        ],
        respostaCorreta: 2, // C) 3
        explicacao: 'Primeiro, elimine os parênteses, lembrando de trocar o sinal dos termos internos devido ao sinal de menos antes do parêntese:\n$5x - 2x - 1 = 8$\n\nCombine os termos semelhantes:\n$3x - 1 = 8$\n\nAdicione 1 a ambos os lados da equação:\n$3x = 8 + 1$\n$3x = 9$\n\nDivida por 3:\n$x = 9 / 3$\n$x = 3$'
    },
    {
        id: 'basic-q29',
        enunciado: 'Em um mapa, 3 cm representam 150 km na realidade. Se a distância entre duas cidades no mapa é de 5 cm, qual a distância real entre elas?',
        opcoes: [
            'A) 200 km',
            'B) 225 km',
            'C) 250 km',
            'D) 275 km',
            'E) 300 km'
        ],
        respostaCorreta: 2, // C) 250 km
        explicacao: 'Este é um problema de regra de três simples direta. As grandezas são distância no mapa (cm) e distância real (km).\n\n3 cm --- 150 km\n5 cm --- x km\n\nMontando a proporção:\n3/5 = 150/x\n\nMultiplicando cruzado:\n3 * x = 5 * 150\n3x = 750\nx = 750 / 3\nx = 250 km.\n\nA distância real entre as cidades é de 250 km.'
    },
    {
        id: 'basic-q30',
        enunciado: 'Considere a seguinte sequência de números: 2, 4, 8, 16, ... Qual seria o próximo número nessa sequência?',
        opcoes: [
            'A) 20',
            'B) 24',
            'C) 32',
            'D) 64',
            'E) 128'
        ],
        respostaCorreta: 2, // C) 32
        explicacao: 'Esta é uma Progressão Geométrica (PG) onde cada termo é o dobro do anterior (razão q=2).\n2 * 2 = 4\n4 * 2 = 8\n8 * 2 = 16\n\nPara encontrar o próximo número, multiplicamos o último termo por 2:\n16 * 2 = 32.\n\nO próximo número na sequência é 32.'
    },
    {
        id: 'basic-q31',
        enunciado: 'Um grupo de 20 amigos decidiu fazer uma vaquinha para comprar um presente que custa R$ 600,00. Se 5 amigos desistiram de participar, mantendo o valor total do presente, qual será o novo valor da contribuição para cada um dos amigos restantes?',
        opcoes: [
            'A) R$ 30,00',
            'B) R$ 35,00',
            'C) R$ 40,00',
            'D) R$ 45,00',
            'E) R$ 50,00'
        ],
        respostaCorreta: 2, // C) R$ 40,00
        explicacao: 'Inicialmente, 20 amigos iriam dividir R$ 600,00. Cada um contribuiria com R$ 600 / 20 = R$ 30,00.\nSe 5 amigos desistiram, restam 20 - 5 = 15 amigos.\nO valor total do presente (R$ 600,00) agora será dividido entre 15 amigos.\nNovo valor por amigo = R$ 600 / 15 = R$ 40,00.'
    },
    {
        id: 'basic-q32',
        enunciado: 'Em uma competição de natação, os tempos de um atleta em 4 provas foram: 58.3s, 59.1s, 58.8s e 59.8s. Qual a diferença entre o maior e o menor tempo registrado por esse atleta?',
        opcoes: [
            'A) 0.5s',
            'B) 0.8s',
            'C) 1.0s',
            'D) 1.2s',
            'E) 1.5s'
        ],
        respostaCorreta: 4, // D) 1.5s (59.8 - 58.3 = 1.5)
        explicacao: 'Para encontrar a diferença entre o maior e o menor tempo (amplitude), primeiro identifique esses valores.\nMaior tempo: 59.8s\nMenor tempo: 58.3s\n\nDiferença = 59.8s - 58.3s = 1.5s.'
    },
    {
        id: 'basic-q33',
        enunciado: 'Um agricultor colheu 3/5 de sua plantação na segunda-feira e 1/4 da plantação na terça-feira. Que fração da plantação total ele já colheu?',
        opcoes: [
            'A) 7/20',
            'B) 1/2',
            'C) 17/20',
            'D) 3/4',
            'E) 4/5'
        ],
        respostaCorreta: 2, // C) 17/20 (3/5 + 1/4 = 12/20 + 5/20 = 17/20)
        explicacao: 'Para somar as frações 3/5 e 1/4, precisamos encontrar um denominador comum, que é o Mínimo Múltiplo Comum (MMC) de 5 e 4. O MMC é 20.\n\nTransformando as frações:\n3/5 = (3 * 4) / (5 * 4) = 12/20\n1/4 = (1 * 5) / (4 * 5) = 5/20\n\nSomando as frações:\n12/20 + 5/20 = 17/20.\n\nEle já colheu 17/20 da plantação.'
    },
    {
        id: 'basic-q34',
        enunciado: 'Em uma promoção de uma loja de roupas, foi oferecido um desconto de 20% sobre o preço original de uma camisa. Se o preço da camisa com desconto é R$ 80,00, qual era o preço original da camisa?',
        opcoes: [
            'A) R$ 90,00',
            'B) R$ 96,00',
            'C) R$ 100,00',
            'D) R$ 104,00',
            'E) R$ 108,00'
        ],
        respostaCorreta: 2, // C) R$ 100,00
        explicacao: 'Se houve um desconto de 20%, significa que R$ 80,00 corresponde a 100% - 20% = 80% do preço original.\nSeja P o preço original.\n80% de P = R$ 80,00\n0.80 * P = 80\nP = 80 / 0.80\nP = 100\n\nO preço original da camisa era R$ 100,00.'
    },
    {
        id: 'basic-q35',
        enunciado: 'Um técnico de refrigeração cobra uma taxa fixa de R$ 50,00 pela visita e mais R$ 30,00 por hora de trabalho. Se o valor total cobrado foi de R$ 170,00, quantas horas o técnico trabalhou?',
        opcoes: [
            'A) 3 horas',
            'B) 4 horas',
            'C) 5 horas',
            'D) 6 horas',
            'E) 7 horas'
        ],
        respostaCorreta: 3, // B) 4 horas
        explicacao: 'Primeiro, subtraia a taxa fixa da visita do valor total para encontrar o custo das horas trabalhadas: R$ 170,00 - R$ 50,00 = R$ 120,00.\nAgora, divida esse valor pelo custo por hora para encontrar o número de horas trabalhadas: R$ 120,00 / R$ 30,00 por hora = 4 horas.\n\nO técnico trabalhou 4 horas.'
    },
    {
        id: 'basic-q36',
        enunciado: 'Se $$x^2 - 9 = 0$$, quais são os possíveis valores de $$x$$?',
        opcoes: [
            'A) Apenas 3',
            'B) Apenas -3',
            'C) 0 e 3',
            'D) -3 e 3',
            'E) -9 e 9'
        ],
        respostaCorreta: 3, // D) -3 e 3
        explicacao: 'Esta é uma equação do segundo grau incompleta (do tipo ax² + c = 0).\n$x^2 - 9 = 0$\n$x^2 = 9$\nPara encontrar o valor de x, tiramos a raiz quadrada de 9. Lembre-se que raízes quadradas possuem duas soluções, uma positiva e uma negativa:\n$x = ±√9$\n$x = 3$ ou $x = -3$\n\nOs possíveis valores de x são -3 e 3.'
    },
    {
        id: 'basic-q37',
        enunciado: 'A média das idades de 4 amigos é 22 anos. Se um quinto amigo, de 27 anos, se junta ao grupo, qual será a nova média de idades do grupo?',
        opcoes: [
            'A) 22.5 anos',
            'B) 23 anos',
            'C) 23.5 anos',
            'D) 24 anos',
            'E) 24.5 anos'
        ],
        respostaCorreta: 1, // B) 23 anos
        explicacao: '1. Calcule a soma das idades dos 4 amigos: Média = Soma / Quantidade => 22 = Soma / 4 => Soma = 22 * 4 = 88 anos.\n2. Adicione a idade do quinto amigo à soma: Nova Soma = 88 + 27 = 115 anos.\n3. Calcule a nova média para os 5 amigos: Nova Média = 115 / 5 = 23 anos.\n\nA nova média de idades do grupo será de 23 anos.'
    },
    {
        id: 'basic-q38',
        enunciado: 'Um tanque com capacidade de 500 litros está com 40% de sua capacidade preenchida. Quantos litros de água são necessários para enchê-lo completamente?',
        opcoes: [
            'A) 200 litros',
            'B) 250 litros',
            'C) 300 litros',
            'D) 350 litros',
            'E) 400 litros'
        ],
        respostaCorreta: 2, // C) 300 litros
        explicacao: 'Se o tanque está com 40% de sua capacidade preenchida, então faltam 100% - 40% = 60% para enchê-lo.\nAgora, calcule 60% da capacidade total do tanque:\n60% de 500 litros = 0.60 * 500 = 300 litros.\n\nSão necessários 300 litros para encher o tanque completamente.'
    },
    {
        id: 'basic-q39',
        enunciado: 'Considere a sequência $$3, 7, 11, 15, ...$$. Qual o 8º termo desta sequência?',
        opcoes: [
            'A) 23',
            'B) 27',
            'C) 29',
            'D) 31',
            'E) 35'
        ],
        respostaCorreta: 3, // D) 31
        explicacao: 'Esta é uma Progressão Aritmética (PA) porque a diferença entre os termos consecutivos é constante (7-3=4, 11-7=4, etc.). A razão (r) é 4 e o primeiro termo (a₁) é 3.\nPara encontrar o 8º termo (a₈), usamos a fórmula do termo geral da PA: $$a_n = a_1 + (n-1)r$$\nOnde n = 8.\n$$a_8 = 3 + (8-1) * 4$$\n$$a_8 = 3 + 7 * 4$$\n$$a_8 = 3 + 28$$\n$$a_8 = 31$$\n\nO 8º termo da sequência é 31.'
    },
    {
        id: 'basic-q40',
        enunciado: 'A razão entre o número de meninos e o número de meninas em uma sala de aula é de 2 para 3. Se há 12 meninos na sala, qual o número total de alunos nesta sala?',
        opcoes: [
            'A) 18',
            'B) 20',
            'C) 24',
            'D) 25',
            'E) 30'
        ],
        respostaCorreta: 4, // E) 30
        explicacao: 'A razão de meninos para meninas é 2/3. Seja M o número de meninos e N o número de meninas. Então M/N = 2/3.\nSabemos que M = 12. Substituímos na razão:\n12/N = 2/3\n\nMultiplicando cruzado:\n2 * N = 12 * 3\n2N = 36\nN = 36 / 2\nN = 18\n\nHá 18 meninas na sala. O número total de alunos é a soma de meninos e meninas: 12 + 18 = 30 alunos.'
    },
    {
        id: 'basic-q41',
        enunciado: 'Em um dia de inverno, a temperatura em uma cidade foi de -2°C. No dia seguinte, a temperatura aumentou em 5°C. Qual a temperatura registrada no segundo dia?',
        opcoes: [
            'A) -7°C',
            'B) -3°C',
            'C) 0°C',
            'D) 3°C',
            'E) 7°C'
        ],
        respostaCorreta: 3, // D) 3°C
        explicacao: 'A temperatura inicial é -2°C.\nSe a temperatura aumentou em 5°C, basta somar este valor à temperatura inicial: -2 + 5 = 3°C.\n\nA temperatura registrada no segundo dia foi de 3°C.'
    },
    {
        id: 'basic-q42',
        enunciado: 'Uma pesquisa de satisfação com 200 clientes mostrou que 3/4 deles estão satisfeitos com o produto. Quantos clientes NÃO estão satisfeitos com o produto?',
        opcoes: [
            'A) 25',
            'B) 40',
            'C) 50',
            'D) 150',
            'E) 175'
        ],
        respostaCorreta: 2, // C) 50
        explicacao: 'Se 3/4 dos clientes estão satisfeitos, a fração de clientes NÃO satisfeitos é 1 - 3/4 = 1/4.\nAgora, calcule 1/4 do total de clientes:\n(1/4) * 200 = 200 / 4 = 50 clientes.\n\n50 clientes não estão satisfeitos com o produto.'
    },
    {
        id: 'basic-q43',
        enunciado: 'Qual o resultado da expressão: $$4 \\times (5 - 2)^2 - 10 \\div 2$$?',
        opcoes: [
            'A) 11',
            'B) 23',
            'C) 26',
            'D) 31',
            'E) 36'
        ],
        respostaCorreta: 4, // D) 31
        explicacao: 'Vamos resolver a expressão seguindo a ordem das operações (PEMDAS/Parênteses, Expoentes, Multiplicação/Divisão, Adição/Subtração):\n\n1. Parênteses: (5 - 2) = 3\nExpressão: $4 \\times 3^2 - 10 \\div 2$\n\n2. Expoente: $3^2 = 9$\nExpressão: $4 \\times 9 - 10 \\div 2$\n\n3. Multiplicação e Divisão (da esquerda para a direita):\n   Multiplicação: $4 \\times 9 = 36$\n   Divisão: $10 \\div 2 = 5$\nExpressão: $36 - 5$\n\n4. Subtração:\n$36 - 5 = 31$\n\nO resultado da expressão é 31.'
    },
    {
        id: 'basic-q44',
        enunciado: 'Uma loja de eletrônicos aumentou o preço de um smartphone em 10% e, em seguida, deu um desconto de 10% sobre o novo preço. Se o preço original do smartphone era R$ 2.000,00, qual será o preço final após essas duas alterações?',
        opcoes: [
            'A) R$ 1.980,00',
            'B) R$ 2.000,00',
            'C) R$ 2.020,00',
            'D) R$ 2.100,00',
            'E) R$ 2.200,00'
        ],
        respostaCorreta: 0, // A) R$ 1.980,00
        explicacao: '1. Calcular o preço após o aumento de 10%:\nPreço com aumento = Preço Original * (1 + Taxa de Aumento)\nPreço com aumento = R$ 2.000,00 * (1 + 0.10) = R$ 2.000,00 * 1.10 = R$ 2.200,00.\n\n2. Calcular o preço após o desconto de 10% sobre o *novo* preço:\nPreço Final = Preço com Aumento * (1 - Taxa de Desconto)\nPreço Final = R$ 2.200,00 * (1 - 0.10) = R$ 2.200,00 * 0.90 = R$ 1.980,00.\n\nÉ importante notar que um aumento de X% seguido de um desconto de X% sobre o novo valor *não* retorna ao valor original, mas a um valor menor, devido ao desconto ser aplicado sobre uma base maior.'
    },
    {
        id: 'basic-q45',
        enunciado: 'Para cada 50 km percorridos, um carro consome 4 litros de combustível. Se o carro precisar percorrer uma distância de 350 km, quantos litros de combustível serão necessários?',
        opcoes: [
            'A) 20 litros',
            'B) 24 litros',
            'C) 28 litros',
            'D) 32 litros',
            'E) 35 litros'
        ],
        respostaCorreta: 2, // C) 28 litros
        explicacao: 'Este é um problema de regra de três simples e direta.\n\n50 km --- 4 litros\n350 km --- x litros\n\nMontando a proporção:\n50 / 350 = 4 / x\n\nMultiplicando cruzado:\n50 * x = 350 * 4\n50x = 1400\nx = 1400 / 50\nx = 28 litros.\n\nPortanto, serão necessários 28 litros de combustível para percorrer 350 km.'
    },
];

// Banco de questões de exemplo para Matemática Avançada
const advancedMathSimuladoQuestions = [
    // --- GEOMETRIA PLANA (5 QUESTÕES) ---
    {
        id: 'advanced-q1',
        enunciado: 'Em um triângulo isósceles, o perímetro é 40 cm. Se a base mede 16 cm, qual a medida de cada um dos lados iguais?',
        opcoes: [
            'A) 8 cm',
            'B) 10 cm',
            'C) 12 cm',
            'D) 14 cm',
            'E) 16 cm'
        ],
        respostaCorreta: 2, // C) 12 cm
        explicacao: 'Em um triângulo isósceles, dois lados são iguais. Chamamos esses lados de "x".\nPerímetro = lado1 + lado2 + base\n40 cm = x + x + 16 cm\n40 = 2x + 16\n40 - 16 = 2x\n24 = 2x\nx = 24 / 2\nx = 12 cm.\n\nCada um dos lados iguais mede 12 cm.'
    },
    {
        id: 'advanced-q2',
        enunciado: 'Um terreno retangular possui 20 metros de comprimento e sua largura é metade do comprimento. Qual a área total deste terreno?',
        opcoes: [
            'A) 100 m²',
            'B) 200 m²',
            'C) 300 m²',
            'D) 400 m²',
            'E) 500 m²'
        ],
        respostaCorreta: 1, // B) 200 m²
        explicacao: 'Comprimento (C) = 20 metros.\nLargura (L) = metade do comprimento = 20 / 2 = 10 metros.\nÁrea do retângulo (A) = Comprimento × Largura\nA = 20 m × 10 m\nA = 200 m².\n\nA área total do terreno é de 200 m².'
    },
    {
        id: 'advanced-q3',
        enunciado: 'Calcule a área de um trapézio cujas bases medem 10 cm e 6 cm, e a altura é de 5 cm.',
        opcoes: [
            'A) 30 cm²',
            'B) 40 cm²',
            'C) 50 cm²',
            'D) 60 cm²',
            'E) 80 cm²'
        ],
        respostaCorreta: 1, // B) 40 cm²
        explicacao: 'A fórmula da área do trapézio é: A = $$ \\frac{(B + b) \\times h}{2} $$, onde B é a base maior, b é a base menor e h é a altura.\nB = 10 cm, b = 6 cm, h = 5 cm.\nA = $$ \\frac{(10 + 6) \\times 5}{2} $$\nA = $$ \\frac{16 \\times 5}{2} $$\nA = $$ \\frac{80}{2} $$\nA = 40 cm².\n\nA área do trapézio é de 40 cm².'
    },
    {
        id: 'advanced-q4',
        enunciado: 'Se a área de um quadrado é 64 cm², qual é o comprimento da sua diagonal?',
        opcoes: [
            'A) 8 cm',
            'B) $8\\sqrt{2}$ cm',
            'C) 16 cm',
            'D) $16\\sqrt{2}$ cm',
            'E) 32 cm'
        ],
        respostaCorreta: 1, // B) 8√2 cm
        explicacao: 'Se a área de um quadrado é 64 cm², o lado (L) é dado por $$ L = \\sqrt{Área} $$: $$ L = \\sqrt{64} = 8 $$ cm.\nA diagonal (d) de um quadrado pode ser encontrada pelo Teorema de Pitágoras ou pela fórmula $$ d = L\\sqrt{2} $$.\n$$ d = 8 \\times \\sqrt{2} = 8\\sqrt{2} $$ cm.\n\nO comprimento da diagonal é $$ 8\\sqrt{2} $$ cm.'
    },
    {
        id: 'advanced-q5',
        enunciado: 'Um terreno tem a forma de um triângulo retângulo com catetos medindo 60 metros e 80 metros. Qual o custo para cercar todo esse terreno, se o metro da cerca custa R$ 15,00?',
        opcoes: [
            'A) R$ 1.200,00',
            'B) R$ 2.100,00',
            'C) R$ 2.400,00',
            'D) R$ 3.000,00',
            'E) R$ 3.600,00'
        ],
        respostaCorreta: 4, // E) R$ 3.600,00
        explicacao: 'Primeiro, calculamos a hipotenusa (h) do triângulo retângulo usando o Teorema de Pitágoras: $$ h^2 = 60^2 + 80^2 $$ => $$ h^2 = 3600 + 6400 $$ => $$ h^2 = 10000 $$ => $$ h = \\sqrt{10000} = 100 $$ metros.\nO perímetro (P) do terreno é a soma dos lados: $$ P = 60 + 80 + 100 = 240 $$ metros.\nO custo total para cercar o terreno é o perímetro multiplicado pelo custo por metro: Custo = $$ 240 \\times 15 = R\\$ 3.600,00 $$.\n\nO custo para cercar o terreno é de R$ 3.600,00.'
    },

    // --- GEOMETRIA ESPACIAL (5 QUESTÕES) ---
    {
        id: 'advanced-q6',
        enunciado: 'Um cubo tem arestas medindo 5 cm. Qual o volume e a área total da superfície desse cubo?',
        opcoes: [
            'A) V=25 cm³, A=150 cm²',
            'B) V=125 cm³, A=25 cm²',
            'C) V=125 cm³, A=150 cm²',
            'D) V=25 cm³, A=25 cm²',
            'E) V=150 cm³, A=125 cm²'
        ],
        respostaCorreta: 2, // C) V=125 cm³, A=150 cm²
        explicacao: 'O volume (V) de um cubo é dado por $$ V = L^3 $$, onde L é a medida da aresta.\n$$ V = 5^3 = 125 $$ cm³.\nA área total (A) da superfície de um cubo é dada por $$ A = 6 \\times L^2 $$, pois são 6 faces quadradas.\n$$ A = 6 \\times 5^2 = 6 \\times 25 = 150 $$ cm².\n\nO volume é 125 cm³ e a área total é 150 cm².'
    },
    {
        id: 'advanced-q7',
        enunciado: 'Um aquário cilíndrico tem raio da base de 10 cm e altura de 30 cm. Qual a capacidade aproximada desse aquário em litros? (Use $$ \\pi = 3.14 $$ e considere 1 Litro = 1000 cm³)',
        opcoes: [
            'A) 3,14 litros',
            'B) 9,42 litros',
            'C) 31,40 litros',
            'D) 94,20 litros',
            'E) 314,00 litros'
        ],
        respostaCorreta: 1, // B) 9,42 litros
        explicacao: 'O volume (V) de um cilindro é dado por $$ V = \\pi \\times r^2 \\times h $$, onde r é o raio da base e h é a altura.\n$$ V = 3.14 \\times 10^2 \\times 30 $$\n$$ V = 3.14 \\times 100 \\times 30 $$\n$$ V = 314 \\times 30 $$\n$$ V = 9420 $$ cm³.\nPara converter para litros, dividimos por 1000: $$ 9420 \\div 1000 = 9.42 $$ litros.\n\nA capacidade aproximada do aquário é de 9,42 litros.'
    },
    {
        id: 'advanced-q8',
        enunciado: 'Uma pirâmide de base quadrada tem o lado da base medindo 4 cm e a altura da pirâmide medindo 6 cm. Qual o volume dessa pirâmide?',
        opcoes: [
            'A) 16 cm³',
            'B) 24 cm³',
            'C) 32 cm³',
            'D) 48 cm³',
            'E) 96 cm³'
        ],
        respostaCorreta: 2, // C) 32 cm³
        explicacao: 'A fórmula do volume de uma pirâmide é: $$ V = \\frac{1}{3} \\times A_b \\times h $$, onde $$ A_b $$ é a área da base e h é a altura.\nA base é um quadrado de lado 4 cm, então a área da base é $$ A_b = lado^2 = 4^2 = 16 $$ cm².\nA altura (h) é 6 cm.\n$$ V = \\frac{1}{3} \\times 16 \\times 6 $$\n$$ V = \\frac{16 \\times 6}{3} $$\n$$ V = \\frac{96}{3} $$\n$$ V = 32 $$ cm³.\n\nO volume da pirâmide é de 32 cm³.'
    },
    {
        id: 'advanced-q9',
        enunciado: 'Uma esfera tem um raio de 3 metros. Qual a área da superfície dessa esfera? (Use $$ \\pi = 3.14 $$)',
        opcoes: [
            'A) 28.26 m²',
            'B) 56.52 m²',
            'C) 113.04 m²',
            'D) 141.30 m²',
            'E) 339.12 m²'
        ],
        respostaCorreta: 2, // C) 113.04 m²
        explicacao: 'A área da superfície (A) de uma esfera é dada por $$ A = 4 \\times \\pi \\times r^2 $$, onde r é o raio.\n$$ A = 4 \\times 3.14 \\times 3^2 $$\n$$ A = 4 \\times 3.14 \\times 9 $$\n$$ A = 12.56 \\times 9 $$\n$$ A = 113.04 $$ m².\n\nA área da superfície da esfera é de 113,04 m².'
    },
    {
        id: 'advanced-q10',
        enunciado: 'Um cone tem raio da base de 4 cm e altura de 3 cm. Qual o volume desse cone? (Use $$ \\pi = 3.14 $$)',
        opcoes: [
            'A) 12.56 cm³',
            'B) 25.12 cm³',
            'C) 37.68 cm³',
            'D) 50.24 cm³',
            'E) 62.80 cm³'
        ],
        respostaCorreta: 3, // D) 50.24 cm³
        explicacao: 'A fórmula do volume (V) de um cone é: $$ V = \\frac{1}{3} \\times \\pi \\times r^2 \\times h $$, onde r é o raio da base e h é a altura.\n$$ V = \\frac{1}{3} \\times 3.14 \\times 4^2 \\times 3 $$\n$$ V = \\frac{1}{3} \\times 3.14 \\times 16 \\times 3 $$\n(O 3 do numerador e o 3 do denominador se cancelam)\n$$ V = 3.14 \\times 16 $$\n$$ V = 50.24 $$ cm³.\n\nO volume do cone é de 50,24 cm³.'
    },
    {
        id: 'advanced-q11',
        enunciado: 'Uma função quadrática é dada por $$ f(x) = x^2 - 6x + 8 $$. Quais são as raízes (zeros) dessa função?',
        opcoes: [
            'A) x = 1 e x = 8',
            'B) x = 2 e x = 4',
            'C) x = -2 e x = -4',
            'D) x = 0 e x = 6',
            'E) x = 1 e x = 5'
        ],
        respostaCorreta: 1, // B) x = 2 e x = 4
        explicacao: 'Para encontrar as raízes da função $$ f(x) = x^2 - 6x + 8 $$, precisamos resolver a equação $$ x^2 - 6x + 8 = 0 $$.\nPodemos usar a Fórmula de Bhaskara ou fatoração. Por fatoração, procuramos dois números que, multiplicados, dão 8 e, somados, dão -6. Esses números são -2 e -4.\nEntão, $$ (x - 2)(x - 4) = 0 $$.\nIsso nos dá as raízes $$ x = 2 $$ e $$ x = 4 $$.'
    },
    {
        id: 'advanced-q12',
        enunciado: 'Considere a função afim $$ g(x) = -3x + 9 $$. Onde o gráfico dessa função corta o eixo X e o eixo Y, respectivamente?',
        opcoes: [
            'A) Eixo X em (3,0) e Eixo Y em (0,9)',
            'B) Eixo X em (9,0) e Eixo Y em (0,3)',
            'C) Eixo X em (-3,0) e Eixo Y em (0,9)',
            'D) Eixo X em (3,0) e Eixo Y em (0,-9)',
            'E) Eixo X em (9,0) e Eixo Y em (0,-3)'
        ],
        respostaCorreta: 0, // A) Eixo X em (3,0) e Eixo Y em (0,9)
        explicacao: 'Para o corte no eixo Y, fazemos $$ x = 0 $$: $$ g(0) = -3(0) + 9 = 9 $$. Então, corta o eixo Y em $$ (0,9) $$.\nPara o corte no eixo X (raiz da função), fazemos $$ g(x) = 0 $$: $$ -3x + 9 = 0 $$ => $$ -3x = -9 $$ => $$ x = 3 $$. Então, corta o eixo X em $$ (3,0) $$.'
    },
    {
        id: 'advanced-q13',
        enunciado: 'Qual o valor de $$ y_V $$ (valor máximo ou mínimo) da função $$ f(x) = -x^2 + 4x - 3 $$?',
        opcoes: [
            'A) -1',
            'B) 0',
            'C) 1',
            'D) 2',
            'E) 4'
        ],
        respostaCorreta: 2, // C) 1 (A função é uma parábola com concavidade para baixo (a=-1), então tem um valor máximo. O x_V = -b/2a = -4/(2*-1) = 2. Então f(2) = -(2)^2 + 4(2) - 3 = -4 + 8 - 3 = 1.)
        explicacao: 'A função $$ f(x) = -x^2 + 4x - 3 $$ é uma função quadrática com $$ a = -1 $$, $$ b = 4 $$ e $$ c = -3 $$.\nComo $$ a < 0 $$, a parábola tem concavidade para baixo, e o vértice é um ponto de máximo.\nPrimeiro, encontramos o $$ x_V $$ (coordenada x do vértice): $$ x_V = \\frac{-b}{2a} = \\frac{-4}{2(-1)} = \\frac{-4}{-2} = 2 $$.\nAgora, substituímos $$ x_V $$ na função para encontrar o $$ y_V $$ (valor máximo): $$ f(2) = -(2)^2 + 4(2) - 3 = -4 + 8 - 3 = 1 $$.\n\nO valor máximo da função é 1.'
    },
    {
        id: 'advanced-q14',
        enunciado: 'Um cientista observa que a população de uma bactéria duplica a cada hora. Se inicialmente havia 100 bactérias, qual a função que representa essa população $$ P(t) $$ após $$ t $$ horas?',
        opcoes: [
            'A) $$ P(t) = 100 + 2t $$',
            'B) $$ P(t) = 100t^2 $$',
            'C) $$ P(t) = 100 \\times 2^t $$',
            'D) $$ P(t) = 2 \\times 100^t $$',
            'E) $$ P(t) = 100 \\times t^2 $$'
        ],
        respostaCorreta: 2, // C) P(t) = 100 * 2^t
        explicacao: 'O crescimento que duplica a cada período é um crescimento exponencial. A forma geral é $$ P(t) = P_0 \\times a^t $$, onde $$ P_0 $$ é a população inicial e $$ a $$ é o fator de crescimento.\nPopulação inicial $$ P_0 = 100 $$.\nFator de duplicação $$ a = 2 $$.\nPortanto, a função é $$ P(t) = 100 \\times 2^t $$.'
    },
    {
        id: 'advanced-q15',
        enunciado: 'Para a função $$ f(x) = \\sqrt{x - 4} $$, qual é o conjunto domínio (valores de x para os quais a função é definida nos números reais)?',
        opcoes: [
            'A) $$ x > 0 $$',
            'B) $$ x \\ge 0 $$',
            'C) $$ x \\ge 4 $$',
            'D) $$ x \\le 4 $$',
            'E) Todos os números reais'
        ],
        respostaCorreta: 2, // C) x >= 4
        explicacao: 'Para que a função $$ f(x) = \\sqrt{x - 4} $$ seja definida nos números reais, o valor dentro da raiz quadrada (o radicando) não pode ser negativo.\nEntão, devemos ter $$ x - 4 \\ge 0 $$.\nResolvendo para x: $$ x \\ge 4 $$.\n\nO domínio da função é $$ x \\ge 4 $$.'
    },

    // Progressões (PA e PG) (5 questões)
    {
        id: 'advanced-q16',
        enunciado: 'O primeiro termo de uma Progressão Aritmética (PA) é 7 e sua razão é 4. Qual o 12º termo dessa PA?',
        opcoes: [
            'A) 47',
            'B) 51',
            'C) 55',
            'D) 59',
            'E) 63'
        ],
        respostaCorreta: 1, // B) 51 (A. a1 = 7, r = 4, n = 12. an = a1 + (n-1)r = 7 + (12-1)*4 = 7 + 11*4 = 7 + 44 = 51)
        explicacao: 'Para encontrar o n-ésimo termo de uma PA, usamos a fórmula: $$ a_n = a_1 + (n-1)r $$.\nOnde $$ a_1 = 7 $$, $$ r = 4 $$ e $$ n = 12 $$.\n$$ a_{12} = 7 + (12-1)4 $$\n$$ a_{12} = 7 + 11 \\times 4 $$\n$$ a_{12} = 7 + 44 $$\n$$ a_{12} = 51 $$.\n\nO 12º termo dessa PA é 51.'
    },
    {
        id: 'advanced-q17',
        enunciado: 'Qual a soma dos 15 primeiros termos de uma Progressão Aritmética onde o primeiro termo é 1 e o último termo (15º) é 29?',
        opcoes: [
            'A) 220',
            'B) 225',
            'C) 230',
            'D) 240',
            'E) 250'
        ],
        respostaCorreta: 1, // B) 225 (A. n = 15, a1 = 1, a15 = 29. Sn = (a1 + an) * n / 2 = (1 + 29) * 15 / 2 = 30 * 15 / 2 = 450 / 2 = 225)
        explicacao: 'Para calcular a soma dos n primeiros termos de uma PA, usamos a fórmula: $$ S_n = \\frac{(a_1 + a_n) \\times n}{2} $$.\nOnde $$ a_1 = 1 $$, $$ a_{15} = 29 $$ e $$ n = 15 $$.\n$$ S_{15} = \\frac{(1 + 29) \\times 15}{2} $$\n$$ S_{15} = \\frac{30 \\times 15}{2} $$\n$$ S_{15} = \\frac{450}{2} $$\n$$ S_{15} = 225 $$.\n\nA soma dos 15 primeiros termos é 225.'
    },
    {
        id: 'advanced-q18',
        enunciado: 'O 3º termo de uma Progressão Geométrica (PG) é 12 e sua razão é 2. Qual é o 6º termo dessa PG?',
        opcoes: [
            'A) 24',
            'B) 36',
            'C) 48',
            'D) 72',
            'E) 96'
        ],
        respostaCorreta: 4, // E) 96 (A. a3=12, q=2. a6 = a3 * q^(6-3) = 12 * 2^3 = 12 * 8 = 96)
        explicacao: 'Podemos usar a fórmula do termo geral da PG, mas de forma adaptada: $$ a_n = a_k \\times q^{(n-k)} $$.\nOnde $$ a_n $$ é o termo que queremos (a6), $$ a_k $$ é um termo conhecido (a3), q é a razão e (n-k) é a diferença entre as posições.\n$$ a_6 = a_3 \\times q^{(6-3)} $$\n$$ a_6 = 12 \\times 2^3 $$\n$$ a_6 = 12 \\times 8 $$\n$$ a_6 = 96 $$.\n\nO 6º termo dessa PG é 96.'
    },
    {
        id: 'advanced-q19',
        enunciado: 'Qual a soma dos infinitos termos da Progressão Geométrica $$ (10, 5, 2.5, ...) $$ ?',
        opcoes: [
            'A) 15',
            'B) 20',
            'C) 25',
            'D) 30',
            'E) 50'
        ],
        respostaCorreta: 1, // B) 20 (A. a1 = 10, q = 0.5. S = a1 / (1-q) = 10 / (1-0.5) = 10 / 0.5 = 20)
        explicacao: 'Para que uma PG infinita tenha uma soma finita, sua razão (q) deve estar entre -1 e 1 (isto é, $$ |q| < 1 $$).\nAqui, $$ a_1 = 10 $$.\nA razão é $$ q = \\frac{5}{10} = 0.5 $$.\nComo $$ |0.5| < 1 $$, podemos usar a fórmula da soma dos termos de uma PG infinita: $$ S_{\\infty} = \\frac{a_1}{1 - q} $$.\n$$ S_{\\infty} = \\frac{10}{1 - 0.5} $$\n$$ S_{\\infty} = \\frac{10}{0.5} $$\n$$ S_{\\infty} = 20 $$.\n\nA soma dos infinitos termos é 20.'
    },
    {
        id: 'advanced-q20',
        enunciado: 'Em uma PA, o 5º termo é 18 e o 9º termo é 30. Qual é a razão dessa PA?',
        opcoes: [
            'A) 2',
            'B) 3',
            'C) 4',
            'D) 6',
            'E) 12'
        ],
        respostaCorreta: 1, // B) 3 (A. an = ak + (n-k)r -> 30 = 18 + (9-5)r -> 12 = 4r -> r=3)
        explicacao: 'Podemos usar a propriedade $$ a_n = a_k + (n-k)r $$.\nOnde $$ a_9 = 30 $$, $$ a_5 = 18 $$, $$ n = 9 $$, $$ k = 5 $$.\n$$ 30 = 18 + (9-5)r $$\n$$ 30 = 18 + 4r $$\n$$ 30 - 18 = 4r $$\n$$ 12 = 4r $$\n$$ r = \\frac{12}{4} $$\n$$ r = 3 $$.\n\nA razão dessa PA é 3.'
    },
    {
        id: 'advanced-q21',
        enunciado: 'De quantas maneiras diferentes 5 pessoas podem se sentar em 5 cadeiras enfileiradas?',
        opcoes: [
            'A) 5',
            'B) 10',
            'C) 20',
            'D) 24',
            'E) 120'
        ],
        respostaCorreta: 4, // E) 120
        explicacao: 'Quando queremos organizar todas as pessoas em todas as cadeiras, e a ordem importa, usamos Permutação Simples. O número de maneiras é dado por n!, onde n é o número de pessoas/cadeiras.\nPara 5 pessoas em 5 cadeiras: $$ P_5 = 5! = 5 \\times 4 \\times 3 \\times 2 \\times 1 = 120 $$.'
    },
    {
        id: 'advanced-q22',
        enunciado: 'Em um grupo de 8 amigos, quantas comissões de 3 pessoas podem ser formadas para organizar um evento?',
        opcoes: [
            'A) 24',
            'B) 56',
            'C) 112',
            'D) 336',
            'E) 672'
        ],
        respostaCorreta: 1, // B) 56
        explicacao: 'Como a ordem das pessoas na comissão NÃO importa (ser membro A, B, C é o mesmo que ser B, A, C), usamos Combinação Simples. A fórmula é: $$ C_{n,k} = \\frac{n!}{k!(n-k)!} $$.\nOnde n = 8 (total de amigos) e k = 3 (pessoas na comissão).\n$$ C_{8,3} = \\frac{8!}{3!(8-3)!} = \\frac{8!}{3!5!} = \\frac{8 \\times 7 \\times 6 \\times 5!}{ (3 \\times 2 \\times 1) \\times 5!} = \\frac{8 \\times 7 \\times 6}{6} = 8 \\times 7 = 56 $$.\n\nPodem ser formadas 56 comissões.'
    },
    {
        id: 'advanced-q23',
        enunciado: 'Um dado de 6 faces é lançado. Qual a probabilidade de sair um número par ou um número maior que 4?',
        opcoes: [
            'A) $$ \\frac{1}{6} $$',
            'B) $$ \\frac{1}{3} $$',
            'C) $$ \\frac{1}{2} $$',
            'D) $$ \\frac{2}{3} $$',
            'E) $$ \\frac{5}{6} $$'
        ],
        respostaCorreta: 3, // D) 2/3
        explicacao: 'Espaço amostral (S) = {1, 2, 3, 4, 5, 6}, total de resultados = 6.\nEvento A: Sair número par = {2, 4, 6}. $$ P(A) = \\frac{3}{6} $$.\nEvento B: Sair número maior que 4 = {5, 6}. $$ P(B) = \\frac{2}{6} $$.\nEvento A e B (interseção): Sair número par E maior que 4 = {6}. $$ P(A \\cap B) = \\frac{1}{6} $$.\nComo os eventos não são mutuamente exclusivos (o 6 está em ambos), usamos: $$ P(A \\cup B) = P(A) + P(B) - P(A \\cap B) $$.\n$$ P(A \\cup B) = \\frac{3}{6} + \\frac{2}{6} - \\frac{1}{6} = \\frac{4}{6} = \\frac{2}{3} $$.\n\nA probabilidade é $$ \\frac{2}{3} $$.'
    },
    {
        id: 'advanced-q24',
        enunciado: 'Em uma urna, há 5 bolas azuis e 4 bolas vermelhas. Se duas bolas são retiradas sucessivamente e sem reposição, qual a probabilidade de que ambas sejam azuis?',
        opcoes: [
            'A) $$ \\frac{1}{9} $$',
            'B) $$ \\frac{2}{9} $$',
            'C) $$ \\frac{5}{18} $$',
            'D) $$ \\frac{1}{3} $$',
            'E) $$ \\frac{5}{9} $$'
        ],
        respostaCorreta: 2, // C) 5/18
        explicacao: 'Total de bolas = 5 azuis + 4 vermelhas = 9 bolas.\nProbabilidade da primeira bola ser azul: $$ P(1^{a} Azul) = \\frac{5}{9} $$.\nApós retirar uma bola azul (sem reposição), sobram 8 bolas, sendo 4 azuis.\nProbabilidade da segunda bola ser azul (dado que a primeira foi azul): $$ P(2^{a} Azul | 1^{a} Azul) = \\frac{4}{8} = \\frac{1}{2} $$.\nProbabilidade de ambas serem azuis: $$ P(1^{a} Azul) \\times P(2^{a} Azul | 1^{a} Azul) = \\frac{5}{9} \\times \\frac{1}{2} = \\frac{5}{18} $$.\n\nA probabilidade é $$ \\frac{5}{18} $$.'
    },
    {
        id: 'advanced-q25',
        enunciado: 'Quantos números de 3 algarismos distintos podemos formar com os dígitos {1, 2, 3, 4, 5}?',
        opcoes: [
            'A) 15',
            'B) 20',
            'C) 60',
            'D) 120',
            'E) 125'
        ],
        respostaCorreta: 2, // C) 60
        explicacao: 'Para formar um número de 3 algarismos distintos a partir de 5 dígitos, a ordem importa (123 é diferente de 321) e não há repetição. Isso é um Arranjo Simples ou pode ser resolvido pelo Princípio Fundamental da Contagem (PFC).\nPFC:\n- 1º algarismo: 5 opções ({1, 2, 3, 4, 5})\n- 2º algarismo: 4 opções (restantes após escolher o 1º, pois devem ser distintos)\n- 3º algarismo: 3 opções (restantes após escolher o 2º)\nTotal = $$ 5 \\times 4 \\times 3 = 60 $$ números.\n\nUsando Arranjo: $$ A_{n,k} = \\frac{n!}{(n-k)!} $$. $$ A_{5,3} = \\frac{5!}{(5-3)!} = \\frac{5!}{2!} = \\frac{5 \\times 4 \\times 3 \\times 2!}{2!} = 5 \\times 4 \\times 3 = 60 $$.\n\nPodemos formar 60 números de 3 algarismos distintos.'
    },

    // Trigonometria (5 questões)
    {
        id: 'advanced-q26',
        enunciado: 'Em um triângulo retângulo, um dos ângulos agudos mede $$ 60^\\circ $$. Se a hipotenusa mede 20 cm, qual a medida do cateto adjacente a este ângulo?',
        opcoes: [
            'A) 5 cm',
            'B) 10 cm',
            'C) $10\\sqrt{3}$ cm',
            'D) 15 cm',
            'E) $20\\sqrt{3}$ cm'
        ],
        respostaCorreta: 1, // B) 10 cm
        explicacao: 'Usamos a relação do cosseno: $$ \\cos(\\text{ângulo}) = \\frac{\\text{Cateto Adjacente}}{\\text{Hipotenusa}} $$.\nSabemos que $$ \\cos(60^\\circ) = 0.5 $$. A hipotenusa é 20 cm.\n$$ 0.5 = \\frac{\\text{Cateto Adjacente}}{20} $$.\nCateto Adjacente = $$ 0.5 \\times 20 = 10 $$ cm.\n\nO cateto adjacente mede 10 cm.'
    },
    {
        id: 'advanced-q27',
        enunciado: 'Se $$ \\sin(x) = \\frac{1}{2} $$ e $$ x $$ está no segundo quadrante, qual o valor de $$ \\cos(x) $$?',
        opcoes: [
            'A) $$ \\frac{1}{2} $$',
            'B) $$ -\\frac{1}{2} $$',
            'C) $$ \\frac{\\sqrt{3}}{2} $$',
            'D) $$ -\\frac{\\sqrt{3}}{2} $$',
            'E) $$ 1 $$'
        ],
        respostaCorreta: 3, // D) -√3/2
        explicacao: 'Usamos a Relação Fundamental da Trigonometria: $$ \\sin^2(x) + \\cos^2(x) = 1 $$.\n$$ (\\frac{1}{2})^2 + \\cos^2(x) = 1 $$.\n$$ \\frac{1}{4} + \\cos^2(x) = 1 $$.\n$$ \\cos^2(x) = 1 - \\frac{1}{4} = \\frac{3}{4} $$.\n$$ \\cos(x) = \\pm \\sqrt{\\frac{3}{4}} = \\pm \\frac{\\sqrt{3}}{2} $$.\nComo $$ x $$ está no segundo quadrante, onde o cosseno é negativo, então $$ \\cos(x) = -\\frac{\\sqrt{3}}{2} $$.'
    },
    {
        id: 'advanced-q28',
        enunciado: 'Um observador vê o topo de uma torre sob um ângulo de elevação de $$ 45^\\circ $$. Se ele se afasta 50 metros da torre, o novo ângulo de elevação é de $$ 30^\\circ $$. Qual a altura da torre? (Use $$ \\sqrt{3} \\approx 1.73 $$)',
        opcoes: [
            'A) 25 m',
            'B) 50 m',
            'C) 68.25 m',
            'D) 75 m',
            'E) 100 m'
        ],
        respostaCorreta: 2, // C) 68.25 m
        explicacao: 'Seja h a altura da torre e d a distância inicial do observador à base da torre.\nQuando o ângulo é $$ 45^\\circ $$: $$ \\tan(45^\\circ) = \\frac{h}{d} $$ => $$ 1 = \\frac{h}{d} $$ => $$ h = d $$.\nQuando o ângulo é $$ 30^\\circ $$ e ele se afasta 50m: $$ \\tan(30^\\circ) = \\frac{h}{d + 50} $$.\nSabemos que $$ \\tan(30^\\circ) = \\frac{1}{\\sqrt{3}} = \\frac{\\sqrt{3}}{3} \\approx \\frac{1.73}{3} \\approx 0.577 $$.\nEntão, $$ 0.577 = \\frac{h}{h + 50} $$ (substituindo d por h).\n$$ 0.577(h + 50) = h $$.\n$$ 0.577h + 28.85 = h $$.\n$$ 28.85 = h - 0.577h $$.\n$$ 28.85 = 0.423h $$.\n$$ h = \\frac{28.85}{0.423} \\approx 68.20 $$ m.\n\nA altura da torre é aproximadamente 68.20 metros.'
    },
    {
        id: 'advanced-q29',
        enunciado: 'O valor de $$ \\sin(150^\\circ) $$ é o mesmo que o valor de qual dos seguintes itens?',
        opcoes: [
            'A) $$ \\sin(30^\\circ) $$',
            'B) $$ \\sin(-30^\\circ) $$',
            'C) $$ \\cos(30^\\circ) $$',
            'D) $$ \\cos(60^\\circ) $$',
            'E) $$ \\sin(210^\\circ) $$'
        ],
        respostaCorreta: 0, // A) sin(30°)
        explicacao: 'O ângulo $$ 150^\\circ $$ está no segundo quadrante. No segundo quadrante, o seno é positivo.\nO ângulo de referência para $$ 150^\\circ $$ é $$ 180^\\circ - 150^\\circ = 30^\\circ $$.\nComo o seno é positivo no segundo quadrante, $$ \\sin(150^\\circ) = \\sin(30^\\circ) $$.'
    },
    {
        id: 'advanced-q30',
        enunciado: 'Em um triângulo qualquer, dois lados medem 7 cm e 10 cm, e o ângulo entre eles é $$ 60^\\circ $$. Qual a medida do terceiro lado?',
        opcoes: [
            'A) $$ \\sqrt{79} $$ cm',
            'B) $$ \\sqrt{109} $$ cm',
            'C) $$ \\sqrt{129} $$ cm',
            'D) $$ \\sqrt{139} $$ cm',
            'E) $$ \\sqrt{149} $$ cm'
        ],
        respostaCorreta: 0, // A) sqrt(79) cm
        explicacao: 'Usamos a Lei dos Cossenos: $$ c^2 = a^2 + b^2 - 2ab \\cos(C) $$.\nSeja $$ c $$ o lado desconhecido, e os outros lados $$ a = 7 $$ e $$ b = 10 $$, com o ângulo $$ C = 60^\\circ $$.\n$$ c^2 = 7^2 + 10^2 - 2 \\times 7 \\times 10 \\times \\cos(60^\\circ) $$.\n$$ c^2 = 49 + 100 - 2 \\times 7 \\times 10 \\times 0.5 $$.\n$$ c^2 = 149 - (140 \\times 0.5) $$.\n$$ c^2 = 149 - 70 $$.\n$$ c^2 = 79 $$.\n$$ c = \\sqrt{79} $$ cm.\n\nO terceiro lado mede $$ \\sqrt{79} $$ cm.'
    },
    {
        id: 'advanced-q31',
        enunciado: 'Um capital de R$ 5.000,00 é aplicado a juros simples, com taxa de 2% ao mês. Qual o montante acumulado após 8 meses?',
        opcoes: [
            'A) R$ 5.400,00',
            'B) R$ 5.600,00',
            'C) R$ 5.800,00',
            'D) R$ 6.000,00',
            'E) R$ 6.200,00'
        ],
        respostaCorreta: 1, // B) R$ 5.800,00
        explicacao: 'A fórmula para juros simples é $$ M = C \\times (1 + i \\times t) $$, onde M é o montante, C é o capital, i é a taxa de juros (em decimal) e t é o tempo.\nC = 5.000,00; i = 2% a.m. = 0.02; t = 8 meses.\n$$ M = 5000 \\times (1 + 0.02 \\times 8) $$\n$$ M = 5000 \\times (1 + 0.16) $$\n$$ M = 5000 \\times 1.16 $$\n$$ M = 5800 $$.\n\nO montante acumulado após 8 meses será de R$ 5.800,00.'
    },
    {
        id: 'advanced-q32',
        enunciado: 'Qual o valor dos juros gerados por um capital de R$ 10.000,00 aplicado a juros compostos por 3 meses, a uma taxa de 1% ao mês? (Arredonde para 2 casas decimais)',
        opcoes: [
            'A) R$ 100,00',
            'B) R$ 201,00',
            'C) R$ 303,01',
            'D) R$ 300,00',
            'E) R$ 10.303,01'
        ],
        respostaCorreta: 2, // C) R$ 303,01
        explicacao: 'A fórmula para montante com juros compostos é $$ M = C \\times (1 + i)^t $$.\nC = 10.000,00; i = 1% a.m. = 0.01; t = 3 meses.\n$$ M = 10000 \\times (1 + 0.01)^3 $$\n$$ M = 10000 \\times (1.01)^3 $$\n$$ M = 10000 \\times 1.030301 $$\n$$ M = 10303.01 $$.\nOs juros (J) são a diferença entre o montante e o capital: $$ J = M - C $$.\n$$ J = 10303.01 - 10000 = 303.01 $$.\n\nOs juros gerados são R$ 303,01.'
    },
    {
        id: 'advanced-q33',
        enunciado: 'Um produto custava R$ 400,00. Primeiro, ele sofreu um aumento de 10%, e depois, sobre o novo preço, foi aplicado um desconto de 10%. Qual o preço final do produto?',
        opcoes: [
            'A) R$ 396,00',
            'B) R$ 400,00',
            'C) R$ 404,00',
            'D) R$ 410,00',
            'E) R$ 420,00'
        ],
        respostaCorreta: 0, // A) R$ 396,00
        explicacao: 'Preço inicial = R$ 400,00.\n1. Aumento de 10%: Preço com aumento = $$ 400 \\times (1 + 0.10) = 400 \\times 1.10 = 440 $$.\n2. Desconto de 10% sobre o novo preço: Preço final = $$ 440 \\times (1 - 0.10) = 440 \\times 0.90 = 396 $$.\n\nO preço final do produto é de R$ 396,00.'
    },
    {
        id: 'advanced-q34',
        enunciado: 'Um investidor aplicou R$ 2.000,00 e, após 12 meses, resgatou R$ 2.300,00. Qual foi a taxa de juros simples mensal (em % ao mês) dessa aplicação?',
        opcoes: [
            'A) 1,00 %',
            'B) 1,25 %',
            'C) 1,50 %',
            'D) 2,00 %',
            'E) 2,50 %'
        ],
        respostaCorreta: 1, // B) 1,25 %
        explicacao: 'Capital (C) = R$ 2.000,00.\nMontante (M) = R$ 2.300,00.\nTempo (t) = 12 meses.\nJuros (J) = M - C = $$ 2300 - 2000 = 300 $$.\n\nUsamos a fórmula de juros simples: $$ J = C \\times i \\times t $$.\n$$ 300 = 2000 \\times i \\times 12 $$.\n$$ 300 = 24000 \\times i $$.\n$$ i = \\frac{300}{24000} = \\frac{3}{240} = \\frac{1}{80} $$.\nPara converter a taxa para porcentagem, multiplicamos por 100: $$ i = \\frac{1}{80} \\times 100\\% = \\frac{100}{80}\\% = 1.25\\% $$.\n\nA taxa de juros simples mensal foi de 1,25% ao mês.'
    },
    {
        id: 'advanced-q35',
        enunciado: 'Financiar um carro de R$ 50.000,00 com juros compostos de 1% ao mês durante 5 meses. Qual o valor total (montante) a ser pago ao final desse período? (Arredonde para 2 casas decimais)',
        opcoes: [
            'A) R$ 52.550,50',
            'B) R$ 52.500,00',
            'C) R$ 52.000,00',
            'D) R$ 51.510,00',
            'E) R$ 53.000,00'
        ],
        respostaCorreta: 0, // A) R$ 52.550,50
        explicacao: 'A fórmula para montante com juros compostos é $$ M = C \\times (1 + i)^t $$.\nC = 50.000,00; i = 1% a.m. = 0.01; t = 5 meses.\n$$ M = 50000 \\times (1 + 0.01)^5 $$\n$$ M = 50000 \\times (1.01)^5 $$\n$$ (1.01)^5 \\approx 1.05101005 $$.\n$$ M = 50000 \\times 1.05101005 = 52550.5025 $$.\nArredondando para duas casas decimais, o montante é R$ 52.550,50.\n\nO valor total a ser pago será de R$ 52.550,50.'
    },

    // Geometria Analítica (5 questões)
    {
        id: 'advanced-q36',
        enunciado: 'Qual a distância entre os pontos A( -1, 3) e B(2, -1) no plano cartesiano?',
        opcoes: [
            'A) 3',
            'B) 4',
            'C) 5',
            'D) $3\\sqrt{2}$',
            'E) $5\\sqrt{2}$'
        ],
        respostaCorreta: 2, // C) 5
        explicacao: 'A fórmula da distância entre dois pontos $$ (x_1, y_1) $$ e $$ (x_2, y_2) $$ é $$ d = \\sqrt{(x_2 - x_1)^2 + (y_2 - y_1)^2} $$.\nPontos A(-1, 3) e B(2, -1).\n$$ d = \\sqrt{(2 - (-1))^2 + (-1 - 3)^2} $$\n$$ d = \\sqrt{(2 + 1)^2 + (-4)^2} $$\n$$ d = \\sqrt{3^2 + 16} $$\n$$ d = \\sqrt{9 + 16} $$\n$$ d = \\sqrt{25} $$\n$$ d = 5 $$.'
    },
    {
        id: 'advanced-q37',
        enunciado: 'O ponto médio do segmento de reta que liga P( -2, 5) e Q(4, 1) é:',
        opcoes: [
            'A) (1, 3)',
            'B) (2, 3)',
            'C) (1, 6)',
            'D) (2, 6)',
            'E) (-1, 2)'
        ],
        respostaCorreta: 0, // A) (1, 3)
        explicacao: 'O ponto médio $$ M(x_m, y_m) $$ de um segmento com extremidades $$ (x_1, y_1) $$ e $$ (x_2, y_2) $$ é dado por: $$ x_m = \\frac{x_1 + x_2}{2} $$ e $$ y_m = \\frac{y_1 + y_2}{2} $$.\nPontos P(-2, 5) e Q(4, 1).\n$$ x_m = \\frac{-2 + 4}{2} = \\frac{2}{2} = 1 $$.\n$$ y_m = \\frac{5 + 1}{2} = \\frac{6}{2} = 3 $$.\n\nO ponto médio é (1, 3).'
    },
    {
        id: 'advanced-q38',
        enunciado: 'Qual o coeficiente angular da reta que passa pelos pontos C(1, 2) e D(4, 8)?',
        opcoes: [
            'A) 1',
            'B) 2',
            'C) 3',
            'D) 4',
            'E) 6'
        ],
        respostaCorreta: 1, // B) 2
        explicacao: 'O coeficiente angular (m) de uma reta que passa por dois pontos $$ (x_1, y_1) $$ e $$ (x_2, y_2) $$ é dado por: $$ m = \\frac{y_2 - y_1}{x_2 - x_1} $$.\nPontos C(1, 2) e D(4, 8).\n$$ m = \\frac{8 - 2}{4 - 1} = \\frac{6}{3} = 2 $$.\n\nO coeficiente angular da reta é 2.'
    },
    {
        id: 'advanced-q39',
        enunciado: 'Os pontos E(0, 0), F(2, 4) e G(3, 6) são colineares (estão alinhados)?',
        opcoes: [
            'A) Sim',
            'B) Não'
        ],
        respostaCorreta: 0, // A) Sim
        explicacao: 'Três pontos são colineares se o determinante da matriz formada por suas coordenadas (adicionando uma coluna de 1s) é igual a zero.\nPontos E(0, 0), F(2, 4), G(3, 6).\n$$ D = \\begin{vmatrix} 0 & 0 & 1 \\\\ 2 & 4 & 1 \\\\ 3 & 6 & 1 \\end{vmatrix} $$.\nCalculando o determinante (regra de Sarrus):\n$$ D = (0 \\times 4 \\times 1 + 0 \\times 1 \\times 3 + 1 \\times 2 \\times 6) - (1 \\times 4 \\times 3 + 0 \\times 1 \\times 6 + 0 \\times 2 \\times 1) $$\n$$ D = (0 + 0 + 12) - (12 + 0 + 0) $$\n$$ D = 12 - 12 = 0 $$.\nComo o determinante é zero, os pontos são colineares. Resposta: Sim.'
    },
    {
        id: 'advanced-q40',
        enunciado: 'Qual a área do triângulo cujos vértices são H(0, 0), I(4, 0) e J(2, 5)?',
        opcoes: [
            'A) 5 unidades de área',
            'B) 8 unidades de área',
            'C) 10 unidades de área',
            'D) 12 unidades de área',
            'E) 20 unidades de área'
        ],
        respostaCorreta: 2, // C) 10 unidades de área
        explicacao: 'A área de um triângulo com vértices $$ (x_1, y_1) $$, $$ (x_2, y_2) $$ e $$ (x_3, y_3) $$ pode ser calculada usando o determinante de suas coordenadas:\n$$ D = \\begin{vmatrix} x_1 & y_1 & 1 \\\\ x_2 & y_2 & 1 \\\\ x_3 & y_3 & 1 \\end{vmatrix} $$. A área é $$ A = \\frac{1}{2} |D| $$.\nPontos H(0, 0), I(4, 0), J(2, 5).\n$$ D = \\begin{vmatrix} 0 & 0 & 1 \\\\ 4 & 0 & 1 \\\\ 2 & 5 & 1 \\end{vmatrix} $$.\nCalculando o determinante:\n$$ D = (0 \\times 0 \\times 1 + 0 \\times 1 \\times 2 + 1 \\times 4 \\times 5) - (1 \\times 0 \\times 2 + 0 \\times 1 \\times 5 + 0 \\times 4 \\times 1) $$\n$$ D = (0 + 0 + 20) - (0 + 0 + 0) $$\n$$ D = 20 $$.\nÁrea = $$ \\frac{1}{2} |20| = 10 $$ unidades de área.'
    },
    {
        id: 'advanced-q41',
        enunciado: 'Resolva a equação exponencial: $$ 3^{x+2} = 81 $$.',
        opcoes: [
            'A) $$ x = 0 $$',
            'B) $$ x = 1 $$',
            'C) $$ x = 2 $$',
            'D) $$ x = 3 $$',
            'E) $$ x = 4 $$'
        ],
        respostaCorreta: 2, // C) x = 2
        explicacao: 'Para resolver a equação exponencial, devemos igualar as bases. Sabemos que $$ 81 = 3^4 $$.\nEntão, $$ 3^{x+2} = 3^4 $$.\nSe as bases são iguais, os expoentes também devem ser iguais:\n$$ x + 2 = 4 $$\n$$ x = 4 - 2 $$\n$$ x = 2 $$.'
    },
    {
        id: 'advanced-q42',
        enunciado: 'Qual o valor de $$ \\log_2{64} $$ ?',
        opcoes: [
            'A) 4',
            'B) 5',
            'C) 6',
            'D) 8',
            'E) 32'
        ],
        respostaCorreta: 2, // C) 6
        explicacao: 'O logaritmo $$ \\log_2{64} $$ pergunta: "A que potência o 2 deve ser elevado para resultar em 64?".\nPodemos escrever $$ 64 = 2^6 $$.\nPortanto, $$ \\log_2{64} = 6 $$.'
    },
    {
        id: 'advanced-q43',
        enunciado: 'Se $$ \\log{2} = 0.301 $$ e $$ \\log{3} = 0.477 $$, qual o valor de $$ \\log{18} $$? (Logaritmos na base 10. Arredonde para 3 casas decimais)',
        opcoes: [
            'A) 0.778',
            'B) 0.954',
            'C) 1.079',
            'D) 1.255',
            'E) 1.556'
        ],
        respostaCorreta: 3, // D) 1.255
        explicacao: 'Podemos reescrever 18 como um produto de 2 e 3:\n$$ 18 = 2 \\times 9 = 2 \\times 3^2 $$.\nUsando as propriedades dos logaritmos:\n$$ \\log{18} = \\log{(2 \\times 3^2)} $$\n$$ \\log{18} = \\log{2} + \\log{3^2} $$. (Propriedade do logaritmo do produto)\n$$ \\log{18} = \\log{2} + 2 \\times \\log{3} $$. (Propriedade do logaritmo da potência)\nSubstituindo os valores dados:\n$$ \\log{18} = 0.301 + 2 \\times 0.477 $$\n$$ \\log{18} = 0.301 + 0.954 $$\n$$ \\log{18} = 1.255 $$.'
    },
    {
        id: 'advanced-q44',
        enunciado: 'A intensidade de um som (I) em decibéis (dB) é dada por $$ dB = 10 \\times \\log_{10}{\\left(\\frac{I}{I_0}\\right)} $$, onde $$ I_0 $$ é a intensidade de referência. Se um som tem intensidade $$ I = 1000 \\times I_0 $$, qual o nível de decibéis desse som?',
        opcoes: [
            'A) 10 dB',
            'B) 20 dB',
            'C) 30 dB',
            'D) 40 dB',
            'E) 100 dB'
        ],
        respostaCorreta: 2, // C) 30 dB
        explicacao: 'Substitua $$ I = 1000 \\times I_0 $$ na fórmula:\n$$ dB = 10 \\times \\log_{10}{\\left(\\frac{1000 \\times I_0}{I_0}\\right)} $$\n$$ dB = 10 \\times \\log_{10}{(1000)} $$.\nSabemos que $$ 1000 = 10^3 $$.\nEntão, $$ \\log_{10}{(1000)} = 3 $$.\n$$ dB = 10 \\times 3 $$\n$$ dB = 30 $$.'
    },
    {
        id: 'advanced-q45',
        enunciado: 'Qual o valor de $$ x $$ na equação $$ \\log_x{16} = 4 $$?',
        opcoes: [
            'A) 1',
            'B) 2',
            'C) 3',
            'D) 4',
            'E) 8'
        ],
        respostaCorreta: 1, // B) 2
        explicacao: 'A definição de logaritmo diz que $$ \\log_b{N} = x $$ é equivalente a $$ b^x = N $$.\nNeste caso, $$ \\log_x{16} = 4 $$ significa $$ x^4 = 16 $$.\nPara encontrar x, precisamos descobrir qual número elevado à 4ª potência resulta em 16.\n$$ 2^4 = 2 \\times 2 \\times 2 \\times 2 = 16 $$.\nPortanto, $$ x = 2 $$.'
    }
];

// NOVO: Função para iniciar o simulado em uma nova aba
function openSimuladoInNewTab(category) {
    // CERTIFIQUE-SE DE QUE 'matemática.html' É O NOME CORRETO DO SEU ARQUIVO HTML PRINCIPAL.
    // SE FOR 'index.html', ALTERE A LINHA ABAIXO PARA 'index.html'
    const url = `matemática.html?mode=simulado&category=${category}`;
    window.open(url, '_blank'); // Abre em uma nova aba/janela
}

// NOVO: Função para renderizar/atualizar a barra de navegação de questões
function renderQuestionNavBar() {
    if (!questionNavBar) return; // Garante que o elemento existe
    questionNavBar.innerHTML = '';

    currentQuestions.forEach((question, index) => {
        const navButton = document.createElement('button');
        navButton.classList.add('question-nav-button');
        navButton.textContent = index + 1;

        navButton.addEventListener('click', () => {
            loadQuestion(index);
        });

        if (index === currentQuestionIndex) {
            navButton.classList.add('current');
        }
        if (userAnswers[index] !== undefined) {
            navButton.classList.add('answered');
        }
        questionNavBar.appendChild(navButton);
    });
}

function loadQuestion(index) {
    if (index < 0 || index >= currentQuestions.length) {
        console.error('Índice de questão inválido:', index);
        return;
    }

    currentQuestionIndex = index;
    const question = currentQuestions[currentQuestionIndex];

    questionNumberElement.textContent = `Questão ${currentQuestionIndex + 1} de ${currentQuestions.length}`;
    questionTextElement.innerHTML = question.enunciado; // Usar innerHTML para permitir formatação no enunciado

    optionsContainer.innerHTML = ''; // Limpa as opções anteriores

    question.opcoes.forEach((option, i) => {
        const label = document.createElement('label');
        label.className = 'option-label';
        label.innerHTML = `
            <input type="radio" name="question-${question.id}" value="${i}" ${userAnswers[currentQuestionIndex] === i ? 'checked' : ''}>
            ${option}
        `;
        label.querySelector('input[type="radio"]').addEventListener('change', () => selectOption(i));
        optionsContainer.appendChild(label);
    });

    // Atualiza o estado dos botões de navegação
    prevQuestionBtn.disabled = currentQuestionIndex === 0;
    nextQuestionBtn.disabled = currentQuestionIndex === currentQuestions.length - 1;

    // Oculta o feedback ao carregar nova questão
    simuladoFeedbackElement.style.display = 'none';
    simuladoFeedbackElement.textContent = '';

    // === ATENÇÃO AQUI: REMOVA O setTimeout E OS OBJETOS 'delimiters' ===
    // Remova o bloco setTimeout e os objetos de configuração de delimitadores.
    // Mantenha apenas a chamada direta, como mostrado abaixo:
    if (typeof renderMathInElement !== 'undefined') {
        renderMathInElement(questionTextElement); // APENAS ISSO
        renderMathInElement(optionsContainer);    // APENAS ISSO
    }
    // ==============================================================================

    renderQuestionNavBar(); // Atualiza a barra de navegação de questões
}

// Atualiza o estado dos botões de navegação
prevQuestionBtn.disabled = currentQuestionIndex === 0;
nextQuestionBtn.disabled = currentQuestionIndex === currentQuestions.length - 1;

// Oculta o feedback ao carregar nova questão
simuladoFeedbackElement.style.display = 'none';
simuladoFeedbackElement.textContent = '';


function selectOption(optionIndex) {
    userAnswers[currentQuestionIndex] = optionIndex;
    // Opcional: Atualizar a classe 'selected' imediatamente
    document.querySelectorAll('.option-label').forEach((label, i) => {
        if (i === optionIndex) {
            label.classList.add('selected');
        } else {
            label.classList.remove('selected');
        }
    });
    renderQuestionNavBar(); // <-- ADICIONE ESTA LINHA: Atualiza a barra para marcar como respondida
}

function nextQuestion() {
    if (currentQuestionIndex < currentQuestions.length - 1) {
        currentQuestionIndex++;
        loadQuestion(currentQuestionIndex);
    }
}

function prevQuestion() {
    if (currentQuestionIndex > 0) {
        currentQuestionIndex--;
        loadQuestion(currentQuestionIndex);
    }
}

// Função que será implementada na próxima fase (correção e resultados)
function finishSimulado() {
    stopTimer(); // Para o timer
    console.log('Simulado finalizado! Respostas do usuário:', userAnswers);
    showResults(); // Chama a nova função para exibir os resultados
}

// Função para exibir os resultados (já adicionada na Fase 2/3, mas revisada para clareza)
function showResults() {
    let correctCount = 0;
    // Limpa a área de revisão antes de adicionar os novos itens
    reviewArea.innerHTML = '<h3>Revisão das Questões</h3>';

    currentQuestions.forEach((question, index) => {
        const userAnswer = userAnswers[index];
        const isCorrect = userAnswer === question.respostaCorreta;

        if (isCorrect) {
            correctCount++;
        }

        const questionReviewDiv = document.createElement('div');
        questionReviewDiv.className = 'review-question-item';

        // Enunciado da questão
        const questionStatement = document.createElement('p');
        questionStatement.className = 'question-statement';
        questionStatement.innerHTML = `Questão ${index + 1}: ${question.enunciado}`;
        questionReviewDiv.appendChild(questionStatement);

        // Resposta do usuário
        const userAnswerP = document.createElement('p');
        userAnswerP.className = 'user-answer';
        if (userAnswer !== undefined) { // Se o usuário respondeu
            userAnswerP.textContent = `Sua resposta: ${question.opcoes[userAnswer]}`;
            userAnswerP.classList.add(isCorrect ? 'correct' : 'incorrect');
        } else { // Se o usuário não respondeu
            userAnswerP.textContent = 'Você não respondeu a esta questão.';
            userAnswerP.classList.add('incorrect'); // Considera não respondida como incorreta para fins de feedback visual
        }
        questionReviewDiv.appendChild(userAnswerP);

        // Resposta correta
        const correctAnswerP = document.createElement('p');
        correctAnswerP.className = 'correct-answer';
        correctAnswerP.textContent = `Resposta Correta: ${question.opcoes[question.respostaCorreta]}`;
        questionReviewDiv.appendChild(correctAnswerP);

        // Explicação
        const explanationP = document.createElement('p');
        explanationP.className = 'explanation';
        explanationP.innerHTML = `<strong>Explicação:</strong> ${question.explicacao}`;
        questionReviewDiv.appendChild(explanationP);

        reviewArea.appendChild(questionReviewDiv);

        if (typeof renderMathInElement !== 'undefined') {
            renderMathInElement(reviewArea);
        }
    });

    // Atualiza o resumo da pontuação
    correctAnswersCountElement.textContent = correctCount;
    totalQuestionsCountElement.textContent = currentQuestions.length;
    const scorePercentage = (correctCount / currentQuestions.length) * 100;
    finalScoreElement.textContent = `${scorePercentage.toFixed(2)}%`;

    showResultsContainer(); // Exibe o container de resultados (isso já estava lá)
}


// Função que inicia o simulado para uma categoria específica
function startSimulado(category) {
    if (category === 'basic') {
        currentQuestions = [...basicMathSimuladoQuestions]; // Copia o array para não modificar o original
    } else if (category === 'advanced') {
        currentQuestions = [...advancedMathSimuladoQuestions];
    } else {
        console.error('Categoria de simulado desconhecida:', category);
        return;
    }

    // Embaralha as questões para que cada simulado seja diferente
    // Fisher-Yates (Knuth) shuffle algorithm
    for (let i = currentQuestions.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [currentQuestions[i], currentQuestions[j]] = [currentQuestions[j], currentQuestions[i]];
    }

    currentQuestionIndex = 0;
    userAnswers = new Array(currentQuestions.length).fill(undefined); // Inicializa com undefined
    timeElapsed = 0;
    updateTimerDisplay(); // Reseta o display do timer
    startTimer();

    renderQuestionNavBar(); // <-- ADICIONE ESTA LINHA: Renderiza a barra ao iniciar o simulado

    showSimuladoContainer();
    loadQuestion(currentQuestionIndex);
}

// HTML para as listas de tópicos (ORDEM ATUALIZADA)
const basicTopicListHTML = `
    <h2>Selecione um tópico para começar seus estudos de Matemática Básica.</h2>
    <ul class="topic-list">
        <li><a href="#" data-topic="operacoes-basicas" data-category="basic">Operações Básicas</a></li>
        <li><a href="#" data-topic="numeros-inteiros" data-category="basic">Números Inteiros</a></li>
        <li><a href="#" data-topic="fracoes" data-category="basic">Frações</a></li>
        <li><a href="#" data-topic="regra-de-tres" data-category="basic">Regra de Três</a></li>
        <li><a href="#" data-topic="razao-proporcao" data-category="basic">Razão e Proporção</a></li>
        <li><a href="#" data-topic="porcentagem" data-category="basic">Porcentagem</a></li>
        <li><a href="#" data-topic="potenciacao-radiciacao" data-category="basic">Potenciação e Radiciação</a></li>
        <li><a href="#" data-topic="equacoes" data-category="basic">Equações do 1º e 2º Grau</a></li>
        <li><a href="#" data-topic="estatistica-basica" data-category="basic">Estatística Básica</a></li>
    </ul>
    <button id="start-simulado-btn" data-category="basic" class="nav-button" style="margin-top: 1.5rem;">Iniciar Simulado de Matemática Básica</button>
`;

const advancedTopicListHTML = `
    <h2>Selecione um tópico para começar seus estudos de Matemática Avançada.</h2>
    <ul class="topic-list">
        <li><a href="#" data-topic="funcoes" data-category="advanced">Funções</a></li>
        <li><a href="#" data-topic="geometria-plana" data-category="advanced">Geometria Plana</a></li>
        <li><a href="#" data-topic="geometria-espacial" data-category="advanced">Geometria Espacial</a></li>
        <li><a href="#" data-topic="trigonometria" data-category="advanced">Trigonometria</a></li>
        <li><a href="#" data-topic="geometria-analitica" data-category="advanced">Geometria Analítica</a></li>
        <li><a href="#" data-topic="progressoes" data-category="advanced">Progressões</a></li>
        <li><a href="#" data-topic="matematica-financeira" data-category="advanced">Matemática Financeira</a></li>
        <li><a href="#" data-topic="exponencial-logaritmo" data-category="advanced">Exponencial e Logaritmo</a></li>
        <li><a href="#" data-topic="analise-combinatoria-probabilidade" data-category="advanced">Análise Combinatória e Probabilidade</a></li>
    </ul>
    <button id="start-simulado-btn" data-category="advanced" class="nav-button" style="margin-top: 1.5rem;">Iniciar Simulado de Matemática Avançada</button>
`;

// --- FUNÇÕES DE LOCALSTORAGE ---

// Chave para armazenar os dados no localStorage
const LOCAL_STORAGE_KEY_SIMULADO_HISTORY = 'enem_math_simulado_history';

/**
 * Carrega o histórico de simulados do localStorage.
 * @returns {Array} Um array de objetos de simulado, ou um array vazio se não houver histórico.
 */
function loadSimuladoHistory() {
    try {
        const historyJson = localStorage.getItem(LOCAL_STORAGE_KEY_SIMULADO_HISTORY);
        return historyJson ? JSON.parse(historyJson) : [];
    } catch (e) {
        console.error("Erro ao carregar histórico do localStorage:", e);
        return []; // Retorna um array vazio em caso de erro para não quebrar a aplicação
    }
}

/**
 * Salva um novo resultado de simulado no histórico do localStorage.
 * O histórico é limitado para não sobrecarregar o localStorage do usuário.
 * @param {object} result Objeto contendo os detalhes do simulado.
 */
function saveSimuladoResult(result) {
    const history = loadSimuladoHistory();
    const MAX_HISTORY_ENTRIES = 20; // Limita o histórico a 20 simulados, por exemplo

    // Adiciona o novo resultado ao início do array (mais recente primeiro)
    history.unshift(result);

    // Remove entradas antigas se exceder o limite
    if (history.length > MAX_HISTORY_ENTRIES) {
        history.splice(MAX_HISTORY_ENTRIES);
    }

    try {
        localStorage.setItem(LOCAL_STORAGE_KEY_SIMULADO_HISTORY, JSON.stringify(history));
    } catch (e) {
        console.error("Erro ao salvar histórico no localStorage:", e);
        alert("Não foi possível salvar seu histórico de simulados. Seu navegador pode estar no modo de navegação privada ou o espaço de armazenamento está cheio.");
    }
}

/**
 * Formata o tempo decorrido de segundos para MM:SS.
 * @param {number} totalSeconds Tempo em segundos.
 * @returns {string} Tempo formatado como "MM:SS".
 */
function formatTime(totalSeconds) {
    const minutes = Math.floor(totalSeconds / 60);
    const seconds = totalSeconds % 60;
    return `${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
}


// --- FUNÇÕES DE CONTROLE DE EXIBIÇÃO GERAL ---

// Esta função exibe a interface principal de tópicos
function displayTopicsInterface(category) {
    simuladoContainer.classList.add('hidden');
    resultsContainer.classList.add('hidden');
    conteudo.classList.remove('hidden');
    categorySelector.classList.remove('hidden');

    const headerElement = document.querySelector('header');
    const footerElement = document.querySelector('footer');
    if (headerElement) headerElement.classList.remove('hidden');
    if (footerElement) footerElement.classList.remove('hidden');

    // NOVO: Mostra o botão do histórico
    if (viewHistoryBtn) {
        viewHistoryBtn.style.display = 'block'; // Ou 'flex', dependendo do layout
    }

    if (category === 'advanced') {
        displayAdvancedCategory();
    } else {
        displayBasicCategory();
    }
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

// Esta função exibe a interface do simulado (ocultando outros elementos)
function showSimuladoInterface() {
    conteudo.classList.add('hidden');
    categorySelector.classList.add('hidden');
    const headerElement = document.querySelector('header');
    const footerElement = document.querySelector('footer');
    if (headerElement) headerElement.classList.add('hidden');
    if (footerElement) footerElement.classList.add('hidden');
    resultsContainer.classList.add('hidden');
    simuladoContainer.classList.remove('hidden');
    window.scrollTo({ top: 0, behavior: 'smooth' });

    // NOVO: Oculta o botão do histórico
    if (viewHistoryBtn) {
        viewHistoryBtn.style.display = 'none';
    }
}

// Esta função exibe a interface de resultados (ocultando outros elementos)
function showResultsInterface() {
    simuladoContainer.classList.add('hidden');
    conteudo.classList.add('hidden');
    categorySelector.classList.add('hidden');
    const headerElement = document.querySelector('header');
    const footerElement = document.querySelector('footer');
    if (headerElement) headerElement.classList.add('hidden');
    if (footerElement) footerElement.classList.add('hidden');
    resultsContainer.classList.remove('hidden');
    window.scrollTo({ top: 0, behavior: 'smooth' });

    // NOVO: Oculta o botão do histórico
    if (viewHistoryBtn) {
        viewHistoryBtn.style.display = 'none';
    }
}

// Função para exibir o histórico de simulados
function displaySimuladoHistory() {
    conteudo.classList.remove('hidden');
    categorySelector.classList.add('hidden');
    simuladoContainer.classList.add('hidden');
    resultsContainer.classList.add('hidden');

    const headerElement = document.querySelector('header');
    const footerElement = document.querySelector('footer');
    if (headerElement) headerElement.classList.remove('hidden');
    if (footerElement) footerElement.classList.remove('hidden');

    const history = loadSimuladoHistory(); // Carrega os dados salvos
    let historyHTML = `
        <button onclick="displayTopicsInterface(currentCategory)" class="back-button">← Voltar aos Tópicos</button>
        <h2>📊 Meu Histórico de Simulados</h2>
    `;

    if (history.length === 0) {
        historyHTML += '<p>Você ainda não realizou nenhum simulado. Comece um agora!</p>';
    } else {
        historyHTML += `
            <p>Aqui estão seus resultados anteriores. Você pode acompanhar seu progresso!</p>
            <div class="history-list">
        `;
        // Itera sobre o histórico e cria o HTML para cada entrada
        history.forEach((entry, index) => {
            historyHTML += `
                <div class="history-item">
                    <p><strong>Simulado ${index + 1} (${entry.category})</strong> - ${entry.date}</p>
                    <p>Acertos: ${entry.correct} de ${entry.total} (${entry.percentage}%)</p>
                    <p>Tempo: ${formatTime(entry.time)}</p>
                </div>
            `;
        });
        historyHTML += '</div>'; // Fecha history-list
    }

    conteudo.innerHTML = historyHTML; // Insere o HTML gerado na área de conteúdo
    window.scrollTo({ top: 0, behavior: 'smooth' });
}


// --- FUNÇÕES DO TIMER ---

function updateTimerDisplay() {
    const minutes = Math.floor(timeElapsed / 60);
    const seconds = timeElapsed % 60;
    timerElement.textContent = `Tempo: ${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
}

function startTimer() {
    if (timerRunning) stopTimer();
    timerRunning = true;
    timerInterval = setInterval(() => {
        timeElapsed++;
        updateTimerDisplay();
    }, 1000);
}

function stopTimer() {
    clearInterval(timerInterval);
    timerRunning = false;
}

// NOVO: Função para pausar/continuar o timer
function togglePauseResume() {
    if (timerRunning) {
        stopTimer();
        pauseResumeBtn.textContent = 'Continuar';
        pauseResumeBtn.classList.add('active'); // Mudar cor ou estilo para indicar pausa
        // Opcional: Desabilitar botões de navegação ou opções durante a pausa
        prevQuestionBtn.disabled = true;
        nextQuestionBtn.disabled = true;
        if (checkAnswerBtn) checkAnswerBtn.disabled = true;
        optionsContainer.style.pointerEvents = 'none'; // Desabilita cliques nas opções
    } else {
        startTimer();
        pauseResumeBtn.textContent = 'Pausar';
        pauseResumeBtn.classList.remove('active');
        // Habilitar botões de navegação ou opções novamente
        prevQuestionBtn.disabled = currentQuestionIndex === 0;
        nextQuestionBtn.disabled = currentQuestionIndex === currentQuestions.length - 1;
        if (checkAnswerBtn) checkAnswerBtn.disabled = false; // Reabilita se houver opção selecionada
        optionsContainer.style.pointerEvents = 'auto'; // Habilita cliques nas opções
    }
}


// --- FUNÇÕES DE NAVEGAÇÃO DE QUESTÕES E BARRA DE NAVEGAÇÃO ---

function renderQuestionNavBar() {
    if (!questionNavBar) return; // Garante que o elemento existe
    questionNavBar.innerHTML = '';

    currentQuestions.forEach((question, index) => {
        const navButton = document.createElement('button');
        navButton.classList.add('question-nav-button');
        navButton.textContent = index + 1;

        navButton.addEventListener('click', () => {
            loadQuestion(index);
        });

        if (index === currentQuestionIndex) {
            navButton.classList.add('current');
        }
        if (userAnswers[index] !== undefined) {
            navButton.classList.add('answered');
        }

        questionNavBar.appendChild(navButton);
    });
}

function loadQuestion(index) {
    if (index < 0 || index >= currentQuestions.length) {
        console.error('Índice de questão inválido:', index);
        return;
    }

    currentQuestionIndex = index;
    const question = currentQuestions[currentQuestionIndex];

    questionNumberElement.textContent = `Questão ${currentQuestionIndex + 1} de ${currentQuestions.length}`;
    questionTextElement.innerHTML = question.enunciado; // Usar innerHTML para permitir formatação no enunciado

    optionsContainer.innerHTML = ''; // Limpa as opções anteriores

    question.opcoes.forEach((option, i) => {
        const label = document.createElement('label');
        label.className = 'option-label';
        label.innerHTML = `
            <input type="radio" name="question-${question.id}" value="${i}" ${userAnswers[currentQuestionIndex] === i ? 'checked' : ''}>
            ${option}
        `;
        label.querySelector('input[type="radio"]').addEventListener('change', () => selectOption(i));
        optionsContainer.appendChild(label);
    });

    // Atualiza o estado dos botões de navegação
    prevQuestionBtn.disabled = currentQuestionIndex === 0;
    nextQuestionBtn.disabled = currentQuestionIndex === currentQuestions.length - 1;

    // Oculta o feedback ao carregar nova questão
    simuladoFeedbackElement.style.display = 'none';
    simuladoFeedbackElement.textContent = '';

    if (typeof renderMathInElement !== 'undefined') {
        renderMathInElement(questionTextElement);
        renderMathInElement(optionsContainer);
    }

    renderQuestionNavBar(); // Atualiza a barra de navegação de questões
}

function selectOption(optionIndex) {
    userAnswers[currentQuestionIndex] = optionIndex;
    document.querySelectorAll('.option-label').forEach((label, i) => {
        if (i === optionIndex) {
            label.classList.add('selected');
        } else {
            label.classList.remove('selected');
        }
    });
    renderQuestionNavBar(); // Atualiza a barra para refletir a resposta
}

function nextQuestion() {
    if (currentQuestionIndex < currentQuestions.length - 1) {
        currentQuestionIndex++;
        loadQuestion(currentQuestionIndex);
    }
}

function prevQuestion() {
    if (currentQuestionIndex > 0) {
        currentQuestionIndex--;
        loadQuestion(currentQuestionIndex);
    }
}


// --- FUNÇÕES DO SIMULADO PRINCIPAL ---

function startSimulado(category) {
    if (category === 'basic') {
        currentQuestions = [...basicMathSimuladoQuestions];
    } else if (category === 'advanced') {
        currentQuestions = [...advancedMathSimuladoQuestions];
    } else {
        console.error('Categoria de simulado desconhecida:', category);
        return;
    }

    // Embaralha as questões
    for (let i = currentQuestions.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [currentQuestions[i], currentQuestions[j]] = [currentQuestions[j], currentQuestions[i]];
    }

    currentQuestionIndex = 0;
    userAnswers = new Array(currentQuestions.length).fill(undefined);
    timeElapsed = 0;
    updateTimerDisplay();
    startTimer();

    showSimuladoInterface(); // Exibe apenas a interface do simulado
    renderQuestionNavBar(); // Renderiza a barra ao iniciar o simulado
    loadQuestion(currentQuestionIndex); // Carrega a primeira questão

    // NOVO: Define o texto inicial do botão de Pausar/Continuar
    if (pauseResumeBtn) {
        pauseResumeBtn.textContent = 'Pausar';
        pauseResumeBtn.classList.remove('active');
    }
}

function finishSimulado() {
    stopTimer();

    // Calcula a pontuação para salvar
    let correctCount = 0;
    currentQuestions.forEach((question, index) => {
        if (userAnswers[index] === question.respostaCorreta) {
            correctCount++;
        }
    });

    const totalQuestions = currentQuestions.length;
    const scorePercentage = (correctCount / totalQuestions) * 100;
    const dateFinished = new Date().toLocaleString('pt-BR', { dateStyle: 'short', timeStyle: 'short' });

    // Crie o objeto de resultado do simulado
    const simuladoResult = {
        date: dateFinished,
        category: currentCategory === 'basic' ? 'Matemática Básica' : 'Matemática Avançada',
        correct: correctCount,
        total: totalQuestions,
        percentage: parseFloat(scorePercentage.toFixed(2)),
        time: timeElapsed // Salva o tempo em segundos
    };

    saveSimuladoResult(simuladoResult); // Salva o resultado no localStorage

    console.log('Simulado finalizado! Resultado:', simuladoResult); // Para debugging

    showResultsInterface(); // Exibe a interface de resultados
    // Renderiza equações com KaTeX na área de revisão (chamado dentro de showResults)
    showResults(); // Preenche os resultados e revisão
}

function showResults() {
    let correctCount = 0;
    reviewArea.innerHTML = '<h3>Revisão das Questões</h3>'; // Limpa e adiciona o título

    currentQuestions.forEach((question, index) => {
        const userAnswer = userAnswers[index];
        const isCorrect = userAnswer === question.respostaCorreta;

        if (isCorrect) {
            correctCount++;
        }

        const questionReviewDiv = document.createElement('div');
        questionReviewDiv.className = 'review-question-item';

        const questionStatement = document.createElement('p');
        questionStatement.className = 'question-statement';
        questionStatement.innerHTML = `Questão ${index + 1}: ${question.enunciado}`;
        questionReviewDiv.appendChild(questionStatement);

        const userAnswerP = document.createElement('p');
        userAnswerP.className = 'user-answer';
        if (userAnswer !== undefined) {
            userAnswerP.textContent = `Sua resposta: ${question.opcoes[userAnswer]}`;
            userAnswerP.classList.add(isCorrect ? 'correct' : 'incorrect');
        } else {
            userAnswerP.textContent = 'Você não respondeu a esta questão.';
            userAnswerP.classList.add('incorrect');
        }
        questionReviewDiv.appendChild(userAnswerP);

        const correctAnswerP = document.createElement('p');
        correctAnswerP.className = 'correct-answer';
        correctAnswerP.textContent = `Resposta Correta: ${question.opcoes[question.respostaCorreta]}`;
        questionReviewDiv.appendChild(correctAnswerP);

        const explanationP = document.createElement('p');
        explanationP.className = 'explanation';
        explanationP.innerHTML = `<strong>Explicação:</strong> ${question.explicacao}`;
        questionReviewDiv.appendChild(explanationP);

        reviewArea.appendChild(questionReviewDiv);
    });

    correctAnswersCountElement.textContent = correctCount;
    totalQuestionsCountElement.textContent = currentQuestions.length;
    const scorePercentage = (correctCount / currentQuestions.length) * 100;
    finalScoreElement.textContent = `${scorePercentage.toFixed(2)}%`;

    // Renderiza equações com KaTeX na área de revisão
    if (typeof renderMathInElement !== 'undefined') {
        renderMathInElement(reviewArea);
    }
}


// --- FUNÇÕES DE NAVEGAÇÃO ENTRE CATEGORIAS E TÓPICOS (PÁGINA PRINCIPAL) ---

function displayBasicCategory() {
    conteudo.innerHTML = basicTopicListHTML;
    currentCategory = 'basic';
    btnBasicMath.classList.add('active');
    btnAdvancedMath.classList.remove('active');
    attachTopicClickListeners();
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

function displayAdvancedCategory() {
    conteudo.innerHTML = advancedTopicListHTML;
    currentCategory = 'advanced';
    btnAdvancedMath.classList.add('active');
    btnBasicMath.classList.remove('active');
    attachTopicClickListeners();
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

function attachTopicClickListeners() {
    document.querySelectorAll('.topic-list a').forEach(link => {
        link.removeEventListener('click', handleTopicClick);
        link.addEventListener('click', handleTopicClick);
    });
}

function handleTopicClick(e) {
    e.preventDefault();
    const topico = this.getAttribute('data-topic');
    const category = this.getAttribute('data-category');

    let currentTopicsData;
    if (category === 'basic') {
        currentTopicsData = basicTopicsData;
    } else if (category === 'advanced') {
        currentTopicsData = advancedTopicsData;
    } else {
        console.error('Categoria de tópico desconhecida:', category);
        return;
    }

    if (currentTopicsData[topico]) {
        conteudo.innerHTML = `
            <button onclick="returnToCategoryList('${category}')" class="back-button">← Voltar aos Tópicos da Categoria</button>
            <h2>${currentTopicsData[topico].titulo}</h2>
            ${currentTopicsData[topico].texto}
        `;
        categorySelector.classList.add('hidden');
    } else {
        conteudo.innerHTML = `
            <button onclick="returnToCategoryList('${category}')" class="back-button">← Voltar aos Tópicos da Categoria</button>
            <h2>Tópico em Desenvolvimento</h2>
            <p>O conteúdo para "${topico}" na categoria de Matemática ${category === 'basic' ? 'Básica' : 'Avançada'} ainda está sendo preparado. Volte em breve!</p>
        `;
        categorySelector.classList.add('hidden');
    }
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

function returnToCategoryList(category) {
    // Redireciona para a URL base da categoria para garantir estado limpo
    window.location.href = `matemática.html?category=${category}`;
}

// Abre o simulado em uma nova aba com parâmetros de URL
function openSimuladoInNewTab(category) {
    const url = `matemática.html?mode=simulado&category=${category}`;
    window.open(url, '_blank');
}


// --- INICIALIZAÇÃO DA APLICAÇÃO ---
document.addEventListener('DOMContentLoaded', () => {
    // Adiciona event listeners para os botões de categoria (sempre presentes)
    btnBasicMath.addEventListener('click', () => displayTopicsInterface('basic')); // Chamar displayTopicsInterface
    btnAdvancedMath.addEventListener('click', () => displayTopicsInterface('advanced')); // Chamar displayTopicsInterface

    // Delegação de eventos para os botões de iniciar simulado (que são dinâmicos)
    document.body.addEventListener('click', (e) => {
        if (e.target.id === 'start-simulado-btn') {
            const category = e.target.getAttribute('data-category');
            openSimuladoInNewTab(category);
        }
    });

    // Event listeners para os botões de navegação dentro do simulado
    if (prevQuestionBtn) prevQuestionBtn.addEventListener('click', prevQuestion);
    if (nextQuestionBtn) nextQuestionBtn.addEventListener('click', nextQuestion);
    if (finishSimuladoBtn) finishSimuladoBtn.addEventListener('click', finishSimulado);

    // Event listener para o botão de "Fazer Novo Simulado" na tela de resultados
    if (startNewSimuladoBtn) { // Verifica se o botão existe
        startNewSimuladoBtn.addEventListener('click', () => {
            // Volta para a tela inicial da categoria atual
            window.location.href = `matemática.html?category=${currentCategory}`;
        });
    }

    // Event Listener para o botão Pausar/Continuar
    if (pauseResumeBtn) {
        pauseResumeBtn.addEventListener('click', togglePauseResume);
    }

    // Event Listener para o botão "Ver Meu Histórico de Simulados"
    if (viewHistoryBtn) {
        viewHistoryBtn.addEventListener('click', displaySimuladoHistory);
    }

    // Lógica principal de controle de qual interface exibir ao carregar a página
    const urlParams = new URLSearchParams(window.location.search);
    const mode = urlParams.get('mode');
    const categoryFromUrl = urlParams.get('category');

    if (mode === 'simulado' && (categoryFromUrl === 'basic' || categoryFromUrl === 'advanced')) {
        // Se a página foi carregada no MODO SIMULADO
        currentCategory = categoryFromUrl; // Define a categoria globalmente
        showSimuladoInterface(); // Exibe apenas a interface do simulado
        startSimulado(currentCategory); // Inicia o simulado com as questões certas
    } else {
        // Se a página foi carregada no MODO TÓPICOS (normal)
        currentCategory = categoryFromUrl || 'basic'; // Define a categoria ou padrão para basic
        displayTopicsInterface(currentCategory); // Exibe a interface de tópicos
    }
});

// --- FUNÇÕES DE VERIFICAÇÃO DE EXERCÍCIOS ---
// Mantenha todas as suas funções de verificação aqui, como estavam, por exemplo:

function verificarRespostaInteiros() {
    const resposta = document.getElementById('resposta-inteiros')?.value;
    const feedback = document.getElementById('feedback-inteiros');
    if (!feedback) return;
    if (resposta === "-70" || resposta === "-70.0") {
        feedback.textContent = "Correto! O submarino está a -70 metros.";
        feedback.style.color = "green";
    } else {
        feedback.textContent = "Lembre-se que subir significa adicionar. Se você está em −150 e sobe 80, você se aproxima do zero.";
        feedback.style.color = "red";
    }
}

// NOVAS FUNÇÕES DE VERIFICAÇÃO PARA "OPERAÇÕES BÁSICAS"
function verificarOpBasica1() {
    const resposta = document.getElementById('resposta-opbas-ex1')?.value.trim();
    const feedback = document.getElementById('feedback-opbas-ex1');
    if (!feedback) return;

    // Expressão: 10 + 4 × (7 - 2) ÷ 2
    // 1. Parênteses: (7 - 2) = 5
    // Expressão fica: 10 + 4 × 5 ÷ 2
    // 2. Multiplicação: 4 × 5 = 20
    // Expressão fica: 10 + 20 ÷ 2
    // 3. Divisão: 20 ÷ 2 = 10
    // Expressão fica: 10 + 10
    // 4. Adição: 10 + 10 = 20
    if (parseFloat(resposta) === 20) {
        feedback.textContent = "Correto! O resultado é 20. Lembre-se da ordem: Parênteses, Multiplicação/Divisão (esquerda para direita), Adição/Subtração (esquerda para direita).";
        feedback.style.color = "green";
    } else {
        feedback.textContent = "Incorreto. Revise a ordem das operações (PEMDAS/Parênteses, Expoentes, Multiplicação/Divisão, Adição/Subtração).";
        feedback.style.color = "red";
    }
}

function verificarOpBasica2() {
    const resposta = document.getElementById('resposta-opbas-ex2')?.value.trim();
    const feedback = document.getElementById('feedback-opbas-ex2');
    if (!feedback) return;

    // Saldo inicial: R$ 500
    // Depósitos: 3 * 120 = 360
    // Saldo após depósitos: 500 + 360 = 860
    // Pagamentos: 2 * 80 = 160
    // Saldo final: 860 - 160 = 700
    if (parseFloat(resposta) === 700) {
        feedback.textContent = "Correto! O saldo final do caixa é R$ 700,00.";
        feedback.style.color = "green";
    } else {
        feedback.textContent = "Incorreto. Calcule o total de depósitos e pagamentos. Depois, ajuste o saldo inicial.";
        feedback.style.color = "red";
    }
}

function verificarOpBasica3() {
    const resposta = document.getElementById('resposta-opbas-ex3')?.value.trim();
    const feedback = document.getElementById('feedback-opbas-ex3');
    if (!feedback) return;

    // Custo dos lápis: 20 * 2.50 = 50.00
    // Custo das canetas: 15 * 3.00 = 45.00
    // Gasto total: 50.00 + 45.00 = 95.00
    // Troco: 100.00 - 95.00 = 5.00
    if (parseFloat(resposta) === 5.00) {
        feedback.textContent = "Correto! A professora recebeu R$ 5,00 de troco.";
        feedback.style.color = "green";
    } else {
        feedback.textContent = "Incorreto. Calcule o gasto total com lápis e canetas. Depois, subtraia esse valor do dinheiro pago.";
        feedback.style.color = "red";
    }
}

// --- Funções de Verificação (Revisada para o novo exercício de frações) ---

function verificarRespostaFracoes() {
    const respostaA = document.getElementById('resposta-fracoes-a')?.value.trim();
    const respostaB = document.getElementById('resposta-fracoes-b')?.value.trim();
    const feedback = document.getElementById('feedback-fracoes');

    if (!feedback) return;

    let corretoA = false;
    let corretoB = false;

    // Normaliza a resposta para aceitar "espaços" e garantir "minúsculas" para casos mais complexos.
    // Embora para 5/6 e 1/6 não seja tão crítico.
    const normalizeFracao = (fracao) => {
        if (!fracao) return '';
        return fracao.replace(/\s/g, '').toLowerCase(); // Remove espaços e converte para minúsculas
    };

    if (normalizeFracao(respostaA) === "7/12") {
        corretoA = true;
    }

    if (normalizeFracao(respostaB) === "5/12") {
        corretoB = true;
    }

    if (corretoA && corretoB) {
        feedback.textContent = "Correto! Letra a) 7/12 do bolo foi comida. Letra b) 5/12 do bolo sobrou.";
        feedback.style.color = "green";
    } else if (corretoA) {
        feedback.textContent = "A resposta da letra 'a' está correta (7/12), mas a da 'b' está incorreta. Revise o quanto sobrou!";
        feedback.style.color = "orange"; // Sinaliza parcial
    } else if (corretoB) {
        feedback.textContent = "A resposta da letra 'b' está correta (5/12), mas a da 'a' está incorreta. Revise a soma do que foi comido!";
        feedback.style.color = "orange"; // Sinaliza parcial
    }
    else {
        feedback.textContent = "Incorreto. Revise a adição de frações com denominadores diferentes (para 'a') e a subtração de frações (para 'b').";
        feedback.style.color = "red";
    }
}

// --- Funções de Verificação (Revisada para o novo exercício de porcentagem) ---

function verificarRespostaPorcentagem() {
    const resposta = document.getElementById('resposta-porcentagem')?.value.trim();
    const feedback = document.getElementById('feedback-porcentagem');

    if (!feedback) return;

    const respostaNumerica = parseFloat(resposta);

    // Faturamento do primeiro mês: R$ 50.000,00
    // Aumento de 15% no segundo mês: 50000 * 0.15 = 7500
    // Faturamento do segundo mês: 50000 + 7500 = 57500
    // Faturamento total nos dois meses: 50000 + 57500 = 107500

    if (respostaNumerica === 107500) {
        feedback.textContent = "Correto! O faturamento do segundo mês foi R$ 57.500,00, totalizando R$ 107.500,00 nos dois meses.";
        feedback.style.color = "green";
    } else {
        feedback.textContent = "Incorreto. Primeiro, calcule o faturamento do segundo mês (com 15% de aumento). Depois, some o faturamento dos dois meses para ter o total.";
        feedback.style.color = "red";
    }
}

// --- Funções de Verificação (Revisadas e com novos IDs para Regra de Três) ---

// Para Regra de Três Simples
function verificarRegra1() {
    const resposta = document.getElementById('resposta-regra-s1')?.value.trim();
    const feedback = document.getElementById('feedback-regra-s1');
    if (!feedback) return;

    // Pizzas e Farinha são DP
    // 12 pizzas -- 1.5 kg
    // 20 pizzas -- x kg
    // 12/20 = 1.5/x => 12x = 20 * 1.5 => 12x = 30 => x = 2.5
    if (parseFloat(resposta) === 2.5) {
        feedback.textContent = "Correto! Serão necessários 2,5 kg de farinha.";
        feedback.style.color = "green";
    } else {
        feedback.textContent = "Incorreto. A quantidade de pizzas e de farinha são diretamente proporcionais.";
        feedback.style.color = "red";
    }
}

function verificarRegra2() {
    const resposta = document.getElementById('resposta-regra-s2')?.value.trim();
    const feedback = document.getElementById('feedback-regra-s2');
    if (!feedback) return;

    // Velocidade e Tempo são IP
    // 60 km/h -- 4 h
    // 80 km/h -- x h
    // 60 * 4 = 80 * x => 240 = 80x => x = 3
    if (parseFloat(resposta) === 3) {
        feedback.textContent = "Correto! O caminhão levaria 3 horas. (Mais velocidade, menos tempo. Grandezas IP).";
        feedback.style.color = "green";
    } else {
        feedback.textContent = "Incorreto. Velocidade e tempo são inversamente proporcionais. Se a velocidade aumenta, o tempo diminui.";
        feedback.style.color = "red";
    }
}


function verificarRegra3() {
    const resposta = document.getElementById('resposta-regra-s3')?.value.trim();
    const feedback = document.getElementById('feedback-regra-s3');
    if (!feedback) return;

    // Km e Minutos são DP
    // 5 km -- 25 min
    // 8 km -- x min
    // 5/8 = 25/x => 5x = 8 * 25 => 5x = 200 => x = 40
    if (parseFloat(resposta) === 40) {
        feedback.textContent = "Correto! Levará 40 minutos para correr 8 km.";
        feedback.style.color = "green";
    } else {
        feedback.textContent = "Incorreto. Distância e tempo são diretamente proporcionais. Quanto maior a distância, maior o tempo.";
        feedback.style.color = "red";
    }
}

// Para Regra de Três Composta
function verificarRegra4() {
    const resposta = document.getElementById('resposta-regra-c1')?.value.trim();
    const feedback = document.getElementById('feedback-regra-c1');
    if (!feedback) return;

    // Máquinas (6->8): DP com Peças. (8/6)
    // Dias (5->3): DP com Peças. (3/5)
    // Horas/Dia (8->10): DP com Peças. (10/8)
    // Peças (1800->x)
    // x / 1800 = (8/6) * (3/5) * (10/8)
    // x / 1800 = (4/3) * (3/5) * (5/4)
    // x / 1800 = (4 * 3 * 5) / (3 * 5 * 4) = 60/60 = 1
    // x = 1800.
    if (parseFloat(resposta) === 1800) {
        feedback.textContent = "Correto! Serão produzidas 1.800 peças.";
        feedback.style.color = "green";
    } else {
        feedback.textContent = "Incorreto. Analise a proporcionalidade de cada grandeza com as 'peças' e monte a proporção corretamente. Revise a multiplicação das frações.";
        feedback.style.color = "red";
    }
}

function verificarRegra5() {
    const resposta = document.getElementById('resposta-regra-c2')?.value.trim();
    const feedback = document.getElementById('feedback-regra-c2');
    if (!feedback) return;

    // Casas (50->90): DP com Dias (se considerarmos a proporção de pintores/tempo para "casas por pintor/dia").
    // Pintores (10->15): IP com Dias. (10/15)
    // Dias (15->x)
    // x / 15 = (90/50) * (10/15)
    // x / 15 = (9/5) * (2/3)
    // x / 15 = 18 / 15
    // x = 18
    if (parseFloat(resposta) === 18) {
        feedback.textContent = "Correto! Levariam 18 dias.";
        feedback.style.color = "green";
    } else {
        feedback.textContent = "Incorreto. Mais casas significa mais dias (DP). Mais pintores significa menos dias (IP). Monte a proporção e resolva.";
        feedback.style.color = "red";
    }
}

function verificarRegra6() {
    const resposta = document.getElementById('resposta-regra-c3')?.value.trim();
    const feedback = document.getElementById('feedback-regra-c3');
    if (!feedback) return;

    // Professores (4->x)
    // Provas (300->500): DP com Professores (mais provas, mais professores)
    // Horas (6->5): IP com Professores (menos horas, mais professores)
    // x / 4 = (500/300) * (6/5)
    // x / 4 = (5/3) * (6/5)
    // x / 4 = 30 / 15
    // x / 4 = 2
    // x = 8
    if (parseFloat(resposta) === 8) {
        feedback.textContent = "Correto! Seriam necessários 8 professores.";
        feedback.style.color = "green";
    } else {
        feedback.textContent = "Incorreto. Analise a proporcionalidade de cada grandeza com 'professores' e monte a proporção, invertendo as grandezas inversas.";
        feedback.style.color = "red";
    }
}

// --- Funções de Verificação (Revisadas e com novos IDs para Razão e Proporção) ---

// Para Razão
function verificarRazao1() {
    const resposta = document.getElementById('resposta-razao-ex1')?.value.trim();
    const feedback = document.getElementById('feedback-razao-ex1');
    if (!feedback) return;

    // Total de alunos = 40. Meninos = 16. Meninas = 40 - 16 = 24.
    // Razão Meninas para Total = 24/40. Simplificando por 8, dá 3/5.
    if (resposta === "3/5") {
        feedback.textContent = "Correto! A razão de meninas para o total é 24/40, que simplificado é 3/5.";
        feedback.style.color = "green";
    } else {
        feedback.textContent = "Incorreto. Primeiro, calcule o número de meninas. Depois, monte a razão (meninas / total) e simplifique.";
        feedback.style.color = "red";
    }
}

function verificarRazao2() {
    const resposta = document.getElementById('resposta-razao-ex2')?.value.trim();
    const feedback = document.getElementById('feedback-razao-ex2');
    if (!feedback) return;

    // 1:250.000 significa 1 cm no mapa = 250.000 cm na realidade.
    // 1 km = 100.000 cm.
    // 250.000 cm / 100.000 cm/km = 2.5 km.
    if (parseFloat(resposta) === 2.5) {
        feedback.textContent = "Correto! 1 cm no mapa representa 2,5 km na realidade (250.000 cm = 2,5 km).";
        feedback.style.color = "green";
    } else {
        feedback.textContent = "Incorreto. Lembre-se que 1 km = 100.000 cm. Divida a quantidade de cm da realidade por 100.000 para obter km.";
        feedback.style.color = "red";
    }
}

function verificarRazao3() {
    const resposta = document.getElementById('resposta-razao-ex3')?.value.trim();
    const feedback = document.getElementById('feedback-razao-ex3');
    if (!feedback) return;

    // Razão Farinha : Açúcar = 3:2
    // Se usar 6 xícaras de farinha (o dobro de 3), então precisa do dobro de açúcar.
    // 2 * 2 = 4 xícaras de açúcar.
    if (parseFloat(resposta) === 4) {
        feedback.textContent = "Correto! Para 6 xícaras de farinha (o dobro de 3), você precisará do dobro de açúcar (2x2 = 4 xícaras).";
        feedback.style.color = "green";
    } else {
        feedback.textContent = "Incorreto. A razão entre farinha e açúcar deve ser mantida. Se a farinha dobrou, o açúcar também deve dobrar.";
        feedback.style.color = "red";
    }
}

// Para Proporção
function verificarProporcao1() {
    const resposta = document.getElementById('resposta-proporcao-ex1')?.value.trim();
    const feedback = document.getElementById('feedback-proporcao-ex1');
    if (!feedback) return;

    // Grandezas diretamente proporcionais (Km e Horas)
    // 12 km / 1.5 h = x km / 2 h
    // 1.5 * x = 12 * 2
    // 1.5x = 24
    // x = 24 / 1.5 = 16
    if (parseFloat(resposta) === 16) {
        feedback.textContent = "Correto! O atleta correrá 16 km. (12 km / 1.5h = 8 km/h. Então, 8 km/h * 2h = 16 km).";
        feedback.style.color = "green";
    } else {
        feedback.textContent = "Incorreto. Distância e tempo são grandezas diretamente proporcionais. Monte a proporção e multiplique cruzado.";
        feedback.style.color = "red";
    }
}

function verificarProporcao2() {
    const resposta = document.getElementById('resposta-proporcao-ex2')?.value.trim();
    const feedback = document.getElementById('feedback-proporcao-ex2');
    if (!feedback) return;

    // Grandezas inversamente proporcionais (Torneiras e Horas)
    // 3 torneiras * 10 horas = 5 torneiras * x horas
    // 30 = 5x
    // x = 30 / 5 = 6
    if (parseFloat(resposta) === 6) {
        feedback.textContent = "Correto! Levarão 6 horas. (Mais torneiras, menos tempo. Multiplique em linha reta: 3 * 10 = 5 * x).";
        feedback.style.color = "green";
    } else {
        feedback.textContent = "Incorreto. Torneiras e tempo são grandezas inversamente proporcionais. Se o número de torneiras aumenta, o tempo diminui.";
        feedback.style.color = "red";
    }
}

function verificarProporcao3() {
    const resposta = document.getElementById('resposta-proporcao-ex3')?.value.trim();
    const feedback = document.getElementById('feedback-proporcao-ex3');
    if (!feedback) return;

    // Razão Açúcar : Farinha = 1:4
    // 1/4 = x / 240g
    // 4x = 240
    // x = 240 / 4 = 60
    if (parseFloat(resposta) === 60) {
        feedback.textContent = "Correto! Você deve usar 60g de açúcar. (1/4 = x/240 -> 4x = 240 -> x = 60).";
        feedback.style.color = "green";
    } else {
        feedback.textContent = "Incorreto. Mantenha a proporção entre açúcar e farinha. Monte a razão e resolva.";
        feedback.style.color = "red";
    }
}

// --- Funções de Verificação (Revisadas e com novos IDs para Potenciação e Radiciação) ---

// Para Potenciação
function verificarPot1() {
    const resposta = document.getElementById('resposta-pot-ex1')?.value.trim();
    const feedback = document.getElementById('feedback-pot-ex1');
    if (!feedback) return;

    // (-2)^3 = -8
    // (-5)^2 = 25
    // -8 + 25 = 17
    if (parseFloat(resposta) === 17) {
        feedback.textContent = "Correto! (−2)³ = −8 e (−5)² = 25. Então, −8 + 25 = 17.";
        feedback.style.color = "green";
    } else {
        feedback.textContent = "Incorreto. Cuidado com os sinais na potenciação: base negativa com expoente ímpar é negativo; com expoente par é positivo.";
        feedback.style.color = "red";
    }
}

function verificarPot2() {
    const resposta = document.getElementById('resposta-pot-ex2')?.value.trim();
    const feedback = document.getElementById('feedback-pot-ex2');
    if (!feedback) return;

    // (3^7 * 3^-4) / (3^2)
    // Numerador: 3^(7 + (-4)) = 3^3
    // Divisão: 3^3 / 3^2 = 3^(3 - 2) = 3^1 = 3
    if (parseFloat(resposta) === 3) {
        feedback.textContent = "Correto! Primeiro, some os expoentes na multiplicação. Depois, subtraia na divisão. O resultado é 3.";
        feedback.style.color = "green";
    } else {
        feedback.textContent = "Incorreto. Revise as propriedades de multiplicação e divisão de potências de mesma base.";
        feedback.style.color = "red";
    }
}

function verificarPot3() {
    const resposta = document.getElementById('resposta-pot-ex3')?.value.trim();
    const feedback = document.getElementById('feedback-pot-ex3');
    if (!feedback) return;

    // 4^-1 = 1/4 = 0.25
    // 5^0 = 1
    // 1 * 2 = 2
    // 0.25 + 2 = 2.25
    if (respostasIguais(resposta, 2.25, "9/4")) { // Usei respostasIguais para aceitar 2.25 ou "9/4"
        feedback.textContent = "Correto! 4<sup>-1</sup> = 1/4 = 0.25. 5<sup>0</sup> = 1. Então 0.25 + (1 × 2) = 2.25 (ou 9/4).";
        feedback.style.color = "green";
    } else {
        feedback.textContent = "Incorreto. Lembre-se que expoente negativo inverte a base, e qualquer número elevado a zero é 1.";
        feedback.style.color = "red";
    }
}

// Para Radiciação
function verificarRad1() {
    const resposta = document.getElementById('resposta-rad-ex1')?.value.trim();
    const feedback = document.getElementById('feedback-rad-ex1');
    if (!feedback) return;

    // √(4 + 5) = √9 = 3
    // ³√(1000) = 10
    // 3 + 10 = 13
    if (parseFloat(resposta) === 13) {
        feedback.textContent = "Correto! √(4+5) = √9 = 3. E ³√1000 = 10. Somando: 3 + 10 = 13.";
        feedback.style.color = "green";
    } else {
        feedback.textContent = "Incorreto. Lembre-se de resolver a operação dentro da raiz primeiro. Calcule as raízes e depois some.";
        feedback.style.color = "red";
    }
}

function verificarRad2() {
    const resposta = document.getElementById('resposta-rad-ex2')?.value.trim().replace(/\s/g, ""); // Remove espaços
    const feedback = document.getElementById('feedback-rad-ex2');
    if (!feedback) return;

    // √75 = √(25 * 3) = √25 * √3 = 5√3
    if (resposta === "5√3" || resposta === "5raiz3" || resposta.toLowerCase() === "5sqrt3") { // Adicionei 'sqrt' como opção
        feedback.textContent = "Correto! √75 = √25 × √3 = 5√3.";
        feedback.style.color = "green";
    } else {
        feedback.textContent = "Incorreto. Fatore 75 em 25×3 e extraia a raiz do fator quadrado perfeito.";
        feedback.style.color = "red";
    }
}

function verificarRad3() {
    const resposta = document.getElementById('resposta-rad-ex3')?.value.trim();
    const feedback = document.getElementById('feedback-rad-ex3');
    if (!feedback) return;

    // Área do quadrado = Lado * Lado = Lado^2
    // Se Lado^2 = 144, então Lado = √144 = 12
    if (parseFloat(resposta) === 12) {
        feedback.textContent = "Correto! O lado do quadrado é a raiz quadrada da área: √144 = 12 cm.";
        feedback.style.color = "green";
    } else {
        feedback.textContent = "Incorreto. A medida do lado de um quadrado é a raiz quadrada de sua área.";
        feedback.style.color = "red";
    }
}


// --- Funções de Verificação (Revisadas e com novos IDs para Equações) ---

// Para Equações do 1º Grau
function verificarEq1g1() {
    const resposta = document.getElementById('resposta-eq1g-ex1')?.value.trim();
    const feedback = document.getElementById('feedback-eq1g-ex1');
    if (!feedback) return;

    // 7x - 10 = 32
    // 7x = 32 + 10
    // 7x = 42
    // x = 42 / 7 = 6
    if (parseFloat(resposta) === 6) {
        feedback.textContent = "Correto! x = 6. (Isole x somando 10 e depois dividindo por 7).";
        feedback.style.color = "green";
    } else {
        feedback.textContent = "Incorreto. Lembre-se de isolar a incógnita. Primeiro, adicione 10 a ambos os lados. Depois, divida por 7.";
        feedback.style.color = "red";
    }
}

function verificarEq1g2() {
    const resposta = document.getElementById('resposta-eq1g-ex2')?.value.trim();
    const feedback = document.getElementById('feedback-eq1g-ex2');
    if (!feedback) return;

    // 2(x + 5) = 16
    // 2x + 10 = 16
    // 2x = 16 - 10
    // 2x = 6
    // x = 3
    if (parseFloat(resposta) === 3) {
        feedback.textContent = "Correto! x = 3. (Aplique a distributiva, isole x, depois divida).";
        feedback.style.color = "green";
    } else {
        feedback.textContent = "Incorreto. Primeiro, aplique a propriedade distributiva (multiplique o 2 pelos termos dentro do parêntese). Depois, isole x.";
        feedback.style.color = "red";
    }
}


function verificarEq1g3() {
    const resposta = document.getElementById('resposta-eq1g-ex3')?.value.trim();
    const feedback = document.getElementById('feedback-eq1g-ex3');
    if (!feedback) return;

    // "o triplo de um número subtraído de 5" => 3x - 5
    // "o dobro desse número somado com 2" => 2x + 2
    // 3x - 5 = 2x + 2
    // 3x - 2x = 2 + 5
    // x = 7
    if (parseFloat(resposta) === 7) {
        feedback.textContent = "Correto! O número é 7. (A equação é 3x - 5 = 2x + 2).";
        feedback.style.color = "green";
    } else {
        feedback.textContent = "Incorreto. Tente traduzir o problema para uma equação: 3x - 5 = 2x + 2. Depois, resolva para x.";
        feedback.style.color = "red";
    }
}

// Para Equações do 2º Grau
function verificarEq2g1() {
    const resposta = document.getElementById('resposta-eq2g-ex1')?.value.trim().replace(/\s/g, "").replace(/,/g, ".");
    const feedback = document.getElementById('feedback-eq2g-ex1');
    if (!feedback) return;

    // x^2 - 8x + 15 = 0
    // a=1, b=-8, c=15
    // Delta = (-8)^2 - 4(1)(15) = 64 - 60 = 4
    // x = [ -(-8) +/- sqrt(4) ] / 2(1)
    // x = [ 8 +/- 2 ] / 2
    // x' = (8 + 2) / 2 = 10 / 2 = 5
    // x'' = (8 - 2) / 2 = 6 / 2 = 3
    // Soluções em ordem crescente: "3,5"
    if (resposta === "3,5" || resposta === "3.5") { // Aceita vírgula ou ponto
        feedback.textContent = "Correto! As soluções são 3 e 5. Use a Fórmula de Bhaskara para encontrar as raízes.";
        feedback.style.color = "green";
    } else {
        feedback.textContent = "Incorreto. Lembre-se de usar a Fórmula de Bhaskara. (a=1, b=-8, c=15). Delta = 4. Raízes: (8±2)/2.";
        feedback.style.color = "red";
    }
}


function verificarEq2g2() {
    const resposta = document.getElementById('resposta-eq2g-ex2')?.value.trim().replace(/\s/g, "").replace(/,/g, ".");
    const feedback = document.getElementById('feedback-eq2g-ex2');
    if (!feedback) return;

    // 5x^2 = 45
    // x^2 = 45 / 5
    // x^2 = 9
    // x = +/- sqrt(9)
    // x = 3 ou x = -3
    // Soluções em ordem crescente: "-3,3"
    if (resposta === "-3,3" || resposta === "-3.3") {
        feedback.textContent = "Correto! As soluções são -3 e 3. Isole o x² e depois tire a raiz quadrada, lembrando das duas possibilidades (positiva e negativa).";
        feedback.style.color = "green";
    } else {
        feedback.textContent = "Incorreto. Esta é uma equação do 2º grau incompleta (b=0). Isole x² e depois extraia a raiz quadrada (lembre-se das duas soluções!).";
        feedback.style.color = "red";
    }
}


function verificarEq2g3() {
    const resposta = document.getElementById('resposta-eq2g-ex3')?.value.trim().replace(/\s/g, "").replace(/,/g, ".");
    const feedback = document.getElementById('feedback-eq2g-ex3');
    if (!feedback) return;

    // 2x^2 - 6x = 0
    // Coloque 2x em evidência: 2x(x - 3) = 0
    // 2x = 0 => x = 0
    // x - 3 = 0 => x = 3
    // Soluções em ordem crescente: "0,3"
    if (resposta === "0,3" || resposta === "0.3") {
        feedback.textContent = "Correto! As soluções são 0 e 3. Coloque o fator comum em evidência (fatoração).";
        feedback.style.color = "green";
    } else {
        feedback.textContent = "Incorreto. Esta é uma equação do 2º grau incompleta (c=0). Use a fatoração, colocando o termo comum (x) em evidência.";
        feedback.style.color = "red";
    }
}

// --- Funções de Verificação (Revisadas e com novos IDs para Estatística Básica) ---

// Para Estatística
function verificarEstatistica1() {
    const resposta = document.getElementById('resposta-est-ex1')?.value.trim();
    const feedback = document.getElementById('feedback-est-ex1');
    if (!feedback) return;

    // Alturas: 160, 175, 168, 172, 165
    // Soma = 160 + 175 + 168 + 172 + 165 = 840
    // Média = 840 / 5 = 168
    if (parseFloat(resposta) === 168) {
        feedback.textContent = "Correto! A média das alturas é 168 cm.";
        feedback.style.color = "green";
    } else {
        feedback.textContent = "Incorreto. A média é a soma de todos os valores dividida pelo número de valores.";
        feedback.style.color = "red";
    }
}

function verificarEstatistica2() {
    const resposta = document.getElementById('resposta-est-ex2')?.value.trim().toLowerCase(); // Converte para minúsculas
    const feedback = document.getElementById('feedback-est-ex2');
    if (!feedback) return;

    // Cores: Preto, Prata, Branco, Preto, Preto, Prata, Azul
    // Frequências: Preto (3), Prata (2), Branco (1), Azul (1)
    if (resposta === "preto") {
        feedback.textContent = "Correto! A cor 'Preto' é a moda, aparecendo 3 vezes.";
        feedback.style.color = "green";
    } else {
        feedback.textContent = "Incorreto. A moda é o valor que mais se repete no conjunto de dados. Verifique a contagem de cada cor.";
        feedback.style.color = "red";
    }
}

function verificarEstatistica3() {
    const resposta = document.getElementById('resposta-est-ex3')?.value.trim();
    const feedback = document.getElementById('feedback-est-ex3');
    if (!feedback) return;

    // Faltas: 2, 0, 5, 1, 3, 4
    // Ordenado: 0, 1, 2, 3, 4, 5 (6 dados - par)
    // Mediana = (2 + 3) / 2 = 5 / 2 = 2.5
    if (parseFloat(resposta) === 2.5) {
        feedback.textContent = "Correto! A mediana é 2,5. (Dados ordenados: 0, 1, 2, 3, 4, 5. Média dos dois centrais: (2+3)/2).";
        feedback.style.color = "green";
    } else {
        feedback.textContent = "Incorreto. Primeiro, ordene os dados. Como o número de dados é par, a mediana é a média dos dois valores centrais.";
        feedback.style.color = "red";
    }
}

function verificarEstatistica4() {
    const resposta = document.getElementById('resposta-est-ex4')?.value.trim();
    const feedback = document.getElementById('feedback-est-ex4');
    if (!feedback) return;

    // Temperaturas: 28, 32, 25, 30, 29, 31, 27
    // Máximo = 32
    // Mínimo = 25
    // Amplitude = 32 - 25 = 7
    if (parseFloat(resposta) === 7) {
        feedback.textContent = "Correto! A amplitude térmica é 7°C. (Valor Máximo - Valor Mínimo = 32 - 25).";
        feedback.style.color = "green";
    } else {
        feedback.textContent = "Incorreto. A amplitude é a diferença entre o maior e o menor valor do conjunto de dados.";
        feedback.style.color = "red";
    }
}

// --- NOVAS FUNÇÕES DE VERIFICAÇÃO PARA "GEOMETRIA PLANA" ---

function verificarGeometriaPlanaEx1() {
    const resposta = document.getElementById('resposta-geo-ex1')?.value.trim();
    const feedback = document.getElementById('feedback-geo-ex1');
    if (!feedback) return;

    // Área do triângulo = (base * altura) / 2
    // Área = (10 * 8) / 2 = 80 / 2 = 40 m²
    if (parseFloat(resposta) === 40) {
        feedback.textContent = "Correto! A área do terreno é 40 m².";
        feedback.style.color = "green";
    } else {
        feedback.textContent = "Incorreto. Lembre-se que a área do triângulo é (base × altura) / 2.";
        feedback.style.color = "red";
    }
}

function verificarGeometriaPlanaEx2() {
    const resposta = document.getElementById('resposta-geo-ex2')?.value.trim().replace(/,/g, ".");
    const feedback = document.getElementById('feedback-geo-ex2');
    if (!feedback) return;

    // Comprimento da circunferência = 2 * π * r
    // C = 2 * 3.14 * 7 = 6.28 * 7 = 43.96 cm
    if (parseFloat(resposta) === 43.96) {
        feedback.textContent = "Correto! O comprimento da circunferência é 43.96 cm.";
        feedback.style.color = "green";
    } else {
        feedback.textContent = "Incorreto. Use a fórmula C = 2 × π × r, com π = 3.14.";
        feedback.style.color = "red";
    }
}

function verificarGeometriaPlanaEx3() {
    const resposta = document.getElementById('resposta-geo-ex3')?.value.trim();
    const feedback = document.getElementById('feedback-geo-ex3');
    if (!feedback) return;

    // Teorema de Pitágoras: a² = b² + c²
    // 13² = 5² + c²
    // 169 = 25 + c²
    // c² = 169 - 25
    // c² = 144
    // c = √144 = 12 cm
    if (parseFloat(resposta) === 12) {
        feedback.textContent = "Correto! A medida do outro cateto é 12 cm, aplicando o Teorema de Pitágoras.";
        feedback.style.color = "green";
    } else {
        feedback.textContent = "Incorreto. Utilize o Teorema de Pitágoras (a² = b² + c²) para encontrar o cateto que falta.";
        feedback.style.color = "red";
    }
}

function verificarGeometriaPlanaEx4() {
    const resposta = document.getElementById('resposta-geo-ex4')?.value.trim();
    const feedback = document.getElementById('feedback-geo-ex4');
    if (!feedback) return;

    // Área do losango = (D * d) / 2
    // Área = (12 * 8) / 2 = 96 / 2 = 48 cm²
    if (parseFloat(resposta) === 48) {
        feedback.textContent = "Correto! A área do losango é 48 cm².";
        feedback.style.color = "green";
    } else {
        feedback.textContent = "Incorreto. A área do losango é calculada multiplicando as diagonais e dividindo por 2.";
        feedback.style.color = "red";
    }
}

// --- NOVAS FUNÇÕES DE VERIFICAÇÃO PARA "GEOMETRIA ANALÍTICA" ---

function verificarGeoAnaliticaEx1() {
    const resposta = document.getElementById('resposta-geoanalitica-ex1')?.value.trim().replace(/,/g, ".");
    const feedback = document.getElementById('feedback-geoanalitica-ex1');
    if (!feedback) return;

    // P(-2, 3) e Q(1, -1)
    // d = sqrt((1 - (-2))^2 + (-1 - 3)^2)
    // d = sqrt((1 + 2)^2 + (-4)^2)
    // d = sqrt(3^2 + 16)
    // d = sqrt(9 + 16) = sqrt(25) = 5
    if (parseFloat(resposta) === 5.00) {
        feedback.textContent = "Correto! A distância entre os pontos P e Q é 5.00.";
        feedback.style.color = "green";
    } else {
        feedback.textContent = "Incorreto. Use a fórmula da distância entre dois pontos: d = √[(x<sub>2</sub> - x<sub>1</sub>)² + (y<sub>2</sub> - y<sub>1</sub>)²].";
        feedback.style.color = "red";
    }
}

function verificarGeoAnaliticaEx2() {
    const resposta = document.getElementById('resposta-geoanalitica-ex2')?.value.trim().toLowerCase();
    const feedback = document.getElementById('feedback-geoanalitica-ex2');
    if (!feedback) return;

    // A(1, 1), B(3, 5), C(5, 9)
    // Determinante:
    // 1  1  1 | 1  1
    // 3  5  1 | 3  5
    // 5  9  1 | 5  9
    // Det = (1*5*1 + 1*1*5 + 1*3*9) - (1*5*5 + 1*1*9 + 1*3*1)
    // Det = (5 + 5 + 27) - (25 + 9 + 3)
    // Det = 37 - 37 = 0
    // Como o determinante é 0, os pontos são alinhados.
    if (resposta === "sim") {
        feedback.textContent = "Correto! Sim, os pontos estão alinhados (o determinante é zero).";
        feedback.style.color = "green";
    } else {
        feedback.textContent = "Incorreto. Calcule o determinante dos pontos. Se for zero, eles estão alinhados.";
        feedback.style.color = "red";
    }
}

function verificarGeoAnaliticaEx3() {
    const resposta = document.getElementById('resposta-geoanalitica-ex3')?.value.trim();
    const feedback = document.getElementById('feedback-geoanalitica-ex3');
    if (!feedback) return;

    // R(2, 7) e S(4, 11)
    // m = (y2 - y1) / (x2 - x1)
    // m = (11 - 7) / (4 - 2) = 4 / 2 = 2
    if (parseFloat(resposta) === 2) {
        feedback.textContent = "Correto! O coeficiente angular é 2.";
        feedback.style.color = "green";
    } else {
        feedback.textContent = "Incorreto. Use a fórmula do coeficiente angular: m = (y<sub>2</sub> - y<sub>1</sub>) / (x<sub>2</sub> - x<sub>1</sub>).";
        feedback.style.color = "red";
    }
}

function verificarGeoAnaliticaEx4() {
    const resposta = document.getElementById('resposta-geoanalitica-ex4')?.value.trim();
    const feedback = document.getElementById('feedback-geoanalitica-ex4');
    if (!feedback) return;

    // D(0, 0), E(5, 0), F(3, 4)
    // Determinante:
    // 0  0  1 | 0  0
    // 5  0  1 | 5  0
    // 3  4  1 | 3  4
    // Det = (0*0*1 + 0*1*3 + 1*5*4) - (1*0*3 + 0*1*4 + 0*5*1)
    // Det = (0 + 0 + 20) - (0 + 0 + 0) = 20
    // Área = 1/2 * |Det| = 1/2 * 20 = 10
    if (parseFloat(resposta) === 10) {
        feedback.textContent = "Correto! A área do triângulo é 10 unidades de área.";
        feedback.style.color = "green";
    } else {
        feedback.textContent = "Incorreto. Calcule o determinante dos vértices do triângulo e divida o valor absoluto por 2 para encontrar a área.";
        feedback.style.color = "red";
    }
}

// --- NOVAS FUNÇÕES DE VERIFICAÇÃO PARA "GEOMETRIA ESPACIAL" ---

function verificarGeometriaEspacialEx1() {
    const resposta = document.getElementById('resposta-geoesp-ex1')?.value.trim();
    const feedback = document.getElementById('feedback-geoesp-ex1');
    if (!feedback) return;

    // Volume do paralelepípedo = comprimento * largura * altura
    // V = 6 * 4 * 5 = 120 cm³
    if (parseFloat(resposta) === 120) {
        feedback.textContent = "Correto! O volume do paralelepípedo é 120 cm³.";
        feedback.style.color = "green";
    } else {
        feedback.textContent = "Incorreto. O volume de um paralelepípedo é o produto de suas três dimensões: comprimento × largura × altura.";
        feedback.style.color = "red";
    }
}

function verificarGeometriaEspacialEx2() {
    const resposta = document.getElementById('resposta-geoesp-ex2')?.value.trim().replace(/,/g, ".");
    const feedback = document.getElementById('feedback-geoesp-ex2');
    if (!feedback) return;

    // Área lateral do cilindro = 2 * π * r * h
    // A_l = 2 * 3.14 * 3 * 10 = 6.28 * 30 = 188.4 m²
    if (parseFloat(resposta) === 188.4) {
        feedback.textContent = "Correto! A área lateral do cilindro é 188.40 m².";
        feedback.style.color = "green";
    } else {
        feedback.textContent = "Incorreto. Use a fórmula da área lateral do cilindro: 2 × π × r × h, com π = 3.14.";
        feedback.style.color = "red";
    }
}

function verificarGeometriaEspacialEx3() {
    const resposta = document.getElementById('resposta-geoesp-ex3')?.value.trim();
    const feedback = document.getElementById('feedback-geoesp-ex3');
    if (!feedback) return;

    // Volume da pirâmide = (1/3) * Área da base * altura
    // Base quadrada: Área da base = lado * lado = 6 * 6 = 36 cm²
    // V = (1/3) * 36 * 4 = 12 * 4 = 48 cm³
    if (parseFloat(resposta) === 48) {
        feedback.textContent = "Correto! O volume da pirâmide é 48 cm³.";
        feedback.style.color = "green";
    } else {
        feedback.textContent = "Incorreto. Primeiro, calcule a área da base. Depois, aplique a fórmula do volume da pirâmide: (1/3) × Área da base × altura.";
        feedback.style.color = "red";
    }
}

function verificarGeometriaEspacialEx4() {
    const resposta = document.getElementById('resposta-geoesp-ex4')?.value.trim().replace(/,/g, ".");
    const feedback = document.getElementById('feedback-geoesp-ex4');
    if (!feedback) return;

    // Volume da esfera = (4/3) * π * r³
    // V = (4/3) * 3.14 * 3³
    // V = (4/3) * 3.14 * 27
    // V = 4 * 3.14 * 9 (simplificando 27/3 = 9)
    // V = 12.56 * 9 = 113.04 cm³
    if (parseFloat(resposta) === 113.04) {
        feedback.textContent = "Correto! O volume da esfera é 113.04 cm³.";
        feedback.style.color = "green";
    } else {
        feedback.textContent = "Incorreto. Use a fórmula do volume da esfera: (4/3) × π × r³, com π = 3.14.";
        feedback.style.color = "red";
    }
}

// --- NOVAS FUNÇÕES DE VERIFICAÇÃO PARA "FUNÇÕES" ---

function verificarFuncoesEx1() {
    const respostaA = document.getElementById('resposta-funcoes-ex1a')?.value.trim();
    const respostaB = document.getElementById('resposta-funcoes-ex1b')?.value.trim();
    const feedback = document.getElementById('feedback-funcoes-ex1');
    if (!feedback) return;

    let corretoA = false;
    let corretoB = false;

    // a) f(2) = 3*(2) - 9 = 6 - 9 = -3
    if (parseFloat(respostaA) === -3) {
        corretoA = true;
    }

    // b) Raiz: 3x - 9 = 0 => 3x = 9 => x = 3
    if (parseFloat(respostaB) === 3) {
        corretoB = true;
    }

    if (corretoA && corretoB) {
        feedback.textContent = "Correto! a) f(2) = -3. b) A raiz da função é 3.";
        feedback.style.color = "green";
    } else if (corretoA) {
        feedback.textContent = "A resposta 'a' está correta (-3), mas a 'b' está incorreta. Revise como encontrar a raiz da função.";
        feedback.style.color = "orange";
    } else if (corretoB) {
        feedback.textContent = "A resposta 'b' está correta (3), mas a 'a' está incorreta. Revise a substituição de x por 2.";
        feedback.style.color = "orange";
    } else {
        feedback.textContent = "Incorreto. Revise o cálculo de f(x) para um dado x e como encontrar a raiz de uma função do 1º grau.";
        feedback.style.color = "red";
    }
}

function verificarFuncoesEx2() {
    const respostaA = document.getElementById('resposta-funcoes-ex2a')?.value.trim().toLowerCase();
    const respostaB = document.getElementById('resposta-funcoes-ex2b')?.value.trim();
    const feedback = document.getElementById('feedback-funcoes-ex2');
    if (!feedback) return;

    let corretoA = false;
    let corretoB = false;

    // g(x) = -2x + 8 => a = -2 (decrescente)
    if (respostaA === "decrescente") {
        corretoA = true;
    }

    // Corta Y em b, que é 8
    if (parseFloat(respostaB) === 8) {
        corretoB = true;
    }

    if (corretoA && corretoB) {
        feedback.textContent = "Correto! A função é decrescente e corta o eixo Y em 8.";
        feedback.style.color = "green";
    } else if (corretoA) {
        feedback.textContent = "A resposta sobre o crescimento/decrescimento está correta (decrescente), mas o ponto de corte no eixo Y está incorreto.";
        feedback.style.color = "orange";
    } else if (corretoB) {
        feedback.textContent = "A resposta sobre o ponto de corte no eixo Y está correta (8), mas o crescimento/decrescimento está incorreto.";
        feedback.style.color = "orange";
    } else {
        feedback.textContent = "Incorreto. Revise a influência do coeficiente 'a' no crescimento/decrescimento e do coeficiente 'b' no corte do eixo Y.";
        feedback.style.color = "red";
    }
}

function verificarFuncoesEx3() {
    const respostaA = document.getElementById('resposta-funcoes-ex3a')?.value.trim().toLowerCase();
    const respostaB = document.getElementById('resposta-funcoes-ex3b')?.value.trim().replace(/\s/g, "").replace(/,/g, ".");
    const feedback = document.getElementById('feedback-funcoes-ex3');
    if (!feedback) return;

    let corretoA = false;
    let corretoB = false;

    // h(x) = x² - 6x + 5 => a = 1 (positivo, concavidade para cima)
    if (respostaA === "para cima" || respostaA === "concavidade para cima") {
        corretoA = true;
    }

    // Raízes: x² - 6x + 5 = 0 => (x-1)(x-5) = 0 => x=1 e x=5
    // Respostas esperadas: "1,5" ou "5,1"
    if (respostaB === "1,5" || respostaB === "5,1" || respostaB === "1.5" || respostaB === "5.1") {
        corretoB = true;
    }

    if (corretoA && corretoB) {
        feedback.textContent = "Correto! Concavidade para cima e raízes 1 e 5.";
        feedback.style.color = "green";
    } else if (corretoA) {
        feedback.textContent = "A concavidade está correta (para cima), mas as raízes estão incorretas. Revise a fórmula de Bhaskara ou fatoração.";
        feedback.style.color = "orange";
    } else if (corretoB) {
        feedback.textContent = "As raízes estão corretas (1 e 5), mas a concavidade está incorreta. Revise a influência do coeficiente 'a'.";
        feedback.style.color = "orange";
    } else {
        feedback.textContent = "Incorreto. Revise a influência do coeficiente 'a' na concavidade e como encontrar as raízes da função quadrática.";
        feedback.style.color = "red";
    }
}

function verificarFuncoesEx4() {
    const resposta = document.getElementById('resposta-funcoes-ex4')?.value.trim();
    const feedback = document.getElementById('feedback-funcoes-ex4');
    if (!feedback) return;

    // f(x) = x² - 8x + 15
    // a=1, b=-8, c=15
    // x_V = -b / 2a = -(-8) / (2*1) = 8 / 2 = 4
    // y_V = f(x_V) = f(4) = 4² - 8*(4) + 15 = 16 - 32 + 15 = -16 + 15 = -1
    if (parseFloat(resposta) === -1) {
        feedback.textContent = "Correto! O valor mínimo da função é -1.";
        feedback.style.color = "green";
    } else {
        feedback.textContent = "Incorreto. Primeiro, encontre a coordenada X do vértice (xV = -b/2a). Depois, substitua esse valor na função para encontrar o y do vértice (o valor mínimo).";
        feedback.style.color = "red";
    }
}

// --- NOVAS FUNÇÕES DE VERIFICAÇÃO PARA "PROGRESSÕES" ---

function verificarProgressoesEx1() {
    const resposta = document.getElementById('resposta-prog-ex1')?.value.trim();
    const feedback = document.getElementById('feedback-prog-ex1');
    if (!feedback) return;

    // PA: a1 = 5, r = 3, n = 8
    // an = a1 + (n-1)r
    // a8 = 5 + (8-1)*3 = 5 + 7*3 = 5 + 21 = 26
    if (parseFloat(resposta) === 26) {
        feedback.textContent = "Correto! O 8º termo da PA é 26.";
        feedback.style.color = "green";
    } else {
        feedback.textContent = "Incorreto. Use a fórmula do termo geral da PA: a<sub>n</sub> = a<sub>1</sub> + (n - 1)r.";
        feedback.style.color = "red";
    }
}

function verificarProgressoesEx2() {
    const resposta = document.getElementById('resposta-prog-ex2')?.value.trim();
    const feedback = document.getElementById('feedback-prog-ex2');
    if (!feedback) return;

    // PA: (2, 6, 10, ...)
    // a1 = 2
    // r = 6 - 2 = 4
    // n = 6
    // Primeiro encontrar a6: a6 = a1 + (6-1)r = 2 + 5*4 = 2 + 20 = 22
    // Sn = ((a1 + an) * n) / 2
    // S6 = ((2 + 22) * 6) / 2 = (24 * 6) / 2 = 144 / 2 = 72
    if (parseFloat(resposta) === 72) {
        feedback.textContent = "Correto! A soma dos 6 primeiros termos da PA é 72.";
        feedback.style.color = "green";
    } else {
        feedback.textContent = "Incorreto. Primeiro, encontre o 6º termo (a<sub>6</sub>). Depois, use a fórmula da soma dos termos da PA.";
        feedback.style.color = "red";
    }
}

function verificarProgressoesEx3() {
    const resposta = document.getElementById('resposta-prog-ex3')?.value.trim();
    const feedback = document.getElementById('feedback-prog-ex3');
    if (!feedback) return;

    // PG: a1 = 3, q = 2, n = 4
    // an = a1 * q^(n-1)
    // a4 = 3 * 2^(4-1) = 3 * 2^3 = 3 * 8 = 24
    if (parseFloat(resposta) === 24) {
        feedback.textContent = "Correto! O 4º termo da PG é 24.";
        feedback.style.color = "green";
    } else {
        feedback.textContent = "Incorreto. Use a fórmula do termo geral da PG: a<sub>n</sub> = a<sub>1</sub> × q<sup>(n - 1)</sup>.";
        feedback.style.color = "red";
    }
}

function verificarProgressoesEx4() {
    const resposta = document.getElementById('resposta-prog-ex4')?.value.trim().replace(/,/g, ".");
    const feedback = document.getElementById('feedback-prog-ex4');
    if (!feedback) return;

    // PG infinita: (10, 5, 2.5, ...)
    // a1 = 10
    // q = 5 / 10 = 0.5
    // S_inf = a1 / (1 - q)
    // S_inf = 10 / (1 - 0.5) = 10 / 0.5 = 20
    if (parseFloat(resposta) === 20) {
        feedback.textContent = "Correto! A soma dos termos da PG infinita é 20.";
        feedback.style.color = "green";
    } else {
        feedback.textContent = "Incorreto. Verifique a razão da PG. Se |q| < 1, use a fórmula da soma dos termos de uma PG infinita: S<sub>∞</sub> = a<sub>1</sub> / (1 - q).";
        feedback.style.color = "red";
    }
}

// --- NOVAS FUNÇÕES DE VERIFICAÇÃO PARA "ANÁLISE COMBINATÓRIA E PROBABILIDADE" ---

function verificarCombinatoriaProbabilidadeEx1() {
    const resposta = document.getElementById('resposta-combprob-ex1')?.value.trim();
    const feedback = document.getElementById('feedback-combprob-ex1');
    if (!feedback) return;

    // 8 times, 3 lugares (ordem importa: Campeão, Vice, 3º). É um ARRANJO.
    // A(8,3) = 8! / (8-3)! = 8! / 5! = 8 * 7 * 6 = 336
    if (parseFloat(resposta) === 336) {
        feedback.textContent = "Correto! É um arranjo simples: A(8,3) = 336 maneiras.";
        feedback.style.color = "green";
    } else {
        feedback.textContent = "Incorreto. A ordem dos times nos 3 primeiros lugares importa. Use a fórmula de Arranjo Simples.";
        feedback.style.color = "red";
    }
}

function verificarCombinatoriaProbabilidadeEx2() {
    const resposta = document.getElementById('resposta-combprob-ex2')?.value.trim();
    const feedback = document.getElementById('feedback-combprob-ex2');
    if (!feedback) return;

    // Anagramas da palavra "ROMA" (4 letras distintas). É uma PERMUTAÇÃO.
    // P4 = 4! = 4 * 3 * 2 * 1 = 24
    if (parseFloat(resposta) === 24) {
        feedback.textContent = "Correto! É uma permutação simples: P(4) = 4! = 24 anagramas.";
        feedback.style.color = "green";
    } else {
        feedback.textContent = "Incorreto. Para anagramas de letras distintas, use a fórmula de Permutação Simples (n!).";
        feedback.style.color = "red";
    }
}

function verificarCombinatoriaProbabilidadeEx3() {
    const resposta = document.getElementById('resposta-combprob-ex3')?.value.trim().replace(/\s/g, "");
    const feedback = document.getElementById('feedback-combprob-ex3');
    if (!feedback) return;

    // Baralho de 52 cartas.
    // Naipes: Ouros, Copas, Espadas, Paus (4 naipes).
    // Cada naipe tem 13 cartas (A, 2, ..., 10, J, Q, K).
    // Total de cartas de Ouros = 13.
    // Total de cartas no baralho = 52.
    // Probabilidade = 13/52. Simplificando por 13, dá 1/4.
    if (resposta === "1/4") {
        feedback.textContent = "Correto! Há 13 cartas de Ouros em 52, então a probabilidade é 13/52 = 1/4.";
        feedback.style.color = "green";
    } else {
        feedback.textContent = "Incorreto. Conte o número de cartas de Ouros e divida pelo total de cartas no baralho. Simplifique a fração.";
        feedback.style.color = "red";
    }
}

function verificarCombinatoriaProbabilidadeEx4() {
    const resposta = document.getElementById('resposta-combprob-ex4')?.value.trim().replace(/\s/g, "");
    const feedback = document.getElementById('feedback-combprob-ex4');
    if (!feedback) return;

    // Total de bolas = 4 verdes + 6 amarelas = 10 bolas.
    // Retirar 3 bolas ao acaso, sem reposição.
    // 1. Total de casos possíveis (C(10,3)):
    //    C(10,3) = 10! / (3! * 7!) = (10*9*8)/(3*2*1) = 10*3*4 = 120
    // 2. Casos favoráveis (todas amarelas - C(6,3)):
    //    C(6,3) = 6! / (3! * 3!) = (6*5*4)/(3*2*1) = 20
    // 3. Probabilidade = Favoráveis / Total = 20 / 120 = 1/6
    if (resposta === "1/6") {
        feedback.textContent = "Correto! Total de maneiras de escolher 3 bolas de 10 é C(10,3) = 120. Maneiras de escolher 3 amarelas de 6 é C(6,3) = 20. Probabilidade = 20/120 = 1/6.";
        feedback.style.color = "green";
    } else {
        feedback.textContent = "Incorreto. Use a Combinação para calcular o total de formas de escolher 3 bolas e o total de formas de escolher 3 bolas amarelas. Depois, divida os favoráveis pelos totais.";
        feedback.style.color = "red";
    }
}

// --- NOVAS FUNÇÕES DE VERIFICAÇÃO PARA "TRIGONOMETRIA" ---

function verificarTrigonometriaEx1() {
    const resposta = document.getElementById('resposta-trig-ex1')?.value.trim().replace(/,/g, ".");
    const feedback = document.getElementById('feedback-trig-ex1');
    if (!feedback) return;

    // Triângulo Retângulo, ângulo 45°, Cateto Oposto = 10. Quer Hipotenusa.
    // sen(45°) = Cateto Oposto / Hipotenusa
    // √2/2 = 10 / Hipotenusa
    // Hipotenusa = 10 / (√2/2) = 10 * 2 / √2 = 20 / √2
    // Racionalizando: (20√2) / 2 = 10√2
    // 10 * 1.41 = 14.1 cm
    if (parseFloat(resposta) === 14.1 || parseFloat(resposta) === 14.14) { // Aceita 14.1 ou 14.14
        feedback.textContent = "Correto! A hipotenusa mede 10√2 ≈ 14.14 cm. (Use sen(45°)).";
        feedback.style.color = "green";
    } else {
        feedback.textContent = "Incorreto. Use a razão seno (Cateto Oposto / Hipotenusa) e o valor de sen(45°) para encontrar a hipotenusa. Lembre-se de racionalizar a raiz se necessário.";
        feedback.style.color = "red";
    }
}

function verificarTrigonometriaEx2() {
    const resposta = document.getElementById('resposta-trig-ex2')?.value.trim();
    const feedback = document.getElementById('feedback-trig-ex2');
    if (!feedback) return;

    // Avião: Hipotenusa = 800m, ângulo = 30°. Quer altura (Cateto Oposto).
    // sen(30°) = Altura / Hipotenusa
    // 0.5 = Altura / 800
    // Altura = 0.5 * 800 = 400 metros
    if (parseFloat(resposta) === 400) {
        feedback.textContent = "Correto! A altura aproximada do avião é 400 metros.";
        feedback.style.color = "green";
    } else {
        feedback.textContent = "Incorreto. Use a razão seno (Cateto Oposto / Hipotenusa) com sen(30°).";
        feedback.style.color = "red";
    }
}

function verificarTrigonometriaEx3() {
    const resposta = document.getElementById('resposta-trig-ex3')?.value.trim().replace(/,/g, ".");
    const feedback = document.getElementById('feedback-trig-ex3');
    if (!feedback) return;

    // Lei do Cosseno: c² = a² + b² - 2ab * cos(C)
    // Lados 7 e 8, ângulo entre eles é 60°. Queremos o lado oposto (C).
    // C² = 7² + 8² - 2 * 7 * 8 * cos(60°)
    // C² = 49 + 64 - 2 * 7 * 8 * 0.5
    // C² = 113 - 56
    // C² = 57
    // C = √57 ≈ 7.5498... ≈ 7.55
    if (parseFloat(resposta) >= 7.54 && parseFloat(resposta) <= 7.56) { // Aceita pequena margem de erro
        feedback.textContent = "Correto! O lado C mede aproximadamente 7.55 cm.";
        feedback.style.color = "green";
    } else {
        feedback.textContent = "Incorreto. Use a Lei do Cosseno: c² = a² + b² - 2ab × cos(C). Lembre-se de usar cos(60°) = 0.5.";
        feedback.style.color = "red";
    }
}

function verificarTrigonometriaEx4() {
    const resposta = document.getElementById('resposta-trig-ex4')?.value.trim().toLowerCase();
    const feedback = document.getElementById('feedback-trig-ex4');
    if (!feedback) return;

    // Sinal das razões:
    // Seno +: 1º e 2º Quadrantes
    // Cosseno -: 2º e 3º Quadrantes
    // Onde Seno é + E Cosseno é - ? No 2º Quadrante.
    if (resposta === "2º quadrante" || resposta === "segundo quadrante" || resposta === "2") {
        feedback.textContent = "Correto! O seno é positivo e o cosseno é negativo no 2º Quadrante.";
        feedback.style.color = "green";
    } else {
        feedback.textContent = "Incorreto. Revise a tabela de sinais das razões trigonométricas em cada quadrante do círculo trigonométrico.";
        feedback.style.color = "red";
    }
}

// --- NOVAS FUNÇÕES DE VERIFICAÇÃO PARA "MATEMÁTICA FINANCEIRA" ---

function verificarFinancasEx1() {
    const resposta = document.getElementById('resposta-financas-ex1')?.value.trim();
    const feedback = document.getElementById('feedback-financas-ex1');
    if (!feedback) return;

    // J = C * i * t
    // C = 2500, t = 8, i = 1.5% = 0.015
    // J = 2500 * 0.015 * 8 = 37.5 * 8 = 300
    if (parseFloat(resposta) === 300) {
        feedback.textContent = "Correto! Os juros gerados são R$ 300,00.";
        feedback.style.color = "green";
    } else {
        feedback.textContent = "Incorreto. Use a fórmula de juros simples: J = C × i × t. Lembre-se de converter a taxa para decimal.";
        feedback.style.color = "red";
    }
}

function verificarFinancasEx2() {
    const resposta = document.getElementById('resposta-financas-ex2')?.value.trim().replace(/,/g, ".");
    const feedback = document.getElementById('feedback-financas-ex2');
    if (!feedback) return;

    // M = C * (1 + i)^t
    // C = 4000, t = 5, i = 2% = 0.02
    // M = 4000 * (1 + 0.02)^5 = 4000 * (1.02)^5
    // (1.02)^5 ≈ 1.1040808
    // M = 4000 * 1.1040808 = 4416.3232 => 4416.32 (arredondado)
    const expected = 4416.32;
    const userResponse = parseFloat(resposta);
    // Permite uma pequena margem de erro para arredondamento
    if (userResponse >= expected - 0.01 && userResponse <= expected + 0.01) {
        feedback.textContent = "Correto! O montante é R$ 4.416,32.";
        feedback.style.color = "green";
    } else {
        feedback.textContent = "Incorreto. Use a fórmula de juros compostos: M = C × (1 + i)<sup>t</sup>. Atente-se ao cálculo da potência e arredondamento.";
        feedback.style.color = "red";
    }
}

function verificarFinancasEx3() {
    const resposta = document.getElementById('resposta-financas-ex3')?.value.trim();
    const feedback = document.getElementById('feedback-financas-ex3');
    if (!feedback) return;

    // Preço inicial: R$ 200,00
    // Aumento de 10%: 200 * (1 + 0.10) = 200 * 1.10 = 220
    // Nova preço: R$ 220,00
    // Redução de 5% sobre o novo preço: 220 * (1 - 0.05) = 220 * 0.95 = 209
    if (parseFloat(resposta) === 209) {
        feedback.textContent = "Correto! O preço final do produto é R$ 209,00.";
        feedback.style.color = "green";
    } else {
        feedback.textContent = "Incorreto. Calcule o aumento primeiro, e depois a redução sobre o NOVO valor. Lembre-se de multiplicar pelos fatores (1+i) ou (1-i).";
        feedback.style.color = "red";
    }
}

function verificarFinancasEx4() {
    const resposta = document.getElementById('resposta-financas-ex4')?.value.trim().replace(/,/g, ".");
    const feedback = document.getElementById('feedback-financas-ex4');
    if (!feedback) return;

    // M = C * (1 + i)^t
    // C = 10000, t = 3, i = 3% = 0.03
    // M = 10000 * (1 + 0.03)^3 = 10000 * (1.03)^3
    // (1.03)^3 = 1.092727
    // M = 10000 * 1.092727 = 10927.27
    const expected = 10927.27;
    const userResponse = parseFloat(resposta);
    if (userResponse >= expected - 0.01 && userResponse <= expected + 0.01) {
        feedback.textContent = "Correto! O valor total a ser pago é R$ 10.927,27.";
        feedback.style.color = "green";
    } else {
        feedback.textContent = "Incorreto. Use a fórmula de juros compostos. Lembre-se de calcular a potência da taxa correta e arredondar para duas casas decimais.";
        feedback.style.color = "red";
    }
}

// --- NOVAS FUNÇÕES DE VERIFICAÇÃO PARA "EXPONENCIAL E LOGARITMO" ---

function verificarExpLogEx1() {
    const resposta = document.getElementById('resposta-explog-ex1')?.value.trim().replace(/,/g, ".");
    const feedback = document.getElementById('feedback-explog-ex1');
    if (!feedback) return;

    // 4^(x+1) = 32
    // (2^2)^(x+1) = 2^5
    // 2^(2x+2) = 2^5
    // 2x + 2 = 5
    // 2x = 3
    // x = 3/2 ou 1.5
    if (parseFloat(resposta) === 1.5 || resposta === "3/2") {
        feedback.textContent = "Correto! x = 1.5 (ou 3/2).";
        feedback.style.color = "green";
    } else {
        feedback.textContent = "Incorreto. Tente igualar as bases (base 2) e depois resolva a equação linear dos expoentes.";
        feedback.style.color = "red";
    }
}

function verificarExpLogEx2() {
    const resposta = document.getElementById('resposta-explog-ex2')?.value.trim();
    const feedback = document.getElementById('feedback-explog-ex2');
    if (!feedback) return;

    // log_3(81) = x  => 3^x = 81
    // 3^x = 3^4
    // x = 4
    if (parseFloat(resposta) === 4) {
        feedback.textContent = "Correto! log<sub>3</sub> 81 = 4, pois 3<sup>4</sup> = 81.";
        feedback.style.color = "green";
    } else {
        feedback.textContent = "Incorreto. Lembre-se da definição de logaritmo: log<sub>b</sub> N = x significa b<sup>x</sup> = N.";
        feedback.style.color = "red";
    }
}

function verificarExpLogEx3() {
    const resposta = document.getElementById('resposta-explog-ex3')?.value.trim().replace(/,/g, ".");
    const feedback = document.getElementById('feedback-explog-ex3');
    if (!feedback) return;

    // log 12 = log (2^2 * 3) = log (4 * 3)
    // log 12 = log 4 + log 3
    // log 12 = log (2^2) + log 3
    // log 12 = 2 * log 2 + log 3
    // log 12 = 2 * 0.301 + 0.477
    // log 12 = 0.602 + 0.477 = 1.079
    const expected = 1.079;
    const userResponse = parseFloat(resposta);
    if (userResponse >= expected - 0.001 && userResponse <= expected + 0.001) { // Aceita pequena margem
        feedback.textContent = "Correto! log 12 ≈ 1.079. (log 12 = log(2² × 3) = 2log2 + log3).";
        feedback.style.color = "green";
    } else {
        feedback.textContent = "Incorreto. Use as propriedades do logaritmo do produto e da potência: log 12 = log(2² × 3) = 2log2 + log3.";
        feedback.style.color = "red";
    }
}

function verificarExpLogEx4() {
    const resposta = document.getElementById('resposta-explog-ex4')?.value.trim();
    const feedback = document.getElementById('feedback-explog-ex4');
    if (!feedback) return;

    // R = log(I/I0)
    // I = 10000 * I0
    // R = log(10000 * I0 / I0)
    // R = log(10000)
    // R = log(10^4)
    // R = 4
    if (parseFloat(resposta) === 4) {
        feedback.textContent = "Correto! A magnitude do terremoto é 4 na escala Richter.";
        feedback.style.color = "green";
    } else {
        feedback.textContent = "Incorreto. Substitua I na fórmula e simplifique. Lembre-se que log(10<sup>x</sup>) = x.";
        feedback.style.color = "red";
    }
}

// Função auxiliar para comparações (mantenha a sua existente se já a tiver)
function respostasIguais(resp, ...corretas) {
    if (!resp) return false;
    resp = resp.trim().replace(/\s/g, "").replace(/,/g, ".");
    for (let c of corretas) {
        c = c.toString().trim().replace(/\s/g, "").replace(/,/g, ".");
        if (!isNaN(resp) && !isNaN(c)) {
            if (parseFloat(resp) === parseFloat(c)) return true;
        } else {
            if (resp === c) return true;
        }
    }
    return false;
}

// Estas funções de localStorage foram mantidas, mas seu uso é opcional
function marcarExercicioFeito(id) {
    localStorage.setItem("exercicio_" + id, "feito");
}
function exercicioFeito(id) {
    return localStorage.getItem("exercicio_" + id) === "feito";
}

// SELETORES DO MODAL
const welcomeModal = document.getElementById('welcome-modal');
const closeWelcomeModalBtn = document.getElementById('close-welcome-modal');
const startStudyingButton = document.getElementById('start-studying-button');

// Função para exibir o modal
function showWelcomeModal() {
    if (welcomeModal) {
        welcomeModal.style.display = 'flex'; // Torna visível
        document.body.classList.add('modal-open'); // Adiciona classe para evitar scroll no body
    }
}

// Função para ocultar o modal
function hideWelcomeModal() {
    if (welcomeModal) {
        welcomeModal.style.display = 'none'; // Esconde
        document.body.classList.remove('modal-open'); // Remove classe
    }
}

// Event Listeners para o modal
document.addEventListener('DOMContentLoaded', () => {
    // ... (Mantenha todo o seu código DOMContentLoaded existente aqui) ...

    // Adiciona os event listeners do modal
    if (closeWelcomeModalBtn) {
        closeWelcomeModalBtn.addEventListener('click', hideWelcomeModal);
    }
    if (startStudyingButton) {
        startStudyingButton.addEventListener('click', hideWelcomeModal);
    }

    // Exibir o modal automaticamente ao carregar a página
    // Você pode adicionar uma lógica para só exibir uma vez por sessão, se quiser,
    // usando localStorage ou sessionStorage. Por enquanto, ele aparecerá sempre.
    // Exemplo de lógica para aparecer apenas uma vez por sessão:
    const hasSeenWelcome = sessionStorage.getItem('hasSeenWelcomeModal');
    if (!hasSeenWelcome) {
        showWelcomeModal();
        sessionStorage.setItem('hasSeenWelcomeModal', 'true'); // Marca que o usuário já viu
    } else {
        // Se já viu, esconde o modal para garantir
        hideWelcomeModal();
    }
});