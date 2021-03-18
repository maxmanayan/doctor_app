import FormattedMessage from "./FormattedMessage";
import StringifyJSON from "./StringifyJSON";

const ErrorMessage = ({error, fullError}) => {
  return (
    <FormattedMessage type='alert'>
      {fullError && <StringifyJSON json={error}/>}
      {/* TODO: this only works if there is a :message key on error -- may need to fix in the future */}
      {!fullError && <pre>{error.message}</pre>}
    </FormattedMessage>
  )
}



export default ErrorMessage;