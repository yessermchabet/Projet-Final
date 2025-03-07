import Alert from 'react-bootstrap/Alert';
import {useSelector} from 'react-redux'
const ErrorsCom=()=>{
    const Errors = useSelector(state=>state.ErrorsReducer)
    return(
        <div>
            {
                Errors.map((el,i,t)=>
                <Alert variant='danger'>{el.msg}
              </Alert>)
            }
        </div>
    )
}

export default ErrorsCom