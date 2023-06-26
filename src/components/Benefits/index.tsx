
import { BenefitsCard, BenefitsContainer } from './style'
import { H1Styled } from '../Price/style'
import listaSubstituicao from '../../assets/lista-substituicao.jpeg'
import listaCompras from '../../assets/lista-de-compras.jpg'
import planoAlimentar from '../../assets/plano-alimentar.jpeg'
import comunidade from '../../assets/comunidade.jpeg'

const Benefits = () => {
  return (<>

<H1Styled color='#ffff'>O QUE ESTÁ INCLUSO:</H1Styled>

    <BenefitsContainer> 

    <BenefitsCard>
      <img src={planoAlimentar} alt="foto" />
      <h2>Planos alimentares</h2>
      <p>Ganhe 4 planos alimentares para guiar seu mês de transformação</p>
    </BenefitsCard>
   
    <BenefitsCard>
      <img src={listaSubstituicao} alt="foto" />
      <h2>Listas de substituições</h2>
      <p>Lista para auxiliar na substituição dos alimentos.</p>
    </BenefitsCard>

    <BenefitsCard>
      <img src={listaCompras} alt="foto" />
      <h2>Listas compras</h2>
      <p>Lista de compras personalizada de acordo com os planos alimentares.</p>
    </BenefitsCard>

    <BenefitsCard >
      <img src={comunidade} alt="foto" />
      <h2>Comunidade com desafios</h2>
      <p>Comunidade ativa no WhatsApp e com desafios para guiar o processo de emagrecimento</p>
    </BenefitsCard>
   

    </BenefitsContainer>
  </>)
}

export default Benefits