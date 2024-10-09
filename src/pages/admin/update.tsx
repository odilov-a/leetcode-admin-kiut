import { Spin, notification } from "antd";
import { Field } from "formik";
import { useHooks } from "hooks";
import { Container } from "modules";
import { Fields, Button } from "components";

const User = ({ showCreateModal, createModal }: any): JSX.Element => {
  const { t, get } = useHooks();
  let data = createModal.data && createModal?.data;
  if (!data) {
    return <p>{t("Loading...")}</p>;
  }
  return (
    <div>
      <Container.Form
        url={data._id ? `/admins/${get(data, "_id")}` : "admins/register"}
        method={data._id ? "put" : "post"}
        name="admins"
        fields={[
          {
            type: "string",
            required: true,
            name: "username",
            value: get(data, "username"),
          },
          {
            type: "string",
            required: true,
            name: "password",
          },
        ]}
        onSuccess={(data, resetForm, query) => {
          query.invalidateQueries({ queryKey: ["admins"] });
          resetForm();
          showCreateModal(false);
        }}
        onError={(error) => {
          notification.error({
            message: get(error, "errorMessage", t("Something went wrong!")),
            duration: 2,
          });
        }}
      >
        {({ isLoading }) => {
          return (
            <Spin spinning={isLoading} tip={t("Verifying")}>
              <div className="mt-5">
                <Field
                  required
                  name="username"
                  component={Fields.Input}
                  rootClassName="mb-[10px]"
                  label={t("username")}
                  placeholder={t("username")}
                />
                <Field
                  required
                  name="password"
                  type="password"
                  label={t("password")}
                  component={Fields.Input}
                  rootClassName="mb-[10px]"
                  placeholder={t("password")}
                />
                <Button
                  size="large"
                  title={t("Save")}
                  htmlType="submit"
                  className="w-full mt-[10px]"
                />
              </div>
            </Spin>
          );
        }}
      </Container.Form>
    </div>
  );
};

export default User;
