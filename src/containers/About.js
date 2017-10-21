import React from 'react'

export default class About extends React.Component {
    render() {
        return (
            <div>
                <div className="jumbotron">
                    <div className="container">
                        <h1>About the boilerplate</h1>
                    </div>
                </div>

                <div className="container">
                    <p>This is a Todo App made using a React boilerplate that's maintained by Devrecipe, a creative IT comapny.</p>
                    <small>&copy; 2017 Devrecipe - MIT License</small>
                </div>
            </div>
        )
    }
}