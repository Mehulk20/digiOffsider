function InfoCard() {
  return (
    <div className="bg-slate-100 shadow-md rounded-2xl px-4 py-2 w-full space-y-4">
      <div>
        <h2 className="text-2xl font-bold text-gray-800">Charge</h2>
        <p className="text-sm text-gray-500">subheading</p>
      </div>

      <p className="text-gray-700">description</p>

      <div>
        <h3 className="text-md font-semibold text-gray-700 mb-1">
          Suggestions verbiage :
        </h3>
        <ul className="pl-2 list-inside text-gray-600">
          <li>item</li>
        </ul>
      </div>

      <div className="flex flex-wrap gap-3">
        <a
          href="#"
          target="_blank"
          className="px-3 py-1 text-sm bg-blue-600 text-white rounded-xl hover:bg-blue-700 transition"
        >
          link label
        </a>
      </div>

      <div className="flex flex-wrap gap-2">
        <span className="bg-gray-100 text-gray-700 text-xs px-3 py-1 rounded-full">
          #tag
        </span>
      </div>
    </div>
  );
}

export default InfoCard;
