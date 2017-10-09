import React from 'react'
import { Route, Switch } from 'react-router-dom'

import Navbar from '../components/Navbar'

import Todo from './Todo.js'
import About from './About.js'

import '../stylesheets/main.scss'

class App extends React.Component {
    render() {
        return (
            <div>
                <Navbar />

                <Switch>
                    <Route exact path='/' component={Todo} items={this.props.items}/>
                    <Route exact path='/about' component={About}/>
                </Switch>
            </div>
        )
    }
}

export default App