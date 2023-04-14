# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).
Webpack replaced with vite.

Pre-requisites:
Install pnpm globally using npm install -g pnpm

### Run App Locally 

`pnpm start-local`

### Testing Deployment Build Locally

Run `heroku local web --port 5001` to test the build locally.\
Uses 5001 as heroku defaults to 5000, which conflicts with airdrop on macs. 
It uses the scripts defined in `Procfile` to run the app.

