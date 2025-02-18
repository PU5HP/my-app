import Image from "next/image";
import axios from "axios";
//async component are the server side rendering  
async function getUserDetails() {
  const response = await axios.get("https://week-13-offline.kirattechnologies.workers.dev/api/v1/user/details")
	return response.data;
}

//async component 
export default async function Home() {
  const userData = await getUserDetails();

  return (
    <div className="flex flex-col justify-center h-screen">
        <div className="flex justify-center">
            <div className="border p-8 rounded">
                <div>
                    Name: {userData?.name}
                </div>
                <div></div>
                {userData?.email}
            </div>
        </div>
    </div>
  );
}
