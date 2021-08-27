import DashboardNavLinks from './navLinks';
import { addTodo, deleteTodo, toggleTodo } from '@features/todo/todoSlice';
import { CheckCircleIcon, TrashIcon } from '@heroicons/react/outline';
import Link from 'next/link';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';
import { nanoid } from 'nanoid';
import { useRouter } from 'next/router';
import { InvitationNavLinks } from './invitation';
import { QRCodeGenerator } from '@components/shared';

const Sidebar = () => {
  const dispatch = useDispatch();
  const todos = useSelector(state => state.todoList);
  const [openInput, setOpenInput] = useState(false);
  const { pathname } = useRouter();
  const { register, handleSubmit, setValue } = useForm();

  const onSubmit = data => {
    dispatch(
      addTodo({
        id: nanoid(10),
        isComplete: false,
        ...data,
      })
    );
    setValue('description', '');
  };

  // if (pathname.includes('/dashboard/invitation')) {
  //   return (
  //     <div className='mb-10 border-4 border-[#FCE3EB] border-l-0 rounded-l-none rounded-[20px] bg-[#FFFCFD] py-10 px-14'>
  //       <InvitationNavLinks />
  //     </div>
  //   );
  // }
  return (
    <>
      <div className='mb-10 border-4 border-[#FCE3EB] border-l-0 rounded-l-none rounded-[20px] bg-[#FFFCFD] py-10 pl-14 pr-5'>
        <DashboardNavLinks />
      </div>
      <div className='border-4 border-[#FCE3EB] border-l-0 rounded-l-none rounded-[20px] bg-[#FFFCFD] py-10 pl-14 pr-5'>
        <form className='space-y-5' onSubmit={handleSubmit(onSubmit)}>
          <div className='flex items-center space-x-5'>
            <img src='/icons/todo.svg' alt='' className='w-8' />
            <h4 className='text-2xl font-medium capitalize'>Just to do list</h4>
          </div>
          <button
            type='button'
            className='capitalize border-2 border-secondary-alternative/40 py-2 px-5 rounded-lg font-inter bg-secondary-alternative/20 font-medium hover:bg-secondary-alternative/40 hover:border-primary transition duration-300'
            onClick={() => setOpenInput(prev => !prev)}
          >
            Add to do
          </button>
          {openInput && (
            <div className='relative w-full'>
              <input
                type='text'
                className='w-full rounded-[5px] border-2 border-gray-200 py-2 px-4 text-base font-normal placeholder-gray-400'
                placeholder='Enter todo'
                {...register('description', {
                  required: true,
                })}
              />
              <button
                type='submit'
                className='absolute top-1/2 right-[2px] -translate-y-1/2 font-inter font-medium py-2 px-5 bg-white'
              >
                Add
              </button>
            </div>
          )}
          {todos
            .slice(-6)
            .reverse()
            .map(todo => (
              <div key={todo.id} className='flex space-x-5 group'>
                <button
                  type='button'
                  className='flex items-center justify-center w-6 h-6'
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
                    <CheckCircleIcon className='w-6 h-6' />
                  ) : (
                    <div className='w-6 h-6 flex items-center justify-center'>
                      <span className='block border-2 border-primary w-5 h-5 rounded-full'></span>
                    </div>
                  )}
                </button>
                <p
                  className={`text-base font-normal cursor-pointer ${
                    todo.isComplete ? 'line-through' : ''
                  }`}
                  onClick={() =>
                    dispatch(
                      toggleTodo({
                        id: todo.id,
                        isComplete: !todo.isComplete,
                      })
                    )
                  }
                >
                  {todo.description}
                </p>
                <button
                  type='button'
                  onClick={() => dispatch(deleteTodo(todo.id))}
                >
                  <TrashIcon className='opacity-0 invisible group-hover:opacity-100 group-hover:visible w-6 h-6 text-red-300 hover:text-red-500 transition-colors duration-300' />
                </button>
              </div>
            ))}
          <Link href='/dashboard/todos'>
            <a className='text-lg block font-medium capitalize hover:underline'>
              See all
            </a>
          </Link>
        </form>
      </div>
      <div className='flex justify-center mt-10'>
        <QRCodeGenerator sidebar />
      </div>
    </>
  );
};

export default Sidebar;
