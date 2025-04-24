"use client"
import React from 'react';
import Tree from 'react-d3-tree';

// This is a simplified example of an org chart with a depth of 2.
// Note how deeper levels are defined recursively via the `children` property.
const orgChart = {
  name: 'CEO',
  children: [
    {
      name: 'Manager',
      attributes: {
        department: 'Production',
      },
      children: [
        {
          name: 'Foreman',
          attributes: {
            department: 'Fabrication',
          },
          children: [
            {
              name: 'Worker',
            },
          ],
        },
        {
          name: 'Foreman',
          attributes: {
            department: 'Assembly',
          },
          children: [
            {
              name: 'Worker',
            },
          ],
        },
      ],
    },
  ],
};

export default function FamilyTreeWrapper() {
  return (
    // `<Tree />` will fill width/height of its container; in this case `#treeWrapper`.
    <div id="treeWrapper" style={{ width: '50em', height: '20em' }}>
      <Tree data={orgChart} />
    </div>
  );
}

// // app/memorial/[accessCode]/tree/page.js
// "use client";

// import FamilyTree from 'react-family-tree';
// import PersonNode from './PersonNode';
// import { PinchZoomPan } from './PinchZoomPan';

// const NODE_WIDTH = 200;
// const NODE_HEIGHT = 120;

