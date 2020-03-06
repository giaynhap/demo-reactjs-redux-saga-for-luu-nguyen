import FirseComponent from '../compoments/FirstAppComponent'
import { connect } from 'react-redux'
import { doChangeText } from "../core/actions/testAction"

function mapStateToProps(state, ownProps){
    return {
      test: state.testReducer.hello
    }
  }
  
  function mapDispatchToProps(dispatch, ownProps){
    return {
      changeText:()=>{
          dispatch(doChangeText())
      }
    }
  }
export default connect(mapStateToProps, mapDispatchToProps)(FirseComponent)
  
  