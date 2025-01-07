import styles from "./Form.module.css";
import { useState } from "react";

function Form() {
  return (
    <form className={styles.form}>
      <div className={styles.formHeader}>
        <h2>Create Your Account</h2>
        <p>Let's get started you with LMS</p>
      </div>
      <RoleSelector />
      <SignupForm />
      <p className={styles.createdAccountText}>
        Already have an account?{" "}
        <a href="#" className={styles.loginLink}>
          Login
        </a>
      </p>
    </form>
  );
}

export default Form;

function RoleSelector() {
  const [roleSelection, setRoleSelection] = useState({
    student: false,
    librarian: false,
  });

  const handleRoleSelection = (event) => {
    let role = event.target.value;
    role === "student"
      ? setRoleSelection({ student: true, librarian: false })
      : setRoleSelection({ student: false, librarian: true });
  };

  return (
    <div>
      <div className={styles.roleSection}>
        <h2 className={styles.roleHeading}>Select your role</h2>
        <div className={styles.roleContainer}>
          <p className={styles.roleDescription}>select one of the option:</p>
          <div className={styles.roleOptions}>
            <input
              className={`${styles.role} ${
                roleSelection.student ? styles.roleStudentSelected : ""
              }`}
              type="button"
              value="student"
              onClick={handleRoleSelection}
            />
            <input
              className={`${styles.role} ${
                roleSelection.librarian ? styles.roleLibrarianSelected : ""
              }`}
              type="button"
              value="librarian"
              onClick={handleRoleSelection}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

function SignupForm() {
  const [firstNameValue, setFirstNameValue] = useState("");
  const [surnameValue, setSurnameValue] = useState("");
  const [emailValue, setEmailValue] = useState("");
  const [passwordValue, setPasswordValue] = useState("");

  const handleFirstNameChange = (event) => {
    setFirstNameValue(event.target.value);
  };

  const handleSurnameChange = (event) => {
    setSurnameValue(event.target.value);
  };

  const handleEmailChange = (event) => {
    setEmailValue(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPasswordValue(event.target.value);
  };
  return (
    <div className={styles.signupFormSection}>
      <h2 className={styles.roleHeading}>Fill the below details</h2>
      <div className={styles.formNameSection}>
        <InputField
          title={"First Name"}
          type={"text"}
          placeholder={"John"}
          value={firstNameValue}
          onChangeField={handleFirstNameChange}
        ></InputField>
        <InputField
          title={"Surname"}
          type={"text"}
          placeholder={"Doe"}
          value={surnameValue}
          onChangeField={handleSurnameChange}
        ></InputField>
      </div>
      <InputField
        title={"Email"}
        type={"email"}
        placeholder={"example@gmail.com"}
        value={emailValue}
        onChangeField={handleEmailChange}
      />
      <InputField
        title={"Password"}
        type={"password"}
        placeholder={"• • • • • • • • • •"}
        value={passwordValue}
        onChangeField={handlePasswordChange}
      />
      <InputField type={"submit"} placeholder={"Sign Up"}></InputField>
    </div>
  );
}

function InputField({ title, type, placeholder, value, onChangeField }) {
  return (
    <div>
      {type === "submit" ? (
        <input
          className={`${
            type === "submit" ? styles.submitButton : styles.inputField
          }`}
          type={type}
          placeholder={placeholder}
          value={value}
          onChange={onChangeField}
        />
      ) : (
        <>
          <p className={styles.inputFieldTitle}>{title}</p>
          <input
            className={`${
              type === "submit" ? styles.submitButton : styles.inputField
            }`}
            type={type}
            placeholder={placeholder}
            value={value}
            onChange={onChangeField}
          />
        </>
      )}
    </div>
  );
}
