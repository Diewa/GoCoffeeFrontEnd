export default class CoffeeElementModel {
    name = ""
    producer = ""
    imageUrl = ""

    constructor(name, producer, imageUrl) {
        this.name = name
        this.producer = producer
        this.imageUrl = imageUrl
    }


    getName() {
        return this.name;
    }

    getProducer() {
        return this.producer
    }

    getImageUrl() {
        return this.imageUrl
    }
}