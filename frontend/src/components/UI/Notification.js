import classes from './Notification.module.css';

const Notification = (props) => {
  let newClass = '';

  if (props.status === 'error') {
    newClass = classes.error;
  }
  if (props.status === 'success') {
    newClass = classes.success;
  }

  const cssClasses = `${classes.notification} ${newClass}`;

  return (
    <section className={cssClasses}>
      <h2>{props.title}</h2>
      <p>{props.message}</p>
    </section>
  );
};

export default Notification;