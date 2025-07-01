describe("Sistema Integrado de Gestão para Fundações de Amparo a Pesquisas", () => {
  beforeEach(() => {
    // Gancho em nível raíz
    // executa antes de realizar cada teste(it)
    cy.typelogin(
      "https://novo-sig.ledes.net", // [URL do sistema]
      "grupo15_pesq@sig.com", // [E-mail do usuário]
      "Grupo15@sig" // [Senha do usuário]
    ); //Acessa a página de login usando as credenciais do usuário e senha.
  });
  it("Realiza login no sistema e submete uma proposta", () => {
    cy.get('[data-cy="breadcrumb-home"]').click(); //Clica no botão "Home" para retornar à página anterior
    cy.wait(300);

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
    cy.get('input[role="combobox"]').eq(1).click(); // select da função do membro
    cy.contains("li", "Parceir").click(); // busca a opção Parceiro e clica nela
    cy.wait(300);
    cy.get('[data-cy="nome-do-pesquisa"]').click();
    cy.get("#search-select-multiple-option-0").click();
    cy.get('[data-testid="AddIcon"]').click(); //botao de aceitar

    cy.get('input[role="combobox"]').eq(2).click(); // select da função do membro
    cy.contains("li", "Ministrante").click(); // busca a opção Ministrante e clica nela
    cy.wait(300);

    cy.get('[data-cy="next-button"]').click();
    cy.wait(300);

    //Apresentação - Atividades
    cy.get('[data-cy="propostaAtividade-adicionar"]').click();
    cy.get('[data-cy="propostaAtividade.0.titulo"]').type(
      "Teste de Proposta Edital Medio",
      { delay: 0 }
    );
    cy.get('[data-cy="propostaAtividade.0.mesInicio"]').click(); //clica no campo de mês de início
    cy.get('ul[role="listbox"] li')
      .contains("2°") // Encontra o item que contém o texto
      .click();
    cy.get('[data-cy="propostaAtividade.0.duracao"]').click(); //clica no campo de duração
    cy.get('ul[role="listbox"] li').contains("4 meses").click();
    cy.get('[data-cy="propostaAtividade.0.cargaHorariaSemanal"]').click();
    cy.get('ul[role="listbox"] li').contains("15 horas").click();
    cy.get('input[role="combobox"]').eq(3).click();
    cy.get('ul[role="listbox"] li').contains("Grupo 15").click();
    cy.get('[data-cy="next-button"]').click();

    //orcamento
    cy.get('[data-cy="orcamento"]').click();
    cy.get('[data-cy="faixa-de-financiamento"]').click(); //Clica no campo de faixa de financiamento
    cy.get('[data-cy="faixaFinanciamentoId"]').click();
    cy.get('[data-cy="faixa-3-r-505-01"]').click();
    cy.get('[data-cy="material-de-consumo"]').click();
    cy.wait(300);
    cy.get('[data-cy="add-button"]').click();
    cy.get('[data-cy="rubricaMaterialConsumoUnsaved.especificacao"]').type(
      "Eletronicos"
    );
    cy.get('[data-cy="rubricaMaterialConsumoUnsaved.unidadeMedida"]').click();
    cy.get('[data-cy="outros"]').click();
    cy.get('[data-cy="rubricaMaterialConsumoUnsaved.quantidade"]').type("4"); //Clica no campo de material de consumo e preenche com o valor 1000
    cy.get('[data-cy="rubricaMaterialConsumoUnsaved.custoUnitario"]').type(
      "17500"
    ); //Clica no campo de custo unitário e preenche com o valor 1000
    cy.get('[data-cy="rubricaMaterialConsumoUnsaved.mesPrevisto"]').click();
    cy.contains("li", "1°").click(); //Clica no campo de mês previsto e seleciona o mês de janeiro

    //Termos
    cy.get('[data-cy="termos"]').click();
    cy.get('[data-cy="termo-de-aceite"]').click();
    cy.get('[data-cy="termoDeAceiteAceito"]').click();
    cy.get(".ex40wuf1").click();
  });
});
