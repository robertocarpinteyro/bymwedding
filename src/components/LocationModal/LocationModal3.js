

import React, {Fragment} from 'react';


import { Dialog, Grid, } from '@mui/material'

const LocationMap3 = ({ maxWidth, button, buttonClass }) => {
    const [open, setOpen] = React.useState(false);

    function handleClickOpen() {
        setOpen(true);
    }

    function handleClose() {
        setOpen(false);
    }


    return (
        <Fragment>
            <button
                className={`btn ${buttonClass}`}
                onClick={handleClickOpen}>
                {button}
                Ver ubicación
            </button>
            <Dialog
                open={open}
                onClose={handleClose}
                className="modalWrapper quickview-dialog"
                maxWidth={maxWidth}
            >
              <button onClick={handleClose} className='event-close-btn'>
                <i  className='fa fa-close'></i>
              </button>
                <Grid className="modalBody modal-body">
                    <Grid className="modalBody modal-body">
                        <iframe title="map" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3486.781821934414!2d-111.0139091!3d29.082591500000003!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x86ce83ce650c4d91%3A0x140272a4696950c3!2sHoliday%20Inn%20Express%20%26%20Suites%20Hermosillo%20by%20IHG!5e0!3m2!1sen!2smx!4v1746906367107!5m2!1sen!2smx"></iframe>
                    </Grid>
                </Grid>
            </Dialog>
        </Fragment>
    );
}
export default LocationMap3


