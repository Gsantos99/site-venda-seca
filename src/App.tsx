import ButtonAction from './components/Button'
import InitialSection from './components/InitialSection'
import SectionWrapper from './components/SectionWrapper'
import Testimony from './components/Testimony'

function App() {


  return (
    <>
     
     <SectionWrapper backgroundcolor='orange' color='#ffffff'>
       <InitialSection/>
      <ButtonAction><a href='https://kiwify.com.br/' target='_blank'>Garanta sua vaga</a></ButtonAction>
      </SectionWrapper>  
     
     <SectionWrapper backgroundcolor='#ffffff' color='black'>
       <Testimony/>
       <ButtonAction><a href='https://kiwify.com.br/' target='_blank'>Garanta sua vaga</a></ButtonAction>
      </SectionWrapper>  
    
     <SectionWrapper backgroundcolor='orange' color='#ffffff' >
      <h1>Beneficios</h1>
     </SectionWrapper>

     <SectionWrapper backgroundcolor='#ffffff' color='black' >
      <h1>O que ganha + preço </h1>
     </SectionWrapper>

     <SectionWrapper backgroundcolor='orange' color='#ffffff' >
      <h1>Footer </h1>
     </SectionWrapper>
     

    </>
  )
}

export default App
