let carrinho = [];

function adicionarItem(item) {
    const idItem = carrinho.findIndex(
      (itemRegistrado) => item.nome === itemRegistrado.nome);
    if (idItem > -1) {
      throw Error("Não são permitidos itens iguais");
    }
    if(item.estoque <= 0){
      throw Error("Não há estoque desse item");
    }
    for (const atributo in item) {
      if(item[atributo] === null || item[atributo] === ""){
        throw Error("Não são permitidos valores nulos ou vazios");
      }
    }
    
    carrinho.push(item);
}

function removeItem(indiceItem) {
  carrinho.splice(indiceItem, 1);
}

function limpaCarrinho() {
  carrinho = [];
}


function alteraItem(indiceItem, item) {
  carrinho[indiceItem] = item;
}

function getId(itemARemover) {
  return carrinho.findIndex(
    (itemNoCarrinho) =>
      itemNoCarrinho.nome === itemARemover.nome
  );
}

function getItens() {
  return carrinho;
}

function getItem(index) {
  return carrinho[index];
}



function getQtdeItens() {
  return carrinho.length;
}

function verificaEstoque(item) {
    if(item.estoque <= 0){
      throw Error("Não há estoque desse item");
    }
    return true
}
function removerItem(itemARemover) {
    const idItem = getId(itemARemover);
    removeItem(idItem);
}

export default {
  adicionarItem,
  removerItem,
  getId,
  getItens,
  getQtdeItens,
  alteraItem,
  getItem,
  limpaCarrinho,
  verificaEstoque,
};
