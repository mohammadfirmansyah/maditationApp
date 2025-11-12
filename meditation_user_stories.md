# Meditation App User Stories

## Exercise 2: Login/Registration Page

### User Story 1: User Registration
**Title:**
_As a user, I want to register by entering my username, email, and password, so that I can create an account._

**Acceptance Criteria:**
1. Users can enter valid details (username, email, password) in the registration form
2. Users can click "Sign Up" button to create an account
3. An error message is shown if any input is invalid or missing
4. User details are saved in local storage after successful registration

**Priority:** High

**Story Points:** 5

**Notes:**
- Email validation required (proper format)
- Password must meet minimum security requirements (min 6 characters)
- Username should be unique within local storage

---

### User Story 2: User Login
**Title:**
_As a user, I want to log in using my email and password, so that I can access my account._

**Acceptance Criteria:**
1. Users can log in with correct credentials
2. Users are redirected to their dashboard upon successful login
3. An error message is displayed for incorrect credentials
4. Login state persists using local storage

**Priority:** High

**Story Points:** 5

**Notes:**
- Credentials are retrieved from local storage for authentication
- Session persists between app restarts
- Clear error messaging for failed login attempts

---

### User Story 3: Error Feedback for Sign Up
**Title:**
_As a user, I want to receive feedback when I attempt to sign up or log in without entering details, so that I can fix the errors._

**Acceptance Criteria:**
1. Error messages are displayed for missing fields on sign-up or login attempts
2. Specific field validation errors are shown (e.g., "Invalid email format")
3. Error messages are clear and actionable
4. Form retains valid input when errors occur

**Priority:** Medium

**Story Points:** 3

**Notes:**
- Real-time validation for better UX
- Red border or highlight for fields with errors
- Error text should be user-friendly

---

### User Story 4: Persist User Data
**Title:**
_As a user, I want my details to be stored in local storage, so that my data persists between sessions._

**Acceptance Criteria:**
1. User details are saved in local storage after registration
2. Login credentials are used for authentication during login
3. User data persists even after closing the app
4. Data can be cleared on logout

**Priority:** High

**Story Points:** 3

**Notes:**
- Use AsyncStorage or SecureStore for React Native
- Store only necessary data (avoid storing sensitive info unencrypted)
- Implement data expiration or refresh mechanism

---

## Exercise 3: Homepage

### User Story 5: Personalized Greeting
**Title:**
_As a user, I want a personalized greeting with my name and a title, so that I feel welcomed and encouraged to meditate._

**Acceptance Criteria:**
1. Display "Hello, [username]" at the top of the homepage
2. Show title "Find your perfect meditation" below greeting
3. Username is retrieved from local storage
4. Greeting updates if user changes their profile

**Priority:** Medium

**Story Points:** 2

**Notes:**
- Use friendly, welcoming tone
- Consider time-based greetings (Good morning, Good evening)
- Handle cases where username might be empty

---

### User Story 6: Display Popular Meditation Cards
**Title:**
_As a user, I want to see popular meditation cards, so that I can explore options based on my preferences._

**Acceptance Criteria:**
1. Display cards with images, titles, descriptions
2. Show categories (e.g., calmness, relaxation)
3. Display durations (e.g., 10 minutes, 15 minutes)
4. Cards are tappable and navigate to detail screen

**Priority:** High

**Story Points:** 8

**Notes:**
- Use grid or scrollable list layout
- Implement lazy loading for performance
- Include high-quality meditation images
- Consider adding ratings or popularity indicators

---

### User Story 7: Daily Featured Meditation
**Title:**
_As a user, I want a daily featured meditation, so that I can quickly access a recommended session._

**Acceptance Criteria:**
1. Showcase one meditation in a dedicated section
2. Display image, title, category, and duration
3. Featured meditation changes daily or based on algorithm
4. Prominent placement at top of homepage

**Priority:** Medium

**Story Points:** 5

**Notes:**
- Use larger card or banner design
- Implement rotation algorithm or manual curation
- Consider user preferences for recommendations
- Add "Featured" badge or indicator

---

### User Story 8: Intuitive Navigation Icons
**Title:**
_As a user, I want intuitive navigation icons, so that I can easily move around the app._

**Acceptance Criteria:**
1. Display a logo in the top-left corner
2. Show a settings icon in the top-right corner for navigation
3. Icons are clearly visible and tappable
4. Navigation is responsive and smooth

**Priority:** High

**Story Points:** 3

**Notes:**
- Use standard icon library (Expo Vector Icons)
- Ensure touch targets are at least 44x44 pixels
- Consider adding bottom tab navigation
- Highlight active navigation item

---

## Exercise 4: Detailed Exercise Page

### User Story 9: Display Exercise Banner and Info
**Title:**
_As a user, I want to see a large banner image with exercise details, so that I can understand what the meditation is about._

