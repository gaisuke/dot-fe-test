/* eslint-disable react/react-in-jsx-scope */
/* eslint-disable react/jsx-filename-extension */
/* eslint-disable consistent-return */
/* eslint-disable no-empty */
/* eslint-disable no-return-assign */
import { useRef, useEffect } from 'react';
import {
  connect, shallowEqual, useDispatch, useSelector,
} from 'react-redux';
import { useNavigate } from 'react-router-dom';
import * as acRedux from './ReduxApp/Redux';
import { GetProvince } from './ReduxApp/CRUD';
import CekOngkir from './CekOngkir';

const mapState = (state) => ({ data: state.data });
const con = connect(mapState, acRedux.actions);

// this was being called in route
function CekTarif() {
  const token = useSelector(({ auth }) => auth?.auth?.token, shallowEqual);
  const didRequest = useRef(false);
  const dispatch = useDispatch();
  const nav = useNavigate();

  useEffect(() => {
    const requestProvince = async () => {
      try {
        if (!didRequest.current) {
          const datas = await GetProvince();
          dispatch(acRedux.actions.acProvince(datas));
        }
      } catch (error) {
        if (!didRequest.current) {
          console.log('error');
        }
      } finally {
      }
      return () => (didRequest.current = true);
    };

    console.log({ token });
    if (token !== '' && token !== undefined) {
      requestProvince();
    } else {
      // dispatch(conAuth.logout(token))
      nav('/login', { replace: true });
      return 'token tidak valid';
    }
  }, []);

  return <CekOngkir />;
}

export default con(CekTarif);
