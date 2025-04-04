import { SERVER_CFG } from "../appConfig";

class AlunoRequests {

    private serverURL;
    private routeListaAluno;
    private routeCadastrarAluno;
    private routeAtulizaAluno;
    private routeRemoveAluno;

    constructor() {
        // rotas da API
        this.serverURL = SERVER_CFG.SERVER_URL
        this.routeListaAluno = '/lista/alunos'; // Rota cofigurado no servidor (API)
        this.routeCadastrarAluno = '/novo/aluno'; // Rota cofigurado no servidor (API)
        this.routeAtulizaAluno = '/atualiza/aluno'; // Rota cofigurado no servidor (API)
        this.routeRemoveAluno = '/remove/aluno'; // Rota cofigurado no servidor (API)
    }

    // Função que busca a lista de alunos na API
    async listarAlunos() {
        try{

            const respostaAPI = await fetch(`${this.serverURL}${this.routeListaAluno}`);

            if(respostaAPI.ok) {
                const listaDeAlunos = await respostaAPI.json();
                return listaDeAlunos;
            }
        } catch (error) {
            console.log(`Erro ao fazer a consulta: ${error}`);
            return null;
        }
    }
}

export default new AlunoRequests;