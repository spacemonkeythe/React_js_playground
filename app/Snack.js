import React, { PropTypes, Component } from 'react';
import { DropTarget } from 'react-dnd';

const snackSpec = {
  beginDrag(props) {
    return {
      name: props.name
    };
  },

  endDrag(props, monitor) {
    const dragItem = monitor.getItem();
    const dropResult = monitor.getDropResult();

    if (dropResult) {
      console.log(`You dropped ${dragItem.name} into ${dropResult.name}`);
    }
  }
};

class Snack extends Component {
  render() {
    const { name } = this.props;
    const style = {
      opacity: 1
    };

    return(
      <div className="snack" style={style}>
        {name}
      </div>
    );
  }
}

Snack.propTypes = {
  connectDragSource: PropTypes.func.isRequired,
  isDragging: PropTypes.bool.isRequired,
  name: PropTypes.string.isRequired
};

export default DragSource(constants.SNACK, snackSpec, collect)(Snack);
