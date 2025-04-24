function InfoCard() {
  return (
    <div className="bg-[#1e2732d8] shadow-md rounded-2xl px-4 py-2 w-full space-y-4 text-white ">
      <div>
        <h2 className="text-2xl font-bold text-gray-100">Charge</h2>
        <p className="text-sm text-gray-100">subheading</p>
      </div>

      <p className="text-gray-100">description</p>

      <div>
        <h3 className="text-md font-semibold text-gray-100 mb-1">
          Suggestions verbiage : Lorem ipsum dolor sit amet consectetur
          adipisicing elit. Numquam hic doloremque magnam impedit voluptatum
          accusamus modi, delectus veniam consequatur natus, necessitatibus sint
          amet error nisi omnis maiores temporibus perferendis cupiditate magni
          voluptatem in ex, enim vitae. Pariatur provident sequi nesciunt ullam
          facere, sit ducimus ab laboriosam autem fugiat enim iusto id
          doloremque tempora aliquam maxime, dicta nihil excepturi, fugit ex
          accusamus! Mollitia accusamus autem error molestias. Ab, maiores modi?
          Numquam veritatis cupiditate possimus soluta provident debitis dolorum
          eos. Quas quo amet incidunt perferendis beatae numquam autem
          laudantium eius, nisi molestias iusto, est voluptatem mollitia dolor
          et inventore harum velit fugiat deleniti commodi error nobis. Nesciunt
          sint voluptates aspernatur blanditiis, nemo earum dicta maiores optio
          consequuntur incidunt amet eum excepturi asperiores temporibus autem,
          ipsam delectus a culpa omnis vitae quia! Sapiente adipisci doloremque
          eveniet quibusdam libero quasi animi sunt dolore ad voluptatem sequi
          explicabo repellat culpa, maiores perspiciatis, dolorem accusantium
          recusandae. Omnis, distinctio eveniet laudantium quos accusamus ab,
          quasi voluptatem officia autem porro nam blanditiis adipisci, natus
          veritatis sunt? Beatae, at possimus. Esse facilis quisquam neque ab
          eius illo rem optio, quibusdam sed similique dolore soluta impedit,
          voluptas ullam quasi pariatur doloribus! Necessitatibus, doloremque
          non! Velit explicabo eum commodi praesentium odit.
        </h3>
        <ul className="pl-2 list-inside text-gray-100">
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
        <span className="bg-gray-100 text-gray-500 text-xs px-3 py-1 rounded-full">
          #tag
        </span>
      </div>
    </div>
  );
}

export default InfoCard;
