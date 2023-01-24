import Patient from "./Patient"

function PatientList() {
  return (
    <div className="md:w-1/2 lg:w-3/5 h-screen md:overflow-y-scroll">
      <h2 className="font-black text-center text-3xl">Patient List</h2>
      <p className="text-xl mt-5 mb-10 text-center">
        Admin your {""}
        <span className="text-indigo-600 font-bold">Patients and appointments</span>
      </p>
      <Patient/>
      <Patient/>
      <Patient/>
      <Patient/>
      <Patient/>
      <Patient/>
      <Patient/>
      <Patient/>
    </div>
  )
}

export default PatientList
