import { useHooks } from "hooks";

const More = ({ showMoreModal, moreModal }: any) => {
  const data = moreModal?.data;
  const { t } = useHooks();

  return (
    <div>
      <div className="flex">
        <div className="mr-[30px]">
          <div className="flex items-center mb-[10px]">
            <p className="mr-[20px]">
              <b>{t("firstName")}:</b>
            </p>
            <p>{data.firstName}</p>
          </div>
          <div className="flex items-center mb-[10px]">
            <p className="mr-[20px]">
              <b>{t("lastName")}:</b>
            </p>
            <p>{data.lastName}</p>
          </div>
          <div className="flex items-center mb-[10px]">
            <p className="mr-[20px]">
              <b>{t("Telefon raqam")}:</b>
            </p>
            <p>
              <a
                href={`tel:${data.phoneNumber}`}
                className="text-blue-500 hover:underline"
              >
                {data.phoneNumber}
              </a>
            </p>
          </div>
        </div>

        <div className="mr-[20px]">
          <div className="flex items-center mb-[10px]">
            <p className="mr-[20px]">
              <b>{t("username")}:</b>
            </p>
            <p>{data.username}</p>
          </div>
          <div className="flex items-center mb-[10px]">
            <p className="mr-[20px]">
              <b>{t("balance")}:</b>
            </p>
            <p>{data.balance}</p>
          </div>
        </div>
      </div>
      <div className="flex">
        <img
          src={data.photoUrl}
          alt="photo"
          className="w-[200px] h-[150px] object-cover rounded-[10px]"
        />
      </div>
    </div>
  );
};

export default More;
