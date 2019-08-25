 # unit3proj
General Assembly Software Engineering Immersive 19
Unit 3 Project - Ruby on Rails

Built by - [Kenny Ang](https://github.com/kach92), [Mah CK](https://github.com/marcykay), [Ang Yi Xin](https://github.com/artylope)

## Furniture E-commerce Web App - Oak & Brass
Oak & Brass is a Furniture E-Commerce Web App built using Ruby on Rails (v 2.6.3). To set up, download the project and do a bundle install. It is not a real shop. It is a technical demo.

## Technologies used
- Ruby on Rails, Javascript, jQuery, SASS, PostgreSQL
- Stripe Api

## Approach Taken
Since it is a 3-person team project, we split the work equally - 1 handles the frontend, 1 handles the backend, and another handles the special functions of the project. One person has to handle the special function as he will need to find out and learn technologies that is unfamilar to us. Before we start the project we setup our ground rules clearly so that we can avoid issues when we integrate and merge our codes together. We also created a staging branch where any new branches and merging are created from it, so that we do not touch the master branch which is stable and issue free. Communication is key throughout the project.

## Installation Instructions
1. Installs all the ruby gems of the project is using
```
bundle install
````
2. Create the Postgres db for running on local
```
rails db:create
````
3. Creates the tables neccessary to run this project
```
rails db:migrate
````
4. Seed dummy data
```
rails db:seed
````

## Functions of App
- General functions such as browsing furnitures, browse furnitures by category and sort by price/names, add furnitures to cart, checking out and do payment
- Each furniture has different combinations of options to be chosen and images to browse through for the different combinations.
- Stripe is used for payment system for a secure and smooth transaction for credit card payment system
- Ar functionality that allows user to use their phone camera to place imaginary furniture in their home to estimate size and space of furniture
- Floor plan functionality, where user can upload their house floor plan, and drag & drop furnitures added into wishlist to be placed and estimate space taken by furnitures in their house.


### Disclaimer
We did not create the photos and product content, they are borrowed various sites such as:
- Made.com
- Ikea.com


### Other Credits
[Box Icons](https://boxicons.com/usage/) for the icons used in the Project.
[Bulma](https://bulma.io) for the CSS framework for the base styling
