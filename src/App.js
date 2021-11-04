import Header from './Components/Header/Header';
import './App.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from './Components/Home/Home';
import Register from './Components/Register/Register';
import AuthProvider from './Hooks/Context/AuthProvider';
import PrivateRoute from './PrivateRoute/PrivateRoute';
import AddYourChoice from './Components/Add/AddYourChoice';
import UserChoiceList from './UserList/UserChoiceList';
import Footer from './Components/Footer/Footer';
import SeeTotalList from './Components/TotalList/SeeTotalList';
import Details from './Components/Home/Home Components/Details';
import NotFound from './Components/404/NotFound';

function App() {
  return (
    <div className="App">
      <AuthProvider>
        <BrowserRouter>
          <Header></Header>
          <Switch>
            <Route exact path="/">
              <Home></Home>
            </Route>
            <Route exact path="/home">
              <Home></Home>
            </Route>
            <Route exact path="/login">
              <Register></Register>
            </Route>
            <PrivateRoute path="/addyourchoice">
              <AddYourChoice></AddYourChoice>
            </PrivateRoute>
            <PrivateRoute path="/userlist">
              <UserChoiceList></UserChoiceList>
            </PrivateRoute>
            <PrivateRoute path="/alluserslist">
              <SeeTotalList></SeeTotalList>
            </PrivateRoute>
            <PrivateRoute exact path="/place/:id" >
              <Details></Details>
            </PrivateRoute>
            <Route path="*">
              <NotFound></NotFound>
            </Route>
          </Switch>
          <Footer></Footer>
        </BrowserRouter>
      </AuthProvider>
    </div>
  );
}

export default App;
