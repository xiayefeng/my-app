import React, {Component} from 'react'
import TemperatureInput from './TemperatureInput'
import {toCelsius, toFahrenheit, tryConvert} from '../utils/common'

function BoillingVerdict (props) {
  if(props.celsius >= 100) {
    return <p>The water would boil.</p>
  }
  return <p>The water would not boil.</p>
}

class Calculator extends Component{
  constructor(props){
    super(props)
    this.state = {temperature: '', scale: 'c'}
    this.changeCelsiuInput = this.changeCelsiuInput.bind(this)
    this.changeFahrenheitInput = this.changeFahrenheitInput.bind(this)
  }
  
  changeCelsiuInput(val) {
    this.setState({
      temperature: val,
      scale: 'c'
    })
  }

  changeFahrenheitInput(val){
    this.setState({
      temperature: val,
      scale: 'f'
    })
  }

  render () {
    const scale = this.state.scale
    const temperature = this.state.temperature
    const celsius = scale === 'f' ? tryConvert(temperature, toCelsius) : temperature
    const fahrenheit = scale === 'c' ? tryConvert(temperature, toFahrenheit) : temperature

    return (
     <div>
       <TemperatureInput scale="c" onTemperatureChange={this.changeCelsiuInput} temperature={celsius} />
       <TemperatureInput scale="f" onTemperatureChange={this.changeFahrenheitInput} temperature={fahrenheit} />
       <BoillingVerdict 
         celsius={parseFloat(celsius)}
       />
     </div>
    )
  }
}

export default Calculator