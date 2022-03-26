/* eslint-disable react/prop-types */
/* eslint-disable react/no-array-index-key */
/* eslint-disable react/jsx-filename-extension */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/react-in-jsx-scope */
import { Form } from 'react-bootstrap';

function SelectCity(props) {
  return (
    <Form.Select aria-label="Default select example" className="mt-2" onChange={(e) => props.eventHandler(e.target.value)} defaultValue="default">
      <option readOnly value="default">Pilih Kota</option>
      {props.data?.map((item, key) => (
        <option value={item.city_id} key={`city-${key}`}>
          {item.type}
          {' '}
          {item.city_name}
        </option>
      ))}
    </Form.Select>
  );
}

export default SelectCity;
