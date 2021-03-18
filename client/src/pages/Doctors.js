import AxiosContainer from "../components/AxiosContainer";
import List from "../components/List";
import useAxiosOnMount from "../hooks/useAxiosOnMount";




const Doctors = (props)=> {

  const {data, loading, error} = useAxiosOnMount('/api/doctors')

  return (
    <AxiosContainer loading={loading} error={error}>
      <List name={'Doctors'} data={data} />
    </AxiosContainer>
  )
}



export default Doctors;