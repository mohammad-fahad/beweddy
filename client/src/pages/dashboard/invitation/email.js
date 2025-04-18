import Head from "next/head";
import { useRouter } from "next/router";
import { DashboardHeader } from "@components/dashboard";
import DashboardTopBar from "@components/dashboard/header/TopBar";
import DashboardLayout from "@components/dashboard/layout";
import { CropImage, Loader, Footer, Heading } from "@components/index";
import Image from "next/image";
import Select from "react-select";
import makeAnimated from "react-select/animated";
import { Fragment, useCallback, useEffect, useState } from "react";
import { withAuthRoute } from "@hoc/withAuthRoute";
import { EditorState, convertToRaw } from "draft-js";
import draftToHtml from "draftjs-to-html";
import { convertFromRaw } from "draft-js";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import dynamic from "next/dynamic";

const Editor = dynamic(
  () => import("react-draft-wysiwyg").then((mod) => mod.Editor),
  { ssr: false }
);
const htmlToDraft = dynamic(
  () => import("html-to-draftjs").then((mod) => mod.htmlToDraft),
  { ssr: false }
);

import { ArrowSmRightIcon } from "@heroicons/react/outline";
import { useSelector } from "react-redux";
import EmailPreview from "@components/dashboard/EmailPreview/EmailPreview";
import { getGuests } from "@services/GuestManagement";
import { useQuery } from "react-query";
import { useDropzone } from "react-dropzone";
import toast from "react-hot-toast";
import { sendEmailInvites } from "@services/Invitation/email";
import { fileUploader } from "@services/Uploader";
import { push } from "draft-js/lib/EditorState";

const animatedComponents = makeAnimated();

const customStyles = {
  control: (
    { borderColor, backgroundColor, boxShadow, ...provided },
    { theme }
  ) => ({
    ...provided,
    width: "100%",
    // backgroundColor: 'rgba(243, 244, 246, 1)',
    borderColor: theme.colors.neutral90,
    "&:hover": {
      borderColor: theme.colors.neutral70,
    },
  }),
  valueContainer: (style) => ({
    ...style,
    padding: "6px 16px",
  }),
  placeholder: (style) => ({
    ...style,
    color: "rgba(156, 163, 175, 1)",
    fontSize: "14px",
  }),
  input: (style) => ({
    ...style,
    outline: "none",
    border: "none",
  }),
};

