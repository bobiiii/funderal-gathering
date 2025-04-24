
import { getMemorialData } from "@/lib/apiCall";
import { notFound } from "next/navigation";
import MemorialComp from "./MemorialComp";



export default async function page({ params }) {
  const { accessCode } = await params;
  const memorialData = await getMemorialData(accessCode);
  
  if (!memorialData || !memorialData.data) {
    return notFound();
  }
  
  const memorial = memorialData.data;

  return (
    <MemorialComp 
        accessCode={accessCode}
        memorial={memorial}

        />

  );
}