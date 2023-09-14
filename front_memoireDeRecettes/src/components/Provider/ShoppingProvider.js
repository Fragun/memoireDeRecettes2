import { deleteShopping, getShopping } from "../../apis/shopping";
import { useContext, useState } from "react";
import { ShoppingContext } from "../../context/ShoppingContext";

export default function ShoppingProvider({ children }) {
  const [shoppingData, setShoppingData] = useState(null);

  async function fetchShopping(userId) {
    const response = await getShopping(userId);
    setShoppingData(response);
    return response;
  }

  async function deletedShopping(shoppingId) {
    await deleteShopping(shoppingId);
  }

  const contextValue = {
    shoppingData,
    fetchShopping,
    deletedShopping,
  };

  return (
    <ShoppingContext.Provider value={contextValue}>
      {children}
    </ShoppingContext.Provider>
  );
}

export function useRecipeContext() {
  return useContext(ShoppingContext);
}
