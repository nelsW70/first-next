import React, { Component } from 'react';

// class Index extends Component {
//   constructor(props) {
//     super(props);
//   }
//   static async getInitialProps() {
//     return { res: console.log('fetching your data') };
//   }

//   render() {
//     return (
//       <>
//         <h1>our index page</h1>
//       </>
//     );
//   }
// }

const Index = () => {
  return (
    <>
      <h1>our index page</h1>
    </>
  );
};

//alternate syntax
Index.getInitialProps = async () => {
  return { res: console.log('fetching your data') };
};

export default Index;
