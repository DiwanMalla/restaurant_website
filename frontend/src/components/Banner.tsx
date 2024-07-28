import { BiPlayCircle, BiStar } from "react-icons/bi";
import { BsStarFill } from "react-icons/bs";

const Banner = () => {
  const menu = [
    {
      image: "noodle.png",
      name: "Spicy noodles",
      price: 18,
      rating: 3,
    },
    {
      image: "Vegetable salad.png",
      name: "Vegeteraian salad",
      price: 23,
      rating: 4,
    },
  ];

  const ratingStar = (rating: number) => {
    const totalStar = 5;
    const filledStars = Array(rating).fill(
      <BsStarFill className="text-yellow-300" />
    );
    const unfilledStars = Array(totalStar - rating).fill(<BiStar />);
    return [filledStars, unfilledStars];
  };
  return (
    <div>
      <div id="container" className="flex justify-between">
        <div className="flex justify-center items-center">
          <div id="text" className="">
            <h1 className="text-5xl font-bold">
              Dive into Delights <br /> Of Delectable{" "}
              <span className="text-primary">Food</span>
            </h1>
            <h1 className="text-sm mt-7">
              Where Each Plate Weaves a Story of Culinary <br /> Mastery and
              Passionate Craftsmanshiup
            </h1>
            <div className="mt-8 flex  items-center gap-[7%]">
              <button className="bg-primary p-1.5 pl-5 pr-5 text-white rounded-3xl">
                Order Now
              </button>
              <button className="">Watch video</button>

              <BiPlayCircle className="text-3xl" />
            </div>
          </div>
        </div>
        <div id="banner" className="mt-[10px] pr-[10%]">
          <div id="image" className=" relative inline-block ">
            <h1 className="absolute shadow p-3 pr-5 top-[20%] border-2 border-gray-300 rounded-lg  bg-white">
              Hot spicy food{" "}
            </h1>
            <img src="banner.png" className="w-[98%] h-[430px] ml-[8%]" />
          </div>
          <div className="absolute top-[450px] flex gap-4 justify-center items-center">
            {menu.map((menu) => (
              <div
                id="container"
                className="shadow-lg flex gap-2 bg-white p-3 border-2 border-gray-300 rounded-2xl"
              >
                <div id="image">
                  <img src={menu.image} className="w-[70px]" />
                </div>
                <div>
                  <h1>{menu.name}</h1>
                  <div className="flex">{ratingStar(menu.rating)}</div>
                  <h1>
                    <span className="text-red-600">$</span>
                    {`${menu.price}.00`}
                  </h1>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
