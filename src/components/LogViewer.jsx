// import React, { useEffect, useState } from 'react';
// import socket from '../socket';

// function LogViewer() {
//   const [logs, setLogs] = useState([]);
//   const [filterText, setFilterText] = useState('');

//   useEffect(() => {
//     socket.on('log', (logEntry) => {
//       setLogs((prevLogs) => [logEntry, ...prevLogs]);
//     });

//     return () => socket.off('log');
//   }, []);

//   const filteredLogs = logs.flatMap((log, index) =>
//     log.message
//       .split('\n')
//       .filter((line) =>
//         line.toLowerCase().includes(filterText.toLowerCase())
//       )
//       .map((line, subIndex) => ({
//         line,
//         timestamp: log.timestamp,
//         key: `${index}-${subIndex}`,
//       }))
//   );

//   const getBackground = (msg) => {
//     if (msg.includes('ERROR')) return 'bg-red-100';
//     if (msg.includes('WARN')) return 'bg-yellow-100';
//     if (msg.includes('DEBUG')) return 'bg-blue-100';
//     if (msg.includes('INFO')) return 'bg-green-100';
//     return 'bg-gray-100';
//   };

//   return (
//     <div className="max-w-2xl mx-auto bg-white p-6 rounded-lg shadow-md animate__animated animate__fadeInUp">
//       <input
//         type="text"
//         placeholder="Search logs..."
//         value={filterText}
//         onChange={(e) => setFilterText(e.target.value)}
//         className="w-full p-3 text-black mb-4 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-300"
//       />
//       <div className="space-y-4 max-h-[70vh] overflow-y-auto">
//         {filteredLogs.map(({ line, timestamp, key }) => (
//           <div
//             key={key}
//             className={`p-4 rounded-lg shadow transition-transform transform hover:scale-105 ${getBackground(line)} animate__animated animate__fadeInUp`}
//           >
//             <p className="text-gray-800 whitespace-pre-wrap break-words">{line}</p>
//             <p className="text-sm text-gray-500">
//               {new Date(timestamp).toLocaleString()}
//             </p>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }

// export default LogViewer;









import React, { useEffect, useState } from 'react';

function LogViewer() {
  const [logText, setLogText] = useState('');

  useEffect(() => {
    fetch('http://localhost:5000/logs')
      .then((res) => res.text())
      .then((data) => setLogText(data))
      .catch((err) => console.error('Error fetching logs:', err));
  }, []);

  return (
    <div className="max-w-5xl mx-auto bg-black text-green-400 p-6 rounded-lg shadow-md font-mono overflow-auto whitespace-pre">
      <pre>{logText}</pre>
    </div>
  );
}

export default LogViewer;



