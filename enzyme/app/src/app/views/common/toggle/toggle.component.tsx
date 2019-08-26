import React, { Component } from 'react'

interface Props {
    initialToggledOn: boolean;
    onToggle: (arg: boolean) => void;
}

interface State {
    toggledOn: boolean,
}

class Toggle extends Component<Props, State> {

    state = {
        toggledOn: this.props.initialToggledOn || false,
    }
    handleToggleClick = () => {
        const toggledOn = !this.state.toggledOn
        this.props.onToggle(toggledOn)
        this.setState({ toggledOn })
    }

    render() {
        const { children } = this.props
        const { toggledOn } = this.state

        const onOff = toggledOn ? 'on' : 'off'
        const toggledClassName = `toggle--${onOff}`
        return (
            <div className={`toggle ${toggledClassName}`}>
                <button onClick={this.handleToggleClick}>
                    {children}
                </button>
            </div>
        )
    }
}
