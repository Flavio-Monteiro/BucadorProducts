// Base de dados dos produtos
const produtos = [
    {codigo: 1096, nome: "BEIJINHO", imagem: "/assets/images/1096.png" },
    {codigo: 17834, nome: "BISCOITO CACETINHO"},
    {codigo: 5913,  nome: "BISCOITO CHAMPAGNE"},
    {codigo: 3056,  nome: "BOLACHA CAMELO"},
    {codigo: 7481,  nome: "BOLACHA DE COCO"},
    {codigo: 7207,  nome: "BOLACHA MIMOSA"},
    {codigo: 2566,  nome: "BOLACHA REG INTEGRAL"},
    {codigo: 7214,  nome: "BOLACHA REGALIA"},
    {codigo: 7153,  nome: "BOLACHA ROSQUINHA"},
    {codigo: 9300,  nome: "BOLINHO DE BACALHAU"},
    {codigo: 7788,  nome: "BOLINHO DE CAMARÃO"},
    {codigo: 9324,  nome: "BOLINHO DE CHARQUE"},
    {codigo: 7788,  nome: "BOLINHO DE GOMA"},
    {codigo: 4724,  nome: "BOLINHO DE PIZZA"},
    {codigo: 9331,  nome: "BOLINHO DE QUEIJO"},
    {codigo: 17874, nome: "BOLO AIPIM KG"},
    {codigo: 73309, nome: "BOLO BACIA C/1 UN"},
    {codigo: 73305, nome: "BOLO BACIA C/4 UN"},
    {codigo: 17870, nome: "BOLO CAÇAROLA C/QUEIJO"},
    {codigo: 1427,  nome: "BOLO CENOURA"},
    {codigo: 17320, nome: "BOLO CENOURA SIMPLES"},
    {codigo: 17295, nome: "BOLO CHOC CREMOSO"},
    {codigo: 6927,  nome: "BOLO COM LARANJA"},
    {codigo: 1001,  nome: "BOLO COM PASSAS"},
    {codigo: 9751,  nome: "BOLO DE ABACAXI"},
    {codigo: 7085,  nome: "BOLO DE AMENDOIM"},
    {codigo: 9492,  nome: "BOLO DE BANANA"},
    {codigo: 7450,  nome: "BOLO DE CHOCOLATE"},
    {codigo: 7016,  nome: "BOLO DE COCADA"},
    {codigo: 3674,  nome: "BOLO DE FRUTAS VERMELHAS"},
    {codigo: 6293,  nome: "BOLO DE MACAXEIRA"},
    {codigo: 6347,  nome: "BOLO DE MASSA PUBA"},
    {codigo: 6361,  nome: "BOLO DE MILHO"},
    {codigo: 6198,  nome: "BOLO FORMIGUEIRO"},
    {codigo: 6149,  nome: "BOLO GOIABADA"},
    {codigo: 2300,  nome: "BOLO INDIANO"},
    {codigo: 6217,  nome: "BOLO INGLES"},
    {codigo: 6316,  nome: "BOLO MAIZENA"},
    {codigo: 6088,  nome: "BOLO MASSA PUBA"},
    {codigo: 7177,  nome: "BOLO MESCLADO"},
    {codigo: 7108,  nome: "BOLO PÉ DE MOLEQUE PAÇOCA"},
    {codigo: 3063,  nome: "BRASILEIRA"},
    {codigo: 1070,  nome: "BRIGADEIRO"},
    {codigo: 4121,  nome: "BRIOCHE COM CÔCO"},
    {codigo: 6095,  nome: "BRIOCHE COM CREME"},
    {codigo: 4145,  nome: "BRIOCHE COM FRUTAS"},
    {codigo: 6095,  nome: "BRIOCHE CREME CHOC"},
    {codigo: 6514,  nome: "BROA DA CASA"},
    {codigo: 6514,  nome: "BROA DA CASA"},
    {codigo: 8174,  nome: "CAROLINA"},
    {codigo: 9851,  nome: "COXINHA CATUPIRY"},
    {codigo: 5227,  nome: "COXINHA DE CARNE"},
    {codigo: 9837,  nome: "COXINHA DE FRANGO"},
    {codigo: 953,   nome: "CROISSANT SABORES"},
    {codigo: 1695,  nome: "DELICIA DE ABACAXI"},
    {codigo: 6000,  nome: "DIPLOMATA"},
    {codigo: 1020,  nome: "DOCE MARIA MOLE"},
    {codigo: 3410,  nome: "DOCINHO"},
    {codigo: 998949, nome: "EMPADA"},
    {codigo: 8419,  nome: "ENROLADINHO"},
    {codigo: 6613,  nome: "FARINHA DE ROSCA"},
    {codigo: 1823,  nome: "FOCACCIA"},
    {codigo: 9913,  nome: "FOLHADO DE FRANGO"},
    {codigo: 6965,  nome: "GALETO"},
    {codigo: 596,   nome: "KIELZ"},
    {codigo: 6615,  nome: "MINI COXINHA"},
    {codigo: 953,   nome: "MINI CROISSANT"},
    {codigo: 1631,  nome: "MOUSSE DE CHOCOLATE"},
    {codigo: 1488,  nome: "MOUSSE DE MARACUJA"},
    {codigo: 3346,  nome: "MOUSSE DE MORANGO"},
    {codigo: 4144,  nome: "PAINETTOME CINCO LATE"},
    {codigo: 6873,  nome: "PÃO BAGUETE"},
    {codigo: 9690,  nome: "PÃO BATATA"},
    {codigo: 7078,  nome: "PÃO BOLACHÃO"},
    {codigo: 17864,  nome: "PÃO BRIOCHE"},
    {codigo: 20139,  nome: "PÃO DE ALHO"},
    {codigo: 7030,  nome: "PÃO DE FORMA"},
    {codigo: 21933,  nome: "PÃO DE LEITE"},
    {codigo: 34083,  nome: "PÃO DE MILHO COQU"},
    {codigo: 7115,  nome: "PÃO DE QUEIJO"},
    {codigo: 7496,  nome: "PÃO DELICIA"},
    {codigo: 949,  nome: "PÃO DOCE"},
    {codigo: 4251,  nome: "PÃO FRANCÊS"},
    {codigo: 3822,  nome: "PÃO HAMBÚRGUER"},
    {codigo: 3073,  nome: "PÃO HAMBÚRGUER GERGELIM"},
    {codigo: 3957,  nome: "PÃO HOT DOG RECHEADO"},
    {codigo: 7092,  nome: "PÃO INTEGRAL"},
    {codigo: 6835,  nome: "PÃO ITALIANO"},
    {codigo: 6316,  nome: "PÃO MANTEIGA"},
    {codigo: 21931,  nome: "PÃO PORTUGUÊS"},
    {codigo: 7122,  nome: "PÃO RECIFE"},
    {codigo: 9317,  nome: "PÃO SALADA RUSSA"},
    {codigo: 1984,  nome: "PASTEL DE PORNAS"},
    {codigo: 9713,  nome: "PETIT-FOUR DE COMBA"},
    {codigo: 4985,  nome: "PIZZA SABORES"},
    {codigo: 7061,  nome: "PUDIM"},
    {codigo: 9157,  nome: "ROCAMBOLE"},
    {codigo: 6989,  nome: "SALGADINHO DE QUEIJO"},
    {codigo: 1023,  nome: "SANDUICHE NATURAL"},
    {codigo: 408,  nome: "SOBREMESA"},
    {codigo: 7893,  nome: "SUSPINO"},
    {codigo: 8648,  nome: "TORRADA DE BOLO"},
    {codigo: 6781,  nome: "TORRADA SIMPLES"},
    {codigo: 1441,  nome: "TORTA DE ABACAXI"},
    {codigo: 7160,  nome: "TORTA DE BANANA"},
    {codigo: 7054,  nome: "TORTA DE CHOCOLATE"},
    {codigo: 1821,  nome: "TORTA DE MARACUJA"},
    {codigo: 6491,  nome: "TORTA DE MORANGO"},
    {codigo: 1907,  nome: "TORTA DOCE DE LEITE"},
    {codigo: 1785,  nome: "TORTA HOLANDESA"},
    {codigo: 6422,  nome: "TORTA LEITE CONDENS"},
    {codigo: 1549,  nome: "TORTA MOUSSE DE LIMAO"},
    {codigo: 69231,  nome: "TORTA SABORES"},
    {codigo: 5104,  nome: "TORTA SALGADA"},
    {codigo: 8485,  nome: "TORTILETE"},
    {codigo: 34096,  nome: "TORTILLE"}
];

