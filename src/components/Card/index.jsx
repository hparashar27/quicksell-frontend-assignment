import React from 'react';
import './card.css';
import UserIcon from '../UserIcon';
import { getPriorityIcon} from '../../utils/helper';
import { getStatusIcon } from '../../utils/helper';

function Card({ ticket, userData, hideStatusIcon, hideProfileIcon,groupBy,grouping,icon}) {
  console.log(ticket);
  console.log(grouping,groupBy)

  const priorityIcon = () => {
    switch (ticket.priority) {
      case 1:
        return getPriorityIcon("Low");
      case 2:
        return getPriorityIcon("Medium");
      case 3:
        return getPriorityIcon("High");
      case 4:
        return getPriorityIcon("Urgent");
      default:
        return getPriorityIcon("No priority");
    }
  };

  return (
    <div className='card'>
      <div className='top-container'>
        <div className='ticket-id'>{ticket.id}</div>
        {!hideProfileIcon && <UserIcon name={userData.name} available={userData.available} />}
      </div>
      <div className='middle-container'>
        {!hideStatusIcon && getStatusIcon(ticket.status)}
        <div className='title'>{ticket.title}</div>
      </div>
      <div className='bottom-container'>
      {grouping === 'priority' ?
         <div style={{display:"none"}}/>: 
         <div className='more-icon-container'>
         {priorityIcon()}
        </div>
        }
        {ticket.tag.map((t) => (
          <div key={t} className='tag-container'>
            <div className='tag-icon'></div>
            <div className='tag-text'>{t}</div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Card;
