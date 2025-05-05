const MiniPrice = () => {
  return (
    <div className="rounded mt-4 border py-4 px-4">
      <h1 className="text-lg">Price</h1>
      <div className="w-full flex gap-4 justify-between mt-4">
        <input
          type="text"
          className="border py-2 min-w-1/5 rounded px-2 focus:border-cyan-200 focus:outline focus:outline-cyan-200"
        />

        <input
          type="text"
          className="border py-2 min-w-1/5 rounded px-2 focus:border-cyan-200 focus:outline focus:outline-cyan-200"
        />
      </div>
      <div className="flex justify-between text-gray-600 text-xs mt-2 ">
        <p>PKR. 121212</p>
        <p className="text-start">PKR. 121212</p>
      </div>
    </div>
  );
};

export default MiniPrice;
