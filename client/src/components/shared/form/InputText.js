import moment from 'moment';

const InputText = ({ value = null, placeholder = 'Pick your date' }) => {
  return value ? (
    <span className='pr-4'>{moment(value).format('LL')}</span>
  ) : (
    <span className='pr-4'>{placeholder}</span>
  );
};

export default InputText;
