import { faker } from '@faker-js/faker';
import './App.css';

function createRandCompany(thisMany) {
  let companies = [];
  
  for (let i = 0; i < thisMany; i++) {
    companies.push({
      name: faker.company.name(),
      catchPhrase: faker.company.catchPhrase(),
      imageUrl: faker.image.avatar()
    });    
  }
  return companies;
}

function App() {
  const companies = createRandCompany(5);
  const data = companies.map((el, i) => {
    return (
      <div key={i}>
        <img src={el.imageUrl} alt="Random" width={50} />
        <br />
        {el.name}
        <br />
        {el.catchPhrase}
        <hr />
      </div>
    );
  });
  return (
    <div>
      FAKER COMPANY
      <br />
      {data}
    </div>
  );
}

export default App;
