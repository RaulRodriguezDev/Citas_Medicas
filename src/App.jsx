import Form from "./Components/Form"
import Header from "./Components/Header"
import PatientList from "./Components/PatientList"

function App() {

  return (
    <div className='container mx-auto mt-20'>
      <Header/>
      <div className='mt-12 md:flex'>
      <Form/>
      <PatientList/>
      </div>
    </div>
  )
}

export default App
