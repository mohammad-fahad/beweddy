const CenterTitle = ({ title }) => {
  return (
    <div className="border-4 border-l-0 border-r-0 border-primary py-5 bg-[#fce0eb]">
      <div className="container text-center">
        <h4 className="text-[36px] commonTitle font-normal text-primary">
          {title}
        </h4>
      </div>
    </div>
  );
};

export default CenterTitle;
