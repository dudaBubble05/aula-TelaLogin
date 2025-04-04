import { SERVER_CFG } from "../appConfig";

class LivroRequests {

    private serverURL;
    private routeListaLivro;
    private routeCadastrarLivro;
    private routeAtulizaLivro;
    private routeRemoveLivro;

    constructor() {
        // rotas da API
        this.serverURL = SERVER_CFG.SERVER_URL
        this.routeListaLivro = '/lista/livros'; // Rota cofigurado no servidor (API)
        this.routeCadastrarLivro = '/novo/livro'; // Rota cofigurado no servidor (API)
        this.routeAtulizaLivro = '/atualiza/livro'; // Rota cofigurado no servidor (API)
        this.routeRemoveLivro = '/remove/livro'; // Rota cofigurado no servidor (API)
    }

    // Função que busca a lista de livros na API
    async listarLivros() {
        try{

            const respostaAPI = await fetch(`${this.serverURL}${this.routeListaLivro}`);

            if(respostaAPI.ok) {
                const listaDeLivros = await respostaAPI.json();
                return listaDeLivros;
            }
        } catch (error) {
            console.log(`Erro ao fazer a consulta: ${error}`);
            return null;
        }
    }
}

export default new LivroRequests;