import React from 'react'
// import ReactDOM from 'react-dom'
import {ThemeContext, themes} from './context/theme-context'
// import {Page, Section} from './context/Page'
import ThemedButton from './context/theme-button'

// 一个使用 ThemedButton 的中间组件
function Toolbar(props) {
  return (
    <ThemedButton onClick={props.changeTheme}>
      Change Theme
    </ThemedButton>
  );
}

function Page(props){
  return (
  <div>
  </div>)
}

function Section(props) {
  return (
    <div></div>
  )
}

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      theme: themes.light,
    }

    this.toggleTheme = () => {
      this.setState(state => ({
        theme:
          state.theme === themes.dark
            ? themes.light
            : themes.dark,
      }))
    }
  }

  render() {
    // 在 ThemeProvider 内部的 ThemedButton 按钮组件使用 state 中的 theme 值，
    // 而外部的组件使用默认的 theme 值
    return (
      <Page>
        <ThemeContext.Provider value={this.state.theme}>
          <Toolbar changeTheme={this.toggleTheme} />
        </ThemeContext.Provider>
        <Section>
          <ThemedButton />
        </Section>
      </Page>
    )
  }
}

// ReactDOM.render(<App />, document.root);
export default App