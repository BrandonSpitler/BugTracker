import React, { Component } from 'react'
import BugContainer from './BugStage/BugContainer'

class BugSpan extends Component {
    state = {
        BugContainers: []
    }
    render() {
        let bugStages = (
            this.props.bugStages.map((arg, index) => {
                return (
                    <BugContainer DragBugContainerHandler={this.props.dragBugContainerHandler}
                        BugContainerPos={index}
                        BugSpanPos={this.props.position}>
                    </BugContainer>
                )
            })
        )

        return (
            <React.Fragment>
                <div>Position {this.props.position}</div>
                <div onDragOver={event => this.props.dragOverBugContainerHandler(event)}
                    onDrop={event => this.props.dropBugContainerHandler(event, this.props.position)}
                    className="BugSpan">

                    <div className="ContainersBugStages">{bugStages}</div>
                </div>
            </React.Fragment>
        )
    }
}

export default BugSpan;