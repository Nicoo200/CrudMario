import React, { useState, useEffect } from "react";
import { toast } from 'react-toastify';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'react-toastify/dist/ReactToastify.css';

export default function Mario() {
  const [personagem, setPersonagem] = useState({
    url: '',
    nome: '',
    raca: '',
    tipo: '',
    descricao: ''
  });

  const [listaPersonagens, setListaPersonagens] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [editarIndex, setEditarIndex] = useState(null);

  // Atualizar valores do formulário
  function definirValor(event) {
    const { name, value } = event.target;
    setPersonagem({ ...personagem, [name]: value });
  }

  function abrirModalParaAdicionar() {
    setPersonagem({ url: '', nome: '', raca: '', tipo: '', descricao: '' });
    setEditarIndex(null); // Não estamos editando
    setShowModal(true);
  }

  function abrirModalParaEditar(index) {
    setPersonagem(listaPersonagens[index]);
    setEditarIndex(index); // Guardar qual personagem estamos editando
    setShowModal(true);
  }

  function salvarPersonagem() {
    const { url, nome, raca, tipo, descricao } = personagem;

    if (!url || !nome || !raca || !tipo || !descricao) {
      alert("Por favor, preencha todos os campos antes de salvar.");
      return;
    }

    if (editarIndex !== null) {
      // Atualizar personagem existente
      const listaAtualizada = [...listaPersonagens];
      listaAtualizada[editarIndex] = personagem;
      setListaPersonagens(listaAtualizada);
      toast.success('Personagem atualizado com sucesso!');
    } else {
      // Adicionar novo personagem
      setListaPersonagens([...listaPersonagens, personagem]);
      toast.success('Personagem adicionado com sucesso!');
    }

    setShowModal(false); // Fecha modal
  }

  function excluirPersonagem(index) {
    const listaAtualizada = listaPersonagens.filter((_, i) => i !== index);
    setListaPersonagens(listaAtualizada);
    toast.success('Personagem excluído com sucesso!');
  }

  useEffect(() => {
    const personagensSalvos = localStorage.getItem('personagens');
    if (personagensSalvos) {
      setListaPersonagens(JSON.parse(personagensSalvos));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('personagens', JSON.stringify(listaPersonagens));
  }, [listaPersonagens]);

  return (
    <div className="container mt-5">
      {/* Botão de adicionar */}
      <div className="text-center mb-4">
        <button className="btn btn-dark w-100" onClick={abrirModalParaAdicionar}>
          Adicionar Personagem
        </button>
      </div>
      {/* Lista */}
      <ul className="list-group">
        {listaPersonagens.map((p, index) => (
          <li 
            key={index} 
            className="list-group-item d-flex flex-column flex-md-row align-items-center rounded shadow-sm mb-3 p-3 bg-light"
          >
      {/* Botão de adicionar */}
      <div className="text-center mb-4">
        <button className="btn btn-dark" onClick={abrirModalParaAdicionar}>
          Adicionar Personagem
        </button>
      </div>
      {/* Lista */}
      <ul className="list-group">
        {listaPersonagens.map((p, index) => (
          <li key={index} className="list-group-item d-flex align-items-center rounded shadow-sm mb-3 p-3 bg-light">
            <img
              src={p.url}
              alt={p.nome}
              width={70}
              height={70}

              className="me-3 rounded-circle border border-2 border-primary mb-3 mb-md-0"
            />
            <div className="flex-grow-1">
              <h5 className="mb-1 text-primary">{p.nome}</h5>
              <div className="text-muted">
                Tipo: {p.tipo} <br /> Raça: {p.raca}
              </div>
              <p className="text-truncate" style={{ maxWidth: '300px' }}>
                Descrição: {p.descricao}
              </p>

              className="me-3 rounded-circle border border-2 border-primary"
            />
            <div className="flex-grow-1">
              <h5 className="mb-1 text-primary">{p.nome}</h5>
              <div className="text-muted">Tipo: {p.tipo} <br/> Raça: {p.raca}</div>
              <p className="text-truncate" style={{ maxWidth: '300px' }}>Descripition: {p.descricao}</p>

            </div>
            <div className="ms-auto d-flex gap-2">
              <button
                className="btn btn-warning btn-sm text-white"
                onClick={() => abrirModalParaEditar(index)}
                style={{ minWidth: '75px' }}
              >
                Editar
              </button>
              <button
                className="btn btn-danger btn-sm text-white"
                onClick={() => excluirPersonagem(index)}
                style={{ minWidth: '75px' }}
              >
                Excluir
              </button>
            </div>
          </li>
        ))}

      </ul>
  
      {/* Modal */}
      {showModal && (
        <div className="modal show fade d-block" tabIndex="-1" style={{ backgroundColor: "rgba(0,0,0,0.5)" }}>
          <div className="modal-dialog modal-dialog-centered modal-lg">
            <div className="modal-content">


      </ul>

      {/* Modal */}
      {showModal && (
        <div className="modal show fade d-block" tabIndex="-1" style={{ backgroundColor: "rgba(0,0,0,0.5)" }}>
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title">{editarIndex !== null ? "Editar Personagem" : "Adicionar Personagem"}</h5>
                <button type="button" className="btn-close" onClick={() => setShowModal(false)}></button>
              </div>
              <div className="modal-body">
                {["url", "nome", "raca", "tipo", "descricao"].map((field) => (
                  <div className="mb-3" key={field}>
                    <label className="form-label">
                      {field.charAt(0).toUpperCase() + field.slice(1)}:
                    </label>
              <div className="modal-body">
                {["url", "nome", "raca", "tipo", "descricao"].map((field) => (
                  <div className="mb-3" key={field}>
                    <label className="form-label">{field.charAt(0).toUpperCase() + field.slice(1)}:</label>
                    <input
                      type="text"
                      className="form-control"
                      name={field}
                      value={personagem[field]}
                      onChange={definirValor}
                    />
                  </div>
                ))}
              </div>
              <div className="modal-footer">
                <button type="button" className="btn btn-secondary" onClick={() => setShowModal(false)}>Cancelar</button>
                <button type="button" className="btn btn-primary" onClick={salvarPersonagem}>
                  {editarIndex !== null ? "Atualizar" : "Salvar"}
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
