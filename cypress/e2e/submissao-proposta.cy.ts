describe('Sistema Integrado de Gestão para Fundações de Amparo a Pesquisas', () => {
  beforeEach(() => {
    // Gancho em nível raíz
    // executa antes de realizar cada teste(it)
    cy.typelogin(
      'https://novo-sig.ledes.net',// [URL do sistema]
      'grupo8_pesq@sig.com', // [E-mail do usuário]
      'Grupo8@sig', // [Senha do usuário]
    ); //Acessa a página de login usando as credenciais do usuário e senha.
  });
  it('Realiza login no sistema e submete uma proposta', () => {
    cy.get('[data-cy="breadcrumb-home"]').click(); //Clica no botão "Home" para retornar à página anterior
    cy.get('[data-cy="editais-ver-mais"]').click(); //Clica no botão "Ver Mais" para acessar a página de Editais

    cy.get('[data-cy="visualizar-edital-grupo-08-e-s-001"]').click(); //Edite essa linha para selecionar o Edital respectivo

    cy.wait(300); //Aguarda 300ms para garantir que a página foi carregada completamente
    cy.get('[data-cy="criar-proposta"]').click(); //Clica no botão "Criar Proposta" para iniciar o processo de criação de uma nova proposta
    cy.get('[data-cy="tituloDoProjeto"]').type(
        'Submissão de Proposta Edital Simples - teste4', //Preenche o campo "Título do Projeto" com o valor "Submissão de Proposta de Teste"
        { delay: 0 },
    )
    //Atividade 3 - Faça a continuidade do teste, preenchendo os campos obrigatórios da proposta.
    cy.get('[data-cy="instituicaoExecutoraId"]').click();
    cy.get('[data-cy="ufms-universidad"]').click();
    cy.wait(300); //Aguarda 300ms para garantir que a página foi carregada completamente
    cy.get('[data-cy="unidadeExecutoraId"]').click();
    cy.get('[data-cy="facom-faculdade"]').click();
    cy.get('[data-cy="areaDeConhecimento-adicionar"]').click();
    cy.wait(300);
    cy.get('.MuiGrid-grid-xs-7 > .MuiGrid-container').click();
    cy.wait(300);
    cy.get('[data-cy="areaDeConhecimento.0.grandeAreaId"]').click();
    cy.get('[data-cy="ciencias-exatas"]').click();
    cy.wait(300);
    cy.get('[data-cy="areaDeConhecimento.0.areaId"]').click();
    cy.get('[data-cy="ciencia-da-compu"]').click();
    cy.wait(300);
    cy.get('[data-cy="areaDeConhecimento.0.subAreaId"]').click();
    cy.get('[data-cy="teoria-da-comput"]').click();
    cy.get('[data-cy="areaDeConhecimento.0.especialidadeId"]').click();
    cy.get('[data-cy="computabilidade"]').click();
    cy.get('[data-cy="next-button"]').click();

    //Abrangencia//
    cy.get('[data-cy="abrangencia-adicionar"]').click();
    cy.get('[data-cy="abrangencia.0.estadoId"]').click();
    cy.get('[data-cy="sao-paulo"]').click();
    cy.get('[data-cy="abrangencia.0.abrangenciaMunicipio"]').click();
    cy.get('[data-cy="adamantina"]').click();
    cy.get('[data-cy="next-button"]').click();

    //Coordenação - Dados pessoais
    cy.get('[data-cy="criadoPor.nome"]').type('Teste');
    cy.get('[data-cy="criadoPor.racaCorId"]').click();
    cy.get('[data-cy="branco-a"]').click();
    cy.get('[data-cy="criadoPor.nomeSocial"]').type('teste');
    cy.get('[data-cy="criadoPor.paisId"]').click();
    cy.get('[data-cy="brasil"]').click();
    cy.get('[data-cy="criadoPor.dataNascimento"]').click().type('14052004');
    cy.get('[data-cy="criadoPor.documento"]').type('05242199156');
    cy.get('[data-cy="next-button"]').click();

    //Coordenação - Endereço
    cy.get('[data-cy="criadoPor.endereco.cep"]').type('17800000');
    cy.get('[data-cy="criadoPor.endereco.bairro"]').type('centro');
    cy.get('[data-cy="criadoPor.endereco.logradouro"]').type('Alameda Navarro de Andrade');
    cy.get('[data-cy="criadoPor.endereco.estado"]').click();
    cy.get('[data-cy="sao-paulo"]').click();
    cy.get('[data-cy="criadoPor.endereco.numero"]').type('270');
    cy.get('[data-cy="criadoPor.endereco.municipio"]').click();
    cy.get('[data-cy="adamantina"]').click();
    cy.get('[data-cy="next-button"]').click();

    //Coordenação Dados acdemicos
    cy.get('[data-cy="criadoPor.instituicaoId"]').click();
    cy.get('[data-cy="ufms-universidad"]').click();
    cy.get('[data-cy="criadoPor.sugerirUnidade"]').click();
    cy.wait(300); 
    cy.get('[data-cy="criadoPor.sugerirUnidade"]').click();
    cy.get('[data-cy="criadoPor.unidadeId"]').click();
    cy.get('[data-cy="facom-faculdade"]').click();
    cy.get('[data-cy="criadoPor.nivelAcademicoId"]').click();
    cy.get('[data-cy="ensino-superior"]').click();

    //Area de conhecimento
    cy.get('[data-cy="criadoPor.areaDeConhecimento-adicionar"]').click();
    cy.get('.MuiAccordionSummary-content > :nth-child(1)').click();
    cy.get('[data-cy="criadoPor.areaDeConhecimento.0.grandeAreaId"]').click();
    cy.get('[data-cy="ciencias-exatas"]').click();
    cy.get('[data-cy="criadoPor.areaDeConhecimento.0.areaId"]').click();
    cy.get('[data-cy="ciencia-da-compu"]').click();
    cy.get('[data-cy="criadoPor.areaDeConhecimento.0.subAreaId"]').click();
    cy.get('[data-cy="sistemas-de-comp"]').click();
    cy.get('[data-cy="criadoPor.areaDeConhecimento.0.especialidadeId"]').click();
    cy.get('[data-cy="hardware"]').click();
    cy.get('[data-cy="next-button"]').click();

    //pula dados profissionais
    cy.get('[data-cy="next-button"]').click();

    //Apresentação - Membros
    cy.get('[data-cy="nome-do-pesquisa"]').click();
    cy.get('#search-select-multiple-option-1').click();
    cy.get('.MuiButton-root > .MuiStack-root').click(); //botao de aceitar
    cy.get('[data-cy="nome-do-pesquisa"]').click();
    cy.get('#search-select-multiple-option-0').click();
    cy.get('.MuiButton-root > .MuiStack-root').click(); //botao de aceitar
    cy.get('#mui-131').click();
    cy.get('#mui-131-option-0').click();
    cy.get('#mui-133').click();
    cy.get('#mui-133-option-7').click();
    cy.get('[data-cy="next-button"]').click();

    //Apresentação - Atividades
    cy.get('[data-cy="propostaAtividade-adicionar"]').click();
    cy.get('[data-cy="propostaAtividade.0.titulo"]').type('teste');
    cy.get('[data-cy="propostaAtividade.0.mesInicio"]').click();
    cy.get('#mui-225-option-0').click();
    cy.get('[data-cy="propostaAtividade.0.duracao"]').click();
    cy.get('#mui-227-option-0').click();
    cy.get('[data-cy="propostaAtividade.0.cargaHorariaSemanal"]').click();
    cy.get('[data-cy="1-hora"]').click();
    cy.get('[data-cy="propostaAtividade.0.membroResponsavelId"]').click();
    cy.get('#mui-231-option-0').click();
    cy.get('[data-cy="next-button"]').click();
    
    //Termos
    cy.get('[data-cy="termoDeAceiteAceito"]').click();
    cy.get('.ex40wuf1').click();

  }); 
});