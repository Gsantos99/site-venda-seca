import styled from 'styled-components'

export const TestimonyContainer = styled.div`
width: 80%;
height: auto;
display: flex;
justify-content: center;
align-items: baseline;
flex-wrap: wrap;
gap: 10px;

@media (max-width: 768px) {
    width: 100%;
  }


  @media (max-width: 425px) {
    width: 100%;
  } 
  
  @media (max-width: 320px) {
    width: 100%;
  } 


`
export const TestimonyCardStyled = styled.div`
width: 300px;
height: auto;

img {
  width: 100%;
  height: auto;
}




`