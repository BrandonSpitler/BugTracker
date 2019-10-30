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
                    <BugContainer DragBugStageHandler={this.props.dragBugStageHandler}
                        BugContainerPos={index}
                        BugSpanPos={this.props.postion}>
                    </BugContainer>
                )
            })
        )

        return (
            <React.Fragment>
                <div onDragOver={event => this.props.dragOverBugContainerHandler(event)}
                    onDrop={event => this.props.dropBugStageHandler(event, this.props.postion)}
                    className="BugSpan">
                    <div>Position {this.props.postion}</div>
                    {bugStages}
                </div>
            </React.Fragment>
        )
    }
}

export default BugSpan;