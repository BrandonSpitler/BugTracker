import React, { Component } from 'react';
import BugStageClass from '../classes/BugStageClass'
import BugSpan from './BugSpan/BugSpan';
import { throwStatement } from '@babel/types';

class MainContainer extends Component {
    state = {
        BugSpans: []
    }


    AddBugStage(bugContainersInStage) {
        let currentBugStages = this.state.BugSpans
        let columnPos = currentBugStages.length
        currentBugStages.push({ pos: columnPos, bugContainersInStage: bugContainersInStage })
        this.setState({ BugSpans: currentBugStages })
    }

    onDragOverBugContainerHandler = (event) => {
        event.preventDefault();
    }

    onDragBugStageHandler = (event) => {

    }


    render() {
        if (this.state.BugSpans.length === 0) {
            let BugStage1 = new BugStageClass();
            let BugStage2 = new BugStageClass();
            this.AddBugStage([BugStage1, BugStage2])
            this.AddBugStage([])
        }
        let bugStages = (
            this.state.BugSpans.map((props, index) => {
                return (
                    <BugSpan key={index}
                        postion={props.pos}
                        bugStages={props.bugContainersInStage}
                        dragOverBugContainerHandler={this.onDragOverBugContainerHandler}
                        dragBugStageHandler={this.onDragBugStageHandler}
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