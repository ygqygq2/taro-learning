import { Component, PropsWithChildren } from "react";
import { View, Text } from "@tarojs/components";
import "./index.scss";

export default class Order extends Component<PropsWithChildren> {
  componentWillMount() {}

  componentDidMount() {}

  componentWillUnmount() {}

  componentDidShow() {}

  componentDidHide() {}

  render() {
    return (
      <View className="order">
        <Text>我的订单</Text>
      </View>
    );
  }
}
