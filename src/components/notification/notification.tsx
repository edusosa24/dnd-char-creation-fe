import { resetNotification } from '../../reducers/notificationReducer';
import { useAppSelector, useAppDispatch } from '../../utils/hooks';
import * as style from '../../assets/styles/components/notification.json';

export const Notification = () => {
  const dispatch = useAppDispatch();
  const notification = useAppSelector((state) => {
    return state.notification;
  });

  const colors = getColor(notification.type);

  const closeNotification = () => {
    dispatch(resetNotification());
  };

  if (notification.notification === '') {
    return;
  } else {
    return (
      <div className={`${style.def.component} ${colors.bg}`}>
        <p
          className={`${colors.text} ${style.def.text} ${style.md.text} ${style.xl.text}`}
        >
          <span
            className={`${style.def.type} ${style.md.type} ${style.xl.type} ${colors.type}`}
          >
            {notification.type}
          </span>
          : {notification.notification}
        </p>
        <button
          className={`${style.def.button} ${style.md.button} ${style.xl.button} ${colors.type}`}
          onClick={closeNotification}
        >
          X
        </button>
      </div>
    );
  }
};

const getColor = (type: string) => {
  switch (type) {
    case 'success':
      return {
        bg: 'bg-green-100',
        type: 'text-green-800',
        text: 'text-green-700'
      };
    case 'error':
      return {
        bg: 'bg-red-100',
        type: 'text-red-800',
        text: 'text-red-700'
      };
    case 'info':
      return {
        bg: 'bg-blue-100',
        type: 'text-blue-800',
        text: 'text-blue-700'
      };
    default:
      return {
        bg: 'bg-white',
        type: 'text-black',
        text: 'text-black'
      };
  }
};
