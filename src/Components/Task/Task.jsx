import React from 'react';
import { useDrag } from 'react-dnd';
import { MdDelete } from 'react-icons/md';

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
        isDragging ? 'opacity-55' : 'opacity-100'
      }`}
    >
      <div className="w-full ">
        <div className="flex justify-between">
          <h3 className="font-bold">{item?.title}</h3>
          <p className="bg-gray-300 px-2 mt-1 text-sm font-bold text-gray-600 rounded-lg">
            {item?.priority}
          </p>
        </div>
        <div className="w-full">
          <p className="text-sm text-gray-500 py-2">{item?.description}</p>

          <p className="text-gray-400 text-sm">{item?.deadline}</p>
        </div>
      </div>
    </li>
  );
};

export default Task;
