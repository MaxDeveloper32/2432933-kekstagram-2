import { scaleControl, uploud } from './const.js';

const INITIAL_SCALE = 100;
const MIN_SCALE = 25;
const MAX_SCALE = 100;
const STEP = 25;
let countPercent = INITIAL_SCALE;

const updateScale = (count) => {
  scaleControl.valueElement.value = `${count}%`;
  uploud.imageElement.style.transform = `scale(${(count / 100)})`;
};

const updateButtonsState = (count) =>{
  scaleControl.biggerElement.disabled = count === MAX_SCALE;
  scaleControl.smallerElement.disabled = count === MIN_SCALE;
};

const updateCount = (newCount) => {
  countPercent = Math.max(MIN_SCALE, Math.min(newCount, MAX_SCALE));
  updateScale(countPercent);
  updateButtonsState(countPercent);
};

const createClickCounter = () => ({
  increase: () => updateCount(countPercent + STEP),
  decreasing: () => updateCount(countPercent - STEP),
  reset: () => updateCount(INITIAL_SCALE),
});

const clickCounter = createClickCounter();
const onBiggerClick = () => clickCounter.increase();
const onSmallerClick = () => clickCounter.decreasing();
const onResetClick = () => clickCounter.reset();

const listenersScaleControl = () => {
  scaleControl.biggerElement.addEventListener('click', onBiggerClick);
  scaleControl.smallerElement.addEventListener('click', onSmallerClick);
  onResetClick();
};

const removeListenersScaleControl = () => {
  scaleControl.biggerElement.removeEventListener('click', onBiggerClick);
  scaleControl.smallerElement.removeEventListener('click', onSmallerClick);
  onResetClick();
};

export {listenersScaleControl, removeListenersScaleControl, onResetClick };

