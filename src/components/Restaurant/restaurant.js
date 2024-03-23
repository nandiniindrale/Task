import {React,useState }from 'react'
import "./restaurant.css";

const restaurantData = [
  {
    id: 1,
    name: "Spice Haven",
    cuisine: "Indian",
    diet: "Vegetarian",
    protein: "Chickpeas",
    image: "https://i.pinimg.com/236x/8f/4c/39/8f4c398543f539817f7a0ff21a3bfd1f.jpg",
    foodName: "Chana Masala"
  },
  {
    id: 2,
    name: "Mediterranean Delight",
    cuisine: "Mediterranean",
    diet: "Vegan",
    protein: "Tofu",
    image: "https://i.pinimg.com/236x/f3/ef/13/f3ef1305a8b7bd8d25afa978a3b8f62c.jpg",
    foodName: "Falafel Wrap"
  },
  {
    id: 3,
    name: "Tandoori Flames",
    cuisine: "Indian",
    diet: "Non-Vegetarian",
    protein: "Chicken",
    image: "https://i.pinimg.com/236x/52/1a/01/521a01d28f8bc09a8042ee20a0f6451c.jpg",
    foodName: "Tandoori Chicken"
  },
  {
    id: 4,
    name: "Olive & Spice",
    cuisine: "Mediterranean",
    diet: "Vegetarian",
    protein: "Eggplant",
    image: "https://i.pinimg.com/236x/a3/87/76/a387760532127d8215c2f5c1c16a231d.jpg",
    foodName: "Moussaka"
  },
  {
    id: 5,
    name: "Curry Corner",
    cuisine: "Indian",
    diet: "Vegetarian",
    protein: "Paneer",
    image: "https://i.pinimg.com/236x/c1/e5/8d/c1e58dc5b850ed2a576a325de6339719.jpg",
    foodName: "Palak Paneer"
  },
  {
    id: 6,
    name: "Green Cuisine",
    cuisine: "Mediterranean",
    diet: "Vegan",
    protein: "Lentils",
    image: "https://i.pinimg.com/236x/ce/cf/4a/cecf4aa02e5e4006e1fe400bd5488111.jpg",
    foodName: "Lentil Soup"
  },
  {
    id: 7,
    name: "Taste of India",
    cuisine: "Indian",
    diet: "Non-Vegetarian",
    protein: "Lamb",
    image: "https://i.pinimg.com/236x/9b/85/2a/9b852aae12b06182060ea47066412a60.jpg",
    foodName: "Rogan Josh"
  },
  {
    id: 8,
    name: "Sunny Mediterranean",
    cuisine: "Mediterranean",
    diet: "Vegetarian",
    protein: "Chickpeas",
    image: "https://i.pinimg.com/236x/c5/fa/18/c5fa18370411e8ebed9d379100535e1c.jpg",
    foodName: "Hummus Plate"
  },
  {
    id: 9,
    name: "Pepper Pot",
    cuisine: "Indian",
    diet: "Vegetarian",
    protein: "Potatoes",
    image: "https://i.pinimg.com/236x/3f/8a/e0/3f8ae022c5f0da71bc41ad181708eaad.jpg",
    foodName: "Aloo Gobi"
  },
  {
    id: 10,
    name: "Baklava Bistro",
    cuisine: "Mediterranean",
    diet: "Non-Vegetarian",
    protein: "Lamb",
    image: "https://i.pinimg.com/236x/bf/7d/f4/bf7df4b0b504486f986c65ca48d259c3.jpg",
    foodName: "Lamb Kebabs"
  },
   
  {
    id: 11,
    name: "Italian Delight",
    cuisine: "Italian",
    diet: "Vegetarian",
    protein: "Tomatoes",
    image: "https://i.pinimg.com/236x/89/2b/7a/892b7a4960aa0f13e4bf3a73d3a792e8.jpg",
    foodName: "Margherita Pizza"
  },
  {
    id: 12,
    name: "Sushi Palace",
    cuisine: "Japanese",
    diet: "Non-Vegetarian",
    protein: "Fish",
    image: "https://i.pinimg.com/236x/9f/dc/91/9fdc916f5156ae213f83676cc2f72eca.jpg",
    foodName: "Sashimi Platter"
  }
  
  
];


const Restaurant = () => {
  const [showAll, setShowAll] = useState(false);

  return (
    <div className='maxwidth'>
      <div className='collection-title'>Satisfy Your Cravings</div>
      <div className='collection-subtitle'>Restaurants that suit your palate</div>
      
      {!showAll && (
        <div className="view-all-button" onClick={() => setShowAll(true)}>View All</div>
      )}
    
      <div className='restaurant-container'>
      {restaurantData.slice(0, showAll ? restaurantData.length : 4).map((item) => (
        <div key={item.id} className="restaurant-item">
          <img src={item.image} alt="" />
          <div className="restaurant-details">
            <div>{item.name}</div>
            <div>Cuisine: {item.cuisine}</div>
            <div>Diet: {item.diet}</div>
            <div>Protein: {item.protein}</div>
            <div>Featured Dish: {item.foodName}</div>
          </div>
        </div>
        
      ))}
      </div>
     
    </div>
  );
}

export default Restaurant;