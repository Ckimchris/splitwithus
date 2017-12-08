import React, { Component } from 'react';
import SearchBar from 'material-ui-search-bar'

/**
 * The input is used to create the `dataSource`, so the input always matches three entries.
 */

export default class Password extends Component {
    render() {
        return (
            <SearchBar
                hintText="Password"
                onChange={() => console.log('onChange')}
                onRequestSearch={() => console.log('onRequestSearch')}
                style={{
                    margin: '0 auto',
                    maxWidth: 800
                }}
            />
        )
    }
}