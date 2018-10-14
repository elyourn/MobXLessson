import { observable, action } from 'mobx'
import BasicStore from '../../../stores/basic';

class EventsStore extends BasicStore {
    @observable items = [];

    @action addEvent = (event) => {
        this.items.push(event);
    };
}

export default EventsStore;