import React from 'react';
import { StyleSheet, css } from 'aphrodite';

class Tabs extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      activeTab: 0
    }
  }

  toggle (tab) {
    this.setState({activeTab: tab});
  }
  render () {
    const styles = StyleSheet.create({
      tabs: {
        padding: 20,
        marginTop: 40,
        maxWidth: 960,
        minHeight: 10,
        backgroundColor: '#fff',
        boxShadow: '0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24)'
      },
      tabList: {
        margin: 0,
        padding: 0,
        width: '100%',
        display: 'flex',
        justifyContent: 'center',
        flexDirection: 'row'
      },
      tabItem: {
        textAlign: 'center',
        display: 'inline-block',
        listStyle: 'none',
        minWidth: '100px',
      },
      activeTab: {
        textAlign: 'center',
        display: 'inline-block',
        listStyle: 'none',
        minWidth: '100px',
        borderBottom: `2px solid ${this.props.tabColor || '#5A9FD9'}`
      },
      tabText: {
        color: '#5A9FD9'
      },
      component: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        textAlign: 'center',
        paddingTop: 20
      }
    })
    const TabComponent = this.props.tabs[this.state.activeTab].component;
    return (
      <div className={`Tabs ${css(styles.tabs)}`}>
          <ul className={`${css(styles.tabList)}`}>
            {
              this.props.tabs.map((tab, key) => {
                return (
                  <li onClick={e => this.toggle(key)}
                    key={key}
                    className={(this.state.activeTab === key)
                      ? `${css(styles.activeTab)}`
                      : `${css(styles.tabItem)}`
                    }
                  >
                    <p className={`${css(styles.tabText)}`}>{tab.title}</p>
                  </li>
                )
              })
            }
          </ul>
          <div className={css(styles.component)}>
            {TabComponent}
          </div>

      </div>
    );
  }
}

Tabs.propTypes = {
  tabColor: React.PropTypes.string,
  tabs: React.PropTypes.arrayOf(React.PropTypes.shape({
    title: React.PropTypes.string,
    component: React.PropTypes.element
  }))
};

export default Tabs;
