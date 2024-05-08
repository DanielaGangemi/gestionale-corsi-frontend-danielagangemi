import { useEffect, useState } from "react";
import { Card } from "../../components/Card/Card";
import { getUserByEmail, listCourses } from "../../services/RESTservice";
import cardStyle from "./Courses.module.css";
import { getEmailCookie } from "../../services/CookieService";
import { useParams } from "react-router-dom";



export function Courses() {

    const { id } = useParams();

    console.log("id corsi: ", id)

    const [courses, setCourses] = useState([]);


    useEffect(() => {

        // così prende la lista di tutti i corsi
        async function findAll() {

            try {
                const coursesData = await listCourses();

                setCourses(coursesData);

            } catch (error) {

                console.error("Error fetching courses:", error);

            }
        }

        async function findPersonalList() {

            try {

                const user = await getUserByEmail(getEmailCookie())

                setCourses(user.courseList);



            }
            catch (error) {

                console.error("Error fetching courses:", error);

            }
        }

        if (id == 1) {
            // solo corsi personali
            findPersonalList();

            console.log("find by")
            console.log(courses)

        } else if (id == 2) {
            // tutti i corsi
            findAll();

            console.log("find all")
            console.log(courses)
        }

        // findAll();
        // findPersonalList()

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