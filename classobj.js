let produto = {
  nome: "Notebook",
  preco: 4599.99,
  emEstoque: true,
  desconto: 20,
  imprimirNome() {
    console.log(this.nome);
  },
  mostrarPreco() {
    let preco = this.preco - this.preco * (this.desconto / 100);
    console.log(preco.toFixed(2));
  },
  setDesconto(novoDesconto){
    let decontoTransformado = Number(novoDesconto)
    if(decontoTransformado >= 0 && decontoTransformado <= 100){
        this.desconto = decontoTransformado
        return this.desconto
        
    }else{
        return "Valor Inválido";
        
    }
  }
};

produto.mostrarPreco();
console.log(produto.nome);
produto.setDesconto("30");
produto.mostrarPreco();
