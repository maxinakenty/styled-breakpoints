const { useState, useEffect } = require('react');
const { useTheme } = require('styled-components');

const useBreakpoint = (breakpoint) => {
  const theme = useTheme();
  const query = breakpoint({
    theme,
  }).replace(/^@media/, '');

  const mq = window.matchMedia(query);
  const [isBreak, setIsBreak] = useState(mq.matches);

  useEffect(() => {
    const handleResize = () => {
      setIsBreak(window.matchMedia(query).matches);
    };

    window.addEventListener('resize', handleResize);

    return () => window.removeEventListener('resize', handleResize);
  }, [query]);

  return isBreak;
};

exports.useBreakpoint = useBreakpoint;
