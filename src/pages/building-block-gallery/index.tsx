import React from 'react';

class Home extends React.PureComponent {
  componentWillMount() {
    // fetch('/api/login', {
    //   method: 'post',
    //   headers: {
    //     'Content-Type': 'application/json; charset=utf-8',
    //   }
    // })
    // .then(response => response.json())
    // .then(data => {
    //   console.log(data)
    // })
    // .catch(error => {
    //   console.log(error)
    // })
    console.log(123232,process.env)
  }
  render() {
    return(
      <div className='building-block-gallery'>
        <h1>building-block-gallery组件</h1>
      </div>
    );
  }
}

export default Home;