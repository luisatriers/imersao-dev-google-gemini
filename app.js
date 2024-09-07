function pesquisar() {
    // Seleciona a seção onde os resultados serão exibidos
    let section = document.getElementById("resultados-pesquisa");
    let campoPesquisa = document.getElementById("campo-pesquisa").value;

    campoPesquisa = campoPesquisa.toLowerCase();

    //se o campoPesquisa for uma string sem nada, não execute o código.
    if (!campoPesquisa) {
        section.innerHTML = "<p>Nenhum resultado encontrado. Você precisa digitar algo na barra de pesquisa.</p>";
        return;
    } else {
        // Inicializa uma string vazia para armazenar os resultados da pesquisa
        let resultados = '';
        let titulo = '';
        let resumo = '';
        let tags = '';

        // Itera sobre cada item de dados da pesquisa
        for (let dado of dados) {
            titulo = dado.titulo.toLowerCase();
            resumo = dado.resumo.toLowerCase();
            tags = dado.tags.toLowerCase();
            if (titulo.includes(campoPesquisa) || resumo.includes(campoPesquisa) || tags.includes(campoPesquisa)) {
                // Constrói o HTML para cada resultado, formatando os dados do objeto 'dado'
                resultados += `
        <div class="item-resultado">
            <div class="imagem-resultado">
                <img src="${dado.imagem}" alt="${dado.imgalt}">
            </div>
            <div class="texto-resultado">
                <a href="#" target="_blank"><h2>${dado.titulo}</h2></a>
                <p>${dado.resumo}</p><a href="#" target="_blank">Continue Lendo →</a>
            </div>
        </div>
    `;
            }

        }

        if (!resultados) {
            resultados = "<p>Nenhum resultado encontrado.</p>";
        }

        // Atribui o HTML gerado à seção de resultados
        section.innerHTML = resultados;
    }

}