import { useState } from "react";
import { Modal, notification, Table } from "antd";
import { Container } from "modules";
import { Button } from "components";
import Create from "./create";
import { useHooks, usePost } from "hooks";
import { Delete, CreateDoc } from "assets/images/icons";

const Student = () => {
  const { get, queryClient, t } = useHooks();
  const [createModal, showCreateModal] = useState({ open: false, data: {} });
  const { mutate } = usePost();

  const onDeleteHandler = (id: string) => {
    Modal.confirm({
      title: t("Вы действительно хотите удалить ?"),
      okText: t("да"),
      okType: "danger",
      cancelText: t("нет"),
      onOk: () => deleteAction(id),
    });
  };

  const deleteAction = (id: string) => {
    if (id) {
      mutate(
        { method: "delete", url: `/students/delete-extra/${id}`, data: null },
        {
          onSuccess: () => {
            queryClient.invalidateQueries({
              queryKey: [`students`],
            });
            notification["success"]({
              message: t("Успешно удалена"),
              duration: 2,
            });
          },
          onError: (error: any) => {
            notification["error"]({
              message: get(error, "errorMessage", t("Произошло ошибка!")),
              duration: 2,
            });
          },
        }
      );
    }
  };

  const onDeleteAllHandler = () => {
    Modal.confirm({
      title: t("Вы действительно хотите удалить всех студентов?"),
      okText: t("да"),
      okType: "danger",
      cancelText: t("нет"),
      onOk: () => deleteAllAction(),
    });
  };

  const deleteAllAction = () => {
    mutate(
      { method: "delete", url: `/students/delete-extras`, data: null },
      {
        onSuccess: () => {
          queryClient.invalidateQueries({
            queryKey: [`students`],
          });
          notification["success"]({
            message: t("Все студенты успешно удалены"),
            duration: 2,
          });
        },
        onError: (error: any) => {
          notification["error"]({
            message: get(error, "errorMessage", t("Произошло ошибка!")),
            duration: 2,
          });
        },
      }
    );
  };

  const columns = [
    {
      title: t("Username"),
      dataIndex: "username",
      key: "username",
    },
    {
      title: t("Password"),
      dataIndex: "password",
      key: "password",
    },
    {
      title: t("Actions"),
      key: "actions",
      render: (text: any, record: any) => (
        <div
          className="deleteBtn bg-red-500 text-white cursor-pointer p-2 rounded-md hover:bg-red-600 flex items-center justify-center w-[20%]"
          onClick={(e) => {
            e.stopPropagation();
            onDeleteHandler(record._id);
          }}
        >
          <Delete />
        </div>
      ),
    },
  ];

  return (
    <div className="p-4">
      <Modal
        open={createModal.open}
        onCancel={() => showCreateModal({ open: false, data: {} })}
        footer={null}
        centered
        title={
          get(createModal, "data._id")
            ? t("Update student")
            : t("Create student")
        }
        width={350}
        destroyOnClose
      >
        <Create {...{ showCreateModal, createModal }} />
      </Modal>

      <div className="flex justify-between items-center mb-4">
        <Button
          title={t("Generate students")}
          icon={<CreateDoc />}
          size="large"
          className="bg-blue-600 text-white hover:bg-blue-700 transition-all duration-300"
          onClick={() => showCreateModal({ open: true, data: {} })}
        />
        <Button
          title={t("Delete all students")}
          icon={<Delete />}
          size="large"
          className="bg-red-500 text-white hover:bg-red-600 transition-all duration-300"
          onClick={onDeleteAllHandler}
        />
      </div>

      <Container.All name="students" url="/students/get-all-extras">
        {({ items }) => {
          return (
            <Table
              columns={columns}
              dataSource={items}
              rowKey="_id"
              pagination={false}
              className="rounded-lg border shadow-md"
              rowClassName="hover:bg-gray-50 transition-all duration-200"
            />
          );
        }}
      </Container.All>
    </div>
  );
};

export default Student;
