import PropTypes from 'prop-types';
import { Input } from './styled'

const SelectMenu = ({onChange, isInvalid, value}) => {
  return (
    <Input
      onChange={e => onChange(e.target.value)}
      isInvalid={isInvalid}
      defaultValue=""
      value={value}
    />
  )
}

export default SelectMenu

SelectMenu.propTypes = {
  onChange: PropTypes.func.isRequired,
  isInvalid: PropTypes.bool,
  value: PropTypes.string,
}