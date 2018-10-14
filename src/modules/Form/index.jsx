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
                <TextArea text={form.data.comment} onChange={form.setComment} />
                <Button onClick={form.addEvent} text="Send" />
            </div>
        )
    }
}

export default Form;
