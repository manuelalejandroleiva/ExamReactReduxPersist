import React, { ReactElement } from 'react';
import { Grid2 } from '@mui/material';
import classNames from 'classnames';
import useStyles from './ContainerSytle';
import { Grid } from '@material-ui/core';

export const SplitWrapper = (props: {
    rightContent: ReactElement;
}): ReactElement => {
    const styles = useStyles();
    const { rightContent } = props;

    return (
        <Grid2
            container
            direction="column"
            wrap="nowrap"
            style={{ height: '100vh' }} // Ensure full height for the container
        >
            {/* Top blue section */}
            <Grid
                item
                style={{ backgroundColor: '#3CB371', height: '100px', width: '100%' }} // Explicit height and full width
            />

            {/* Main content section */}
            <Grid
                item
                xs
                container
                justifyContent="center"
                alignItems="center"
                className={classNames(styles.container, styles.right)}
                style={{ flex: 1 }} // Fill remaining space
            >
                {rightContent}
            </Grid>
        </Grid2>
    );
};