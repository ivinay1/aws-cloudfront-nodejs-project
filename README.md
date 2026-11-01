# AWS CloudFront with Node.js, Docker & NGINX

A hands-on DevOps project exploring how to deploy and deliver a Node.js web application using **AWS EC2, Docker, NGINX, and Amazon CloudFront**.

The project focuses on containerization, reverse proxying, load balancing, CDN caching, and securing communication between CloudFront and the origin server.

## Project Overview

The application is built using Node.js and Express.js with EJS templates. It provides multiple web pages and a REST API endpoint that serves user data from a JSON file.

The application will be containerized using Docker, deployed on an AWS EC2 instance, and served through an NGINX reverse proxy. Amazon CloudFront will act as the CDN layer in front of the origin server.

## Tech Stack

- **Backend:** Node.js, Express.js
- **Templating Engine:** EJS
- **Frontend:** HTML, CSS
- **Data:** JSON
- **Containerization:** Docker
- **Web Server / Reverse Proxy:** NGINX
- **Cloud Platform:** AWS EC2, Amazon CloudFront

## Application Features

- Home, About, Contact, and Users pages.
- REST API endpoint to retrieve user data.
- JSON-based data handling.
- Server-side rendering using EJS.
- Pagination for the users page.
- Custom middleware for request-header validation.
- Custom 403 Access Denied and 404 Not Found pages.

## Application Routes

| Method | Endpoint | Description |
|---|---|---|
| GET | `/` | Home page |
| GET | `/about` | About page |
| GET | `/contact` | Contact page |
| GET | `/users` | Users page with pagination |
| GET | `/api/users` | Returns user data in JSON format |

## Architecture (Planned)

```text
             Client / Browser
                    |
                    v
             Amazon CloudFront
                    |
                    v
             AWS EC2 Instance
                    |
                    v
              NGINX Reverse Proxy
                    |
             -------------------
             |                 |
             v                 v
        Node.js App 1      Node.js App 2
             |                 |
             -------------------
                    |
                    v
              Express.js App
                    |
                    v
                JSON Data
```

## Project Implementation

### Completed
- Developed a Node.js and Express.js application.
- Implemented EJS-based web pages.
- Created REST API endpoint for user data.
- Implemented pagination.
- Added custom middleware for request-header validation.
- Created custom error pages for 403 and 404 responses.
- Tested the application locally.

### Upcoming
- Dockerize the Node.js application.
- Build and test the Docker image locally.
- Push the Docker image to Docker Hub.
- Deploy multiple application containers on AWS EC2.
- Configure NGINX as a reverse proxy and load balancer.
- Integrate Amazon CloudFront with the EC2 origin.
- Configure custom origin headers.
- Explore CloudFront caching, cache hit/miss behavior, TTL, and invalidation.
- Test HTTPS and origin access security.

## Learning Objectives

Through this project, I aim to gain practical experience with:

- Docker image creation and container management.
- Deploying containerized applications on AWS EC2.
- NGINX reverse proxy and load balancing.
- Understanding CDN architecture and content delivery.
- CloudFront caching policies and cache invalidation.
- Securing communication between CloudFront and the origin server.
- Troubleshooting application deployment and connectivity issues.

## Getting Started

### Prerequisites

- Node.js and npm
- Git
- Docker (for containerization phase)

### Run Locally

1. Clone the repository:

```bash
git clone <YOUR_GITHUB_REPOSITORY_URL>
```

2. Navigate to the project directory:

```bash
cd aws-cloudfront-nodejs-project
```

3. Install dependencies:

```bash
npm install
```

4. Create a `.env` file and configure:

```env
PORT=3000
```

5. Start the application:

```bash
node app.js
```

6. Open in your browser:

```text
http://localhost:3000
```

**Note:** Routes protected by custom header-validation middleware require the configured request header. For local testing, use the expected header in Postman or another HTTP client.

## Project Status

<escape>🚧</escape> **In Progress**

This project is being developed incrementally, with a focus on practical AWS and DevOps implementation.

---

**Built as a hands-on learning project to strengthen practical Cloud and DevOps engineering skills.**
