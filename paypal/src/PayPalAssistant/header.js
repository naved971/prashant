import './style.css';
import Button from 'react-bootstrap/Button'
function PayPalAssistantHeader(props) {
  const { header = {} } = props
  return (
    <div className="header-container">
      <div className="header-title">{header.title} </div>
      <div className="header-subTitle">{header.subTitle} </div>
      <div>
        <Button variant="primary">{header.buttons.button1}</Button>{' '}
      </div>
      <div>

        <Button variant="outline-primary">{header.buttons.button2}</Button>{' '}
      </div>
    </div>
  );
}

export default PayPalAssistantHeader;
