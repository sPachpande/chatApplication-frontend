import React from 'react';
import {CssBaseline, ThemeProvider} from '@material-ui/core';
import Theme from './Theme';

export default () => {
    return (
        <ThemeProvider theme={Theme}>
            <div>
                App  
            </div>
        </ThemeProvider>
    );
};
