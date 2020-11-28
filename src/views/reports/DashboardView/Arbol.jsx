import React, { Fragment, useState, useEffect } from "react";
import BinaryTree from "family-binary-tree";
import useAuth from 'src/hooks/useAuth';
import NotArbolFound from './NotArbolFound';

const Arbol = () => {
  
  const { user } = useAuth();
  const [usuarios, setUsuarios] = useState([]);

  const consultarAPI = () => {
    fetch(`${process.env.REACT_APP_URL}/index.php?action=getArbol&id=${user.arbol}`)
    .then(response => response.json())
    .then(data => setUsuarios( data ));
  }
  
  useEffect( () => {
    consultarAPI();
  },[]); 

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

      { usuarios.length ==0 &&
        <>
        <NotArbolFound/>
        </>
        }
          
    </Fragment>)
    
}

export default Arbol;