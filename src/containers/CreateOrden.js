import { connect } from 'react-redux';
import { createOrden } from '../actions';
import NewOrden from '../components/NewOrden';

const mapDispatchToProps = dispatch => {
  console.log('test')
  return {
    onAddOrden: orden => {
      dispatch(createOrden(orden));
    }
  };
};

export default connect(
  null,
  mapDispatchToProps
)(NewOrden);