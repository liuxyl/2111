import { sampleLogin, sampleReg, samplePut, fetchSampleList } from "@/services";
import { useEffect } from "react";
export default function test() {
  useEffect(() => {
    fetchSampleList({
      limit: 1,
      page: 1,
      token: "Acfk4H6dPZiufsdUpC7crJMyxlbFfpmq",
    }).then((res) => {
      res.result.list.map((dt) => {
        return { ...dt, ...JSON.parse(dt.info) };
      });
    });

    // samplePut({
    //   info: {
    //     name: 88888888888888,
    //     age: 99999999999999,
    //     sex: 99999999999999,
    //   }
    // })

    // sampleLogin({
    //   userName: 'xsa0001',
    //   passWord: 'fffyyydddd',
    // })

    // sampleReg({
    //   userName: 'xsa0001',
    //   passWord: 'fffyyydddd',
    //   rePassWord: 'fffyyydddd',
    // })
  }, []);
}
