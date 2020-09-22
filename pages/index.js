import Link from 'next/link';

const Index = () => {
  console.log('index component');
  return (
    <div>
      <Link href="/about">
        <a>About Page</a>
      </Link>
      <Link href="/contact">
        <a>Contact Page</a>
      </Link>
      <h1>our index page</h1>
    </div>
  );
};

export default Index;
