# Blog Demo

React Native app built with Expo. This blog app incorporates CRUD (create, read, update, delete) operations with RESTful API.

![blog_app](/assets/blog_app.png)



## Running the App:

### General setup:

1. Clone the repo and run `npm install` to save dependencies
2. Install [Expo Client](https://expo.io/tools#client) to view the app on your phone. Otherwise, install an emulator

### Setting up JSON Server and Ngrok

1. In your terminal, go to the 'jsonServer' directory with `cd jsonServer`
2. Run `npm run db` to start the JSON Server
3. Open another window in your terminal. In that 'jsonServer' directory, run `npm run tunnel` to start Ngrok. 
   - Make sure nothing is running on port 3000. Otherwise add '-p <newPortNumber>' in "db" within "scripts" (line 7) in package.json. Then change the port number (currently set at 3000) to that <newPortNumber> (in line 8 of package.json)
4. **IMPORTANT**: Inside the /api/jsonServer.js, change the baseURL (line 5) to the url found when running npm run tunnel.

### Setting up the frontend 

The root directory contains the React Native files. 

1. Run `npm install` to save dependencies
2. Run `npm start` or `expo start` and scan the QR code to view the app on your phone (or run it on your iOS/Android emulator)