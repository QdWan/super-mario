export default class EventBuffer {
    constructor() {
        this.events = [];
    }

    emit(name, ...args) {
        const event = {name, args};
        this.events.push(event);
    }

    process(name, callback) {
        for (const event of this.events) {
            if (event.name === name) {
                callback(...event.args);
            }
        }
    }

    clear() {
        this.events.length = 0;
    }
}
