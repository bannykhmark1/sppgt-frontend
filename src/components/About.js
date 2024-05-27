export default function Info() {
  return (
    <>
      {/* Верхняя и Нижняя Границы */}
      <div className="w-screen">
        <div className=" mt-16"></div>
        
        {/* Основной контент */}
        <div className="container my-12 mt-24 flex flex-col md:flex-row justify-between p-5">
          {/* Текстовое описание */}
          <div className="md:w-1/2 w-full mb-7">
            <h1 className="font-bold text-4xl mb-16">/ О нашем производстве</h1>
            <span className="text-lg">
              Акционерное общество «Свердловское предприятие промышленного железнодорожного транспорта» (АО «СППЖТ») было основано в 1993 году и зарегистрировано в городе Берёзовском, посёлке Монетном. Основной вид деятельности компании — производство пиломатериалов и железнодорожных шпал.
            </span>
          </div>
          {/* Изображение */}
          <div className="md:w-1/2 w-full flex justify-end">
            <img
              className="rounded-lg shadow-lg"
              src="about.png"
              alt="О нас"
            />
          </div>
          {/* Пустое пространство для симметрии/уравновешивания */}
     
        </div>
        

      </div>
    </>
  );
}