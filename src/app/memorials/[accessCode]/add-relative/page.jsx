
import { Suspense } from 'react';
import AddRelativeComp from './AddRelativeComp';

export default async function page({ params }) {
  const { accessCode } = await  params;
  return (
    <Suspense>
<AddRelativeComp accessCode={accessCode}/>
</Suspense>
  );
}