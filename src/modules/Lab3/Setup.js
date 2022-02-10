import React, { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import SetupForm from './SetupForm';
import BufferVisual from './BufferVisual';

export const getRandomInt = (min, max) => Math.floor(Math.random() * (max - min) + min);

export class Task {
  constructor({ index, minPage, maxPage }) {
    this.number = index + 1;
    this.name = uuidv4();
    this.pages = getRandomInt(minPage, maxPage);
  }
}

const initialValues = {
  size: 10,
  printSpeed: 2,
  maxBuffer: 10,
  coefficient: 0.1,
  pagesFrom: 1,
  pagesTo: 5,
};

export const Setup = () => {
  const [printSpeed, setPrintSpeed] = useState(null);
  const [maxBuffer, setMaxBuffer] = useState(null);
  const [coefficient, setCoefficient] = useState(null);
  const [tasks, setTasks] = useState([]);

  const onSubmit = ({ size, printSpeed, maxBuffer, coefficient, pagesFrom, pagesTo }) => {
    setPrintSpeed(printSpeed);
    setCoefficient(coefficient);
    setMaxBuffer(maxBuffer);
    setTasks(
      new Array(+size).fill(0).map(
        (task, index) =>
          new Task({
            index,
            minPage: +pagesFrom,
            maxPage: +pagesTo,
          })
      )
    );
  };
  return (
    <>
      <SetupForm initialValues={initialValues} onSubmit={onSubmit} />
      {printSpeed && maxBuffer && coefficient && tasks && (
        <BufferVisual
          printSpeed={printSpeed}
          maxBuffer={maxBuffer}
          coefficient={coefficient}
          tasks={tasks}
        />
      )}
    </>
  );
};
