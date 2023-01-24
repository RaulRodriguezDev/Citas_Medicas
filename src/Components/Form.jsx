function Form() {
  return (
    <div className='md:w-1/2 lg:w-2/5 mx-5'>
      <h2 class='font-black text-center text-3xl'>Patient Tracking</h2>
      <p className="text-lg mt-5 text-center mb-10">
        Add patient and {""} <span className='font-bold text-indigo-600'>Admin</span>
      </p>
      <form className="bg-white shadow-md rounded-lg py-10 px-5 mb-10">
        <div className="mb-5">
            <label htmlFor='pet' className="block uppercase text-gray-700 font-bold">Pet Name</label>
            <input 
                    id="pet"
                    type="text" 
                    placeholder="Pet Name"
                    className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
            />
        </div>
        <div className="mb-5">
            <label htmlFor='owner' className="block uppercase text-gray-700 font-bold">Owner Name</label>
            <input 
                    id="owner"
                    type="text" 
                    placeholder="Owner Name"
                    className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
            />
        </div>
        <div className="mb-5">
            <label htmlFor='email' className="block uppercase text-gray-700 font-bold">Email</label>
            <input 
                    id="email"
                    type="email" 
                    placeholder="Owner's email contact"
                    className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
            />
        </div>
        <div className="mb-5">
            <label htmlFor='discharge_date' className="block uppercase text-gray-700 font-bold">Discharge date</label>
            <input 
                    id="discharge_date"
                    type="date" 
                    className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
            />
        </div>
        <div className="mb-5">
            <label htmlFor='symptoms' className="block uppercase text-gray-700 font-bold">Symptoms</label>
            <textarea 
                    id="symptoms" 
                    placeholder="Describe the symptoms"
                    className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
            />
        </div>
        <input 
                type="submit"
                className="bg-indigo-600 p-3 text-white text-bold w-full transition-all hover:bg-indigo-700 cursor-pointer uppercase"
                value="Add Patient"
        />
      </form>
    </div>
  )
}

export default Form
