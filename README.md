# mean-dash

## NOTE - This is no longer under active development or maintenance, use at your own risk.

### An admin dashboard with user management and user roles | Built on the MEAN stack
-----
[![CircleCI](https://circleci.com/gh/OperationCode/mean-dash.svg?style=svg&circle-token=036f5785d1406e7ac8b90abf3107244ce3a778fa)](https://circleci.com/gh/OperationCode/mean-dash)
[![Codeship Status for OperationCode/mean-dash](https://app.codeship.com/projects/448797e0-f2fc-0134-fad2-66135ababc06/status?branch=master)](https://app.codeship.com/projects/209859)
### Clone Repository
```
git clone https://github.com/operationcode/mean-dash.git && cd mean-dash
```
### Install Dependencies
```
npm install
```
### Start the Server
```
npm start
```
Visit [http://localhost:5000](http://localhost:5000) to see the app!

### Learning AngularJS

Official [AngularJS website](http://angularjs.org/) is good place to start, but it lacks of best practices and not provides you base concepts, which could simplify your life. There is some links that can help you better understand how to write maintainable applications using AngularJS.

 - [Angular Styleguide](https://github.com/johnpapa/angular-styleguide) - This is basically angular best practices. There are some differences for ES2015 but the explanation of these practtices remains the same.
 - [Optionated Angular Styleguide](https://github.com/toddmotto/angular-styleguide) - this is an extended version of angular styleguide, which covers additional information relevant to dev teams.
 - [Code Organization in Large AngularJS and JavaScript Applications](http://cliffmeyers.com/blog/2013/4/21/code-organization-angularjs-javascript) - This article explains a directory structure, proposed in angular styleguide with more details and use cases.
 - The Top 5 Mistakes AngularJS Developers Make - This is a great series of posts describing in depth the common mistakes and how to not make them.
   - [Heavy reliance on $scope (not using controller as) ](http://csharperimage.jeremylikness.com/2014/11/the-top-5-mistakes-angularjs-developers.html)
   - [Abusing $watch](http://csharperimage.jeremylikness.com/2014/11/the-top-5-mistakes-angularjs-developers_28.html)
   - [Overusing $broadcast and $emit](http://csharperimage.jeremylikness.com/2014/12/the-top-5-mistakes-angularjs-developers.html)
   - [Hacking the DOM](http://csharperimage.jeremylikness.com/2014/12/the-top-5-mistakes-angularjs-developers_13.html)
   - [Failing to Test](http://csharperimage.jeremylikness.com/2014/12/the-top-5-mistakes-angularjs-developers_28.html)
 - [AngularJS: The Bad Parts](http://larseidnes.com/2014/11/05/angularjs-the-bad-parts/) - To not fall into a trap, developers always should know the problems of tools they are using. With this knowledge in mind, you will write more maintainable applications.
 - [You don't always need AngularJS DI in directives](http://michalostruszka.pl/blog/2015/01/18/angular-directives-di/) - This articles will help you to make more reusable UI components.
 - [Exploring the Angular 1.5 `.component()` method](https://toddmotto.com/exploring-the-angular-1-5-component-method/)
 - [A Guide To Transclusion in AngularJS](http://teropa.info/blog/2015/06/09/transclusion.html)
