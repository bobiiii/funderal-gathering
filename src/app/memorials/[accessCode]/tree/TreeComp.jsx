"use client";
import { TransformWrapper, TransformComponent } from "react-zoom-pan-pinch";
import FuneralCircleTree from "./FuneralCircleTree";
import Link from "next/link";


export default function TreeComp({ accessCode, data  }) {
  

  return (
    <div className="br min-h-screen bg-gray-100 ">
      <div className="bg-gray-50    rounded-xl shadow-md overflow-hidden">
        {data.data.deceased ? (
          <div className=" w-full   flex justify-center ">
            <TransformWrapper
              initialScale={1}
              minScale={1}
              maxScale={8}
              wheel={{ disabled: false }}
              pinch={{ disabled: false }}
              pan={{ disabled: false }}
              limitToBounds={false} // Optional: Allows panning beyond the initial bounds
            >
              {({ zoomIn, zoomOut, resetTransform, ...rest }) => (
                <>
                  <div className="w-full flex ">
                  <div className="flex flex-col items-center justify-center divide-y-4 w-3/12">
                  <button
                        className="w-[150px] px-4 py-2 bg-green-500 text-white rounded-md"
                      >
<Link href={`/memorials/${accessCode}/add-relative`}>
                        Add family Member
</Link>
                      </button>
                      <button
                        className="w-[150px] px-4 py-2 bg-red-500 text-white rounded-md"
                      >
<Link href={`/memorials/${accessCode}/remove-relative`}>
                        Remove Member
</Link>
                      </button>
                      <button
                        onClick={() => zoomIn()}
                        className="w-[150px] px-4 py-2 bg-blue-500 text-white rounded-md"
                      >
                        Zoom In
                      </button>
                      <button
                        onClick={() => zoomOut()}
                        className="w-[150px] px-4 py-2 bg-blue-500 text-white rounded-md"
                      >
                        Zoom Out
                      </button>
                      <button
                        onClick={() => resetTransform()}
                        className="w-[150px] px-4 py-2 bg-gray-300 text-gray-700 rounded-md"
                      >
                        Reset
                      </button>
                    </div>
                    <div className="flex-grow bg-white w-9/12">
                    <TransformComponent >
                      <FuneralCircleTree   data={data.data}/>
                    </TransformComponent>
                    </div>
                  </div>
                </>
              )}
            </TransformWrapper>
          </div>
        ) : (
          <div className="text-center text-gray-500">Tree not available</div>
        )}
      </div>

      {/* <div className="mt-8 flex flex-wrap justify-center gap-4">
          <a
            href={`/memorials/${accessCode}`}
            className="px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
          >
            Back to Memorial
          </a>
          <a
            href={`/memorials/${accessCode}/add-relative`}
            className="px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-green-600 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500"
          >
            Add Family Member
          </a>
        </div> */}
    </div>
  );
}
