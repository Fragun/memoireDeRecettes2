import { UpdateContext } from "../../context/UpdateContext";
import { resetPassword } from "../../apis/update";

export default function UpdateProvider({ children }) {
  async function forgotpassword(email) {
    const responseFromBackEnd = await resetPassword(email);
    return responseFromBackEnd;
  }

  return (
    <UpdateContext.Provider value={{ forgotpassword }}>
      {children}
    </UpdateContext.Provider>
  );
}
