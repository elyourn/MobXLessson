class EventStore {
    @observable event = {
        comment: '',
        date: ''
    };

    @action setComment = (text) => {
        this.comment = text;
    }
    
    @action setDate = (date) => {
        this.date = date;
    }

    @action addEvent = () => {
        this.addEvent(event);
    }
}