import React from 'react';
import { Navbar, Nav, NavItem, NavLink } from "reactstrap";
import { BrowserRouter, Route, Switch, RouteComponentProps, Redirect } from 'react-router-dom';
import routes from './config/routes';
import IRoute from './interfaces/route';

const Application: React.FunctionComponent<{}> = () => {

    const getLink = (routes: IRoute[]) => {
        return routes.map((prop, key) => {
            return (
                <NavItem key={key}>
                <NavLink href={prop.path}>{prop.name}</NavLink>
                </NavItem>
            );
        });
    };

    return (
        <div>
            <Navbar color="light" light expand="md">
                <Nav className="mr-auto" navbar>
                {getLink(routes)}
                </Nav>
            </Navbar>
            <BrowserRouter>
                <Switch>
                    {routes.map((route, index) => {
                        return (
                            <Route 
                                key={index}
                                path={route.path}
                                exact={route.exact}
                                render={(props: RouteComponentProps<any>) => {
                                    return (
                                        <route.component
                                            name={route.name} 
                                            {...props}
                                            {...route.props}
                                        />
                                )}}
                            />
                        );
                    })}
                    <Redirect from="" to="/counter" />
                </Switch>
            </BrowserRouter>
        </div>
    );
}

export default Application;