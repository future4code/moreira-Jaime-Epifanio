import React from "react";
import { HeaderSite, Logo } from "../../Components/HeaderAll/styled";
import { Input, Space } from "antd";
import { AudioOutlined } from "@ant-design/icons";

const onSearch = (value) => console.log(value);

export default function Posts() {
  const { Search } = Input;

  const suffix = (
    <AudioOutlined
      style={{
        fontSize: 16,
        color: "#1890ff",
        
      }}
    />
  );
  return (
    <HeaderSite>
      <Logo src="https://i.postimg.cc/3wWpMH8Q/Labeddit-1.png" />
      <Space direction="vertical">
        <Search
          placeholder="input search text"
          onSearch={onSearch}
          enterButton
          style={{
            width: 900,
            paddingLeft: 50,
            
          }}
        />
      </Space>
      ,
    </HeaderSite>
  );
}
