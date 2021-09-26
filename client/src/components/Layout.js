// import { attemptFetchCountryList } from '@features/country/countryActions';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

const Layout = ({ children }) => {
  const dispatch = useDispatch();
  const { countries } = useSelector(state => state.countryList);

  // useEffect(() => {
  //   if (!countries?.length) {
  //     dispatch(attemptFetchCountryList());
  //   }
  // }, [countries]);
  return (
    <>
      {/* <Header /> */}
      <main>{children}</main>
    </>
  );
};

export default Layout;
