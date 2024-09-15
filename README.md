Token Flow is a web application that provides real time data on the current price of the various crypto currencies in the market
The application integrates the use of coingecko api which fetches real time data on the current price values of the currencies in the market
Here is a step by step guide on setting the project up 
Installation
1.	Clone the repository
Use Git to clone the repository to your local machine.
	git clone https://github.com/your-username/token-flow.git

2.	Navigate to the project directory
	cd token-flow

3.	Install dependencies
Run the following command to install all required dependencies:
npm install

         Configuration
4.	Set up environment variables
	Create a .env file in the root directory of the project.
	REACT_APP_COINGECKO_API_KEY=your-api-key
  
       Running the Project
5.	Start the development server
After setting up the environment, run the development server:
	npm start
The app will be running on http://localhost:3000/.

6.	Building the project
To build the project for production, run:
npm run build
This will create an optimized build of the project in the build/ folder.

              Deployment
Our  project is deployed and live at: Token Flow
To deploy your own version on platforms like Vercel or Netlify:
7.	Build the project using the build command:
 npm run build

8.	Deploy the build/ directory on your chosen hosting platform.
