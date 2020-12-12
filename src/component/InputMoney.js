import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import OutlinedInput from '@material-ui/core/OutlinedInput';
import InputLabel from '@material-ui/core/InputLabel';
import InputAdornment from '@material-ui/core/InputAdornment';
import FormControl from '@material-ui/core/FormControl';

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        flexWrap: 'wrap',
        width: '50%',
        height: '100px',
        maxWidth: '600px',
        margin: 'auto',
        transform: 'scale(1.4)'
    },
    margin: {
        margin: theme.spacing(1),
    },
    withoutLabel: {
        marginTop: theme.spacing(3),
    },
    textField: {
        width: '25ch',
    },
}));

export default function InputAdornments(props) {
    const classes = useStyles();
    const [value, setValue] = useState(0);
    const [error, setError] = useState('')

    const handleChange = (event) => {
        setValue(0);
        if (event.target.value <= 99) return setError('minimal amount is Rp99')
        if (event.target.value >= 1000000000) return setError('maximal amount is Rp1.000.000.000')
        setError('')
        setValue(event.target.value);
    };

    useEffect(() => {
        props.handleInput(value)
        setError('')
        // console.log(value)
    }, [value])


    return (
        <div className={classes.root}>
            <FormControl fullWidth className={classes.margin} variant="outlined">
                <InputLabel htmlFor="outlined-adornment-amount">Amount</InputLabel>
                <OutlinedInput
                    id="outlined-adornment-amount"
                    onChange={handleChange}
                    startAdornment={<InputAdornment position="start">Rp</InputAdornment>}
                    labelWidth={60}
                    type="number"
                    error={error ? true : false}
                />
                <p>{error ? error : ''}</p>
            </FormControl>
        </div>
    );
}
