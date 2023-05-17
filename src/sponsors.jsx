import React, { useEffect, useState } from "react";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import Button from "@mui/material/Button";
import SendIcon from "@mui/icons-material/Send";

const SponsorPage = () => {
  const [sponsors, setSponsors] = useState([]);

  useEffect(() => {
    fetch("https://youngstartup.io/api/cwebsite/get_sponsors")
      .then((response) => response.json())
      .then((data) => {
        const sponsorData = data.flatMap(({ values }) => {
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
                ({ firstname, lastname, linkedin, headshot_url, jobtitle }) => {
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
      });
  }, []);

  return (
    <div className="main-container">
      {sponsors.flatMap((sponsorCompany) => {
        return (
          <div key={sponsorCompany.id} className="box">
            <h3 key={sponsorCompany.display_name} className="partner">
              <span className="company-name">
                {sponsorCompany.display_name}
              </span>{" "}
              Partner
            </h3>
            <div className="grid-container">
              <div className="company-info">
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
                  className="btn"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button
                    className="company-button"
                    variant="contained"
                    endIcon={<SendIcon />}
                    style={{ backgroundColor: "#da0782" }}
                  >
                    Learn More
                  </Button>
                </a>
              </div>
              {sponsorCompany.teamMembers.length > 0 && (
                <div className="team-members">
                  {sponsorCompany.teamMembers.map((member) => {
                    return (
                      <div
                        key={`${member.firstname}-${member.lastname}`}
                        className="member"
                      >
                        <div className="member-info">
                          {member.headshot_url && (
                            <img
                              src={member.headshot_url}
                              className="member-photo"
                              alt={`${member.firstname} ${member.lastname}`}
                              width="90"
                              height="90"
                            />
                          )}
                          <p className="name">{`${member.firstname} ${member.lastname}`}</p>
                          {member.jobtitle && (
                            <p className="title">{member.jobtitle}</p>
                          )}
                        </div>
                        {member.linkedin && (
                          <a
                            href={member.linkedin}
                            className="linkedin-link"
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            <LinkedInIcon className="linkedin-icon" />
                          </a>
                        )}
                      </div>
                    );
                  })}
                </div>
              )}
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default SponsorPage;
