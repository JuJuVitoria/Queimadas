const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

const cardManchetes = document.createElement('div');
cardManchetes.classList.add('card-manchetes');
cardManchetes.style.display = 'none'; 

const manchetesContainer = document.createElement('div');
manchetesContainer.classList.add('manchetes-container');

const h2Manchetes = document.createElement('h2');
h2Manchetes.textContent = "Notícias sobre:";
cardManchetes.appendChild(h2Manchetes);
cardManchetes.appendChild(manchetesContainer);

const btnProximaPergunta = document.createElement('button');
btnProximaPergunta.textContent = 'Próxima Pergunta';
btnProximaPergunta.addEventListener('click', () => {
    cardManchetes.style.display = 'none'; 
    mostraPergunta(); 
});

cardManchetes.appendChild(btnProximaPergunta);
caixaPrincipal.appendChild(cardManchetes); 

const perguntas = [
    {
        enunciado: "Qual é uma das principais causas das queimadas em florestas tropicais como a Amazônia?",
        alternativas: [
            {
                texto: "Desmatamento e práticas agrícolas, como o uso do fogo para limpar áreas de cultivo e pastagem.",
                afirmacao: "O desmatamento e as práticas agrícolas que utilizam fogo para limpeza são responsáveis por grande parte das queimadas na Amazônia, levando à perda de biodiversidade.",
                manchetes: [
                    { titulo: "Crime ambiental: 52 inquéritos da PF investigam suspeita de incêndios criminosos", link: "https://g1.globo.com/jornal-nacional/noticia/2024/09/13/crime-ambiental-52-inqueritos-da-pf-investigam-suspeita-de-incendios-criminosos.ghtml", imagem: "./assets/img/manchetes/pergunta1-1.png" },
                    { titulo: "PF investiga queimadas criminosas no Pantanal", link: "https://jornaldebrasilia.com.br/noticias/brasil/pf-investiga-queimadas-criminosas-no-pantanal/", imagem: "./assets/img/manchetes/pergunta1-2.png" },
                    { titulo: "Polícia diz que preso em SP por incêndio criminoso revelou ser do PCC", link: "https://www.metropoles.com/sao-paulo/policia-diz-que-preso-em-sp-por-incendio-criminoso-revelou-ser-do-pcc", imagem: "./assets/img/manchetes/pergunta1-3.png" }
                ]
            },
            {
                texto: "Ação espontânea da natureza, já que essas florestas são propensas a pegar fogo naturalmente com frequência.",
                afirmacao: "Embora incêndios naturais possam ocorrer, a maioria das queimadas na Amazônia é causada por atividades humanas.",
                manchetes: [
                    { titulo: "Crime ambiental: 52 inquéritos da PF investigam suspeita de incêndios criminosos", link: "https://g1.globo.com/jornal-nacional/noticia/2024/09/13/crime-ambiental-52-inqueritos-da-pf-investigam-suspeita-de-incendios-criminosos.ghtml", imagem: "./assets/img/manchetes/pergunta1-1.png" },
                    { titulo: "PF investiga queimadas criminosas no Pantanal", link: "https://jornaldebrasilia.com.br/noticias/brasil/pf-investiga-queimadas-criminosas-no-pantanal/", imagem: "./assets/img/manchetes/pergunta1-2.png" },
                    { titulo: "Polícia diz que preso em SP por incêndio criminoso revelou ser do PCC", link: "https://www.metropoles.com/sao-paulo/policia-diz-que-preso-em-sp-por-incendio-criminoso-revelou-ser-do-pcc", imagem: "./assets/img/manchetes/pergunta1-3.png" }
                ]
            }
        ]
    },
    {
        enunciado: "Qual é o efeito das queimadas na biodiversidade local?",
        alternativas: [
            {
                texto: "Estimula o crescimento de novas espécies e melhora a biodiversidade.",
                afirmacao: "Queimadas podem causar danos permanentes aos habitats e reduzir a diversidade de espécies nativas.",
                manchetes: [
                    { titulo: "Queimadas podem causar desequilíbrio ambiental e levar animais silvestres à extinção a longo prazo, diz bióloga", link: "https://g1.globo.com/mg/sul-de-minas/noticia/2021/09/15/queimadas-podem-causar-desequilibrio-ambiental-e-levar-animais-silvestres-a-extincao-a-longo-prazo-diz-biologa.ghtml", imagem: "./assets/img/manchetes/pergunta2-1.png" }
                ]
            },
            {
                texto: "Reduz a diversidade de espécies e danifica os habitantes naturais.",
                afirmacao: "Queimadas em larga escala resultam em perda de biodiversidade e afetam o equilíbrio dos ecossistemas.",
                manchetes: [
                    { titulo: "Queimadas podem causar desequilíbrio ambiental e levar animais silvestres à extinção a longo prazo, diz bióloga", link: "https://g1.globo.com/mg/sul-de-minas/noticia/2021/09/15/queimadas-podem-causar-desequilibrio-ambiental-e-levar-animais-silvestres-a-extincao-a-longo-prazo-diz-biologa.ghtml", imagem: "./assets/img/manchetes/pergunta2-1.png" }
                ]
            }
        ]
    },
    {
        enunciado: "Como as queimadas influenciam a economia das comunidades agrícolas?",
        alternativas: [
            {
                texto: "Prejudicam a produção agrícola e causam perdas econômicas.",
                afirmacao: "As queimadas podem resultar em colheitas danificadas e perdas financeiras significativas para os agricultores.",
                manchetes: [
                    { titulo: "Queimadas em canaviais em SP geram prejuízo de R$ 1,2 bi, estimam produtores", link: "https://www.cnnbrasil.com.br/economia/macroeconomia/queimadas-em-canaviais-em-sp-geram-prejuizo-de-r-12-bi-estimam-produtores/#:~:text=As%20queimadas%20registradas%20desde%20o,de%20seu%20balan%C3%A7o%20sobre%20os", imagem: "./assets/img/manchetes/pergunta3-1.png" },
                    { titulo: "Queimadas em São Paulo: 81% dos focos de calor foram em áreas de plantação e pastagem", link: "https://apublica.org/2024/08/queimadas-em-sao-paulo-81-dos-focos-de-calor-foram-em-areas-de-plantacao-e-pastagem/", imagem: "./assets/img/manchetes/pergunta3-2.png" }
                ]
            },
            {
                texto: "Reduz a diversidade de espécies e danifica os habitantes naturais.",
                afirmacao: "Queimadas em larga escala resultam em perda de biodiversidade e afetam o equilíbrio dos ecossistemas.",
                manchetes: [
                    { titulo: "Queimadas em canaviais em SP geram prejuízo de R$ 1,2 bi, estimam produtores", link: "https://www.cnnbrasil.com.br/economia/macroeconomia/queimadas-em-canaviais-em-sp-geram-prejuizo-de-r-12-bi-estimam-produtores/#:~:text=As%20queimadas%20registradas%20desde%20o,de%20seu%20balan%C3%A7o%20sobre%20os", imagem: "./assets/img/manchetes/pergunta3-1.png" },
                    { titulo: "Queimadas em São Paulo: 81% dos focos de calor foram em áreas de plantação e pastagem", link: "https://apublica.org/2024/08/queimadas-em-sao-paulo-81-dos-focos-de-calor-foram-em-areas-de-plantacao-e-pastagem/", imagem: "./assets/img/manchetes/pergunta3-2.png" }
                ]
            }
        ]
    },
    {
        enunciado: "Como as queimadas afetam a saúde pública?",
        alternativas: [
            {
                texto: "Aumentam a incidência de doenças cardiovasculares.",
                afirmacao: "A fumaça das queimadas contém poluentes que podem agravar doenças respiratórias e cardiovasculares.",
                manchetes: [
                    { titulo: "Como a fumaça das queimadas afeta o corpo humano? Os danos podem ser permanentemente, explicam os cientistas", link: "https://www.nationalgeographicbrasil.com/ciencia/2024/08/como-a-fumaca-das-queimadas-afeta-o-corpo-humano-os-danos-podem-ser-permanentemente-explicam-os-cientistas", imagem: "./assets/img/manchetes/pergunta4-1.png" },
                    { titulo: "Fumaça de queimada faz mal: os graves impactos à saúde e como amenizare", link: "https://www.uol.com.br/vivabem/noticias/redacao/2024/08/26/fumaca-aumenta-dificuldade-para-respirar-e-riscos-de-avc-infarto-e-cancer.htm", imagem: "./assets/img/manchetes/pergunta4-2.png" }
                ]
            },
            {
                texto: "Não têm impacto significativo na saúde das pessoas.",
                afirmacao: "Estudos mostram que a poluição do ar gerada pelas queimadas é prejudicial à saúde pública.",
                manchetes: [
                    { titulo: "Como a fumaça das queimadas afeta o corpo humano? Os danos podem ser permanentemente, explicam os cientistas", link: "https://www.nationalgeographicbrasil.com/ciencia/2024/08/como-a-fumaca-das-queimadas-afeta-o-corpo-humano-os-danos-podem-ser-permanentemente-explicam-os-cientistas", imagem: "./assets/img/manchetes/pergunta4-1.png" },
                    { titulo: "Fumaça de queimada faz mal: os graves impactos à saúde e como amenizar", link: "https://www.uol.com.br/vivabem/noticias/redacao/2024/08/26/fumaca-aumenta-dificuldade-para-respirar-e-riscos-de-avc-infarto-e-cancer.htm", imagem: "./assets/img/manchetes/pergunta4-2.png" }
                ]
            }
        ]
    },
    {
        enunciado: "Qual é o impacto das queimadas no clima global?",
        alternativas: [
            {
                texto: "Não têm impacto significativo nas mudanças climáticas.",
                afirmacao: "Queimadas liberam grandes quantidades de CO2 na atmosfera, contribuindo para o aquecimento global.",
                manchetes: [
                    { titulo: "Europa vive dois extremos do clima com enchentes e queimadas", link: "https://www.band.uol.com.br/noticias/jornal-da-band/videos/europa-vive-dois-extremos-do-clima-com-enchentes-e-queimadas-17284635", imagem: "./assets/img/manchetes/pergunta5-1.png" },
                    { titulo: "Secas severas, inundações e queimadas: o “caos climático” é nosso novo normal?", link: "https://www.nationalgeographicbrasil.com/meio-ambiente/2024/09/secas-severas-inundacoes-e-queimadas-o-caos-climatico-e-nosso-novo-normal", imagem: "./assets/img/manchetes/pergunta5-2.png" }
                ]
            },
            {
                texto: "Contribuem para o aquecimento global e para mudanças climáticas.",
                afirmacao: "As queimadas são uma fonte significativa de emissões de gases de efeito estufa, exacerbando as mudanças climáticas.",
                manchetes: [
                    { titulo: "Europa vive dois extremos do clima com enchentes e queimadas", link: "https://www.band.uol.com.br/noticias/jornal-da-band/videos/europa-vive-dois-extremos-do-clima-com-enchentes-e-queimadas-17284635", imagem: "./assets/img/manchetes/pergunta5-1.png" },
                    { titulo: "Secas severas, inundações e queimadas: o “caos climático” é nosso novo normal?", link: "https://www.nationalgeographicbrasil.com/meio-ambiente/2024/09/secas-severas-inundacoes-e-queimadas-o-caos-climatico-e-nosso-novo-normal", imagem: "./assets/img/manchetes/pergunta5-2.png" }
                ]
            }
        ]
    },
    {
        enunciado: "Qual abordagem é mais eficaz para lidar com as queimadas?",
        alternativas: [
            {
                texto: "Implementar políticas públicas de prevenção e controle rigorosas.",
                afirmacao: "Medidas preventivas são essenciais para proteger o meio ambiente e as comunidades afetadas pelas queimadas.",
                manchetes: [
                    { titulo: "Governo Federal e estados unem esforços para combate e prevenção aos incêndios", link: "https://agenciagov.ebc.com.br/noticias/202409/governo-federal-e-estados-unem-esforcos-em-estrategia-integrada-para-combate-e-prevencao-aos-incendios", imagem: "./assets/img/manchetes/pergunta6-1.png" },

                ]
            },
            {
                texto: " Ignorar as queimadas e focar em soluções apenas após os incêndios ocorridos.",
                afirmacao: "Reagir apenas após os incêndios não é suficiente para lidar com a gravidade do problema das queimadas.",
                manchetes: [
                    { titulo: "Governo Federal e estados unem esforços para combate e prevenção aos incêndios", link: "https://agenciagov.ebc.com.br/noticias/202409/governo-federal-e-estados-unem-esforcos-em-estrategia-integrada-para-combate-e-prevencao-aos-incendios", imagem: "./assets/img/manchetes/pergunta6-1.png" },
                ]
            }
        ]
    }

];

