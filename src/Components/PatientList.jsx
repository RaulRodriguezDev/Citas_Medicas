import Patient from "./Patient"

function PatientList({patients}) {
  return (
    <div className="md:w-1/2 lg:w-3/5 h-screen md:overflow-y-scroll">
      {patients && patients.lenght ? (
        <>
          <h2 className="font-black text-center text-3xl">Patient List</h2>
          <p className="text-xl mt-5 mb-10 text-center">
            Admin your {""}
            <span className="text-indigo-600 font-bold">Patients and appointments</span>
          </p>
          {patients.map(patient => <Patient key={patient.id} patient={patient}/>)}
        </>
      ):(
        <>
          <h2 className="font-black text-center text-3xl">Neither patient yet</h2>
          <p className="text-xl mt-5 mb-10 text-center">
            Begin adding your patients and {""}
            <span className="text-indigo-600 font-bold">Will displayed here</span>
          </p>
      </>
      )}
    </div>
  )
}

export default PatientList
