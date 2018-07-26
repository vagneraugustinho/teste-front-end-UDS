$('document').ready(function(){
    variaveis();

   
    $('#btn_cadastrarPedido').click(function(){
        cadastrarPedido();
    });
});

function variaveis(){
    let btn_cadastrarPedido = document.getElementById("#btn_cadastrarPedido");
    let btn_inserirPedido   = document.getElementById("#btn_inserirPedido");
    

}

function cadastrarPedido(){
    let campo_cliente  = $("#nomeCliente").val();
    let campo_produto  = $("#descProduto").val();
    let campo_valor    = $("#valorProduto").val();
    let campo_qtde     = $("#qtdeProduto").val();
    let campo_subtotal = $("#subtotalProduto").val();
    
    localStorage.setItem("0004", campo_cliente +" "+ campo_produto);

    alert("cliente salvo");
}