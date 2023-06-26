import 'styled-components'
import styled from 'styled-components'

export const FooterContainer = styled.div`

width: 80%;
height: auto;
text-align: center;

p {
  margin-top: 5px;
}

a {
  text-decoration: none;
}




  @media (max-width: 425px) {

    width: auto;

    h1 {
      font-size:  30px;

    }

    p {
      font-size: 15px;
    }
  } 
  
  @media (max-width: 320px) {

    width: auto;

      
    h1 {
      font-size:  25px;

    }

    p {
      font-size: 15px;
    }

  } 


`