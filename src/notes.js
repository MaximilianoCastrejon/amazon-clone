// class App extends React.Component {
//   myData = [
//     { key: 1, name: "Hello" },
//     { key: 2, name: "World" },
//     { key: 3, name: "etc" },
//   ];
//   render() {
//     // the loop. it'll return array of react node.
//     const children = this.myData.map((val) => (
//       <button id={val.key}>{val.name}</button>
//     ));
//     // the div with children inside
//     return <div className="contexCon">{children}</div>;
//   }
// }
// // render your app
// const rootElement = document.getElementById("root");
// ReactDOM.render(<App />, rootElement);

//  HOME RENDER

// const wrapper = useRef(".wrapper");
// const fragment = new DocumentFragment();

// wrapper.appendChild(fragment);
// class Rendering extends React.Component {
//   myData = [
//     { key: 1, name: "Hello" },
//     { key: 2, name: "World" },
//     { key: 3, name: "etc" },
//   ];
//   render() {
//     // the loop. it'll return array of react node.
//     const children =
//       this.myData.map && ((val) => <button id={val.key}>{val.name}</button>);
//     // the div with children inside
//     return <div className="contexCon">{children}</div>;
//   }
// }
// // render your app
// const rootElement = document.getElementById("wrapper1");
// console.log(rootElement);
// ReactDOM.render(<Rendering />, rootElement);

// HOME HARD-CODED DATA

{
  /* <div className="wrapper">
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
        </div> */
}
