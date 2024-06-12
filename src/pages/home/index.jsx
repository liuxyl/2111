import React, { useEffect } from "react";
import { Table, Button, Space } from "antd";
import { connect } from "dva";
import { history } from "umi";
import moment from "moment";
import QSwitch from "./components/QSwitch";

export default connect(({ home, loading }) => {
  return {
    data: home.data,
    count: home.count,
    loading: loading.effects["home/fetchList"],
  };
})(Home);

function Home(props) {
  const { dispatch, data, count, loading } = props;

  // 删除
  const onDel = async (id) => {
    await dispatch({
      type: "home/fetchDel",
      payload: {
        id,
      },
    });

    await dispatch({
      type: "home/fetchList",
      page: 1,
      limit: 3,
    });
  };

  // 分页
  const pages = (page = 1) => {
    dispatch({
      type: "home/fetchList",
      payload: {
        limit: 3,
        page,
      },
    });
  };

  useEffect(() => {
    pages();
  }, []);

  // 编辑
  const onEdit = (id) => {
    history.push(`/forms/${id}`);
  };

  const channel = {
    1: "意寒书林",
  };

  const people = {
    1: 50,
    2: 100,
    3: 150,
  };

  const columns = [
    {
      title: "日期",
      dataIndex: "date",
      width: 300,
      render: (text) => {
        return moment(text).format("YYYY-MM-DD");
      },
    },
    {
      title: "渠道",
      width: 300,
      dataIndex: "channel",
      render: (opt) => {
        return opt ? channel[opt] : "--";
      },
    },
    {
      width: 300,
      title: "新增用户",
      dataIndex: "users",
    },
    {
      width: 300,
      title: "已关注",
      dataIndex: "state",
      render: (text, opt) => {
        return <QSwitch text={text} opt={opt} dispatch={dispatch} />;
      },
    },
    {
      width: 300,
      title: "充值人数",
      dataIndex: "rechargers",
    },
    {
      width: 300,
      title: "新用户充值人数",
      dataIndex: "people",
      render: (opt) => {
        return opt ? people[opt] : "--";
      },
    },
    {
      title: "新关注用户充值率",
      width: 300,
      dataIndex: "follow",
    },
    {
      title: "操作",
      fixed: "right",
      width: 150,
      render: (opt) => {
        const { id } = opt;
        return (
          <>
            <Space>
              <Button onClick={() => onEdit(id)} type="link">
                编辑
              </Button>
              <Button onClick={() => onDel(id)} type="link">
                删除
              </Button>
            </Space>
          </>
        );
      },
    },
  ];

  // 添加
  const onAdd = () => {
    history.push("/forms");
  };

  // 分页
  const onChange = (page) => {
    pages(page);
  };
  return (
    <div>
      <Button type="primary" onClick={onAdd}>
        新增
      </Button>
      <Table
        loading={loading}
        scroll={{ x: 2100 }}
        dataSource={data}
        columns={columns}
        rowKey="id"
        pagination={{
          total: count,
          pageSize: 3,
          onChange,
        }}
      />
    </div>
  );
}
