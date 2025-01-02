# Welcome to your Expo app 👋

This is an [Expo](https://expo.dev) project created with [`create-expo-app`](https://www.npmjs.com/package/create-expo-app).

## Get started

1. Install dependencies

   ```bash
   npm install
   ```

2. Start the app

   ```bash
    npx expo start
   ```

In the output, you'll find options to open the app in a

- [development build](https://docs.expo.dev/develop/development-builds/introduction/)
- [Android emulator](https://docs.expo.dev/workflow/android-studio-emulator/)
- [iOS simulator](https://docs.expo.dev/workflow/ios-simulator/)
- [Expo Go](https://expo.dev/go), a limited sandbox for trying out app development with Expo

You can start developing by editing the files inside the **app** directory. This project uses [file-based routing](https://docs.expo.dev/router/introduction).

## Get a fresh project

When you're ready, run:

```bash
npm run reset-project
```

This command will move the starter code to the **app-example** directory and create a blank **app** directory where you can start developing.

## Learn more

To learn more about developing your project with Expo, look at the following resources:

- [Expo documentation](https://docs.expo.dev/): Learn fundamentals, or go into advanced topics with our [guides](https://docs.expo.dev/guides).
- [Learn Expo tutorial](https://docs.expo.dev/tutorial/introduction/): Follow a step-by-step tutorial where you'll create a project that runs on Android, iOS, and the web.

## Join the community

Join our community of developers creating universal apps.

- [Expo on GitHub](https://github.com/expo/expo): View our open source platform and contribute.
- [Discord community](https://chat.expo.dev): Chat with Expo users and ask questions.




## Problem Statement
create login page using Expo React Native

## Features
- **Login Screen:** User authentication with username and password. Now connected to a database for proper verification
- **Signup Screen:** New user registration with a back-to-login option.
- **Navigation Bar:** To navigate between 3 pages, Home, User, and Notifications.



## Execution
- **Screens:**
  - Login: Validates user credentials.
  - Signup: Allows new users to register.
  - Profile: Displays user details with a logout button.




** Expo react structure
LoginApp/


├── .expo/
├── assets/
├── node_modules/
├── src/
│   ├── components/
│   │   └── TextInputWithIcon.js
│   ├── screens/
│   │   ├── LoginScreen.js
│   │   ├── SignupScreen.js
│   │   ├── HomeScreen.js
│   │   ├── ProfileScreen.js
│   │   └── NotificationsScreen.js
│   ├── navigation/
│   │   └── MainTabs.js
│   └── styles/
│       └── styles.js
├── .gitignore
├── App.js
├── app.json
├── index.js
├── package-lock.json
└── package.json



  1.login page
- ![Screenshot 2025-01-02 143819](https://github.com/user-attachments/assets/0577344d-5b3d-4883-b651-82ca99239b0f)



2.signup
![Screenshot 2025-01-02 144859](https://github.com/user-attachments/assets/64101c02-5d29-41f5-b8e0-4b916a93d5e8)



3.home
![Screenshot 2025-01-02 144024](https://github.com/user-attachments/assets/139aaf44-c8e8-4b79-a3d3-d80699067f14)



4.profile
![Screenshot 2025-01-02 144711](https://github.com/user-attachments/assets/a5666468-eb2c-4511-932e-e17530e2ce1b)



5.Notification
![Screenshot 2025-01-02 144734](https://github.com/user-attachments/assets/c6e314cc-76f3-4644-bd19-6aa469256a06)



