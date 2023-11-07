import Image from "next/image";

const RotatingNavAnimation = () => {
  return (
    <div className="flex items-center justify-center w-screen">
      <div className="flex flex-col px-8 sm:max-w-4xl py-16">
        <h1 className="font-bold text-3xl text-zinc-800">Amazing Article</h1>
        <p className="italic text-zinc-700 text-sm">Florin Pop</p>
        <p className="mt-4">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium
          quia in ratione dolores cupiditate, maxime aliquid impedit dolorem nam
          dolor omnis atque fuga labore modi veritatis porro laborum minus,
          illo, maiores recusandae cumque ipsa quos. Tenetur, consequuntur
          mollitia labore pariatur sunt quia harum aut. Eum maxime dolorem
          provident natus veritatis molestiae cumque quod voluptates ab non,
          tempore cupiditate? Voluptatem, molestias culpa. Corrupti, laudantium
          iure aliquam rerum sint nam quas dolor dignissimos in error placeat
          quae temporibus minus optio eum soluta cupiditate! Cupiditate saepe
          voluptates laudantium. Ducimus consequuntur perferendis consequatur
          nobis exercitationem molestias fugiat commodi omnis. Asperiores quia
          tenetur nemo ipsa.
        </p>

        <h4 className="font-semibold text-xl text-zinc-800 mt-8">My Dog</h4>
        <div className="rounded-xl bg-gray-900/5 mt-4 p-3 ring-1 ring-inset ring-gray-900/10 lg:rounded-2xl">
          <Image
            src="/dog.avif"
            alt="Dog image"
            width={2100}
            height={1400}
            quality={100}
            className="rounded-md bg-white shadow-2xl ring-1 ring-gray-900/10"
          />
        </div>
        <p className="mt-4">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sit libero
          deleniti rerum quo, incidunt vel consequatur culpa ullam. Magnam
          facere earum unde harum. Ea culpa veritatis magnam at aliquid.
          Perferendis totam placeat molestias illo laudantium? Minus id minima
          doloribus dolorum fugit deserunt qui vero voluptas, ut quia cum amet
          temporibus veniam ad ea ab perspiciatis, enim accusamus asperiores
          explicabo provident. Voluptates sint, neque fuga cum illum, tempore
          autem maxime similique laborum odio, magnam esse. Aperiam?
        </p>
      </div>
    </div>
  );
};

export default RotatingNavAnimation;
