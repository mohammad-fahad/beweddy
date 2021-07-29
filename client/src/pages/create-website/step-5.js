import { CreateWebsiteContainer } from '@components/createWebsite';
import { Button, Heading } from '@components/index';
import { addCouplePictures } from '@features/question/questionSlice';
import axios from 'axios';
import { Image } from 'cloudinary-react';
import { useRouter } from 'next/router';
import { useCallback, useEffect, useState } from 'react';
import { useDropzone } from 'react-dropzone';
import { useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';

const UploadCouplePicture = () => {
  const dispatch = useDispatch();
  const { push } = useRouter();
  const [loading, setLoading] = useState(false);
  const { questions } = useSelector(state => state.question);
  const [uploadedFiles, setUploadedFiles] = useState(
    questions.couplePictures || []
  );
  const {
    watch,
    register,
    getValues,
    setValue,
    setError,
    handleSubmit,
    formState: { errors },
  } = useForm({
    mode: 'all',
    defaultValues: { uploadCouplePicture: questions.couplePictures },
  });

  watch(['do_this_later_upload_couple', 'uploadCouplePicture']);

  const onSubmit = _ => {
    if (!getValues('do_this_later_upload_couple')) {
      dispatch(addCouplePictures(uploadedFiles));
    }
    push('/create-website/step-6');
  };

  const onDrop = useCallback(
    (acceptedFiles, rejectedFiles) => {
      console.log(rejectedFiles);

      if (uploadedFiles.length === 4) {
        setError('uploadCouplePicture', {
          type: 'maxLength',
          message: 'Maximum number of files uploaded is 4',
        });
        return;
      }
      setLoading(true);
      const URL = `https://api.cloudinary.com/v1_1/${process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME}/upload`;
      const config = {
        headers: {
          'Content-Type': 'multipart/form-data',
          // Authorization: `Bearer ${userLogin.token}`,
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
          setValue('uploadCouplePicture', data);
          setUploadedFiles(prev => [...prev, data]);
        } catch (err) {
          setLoading(false);
          console.error(err.message);
        }
      });
    },
    [uploadedFiles]
  );

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    accept: 'image/*',
    multiple: true,
    maxFiles: 4,
  });

  return (
    <CreateWebsiteContainer seo={{ title: 'Upload Couple Picture' }}>
      <form
        className={`flex flex-col items-center justify-center`}
        onSubmit={handleSubmit(onSubmit)}
      >
        <div className='w-full flex flex-col items-center justify-center gap-8 mb-5'>
          <div className='flex items-center justify-center flex-wrap gap-5'>
            {uploadedFiles.map(image => (
              <div
                className='border-2 border-primary rounded-lg overflow-hidden'
                key={image.url}
              >
                <Image
                  cloudName={process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME}
                  publicId={image.public_id}
                  src={!image.public_id ? image.url : null}
                  width='300'
                  crop='scale'
                  className='h-40 w-60 object-cover'
                />
              </div>
            ))}
          </div>

          <div className='relative' {...getRootProps()}>
            <input
              id='uploadCouplePicture'
              ref={register('uploadCouplePicture', {
                required: {
                  value: !getValues('do_this_later_upload_couple'),
                  message:
                    'Please upload couple picture file or check do this later',
                },
              })}
              {...getInputProps()}
            />
            <label
              htmlFor='uploadCouplePicture'
              className='bg-white cursor-pointer inline-block text-center font-semibold py-3 px-4 md:px-10 placeholder-primary border-2 border-primary rounded-lg'
            >
              Upload your favorite picture of you two. ❤️
            </label>
            <p className='mt-2 text-red-400 font-light text-sm text-center'>
              {errors?.uploadCouplePicture?.message}
            </p>
          </div>
        </div>
        <div className='flex items-center space-x-3 mb-5'>
          <input
            type='checkbox'
            id='do_this_later_upload_couple'
            value={true}
            className='text-secondary-alternative rounded-md border-2 border-primary w-[24px] h-[24px] focus:ring-2 focus:ring-offset-2 focus:ring-primary'
            {...register('do_this_later_upload_couple')}
          />
          <label
            htmlFor='do_this_later_upload_couple'
            className='font-inter text-lg font-normal cursor-pointer'
          >
            I will do this later
          </label>
        </div>
        <div className='my-5 text-center flex items-center gap-5 flex-wrap sm:flex-nowrap'>
          <Button
            label='Back'
            className='opacity-50 !rounded-md'
            onClick={() => push('/create-website/step-4')}
          />
          <Button label='Next' type='submit' className=' !rounded-md' />
        </div>
      </form>
    </CreateWebsiteContainer>
  );
};

export default UploadCouplePicture;
