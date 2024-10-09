import { useHooks } from "hooks";

const More = ({ showMoreModal, moreModal }: any) => {
  const data = moreModal?.data;
  const { t, get } = useHooks();
  if (!data) {
    return <p>{t("Loading...")}</p>;
  }
  return (
    <div className="flex">
      <p className="mr-[10px]">{t("Subject: ")}</p>
      <b>{get(data, "title")}</b>
    </div>
  );
};

export default More;
