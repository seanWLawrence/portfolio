import React, { Component } from 'react'
import NAVIGATION from '../data/NAVIGATION'
import Link from 'gatsby-link'
import Logo from '../img/logo.png'

const NavListItem = props => (
  <li>
    <Link
      to={props.url}
      activeClassName="active"
    >
      {props.title}
    </Link>
  </li>
)

const NestedNavListItem = props => (
  <li
    className='submenu_header'
    onClick={props.click}
  >
    <span>
      {props.title}
      <span className={`submenu_arrow_${props.submenuArrow}`} />
    </span>

    <ul
      className={props.className}
    >
      {
        (props.submenu).map(page => {
          const { title, url } = page;
          return (
            <li
              key={title}
            >
              <Link
                to={url}
                activeClassName="active"
              >
                {title}
              </Link>
            </li>
          )
        })
      }
    </ul>
  </li>
)

class Header extends Component {
  state = {
    submenuShown: false,
  }

  toggleSubmenu() {
    this.setState({
      submenuShown: !this.state.submenuShown
    })
  }

  render() {
    return (
      <nav id='site_navigation'>
        <ul className='nav_menu'>
          {
            NAVIGATION.map(page => {
              const { title, url, submenu } = page;
              if (title === 'logo') {
                return (
                  <li key='contact'>
                    <Link
                      exact
                      to='/'
                      activeStyle={{ border: 0 }}
                      style={{ display: 'flex' }}
                    >
                      <img
                        src={Logo}
                        style={{ maxHeight: '30px' }}
                      />
                    </Link>
                  </li>
                )
              } else if (submenu) {
                return (
                  <NestedNavListItem
                    key={title}
                    submenu={submenu}
                    title={title}
                    click={this.toggleSubmenu.bind(this)}
                    className={this.state.submenuShown === false ? 'submenu_hidden' : 'submenu_shown'}
                    submenuArrow={this.state.submenuShown === false ? 'closed' : 'open'}
                  />
                )
              }
              return (
                <NavListItem
                  key={title}
                  title={title}
                  url={url}
                />
              )
            })
          }
        </ul>
      </nav>
    )
  }
}

export default Header