import { ThreeCircles } from 'react-loader-spinner';

export const Loader = () => {
  return (
    <div>
      <ThreeCircles
        height="100"
        width="100"
        color="#000"
        wrapperStyle={{}}
        wrapperClass=""
        visible={true}
        ariaLabel="three-circles-rotating"
        outerCircleColor=""
        innerCircleColor=""
        middleCircleColor=""
      />
    </div>
  );
};
