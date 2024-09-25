import { useTypewriter } from '@/hooks/useTypewriter';
import { useEffect, useState } from 'react';

const Rightside = () => {
  const [startTyping, setStartTyping] = useState(false);
  const [text] = useTypewriter('karangandhi486@gmail.com', 200, startTyping);

  useEffect(() => {
    const timer = setTimeout(() => {
      setStartTyping(true);
    }, 1500);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="w-full h-full flex flex-col items-center justify-end gap-6 text-textLight">
        <a href="mailto:karangandhi486@gmail.com">
            <p className="text-sm rotate-90 w-[28rem] tracking-widest text-textGreen">
                {text}
            </p>
        </a>
        <span className="w-[2px] h-32 bg-textDark inline-flex"></span>
    </div>
  )
}

export default Rightside