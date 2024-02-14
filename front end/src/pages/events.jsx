import React from "react";
import Heading from "../components/Heading";
import Product from "../components/Product";
import formal from "../assets/images/formal.jpg";
import casualparty from "../assets/images/casualparty.jpg";
import pop from "../assets/images/pop.jpg";
import family from "../assets/images/family.jpg";

const Events = (props) => {
  const products = [
    {
      _id: "100001",
      img: family,
      productName: "Relatives",
      price: "44.00",
      color: "Black",
      badge: true,                          
      des: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic excepturi quibusdam odio deleniti reprehenderit facilis.",
    },
    {
      _id: "100002",
      img: formal,
      productName: "Formal",
      price: "250.00",
      color: "Black",
      badge: true,
      des: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic excepturi quibusdam odio deleniti reprehenderit facilis.",
    },
    {
        _id: "100001",
        img: casualparty,
        productName: "Casual",
        price: "44.00",
        color: "Black",
        badge: true,                          
        des: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic excepturi quibusdam odio deleniti reprehenderit facilis.",
      },
      {
        _id: "100002",
        img: pop,
        productName: "Pop-Up",
        price: "250.00",
        color: "Black",
        badge: true,
        des: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic excepturi quibusdam odio deleniti reprehenderit facilis.",
      }
  ];

  return (
    <div className="w-full pb-16">
      <Heading heading={props.name} />
      <div className="flex flex-wrap justify-between">
        {products.map((product) => (
          <div key={product._id} className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/4 p-2">
            <Product {...product} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Events;