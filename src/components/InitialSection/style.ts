import 'styled-components'
import styled from 'styled-components'

export const ContainerStyled = styled.div`
max-width: 800px;
height: auto;
display: flex;



img {
  width: 400px;
  height: auto;
  border-radius: 10px;
}


@media (max-width: 768px) {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    
    /* background-color: blue; */

    img {
     width: 250px;
     height: 250px;
    }
  }


  @media (max-width: 425px) {
    /* background-color: yellow; */

    display: flex;
    flex-direction: column;
    justify-content: center;
    text-align: center;
    align-items: center;
    
    /* background-color: blue; */

    img {
     width: 250px;
     height: 250px;
    }
  } 
  
  @media (max-width: 320px) {

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    
    /* background-color: blue; */

    img {
     width: 150px;
     height: 150px;
    }
  } 

`

export const HeadingText = styled.div`
padding: 20px;


h1 {
  font-size: 50px;
}

h2 {
   
    font-size: 28px;
    font-weight: 600;
    line-height: 36px;
    word-spacing: 0px;
}

h1, h2, p {
  text-shadow: #000 2px 3px 2px;
}



  @media (max-width: 425px) {
    
   h1 {
    font-size:40px;
   }
    
     h2 {
    font-size:25px;
   }

    p {
      font-size: 17px;
      text-align: center;
    }   
 
   } 


   @media (max-width: 320px) {
    
    h1 {
    font-size:40px;
   }
    
     h2 {
    font-size:25px;
   }
 
     p {
       font-size: 15px;
       text-align: center;
     }  
 
   } 
 

`

