https://gleaming-cherry-quiet.glitch.me/


# Social Media Aggregation API

This project is a simple Node.js application that aggregates social media statistics from multiple platforms. It provides endpoints to fetch aggregated stats or detailed stats for specific platforms like Twitter and Instagram.

## Table of Contents

- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
  - [Running the Application](#running-the-application)
- [API Documentation](#api-documentation)
  - [Base URL](#base-url)
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
