import { useEffect } from 'react';

export default function Alert({ alert: { type, msg }, setAlert, alert }) {
  useEffect(() => {
    const timeout = setTimeout(() => {
      setAlert({
        show: false,
        type: '',
        msg: '',
      });
    }, 3000);
    return () => clearTimeout(timeout);
  }, [alert]);

  return <p className={`alert alert-${type}`}>{msg}</p>;
}
