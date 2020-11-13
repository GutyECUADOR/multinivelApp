import React, { Component, Fragment } from "react";

import BinaryTree from "family-binary-tree";

const data = [
  {
    id: 1,
    left_child_id: 2,
    right_child_id: 3,
    username: "Usuario 1",
    image: "https://i.imgur.com/yzUDPMJ.png"
  },
  {
    id: 2,
    left_child_id: 4,
    right_child_id: 5,
    username: "User 2",
    image: "https://i.imgur.com/yzUDPMJ.png"
  },
  {
    id: 3,
    left_child_id: 6,
    right_child_id: 7,
    username: "User 3",
    image: "https://i.imgur.com/yzUDPMJ.png"
  },
  {
    id: 4,
    left_child_id: 7,
    right_child_id: 8,
    username: "User 4",
    image: "https://i.imgur.com/yzUDPMJ.png"
  },
  {
    id: 5,
    left_child_id: 9,
    right_child_id: 10,
    username: "Capvan",
    image: "https://i.imgur.com/yzUDPMJ.png"
  },
  {
    id: 6,
    left_child_id: null,
    right_child_id: null,
    username: "User 6",
    image: "https://i.imgur.com/yzUDPMJ.png"
  },
  {
    id: 7,
    left_child_id: 9,
    right_child_id: null,
    username: "User 7",
    image: "https://i.imgur.com/yzUDPMJ.png"
  },
  {
    id: 8,
    left_child_id: null,
    right_child_id: null,
    username: "User 8",
    image: "https://i.imgur.com/yzUDPMJ.png"
  },
  {
    id: 9,
    left_child_id: null,
    right_child_id: null,
    username: "User 9",
    image: "https://i.imgur.com/yzUDPMJ.png"
  },
  {
    id: 10,
    left_child_id: null,
    right_child_id: null,
    username: "User 10",
    image: "https://i.imgur.com/yzUDPMJ.png"
  },
  {
    id: 11,
    left_child_id: 12,
    right_child_id: 13,
    username: "User 11",
    image: "https://i.imgur.com/yzUDPMJ.png"
  }
];
class Arbol extends Component {
    render() {
        return(
        <Fragment>
            <BinaryTree
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
}

export default Arbol;