import { observable, action } from 'mobx'
import BasicStore from '../../../stores/basic';

class PersonsStore extends BasicStore {
    @observable persons = [];

    @action addPerson = (person) => {
        this.persons.push(person);
    };
}

export default PersonsStore;
