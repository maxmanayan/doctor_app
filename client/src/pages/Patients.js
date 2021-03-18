import AxiosContainer from "../components/AxiosContainer";
import List from "../components/List";
import useAxiosOnMount from "../hooks/useAxiosOnMount";




const Patients = (props)=> {

  const {data, loading, error} = useAxiosOnMount('/api/patients')

  return (
    <AxiosContainer loading={loading} error={error}>
      <List name={'Patients'} data={data} />
    </AxiosContainer>
  )
}



export default Patients;