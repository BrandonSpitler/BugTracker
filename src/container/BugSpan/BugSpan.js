import React, { Component } from 'react'
import BugContainer from './BugStage/BugContainer'

class BugSpan extends Component {
    state = {
        BugContainers: []
    }
    render() {
        let bugStages = (
            this.props.bugStages.map((props, index) => {
                return (
                    <BugContainer DragBugStageHandler={this.props.dragBugStageHandler}>
                    </BugContainer>
                )
            })
        )

        return (
            <React.Fragment>
                <div onDragOver={event => this.props.dragOverBugContainerHandler(event)} className="BugSpan">
                    <div>Position {this.props.postion}</div>
                    {bugStages}
                </div>
            </React.Fragment>
        )
    }
}

export default BugSpan;