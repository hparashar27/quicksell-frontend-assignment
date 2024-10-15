export const groupTicketsByStatus = (tickets) => {
    const groups = tickets.reduce((result, ticket) => {
        if (!result[ticket.status]) {
            result[ticket.status] = [];
        }
        result[ticket.status].push(ticket);
        return result;
    }, { "Backlog": [], "Todo": [], "In progress": [], "Done": [], "Canceled": [] });

    return groups;
};

export const groupTicketsByPriority = (tickets) => {
    const groups = tickets.reduce((result, ticket) => {
        const priority = getPriorityLabel(ticket.priority);
        if (!result[priority]) {
            result[priority] = [];
        }
        result[priority].push(ticket);
        return result;
    }, {  "Urgent": [], "High": [], "Low": [], "Medium": [],"No priority": []});

    return groups;
};

export const groupTicketsByUserId = (tickets) => {
    const groups = tickets.reduce((result, ticket) => {
        if (!result[ticket.userId]) {
            result[ticket.userId] = [];
        }
        result[ticket.userId].push(ticket);
        return result;
    }, {});

    return groups;
};

export const mapUsersByUserId = (users) => {
    const group = users.reduce((accumulator, user) => {
        accumulator[user.id] = user;
        return accumulator;
    }, {});

    return group;
};

const getPriorityLabel = (priority) => {
    switch (priority) {
        case 0: return "No priority";
        case 1: return "Low";
        case 2: return "Medium";
        case 3: return "High";
        case 4: return "Urgent";
        default: return "NA";
    }
};

// Sorting tickets based on priority (higher values first) or by title alphabetically
const orderByPriority = (tickets) => tickets.sort((a, b) => b.priority - a.priority); // Descending order
const orderByTitle = (tickets) => tickets.sort((a, b) => a.title.localeCompare(b.title));

// Main function to load the Kanban grid with the appropriate grouping and sorting
export const loadGrid = (tickets, grouping, ordering) => {
    // Sort the tickets based on the given ordering: "priority" or "title"
    const orderedTickets = ordering === "priority" ? orderByPriority(tickets) : orderByTitle(tickets);

    // Group the tickets based on the specified grouping: "status", "priority", or "user"
    switch (grouping) {
        case "status":
            return groupTicketsByStatus(orderedTickets);
        case "priority":
            return groupTicketsByPriority(orderedTickets);
        case "user":
            return groupTicketsByUserId(orderedTickets);
        default:
            return groupTicketsByUserId(orderedTickets);
    }
};
