var webdriver = require('selenium-webdriver'),
    By = webdriver.By,
    until = webdriver.until;

var driver = new webdriver.Builder()
    .forBrowser('chrome')
    .build();

driver.get('http://127.0.0.1:8080');

driver.sleep(1000).then(function() {
  driver.findElement(By.css('p')).getText().then(function(text){
    if( 'hello webpack' === text ) {
      console.log('test passed');
    } else {
      console.log('test failed');
    }
  });
});

driver.quit();
