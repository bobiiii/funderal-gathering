import Image from 'next/image';
import React from 'react';

function FuneralCircleTree({  data }) {
  
  
  const deceased = data.deceased
  const relatives = data.relatives.filter(a => a.relation !== 'Friend' );
  const friends = data.relatives.filter(a => a.relation === 'Friend');
  // const relatives = data.relatives
  // const relatives = attendees.filter(a => a.category === 'relative');
  // const friends = attendees.filter(a => a.category === 'friend');

  // Dynamically determine SVG dimensions and center
  const svgWidth = 700;
  const svgHeight = 600;
  const centerX = svgWidth / 2;
  const centerY = svgHeight / 2;
  const radiusRelative = 150;
  const radiusFriends = 250;
  const nodeRadius = 30;
  const deceasedNodeRadius = 60;

  const getCircularPositions = (count, radius) => {
    const positions = [];
    const angleIncrement = (2 * Math.PI) / count;
    for (let i = 0; i < count; i++) {
      const angle = i * angleIncrement - Math.PI / 2;
      const x = centerX + radius * Math.cos(angle);
      const y = centerY + radius * Math.sin(angle);
      positions.push({ x, y });
    }
    return positions;
  };

  const relativePositions = getCircularPositions(relatives.length, radiusRelative);
  const friendPositions = getCircularPositions(friends.length, radiusFriends);

  return (
    <div className=' w-[80vw] h-[120vh] flex justify-center   bg-gray-200'>
      <svg className=''  width={svgWidth} height={svgHeight}>
        {/* Center Deceased Node */}
        {deceased && (
          <g transform={`translate(${centerX}, ${centerY})`}>
            <circle r={deceasedNodeRadius} fill="" stroke="none" />
            <foreignObject x={-deceasedNodeRadius} y={-deceasedNodeRadius} width={deceasedNodeRadius * 2} height={deceasedNodeRadius * 2}>
              <div xmlns="http://www.w3.org/1999/xhtml" style={{ width: '100%', height: '100%' }}>
                {(
                  <Image
                    src={`https://picsum.photos/seed/25/100`}
                    width={100}
                    height={100}
                    alt={deceased.name}
                    style={{
                      width: '100%',
                      height: '100%',
                      objectFit: 'cover',
                      borderRadius: '50%',
                      display: 'block'
                    }}
                  />
                )}
                {/* {!deceased.photo && (
                  <div
                    style={{
                      width: '100%',
                      height: '100%',
                      borderRadius: '50%',
                      backgroundColor: 'lightblue',
                      display: 'flex',
                      justifyContent: 'center',
                      alignItems: 'center',
                    }}
                  >
                    {deceased.name.charAt(0).toUpperCase()}
                  </div>
                )} */}
              </div>
            </foreignObject>
            <text x={0} y={deceasedNodeRadius + 20} textAnchor="middle" fontSize="12" fill="black">
              {deceased.name}
            </text>
          </g>
        )}

        {/* Relative Nodes */}
        {relatives.map((relative, index) => {
          const pos = relativePositions[index];
          const angle = Math.atan2(centerY - pos.y, centerX - pos.x);
          const lineStartX = nodeRadius * Math.cos(angle);
          const lineStartY = nodeRadius * Math.sin(angle);
          const lineEndX = (centerX - deceasedNodeRadius * Math.cos(angle)) - pos.x;
          const lineEndY = (centerY - deceasedNodeRadius * Math.sin(angle)) - pos.y;
          const relativeNodeRadius = nodeRadius;

          return (
            <g key={relative.id} transform={`translate(${pos.x}, ${pos.y})`}>
              <circle r={relativeNodeRadius} fill="" stroke="none" />
              <foreignObject
                x={-relativeNodeRadius}
                y={-relativeNodeRadius}
                width={relativeNodeRadius * 2}
                height={relativeNodeRadius * 2}
              >
                <div xmlns="http://www.w3.org/1999/xhtml" style={{ width: '100%', height: '100%' }}>
                  { (
                    <Image
                      src={`https://picsum.photos/seed/${index + 1}/100`}
                      width={60}
                      height={60}
                      alt={relative.name}
                      style={{
                        width: '100%',
                        height: '100%',
                        objectFit: 'cover',
                        borderRadius: '50%',
                        display: 'block'
                      }}
                    />
                  )}
                  {/* {!relative.photo && (
                    <div
                      style={{
                        width: '100%',
                        height: '100%',
                        borderRadius: '50%',
                        backgroundColor: 'lightgreen',
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                      }
                    }
                    >
                      {relative.name.charAt(0).toUpperCase()}
                    </div>
                  )} */}
                </div>
              </foreignObject>
              <text x={0} y={relativeNodeRadius + 20} textAnchor="middle" fontSize="12">{relative.name}</text>
              {deceased && (
                <line
                  x1={lineStartX}
                  y1={lineStartY}
                  x2={lineEndX}
                  y2={lineEndY}
                  stroke="black"
                />
              )}
            </g>
          );
        })}

        {/* Friend Connection Lines */}
        {friendPositions.length > 1 && friendPositions.map((pos, index) => {
          const nextIndex = (index + 1) % friendPositions.length;
          const nextPos = friendPositions[nextIndex];
          return (
            <line
              key={`friend-line-${index}`}
              x1={pos.x}
              y1={pos.y}
              x2={nextPos.x}
              y2={nextPos.y}
              stroke="blue"
              strokeWidth=""
                strokeOpacity="0.5"
                strokeDasharray="5,5"
                strokeLinecap="round"

            />
          );
        })}

        {/* Friend Nodes */}
        {friends.map((friend, index) => {
          const pos = friendPositions[index];
          const friendNodeRadius = nodeRadius;

          return (
            <g key={friend.id} transform={`translate(${pos.x}, ${pos.y})`}>
              <circle r={friendNodeRadius} fill="" stroke="none" />
              <foreignObject
                x={-friendNodeRadius}
                y={-friendNodeRadius}
                width={friendNodeRadius * 2}
                height={friendNodeRadius * 2}
              >
                <div xmlns="http://www.w3.org/1999/xhtml" style={{ width: '100%', height: '100%' }}>
                  { (
                    <Image
                      src={`https://picsum.photos/seed/${index + 10}/100`}
                      width={60}
                      height={60}
                      alt={friend.name}
                      style={{
                        width: '100%',
                        height: '100%',
                        objectFit: 'cover',
                        borderRadius: '50%',
                        display: 'block'
                      }}
                    />
                  )}
                  {/* {!friend.photo && (
                    <div
                      style={{
                        width: '100%',
                        height: '100%',
                        borderRadius: '50%',
                        backgroundColor: 'lightcoral',
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                      }}
                    >
                      {friend.name.charAt(0).toUpperCase()}
                    </div>
                  )} */}
                </div>
              </foreignObject>
              <text x={0} y={friendNodeRadius + 20} textAnchor="middle" fontSize="12">{friend.name}</text>
            </g>
          );
        })}
      </svg>
      </div>
  );
}

export default FuneralCircleTree;