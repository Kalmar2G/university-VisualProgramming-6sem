import { Redirect, Switch, Route, BrowserRouter } from 'react-router-dom';
import { Interfaces } from 'modules/Lab1/Interfaces';
import { Table } from 'modules/Lab2';
import { Setup } from 'modules/Lab3';
import { Header } from 'modules/common/Header';

export const AppRouter = () => {
  return (
    <BrowserRouter>
      <Header />
      <Switch>
        <Route path="/lab1" exact component={Interfaces} />
        <Route path="/lab2" exact component={Table} />
        <Route path="/lab3" component={Setup} />
        <Redirect to="/lab2" />
      </Switch>
    </BrowserRouter>
  );
};
