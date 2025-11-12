# 🧘 Meditation App

[![GitHub](https://img.shields.io/badge/GitHub-maditationApp-blue?logo=github)](https://github.com/mohammadfirmansyah/maditationApp)
[![React Native](https://img.shields.io/badge/React%20Native-0.76.3-61DAFB?logo=react)](https://reactnative.dev/)
[![Expo](https://img.shields.io/badge/Expo-SDK%2052-000020?logo=expo)](https://expo.dev/)
[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](LICENSE)

A comprehensive meditation and mindfulness application built with React Native and Expo, designed to help users find inner peace and mental clarity. This project demonstrates modern mobile development practices, complete user story development, and Agile methodology implementation.

## 📚 Documentation

- **[User Stories](meditation_user_stories.md)** - Complete user stories for all features
- **[Issue Template](issue_template.md)** - Template for creating GitHub issues
- **[Contributing Guide](CONTRIBUTING.md)** - Learn how to contribute
- **[Changelog](CHANGELOG.md)** - Version history and release notes

## ✨ Key Features

- **User Authentication**: Secure registration and login with persistent local storage
- **Personalized Experience**: Customized greeting and meditation recommendations
- **Rich Meditation Library**: Browse popular meditations with images, categories, and durations
- **Daily Featured Content**: Algorithm-curated daily meditation recommendations
- **Favorites System**: Save and manage favorite meditation exercises for quick access
- **Smart Reminders**: Schedule notifications with calendar and time picker
- **Exercise Details**: Comprehensive information with About section and step-by-step instructions
- **Social Sharing**: Share meditation exercises with friends via multiple platforms
- **Theme Customization**: Switch between light and dark modes for comfortable viewing
- **Cross-Platform**: Works seamlessly on iOS, Android, and Web

## 📱 Screenshots

```svg
<svg width="800" height="600" xmlns="http://www.w3.org/2000/svg">
  <!-- Background -->
  <defs>
    <linearGradient id="bgGradient" x1="0%" y1="0%" x2="0%" y2="100%">
      <stop offset="0%" style="stop-color:#E0F2F1;stop-opacity:1" />
      <stop offset="100%" style="stop-color:#B2DFDB;stop-opacity:1" />
    </linearGradient>
  </defs>
  <rect width="800" height="600" fill="url(#bgGradient)"/>
  
  <!-- Phone Frame -->
  <rect x="250" y="50" width="300" height="500" rx="20" fill="#ffffff" stroke="#333" stroke-width="2"/>
  
  <!-- Status Bar -->
  <rect x="250" y="50" width="300" height="30" rx="20" fill="#00897B"/>
  <text x="400" y="72" text-anchor="middle" fill="#ffffff" font-family="Arial" font-size="12">Meditation App</text>
  
  <!-- Header with Logo and Settings -->
  <circle cx="280" cy="105" r="12" fill="#00897B"/>
  <text x="285" y="110" fill="#ffffff" font-family="Arial" font-size="10" font-weight="bold">M</text>
  <text x="520" y="110" fill="#00897B" font-family="Arial" font-size="18">⚙</text>
  
  <!-- Greeting -->
  <text x="280" y="135" fill="#004D40" font-family="Arial" font-size="16" font-weight="bold">Hello, User!</text>
  <text x="280" y="155" fill="#00695C" font-family="Arial" font-size="12">Find your perfect meditation</text>
  
  <!-- Daily Featured Section -->
  <rect x="270" y="170" width="260" height="100" rx="10" fill="#ffffff" stroke="#80CBC4" stroke-width="2"/>
  <rect x="270" y="170" width="260" height="60" rx="10" fill="#26A69A"/>
  <text x="400" y="205" text-anchor="middle" fill="#ffffff" font-family="Arial" font-size="14" font-weight="bold">Daily Featured</text>
  <text x="280" y="245" fill="#004D40" font-family="Arial" font-size="12" font-weight="bold">Mindful Breathing</text>
  <text x="280" y="260" fill="#00695C" font-family="Arial" font-size="10">Calmness • 10 min</text>
  
  <!-- Popular Meditations Title -->
  <text x="280" y="295" fill="#004D40" font-family="Arial" font-size="14" font-weight="bold">Popular Meditations</text>
  
  <!-- Meditation Cards -->
  <rect x="270" y="305" width="125" height="90" rx="8" fill="#ffffff" stroke="#B2DFDB" stroke-width="1"/>
  <rect x="270" y="305" width="125" height="50" rx="8" fill="#4DB6AC"/>
  <text x="332" y="370" text-anchor="middle" fill="#004D40" font-family="Arial" font-size="10" font-weight="bold">Body Scan</text>
  <text x="332" y="385" text-anchor="middle" fill="#00897B" font-family="Arial" font-size="8">Relaxation • 15m</text>
  
  <rect x="405" y="305" width="125" height="90" rx="8" fill="#ffffff" stroke="#B2DFDB" stroke-width="1"/>
  <rect x="405" y="305" width="125" height="50" rx="8" fill="#80CBC4"/>
  <text x="467" y="370" text-anchor="middle" fill="#004D40" font-family="Arial" font-size="10" font-weight="bold">Deep Sleep</text>
  <text x="467" y="385" text-anchor="middle" fill="#00897B" font-family="Arial" font-size="8">Sleep • 20m</text>
  
  <rect x="270" y="405" width="125" height="90" rx="8" fill="#ffffff" stroke="#B2DFDB" stroke-width="1"/>
  <rect x="270" y="405" width="125" height="50" rx="8" fill="#26A69A"/>
  <text x="332" y="470" text-anchor="middle" fill="#004D40" font-family="Arial" font-size="10" font-weight="bold">Stress Relief</text>
  <text x="332" y="485" text-anchor="middle" fill="#00897B" font-family="Arial" font-size="8">Calmness • 12m</text>
  
  <rect x="405" y="405" width="125" height="90" rx="8" fill="#ffffff" stroke="#B2DFDB" stroke-width="1"/>
  <rect x="405" y="405" width="125" height="50" rx="8" fill="#4DB6AC"/>
  <text x="467" y="470" text-anchor="middle" fill="#004D40" font-family="Arial" font-size="10" font-weight="bold">Focus Boost</text>
  <text x="467" y="485" text-anchor="middle" fill="#00897B" font-family="Arial" font-size="8">Focus • 8m</text>
  
  <!-- Bottom Navigation -->
  <rect x="250" y="520" width="300" height="30" fill="#ffffff" stroke="#E0E0E0" stroke-width="1"/>
  <text x="285" y="540" fill="#00897B" font-family="Arial" font-size="11" font-weight="bold">Home</text>
  <text x="350" y="540" fill="#757575" font-family="Arial" font-size="11">Favorites</text>
  <text x="425" y="540" fill="#757575" font-family="Arial" font-size="11">Reminders</text>
  <text x="500" y="540" fill="#757575" font-family="Arial" font-size="11">Profile</text>
</svg>
```

## 🛠️ Technologies Used

- **React Native** - v0.76.3 (Cross-platform mobile framework)
- **Expo SDK** - v52.0.11 (Development platform)
- **JavaScript** - ES6+ with modern syntax
- **React** - v18.3.1 (UI library)
- **AsyncStorage** - Local data persistence
- **expo-notifications** - Smart reminder system
- **expo-sharing** - Native sharing capabilities
- **React Navigation** - Seamless navigation between screens
- **react-native-calendars** - Calendar component for reminders

## 📂 Project Structure

```
maditationApp/
├── App.js                         # Main application entry point with theme provider
├── app.json                       # Expo configuration and app metadata
├── package.json                   # Dependencies and scripts
├── assets/                        # Static resources
│   ├── images/                    # Meditation images and banners
│   ├── fonts/                     # Custom fonts
│   └── icon.png                   # App icon
├── src/                           # Source code
│   ├── screens/                   # UI screens
│   │   ├── LoginScreen.js         # Login and registration
│   │   ├── HomeScreen.js          # Homepage with featured content
│   │   ├── DetailScreen.js        # Meditation exercise details
│   │   ├── FavoritesScreen.js     # Saved favorite meditations
│   │   ├── RemindersScreen.js     # Manage reminders and notifications
│   │   └── SettingsScreen.js      # App settings and theme toggle
│   ├── components/                # Reusable UI components
│   │   ├── MeditationCard.js      # Meditation card component
│   │   ├── ThemeToggle.js         # Theme switcher component
│   │   └── ReminderItem.js        # Reminder list item
│   ├── contexts/                  # React Context for state management
│   │   ├── AuthContext.js         # Authentication state
│   │   └── ThemeContext.js        # Theme state
│   ├── utils/                     # Utility functions
│   │   ├── storage.js             # AsyncStorage helpers
│   │   └── notifications.js       # Notification scheduling
│   └── constants/                 # App constants
│       ├── Colors.js              # Color palette for light/dark themes
│       └── Meditations.js         # Meditation data and categories
├── meditation_user_stories.md     # Complete user stories documentation
└── issue_template.md              # GitHub issue template
```

## 🚀 Setup & Installation

Before you begin, make sure you have the following installed:
- Node.js (>= 18.0)
- npm or yarn package manager
- Expo CLI (`npm install -g expo-cli`)
- Expo Go app on your mobile device (for testing)
- Git for version control

Follow these steps to get your development environment running:

1. **Clone the repository:**
   ```bash
   git clone https://github.com/mohammadfirmansyah/maditationApp.git
   cd maditationApp
   ```

2. **Install dependencies:**
   ```bash
   npm install
   # or
   yarn install
   ```

3. **Verify installation:**
   ```bash
   npm list
   ```

## 💻 Usage / How to Run

1. **Start the development server:**
   ```bash
   npm start
   # or
   npx expo start
   ```

2. **Run on different platforms:**
   ```bash
   # Press 'a' for Android emulator
   # Press 'i' for iOS simulator (macOS only)
   # Press 'w' for web browser
   # Scan QR code with Expo Go app for physical device
   ```

3. **Run in production mode:**
   ```bash
   npm start --no-dev
   ```

4. **Build for production:**
   ```bash
   # Android APK
   expo build:android -t apk
   
   # Android App Bundle (for Play Store)
   expo build:android -t app-bundle
   
   # iOS (requires Apple Developer account)
   expo build:ios
   ```

## 📝 Important Code Explanations

### Authentication with Local Storage
The app uses AsyncStorage to persist user data across sessions:

```javascript
// src/utils/storage.js

// Store user credentials securely in local storage
export const saveUserData = async (userData) => {
  try {
    // Convert user object to JSON string for storage
    const jsonValue = JSON.stringify(userData);
    await AsyncStorage.setItem('@user_data', jsonValue);
    return true;
  } catch (error) {
    console.error('Error saving user data:', error);
    return false;
  }
};

// Retrieve user data from local storage
export const getUserData = async () => {
  try {
    const jsonValue = await AsyncStorage.getItem('@user_data');
    return jsonValue != null ? JSON.parse(jsonValue) : null;
  } catch (error) {
    console.error('Error retrieving user data:', error);
    return null;
  }
};
```

*This approach ensures user data persists between app sessions without requiring a backend server.*

### Theme Context for Light/Dark Mode
The app implements a theme system using React Context:

```javascript
// src/contexts/ThemeContext.js

import React, { createContext, useState, useEffect } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

export const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  const [isDarkMode, setIsDarkMode] = useState(false);
  
  // Load saved theme preference on app start
  useEffect(() => {
    loadTheme();
  }, []);
  
  const loadTheme = async () => {
    try {
      const savedTheme = await AsyncStorage.getItem('@theme_mode');
      if (savedTheme !== null) {
        setIsDarkMode(savedTheme === 'dark');
      }
    } catch (error) {
      console.error('Error loading theme:', error);
    }
  };
  
  // Toggle theme and save preference
  const toggleTheme = async () => {
    const newTheme = !isDarkMode;
    setIsDarkMode(newTheme);
    try {
      await AsyncStorage.setItem('@theme_mode', newTheme ? 'dark' : 'light');
    } catch (error) {
      console.error('Error saving theme:', error);
    }
  };
  
  return (
    <ThemeContext.Provider value={{ isDarkMode, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};
```

*This pattern provides instant theme switching with persistent preferences across app restarts.*

### Notification Scheduling System
Here's how the app schedules meditation reminders:

```javascript
// src/utils/notifications.js

import * as Notifications from 'expo-notifications';

// Request notification permissions from the user
export const requestNotificationPermissions = async () => {
  const { status } = await Notifications.requestPermissionsAsync();
  return status === 'granted';
};

// Schedule a reminder for a specific meditation at a given date and time
export const scheduleReminder = async (meditation, dateTime) => {
  try {
    const notificationId = await Notifications.scheduleNotificationAsync({
      content: {
        title: 'Time to Meditate 🧘',
        body: `Your scheduled session: ${meditation.title}`,
        data: { meditationId: meditation.id },
      },
      trigger: {
        date: dateTime, // Schedule for specific date and time
      },
    });
    return notificationId;
  } catch (error) {
    console.error('Error scheduling notification:', error);
    return null;
  }
};

// Cancel a specific reminder
export const cancelReminder = async (notificationId) => {
  await Notifications.cancelScheduledNotificationAsync(notificationId);
};
```

*This implementation ensures users receive timely reminders while respecting system notification permissions.*

## 📖 Learning Outcomes

This project is an excellent way to learn and practice:

- ✅ **Agile Development**: Writing comprehensive user stories and managing development sprints
- ✅ **React Native**: Building cross-platform mobile applications with JavaScript
- ✅ **Expo Platform**: Rapid development with Expo's powerful tooling and APIs
- ✅ **State Management**: Using React Context for global state (auth, theme)
- ✅ **Local Storage**: Implementing AsyncStorage for data persistence
- ✅ **Navigation**: Using React Navigation for seamless screen transitions
- ✅ **Notifications**: Scheduling and managing local push notifications
- ✅ **Theme System**: Implementing dark/light mode with persistent preferences
- ✅ **Share API**: Integrating native sharing capabilities
- ✅ **Modern JavaScript**: ES6+ features (async/await, destructuring, arrow functions)
- ✅ **Component Architecture**: Building reusable UI components
- ✅ **User Experience**: Designing calming, intuitive interfaces for meditation apps

## 🎯 User Story Development

This project follows a comprehensive Agile approach with:

- **23 detailed user stories** covering all major features
- **Priority-based development** with High/Medium priority levels
- **Acceptance criteria** for each feature to ensure quality
- **Story point estimation** using Fibonacci sequence for planning
- **Complete feature breakdown**: Login, Homepage, Details, Favorites, Reminders, Sharing, Settings

See the [User Stories](meditation_user_stories.md) for complete details.

## 🤝 Contributing

We welcome contributions! Please see our **[Contributing Guide](CONTRIBUTING.md)** for more details on how to submit a Pull Request.

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'feat: add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

### Development Guidelines

- Write meaningful commit messages following [Conventional Commits](https://www.conventionalcommits.org/)
- Test on both iOS and Android platforms before submitting
- Update documentation when adding new functionality
- Follow the existing code style and project structure
- Ensure the app runs without errors: `npm start`

## 📄 License

This project is licensed under the Apache License 2.0. See the **[LICENSE](LICENSE)** file for details.

## 👨‍💻 Developer

- **Mohammad Firman Syah**
- **GitHub**: [@mohammadfirmansyah](https://github.com/mohammadfirmansyah)
- **Project Link**: [https://github.com/mohammadfirmansyah/maditationApp](https://github.com/mohammadfirmansyah/maditationApp)

---

**Built with ❤️ using React Native & Expo**

*Note: For production use, consider implementing backend authentication, cloud synchronization, and professional meditation audio content.*


2. **Install dependencies:**
   ```bash
   npm install
   ```

## 💻 Usage / How to Run

1. **Start the development server:**
   ```bash
   npm start
   ```

2. **Run on specific platforms:**
   ```bash
   # Android
   npm run android
   
   # iOS (macOS only)
   npm run ios
   
   # Web
   npm run web
   ```

3. **Scan QR code** with Expo Go app on your mobile device to test

## 📝 Code Highlights

### Main Application Component

The app uses a clean component structure with modern React patterns:

```javascript
// App.js

// Import necessary React Native components
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

// Main application component
export default function App() {
  return (
    <View style={styles.container}>
      <Text>Welcome to Meditation App</Text>
      <StatusBar style="auto" />
    </View>
  );
}

// StyleSheet for component styling
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
```

*This structure provides a clean foundation for building feature-rich mobile applications.*

## 📖 Learning Outcomes

This project is a great way to learn and practice:

- ✅ **React Native**: Building native mobile applications with JavaScript
- ✅ **Expo SDK**: Rapid development with managed workflow
- ✅ **Component Design**: Creating reusable UI components
- ✅ **State Management**: Managing application state with React hooks
- ✅ **Mobile Development**: Cross-platform app development

## 🤝 Contributing

We welcome contributions! Please see our **[Contributing Guide](CONTRIBUTING.md)** for more details on how to submit a Pull Request.

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License. See the **[LICENSE](LICENSE)** file for details.

## 👨‍💻 Developer

- **Mohammad Firman Syah**
- **Project Link:** [https://github.com/mohammadfirmansyah/maditationApp](https://github.com/mohammadfirmansyah/maditationApp)

---

Built with ❤️ using React Native & Expo
