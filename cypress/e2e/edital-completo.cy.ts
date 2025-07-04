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
    cy.get('.ck-editor__editable[role="textbox"]').should('be.visible').click().focus().realType('Termo de Aceite Edital Completo - Grupo 8');


    
    cy.get('[data-cy="texto-do-edital"]').click();
    cy.get('[data-cy="texto"]').should('be.visible').click().focus().realType('Texto do Edital (Completo) - Grupo 8'); 
    cy.get('[data-cy="abrangencia"]').click();
    cy.get('[data-cy="estado-todos"]').click();

    
     //Informações Complementares
    cy.get('[data-cy="informacoes-complementares"]').click();
    cy.get('[data-cy="perguntaInfoId"]').click();
    cy.get('[data-cy="ocupacao-da-equi"]').click();
    cy.wait(300);
    cy.get('[data-cy="informacaoComplementarPergunta-adicionar"]').click(); 

    cy.get('[data-cy="perguntaInfoId"]').click();
    cy.get('[data-cy="objetivos-de-des"]').click();
    cy.wait(300);
    cy.get('[data-cy="informacaoComplementarPergunta-adicionar"]').click(); 

    cy.get('[data-cy="perguntaInfoId"]').click();
    cy.get('[data-cy="porte-da-empresa"]').click();
    cy.wait(300);
    cy.get('[data-cy="informacaoComplementarPergunta-adicionar"]').click();

    cy.get('[data-cy="perguntaInfoId"]').click();
    cy.get('[data-cy="areas-tematicas"]').click();
    cy.wait(500);
    cy.get('[data-cy="informacaoComplementarPergunta-adicionar"]').click();

    cy.get('[data-cy="perguntaInfoId"]').click();
    cy.get('[data-cy="data-de-realizac"]').click();
    cy.wait(300);
    cy.get('[data-cy="informacaoComplementarPergunta-adicionar"]').click();
    

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
    //cy.get('[data-cy="add-natureza-da-despesa"]').click(); 
    //cy.get('[data-cy="naturezaDespesaEditalUnsaved.naturezaDespesaId"]').click();
    //cy.get('[data-cy="capital"]').click(); 
    //cy.get('[data-cy="naturezaDespesaEditalUnsaved.valor"]').type('10');
    //cy.get('[data-cy="naturezaDespesaEdital-confirmar"]').click();

    //RUBRICAS
    
    cy.get('[data-cy="rubricas"]').click(); 
    cy.get('[data-cy="add-button"]').click(); 

    //rubrica 1
    cy.get('[data-cy="editalRubricaUnsaved.tipoEditalRubrica"]').click();
    cy.get('[data-cy="diarias"]').click();
    cy.wait(300);
    cy.get('[data-cy="editalRubricaUnsaved.naturezaDespesaId"]').click();
    cy.get('[data-cy="capital"]').click();
    cy.wait(300);
    cy.get('[data-cy="editalRubrica-confirmar"]').click();

    //rubrica 2
    cy.get('[data-cy="add-button"]').click(); 
    cy.get('[data-cy="editalRubricaUnsaved.tipoEditalRubrica"]').click();
    cy.get('[data-cy="hospedagem-e-ali"]').click();
    cy.wait(300);
    cy.get('[data-cy="editalRubricaUnsaved.naturezaDespesaId"]').click();
    cy.get('[data-cy="auxilio-a-pesqui"]').click();
    cy.wait(300);
    cy.get('[data-cy="editalRubrica-confirmar"]').click();

    //rubrica 3
    cy.get('[data-cy="add-button"]').click(); 
    cy.get('[data-cy="editalRubricaUnsaved.tipoEditalRubrica"]').click();
    cy.get('[data-cy="servicos-de-terc"]').click();
    cy.wait(300);
    cy.get('[data-cy="editalRubricaUnsaved.naturezaDespesaId"]').click();
    cy.get('[data-cy="custeio"]').click();
    cy.wait(300);
    cy.get('[data-cy="editalRubrica-confirmar"]').click();

    //rubrica 4
    cy.get('[data-cy="add-button"]').click(); 
    cy.get('[data-cy="editalRubricaUnsaved.tipoEditalRubrica"]').click();
    cy.get('[data-cy="material-de-cons"]').click();
    cy.wait(300);
    cy.get('[data-cy="editalRubricaUnsaved.naturezaDespesaId"]').click();
    cy.get('[data-cy="capital"]').click();
    cy.wait(300);
    cy.get('[data-cy="editalRubrica-confirmar"]').click();

    //rubrica 5
    cy.get('[data-cy="add-button"]').click(); 
    cy.get('[data-cy="editalRubricaUnsaved.tipoEditalRubrica"]').click();
    cy.get('[data-cy="material-permane"]').click();
    cy.wait(300);
    cy.get('[data-cy="editalRubricaUnsaved.naturezaDespesaId"]').click();
    cy.get('[data-cy="capital"]').click();
    cy.wait(300);
    cy.get('[data-cy="editalRubrica-confirmar"]').click();

    //rubrica 6
    cy.get('[data-cy="add-button"]').click(); 
    cy.get('[data-cy="editalRubricaUnsaved.tipoEditalRubrica"]').click();
    cy.get('[data-cy="passagens"]').click();
    cy.wait(300);
    cy.get('[data-cy="editalRubricaUnsaved.naturezaDespesaId"]').click();
    cy.get('[data-cy="auxilio-a-pesqui"]').click();
    cy.wait(300);
    cy.get('[data-cy="editalRubrica-confirmar"]').click();

    //rubrica 7
    cy.get('[data-cy="add-button"]').click(); 
    cy.get('[data-cy="editalRubricaUnsaved.tipoEditalRubrica"]').click();
    cy.get('[data-cy="pessoal"]').click();
    cy.wait(300);
    cy.get('[data-cy="editalRubricaUnsaved.naturezaDespesaId"]').click();
    cy.get('[data-cy="auxilio-a-pesqui"]').click();
    cy.wait(300);
    cy.get('[data-cy="editalRubrica-confirmar"]').click();

    //rubrica 8
    cy.get('[data-cy="add-button"]').click(); 
    cy.get('[data-cy="editalRubricaUnsaved.tipoEditalRubrica"]').click();
    cy.get('[data-cy="encargos"]').click();
    cy.wait(300);
    cy.get('[data-cy="editalRubricaUnsaved.naturezaDespesaId"]').click();
    cy.get('[data-cy="custeio"]').click();
    cy.wait(300);
    cy.get('[data-cy="editalRubrica-confirmar"]').click();

    //rubrica 9
    cy.get('[data-cy="add-button"]').click(); 
    cy.get('[data-cy="editalRubricaUnsaved.tipoEditalRubrica"]').click();
    cy.get('[data-cy="bolsa"]').click();
    cy.wait(300);
    cy.get('[data-cy="editalRubricaUnsaved.naturezaDespesaId"]').click();
    cy.get('[data-cy="auxilio-a-pesqui"]').click();
    cy.wait(300);
    cy.get('[data-cy="editalRubrica-confirmar"]').click();
    


    //Faixas de Financiamento
    //financiamento 1
    cy.get('[data-cy="faixas-de-financiamento"]').click();
    cy.get('[data-cy="add-button"]').click(); 
    cy.get('[data-cy="faixaFinanciamentoUnsaved.nome"]').type('Faixa 1'); 
    cy.get('[data-cy="faixaFinanciamentoUnsaved.valorMinimo"]').type('1000');
    cy.get('[data-cy="faixaFinanciamentoUnsaved.valorMaximo"]').type('5000');
    cy.get('[data-cy="faixaFinanciamentoUnsaved.observacao"]').type('Observação da Faixa 1');
    cy.get('[data-cy="faixaFinanciamento-confirmar"]').click();

    //financiamento 2
    cy.get('[data-cy="faixas-de-financiamento"]').click();
    cy.get('[data-cy="add-button"]').click(); 
    cy.get('[data-cy="faixaFinanciamentoUnsaved.nome"]').type('Faixa 2'); 
    //cy.get('[data-cy="faixaFinanciamentoUnsaved.valorMinimo"]').type('1050');
    cy.get('[data-cy="faixaFinanciamentoUnsaved.valorMaximo"]').type('50500');
    cy.get('[data-cy="faixaFinanciamentoUnsaved.observacao"]').type('Observação da Faixa 2');
    cy.get('[data-cy="faixaFinanciamento-confirmar"]').click();

    //financiamento 3
    cy.get('[data-cy="faixas-de-financiamento"]').click();
    cy.get('[data-cy="add-button"]').click(); 
    cy.get('[data-cy="faixaFinanciamentoUnsaved.nome"]').type('Faixa 3'); 
    //cy.get('[data-cy="faixaFinanciamentoUnsaved.valorMinimo"]').type('1330');
    cy.get('[data-cy="faixaFinanciamentoUnsaved.valorMaximo"]').type('60000');
    cy.get('[data-cy="faixaFinanciamentoUnsaved.observacao"]').type('Observação da Faixa 3');
    cy.get('[data-cy="faixaFinanciamento-confirmar"]').click();

    //financiamento 4
    cy.get('[data-cy="faixas-de-financiamento"]').click();
    cy.get('[data-cy="add-button"]').click(); 
    cy.get('[data-cy="faixaFinanciamentoUnsaved.nome"]').type('Faixa 4'); 
    //cy.get('[data-cy="faixaFinanciamentoUnsaved.valorMinimo"]').type('1330');
    cy.get('[data-cy="faixaFinanciamentoUnsaved.valorMaximo"]').type('70000');
    cy.get('[data-cy="faixaFinanciamentoUnsaved.observacao"]').type('Observação da Faixa 4');
    cy.get('[data-cy="faixaFinanciamento-confirmar"]').click();

    //financiamento 5
    cy.get('[data-cy="faixas-de-financiamento"]').click();
    cy.get('[data-cy="add-button"]').click(); 
    cy.get('[data-cy="faixaFinanciamentoUnsaved.nome"]').type('Faixa 5'); 
    //cy.get('[data-cy="faixaFinanciamentoUnsaved.valorMinimo"]').type('1330');
    cy.get('[data-cy="faixaFinanciamentoUnsaved.valorMaximo"]').type('80000');
    cy.get('[data-cy="faixaFinanciamentoUnsaved.observacao"]').type('Observação da Faixa 5');
    cy.get('[data-cy="faixaFinanciamento-confirmar"]').click();
    
    //Documentos
    cy.get('[data-cy="documentos"]').click(); 

    cy.get('[data-cy="documentos-da-proposta"]').click();
    //1
    cy.get('[data-cy="documentoPropostaEdital-adicionar"]').click();
    cy.get('.MuiAccordionSummary-root').click(); 
    cy.get('[data-cy="documentoPropostaEdital.0.nome"]').type('Documento 1');
    cy.get('[data-cy="documentoPropostaEdital.0.formatoArquivo"]').click();
    cy.get('[data-cy="doc"]').click(); 
    cy.get('[data-cy="documentoPropostaEdital.0.tamanhoArquivo"]').type('9'); 
    cy.get('[data-cy="documentoPropostaEdital.0.descricao"]').type('Descrição do Documento 1');
    cy.wait(300);
    //2
    cy.get('[data-cy="documentoPropostaEdital-adicionar"]').click();
    cy.get('[data-cy="documentoPropostaEdital--expandable-item"]').click(); 
    cy.get('[data-cy="documentoPropostaEdital.1.nome"]').type('Documento 2');
    cy.get('[data-cy="documentoPropostaEdital.1.formatoArquivo"]').click();
    cy.get('[data-cy="pdf"]').click(); 
    cy.get('[data-cy="documentoPropostaEdital.1.tamanhoArquivo"]').type('8'); 
    cy.get('[data-cy="documentoPropostaEdital.1.descricao"]').type('Descrição do Documento 2');
    cy.wait(300);

    //Documentos Pessoais
    cy.get('[data-cy="documentos-pessoais"]').click();
    //Documento Pessoal 1
    cy.get('[data-cy="documentoPessoalEdital-adicionar"]').click();
    cy.get('[data-cy="documentoPessoalEdital.0.documentoPessoalId"]').click();
    cy.get('[data-cy="rg"]').click(); 
    cy.get('[data-cy="documentoPessoalEdital.0.obrigatorio"]').click(); //obrigatório o rg
    
    //Documento Pessoal 2
    cy.get('[data-cy="documentoPessoalEdital-adicionar"]').click();
    cy.get('[data-cy="documentoPessoalEdital.1.documentoPessoalId"]').click();
    cy.get('[data-cy="cpf"]').click();
    cy.get('[data-cy="documentoPessoalEdital.1.obrigatorio"]').click(); //obrigatório o cpf

    //Documento Pessoal 3
    cy.get('[data-cy="documentoPessoalEdital-adicionar"]').click();
    cy.get('[data-cy="documentoPessoalEdital.2.documentoPessoalId"]').click();
    cy.get('[data-cy="comprovante-de-r"]').click();
    cy.get('[data-cy="documentoPessoalEdital.2.obrigatorio"]').click(); //obrigatório comprovante de residência

    //Documento Pessoal 4
    cy.get('[data-cy="documentoPessoalEdital-adicionar"]').click();
    cy.get('[data-cy="documentoPessoalEdital.3.documentoPessoalId"]').click();
    cy.get('[data-cy="titulo-de-eleito"]').click(); //não obrigatório o título de eleitor

    //Documento Pessoal 5
    cy.get('[data-cy="documentoPessoalEdital-adicionar"]').click();
    cy.get('[data-cy="documentoPessoalEdital.4.documentoPessoalId"]').click();
    cy.get('[data-cy="passaporte"]').click(); //não obrigatório o passaporte
    
    


    //Descrição do Projeto

    cy.get('[data-cy="perguntas"]').click(); 
    cy.get('[data-cy="descricao-do-projeto"]').click(); 

    //descriçao 1
    cy.get('[data-cy="perguntaDescId"]').click();
    cy.get('[data-cy="informacoes-rele"]').click();
    cy.wait(300);
    cy.get('[data-cy="pergunta-adicionar"]').click();

    //descriçao 2
    //cy.get('[data-cy="perguntaDescId"]').click();
    //cy.get('[data-cy="experiencia-do-c"]').click();
    //cy.wait(300);
    //cy.get('[data-cy="pergunta-adicionar"]').click();
  
    //descriçao 3
    cy.get('[data-cy="perguntaDescId"]').click();
    cy.get('[data-cy="riscos-e-ativida"]').click();
    cy.wait(300);
    cy.get('[data-cy="pergunta-adicionar"]').click();

    //descriçao 4
    cy.get('[data-cy="perguntaDescId"]').click();
    cy.get('[data-cy="objetivo-geral"]').click();
    cy.wait(300);
    cy.get('[data-cy="pergunta-adicionar"]').click();

    //descriçao 5 
    cy.get('[data-cy="perguntaDescId"]').click();
    cy.get('[data-cy="referencia-bibli"]').click();
    cy.wait(300);
    cy.get('[data-cy="pergunta-adicionar"]').click();

    //descriçao 6
    cy.get('[data-cy="perguntaDescId"]').click();
    cy.get('[data-cy="metodos-e-materi"]').click();
    cy.wait(300);
    cy.get('[data-cy="pergunta-adicionar"]').click();
    
    
    //Indicadores de Produção
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

    //Bolsas
    cy.get('[data-cy="bolsas-do-edital"]').click();
    cy.get('[data-cy="bolsas"').click();
    
    //Bolsa1
    cy.get('[data-cy="add-button"]').click();
    cy.get('[data-cy="bolsaEditalUnsaved.modalidadeBolsaId"]').click();
    cy.get('[data-cy="at"]').click();
    cy.get('[data-cy="bolsaEditalUnsaved.nivelBolsaId"]').click();
    cy.get('[data-cy="nm-r-560-00"]').click(); 
    cy.wait(300);
    cy.get('[data-cy="bolsaEdital-confirmar"]').click();

    //Bolsa2
    cy.get('[data-cy="add-button"]').click();
    cy.get('[data-cy="bolsaEditalUnsaved.modalidadeBolsaId"]').click();
    cy.get('[data-cy="at"]').click();
    cy.get('[data-cy="bolsaEditalUnsaved.nivelBolsaId"]').click();
    cy.get('[data-cy="ns-r-770-00"]').click(); 
    cy.wait(300);
    cy.get('[data-cy="bolsaEdital-confirmar"]').click();

    //Bolsa3
    cy.get('[data-cy="add-button"]').click();
    cy.get('[data-cy="bolsaEditalUnsaved.modalidadeBolsaId"]').click();
    cy.get('[data-cy="dct"]').click();
    cy.get('[data-cy="bolsaEditalUnsaved.nivelBolsaId"]').click();
    cy.get('[data-cy="i-0-h-r-4-484-00"]').click(); 
    cy.wait(300);
    cy.get('[data-cy="bolsaEdital-confirmar"]').click();

    //Bolsa4
    cy.get('[data-cy="add-button"]').click();
    cy.get('[data-cy="bolsaEditalUnsaved.modalidadeBolsaId"]').click();
    cy.get('[data-cy="dct"]').click();
    cy.get('[data-cy="bolsaEditalUnsaved.nivelBolsaId"]').click();
    cy.get('[data-cy="ii-0-h-r-5-220-0"]').click(); 
    cy.wait(300);
    cy.get('[data-cy="bolsaEdital-confirmar"]').click();

    //Bolsa5
    cy.get('[data-cy="add-button"]').click();
    cy.get('[data-cy="bolsaEditalUnsaved.modalidadeBolsaId"]').click();
    cy.get('[data-cy="dti-cn-pq"]').click();
    cy.get('[data-cy="bolsaEditalUnsaved.nivelBolsaId"]').click();
    cy.get('[data-cy="a-0-h-r-880-00"]').click(); 
    cy.wait(300);
    cy.get('[data-cy="bolsaEdital-confirmar"]').click();

    //Bolsa6
    cy.get('[data-cy="add-button"]').click();
    cy.get('[data-cy="bolsaEditalUnsaved.modalidadeBolsaId"]').click();
    cy.get('[data-cy="dti-cn-pq"]').click();
    cy.get('[data-cy="bolsaEditalUnsaved.nivelBolsaId"]').click();
    cy.get('[data-cy="c-0-h-r-240-00"]').click(); 
    cy.wait(300);
    cy.get('[data-cy="bolsaEdital-confirmar"]').click();

    //Bolsa7
    cy.get('[data-cy="add-button"]').click();
    cy.get('[data-cy="bolsaEditalUnsaved.modalidadeBolsaId"]').click();
    cy.get('[data-cy="exp"]').click();
    cy.get('[data-cy="bolsaEditalUnsaved.nivelBolsaId"]').click();
    cy.get('[data-cy="a-r-5-200-00"]').click(); 
    cy.wait(300);
    cy.get('[data-cy="bolsaEdital-confirmar"]').click();

    //Bolsa8
    cy.get('[data-cy="add-button"]').click();
    cy.get('[data-cy="bolsaEditalUnsaved.modalidadeBolsaId"]').click();
    cy.get('[data-cy="exp"]').click();
    cy.get('[data-cy="bolsaEditalUnsaved.nivelBolsaId"]').click();
    cy.get('[data-cy="c-r-1-430-00"]').click(); 
    cy.wait(300);
    cy.get('[data-cy="bolsaEdital-confirmar"]').click();

    //Bolsa9
    cy.get('[data-cy="add-button"]').click();
    cy.get('[data-cy="bolsaEditalUnsaved.modalidadeBolsaId"]').click();
    cy.get('[data-cy="set"]').click();
    cy.get('[data-cy="bolsaEditalUnsaved.nivelBolsaId"]').click();
    cy.get('[data-cy="a-0-h-1-180-00"]').click(); 
    cy.wait(300);
    cy.get('[data-cy="bolsaEdital-confirmar"]').click();

    //Bolsa10
    cy.get('[data-cy="add-button"]').click();
    cy.get('[data-cy="bolsaEditalUnsaved.modalidadeBolsaId"]').click();
    cy.get('[data-cy="set"]').click();
    cy.get('[data-cy="bolsaEditalUnsaved.nivelBolsaId"]').click();
    cy.get('[data-cy="b-0-h-980-00"]').click(); 
    cy.wait(300);
    cy.get('[data-cy="bolsaEdital-confirmar"]').click();
    
    //Final
    cy.get('[data-cy="menu-salvar"]').click(); //Clica no botão "Salvar" para salvar as informações do Edital
    cy.get('[data-cy="menu-finalizar"]').click(); //Clica no botão "Finalizar" para salvar e sair da área de adição do Edital

    //Resultado esperado: O Edital deve ser salvo com sucesso e o usuário deve ser redirecionado para a página de Editais.
  });

});
