"use client";

import { useState } from "react";
import { Formik, Form, Field, ErrorMessage, FormikHelpers } from "formik";
import * as Yup from "yup";
import toast from "react-hot-toast";

interface ContactFormType {
  fullName: string;
  email: string;
  message: string;
}

const ContactForm = () => {
  const [loading, setLoading] = useState<boolean>(false);

  const formValues: ContactFormType = {
    fullName: "",
    email: "",
    message: "",
  };

  const messageSchima = Yup.object({
    fullName: Yup.string().required("Required").min(3, "Too short"),
    email: Yup.string()
      .email("Enter a valid email format")
      .required("Requried"),
    message: Yup.string().min(18, "Too short, explain better"),
  });

  const sendEmail = async (
    values: ContactFormType,
    { resetForm }: FormikHelpers<ContactFormType>,
  ) => {
    setLoading(true);
    try {
      const response = await fetch(
        "https://formsubmit.co/stpholise@gmail.com",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/x-www-form-urlencoded",
          },
          body: new URLSearchParams({
            _subject: "New Contact Form Message",
            _captcha: "false",
            fullName: values.fullName,
            email: values.email,
            message: values.message,
          }),
        },
      );

      if (!response.ok) {
        throw new Error("Failed to send message");
      } else {
        toast.success("Mail sent successfuly ");
      }
      resetForm();
    } catch (err) {
      if (err instanceof Error) {
        console.log(err.message);
        toast.error("Error sending mail");
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      {loading && <div className="">loading</div>}
      <Formik
        onSubmit={sendEmail}
        validationSchema={messageSchima}
        initialValues={formValues}
      >
        <Form className="flex-col flex gap-4">
          <div className="flex items-center justify-between  gap-6">
            <div className="flex-col gap-2 flex  w-1/2 ">
              <label htmlFor="" className="">
                Full name
              </label>
              <Field
                id="fullName"
                name="fullName"
                placeholder="Full Name"
                className="border-gray-400 outline-none border rounded-sm text-base px-2 py-1"
              />
              <ErrorMessage
                name="fullName"
                component="p"
                className=" text-xs text-red-500"
              />
            </div>
            <div className="flex-col gap-2 flex  w-1/2">
              <label htmlFor="">Email</label>
              <Field
                type="email"
                name="email"
                placeholder="example@123.com"
                className="border-gray-400  outline-none border rounded-sm text-base px-2 py-1"
              />
              <ErrorMessage
                name="fullName"
                component="p"
                className=" text-xs text-red-500 "
              />
            </div>
          </div>
          <div className=" flex flex-col gap-2">
            <label htmlFor="">Message</label>
            <Field
              as="textarea"
              name="message"
              placeholder="message"
              className="border-gray-400 outline-none h-70  border rounded-sm text-base px-2 py-1"
            />
            <ErrorMessage
              name="fullName"
              component="p"
              className=" text-xs text-red-500"
            />
          </div>
          <button
            type="submit"
            disabled={loading}
            className="w-1/2 mx-auto uppercase text-white bg-blue-400 rounded-md py-2 text-center  font-medium"
          >
            {" "}
            {loading ? "Sending..." : "Submit"}
          </button>
        </Form>
      </Formik>
    </div>
  );
};

export default ContactForm;
