import React, { useState } from 'react';
import './App.css';
import Header from './Page/Header';
import Section from './Page/Section';
import Card from './Page/Card';
import Contact from "./Page/Contact";
import Footer from './Page/Footer';

function App() {
  const [filter, setfilter] = useState("all");

  const properties = [
    {
      image: require('./images/Modern Home.jpg'),
      title: 'Modern Family Home',
      price: '$500,000',
    },
    {
      image: require('./images/Luxury apartment.jpg'),
      title: 'Luxury Apartment',
      price: '$750,000',
    },
    {
      image: require('./images/Luxury Villa.jpg'),
      title: 'Luxury Villa',
      price: '$600,000',
    },
  ];

  const filteredProperties =
  filter === "all"
  ? properties
  : properties.filter((property) =>
       property.title.toLowerCase().includes(filter)
);
  
  return (
    <div>
      <Header />
        <Section />
        <section className="property-section">
          <h1>Explore our Properties</h1>
          <div className="filter">
            <label>
              Filter:
              <select onChange={(e) => setfilter(e.target.value.toLowerCase())}>
                <option value="all">All</option>
                <option value="family">Family</option>
                <option value="apartment">Apartment</option>
                <option value ="villa">Villa</option>
              </select>
            </label>
            </div>
            <div className="property.grid">
          {filteredProperties.map((property, index) => (
            <Card
            key={index}
            image={property.image}
            title={property.title}
            price={property.price}
            />
          ))}
          </div>
        </section>
        <Contact />
        <Footer />
    </div>
  );
}


export default App;
