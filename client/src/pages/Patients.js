import { useState } from "react";
import { Link } from "react-router-dom";
import AxiosContainer from "../components/AxiosContainer";
import Button from "../components/Button";
import Card from "../components/Card";
import List from "../components/List";
import useAxiosOnMount from "../hooks/useAxiosOnMount";
import {Form} from "semantic-ui-react";
import axios from "axios";
import ToggleButton from "../components/ToggleButton";
import EditPatientForm from "./EditPatientForm";




const Patients = (props)=> {
  const [show, setShow] = useState(false)
  const [name, setName] = useState('')
  const [age, setAge] = useState('')

  const {data, loading, error} = useAxiosOnMount('/api/patients')


  const handleSubmit = async () => {
    try {
      let res = await axios.post('/api/patients', {name, age})
      window.location.reload()
    } catch (err) {
      console.log(err)
    }
  }

  const deletePatient = async (id) => {
    try {
      let res = await axios.delete(`/api/patients/${id}`)
      window.location.reload()
    } catch (err) {
      console.log(err)
    }
  }

  return (
    <AxiosContainer loading={loading} error={error}>
      <Button onClick={()=>setShow(!show)}>Add New Patient</Button>

      {show && 

      <div>
        <p>New Patient Form</p>
        
        <Form onSubmit={handleSubmit}>
          <Form.Field>
            <label>Name</label>
            <input value={name} onChange={(e)=>setName(e.target.value)} placeholder='Name' />
          </Form.Field>
          <Form.Field>
            <label>Age</label>
            <input value={age} onChange={(e)=>setAge(e.target.value)} placeholder='Age' />
          </Form.Field>
          <Button type='submit'>Submit</Button>
        </Form>

      </div>
      }

      <List name={'Patients'} data={data} renderData={(patient) => {
        return(
          <Card header={patient.name}>
            <p>Age: {patient.age}</p>
            <Link to={`/patients/${patient.id}`}>
              <p>View Patient</p>
            </Link>
            <Button onClick={() => deletePatient(patient.id)}>Delete</Button>
            <ToggleButton setTrue={true} setFalse={false} buttonText={'Update'} renderComponent={
              <EditPatientForm name={patient.name} age={patient.age} id={patient.id} />
            }/>
          </Card>
      )}
      }/>
    </AxiosContainer>
  )
}



export default Patients;