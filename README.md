#  Add  3 Project features
## * Interactive Course Selection:

### Feature Description:
 Our website allows users to interactively select courses of interest. By clicking `Select`button on course cards
, users can add them to their course list. The selected courses are displayed for review, making it easy for users to track their chosen subjects.

## * Informative Course Cards:

### Feature Description:
 Each course card on our website is designed to provide informative details about the course, helping users make informed decisions. Users can find information such as course descriptions, price, credit and etc.
 ## * Interactive Toast Notifications:
 ### Feature Description:
  Our website features interactive toast notifications that provide feedback to users based on their interactions. These notifications appear at the top of the screen and automatically disappear after a few seconds. 

# Discuss how you managed the state in your assignment project.

In a React project, I  use the useState hook to declare and manage state variables within functional components.
By using useState, we can easily manage and update the state of our to-do list application. 
In my assignment project, I have multiple state variables declared using useState.Here's a simplified example of how I managed state in my project using  useState: 


`const [allCourse, setAllCourse] = useState([]);`

* `allCourse` is an array used to store a list of all available courses.
* `setAllCourse` is the corresponding state updater function used to update the allCourse state.

These state variables and their associated state updater functions allow  to keep track of and update the component's internal state based on user actions. This is a fundamental part of building interactive and dynamic user interfaces in React.