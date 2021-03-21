import axios from "axios";
import { Link } from "react-router-dom";
import AxiosContainer from "../components/AxiosContainer";
import Button from "../components/Button";
import Card from "../components/Card";
import {Form} from "semantic-ui-react";
import List from "../components/List";
import useAxiosOnMount from "../hooks/useAxiosOnMount";
import { useState } from "react";
import ToggleButton from "../components/ToggleButton";
import EditDoctorForm from "./EditDoctorForm";




const Doctors = (props)=> {
  const [show, setShow]  = useState(false)
  const[name, setName] = useState('')
  
  // const [updateShow, setUpdateShow] = useState(false)
  
  const {data, loading, error} = useAxiosOnMount('/api/doctors')

  const handleSubmit = async () => {
    try { 
      let res = await axios.post('/api/doctors', {name})
      window.location.reload()
    } catch (err) {
      console.log(err)
    }
  }

  const deleteDoctor = async (id) => {
  try {
    let res = await axios.delete(`/api/doctors/${id}`)
    window.location.reload()
  } catch (err) {
    console.log(err)
  }
  }

  // const toggleUpdateForm = (id) => {
  //   doctor.id == id ? setUpdateShow(!updateShow) : setUpdateShow(false)
  // }
  
  return (
    <AxiosContainer loading={loading} error={error}>
      <Button onClick={()=>setShow(!show)}>Add New Doctor</Button>

      {show &&
      
      <div>
        <p>New Doctor Form</p>
        <Form onSubmit={handleSubmit}>
          <Form.Field>
            <label>Name</label>
            <input value={name} onChange={(e)=>setName(e.target.value)} placeholder='Name'/>
          </Form.Field>
          <Button type='submit'>Submit</Button>
        </Form>
      </div>
      }
      
      <List name={'Doctors'} data={data} renderData={(doctor) => {
        return(
          <Card header={doctor.name}>
            <Link to={`/doctors/${doctor.id}`}>
                <p>View Doctor</p>
            </Link>
            <Button onClick={() => deleteDoctor(doctor.id)}>Delete</Button>
            <ToggleButton setTrue={true} setFalse={false} buttonText={'Update'} renderComponent={
              <EditDoctorForm name={doctor.name} id={doctor.id}/>
            }/>
            {/* <Button onClick={()=>toggleUpdateForm(doctor.id)}>Update</Button> */}
            {/* {updateShow && <p>Update this Doctor</p>} */}
          </Card>
          
      )}
      }/>
    </AxiosContainer>
  )
}



export default Doctors;