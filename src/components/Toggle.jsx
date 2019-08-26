import React from 'react'

class Toggle extends React.Component{
  constructor(props){
    super(props)
    this.state = {isToggleOn: true}
    this.handleClick = this.handleClick.bind(this)
  }

  handleClick(e){
    console.log(e)
    this.setState(state => ({
      isToggleOn: !state.isToggleOn
    }))
  }

  render() {
    return (
      <button onClick={this.handleClick}>{this.state.isToggleOn? 'ON' : 'OFF'}</button>
    )
  }
}

export default Toggle
