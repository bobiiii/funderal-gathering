// PersonNode.js
"use client";

export default function PersonNode({ node, isRoot, style }) {
  const genderColor = node.gender === 'male' ? 'bg-blue-100' : 'bg-pink-100';
  
  return (
    <div 
      style={style}
      className={`${genderColor} border-2 rounded-lg p-4 shadow-md hover:shadow-lg transition-all duration-300 text-center`}
    >
      <div className="font-bold text-sm mb-1">{node.name}</div>
      {isRoot && (
        <span className="text-xs bg-yellow-200 px-2 py-1 rounded-full">
          Root
        </span>
      )}
      <div className="text-xs mt-2 text-gray-600">
        {node.gender === 'male' ? '♂' : '♀'} {node.gender}
      </div>
    </div>
  );
}