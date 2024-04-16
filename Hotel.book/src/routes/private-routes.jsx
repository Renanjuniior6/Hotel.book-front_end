import { Route, Redirect } from "react-router-dom"
import  PropTypes  from "prop-types"

function PrivateRoutes({component, ...rest}){
  const user = localStorage.getItem('hotelBook:userData')

  if(!user){
    return <Redirect to="/login" />
  }

  return <Route  element={...rest} component={component} />
}

export default PrivateRoutes

PrivateRoutes.propTypes = {
  component: PropTypes.setOfType(PropTypes.func, PropTypes.element)
}