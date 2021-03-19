export default class CoffeeElementModel {
    name = ""
    producer = ""
    imageUrl = ""

    constructor(name, producer) {
        this.name = name
        this.producer = producer
    }


    getName() {
        return this.name;
    }

    getProducer() {
        return this.producer
    }
}