import moment from "moment";

const InputText = ({ value = null }) => {
  return value ? (
    <span className='pr-4'>{moment(value).format('LL')}</span>
  ) : (
    <span className='pr-4'>Pick your date</span>
  );
};

export default InputText;
