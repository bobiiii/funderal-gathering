
import { Suspense } from 'react';
import RemoveRelativeComp from './RemoveRelativeComp';
import { getMemorialData } from '@/lib/apiCall';

export default async function page({ params }) {
  const { accessCode } = await  params;
    const memorialData = await getMemorialData(accessCode);
  return (
    <Suspense>
<RemoveRelativeComp memorialData={memorialData?.data?.relatives} accessCode={accessCode}/>
</Suspense>
  );
}