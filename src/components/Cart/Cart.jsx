

const Cart = ({ selectedCourses,totalPrice,totalCredit}) => {
//    console.log(totalPrice);

    return (
        <div className="text-start">
            <h4 className=" py-2  border-b-2">Credit Hour Remaining 7 hr</h4>
            <h3 className="py-2">Course Name</h3>


{selectedCourses.map((course, index) => (
  <li className="text-xs p-1 list-none" key={index}>
    {`${index + 1+' '}. ${course.course_name}`}
  </li>
))}



            <p className=" py-2 border-y-2 my-3">Total Credit Hour : {totalCredit}</p>
            <p >Total Price : {totalPrice} USD</p>
        </div>
    );
};

export default Cart;