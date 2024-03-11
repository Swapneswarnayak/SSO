import axios from "axios";

let tokenStr: any;
if (typeof window !== "undefined") {
  tokenStr = JSON.parse(localStorage.getItem("token") || "");
}

export const signin = async (credentials: any) => {
  let response = await axios.post(
    "http://192.168.0.182:3000/api/v1/user/login",
    credentials
  );
  return response;
};

export const getModuleandRoles = async () => {
  let module = await axios.get(
    "http://192.168.0.182:3000/api/v1/user/module-list",
    {
      headers: { Authorization: `Bearer ${tokenStr.token}` },
    }
  );
  console.log(module, "mod");
  return module;
};

export const handleRoleClick = async (first: any) => {
  const response =await axios.post("http://172.16.15.49:8501/api/user/login", {
    email: "anishacipl27@gmail.com",
  });

  return response;
  console.log(response, "returned_Data");
//   push(`http://localhost:3001/home?token=${tokenStr}&role=${first}`);
};

export { tokenStr };
