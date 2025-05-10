

import React, {Fragment} from 'react';


import { Dialog, Grid, } from '@mui/material'

const LocationMap2 = ({ maxWidth, button, buttonClass }) => {
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
                Ubicación
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
                        <iframe title="map" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3486.3045958188773!2d-110.9477835!3d29.0966876!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x86ce85cd5668ed5d%3A0xec15e40c630a4f21!2sParque%20La%20Ruina!5e0!3m2!1sen!2smx!4v1746906241303!5m2!1sen!2smx"></iframe>
                    </Grid>
                </Grid>
            </Dialog>
        </Fragment>
    );
}
export default LocationMap2


