import React, { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import EmployeeService from '../service/EmployeeService'
import { useEffect } from "react";

function UpdateEmployee() {

  const navigate = useNavigate();
//   const {pathid}=useParams();
  const {id}=useParams();

  const [employee, setEmployee] = useState({
    id:id ,
    name: "",
    phone: "",
    email: ""
  });

  const handleChange = (e) => {
    const value = e.target.value;
    setEmployee({ ...employee, [e.target.name]: value });
  };

  useEffect(() => {
    const fetchData = async () => {
      
      try {
        const response = await EmployeeService.getEmployeeById(employee.id);
        setEmployee(response.data);
      } catch (error) {
        console.log(error);
      }
      
    };
    fetchData();
  }, []);

  const updateEmployee=(e)=>{
    e.preventDefault();
    // to communicate with backned
    EmployeeService.updateEmployee(employee,id).then((response)=>{
        console.log("saved",response);
        navigate('/');
    }).catch((error)=>{
        console.log(error);
    });
  }
  return (
    <>
      <section className="container">
        <div className="row">
          <div className="col-12 col-md-6">
            <div className="bg-light shadow shadow-4 rounded p-5">
              <h1 className="text-center mb-4 fst-italic">Update Employee</h1>
              <div className="text-center">
                <input
                  type="text"
                  name="name"
                  placeholder="Enter name"
                  className="w-75 p-2 rounded border-1 border-secondary mb-3"
                  onChange={handleChange}
                  value={employee.name} // Controlled input imp
                  
                />
              </div>
              <div className="text-center">
                <input
                  type="number"
                  name="phone"
                  placeholder="Enter phone"
                  onChange={handleChange}
                  className="w-75 p-2 rounded border-1 border-secondary mb-3"
                  value={employee.phone} // Controlled input
                />
              </div>
              <div className="text-center">
                <input
                  type="email"
                  name="email"
                  placeholder="Enter email"
                  onChange={handleChange}
                  className="w-75 p-2 rounded border-1 border-secondary mb-3"
                  value={employee.email} // Controlled input
                />
              </div>
              <div className="d-flex justify-content-center gap-2">
                <button className="btn btn-outline-danger ps-5 pe-5 pt-2 pb-2" onClick={updateEmployee}>
                  Update
                </button>
                
                <button
                  className="btn btn-outline-success ps-5 pe-5 pt-2 pb-2"
                  onClick={() => navigate("/")}
                >
                  Cancle
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default UpdateEmployee;


// import React, { useState } from "react";
// import { useNavigate } from "react-router-dom";

// function AddEmployee() {

//   const navigate = useNavigate();
//   const [employee, setEmployee] = useState({
//     id: "",
//     name: "",
//     phone: "",
//     email: ""
//   });

//   const handleChange = (e) => {
//     const value = e.target.value;
//     setEmployee({ ...employee, [e.target.name]: value });
//     // console.log(employee.name)
//   };

//   const reset=(e)=>{
//     // e.preventDefault();
//     setEmployee({
//             id: "",
//             name: "",
//             phone: "",
//             email: "",
//     });
//   }

//   return (
//     <>
//       <section className="container">
//         <div className="row">
//           <div className="col-12 col-md-6">
//             <div className="bg-light shadow shadow-4 rounded p-5">
//               <h1 className="text-center mb-4 fst-italic">Add New Employee</h1>
//               <div className="text-center">
//                 <input
//                   type="text"
//                   name="name"
//                   placeholder="enter name"
//                   className="w-75 p-2 rounded border-1 border-secondary mb-3"
//                   onChange={(e)=>{handleChange(e)}}
//                 ></input>
//               </div>
//               <div className="text-center">
//                 <input
//                   type="number"
//                   name="phone"
//                   placeholder="enter phone"
//                   onChange={(e)=>{handleChange(e)}}
//                   className="w-75 p-2 rounded border-1 border-secondary mb-3"
//                 ></input>
//               </div>
//               <div className="text-center">
//                 <input
//                   type="email"
//                   name="email"
//                   placeholder="enter email"
//                   onChange={(e)=>{handleChange(e)}}
//                   className="w-75 p-2 rounded border-1 border-secondary mb-3"
//                 ></input>
//               </div>
//               <div className="d-flex justify-content-center gap-2">
//                 <button className="btn btn-outline-danger ps-5 pe-5 pt-2 pb-2">
//                   Add
//                 </button>
//                 <button className="btn btn-outline-primary ps-5 pe-5 pt-2 pb-2" onClick={reset}>
//                   Clear
//                 </button>
//                 <button
//                   className="btn btn-outline-success ps-5 pe-5 pt-2 pb-2"
//                   onClick={() => {
//                     navigate("/");
//                   }}
//                 >
//                   Back
//                 </button>
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>
//     </>
//   );
// }
// export default AddEmployee;
