import DashboardActiveLink from './DashboardActiveLink';

const navLinks = [
  {
    label: 'Dashboard',
    href: '/dashboard',
  },
  {
    label: 'Your Website',
    href: '/dashboard/website',
  },
  {
    label: 'Address & RSVP',
    href: '/address-and-rsvp',
  },
  {
    label: 'Gift & Registry',
    href: '/gift-and-registry',
  },
];

const DashboardNavLinks = () => {
  return (
    <div className='flex flex-col space-y-10'>
      {navLinks.map((link, index) => (
        <DashboardActiveLink href={link.href} key={index}>
          {link.label}
        </DashboardActiveLink>
      ))}
      <div>
        <h4 className='text-lg font-medium max-w-max text-primary font-inter group hover:text-primary transition-colors duration-300 mb-3'>
          Invitations
        </h4>
        <div className='space-y-3'>
          <div className='flex items-center space-x-3'>
            <span className='w-2 h-2 bg-[#F9D1DE] rounded-full inline-block' />
            <span className='text-lg font-medium'>E-invite</span>
          </div>
          <div className='flex items-center space-x-3'>
            <span className='w-2 h-2 bg-[#F9D1DE] rounded-full inline-block' />
            <span className='text-lg font-medium'>Email</span>
          </div>
          <div className='flex items-center space-x-3'>
            <span className='w-2 h-2 bg-[#F9D1DE] rounded-full inline-block' />
            <span className='text-lg font-medium'>Text</span>
          </div>
          <div className='flex items-center space-x-3'>
            <span className='w-2 h-2 bg-[#F9D1DE] rounded-full inline-block' />
            <span className='text-lg font-medium'>Mail</span>
          </div>
        </div>
      </div>
      <DashboardActiveLink href='guest-registry'>
        Guest Registry
      </DashboardActiveLink>
    </div>
  );
};

export default DashboardNavLinks;
