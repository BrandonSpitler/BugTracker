import React from 'react'


const bugContainer = (props) => {

    return (
        <React.Fragment>
            <div draggable
                onDragStart={
                    (event) => {
                        props.DragBugContainerHandler(event, props.BugContainerPos, props.BugSpanPos)
                    }
                }
                className="BugContainer"
            >
                Bug container works
            </div>
        </React.Fragment >
    )
}

export default bugContainer;