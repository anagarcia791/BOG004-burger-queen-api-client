// IMPORTACION HOOKS Y OTROS
import { useState } from 'react';
import {
  deleteUserPetition,
  updateUserPetition,
} from '../../../api/petitionsFetch.js';

// COMPONENTE LISTA COLABORADORES  // value={this.state.value} onChange={this.handleChange}
export const EmployeeList = ({ users, token }) => {
  // hook para mostrar u ocultar btn de guardar edicion
  const [showBtn, setShowBtn] = useState(false);

  // funcion para mostrar btn de guardar edicion
  const showSaveButton = () => {
    setShowBtn(true);
  };

  // hook para capturar id de colaborador a actualizar
  const [editingId, setEditingId] = useState(false);

  // funcion para setear id de colaborador a actualizar
  const editemployeeEmail = (idToChange) => {
    setEditingId(idToChange);
    showSaveButton();
  };

  // hook para capturar cambio de email colaborador
  const [employeeEmail, setEmployeeEmail] = useState('');

  // funcion para setear y guardar cambio de email colaborador
  const employeeEmailChange = ({ target }) => {
    setEmployeeEmail(target.value);
  };

  // funcion para ejecutar peticion de actualizacion
  const updateEmail = (uId, usPassword, usRoles) => {
    const userObj = {
      email: employeeEmail,
      password: usPassword,
      roles: usRoles,
      id: uId,
    };
    updateUserPetition(uId, token, userObj)
      .then(() => {
        setShowBtn(false);
        setEditingId(true);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return users.map((user) => (
    <section key={user.id.toString()} className='employee-list-general'>
      <p data-testid='employee-id'>
        <strong>id:</strong>
        {user.id}.
      </p>
      <label>
        <strong>Correo: </strong>
      </label>
      <input
        type='text'
        autoComplete='off'
        defaultValue={user.email}
        readOnly={editingId !== user.id}
        onChange={(e) => employeeEmailChange(e)}
        data-testid={user.id.toString() + '-emailSaved'}
      ></input>
      <label>
        <strong>Rol: </strong>
        {Object.keys(user.roles)[0]}
      </label>
      <div>
        <button
          data-testid={user.id.toString() + '-delete'}
          onClick={() => deleteUserPetition(user.id, token)}
        >
          <i className='fa-regular fa-trash-can'></i>
        </button>
        <button
          data-testid={user.id.toString() + '-edit'}
          onClick={() => editemployeeEmail(user.id)}
        >
          <i className='fa-solid fa-pencil'></i>
        </button>
        {showBtn && editingId === user.id 
          ? (
              <button
                data-testid={user.id.toString() + '-save'}
                onClick={() => updateEmail(user.id, user.password, user.roles)}
              >
                <i class='fa-solid fa-floppy-disk'></i>
              </button>
            ) 
          : (
              ''
            )
        }
      </div>
    </section>
  ));
};
