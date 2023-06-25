import ButtonAction from './components/Button'
import InitialSection from './components/InitialSection'
import SectionWrapper from './components/SectionWrapper'

function App() {


  return (
    <>
     
     <SectionWrapper backgroundcolor='orange' color='#ffffff'>
       <InitialSection/>
      <ButtonAction><a href='https://kiwify.com.br/' target='_blank'>Garanta sua vaga</a></ButtonAction>
      </SectionWrapper>  
     
     <SectionWrapper backgroundcolor='#ffffff' color='black'>
      <h1>Depoimentos</h1>
      </SectionWrapper>  
    
     

    </>
  )
}

export default App