**Acceptance Criteria:**
1. Large banner image at the top representing the meditation
2. Display exercise title (e.g., "Mindful Breathing")
3. Show categories (e.g., Calmness) and duration
4. Banner image is high quality and loads efficiently

**Priority:** High

**Story Points:** 5

**Notes:**
- Use responsive image sizing
- Implement image caching for performance
- Consider adding gradient overlay for text readability
- Ensure accessibility with alt text

---

### User Story 10: About Section
**Title:**
_As a user, I want an "About" section for each exercise, so that I can understand its benefits and purpose._

**Acceptance Criteria:**
1. Display a brief description of the exercise
2. Explain the exercise's focus and stress-reducing benefits
3. Text is readable with appropriate font size and spacing
4. Section is clearly labeled as "About"

**Priority:** Medium

**Story Points:** 3

**Notes:**
- Keep descriptions concise (2-3 sentences)
- Use friendly, encouraging language
- Highlight key benefits with bullet points if needed

---

### User Story 11: Instructions Section
**Title:**
_As a user, I want an "Instructions" section for each exercise, so that I can perform it correctly._

**Acceptance Criteria:**
1. Provide step-by-step guidance on posture
2. Include breathing technique instructions
3. Use numbered or bulleted list for clarity
4. Instructions are easy to follow for beginners

**Priority:** High

**Story Points:** 5

**Notes:**
- Use clear, simple language
- Consider adding illustrations or animations
- Include tips for best results
- Ensure instructions are accessible (screen reader friendly)

---

### User Story 12: Add to Favorites Button
**Title:**
_As a user, I want an "Add to Favorites" button, so that I can easily save an exercise for future practice._

**Acceptance Criteria:**
1. Prominent "Add to Favorites" button at the bottom of the page
2. Button shows heart icon with text
3. Button state toggles between "Add" and "Remove from Favorites"
4. Heart icon changes from outlined to filled when favorited

**Priority:** High

**Story Points:** 5

**Notes:**
- Implement optimistic UI updates
- Store favorites in local storage
- Show confirmation feedback (toast or animation)
- Sync favorites across app screens

---

### User Story 13: Navigation Icons (Back and Share)
**Title:**
_As a user, I want navigation icons for sharing and going back, so that I can easily manage the exercise page._

**Acceptance Criteria:**
1. Display a back icon at the top-left for returning to previous screen
2. Show a share icon at the top-right for sharing the exercise
3. Both icons are clearly visible and tappable
4. Back navigation returns to previous screen smoothly

**Priority:** Medium

**Story Points:** 3

**Notes:**
- Use standard navigation patterns (back arrow, share icon)
- Implement native share functionality
- Consider adding animation for better UX

---

## Exercise 5: Add to Favorites Functionality

### User Story 14: Add Item to Favorites
**Title:**
_As a user, I want to add an item to my Favorites, so that I can save activities or articles I like for quick access later._

**Acceptance Criteria:**
1. A heart icon with text "Add to Favorites" is displayed next to each item
2. The outlined heart indicates the item is not in Favorites
3. Tapping the button adds the item to the Favorites list
4. Button text updates to "Remove from Favorites" and heart icon changes to filled

**Priority:** High

**Story Points:** 5

**Notes:**
- Implement smooth animation when toggling favorite state
- Update button state immediately (optimistic update)
- Store favorites persistently in local storage

---

### User Story 15: Remove Item from Favorites
**Title:**
_As a user, I want to remove an item from my Favorites, so that I can manage my saved content._

**Acceptance Criteria:**
1. The "Remove from Favorites" button with a filled heart is displayed for favorited items
2. Tapping the button removes the item from the Favorites list
3. Heart icon reverts to outlined state
4. Users can add or remove items anytime with instant feedback

**Priority:** Medium

**Story Points:** 3

**Notes:**
- Consider adding confirmation dialog for removal
- Implement undo functionality (optional)
- Update favorites count across the app

---

### User Story 16: My Favorites Screen
**Title:**
_As a user, I want a "My Favorites" screen, so that I can view and manage all my saved items in one place._

**Acceptance Criteria:**
1. The "My Favorites" screen displays a list of saved items
2. Each item shows title, category, and duration
3. Users can tap any item to view details or start the activity
4. The Favorites list remains organized for easy browsing and quick access

**Priority:** High

**Story Points:** 8

**Notes:**
- Implement empty state message when no favorites exist
- Allow sorting/filtering of favorites
- Add swipe-to-delete gesture
- Show total favorites count

---

## Exercise 6: Daily Reminders

### User Story 17: View and Navigate Calendar
**Title:**
_As a user, I want to view the calendar for the current month and navigate between months, so that I can easily select dates for reminders._

