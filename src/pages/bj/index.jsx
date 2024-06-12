import React, { useEffect, useState } from "react";
import { Form, Input, Select, Button, Radio, DatePicker } from "antd";
import { history, useLocation } from "umi";
import { connect } from "dva";
export default connect((state) => {
  return {
    List: state.home.List,
    Forms: state.home.reList,
  };
})(bj);
function bj(props) {
  const { dispatch } = props;
  const { state } = useLocation();
  const [form] = Form.useForm();
  const onClick = (opt) => {
    if (state === null) {
      const List = form.getFieldValue();
      List.id = new Date().getTime();
      List.sex = String(List.sex);
      dispatch({ type: "list/setList", payload: List });
    } else {
      const List = form.getFieldValue();
      dispatch({
        type: "list/xiugai",
        payload: List,
      });
    }
    history.push("/add");
  };
  // 跳转
  const handleSubmit = (val) => {
    onClick();
    history.push("/add");
  };
  const onReset = () => {
    form.resetFields();
  };
  useEffect(() => {
    // console.log(state);
    state === null ? "" : form.setFieldsValue(state.datas);
  }, []);
  return (
    <div>
      <Form onFinish={handleSubmit} form={form}>
        <Form.Item
          label="姓名"
          name="name"
          rules={[{ required: true, message: "请输入姓名!" }]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          label="年龄"
          name="age"
          rules={[{ required: true, message: "请选择您的年龄!" }]}
        >
          <Select placeholder="Select an age">
            {Array.from({ length: 100 }, (_, i) => i + 1).map((age) => (
              <Select.Option key={age} value={age}>
                {age}
              </Select.Option>
            ))}
          </Select>
        </Form.Item>
        <Form.Item name="id">
          <Input type="hidden" value={new Date().getTime()}></Input>
        </Form.Item>
        <Form.Item
          label="性别"
          name="sex"
          rules={[{ required: true, message: "请选择您的性别!" }]}
        >
          <Radio.Group>
            <Radio value="male">男</Radio>
            <Radio value="female">女</Radio>
          </Radio.Group>
        </Form.Item>
        <Form.Item name="datepicker" label="日期">
          <Input />
        </Form.Item>
        城市：
        <Form.Item
          name="city"
          rules={[{ required: true, message: "请选择您所在的城市!" }]}
        >
          <Select placeholder="城市">
            <Select.Option value="山西">山西</Select.Option>
            <Select.Option value="朔州">朔州</Select.Option>
            <Select.Option value="大同">大同</Select.Option>
          </Select>
        </Form.Item>
        <Form.Item>
          <Button type="primary" htmlType="submit">
            确定
          </Button>
          <Button type="link" htmlType="button" onClick={onReset}>
            取消
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
}
