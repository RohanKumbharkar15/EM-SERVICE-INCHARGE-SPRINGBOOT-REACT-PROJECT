import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import EmployeeService from "../service/EmployeeService";
function EmployeeList() {
  const navigate = useNavigate();
  const [employees, setEmployees] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const response = await EmployeeService.getEmployees();
        setEmployees(response.data);
      } catch (error) {
        console.log(error);
      }
      setLoading(false);
    };
    fetchData();
  }, []);

//   deleteEmployee
  const deleteEmployee=(e,id)=>{
    e.preventDefault();
    EmployeeService.deleteEmployeeById(id).then(()=>{
        if(employees){
            setEmployees((prevElement)=>{
                return prevElement.filter((employee)=>employee.id !== id);
            })
        }
    })
}
// edit employee
    const editEmployee=(e,id)=>{
        e.preventDefault();
        navigate(`/editEmployee/${id}`);
    };
  return (
    <>
      <section className="container">
        <div>
          <button
            className="btn btn-outline-danger mt-5 "
            onClick={() => {
              navigate("/addEmployee");
            }}
          >
            Add Employee
          </button>
        </div>
        <div className="mt-2">
          <table className="table w-50  table-hover  shadow">
            <thead>
              <tr>
                <th>Name</th>
                <th>Phone</th>
                <th>Email</th>
                <th>Actions</th>
              </tr>
            </thead>
            {!loading && (
              <tbody>
                {employees.map((employee) => {
                  return (
                    <tr>
                      <td>{employee.name}</td>
                      <td>{employee.phone}</td>
                      <td>{employee.email}</td>
                      <td>
                        <a href="#" className="text-dark btn btn-outline-info" 
                            onClick={(e,id)=>editEmployee(e,employee.id)}
                        >
                          Update
                        </a>
                        <a href="#" className="text-dark btn btn-outline-info ms-2" onClick={(e,id)=>deleteEmployee(e,employee.id)}>
                          Delete
                        </a>
                      </td>
                    </tr>
                  );
                })
                }
              </tbody>
            )}
          </table>
        </div>
      </section>
    </>
  );
}
export default EmployeeList;
