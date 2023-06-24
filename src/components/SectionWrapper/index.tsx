import {ReactNode } from 'react'
import SectionStyled from './style'

interface ISectionWrapper {
 children: ReactNode,
 backgroundcolor: string
 color?:string
}

const SectionWrapper = ({children, backgroundcolor, color}: ISectionWrapper) => {
  return (
  <SectionStyled backgroundColor={backgroundcolor} color={color}>
   {children}
  </SectionStyled>)
}

export default SectionWrapper