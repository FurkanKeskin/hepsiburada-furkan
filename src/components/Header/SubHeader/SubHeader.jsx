import React, { useContext } from 'react'
import { ProductListContext } from '../../../context/Context'
import Sort from './Sort/Sort'
import './SubHeader.scss'


function SubHeaderTitle() {
  const { search } = useContext(ProductListContext);
  return (
    <>
       <div className="subheader-title">Cep telefonları</div>
       <div className="subheader-searchresults">
       {search.length > 2 && (
            <h4 className="product-search">
              Aranan kelime:<span className="product-answer">{search}</span>
            </h4>
          )}
        </div>
    </>
  );
}

function SubheaderWrapper(props) {
  return (
    <div className="subheader">
      <div className="subheader-left">
        {props.left}
      </div>
      <div className="subheader-right">
        {props.right}
      </div>
    </div>
  );
}

const SubHeader = () => {
  return <SubheaderWrapper left={< SubHeaderTitle />} right={< Sort />} />
}

export default SubHeader