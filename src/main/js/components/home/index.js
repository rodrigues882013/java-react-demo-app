import React, { Component } from 'react';
import {withRouter} from 'react-router-dom';


class Home extends Component {


  constructor(props, context) {
    super(props, context);
  }

  //::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::

  componentDidMount(){
    this.props.history.push('/home');
  }

  //::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::

  render() {
    return (
      <main className="col-sm-12 ml-sm-auto col-md-12 pt-3" role="main">
        <h1> Home </h1>

        <section className="row placeholders">
          <div className="col-sm-12 col-md-12 col-xs-12">
            Hello, welcome to my qualification test for <a href="https://www.mobicare.com.br/"> Mobicare </a>.
            <br/>
            More about me <a href="https://www.linkedin.com/in/felipernx/"> here </a> and
            <a href="https://github.com/rodrigues882013"> here </a>
          </div>
        </section>
      </main>

    );
  }
}

export default withRouter(Home);