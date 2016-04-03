# Spring Boot Babel Webpack jQuery Exmaple

This is a example project of Spring Boot + Babel + Webpack + jQuery.
A purpose of this example is showing how to use modern front end development stack with traditional environments.
 
## Usage


### Requirements

* Maven 2 ~.
* Node.js 4 ~.
* NPM 3 ~.

### Build Client Codes

```bash
$ cd client
$ npm install
$ npm run build
```

### Run the Spring Boot Server

```bash
$ mvnw spring-boot:run # In Windows, use 'mvnw.cmd spring-boot:run' instead.
```

### Run Webpack Dev Server Only

```bash
$ cd client
$ npm run dev:client
```

And Run your Spring Boot with your own way.

### Run Webpack Dev Server with Spring Boot

```bash
$ cd client
$ npm run dev # open http://localhost:3000
```

This will launch webpack devServer and Spring-Boot together.
