import { useHooks } from "hooks";

const More = ({ showMoreModal, moreModal }: any) => {
  const data = moreModal?.data;
  const { t, get } = useHooks();
  return (
    <div className="">
      <b>{t("Subject: ")}</b> {get(data, "title")}
    </div>
  );
};

export default More;
