const Patient = () => { 
  return (
    <div className="bg-white m-3 shadow-md px-5 py-10 rounded-xl">
    <p className="uppercase font-bold mb-3 text-gray-700">
        Name:{" "}
      <span className="normal-case font-normal">Hook</span>
    </p>
    <p className="uppercase font-bold mb-3 text-gray-700">
      Owner:{" "}
      <span className="normal-case font-normal">Juan</span>
    </p>
    <p className="uppercase font-bold mb-3 text-gray-700">
      Email:{" "}
      <span className="normal-case font-normal">correo@email.com</span>
    </p>
    <p className="uppercase font-bold mb-3 text-gray-700">
      Discharge Date:{" "}
      <span className="normal-case font-normal">January 23 2023</span>
    </p>
    <p className="uppercase font-bold mb-3 text-gray-700">
      Symptoms:{" "}
      <span className="normal-case font-normal">
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsam aut necessitatibus nostrum tempore aliquam magnam
        odio id cupiditate nesciunt quas, suscipit accusamus cum nulla, alias perferendis, nobis perspiciatis eaque? 
        Corrupti!
      </span>
    </p>
  </div>
  )
}

export default Patient
