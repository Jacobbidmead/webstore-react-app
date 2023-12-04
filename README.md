
 E-commerce Application

Introduction
- Brief Description: A front end e-commerce application where users can browse products and add them to a basket and view the total price.  The app supports product search by category or brand.
- Technologies Used: Next.js, TypeScript, MUI library, Framer Motion.

 Setup
1. Prerequisites: Node.js installed, basic knowledge of Next.js and TypeScript.
2. Installation:
   - Clone the repository: `git clone https://github.com/Jacobbidmead/webstore-react-app.git`
   - Navigate to the project directory: `cd webstore-app`
   - Install dependencies: `npm install` or `yarn install`
   - Start the development server: `npm run dev` or `yarn dev`

#### Project Structure
- Components: 
  - `Basket`: Displays all items added to the basket and total price, enables users to remove items.
  - `Drawer`: Displays the links to the products and categories.
  - `MainPage`: The main landing page.
  - `HomeSwiper`: Image swiper component on the main page
- Pages:
  - `index.tsx`: The main page showcasing all products, contains the Drawer component which contains the landing page (note: this is an error in the structure of the app, please see improvements below).
  - `products/[category].tsx`: Displays products filtered by category.
  - All the brands have seperate pages, this is something that needs to be refactored, into a single dynamic route.
- Context:
  - `useContext`: Ive used the useContext hook to store all the logic that is used through-out this project.
- Data:
  - There is currently no back end for this project; all of the product data is saved in .json files in the data folder.
- Styles:
  - `styles`: Directory containing CSS files.

Core Functionalities
1. **Product Browsing**:
   - Products are displayed on the main page.
   - Each product can be clicked for detailed information.
   - The draw contains links to all brands and categories.
2. Basket Management:
   - Users can add or remove items from the basket.
   - The total price of items in the basket is dynamically calculated.
   - Basket contents are saved to local storage for persistence across page reloads.
3. Search Functionality:
   - Users can search products by category or brand.
   - Search results are displayed on their respective pages.

 Code Snippets
 
- Basket Logic: 
<img width="697" alt="Screenshot 2023-12-04 at 14 42 56" src="https://github.com/Jacobbidmead/webstore-react-app/assets/107250881/922fd81a-25f7-4b4f-9cde-12d6ba639d76"/>

<img width="612" alt="Screenshot 2023-12-04 at 14 43 07" src="https://github.com/Jacobbidmead/webstore-react-app/assets/107250881/80e571cb-e780-4f38-9ed1-81ba67bfe907">




- Category Search Functionality: I used Next.js dynamic routing to display items by category.

<img width="660" alt="Screenshot 2023-12-04 at 14 45 21" src="https://github.com/Jacobbidmead/webstore-react-app/assets/107250881/b80c72e4-5f61-469f-b490-d3eb43cd2c1b">



- Local Storage Integration:

 <img width="761" alt="Screenshot 2023-12-04 at 14 47 33" src="https://github.com/Jacobbidmead/webstore-react-app/assets/107250881/05c08a04-92bb-4786-9ca1-7b1b438c60ae">



 Deployment
- Deployed using Vercel.

Improvements and future plans
- I made this app to practice data manipulation, and learned alot in the process. I used TypeScript and Next.js for the first time, aswell as MUI library.
- However, if i were to start again I would make some changes to the project structure, e.g putting the drawer component inside the index.tsx folder instead of using it as the parent component. This would become an issue if this project were too scale.
- I also would like to restructure the brands into one single page using Next dynamic routes in the same way I have done with the categories. This is something I may do in the future.
- I could also add individual pages fore each product with more detail and images - if this were a real web store I would spend more time making these pages.

  




