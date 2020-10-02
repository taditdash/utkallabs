import React, { useState } from "react";
import axios from "axios";
import {
  Box,
  Input,
  Stack,
  FormLabel,
  Textarea,
  Button,
} from "@chakra-ui/core";
import { FaLongArrowAltRight } from "react-icons/fa";

export default () => {
  const firstField = React.useRef();
  const btnRef = React.useRef();

  const [status, setStatus] = useState({
    submitted: false,
    submitting: false,
    info: { error: false, msg: null },
  });
  const [inputs, setInputs] = useState({
    email: "",
    message: "",
  });
  const handleServerResponse = (ok, msg) => {
    if (ok) {
      setStatus({
        submitted: true,
        submitting: false,
        info: { error: false, msg: msg },
      });
      setInputs({
        email: "",
        message: "",
      });
    } else {
      setStatus({
        info: { error: true, msg: msg },
      });
    }
  };
  const handleOnChange = (e) => {
    e.persist();
    setInputs((prev) => ({
      ...prev,
      [e.target.id]: e.target.value,
    }));
    setStatus({
      submitted: false,
      submitting: false,
      info: { error: false, msg: null },
    });
  };
  const handleOnSubmit = (e) => {
    e.preventDefault();
    setStatus((prevStatus) => ({ ...prevStatus, submitting: true }));
    axios({
      method: "POST",
      url: "https://formspree.io/f/xgepvbyz",
      data: inputs,
    })
      .then((response) => {
        handleServerResponse(
          true,
          "Thank you, your message has been submitted."
        );
      })
      .catch((error) => {
        handleServerResponse(false, error.response.data.error);
      });
  };
  return (
    <>
      <form onSubmit={handleOnSubmit}>
        <Stack color="gray.50" spacing={["20px", "20px", "20px", "20px"]}>
          <Box>
            <FormLabel htmlFor="fullname">Full name</FormLabel>
            <Input
              borderColor="gray.50"
              ref={firstField}
              color="gray.50"
              id="fullname"
              placeholder="Your full name"
            />
          </Box>
          <Box>
            <FormLabel htmlFor="url">Email address</FormLabel>
            <Input
              borderColor="gray.50"
              ref={firstField}
              color="gray.50"
              name="_replyto"
              placeholder="Your email address"
              onChange={handleOnChange}
            />
          </Box>
          <Box>
            <FormLabel htmlFor="url">Company</FormLabel>
            <Input
              borderColor="gray.50"
              ref={firstField}
              color="gray.50"
              placeholder="Company name"
              onChange={handleOnChange}
            />
          </Box>
          <Box>
            <FormLabel htmlFor="desc">What's your idea?</FormLabel>
            <Textarea
              id="desc"
              color="gray.50"
              borderColor="gray.50"
              onChange={handleOnChange}
              placeholder="let us know what you would like to discuss"
            />
          </Box>
        </Stack>
        <Button
          my={["20px", "20px", "30px", "30px"]}
          bg="gray.50"
          color="white"
          fontWeight="bold"
          type="submit"
          disabled={status.submitting}
        >
          {!status.submitting
            ? !status.submitted
              ? "Send to Utkal Labs"
              : "Submitted"
            : "Submitting..."}
          &#160; <FaLongArrowAltRight />
        </Button>
      </form>

      {status.info.error && (
        <div className="error">Error: {status.info.msg}</div>
      )}
      {!status.info.error && status.info.msg && <p>{status.info.msg}</p>}
    </>
  );
};
