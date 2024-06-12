import { useState } from "react";
import { Switch } from "antd";

export default function QSwitch(props) {
  const { dispatch, text, opt } = props;
  const [x, setX] = useState(false); // 控制 loading

  const onSwitch = async (opt, value) => {
    setX(true);

    await dispatch({
      type: "home/submit",
      payload: {
        info: {
          ...opt,
          state: value,
        },
      },
    });

    setX(false);
  };

  return (
    <Switch
      checkedChildren="开启"
      unCheckedChildren="关闭"
      // 带 default 只有首次渲染执行一次
      checked={text}
      onChange={(value) => onSwitch(opt, value)}
      loading={x}
    />
  );
}
