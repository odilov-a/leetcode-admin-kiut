import { useHooks } from "hooks";

const More = ({ showMoreModal, moreModal }: any) => {
  const data = moreModal?.data;
  const { t } = useHooks();
  if (!data) {
    return <p>{t("Loading...")}</p>;
  }
  return (
    <div className="overflow-x-auto">
      <table className="min-w-full border-collapse border border-gray-300">
        <thead>
          <tr>
            <th className="border border-gray-300 p-2 text-left">
              {t("Field")}
            </th>
            <th className="border border-gray-300 p-2 text-left">
              {t("Value")}
            </th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="border border-gray-300 p-2">{t("title")}:</td>
            <td className="border border-gray-300 p-2">
              <b>{data.title}</b>
            </td>
          </tr>
          <tr>
            <td className="border border-gray-300 p-2">{t("description")}:</td>
            <td className="border border-gray-300 p-2">
              <b>{data.description}</b>
            </td>
          </tr>
          <tr>
            <td className="border border-gray-300 p-2">{t("difficulty")}:</td>
            <td className="border border-gray-300 p-2">
              <b>{data.difficulty.title}</b>
            </td>
          </tr>
          <tr>
            <td className="border border-gray-300 p-2">{t("subject")}:</td>
            <td className="border border-gray-300 p-2">
              <b>{data.subject.title}</b>
            </td>
          </tr>
          <tr>
            <td className="border border-gray-300 p-2">{t("timeLimit")}:</td>
            <td className="border border-gray-300 p-2">
              <b>
                {data.timeLimit} {t("ms")}
              </b>
            </td>
          </tr>
          <tr>
            <td className="border border-gray-300 p-2">{t("memoryLimit")}:</td>
            <td className="border border-gray-300 p-2">
              <b>
                {data.memoryLimit} {t("MB")}
              </b>
            </td>
          </tr>
          <tr>
            <td className="border border-gray-300 p-2">{t("point")}:</td>
            <td className="border border-gray-300 p-2">
              <b>
                {data.point} {t("ball")}
              </b>
            </td>
          </tr>
          <tr>
            <td className="border border-gray-300 p-2">{t("tutorials")}:</td>
            <td className="border border-gray-300 p-2">
              <b>{data.tutorials}</b>
            </td>
          </tr>
          <tr>
            <td className="border border-gray-300 p-2">{t("testCases")}:</td>
            <td className="border border-gray-300 p-2">
              <b>
                <a href={`${data.testCases.inputFileUrl}`} target="_blank">
                  {t("Input file")}
                </a>{" "}
                <br />
                <a href={`${data.testCases.outputFileUrl}`} target="_blank">
                  {t("Output file")}
                </a>
              </b>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default More;
