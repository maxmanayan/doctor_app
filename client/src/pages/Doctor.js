import axios from "axios";
import { useState } from "react";
import { Link, useParams } from "react-router-dom";
import { Form, Select } from "semantic-ui-react";
import AxiosContainer from "../components/AxiosContainer";
import Button from "../components/Button";
import Card from "../components/Card";
import List from "../components/List";
import StringifyJSON from "../components/StringifyJSON";
import useAxiosOnMount from "../hooks/useAxiosOnMount";




const Doctor = (props)=> {
  const {id} = useParams()
  const [show, setShow]  = useState(false)

  const [patientID, setPatientID] = useState('')
  const [date, setDate] = useState('')
  const [description, setDescription] = useState('')


  const {data, loading, error} = useAxiosOnMount(`/api/doctors/${id}`)

  const handleSubmit = async () => {
    try {
      let res = await axios.post('/api/appointments', {doctor_id: id, patient_id: patientID, date: date, description: description})
      window.location.reload()
    } catch (err) {
      console.log(err)
    }
  }


  const getPatientOptions = () => {
    return data.unassociated_patients.map( (patient) => {
      return {key: patient.id, value: patient.id, text: patient.name}
    })
  }


  const handleChange = (event, patientInfo) => {
    // console.log(patientInfo.value)
    setPatientID(patientInfo.value)
  }

  return (
    <AxiosContainer loading={loading} error={error}>

      <Button onClick={()=>setShow(!show)}>Add New Patient with Appointment</Button>

      {show &&

      <div>
        <p>New Doctor Form</p>
        <Form onSubmit={handleSubmit}>
          <Form.Field>
            <label>Date of Appointment</label>
            <input value={date} onChange={(e)=>setDate(e.target.value)} placeholder='Date of Appointment'/>
          </Form.Field>
          <Form.Field>
            <label>Description of Appointment</label>
            <input value={description} onChange={(e)=>setDescription(e.target.value)} placeholder='Description of Appointment'/>
          </Form.Field>
          <Select onChange={handleChange} placeholder='Choose Patient' options={getPatientOptions()}/>
          <Button type='submit'>Submit</Button>
        </Form>
      </div>
      }
      {/* <List name={'Doctor'} data={data} /> */}
      <StringifyJSON json={data}/>
    </AxiosContainer>
  )
}


export default Doctor;