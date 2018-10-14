import { observable, action } from 'mobx'
import BasicStore from '../../../stores/basic';

class FormStore extends BasicStore {
    @observable data = {
        comment: '',
        date: ''
    };

    @action setComment = (text) => {
        this.data.comment = text;
    }
    
    @action setDate = (date) => {
        this.data.date = date;
    }

    @action addEvent = () => {
        this.getStore('events').addEvent({...this.data});
    }
}

export default FormStore;