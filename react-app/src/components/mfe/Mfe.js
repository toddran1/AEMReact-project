/*
    Mfe.js

    Maps to wknd-events/components/content/formExample
*/

import React, {Component} from 'react';
import {MapTo} from '@adobe/cq-react-editable-components';
require('./Mfe.scss');

/**
 * Default Edit configuration for the formExample component that interact with the Core Text component and sub-types
 *
 * @type EditConfig
 **/
const MfeEditConfig = {

    emptyLabel: 'Mfe',

    isEmpty: function(props) {
        return !props || !props.text || props.text.trim().length < 1;
    }
};


/**
 * FormExample React component
 */
export default class Mfe extends Component {

    render() {
        // let innercontent = this.props.richText ? this.richTextContent : this.textContent;
        return (
            <div className="Mfe">
                
                <div className="MfeColor">
                    <form>
                        <label>Username:
                            <input style={{"width" : "100%"}} type="text" name="Uname" value="this.props.text1"/>
                        </label>
                        
                        <label>Password:
                            <input style={{"width" : "100%"}} type="text" name="Pword" value="this.props.text2"/>
                        </label>
                        
                            <input type="submit" value="Submit"></input>
                    </form> 
                </div>

            </div>);
    }
}

MapTo('wknd-events/components/content/mfe')(Mfe, MfeEditConfig);