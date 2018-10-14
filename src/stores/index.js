import EventsStore from '../modules/Events/store';
import FormStore from '../modules/Form/store';

const stores = {};

stores.events = new EventsStore(stores)
stores.form = new FormStore(stores);

export default stores;