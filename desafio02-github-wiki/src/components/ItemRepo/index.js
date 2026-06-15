import React from 'react'
import { ItemContainer, ActionButton } from './styles';

function ItemRepo({ repo, handleRemoveRepo }) {

const handleRemove = () => {
  handleRemoveRepo(repo.id)
}

  return (
    <ItemContainer onClick={handleRemove}>
      <h3>{repo.name || 'Repositório'}</h3>
      <p>{repo.full_name || 'Sem Sobrenome'}</p>
      <a href={repo.html_url} target="_blank" rel="noreferrer">
        Ver Repositório
      </a>
      <br />
      <ActionButton type="button" className="remover">
        Remover
      </ActionButton>
      <hr />
    </ItemContainer>
  )
}

export default ItemRepo;