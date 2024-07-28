const PopularCategories = () => {
  const menu = [
    {
      name: "Main Dish",
      image: "maindish.png",
      dishes: 86,
    },
    {
      name: "Break Fast",
      image: "breakfast.png",
      dishes: 12,
    },
    {
      name: "Dessert",
      image: "dessert.png",
      dishes: 48,
    },
    {
      name: "Browse All",
      image: "browse.png",
      dishes: 255,
    },
  ];
  return (
    <div>
      <div className="text-red-400 text-sm text-center">
        {" "}
        CUSTOMER FAVORITES
      </div>
      <div className="text-3xl font-bold text-center m-4">
        Popular Categories
      </div>
      <div className="flex justify-center items-center gap-4 m-[50px]">
        {menu.map((item) => (
          <div
            id="card"
            className="text-center shadow-lg border-2 rounded-xl w-[150px] h-[150px] flex justify-center items-center"
          >
            <div>
              <div className="bg-green-300 rounded-[100%] w-[70px] h-[70px] flex justify-center items-center">
                <img src={item.image} className="w-[70px] p-3" />
              </div>
              <h1>{item.name}</h1>
              <h2 className="text-xs">{`(${item.dishes} dishes)`}</h2>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PopularCategories;
