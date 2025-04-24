import { Suspense } from 'react';
import TreeComp from './TreeComp';
import { Loader } from 'lucide-react';
import { getMemorialData } from '@/lib/apiCall';

export default async function page({ params }) {
  const { accessCode } = await params;
  const response = await getMemorialData(accessCode)
  const  data  = response
  console.log("data  " , data );
  
  return (
    <Suspense fallback={<div className="flex flex-col items-center justify-center min-h-screen bg-gray-50"><Loader className="w-12 h-12 animate-spin text-blue-500" /></div>}>
    <TreeComp data={data}   accessCode={accessCode}/>
    

    </Suspense>
  );
}