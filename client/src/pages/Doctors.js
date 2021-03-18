import { Link } from "react-router-dom";
import AxiosContainer from "../components/AxiosContainer";
import Card from "../components/Card";
import List from "../components/List";
import useAxiosOnMount from "../hooks/useAxiosOnMount";




const Doctors = (props)=> {

  const {data, loading, error} = useAxiosOnMount('/api/doctors')

  return (
    <AxiosContainer loading={loading} error={error}>
      <List name={'Doctors'} data={data} renderData={(doctor) => {
        return(
        <Link to={`/doctors/${doctor.id}`}>
          <Card header={doctor.name}>
            <p>View Doctor</p>
          </Card>
        </Link>
      )}
      }/>
    </AxiosContainer>
  )
}



export default Doctors;