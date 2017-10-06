import React from 'react';
import { CheckBox } from 'react-native-elements';
import prettyFormat from 'pretty-format';

class GlobalCheckbox extends React.Component {
    state = { 
        checked: false 
    };

    render() {
        return (
            <CheckBox
                title='Click Here'
                checked={this.state.checked}
                onPress={() => this.setState({
                    checked: !this.state.checked
                })}
            />
        );
    }
}

export default GlobalCheckbox;