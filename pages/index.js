import React from 'react';
import axios from 'axios';
import Link from 'next/link';

const Index = ({ posts }) => {
  console.log(posts);
  return (
    <>
      <h1>our index page</h1>
      {posts.map(post => (
        <li key={post.id}>
          <Link href={`/post?id=${post.id}`}>
            <a>{post.title}</a>
          </Link>
        </li>
      ))}
    </>
  );
};

Index.getInitialProps = async () => {
  const res = await axios.get('https://jsonplaceholder.typicode.com/posts');
  const { data } = res;
  return { posts: data };
};

export default Index;

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
