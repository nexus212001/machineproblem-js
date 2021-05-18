var faker  = require("faker");

/// Data Entry Helper
/// Generates random test data for entry
class DataEntryHelper {
    generateFirstName = async() =>{
        return await faker.name.firstName();
    }

    generateLastName = async() => {
        return await faker.name.lastName();
    }

    generateAddress = async() => {
        return await faker.address.streetAddress();
    }

    generateCity = async() => {
        return await faker.address.city();
    }
}

module.exports = { DataEntryHelper }