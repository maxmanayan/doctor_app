import { Link } from "react-router-dom";
import AxiosContainer from "../components/AxiosContainer";
import Card from "../components/Card";
import List from "../components/List";
import useAxiosOnMount from "../hooks/useAxiosOnMount";




const Patients = (props)=> {

  const {data, loading, error} = useAxiosOnMount('/api/patients')

  return (
    <AxiosContainer loading={loading} error={error}>
      <List name={'Patients'} data={data} renderData={(patient) => {
        return(
        <Link to={`/patients/${patient.id}`}>
          <Card header={patient.name}>
            <p>Age: {patient.age}</p>
          </Card>
        </Link>
      )}
      }/>
    </AxiosContainer>
  )
}



export default Patients;