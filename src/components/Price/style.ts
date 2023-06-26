import 'styled-components'
import styled from 'styled-components'

export const PriceContainer = styled.div`

width: 80%;
height: auto;

` 

export const H1Styled = styled.h1`
text-align: center;
font-weight: 800;

color: ${(props) => props.color};

`

export const ListItens = styled.div`

display: flex;
justify-content: center;
gap: 2rem;
padding:10px;
font-size: 1.35rem;


.old-price {
  font-size: larger;
  color: red;
  text-decoration: line-through;
}

.new-price {
  font-size: larger;
  color: red;
}


@media (max-width: 768px) {
  li {
  font-size: 25px ;
 }

 h2 {
  font-size: 30px;
 }
}


@media (max-width: 425px) {
li {
  font-size:15px ;
 }

 h2 {
  font-size: 20px;
 }

} 

@media (max-width: 320px) {

 li {
  font-size:15px ;
 }

 h2 {
  font-size: 20px;
 }

} 

`
