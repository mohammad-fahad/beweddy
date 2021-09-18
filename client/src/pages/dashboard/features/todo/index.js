import { DashboardHeader, ActivityInfo } from "@components/dashboard";
import DashboardContainer from "@components/dashboard/DashboardContainer";
import DashboardTopBar from "@components/dashboard/header/TopBar";
import DashboardLayout from "@components/dashboard/layout";
import { Footer, Loader } from "@components/index";
import {
  CheckCircleIcon,
  LinkIcon,
  PencilAltIcon,
  TrashIcon,
} from "@heroicons/react/outline";
import { withAuthRoute } from "@hoc/withAuthRoute";
import {
  attemptUpdateTodo,
  createTodo,
  deleteTodo,
  getTodos,
} from "@services/Todo";
import { nanoid } from "nanoid";
import Head from "next/head";
import { client } from "pages/_app";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { useMutation, useQuery } from "react-query";
import { useDispatch, useSelector } from "react-redux";

const TodoPage = () => {
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.user);
  // const todos = useSelector(state => state.todoList);
  const [openInput, setOpenInput] = useState(false);
  const [openEdit, setOpenEdit] = useState(false);
  const [updateTodo, setUpdateTodo] = useState("");
  const { data: todos, isLoading } = useQuery(["todos", user.token], getTodos);

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

  if (isLoading) return <Loader />;
  return (
    <>
      <Head>
        <title>Beweddy | Just Do It List</title>
      </Head>
      <DashboardTopBar />
      <DashboardLayout shadow>
        <DashboardHeader
          title={
            <h1 className="!text-[36px] commonTitle flex items-center gap-2">
              Just Do It List
              <img src="/icons/ring.svg" alt="" className="w-7 md:w-8" />
            </h1>
          }
        />
        <DashboardContainer>
          {/* <h1 className="!text-[36px] commonTitle flex items-center gap-2">
            Just Do It List{" "}
            <img src="/icons/ring.svg" alt="" className="w-7 md:w-8" />{" "}
          </h1> */}
          <div className="relative p-8 mt-5 border-4 border-gray-200 rounded-lg lg:p-10">
            <div className="w-max bg-white absolute top-[-1.9rem] left-1/2 -translate-x-1/2 py-3 px-5 flex items-center space-x-3">
              <img src="/icons/todo.svg" alt="" className="w-7 md:w-8" />
              <h4 className="text-base font-medium capitalize md:text-xl xl:text-2xl">
                Just do it list
              </h4>
              <img src="/icons/ring.svg" alt="" className="w-7 md:w-8" />
            </div>
            <form className="space-y-5" onSubmit={handleSubmit(onSubmit)}>
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
              {todos?.map((todo) => (
                <div
                  key={todo._id}
                  className="relative flex items-center space-x-5 group"
                >
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
                    {todo?.isComplete ? (
                      <CheckCircleIcon className="w-6 h-6" />
                    ) : (
                      <span className="inline-block w-5 h-5 border-2 rounded-full border-primary"></span>
                    )}
                  </button>
                  <p
                    className={`text-base md:text-lg font-normal subTitle ${todo.isComplete ? "line-through" : ""
                      }`}
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
            </form>
          </div>
        </DashboardContainer>
      </DashboardLayout>
      <Footer hideSocial />
    </>
  );
};

export default withAuthRoute(TodoPage);
