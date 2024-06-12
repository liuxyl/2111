import React, { useEffect } from "react";
import {
  Form,
  Input,
  DatePicker,
  Select,
  Switch,
  Button,
  Space,
  Radio,
} from "antd";
import { connect } from "dva";
import { useParams } from "umi";
import moment from "moment";
// import "./style.less";

export default connect(({ forms, loading }) => {
  return {
    obj: forms.obj,
    loading: !!loading.effects["forms/fetchSubmit"], //监听提交接口
  };
})(Forms);
function Forms(props) {
  const { dispatch, loading, obj } = props;
  const [form] = Form.useForm();
  const { id } = useParams();

  // 加载完成
  useEffect(() => {
    if (id) {
      dispatch({
        type: "forms/fetchInfo",
        payload: {
          id,
        },
      });
    }
  }, []);

  // 编辑回填
  useEffect(() => {
    if (id) {
      const { date, ...item } = obj;
      // 日期
      const dt = date ? { date: moment(date) } : {};
      form.setFieldsValue({
        ...dt,
        ...item,
      });
    }
  }, [obj]);

  // 提交
  const onClick = async () => {
    await form.validateFields();
    // 获取表单所有数据
    const { date, ...item } = form.getFieldsValue();

    // 判断是不是编辑
    const ids = id ? { id } : {};
    dispatch({
      type: "forms/fetchSubmit",
      payload: {
        info: {
          ...item,
          id,
          date: date.valueOf(),
          ...ids,
        },
      },
    });
  };

  // 取消
  const onReset = () => {
    form.resetFields();
  };
  return (
    <div>
      <div>
        <Form form={form} labelCol={{ span: 8 }} wrapperCol={{ span: 10 }}>
          <Form.Item
            label="日期"
            name="date"
            rules={[{ required: true, message: "请选择日期" }]}
          >
            <DatePicker />
          </Form.Item>

          <Form.Item
            label="渠道"
            name="channel"
            rules={[{ required: true, message: "请选择书籍" }]}
          >
            <Select>
              <Select.Option value="1">意寒书林</Select.Option>
            </Select>
          </Form.Item>

          <Form.Item
            label="新增用户"
            name="users"
            rules={[{ required: true, message: "请输入用户" }]}
          >
            <Input />
          </Form.Item>
          <Form.Item label="已关注" name="state">
            <Switch />
          </Form.Item>

          <Form.Item
            label="充值人数"
            name="rechargers"
            rules={[
              {
                required: true,
                message: "请输入充值人数",
              },
            ]}
          >
            <Input />
          </Form.Item>

          <Form.Item name="people" label="新用户充值人数">
            <Radio.Group>
              <Radio value="1">50</Radio>
              <Radio value="2">100</Radio>
              <Radio value="3">150</Radio>
            </Radio.Group>
          </Form.Item>

          <Form.Item
            label="新关注用户充值率"
            name="follow"
            rules={[
              {
                required: true,
                message: "请输入关注用户",
              },
            ]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            wrapperCol={{
              span: 10,
              offset: 8,
            }}
          >
            <Space>
              <Button type="primary" onClick={onClick} loading={loading}>
                提交
              </Button>
              <Button onClick={onReset}>取消</Button>
            </Space>
          </Form.Item>
        </Form>
      </div>
    </div>
  );
}
