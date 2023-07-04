import { useContext } from "react"
import { CalcContext } from "../context/CalcContext"

const Screen = () => {
  const { calc } = useContext(CalcContext);

  const scaledTextStyle = {
    fontSize: '1.2rem',
    /* oder */
    transform: 'scale(1.2)',
  };

  return (
    <span style={scaledTextStyle}>{calc.num ? calc.num : calc.res}</span>
  )
}

export default Screen
