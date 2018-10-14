import React, { Component } from 'react'
import { observer, inject } from 'mobx-react'

@inject('events')
@observer
class Events extends Component {
    render() {
        const { events } = this.props;
        
        return (
            <div className="form">
                <h1>
                    Events:
                </h1>
                {events.items.map((item, i) => <div key={i}>{item.comment}</div>)}
            </div>
        )
    }
}

export default Events;
