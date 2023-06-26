import {FooterContainer} from './style'

export interface IFooter {
  title: string,
  year: number
}

const Footer = ({title, year}: IFooter) => {
  return (
    <FooterContainer>
      <h1>{title}</h1>
      <p> DANIELY SANTOS | {year} | TODOS OS DIREITOS RESERVADOS  </p>
      <p>Feito por <a href='https://www.instagram.com/giulyano_/' target='_blank'> Giulyano Santos</a></p>
    </FooterContainer>
  )
}

export default Footer