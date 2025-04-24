"use client"
import Link from "next/link";


export default  function MemorialComp({ accessCode, memorial }) {
  
  return (
    <div className="min-h-screen bg-gray-50 py-8 px-4">
      <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-md overflow-hidden">
        {/* Header with deceased photo */}
        <div className="relative h-64 bg-gray-200">
          {memorial.mainPhoto ? (
            <img 
              src={memorial.mainPhoto} 
              alt={`${memorial.deceasedName}`}
              className="w-full h-full object-cover"
            />
          ) : (
            <div className="w-full h-full flex items-center justify-center bg-gray-300">
              <span className="text-gray-500 text-lg">No photo available</span>
            </div>
          )}
        </div>
        
        {/* Memorial content */}
        <div className="p-6 md:p-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">{memorial.deceasedName}</h1>
          
          <div className="flex items-center text-gray-600 mb-6">
            {memorial.birthDate && (
              <span>{new Date(memorial.birthDate).toLocaleDateString()}</span>
            )}
            {memorial.birthDate && memorial.deathDate && (
              <span className="mx-2">—</span>
            )}
            {memorial.deathDate && (
              <span>{new Date(memorial.deathDate).toLocaleDateString()}</span>
            )}
          </div>
          
          {memorial.biography && (
            <div className="prose max-w-none text-gray-700 mb-8">
              <h2 className="text-xl font-semibold mb-4">Life Story</h2>
              <p className="whitespace-pre-line">{memorial.biography}</p>
            </div>
          )}
          
          {/* Action buttons */}
          <div className="flex flex-wrap gap-4 mt-8">
            <Link 
              href={`/memorials/${accessCode}/tree`}
              className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              View Family Tree
            </Link>
            
            <Link 
              href={`/memorials/${accessCode}/add-relative`}
              className="inline-flex items-center px-6 py-3 border border-gray-300 text-base font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              Add Family Member
            </Link>
            
            {memorial.organizer && (
              <Link 
                href={`/memorials/${accessCode}/manage`}
                className="inline-flex items-center px-6 py-3 border border-gray-300 text-base font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              >
                Manage Memorial
              </Link>
            )}
          </div>
          
          {/* Organizer info */}
          {memorial.organizer && (
            <div className="mt-8 pt-6 border-t border-gray-200">
              <h3 className="text-sm font-medium text-gray-500">Memorial organized by</h3>
              <p className="text-sm text-gray-900">
                {memorial.organizer.name} ({memorial.organizer.relation})
                {memorial.organizer.email && (
                  <span className="block text-gray-600">{memorial.organizer.email}</span>
                )}
              </p>
            </div>
          )}
        </div>
      </div>
      
      {/* Share section */}
      <div className="max-w-4xl mx-auto mt-8 bg-white rounded-lg shadow-md p-6">
        <h2 className="text-lg font-medium text-gray-900 mb-4">Share this memorial</h2>
        <div className="flex items-center space-x-4">
          <input
            type="text"
            readOnly
            value={`${process.env.NEXT_PUBLIC_API_URL}/memorials/${accessCode}`}
            className="flex-1 min-w-0 block w-full px-3 py-2 rounded-md border border-gray-300 shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          />
          <button
            onClick={() => {
              navigator.clipboard.writeText(`${process.env.NEXT_PUBLIC_API_URL}/memorials/${accessCode}`);
              alert('Link copied to clipboard!');
            }}
            className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          >
            Copy Link
          </button>
        </div>
      </div>
    </div>
  );
}