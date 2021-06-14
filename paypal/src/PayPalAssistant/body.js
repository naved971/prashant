import './style.css';
import ReactHtmlParser from 'react-html-parser';

function PayPalAssistantBody(props) {
  const { body = {} } = props

  return (<>
    <hr />

    <div >

      <div> {body.title} </div>
      <div> {ReactHtmlParser(body.subTitle)} </div>

      <ul  className="points">
        <li> {body.point1["1"]}</li>
        <li> {body.point1["2"]}</li>
      </ul>

      <div> {body.title2} </div>

      <ul className="points">
        <li> {ReactHtmlParser(body.point2["1"])}</li>
        <li> {ReactHtmlParser(body.point2["2"])}</li>
      </ul>

    </div>
  </>
  );
}

export default PayPalAssistantBody;