const EmailInvitesPage = () => {
  const { user } = useSelector((state) => state.user);
  const router = useRouter();
  const [isOpen, setIsOpen] = useState(false);
  const [fromEmail, setFromEmail] = useState(user?.email);
  const [toEmails, setToEmails] = useState(null);
  const content = {
    blocks: [
      {
        key: "637gr",
        text: `Hello, \nWe would like to invite you to our wedding! Please come celebrate with us. Here is a link to our gift registry and website. \n\nWe Need your Address\n\nThank you for your support. Love, Ashley and Nate! \nVisit Our Wedding Website\nwww.beweddy.com/couple/${user?.username}\n\nBless Us With A Gift Card:  \nGift & Registry`,
        type: "unstyled",
        depth: 0,
        inlineStyleRanges: [],
        entityRanges: [
          {
            offset: 134,
            length: 20,
            key: 0,
          },
          {
            offset: 234,
            length: 26,
            key: 1,
          },
        ],
        data: {},
      },
    ],
    entityMap: {
      0: {
        type: "LINK",
        mutability: "MUTABLE",
        data: {
          url: `${process.env.NEXT_PUBLIC_CLIENT_URL}/couple/${user?.username}/rsvp`,
          targetOption: "_self",
        },
      },
      1: {
        type: "LINK",
        mutability: "MUTABLE",
        data: {
          url: `${process.env.NEXT_PUBLIC_CLIENT_URL}/couple/${user?.username}`,
          targetOption: "_self",
        },
      },
    },
  };

  const [editorState, setEditorState] = useState(
    EditorState.createWithContent(convertFromRaw(content))
  );
  const [uploadedFile, setUploadedFile] = useState();
  const [loading, setLoading] = useState(false);
  const [file, setFile] = useState();
  const [preview, setPreview] = useState();
  const [selectedImageFile, setSelectedImageFile] = useState();

  const { data, isLoading } = useQuery(["guests", user.token], getGuests);

  const emails = data?.guests?.map((guest) => ({
    label: guest.email,
    value: guest.email,
    email: guest.email,
  }));

  const onEditorStateChange = (editorState) => setEditorState(editorState);
  const handleEmails = (newValue, actionMeta) => {
    if (newValue) {
      setToEmails(newValue);
    }
    if (actionMeta.action === "clear") {
      setToEmails(null);
    }
  };
  const onDrop = useCallback((acceptedFiles) => {
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
    setPreview(preview);
    setFile(file);
    setLoading(true);
    try {
      const result = await fileUploader(file);
      toast.success("Image uploaded successfully");

      setLoading(false);
      setUploadedFile(result);
    } catch (err) {
      setLoading(false);
      console.error(err.message);
    }
  };

  console.log(uploadedFile);

  const message = draftToHtml(convertToRaw(editorState.getCurrentContent()));
  // const { handleSubmit, register, getValues, watch } = useForm({ mode: 'all' });

  const handleSubmit = async () => {
    try {
      await sendEmailInvites({
        // logo: venue?.logo,
        emails: toEmails.map((email) => `${email.value}`),
        coupleName: user?.coupleName,
        image: uploadedFile?.secure_url,
        from: fromEmail,
        message,
      });
      setIsOpen(false);
      router.push("/dashboard/invitation/rsvp-guest-management");
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <Fragment>
      <Head>
        <title>Beweddy | Email Invites</title>
      </Head>
      {loading && <Loader />}
      <DashboardTopBar />
      <DashboardLayout shadow>
        <DashboardHeader title="Email Invites" />
        <div className="space-y-10 shadow-box">
          <div className="max-w-[1300px] w-full">
            <div className="p-4 sm:p-12 xxl:pr-0">
              <div className="mb-5">
                <div className="flex items-center pb-2 space-x-3">
                  <Image src="/icons/email_send.svg" width={46} height={46} />
                  <h3 className="text-2xl mudiumTitle">Send Email Invites</h3>
                </div>
                <span className="h-[4px] inline-block max-w-[215px] w-full bg-secondary-alternative"></span>
              </div>

              <div className="grid grid-cols-2 gap-3 sm:gap-12 lg:grid-cols-3">
                <div className="col-span-2">
                  <div className="space-y-6">
                    <div className="flex justify-between">
                      <Heading h3 className="!text-sm xl:!text-base !font-bold">
                        To
                      </Heading>
                      {/* <h5 className="xl:text-[12px] xxl:text-base font-bold">
                        Recipients: 13
                      </h5> */}
                    </div>
                    <Select
                      closeMenuOnSelect={false}
                      components={animatedComponents}
                      onChange={handleEmails}
                      // defaultValue={[colourOptions[4], colourOptions[5]]}
                      isMulti
                      styles={customStyles}
                      options={emails}
                    />
                    {/* <Heading h3 className="!text-sm xl:!text-base !font-bold">
                      From
                    </Heading>
                    <input
                      required
                      type="text"
                      className="border border-primary py-3 px-5 text-sm font-semibold w-full rounded-[5px]"
                      placeholder="team.nate@gmail.com"
                      value={fromEmail}
                      onChange={(e) => setFromEmail(e.target.value)}
                    /> */}
                    <Heading h3 className="!text-sm xl:!text-base !font-bold">
                      Add Media Content
                    </Heading>

                    <div {...getRootProps()}>
                      <input {...getInputProps()} />
                      <button className="py-3 px-8 text-sm md:text-base font-bold md:font-semibold border border-[#7F7F7F] rounded-[5px] bg-secondary-alternative hover:bg-secondary-alternative/50 transition duration-300">
                        Upload Photo/Video
                      </button>
                    </div>
                    <div className="space-y-3">
                      <Heading h3 className="!text-sm xl:!text-base !font-bold">
                        Compose
                      </Heading>
                      <div className="relative">
                        <Editor
                          editorState={editorState}
                          wrapperClassName="border-2 border-primary rounded-[5px] overflow-hidden"
                          editorClassName="px-5 py-2 min-h-[300px] customLabel"
                          onEditorStateChange={onEditorStateChange}
                        />
                      </div>
                    </div>
                    <button
                      className="py-3 px-8 font-inter font-bold text-base rounded-[5px] border-[3px] border-primary flex items-center text-center space-x-2 bg-[#F3F3F3] text-primary hover:bg-primary hover:text-white transition duration-300"
                      onClick={() => setIsOpen((prev) => !prev)}
                    >
                      <span>Preview</span>
                      <ArrowSmRightIcon className="w-6 h-6" />
                    </button>
                  </div>
                </div>
                {uploadedFile && (
                  <div className="col-span-1">
                    <Image
                      src={uploadedFile.secure_url}
                      alt=""
                      height={uploadedFile.height}
                      width={uploadedFile.width}
                    />
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </DashboardLayout>
      {isOpen && (
        <>
          <div
            onClick={() => setIsOpen((prev) => !prev)}
            className={`fixed z-[1000] inset-0 w-full h-screen bg-primary/30 items-center justify-center      `}
          ></div>
          <div className="fixed inset-0 z-[5000] top-1/2 -translate-y-1/2 max-w-4xl mx-auto bg-white h-[80vh] overflow-y-auto p-10 rounded-lg">
            <EmailPreview
              {...{ handleSubmit, setIsOpen, uploadedFile, message, toEmails }}
            />
          </div>
        </>
      )}
      <Footer hideSocial />
      <CropImage
        onSave={onCropSave}
        selectedFile={selectedImageFile}
        // aspectRatio={16 / 9}
      />
    </Fragment>
  );
};

export default withAuthRoute(EmailInvitesPage);
