import React from "react";
import { useRef } from "react";
import "./Home.css";
import Product from "./Product";

function Home() {
  var data = require("./static/MOCK_DATA.json");
  console.log(data);

  const wrapper = useRef(".wrapper");
  const fragment = new createDocumentFragment();

  data.map((data) => {
    var div = document.createElement("div");
    var product = (
      <Product
        title={data.title}
        price={data.price}
        image="https://i.pinimg.com/originals/50/8e/a8/508ea8f7efebdb885119039f8e249a3e.png"
        rating={data.rating}
      />
    );
    div.appendChild(product);

    fragment.appendChild();
  });

  wrapper.appendChild(fragment);

  return (
    <div className="home">
      <div className="home__container">
        <img
          className="home__background-img"
          src="https://assets.aboutamazon.com/dims4/default/ce44922/2147483647/strip/true/crop/1600x900+0+350/resize/1200x675!/quality/90/?url=https%3A%2F%2Famazon-blogs-brightspot.s3.amazonaws.com%2F7a%2F3d%2Ff26e5a8b44e7affcdfd5a245a95b%2Fsquid-orange-logo.jpg"
        />
        <div class="wrapper">
          <div>
            <Product
              title="Product 1"
              price={29.99}
              image="https://i.pinimg.com/originals/50/8e/a8/508ea8f7efebdb885119039f8e249a3e.png"
              rating={3}
            />
          </div>
          <div>
            <Product
              title="Product 1"
              price={29.99}
              image="https://i.pinimg.com/originals/50/8e/a8/508ea8f7efebdb885119039f8e249a3e.png"
              rating={3}
            />
          </div>
          <div>
            <Product
              title="Product 1"
              price={29.99}
              image="https://i.pinimg.com/originals/50/8e/a8/508ea8f7efebdb885119039f8e249a3e.png"
              rating={3}
            />
          </div>
          <div>
            <Product
              title="Product 1"
              price={29.99}
              image="https://i.pinimg.com/originals/50/8e/a8/508ea8f7efebdb885119039f8e249a3e.png"
              rating={3}
            />
          </div>
          <div>
            <Product
              title="Product 1"
              price={29.99}
              image="https://i.pinimg.com/originals/50/8e/a8/508ea8f7efebdb885119039f8e249a3e.png"
              rating={3}
            />
          </div>
          <div>
            <Product
              title="Product 1"
              price={29.99}
              image="https://i.pinimg.com/originals/50/8e/a8/508ea8f7efebdb885119039f8e249a3e.png"
              rating={3}
            />
          </div>
          <div>
            <Product
              title="Product 1"
              price={29.99}
              image="https://i.pinimg.com/originals/50/8e/a8/508ea8f7efebdb885119039f8e249a3e.png"
              rating={3}
            />
          </div>
          <div>
            <Product
              title="Product 1"
              price={29.99}
              image="https://i.pinimg.com/originals/50/8e/a8/508ea8f7efebdb885119039f8e249a3e.png"
              rating={3}
            />
          </div>
          <div>
            <Product
              title="Product 1"
              price={29.99}
              image="https://i.pinimg.com/originals/50/8e/a8/508ea8f7efebdb885119039f8e249a3e.png"
              rating={3}
            />
          </div>
          <div>
            <Product
              title="Product 1"
              price={29.99}
              image="https://i.pinimg.com/originals/50/8e/a8/508ea8f7efebdb885119039f8e249a3e.png"
              rating={3}
            />
          </div>
          <div>
            <Product
              title="Product 1"
              price={29.99}
              image="https://i.pinimg.com/originals/50/8e/a8/508ea8f7efebdb885119039f8e249a3e.png"
              rating={3}
            />
          </div>
          <div>
            <Product
              title="Product 12"
              price={29.99}
              image="https://i.pinimg.com/originals/50/8e/a8/508ea8f7efebdb885119039f8e249a3e.png"
              rating={3}
            />
          </div>
          <div>
            <Product
              title="Product 13"
              price={29.99}
              image="https://i.pinimg.com/originals/50/8e/a8/508ea8f7efebdb885119039f8e249a3e.png"
              rating={3}
            />
          </div>
          <div>
            <Product
              title="Product 1"
              price={29.99}
              image="https://i.pinimg.com/originals/50/8e/a8/508ea8f7efebdb885119039f8e249a3e.png"
              rating={3}
            />
          </div>
          <div>
            <Product
              title="Product 1"
              price={29.99}
              image="https://i.pinimg.com/originals/50/8e/a8/508ea8f7efebdb885119039f8e249a3e.png"
              rating={3}
            />
          </div>
          <div>
            <Product
              title="Product 1"
              price={29.99}
              image="https://i.pinimg.com/originals/50/8e/a8/508ea8f7efebdb885119039f8e249a3e.png"
              rating={3}
            />
          </div>
          <div>
            <Product
              title="Product 1"
              price={29.99}
              image="https://i.pinimg.com/originals/50/8e/a8/508ea8f7efebdb885119039f8e249a3e.png"
              rating={3}
            />
          </div>
          <div>
            <Product
              title="Product 1"
              price={29.99}
              image="https://i.pinimg.com/originals/50/8e/a8/508ea8f7efebdb885119039f8e249a3e.png"
              rating={3}
            />
          </div>
          <div>
            <Product
              title="Product 1"
              price={29.99}
              image="https://i.pinimg.com/originals/50/8e/a8/508ea8f7efebdb885119039f8e249a3e.png"
              rating={3}
            />
          </div>
          <div>
            <Product
              title="Product 1"
              price={29.99}
              image="https://i.pinimg.com/originals/50/8e/a8/508ea8f7efebdb885119039f8e249a3e.png"
              rating={3}
            />
          </div>
          <div>
            <Product
              title="Product 1"
              price={29.99}
              image="https://i.pinimg.com/originals/50/8e/a8/508ea8f7efebdb885119039f8e249a3e.png"
              rating={3}
            />
          </div>
          <div>
            <Product
              title="Product 1"
              price={29.99}
              image="https://i.pinimg.com/originals/50/8e/a8/508ea8f7efebdb885119039f8e249a3e.png"
              rating={3}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
