import { Card } from "../../components/Card/Card";
import cardStyle from "./Courses.module.css"
import { listCourses } from "../../services/RESTservice";
import { useState, useEffect } from "react";



export function Courses() {

    const [courses, setCourses] = useState([]);


    useEffect(() => {

        async function fetchData() {
  
            try {
                const coursesData = await listCourses();

                setCourses(coursesData);

            } catch (error) {

                console.error("Error fetching courses:", error);

            }
        }

        fetchData();

    }, [])




    return (
        <>
            <h1 className={cardStyle.title}>Lista di corsi</h1>

            <div className="container">
                <div className="row">
                    {courses.map((course, index) => (
                        <div className="col d-flex flex-column justify-content-center align-items-center">
                           
                            <Card key={index} IdCorso={course.id} NomeCorso={course.courseName} Durata={course.duration} DescrizioneBreve={course.shortDescription} DescrizioneCompleta={course.longDescription}></Card>
                        </div>

                    ))}

                </div>
            </div>

        </>
    );
}