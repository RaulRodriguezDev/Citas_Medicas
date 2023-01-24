const Patient = ({patient}) => {

  const {name,owner,email,date,symptoms} = patient

  return (
    <div className="bg-white m-3 shadow-md px-5 py-10 rounded-xl">
      <p className="uppercase font-bold mb-3 text-gray-700">
          Name:{" "}
        <span className="normal-case font-normal">{name}</span>
      </p>
      <p className="uppercase font-bold mb-3 text-gray-700">
        Owner:{" "}
        <span className="normal-case font-normal">{owner}</span>
      </p>
      <p className="uppercase font-bold mb-3 text-gray-700">
        Email:{" "}
        <span className="normal-case font-normal">{email}</span>
      </p>
      <p className="uppercase font-bold mb-3 text-gray-700">
        Discharge Date:{" "}
        <span className="normal-case font-normal">{date}</span>
      </p>
      <p className="uppercase font-bold mb-3 text-gray-700">
        Symptoms:{" "}
        <span className="normal-case font-normal">
          {symptoms}
        </span>
      </p>
      <div className="flex justify-between mt-10">

      </div>
  </div>
  )
}

export default Patient
