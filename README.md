# Peridot: A lightweight IoT gateway management solution for the Ethereum Classic Blockchain

# WIP Alpha stage: many features are not working

This manager is intended to be an interface for managing IoT devices that use smart contracts on the ethereum classic chain for compute functions. 

![How it Works](https://github.com/ethereumproject/Peridot/blob/master/public/img/peridot_demo.png)

After installing Peridot, a user should be able to:

- add, manage, and delete IoT devices
- see events and sensors locally
- triger events locally for testing
- read local ETC accounts and balances
- read contract data

The user interface is designed to be intentionally minimlistic.

## Project structure

- Views: ejs pages
- Tools: Configuration files
- Public:

 - css: stylesheets
 - img: image locations
 - js: custom scripts
 - plugins: libraries
 - tpl: standard page templates
 - views: indivdual pages
 - modules: indivdual device files
 - contracts: example smart contracts

![Ethereum Iot](https://github.com/ethereumproject/Peridot/blob/master/public/img/Iotblocks2.png)


## Local installation

Clone the repo

`git clone https://github.com/`

Download [Nodejs and npm](https://docs.npmjs.com/getting-started/installing-node "Nodejs install") if you don't have them

Install dependencies:

`npm install`

Install mongodb:

MacOS: `brew install mongodb`

Ubuntu: `sudo apt-get install -y mongodb-org`


### Run:

### Stats

### WebApp:

```bash
export NODE_ENV="{ENV}" 
node app.js
```
