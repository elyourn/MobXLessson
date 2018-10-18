import { observable, action } from 'mobx'
import BasicStore from '../../../stores/basic';

class FormStore extends BasicStore {
    @observable data = {
        name: '',
        surname: ''
    };

    @action setName = (name) => {
        this.data.name = name;
    };

    @action setSurname = (surname) => {
        this.data.surname = surname;
    };

    @action addPerson = () => {
        this.getStore('people').addPerson({...this.data});
    }
}

export default FormStore;
