/*
    FormExample.js

    Maps to wknd-events/components/content/formExample
*/

import React, {Component} from 'react';
import {MapTo} from '@adobe/cq-react-editable-components';
require('./FormExample.scss');

/**
 * Default Edit configuration for the formExample component that interact with the Core Text component and sub-types
 *
 * @type EditConfig
 **/
const FormExampleEditConfig = {

    emptyLabel: 'FormExample',

    isEmpty: function(props) {
        return !props || !props.text || props.text.trim().length < 1;
    }
};


/**
 * FormExample React component
 */
export default class FormExample extends Component {
    componentWillMount(){console.log(this.props)}
    get content1() {
        return <input style={{"width" : "99%"}} type="text" name="Uname" value={this.props.text1}/>           
    }

    get content2() {
        return <input style={{"width" : "99%"}} type="text" name="Uname" value={this.props.text2}/>           
    }

    render() {
        // let innercontent = this.props.richText ? this.richTextContent : this.textContent;
        return (
            <div className="FormExample">
                
                <div className="ReactFormColor">
                    <form>
                        <label>Username:
                        {this.content1}
                        </label>
                        
                        <label>Password:
                        {this.content2}
                        </label>
                        
                            <input type="submit" value="Submit"></input>
                    </form> 
                </div>

            </div>);
    }
}

MapTo('wknd-events/components/content/formExample')(FormExample, FormExampleEditConfig);