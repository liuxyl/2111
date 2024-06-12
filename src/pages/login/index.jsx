import React, { useState, Suspense, useEffect, useRef } from "react";
import { Button, Form, Input, Checkbox } from "antd";
import { connect } from "dva";
import { history } from "umi";
import "./styles.less";
export default connect(({ loading }) => {
  return {
    loading: !!loading.effects[`login/fetchLogin`],
  };
})(Login);
function Login(props) {
  const { dispatch, loading } = props;
  const onFinish = async (values) => {
    console.log(values, 1);
    await dispatch({
      type: "login/fetchLogin",
      payload: values,
    });
    history.push("/");
  };

  return (
    <div styleName="box">
      <div styleName="box1">
        <img
          style={{ width: "100%", height: "100%" }}
          src="/img/10.webp"
          alt=""
        />
      </div>
      <div styleName="box2">
        <Form onFinish={onFinish}>
          <h1 style={{ color: "blue" }}>客户登录</h1>
          <Form.Item name="userName" label="用户名">
            <Input />
          </Form.Item>

          <Form.Item name="passWord" label="密码">
            <Input />
          </Form.Item>

          <Form.Item name="remember" valuePropName="checked">
            <Checkbox>记住密码</Checkbox>
          </Form.Item>
          <Form.Item>
            <Button
              htmlType="submit"
              style={{ width: "200px" }}
              type="primary"
              loading={loading}
            >
              登录
            </Button>
          </Form.Item>
        </Form>
      </div>
    </div>
  );
}
