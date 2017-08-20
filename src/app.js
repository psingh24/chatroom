import React from 'react'
import ReactDOM from 'react-dom'
import ChatRoom from './components/chatroom.js'

class App extends React.Component {

    render() {
        return (
            <div>
                This is a React App!

                <ChatRoom />
            </div>
        )
    }
};

ReactDOM.render(<App />, document.getElementById('app'))