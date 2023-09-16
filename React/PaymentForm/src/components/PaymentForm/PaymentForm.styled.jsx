import styled from 'styled-components';

export const Title = styled.h1`
  text-align: center;
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 1000px;
  margin: 0 auto;
  border: 1px solid black;
  padding: 20px;
`;
export const CreditCard = styled.div`
  width: 100%;
  max-width: 400px;
  margin-top: 2rem;
  margin-bottom: 2rem;
  transform-style: preserve-3d;
  transition: transform 0.5s;
  cursor: pointer;
  transform: ${props =>
    props.isFlipped ? 'rotateY(180deg)' : 'rotateY(0deg)'};
`;
export const CardInner = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  transition: transform 0.5s;
`;

export const Front = styled(CardInner)`
  position: relative;
  max-width: 400px;
  width: 100%;
  height: 250px;
  box-shadow: 1px 5px 6px 0px black;
  border-radius: 22px;
  color: #ffffff;
  transform: rotateY(0deg);
`;
export const Back = styled(CardInner)`
  position: relative;
  max-width: 400px;
  width: 100%;
  height: 250px;
  box-shadow: 1px 5px 6px 0px black;
  border-radius: 22px;
  color: #ffffff;
  background-color: #616161;
  transform: rotateY(180deg);
  padding-top: 3.5rem;
`;

export const Up = styled.div`
  width: 100;
  height: 50%;
  padding: 3rem;
  border-top-right-radius: 22px;
  border-top-left-radius: 22px;
  transition: background-color 0.5s;
`;
export const Down = styled.div`
  width: 100;
  height: 50%;
  padding-left: 3rem;
  padding-right: 3rem;
  border-bottom-right-radius: 22px;
  border-bottom-left-radius: 22px;
  transition: background-color 0.5s;
`;
export const Chip = styled.div`
  width: 5rem;
  height: 3.5rem;
  border: 1px solid black;
  border-radius: 10px;
  background-image: url('../../assets/CcIcons/vecteezy_credit-card-chip_11843770.svg');
  background-size: cover;
`;
export const Wave = styled.svg`
  position: absolute;
  left: 0;
  top: 30%;
  width: 100%;
  z-index: 2;
`;
export const NumberText = styled.span`
  position: absolute;
  font-weight: 500;
  font-size: 1.5rem;
  top: 40%;
  z-index: 4;
`;
export const NameText = styled.span`
  position: absolute;
  font-weight: 500;
  font-size: 1.5rem;
  top: 68%;
  z-index: 4;
`;
export const CardNumber = styled.span`
  position: absolute;
  z-index: 4;
  top: 48%;
  font-weight: 500;
  font-size: 3.75rem;
  z-index: 4;
`;
export const Name = styled.span`
  position: absolute;
  z-index: 4;
  top: 76%;
  font-weight: 500;
  font-size: 2.5rem;
  text-transform: uppercase;
  z-index: 4;
`;
export const Expiration = styled(NameText)`
  right: 10%;
`;
export const ExpirationDate = styled.span`
  position: absolute;
  z-index: 4;
  top: 76%;
  right: 10%;
  font-size: 2.5rem;
`;
export const Strip = styled.div`
  width: 100%;
  background-color: black;
  height: 4rem;
  margin-bottom: 4rem;
`;

export const Wrapper = styled.div`
  width: 80%;
  height: 4rem;
  margin: 0 auto;
  display: flex;
`;
export const WrapperName = styled.div`
  width: 80%;
  height: 4rem;
  padding-left: 1rem;
  padding-right: 1rem;
  background-color: #c0c0c0;
`;
export const BackName = styled.span`
  color: black;
  font-family: 'Rock Salt', cursive;
  font-size: 2rem;
`;
export const CodeWrapper = styled.div`
  width: 20%;
  padding: 1rem;
  text-align: center;
  background-color: #dcdcdc;
`;
export const Cvv = styled.span`
  font-size: 2rem;
  color: black;
`;

export const FormContainer = styled.div`
  display: grid;
  grid-column-gap: 1rem;
  grid-template-columns: auto auto;
  grid-template-rows: 8rem 8rem 8rem;
  max-width: 40rem;
  padding: 2rem;
  color: #707070;
`;
export const FieldContainer = styled.div`
  position: relative;
`;

export const Label = styled.div`
  padding-bottom: 0.5rem;
  font-size: 1.3rem;
`;
export const Input = styled.input`
  margin-top: 1rem;
  padding: 1rem;
  font-size: 1.6rem;
  width: 100%;
  border-radius: 3rem;
  border: 1px solid #dcdcdc;
`;
export const CardIcon = styled.img`
  width: 6rem;
  height: 4rem;
  position: absolute;
  right: 12%;
  top: 12%;

  z-index: 4;
  border: 1px solid black;
`;
export const RandomButton = styled.button`
  width: auto;

  padding: 10px;
  border: none;
  border-radius: 8px;
  background-color: #bdbdbd;
  color: #ffffff;
  &:hover,
  &:focus {
    transition: background-color 0.5s;
    background-color: #616161;
  }
`;
