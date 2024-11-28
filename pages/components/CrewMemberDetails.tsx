import React from 'react';
import useCrewDetail from '../hooks/useCrewDetail';
import { useRouter } from 'next/router';

const CrewMemberDetails = ({ crewMember }) => {
  const router = useRouter();
  const { id } = router.query;
  const [userCrew, isLoading] = useCrewDetail(id)
  return (
    <div className="crew-list">
      {isLoading ? (
        <p>Loading crew members...</p>
      ) : (
        userCrew.map((crewMember) => (
          <div className="crew-member" key={crewMember.id}>
            <img src={crewMember[0].image} alt={crewMember.name} />
            <h2>{crewMember[0].id}</h2>
            <p>{crewMember[0].agency}</p>
            <p>{crewMember[0].wikipedia}</p>
          </div>
        ))
      )}
    </div>
  );
};

export default CrewMemberDetails;