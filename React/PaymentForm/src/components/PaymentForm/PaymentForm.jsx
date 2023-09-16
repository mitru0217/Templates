import { useState } from 'react';
import {
  Title,
  Container,
  CreditCard,
  Front,
  Chip,
  Up,
  Down,
  Wave,
  CardNumber,
  NumberText,
  NameText,
  Name,
  Expiration,
  ExpirationDate,
  Back,
  Strip,
  Wrapper,
  WrapperName,
  BackName,
  CodeWrapper,
  Cvv,
  FormContainer,
  FieldContainer,
  Label,
  Input,
  CardIcon,
  RandomButton,
} from './PaymentForm.styled';

import { CardNumberMask } from '../utils/utils';

const PaymentForm = () => {
  const [isFront, setIsFront] = useState(true);
  const [cardNumber, setCardNumber] = useState('');
  const [name, setName] = useState('');
  const [expiration, setExpiration] = useState('');
  const [securityCode, setSecurityCode] = useState('');
  const [cardType, setCardType] = useState(null);

  let bgColorUp = '#bdbdbd';
  let bgColorDown = '#616161';
  let filling = '#616161';

  switch (cardType) {
    case 'mastercard':
      bgColorUp = '#03A9F4';
      bgColorDown = '#0288D1';
      filling = '#0288D1';
      break;
    case 'visa':
      bgColorUp = '#D4E157';
      bgColorDown = '#AFB42B';
      filling = '#AFB42B';
      break;
    case 'maestro':
      bgColorUp = '#FFEB3B';
      bgColorDown = '#F9A825';
      filling = '#F9A825';
      break;
  }

  const toggleCard = () => {
    setIsFront(!isFront);
  };
  const toggleCardSide = code => {
    if (code.trim() !== '') {
      setIsFront(false); // Переворачиваем карту на "заднюю" сторону
    } else {
      setIsFront(true); // Возвращаем карту на "лицевую" сторону
    }
  };

  const getRandomCardData = () => {
    const randomIndex = Math.floor(Math.random() * CardNumberMask.length);
    return CardNumberMask[randomIndex];
  };
  const formatCardNumber = cardNumber => {
    const formatted = cardNumber.replace(/\D/g, '').slice(0, 16);
    return formatted;
  };

  const handleRandomButtonClick = () => {
    const randomCardData = getRandomCardData();
    setCardType(randomCardData.cardtype);
    setCardNumber(formatCardNumber(randomCardData.example));
  };

  return (
    <>
      <Container>
        <Title>Payment Information</Title>
        <CreditCard isFlipped={!isFront} onClick={toggleCard}>
          {isFront ? (
            <Front>
              <Up style={{ backgroundColor: bgColorUp }}>
                <Chip />
                {cardType && (
                  <CardIcon
                    src={`../../assets/${cardType}.svg`}
                    alt={cardType}
                    width="60"
                    height="40"
                  />
                )}
              </Up>
              <Down style={{ backgroundColor: bgColorDown }}>
                <Wave xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
                  <path
                    style={{ fill: filling }}
                    d="M0,32L60,37.3C120,43,240,53,360,74.7C480,96,600,128,720,144C840,160,960,160,1080,154.7C1200,149,1320,139,1380,133.3L1440,128L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"
                  ></path>
                </Wave>
                <NumberText>card number</NumberText>
                <CardNumber>
                  {cardNumber.replace(
                    /(.{4})/g,
                    '$1 '
                  ) /* Разбиваем номер карты на блоки по 4 цифры с пробелами */ ||
                    'xxxx xxxx xxxx xxxx'}
                </CardNumber>
                <NameText>cardholder name</NameText>
                <Name>{name || 'Your name'}</Name>
                <Expiration>expiration</Expiration>
                <ExpirationDate>{expiration || 'month/year'}</ExpirationDate>
              </Down>
            </Front>
          ) : null}

          {isFront ? null : (
            <Back style={{ backgroundColor: bgColorDown }}>
              <Strip />
              <Wrapper>
                <WrapperName>
                  <BackName>{name || 'Your Name'}</BackName>``
                </WrapperName>
                <CodeWrapper>
                  <Cvv>{securityCode || 'CVV'}</Cvv>
                </CodeWrapper>
              </Wrapper>
            </Back>
          )}
        </CreditCard>
        <RandomButton id="random" onClick={handleRandomButtonClick}>
          Generate Random
        </RandomButton>
        <FormContainer>
          <FieldContainer>
            <Label htmlFor="name">Name</Label>
            <Input
              id="name"
              maxLength="20"
              type="text"
              value={name}
              onChange={e => setName(e.target.value)}
            />
          </FieldContainer>
          <FieldContainer>
            <Label htmlFor="cardnumber">Card Number</Label>
            <Input
              id="cardnumber"
              type="text"
              value={cardNumber}
              onChange={e => {
                const inputVal = e.target.value;
                const formattedVal = inputVal
                  .replace(/\D/g, '') // Убираем все не-цифры из значения
                  .slice(0, 16); // Обрезаем до 16 символов (максимальная длина номера карты)
                setCardNumber(formattedVal);
                for (const card of CardNumberMask) {
                  const regex = new RegExp(card.regex);
                  if (regex.test(inputVal)) {
                    setCardType(card.cardtype);
                    return;
                  }
                }
                setCardType(null);
              }}
            />
          </FieldContainer>
          <FieldContainer>
            <Label htmlFor="expirationdate">Expiration (mm/yy)</Label>
            <Input
              id="expirationdate"
              value={expiration}
              onChange={e => {
                const inputVal = e.target.value;
                const formattedVal = inputVal
                  .replace(/\D/g, '')
                  .slice(0, 4)
                  .replace(/(\d{2})(\d{2})/, '$1/$2'); // Разбиваем дату на месяц и год
                setExpiration(formattedVal);
              }}
              type="text"
            />
          </FieldContainer>
          <FieldContainer>
            <Label htmlFor="securitycode">Security Code</Label>

            <Input
              id="securitycode"
              type="text"
              value={securityCode}
              onChange={e => {
                const inputVal = e.target.value;
                const formattedVal = inputVal.replace(/\D/g, '').slice(0, 3);
                setSecurityCode(formattedVal);
                toggleCardSide(formattedVal);
              }}
            />
          </FieldContainer>
        </FormContainer>
      </Container>
    </>
  );
};

export default PaymentForm;
