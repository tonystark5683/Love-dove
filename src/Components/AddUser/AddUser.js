import React from "react";
import "./AddUser.css";

import { Form, Field } from "@leveluptuts/fresh";

const AddUser = () => {
  const securityQuestions = [
    "What is your mother's maiden name?",
    "What was the name of your first pet?",
    "What was the name of your first school?",
  ];

  const onSubmit = (data) => console.log(data);

  return (
      <div className="m-wrapper">
        <div className="m-container">

          <div className="left">

          </div>


          <div className="right">
            <Form formId="user-profile" onSubmit={onSubmit}>
              <Field required>First Name</Field>
              <Field required>Last Name</Field>
              <Field required type="email">
                Email
              </Field>

              <Field required type="select" options={securityQuestions}>
                Security Question
              </Field>
              <Field required>Security Answer</Field>

              <Field type="textarea">Bio</Field>
            </Form>
          </div>
        </div>
      </div>
  );
};

export default AddUser;
