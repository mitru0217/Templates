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
} from './PaymentForm.styled';

import { CardNumberMask } from '../utils/utils';

const PaymentForm = () => {
  const [isFront, setIsFront] = useState(true);
  const [cardNumber, setCardNumber] = useState('');
  const [name, setName] = useState('');
  const [expiration, setExpiration] = useState('');
  const [securityCode, setSecurityCode] = useState('');
  const [cardType, setCardType] = useState(null);

  const toggleCard = () => {
    setIsFront(!isFront);
  };

  return (
    <>
      <Container>
        <Title>Payment Information</Title>
        <CreditCard isFlipped={!isFront} onClick={toggleCard}>
          {isFront ? (
            <Front>
              <Up>
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
              <Down>
                <Wave xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
                  <path
                    fill="#616161"
                    fillOpacity="1"
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
            <Back>
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
              }}
            />
          </FieldContainer>
        </FormContainer>
      </Container>
    </>
  );
};

export default PaymentForm;
