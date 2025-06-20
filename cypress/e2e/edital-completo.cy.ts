import { getCurrentDateTime } from '../helpers/date.helper';
import 'cypress-real-events/support'; 
import 'cypress-iframe';


describe('Sistema Integrado de Gestão para Fundações de Amparo a Pesquisas', () => {
  beforeEach(() => {
    // Gancho em nível raíz
    // executa antes de realizar cada teste(it)
    cy.typelogin(
      'https://novo-sig.ledes.net',// [URL do sistema]
      'grupo8_gestor@sig.com', // [E-mail do usuário]
      'Grupo8@sig', // [Senha do usuário]
    ); //Acessa a página de login usando as credenciais do usuário e senha.
  });
  it.only('Realiza login no sistema e cria um edital médio', () => { //Teste edital simples, se houver mais de um teste, o it.only executa apenas esse teste.
    cy.get('[data-cy="nav-group-edital"]').click(); //Clica na aba Editais
    cy.get('[data-cy="nav-item-publicar-edital"]').click(); //Clica na opção Editais para acessar da página de Editais
    cy.get('.css-jir0u').click(); 
    cy.get('[data-cy="add-publicar-edital"]').click(); //Clica no botão "Adicionar" para criação de um novo Edital
    cy.get('[data-cy="nome"]').type(
      'Grupo-08 E.C. 003/2025 vinicius-aguiar', //Edite essa linha para preencher o nome do Edital
      { delay: 0 },
    ); //Preenche o campo "Nome" do Edital
    cy.get('[data-cy="restricoes"]').click(); //Clica na aba Restrições para seguir para a página de Restrições
    cy.get('[data-cy="definirDuracaoProjetoEmMeses"]').check(); //Marca a opção "Definir Duração do Projeto em Meses"
    cy.get('[data-cy="duracaoProjetoEmMeses"]').type('6'); //Preenche o campo "Duração do Projeto em Meses com o valor 6"
    cy.get('[data-cy="pesquisadorSubmeterVariasPropostas"]').check(); //Marca a opção "Pesquisador pode submeter várias propostas"
    cy.get('[data-cy="termo-de-aceite"]').click(); 
    //cy.get('.ck-editor__editable[role="textbox"]').should('be.visible').click().focus().realType('Termo de Aceite Edital Medio - Grupo 8');



    cy.get('[data-cy="texto-do-edital"]').click();
    //cy.get('[data-cy="texto"]').should('be.visible').click().focus().realType('Texto do Edital (Medio) - Grupo 8'); 
    cy.get('[data-cy="abrangencia"]').click();
    cy.get('[data-cy="estado-todos"]').click();

    //Informações Complementares
    cy.get('[data-cy="informacoes-complementares"]').click();
    cy.get('[data-cy="perguntaInfoId"]').click();
    cy.get('[data-cy="ocupacao-da-equi"]').click();
    cy.get('[data-cy="informacaoComplementarPergunta-adicionar"]').click(); 

    cy.get('[data-cy="perguntaInfoId"]').click();
    cy.get('[data-cy="objetivos-de-des"]').click();
    cy.get('[data-cy="informacaoComplementarPergunta-adicionar"]').click(); 

    cy.get('[data-cy="perguntaInfoId"]').click();
    cy.get('[data-cy="porte-da-empresa"]').click();
    cy.get('[data-cy="informacaoComplementarPergunta-adicionar"]').click();
    
    


    //
    cy.get('[data-cy="cronograma"]').click(); //Clica na aba Cronograma para seguir para a página de Cronograma
    cy.get('[data-cy="periodo-de-submissao"]').click(); //Clica na aba Período de Submissão para seguir para a página de Período de Submissão
    cy.get('[data-cy="add-button"]').click(); //Clica no botão "Adicionar" para criar um novo Período de Submissão
    cy.get('[data-cy="chamadaUnsaved.inicio"]').type(getCurrentDateTime()); //Preenche o campo "Início" do Período de Submissão com a data do dia de hoje
    cy.get('[data-cy="chamadaUnsaved.termino"]').type(
      getCurrentDateTime({ addYears: 1 }),
    ); //Preenche o campo "Término" do Período de Submissão com a data do dia de hoje + 1 ano
    cy.get('[data-cy="chamada-confirmar"]').click(); //Clica no botão "Salvar" para salvar as informações do Período de Submissão
    cy.get('[data-cy="orcamento"]').click(); //Clica na aba Orçamento para exibir as opções de Orçamento
    cy.get('[data-cy="programa"]').click(); //Clica em Programa para seguir para a página de Programa
    cy.get('[data-cy="programaId"]').click(); //Clica no campo de seleção de Programa
    cy.get('[data-cy-index="programaId-item-2"]').click(); 
    cy.get('[data-cy="add-natureza-da-despesa"]').click(); 
    cy.get('[data-cy="naturezaDespesaEditalUnsaved.naturezaDespesaId"]').click();
    cy.get('[data-cy="capital"]').click(); 
    
    cy.get('[data-cy="naturezaDespesaEditalUnsaved.valor"]').type('10');
    cy.get('[data-cy="naturezaDespesaEdital-confirmar"]').click();
    cy.get('[data-cy="perguntas"]').click();
    cy.get('[data-cy="indicadores-de-producao"]').click();

    cy.get('[data-cy="add-button"]').click();
    cy.get('[data-cy="indicadorProducaoUnsaved.id"]').click();
    cy.get('[data-cy="producao-bibliog"]').click();
    cy.get('[data-cy="indicadorProducao-confirmar"]').click();

    cy.get('[data-cy="add-button"]').click();
    cy.get('[data-cy="indicadorProducaoUnsaved.id"]').click();
    cy.get('[data-cy="producao-cultura"]').click();
    cy.get('[data-cy="indicadorProducao-confirmar"]').click();

    cy.get('[data-cy="add-button"]').click();
    cy.get('[data-cy="indicadorProducaoUnsaved.id"]').click();
    cy.get('[data-cy="producao-tecnica"]').click();
    cy.get('[data-cy="indicadorProducao-confirmar"]').click();


    cy.get('[data-cy="menu-salvar"]').check(); //Clica no botão "Salvar" para salvar as informações do Edital
    cy.get('[data-cy="menu-finalizar"]').check(); //Clica no botão "Finalizar" para salvar e sair da área de adição do Edital

    //Resultado esperado: O Edital deve ser salvo com sucesso e o usuário deve ser redirecionado para a página de Editais.
  });

});
