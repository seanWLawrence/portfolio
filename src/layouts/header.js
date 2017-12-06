import React, { Component } from 'react'
import NAVIGATION_DATA from '../data/navigation'
import Link from 'gatsby-link'

class Header extends Component {
  constructor(props) {
    super(props)
    this.state = {
      activePage: 'Contact'
    }
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
            NAVIGATION_DATA.map(page =>
              <li
                key={page.title}
              >
                <Link
                  to={page.url}
                  onClick={this.handleClick.bind(this)}
                  className={this.state.activePage === page.url ? 'active' : null}
                >
                  {page.title}
                </Link>
              </li>
            )
          }
        </ul>
      </nav>
    )
  }
}

export default Header