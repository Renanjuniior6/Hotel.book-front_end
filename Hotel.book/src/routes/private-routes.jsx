import { Route, Redirect } from "react-router-dom"
import  PropTypes  from "prop-types"

function PrivateRoutes({component, ...rest}){
  const user = localStorage.getItem('hotelbook:userData')

  if(!user){
    return <Redirect to="/login" />
  }

  return <Route  element={...rest} component={component} />
}

export default PrivateRoutes

PrivateRoutes.propTypes = {
  component: PropTypes.oneOfType([PropTypes.func, PropTypes.element])
}