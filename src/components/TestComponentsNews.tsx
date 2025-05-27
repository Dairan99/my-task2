import { ChangeEvent, FC, FormEvent, useState } from "react"

interface INewProps {
    onClose: () => void
    onAddNewsItem: (newNewsItem: IList) => void
}

export interface IList {
    id:number,
    title:string,
    text:string,
    images: {
        name: string;       // Имя файла
        url: string;        // URL для отображения (data URL или URL на сервере)
        file: File;         // Объект File (если нужно отправлять на сервер)
      }[]; // Массив объектов с информацией об изображениях
}

const News:FC<INewProps> = ({onClose, onAddNewsItem}) => {
    const [title, setTitle] = useState("")
    const [text, setText] = useState("")
    const [images, setImages] = useState<File[]>([])
    const [imagePreviews, setImagePreviews] = useState<string[]>([])

    const handleChangeTitle = (event:ChangeEvent<HTMLInputElement>) => {
        setTitle(event.target.value)
    }

    const handleChangeText = (event:ChangeEvent<HTMLInputElement>) => {
        setText(event.target.value)
    }

    const handleChangeImages = (event:ChangeEvent<HTMLInputElement>) => {
        const files = Array.from(event.target.files ?? [])

        if (files.length + images.length > 10) {
            alert("не больше 10 фото")
            return
        }

        setImages([...images, ...files])

        const newPrevies = files.map((file) => URL.createObjectURL(file))
        setImagePreviews([...imagePreviews, ...newPrevies])
    }

    const handleSubmit = (e:FormEvent) => {
    e.preventDefault();
    const formattedImages = images.map((file, index) => ({
        name: file.name,
        url: imagePreviews[index], // Используем data URL для отображения
        file: file, // Объект File (если нужно отправлять на сервер)
      }));
  
      const newNewsItem: IList = {
        id: Date.now(), // Генерируем уникальный ID
        title: title,
        text: text,
        images: formattedImages,
      };
      
      onAddNewsItem(newNewsItem)

    // Очищаем форму после отправки
    setTitle('');
    setText('');
    setImages([]);
    setImagePreviews([]);
    onClose()
    }

    return (
        <div className="news">
            <div className="container">
                <div className="news__content">
                    <form onSubmit={handleSubmit}>
                        <div>
                            <label htmlFor="title">Заголовок</label>
                            <input id="title" type="text" value={title} onChange={handleChangeTitle}></input>
                        </div>
                        <div>
                            <label htmlFor="text">Введите текст</label>
                            <input id="text" type="text" value={text} onChange={handleChangeText}></input>
                        </div>
                        <div>
                            <label htmlFor="images">Фотографии не более 10</label>
                            <input id="images" type="file" multiple onChange={handleChangeImages} accept="image/*"></input>
                        </div>
                        <div>
                            {imagePreviews.map((preview, index) => (
                                <img key={index} src={preview} alt={`Preview ${index}`} style={{ width: '100px', height: '100px', margin: '5px' }} />
                            ))}
                        </div>
                        <button type="submit">Сохранить</button>
                        <button type="button" onClick={onClose}>Отмена</button> 
                    </form>
                </div>
            </div>
        </div>
    )
}

export default News