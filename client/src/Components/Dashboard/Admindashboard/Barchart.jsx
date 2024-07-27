// import React from 'react'
// import {
//     Chart as ChartJS,
//     CategoryScale,
//     LinearScale,
//     BarElement,
//     Title,
//     Tooltip,
//     Legend
// } from 'chart.js';
// import {Bar} from 'react-chartjs-2'

// ChartJS.register(
//     CategoryScale,
//     LinearScale,
//     BarElement,
//     Title,
//     Tooltip,
//     Legend
// );



// function Barchart({users}){
    
//   const names = students.map(user => user.name);
//   const ages = students.map(user => user.age);

//   const data = {
//     labels: names,
//     datasets: [
//       {
//         label: "Age",
//         data: ages,
//         backgroundColor: [
//           'rgba(255, 99, 132, 0.6)',  // Red
//           'rgba(54, 162, 235, 0.6)',  // Blue
//           'rgba(255, 206, 86, 0.6)',  // Yellow
//           'rgba(75, 192, 192, 0.6)',  // Green
//           'rgba(153, 102, 255, 0.6)', // Purple
//           'rgba(255, 159, 64, 0.6)',  // Orange
//           'rgba(231, 233, 237, 0.6)', // Gray
//           'rgba(123, 233, 237, 0.6)', // Light Blue
//           'rgba(75, 192, 192, 0.6)'   // Dark Green
//         ],
//         borderColor: [
//           'rgba(255, 99, 132, 1)',
//           'rgba(54, 162, 235, 1)',
//           'rgba(255, 206, 86, 1)',
//           'rgba(75, 192, 192, 1)',
//           'rgba(153, 102, 255, 1)',
//           'rgba(255, 159, 64, 1)',
//           'rgba(231, 233, 237, 1)',
//           'rgba(123, 233, 237, 1)',
//           'rgba(75, 192, 192, 1)'
//         ],
//         borderWidth: 1,
//       },
//     ],
//   };

//   const options = {
//     responsive: true,
//     plugins: {
//       legend: {
//         position: 'top',
//       },
//       title: {
//         display: true,
//         text: 'Age of Users',
//       },
//     },
//     scales: {
//       y: {
//         beginAtZero: true,
//       },
//     },
//   };

//     return(
       
//             <div className="graph-container">
//           <Bar data={data} options={options} />
//         </div>
        
//     )
// }

// export default Barchart;