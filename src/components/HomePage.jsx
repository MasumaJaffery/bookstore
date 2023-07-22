/* eslint-disable linebreak-style */
import Navbar from './Navbar';
import AddBook from './AddBook';
import Categories from './Categories';

const HomePage = () => (
  <>
    <Navbar />
    <h1>Book Store</h1>
    <Categories />
    <AddBook />
  </>
);
export default HomePage;
