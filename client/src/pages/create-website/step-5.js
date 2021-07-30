import { CreateWebsiteContainer } from '@components/createWebsite';
import { Button, Loader } from '@components/index';
import { addCouplePictures } from '@features/question/questionSlice';
import { XIcon } from '@heroicons/react/solid';
import { removeImage } from '@utils/index';
import axios from 'axios';
import { Image } from 'cloudinary-react';
import { motion } from 'framer-motion';
import { useRouter } from 'next/router';
import { useCallback, useEffect, useState } from 'react';
import { useDropzone } from 'react-dropzone';
import { useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';

const easing = [0.6, -0.05, 0.01, 0.99];
const fadeInUp = {
  initial: {
    opacity: 0,
    y: 60,
  },
  animate: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: easing,
    },
  },
};
const fadeInLeft = {
  initial: {
    opacity: 0,
    x: 60,
  },
  animate: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.6,
      ease: easing,
    },
  },
};

const stagger = {
  animate: {
    transition: {
      staggerChildren: 0.05,
    },
  },
};

const UploadCouplePicture = () => {
  const dispatch = useDispatch();
  const { push } = useRouter();
  const [loading, setLoading] = useState(false);
  const { questions } = useSelector(state => state.question);
  const [uploadedFiles, setUploadedFiles] = useState(
    questions.couplePictures || []
  );

  // React Hook Form to handle form submission
  const {
    watch,
    register,
    getValues,
    setValue,
    setError,
    clearErrors,
    handleSubmit,
    formState: { errors },
  } = useForm({
    mode: 'all',
    defaultValues: { uploadCouplePicture: uploadedFiles },
  });

  // Watch input field changes
  watch(['do_this_later_upload_couple', 'uploadCouplePicture']);
  // doThisLater
  const doThisLater = getValues('do_this_later_upload_couple');

  // handle side effect if user upload couple picture later
  useEffect(() => {
    if (doThisLater) {
      clearErrors('uploadCouplePicture');
    }
  }, [doThisLater]);

  // Handle form submission
  const onSubmit = _ => {
    // check if user will not do this later
    if (!getValues('do_this_later_upload_couple')) {
      // if (uploadedFiles.length === 0) return;
      dispatch(addCouplePictures(uploadedFiles));
    } else {
      dispatch(addCouplePictures(null));
    }
    // if submit done then go to next page
    push('/create-website/step-6');
  };

  // Handle image uploadedFiles
  const onDrop = useCallback(
    acceptedFiles => {
      // check if user uploaded maximum number of files & throw an error also block uploading images
      if (uploadedFiles.length === 4) {
        setError('uploadCouplePicture', {
          type: 'maxLength',
          message: 'Maximum number of files uploaded',
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
          setValue('uploadCouplePicture', data);
          clearErrors('uploadCouplePicture');
          setUploadedFiles(prev => [...prev, data]);
          setLoading(false);
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

  // Handle remove images
  const handleRemoveImage = async id => {
    try {
      setLoading(true);
      await removeImage(id);
      setUploadedFiles(prev => prev.filter(image => image.public_id !== id));
      if (uploadedFiles.length === 0) {
        setError('uploadCouplePicture', {
          type: 'required',
          message: 'Please upload couple picture file or check do this later',
        });
        setValue('uploadCouplePicture', undefined, {
          shouldValidate: true,
        });
      } else {
        setValue('uploadCouplePicture', uploadedFiles);
      }
      setLoading(false);
    } catch (err) {
      setLoading(false);
      console.error(err.message);
    }
  };

  return (
    <CreateWebsiteContainer seo={{ title: 'Upload Couple Picture' }}>
      {loading && <Loader />}
      <motion.div exit={{ opacity: 0 }} initial='initial' animate='animate'>
        <motion.form
          className={`flex flex-col items-center justify-center`}
          onSubmit={handleSubmit(onSubmit)}
          variants={stagger}
        >
          <motion.div
            className='w-full flex flex-col items-center justify-center gap-8 mb-5'
            variants={fadeInUp}
          >
            <motion.div
              className='flex items-center justify-center flex-wrap gap-5'

              // ani
              // variants={stagger}
            >
              {uploadedFiles.map(image => (
                <motion.div
                  className='group border-2 border-primary rounded-lg overflow-hidden relative transition duration-300'
                  key={image.url}
                  layout
                  exit={{ opacity: 0 }}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  // variants={fadeInLeft}
                >
                  <button
                    type='button'
                    className='hidden group-hover:inline-block absolute right-1 top-1 p-1 text-red-400 border border-primary bg-white rounded-full transition duration-300'
                    onClick={() => handleRemoveImage(image.public_id)}
                  >
                    <XIcon className='w-5 h-5' />
                  </button>
                  <Image
                    cloudName={process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME}
                    publicId={image.public_id}
                    src={!image.public_id ? image.url : null}
                    width='300'
                    crop='scale'
                    className='h-40 w-60 object-cover'
                  />
                </motion.div>
              ))}
            </motion.div>

            <motion.div
              className='relative'
              {...getRootProps()}
              variants={fadeInUp}
            >
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
            </motion.div>
          </motion.div>
          <motion.div
            className='flex items-center space-x-3 mb-5'
            variants={fadeInUp}
          >
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
          </motion.div>
          <motion.div
            className='my-5 text-center flex items-center gap-5 flex-wrap sm:flex-nowrap'
            variants={fadeInUp}
          >
            <Button
              label='Back'
              className='opacity-50 !rounded-md'
              onClick={() => push('/create-website/step-4')}
            />
            <Button label='Next' type='submit' className=' !rounded-md' />
          </motion.div>
        </motion.form>
      </motion.div>
    </CreateWebsiteContainer>
  );
};

export default UploadCouplePicture;
