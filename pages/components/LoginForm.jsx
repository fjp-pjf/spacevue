import Styles from "@/styles/Dashboard.module.scss";
import { Button, Form, Input, Row, notification } from "antd";
import { useRouter } from "next/navigation";

const LoginForm = () => {
  const router = useRouter();

  const handleSubmitForm = (values) => {
    console.log(values);
    if (values.username === "name" && values.password === "Name@123") {
      router.push("/dashboard");
    } else {
      notification.error({
        message: "ERROR",
        description: "Invalid username/password",
      });
    }
  };

  return (
    <div className={Styles.loginContainer}>
      <div className={Styles.loginForm}>
        <h1 className={Styles.loginTitle}>Login</h1>
        <Form layout="vertical" onFinish={handleSubmitForm}>
          <Form.Item name="username" label="Username">
            <Input placeholder="Enter Username" />
          </Form.Item>
          <Form.Item name="password" label="Password">
            <Input placeholder="Enter Password" />
          </Form.Item>

          <Row justify={"center"}>
            <Button htmlType="submit">Login</Button>
          </Row>
        </Form>
      </div>
    </div>
  );
};

export default LoginForm;
