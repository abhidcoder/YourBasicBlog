import UserContext from "@/context/userContext";
import React, { useContext } from "react";
import { RxCross1 } from "react-icons/rx";
const Task = ({ task, deleteTaskParent }) => {
  const { user } = useContext(UserContext);

  function deleteTask(taskId) {
    // ....
    deleteTaskParent(taskId);
  }

  const isImageRenderable = (url) => {
    // A simple check to determine if the URL ends with a common image extension
    return /\.(jpg|jpeg|png|gif|bmp|svg)$/i.test(url);
  };
  

  return (
    <div
      className={` shadow-lg mt-2 rounded-md ${
        task.status == "completed" ? "bg-green-800" : "bg-gray-800"
      }`}
    >
      <div className="p-5">
        <div className="flex justify-between">
          <h1 className="text-2xl font-semibold">{task.title}</h1>
          <span
            onClick={() => {
              deleteTask(task._id);
            }}
            className="shadow-lg hover:bg-gray-900 bg-gray-950 rounded-full w-9 h-9 flex justify-center items-center cursor-pointer "
          >
            <RxCross1 />
          </span>
        </div>
        <p className="font-normal">{task.content}</p>
        <div className="flex justify-between mt-3">
              <p className="text-left">
        TIme:{" "}
        <span className="font-bold">
          {new Date(task.addedDate).toLocaleString("en-US", {
            year: "numeric",
            month: "2-digit",
            day: "2-digit",
            hour: "2-digit",
            minute: "2-digit",
            second: "2-digit",
          })}
        </span>
      </p>
          <p className="text-right">
            Author: <span className="font-bold">{user?.name}</span>
          </p>
        </div>

    {task.url && ( // Only display if task.url is available
  <div className="flex justify-between mt-3">
    <span className="font-bold">Your Multimedia:</span>
    {isImageRenderable(task.url) ? (
      <img
        height={200}
        width={400}
        src={task.url}
        alt={task.url}
        className="max-w-full h-auto"
      />
    ) : (
      <div>
      <p>Not a valid Image Link / The Image link is not renderable.</p>
          <a href={task.url} target="_blank" rel="noopener noreferrer" className="text-orange-500">
           Click Here To view Link
          </a>
      </div>
          
        )}
      </div>
    )}
      </div>
    </div>
  );
};

export default Task;
