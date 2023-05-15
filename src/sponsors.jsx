import React, { useEffect, useState } from "react";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
// import OutlinedCard from "./card";

const SponsorPage = () => {
  const [sponsors, setSponsors] = useState([]);

  useEffect(() => {
    fetch("https://youngstartup.io/api/cwebsite/get_sponsors")
      .then((response) => response.json())
      .then((data) => {
        const sponsorData = data.map(({ values }) => {
          return values.map(
            ({
              id,
              website,
              logo_url,
              description,
              team_members,
              display_name,
            }) => {
              const teamMembersArr = JSON.parse(team_members);
              const teamMembers = teamMembersArr.map(
                ({
                  id,
                  firstname,
                  lastname,
                  linkedin,
                  headshot_url,
                  jobtitle,
                }) => {
                  return {
                    firstname,
                    lastname,
                    linkedin,
                    headshot_url,
                    jobtitle,
                  };
                }
              );
              return {
                id,
                website,
                logo_url,
                description,
                display_name,
                teamMembers,
              };
            }
          );
        });
        setSponsors(sponsorData);
      })
      .catch((error) => console.error(error));
  }, []);

  return (
    <div className="main-container">
      {sponsors.map((sponsorCompany) => {
        return (
          <div key={sponsorCompany.id} className="box">
            <h3 key={sponsorCompany.id} className="partner">
              {sponsorCompany.display_name} Partner
            </h3>
            <div className="company-info">
              {sponsorCompany.map((sponsorCompany) => {
                return (
                  <div key={sponsorCompany.id} className="">
                    <div key={sponsorCompany.id} className="">
                      <div key={sponsorCompany.id} className="">
                        <img
                          key={sponsorCompany.id}
                          src={sponsorCompany.logo_url}
                          className="logo"
                          alt="sponsor logo"
                        />
                        <p className="text" key={sponsorCompany.id}>
                          {sponsorCompany.description}
                        </p>
                        <a
                          href={sponsorCompany.website}
                          key={sponsorCompany.id}
                          className="btn"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          Learn More
                        </a>
                        {sponsorCompany.teamMembers.length > 0 && (
                          <div className="team-members">
                            {sponsorCompany.teamMembers.map((member) => {
                              return (
                                <div
                                  key={`${member.firstname}-${member.lastname}`}
                                  className=""
                                >
                                  <div className="">
                                    <div className="">
                                      {member.headshot_url && (
                                        <img
                                          src={member.headshot_url}
                                          className=""
                                          alt={`${member.firstname} ${member.lastname}`}
                                          width="80"
                                          height="80"
                                        />
                                      )}
                                      <div className="member-info-container">
                                        <p className="">
                                          {`${member.firstname} ${member.lastname}`}
                                        </p>
                                        {member.jobtitle && (
                                          <p className="">{member.jobtitle}</p>
                                        )}
                                      </div>
                                    </div>
                                    {member.linkedin && (
                                      <a
                                        href={member.linkedin}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                      >
                                        <LinkedInIcon />
                                      </a>
                                    )}
                                  </div>
                                </div>
                              );
                            })}
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default SponsorPage;
