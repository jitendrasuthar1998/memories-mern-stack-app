# Memories Application

## Introduction
The **Memories Application** is a simple app where users can save and share their memories as posts, similar to social platforms like Instagram and Facebook. Users can create posts, view available posts, and attach images to each memory.

### Screenshot
[![memories-app.png](https://i.postimg.cc/tJMwdPS1/memories-app.png)](https://postimg.cc/RJwg43z9)

## Sections

### Posts
The **Posts** section displays all available posts in the application. Users can browse through the memories shared by others.

### Form
In the **Form** section, users can create new posts by entering:
- Creator name
- Post title
- A message
- Tags related to the post
- An image from their computer to attach to the post

Once all fields are completed, users can submit the post to be saved in the application.

## Technologies Used

### Frontend
- **Material UI** and **Icons**
- **React**
- **React DOM**
- **Moment.js** (for date manipulation)
- **React File Base64** (for image uploads)
- **Redux** (for state management)
- **Axios** (for HTTP requests)

### Backend
- **Express** (for server-side logic)
- **Mongoose** (for interacting with MongoDB)
- **Cors** (for handling cross-origin requests)
- **Body-parser** (for parsing incoming request bodies)

## Application Workflow

1. **Fetching Posts**: 
   - When the app is launched, a **GET** request is sent to fetch all available posts from the MongoDB database.
   - If posts exist, they are displayed in the **Posts** section. If no posts are found, a message "No Post Available" is shown.
   
2. **Creating a Post**: 
   - Users can create a post by filling out all fields in the **Form** and uploading an image.
   - After submitting the form, the post is saved to the MongoDB database via a **POST** request.
   - Once the post is saved, the app refreshes to display all posts, including the new one.

## How to Start This Application Locally

### Prerequisites
- **Node.js** installed on your system.
- A **MongoDB** connection string (local or cloud).

### Steps

1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/memories-mern-stack.git
   ```

2. Navigate to the project directory and open it in your code editor.

3. Install dependencies in both the **client** and **server** directories:
   
   For the **client**:
   ```bash
   cd client
   npm install
   ```

   For the **server**:
   ```bash
   cd server
   npm install
   ```

4. Set up MongoDB:
   - In the **server** folder, create a `.env` file and add your MongoDB connection string:
     ```bash
     CONNECTION_URL=your_mongodb_connection_string
     ```

5. Start the backend server:
   ```bash
   cd server
   npm start
   ```

6. Open a new terminal, navigate to the **client** folder, and start the frontend:
   ```bash
   cd client
   npm start
   ```

The application should now be running locally at `http://localhost:3000/`.

---

By following these steps, you'll have the **Memories Application** up and running, allowing you to create and view memorable posts!