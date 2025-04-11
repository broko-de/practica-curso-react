import { CourseCard } from './CourseCard'
import './App.css'

export function App(){

    const courses = [
        {
            name: "Curso React",
            img: "https://cursoreact.dev/1.webp",
            description: "Entiende qué es, para qué sirve y cómo funciona React. Desde lo más básico.",
            tags: ["Desde cero", "JSX", "props"],    
            links: {
                code: "https://github.com",
                demo: "https://github.com",
                video: "https://github.com"
            }        
        },
        {
            name: "Curso de Childrens",
            img: "https://cursoreact.dev/1.webp",
            description: "Esto es un curso de Programación",
            tags: ["Desde cero", "JSX", "props"],
            links: {
                code: "https://github.com",
                demo: "https://github.com",
                video: "https://github.com"
            }
        },
        {
            name: "Curso de Frontend",
            img: "https://cursoreact.dev/1.webp",
            description: "Video de Programación",
            tags: ["Desde cero", "JSX", "props"],
            links: {
                code: "https://github.com",
                demo: "https://github.com",
                video: "https://github.com"
            }
        }
    ]
    return (
        <section className='my-gridCourse'>
            <CourseCard 
                img="https://cursoreact.dev/1.webp" 
                description="Entiende qué es, para qué sirve y cómo funciona React. Desde lo más básico."
            >
                    Curso de React
            </CourseCard>
            <CourseCard 
                img="https://cursoreact.dev/1.webp" 
                description="Entiende qué es, para qué sirve y cómo funciona React. Desde lo más básico."
            >
                    Curso de Childrens
            </CourseCard>
            <CourseCard 
                img="https://cursoreact.dev/1.webp" 
                description="Entiende qué es, para qué sirve y cómo funciona React. Desde lo más básico."
            >
                    Frontend
            </CourseCard>
        </section>
    )
}

