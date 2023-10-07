export const Insurances = () => {
  return (
    <div className="h-screen">
      <div className="flex items-center justify-center flex-col pt-10">
        <h3 className="text-2xl font-bold uppercase">Plano de seguro</h3>
      </div>

      <div className="flex mt-20 items-center justify-between space-x-16 px-12">
        <div className="flex-1 border-2 border-blue-600 hover:border-green-700 hover:cursor-pointer p-4 rounded">
          <div className="flex items-center space-x-3">
            <h3 className="text-2xl font-bold uppercase">Orbital Crew</h3>
            <span className="text-xs font-bold uppercase">2 semanas</span>
          </div>

          <p className="text-sm text-gray-400 mt-5">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nisi
            excepturi itaque amet asperiores? Facere autem ut doloribus sunt eos
            officia modi, ex a reiciendis assumenda placeat voluptatum
            consequuntur! Cupiditate, natus.
          </p>

          <div className="mt-48">
            <span className="text-sm font-bold uppercase mt-10">
              R$650.000,00 Domus
            </span>
          </div>
        </div>

        <div className="flex-1 border-2 border-purple-600 hover:border-blue-700 hover:cursor-pointer p-4 rounded">
          <div className="flex items-center space-x-3">
            <h3 className="text-2xl font-bold uppercase">Research Team</h3>
            <span className="text-xs font-bold uppercase">3 meses</span>
          </div>

          <p className="text-sm text-gray-400 mt-5">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nisi
            excepturi itaque amet asperiores? Facere autem ut doloribus sunt eos
            officia modi, ex a reiciendis assumenda placeat voluptatum
            consequuntur! Cupiditate, natus.
          </p>

          <div className="mt-48">
            <span className="text-sm font-bold uppercase mt-10">
              R$800.000,00 Domus
            </span>
          </div>
        </div>

        <div className="flex-1 border-2 border-yellow-600 hover:border-red-700 hover:cursor-pointer p-4 rounded">
          <div className="flex items-center space-x-3">
            <h3 className="text-2xl font-bold uppercase">Orbital Captain</h3>
            <span className="text-xs font-bold uppercase">6 meses</span>
          </div>

          <p className="text-sm text-gray-400 mt-5">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nisi
            excepturi itaque amet asperiores? Facere autem ut doloribus sunt eos
            officia modi, ex a reiciendis assumenda placeat voluptatum
            consequuntur! Cupiditate, natus.
          </p>

          <div className="mt-48">
            <span className="text-sm font-bold uppercase mt-10">
              R$901.000,00 Domus
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};
