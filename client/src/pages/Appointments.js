import AxiosContainer from "../components/AxiosContainer";
import List from "../components/List";
import useAxiosOnMount from "../hooks/useAxiosOnMount";




const Appointments = (props)=> {

  const {data, loading, error} = useAxiosOnMount('/api/appointments')

  return (
    <AxiosContainer loading={loading} error={error}>
      <List name={'Appointments'} data={data} />
    </AxiosContainer>
  )
}



export default Appointments;