// Função para normalizar texto (remover acentos e converter para minúsculas)
// Função para normalizar texto (remover acentos e converter para minúsculas)
function normalizarTexto(texto) {
    return texto.normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase();
}
// Função para limpar os resultados e o campo de busca
document.getElementById("btn-limpar").addEventListener("click", function () {
    document.getElementById("nome_produto").value = ""; // Limpa o campo de entrada
    document.getElementById("resultados").innerHTML = ""; // Limpa os resultados
});

// Função para buscar produtos
function buscarProdutos(nome) {
    const nomeNormalizado = normalizarTexto(nome);
    return produtos.filter(produto => 
        normalizarTexto(produto.nome).includes(nomeNormalizado)
    );
}

// Função para exibir os resultados
function exibirResultados(resultados) {
    const resultadosDiv = document.getElementById("resultados");
    resultadosDiv.innerHTML = ""; // Limpa resultados anteriores

    if (resultados.length === 0) {
        resultadosDiv.innerHTML = "<p>Nenhum produto encontrado.</p>";
        return;
    }

    resultados.forEach(produto => {
        const produtoDiv = document.createElement("div");
        produtoDiv.classList.add("produto");

        const imagem = document.createElement("img");
        imagem.src = produto.imagem || "assets/images/default.jpg"; // Usa uma imagem padrão caso não tenha
        imagem.alt = produto.nome;

        const infoDiv = document.createElement("div");
        infoDiv.classList.add("produto-info");

        const codigo = document.createElement("p");
        codigo.innerHTML = `<strong>Código:</strong> ${produto.codigo}`;

        const nome = document.createElement("p");
        nome.innerHTML = `<strong>Produto:</strong> ${produto.nome}`;

        infoDiv.appendChild(codigo);
        infoDiv.appendChild(nome);

        produtoDiv.appendChild(imagem);
        produtoDiv.appendChild(infoDiv);

        resultadosDiv.appendChild(produtoDiv);
    });
}

// Evento de submit do formulário
document.getElementById("form-busca").addEventListener("submit", function(event) {
    event.preventDefault(); // Evita o recarregamento da página

    const nomeProduto = document.getElementById("nome_produto").value.trim();
    if (!nomeProduto) return; // Evita buscas vazias

    const resultados = buscarProdutos(nomeProduto);
    exibirResultados(resultados);
});