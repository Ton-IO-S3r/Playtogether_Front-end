import React from 'react'
import { green } from '@material-ui/core/colors';
import Switch from '@material-ui/core/Switch';
import { withStyles } from '@material-ui/core';

const GreenSwitch = withStyles((theme)=>({
  root: {
    width: 28,
    height: 16,
    padding: 0,
    display: 'flex',
  },
  switchBase: {
    padding: 2,
    color: green[300],
    '&$checked': {
      transform: 'translateX(12px)',
      color: green[500],
    },
    '&$checked + $track': {
      backgroundColor: green[500],
    },
  },
  thumb: {
    width: 12,
    height: 12,
    boxShadow: 'none',
  },
  checked: {},
  track: {
    border: `1px solid ${theme.palette.grey[500]}`,
    borderRadius: 16 / 2,
    opacity: 1,
    backgroundColor: theme.palette.common.white,
  },
}))(Switch);

const ToogleBtn = () => {
  const [state, setState] = React.useState({
    checkedA: false,
  });
  const handleChange = (event) => {
    setState({ ...state, [event.target.name]: event.target.checked });
  };
  return (
    
    <GreenSwitch checked={state.checkedA} onChange={handleChange} name="checkedA" />
    
  )
}

export default ToogleBtn
