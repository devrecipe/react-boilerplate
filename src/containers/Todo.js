import React from 'react'
import Items from '../actions/items'
import Item from '../components/Item'
import { connect } from 'react-redux'

class Todo extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            newDescription: ''
        }
    }
    
    onEnterClicked(event) {
        if (event.charCode == 13) {
            this.props.dispatch(Items.Create(this.state.newDescription))
            
            this.setState({
                newDescription: ''
            })
        }
    }

    onDescriptionChanged(event) {
        this.setState({
            newDescription: event.target.value
        })
    }

    render() {
        return (
            <div>
                <div className="jumbotron">
                    <div className="container">
                        <h1>Items</h1>
                        <br />
                        <input type="text" className="form-control" placeholder="Enter the description of the new task and hit enter" value={this.state.newDescription} onChange={this.onDescriptionChanged.bind(this)} onKeyPress={this.onEnterClicked.bind(this)} />
                    </div>
                </div>

                <div className="container">
                    <table className="table">
                        <thead>
                            <tr>
                                <th width="50px">#</th>
                                <th>Description</th>
                                <th width="50px" className="text-right">Action</th>
                            </tr>
                        </thead>
                        
                        <tbody>
                            {
                                this.props.items.map((item) => {
                                    return <Item key={item.id} id={item.id} description={item.description} />
                                })
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        )
    }
}

Todo = connect((store) => {
    return {
        items: store.todo
    }
})(Todo)

export default Todo