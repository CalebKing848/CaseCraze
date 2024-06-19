import Category from './Category/Category';
import Price from './Price/Price';
import './Sidebar.css';

function Sidebar({ categories, handleChange }) {
  return (
    <section className="sidebar">
      <div className="logo-container">
        <h1>CaseCraze</h1>
      </div>
      <Category categories={categories} handleChange={handleChange} />
      <Price handleChange={handleChange} />
    </section>
  );
}

export default Sidebar;
