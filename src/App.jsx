import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Layout from './components/Layout/Layout';
import Shopping from './containers/Shopping/Shopping';
import Account from './containers/Account/Account';

class App extends React.Component {
    render() {
        return (
            <Router>
                <div>
                    <Layout>
                        <Routes>
                            <Route exact path="/" element={<Shopping />} />
                            <Route path="/account" element={<Account />} />
                            <Route path="*" element={<h2 style={{ textAlign: 'center' }}>Not Found</h2>} />
                        </Routes>
                    </Layout>
                </div>
            </Router>
        );
    }
}

export default App;
