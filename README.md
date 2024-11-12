# Phase 2 REACT-HOOKS-CC-PLANTSHOP

# Date: 2024/11/04
# BETH WACEKE KIMANI
# Instructions/describtion

Welcome to Plantsy! You've been tasked with building out some features for the admin side of a plant store. The designers have put together the components and CSS. Now it's up to you to bring the features to life by adding stateful logic as well as persisting data to the backend via our API.

Your job will be to make our app work according to the user stories you will find the Core Deliverables section.

# Setup
Run npm install in your terminal. Run npm run server. This will run your backend on port 6001. In a new terminal, run npm start. Make sure to open http://localhost:6001/plants in the browser to verify that your backend is working before you proceed!


# Endpoints
The base URL for your backend is: http://localhost:6001

# Core Deliverables
As a user:

When the app starts, I can see all plants. I can add a new plant to the page by submitting the form. I can mark a plant as "sold out". I can search for plants by their name and see a filtered list of plants. Advanced Deliverables These deliverables are not required to pass the code challenge, but if you have the extra time, or even after the code challenge, they are a great way to stretch your skills.

You'll have to add additional elements for these features. Feel free to style them however you see fit!

Note: If you are going to attempt these advanced deliverables, please be sure to have a working commit with all the Core Deliverables first!

# As a user:

I can update the price of a plant and still see the updated price after refreshing the page. I can delete a plant and it is still gone when I refresh the page. Endpoints for Advanced Deliverables PATCH /plants/:id Required Headers:

{ "Content-Type": "application/json" } Request Object:

{ "price": number } Example Response:

{ "id": 1, "name": "Aloe", "image": "./images/aloe.jpg", "price": 16.99 } DELETE /plants/:id Example Response:

{} TECHNOLOGIES USED react js css

Support and Contact Details
https://github.com/bethkimani

