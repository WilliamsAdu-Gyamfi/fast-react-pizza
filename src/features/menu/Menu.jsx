import { useLoaderData } from "react-router-dom";

import MenuItem from "./MenuItem";
import { getMenu } from "../../services/apiRestaurant";

function Menu() {
  //We provide the data to the page(step 3)
  const menu = useLoaderData();
  console.log(menu);
  return (
    <div>
      <h1>Menu</h1>
      <ul>
        {menu.map((pizza) => (
          <MenuItem pizza={pizza} key={pizza.id} />
        ))}
      </ul>
    </div>
  );
}

//CREATING THE LOADER(step 1)
export async function loader() {
  // console.log("LOADER IS RUNNING");
  const menu = await getMenu();
  console.log("MENU FROM API:", menu);
  return menu;
}

export default Menu;
