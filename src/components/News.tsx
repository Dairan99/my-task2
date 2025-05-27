import { ChangeEvent, useCallback, useEffect, useMemo, useState } from "react";
import { Accept, DropzoneOptions, useDropzone } from "react-dropzone";


const MyUploader = () => {
    const [title, setTitle] = useState('')
    const [text, setText] = useState('')
    const [selectedFiles, setSelectedFiles] = useState<File[]>([]);

    const onDrop = useCallback((acceptedFiles: File[]) => {
        setSelectedFiles((prevFiles) => [...prevFiles, ...acceptedFiles]);
    }, []);

    const acceptTypes: Accept = {
        'image/*': ['.jpeg', '.jpg', '.png', '.gif'],
    };

    const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop, accept: acceptTypes } as DropzoneOptions); // Принимаем только изображения

    const handleRemoveFile = (file: File) => {
        setSelectedFiles((prevFiles) => prevFiles.filter((f) => f !== file));
    };

    const imagePreviews = useMemo(() => {
        if (selectedFiles.length === 0) {
            return []
        }

        return selectedFiles.map((file) => {
            return URL.createObjectURL(file)
        })

    }, [selectedFiles])

    useEffect(() => {
        return () => {
            imagePreviews.forEach((url) => URL.revokeObjectURL(url))
        }
    }, [imagePreviews])

    const handleChangeTitle = (event: ChangeEvent<HTMLInputElement>) => {
        setTitle(event.target.value)
    }

    const handleChangeText = (event: ChangeEvent<HTMLInputElement>) => {
        setText(event.target.value)
    }

    return (
        <div className="news">
            <div className="container">
                <div className="news__window" {...getRootProps()} style={{ border: '1px dashed gray', padding: '20px', textAlign: 'center', cursor: 'pointer' }}>
                    <input {...getInputProps()} />
                    {isDragActive ? (
                        <p className="news__window-text">Перетащите файлы сюда...</p>
                    ) : (
                        <p className="news__window-text">Перетащите файлы сюда, или нажмите для выбора файлов</p>
                    )}
                </div>
                {/* Кастомный список выбранных файлов */}
                <div className="news__content">
                    {selectedFiles.length > 0 && (
                        <form action="" className="news__content-form">
                            <ul className="news__content-list">
                                {selectedFiles.map((file, index) => (
                                    <li className="news__content-item" key={file.name}>
                                        {file.name} - {file.size} bytes
                                        <div className="news__content-input>">
                                            <label className="news__content-label" htmlFor="title">Заголовок</label>
                                            <input className="news__content-title" id="title" value={title} onChange={handleChangeTitle}></input>
                                        </div>
                                        <div className="news__content-input>">
                                            <label className="news__content-label" htmlFor="text">Введите текст</label>
                                            <input className="news__content-text" id="text" value={text} onChange={handleChangeText}></input>
                                        </div>
                                        <img className="news__content-image" src={imagePreviews[index]} alt={file.name} ></img>
                                        <button className="news__content-button" onClick={() => handleRemoveFile(file)}>Удалить</button>
                                    </li>
                                ))}
                            </ul>
                        </form>
                    )}
                </div>
                <button className="news__content-button" disabled={selectedFiles.length === 0}>Загрузить выбранные</button>
            </div>
        </div>
    )
}

export default MyUploader