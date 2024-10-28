import './App.css'
import Header from './components/Header'
import Saudacoes from './components/Saudacoes';
import Localizacao from './components/Localizacao';
import Form from './components/Form';
function App() {

  return (
    <>
      <Header title="AP2 - Entreveiro" />
      <main className='p-4'>
        <section className='text-start p-4'>
          <Saudacoes nome="Mundo" />
          <Localizacao cep="90050320" />
        </section>
        <Form />
      </main>

    </>
  )
}

export default App
