https://gleaming-cherry-quiet.glitch.me/


# Social Media Aggregation API

This project is a simple Node.js application that aggregates social media statistics from multiple platforms. It provides endpoints to fetch aggregated stats or detailed stats for specific platforms like Twitter and Instagram.

## Table of Contents

- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
  - [Running the Application](#running-the-application)
- [API Documentation](#api-documentation)
  - [Endpoints](#endpoints)
    - [GET /api/social-stats](#get-apisocial-stats)
    - [GET /api/platform/:platform](#get-apiplatformplatform)
- [Assumptions and Design Decisions](#assumptions-and-design-decisions)
- [Testing](#testing)
- [Rate Limiting](#rate-limiting)
- [License](#license)

## Getting Started

### Prerequisites

Ensure that you have the following installed:

- Node.js (v14.x or later)
- npm (v6.x or later)

### Installation

1. **Clone the repository:**

   ```bash
   git clone https://github.com/your-username/social-media-agg.git
   cd social-media-agg

2.  **Install dependencies**
     ```bash
      npm install
3. **Set up environment variables**
    ```bash
    PORT=5000
   CACHE_DURATION=300000

### Running the Application    
1. **Start the server**
    ```bash
    npm start
2. **Access the application**
      
      - [Visit http://localhost:5000/ to see the main page.]
      - [Use the API endpoints as described below.]

## API Documentation
### Endpoints
   ### - GET /api/social-stats
       Fetches aggregated statistics from supported social media platforms.
       Response Format
       
       {
        "twitter": [
        {
         "userId": ..
         "id": ..
         "title": ..
         "body": ..
        }
        ],

         "instagram": [
        {
          "albumId": ..
          "id": ..
          "title": ..
          "url": ..
          "thumbnailUrl": ..
        }
        ]
       }
   ### - GET /api/platform/:platform
   1. **Clone the repository:**
      For twitter: /api/platform/twitter
      ```bash
        [
         {
         "userId": ..
         "id": ..
         "title": ..
         "body": ..
        }
       ]
      
3.  **Install dependencies**
       For instagram: /api/platform/instagram
      ```bash
        [
         {
          "albumId": ..
          "id": ..
          "title": ..
          "url": ..
          "thumbnailUrl": ..
        }
       ]
