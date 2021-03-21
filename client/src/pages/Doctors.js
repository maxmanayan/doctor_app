import axios from "axios";
import { Link } from "react-router-dom";
import AxiosContainer from "../components/AxiosContainer";
import Button from "../components/Button";
import Card from "../components/Card";
import {Form} from "semantic-ui-react";
import List from "../components/List";
import useAxiosOnMount from "../hooks/useAxiosOnMount";
import { useState } from "react";




const Doctors = (props)=> {
  const [show, setShow]  = useState(false)
  const[name, setName] = useState('')
  
  
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
            <Button>Update</Button>
            <Button onClick={() => deleteDoctor(doctor.id)}>Delete</Button>
          </Card>
          
      )}
      }/>
    </AxiosContainer>
  )
}



export default Doctors;