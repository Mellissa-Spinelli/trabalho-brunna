import { useCallback, useEffect, useRef, useState } from 'react';
import { questions } from '../data/questions.js';

const SPIN_DURATION = 4300;

export function useWheelGame() {
  const [stats, setStats] = useState({ correct: 0, incorrect: 0, answered: 0 });
  const [usedIds, setUsedIds] = useState([]);
  const [currentQuestion, setCurrentQuestion] = useState(null);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [result, setResult] = useState(null);
  const [spinning, setSpinning] = useState(false);
  const [rotation, setRotation] = useState(0);
  const [notice, setNotice] = useState('');
  const timer = useRef(null);
  const rotationRef = useRef(0);

  useEffect(() => () => window.clearTimeout(timer.current), []);

  const spin = useCallback(() => {
    if (spinning || currentQuestion) return;

    const isNewRound = usedIds.length === questions.length;
    const available = isNewRound ? questions : questions.filter((question) => !usedIds.includes(question.id));
    const question = available[Math.floor(Math.random() * available.length)];
    const questionIndex = questions.findIndex((item) => item.id === question.id);
    const desiredAngle = ((-36 - questionIndex * 72) % 360 + 360) % 360;
    const currentAngle = ((rotationRef.current % 360) + 360) % 360;
    const extra = (desiredAngle - currentAngle + 360) % 360;
    const nextRotation = rotationRef.current + 360 * 5 + extra;

    if (isNewRound) {
      setUsedIds([]);
      setNotice('Nova rodada! As cinco perguntas estão na roleta.');
    } else {
      setNotice('');
    }

    setSpinning(true);
    rotationRef.current = nextRotation;
    setRotation(nextRotation);

    timer.current = window.setTimeout(() => {
      setCurrentQuestion(question);
      setUsedIds((previous) => [...(isNewRound ? [] : previous), question.id]);
      setSpinning(false);
      setNotice('');
    }, SPIN_DURATION);
  }, [currentQuestion, spinning, usedIds]);

  const answer = useCallback((optionIndex) => {
    if (!currentQuestion || result !== null || spinning) return;
    const isCorrect = optionIndex === currentQuestion.answer;
    setSelectedAnswer(optionIndex);
    setResult(isCorrect ? 'correct' : 'incorrect');
    setStats((previous) => ({
      ...previous,
      correct: previous.correct + (isCorrect ? 1 : 0),
      incorrect: previous.incorrect + (isCorrect ? 0 : 1),
      answered: previous.answered + 1,
    }));
  }, [currentQuestion, result, spinning]);

  const continueGame = useCallback(() => {
    if (result === null) return;
    setCurrentQuestion(null);
    setSelectedAnswer(null);
    setResult(null);
  }, [result]);

  const restart = useCallback(() => {
    window.clearTimeout(timer.current);
    setStats({ correct: 0, incorrect: 0, answered: 0 });
    setUsedIds([]);
    setCurrentQuestion(null);
    setSelectedAnswer(null);
    setResult(null);
    setSpinning(false);
    setNotice('');
    rotationRef.current = 0;
    setRotation(0);
  }, []);

  return {
    stats,
    usedCount: usedIds.length,
    currentQuestion,
    selectedAnswer,
    result,
    spinning,
    rotation,
    notice,
    spin,
    answer,
    continueGame,
    restart,
  };
}
