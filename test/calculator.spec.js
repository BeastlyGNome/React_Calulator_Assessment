require('geckodriver');
const webdriver = require('selenium-webdriver');
const { By, until, webdriverwait } = webdriver;

const chaiAsPromised = require('chai-as-promised')
const chai = require('chai');
chai.use(chaiAsPromised)
const expect = chai.expect;

describe('End to End Test Suite', done => {

  it('can perform addition', () => {
    const driver = new webdriver.Builder().forBrowser('firefox').build()
      .then((driver)=>{
        driver.get('https://ahfarmer.github.io/calculator/')
          .then(()=>driver.findElement(By.xpath("//button[contains(text(),'1')]")).click())
          .then(()=>driver.findElement(By.css('div.component-button-panel div:nth-child(4) div:last-child button')).click())
          .then(()=>driver.findElement(By.css('div.component-button-panel div:nth-child(4) div:nth-child(3) button')).click())
          .then(()=>driver.findElement(By.css('div.component-button-panel div:nth-child(5) div:last-child button')).click())
          .then(()=>chai.expect(driver.findElement(By.css('div.component-display div')).getText()).to.eventually.equal('4'))
      })
  })  

  it('can perform subtraction', () => {
    const driver = new webdriver.Builder().forBrowser('firefox').build()
      .then((driver)=>{
        driver.get('https://ahfarmer.github.io/calculator/')
          .then(()=>driver.findElement(By.xpath("//button[contains(text(),'9')]")).click())
          .then(()=>driver.findElement(By.css('div.component-button-panel div:nth-child(3) div:last-child button')).click())
          .then(()=>driver.findElement(By.xpath("//button[contains(text(),'4')]")).click())
          .then(()=>driver.findElement(By.css('div.component-button-panel div:nth-child(5) div:last-child button')).click())
          .then(()=>chai.expect(driver.findElement(By.css('div.component-display div')).getText()).to.eventually.equal('5'))
      })
  });

  it('can perform multiplication', () => {
    const driver = new webdriver.Builder().forBrowser('firefox').build()
      .then((driver)=>{
        driver.get('https://ahfarmer.github.io/calculator/')
          .then(()=>driver.findElement(By.xpath("//button[contains(text(),'3')]")).click())
          .then(()=>driver.findElement(By.css('div.component-button-panel div:nth-child(2) div:last-child button')).click())
          .then(()=>driver.findElement(By.css('div.component-button-panel div:nth-child(4) div:nth-child(1) button')).click())
          .then(()=>driver.findElement(By.css('div.component-button-panel div:nth-child(5) div:last-child button')).click())
          .then(()=>chai.expect(driver.findElement(By.css('div.component-display div')).getText()).to.eventually.equal('3'))
      })
  })

  it('can perform division', () => {
    const driver = new webdriver.Builder().forBrowser('firefox').build()
      .then((driver)=>{
        driver.get('https://ahfarmer.github.io/calculator/')
        .then(()=>driver.findElement(By.xpath("//button[contains(text(),'1')]")).click())
        .then(()=>driver.findElement(By.xpath("//button[contains(text(),'0')]")).click())
        .then(()=>driver.findElement(By.css('div.component-button-panel div:nth-child(1) div:last-child button')).click())
        .then(()=>driver.findElement(By.css('div.component-button-panel div:nth-child(4) div:nth-child(2) button')).click())
        .then(()=>driver.findElement(By.css('div.component-button-panel div:nth-child(5) div:last-child button')).click())
        .then(()=>chai.expect(driver.findElement(By.css('div.component-display div')).getText()).to.eventually.equal('5'))
      })
  });
});

