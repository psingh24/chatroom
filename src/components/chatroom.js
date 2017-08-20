import React from 'react'

class ChatRoom extends React.Component {

    constructor(props, context) {
        super(props, context)
        this.updateMessage = this.updateMessage.bind(this)
        this.submitMessage = this.submitMessage.bind(this)
        this.state = {
            message: '',
            messages: []
        }
    } 
    componentDidMount() {
        firebase.database().ref('messages/').on('value', (snapshot) => {
              const currentMessages = snapshot.val()
            //   console.log(currentMessages)

              if (currentMessages != null) {
                  this.setState({
                      messages: currentMessages
                  })
              }

        }
    )
    }
    updateMessage(event) {
        console.log('updateMessage:' + event.target.value)
        this.setState({
            message: event.target.value
        })
    }

    submitMessage(event) {
        console.log('submitMesagge:'+ this.state.message)

        const nextMessage = {
            id: this.state.messages.length,
            text: this.state.message
        }
        // var list = Object.assign([], this.state.messages)
        // list.push(nextMessage)
        // this.setState({
        //     messages: list
        // })

        firebase.database().ref('messages/'+nextMessage.id).set(nextMessage)
    }

    render() {
        const currentMessage = this.state.messages.map( (message, i) => {
            return (
                    <li key={message.id}>{message.text}</li>
            )
         })
        return(
            <div>
            
                <ol>
                    {currentMessage}
                </ol>

                <input onChange={this.updateMessage} type="text" placeholder="Message"/>
                <br/>
                <button onClick={this.submitMessage}>Submit Message</button>

            </div>
        )
    }
}


export default ChatRoom