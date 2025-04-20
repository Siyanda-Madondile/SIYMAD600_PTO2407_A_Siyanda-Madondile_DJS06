// A list of products with prices:
const products = [
    { product: "banana", price: "2" },
    { product: "mango", price: 6 },
    { product: "potato", price: " " },
    { product: "avocado", price: "8" },
    { product: "coffee", price: 10 },
    { product: "tea", price: "" },
  ];
  
  const shoppingItems = products;
  
  //   Advanced Exercises
  
  // Log Products
  shoppingItems.forEach((product) => console.log(product.product));
  
  // Filter by Name Length(longer than 5 characters)
  let filteredProducts = shoppingItems
    .filter((product) => product.product.length > 5)
    .map((product) => product.product);
  // console.log(filteredProducts);
  
  // Price Manipulation
  let validProducts = shoppingItems
    .filter((product) => product.price && !isNaN(product.price))
    .reduce((acc, product) => acc + Number(product.price), 0);
  // console.log(validProducts);
  
  // Concatenate Product Names
  let allProductNames = products.reduce(
    (acc, product) => acc + product.product + " ",
    ""
  );
  // console.log(allProductNames);
  
  // Find Extremes in Prices
  let minPrice = shoppingItems.filter(
    (product) => product.price && !isNaN(product.price)
  );
  let newMinPrice = minPrice.reduce((acc, currentVal) =>
    acc < currentVal ? currentVal : acc
  );
  // console.log(newMinPrice);
  
  let maxPrice = shoppingItems.filter(
    (product) => product.price && !isNaN(product.price)
  );
  let newMaxPrice = maxPrice.reduce((acc, currentVal) =>
    acc > currentVal ? acc : currentVal
  );
  // console.log(newMaxPrice);
  // console.log(`Lowest: ${newMinPrice.price}, Highest: ${newMaxPrice.price}`);
  
  // Object Transformation
  let transformedObject = Object.entries(products).reduce(
    (acc, [index, product]) => {
      acc[index] = { name: product.product, cost: product.price };
      return acc;
    }
  );
  // console.log(transformedObject);