**Acceptance Criteria:**
1. Display the current month with all days visible
2. Provide navigation arrows to move between months
3. Current date is highlighted
4. Selected date is visually distinguished

**Priority:** Medium

**Story Points:** 5

**Notes:**
- Use calendar component library (react-native-calendars)
- Highlight dates with existing reminders
- Implement smooth month transitions
- Consider adding year selection

---

### User Story 18: Select Date and Time for Reminder
**Title:**
_As a user, I want to select a date and time for a reminder, so that I can schedule it properly._

**Acceptance Criteria:**
1. Display default text "Selected Date: None" and "Selected Time: 20:44"
2. Allow users to tap to select a specific date from calendar
3. Allow users to tap to select a specific time using time picker
4. Display selected date and time clearly

**Priority:** High

**Story Points:** 5

**Notes:**
- Use native date/time pickers for platform consistency
- Validate that selected date/time is in the future
- Show 12-hour or 24-hour format based on device settings
- Implement clear button to reset selection

---

### User Story 19: Add Reminder
**Title:**
_As a user, I want to add a reminder after selecting a time, so that I can schedule it for a future date and time._

**Acceptance Criteria:**
1. After selecting date and time, users can click "Add Reminder" button
2. Reminder is scheduled with selected date and time
3. Success message is displayed after adding reminder
4. Reminder appears in the reminders list

**Priority:** High

**Story Points:** 8

**Notes:**
- Implement local notifications using expo-notifications
- Request notification permissions from user
- Handle permission denied gracefully
- Associate reminder with specific meditation exercise

---

### User Story 20: View and Manage Reminders List
**Title:**
_As a user, I want to see a list of all my reminders, so that I can manage them easily._

**Acceptance Criteria:**
1. Display a list of all reminders with selected date and time
2. Show meditation exercise name for each reminder
3. Provide a red "Delete" button next to each reminder
4. Reminders are sorted chronologically

**Priority:** Medium

**Story Points:** 5

**Notes:**
- Implement swipe-to-delete gesture as alternative
- Add confirmation before deletion
- Show empty state when no reminders exist
- Consider adding edit functionality

---

## Exercise 7: Sharing Exercises

### User Story 21: Share Exercises with Others
**Title:**
_As a user, I want to easily share recommended exercises with friends or family, so that I can help others discover helpful activities._

**Acceptance Criteria:**
1. Provide a clear share button/icon on the exercise detail page
2. Tapping share button opens native share sheet
3. Allow users to share via multiple platforms (social media, email, messaging apps)
4. Share includes exercise title, description, and optional link

**Priority:** Medium

**Story Points:** 5

**Notes:**
- Use Expo Sharing API or React Native Share
- Generate shareable text with exercise details
- Consider adding deep linking for shared content
- Track share analytics (optional)

---

## Exercise 8: Logout Functionality

### User Story 22: Logout Button
**Title:**
_As a user, I want a clear and visible logout button, so that I can easily log out of my account when I'm done using the app._

**Acceptance Criteria:**
1. Display a clear and visible "Logout" button in the settings or profile screen
2. Tapping the button shows confirmation dialog
3. Confirming logout clears user session and redirects to login page
4. User session data is cleared from local storage

**Priority:** High

**Story Points:** 5

**Notes:**
- Add confirmation dialog: "Are you sure you want to logout?"
- Clear all user data from memory and storage
- Reset navigation stack to login screen
- Consider adding "Logout" option in menu as well

---

## Exercise 9: Change Settings (Theme Toggle)

### User Story 23: Switch Between Light and Dark Themes
**Title:**
_As a user, I want to switch between light and dark themes, so that I can reduce eye strain and customize the app's visual experience._

**Acceptance Criteria:**
1. Provide a "Theme" toggle or switch in the settings section
2. Options include light and dark mode
3. User can switch between themes seamlessly
4. Theme changes immediately without needing to refresh or restart the app
5. Theme preference is saved in local storage

**Priority:** Medium

**Story Points:** 8

**Notes:**
- Implement context or state management for theme
- Use consistent color palette for both themes
- Ensure all screens respect theme setting
- Consider adding "Auto" option based on device settings
- Test readability in both modes

---

## Summary

**Total User Stories:** 23

**Priority Breakdown:**
- High Priority: 12 stories
- Medium Priority: 11 stories
- Low Priority: 0 stories

**Estimated Total Story Points:** 109 points

**Feature Breakdown:**
- Login/Registration: 4 stories (16 points)
- Homepage: 4 stories (18 points)
- Detailed Exercise Page: 5 stories (21 points)
- Add to Favorites: 3 stories (16 points)
- Daily Reminders: 4 stories (23 points)
- Sharing: 1 story (5 points)
- Logout: 1 story (5 points)
- Settings/Theme: 1 story (8 points)
