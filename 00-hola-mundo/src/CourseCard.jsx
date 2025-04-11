import { useState } from 'react';


export function CourseCard ({ children,name,img,description }) {
    
    //Manejo de estado con useState - es una hook de react
    // useState es una función que retorna un array con dos elementos, 
    // el primero es el valor del estado y el segundo es una función para actualizar ese estado
    const [isEnrolled, setIsEnrolled] = useState(false);

    const text = isEnrolled ? "Ver curso" : "Inscríbete";
    const enrollButtonClassName = isEnrolled ?
        "my-courseCard-enrollButton is-enrolled" :
        "my-courseCard-enrollButton";
        
    const handleEnrollButtonClick = () => {
        setIsEnrolled(!isEnrolled);
    }

    return (
        <article className='my-courseCard'>
            <header className='my-courseCard-header'>
                <img src={img} alt={name} />
            </header>
            <div className='my-courseCard-body'>
                <a href=""><h2>{children}</h2></a>
                <p>{description}</p>
                <ul className='my-courseCard-bodyTags'>                    
                    <li>Desde cero</li>
                    <li>JSX</li>
                    <li>props</li>
                </ul>
                <div className='my-courseCard-bodyButtons'>
                    <button className='my-courseCard-button'>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M14.25 9.75 16.5 12l-2.25 2.25m-4.5 0L7.5 12l2.25-2.25M6 20.25h12A2.25 2.25 0 0 0 20.25 18V6A2.25 2.25 0 0 0 18 3.75H6A2.25 2.25 0 0 0 3.75 6v12A2.25 2.25 0 0 0 6 20.25Z" />
                        </svg>
                        Código
                    </button>
                    <button className='my-courseCard-button'>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M12 21a9.004 9.004 0 0 0 8.716-6.747M12 21a9.004 9.004 0 0 1-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 0 1 7.843 4.582M12 3a8.997 8.997 0 0 0-7.843 4.582m15.686 0A11.953 11.953 0 0 1 12 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0 1 21 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0 1 12 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 0 1 3 12c0-1.605.42-3.113 1.157-4.418" />
                        </svg>
                        Demo
                    </button>
                    <button className='my-courseCard-button'>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="m15.75 10.5 4.72-4.72a.75.75 0 0 1 1.28.53v11.38a.75.75 0 0 1-1.28.53l-4.72-4.72M4.5 18.75h9a2.25 2.25 0 0 0 2.25-2.25v-9a2.25 2.25 0 0 0-2.25-2.25h-9A2.25 2.25 0 0 0 2.25 7.5v9a2.25 2.25 0 0 0 2.25 2.25Z" />
                        </svg>
                        Video
                    </button>
                </div>
                <div className="my-courseCard-enroll">
                    <button className={enrollButtonClassName} onClick={handleEnrollButtonClick}>{text}</button>
                </div>
            </div>
        </article>
    )
}