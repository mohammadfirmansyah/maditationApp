# Create all GitHub Issues for maditationApp user stories

Write-Host "Creating GitHub Issues for maditationApp..." -ForegroundColor Green

# Issue 1: User Registration
gh issue create --title "User Registration" --body "**User Story:** As a user, I want to register by entering my username, email, and password, so that I can create an account.

**Acceptance Criteria:**
1. Users can enter valid details (username, email, password)
2. Users can click Sign Up button
3. Error message shown if invalid/missing input
4. User details saved in local storage

**Priority:** High | **Story Points:** 5" --label "enhancement,priority: high"

# Issue 2: User Login
gh issue create --title "User Login" --body "**User Story:** As a user, I want to log in using my email and password, so that I can access my account.

**Acceptance Criteria:**
1. Users can log in with correct credentials
2. Redirected to dashboard on success
3. Error message for incorrect credentials
4. Login state persists using local storage

**Priority:** High | **Story Points:** 5" --label "enhancement,priority: high"

# Issue 3: Error Feedback for Sign Up
gh issue create --title "Error Feedback for Sign Up" --body "**User Story:** As a user, I want to receive feedback when I attempt to sign up or log in without entering details, so that I can fix the errors.

**Acceptance Criteria:**
1. Error messages for missing fields
2. Specific field validation errors shown
3. Error messages clear and actionable
4. Form retains valid input when errors occur

**Priority:** Medium | **Story Points:** 3" --label "enhancement,priority: medium"

# Issue 4: Persist User Data
gh issue create --title "Persist User Data" --body "**User Story:** As a user, I want my details to be stored in local storage, so that my data persists between sessions.

**Acceptance Criteria:**
1. User details saved in local storage after registration
2. Login credentials used for authentication
3. User data persists after closing app
4. Data can be cleared on logout

**Priority:** High | **Story Points:** 3" --label "enhancement,priority: high"

# Issue 5: Personalized Greeting
gh issue create --title "Personalized Greeting" --body "**User Story:** As a user, I want a personalized greeting with my name and a title, so that I feel welcomed and encouraged to meditate.

**Acceptance Criteria:**
1. Display Hello, [username] at the top
2. Show title Find your perfect meditation below
3. Username retrieved from local storage
4. Greeting updates if user changes profile

**Priority:** Medium | **Story Points:** 2" --label "enhancement,priority: medium"

# Issue 6: Display Popular Meditation Cards
gh issue create --title "Display Popular Meditation Cards" --body "**User Story:** As a user, I want to see popular meditation cards, so that I can explore options based on my preferences.

**Acceptance Criteria:**
1. Display cards with images, titles, descriptions
2. Show categories and durations
3. Cards are tappable
4. Navigate to detail screen on tap

**Priority:** High | **Story Points:** 8" --label "enhancement,priority: high"

# Issue 7: Daily Featured Meditation
gh issue create --title "Daily Featured Meditation" --body "**User Story:** As a user, I want a daily featured meditation, so that I can quickly access a recommended session.

**Acceptance Criteria:**
1. Showcase one meditation in dedicated section
2. Display image, title, category, duration
3. Featured meditation changes daily
4. Prominent placement at top of homepage

**Priority:** Medium | **Story Points:** 5" --label "enhancement,priority: medium"

# Issue 8: Intuitive Navigation Icons
gh issue create --title "Intuitive Navigation Icons" --body "**User Story:** As a user, I want intuitive navigation icons, so that I can easily move around the app.

**Acceptance Criteria:**
1. Display logo in top-left corner
2. Show settings icon in top-right
3. Icons clearly visible and tappable
4. Navigation responsive and smooth

**Priority:** High | **Story Points:** 3" --label "enhancement,priority: high"

# Issue 9: Display Exercise Banner and Info
gh issue create --title "Display Exercise Banner and Info" --body "**User Story:** As a user, I want to see a large banner image with exercise details, so that I can understand what the meditation is about.

**Acceptance Criteria:**
1. Large banner image at the top
2. Display exercise title
3. Show categories and duration
4. Banner image high quality

**Priority:** High | **Story Points:** 5" --label "enhancement,priority: high"

# Issue 10: About Section
gh issue create --title "About Section" --body "**User Story:** As a user, I want an About section for each exercise, so that I can understand its benefits and purpose.

**Acceptance Criteria:**
1. Display brief description of exercise
2. Explain focus and stress-reducing benefits
3. Text readable with appropriate font size
4. Section clearly labeled as About

**Priority:** Medium | **Story Points:** 3" --label "enhancement,priority: medium"

# Issue 11: Instructions Section
gh issue create --title "Instructions Section" --body "**User Story:** As a user, I want an Instructions section for each exercise, so that I can perform it correctly.

**Acceptance Criteria:**
1. Provide step-by-step guidance on posture
2. Include breathing technique instructions
3. Use numbered/bulleted list for clarity
4. Instructions easy to follow for beginners

**Priority:** High | **Story Points:** 5" --label "enhancement,priority: high"

# Issue 12: Add to Favorites Button
gh issue create --title "Add to Favorites Button" --body "**User Story:** As a user, I want an Add to Favorites button, so that I can easily save an exercise for future practice.

**Acceptance Criteria:**
1. Prominent button at bottom of page
2. Button shows heart icon with text
3. Toggles between Add/Remove from Favorites
4. Heart icon changes outlined to filled

