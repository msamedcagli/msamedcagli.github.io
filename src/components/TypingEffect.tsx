import React, { useState, useEffect } from 'react';

interface TypingEffectProps {
  words: string[];
  typingSpeed?: number;
  deletingSpeed?: number;
  delay?: number;
}

const TypingEffect: React.FC<TypingEffectProps> = ({
  words,
  typingSpeed = 150,
  deletingSpeed = 100,
  delay = 1500,
}) => {
  const [currentText, setCurrentText] = useState('');
  const [wordIndex, setWordIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    let timeoutId: NodeJS.Timeout;

    const handleTyping = () => {
      const fullWord = words[wordIndex];

      if (isDeleting) {
        setCurrentText(prevText => fullWord.substring(0, prevText.length - 1));
      } else {
        setCurrentText(prevText => fullWord.substring(0, prevText.length + 1));
      }

      let currentSpeed = isDeleting ? deletingSpeed : typingSpeed;

      if (!isDeleting && currentText === fullWord) {
        currentSpeed = delay;
        setIsDeleting(true);
      } else if (isDeleting && currentText === '') {
        setIsDeleting(false);
        setWordIndex(prevIndex => (prevIndex + 1) % words.length);
      }

      timeoutId = setTimeout(handleTyping, currentSpeed);
    };

    timeoutId = setTimeout(handleTyping, typingSpeed);

    return () => clearTimeout(timeoutId);
  }, [currentText, isDeleting, wordIndex, words, typingSpeed, deletingSpeed, delay]);

  return <span className="typing-effect">{currentText}</span>;
};

export default TypingEffect;