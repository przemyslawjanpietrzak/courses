import React, { PureComponent } from 'react';
import styled from 'styled-components';

const Text = styled.div`
  color: red;
  &:hover {
    color: green;
   }
`

export class Hello extends PureComponent<{ name: string }> {
    static defaultProps = {
        name: 'John Doe',
    };

    render() {
        return <Text className='hello'>
            <div className='name'>{this.props.name}</div>
        </Text>
    }

}
