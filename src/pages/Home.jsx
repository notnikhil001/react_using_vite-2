function Home() {
  const name = import.meta.env.VITE_NAME;
  const contact = import.meta.env.VITE_CONTACT;

  return (
    <div>
      <h1>{name}</h1>
      <p>Contact: {contact}</p>
    </div>
  );
}

export default Home;
