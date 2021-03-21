import axios from "axios";
import { useState } from "react";
import { Button, Form } from "semantic-ui-react";

const EditDoctorForm = ({name: defaultName, id}) => {
  const [name, setName] = useState(defaultName)

  const handleSubmit = async () => {
    try {
      console.log(id)
      let res = await axios.put(`/api/doctors/${id}`, {name})
      setName(res.data)
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
            {/* <input placeholder='Name' /> */}
            <input value={name} onChange={(e)=>setName(e.target.value)} placeholder='Name'/>
          </Form.Field>
          {/* <Button>Submit</Button> */}
          <Button type='submit'>Submit</Button>
        </Form>
    </>
  )
}


export default EditDoctorForm;