import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

import { Grid } from '@material-ui/core';
import { IconButton } from '@mui/material';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';

import DialogTitle from '@mui/material/DialogTitle';
import { useState } from 'react';

interface Props {
    id: number,
    name: string,
    text: string,
    complete: boolean,
    onComplete?: (id: number) => void,
    onRemove?: (id: number) => void
}


export default function MediaCard({ id, name, text, onComplete, complete, onRemove }: Props) {

    const [state, setState] = useState<boolean>(false)

    const completeAction = () => {
        onComplete && onComplete(id)
    }


    const handleOpenModal = () => {
        setState(true)
        if (state)
            onRemoveAction()

    }

    const handleNoResponse = () => {
        setState(false)

    }

    const onRemoveAction = () => {
        onRemove && onRemove(id)
    }

    return (
        <Card sx={{ maxWidth: 345 }}>
            <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                    {name && name}
                </Typography>
                <Grid item container wrap="wrap" alignItems="flex-start" justifyContent="flex-start">
                    <Typography
                        variant="body2"
                        sx={{ color: 'text.secondary', whiteSpace: 'pre-wrap', wordBreak: 'break-word' }} // Ensures text wraps
                    >
                        {text && text}
                    </Typography>
                </Grid>
            </CardContent>
            <CardActions>
                {complete ? <>
                    <Button size="small" onClick={completeAction}>Completed</Button><IconButton size="small">
                        <CheckCircleIcon /> </IconButton></>
                    :
                    <><Button size="small" onClick={completeAction}>Press to Complete</Button></>
                }


                <Button size="small" onClick={handleOpenModal}>Remove </Button>



            </CardActions>


            <Dialog
                open={state}

                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
            >
                <DialogTitle id="alert-dialog-title">
                    {"Estas seguro de que quieres eliminar esta tarea"}
                </DialogTitle>

                <DialogActions>
                    <Button onClick={handleNoResponse}>No</Button>
                    <Button onClick={onRemoveAction} autoFocus>
                        Yes
                    </Button>
                </DialogActions>
            </Dialog>
        </Card>




    );
}