**Priority:** High | **Story Points:** 5" --label "enhancement,priority: high"

# Issue 13: Navigation Icons (Back and Share)
gh issue create --title "Navigation Icons (Back and Share)" --body "**User Story:** As a user, I want navigation icons for sharing and going back, so that I can easily manage the exercise page.

**Acceptance Criteria:**
1. Display back icon at top-left
2. Show share icon at top-right
3. Both icons clearly visible and tappable
4. Back navigation returns smoothly

**Priority:** Medium | **Story Points:** 3" --label "enhancement,priority: medium"

# Issue 14: Add Item to Favorites
gh issue create --title "Add Item to Favorites" --body "**User Story:** As a user, I want to add an item to my Favorites, so that I can save activities I like for quick access later.

**Acceptance Criteria:**
1. Heart icon with Add to Favorites text displayed
2. Outlined heart indicates not in Favorites
3. Tapping adds item to Favorites list
4. Button text updates and heart fills

**Priority:** High | **Story Points:** 5" --label "enhancement,priority: high"

# Issue 15: Remove Item from Favorites
gh issue create --title "Remove Item from Favorites" --body "**User Story:** As a user, I want to remove an item from my Favorites, so that I can manage my saved content.

**Acceptance Criteria:**
1. Remove button with filled heart for favorited items
2. Tapping removes item from Favorites list
3. Heart icon reverts to outlined state
4. Instant feedback when adding/removing

**Priority:** Medium | **Story Points:** 3" --label "enhancement,priority: medium"

# Issue 16: My Favorites Screen
gh issue create --title "My Favorites Screen" --body "**User Story:** As a user, I want a My Favorites screen, so that I can view and manage all my saved items in one place.

**Acceptance Criteria:**
1. Screen displays list of saved items
2. Each item shows title, category, duration
3. Users can tap any item to view details
4. Favorites list organized for easy browsing

**Priority:** High | **Story Points:** 8" --label "enhancement,priority: high"

# Issue 17: View and Navigate Calendar
gh issue create --title "View and Navigate Calendar" --body "**User Story:** As a user, I want to view the calendar for the current month and navigate between months, so that I can easily select dates for reminders.

**Acceptance Criteria:**
1. Display current month with all days
2. Provide navigation arrows between months
3. Current date is highlighted
4. Selected date visually distinguished

**Priority:** Medium | **Story Points:** 5" --label "enhancement,priority: medium"

# Issue 18: Select Date and Time for Reminder
gh issue create --title "Select Date and Time for Reminder" --body "**User Story:** As a user, I want to select a date and time for a reminder, so that I can schedule it properly.

**Acceptance Criteria:**
1. Display default text for date and time
2. Allow date selection from calendar
3. Allow time selection using time picker
4. Display selected date and time clearly

**Priority:** High | **Story Points:** 5" --label "enhancement,priority: high"

# Issue 19: Add Reminder
gh issue create --title "Add Reminder" --body "**User Story:** As a user, I want to add a reminder after selecting a time, so that I can schedule it for a future date and time.

**Acceptance Criteria:**
1. Users can click Add Reminder button
2. Reminder scheduled with selected date/time
3. Success message displayed
4. Reminder appears in reminders list

**Priority:** High | **Story Points:** 8" --label "enhancement,priority: high"

# Issue 20: View and Manage Reminders List
gh issue create --title "View and Manage Reminders List" --body "**User Story:** As a user, I want to see a list of all my reminders, so that I can manage them easily.

**Acceptance Criteria:**
1. Display list of all reminders with date/time
2. Show meditation exercise name
3. Provide red Delete button for each
4. Reminders sorted chronologically

**Priority:** Medium | **Story Points:** 5" --label "enhancement,priority: medium"

# Issue 21: Share Exercises with Others
gh issue create --title "Share Exercises with Others" --body "**User Story:** As a user, I want to easily share recommended exercises with friends or family, so that I can help others discover helpful activities.

**Acceptance Criteria:**
1. Provide clear share button on detail page
2. Tapping opens native share sheet
3. Allow sharing via multiple platforms
4. Share includes exercise title and description

**Priority:** Medium | **Story Points:** 5" --label "enhancement,priority: medium"

# Issue 22: Logout Button
gh issue create --title "Logout Button" --body "**User Story:** As a user, I want a clear and visible logout button, so that I can easily log out of my account.

**Acceptance Criteria:**
1. Display clear Logout button in settings
2. Tapping shows confirmation dialog
3. Confirming clears session and redirects to login
4. User session data cleared from storage

**Priority:** High | **Story Points:** 5" --label "enhancement,priority: high"

# Issue 23: Switch Between Light and Dark Themes
gh issue create --title "Switch Between Light and Dark Themes" --body "**User Story:** As a user, I want to switch between light and dark themes, so that I can reduce eye strain and customize the app's visual experience.

**Acceptance Criteria:**
1. Provide Theme toggle in settings
2. Options include light and dark mode
3. Theme changes immediately
4. Theme preference saved in local storage

**Priority:** Medium | **Story Points:** 8" --label "enhancement,priority: medium"

Write-Host "`nAll 23 GitHub Issues created successfully!" -ForegroundColor Green
Write-Host "View issues at: https://github.com/mohammadfirmansyah/maditationApp/issues" -ForegroundColor Cyan
