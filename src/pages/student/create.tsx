import { Spin } from "antd";
import { Field } from "formik";
import { useHooks } from "hooks";
import { Container } from "modules";
import { Fields, Button } from "components";

const Student = ({ showCreateModal, createModal }: any): JSX.Element => {
  const { t, get } = useHooks();
  let data = createModal.data && createModal?.data;
  return (
    <div>
      <Container.Form
        url={data._id ? `/students/${get(data, "_id")}` : "/students/register"}
        method={data._id ? "put" : "post"}
        name="students"
        fields={[
          {
            type: "string",
            required: true,
            name: "firstName",
            value: get(data, "firstName"),
          },
          {
            type: "string",
            required: true,
            name: "lastName",
            value: get(data, "lastName"),
          },
          {
            type: "string",
            name: "password",
          },
          {
            type: "string",
            required: true,
            name: "username",
            value: get(data, "username"),
          },
          {
            type: "number",
            name: "balance",
            value: get(data, "balance"),
          },
          {
            required: true,
            name: "phoneNumber",
            value: get(data, "phoneNumber"),
          },
          {
            type: "any",
            name: "photoUrl",
            value: get(data, "photoUrl"),
          },
        ]}
        onSuccess={(data, resetForm, query) => {
          query.invalidateQueries({ queryKey: ["students"] });
          resetForm();
          showCreateModal(false);
        }}
        onError={(error) => {
          console.error("Error updating student", error);
        }}
      >
        {({ isLoading }) => {
          return (
            <Spin spinning={isLoading} tip={t("Verifying")}>
              <div className="mt-5">
                <div className="flex">
                  <Field
                    required
                    name="firstName"
                    label={t("First name")}
                    component={Fields.Input}
                    placeholder={t("First name")}
                    rootClassName="mb-[10px] mr-[10px] w-full"
                  />
                  <Field
                    required
                    name="lastName"
                    label={t("Last name")}
                    component={Fields.Input}
                    placeholder={t("Last name")}
                    rootClassName="mb-[10px] w-full"
                  />
                </div>
                <div className="flex">
                  <Field
                    required
                    name="username"
                    label={t("Username")}
                    component={Fields.Input}
                    placeholder={t("Username")}
                    rootClassName="mb-[10px] mr-[10px] w-full"
                  />
                  <Field
                    name="password"
                    label={t("Password")}
                    component={Fields.Input}
                    placeholder={t("Password")}
                    rootClassName="mb-[10px] mr-[10px] w-full"
                  />
                </div>
                <div className="flex">
                  <Field
                    required
                    name="phoneNumber"
                    component={Fields.Input}
                    label={t("Phone number")}
                    placeholder={t("Phone number")}
                    rootClassName="mb-[10px] mr-[10px] w-full"
                  />
                  <Field
                    name="balance"
                    label={t("Balance")}
                    component={Fields.Input}
                    placeholder={t("Balance")}
                    rootClassName="mb-[10px] mr-[10px] w-full"
                  />
                </div>
                <div>
                  <p className="text-[#9EA3B5] px-[12px] py-[6px] bg-[#E6ECFE] dark:bg-[#454d70] rounded-[6px] inline-block mb-[12px] mr-[10px]">
                    {t("photo")}
                  </p>
                  <Field
                    name="photoUrl"
                    label={t("Photo")}
                    placeholder={t("Photo")}
                    rootClassName="mb-[10px]"
                    component={Fields.FileUpload3}
                  />
                </div>
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

export default Student;
