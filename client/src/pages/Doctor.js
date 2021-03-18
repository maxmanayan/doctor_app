import { Link, useParams } from "react-router-dom";
import AxiosContainer from "../components/AxiosContainer";
import Card from "../components/Card";
import List from "../components/List";
import StringifyJSON from "../components/StringifyJSON";
import useAxiosOnMount from "../hooks/useAxiosOnMount";




const Doctor = (props)=> {
  const {id} = useParams()

  const {data, loading, error} = useAxiosOnMount(`/api/doctors/${id}`)

  console.log(data)
  return (
    <AxiosContainer loading={loading} error={error}>
      {/* <List name={'Doctor'} data={data} /> */}
      <StringifyJSON json={data}/>
    </AxiosContainer>
  )
}


export default Doctor;