let atual = 0;
let perguntaAtual;
let historiaFinal = "";

function mostraPergunta() {
    if (atual >= perguntas.length) {
        mostraResultado();
        return;
    }
    perguntaAtual = perguntas[atual];
    caixaPerguntas.textContent = perguntaAtual.enunciado;
    caixaAlternativas.textContent = "";
    mostraAlternativas();
}

function mostraAlternativas() {
    for (const alternativa of perguntaAtual.alternativas) {
        const botaoAlternativas = document.createElement("button");
        botaoAlternativas.textContent = alternativa.texto;
        botaoAlternativas.addEventListener("click", () => respostaSelecionada(alternativa));
        caixaAlternativas.appendChild(botaoAlternativas);
    }
}

function respostaSelecionada(opcaoSelecionada) {
    const afirmacoes = opcaoSelecionada.afirmacao;
    historiaFinal += afirmacoes + " ";

    atual++;
    exibeManchetes(opcaoSelecionada.manchetes);
}

function exibeManchetes(manchetes) {
    manchetesContainer.innerHTML = '';

    manchetes.forEach((manchete) => {
        const mancheteDiv = document.createElement('div');
        mancheteDiv.classList.add('headline-container');

        mancheteDiv.innerHTML = `
                <a href="${manchete.link}" target="_blank">
                    <div class="headline">
                        <img src="${manchete.imagem}" alt="Imagem da notícia" />
                        <div class="overlay">
                            <p>Confira a notícia</p>
                        </div>
                    </div>
                </a>
            `;
        manchetesContainer.appendChild(mancheteDiv);
    });

    cardManchetes.style.display = 'block'; 
}

function mostraResultado() {
    caixaPerguntas.textContent = "As queimadas representam uma grave ameaça ao meio ambiente, à saúde pública e à economia das comunidades, sendo impulsionadas principalmente pelo desmatamento e práticas agrícolas insustentáveis. Elas reduzem a biodiversidade, comprometem ecossistemas vitais e aumentam a poluição do ar, resultando em problemas respiratórios e outras doenças que afetam milhões de pessoas, especialmente em áreas vulneráveis. Diante desse cenário alarmante, é crucial que promovamos práticas mais sustentáveis e aumentemos a conscientização sobre as consequências das queimadas, pois a preservação do planeta e a saúde das futuras gerações dependem de ações concretas que começam com cada um de nós.";
    textoResultado.textContent = historiaFinal;
    caixaAlternativas.textContent = "";
}

mostraPergunta(); 
