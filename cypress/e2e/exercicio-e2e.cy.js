/// <reference types ="cypress" />



context('Exercicio - Testes End-to-end - Fluxos de pedido', () => {
    
    /*  Como cliente 
          Quero acessar a Loja EBAC 
          Para fazer um pedido de 4 produtos 
          Fazendo a escolha dos produtos
          Adicionando ao carrinho
          Preenchendo todas opções no checkout
          E validando minha compra ao final */
    
        });
    
    
    beforeEach(() => {
        cy.visit('produtos')

        
          });
    
    it('Deve fazer um pedido na loja Ebac Shop de ponta a ponta', () => {
        
        cy.fixture('produtos').then(Dados) => {
            Dados.produtos.forEach(produto) => {
          cy.addProdutoCarrinho(produto) 
 
            }
 
         }
    

    });