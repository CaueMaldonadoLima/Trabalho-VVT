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
    cy.get('[data-cy="editais-ver-mais"]').click(); //Clica no botão "Ver Mais" para acessar a página de Editais

    cy.get('[data-cy="visualizar-edital-grupo-08-e-c-003"]').eq(0).click(); //Edite essa linha para selecionar o Edital respectivo

    cy.wait(300); //Aguarda 300ms para garantir que a página foi carregada completamente
    cy.get('[data-cy="criar-proposta"]').click(); //Clica no botão "Criar Proposta" para iniciar o processo de criação de uma nova proposta
    cy.get('[data-cy="tituloDoProjeto"]').type(
      "Submissão de Proposta Edital Completo - teste", //Preenche o campo "Título do Projeto" com o valor "Submissão de Proposta de Teste"
      { delay: 0 }
    );

    cy.wait(300);
    cy.get('[data-cy="informacoes-complementares"]').click();
    cy.wait(300);

    cy.get(
      '[data-cy="formularioPropostaInformacaoComplementar.pergunta-27"]'
    ).type("Descrição do projeto de teste para proposta completa", {
      delay: 0,
    });
    cy.get(
      '[data-cy="formularioPropostaInformacaoComplementar.pergunta-23-item-ods02-erradicar"]'
    ).click();
    cy.get(
      '[data-cy="formularioPropostaInformacaoComplementar.pergunta-24-item-media-faturament"]'
    ).click();
    cy.get(
      '[data-cy="formularioPropostaInformacaoComplementar.pergunta-25-item-saude-humana-e-o"]'
    ).click();
    cy.get(
      '[data-cy="formularioPropostaInformacaoComplementar.pergunta-26"]'
    ).type("29092025", { delay: 0 });

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
    //Coordenação - Dados pessoais
    //Coordenação - Endereço
    //Coordenação - Dados academicos
    //Area de conhecimento
    //dados profissionais

    cy.get('[data-cy="apresentacao"]').click();
    cy.get('[data-cy="descricao"]').click();
    cy.wait(300);

    //Apresentação - Descrição
    cy.get('[data-cy="formularioPropostaDescritiva.pergunta-1"]').type(
      "Descrição do projeto de teste para proposta completa",
      { delay: 0 }
    );
    cy.get('[data-cy="formularioPropostaDescritiva.pergunta-16"]').type(
      "Descrição do projeto de teste para proposta completa",
      { delay: 0 }
    );
    cy.get('[data-cy="formularioPropostaDescritiva.pergunta-5"]').type(
      "Descrição do projeto de teste para proposta completa",
      { delay: 0 }
    );
    cy.get('[data-cy="formularioPropostaDescritiva.pergunta-22"]').type(
      "Descrição do projeto de teste para proposta completa",
      { delay: 0 }
    );
    cy.get('[data-cy="formularioPropostaDescritiva.pergunta-8"]').type(
      "Descrição do projeto de teste para proposta completa",
      { delay: 0 }
    );

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
    cy.get('[data-testid="AddIcon"]').click(); //botao de aceitar
    cy.get('[data-cy="nome-do-pesquisa"]').click();
    cy.get("#search-select-multiple-option-0").click();
    cy.get('[data-testid="AddIcon"]').click(); //botao de aceitar

    cy.get('input[role="combobox"]').eq(1).click();
    cy.wait(300);
    cy.contains("li", "Parceir").click();
    cy.get('input[role="combobox"]').eq(2).click();
    cy.wait(300);
    cy.contains("li", "Ministrante").click();

    //cy.get("#mui-239-option-0").click();
    //cy.get("#mui-131-option-0").click();
    //cy.get("#mui-133").click();
    //cy.get("#mui-133-option-7").click();
    cy.get('[data-cy="next-button"]').click();

    //Apresentação - Atividades
    cy.get('[data-cy="propostaAtividade-adicionar"]').click();
    cy.get('[data-cy="propostaAtividade.0.titulo"]').type("testePEC");
    cy.get('[data-cy="propostaAtividade.0.mesInicio"]').click();
    cy.get('[data-cy="2"]').click();
    cy.get('[data-cy="propostaAtividade.0.duracao"]').click();
    cy.get('[data-cy="2-meses"]').click();
    cy.get('[data-cy="propostaAtividade.0.cargaHorariaSemanal"]').click();
    cy.get('[data-cy="1-hora"]').click();
    cy.get('[data-cy="propostaAtividade.0.membroResponsavelId"]').click();
    cy.get('[data-cy="next-button"]').click();

    //orcamento
    cy.get('[data-cy="orcamento"]').click();
    cy.get('[data-cy="faixaFinanciamentoId"]').click();
    cy.get('[data-cy="faixa-de-financiamento"]').click();
    cy.get('[data-cy="faixa-3-r-505-01"]').click();

    //Termos
    cy.get('[data-cy="termoDeAceiteAceito"]').click();
    cy.get(".ex40wuf1").click();
  });
});
