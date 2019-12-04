import React, { Component } from 'react'
import PropTypes, { arrayOf, string } from 'prop-types';
import RoleCnfg from '../../ConfigureNewBug/roles/RoleCnfg';
import { thisExpression } from '@babel/types';

class Accordion extends Component {
    state = {
        UXToBackgroundDataIndexes: []
    }

    toggleAccordionOpenClose = (index) => {
        let UXToBackgroundDataIndexes = this.state.UXToBackgroundDataIndexes
        UXToBackgroundDataIndexes[index].open = !UXToBackgroundDataIndexes[index].open
        this.setState({
            UXToBackgroundDataIndexes: UXToBackgroundDataIndexes
        })
    }

    static getDerivedStateFromProps(props, state) {
        const newState = { ...state }
        const AccordionPanelsState = newState.UXToBackgroundDataIndexes
        props.AccordionPanels.forEach(
            (value, index) => {
                if (!value.deleted) {
                    const currentAccordionIndex = AccordionPanelsState.findIndex(
                        (value) => {
                            return (value.index === index)
                        })
                    if (currentAccordionIndex === -1) {
                        AccordionPanelsState.push({
                            index: index,
                            open: true
                        })
                    }

                }
            }
        )
        newState.UXToBackgroundDataIndexes = AccordionPanelsState;
        return newState;
    }


    render() {

        let AccordionPanels = this.state.UXToBackgroundDataIndexes.map(
            (value, index) => {
                return (
                    <div key={value.index}>
                        <button className="accordion" onClick={() => this.toggleAccordionOpenClose(index)}>
                            {this.props.AccordionPanels[value.index][this.props.AccordionHeaderField]}
                        </button>
                        {value.open ?
                            <div className="panel">
                                <this.props.AccordionPanelType {...this.props} index={value.index} data={this.props.AccordionPanels[value.index]} ></this.props.AccordionPanelType>
                            </div>
                            :
                            null
                        }
                    </div>
                )
            }
        );
        return (
            <div>
                {AccordionPanels}
            </div>
        )
    }
}


Accordion.propTypes = {
    AccordionPanels: arrayOf(PropTypes.shape({
        AccordionHeader: PropTypes.AccordionHeader
    })),
    AccordionHeaderField: PropTypes.string.isRequired
}
export default Accordion;