import { computed, ref } from "vue";
import moment from "moment-jalaali";
import IMask from 'imask';

const useJalaliInputMask = () => {
  // const {el, masked, unmasked} = useIMask({
  //   mask: ,
  //   pattern: 'jYYYY/jMM/jDD',
  //   expose: true,
  //   lazy: false,
  //   format: date => moment(date).format('jYYYY/jMM/jDD'),
  //   parse: str => moment(str, 'jYYYY/jMM/jDD').toDate(),
  //   blocks: {
  //     jYYYY: {
  //       mask: IMask.MaskedRange,
  //       from: 1,
  //       to: props.lockFuture ? Number(moment().format('jYYYY')) : 9999
  //     },
  //     jMM: {
  //       mask: IMask.MaskedRange,
  //       from: 1,
  //       to: props.lockFuture ? Number(moment().format('jMM')) : 12
  //     },
  //     jDD: {
  //       mask: IMask.MaskedRange,
  //       from: 1,
  //       to: props.lockFuture ? Number(moment().format('jDD')) : 31
  //     },
  //   }
  // }, {
  //   onComplete() {
  //   }
  // });

  return {
    el,
    masked,
    unmasked,
  }
}
export default useJalaliInputMask;
