const { Heading } = require('@components/shared');

const Offers = ({ offers, className, title }) => {
  return (
    <div className={`border-t-4 border-primary ${className ? className : ''}`}>
      <div className="container py-20">
        <Heading
          label={title}
          color="bg-[#F9D1DE]"
          className="!max-w-4xl drop-shadow-2xl"
          // lineStyle={{ marginBottom: '45px' }}
        />

        <div className="grid gap-20 md:grid-cols-2">
          {offers.map((offer, index) => (
            <div key={index} className="w-full max-w-md mx-auto">
              <div className="mb-3">
                <img src={offer.icon} alt="" className="w-12 lg:w-14" />
              </div>
              <h1 className="mb-3 text-3xl lg:text-4xl font-normal !leading-[146%]">
                {offer.title}
              </h1>
              <p className="text-base text-gray-700 lg:text-lg font-regular">
                {offer.paragraph}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Offers;
