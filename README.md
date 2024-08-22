https://gleaming-cherry-quiet.glitch.me/


Social Media Aggregation API
This project is a simple Node.js application that aggregates social media statistics from multiple platforms. It provides endpoints to fetch aggregated stats or detailed stats for specific platforms like Twitter and Instagram.

Table of Contents
Getting Started
Prerequisites
Installation
Running the Application
API Documentation
Base URL
Endpoints
GET /api/social-stats
GET /api/platform/
Assumptions and Design Decisions
Testing
Rate Limiting
License
Getting Started
Prerequisites
Ensure that you have the following installed:

Node.js (v14.x or later)
npm (v6.x or later)
Installation
Clone the repository:

bash
Copy code
git clone https://github.com/your-username/social-media-agg.git
cd social-media-agg
Install dependencies:

bash
Copy code
npm install
Set up environment variables:

Create a .env file in the root directory and add the following:

bash
Copy code
PORT=5000
CACHE_DURATION=300000
Running the Application
Start the server:

bash
Copy code
npm start
Access the application:

The server will be running at http://localhost:5000.

Visit http://localhost:5000/ to see the main page.
Use the API endpoints as described below.
API Documentation
Base URL
bash
Copy code
http://localhost:5000/api
Endpoints
GET /api/social-stats
Fetches aggregated statistics from supported social media platforms.

Response:

json
Copy code
{
    "twitter": {...},
    "instagram": {...}
}
GET /api/platform/
Fetches detailed statistics for a specific platform.

Path Parameters:

platform - Name of the platform (twitter, instagram)
Response:

json
Copy code
[
    {...},
    {...}
]
Error Response:

json
Copy code
{
    "message": "Invalid platform"
}
Assumptions and Design Decisions
Mock APIs: This project uses mock data or public APIs for Twitter and Instagram data.
Caching: A basic caching mechanism is implemented to reduce the number of requests made to external APIs.
Rate Limiting: The API includes a rate limiter to prevent abuse by restricting the number of requests per IP.
Testing
To run the unit tests, execute:

bash
Copy code
npm run test
This will run a suite of tests to ensure the API behaves as expected.

Rate Limiting
Rate limiting is applied to prevent abuse of the API endpoints. Each IP address is allowed up to 10 requests per minute. Exceeding this limit will result in a 429 Too Many Requests error.

License
This project is licensed under the MIT License. See the LICENSE file for more details.
