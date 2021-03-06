import React, { PropTypes } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'redux/react';
import * as ListActions from '../../actions/listActions';
import Lists from './Lists';

@connect(state => ({
  lists: state.lists,
}))

export default class ListsView extends React.Component {

  static propTypes = {
    lists: PropTypes.object.isRequired
  }

  render() {
    const { lists: { lists }, dispatch } = this.props;
    const actions = bindActionCreators(ListActions, dispatch);

    return (
      <Lists lists={lists} actions={actions} />
    );
  }
};
