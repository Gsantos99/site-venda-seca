import { PriceContainer, H1Styled, ListItens } from './style'

const Price = () => {
  return (
    <PriceContainer>
    
     <H1Styled>O QUE VOCÊ IRÁ GANHAR:</H1Styled>
     
     <ListItens>

      <ul>
      <li>Assistência 24h</li>
      <li>1 ano de acesso às aulas do produto SECA Férias </li>
      <li>Planos alimentares</li>
      <li>Listas de substituições</li>
      <li>Lista de compras</li>
      <li>Treinos elaborados por um personal trainer</li>
      </ul>

      <div>
      <h2>Tenha acesso a tudo isso:</h2>
      <h2>De <span className='old-price'> 397,00</span> por 12X <span className='new-price'>9,74</span> </h2>
     </div>

     </ListItens>

    

    </PriceContainer>
  )
}

export default Price



















