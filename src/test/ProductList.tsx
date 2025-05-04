import { ChangeEvent, useState } from "react";

const products = [
    { id: 1, name: 'Apelcin', price: 10, description: 'Description 1' },
    { id: 2, name: 'Snake', price: 20, description: 'Description 2' },
    { id: 3, name: 'Chokolade', price: 15, description: 'Description 3' },
  ];

  const ProductList = () => {
    const [textFilter, setTextFilter] = useState('')
    const [filter, setFilter] = useState(products)

    const handleFilterChange = (event:ChangeEvent<HTMLInputElement>) => {
        const text = event.target.value
        setTextFilter(text)
        const filtered = products.filter((item) => item.name.toLowerCase().includes(text.toLowerCase()))
        setFilter(filtered)
    }

    return (
        <div>
            <input value={textFilter} type="text" placeholder="Filter by name" onChange={handleFilterChange}></input>
            <ul>
                {filter.map((item) => (
                    <li key={item.id}>
                        <h2>{item.name}</h2>
                        <p>{`Price: ${item.price}`}</p>
                        <p>{item.description}</p>
                    </li>
                ))}
            </ul>
        </div>
    )
  }

  export default ProductList