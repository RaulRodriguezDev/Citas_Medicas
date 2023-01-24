import { useState } from "react"
import Form from "./Components/Form"
import Header from "./Components/Header"
import PatientList from "./Components/PatientList"

function App() {

  const [patients,setPatients] = useState([])

  return (
    <div className='container mx-auto mt-20'>
      <Header/>
      <div className='mt-12 md:flex'>
      <Form  patients={patients} setPatients={setPatients}/>
      <PatientList patients={patients}/>
      </div>
    </div>
  )
}

export default App
