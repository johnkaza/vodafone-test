import React, { Component } from 'react';
import styled from 'styled-components';

class ListDropdown extends Component {
  render() {
    const { list, onClick } = this.props;

    return (
      <ListWrapper>
        <List>
          {list &&
            list.map((val, key) => {
              return (
                <ListItem key={key} onClick={() => onClick(val)}>
                  {val.title}
                </ListItem>
              );
            })}
        </List>
      </ListWrapper>
    );
  }
}

const ListWrapper = styled.div`
  width: 100%;
  max-height: 200px;
  position: relative;
`;

const List = styled.ul`
  list-style-type: none;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  margin: 0;
  padding: 0;
`;

const ListItem = styled.li`
  cursor: pointer;
  padding: 10px;
`;

export default ListDropdown;
