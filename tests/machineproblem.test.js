const { timeout, driver } = require('./base-test');
const { LoginPageModel } = require('../pagemodel/loginpagemodel');
const { HomePageModel } = require("../pagemodel/homepagemodel");
const { EmployeePageModel } = require('../pagemodel/employeepagemodel');
const { Employee } = require("../datamodel/employee");
const { del } = require('selenium-webdriver/http');

/// Test Suite
/// Contains all the test for this machine problem
describe('Test suite', () => {
    
    beforeAll(async () => {
        this.driver = driver;
        jest.setTimeout(timeout);
    });

    test('Test case name here', async () => {
                
    });
    
    afterAll(async () => {
        await this.driver.close();
    });
})