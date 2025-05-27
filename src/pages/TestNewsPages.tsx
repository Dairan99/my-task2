import { useState } from "react";
import News, { IList } from "../components/TestComponentsNews";



const AdminPage = () => {
    const [isFormOpen, setIsFormOpen] = useState(false);
    const [news, setNews] = useState<IList[]>([]);
  
    const handleAddArticleClick = () => {
      setIsFormOpen(true);
    };
  
    const handleFormClose = () => {
      setIsFormOpen(false);
    };

    const handleAddNewsItem = (newNewsItem: IList) => {
        setNews([...news, newNewsItem]);
        setIsFormOpen(false); // Закрываем форму после добавления новости
      };
  
    return (
      <div>
        <h1>Страница администратора</h1>
        <button onClick={handleAddArticleClick}>Добавить новость (+)</button>
  
        {isFormOpen && <News onClose={handleFormClose} onAddNewsItem={handleAddNewsItem}/>}
        <ul>
        {news.map((newsItem) => (
          <li key={newsItem.id}>
            <h3>{newsItem.title}</h3>
            <p>{newsItem.text}</p>
            {newsItem.images.map((image) => (
              <img key={image.name} src={image.url} alt={image.name} style={{ width: '100px', height: '100px', margin: '5px' }} />
            ))}
          </li>
        ))}
      </ul>
      </div>
    );
  };

  export default AdminPage