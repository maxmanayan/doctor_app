import axios from "axios";
import { useState } from "react";
import { Button, Form } from "semantic-ui-react";

const EditPatientForm = ({name: defaultName, age: defaultAge, id}) => {
  const [name, setName] = useState(defaultName)
  const [age, setAge] = useState(defaultAge)

  const handleSubmit = async () => {
    try {
      console.log(id)
      let res = await axios.put(`/api/patients/${id}`, {name, age})
      setName(res.data.name)
      setAge(res.data.age)
      window.location.reload()
    } catch (err) {
      console.log(err)
    }
  }

  return(
    <>
      <p>Update Doctor</p>
        <Form onSubmit={handleSubmit}>
          <Form.Field>
            <label>Name</label>
            <input value={name} onChange={(e)=>setName(e.target.value)} placeholder='Name'/>
          </Form.Field>
          <Form.Field>
            <label>Age</label>
            <input value={age} onChange={(e)=>setAge(e.target.value)} placeholder='Age'/>
          </Form.Field>
          <Button type='submit'>Submit</Button>
        </Form>
    </>
  )
}


export default EditPatientForm;