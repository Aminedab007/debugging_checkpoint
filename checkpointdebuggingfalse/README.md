# ✅ React Debugging Checkpoint  
### *Student: Amine Dab*

This project is part of the React Debugging Checkpoint.  
The objective was to debug a small React application containing intentional issues related to state, props, and rendering behavior.  
All debugging was done using **React Developer Tools**.

---

## 📌 Project Overview

The application contains three components:

- **App.jsx** → Root component  
- **UserCard.jsx** → Displays a username  
- **Counter.jsx** → Simple counter with increment/decrement  

The original version contained several issues that caused the app to crash or behave unexpectedly.  
All bugs were identified and fixed using React Developer Tools.

---

## 🛠️ Tools Used

- React Developer Tools (Chrome extension)
- Browser Console for error tracing
- Component tree inspection
- Real-time state & props editing in DevTools
- Highlight Updates (⚛️)

---

## 🐞 Issues Identified (Before Fixing)

### 1. **Crash in UserCard**
`name` prop was `undefined`  
→ calling `name.toUpperCase()` caused a TypeError  
→ application rendered a blank screen

### 2. **Missing username in App**
`useState()` was initialized without a default value  
→ caused invalid props for UserCard

### 3. **Counter stale state update**
The increment function used `setCount(count + 1)`  
→ unsafe for async updates

### 4. **Counter allowed negative numbers**
Pressing "-" multiple times resulted in negative values

### 5. **Incorrect fallback in UserCard**
Conditional rendering was not preventing the crash

---

## ✅ Fixes Implemented

### ✔ UserCard  
- Added secure fallback  
- Ensured `.toUpperCase()` never runs on undefined  
- Added visual message when no username is provided

### ✔ App  
- Added default username in state  
- Ensured valid props are passed to UserCard

### ✔ Counter  
- Rewrote `setCount` using functional update  
- Added a guard to prevent values below zero  
- Improved displayed message

---

## 📂 Final File Structure

