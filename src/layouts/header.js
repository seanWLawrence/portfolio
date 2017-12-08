import React, { Component } from 'react'
import NAVIGATION_DATA from '../data/navigation'
import Link from 'gatsby-link'

class Header extends Component {
  state = {
    activePage: 'Contact'
  }

  componentDidMount() {
    this.setState({
      activePage: window.location.pathname
    })
  }

  handleClick(e) {
    this.setState({
      activePage: e.target.pathname
    })
  }

  render() {
    return (
      <nav id='site_navigation'>
        <ul>
          {
            NAVIGATION_DATA.map(page => {
              const { title, url } = page;
              return (
                <li
                  key={title}
                >
                  <Link
                    to={url}
                    onClick={this.handleClick.bind(this)}
                    className={this.state.activePage === url ? 'active' : null}
                  >
                    {title}
                  </Link>
                </li>
              )
            })
          }
        </ul>
      </nav>
    )
  }
}

export default Header