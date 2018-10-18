import React, { Component } from 'react'
import { observer, inject } from 'mobx-react'

@inject('people')
@observer
class People extends Component {
    render() {
        const { people } = this.props;
        console.log(this.props);
        return (
            <div className="form">
                <h1>
                    People:
                </h1>
                {people.persons.map((item, i) => <div key={i}>{`${i+1}. ${item.name} ${item.surname}`}</div>)}
            </div>
        )
    }
}

export default People;
