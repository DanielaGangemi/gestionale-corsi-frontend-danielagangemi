import { useEffect, useState } from "react";
import { getCategories } from "../../services/RESTservice";
import { insertCourse } from "../../services/RESTservice";
import { useNavigate } from "react-router-dom";

export function AddCorso() {

    const [categoryList, setCategoryList] = useState([])
    const [courseForm, setCourseForm] = useState({
        courseName: "",
        shortDescription: "",
        longDescription: "",
        duration: 0,
        categoryId: 0
    });
    const navigateTo = useNavigate();

    useEffect(() => {

        async function getCategoriesList() {

            try {

                const response = await getCategories()

                if (response == 0) {

                    alert("Errore")

                } else {

                    setCategoryList(response);

                }



            } catch (error) {

                console.error("Error fetching categories:", error);


            }
        }

        getCategoriesList()



    }, [])

    const handleChange = (event) => {

        const { name, value } = event.target;

        setCourseForm({ ...courseForm, [name]: value })


    }

    const handleChangeSelect = (event) => {

        const selectedCategoryId = event.target.value;

        setCourseForm({ ...courseForm, categoryId: selectedCategoryId });

    };

    const handleSubmit = async (event) => {

        event.preventDefault();

        console.log(courseForm)

        try {

            const response = await insertCourse(courseForm)

            if (response == 0) {

                alert("Errore")

            } else {

                navigateTo("/home/courses/2")

            }



        } catch (error) {

            console.error("Error insert course: ", error)
        }

    }

    return (
        <>


            <div className="row" style={{ marginTop: "10rem" }}>
                <div className="col-md-7 mx-auto">

                    <div className="card">
                        <div className="card-header">
                            <h1>Aggiungi corso</h1>
                        </div>
                        <div className="card-body">

                            <form onSubmit={handleSubmit}>

                                <div className="mb-3">
                                    <label htmlFor="name" className="form-label">Nome</label>
                                    <input type="text" className="form-control" id="name" name="courseName" value={courseForm.courseName} onChange={handleChange} />

                                </div>

                                <div className="mb-3">
                                    <label htmlFor="shortDescription" className="form-label">Descrizione breve</label>
                                    <input type="text" className="form-control" id="shortDescription" name="shortDescription" value={courseForm.shortDescription} onChange={handleChange} />

                                </div>

                                <div className="mb-3">
                                    <label htmlFor="longDescription" className="form-label">Descrizione lunga</label>
                                    <textarea id="longDescription" class="form-control" placeholder="Leave a comment here" style={{ height: "100px" }} name="longDescription" value={courseForm.longDescription} onChange={handleChange}></textarea>

                                </div>

                                <div className="mb-3">
                                    <label htmlFor="durata" className="form-label">Durata (in ore)</label>
                                    <input type="number" className="form-control" id="durata" name="duration" value={courseForm.duration} onChange={handleChange} />

                                </div>

                                <div className="mb-3">
                                    <label htmlFor="categorySelect" className="form-label">Categoria</label>
                                    <select className="form-select" id="categorySelect" value={courseForm.categoryId} onChange={handleChangeSelect}>
                                        <option value=""></option>
                                        {categoryList.map((category) => (
                                            <option key={category.id} value={category.id}>{category.categoryName}</option>
                                        ))}
                                    </select>

                                </div>

                                <button type="submit" className="btn btn-primary">Inserisci</button>

                            </form>


                        </div>
                    </div>
                </div>
            </div>

        </>
    );
}