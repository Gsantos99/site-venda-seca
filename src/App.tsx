import Benefits from './components/Benefits'
import ButtonAction from './components/Button'
import Footer from './components/Footer'
import InitialSection from './components/InitialSection'
import SectionWrapper from './components/SectionWrapper'
import Testimony from './components/Testimony'
import Price from './components/Price'

function App() {


  return (
    <>
     
     <SectionWrapper backgroundcolor='orange' color='#ffffff'>
       <InitialSection/>
      <ButtonAction><a href='https://pay.kiwify.com.br/T8iTdnI ' target='_blank'>Garanta sua vaga!</a></ButtonAction>
      </SectionWrapper>  
     
     <SectionWrapper backgroundcolor='#ffffff' color='black'>
       <Testimony/>
       <ButtonAction><a href='https://pay.kiwify.com.br/T8iTdnI ' target='_blank'>Quer mudar? Clique aqui</a></ButtonAction>
      </SectionWrapper>  
    
     <SectionWrapper backgroundcolor='orange' color='#ffffff' >
      <Benefits/>
      <ButtonAction><a href='https://pay.kiwify.com.br/T8iTdnI ' target='_blank'>Garanta sua vaga!</a></ButtonAction>
     </SectionWrapper>

     <SectionWrapper backgroundcolor='#ffffff' color='black' >
      <Price />
      <ButtonAction><a href='https://pay.kiwify.com.br/T8iTdnI ' target='_blank'>Comece sua mudança!</a></ButtonAction>
     </SectionWrapper>

     <SectionWrapper backgroundcolor='orange' color='#ffffff' >
      <Footer title='Seca Férias' year={2023}/>
     </SectionWrapper>
     

    </>
  )
}

export default App
