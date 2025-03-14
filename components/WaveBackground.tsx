"use client";
import cn from "classnames";

interface WaveBackgroundProps {
  classname?: string;
}
const WaveBackground = ({ classname }: WaveBackgroundProps) => {
  return <div className={cn("wave wave one", classname)}></div>;
};

export default WaveBackground;