// const nodes = [
//     {
//       "id": "HkqEDLvxE",
//       "gender": "male",
//       "parents": [
//         {
//           "id": "011jVS4rb",
//           "type": "blood"
//         },
//         {
//           "id": "PXACjDxmR",
//           "type": "blood"
//         }
//       ],
//       "siblings": [
//         {
//           "id": "kuVISwh7w",
//           "type": "blood"
//         },
//         {
//           "id": "UIEjvLJMd",
//           "type": "blood"
//         },
//         {
//           "id": "ZVi8fWDBx",
//           "type": "blood"
//         }
//       ],
//       "spouses": [],
//       "children": []
//     },
//     {
//       "id": "011jVS4rb",
//       "gender": "male",
//       "parents": [
//         {
//           "id": "ypu71w9_Q",
//           "type": "blood"
//         },
//         {
//           "id": "GEf8zF7A4",
//           "type": "blood"
//         }
//       ],
//       "children": [
//         {
//           "id": "HkqEDLvxE",
//           "type": "blood"
//         },
//         {
//           "id": "kuVISwh7w",
//           "type": "blood"
//         },
//         {
//           "id": "UIEjvLJMd",
//           "type": "blood"
//         },
//         {
//           "id": "ZVi8fWDBx",
//           "type": "blood"
//         }
//       ],
//       "siblings": [],
//       "spouses": [
//         {
//           "id": "PXACjDxmR",
//           "type": "married"
//         }
//       ]
//     },
//     {
//       "id": "PXACjDxmR",
//       "gender": "female",
//       "parents": [
//         {
//           "id": "2DlrR0fK8",
//           "type": "blood"
//         }
//       ],
//       "children": [
//         {
//           "id": "HkqEDLvxE",
//           "type": "blood"
//         },
//         {
//           "id": "kuVISwh7w",
//           "type": "blood"
//         },
//         {
//           "id": "UIEjvLJMd",
//           "type": "blood"
//         },
//         {
//           "id": "ZVi8fWDBx",
//           "type": "blood"
//         }
//       ],
//       "siblings": [
//         {
//           "id": "H-06WvsfJ",
//           "type": "blood"
//         }
//       ],
//       "spouses": [
//         {
//           "id": "011jVS4rb",
//           "type": "married"
//         }
//       ]
//     },
//     {
//       "id": "kuVISwh7w",
//       "gender": "male",
//       "parents": [
//         {
//           "id": "011jVS4rb",
//           "type": "blood"
//         },
//         {
//           "id": "PXACjDxmR",
//           "type": "blood"
//         }
//       ],
//       "children": [
//         {
//           "id": "Fbc9iwnJl",
//           "type": "blood"
//         }
//       ],
//       "siblings": [
//         {
//           "id": "HkqEDLvxE",
//           "type": "blood"
//         },
//         {
//           "id": "UIEjvLJMd",
//           "type": "blood"
//         },
//         {
//           "id": "ZVi8fWDBx",
//           "type": "blood"
//         }
//       ],
//       "spouses": [
//         {
//           "id": "vRSjcaDGj",
//           "type": "married"
//         }
//       ]
//     },
//     {
//       "id": "UIEjvLJMd",
//       "gender": "female",
//       "parents": [
//         {
//           "id": "011jVS4rb",
//           "type": "blood"
//         },
//         {
//           "id": "PXACjDxmR",
//           "type": "blood"
//         }
//       ],
//       "children": [
//         {
//           "id": "6_OTJvbvS",
//           "type": "blood"
//         },
//         {
//           "id": "JhSCcdFEP",
//           "type": "blood"
//         },
//         {
//           "id": "6hNxNY1-I",
//           "type": "blood"
//         }
//       ],
//       "siblings": [
//         {
//           "id": "HkqEDLvxE",
//           "type": "blood"
//         },
//         {
//           "id": "kuVISwh7w",
//           "type": "blood"
//         },
//         {
//           "id": "ZVi8fWDBx",
//           "type": "blood"
//         }
//       ],
//       "spouses": [
//         {
//           "id": "RZbkr5vAi",
//           "type": "married"
//         }
//       ]
//     },
//     {
//       "id": "RZbkr5vAi",
//       "gender": "male",
//       "parents": [],
//       "children": [
//         {
//           "id": "6_OTJvbvS",
//           "type": "blood"
//         },
//         {
//           "id": "JhSCcdFEP",
//           "type": "blood"
//         },
//         {
//           "id": "6hNxNY1-I",
//           "type": "blood"
//         }
//       ],
//       "siblings": [],
//       "spouses": [
//         {
//           "id": "UIEjvLJMd",
//           "type": "married"
//         }
//       ]
//     },
//     {
//       "id": "vRSjcaDGj",
//       "gender": "female",
//       "parents": [
//         {
//           "id": "6vASIIxhd",
//           "type": "blood"
//         },
//         {
//           "id": "iFiwqrWx-",
//           "type": "blood"
//         }
//       ],
//       "children": [
//         {
//           "id": "Fbc9iwnJl",
//           "type": "blood"
//         }
//       ],
//       "siblings": [],
//       "spouses": [
//         {
//           "id": "kuVISwh7w",
//           "type": "married"
//         }
//       ]
//     },
//     {
//       "id": "Fbc9iwnJl",
//       "gender": "female",
//       "parents": [
//         {
//           "id": "kuVISwh7w",
//           "type": "blood"
//         },
//         {
//           "id": "vRSjcaDGj",
//           "type": "blood"
//         }
//       ],
//       "children": [],
//       "siblings": [],
//       "spouses": []
//     },
//     {
//       "id": "ypu71w9_Q",
//       "gender": "male",
//       "parents": [
//         {
//           "id": "TsyAkbF89",
//           "type": "blood"
//         },
//         {
//           "id": "T54Km7uOC",
//           "type": "blood"
//         }
//       ],
//       "children": [
//         {
//           "id": "011jVS4rb",
//           "type": "blood"
//         }
//       ],
//       "siblings": [],
//       "spouses": [
//         {
//           "id": "GEf8zF7A4",
//           "type": "married"
//         }
//       ]
//     },
//     {
//       "id": "GEf8zF7A4",
//       "gender": "female",
//       "parents": [
//         {
//           "id": "gsgwGS_Kw",
//           "type": "blood"
//         },
//         {
//           "id": "ZgTZx9uXQ",
//           "type": "blood"
//         }
//       ],
//       "children": [
//         {
//           "id": "011jVS4rb",
//           "type": "blood"
//         }
//       ],
//       "siblings": [],
//       "spouses": [
//         {
//           "id": "ypu71w9_Q",
//           "type": "married"
//         }
//       ]
//     },
//     {
//       "id": "2DlrR0fK8",
//       "gender": "male",
//       "parents": [],
//       "children": [
//         {
//           "id": "PXACjDxmR",
//           "type": "blood"
//         },
//         {
//           "id": "H-06WvsfJ",
//           "type": "blood"
//         }
//       ],
//       "siblings": [],
//       "spouses": []
//     },
//     {
//       "id": "gsgwGS_Kw",
//       "gender": "male",
//       "parents": [],
//       "children": [
//         {
//           "id": "GEf8zF7A4",
//           "type": "blood"
//         }
//       ],
//       "siblings": [],
//       "spouses": [
//         {
//           "id": "ZgTZx9uXQ",
//           "type": "married"
//         }
//       ]
//     },
//     {
//       "id": "ZgTZx9uXQ",
//       "gender": "female",
//       "parents": [],
//       "children": [
//         {
//           "id": "GEf8zF7A4",
//           "type": "blood"
//         }
//       ],
//       "siblings": [],
//       "spouses": [
//         {
//           "id": "gsgwGS_Kw",
//           "type": "married"
//         }
//       ]
//     },
//     {
//       "id": "ZVi8fWDBx",
//       "gender": "male",
//       "parents": [
//         {
//           "id": "011jVS4rb",
//           "type": "blood"
//         },
//         {
//           "id": "PXACjDxmR",
//           "type": "blood"
//         }
//       ],
//       "children": [],
//       "siblings": [
//         {
//           "id": "HkqEDLvxE",
//           "type": "blood"
//         },
//         {
//           "id": "kuVISwh7w",
//           "type": "blood"
//         },
//         {
//           "id": "UIEjvLJMd",
//           "type": "blood"
//         }
//       ],
//       "spouses": [
//         {
//           "id": "wJ1EBvc5m",
//           "type": "married"
//         }
//       ]
//     },
//     {
//       "id": "6_OTJvbvS",
//       "gender": "male",
//       "parents": [
//         {
//           "id": "RZbkr5vAi",
//           "type": "blood"
//         },
//         {
//           "id": "UIEjvLJMd",
//           "type": "blood"
//         }
//       ],
//       "children": [],
//       "siblings": [
//         {
//           "id": "JhSCcdFEP",
//           "type": "blood"
//         },
//         {
//           "id": "6hNxNY1-I",
//           "type": "blood"
//         }
//       ],
//       "spouses": []
//     },
//     {
//       "id": "JhSCcdFEP",
//       "gender": "female",
//       "parents": [
//         {
//           "id": "RZbkr5vAi",
//           "type": "blood"
//         },
//         {
//           "id": "UIEjvLJMd",
//           "type": "blood"
//         }
//       ],
//       "children": [
//         {
//           "id": "Z0QA5oKks",
//           "type": "blood"
//         }
//       ],
//       "siblings": [
//         {
//           "id": "6_OTJvbvS",
//           "type": "blood"
//         },
//         {
//           "id": "6hNxNY1-I",
//           "type": "blood"
//         }
//       ],
//       "spouses": [
//         {
//           "id": "ilad8NH6g",
//           "type": "married"
//         }
//       ]
//     },
//     {
//       "id": "6hNxNY1-I",
//       "gender": "male",
//       "parents": [
//         {
//           "id": "RZbkr5vAi",
//           "type": "blood"
//         },
//         {
//           "id": "UIEjvLJMd",
//           "type": "blood"
//         }
//       ],
//       "children": [],
//       "siblings": [
//         {
//           "id": "6_OTJvbvS",
//           "type": "blood"
//         },
//         {
//           "id": "JhSCcdFEP",
//           "type": "blood"
//         }
//       ],
//       "spouses": []
//     },
//     {
//       "id": "ilad8NH6g",
//       "gender": "male",
//       "parents": [],
//       "children": [
//         {
//           "id": "Z0QA5oKks",
//           "type": "blood"
//         }
//       ],
//       "siblings": [],
//       "spouses": [
//         {
//           "id": "JhSCcdFEP",
//           "type": "married"
//         }
//       ]
//     },
//     {
//       "id": "Z0QA5oKks",
//       "gender": "male",
//       "parents": [
//         {
//           "id": "ilad8NH6g",
//           "type": "blood"
//         },
//         {
//           "id": "JhSCcdFEP",
//           "type": "blood"
//         }
//       ],
//       "children": [],
//       "siblings": [],
//       "spouses": []
//     },
//     {
//       "id": "wJ1EBvc5m",
//       "gender": "female",
//       "parents": [],
//       "children": [],
//       "siblings": [],
//       "spouses": [
//         {
//           "id": "ZVi8fWDBx",
//           "type": "married"
//         }
//       ]
//     },
//     {
//       "id": "TsyAkbF89",
//       "gender": "male",
//       "parents": [],
//       "children": [
//         {
//           "id": "ypu71w9_Q",
//           "type": "blood"
//         }
//       ],
//       "siblings": [],
//       "spouses": [
//         {
//           "id": "T54Km7uOC",
//           "type": "married"
//         }
//       ]
//     },
//     {
//       "id": "T54Km7uOC",
//       "gender": "female",
//       "parents": [],
//       "children": [
//         {
//           "id": "ypu71w9_Q",
//           "type": "blood"
//         }
//       ],
//       "siblings": [],
//       "spouses": [
//         {
//           "id": "TsyAkbF89",
//           "type": "married"
//         }
//       ]
//     },
//     {
//       "id": "6vASIIxhd",
//       "gender": "male",
//       "parents": [],
//       "children": [
//         {
//           "id": "vRSjcaDGj",
//           "type": "blood"
//         }
//       ],
//       "siblings": [],
//       "spouses": [
//         {
//           "id": "iFiwqrWx-",
//           "type": "married"
//         }
//       ]
//     },
//     {
//       "id": "iFiwqrWx-",
//       "gender": "female",
//       "parents": [],
//       "children": [
//         {
//           "id": "vRSjcaDGj",
//           "type": "blood"
//         }
//       ],
//       "siblings": [],
//       "spouses": [
//         {
//           "id": "6vASIIxhd",
//           "type": "married"
//         }
//       ]
//     },
//     {
//       "id": "H-06WvsfJ",
//       "gender": "female",
//       "parents": [
//         {
//           "id": "2DlrR0fK8",
//           "type": "blood"
//         }
//       ],
//       "children": [],
//       "siblings": [
//         {
//           "id": "PXACjDxmR",
//           "type": "blood"
//         }
//       ],
//       "spouses": []
//     }
//   ]

