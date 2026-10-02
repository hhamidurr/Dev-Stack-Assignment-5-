# Project Name : Dev Stack

## Project Description

**Dev Stack** is a responsive technology stack builder website.  
Users can explore different development technologies, view their details, and add their favorite technologies to build a personal development stack.

## Technologies Used

- React.js
- TypeScript
- Tailwind CSS
- DaisyUI
- React Toastify
- React Icons
- Vite
- JSON

## Features

1. **Explore Technologies**  
   Users can explore different frontend, backend, database, language, styling, and DevOps technologies.

2. **Build Your Own Stack**  
   Users can add technologies to their personal stack and remove them whenever they want.

3. **Responsive & Interactive UI**  
   The website is responsive on mobile, tablet, and desktop and uses React Toastify for user notifications.

---

# 📚 React Questions & Answers

## 1. What is JSX, and why is it used in React?

JSX is a syntax that lets us write HTML-like code inside JavaScript or TypeScript.

It is used in React because it makes creating and understanding UI components easier.

---

## 2. What is the difference between props and state?

**Props** are used to pass data from a parent component to a child component.

**State** is used to store data inside a component that can change over time.

---

## 3. What does the `useState` hook do, and where did you use it in this project?

`useState` is a React Hook used to create and manage component state.

In this project, I used `useState` to store the selected technologies in the user's stack.

mainContent.tsx
const [addProduct, setAddProduct] = useState<ProductType[]>([]);
4. What does the useEffect hook do, and why did you need it to load the JSON data?

useEffect is used to perform side effects after a component renders.

It can be used to fetch data from a JSON file when the component loads.


5. Why does every item in a .map() list need a unique key prop?

React uses the key to identify each item in a list.

A unique key helps React efficiently update, add, or remove items.

Example:

products.map((product) => (
  <Card
    key={product.id}
    product={product}
  />
))
6. What is conditional rendering? Show one place you used it.

Conditional rendering means showing different UI based on a condition.

For example, in the stack section:

{addProduct.length === 0 ? (
  <p>No technologies selected yet.</p>
) : (
  addProduct.map((product) => (
    <Selected
      key={product.id}
      product={product}
    />
  ))
)}

If there are no selected technologies, the empty message is shown. Otherwise, the selected technologies are displayed.

7. How do you pass data from a parent component to a child component, and how does a child send something back to the parent?

A parent component passes data to a child using props.

The child can communicate with the parent by calling a function that the parent passes as a prop.

For example:

<Card
  product={product}
  addProduct={addProduct}
  setAddProduct={setAddProduct}
/>

Here, the parent sends product, addProduct, and setAddProduct to the Card component.

The child can call setAddProduct() to update the parent's state.

👨‍💻 Author

Hamidur Rohman

Built with using React and TypeScript.