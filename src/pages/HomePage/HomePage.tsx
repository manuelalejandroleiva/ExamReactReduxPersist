import React, { ReactElement, useEffect, useState } from 'react';
import useStyles from './HomePageStyle';
import { SplitWrapper } from '../../components/Container/Container';
import { Box, Button, Grid } from '@material-ui/core';
import MediaCard from '../../components/Cards/Cards';
import { Pagination } from '@mui/material';
import classNames from 'classnames';
import { useNavigate } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../../Store/hooks';
import { RootState } from '../../Store/store';
import { patchCompleted, removeTask } from '../../Store/task';
import myImage from '../../assets/tasks.png'; // Ajusta la ruta según sea necesario

export const HomePage = (): ReactElement => {
  const styles = useStyles();
  const navigate = useNavigate();
  const data = useAppSelector((state: RootState) => state.project);
  const dispatch = useAppDispatch();

  const items = data.map((item) => ({
    id: item.id,
    completed: item.completed,
    name: item.name,
    text: item.text,
  }));

  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 5;

  const totalPages = Math.ceil(items.length / itemsPerPage);
  const currentItems = items.slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage);

  const handlePageChange = (_event: React.ChangeEvent<unknown>, page: number) => {
    setCurrentPage(page);
  };

  // Hook para regresar a la primera página si la página actual está vacía
  useEffect(() => {
    if (currentItems.length === 0 && currentPage > 1) {
      setCurrentPage(currentPage-1);
    }
  }, [currentItems, currentPage]);

  const changeComplete = (id: number) => {
    const matchedObject = data.find((element) => element.id === id);
    if (matchedObject) {
      dispatch(patchCompleted({ id, completed: !matchedObject.completed }));
    }
  };

  const removeTasks = (id: number) => {
    const matchedObject = data.find((element) => element.id === id);
    if (matchedObject) {
      dispatch(removeTask({ id: matchedObject.id as number }));
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
        <Grid item container direction="row" xs={12} wrap="wrap" style={{ paddingTop: 10 }}>
          {currentItems.length > 0 ? (
            currentItems.map((item, index) => (
              <Grid item key={index} xs={12} sm={6} md={2} style={{ paddingTop: 20, padding: 10 }}>
                <MediaCard
                  name={item.name}
                  id={item.id}
                  complete={item.completed}
                  text={item.text}
                  onComplete={(id) => changeComplete(id)}
                  onRemove={(id) => removeTasks(id)}
                />
              </Grid>
            ))
          ) : (
            <Grid item container xs={3} alignItems="center" justifyContent="center">
              <img src={myImage} alt="No tasks available" style={{ width: '100%', height: 'auto' }} />
            </Grid>
          )}
        </Grid>

        <Grid item container direction="row" alignItems="center" justifyContent="space-between">
          <Grid item>
            <Button
              onClick={() => navigate('addtarea')}
              variant="contained"
              color="primary"
              style={{ paddingTop: 8 }}
            >
              Nueva tarea
            </Button>
          </Grid>
          <Grid item>
            <Pagination
              count={totalPages}
              variant="outlined"
              shape="rounded"
              page={currentPage}
              onChange={handlePageChange}
              size="small"
              style={{ paddingRight: 16 }}
            />
          </Grid>
        </Grid>
      </Box>
    </Grid>
  );

  return <SplitWrapper rightContent={container} />;
};