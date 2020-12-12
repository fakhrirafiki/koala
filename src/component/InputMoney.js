import React from 'react';
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

export default function InputAdornments() {
    const classes = useStyles();
    const [values, setValues] = React.useState({
        amount: '',
        password: '',
        weight: '',
        weightRange: '',
        showPassword: false,
    });

    const handleChange = (prop) => (event) => {
        setValues({ ...values, [prop]: event.target.value });
    };

    // const handleClickShowPassword = () => {
    //     setValues({ ...values, showPassword: !values.showPassword });
    // };

    // const handleMouseDownPassword = (event) => {
    //     event.preventDefault();
    // };

    return (
        <div className={classes.root}>
            <FormControl fullWidth className={classes.margin} variant="outlined">
                <InputLabel htmlFor="outlined-adornment-amount">Amount</InputLabel>
                <OutlinedInput
                    id="outlined-adornment-amount"
                    value={values.amount}
                    onChange={handleChange('amount')}
                    startAdornment={<InputAdornment position="start">Rp</InputAdornment>}
                    labelWidth={60}
                />
            </FormControl>
        </div>
    );
}
