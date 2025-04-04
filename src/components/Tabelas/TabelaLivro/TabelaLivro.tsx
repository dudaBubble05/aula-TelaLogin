// Importação de hooks do React e componentes de UI do PrimeReact
import { useEffect, useState } from "react";
import LivroRequests from "../../../fetch/LivroRequests"; // Serviço para requisições relacionadas aos livros
import { Column } from 'primereact/column';
import { Button } from 'primereact/button';
import { DataTable } from 'primereact/datatable';


function TabelaLivro() {
    // Estado para armazenar a lista de livros
    const [livros, setLivros] = useState([]);

    // Botões personalizados para os cantos do paginador
    const paginatorLeft = <Button type="button" icon="pi pi-refresh" text />;
    const paginatorRight = <Button type="button" icon="pi pi-refresh" text />;

    // useEffect para buscar os livros da API assim que o componente for montado
    useEffect(() => {
        const fetchLivros = async () => {
            try {
                const listaDeLivros = await LivroRequests.listarLivros(); // Chama a API
                setLivros(listaDeLivros); // Atualiza o estado com os livros retornados
            } catch (error) {
                console.error(`Erro ao buscar livros: ${error}`);  // Log de erro se algo der errado   
            }
        };
        fetchLivros();
    },  [livros]);


    return(
        <>
          <DataTable value={livros} paginator rows={5} rowsPerPageOptions={[5, 10, 25, 50]} tableStyle={{ minWidth: '50rem' }}
             paginatorTemplate="RowsPerPageDropdown FirstPageLink PrevPageLink CurrentPageReport NextPageLink LastPageLink"
             currentPageReportTemplate="{first} to {last} of {totalRecords}" paginatorLeft={paginatorLeft} paginatorRight={paginatorRight}>
             <Column field="titulo" header="Titulo" style={{ width: '25%' }}></Column>
             <Column field="autor" header="Autora" style={{ width: '25%' }}></Column>
             <Column field="editora" header="Editora" style={{ width: '25%' }}></Column>
             <Column field="isbn" header="ISBN" style={{ width: '25%' }}></Column>
             <Column field="valorAquisicao" header="Valor de Aquisição" style={{ width: '25%' }} body={(e) => e.valorAquisicao.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}></Column>
          </DataTable>
        </>
    );
}

export default TabelaLivro;