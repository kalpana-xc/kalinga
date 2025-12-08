import { motion, useMotionValue, useTransform } from 'motion/react';
import { useState, useEffect, useRef, useImperativeHandle, forwardRef } from 'react';
import './Stack.css';

const CardRotate = forwardRef(({ children, onSendToBack, sensitivity, disableDrag = false, isTopCard = false }, ref) => {
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const rotateX = useTransform(y, [-100, 100], [60, -60]);
  const rotateY = useTransform(x, [-100, 100], [-60, 60]);

  useImperativeHandle(ref, () => ({
    triggerDrag: async (direction = 'right') => {
      onSendToBack();
    }
  }), [x, y, sensitivity, onSendToBack]);

  function handleDragEnd(_, info) {
    if (Math.abs(info.offset.x) > sensitivity || Math.abs(info.offset.y) > sensitivity) {
      onSendToBack();
    } else {
      x.set(0);
      y.set(0);
    }
  }

  if (disableDrag) {
    return (
      <motion.div
        className="card-rotate-disabled"
        style={{ x: 0, y: 0 }}
      >
        {children}
      </motion.div>
    );
  }

  return (
    <motion.div
      className="card-rotate"
      style={{ 
        x, 
        y, 
        rotateX: isTopCard ? 0 : rotateX, 
        rotateY: isTopCard ? 0 : rotateY 
      }}
      drag
      dragConstraints={{ top: 0, right: 0, bottom: 0, left: 0 }}
      dragElastic={0.6}
      whileTap={{ cursor: 'grabbing' }}
      onDragEnd={handleDragEnd}
    >
      {children}
    </motion.div>
  );
});

CardRotate.displayName = 'CardRotate';

const Stack = forwardRef(({
  randomRotation = false,
  sensitivity = 200,
  cards = [],
  animationConfig = { stiffness: 260, damping: 20 },
  sendToBackOnClick = false,
  autoplay = false,
  autoplayDelay = 3000,
  pauseOnHover = false,
  mobileClickOnly = false,
  mobileBreakpoint = 768,
}, ref) => {
  const [isMobile, setIsMobile] = useState(false);
  const [isPaused, setIsPaused] = useState(false);
  const topCardRef = useRef(null);
  const isAnimatingRef = useRef(false);
  
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < mobileBreakpoint);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, [mobileBreakpoint]);

  const shouldDisableDrag = mobileClickOnly && isMobile;
  const shouldEnableClick = sendToBackOnClick || shouldDisableDrag;

  const [stack, setStack] = useState(
    () => {
      if (cards.length) {
        return cards.map((content, index) => ({ id: index + 1, content }));
      } else {
        return [
          {
            id: 1,
            content: (
              <img
                src="https://images.unsplash.com/photo-1480074568708-e7b720bb3f09?q=80&w=500&auto=format"
                alt="card-1"
                className="card-image"
              />
            ),
          },
          {
            id: 2,
            content: (
              <img
                src="https://images.unsplash.com/photo-1449844908441-8829872d2607?q=80&w=500&auto=format"
                alt="card-2"
                className="card-image"
              />
            ),
          },
          {
            id: 3,
            content: (
              <img
                src="https://images.unsplash.com/photo-1452626212852-811d58933cae?q=80&w=500&auto=format"
                alt="card-3"
                className="card-image"
              />
            ),
          },
          {
            id: 4,
            content: (
              <img
                src="https://images.unsplash.com/photo-1572120360610-d971b9d7767c?q=80&w=500&auto=format"
                alt="card-4"
                className="card-image"
              />
            ),
          },
        ];
      }
    }
  );

  useEffect(() => {
    if (cards.length) {
      setStack(cards.map((content, index) => ({ id: index + 1, content })));
    }
  }, [cards]);

  const sendToBack = (id) => {
    setStack((prev) => {
      const newStack = [...prev];
      const index = newStack.findIndex((card) => card.id === id);
      const [card] = newStack.splice(index, 1);
      newStack.unshift(card);
      return newStack;
    });
  };

  const performAnimatedSend = async (direction = 'right') => {
    if (isAnimatingRef.current) return;
    isAnimatingRef.current = true;

    const topCardId = stack[stack.length - 1]?.id;
    if (topCardId) sendToBack(topCardId);

    isAnimatingRef.current = false;
  };

  useEffect(() => {
    if (autoplay && stack.length > 1 && !isPaused) {
      const interval = setInterval(() => {
        performAnimatedSend('right');
      }, autoplayDelay);

      return () => clearInterval(interval);
    }
  }, [autoplay, autoplayDelay, stack, isPaused]);

  useImperativeHandle(ref, () => ({
    triggerNext: (direction = 'right') => performAnimatedSend(direction)
  }), [performAnimatedSend]);

  return (
    <div
      className="stack-container"
      onMouseEnter={() => pauseOnHover && setIsPaused(true)}
      onMouseLeave={() => pauseOnHover && setIsPaused(false)}
    >
      {stack.map((card, index) => {
        const randomRotate = randomRotation ? Math.random() * 10 - 5 : 0;
        const isTopCard = index === stack.length - 1;
        const stackIndex = stack.length - index - 1;
        
        // Distribute cards left and right, with active card centered
        // Cards alternate: left, right, left, right...
        let horizontalOffset = 0;
        let direction = 0;
        if (!isTopCard && stackIndex > 0) {
          // Alternate direction: even stackIndex goes left, odd goes right
          direction = stackIndex % 2 === 0 ? -1 : 1;
          // Increase offset for cards further back
          horizontalOffset = direction * (15 + stackIndex * 8);
        }
        
        const verticalOffset = isTopCard ? 0 : stackIndex * 6;
        
        return (
          <CardRotate 
            key={card.id}
            ref={isTopCard ? topCardRef : null}
            onSendToBack={() => sendToBack(card.id)} 
            sensitivity={sensitivity}
            disableDrag={shouldDisableDrag}
            isTopCard={isTopCard}
          >
            <motion.div
              className="card"
              onClick={() => shouldEnableClick && sendToBack(card.id)}
              animate={{
                x: horizontalOffset,
                y: verticalOffset,
                rotateZ: isTopCard ? 0 : (direction !== 0 ? direction * (stackIndex * 2.5) + randomRotate : randomRotate),
                scale: 1 + index * 0.05 - stack.length * 0.05,
                transformOrigin: isTopCard ? 'center center' : 'center center',
              }}
              initial={false}
              transition={{
                type: 'spring',
                stiffness: animationConfig.stiffness,
                damping: animationConfig.damping,
              }}
            >
              {card.content}
            </motion.div>
          </CardRotate>
        );
      })}
    </div>
  );
});

Stack.displayName = 'Stack';

export default Stack;