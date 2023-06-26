import {ReactNode} from 'react'
import {ButtonStyled } from './style'

interface IButtonAction {
  children: ReactNode
 }

const ButtonAction = ({children}: IButtonAction) => {
  return (
    <ButtonStyled>
      {children}
    </ButtonStyled>
  )
}

export default ButtonAction