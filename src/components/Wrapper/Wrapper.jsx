import React from 'react'
import Header from '../Header/Header';
import CardContainer from '../CardContainer/CardContainer';
import SideBar from '../SideBar/SideBar';
import Paginator from './Paginator/Paginator';
import './Wrapper.scss';

function SplitPane(props) {
  return (
    <div className="splitPane">
      <div className="splitPane-left">
        {props.left}
      </div>
      <div className="splitPane-right">
        {props.right}
      </div>
    </div>
  );
}

function Wrapper() {
  return (
      <div className="wrapper" data-testid="wrapper">
      <Header />
      <SplitPane
      left={
        <SideBar />
      }
      right={<><CardContainer /><Paginator /></>
       
      } />
      </div>
  )
}

export default Wrapper
