// =============================================================================
// View > Delete
// =============================================================================


import React from 'react';


class Delete extends React.Component {

    render() {
        let className = 'delete';
        let renderText = 'Delete';

        if (typeof this.props.children !== 'undefined') {
            renderText = this.props.children;
        }

        if (typeof this.props.className !== 'undefined') {
            className += ' ' + this.props.className
        }

        return (
            <span className={className} onClick={this.props.onClick}>
                {renderText}
            </span>
        );
    }

}


export default Delete;