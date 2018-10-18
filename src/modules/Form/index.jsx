import React, { Component } from 'react'
import { observer, inject } from 'mobx-react'
import Button from '../../components/Button';
import TextArea from '../../components/TextArea';

@inject('form')
@observer
class Form extends Component {
    render() {
        const { form } = this.props;

        return (
            <div className="form">
                <label>Name: </label><TextArea text={form.data.name} onChange={form.setName} />
                <label>Surname: </label><TextArea text={form.data.surname} onChange={form.setSurname} />
                <Button onClick={form.addPerson} text="Add a Person" />
            </div>
        );
    }
}

export default Form;
