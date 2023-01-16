import Image from "next/image";
import img from "../public/img/unsplash.jpg";
function about() {
  return (
    <div>
      <div className="h-screen overflow-hidden flex items-center justify-center">
        <div className="py-16 bg-white">
          <div className="container m-auto px-6 text-gray-600 md:px-12 xl:px-6">
            <div className="space-y-6 md:space-y-0 md:flex md:gap-6 lg:items-center lg:gap-12">
              <div className="md:5/12 relative lg:w-5/12">
                <Image
                  src={img}
                  alt="image"
                  loading="lazy"
                  layout="fill"
                  objectFit="contain"
                />
              </div>
              <div className="md:7/12 lg:w-6/12">
              <h1 className="text-3xl font-bold text-gray-800 mb-4">About Us</h1>
                <p className="text-gray-800 mb-4">
        We are a small pizzeria and burger joint based in Nagoda, Galle. We only deliver within the Galle district. Our owner, Ishara Dulanjaya, has been in the food industry for over 10 years and is committed to providing high-quality, delicious food to our customers.
      </p>
      <p className="text-gray-800 mb-4">
        We use only the freshest ingredients and make everything from scratch. Whether you&apos;re in the mood for a classic margherita pizza or a juicy burger, we&apos; ve got you covered. We hope you&apos;ll give us a try and become one of our loyal customers!
      </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default about;
