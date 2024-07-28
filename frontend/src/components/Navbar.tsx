import {
  BiArrowToBottom,
  BiPhoneCall,
  BiSearch,
  BiShoppingBag,
} from "react-icons/bi";

const Navbar = () => {
  const menu = [
    { name: "Home", arrow: false },
    { name: "Menu", arrow: true },
    { name: "Services", arrow: true },
    { name: "Offers", arrow: false },
  ];
  return (
    <div>
      <div className="flex justify-between ">
        <div className="flex gap-[200px]">
          <div className="flex justify-center items-center">
            <img src="Group 164.png" />
          </div>
          <div
            id="menu list"
            className="flex gap-7 font-poppins justify-center items-center"
          >
            {menu.map((list) => (
              <div>
                <ul>
                  <div className="flex">
                    <li>{list.name}</li>
                    <li>{list.arrow ? <BiArrowToBottom /> : <></>}</li>
                  </div>
                </ul>
              </div>
            ))}
          </div>
        </div>
        <div className="flex justify-end items-center gap-8 ">
          <div className="flex gap-7">
            <BiSearch style={{ fontSize: "1.4rem" }} />
            <div className="relative inline-block">
              <BiShoppingBag className="text-2xl" />
              <div className="absolute bg-primary top-0 right-0 text-white text-[10px] font-bold rounded-full w-3 h-3  flex items-center justify-center">
                8
              </div>
            </div>
          </div>
          <div className="flex justify-center items-center gap-2 bg-primary p-2 px-4 rounded-2xl text-white">
            <BiPhoneCall style={{ fontSize: "1.4rem" }} />
            <div>Contact</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
