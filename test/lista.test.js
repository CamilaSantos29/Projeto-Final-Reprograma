const listaAlunas = require('../src/models/lista')


describe("Testes de models", () => {
  const lista = new listaAlunas({
    id: "1",
    musica: "Porque é proibido pisar na grama",
    cantor: "Jorge Ben Jor",
    aluna: "Sarah Ribeiro"
    
  });

  it("Nova música", () =>{
    expect(lista.musica).toBe("Porque é proibido pisar na grama");
  });

  it("Adicionar cantor", () =>{
    expect(lista.cantor).toBe("Jorge Ben Jor");
  });

  it("Adicionar aluna", () =>{
    expect(lista.aluna).toBe("Sarah Ribeiro");
  });

  it("Deve salvar no banco de dados o novo livro", () =>{
    lista.save().then((dados) => {
      expect(dados.title).toBe("");
    })
  })
})