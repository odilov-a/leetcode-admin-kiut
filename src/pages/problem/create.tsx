import { Spin } from "antd";
import { Field } from "formik";
import { useState } from "react";
import { useHooks } from "hooks";
import { Container } from "modules";
import { Fields, Button } from "components";

const Problem = ({ showCreateModal, createModal }: any): JSX.Element => {
  const { t, get } = useHooks();
  let data = createModal.data && createModal?.data;
  const [testCases, setTestCases] = useState(get(data, "testCases", [""]));
  const [tutorials, setTutorials] = useState(get(data, "tutorials", [""]));

  const addTutorial = () => {
    setTutorials([...tutorials, ""]);
  };

  const addTestCase = () => {
    setTestCases([...testCases, { input: "", expectedOutput: "" }]);
  };
  return (
    <div>
      <Container.Form
        url={data._id ? `/problems/${get(data, "_id")}` : "/problems"}
        method={data._id ? "put" : "post"}
        name="problems"
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
            name: "descriptionUz",
            value: get(data, "descriptionUz"),
          },
          {
            type: "any",
            required: true,
            name: "titleRu",
            value: get(data, "titleRu"),
          },
          {
            type: "string",
            required: true,
            name: "descriptionRu",
            value: get(data, "descriptionRu"),
          },
          {
            type: "string",
            required: true,
            name: "titleEn",
            value: get(data, "titleEn"),
          },
          {
            type: "string",
            required: true,
            name: "descriptionEn",
            value: get(data, "descriptionEn"),
          },
          {
            name: "point",
            required: true,
            type: "number",
            value: get(data, "point"),
          },
          {
            type: "any",
            required: true,
            name: "tutorials",
            value: get(data, "tutorials"),
          },
          {
            type: "number",
            required: true,
            name: "timeLimit",
            value: get(data, "timeLimit"),
          },
          {
            type: "number",
            required: true,
            name: "memoryLimit",
            value: get(data, "memoryLimit"),
          },
          {
            type: "any",
            required: true,
            name: "subject",
            value: get(data, "subject"),
          },
          {
            type: "any",
            required: true,
            name: "difficulty",
            value: get(data, "difficulty"),
          },
          {
            type: "object",
            name: "testCases",
            value: {
              input: get(data, "testCases.input"),
              expectedOutput: get(data, "testCases.expectedOutput"),
            },
          },
        ]}
        onSuccess={(data, resetForm, query) => {
          query.invalidateQueries({ queryKey: ["problems"] });
          resetForm();
          showCreateModal(false);
        }}
        onError={(error) => {
          console.error("Error updating problems", error);
        }}
      >
        {({ isLoading, setFieldValue }) => {
          return (
            <Spin spinning={isLoading} tip={t("Verifying")}>
              <div className="mt-5">
                <div className="flex">
                  <Field
                    required
                    name="titleUz"
                    label={t("titleUz")}
                    component={Fields.Input}
                    placeholder={t("titleUz")}
                    rootClassName="mb-[10px] mr-[10px] w-full"
                  />
                  <Field
                    required
                    rows={4}
                    name="descriptionUz"
                    label={t("descriptionUz")}
                    component={Fields.Textarea}
                    placeholder={t("descriptionUz")}
                    rootClassName="mb-[10px] w-full"
                  />
                </div>
                <div className="flex">
                  <Field
                    required
                    name="titleRu"
                    label={t("titleRu")}
                    component={Fields.Input}
                    placeholder={t("titleRu")}
                    rootClassName="mb-[10px] mr-[10px] w-full"
                  />
                  <Field
                    required
                    rows={4}
                    name="descriptionRu"
                    label={t("descriptionRu")}
                    component={Fields.Textarea}
                    placeholder={t("descriptionRu")}
                    rootClassName="mb-[10px] w-full"
                  />
                </div>
                <div className="flex">
                  <Field
                    required
                    name="titleEn"
                    label={t("titleEn")}
                    component={Fields.Input}
                    placeholder={t("titleEn")}
                    rootClassName="mb-[10px] mr-[10px] w-full"
                  />
                  <Field
                    required
                    rows={4}
                    name="descriptionEn"
                    label={t("descriptionEn")}
                    component={Fields.Textarea}
                    placeholder={t("descriptionEn")}
                    rootClassName="mb-[10px] w-full"
                  />
                </div>
                <div className="flex">
                  <Field
                    required
                    name="difficulty"
                    url="/difficulties"
                    optionValue="_id"
                    optionLabel="title"
                    label={t("difficulty")}
                    placeholder={t("difficulty")}
                    component={Fields.AsyncSelect}
                    rootClassName="mb-[10px] mr-[10px] w-full"
                    onChange={(value: any) => {
                      setFieldValue("difficulty", value);
                    }}
                  />
                  <Field
                    name="subject"
                    url="/subjects"
                    optionValue="_id"
                    optionLabel="title"
                    label={t("subjects")}
                    placeholder={t("subjects")}
                    component={Fields.AsyncSelect}
                    rootClassName="mb-[10px] w-full"
                    onChange={(value: any) => {
                      setFieldValue("subject", value);
                    }}
                  />
                </div>
                <div className="flex">
                  <div>
                    <div className="flex">
                      <p className="text-[#9EA3B5] px-[12px] py-[6px] bg-[#E6ECFE] dark:bg-[#454d70] rounded-[6px] inline-block mb-[12px] mr-[10px]">
                        {t("tutorial")}
                      </p>
                      <Button
                        size="large"
                        onClick={addTutorial}
                        title={t("Add Tutorial")}
                        className="mb-[10px]"
                      />
                    </div>
                    {tutorials.map((tutorial: any, index: any) => (
                      <div key={index} className="flex mb-[10px]">
                        <Field
                          value={tutorial}
                          name={`tutorials.${index}`}
                          component={Fields.Input}
                          placeholder={t("tutorial")}
                          rootClassName="mr-[25px]"
                        />
                      </div>
                    ))}
                  </div>
                  <div>
                    <div className="flex">
                      <p className="text-[#9EA3B5] px-[12px] py-[6px] bg-[#E6ECFE] dark:bg-[#454d70] rounded-[6px] inline-block mb-[12px] mr-[40%]">
                        {t("testCases")}
                      </p>
                      <Button
                        size="large"
                        onClick={addTestCase}
                        title={t("Add Test Case")}
                        className="mb-[10px]"
                      />
                    </div>
                    {testCases.map((testCase: any, index: any) => (
                      <div key={index} className="flex mb-[10px]">
                        <Field
                          name={`testCases${index}.input`}
                          component={Fields.Input}
                          placeholder={t("testCases.input")}
                          value={testCase.input}
                          rootClassName="w-[45%] mr-[10px]"
                        />
                        <Field
                          name={`testCases${index}.expectedOutput`}
                          component={Fields.Input}
                          placeholder={t("testCases.expectedOutput")}
                          value={testCase.expectedOutput}
                          rootClassName="w-[45%]"
                        />
                      </div>
                    ))}
                  </div>
                  <div>
                    <Field
                      required
                      name="point"
                      label={t("point")}
                      component={Fields.Input}
                      placeholder={t("point")}
                      rootClassName="mb-[10px] w-full"
                    />
                    <Field
                      required
                      name="timeLimit"
                      label={t("timeLimit")}
                      component={Fields.Input}
                      placeholder={t("timeLimit")}
                      rootClassName="mb-[10px] w-full"
                    />
                    <Field
                      required
                      name="memoryLimit"
                      label={t("memoryLimit")}
                      component={Fields.Input}
                      placeholder={t("memoryLimit")}
                      rootClassName="mb-[10px] w-full"
                    />
                  </div>
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

export default Problem;
