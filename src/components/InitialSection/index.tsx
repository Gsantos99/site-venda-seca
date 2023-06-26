import {ContainerStyled, HeadingText} from './style'
import logoSeca from '../../assets/logo-seca.png'


const InitialSection = () => {
  return (
  <ContainerStyled>   
    <HeadingText>
    <h1>SECA FÉRIAS</h1>
    <br></br>
    <h2>ELIMINE ATÉ 6KG DE GORDURA
     EM 4 SEMANAS E TENHA UMA TRANSFORMAÇÃO COMPLETA</h2>
     <br></br>
     <p>Alcance o corpo que você sempre desejou, tenha mais saúde física, espiritual, emocional, financeira e muito mais!</p>
     
   </HeadingText>
     <img src={logoSeca} alt="logo do seca" />
 </ContainerStyled>
)
}

export default InitialSection