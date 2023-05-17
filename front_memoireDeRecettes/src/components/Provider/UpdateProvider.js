import { UpdateContext } from "../../context/UpdateContext";
import { resetPassword } from "../../apis/update";

export default function UpdateProvider({ children }) {

  async function forgotpassword(email) {
	console.log(email);
    const responseFromBackEnd = await resetPassword(email);
	console.log(responseFromBackEnd);
    return responseFromBackEnd;
  }

  return (
    <UpdateContext.Provider value={{ forgotpassword }}>
      {children}
    </UpdateContext.Provider>
  );
}
