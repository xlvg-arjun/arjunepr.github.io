import React from 'react';
import helpers from '../utils/scroll';

// import move from 'move-js';

const scroll = helpers.scroll;

class Nav extends React.Component {

  

  constructor(props){
    super(props);

    this.state = {
      currentArea: 'about',
      allowClick: true,
      areas: ['about', 'portfolio', 'contact'],
    }

    this.setAndScroll = this.setAndScroll.bind(this);
  }

  setAndScroll(area, event){

    this.setState(function(){
      return {
        currentArea: area,
        allowClick: false,
      }
    });

    scroll(area, {
      callback: () => this.setState(() => ({allowClick: true})),
      offset: -75
    });


  }

  render(){
    return <nav className="nav">
      <h3><span className="brand">Jun</span></h3>
      <ul>
        {
          this.state.areas.map(area => {
            
            const current = area === this.state.currentArea ? true : false;
            
            return (
            <li className={current ? "highlight" : null} key={area}><a href={"#" + area} onClick={(event) => this.state.allowClick? this.setAndScroll(area, event): null}>{area}</a></li>
          )})
        }
      </ul>
    </nav>
    
  }
}
  

export default Nav;