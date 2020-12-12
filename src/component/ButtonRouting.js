import React from 'react';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import { Link } from "react-router-dom"


const useStyles = makeStyles((theme) => ({
    button: {
        margin: theme.spacing(1),
        width: '200px',
        fontSize: '20px'
    },
}));

export default function IconLabelButtons() {
    const classes = useStyles();

    return (

        <div className="buttonRouting">
            <Link to="/">
                <Button
                    variant="contained"
                    color="#333"
                    size="large"
                    className={classes.button}
                >
                    Soal 1
            </Button>
            </Link>
            <Link to="/2">
                <Button
                    variant="contained"
                    color="#333"
                    size="large"
                    className={classes.button}
                >
                    Soal 2
            </Button>
            </Link>
        </div>
    )
}
