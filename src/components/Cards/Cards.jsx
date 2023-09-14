import { useEffect, useState } from "react";


const Cards = () => {
    const [allCourse, setAllCourse] = useState([]);
    useEffect(() => {
        fetch("./data.json")
            .then((res) => res.json())
            //  .then((data)=>console.log(data));
            .then((data) => setAllCourse(data));
    }, []);
    const handleAddCourse = (course) => {


    };
    return (
        <div className="grid grid-cols-3">
            {allCourse.map((course) => (
                <div key={course.id} className="card  m-5 bg-base-100 shadow-xl">
                    <figure className="px-10">
                        <img src={course.image} alt="Shoes" className="rounded-md" />
                    </figure>
                    <div className="card-body items-center text-center">
                        <h1 className="card-title font-bold py-2">{course.course_name}</h1>
                        <p className=" text-xs text-gray-500 py-2">{course.description}</p>

                        <div className=" flex gap-5 justify-center items-center">
                        <i className="fa-solid fa-dollar-sign"></i>

                      <h6>Price :{course.price}</h6>  
                     <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                            <path d="M12 6.042C10.3516 4.56336 8.2144 3.74694 6 3.75C4.948 3.75 3.938 3.93 3 4.262V18.512C3.96362 18.172 4.97816 17.9989 6 18C8.305 18 10.408 18.867 12 20.292M12 6.042C13.6483 4.56328 15.7856 3.74685 18 3.75C19.052 3.75 20.062 3.93 21 4.262V18.512C20.0364 18.172 19.0218 17.9989 18 18C15.7856 17.9969 13.6484 18.8134 12 20.292M12 6.042V20.292" stroke="#1C1B1B" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                        </svg>
<h6>Credit :{course.credit}hr </h6>
                        </div>
                        
                        <div className="card-actions">
                            <button onClick={() => handleAddCourse(course)} className="btn hover:bg-blue-300 rounded-md bg-blue-600 px-[40%] text-white my-4 py-1">Select</button>
                        </div>
                    </div>
                </div>
            ))}

        </div>
    );
};

export default Cards;