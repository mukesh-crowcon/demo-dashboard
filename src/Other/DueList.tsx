const DueList = () => {
  return (
    <div className="bg-c-white p-4 rounded-2xl">
      <h2 className="text-xl font-bold mb-4">Due</h2>
      <ul className="list-disc">
        <li className="flex justify-between bg-c-light-blue-1 rounded-full px-3 py-2 my-2">
          <span className="text-xs font-bold">Due in 7 days</span>
          <span className="text-xs font-bold">1</span>
        </li>
        <li className="flex justify-between bg-c-light-blue-1 rounded-full px-3 py-2 my-2">
          <span className="text-xs font-bold">Due in 30 days</span>
          <span className="text-xs font-bold">5</span>
        </li>
        <li className="flex justify-between bg-c-light-blue-1 rounded-full px-3 py-2 my-2">
          <span className="text-xs font-bold">Due in 60 days</span>
          <span className="text-xs font-bold">22</span>
        </li>
        <li className="flex justify-between bg-c-light-blue-1 rounded-full px-3 py-2 my-2">
          <span className="text-xs font-bold">Due in 90 days</span>
          <span className="text-xs font-bold">24</span>
        </li>
      </ul>
    </div>
  );
};

export default DueList;
