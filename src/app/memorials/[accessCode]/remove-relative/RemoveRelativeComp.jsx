"use client";

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { Loader2 } from 'lucide-react';
import { removerelative } from '@/lib/apiCall';

export default function RemoveRelativeComp({ memorialData, accessCode }) {
    // console.log("memorialData  ", memorialData?.data);
    
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [deletingId, setDeletingId] = useState(null);

  const handleDelete = async (relativeId) => {
    if (!window.confirm('Are you sure you want to remove this family member?')) return;
    
    setIsLoading(true);
    setDeletingId(relativeId);
    setError(null);

    try {
      await removerelative(accessCode, relativeId); // Call the API to delete the relative

      router.refresh(); // Refresh the page to show updated list
    } catch (err) {
      setError(err.message);
    } finally {
      setIsLoading(false);
      setDeletingId(null);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl">
        <div className="p-8">
          <div className="text-center mb-6">
            <h1 className="text-2xl font-bold text-gray-900">Manage Family Members</h1>
            <p className="mt-2 text-sm text-gray-600">
              Remove relatives from the family tree
            </p>
          </div>

          {error && (
            <div className="mb-4 p-4 bg-red-50 rounded-lg">
              <p className="text-red-600">{error}</p>
            </div>
          )}

          <div className="space-y-4">
            {memorialData?.length > 0 ? (
              memorialData?.map((relative) => (
                <div 
                  key={relative.id}
                  className="flex items-center justify-between p-4 border rounded-lg"
                >
                  <div>
                    <h3 className="font-medium">{relative.name}</h3>
                    <p className="text-sm text-gray-500">{relative.relation}</p>
                  </div>
                  <button
                    onClick={() => handleDelete(relative.id)}
                    disabled={isLoading}
                    className="text-red-600 hover:text-red-800 disabled:opacity-50 flex items-center gap-1"
                  >
                    {isLoading && deletingId === relative.id ? (
                      <>
                        <Loader2 className="animate-spin h-4 w-4" />
                        <span>Removing...</span>
                      </>
                    ) : (
                      'Remove'
                    )}
                  </button>
                </div>
              ))
            ) : (
              <div className="text-center py-4 text-gray-500">
                No family members found
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}