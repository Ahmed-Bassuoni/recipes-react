# Recipe Explorer Project

The Recipe Explorer is a web application designed to help users discover new recipes based on various criteria. Users can search for recipes, filter results by ingredients or cuisine types, and view detailed information on each recipe.

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes.

### Prerequisites

Ensure you have the following installed on your local machine:

- [Node.js](https://nodejs.org/) (v14.0.0 or later)
- [npm](https://www.npmjs.com/) (v7.0.0 or later)

### Installation

1. Clone the repository to your local machine:
   ```bash
   git clone https://github.com/your-username/recipe-explorer.git
   ```

2. Navigate to the project directory:
   ```bash
   cd recipe-explorer
   ```

3. Install the project dependencies:
   ```bash
   npm install
   ```

4. Start the development server:
   ```bash
   npm start
   ```

The application will now be running on `http://localhost:3000`.

### Building the Project

To create a production-ready build of the project, run the following command:
```bash
npm run build
```

## Configuration

### API Key Setup

In order to interact with the real recipe API, you need to provide a valid API key. Update the `API_KEY` value in the `NetworkConstants.ts` file with your own API key.

### Mocks Toggle

Mocks were added for API testing purposes. To toggle between using the mock API and the real API, change the value of `USE_MOCKS` in the `config.ts` file.

## Design Decisions

### Project Structure

The project is structured in a modular fashion to separate concerns and improve maintainability. The main folders include `components`, `hooks`, `models`, `data`, and `styles`, each serving a specific purpose in the application.

### State Management

I utilized React's Context API along with custom hooks to manage the application's state. This approach provided a clean and efficient way to handle state across different components while keeping the codebase organized and easy to understand.

### Styling

Tailwind CSS, along with SCSS, was employed for styling the application. Tailwind CSS allowed for rapid prototyping and efficient utility-class-based styling, while SCSS was used for more customized styles.

### API Interaction

I have created a utility service (`ApisService`) to manage API interactions, allowing for a clean and centralized way to handle all API requests. This service is then used within various hooks to fetch data as required. The Repository pattern was employed to further abstract the data layer, ensuring a clean separation of concerns between the data and presentation layers.

### Font Icons

I switched from using `font-awesome` to `@fortawesome/fontawesome-free` to handle font icons more efficiently and resolve build-time path resolution issues.

### Error Handling

Error handling was implemented at the API interaction level, providing feedback to the user whenever an error occurs while fetching data from the API.
