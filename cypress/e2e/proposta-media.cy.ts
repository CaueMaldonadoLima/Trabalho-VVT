import { delay } from "cypress/types/bluebird";

describe("Sistema Integrado de Gestão para Fundações de Amparo a Pesquisas", () => {
  beforeEach(() => {
    // Gancho em nível raíz
    // executa antes de realizar cada teste(it)
    cy.typelogin(
      "https://novo-sig.ledes.net", // [URL do sistema]
      "grupo8_pesq@sig.com", // [E-mail do usuário]
      "Grupo8@sig" // [Senha do usuário]
    ); //Acessa a página de login usando as credenciais do usuário e senha.
  });
  it("Realiza login no sistema e submete uma proposta", () => {
    cy.get('[data-cy="breadcrumb-home"]').click(); //Clica no botão "Home" para retornar à página anterior
    cy.wait(300);

    cy.get('[data-cy="editais-ver-mais"]').click(); //Clica no botão "Ver Mais" para acessar a página de Editais

    cy.get('[data-cy="visualizar-edital-grupo-08-e-s-007"]').click(); //Edite essa linha para selecionar o Edital respectivo

    cy.wait(300); //Aguarda 300ms para garantir que a página foi carregada completamente
    cy.get('[data-cy="criar-proposta"]').click(); //Clica no botão "Criar Proposta" para iniciar o processo de criação de uma nova proposta
    cy.get('[data-cy="tituloDoProjeto"]').type(
      "Submissão de Proposta Edital Medio - teste", //Preenche o campo "Título do Projeto" com o valor "Submissão de Proposta de Teste"
      { delay: 0 }
    );

    cy.get('[data-cy="next-button"]').click();

    //Abrangencia//
    cy.get('[data-cy="abrangencia"]').click();
    cy.wait(300);
    cy.get('[data-cy="abrangencia-adicionar"]').click();
    cy.get('[data-cy="abrangencia.0.estadoId"]').click();
    cy.get('[data-cy="sao-paulo"]').click();
    cy.get('[data-cy="abrangencia.0.abrangenciaMunicipio"]').click();
    cy.get('[data-cy="adamantina"]').click();
    cy.get('[data-cy="next-button"]').click();
    cy.wait(300);

    //Apresentação - indicadores de producao
    cy.get(":nth-child(1) > .e1szbxhy3 > :nth-child(1)").type("8"); //preenche o campo Artigo completo publicado, aceito ou submetido em periódicos científicos especializados com corpo editorial

    cy.get(
      ":nth-child(2) > .MuiTable-root > .MuiTableBody-root > :nth-child(4) > .e1szbxhy4 > .MuiFormControl-root"
    ).type("2"); //preenche o campo composicao musical
    cy.get(
      ":nth-child(3) > .MuiTable-root > .MuiTableBody-root > :nth-child(6) > .e1szbxhy4 > .MuiFormControl-root"
    ).type("3"); //preenche o campo maquete
    cy.get('[data-cy="next-button"]').click();

    //Apresentação -  Membros
    cy.get('[data-cy="nome-do-pesquisa"]').click();
    cy.get("#search-select-multiple-option-1").click();
    cy.get(".MuiButton-root > .MuiStack-root").click(); //botao de aceitar
    cy.get('[data-cy="nome-do-pesquisa"]').click();
    cy.get("#search-select-multiple-option-0").click();
    cy.get(".MuiButton-root > .MuiStack-root").click(); //botao de aceitar
    cy.get("#mui-131").click();
    cy.get("#mui-131-option-0").click();
    cy.get("#mui-133").click();
    cy.get("#mui-133-option-7").click();
    cy.get('[data-cy="next-button"]').click();

    //Apresentação - Atividades
    cy.get('[data-cy="propostaAtividade-adicionar"]').click();
    cy.get('[data-cy="propostaAtividade.0.titulo"]').type(
      "Teste de Proposta Edital Medio",
      { delay: 0 }
    );
    cy.get('[data-cy="propostaAtividade.0.mesInicio"]').click(); //clica no campo de mês de início
    cy.get('ul[role="listbox"] li').contains("2°").click();
    cy.get('[data-cy="propostaAtividade.0.duracao"]').click(); //clica no campo de duração
    cy.get('ul[role="listbox"] li').contains("4 meses").click();
    cy.get('[data-cy="propostaAtividade.0.cargaHorariaSemanal"]').click(); //carga horaria
    cy.get('ul[role="listbox"] li').contains("15 horas").click();
    cy.get('[data-cy="propostaAtividade.0.membroRespondavelId"]').click(); //responsavel
    cy.get('ul[role="listbox"] li').contains("Grupo 8").click();
    cy.get('[data-cy="next-button"]').click();

    //Termos
    cy.get('[data-cy="termoDeAceiteAceito"]').click();
    cy.get(".ex40wuf1").click();
  });
});
