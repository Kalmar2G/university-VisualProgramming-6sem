import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { Grid } from '@material-ui/core';
import { v4 as uuidv4 } from 'uuid';
import QAbstractListModel from './QAbstractListModel';
import { Task } from './Setup';
import './styles.css';

class TextGetter {
  constructor(func) {
    this.innerFunc = func;
  }

  getText(el) {
    return this.innerFunc(el);
  }
}

const BufferVisual = ({ printSpeed, maxBuffer, coefficient, tasks }) => {
  const [queueTasks, setQueueTasks] = useState(tasks);
  const [finishTasks, setFinishTasks] = useState([]);
  const [cancelTasks, setCancelTasks] = useState([]);
  const getText = (el) => el;
  const instanse = new TextGetter(getText);
  const updateQueue = () => {
    const random = Math.random();
    const lastNumber = queueTasks[queueTasks.length - 1]?.number;
    const firstPages = queueTasks[0]?.pages || 2;
    const newTask =
      1 - random < coefficient
        ? new Task({
            index: lastNumber,
            name: uuidv4(),
            minPage: +firstPages,
            maxPage: +firstPages,
          })
        : null;

    const currentTask = queueTasks.shift();
    if (currentTask) {
      currentTask.pages = currentTask.pages ? currentTask.pages - printSpeed : 0;
      if (currentTask?.pages <= 0) {
        currentTask.pages = currentTask.pages < 0 ? 0 : currentTask.pages;
        setFinishTasks((prev) => [...prev, currentTask]);
        if (queueTasks.length <= maxBuffer) {
          // eslint-disable-next-line no-unused-expressions
          newTask
            ? setQueueTasks((prev) => [...prev.slice(0), newTask])
            : setQueueTasks((prev) => [...prev.slice(0)]);
        } else {
          // eslint-disable-next-line no-unused-expressions
          newTask ? setCancelTasks((prev) => [...prev, { ...newTask, number: null }]) : null;
          setQueueTasks((prev) => [...prev.slice(0)]);
        }
      } else if (currentTask?.pages) {
        currentTask.pages = currentTask.pages < 0 ? 0 : currentTask.pages;
        if (queueTasks.length <= maxBuffer) {
          // eslint-disable-next-line no-unused-expressions
          newTask
            ? setQueueTasks((prev) => [currentTask, ...prev.slice(0), newTask])
            : setQueueTasks((prev) => [currentTask, ...prev.slice(0)]);
        } else {
          // eslint-disable-next-line no-unused-expressions
          newTask ? setCancelTasks((prev) => [...prev, { ...newTask, number: null }]) : null;
          setQueueTasks((prev) => [currentTask, ...prev.slice(0)]);
        }
      }
    }
  };

  useEffect(() => {setTimeout(updateQueue, 1000)}, [queueTasks]); // eslint-disable-line
  return (
    <div className="table-wrapper_queue">
      <Grid container spacing={1}>
        <Grid item xs={4}>
          <table className="table_queue">
            <tr className="table_queue-header">
              <th className="table_queue-header__item">ОЧЕРЕДЬ ПЕЧАТИ</th>
            </tr>
            <tr className="table_queue-header">
              <th className="table_queue-header__item">Номер</th>
              <th className="table_queue-header__item">Название</th>
              <th className="table_queue-header__item">Количество страниц</th>
            </tr>
            <QAbstractListModel data={queueTasks} getter={instanse} />
          </table>
        </Grid>
        <Grid item xs={4}>
          <table className="table_queue">
            <tr className="table_queue-header">
              <th className="table_queue-header__item">НАПЕЧАТАНО</th>
            </tr>
            <tr className="table_queue-header">
              <th className="table_queue-header__item">Номер</th>
              <th className="table_queue-header__item">Название</th>
              <th className="table_queue-header__item">Количество страниц</th>
            </tr>
            <QAbstractListModel data={finishTasks} getter={instanse} />
          </table>
        </Grid>
        <Grid item xs={4}>
          <table className="table_queue">
            <tr className="table_queue-header_red">
              <th className="table_queue-header__item">ОТМЕНЕННЫЕ ЗАДАНИЯ</th>
            </tr>
            <tr className="table_queue-header_red">
              <th className="table_queue-header__item">Название</th>
              <th className="table_queue-header__item">Количество страниц</th>
            </tr>
            <QAbstractListModel data={cancelTasks} getter={instanse} />
          </table>
        </Grid>
      </Grid>
    </div>
  );
};

BufferVisual.propTypes = {
  printSpeed: PropTypes.number,
  maxBuffer: PropTypes.number,
  coefficient: PropTypes.number,
  // eslint-disable-next-line react/forbid-prop-types
  tasks: PropTypes.arrayOf(PropTypes.object),
};

export default BufferVisual;
