import { useParams, Link } from 'react-router-dom';

export default function Survey() {
    const { questionNumber } = useParams();
    return (
        <div>
            <h1 style={{ margin: '1rem' }}>Questionnaire 🧮 </h1>
            <h2 style={{ margin: '1rem' }}>Question {questionNumber}</h2>
            <p>
                <Link
                    to={`/survey/${+questionNumber - 1}`}
                    style={{ margin: '1rem' }}
                >
                    {+questionNumber > 1 && 'Précédent'}
                </Link>
                {+questionNumber < 10 ? (
                    <Link to={`/survey/${+questionNumber + 1}`}>Suivant</Link>
                ) : (
                    <Link to={`/results`}> Résultats</Link>
                )}
            </p>
        </div>
    );
}
