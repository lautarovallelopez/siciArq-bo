import React from 'react';
import { useDispatch } from 'react-redux';
import action from 'store/diccionario-linguistico/actions';

const DiccionarioLinguistico = () => {
  const dispatch = useDispatch();
  const requestDiccionarios = dispatch(action.diccionarioLinguisticoFetchRequest(1));
  return <div>diccionarioLinguistico</div>;
};

export default DiccionarioLinguistico;
