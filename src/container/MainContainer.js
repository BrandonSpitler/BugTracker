import React, { Component } from 'react';
import BugStageClass from '../classes/BugStageClass'
import BugSpan from './BugSpan/BugSpan';

class MainContainer extends Component {
    state = {
        BugStages: []
    }


    AddBugStage(BugStage) {
        let currentBugStages = this.state.BugStages
        let columnPos = currentBugStages.length
        currentBugStages.push({ bugStage: BugStage, pos: columnPos })
        this.setState({ BugStages: currentBugStages })
    }

    render() {
        if (this.state.BugStages.length === 0) {
            let BugStage1 = new BugStageClass();
            this.AddBugStage(BugStage1)
            let BugStage2 = new BugStageClass();
            this.AddBugStage(BugStage2)
        }
        let bugStages = (
            this.state.BugStages.map((props, index) => {
                return (<BugSpan key={index} postion={props.pos}></BugSpan>)
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