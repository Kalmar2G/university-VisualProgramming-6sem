import { Redirect, Switch, Route, BrowserRouter } from 'react-router-dom';
import { ScenariosPage } from 'modules/Scenarios';
import { TreesPage } from 'modules/Trees';
import { FaultTreeNodeDictionaryPage } from 'modules/FaultTreeNodeDictionary';
import { Header } from 'modules/common/Header';

export const AppRouter = () => {
  return (
    <BrowserRouter>
      <Header />
      <Switch>
        <Route path="/faultTreeNodeDictionary" component={FaultTreeNodeDictionaryPage} />
        <Route path="/trees" exact component={TreesPage} />
        <Route path="/scenarios" exact component={ScenariosPage} />
        <Redirect to="/faultTreeNodeDictionary" />
      </Switch>
    </BrowserRouter>
  );
};
