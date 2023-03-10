import React from "react";
import { Modal, Text, TouchableOpacity, View } from "react-native";
import { TextInput } from "react-native-element-textinput";

const ConfirmDelete = ({ modal, onToggle, onDelete }) => {
  return (
    <Modal
      visible={modal}
      animationType="slide"
      onRequestClose={onToggle}
      transparent={true}
    >
      <View
        style={{
          backgroundColor: "#fff",
          marginTop: "50%",
          width: "70%",
          alignSelf: "center",
          padding: 20,
          borderColor: "#ccc",
          borderWidth: 1,
        }}
      >
        <Text>Bạn có chắc muốn xóa dữ liệu này</Text>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "flex-end",
            marginTop: 10,
          }}
        >
          <TouchableOpacity
            style={{
              backgroundColor: "#dff0d8",
              padding: 10,
              width: 70,
              marginRight: 20,
              borderRadius: 6,
            }}
            onPress={onDelete}
          >
            <Text style={{ textAlign: "center" }}>OK</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              backgroundColor: "#f2dede",
              padding: 10,
              width: 70,
              borderRadius: 6,
            }}
            onPress={onToggle}
          >
            <Text style={{ textAlign: "center" }}>Đóng</Text>
          </TouchableOpacity>
        </View>
      </View>
    </Modal>
  );
};

export default ConfirmDelete;
