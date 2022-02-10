import { Form, Field } from 'react-final-form';
import { TextField, Grid } from '@material-ui/core';
import PropTypes from 'prop-types';
import React from 'react';
import { Button } from '../common/Button';

const inputProps = {
  step: 0.5,
};

const inputPropsCoef = {
  step: 0.1,
};

const SetupForm = ({ initialValues, onSubmit }) => (
  <Form
    onSubmit={onSubmit}
    initialValues={initialValues}
    render={({ handleSubmit }) => (
      <form onSubmit={handleSubmit}>
        <Grid container style={{ maxWidth: '700px', margin: '0 auto' }}>
          <Grid item xs={3}>
            <Field name="size" style={{ width: '100%', margin: '0 auto' }}>
              {({ input }) => (
                <TextField
                  name={input.name}
                  value={input.value}
                  onChange={input.onChange}
                  type="number"
                  variant="standard"
                  label="Количество заданий"
                />
              )}
            </Field>
          </Grid>
          <Grid item xs={3}>
            <Field name="printSpeed">
              {({ input }) => (
                <TextField
                  name={input.name}
                  value={input.value}
                  onChange={input.onChange}
                  inputProps={inputProps}
                  type="number"
                  variant="standard"
                  label="Скорость печати"
                />
              )}
            </Field>
          </Grid>

          <Grid item xs={3}>
            <Field name="maxBuffer">
              {({ input }) => (
                <TextField
                  name={input.name}
                  value={input.value}
                  onChange={input.onChange}
                  type="number"
                  variant="standard"
                  label="Размер очереди"
                />
              )}
            </Field>
          </Grid>
          <Grid item xs={3}>
            <Field name="coefficient">
              {({ input }) => (
                <TextField
                  name={input.name}
                  value={input.value}
                  onChange={input.onChange}
                  type="number"
                  variant="standard"
                  label="Вероятность добавления задания"
                  inputProps={inputPropsCoef}
                />
              )}
            </Field>
          </Grid>
          <Grid item xs={3} />
          <Grid item xs={3}>
            <Field name="pagesFrom">
              {({ input }) => (
                <TextField
                  name={input.name}
                  value={input.value}
                  onChange={input.onChange}
                  type="number"
                  variant="standard"
                  label="Минимум страниц"
                />
              )}
            </Field>
          </Grid>
          <Grid item xs={3} style={{ justifySelf: 'flex-start' }}>
            <Field name="pagesTo">
              {({ input }) => (
                <TextField
                  name={input.name}
                  value={input.value}
                  onChange={input.onChange}
                  type="number"
                  variant="standard"
                  label="Максимум страниц"
                />
              )}
            </Field>
          </Grid>
          <Grid item style={{ margin: '0 auto' }}>
            <Button type="submit" className="button_light">
              <span>Запуск</span>
            </Button>
          </Grid>
        </Grid>
      </form>
    )}
  />
);
SetupForm.propTypes = {
  // eslint-disable-next-line react/forbid-prop-types
  initialValues: PropTypes.object,
  onSubmit: PropTypes.func,
};
export default SetupForm;
