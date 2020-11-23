import React, { Fragment, useState, useEffect } from "react";
import BinaryTree from "family-binary-tree";

const Arbol = () => {
  
  const [data, guardarData] = useState([
    {
      id: 1,
      username: "Usuario 1",
      left_child_id: 2,
      right_child_id: 3,
      image: "https://i.imgur.com/yzUDPMJ.png"
    }
  ]);

  const consultarAPI = async () => {
    const api = await fetch('http://localhost/multinivel/index.php?action=getArbol&id=1');
    const data = await api.json();
    console.log(data);
    guardarData(data);
  }
  
  useEffect( () => {
    consultarAPI();
  }, []); 

  return(
  <Fragment>
      <BinaryTree
          onClick={consultarAPI}
          allUsers={data}
          rootUser={data[0]}
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
  </Fragment>)
    
}

export default Arbol;