import React from 'react';

class HomePage extends React.Component {
    constructor() {
        super();
    }

    render (){
        return(
            <section>
            <header>
                <img src="img/banner.jpeg" width="100%" />
            </header>

            <section className="page-content">
                <section className="container">
                    <h2>productList</h2>
                </section>
            </section>
            </section>
        );
    }
}

export default HomePage;