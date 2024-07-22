import ToDoCard from "./ToDoCard"

export default function ToDoList(props) {

    const {todos} = props 

    return (
    <ul className="main">
        {todos.map((ToDo, ToDoIndex) => {
            return (
            <>
                <ToDoCard key={ToDoIndex} {...props} index={ToDoIndex}>
                    <p>{ToDo}</p>
                
                </ToDoCard>
            </>
            )                
            }
        )
        }
    </ul>
  ) 
}
