import React, { Component, Fragment } from "react";
import EventDashboard from "../../featurs/event/EventDashboard/EventDashboard";
import NavBar from "../../featurs/event/EventDashboard/nav/NavBar/NavBar";
import { EventDetailedPage } from "../../featurs/event/EventDetailed/EventDetailedPage";
import { PeopleDashboardPage } from "../../featurs/event/EventDashboard/user/PeopleDashboard/PeopleDashboard";
import { UserDetailedPage } from "../../featurs/event/EventDashboard/user/UserDatailed/UserDetailedPage";
import { SettingDashboard } from "../../featurs/event/EventDashboard/user/Setting/SettingDashboard";
import { Container } from "semantic-ui-react";
import { Route } from "react-router-dom";
import { HomePage } from "../../featurs/event/home/HomePage";
import EventForm from "../../featurs/event/EventDashboard/EventForm/EventForm";
class App extends Component {
  render() {
    return (
      <Fragment>
        <Route exact path="/" component={HomePage} />
        <Route
          path="/(.+)"
          render={() => (
            <Fragment>
              <NavBar />
              <Container className="main">
                <Route path="/events" component={EventDashboard} />
                <Route path="/events/:id" component={EventDetailedPage} />
                <Route path="/events/people" component={PeopleDashboardPage} />
                <Route path="/profile/:id" component={UserDetailedPage} />
                <Route path="/settings" component={SettingDashboard} />
                <Route path="/createEvent" component={EventForm} />
              </Container>
            </Fragment>
          )}
        />
      </Fragment>
    );
  }
}

export default App;
