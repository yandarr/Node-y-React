import React from 'react';
import { NavLink } from 'react-router-dom';

export const Header = () => {
    return (<header >
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <div className="container-fluid">
                <NavLink
                    className="navbar-brand" to="/">Invenarios
                </NavLink>
                <button
                    className="navbar-toggler" type="button" data-bs-toggle="collapse"
                    data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                    aria-expanded="false" aria-label="Toggle navigation">
                    <span
                        className="navbar-toggler-icon">
                    </span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">

                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <NavLink
                                className="nav-link" activeClassName='active' exact
                                aria-current="page" to="/">ACTIVOS
                            </NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink
                                className="nav-link" activeClassName='active' exact
                                aria-current="page" to="/usuarios">USUARIOS
                            </NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink
                                className="nav-link" activeClassName='active' exact
                                aria-current="page" to="/marcas">MARCAS
                            </NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink
                                className="nav-link" activeClassName='active' exact
                                aria-current="page" to="/tipos">TIPOS
                            </NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink
                                className="nav-link" activeClassName='active' exact
                                aria-current="page" to="/estados">ESTADOS
                            </NavLink>
                        </li>
                    </ul>

                </div>
            </div>
        </nav>
    </header>
    )
}

