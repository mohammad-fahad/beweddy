import DashboardNavLinks from "./navLinks";
import {
  CheckCircleIcon,
  PencilAltIcon,
  TrashIcon,
} from "@heroicons/react/outline";
import Link from "next/link";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { useSelector } from "react-redux";
import { QRCodeGenerator } from "@components/shared";
import { useMutation, useQuery } from "react-query";
import {
  attemptUpdateTodo,
  createTodo,
  deleteTodo,
  getTodos,
} from "@services/Todo";
import { client } from "pages/_app";

const Sidebar = () => {
  const { user } = useSelector((state) => state.user);
  // const todos = useSelector(state => state.todoList);
  const [openInput, setOpenInput] = useState(false);
  const [openEdit, setOpenEdit] = useState(false);
  const [updateTodo, setUpdateTodo] = useState("");
  const { data: todos, isLoading } = useQuery(["todos", user?.token], getTodos);
  const { mutateAsync: createRequest, isLoading: isCreating } =
    useMutation(createTodo);
  const { mutateAsync, isLoading: isMutating } = useMutation(attemptUpdateTodo);
  const { mutateAsync: deleteRequest, isLoading: isDeleting } =
    useMutation(deleteTodo);

  const { register, handleSubmit, setValue } = useForm();

  const onSubmit = async (data) => {
    if (openEdit) {
      await mutateAsync({
        token: user.token,
        id: updateTodo._id,
        description: data.description,
        isComplete: updateTodo.isComplete,
      });
      await client.invalidateQueries("todos");

      setOpenEdit(false);
      setOpenInput(false);
      setValue("description", "");
      return;
    }

    await createRequest({
      token: user.token,
      isComplete: false,
      ...data,
    });
    await client.invalidateQueries("todos");
    setValue("description", "");
  };

  const handleUpdate = (todo) => {
    setValue("description", todo.description);
    setUpdateTodo(todo);
    setOpenEdit(true);
    setOpenInput(true);
  };
  const handleToggle = async ({ id, isComplete }) => {
    await mutateAsync({
      token: user.token,
      id,
      isComplete,
    });
    await client.invalidateQueries("todos");
  };

  const handleDelete = async (id) => {
    await deleteRequest({ token: user.token, id });
    await client.invalidateQueries("todos");
  };

  return (
    <div className="flex flex-col items-center w-full space-y-3 xs:flex-row lg:flex-col lg:items-start xs:space-y-0 xs:space-x-3 md:space-x-5 lg:space-x-0 lg:space-y-10 xs:w-auto lg:w-full">
      {/* // <div className='grid grid-cols-2 gap-5 lg:gap-10 lg:grid-cols-none lg:w-full'> */}
      {/* <div className='w-full justify-self-center lg:justify-self-start'> */}
      <div className="w-full">
        <div className="w-full xs:w-max lg:w-full border-2 lg:border-4 border-[#FCE3EB] lg:border-l-0 lg:rounded-l-none rounded-[5px] lg:rounded-[20px] bg-[#FFFCFD] py-2 px-4 sm:px-5 lg:py-10 lg:pl-14 lg:pr-5">
          <DashboardNavLinks {...{ user }} />
        </div>
      </div>
      <div className="w-full">
        <div className="w-full xs:w-max lg:w-full border-2 lg:border-4 border-[#FCE3EB] lg:border-l-0 lg:rounded-l-none rounded-[5px] lg:rounded-[20px] bg-[#FFFCFD] py-2 px-4 sm:px-5 lg:py-10 lg:pl-14 lg:pr-5">
          <form className="space-y-5" onSubmit={handleSubmit(onSubmit)}>
            <Link href="/dashboard/features/todo">
              <a className="flex items-center space-x-3 lg:hidden lg:space-x-5 customLabel">
                <img src="/icons/ring-tik.svg" alt="" className="w-7 lg:w-8" />
                <h4 className="text-sm font-semibold capitalize sm:text-base lg:text-lg customLabel">
                  Just to do list
                </h4>
              </a>
            </Link>
            <div className="items-center hidden space-x-3 lg:flex lg:space-x-5 ">
              <img src="/icons/ring-tik.svg" alt="" className="w-7 lg:w-8" />
              <h4 className="text-sm font-semibold capitalize sm:text-base lg:text-lg ">
                Just to do list
              </h4>
            </div>
            <div className="hidden lg:block lg:space-y-5">
              <button
                type="button"
                className="px-5 py-2 font-medium capitalize transition duration-300 border-2 rounded-lg border-secondary-alternative/40 font-inter bg-secondary-alternative/20 hover:bg-secondary-alternative/40 hover:border-primary"
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
                    placeholder="Enter to do"
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
              {todos
                ?.slice(-3)
                ?.reverse()
                .map((todo) => (
                  <div key={todo._id} className="relative flex space-x-5 group">
                    <button
                      type="button"
                      className="flex items-center justify-center w-6 h-6"
                      onClick={() =>
                        handleToggle({
                          id: todo._id,
                          isComplete: !todo.isComplete,
                        })
                      }
                    >
                      {todo.isComplete ? (
                        <CheckCircleIcon className="w-6 h-6" />
                      ) : (
                        <div className="flex items-center justify-center w-6 h-6">
                          <span className="block w-5 h-5 border-2 rounded-full border-primary"></span>
                        </div>
                      )}
                    </button>
                    <p
                      className={`text-base font-normal break-words ${
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
                    <div className="absolute top-0 right-0 flex items-center invisible px-2 py-1 space-x-2 bg-white opacity-0 group-hover:opacity-100 group-hover:visible">
                      <button type="button" onClick={() => handleUpdate(todo)}>
                        <PencilAltIcon className="w-6 h-6 text-blue-300 transition-colors duration-300 hover:text-blue-500" />
                      </button>
                      <button
                        type="button"
                        onClick={() => handleDelete(todo._id)}
                      >
                        <TrashIcon className="w-6 h-6 text-red-300 transition-colors duration-300 hover:text-red-500" />
                      </button>
                    </div>
                  </div>
                ))}
              <Link href="/dashboard/features/todo">
                <a className="block text-lg font-medium capitalize hover:underline">
                  See all
                </a>
              </Link>
            </div>
          </form>
        </div>
      </div>
      <div className="justify-center hidden w-full mt-10 lg:flex">
        <QRCodeGenerator sidebar />
      </div>
    </div>
  );
};

export default Sidebar;
