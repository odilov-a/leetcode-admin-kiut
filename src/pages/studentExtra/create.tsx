import { Spin, notification } from "antd";
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
        url="/students/generate-extras"
        method="post"
        name="students"
        fields={[
          {
            name: "count",
            type: "number",
            required: true,
          },
        ]}
        onSuccess={(data, resetForm, query) => {
          query.invalidateQueries({ queryKey: ["students"] });
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
                    name="count"
                    type="number"
                    label={t("count")}
                    component={Fields.Input}
                    placeholder={t("count")}
                    rootClassName="mb-[10px] w-full"
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

export default Student;
