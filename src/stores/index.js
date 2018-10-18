import PersonStore from '../modules/People/store';
import FormStore from '../modules/Form/store';

const stores = {};

stores.people = new PersonStore(stores);
stores.form = new FormStore(stores);

export default stores;
