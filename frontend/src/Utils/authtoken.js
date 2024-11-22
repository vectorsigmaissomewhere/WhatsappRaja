const token = localStorage.getItem("authToken");

if (token) {
  const decoded = decodeToken(token);
  const userId = decoded?.user_id;

  console.log("User ID:", userId);
} else {
  console.log("No token found in localStorage");
}

export function decodeToken(token){
    try {
        const payload = token.split(".")[1];
        const decodedPayload = atob(payload);
        return JSON.parse(decodedPayload);
      } catch (error) {
        console.error("Invalid token", error);
        return null;
      }
}