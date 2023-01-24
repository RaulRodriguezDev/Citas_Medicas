import { useState , useEffect} from "react"
import Form from "./Components/Form"
import Header from "./Components/Header"
import PatientList from "./Components/PatientList"

function App() {

  const [patients,setPatients] = useState([])
  const [patient,setPatient] = useState({})

  useEffect(() => {

    const getLocalStorage = () => {

      const patientsLS = JSON.parse(localStorage.getItem('patients')) ?? []
      setPatients(patientsLS)
      
    }
    getLocalStorage()

  },[])

  useEffect(() => {

    localStorage.setItem('patients',JSON.stringify(patients))
  },[patients])

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
