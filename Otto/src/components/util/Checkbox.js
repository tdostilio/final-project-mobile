import React from 'react';
import { Checkbox } from 'react-native-elements';

class Checkbox extends Component {
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

export default  { Checkbox }