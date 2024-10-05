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
            <th className="border border-gray-300 p-2 text-left">{t("Field")}</th>
            <th className="border border-gray-300 p-2 text-left">{t("Value")}</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="border border-gray-300 p-2">{t("title")}:</td>
            <td className="border border-gray-300 p-2"><b>{data.title}</b></td>
          </tr>
          <tr>
            <td className="border border-gray-300 p-2">{t("description")}:</td>
            <td className="border border-gray-300 p-2"><b>{data.description}</b></td>
          </tr>
          <tr>
            <td className="border border-gray-300 p-2">{t("difficulty")}:</td>
            <td className="border border-gray-300 p-2"><b>{data.difficulty.title}</b></td>
          </tr>
          <tr>
            <td className="border border-gray-300 p-2">{t("subject")}:</td>
            <td className="border border-gray-300 p-2"><b>{data.subject.title}</b></td>
          </tr>
          <tr>
            <td className="border border-gray-300 p-2">{t("timeLimit")}:</td>
            <td className="border border-gray-300 p-2"><b>{data.timeLimit} {t("ms")}</b></td>
          </tr>
          <tr>
            <td className="border border-gray-300 p-2">{t("memoryLimit")}:</td>
            <td className="border border-gray-300 p-2"><b>{data.memoryLimit} {t("MB")}</b></td>
          </tr>
          <tr>
            <td className="border border-gray-300 p-2">{t("point")}:</td>
            <td className="border border-gray-300 p-2"><b>{data.point} {t("ball")}</b></td>
          </tr>
          <tr>
            <td className="border border-gray-300 p-2">{t("tutorials")}:</td>
            <td className="border border-gray-300 p-2">
              {data.tutorials && data.tutorials.length > 0 ? (
                <ul className="list-disc pl-4">
                  {data.tutorials.map((sub: any, index: number) => (
                    <li key={index}><b>{sub}</b></li>
                  ))}
                </ul>
              ) : (
                <b>{t("No tutorials available")}</b>
              )}
            </td>
          </tr>
          <tr>
            <td className="border border-gray-300 p-2">{t("testCases")}:</td>
            <td className="border border-gray-300 p-2">
              {data.testCases && data.testCases.length > 0 ? (
                <ul className="list-disc pl-4">
                  {data.testCases.map((testCase: any) => (
                    <li key={testCase._id}>
                      <p><b>Input:</b> {testCase.input} | <b>Output:</b> {testCase.expectedOutput}</p>
                    </li>
                  ))}
                </ul>
              ) : (
                <b>{t("No test cases available")}</b>
              )}
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default More;


// import { useHooks } from "hooks";

// const More = ({ showMoreModal, moreModal }: any) => {
//   const data = moreModal?.data; // Accessing the first element of the data array
//   const { t } = useHooks();

//   return (
//     <div>
//       <div className="flex">
//         <div className="mr-[30px]">
//           <div className="flex items-center mb-[10px]">
//             <p className="mr-[20px]">
//               <p>{t("title")}:</p>
//             </p>
//             <b>{data.title}</b>
//           </div>
//           <div className="flex items-center mb-[10px]">
//             <p className="mr-[20px]">
//               <p>{t("description")}:</p>
//             </p>
//             <b>{data.description}</b>
//           </div>
//           <div className="flex items-center mb-[10px]">
//             <p className="mr-[20px]">
//               <p>{t("difficulty")}:</p>
//             </p>
//             <b>{data.difficulty.title}</b>
//           </div>
//           <div className="flex items-center mb-[10px]">
//             <p className="mr-[20px]">
//               <p>{t("subject")}:</p>
//             </p>
//             <b>{data.subject.title}</b>
//           </div>
//           <div className="flex items-center mb-[10px]">
//             <p className="mr-[20px]">
//               <p>{t("timeLimit")}:</p>
//             </p>
//             <b>{data.timeLimit} {t("ms")}</b>
//           </div>
//           <div className="flex items-center mb-[10px]">
//             <p className="mr-[20px]">
//               <p>{t("memoryLimit")}:</p>
//             </p>
//             <b>{data.memoryLimit} {t("MB")}</b>
//           </div>
//           <div className="flex items-center mb-[10px]">
//             <p className="mr-[20px]">
//               <p>{t("point")}:</p>
//             </p>
//             <b>{data.point} {t("ball")}</b>
//           </div>
//           <div className="flex items-center mb-[10px]">
//             <p className="mr-[20px]">
//               <p>{t("tutorials")}:</p>
//             </p>
//             <div>
//               {data.tutorials && data.tutorials.length > 0 ? (
//                 <ul>
//                   {data.tutorials.map((sub: any, index: number) => (
//                     <b><li key={index}>{sub}</li></b>
//                   ))}
//                 </ul>
//               ) : (
//                 <b>{t("No tutorials available")}</b>
//               )}
//             </div>
//           </div>
//           <div className="flex items-center mb-[10px]">
//             <p className="mr-[20px]">
//               <p>{t("testCases")}:</p>
//             </p>
//             <div>
//               {data.testCases && data.testCases.length > 0 ? (
//                 <ul className="flex mr-[10px]">
//                   {data.testCases.map((testCase: any) => (
//                     <li key={testCase._id}>
//                       <p>Input:</p> <b>{testCase.input}</b> | 
//                       <p>Output:</p> <b>{testCase.expectedOutput}</b>
//                     </li>
//                   ))}
//                 </ul>
//               ) : (
//                 <b>{t("No test cases available")}</b>
//               )}
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default More;
