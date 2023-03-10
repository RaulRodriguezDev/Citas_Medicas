import { useState , useEffect} from "react"
import Error from "./Error"

const generateId = () => {
        const random = Math.random().toString(32).substring(2)
        const date = Date.now().toString(32)

        return date + random
}

function Form({ patient, patients, setPatients, setPatient}) {

        const [name,setName] = useState("")
        const [owner,setOwner] = useState("")
        const [email,setEmail] = useState("")
        const [date,setDate] = useState("")
        const [symptoms,setSymptoms] = useState("")
        const [error,setError] = useState(false)

        useEffect(() => {

                if(Object.keys(patient).length>0){
                        setName(patient.name)
                        setOwner(patient.owner)
                        setEmail(patient.email)
                        setDate(patient.date)
                        setSymptoms(patient.symptoms)
                }
        },[patient])

        // Form validation
        const handleSubmit = (e) => {

                e.preventDefault()

                if([name,owner,email,date,symptoms].includes('')){
                        setError(true)
                        return;
                }
                setError(false)

                // Patient object, directly from the form
                const objPatient = {
                        name,
                        owner,
                        email,
                        date,
                        symptoms
                }

                if(patient.id){
                        objPatient.id = patient.id
                        const newerPatients = patients.map(patientState => patientState.id === patient.id ? objPatient : patientState)
                        setPatients(newerPatients)
                        setPatient({})
                }
                else{
                        objPatient.id = generateId()
                        setPatients([...patients,objPatient])
                }

                // Restart form
                setName('')
                setOwner('')
                setEmail('')
                setDate('')
                setSymptoms('')
        }

  return (
    <div className='md:w-1/2 lg:w-2/5 mx-5'>
      <h2 className='font-black text-center text-3xl'>Patient Tracking</h2>
      <p className="text-lg mt-5 text-center mb-10">
        Add patient and {""} <span className='font-bold text-indigo-600'>Admin</span>
      </p>
      <form className="bg-white shadow-md rounded-lg py-10 px-5 mb-10" onSubmit={handleSubmit}>
        {error && <Error><p>All fields are required</p></Error>}
        <div className="mb-5">
            <label htmlFor='pet' className="block uppercase text-gray-700 font-bold">Pet Name</label>
            <input 
                    id="pet"
                    type="text" 
                    placeholder="Pet Name"
                    className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
            />
        </div>
        <div className="mb-5">
            <label htmlFor='owner' className="block uppercase text-gray-700 font-bold">Owner Name</label>
            <input 
                    id="owner"
                    type="text" 
                    placeholder="Owner Name"
                    className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
                    value={owner}
                    onChange={(e) => setOwner(e.target.value)}
            />
        </div>
        <div className="mb-5">
            <label htmlFor='email' className="block uppercase text-gray-700 font-bold">Email</label>
            <input 
                    id="email"
                    type="email" 
                    placeholder="Owner's email contact"
                    className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
            />
        </div>
        <div className="mb-5">
            <label htmlFor='discharge_date' className="block uppercase text-gray-700 font-bold">Discharge date</label>
            <input 
                    id="discharge_date"
                    type="date" 
                    className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
                    value={date}
                    onChange={(e) => setDate(e.target.value)}
            />
        </div>
        <div className="mb-5">
            <label htmlFor='symptoms' className="block uppercase text-gray-700 font-bold">Symptoms</label>
            <textarea 
                    id="symptoms" 
                    placeholder="Describe the symptoms"
                    className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
                    value={symptoms}
                    onChange={(e) => setSymptoms(e.target.value)}
            />
        </div>
        <input 
                type="submit"
                className="bg-indigo-600 p-3 text-white text-bold w-full transition-all hover:bg-indigo-700 cursor-pointer uppercase"
                value={patient.id ? 'Update Patient' : 'Add Patient'}
        />
      </form>
    </div>
  )
}

export default Form
