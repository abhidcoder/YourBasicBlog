"use client";
import React, { useState } from "react";
import loginSvg from "../../assets/login.svg";
import Image from "next/image";
import { addTask } from "@/services/taskService";
import { taost, toast } from "react-toastify";

const AddTask = () => {
  // console.log("this is add task component");

  const [task, setTask] = useState({
    title: "",
    content: "",
    status: "none",
    url: "",
    userId: "64a506ab413f1d5bcafcdbec",
  });

  const handleAddTask = async (event) => {
    event.preventDefault();
    console.log("Task-->",task);
    // validate task data
    try {
      const result = await addTask(task);
      console.log(result);
      toast.success("Your Post has been Added !!", {
        position: "top-center",
      });

      setTask({
        title: "",
        content: "",
        status: "none",
        url:"",
      });
    } catch (error) {
      console.log(error);
      toast.error("Task not added !!", {
        position: "top-center",
      });
    }
  };

  console.log(task);

  return (
    <div className="grid grid-cols-12  justify-center">
      <div className="col-span-4 col-start-5 p-5  shadow-sm">
        <div className="my-8 flex justify-center">
          <Image
            src={loginSvg}
            style={{
              width: "50%",
            }}
            alt="Login banner"
          />
        </div>
        <h1 className="text-3xl text-center">Add your Posts here </h1>

        <form action="#!" onSubmit={handleAddTask}>
          {/* task title  */}
          <div className="mt-4">
            <label
              htmlFor="task_title"
              className="block text-sm font-medium mb-2"
            >
              Title
            </label>
            <input
              type="text"
              className="w-full p-3 rounded-3xl bg-gray-800 focus:ring-gray-400-100 border border-gray-800"
              id="task_title"
              name="task_title"
              onChange={(event) => {
                setTask({
                  ...task,
                  title: event.target.value,
                });
              }}
              value={task.title}
            />
          </div>
          {/* task CONENT  */}
          <div className="mt-4">
            <label
              htmlFor="task_content"
              className="block text-sm font-medium mb-2"
            >
              Content
            </label>
            <textarea
              className="w-full p-3 rounded-3xl bg-gray-800 focus:ring-gray-400-100 border border-gray-800"
              id="task_content"
              rows={5}
              name="task_content"
              onChange={(event) => {
                setTask({
                  ...task,
                  content: event.target.value,
                });
              }}
              value={task.content}
            />
          </div>

          {/* task status */}
          <div className="mt-4">
            <label
              htmlFor="task_status"
              className="block text-sm font-medium mb-2"
            >
              Select a Theme
            </label>

            <select
              id="task_status"
              className="w-full p-3 rounded-3xl bg-gray-800 focus:ring-gray-400-100 border border-gray-800"
              name="task_status"
              onChange={(event) => {
                setTask({
                  ...task,
                  status: event.target.value,
                });
              }}
              value={task.status}
            >
            
              
              <option value="none" disabled>
                ---Select a Theme---
              </option>
              <option value="pending">Black Theme</option>
              <option value="completed">Green Theme</option>
            </select>
          </div>

          <div className="mt-4">
            <label htmlFor="task_url" className="block text-sm font-medium mb-2">
              Image or Video URL
            </label>
            <input
              placeholder="image should be jpg|jpeg|png|gif|bmp|svg"
              type="text"
              className="w-full p-3 rounded-3xl bg-gray-800 focus:ring-gray-400-100 border border-gray-800"
              id="task_url"
              name="task_url"
              onChange={(event) => {
                setTask({
                  ...task,
                  url: event.target.value,
                });
              }}
              value={task.url}
            />
          </div>

          {/* button  actions */}
          <div className="mt-4 flex justify-center">
            <button className="bg-blue-600 py-2 px-3 rounded-lg hover:bg-blue-800">
              Add Post{" "}
            </button>
            <button className="bg-red-600 py-2 px-3 rounded-lg hover:bg-red-800 ms-3">
              Clear
            </button>
          </div>

          {/* {JSON.stringify(task)} */}
        </form>
      </div>
    </div>
  );
};

export default AddTask;
