import React from 'react';

import useRoutes from "./hooks/useRoutes";

function App() {
    const routes = useRoutes(false)
    return (
        <div className="App">
            {routes}
        </div>
    );
}

export default App;
