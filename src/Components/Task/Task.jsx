import React from 'react';
import { useDrag } from 'react-dnd';
import { FaEdit } from 'react-icons/fa';
import { MdDelete } from 'react-icons/md';

import { Link } from 'react-router-dom';

const Task = ({ item, handleDelete }) => {
  const [{ isDragging }, drag] = useDrag(() => ({
    type: 'task',
    item: { id: item._id, status },
    collect: (monitor) => ({
      isDragging: !!monitor.isDragging(),
    }),
  }));

  //   console.log(isDragging)

  return (
    <li
      ref={drag}
      className={`bg-white p-2 w-full rounded-md flex items-center gap-2 ${
        isDragging ? 'opacity-25' : 'opacity-100'
      }`}
    >
      <div className="w-full">
        <h3 className="font-bold">{item?.title}</h3>
        <p className="text-sm text-gray-500">{item?.description}</p>
        <div className="flex my-2 w-full justify-between">
          <p className="bg-gray-300 px-2 text-sm font-bold text-gray-600 rounded-lg">
            {item?.priority}
          </p>
          <p className="text-gray-400 text-sm">{item?.deadline}</p>
          <Link to={`/tasks/${item._id}`}>
            <FaEdit 
              title="Edit task"
              className="text-lg cursor-pointer text-gray-500"
            />
          </Link>
          <MdDelete
            onClick={() => {
              handleDelete(item._id);
            }}
            title="Delete task"
            className="cursor-pointer text-xl text-red-400"
          />
        </div>
      </div>
    </li>
  );
};

export default Task;
