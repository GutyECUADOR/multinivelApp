import React, { Fragment, useState, useEffect } from "react";
import BinaryTree from "family-binary-tree";

const Arbol = () => {
  
  const [usuarios, setUsuarios] = useState([]);

  const consultarAPI = async () => {
    fetch(`${process.env.REACT_APP_URL}/index.php?action=getArbol&id=1`)
    .then(response => response.json())
    .then(data => setUsuarios( data ));
  }
  
  useEffect( () => {
    consultarAPI();
  }, []); 

  return(
    <Fragment>
          { usuarios.length > 0 &&
          <BinaryTree
              allUsers={usuarios}
              rootUser={usuarios[0]}
              bgSideBar={'#333'}
              colorText={'#333'}
              colorSideBar={'#fff'}
              nameFake={'Sin Usuario'}  
              bgButton={'blue'}
              colorButton={'black'}
              disableNavigation
              disableSideBar
              maxDeep={4}
              /* renderDetail={user => {
              return null;
              }} */
          />
          }
          
    </Fragment>)
    
}

export default Arbol;