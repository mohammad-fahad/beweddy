import { CreateWebsiteContainer } from '@components/createWebsite';
import { Button, CropImage, Heading, Loader } from '@components/index';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useCallback, useEffect, useState } from 'react';
import { useDropzone } from 'react-dropzone';
import { useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';
import { Image } from 'cloudinary-react';
import { addWeddingAnnouncement } from '@features/question/questionSlice';
import { XIcon } from '@heroicons/react/solid';
import { attemptImageUpload, removeImage } from '@utils/index';
import { motion } from 'framer-motion';
import { isEmpty } from 'lodash';

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

const stagger = {
  animate: {
    transition: {
      staggerChildren: 0.05,
    },
  },
};

const UploadAnnouncement = () => {
  const dispatch = useDispatch();
  const { push } = useRouter();
  const [loading, setLoading] = useState(false);
  const [file, setFile] = useState();
  const [preview, setPreview] = useState();
  const [selectedImageFile, setSelectedImageFile] = useState();

  const { questions } = useSelector(state => state.question);
  const [uploadedFile, setUploadedFile] = useState(
    questions.weddingAnnouncement?.uploadAnnouncement
  );

  const {
    watch,
    register,
    getValues,
    setValue,
    clearErrors,
    handleSubmit,
    formState: { errors },
  } = useForm({
    mode: 'all',
    defaultValues: { uploadAnnouncement: uploadedFile },
  });

  watch(['do_this_later']);
  const doThisLater = getValues('do_this_later');

  // React hook form register uploadAnnouncement
  useEffect(() => {
    register('uploadAnnouncement', {
      required: {
        value: !doThisLater,
        message: 'Please upload file or check do this later',
      },
    });
  }, [register, doThisLater]);
  
  useEffect(() => {
    setValue('uploadAnnouncement', uploadedFile);
  }, [uploadedFile]);

  useEffect(() => {
    if (doThisLater) {
      clearErrors('uploadAnnouncement');
    }
  }, [doThisLater]);

  const onSubmit = data => {
    if (!getValues('do_this_later')) {
      dispatch(addWeddingAnnouncement(data));
    } else {
      dispatch(addWeddingAnnouncement({}));
    }
    push({ query: { step: 4 } });
    // push('/create-website/step-4', null, { shallow: true });
  };

  const onDrop = useCallback(acceptedFiles => {
    const fileDropped = acceptedFiles[0];
    if (fileDropped['type'].split('/')[0] === 'image') {
      setSelectedImageFile(fileDropped);
      return;
    }
    setFile(fileDropped);
    const previewUrl = URL.createObjectURL(fileDropped);
    setPreview(previewUrl);
  });

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    accept: 'image/*',
    multiple: false,
  });

  const onCropSave = async ({ file, preview }) => {
    setPreview(preview);
    setFile(file);
    try {
      setLoading(true);
      const formData = new FormData();

      formData.append('image', file);
      formData.append(
        'folder',
        process.env.NEXT_PUBLIC_CLOUDINARY_UPLOAD_PRESET
      );
      const data = await attemptImageUpload(formData);
      setLoading(false);
      setValue('uploadAnnouncement', data);
      setUploadedFile(data);
      // setLoading(false);
      // setValue('uploadAnnouncement', preview);
      // setUploadedFile(preview);
    } catch (err) {
      setLoading(false);
      console.error(err.message);
    }
  };

  const handleRemoveImage = async () => {
    try {
      setLoading(true);
      await removeImage(uploadedFile.public_id);
      setUploadedFile({});
      setValue('uploadAnnouncement', {});
      setLoading(false);
    } catch (err) {
      setLoading(false);
      console.error(err.message);
    }
  };

  return (
    <CreateWebsiteContainer
      page='3'
      seo={{ title: 'Upload Wedding Invitation & Announcement' }}
    >
      {loading && <Loader />}
      <motion.form
        className={`flex flex-col items-center justify-center -mt-2 sm:mt-0`}
        onSubmit={handleSubmit(onSubmit)}
        exit={{ opacity: 0 }}
        variants={stagger}
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
        >
          <Heading
            label='Upload Wedding invite & announcement!'
            color='bg-primary'
            className='lg:!text-[40px]'
            lineStyle={{ marginBottom: '37px' }}
          />
        </motion.div>
        <motion.div
          className='w-full flex flex-col items-center justify-center gap-5 md:gap-8 mb-8 md:mb-10'
          variants={fadeInUp}
        >
          {!isEmpty(uploadedFile) && (
            <div className='max-w-[200px] md:max-w-[190px] w-full mx-auto'>
              <div className='group border-[3px] border-primary rounded-[5px] overflow-hidden relative'>
                <button
                  type='button'
                  className='z-50 hidden group-hover:inline-block absolute right-1 top-1 p-1 text-red-400 border border-primary bg-white rounded-full'
                  onClick={handleRemoveImage}
                >
                  <XIcon className='w-5 h-5' />
                </button>
                {/* <div className='aspect-w-1 aspect-h-1'> */}
                <div>
                  <Image
                    cloudName={process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME}
                    publicId={uploadedFile.public_id}
                    src={!uploadedFile.public_id ? uploadedFile.url : null}
                    // src={preview}
                    width='200'
                    crop='scale'
                    className='object-cover w-full'
                  />
                </div>
              </div>
              {/* <div className='pb-[80%] group border-[3px] border-primary rounded-[5px] overflow-hidden relative'>
                <button
                  type='button'
                  className='hidden group-hover:inline-block absolute right-1 top-1 p-1 text-red-400 border border-primary bg-white rounded-full'
                  onClick={handleRemoveImage}
                >
                  <XIcon className='w-5 h-5' />
                </button>
                <Image
                  cloudName={process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME}
                  publicId={uploadedFile.public_id}
                  src={!uploadedFile.public_id ? uploadedFile.url : null}
                  width='300'
                  crop='scale'
                  className='absolute inset-0 h-full object-cover w-full'
                />
              </div> */}
            </div>
          )}
          <motion.div
            className='relative focus:outline-none'
            variants={fadeInUp}
            {...getRootProps()}
          >
            <input {...getInputProps()} />
            <label
              htmlFor='uploadAnnouncement'
              className='w-56 bg-white cursor-pointer inline-block text-center text-sm md:text-base font-medium md:font-semibold py-2 md:py-3 px-4 placeholder-primary border-[3px] border-primary rounded-[5px]'
            >
              Upload
            </label>
            <p className='mt-2 text-red-400 font-light text-sm text-center'>
              {errors?.uploadAnnouncement?.message}
            </p>
          </motion.div>
          <motion.div
            className='flex items-center space-x-3 !-mt-5'
            variants={fadeInUp}
          >
            <input
              type='checkbox'
              id='do_this_later'
              value={true}
              className='text-secondary-alternative rounded-md border-2 border-primary w-[20px] md:w-[24px] h-[20px] md:h-[24px] focus:ring-2 focus:ring-offset-2 focus:ring-primary'
              {...register('do_this_later')}
            />
            <label
              htmlFor='do_this_later'
              className='font-inter text-sm md:text-lg font-normal cursor-pointer'
            >
              I will do this later
            </label>
          </motion.div>
        </motion.div>
        <motion.p
          className='font-light max-w-lg text-center !-mt-5 md:mt-0'
          variants={fadeInUp}
        >
          Don’t have one yet? we recommend Esty <br />
          <Link href='/'>
            <a className='font-inter text-blue-500 font-semibold hover:underline mt-3 block'>
              Etsy.com/beweddy
            </a>
          </Link>
        </motion.p>
        <motion.div
          className='my-1 md:my-5 text-center flex items-center gap-5 flex-wrap sm:flex-nowrap'
          variants={fadeInUp}
        >
          <Button
            label='Back'
            className='opacity-50 !rounded-[10px]'
            onClick={() => push({ query: { step: 2 } })}
          />
          <Button label='Next' type='submit' className=' !rounded-[10px]' />
        </motion.div>
      </motion.form>
      <CropImage
        onSave={onCropSave}
        selectedFile={selectedImageFile}
        // aspectRatio={3 / 2}
      />
    </CreateWebsiteContainer>
  );
};

export default UploadAnnouncement;
