'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';

export default function Home() {
  const [accessCode, setAccessCode] = useState('');
  const router = useRouter();

  const handleViewMemorial = () => {
    if (accessCode.trim() !== '') {
      router.push(`/memorials/${accessCode}`);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4">
      <div className="bg-white rounded-2xl shadow-lg p-8 w-full max-w-md text-center">
        <h1 className="text-3xl font-bold text-gray-800 mb-6">Funeral Family Tree</h1>

        <div className="space-y-6">
          {/* Create New Memorial */}
          <Link href="/memorials/create-memorial">
            <button className="w-full bg-blue-600 text-white py-3 rounded-lg text-lg font-semibold hover:bg-blue-700 transition">
              Create New Memorial
            </button>
          </Link>

          {/* Access Existing Memorial */}
          <div className="bg-gray-50 p-4 rounded-xl shadow-inner">
            <h3 className="text-lg font-medium text-gray-700 mb-2">
              Access Existing Memorial
            </h3>
            <input
              type="text"
              placeholder="Enter access code"
              value={accessCode}
              onChange={(e) => setAccessCode(e.target.value)}
              className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 mb-4"
            />
            <button
              onClick={handleViewMemorial}
              className="w-full bg-green-600 text-white py-2 rounded-lg font-semibold hover:bg-green-700 transition"
            >
              View Memorial
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
