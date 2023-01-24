import { useState } from "react"
import Form from "./Components/Form"
import Header from "./Components/Header"
import PatientList from "./Components/PatientList"

function App() {

  const [patients,setPatients] = useState([])
  const [patient,setPatient] = useState({})
  const deletePatient = id => {

    const newerPatients = patients.filter(patient => patient.id!=id)
    setPatients(newerPatients)
  }

  return (
    <div className='container mx-auto mt-20'>
      <Header/>
      <div className='mt-12 md:flex'>
      <Form patient={patient} patients={patients} setPatients={setPatients} setPatient={setPatient}/>
      <PatientList patients={patients} setPatient={setPatient} deletePatient={deletePatient}/>
      </div>
    </div>
  )
}

export default App
