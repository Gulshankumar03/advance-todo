"use client";
import { todoType } from "@/types/todoTypes";
import DeleteTodo from "./DeleteTodo";
import EditTodo from "./EditTodo";
import { useState } from "react";
import { motion } from "framer-motion";

const Todo = ({ todo }: { todo: todoType }) => {
  const [editTodo, setEditTodo] = useState(false);
  const date = todo.createdAt;
  const newdate = date?.toLocaleDateString();
  const newtime = date?.toLocaleTimeString();
  return (
    <motion.div
      className=" flex justify-between flex-col 2xl:w-1/4 xl:w-1/3 pt-5  pb-5 px-8 mx-8 lg:mx-0 overflow-hidden bg-zinc-400 border-neutral-500 dark:text-white rounded-xl bg-clip-padding backdrop-filter backdrop-blur-md bg-opacity-10"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      {!editTodo && (
        <>
          <h2 className="text-lg pb-3">{todo.title}</h2>
        </>
      )}

      <div>
        <div className="flex justify-between px-1 text-xs pt-3">
          <p>{newdate?.toLocaleUpperCase()}</p>
          <p>{newtime?.toLocaleUpperCase()}</p>
        </div>
        <div className="flex pt-2 justify-between gap-5">
          <EditTodo todo={todo} editTodo={editTodo} setEditTodo={setEditTodo} />
          {!editTodo && <DeleteTodo todo={todo} />}
        </div>
      </div>
    </motion.div>
  );
};

export default Todo;
