import useCrew from './hooks/useCrew';
import Link from 'next/link';
import { Helmet } from 'react-helmet';

const Home = () => {
    const [crewMembers, isLoading] = useCrew();

    return (
        <div className="crew-list">
            {isLoading ? (
                <p>Loading crew members...</p>
            ) : crewMembers.length > 0 ? (
                <div className="crew-member">
                    {/* Helmet for setting metadata */}
                    <Helmet>
                        <title>{crewMembers[0].name}</title>
                        <meta name="id" content={crewMembers[0].id} />
                        <meta name="agency" content={crewMembers[0].agency} />
                    </Helmet>

                    <img
                        src={crewMembers[0].image}
                        alt={crewMembers[0].name}
                        style={{ maxWidth: '100%', maxHeight: '300px', height: 'auto' }}
                    />
                    <Link href={`/CrewMemberDetails/${crewMembers[0].id}`}>
                        <h2>{crewMembers[0].name}</h2>
                    </Link>
                    <h2>{crewMembers[0].id}</h2>
                    <p>{crewMembers[0].agency}</p>
                    <p>{crewMembers[0].wikipedia}</p>
                </div>
            ) : (
                <p>No crew members found.</p>
            )}
        </div>
    );
};

export default Home;
