import React, { Component } from 'react'
import './App.css'
import Card from './components/Card.jsx'


class App extends Component {
    
    render() {
        return (
            <div>
                <Card name="Bill Bro" email = "bill@bro.com" mobile = "345-563-5463" work = "345-657-6545" />
                <Card name="Tim Dude" email = "tim@dude.com" mobile = "549-567-5467" work = "267-674-2409" />
                <Card name="Jack Man" email = "jack@man.com" mobile = "356-6743-2456" work = "234-658-2345" />
            </div>
        )
    }
}
export default App
