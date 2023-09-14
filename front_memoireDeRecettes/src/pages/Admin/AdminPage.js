import React, { useContext, useEffect } from "react";
import { AuthContext } from "../../context";
import { RecipeContext } from "../../context/RecipeContext";
import MenuMyAccountAdmin from "../../components/MenuMyAccount/MenuMyAccountAdmin";

export default function AdminPage() {
  const { user } = useContext(AuthContext);
  const { analytics } = useContext(RecipeContext);
  console.log(analytics);

  return (
    <>
      {user && user[0].USER_ROLE === "ADMIN" && (
          <div className="d-flex justify-content-start ">
            <MenuMyAccountAdmin />
            <h1>Hello Analytics Reporting API V4</h1>
          </div>
      )}
    </>
  );
}