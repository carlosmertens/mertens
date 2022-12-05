export const Cube = ({
  text1 = '',
  text2 = '',
  text3 = '',
  text4 = '',
  color = 'green',
}) => {
  return (
    <div className={`cube ${color}`}>
      <div className='sides'>
        <span className='side-0 '>{text1}</span>
        <span className='side-1 '>{text2}</span>
        <span className='side-2 '>{text3}</span>
        <span className='side-3 '>{text4}</span>
      </div>

      <div className='side-top'></div>
    </div>
  );
};
