import { SplitWrapper } from '../../components/Container/Container';
import { Box, Button, Grid, Select, Switch, TextField, Typography } from '@material-ui/core';
import classNames from 'classnames';
import useStyles from './TaskStyle';
import { useState } from 'react';
import { useAppDispatch, useAppSelector } from '../../Store/hooks';
import { setJsonData } from '../../Store/task';
import { useNavigate } from 'react-router-dom';

import { RootState } from '../../Store/store';


function AddTask() {
    const styles = useStyles();
    const [name, setName] = useState<string>('');
    const [id, setId] = useState<number>(0)
    const [switches, setSwitchs] = useState<boolean>(false)
    const [texts, setTexts] = useState<string>('');
    const [error, setError] = useState(false);
    const navigate = useNavigate()
    const dispatch = useAppDispatch();
    const datas = useAppSelector((state: RootState) => state.project);


    // Separate change handlers for each input
    const handleNameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setName(event.target.value);
        if (error && event.target.value.trim() !== '') {
            setError(false); // Clear error if name is valid
        }
    };

    const handleTextsChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setTexts(event.target.value);
        if (error && event.target.value.trim() !== '') {
            setError(false); // Clear error if texts is valid
        }
    };

    const handleAddTask = () => {
        if (name.trim() === '' || texts.trim() === '') {
            setError(true); // Show error if either input is empty
        } else {
            const data = { id: datas.length + 1, name, text: texts, completed: switches };
            dispatch(setJsonData([data]));
            setName('');
            setTexts('');
            navigate('/')
        }
    };



    const container = (
        <Grid
            item
            xs={12}
            container
            justifyContent="space-between"
            alignItems="center"
            direction="column"
            className={classNames(styles.container)}
            wrap="nowrap"
        >
            <Box className={classNames(styles.box_first)}>
                <form onSubmit={(e) => { e.preventDefault(); handleAddTask(); }}>
                    <Grid container direction="column" spacing={2} className={styles.formdata}>
                        <Box sx={{ width: '100%', maxWidth: 400, m: '0 auto', p: 2, paddingTop: 25 }}>
                            <TextField
                                label="Nueva Tarea"
                                variant="outlined"
                                fullWidth
                                value={name}
                                onChange={handleNameChange} // Unique change handler for name
                                error={error && name.trim() === ''}
                                helperText={error && name.trim() === '' ? 'El nombre no debe de estar vacio' : ''}
                                style={{ marginBottom: 8 }}
                            />

                            <TextField
                                label="Texto de la tarea"
                                variant="outlined"
                                fullWidth
                                value={texts}
                                onChange={handleTextsChange} // Unique change handler for texts
                                multiline
                                maxRows={4}
                                error={error && texts.trim() === ''}
                                helperText={error && texts.trim() === '' ? 'El texto no debe de estar vacio' : ''}
                                style={{ marginBottom: 8 }}
                            />

                            <Grid className={classNames(styles.estado)} >

                                <span  >Estado de la tarea</span>
                                <Switch onChangeCapture={() => setSwitchs(!switches)} color='primary' size='medium' />

                            </Grid>





                            <Box mt={2}>
                                <Button
                                    variant="contained"
                                    color="primary"
                                    onClick={handleAddTask}
                                    fullWidth
                                >
                                    Agregar Tarea
                                </Button>
                            </Box>

                            {error && (
                                <Typography color="error" style={{ marginTop: 8, textAlign: 'center' }}>
                                    Por favor, ingresa una tarea antes de agregarla.
                                </Typography>
                            )}
                        </Box>
                    </Grid>
                </form>
            </Box>
        </Grid>
    );

    return <SplitWrapper rightContent={container} />;
}

export default AddTask;