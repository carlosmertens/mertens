export const Cube = ({ t1 = '', t2 = '', t3 = '', t4 = '' }) => {
  return (
    <div className='cube relative w-16 h-16'>
      <div className='side-top w-16 h-16 bg-zinc-900 flex justify-center items-center text-yellow-700'></div>

      <div className='absolute top-0 left-0 w-full h-full'>
        <span className='side-0 flex justify-center items-center text-zinc-700 text-sm'>
          {t1}
        </span>
        <span className='side-1 flex justify-center items-center text-zinc-700 text-sm'>
          {t2}
        </span>
        <span className='side-2 flex justify-center items-center text-zinc-700 text-sm'>
          {t3}
        </span>
        <span className='side-3 flex justify-center items-center text-zinc-700 text-sm'>
          {t4}
        </span>
      </div>
    </div>
  );
};
