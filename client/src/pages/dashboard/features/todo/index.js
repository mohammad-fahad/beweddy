import { DashboardHeader, ActivityInfo } from "@components/dashboard";
import EmailPreview from "@components/dashboard/EmailPreview/EmailPreview";
import DashboardTopBar from "@components/dashboard/header/TopBar";
import DashboardLayout from "@components/dashboard/layout";
import { Footer } from "@components/home";
import { addTodo, deleteTodo, toggleTodo } from "@features/todo/todoSlice";
import {
  CheckCircleIcon,
  LinkIcon,
  PencilAltIcon,
  TrashIcon,
} from "@heroicons/react/outline";
import { withAuthRoute } from "@hoc/withAuthRoute";
import { nanoid } from "nanoid";
import Head from "next/head";
import Link from "next/link";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";

const TodoPage = () => {
  const dispatch = useDispatch();
  const todos = useSelector((state) => state.todoList);
  const [openInput, setOpenInput] = useState(false);
  const [openEdit, setOpenEdit] = useState(false);
  const [updateTodo, setUpdateTodo] = useState("");

  const { register, handleSubmit, setValue } = useForm();

  const onSubmit = (data) => {
    if (openEdit) {
      dispatch(
        toggleTodo({
          id: updateTodo.id,
          description: data.description,
          isComplete: updateTodo.isComplete,
        })
      );
      setOpenEdit(false);
      setOpenInput(false);
      setValue("description", "");
      return;
    }
    dispatch(
      addTodo({
        id: nanoid(10),
        isComplete: false,
        ...data,
      })
    );
    setValue("description", "");
  };
  const handleUpdate = (todo) => {
    setValue("description", todo.description);
    setUpdateTodo(todo);
    setOpenEdit(true);
    setOpenInput(true);
  };

  return (
    <>
      <Head>
        <title>Beweddy | Just Todo List</title>
      </Head>
      <DashboardTopBar />
      <DashboardLayout shadow>
        <DashboardHeader title="Just Do It List" />
        <div className="space-y-10 shadow-box">
          <div className="max-w-[1300px] w-full">
            <div className="p-12 xxl:pr-0">
              <div className="relative p-10 mt-5 border-4 border-gray-200 rounded-lg">
                <div className="bg-white absolute top-[-1.9rem] left-1/2 -translate-x-1/2 py-3 px-5 flex items-center space-x-3">
                  <img src="/icons/todo.svg" alt="" className="w-8" />
                  <h4 className="text-2xl font-medium capitalize">
                    Just to do list
                  </h4>
                  <img src="/icons/ring.svg" alt="" className="w-8" />
                </div>
                <form className="space-y-5" onSubmit={handleSubmit(onSubmit)}>
                  {/* test modal by sonjoy */}
                  <EmailPreview />
                  <button
                    type="button"
                    className="px-5 py-2 font-medium capitalize transition duration-300 border-2 border-gray-200 rounded-lg font-inter hover:bg-secondary-alternative/40 hover:border-primary"
                    onClick={() => {
                      if (!openEdit) {
                        setOpenInput((prev) => !prev);
                      }
                      setOpenEdit(false);
                      setValue("description", "");
                    }}
                  >
                    Add to do
                  </button>

                  {openInput && (
                    <div className="flex items-center">
                      <input
                        type="text"
                        className="w-full rounded-[5px] border-2 border-gray-200 py-2 px-4 border-r-0 rounded-r-none text-base font-normal placeholder-gray-400"
                        placeholder="Enter todo"
                        {...register("description", {
                          required: true,
                        })}
                      />
                      <button
                        type="submit"
                        className=" font-inter font-medium py-2 px-4 bg-primary text-white border-4 rounded-r-[5px] border-primary text-sm hover:opacity-70 transition duration-300"
                      >
                        {openEdit ? "Update" : "Add"}
                      </button>
                    </div>
                  )}
                  {todos.map((todo) => (
                    <div
                      key={todo.id}
                      className="flex items-center space-x-5 group"
                    >
                      <button
                        type="button"
                        className="flex items-center justify-center w-6 h-6"
                        onClick={() =>
                          dispatch(
                            toggleTodo({
                              id: todo.id,
                              isComplete: !todo.isComplete,
                            })
                          )
                        }
                      >
                        {todo.isComplete ? (
                          <CheckCircleIcon className="w-6 h-6" />
                        ) : (
                          <span className="inline-block w-5 h-5 border-2 rounded-full border-primary"></span>
                        )}
                      </button>
                      <p
                        className={`text-lg font-normal ${
                          todo.isComplete ? "line-through" : ""
                        }`}
                        // onClick={() =>
                        //   dispatch(
                        //     toggleTodo({
                        //       id: todo.id,
                        //       isComplete: !todo.isComplete,
                        //     })
                        //   )
                        // }
                      >
                        {todo.description}
                      </p>
                      <button type="button" onClick={() => handleUpdate(todo)}>
                        <PencilAltIcon className="hidden w-6 h-6 text-blue-300 transition-colors duration-300 group-hover:inline-block hover:text-blue-500" />
                      </button>
                      <button
                        type="button"
                        onClick={() => dispatch(deleteTodo(todo.id))}
                      >
                        <TrashIcon className="hidden w-6 h-6 text-red-300 transition-colors duration-300 group-hover:inline-block hover:text-red-500" />
                      </button>
                    </div>
                  ))}
                </form>
              </div>
            </div>
          </div>
        </div>
      </DashboardLayout>
      <Footer hideSocial />
    </>
  );
};

export default withAuthRoute(TodoPage);
