import { connect } from 'react-redux';
import { fetchDataTypes } from 'state/data-types/actions';
// inset getAttributes
import { getDataTypeList } from 'state/data-types/selectors';
import DataTypeForm from 'ui/data-types/common/DataTypeForm';

export const mapStateToProps = state => ({
// insert getAttributes
  dataTypes: getDataTypeList(state),
});

export const mapDispatchToProps = dispatch => ({
  onWillMount: () => { dispatch(fetchDataTypes()); },
  handleSubmit: values => (values),

});
const DataTypeFormContainer = connect(mapStateToProps, mapDispatchToProps)(DataTypeForm);
export default DataTypeFormContainer;