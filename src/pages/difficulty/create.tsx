import { Spin } from "antd";
import { Field } from "formik";
import { useHooks } from "hooks";
import { Container } from "modules";
import { Fields, Button } from "components";

const Difficulty = ({ showCreateModal, createModal }: any): JSX.Element => {
  const { t, get } = useHooks();
  let data = createModal.data && createModal?.data;
  return (
    <div>
      <Container.Form
        url={data._id ? `/difficulties/${get(data, "_id")}` : "/difficulties"}
        method={data._id ? "put" : "post"}
        name="difficulties"
        fields={[
          {
            type: "string",
            required: true,
            name: "titleUz",
            value: get(data, "titleUz"),
          },
          {
            type: "string",
            required: true,
            name: "titleRu",
            value: get(data, "titleRu"),
          },
          {
            type: "string",
            required: true,
            name: "titleEn",
            value: get(data, "titleEn"),
          },
        ]}
        onSuccess={(data, resetForm, query) => {
          query.invalidateQueries({ queryKey: ["categories"] });
          resetForm();
          showCreateModal(false);
        }}
        onError={(error) => {
          console.error("Error updating categories", error);
        }}
      >
        {({ isLoading, errors, values }) => {
          console.log(values);
          console.log(errors);
          return (
            <Spin spinning={isLoading} tip={t("Verifying")}>
              <div className="mt-5">
                <Field
                  required
                  name="titleUz"
                  component={Fields.Input}
                  rootClassName="mb-[10px]"
                  label={t("category uzbek")}
                  placeholder={t("category uzbek")}
                />
                <Field
                  required
                  name="titleRu"
                  component={Fields.Input}
                  rootClassName="mb-[10px]"
                  label={t("category ruscha")}
                  placeholder={t("category ruscha")}
                />
                <Field
                  required
                  name="titleEn"
                  component={Fields.Input}
                  rootClassName="mb-[10px]"
                  label={t("category qoraqalpoq")}
                  placeholder={t("category kiril")}
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

export default Difficulty;