// export default function TreePage() {
//   const rootId = "HkqEDLvxE"; // Set to your desired root node


// const css = {
//     wrapper: {
//         flex: 1,
//         width: '30%',
//     },

// }

//   return (
//     <div className="min-h-screen bg-gray-50 p-8">
//       <div className="max-w-7xl mx-auto">
//         <div className="text-center mb-8">
//           <h1 className="text-3xl font-bold text-gray-900">Family Tree</h1>
//         </div>

//         <div className="bg-white p-6 rounded-xl shadow-lg overflow-auto">
//           <div style={{ 
//             width: '1200px', 
//             height: '500px',
//             position: 'relative',
//             margin: '0 auto'
//           }}>


// {/* <PinchZoomPan min={1.0} max={2.5} captureWheel className={css.wrapper}> */}

//             <FamilyTree
//               nodes={nodes}
//               rootId={rootId}
//               width={1600}
//               height={800}
//               className='bg-yellow-100 w-[600px]'
//               renderNode={(node) => (
//                 <PersonNode
//                   key={node.id}
//                   node={node}
//                   isRoot={node.id === rootId}
//                   style={{
                    
//                     position: 'absolute',
//                     left: node.left * NODE_WIDTH,
//                     top: node.top * NODE_HEIGHT,
//                     width: NODE_WIDTH,
//                     height: NODE_HEIGHT,
//                     transition: 'all 0.3s',
//                   }}
//                 />
//               )}
//               options={{
//                 placeholders: false,
//                 horizontal: true,
//                 alignBranches: true,
//                 scale: 1.0
//               }}
//             />

// {/* </PinchZoomPan> */}

//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }