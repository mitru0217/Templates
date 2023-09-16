export const CardNumberMask = [
  {
    mask: '0000 0000 0000 0000',
    regex: '^(5[1-5]\\d{0,2}|22[2-9]\\d{0,1}|2[3-7]\\d{0,2})\\d{0,12}',
    cardtype: 'mastercard',
    example: '5375 8282 8282 8210',
  },
  {
    mask: '0000 0000 0000 0000',
    regex: '^(?:5[0678]\\d{0,2}|6304|67\\d{0,2})\\d{0,12}',
    cardtype: 'maestro',
    example: '6759 6498 2643 8453',
  },
  {
    mask: '0000 0000 0000 0000',
    regex: '^4\\d{0,15}',
    cardtype: 'visa',
    example: '4149 6498 2643 8453',
  },
];
