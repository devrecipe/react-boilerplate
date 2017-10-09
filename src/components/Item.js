import React from 'react'
import Items from '../actions/items'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'

class Item extends React.Component {
    handleDelete() {
        this.props.dispatch(Items.Delete(this.props.id))
    }

    render() {
        return (
            <tr className="preloader-wrapper active">
                <td>{this.props.id}</td>
                <td>{this.props.description}</td>
                <td className="text-right">
                    <Link to="#" onClick={this.handleDelete.bind(this)}><i className="ion-trash-b" /></Link>
                </td>
            </tr>
        )
    }
}

Item = connect()(Item)

export default Item