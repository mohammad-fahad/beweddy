import { CreateWebsiteContainer } from '@components/createWebsite';
import { Button, Heading } from '@components/index';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useCallback, useState } from 'react';
import { useDropzone } from 'react-dropzone';
import { useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';
import { Image } from 'cloudinary-react';
import axios from 'axios';
import { addWeddingAnnouncement } from '@features/question/questionSlice';
import { XIcon } from '@heroicons/react/solid';

const UploadAnnouncement = () => {
  const dispatch = useDispatch();
  const { push } = useRouter();
  const [loading, setLoading] = useState(false);
  const { questions } = useSelector(state => state.question);
  const [uploadedFile, setUploadedFile] = useState(
    questions.weddingAnnouncement?.uploadAnnouncement || null
  );

  const {
    watch,
    register,
    getValues,
    setValue,
    handleSubmit,
    formState: { errors },
  } = useForm({
    mode: 'all',
    defaultValues: { uploadAnnouncement: uploadedFile },
  });

  watch('do_this_later');

  const onSubmit = data => {
    if (!getValues('do_this_later')) {
      dispatch(addWeddingAnnouncement(data));
    } else {
      dispatch(addWeddingAnnouncement({}));
    }
    push('/create-website/step-4');
  };

  const onDrop = useCallback(acceptedFiles => {
    setLoading(true);
    const URL = `https://api.cloudinary.com/v1_1/${process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME}/upload`;
    const config = {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    };

    acceptedFiles.forEach(async acceptedFile => {
      try {
        const formData = new FormData();

        formData.append('file', acceptedFile);
        formData.append(
          'upload_preset',
          process.env.NEXT_PUBLIC_CLOUDINARY_UPLOAD_PRESET
        );

        formData.append(
          'folder',
          process.env.NEXT_PUBLIC_CLOUDINARY_UPLOAD_PRESET
        );
        const { data } = await axios.post(URL, formData, config);
        setLoading(false);
        setValue('uploadAnnouncement', data);
        setUploadedFile(data);
      } catch (err) {
        setLoading(false);
        console.error(err.message);
      }
    });
  }, []);

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    accept: 'image/*',
    multiple: false,
  });
  return (
    <CreateWebsiteContainer
      seo={{ title: 'Upload Wedding Invitation & Announcement' }}
    >
      <form
        className={`flex flex-col items-center justify-center`}
        onSubmit={handleSubmit(onSubmit)}
      >
        <Heading
          label='Upload Wedding invite & announcement!'
          color='bg-primary'
          lineStyle={{ marginBottom: '45px' }}
        />
        <div className='w-full flex flex-col items-center justify-center gap-8 mb-10'>
          {uploadedFile && (
            <div className='flex items-center justify-center flex-wrap gap-5'>
              <div className='border-2 border-primary rounded-lg overflow-hidden relative'>
                <button className='absolute right-1 top-1 p-1 text-red-400 border border-primary bg-white rounded-full'>
                  <XIcon className='w-5 h-5' />
                </button>
                <Image
                  cloudName={process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME}
                  publicId={uploadedFile.public_id}
                  src={!uploadedFile.public_id ? uploadedFile.url : null}
                  width='300'
                  crop='scale'
                  className='h-40 w-60 object-cover'
                />
              </div>
            </div>
          )}
          <div className='relative' {...getRootProps()}>
            <input
              id='uploadAnnouncement'
              ref={register('uploadAnnouncement', {
                required: {
                  value: !getValues('do_this_later'),
                  message: 'Please upload file or check do this later',
                },
              })}
              {...getInputProps()}
            />
            <label
              htmlFor='uploadAnnouncement'
              className='w-56 bg-white cursor-pointer inline-block text-center font-semibold py-3 px-4 placeholder-primary border-2 border-primary rounded-lg'
            >
              Upload
            </label>
            <p className='mt-2 text-red-400 font-light text-sm text-center'>
              {errors?.uploadAnnouncement?.message}
            </p>
          </div>
          <div className='flex items-center space-x-3'>
            <input
              type='checkbox'
              id='do_this_later'
              value={true}
              className='text-secondary-alternative rounded-md border-2 border-primary w-[24px] h-[24px] focus:ring-2 focus:ring-offset-2 focus:ring-primary'
              {...register('do_this_later')}
            />
            <label
              htmlFor='do_this_later'
              className='font-inter text-lg font-normal cursor-pointer'
            >
              I will do this later
            </label>
          </div>
        </div>
        <p className='font-light max-w-lg text-center'>
          Don’t have one yet? we recommend Esty <br />
          <Link href='/'>
            <a className='font-inter text-blue-500 font-semibold hover:underline mt-3 block'>
              Etsy.com/beweddy
            </a>
          </Link>
        </p>
        <div className='my-10 text-center flex items-center gap-5 flex-wrap sm:flex-nowrap'>
          <Button
            label='Back'
            className='opacity-50 !rounded-md'
            onClick={() => push('/create-website/step-2')}
          />
          <Button label='Next' type='submit' className=' !rounded-md' />
        </div>
      </form>
    </CreateWebsiteContainer>
  );
};

export default UploadAnnouncement;
