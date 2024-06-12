import React, { useEffect, useState } from "react";
import { connect } from "dva";
import { use } from "echarts";
import { history, useNavigate } from "umi";

import "../bj/indexs.css";
export default connect((state) => {
  return {
    datas: state.list.reList,
  };
})(index);
function index(props) {
  const { datas, dispatch } = props;
  const navigator = useNavigate();
  const [dataList, setdataList] = useState(datas === "" ? [] : datas);
  const onClicks = (item) => {
    navigator("/bj", {
      state: {
        datas: item,
      },
    });
  };
  const Deletes = (item) => {
    dispatch({
      type: "list/Delete",
      payload: item,
    });
    navigator("/add");
  };
  useEffect(() => {
    setdataList(datas === null ? [] : datas);
  }, [datas]);
  return (
    <div>
      <div
        styleName="backs"
        onClick={() => {
          history.push("/bj");
        }}
      >
        返回
      </div>
      {dataList.map((item, index) => {
        return (
          <div styleName="zu" key={index}>
            <p>
              <span
                onClick={() => {
                  onClicks(item);
                }}
              >
                编辑
              </span>
              &nbsp; &nbsp; &nbsp;
              <span
                onClick={() => {
                  Deletes(item);
                }}
              >
                删除
              </span>
            </p>
            <p>姓名：{item.name}</p>
            <p>年龄：{item.age}</p>
          </div>
        );
      })}
    </div>
  );
}
