import React, { Component } from 'react';
import BugStageClass from '../classes/BugStageClass'
import BugSpan from './BugSpan/BugSpan';

class MainContainer extends Component {
    state = {
        dragFromContainerIndex: -1,
        dragFromSpanIndex: -1,
        BugSpans: []
    }


    AddBugContainer(bugContainers) {
        let currentBugSpans = this.state.BugSpans
        let columnPos = currentBugSpans.length
        currentBugSpans.push({ pos: columnPos, bugContainersInStage: bugContainers })
        this.setState({ BugSpans: currentBugSpans })
    }

    onDragOverBugContainerOverBugSpanHandler = (event) => {
        event.preventDefault();
        // console.log(event)
    }

    onDragBugContainerHandler = (event, bugContainerPos, bugSpanPos) => {
        this.setState(
            {
                dragFromContainerIndex: bugContainerPos,
                dragFromSpanIndex: bugSpanPos
            }
        )
    }

    onDropBugStageHandler = (event, newBugSpanIndex) => {
        const bugSpans = this.state.BugSpans.slice();
        const dragFromContainerIndex = this.state.dragFromContainerIndex;
        const dragFromSpanIndex = this.state.dragFromSpanIndex;
        //update old span by roving the container
        const bugSpanFrom = bugSpans[dragFromSpanIndex];
        const bugDraggedContainer = bugSpanFrom.bugContainersInStage.splice(dragFromContainerIndex, 1);
        //update new span
        bugSpans[newBugSpanIndex].bugContainersInStage.push(bugDraggedContainer[0]);
        //set state
        this.setState(
            {
                BugSpans: bugSpans
            }
        )
    }


    render() {
        if (this.state.BugSpans.length === 0) {
            let BugStage1 = new BugStageClass();
            let BugStage2 = new BugStageClass();
            this.AddBugContainer([BugStage1, BugStage2])
            this.AddBugContainer([])
        }
        let bugStages = (
            this.state.BugSpans.map((props, index) => {
                return (
                    <BugSpan key={props.pos}
                        position={props.pos}
                        bugStages={props.bugContainersInStage}
                        dragOverBugContainerHandler={this.onDragOverBugContainerOverBugSpanHandler}
                        dragBugContainerHandler={this.onDragBugContainerHandler}
                        dropBugContainerHandler={this.onDropBugStageHandler}
                    >
                    </BugSpan>
                )
            })
        )

        return (
            <React.Fragment>
                {bugStages}
            </React.Fragment>
        );
    }
}

export default MainContainer;