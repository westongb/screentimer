import React, {useState} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';
// import Checkbox from '@material-ui/core/Checkbox';
// import FormGroup from '@material-ui/core/FormGroup';
// import FormControlLabel from '@material-ui/core/FormControlLabel';
// import FormControl from '@material-ui/core/FormControl';
// import FormLabel from '@material-ui/core/FormLabel';
import { format, formatDistance, formatRelative, subDays } from 'date-fns'
import DateFnsUtils from '@date-io/date-fns';
import Grid from '@material-ui/core/Grid';
import {
  MuiPickersUtilsProvider,
  KeyboardTimePicker,
  KeyboardDatePicker,
} from '@material-ui/pickers';




const useStyles = makeStyles((theme) => ({
  modal: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  paper: {
    backgroundColor: theme.palette.background.paper,
    border: '2px solid #000',
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
}));

export default function KidsPopup() {
  const classes = useStyles();
  const [selectedDate, setSelectedDate] = React.useState(new Date('2014-08-18'));
  const [open, setOpen] = React.useState(false);
  const [firstName, setFirstName] = useState();
  const [lastName, setLastName] = useState();
  const [userName, setUserName] = useState();
  const [password, setPassword] = useState();






  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };


  const handleDateChange = (date) => {
    setSelectedDate(date);
  };


  return (
    <div>
      <button type="button" onClick={handleOpen}>
        react-transition-group
      </button>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        className={classes.modal}
        open={open}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={open}>
          <div className={classes.paper}>
            <h2 id="transition-modal-title">Add Task</h2>
            <form>
                <br></br>
                <label >First Name</label>
                <input value={firstName} onChange={(e)=> setFirstName(e.target.value)}></input>
                <br></br>
                <label  value={lastName} onChange={(e)=> setLastName(e.target.value)}>Last Name</label>
                <input></input>
                <br></br>
                <label>Max Time</label>
                <input></input>
                <br></br>
                <label>User Name</label>
                <input value={userName} onChange={(e)=> setUserName(e.target.value)}></input>
                <br></br>
                <label>Password</label>
                <input value={password} onChange={(e)=> setPassword(e.target.value)}></input>
                <br></br>
                <MuiPickersUtilsProvider utils={DateFnsUtils}>
        <Grid container justify="space-around">
        <KeyboardDatePicker
          disableToolbar
          variant="inline"
          format="MM/dd/yyyy"
          margin="normal"
          id="date-picker-inline"
          label="Birth Date"
          value={selectedDate}
          onChange={handleDateChange}
          KeyboardButtonProps={{
            'aria-label': 'change date',
          }}
        />
         </Grid>
        </MuiPickersUtilsProvider>
          <button type="submit">Submit</button>
            </form>
          </div>
        </Fade>
      </Modal>
    </div>
  );
}