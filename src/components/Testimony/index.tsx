import { TestimonyContainer, TestimonyCardStyled } from './style'
import { H1Styled } from '../Price/style'
import depo1 from '../../assets/depoimento-1.jpg'
import depo2 from '../../assets/depoimento-2.jpg'
import depo3 from '../../assets/depoimento-3.jpg'
import depo4 from '../../assets/depoimento-4.jpg'
import depo5 from '../../assets/depoimento-5.jpg'
import depo6 from '../../assets/depoimento-6.jpg'

export interface ITestimonyCard {
  image: string
}

const TestimonyCard = ({image}:ITestimonyCard) => {
  return (
  <TestimonyCardStyled>
   <img src={image} alt="foto de depoimento" />
  </TestimonyCardStyled>)
}


const Testimony = () => {
   
  return (<>
      <H1Styled color='#f5914e'>QUEM JÁ PARTICIPOU DO SECA APROVA!</H1Styled>
      <br></br>
    <TestimonyContainer>
     <TestimonyCard image={depo1}/>
     <TestimonyCard image={depo6}/>
     <TestimonyCard image={depo5}/>
     <TestimonyCard image={depo3}/>
     <TestimonyCard image={depo2}/>
     <TestimonyCard image={depo4}/>
    </TestimonyContainer>
 </> )
}

export default Testimony