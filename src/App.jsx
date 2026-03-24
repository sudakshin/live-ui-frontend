import Sidebar from "./components/Sidebar"
import StreamGrid from "./components/StreamGrid"
import useLiveStreams from "./hooks/useLiveStreams"

// export default function App() {

//   useLiveStreams()

//   return (
//     <div className="flex bg-gray-900 text-white">

//       <Sidebar />

//       <div className="flex-1">
//         <StreamGrid />
//       </div>

//     </div>
//   )
// }


export default function App() {
  useLiveStreams()

  return (
    <div className="flex bg-gray-900 text-white h-screen">

      <Sidebar />

      <div className="flex-1 flex flex-col">
        
        <div className="h-12 border-b border-gray-800 flex items-center px-4">
          Live Study Streams
        </div>

        <StreamGrid />

      </div>
    </div>
  )
}