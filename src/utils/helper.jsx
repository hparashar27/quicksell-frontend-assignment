import noPriority from "../assests/No-priority.svg"
import lowPrioirity from "../assests/Img - Low Priority.svg"
import highPriority from "../assests/Img - High Priority.svg"
import medPriority from "../assests/Img - Medium Priority.svg"
import urgentPriority from "../assests/SVG - Urgent Priority colour.svg"
import backlog from "../assests/Backlog.svg"
import todo from "../assests/To-do.svg"
import inProgress from "../assests/in-progress.svg"
import done from "../assests/Done.svg"
import cancelled from "../assests/Cancelled.svg"
import urgentGrey from "../assests/SVG - Urgent Priority grey.svg"



export const getPriorityIcon = (priority) => {
    switch (priority) {
        case "No priority": return <img src={noPriority}></img>
        case "Low": return <img src={lowPrioirity}></img>
        case "Medium": return <img src={medPriority}></img>
        case "High": return <img src={highPriority}></img>
        case "Urgent": return <img src={urgentPriority}></img>
        default: return <img src={urgentGrey} />
    }
}

export const getStatusIcon = (priority) => {
    switch (priority) {
        case "Backlog": return <img src={backlog}></img>
        case "Todo": return <img src={todo}></img>
        case "In progress": return <img src={inProgress}></img>
        case "Done": return <img src={done}></img>
        case "Canceled": return <img src={cancelled}></img>
        default: return <img src={cancelled}></img>
    }
}