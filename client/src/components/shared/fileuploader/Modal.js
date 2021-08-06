const Modal = ({ children, modalIsOpen, setModalIsOpen, onSave }) => {
  return (
    <div
      className={`absolute inset-0 w-full min-h-screen items-center justify-center transition-opacity duration-300
    ${modalIsOpen ? 'flex' : 'hidden'}
    `}
    >
      <div
        className='absolute inset-0 bg-black/25 w-full h-full z-0'
        onClick={() => setModalIsOpen(prev => !prev)}
      />
      <div className='max-w-lg w-full bg-white rounded-md p-5 relative z-10'>
        <h3 className='font-medium text-gray-800 text-xl mb-5'>
          Crop your image
        </h3>
        {children}
        <div className='mt-5'>
          <div className='flex items-center space-x-5'>
            <button
              className='py-2 text-sm px-5 border-2 border-black rounded-md'
              onClick={() => setModalIsOpen(false)}
            >
              Cancel
            </button>
            <button
              className='py-2 text-sm px-5 border-2 border-black bg-black hover:opacity-80 transition text-white rounded-md'
              onClick={onSave}
            >
              Save
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
