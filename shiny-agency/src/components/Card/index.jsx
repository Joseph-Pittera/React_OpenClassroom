import PropTypes from 'prop-types';
import DefaultPicture from '../../assets/profile.png';
import styled from 'styled-components';
import colors from '../../utils/style/colors';

const CardLabel = styled.span`
    color: #5843e4;
    font-size: 20px;
    padding: 12px 16px;
`;

const CardImage = styled.img`
    height: 100px;
    width: 100px;
    border-radius: 50%;
    display: block;
    margin: auto;
`;

const CardName = styled.span`
    font-size: 20px;
    font-weight: 600;
    text-align: center;
`;

const CardWrapper = styled.div`
    display: flex;
    flex-direction: column;
    padding: 15px;
    background-color: ${colors.backgroundLight};
    border-radius: 30px;
    width: 250px;
    transition: 200ms;
    &:hover {
        cursor: pointer;
        box-shadow: 2px 2px 10px #b8b8bd;
    }
`;

function Card({ label, title, picture }) {
    return (
        <CardWrapper>
            <CardLabel>{label}</CardLabel>
            <CardImage src={picture} alt="freelance" />
            <CardName>{title}</CardName>
        </CardWrapper>
    );
}

Card.propTypes = {
    label: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    picture: PropTypes.string.isRequired,
};

Card.defaultProps = {
    label: '',
    title: '',
    picture: DefaultPicture,
};

export default Card;
