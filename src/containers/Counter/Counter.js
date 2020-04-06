import React, { Component } from 'react';
import { connect } from 'react-redux'
import  actionTypes  from '../../store/actions';
import CounterControl from '../../components/CounterControl/CounterControl';
import CounterOutput from '../../components/CounterOutput/CounterOutput';


class Counter extends Component {
    state = {
        counter: 0
    }

    counterChangedHandler = (action, value) => {
        
        switch (action) {
            case 'inc':
                this.setState((prevState) => { return { counter: prevState.counter + 1 } })
                break;
            case 'dec':
                this.setState((prevState) => { return { counter: prevState.counter - 1 } })
                break;
            case 'add':
                this.setState((prevState) => { return { counter: prevState.counter + value } })
                break;
            case 'sub':
                this.setState((prevState) => { return { counter: prevState.counter - value } })
                break;
        }
    }

    render() {
        return (
            <div>
                <CounterOutput value={this.props.ctr} />
                <CounterControl label="Increment" clicked={this.props.onIncrementCounter} />
                <CounterControl label="Decrement" clicked={this.props.onDecrementCounter} />
                <CounterControl label="Add 5" clicked={this.props.addCounter} />
                <CounterControl label="Subtract 5" clicked={this.props.substractCounter} />
                <hr />
                <button onClick={this.props.onStoreResult}>Store result</button>
                <ul>
                    {this.props.storedResults.map(strResults =>(
                        <li key={strResults.id} onClick={()=>this.props.onDeleteResult(strResults.id) }>{strResults.value}</li>
                    ))}
                    
                </ul>
            </div>
        );
    }
}
const mapStateToProps = state => {
    return {
        ctr: state.counter,
        storedResults: state.results
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onIncrementCounter: () => dispatch({ type: actionTypes.INCREMENT }),
        onDecrementCounter: () => dispatch({ type: actionTypes.DECREMENT }),
        addCounter: () => dispatch({ type: actionTypes.ADD, value: 5 }),
        substractCounter: () => dispatch({ type: actionTypes.SUBTRACT, value: 5 }),
        onStoreResult: () => dispatch({ type: actionTypes.STORE_RESULT }),
        onDeleteResult: (id) => dispatch({ type: actionTypes.DELETE_RESULT,resultElID: id })
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Counter);