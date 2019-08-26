import React, { PureComponent } from 'react';

interface Props {
    onClick: () => void;
    text: string;
}


export class Button extends PureComponent<Props> {
    render() {
        const { onClick, text } = this.props;

        return <div className='pre-button'>
            <button onClick={onClick}>{text}</button>
        </div>;
    }
}
