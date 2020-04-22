import React from 'react';
import { Button, Table, TableHead, TableBody, TableRow, TableCell, Container, Paper, Menu, MenuItem } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { MoreVert } from '@material-ui/icons';

const useStyles = makeStyles({
    table: {
      minWidth: 450,
    },
  });


    const Import = (props) => {
    const classes = useStyles(); 
    const [anchorEl, setAnchorEl] = React.useState(null);
    const [MakeId, setMakeId] = React.useState(null);
    
    const handleClick = (event, makeId) => {
        setAnchorEl(event.currentTarget);
        setMakeId(makeId);
      };
    
    const handleClose = () => {
        setAnchorEl(null);
        props.deleteMake(MakeId)
      };

    // fill out this component
      
    return (
        <div>

        <Button variant="contained" color="primary" onClick={props.fetchMakes}>Import</Button>
        <Container component={Paper}>
      <Table className={classes.table} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell align="right">ID</TableCell>
            <TableCell align="right">Make</TableCell>
            <TableCell align="right">Actions</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {props.makes.map((make, index) => (
            <TableRow key={make.MakeId}>
              <TableCell align="right">{make.MakeId}</TableCell>
              <TableCell align="right">{make.MakeName}</TableCell>
              <TableCell align="right"><MoreVert onClick= {(event) => handleClick(event, index)}/></TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </Container>

    <Menu
  id="simple-menu"
  anchorEl={anchorEl}
  keepMounted
  open={Boolean(anchorEl)}
  onClose={handleClose}
>
    <MenuItem onClick={handleClose}>Delete</MenuItem>
</Menu>


        </div>
    )
}

export default Import