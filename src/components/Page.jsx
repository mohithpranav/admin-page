import image from "../assets/product1.png";
import productData from "../data/products.json"; // Importing product data from the JSON file

function Page() {
  const product = productData[0]; // Assuming the product is the first object in the array

  return (
    <div className="w-full h-auto bg-neutral-100 p-6 ">
      <div className="max-w-7xl mx-auto">
        {" "}
        {/* Increased max-width to 7xl */}
        <div className="flex flex-col md:flex-row justify-between items-start space-y-6 md:space-y-0">
          {/* Left Section: Product Image */}
          <div className="w-full md:w-1/3">
            <img
              src={image}
              alt={product.name}
              className="w-full h-auto object-contain border border-gray-300 rounded-lg shadow-lg"
            />
          </div>

          {/* Right Section: Product Details */}
          <div className="w-full md:w-2/3 md:pl-8 space-y-6">
            {/* Product Title */}
            <h1 className="text-3xl md:text-4xl font-semibold text-gray-900 leading-tight">
              {product.name}
            </h1>

            {/* Brand */}
            <h2 className="text-xl md:text-2xl text-gray-700">
              Brand: <span className="font-semibold">{product.brand}</span>
            </h2>

            {/* Product Description */}
            <p className="text-lg md:text-xl text-gray-600 leading-relaxed">
              {product.description}
            </p>

            {/* Product Price */}
            <p className="text-2xl font-semibold text-gray-900">
              ₹{product.price}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Page;
