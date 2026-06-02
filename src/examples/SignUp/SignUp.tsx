import * as React from "react";
import { Box, Button, Card, Input, cx } from "../../index";

const SignUp = () => {
  return (
    <Box className={cx(["w-1/3", "mx-auto", "p-5"])}>
      <Card.$ paddless>
        <Card.Header>
          <Card.Title>Sign up</Card.Title>
          <Card.Description>Create a new account.</Card.Description>
        </Card.Header>

        <Card.Body>
          <Box>
            <Input label={"Email address"} />
          </Box>
        </Card.Body>

        <Card.Footer>
          <Button>Sign Up</Button>
        </Card.Footer>
      </Card.$>
    </Box>
  );
};

export { SignUp };
