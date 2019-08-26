import React from 'react'
import {BrowserRouter as Router, Route, Link} from 'react-router-dom'
import Page from '../components/page'
import Toggle from '../components/Toggle'
import List from '../components/List'

function Index() {
  return <h2>Home</h2>;
}

function About() {
  return (
    <h2>About</h2>
  );
}

function Users() {
  return <Page />;
}
class NameForm extends React.Component {
  constructor(props) {
    super(props)
    this.state = {value: ''}
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleChange(e) {
    this.setState({value: e.target.value})
  }

  handleSubmit(e) {
    console.log('提交的名字:' + this.state.value)
    e.preventDefault()
  }

  render() {
    return (
      <Router>
        <div>
          <nav>
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/about/">About</Link>
              </li>
              <li>
                <Link to="/users/">Users</Link>
              </li>
            </ul>
          </nav>
          <Route path='/' exact component={Index} />
          <Route path='/about/' component={About} />
          <Route path='/users/' component={Users} />
          <form onSubmit={this.handleSubmit}
        >
          <label>
            名字：
            <input type="text" value={this.state.value} onChange={this.handleChange} />
          </label>
          <input type="submit" value="提交" />
        </form>
        <Toggle />
        <List numbers={[1, 2, 3, 4, 5]} />
        </div>
        
      </Router>
    )
  }
}

export default NameForm
