import React from 'react'


const bugContainer = (props) => {

    return (
        <React.Fragment>
            <div draggable
                onDragStart={event => props.DragBugStageHandler(event)}
                className="BugContainer"
            >
                Bug container works {props.postion}
            </div>
        </React.Fragment>
    )
}

export default bugContainer;