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




const Patient = (props)=> {
  const {id} = useParams()

  const [show, setShow] = useState(false)
  const [date, setDate] = useState('')
  const [description, setDescription] = useState('')
  const [doctorID, setDoctorID] = useState('')
  
  const {data, loading, error} = useAxiosOnMount(`/api/patients/${id}`)

  const handleSubmit = async () => {
    try {
      await axios.post('/api/appointments', {date: date, description: description, doctor_id: doctorID, patient_id: id})
      window.location.reload()
    } catch (err) {
      console.log(err)
    }
  }


  const getDoctorOptions = () => {
    return data.unassociated_doctors.map((doctor)=> {
      return {key: doctor.id, value: doctor.id, text: doctor.name}
    })
  }

  const handleChange = (event, doctorInfo) => {
    setDoctorID(doctorInfo.value)
  }


  return (
    <AxiosContainer loading={loading} error={error}>
      <Button onClick={()=>setShow(!show)}>Add Doctor with Appointment</Button>
      {show && 
      <div>
        <p>Make an Appointment with a Doctor</p>

        <Form onSubmit={handleSubmit}>
          <Form.Field>
            <label>Date</label>
            <input value={date} onChange={(e)=>setDate(e.target.value)} placeholder='Date'/>
          </Form.Field>
          <Form.Field>
            <label>Description</label>
            <input value={description} onChange={(e)=>setDescription(e.target.value)} placeholder='Description'/>
          </Form.Field>
          <Select onChange={handleChange} placeholder='Select a Doctor' options={getDoctorOptions()}/>
          <Button type='submit'>Submit</Button>
        </Form>
      </div>
      }

      {/* <List name={'Patient'} data={data} /> */}
      <StringifyJSON json={data}/>
    </AxiosContainer>
  )
}


export default Patient;