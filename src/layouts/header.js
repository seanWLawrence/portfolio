import React, { Component } from 'react'
import NAVIGATION from '../data/NAVIGATION'
import Link from 'gatsby-link'
import Logo from '../img/logo.png'

const NavListItem = props => (
  <li>
    <Link
      to={props.url}
      onClick={props.click}
      className={props.className}
    >
      {props.title}
    </Link>
  </li>
)

const NestedNavListItem = props => (
  <li
    className='nested_header'
    onClick={props.nestedClick}
  >
    <span className={props.className}>
      {props.title}
    </span>
    <ul
      className={props.nestedClass}
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
                onClick={props.click}
                activeStyle={{}}
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
    activePage: 'Contact',
    nestedMenuShown: false,
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

  collapseMenu() {
    this.setState({
      nestedMenuShown: !this.state.nestedMenuShown
    })
  }

  render() {
    console.log(this.state.activePage)
    return (
      <nav id='site_navigation'>
        <ul className='nav_menu'>
          {
            NAVIGATION.map(page => {
              const { title, url } = page;
              if (title === 'logo') {
                return (
                  <li key='contact'>
                    <Link to='/' style={{ display: 'flex' }}>
                      <img
                        src={Logo}
                        style={{ maxHeight: '30px' }}
                      />
                    </Link>
                  </li>
                )
              } else if (title === 'Work') {
                return (
                  <NestedNavListItem
                    key={title}
                    submenu={NAVIGATION[3].submenu}
                    title='Work'
                    click={this.handleClick.bind(this)}
                    nestedClick={this.collapseMenu.bind(this)}
                    className={this.state.activePage === '/services' || '/experience' ? 'active' : null}
                    classNameServices={this.state.activePage === '/services' ? 'active' : null}
                    classNameExperience={this.state.activePage === '/experience' ? 'active' : null}
                    nestedClass={this.state.nestedMenuShown === false ? 'nested_menu_hidden' : 'nested_menu_shown'}
                  />
                )
              }
              return (
                <NavListItem
                  key={title}
                  title={title}
                  url={url}
                  click={this.handleClick.bind(this)}
                  className={this.state.activePage === url ? 'active' : null}
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