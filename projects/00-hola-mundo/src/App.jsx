import { CourseCard } from "./CourseCard";
import "./App.css";

export function App() {
  const courses = [
    {
      id: 1,
      name: "Curso React",
      img: "https://cursoreact.dev/1.webp",
      description:
        "Entiende qué es, para qué sirve y cómo funciona React. Desde lo más básico.",
      tags: ["Desde cero", "JSX", "props"],
      links: {
        code: "https://github.com",
        demo: "https://github.com",
        video: "https://github.com",
      },
      isAdded: true,
    },
    {
      id: 2,
      name: "Curso de Python",
      img: "https://cursoreact.dev/1.webp",
      description: "Esto es un curso de Programación",
      tags: ["Python", "Datos", "Backend"],
      links: {
        code: "https://github.com",
        demo: "https://github.com",
        video: "https://github.com",
      },
      isAdded: false,
    },
    {
      id: 3,
      name: "Curso de Frontend",
      img: "https://cursoreact.dev/1.webp",
      description: "Video de Programación",
      tags: ["JS", "HTML", "CSS"],
      links: {
        code: "https://github.com",
        demo: "https://github.com",
        video: "https://github.com",
      },
      isAdded: false,
    },
  ];
  return (
    <section className="my-gridCourse">
      {courses.map((course) => (
        <CourseCard
          key={course.name}
          img={course.img}
          description={course.description}
          initialIsAdded={course.isAdded}
          tags={course.tags}
          links={course.links}
        >
          {course.name}
        </CourseCard>
      ))}
    </section>
  );
}
