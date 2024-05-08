import { useEffect, useState } from "react";
import { getCourse } from "../../services/RESTservice";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { deleteCourse } from "../../services/RESTservice";
import deleteCourseStyle from "./DeleteCourse.module.css"


export function DeleteCourse() {

    const [course, setCourse] = useState({});
    const { id } = useParams();
    const navigateTo = useNavigate();
    const [errorFlag, setErrorFlag] = useState(false)

    useEffect(() => {

        async function getCourseDetail() {

            try {

                const response = await getCourse(id)

                console.log(response)

                if (response == 1 || response == 0) {

                    setErrorFlag(true)

                } else {

                    setCourse(response);

                }

            } catch (error) {

                console.error(error)

            }

        }

        getCourseDetail()

    }, [])

    const handleReject = () => {

        navigateTo("/home/courses/2")

    }

    const handleAccetp = async (event) => {

        event.preventDefault();

        try {

            const response = await deleteCourse(id);

            if (response == 1) {

                // alert("Impossibile cancellare")
                setErrorFlag(true)

            } else {

                navigateTo("/home/courses/2")

            }


        } catch (error) {

            console.error("Error delete course: ", error)
        }

    }

    return (
        <>

            <div className="row" style={{ marginTop: "10rem" }}>
                <div className="col-md-7 mx-auto">

                    <div className="card">
                        
                        <div className="card-body">

                            <div className="card-title"> <h1 style={{color: "blue"}}>Cancellazione "{course.courseName}"</h1> </div>

                            <p>Sicuro di voler cancellare <span style={{ fontWeight: "700" }}>{course.courseName}</span>?</p>

                        </div>
                        <div className="card-footer d-flex justify-content-end">
                            <button type="button" className="btn btn-danger" style={{ marginRight: "1rem" }} onClick={handleReject}>No</button>
                            <button type="button" className="btn btn-primary" onClick={handleAccetp}>Si</button>
                        </div>


                    </div>

                    {errorFlag == true ? <div className={deleteCourseStyle.errorMessage}><p>Errore durante la cancellazione del corso</p></div> : ""}

                </div>
            </div>


        </>
    );
}