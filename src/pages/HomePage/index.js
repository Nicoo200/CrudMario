import React, { useState, useEffect } from "react";

export default function Mario() {
  // states
  const [personagem, setPersonagem] = useState({
    url: '',
    nome: '',
    raca: '',
    tipo: '',
    descricao: ''
  });
  
  const [listaPersonagens, setListaPersonagens] = useState([]);
  const [editarIndex, setEditarIndex] = useState(null);

  // métodos para definir os valores dos campos
  function definirUrl(event) {
    setPersonagem({ ...personagem, url: event.target.value });
  }

  function definirNome(event) {
    setPersonagem({ ...personagem, nome: event.target.value });
  }

  function definirRaca(event) {
    setPersonagem({ ...personagem, raca: event.target.value });
  }

  function definirTipo(event) {
    setPersonagem({ ...personagem, tipo: event.target.value });
  }

  function definirDescricao(event) {
    setPersonagem({ ...personagem, descricao: event.target.value });
  }

  // Adicionar ou atualizar personagem
  function salvarPersonagem() {
    if (editarIndex !== null) {
      // Atualiza personagem existente
      const updatedPersonagens = [...listaPersonagens];
      updatedPersonagens[editarIndex] = personagem;
      setListaPersonagens(updatedPersonagens);
      setEditarIndex(null);
    } else {
      // Adiciona novo personagem
      setListaPersonagens([...listaPersonagens, personagem]);
    }
    // Limpar formulário após salvar
    setPersonagem({ url: '', nome: '', raca: '', tipo: '', descricao: '' });
  }

  // Editar personagem
  function editarPersonagem(index) {
    setPersonagem(listaPersonagens[index]);
    setEditarIndex(index);
  }

  // Excluir personagem
  function excluirPersonagem(index) {
    const updatedPersonagens = listaPersonagens.filter((_, i) => i !== index);
    setListaPersonagens(updatedPersonagens);
  }

  // Carregar lista de Personagens
  useEffect(() =>{
    if(localStorage.getItem('personagens') !== null){
      setListaPersonagens(JSON.parse(localStorage.getItem('personagens')))
    }
  }, []);

  //atualizar lista dos personagens do localStorage
  useEffect(() =>{
    localStorage.setItem('personagens', JSON.stringify(listaPersonagens))
  }, [listaPersonagens]);

  return (
    <div>
      <h1>Personagens do Mario</h1>

      <form onSubmit={(e) => e.preventDefault()}>
        <div>
          <label>URL da Imagem:</label>
          <input
            type="text"
            value={personagem.url}
            onChange={definirUrl}
          />
        </div>

        <div>
          <label>Nome:</label>
          <input
            type="text"
            value={personagem.nome}
            onChange={definirNome}
          />
        </div>

        <div>
          <label>Raça:</label>
          <input
            type="text"
            value={personagem.raca}
            onChange={definirRaca}
          />
        </div>

        <div>
          <label>Tipo:</label>
          <input
            type="text"
            value={personagem.tipo}
            onChange={definirTipo}
          />
        </div>

        <div>
          <label>Descrição:</label>
          <input
            type="text"
            value={personagem.descricao}
            onChange={definirDescricao}
          />
        </div>

        <button onClick={salvarPersonagem}>
          {editarIndex !== null ? "Atualizar" : "Adicionar Personagem"}
        </button>
      </form>

      <h2>Lista de Personagens</h2>
      <ul>
        {listaPersonagens.map((p, index) => (
          <li key={index}>
            <img src={p.url} alt={p.nome} width={50} height={50} />
            <strong>{p.nome}</strong> - {p.tipo} - {p.raca} <br />
            Descrição: {p.descricao}
            <div>
              <button onClick={() => editarPersonagem(index)}>Editar</button>
              <button onClick={() => excluirPersonagem(index)}>Excluir</button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
