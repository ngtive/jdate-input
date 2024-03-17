import moment from "moment-jalaali";
import { IMask, useIMask } from 'vue-imask'
const useJalaliInputMask = () => {
  const {el, masked, unmasked} = useIMask({
    mask: IMask.MaskedDate,
    pattern: 'jYYYY/jMM/jDD',
    expose: true,
    lazy: false,
    parse: str => moment(str, 'jYYYY/jMM/jDD').toDate(),
    blocks: {
      jYYYY: {
        mask: IMask.MaskedNumber,
      },
      jMM: {
        mask: IMask.MaskedNumber,
      },
      jDD: {
        mask: IMask.MaskedNumber,
      },
    }
  });

  return {
    el,
    masked,
    unmasked,
  }
}
export default useJalaliInputMask;
