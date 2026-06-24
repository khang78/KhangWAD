# Web Application – Air Quality Locations

A single-page application (SPA) built with HTML, CSS, JavaScript, and a Node.js/Express backend. The application provides an interactive map experience for managing air quality monitoring locations, with different access levels for guest and admin users.

## Overview

This SPA consists of five main screens:

1. **Login Page** – Users can log in with their credentials. Access level (guest or admin) is determined by the user's role stored in the database.
2. **Main Page** – Displays an interactive map alongside a list of all saved locations. Clicking a location in the list opens its details.
3. **Add Location Page (Admin-only)** – Allows admins to add new air quality monitoring locations by entering an address, which is geocoded and placed on the map.
4. **Detail/Update Page (Admin-only)** – Enables admins to view location details and update existing locations.
5. **Delete Location (Admin-only)** – Admins can remove locations from the map and database.

## Features

- **Guest Access** – Guests can log in and view the interactive map and location list, but cannot add, update, or delete locations.
- **Admin Access** – Admin users have full CRUD control over locations.
- **Geocoding** – Addresses entered by the admin are automatically geocoded using the Nominatim API to obtain coordinates for map placement.
- **Updates** – Locations added, updated, or removed by the admin are reflected on the map and in the location list.
- **RESTful API** – The backend exposes a REST API for user authentication and location management.

## Technologies Used

- **Frontend:** HTML, CSS, JavaScript
- **Backend:** Node.js, Express
- **Database:** MongoDB
- **Map Library:** Leaflet – used to render the interactive map and manage location markers
- **Geocoding:** Nominatim (OpenStreetMap) – converts addresses to coordinates

## API Endpoints

| Method | Endpoint         | Description              |
|--------|------------------|--------------------------|
| GET    | /locations       | Get all locations        |
| GET    | /locations/:id   | Get a single location    |
| POST   | /locations       | Create a new location    |
| PUT    | /locations/:id   | Update a location        |
| DELETE | /locations/:id   | Delete a location        |
| GET    | /users           | Get all users            |
| POST   | /users           | Login (authenticate)     |

## How to Run

1. Clone the repository.
2. Install dependencies:
   ```bash
   npm install
   ```
3. **Database setup:** The app connects to a MongoDB instance hosted at HTW Berlin (`mongodb1.f4.htw-berlin.de`). You must be on the HTW network or VPN to access it. If you want to use your own MongoDB, update the connection credentials in `src/db/mongoCRUDs.js`.
4. Start the server:
   ```bash
   npm start
   ```
5. Open `http://localhost:8000` in your browser to launch the application.
