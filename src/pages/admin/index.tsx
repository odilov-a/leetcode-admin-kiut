import { useState } from "react";
import { Modal, Card, Row, Col } from "antd";
import { Edit } from "assets/images/icons";
import { useHooks } from "hooks";
import { Container } from "modules";
import Create from "./update";

const User = () => {
  const { Meta } = Card;
  const { get, t } = useHooks();
  const [createModal, showCreateModal] = useState({ open: false, data: {} });
  return (
    <div className="flex">
      <Modal
        open={createModal.open}
        onCancel={() => showCreateModal({ open: false, data: {} })}
        footer={null}
        centered
        title={
          get(createModal, "data._id")
            ? t("Update difficulty")
            : t("Create difficulty")
        }
        width={500}
        destroyOnClose
      >
        <Create {...{ showCreateModal, createModal }} />
      </Modal>
      <div>
        <Container.All name="admins" url="/admins">
          {({ items }) => (
            <div>
              <div className="flex justify-between"></div>
              <Row className="h-[120px] mt-[15px]">
                {items.map((card) => (
                  <Col className="cursor-pointer">
                    <div className="mr-8 mb-4 w-[250px] h-[150px]">
                      <Meta
                        className="pb-[40px] p-0"
                        title={
                          <div className="mb-1">
                            <p className="dark:text-[#e5e7eb] block truncate">
                              <strong>{get(card, "username", "")}</strong>
                            </p>
                          </div>
                        }
                      />
                      <div className="btnPanel2">
                        <div
                          className="editBtn"
                          onClick={(e) => {
                            e.stopPropagation();
                            showCreateModal({ open: true, data: card });
                          }}
                        >
                          <Edit />
                        </div>
                      </div>
                    </div>
                  </Col>
                ))}
              </Row>
            </div>
          )}
        </Container.All>
      </div>
    </div>
  );
};

export default User;
