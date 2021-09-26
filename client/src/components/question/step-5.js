import { CreateWebsiteContainer } from "@components/createWebsite";
import { Button, CropImage, Heading, Loader } from "@components/index";
import { addCouplePictures } from "@features/question/questionSlice";
import { XIcon } from "@heroicons/react/solid";
import { attemptImageUpload, removeImage } from "@utils/index";
import axios from "axios";
import { Image } from "cloudinary-react";
import { motion } from "framer-motion";
import { useRouter } from "next/router";
import { useCallback, useEffect, useState } from "react";
import { useDropzone } from "react-dropzone";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";

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
  const [file, setFile] = useState();
  const [preview, setPreview] = useState();
  const [selectedImageFile, setSelectedImageFile] = useState();
  const { questions } = useSelector((state) => state.question);
  const [uploadedFiles, setUploadedFiles] = useState(questions.couplePictures);

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
    mode: "all",
    defaultValues: { uploadCouplePicture: uploadedFiles },
  });

  // Watch input field changes
  watch(["do_this_later_upload_couple", "uploadCouplePicture"]);
  // doThisLater
  const doThisLater = getValues("do_this_later_upload_couple");

  // React hook form register uploadCouplePicture
  useEffect(() => {
    register("uploadCouplePicture", {
      required: {
        value: !doThisLater,
        message: "Please upload file or check do this later",
      },
    });
  }, [register, doThisLater]);

  useEffect(() => {
    setValue("uploadCouplePicture", uploadedFiles);
  }, [uploadedFiles]);
  // handle side effect if user upload couple picture later
  useEffect(() => {
    if (doThisLater) {
      setUploadedFiles([]);
      clearErrors("uploadCouplePicture");
    }
  }, [doThisLater]);

  // Handle form submission
  const onSubmit = (_) => {
    // check if user will not do this later
    if (!getValues("do_this_later_upload_couple")) {
      // if (uploadedFiles.length === 0) return;
      dispatch(addCouplePictures(uploadedFiles));
    } else {
      dispatch(addCouplePictures([]));
    }
    // if submit done then go to next page
    push({ query: { step: 6 } });
    // push('/create-website/step-6', null, { shallow: true });
  };

  // Handle image uploadedFiles

  const onDrop = useCallback((acceptedFiles) => {
    if (uploadedFiles.length === 4) {
      setError("uploadCouplePicture", {
        type: "maxLength",
        message: "Maximum number of files uploaded",
      });
      return;
    }

    const fileDropped = acceptedFiles[0];
    if (fileDropped["type"].split("/")[0] === "image") {
      setSelectedImageFile(fileDropped);
      return;
    }
    setFile(fileDropped);
    const previewUrl = URL.createObjectURL(fileDropped);
    setPreview(previewUrl);
  });

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    accept: "image/*",
    multiple: false,
  });

  const onCropSave = async ({ file, preview }) => {
    setLoading(true);
    setPreview(preview);
    setFile(file);
    const URL = `https://api.cloudinary.com/v1_1/${process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME}/image/upload`;
    try {
      const formData = new FormData();
      formData.append("file", file);
      formData.append("upload_preset", "beweddy_csfhgnsu");

      const config = {
        headers: {
          "Content-Type": "multipart/form-data",
          // Authorization: `Bearer ${user.token}`,
        },
      };
      const { data } = await axios.post(URL, formData, config);
      const { public_id, height, width, secure_url, url } = data;
      // const formData = new FormData();

      // formData.append('image', file);
      // formData.append(
      //   'folder',
      //   process.env.NEXT_PUBLIC_CLOUDINARY_UPLOAD_PRESET
      // );
      // const data = await attemptImageUpload(formData);

      // setUploadedFiles(prev => [...prev, data]);
      setUploadedFiles((prev) => [
        ...prev,
        { public_id, height, width, secure_url, url },
      ]);

      setValue("uploadCouplePicture", uploadedFiles);
      clearErrors("uploadCouplePicture");
      setLoading(false);
    } catch (err) {
      setLoading(false);
      console.error(err.message);
    }
  };

  // Handle remove images
  const handleRemoveImage = async (id) => {
    try {
      setLoading(true);
      await removeImage(id);
      setUploadedFiles((prev) =>
        prev.filter((image) => image.public_id !== id)
      );
      if (uploadedFiles.length === 0) {
        setError("uploadCouplePicture", {
          type: "required",
          message: "Please upload couple picture file or check do this later",
        });
        setValue("uploadCouplePicture", undefined, {
          shouldValidate: true,
        });
      } else {
        setValue("uploadCouplePicture", uploadedFiles);
      }
      setLoading(false);
    } catch (err) {
      setLoading(false);
      console.error(err.message);
    }
  };

  return (
    <CreateWebsiteContainer seo={{ title: "Upload Couple Picture" }} page="5">
      {loading && <Loader />}
      <motion.form
        className={`flex flex-col items-center justify-center w-full -mt-9 sm:mt-0`}
        onSubmit={handleSubmit(onSubmit)}
        variants={stagger}
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
        >
          <Heading
            label="Upload your favorite pictures of you two. ❤️"
            color="bg-primary !text-[36px] commonTitle"
            // className='pt-5 md:pt-0'
            lineStyle={{ marginBottom: "25px" }}
          />
          {/* <p className="text-[12px] mb-1">Crop Pictures For Cover Photos</p> */}
          <p className="text-2xl font-semibold text-center">Up to 4 Images</p>
        </motion.div>

        <motion.div
          className="flex flex-col items-center justify-center w-full gap-8 mb-5"
          variants={fadeInUp}
        >
          <motion.div className="flex flex-wrap items-center justify-center w-full gap-5">
            {uploadedFiles.map((image) => (
              <motion.div
                key={image.public_id}
                className="max-w-[200px] md:max-w-[190px] w-full group border-[3px] border-primary rounded-[5px] overflow-hidden mt-9 relative"
                layout
                exit={{ opacity: 0 }}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
              >
                <button
                  type="button"
                  className="absolute z-50 hidden p-1 text-red-400 bg-white border rounded-full group-hover:inline-block right-1 top-1 border-primary"
                  onClick={() => handleRemoveImage(image.public_id)}
                >
                  <XIcon className="w-5 h-5" />
                </button>
                {/* <div className="!aspect-w-16 !aspect-h-9"> */}
                <div>
                  <Image
                    cloudName={process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME}
                    publicId={image.public_id}
                    src={!image.public_id ? image.url : null}
                    // width="200"
                    height="200"
                    crop="scale"
                    // className="object-cover !bg-center !bg-cover w-full"
                    className="object-cover w-full]"
                  />
                </div>
              </motion.div>
            ))}
          </motion.div>

          <motion.div
            className="relative focus:outline-none"
            {...getRootProps()}
            variants={fadeInUp}
          >
            <input {...getInputProps()} />
            <p className="text-[12px] mb-1">Crop Pictures For Cover Photos</p>
            <label
              htmlFor="uploadCouplePicture"
              className="w-56 bg-white cursor-pointer inline-block text-center text-sm md:text-base font-medium md:font-semibold py-2 md:py-3 px-4 placeholder-primary border-[3px] border-primary rounded-[5px]"
            >
              Upload
            </label>
            <p className="mt-2 text-sm font-light text-center text-red-400">
              {errors?.uploadCouplePicture?.message}
            </p>
          </motion.div>
        </motion.div>
        <motion.div
          className="flex items-center mb-5 space-x-3"
          variants={fadeInUp}
        >
          <input
            type="checkbox"
            id="do_this_later_upload_couple"
            value={true}
            className="text-secondary-alternative rounded-md border-2 border-primary w-[24px] h-[24px] focus:ring-2 focus:ring-offset-2 focus:ring-primary"
            {...register("do_this_later_upload_couple")}
          />
          <label
            htmlFor="do_this_later_upload_couple"
            className="text-2xl font-normal cursor-pointer font-inter subTitle"
          >
            I will do this later
          </label>
        </motion.div>
        <motion.div
          className="flex flex-wrap items-center gap-5 mb-5 text-center sm:flex-nowrap"
          variants={fadeInUp}
        >
          <Button
            label="Back"
            className="opacity-50 !bg-[#bebebe] !rounded-[10px]"
            onClick={
              () => push({ query: { step: 4 } })
              // push('/create-website/step-4', null, { shallow: true })
            }
          />
          <Button label="Next" type="submit" className=" !rounded-[10px]" />
        </motion.div>
      </motion.form>
      <CropImage
        onSave={onCropSave}
        selectedFile={selectedImageFile}
        aspectRatio={16 / 9}
      />
    </CreateWebsiteContainer>
  );
};

export default UploadCouplePicture;
