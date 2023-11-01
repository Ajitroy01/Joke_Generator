# Joke Generator

Joke Generator is a web application that generates jokes based on the topic provided by the user. It integrates with OpenAI to create fun and entertaining jokes for a variety of topics. This repository contains the code for both the Spring Boot backend and the React-based frontend.

## Table of Contents

- [Demo](#demo)
- [Features](#features)
- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
- [Usage](#usage)
## Demo

You can check out a live demo of the Joke Generator at [your-demo-link-here](#).

## Features

- Generate jokes on a wide range of topics.
- User-friendly web interface.
- Integrates with OpenAI for joke generation.

## Getting Started

### Prerequisites

Before you get started, make sure you have the following tools and technologies installed:

- Java Development Kit (JDK)
- Node.js and npm
- Spring Boot
- React

### Installation

1. Clone the repository:

   ```sh
   git clone https://github.com/yourusername/your-repo-name.git
   cd your-repo-name

2. Install the backend dependencies and run the Spring Boot application:

    ```sh
    cd backend
    ./mvnw spring-boot:run
3. Install the frontend dependencies and start the React development server:

   ```sh
   cd frontend
   npm install
   npm start
Your Joke Generator application should now be up and running.

### Usage

1. Open your web browser and navigate to the URL where the React development server is running (usually http://localhost:3000).
2. Enter a topic for which you want to generate a joke in the provided input field.
3. Click the "Generate Joke" button, and the application will call the OpenAI API to fetch and display a joke related to the specified topic.


