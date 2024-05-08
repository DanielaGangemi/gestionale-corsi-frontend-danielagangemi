import { useParams } from "react-router-dom";
import courseStyle from "./Course.module.css";
import { getCourse } from "../../services/RESTservice";
import { useState, useEffect } from "react";


export function Course() {

    const { id } = useParams();
    const [course, setCourse] = useState([]);


    useEffect(() => {

        async function fetchData() {

            try {
                const coursesData = await getCourse(id);

                setCourse(coursesData);

            } catch (error) {
                console.error("Error fetching courses:", error);
            }
        }

        fetchData();
        console.log(course)

    }, [])


    return (
        <>
            <div className={courseStyle.margin}>
                <div className={courseStyle.title}>
                    <h1>{course.courseName}</h1>
                </div>
                <p>Durata: {course.duration} ore</p>
                <h5>{course.shortDescrition}</h5>
                <p>{course.longDescription}</p>
            </div>
        </>
    );
}