import Head from 'next/head';
import Link from 'next/link';
import { DashboardHeader } from '@components/dashboard';
import DashboardTopBar from '@components/dashboard/header/TopBar';
import DashboardLayout from '@components/dashboard/layout';
import { Button, Footer, Loader, RegistryItem } from '@components/index';
import { LinkIcon, PencilIcon } from '@heroicons/react/outline';
import { Fragment, useState } from 'react';
import { withAuthRoute } from '@hoc/withAuthRoute';
import Image from 'next/image';
import DashboardContainer from '@components/dashboard/DashboardContainer';
import { useQuery } from 'react-query';
import { getRegistries } from '@services/Registry';
import { useDispatch, useSelector } from 'react-redux';
import { attemptUpdateUserProfile } from '@features/user/userActions';

const RegistriesPage = () => {
  const dispatch = useDispatch();
  const { loading, user } = useSelector(state => state.user);
  const { data, isLoading, isFetching } = useQuery('registries', getRegistries);
  const [selected, setSelected] = useState([]);

  //* Filter Registries. If user already added
  const registries = data?.filter(
    registry => !user?.registries.includes(registry._id)
  );

  //* Handle Card Select
  const handleItemSelect = id => {
    const index = selected.findIndex(item => item === id);
    if (index === -1) {
      setSelected(prev => [...prev, id]);
    } else {
      setSelected(prev => prev.filter(item => item !== id));
    }
  };

  //* Add Registry item to user
  const addRegistries = () => {
    dispatch(attemptUpdateUserProfile({ registries: selected }));
    setSelected([]);
  };

  if (isLoading || loading) return <Loader />;

  return (
    <Fragment>
      <Head>
        <title>Beweddy | Registry</title>
      </Head>
      {/* {loading && <Loader />} */}
      <DashboardTopBar coupleName />
      <DashboardLayout marginBottom='mb-[2.1rem]' shadow>
        <DashboardHeader title='Registries' />
        <DashboardContainer>
          <div className='space-y-20'>
            <div class='grid sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-6 registry-grid'>
              {registries?.length <= 0
                ? 'No registries found'
                : registries?.map(registry => (
                    <RegistryItem
                      key={registry._id}
                      {...{ registry }}
                      onChange={e => handleItemSelect(e.target.id)}
                      checked={selected.includes(registry._id)}
                    />
                  ))}
            </div>
            {registries?.length > 0 && (
              <div className='flex items-center space-x-5 flex-wrap sm:flex-nowrap'>
                {/* <Button
                label='Back'
                className='opacity-50 !rounded-[5px] !py-2 mx-0'
                // onClick={() => push({ query: { step: 1 } })}
              /> */}
                <Button
                  label='Save'
                  type='button'
                  className='mx-0 !py-2 !rounded-[5px]'
                  onClick={addRegistries}
                />
              </div>
            )}
          </div>
        </DashboardContainer>
      </DashboardLayout>
      <Footer hideSocial />
    </Fragment>
  );
};

export default withAuthRoute(RegistriesPage);
