// import React, { useState, useEffect } from "react";

// function CompanyPartner() {
//   const [partners, setPartners] = useState([]);
//   const [error, setError] = useState(null);

//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const response = await fetch(
//           "https://youngstartup.io/api/cwebsite/get_sponsors"
//         );
//         const json = await response.json();
//         setPartners(json.data);
//       } catch (error) {
//         setError(error);
//       }
//     };

//     fetchData();
//   }, []);

//   if (error) {
//     return <div>Error: {error.message}</div>;
//   }

//   return (
//     <div>
//       <h1>Partners</h1>
//       {partners.map((partner) => (
//         <div key={partner.id}>
//           <h2>{partner.name}</h2>
//           <img src={partner.logo_url} alt={partner.name} />
//           <p>{partner.description}</p>
//           <p>{partner.website}</p>
//           <h3>Team Members</h3>
//         </div>
//       ))}
//     </div>
//   );
// }

// export default CompanyPartner;

// Here is the original return statement:

// return (
//   <div className="main-container">
//     {sponsors.map((sponsorGroup) => {
//       return (
//         <div key={sponsorGroup[0].display_name}>
//           <h2>{sponsorGroup[0].display_name} Partner</h2>
//           <div className="row">
//             {sponsorGroup.map((sponsor) => {
//               return (
//                 <div
//                   key={sponsor.website}
//                   className="col-lg-3 col-md-4 col-sm-6"
//                 >
//                   <div className="card">
//                     <img
//                       src={sponsor.logo_url}
//                       className="card-img-top"
//                       alt="sponsor logo"
//                     />
//                     <div className="card-body">
//                       <h5 className="card-title">{sponsor.website}</h5>
//                       <p className="card-text">{sponsor.description}</p>
//                       {sponsor.teamMembers.length > 0 && (
//                         <ul className="list-group list-group-flush">
//                           {sponsor.teamMembers.map((member) => {
//                             return (
//                               <li
//                                 key={`${member.firstname}-${member.lastname}`}
//                                 className="list-group-item"
//                               >
//                                 <div className="d-flex align-items-center">
//                                   {member.headshot_url && (
//                                     <img
//                                       src={member.headshot_url}
//                                       className="rounded-circle mr-3"
//                                       alt={`${member.firstname} ${member.lastname}`}
//                                       width="40"
//                                       height="40"
//                                     />
//                                   )}
//                                   <div>
//                                     <p className="mb-0">{`${member.firstname} ${member.lastname}`}</p>
//                                     {member.jobtitle && (
//                                       <p className="mb-0">{member.jobtitle}</p>
//                                     )}
//                                     {member.linkedin && (
//                                       <a
//                                         href={member.linkedin}
//                                         target="_blank"
//                                         rel="noopener noreferrer"
//                                       >
//                                         LinkedIn Profile
//                                       </a>
//                                     )}
//                                   </div>
//                                 </div>
//                               </li>
//                             );
//                           })}
//                         </ul>
//                       )}
//                       <a
//                         href={sponsor.website}
//                         className="btn btn-primary"
//                         target="_blank"
//                         rel="noopener noreferrer"
//                       >
//                         Visit Sponsor
//                       </a>
//                     </div>
//                   </div>
//                 </div>
//               );
//             })}
//           </div>
//         </div>
//       );
//     })}
//   </div>
// );
