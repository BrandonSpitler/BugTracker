import React, { Component } from 'react';
import BugStageClass from '../classes/BugStageClass'
import BugSpan from './BugSpan/BugSpan';
import { throwStatement } from '@babel/types';

class MainContainer extends Component {
    state = {
        dragFromContainerIndex: -1,
        dragFromSpanIndex: -1,
        BugSpans: []
    }


    AddBugContainer(bugContainersInStage) {
        let currentBugStages = this.state.BugSpans
        let columnPos = currentBugStages.length
        currentBugStages.push({ pos: columnPos, bugContainersInStage: bugContainersInStage })
        this.setState({ BugSpans: currentBugStages })
    }

    onDragOverBugContainerHandler = (event) => {
        event.preventDefault();
        // console.log(event)
    }

    onDragStageBugStageHandler = (event, bugContainerPos, bugSpanPos) => {
        this.setState(
            {
                dragFromContainerIndex: bugContainerPos,
                dragFromSpanIndex: bugSpanPos
            }
        )
    }

    onDropBugStageHandler = (event, newBugSpanIndex) => {
        console.log(event)
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
                        postion={props.pos}
                        bugStages={props.bugContainersInStage}
                        dragOverBugContainerHandler={this.onDragOverBugContainerHandler}
                        dragBugStageHandler={this.onDragStageBugStageHandler}
                        dropBugStageHandler={this.onDropBugStageHandler}
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