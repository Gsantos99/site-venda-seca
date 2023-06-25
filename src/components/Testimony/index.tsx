import { TestimonyContainer, TestimonyCardStyled } from './style'
import logoSeca from '../../assets/logo-seca.png'

export interface ITestimonyCard {
  image: string
}


const TestimonyCard = ({image}:ITestimonyCard) => {
  return (
  <TestimonyCardStyled>
   <img src={image} alt="foto de depoimento" />
  </TestimonyCardStyled>)
}

//TODO Tornar os depoimentos mais dinâmicos 

const Testimony = () => {
   
  return (
    <TestimonyContainer>
     <TestimonyCard image={logoSeca}/>
     <TestimonyCard image={logoSeca}/>
     <TestimonyCard image={logoSeca}/>
     <TestimonyCard image={logoSeca}/>
     <TestimonyCard image={logoSeca}/>
     <TestimonyCard image={logoSeca}/>
    </TestimonyContainer>
  )
}

export default Testimony