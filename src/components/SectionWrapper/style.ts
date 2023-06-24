import styled from 'styled-components'

export interface ISectionProps {
 backgroundColor: string
}


const SectionStyled = styled.div<ISectionProps>`
width: 100vw;
height: auto;

display: flex;
flex-direction: column ;
justify-content: center;
align-items: center;


padding: 20px;

background-color: ${(props) => props.backgroundColor};
color: ${(props) => props.color}



`

export default SectionStyled 