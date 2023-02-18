import { useContext } from 'react';
import { SurveyContext } from '../../utils/context';

function Results() {
    const { answers } = useContext(SurveyContext);

    return (
        <div>
            <h1> Page de résultats 🏠</h1>
            <ul>
                {Object.values(answers).map((answer, index) => (
                    <li key={`${answer.toString()}-${index}`}>
                        {answer.toString()}
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default Results;
