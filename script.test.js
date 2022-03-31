import repositorio from "./script.js";


describe("Gerenciamento de itens", () => {
  beforeEach(() => {
    repositorio.limpaCarrinho()
  });

  test("Deve inserir um item", () => {
    repositorio.adicionarItem({
      id: 1,
      nome: "Arranhador",
      preco: "25,80",
      estoque: 1
    })
    const qtdeItens = repositorio.getQtdeItens();
    expect(qtdeItens).toBe(1);
  });


  test("Deve inserir vários itens", () => {
    const item1 = {
      id: 1,
      nome: "Anti-pulgas",
      preco: "25,80",
      estoque: 1
    };
    const item2 = {
      id:2,
      nome: "Arranhador",
      preco: "119,80",
      estoque: 1
    };
    repositorio.adicionarItem(item1);
    repositorio.adicionarItem(item2);
    const qtdeItens = repositorio.getQtdeItens();
    expect(qtdeItens).toBe(2);
  });

  test("Deve remover um item", () => {
    const item = {
      id: 1,
      nome: "Racão Chester",
      preco: "25,80",
      estoque: 1
    };

    repositorio.adicionarItem(item);
    let qtdeItens = repositorio.getQtdeItens();
    expect(qtdeItens).toBe(1);
    repositorio.removerItem(item);
    qtdeItens = repositorio.getQtdeItens();
    expect(qtdeItens).toBe(0);
  });

  test("Deve Atualizar um item", () => {
    const item = {
      id: 1,
      nome: "Racão Chester",
      preco: "25,80",
      estoque: 1
    };
    repositorio.adicionarItem(item);
    let qtdeItens = repositorio.getQtdeItens();
    expect(qtdeItens).toBe(1);
    const item2 = {
      id: 1,
      nome: "Racão Miau",
      preco: "25,80",
      estoque: 1
    };
    const idItem = repositorio.getId(item)
    repositorio.alteraItem(idItem, item2)
    const alterado = repositorio.getItem(idItem)
    expect(alterado == item2).toBe(true);
  });

  test("Deve remover vários itens", () => {
    const item1 = {
      id: 1,
      nome: "Racão Miau",
      preco: "25,80",
      estoque: 1
    };
    const item2 = {
      id:2,
      nome: "Anti-pulgas",
      preco: "119,80",
      estoque: 1
    };
    repositorio.adicionarItem(item1);
    repositorio.adicionarItem(item2);
    let qtdeItens = repositorio.getQtdeItens();
    expect(qtdeItens).toBe(2);
    repositorio.removerItem(item1);
    repositorio.removerItem(item2);
    qtdeItens = repositorio.getQtdeItens();
    expect(qtdeItens).toBe(0);
  });
  
  test("Não deve permitir dois itens iguais", () => {
    const item1 = {
      id: 1,
      nome: "Anti-pulgas",
      preco: "25,80",
      estoque: 1
    };
    repositorio.adicionarItem(item1);

    const qtdeItens = repositorio.getQtdeItens();
    expect(qtdeItens).toBe(1);

    expect(() => {
      repositorio.adicionarItem(item1);
    }).toThrow(Error);
  });


  test("Deve remover todos os itens", () => {
    const item1 = {
      id: 1,
      nome: "Anti-pulgas",
      preco: "25,80",
      estoque: 1
    };
    
    repositorio.adicionarItem(item1)
    const item2 = {
        id: 2,
        nome: "Arranhador",
        preco: "25,80",
        estoque: 1
      };
      
    repositorio.adicionarItem(item2)
    repositorio.limpaCarrinho()
    let qtdeItens = repositorio.getQtdeItens();
    expect(qtdeItens).toBe(0);
  });


  test("Não deve permitir adicionar item com valor nulo", () => {
    const item1 = {
      id: 1,
      nome: "",
      preco: "25,80",
      estoque: 1
    };
    expect(() => {
      repositorio.adicionarItem(item1);
    }).toThrow(Error);
  });


  test("Deve verificar se há estoque do item", () => {
    const item = {
      id: 1,
      nome: "Anti-pulgas",
      preco: "25,80",
      estoque: 0
    };
    //Caso não houver item em estoque deve lançar erro
    expect(() => {
      repositorio.verificaEstoque(item)
    }).toThrow(Error);
  });


  test("Não deve permitir adicionar itens com estoque vazio", () => {
    const item1 = {
      id: 1,
      nome: "Ração",
      preco: "25,80",
      estoque: 0
    };
    expect(() => {
      repositorio.adicionarItem(item1)
    }).toThrow(Error);
  });
});
